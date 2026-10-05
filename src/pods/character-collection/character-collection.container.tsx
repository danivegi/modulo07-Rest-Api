import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, totalPages, isLoading, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const name = searchParams.get('name') ?? '';

  React.useEffect(() => {
    loadCharacterCollection(page, name);
  }, [page, name]);

  const handleSelect = (id: string) => navigate(linkRoutes.character(id));

  const handlePageChange = (newPage: number) => {
    setSearchParams((params) => {
      params.set('page', newPage.toString());
      return params;
    });
    window.scrollTo(0, 0);
  };

  const handleSearch = (newName: string) =>
    setSearchParams(newName ? { name: newName } : {});

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      page={page}
      totalPages={totalPages}
      name={name}
      isLoading={isLoading}
      onSelect={handleSelect}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};