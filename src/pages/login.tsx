import type { GetServerSideProps } from 'next';

import { LoginProps } from '@/features/auth/login';
import { LocaleType } from '@/types';
import { getMessages } from '@/utils';

export const getServerSideProps = (async (ctx) => {
  const locale = (
    ctx.locale !== undefined && ctx.locale !== 'en' ? ctx.locale : 'en'
  ) as LocaleType;

  return {
    props: {
      messages: await getMessages(locale, ['Auth']),
    },
  };
}) satisfies GetServerSideProps<LoginProps>;

export { default } from '@/features/auth/login';
