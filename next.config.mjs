/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bilingual-clinic-websites',  // ← あなたのリポジトリ名に変更
  images: {
    unoptimized: true,
  },
}

export default nextConfig  // ← module.exports ではなく export default