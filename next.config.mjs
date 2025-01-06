import loaderUtils from 'loader-utils';
import path from 'path';

// eslint-disable-next-line max-params
const cssModuleLocalIdent = (context, _, exportName, options) => {
  const relativePath = path
    .relative(context.rootContext, context.resourcePath)
    .replace(/\\+/g, '/');
  const hash = loaderUtils.getHashDigest(
    Buffer.from(`filePath:${relativePath}#className:${exportName}`),
    'sha1',
    'base64',
    5
  );

  return loaderUtils
    .interpolateName(context, hash, options)
    .replace(/\.module_/, '_')
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(\d|--|-\d)/, '__$1');
};

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    locales: ['en'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: '/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    if (process.env.NODE_ENV === 'production') {
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader') &&
            moduleLoader.options.modules
          ) {
            moduleLoader.options.modules.getLocalIdent = cssModuleLocalIdent;
          }
        });
      });
    }

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        resourceQuery: /url/, // *.svg?url
        test: /\.svg$/i,
      },
      // Convert all other *.svg imports to React components
      {
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
