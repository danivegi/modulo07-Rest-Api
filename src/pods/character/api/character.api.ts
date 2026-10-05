import axios from 'axios';
import { baseApiUrl } from '#core/api';
import { CharacterApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await axios.get<CharacterApi>(
    `${baseApiUrl}/character/${id}`
  );
  return data;
};

export const updateBestSentence = async (
  id: string,
  bestSentence: string
): Promise<void> => {
  await axios.put(`${baseApiUrl}/character/${id}`, { bestSentence });
};