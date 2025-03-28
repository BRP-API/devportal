import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import remarkConfigInjector from './utils/index.mjs';

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            remarkConfigInjector, // Inject _config.yml values into markdown content
            remarkGfm // Add support for GFM (GitHub Flavored Markdown)
        ],
        rehypePlugins: [
            rehypeHighlight // Add syntax highlighting to code blocks
        ],
    },
});

export default withMDX({
    pageExtensions: ['js', 'cjs', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/devportal' : '',
})