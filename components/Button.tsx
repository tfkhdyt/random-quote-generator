import { KeyedMutator } from 'swr/dist/types';
import { IData } from './Result';

interface ButtonProps {
  bgColor: string;
  mutate: KeyedMutator<IData>;
  textColor: string;
  text: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`relative inline-block px-4 py-3 overflow-hidden border border-${props.bgColor}-600 group focus:outline-none focus:ring mt-1 rounded`}
      onClick={() => props.mutate()}
    >
      <span
        className={`absolute inset-y-0 left-0 w-[2px] transition-all bg-${props.bgColor}-600 group-hover:w-full group-active:bg-${props.bgColor}-500`}
      ></span>

      <span
        className={`relative text-sm font-medium text-${props.bgColor}-600 transition-colors group-hover:text-${props.textColor}`}
      >
        {props.text}
      </span>
    </button>
  );
};

export default Button;
