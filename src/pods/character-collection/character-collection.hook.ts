import * as React from 'react';
import { mapToCollection } from '#common/mappers';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const loadCharacterCollection = (page: number, name: string) => {
    setIsLoading(true);
    return getCharacterCollection(page, name).then(({ info, results }) => {
      setCharacterCollection(mapToCollection(results, mapFromApiToVm));
      setTotalPages(info.pages);
      setIsLoading(false);
    });
  };

  return { characterCollection, totalPages, isLoading, loadCharacterCollection };
};