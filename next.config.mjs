import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
  images: {
    unoptimized: true,
  },
  basePath: "/personal-website-v2",
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true
  }
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withMDX(nextConfig)
