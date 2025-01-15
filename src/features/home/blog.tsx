import { Avatar } from '@nextui-org/react';
import Image, { ImageProps } from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface CardProps {
  author: {
    image: string;
    name: string;
  };
  image: ImageProps;
  publishDate: string;
  title: string;
  url: string;
}

const Card: FC<CardProps> = ({ author, image, publishDate, title, url }) => (
  <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
    <Image
      {...image}
      alt={image.alt || ''}
      className='absolute inset-0 -z-10 size-full object-cover'
    />
    <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900' />
    <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm text-gray-300'>
      <time className='mr-8' dateTime={publishDate}>
        {publishDate}
      </time>
      <div className='-ml-4 flex items-center gap-x-4'>
        <svg
          className='-ml-0.5 size-0.5 flex-none fill-white opacity-50'
          viewBox='0 0 2 2'
        >
          <circle cx='1' cy='1' r='1' />
        </svg>
        <div className='flex gap-x-2.5 text-sm'>
          <Avatar className='!size-6 text-tiny' src={author.image} />
          {author.name}
        </div>
      </div>
    </div>
    <h3 className='mt-3 text-lg font-semibold text-white'>
      <a href={url}>
        <span className='absolute inset-0' />
        {title}
      </a>
    </h3>
  </article>
);

const Blog = () => {
  const t = useTranslations('Home.blog');

  return (
    <section className='py-16' id='blog'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-balance text-4xl font-semibold tracking-tight sm:text-5xl'>
            {t('title')}
          </h2>
          <p className='mt-2 text-lg text-gray-500'>{t('description')}</p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {[
            {
              author: {
                image:
                  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                name: 'Michael Foster',
              },
              image: {
                alt: 'Boost your conversation rate',
                height: 2315,
                src: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
                width: 3603,
              },
              publishDate: 'Mar 16, 2020',
              title: 'Boost your conversation rate',
              url: '#',
            },
            {
              author: {
                image:
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                name: 'Lindsay Walton',
              },
              image: {
                alt: 'How to use search engine optimization to drive sales',
                height: 2315,
                src: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
                width: 3603,
              },
              publishDate: 'Mar 10, 2020',
              title: 'How to use search engine optimization to drive sales',
              url: '#',
            },
            {
              author: {
                image:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                name: 'Tom Cook',
              },
              image: {
                alt: 'Improve your customer experience',
                height: 2315,
                src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
                width: 3603,
              },
              publishDate: 'Feb 12, 2020',
              title: 'Improve your customer experience',
              url: '#',
            },
          ].map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };
