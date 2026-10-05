import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteHotel } from './api';
import { useHotelCollection } from './character-collection.hook';
import { HotelCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { hotelCollection, loadHotelCollection } = useHotelCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  const handleEdit = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  const handleDelete = async (id: string) => {
    await deleteHotel(id);
    loadHotelCollection();
  };

  return (
    <HotelCollectionComponent
      hotelCollection={hotelCollection}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
