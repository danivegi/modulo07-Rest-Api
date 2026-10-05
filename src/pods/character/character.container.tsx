import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .getCharacter(id)
      .then((apiCharacter) => setCharacter(mapCharacterFromApiToVm(apiCharacter)));
  }, [id]);

  const handleBack = () => navigate(linkRoutes.characterCollection);

  return character ? (
    <CharacterComponent character={character} onBack={handleBack} />
  ) : (
    <p>Cargando...</p>
  );
};