/** @type {import('next').NextConfig} */

const isBuildCommand = process.env.npm_lifecycle_event === 'build'
const debug = process.env.NODE_ENV !== 'production'
const repository = 'https://yeonju0110.github.io/yeonju'

const nextConfig = {
  basePath: '/yeonju',
  output: isBuildCommand ? 'export' : undefined,
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
}

module.exports = nextConfig
