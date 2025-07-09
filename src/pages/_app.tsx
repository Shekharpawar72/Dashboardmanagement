import type { AppProps } from 'next/app';
import '../lib/fontawesome'; // Import Font Awesome configuration
import '../styles/globals.css'; // Import global styles

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}