import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <div className='mt-12 flex justify-center font-thin'>
      <p>A fork by</p>
      <Link href='https://tfkhdyt.my.id'>
        <a
          className='ml-1 w-fit bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text font-bold text-transparent'
          target='_blank'
        >
          ./tfkhdyt
        </a>
      </Link>
    </div>
  );
}
