import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;
  totalPages: number;
  onSelect: (id: string) => void;
  onPageChange: (page: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, page, totalPages, onSelect, onPageChange } =
    props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onSelect={onSelect} />
          </li>
        ))}
      </ul>
      <div className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          color="primary"
        />
      </div>
    </div>
  );
};