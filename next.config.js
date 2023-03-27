const withSvgr = require('next-svgr');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            publicPath: `/_next/static/images/`,
            outputPath: `${options.isServer ? '../' : ''}static/images/`,
          },
        },
      ],
      include: path.resolve(__dirname, 'path/to/folder/containing/svgs'),
    });

    return config;
  },
});

// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = nextConfig;
