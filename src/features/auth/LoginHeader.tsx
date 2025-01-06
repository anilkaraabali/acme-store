import { LanguageSwitch } from '@/components/language-switch';
import { Logo } from '@/components/logo';
import { Link } from '@nextui-org/react';
import NextLink from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LoginHeader: FC = () => {
  const t = useTranslations('Auth');

  return (
    <header className='px-5'>
      <div className='flex h-14 items-center justify-between gap-8'>
        <NextLink
          aria-label='Go to homepage'
          className='flex items-center justify-start gap-1'
          color='foreground'
          href='/'
          title='Go to homepage'
        >
          <Logo />
          <p className='font-bold text-inherit'>ACME</p>
        </NextLink>
        <div className='flex items-center gap-8'>
          <div>
            <p className='flex gap-1 text-sm text-gray-600 dark:text-gray-300'>
              <span className='hidden lg:flex'>
                {t('login.questionPrompt')}
              </span>
              <Link
                as={NextLink}
                className='text-nowrap'
                color='foreground'
                href='#'
                size='sm'
                underline='always'
              >
                {t('login.supportContact')}
              </Link>
            </p>
          </div>
          <LanguageSwitch
            triggerButtonProps={{
              size: 'sm',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export { LoginHeader };
