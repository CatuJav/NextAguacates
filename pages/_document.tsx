import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/*favicion
        fuentes 
        estilos externos*/}
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
