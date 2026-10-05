import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, totalPages, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  React.useEffect(() => {
    loadCharacterCollection(page);
  }, [page]);

  const handleSelect = (id: string) => navigate(linkRoutes.character(id));

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo(0, 0);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      page={page}
      totalPages={totalPages}
      onSelect={handleSelect}
      onPageChange={handlePageChange}
    />
  );
};