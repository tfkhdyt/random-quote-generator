import type { KeyedMutator } from 'swr/dist/types';

import Button from './Button';

export type IData = {
  content: string;
  author: string;
};

type ResultProps = {
  data?: IData | null;
  mutate: KeyedMutator<IData>;
};

function Result(props: ResultProps): JSX.Element {
  return (
    <div className='p-4'>
      <div className='italic leading-relaxed'>
        {props.data ? (
          props.data?.content
        ) : (
          <div className='h-4 w-32 animate-pulse rounded bg-slate-200' />
        )}
      </div>
      <span className='my-2 block text-sm font-bold tracking-tight'>
        {props.data ? (
          `~ ${props.data?.author}`
        ) : (
          <div className='h-4 w-16 animate-pulse rounded bg-slate-400' />
        )}
      </span>
      <Button text='Generate' mutate={props.mutate} />
    </div>
  );
}

export default Result;
