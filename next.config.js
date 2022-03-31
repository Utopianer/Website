/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['ipfs.infura.io', 'metadata.ens.domains']
  }
}
