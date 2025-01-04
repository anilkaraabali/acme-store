import type { AppProps } from 'next/app';

import { ErrorBoundary } from '@/components/error';
import { fontMono, fontSans } from '@/config/fonts';
import { DefaultLayout } from '@/layouts/default';
import { Head } from '@/layouts/head';
import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export type NextPageWithLayout<P = object, IP = P> = {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
} & NextPage<P, IP>;

type AppPropsWithLayout = {
  Component: NextPageWithLayout;
} & AppProps;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <ErrorBoundary>
          <NextIntlClientProvider
            locale={router.locale}
            messages={pageProps.messages}
          >
            <Head />
            {getLayout(<Component {...pageProps} />)}
          </NextIntlClientProvider>
        </ErrorBoundary>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  mono: fontMono.style.fontFamily,
  sans: fontSans.style.fontFamily,
};
