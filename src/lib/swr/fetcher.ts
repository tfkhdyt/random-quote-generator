// import type { IData } from '../../components/Result';
import { apiClient } from '../axios/client';

export type Tag = {
  name: string;
  quoteCount: number;
};

export const fetcher = async <T>(url: string): Promise<T> => {
  const { data } = await apiClient.get(url).catch((error) => {
    throw error;
  });
  return data;
};
