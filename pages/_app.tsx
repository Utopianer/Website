import 'styles/global.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Script
        data-website-id="7fe34e1f-d06f-415b-98bc-c10004281128"
        async
        defer
        src="https://sudo-umami.up.railway.app/umami.js"
      />
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
