import { graphqlRequest } from '#core/api';
import {
  CharacterCollectionApi,
  CharacterEntityApi,
} from './character-collection.api-model';

const query = `
  query {
    characters {
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { characters } = await graphqlRequest<CharacterCollectionApi>(query);
  return characters.results;
};