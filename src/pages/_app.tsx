import { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/AuthContext';

import { SideBar } from '../components/SideBar';

import '../styles/global.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      {router.pathname !== '/login' && <SideBar />}
      
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
