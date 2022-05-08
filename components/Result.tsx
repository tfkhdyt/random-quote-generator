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
      <div className='font-light leading-relaxed italic'>
        {props.data ? (
          props.data?.content
        ) : (
          <div className='bg-slate-200 animate-pulse h-4 w-32 rounded'></div>
        )}
      </div>
      <span className='text-sm my-2 block font-bold tracking-tight'>
        {props.data ? (
          `~ ${props.data?.author}`
        ) : (
          <div className='bg-slate-400 animate-pulse h-4 w-16 rounded'></div>
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
