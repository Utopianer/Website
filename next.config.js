/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['cloudflare-ipfs.com', 'metadata.ens.domains']
  }
}
