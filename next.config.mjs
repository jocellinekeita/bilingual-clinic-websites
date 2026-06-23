/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bilingual-clinic-websites',  // ← あなたのリポジトリ名に変更
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig