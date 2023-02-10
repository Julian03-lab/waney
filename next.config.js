/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'graph.facebook.com']
  }
}

module.exports = nextConfig
