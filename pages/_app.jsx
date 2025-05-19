import Layout from './layout'
import '@/styles/globals.css'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="BRP API Developer Portal" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>BRP API Developer Portal</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}