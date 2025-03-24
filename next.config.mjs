import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.mdx?$/,

    options: {
        remarkPlugins: [
            remarkGfm // Add GFM (GitHub Flavored Markdown) support
        ],
        rehypePlugins: [
            rehypeHighlight // Add syntax highlighting to code blocks
        ],
    },
});

// Merge MDX config with Next.js config
export default withMDX({
    pageExtensions: ['js', 'cjs', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/devportal' : '',
    // Other Next.js configurations
})