/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 💡 静的HTMLとしてエクスポートする設定
  images: {
    unoptimized: true, // 💡 GitHub Pagesで画像を表示させるために必須
  },
  // 💡 【重要】GitHub Pagesの階層（リポジトリ名）を正しく認識させる設定を追加します
  basePath: '/bilingual-clinic-websites',
  assetPrefix: '/bilingual-clinic-websites',
};

export default nextConfig;