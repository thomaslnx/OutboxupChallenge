import type { AppProps } from 'next/app';
import React from 'react';

import '@/tailwind/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
