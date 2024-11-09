/** @type {import('next').NextConfig} */
const path = require('path')
const repository = 'yeonju'
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = phase => {
  const common = {
    output: phase === PHASE_PRODUCTION_BUILD ? 'export' : undefined,
    assetPrefix:
      phase === PHASE_PRODUCTION_BUILD ? `/${repository}/` : undefined,
    trailingSlash: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@import "@/styles/abstracts"; @import "@/styles/utils";`,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  }

  return { ...common }
}
