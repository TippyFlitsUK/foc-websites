import type { NextConfig } from "next";

const svgrRule = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
};

const markdownRule = {
  test: /\.md$/,
  loader: "frontmatter-markdown-loader",
  options: {
    mode: ["body", "attributes", "react-component"],
  },
};

const nextConfig: NextConfig = {
  // Static export for FOC/IPFS hosting. Every route must be statically
  // renderable (see generateStaticParams in src/app/[network]/layout.tsx).
  output: "export",
  images: {
    qualities: [75, 100],
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push(svgrRule);
    config.module.rules.push(markdownRule);
    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
      "*.md": {
        loaders: ["frontmatter-markdown-loader"],
      },
    },
  },
};

export default nextConfig;
