import axios from 'axios';
import { graphqlApiUrl } from './api.constants';

interface GraphqlResponse<T> {
  data: T;
  errors?: { message: string }[];
}

export const graphqlRequest = async <T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> => {
  const { data } = await axios.post<GraphqlResponse<T>>(graphqlApiUrl, {
    query,
    variables,
  });
  if (data.errors) throw new Error(data.errors[0].message);
  return data.data;
};