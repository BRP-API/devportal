import createMDX from '@next/mdx'

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.mdx?$/,
});

// Merge MDX config with Next.js config
export default withMDX({
    pageExtensions: ['js', 'cjs', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/devportal',
    // Other Next.js configurations
})