import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <meta
          name="description"
          content="We are a results driven boutique technology consulting and software development firm that specializes in helping both emerging and established businesses solve complex technical challenges. Our team of technologists blend innovation with practicality to build custom, enterprise-grade software solutions that prioritize your business strategy and goals."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
