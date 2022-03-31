/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    domains: ['ipfs.infura.io', 'metadata.ens.domains']
  }
}
