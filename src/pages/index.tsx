import type { GetServerSideProps } from 'next';

import { HomeProps } from '@/features/home';
import { LocaleType } from '@/types';
import { getMessages } from '@/utils';

export const getServerSideProps = (async (ctx) => {
  const locale = (
    ctx.locale !== undefined && ctx.locale !== 'en' ? ctx.locale : 'en'
  ) as LocaleType;

  return {
    props: {
      messages: await getMessages(locale, ['Home']),
    },
  };
}) satisfies GetServerSideProps<HomeProps>;

export { default } from '@/features/home';
