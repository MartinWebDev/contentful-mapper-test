import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// MyDocument.getInitialProps = async (context: DocumentContext) => {
//   const initialProps = await Document.getInitialProps(context);

//   console.log('Document.getInitialProps', initialProps);

//   return {
//     ...initialProps
//   };
// };

export default MyDocument;
