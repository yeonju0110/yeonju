/** @type {import('next').NextConfig} */

const isBuildCommand = process.env.npm_lifecycle_event === 'build'
const isLocal = process.env.IM === 'local'
const repository = 'yeonju'

const nextConfig = {
  output: isBuildCommand ? 'export' : undefined,
  assetPrefix: !isLocal ? `/${repository}/` : '',
  trailingSlash: true,
}

module.exports = nextConfig
