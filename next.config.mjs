// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'lh3.googleusercontent.com',
//       },
//     ],
//   },
//   //추가한 내용
//   reactStrictMode: false,
//   async rewrites() {
//     return [
//       {
//         source: '/:path*',
//         destination: 'https://openapi.naver.com/:path*',
//       },
//     ]
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'shopping-phinf.pstatic.net',
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
