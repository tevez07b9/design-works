import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/hooks/useDarkMode'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
