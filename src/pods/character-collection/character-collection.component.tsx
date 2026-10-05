import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import { CharacterSearch } from './components/character-search.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;
  totalPages: number;
  name: string;
  isLoading: boolean;
  onSelect: (id: string) => void;
  onPageChange: (page: number) => void;
  onSearch: (name: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    page,
    totalPages,
    name,
    isLoading,
    onSelect,
    onPageChange,
    onSearch,
  } = props;

  return (
    <div className={classes.root}>
      <CharacterSearch initialName={name} onSearch={onSearch} />

      {!isLoading && characterCollection.length === 0 && (
        <Typography>No se han encontrado personajes.</Typography>
      )}

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onSelect={onSelect} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={classes.pagination}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => onPageChange(value)}
            color="primary"
          />
        </div>
      )}
    </div>
  );
};