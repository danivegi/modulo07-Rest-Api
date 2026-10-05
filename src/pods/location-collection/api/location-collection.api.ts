import axios from 'axios';
import { baseApiUrl } from '#core/api';
import { LocationCollectionApi } from './location-collection.api-model';

export const getLocationCollection = async (
  page: number
): Promise<LocationCollectionApi> => {
  const { data } = await axios.get<LocationCollectionApi>(
    `${baseApiUrl}/location`,
    { params: { page } }
  );
  return data;
};