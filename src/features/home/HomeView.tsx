import { AbstractIntlMessages } from 'next-intl';

import { HomeBlog } from './HomeBlog';
import { HomeHero } from './HomeHero';
import { HomeStats } from './HomeStats';

interface HomeViewProps {
  messages: AbstractIntlMessages;
}

function HomeView() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeBlog />
    </>
  );
}

export type { HomeViewProps };
export default HomeView;
