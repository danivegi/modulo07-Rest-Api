import axios from 'axios';
import { baseApiUrl } from '#core/api';
import { CharacterApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await axios.get<CharacterApi>(
    `${baseApiUrl}/character/${id}`
  );
  return data;
};