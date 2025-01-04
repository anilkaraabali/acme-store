import { AbstractIntlMessages } from 'next-intl';

import { HomeHero } from './HomeHero';

interface HomeViewProps {
  messages: AbstractIntlMessages;
}

function HomeView() {
  return (
    <>
      <HomeHero />
    </>
  );
}

export type { HomeViewProps };
export default HomeView;
