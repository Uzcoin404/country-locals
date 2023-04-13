import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

import { ViewportProvider } from '../src/context/ViewPortContext';
import { OverflowProvider } from '../src/context/overflowContext';
import { MobileBookingProvider } from '../src/context/mobileBookingContext';

import Header from '../src/components/header/Header';
import Footer from '../src/components/workshop/Footer';

import '../src/assets/scss/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#E71575" />

      <Head>
        <link rel="shortcut icon" href="/tourism-favicon.png" />
        <title>Country Locals</title>
      </Head>
      <ViewportProvider>
        <OverflowProvider>
          <MobileBookingProvider>
            <div id="page_container" className="h-full overflow-hidden">
              <Header />
              <main id="main_content" className="pt-20 md:pt-8 lg:pt-0">
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </MobileBookingProvider>
        </OverflowProvider>
      </ViewportProvider>
    </>
  );
}

export default MyApp;
