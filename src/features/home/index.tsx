import { AbstractIntlMessages, useTranslations } from 'next-intl';

import { Blog } from './blog';
import { Collaboration } from './collaboration';
import { FeaturedSection } from './featured-section';
import { Hero } from './hero';

interface HomeProps {
  messages: AbstractIntlMessages;
}

function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <Hero />
      <Collaboration />
      <section className='pt-20' id='lookup'>
        <div className='container !max-w-5xl'>
          <h2
            className='text-balance text-center text-4xl lg:text-5xl xl:text-6xl'
            dangerouslySetInnerHTML={{ __html: t.raw('lookup.title') }}
          />
        </div>
      </section>
      <FeaturedSection
        caption={t('featured.surveys.caption')}
        cta={t('featured.surveys.cta')}
        description={t('featured.surveys.description')}
        title={t('featured.surveys.title')}
        videoSrc='https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708%2F67288b2fb22e7ee7c157fe73_home%205050%201-transcode.webm'
      />
      <FeaturedSection
        caption={t('featured.ai.caption')}
        cta={t('featured.ai.cta')}
        description={t('featured.ai.description')}
        reverse
        title={t('featured.ai.title')}
        videoSrc='https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708%2F6731d779ad2f2aa71ae14d7e_section-2-transcode.mp4'
      />
      <Blog />
    </>
  );
}

export type { HomeProps };
export default Home;
