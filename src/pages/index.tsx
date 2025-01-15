import type { GetServerSideProps } from 'next';

import { HomeProps } from '@/features/home/Home';
import { pick } from 'radash';

export const getServerSideProps = (async (ctx) => ({
  props: {
    messages: pick(
      (await import(`../../messages/${ctx.locale}.json`)).default,
      ['Common', 'Home']
    ),
  },
})) satisfies GetServerSideProps<HomeProps>;

export { default } from '@/features/home/Home';
