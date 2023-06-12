/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV !== 'development'

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
      },
    experimental: {
        appDir: false,
    },
    basePath: isProd ? '/easyeigen' : '',
    assetPrefix: './',
    webpack: function (config, options) {
        if (!options.isServer) {
          config.resolve.fallback.fs = false;
        }
        config.experiments = { asyncWebAssembly: true, layers: true };
        return config;
      },
}

module.exports = nextConfig
