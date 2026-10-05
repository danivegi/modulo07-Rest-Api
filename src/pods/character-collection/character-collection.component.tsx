import * as React from 'react';
import Button from '@mui/material/Button';
import { HotelEntityVm } from './character-collection.vm';
import { HotelCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  hotelCollection: HotelEntityVm[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { hotelCollection, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>

      <ul className={classes.list}>
        {hotelCollection.map((hotel) => (
          <li key={hotel.id}>
            <HotelCard hotel={hotel} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
