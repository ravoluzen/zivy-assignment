import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CommentProvider } from '../context/CommentContext';
import { AuthProvider } from '@/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CommentProvider>
        <Component {...pageProps} />
      </CommentProvider>
    </AuthProvider>
  );}
