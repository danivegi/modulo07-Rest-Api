import axios from 'axios';
import { baseApiUrl } from '#core/api';
import { CharacterCollectionApi } from './character-collection.api-model';

const emptyCollection: CharacterCollectionApi = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const getCharacterCollection = async (
  page: number,
  name: string
): Promise<CharacterCollectionApi> => {
  try {
    const { data } = await axios.get<CharacterCollectionApi>(
      `${baseApiUrl}/character`,
      { params: { page, name: name || undefined } }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return emptyCollection;
    }
    throw error;
  }
};