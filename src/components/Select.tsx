import type { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

import type { Tag } from '../lib/swr/fetcher';
import { fetcher } from '../lib/swr/fetcher';
import { setActiveTag } from '../redux/slices/tags.slice';

function Select(): JSX.Element {
  const { data } = useSWR<Tag[]>('/tags', fetcher);
  const dispatch = useDispatch();

  return (
    <select
      className='form-select flex
      appearance-none
      rounded
      border
      border-solid
      border-gray-300
      bg-white
      p-3
      text-sm
      text-gray-700
      transition-all
      duration-500
      ease-in-out
      focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
      aria-label='Default select example'
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        dispatch(setActiveTag(e.target.value))
      }
      defaultValue=''
    >
      <option value=''>All</option>
      {data
        ? data
            .filter((value) => value.quoteCount > 0)
            .map((value) => {
              const name = value.name.split('-');
              const capitalizeName = name
                .map((value) => {
                  return (
                    value.slice(0, 1).toUpperCase() +
                    value.slice(1).toLowerCase()
                  );
                })
                .join(' ');

              return (
                <option key={value.name} value={value.name}>
                  {capitalizeName} ({value.quoteCount})
                </option>
              );
            })
        : null}
    </select>
  );
}

export default Select;
