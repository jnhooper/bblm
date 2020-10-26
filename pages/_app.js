
import NextApp from 'next/app'
import { CacheProvider } from '@emotion/core'
import '../styles/globals.css'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

// import { globalStyles } from '../shared/styles'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}


// import '../styles/globals.css'
// import { CacheProvider } from '@emotion/core'
// import { cache } from 'emotion'

// function MyApp({ Component, pageProps }) {
//   return (
//     <CacheProvider value={cache}>
//       <Component {...pageProps} />
//     </CacheProvider>
//   )
// }

// export default MyApp
