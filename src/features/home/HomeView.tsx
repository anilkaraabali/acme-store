import { AbstractIntlMessages } from 'next-intl';

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
    </>
  );
}

export type { HomeViewProps };
export default HomeView;
