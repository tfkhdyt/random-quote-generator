import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <div className='mt-12 flex justify-center font-thin'>
      <p>A fork by</p>
      <Link href='https://tfkhdyt.my.id'>
        <a
          className='ml-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text font-bold text-transparent'
          target='_blank'
        >
          ./tfkhdyt
        </a>
      </Link>
    </div>
  );
}
