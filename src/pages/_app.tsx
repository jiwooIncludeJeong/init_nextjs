import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from '@styles/global-styles';
import { Normalize } from 'styled-normalize';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BROWSER TITLE</title>
      </Head>
      <RecoilRoot>
        <GlobalStyles />
        <Normalize />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
