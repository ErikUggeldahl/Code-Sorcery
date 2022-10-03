import "../styles/globals.scss";
import "katex/dist/katex.min.css";

import React from "react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Lesson from "../components/Lesson";
import LessonLayout from "../components/LessonLayout";

const components = {
  img: (props: any) => <img className="rounded-lg" {...props} />,
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <LessonLayout>
      <Lesson>{children}</Lesson>
    </LessonLayout>
  ),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
