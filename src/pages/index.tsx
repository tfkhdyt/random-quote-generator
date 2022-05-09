import Head from 'next/head';

import Card from '../components/Card';
import Footer from '../components/Footer';
import Result from '../components/Result';

function Home(): JSX.Element {
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
          <Result />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
