/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 💡 静的HTMLとしてエクスポートする設定
  images: {
    unoptimized: true, // 💡 GitHub Pagesで画像を表示させるために必須
  },
};

export default nextConfig;