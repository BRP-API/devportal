import Layout from './layout'
import '@/styles/globals.css'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="BRP API Developer Portal" />
      <meta http-equiv="refresh" content="0; url=https://brp-api.github.io/devportal-poc/brp-api/overview" />
      <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
      <title>BRP API Developer Portal</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}