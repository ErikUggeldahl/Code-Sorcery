import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en" className="dark" style={{ backgroundColor: "#191023" }}>
      <Head />
      {/* <body className="dark:bg-gray-900"> */}
      <body style={{ backgroundColor: "#191023" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
