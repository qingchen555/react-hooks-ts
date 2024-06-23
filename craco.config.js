const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const CracoLess = require('craco-less')

module.exports = {
  plugins: [{ plugin: CracoLess }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
