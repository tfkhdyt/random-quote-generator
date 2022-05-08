import Head from 'next/head';
import useSWRImmutable from 'swr/immutable';

import Card from '../components/Card';
import Footer from '../components/Footer';
import type { IData } from '../components/Result';
import Result from '../components/Result';
import { fetcher } from '../lib/swr/fetcher';

function Home(): JSX.Element {
  const { data, error, mutate } = useSWRImmutable<IData>('/random', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // if (error) {console.error(error);}

  return (
    <>
      <Head>
        <title>Random Quote Generator</title>
        <meta name='description' content='Random Quote Generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid min-h-screen place-items-center font-body'>
        <div className='container relative max-w-md overflow-hidden px-5'>
          <Card
            title='Random Quote Generator'
            description='A web app that will generate a random quote for you, This web app was built using TypeScript. When the "Generate" button is clicked, then a new quote will appear.'
          />
          <Result
            data={
              error
                ? {
                    author: 'Author Fetching Error',
                    content: 'Quote Fetching Error',
                  }
                : data
                ? data
                : null
            }
            mutate={mutate}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
