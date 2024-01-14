/** @type {import('next').NextConfig} */
const path = require('path')
const isBuildCommand = process.env.npm_lifecycle_event === 'build'
const isLocal = process.env.IM === 'local'
const repository = 'yeonju'

const nextConfig = {
  output: isBuildCommand ? 'export' : undefined,
  assetPrefix: !isLocal ? `/${repository}/` : '',
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/abstracts/variables";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
