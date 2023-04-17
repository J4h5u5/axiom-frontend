import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-bombay">
                <Main />
                <NextScript />
                <style>{`
          #__next, html, body {
            height: 100%;
          }
        `}</style>
            </body>
        </Html>
    );
}
