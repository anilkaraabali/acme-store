import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import NextLink from 'next/link';
import { FC } from 'react';

interface FeaturedSectionProps {
  caption: string;
  cta: string;
  description: string;
  reverse?: boolean;
  title: string;
  videoSrc: string;
}

const FeaturedSection: FC<FeaturedSectionProps> = ({
  caption,
  cta,
  description,
  reverse = false,
  title,
  videoSrc,
}) => (
  <section className='py-20' id='surveys'>
    <div className='container flex flex-col items-center justify-center gap-8 text-center lg:hidden'>
      <div className='text-sm text-primary'>{caption.toUpperCase()}</div>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-3xl'>{title}</h2>
        <video
          autoPlay
          className='w-full py-6'
          controlsList='nodownload'
          loop
          muted
          playsInline
          src={videoSrc}
        />
        <p className='text-base text-default-500'>{description}</p>
      </div>
      <Button as={NextLink} color='primary' href='/signup' size='lg'>
        {cta}
      </Button>
    </div>

    <div className='container hidden gap-8 lg:grid lg:grid-flow-dense lg:auto-rows-auto lg:grid-cols-12 lg:place-items-center'>
      <div
        className={clsx('flex flex-col items-start gap-8', {
          'lg:col-start-[-2] lg:col-end-[-7] lg:px-8 xl:col-end-[-6]': reverse,
          'lg:col-start-2 lg:col-end-7 lg:pr-8 xl:col-start-1 xl:col-end-6':
            !reverse,
        })}
      >
        <div className='text-sm text-primary'>{caption.toUpperCase()}</div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl xl:text-5xl'>{title}</h2>
          <p className='text-xl'>{description}</p>
        </div>
        <Button as={NextLink} color='primary' href='/signup' size='lg'>
          {cta}
        </Button>
      </div>
      <div
        className={clsx('min-h-40', {
          'lg:col-start-2 lg:col-end-7 xl:col-start-1 xl:col-end-7': reverse,
          'lg:col-start-7 lg:col-end-12 xl:col-end-[-1]': !reverse,
        })}
      >
        <video
          autoPlay
          controlsList='nodownload'
          loop
          muted
          playsInline
          src={videoSrc}
        />
      </div>
    </div>
  </section>
);

export type { FeaturedSectionProps };
export { FeaturedSection };
