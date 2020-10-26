import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    console.log(styles)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// import Document, {Head, Main, NextScript} from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
// import { extractCritical } from 'emotion-server'

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const page = ctx.renderPage();
//     const styles = extractCritical(page.html)

//     return {
//       ...page,
//       ...styles
//     }
//   }

//   constructor(props){
//     super(props);
//   }
// }


// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         })

//       const initialProps = await Document.getInitialProps(ctx)
//       const styles = extractCritical(initialProps.html);
//       console.log(styles)
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       }
//     } finally {
//       sheet.seal()
//     }
//   }
// }