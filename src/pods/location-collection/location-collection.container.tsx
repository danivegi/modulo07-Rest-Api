import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { mapToCollection } from '#common/mappers';
import { getLocationCollection } from './api';
import { LocationEntityVm } from './location-collection.vm';
import { mapFromApiToVm } from './location-collection.mapper';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  React.useEffect(() => {
    getLocationCollection(page).then(({ info, results }) => {
      setLocationCollection(mapToCollection(results, mapFromApiToVm));
      setTotalPages(info.pages);
    });
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo(0, 0);
  };

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      page={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};