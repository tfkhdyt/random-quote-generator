import { useSelector } from 'react-redux';
import useSWRImmutable from 'swr/immutable';

import { fetcher } from '../lib/swr/fetcher';
import type { RootState } from '../redux/store';
import Button from './Button';
import Select from './Select';

export type IData = {
  content: string;
  author: string;
};

function Result(): JSX.Element {
  const { activeTag } = useSelector((state: RootState) => state.tags);
  const { data, mutate } = useSWRImmutable<IData>(
    `/random${activeTag === '' ? '' : `?tags=${activeTag}`}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return (
    <div className='p-4'>
      <div className='italic leading-relaxed'>
        {data ? (
          data?.content
        ) : (
          <div className='space-y-3'>
            <div className='h-4 w-full animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-5/6 animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-3/6 animate-pulse rounded bg-slate-200' />
          </div>
        )}
      </div>
      <span className='my-2 block text-sm font-bold tracking-tight'>
        {data ? (
          `~ ${data?.author}`
        ) : (
          <div className='h-4 w-16 animate-pulse rounded bg-slate-400' />
        )}
      </span>
      <div className='flex items-stretch space-x-2 pt-2'>
        <Button text='Generate' mutate={mutate} />
        <Select />
      </div>
    </div>
  );
}

export default Result;
