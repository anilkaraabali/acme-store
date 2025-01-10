import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const Hero: FC = () => {
  const t = useTranslations('Home.hero');

  return (
    <section className='py-12 lg:py-8' id='hero'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:gap-12'>
        <div className='flex w-full flex-col items-center justify-center gap-8 lg:order-2 lg:w-1/2 lg:items-start'>
          <div className='flex flex-col gap-8 text-center lg:text-left'>
            <h1 className='text-balance text-5xl tracking-tight lg:text-7xl'>
              {t('title')}
            </h1>
            <p
              className='text-pretty text-base lg:text-xl'
              dangerouslySetInnerHTML={{ __html: t.raw('description') }}
            />
          </div>
          <Button as={Link} color='primary' href='/signup'>
            {t('cta')}
          </Button>
        </div>
        <div className='w-full lg:w-1/2'>
          <Image
            alt='Hero Image'
            className='w-full'
            height='1258'
            priority
            src='/images/poll-maker-hero.webp'
            width='1256'
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
