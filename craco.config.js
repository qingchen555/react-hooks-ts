const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const CracoLess = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
