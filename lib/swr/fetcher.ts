import { apiClient } from '../axios/client';

export const fetcher = async (url: string) => {
  const { data } = await apiClient.get(url).catch((err) => {
    throw err;
  });
  return data;
};
