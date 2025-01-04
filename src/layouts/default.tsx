import { Newsletter } from '@/components/newsletter';
import { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='relative flex h-screen flex-col'>
    <Header />
    {children}
    <Newsletter />
    <Footer />
  </div>
);

export { DefaultLayout };
