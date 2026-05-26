/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  images: { domains: ['github.com', 'avatars.githubusercontent.com'] },
}
module.exports = nextConfig
