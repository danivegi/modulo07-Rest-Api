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

  const loadCharacterCollection = (page: number) =>
    getCharacterCollection(page).then(({ info, results }) => {
      setCharacterCollection(mapToCollection(results, mapFromApiToVm));
      setTotalPages(info.pages);
    });

  return { characterCollection, totalPages, loadCharacterCollection };
};