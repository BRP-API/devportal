import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkConfigInjector from './utils/index.mjs';
import rehypePrism from 'rehype-prism-plus';
import rehypeExternalLinks from 'rehype-external-links';

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            remarkConfigInjector, // Inject _config.yml values into markdown content
            remarkGfm // Add support for GFM (GitHub Flavored Markdown)
        ],
        rehypePlugins: [
            rehypePrism, // Add syntax highlighting for code blocks,
            [rehypeExternalLinks, {
                target: '_blank',
                rel: 'noopener noreferrer',
            }], // Open external links in a new tab
        ],
    },
});

export default withMDX({
    pageExtensions: ['js', 'cjs', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
})