import type { IData } from '../../components/Result';
import { apiClient } from '../axios/client';

export const fetcher = async (url: string): Promise<IData> => {
  const { data } = await apiClient.get(url).catch((error) => {
    throw error;
  });
  return data;
};
