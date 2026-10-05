import axios from 'axios';
import { baseApiUrl } from '#core/api';
import { CharacterCollectionApi } from './character-collection.api-model';

export const getCharacterCollection = async (
  page: number
): Promise<CharacterCollectionApi> => {
  const { data } = await axios.get<CharacterCollectionApi>(
    `${baseApiUrl}/character`,
    { params: { page } }
  );
  return data;
};