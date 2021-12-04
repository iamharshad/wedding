import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:site_name"
            content="Harshad Weds Priyanka | 30-12-2021"
          />
          <meta
            property="og:title"
            content="Harshad Weds Priyanka | 30-12-2021"
          />
          <meta
            property="og:description"
            content="Mrs. Jayaben & Mr. Khimjibhai S. Kachariya
            request your gracious presence on the
            auspicious occasion of the wedding of their son"
          />
          <meta
            property="og:url"
            content="https://harshad-weds-priyanka.vercel.app"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content="https://wedding-pz8dfmkc3-iamharshad.vercel.app/media/images/og-thumb.jpg"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
