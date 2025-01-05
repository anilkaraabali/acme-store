import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';

const HomeStats: FC = () => {
  const t = useTranslations('Home.stats');

  const stats = useMemo(
    () => [
      { title: t('creators.title'), value: t('creators.value') },
      { title: t('platformFee.title'), value: t('platformFee.value') },
      { title: t('uptime.title'), value: t('uptime.value') },
      { title: t('payouts.title'), value: t('payouts.value') },
    ],
    []
  );

  return (
    <section className='relative my-12 lg:my-24' id='stats'>
      <Image
        alt='Home Stats'
        className='h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2'
        height={1901}
        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80'
        width={2851}
      />

      <div className='mx-auto grid max-w-7xl lg:grid-cols-2'>
        <div className='px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl lg:mr-0 lg:max-w-lg'>
            <h2 className='text-base font-semibold text-primary'>
              {t('title')}
            </h2>
            <p className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50'>
              {t('subtitle')}
            </p>
            <p className='mt-6 text-lg text-gray-600 dark:text-gray-400'>
              {t('description')}
            </p>
            <dl className='mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2'>
              {stats.map((stat, index) => (
                <div
                  className='flex flex-col gap-y-3 border-l border-gray-900 pl-6 dark:border-gray-50'
                  key={index}
                >
                  <dt className='text-sm text-gray-600 dark:text-gray-400'>
                    {stat.title}
                  </dt>
                  <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeStats };
