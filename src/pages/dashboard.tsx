import type { GetServerSideProps } from 'next';

import { DashboardProps } from '@/features/dashboard/Dashboard';
import { pick } from 'radash';

export const getServerSideProps = (async (ctx) => ({
  props: {
    messages: pick(
      (await import(`../../messages/${ctx.locale}.json`)).default,
      ['Common', 'Dashboard']
    ),
  },
})) satisfies GetServerSideProps<DashboardProps>;

export { default } from '@/features/dashboard/Dashboard';
