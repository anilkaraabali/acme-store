import { AbstractIntlMessages } from 'next-intl';

import { Blog } from './Blog';
import { Hero } from './Hero';
import { Stats } from './Stats';

interface HomeProps {
  messages: AbstractIntlMessages;
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Blog />
    </>
  );
}

export type { HomeProps };
export default Home;
