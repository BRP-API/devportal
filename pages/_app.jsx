import Layout from './layout'
import '@/styles/globals.css'
import 'highlight.js/styles/default.css'; // default theme for code blocks
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}