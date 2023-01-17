import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'
import StoreProvider from '../context/Store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  )
}
