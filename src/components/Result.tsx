import { motion } from 'framer-motion';
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
    fetcher
  );

  const variants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
  };

  return (
    <div className='p-4'>
      <div className='py-6'>
        <motion.div
          variants={variants}
          initial='initial'
          animate='in'
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.5,
          }}
          key={data?.content}
          className='italic leading-relaxed'
        >
          {data ? (
            data?.content
          ) : (
            <div className='space-y-3'>
              <div className='h-4 w-full animate-pulse rounded bg-slate-200' />
              <div className='h-4 w-5/6 animate-pulse rounded bg-slate-200' />
              <div className='h-4 w-3/6 animate-pulse rounded bg-slate-200' />
            </div>
          )}
        </motion.div>
        <motion.span
          variants={variants}
          initial='initial'
          animate='in'
          key={data?.author}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.5,
          }}
          className='my-2 block text-sm font-bold tracking-tight'
        >
          {data ? (
            `~ ${data?.author}`
          ) : (
            <div className='h-4 w-16 animate-pulse rounded bg-slate-400' />
          )}
        </motion.span>
      </div>
      <div className='flex items-stretch space-x-2'>
        <Button text='Generate' mutate={mutate} />
        <Select />
      </div>
    </div>
  );
}

export default Result;
