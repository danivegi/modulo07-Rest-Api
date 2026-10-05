import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { mapToCollection } from '#common/mappers';
import { getEpisodeCollection } from './api';
import { EpisodeEntityVm } from './episode-collection.vm';
import { mapFromApiToVm } from './episode-collection.mapper';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  React.useEffect(() => {
    getEpisodeCollection(page).then(({ info, results }) => {
      setEpisodeCollection(mapToCollection(results, mapFromApiToVm));
      setTotalPages(info.pages);
    });
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo(0, 0);
  };

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      page={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};