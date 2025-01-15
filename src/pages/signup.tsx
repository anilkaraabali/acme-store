import type { GetServerSideProps } from 'next';

import { SignUpProps } from '@/features/auth/SignUp';
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
}) satisfies GetServerSideProps<SignUpProps>;

export { default } from '@/features/auth/SignUp';
