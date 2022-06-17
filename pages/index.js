import Head from 'next/head';
import Image from 'next/image';
import Body from '../components/Body';

export default function Home() {
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>Frontend Dev Test</title>
        <meta name="description" content="Marcin from Angellist frontend assignment" />
      </Head>

      <body className='flex-auto overflow-y-scroll bg-gradient-to-r from-black to-purple'>
        <Body />
      </body>

      <footer className="bottom-0 py-20 text-center bg-black">
          <Image className='gray' src='/assets/logo.svg' width={200} height={70} alt='Frontier Logo' />
      </footer>
    </div>
  )
}
