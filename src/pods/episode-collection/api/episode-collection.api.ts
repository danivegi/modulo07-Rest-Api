import axios from 'axios';
import { baseApiUrl } from '#core/api';
import { EpisodeCollectionApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (
  page: number
): Promise<EpisodeCollectionApi> => {
  const { data } = await axios.get<EpisodeCollectionApi>(
    `${baseApiUrl}/episode`,
    { params: { page } }
  );
  return data;
};