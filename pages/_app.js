import { useEffect } from 'react';
import liff from '@line/liff';
// pages/_app.js
import '../styles/globals.css';
import BottomTab from '../components/BottomTab';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID });
        console.log("LIFF initialized successfully");
      } catch (error) {
        console.error("LIFF initialization failed", error);
      }
    };
    initializeLiff();
  }, []);

  return (
  <>
    <Component {...pageProps} />
    <BottomTab />
  </>
  )
}

export default MyApp;
