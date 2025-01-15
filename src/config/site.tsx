import {
  LiaChartPieSolid,
  LiaCodeSolid,
  LiaFacebook,
  LiaFingerprintSolid,
  LiaGithub,
  LiaInstagram,
  LiaMousePointerSolid,
  LiaSyncSolid,
  LiaYoutube,
} from 'react-icons/lia';

type SiteConfig = typeof siteConfig;

const siteConfig = {
  footerItems: [
    {
      children: [
        {
          href: '#',
          translationKey: 'marketing',
        },
        {
          href: '#',
          translationKey: 'analytics',
        },
        {
          href: '#',
          translationKey: 'automation',
        },
        {
          href: '#',
          translationKey: 'commerce',
        },
        {
          href: '#',
          translationKey: 'insights',
        },
      ],
      translationKey: 'solutions',
    },
    {
      children: [
        {
          href: '#',
          translationKey: 'submitTicket',
        },
        {
          href: '#',
          translationKey: 'documentation',
        },
        {
          href: '#',
          translationKey: 'guides',
        },
      ],
      translationKey: 'support',
    },
    {
      children: [
        {
          href: '#',
          translationKey: 'about',
        },
        {
          href: '#',
          translationKey: 'blog',
        },
        {
          href: '#',
          translationKey: 'jobs',
        },
        {
          href: '#',
          translationKey: 'press',
        },
      ],
      translationKey: 'company',
    },
    {
      children: [
        {
          href: '#',
          translationKey: 'termsOfService',
        },
        {
          href: '#',
          translationKey: 'privacyPolicy',
        },
        {
          href: '#',
          translationKey: 'license',
        },
      ],
      translationKey: 'legal',
    },
  ],
  navItems: [
    {
      href: 'https://nextjs.org/showcase',
      title: 'Showcase',
    },
    {
      href: 'https://nextjs.org/docs',
      title: 'Docs',
    },
    {
      href: 'https://nextjs.org/blog',
      title: 'Blog',
    },
    {
      href: 'https://vercel.com/templates/next.js',
      title: 'Templates',
    },
    {
      href: 'https://vercel.com/contact/sales/nextjs?utm_source=next-site&utm_medium=navbar&utm_campaign=next_site_nav_enterprise',
      title: 'Enterprise',
    },
  ],
  navMenuItems: [
    {
      children: [
        {
          description: 'Get a better understanding of your traffic',
          href: '#',
          icon: LiaChartPieSolid,
          label: 'Analytics',
        },
        {
          description: 'Speak directly to your customers',
          href: '#',
          icon: LiaMousePointerSolid,
          label: 'Engagement',
        },
        {
          description: 'Your customers’ data will be safe and secure',
          href: '#',
          icon: LiaFingerprintSolid,
          label: 'Security',
        },
        {
          description: 'Connect with third-party tools',
          href: '#',
          icon: LiaCodeSolid,
          label: 'Integrations',
        },
        {
          description: 'Build strategic funnels that will convert',
          href: '#',
          icon: LiaSyncSolid,
          label: 'Automations',
        },
      ],
      href: '',
      label: 'Products',
    },
    {
      href: '/features',
      label: 'Features',
    },
    {
      href: '/marketplace',
      label: 'Marketplace',
    },
    {
      href: '/company',
      label: 'Company',
    },
  ],
  socialItems: [
    {
      href: '#',
      icon: LiaFacebook,
      title: 'Facebook',
    },
    {
      href: '#',
      icon: LiaInstagram,
      title: 'Instagram',
    },
    {
      href: '#',
      icon: LiaYoutube,
      title: 'Youtube',
    },
    {
      href: '#',
      icon: LiaGithub,
      title: 'GitHub',
    },
  ],
};

export type { SiteConfig };
export { siteConfig };
