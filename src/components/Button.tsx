import { KeyedMutator } from 'swr/dist/types';
import { IData } from './Result';

interface ButtonProps {
  mutate: KeyedMutator<IData>;
  text: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`relative inline-block overflow-hidden border px-4 py-3 border-blue-600 group mt-1 rounded focus:outline-none focus:ring`}
      onClick={() => props.mutate()}
    >
      <span
        className={`absolute inset-y-0 left-0 w-[2px] transition-all bg-blue-600 group-hover:w-full group-active:bg-blue-500`}
      ></span>

      <span
        className={`relative text-sm font-medium text-blue-600 transition-colors group-hover:text-white`}
      >
        {props.text}
      </span>
    </button>
  );
};

export default Button;
