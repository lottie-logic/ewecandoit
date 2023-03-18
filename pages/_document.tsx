import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
        ></link>
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
