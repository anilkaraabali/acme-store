import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { LiaArrowRightSolid } from 'react-icons/lia';

const HomeHero: FC = () => {
  const t = useTranslations('Home.hero');

  return (
    <div className='relative isolate px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative flex items-center gap-1 rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-50/10 dark:hover:ring-gray-50/20'>
            {t('announce.title')}{' '}
            <Link
              anchorIcon={<LiaArrowRightSolid size={16} />}
              className='font-semibold'
              color='primary'
              href='#'
              showAnchorIcon
            >
              {t('announce.cta')}
            </Link>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl'>
            {t('title')}
          </h1>
          <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
            {t('description')}
          </p>
        </div>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button as={Link} color='primary' href='#'>
            {t('cta.primary')}
          </Button>
          <Link
            anchorIcon={<LiaArrowRightSolid size={16} />}
            color='foreground'
            href='#'
            showAnchorIcon
          >
            {t('cta.secondary')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export { HomeHero };
