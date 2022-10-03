import rehypeKatex from "rehype-katex";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import LessonSectionDirective from "./plugins/LessonSectionDirectivePlugin.mjs";

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
            remarkPlugins: [
              remarkMath,
              remarkDirective,
              LessonSectionDirective,
            ],
            rehypePlugins: [rehypeKatex],
            providerImportSource: "@mdx-js/react",
          },
        },
      ],
    });

    return config;
  },
};
