import { NextSeoProps } from 'next-seo';

const seoConfig: NextSeoProps = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    description:
      'High-performance ecommerce store built with Next.js, Vercel, and Shopify',
    images: [
      {
        height: 630,
        type: 'image/png',
        url: 'https://commerce-shopify-l1tiqh7el-vercel-solutions-vtest314.vercel.app/opengraph-image?376fa9d8052ebb8e',
        width: 1200,
      },
    ],
    locale: 'en_IE',
    site_name: '@vercel',
    type: 'website',
    url: 'https://www.url.ie/',
  },
  title: 'Acme Store',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@handle',
    site: 'https://nextjs.org/commerce',
  },
};

export { seoConfig };
