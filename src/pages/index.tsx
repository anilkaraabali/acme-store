import type { GetServerSideProps } from 'next';

import { HomeViewProps } from '@/features/home/HomeView';
import { pick } from 'radash';

export const getServerSideProps = (async (ctx) => ({
  props: {
    messages: pick(
      (await import(`../../messages/${ctx.locale}.json`)).default,
      ['Common']
    ),
  },
})) satisfies GetServerSideProps<HomeViewProps>;

export { default } from '@/features/home/HomeView';
