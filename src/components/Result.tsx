import { KeyedMutator } from 'swr/dist/types';
import Button from './Button';

export interface IData {
  content: string;
  author: string;
}

interface ResultProps {
  data?: IData | null;
  mutate: KeyedMutator<IData>;
}

const Result = (props: ResultProps) => {
  return (
    <div className='p-4'>
      <div className='font-light italic leading-relaxed'>
        {props.data ? (
          props.data?.content
        ) : (
          <div className='h-4 w-32 animate-pulse rounded bg-slate-200'></div>
        )}
      </div>
      <span className='my-2 block text-sm font-bold tracking-tight'>
        {props.data ? (
          `~ ${props.data?.author}`
        ) : (
          <div className='h-4 w-16 animate-pulse rounded bg-slate-400'></div>
        )}
      </span>
      <Button
        bgColor='blue'
        textColor='white'
        text='Generate'
        mutate={props.mutate}
      />
    </div>
  );
};

export default Result;
