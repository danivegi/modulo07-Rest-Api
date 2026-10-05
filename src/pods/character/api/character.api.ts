import { graphqlRequest } from '#core/api';
import { CharacterApi } from './character.api-model';

const query = `
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      origin { name }
      location { name }
      episode { id }
    }
  }
`;

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { character } = await graphqlRequest<{ character: CharacterApi }>(
    query,
    { id }
  );
  return character;
};