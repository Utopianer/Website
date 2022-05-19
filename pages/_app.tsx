import 'styles/global.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
