import axios from 'axios';
import { baseApiUrl } from '#core/api';
import {
  CharacterCollectionApi,
  CharacterEntityApi,
} from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await axios.get<CharacterCollectionApi>(
    `${baseApiUrl}/character`
  );
  return data.results;
};