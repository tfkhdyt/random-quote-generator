import type { KeyedMutator } from 'swr/dist/types';

import type { IData } from './Result';

type ButtonProps = {
  mutate: KeyedMutator<IData>;
  text: string;
};

function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      type='button'
      className='group relative inline-block overflow-hidden rounded border border-blue-600 px-4 py-3 focus:outline-none focus:ring'
      onClick={() => props.mutate()}
    >
      <span className='absolute inset-y-0 left-0 w-[2px] bg-blue-600 transition-all group-hover:w-full group-active:bg-blue-500' />

      <span className='relative text-sm font-medium text-blue-600 transition-colors group-hover:text-white'>
        {props.text}
      </span>
    </button>
  );
}

export default Button;
