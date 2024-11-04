import type { AppProps } from 'next/app';
import  Navbar  from '../components/Navbar';
import '../globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}