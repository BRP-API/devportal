import Layout from './layout'
import '@/styles/globals.css'
import 'highlight.js/styles/default.css'; // default theme for code blocks
import hljs from 'highlight.js/lib/core';
import gherkin from 'highlight.js/lib/languages/gherkin';

// add hljs support for gherkin syntax
hljs.registerLanguage('gherkin', gherkin);

import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hljs.highlightAll(); // Initialize syntax highlighting
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}