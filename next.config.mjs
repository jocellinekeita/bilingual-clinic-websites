/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/bilingual-clinic-websites' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/bilingual-clinic-websites' : '',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig