import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: [
      "**/.next/**",
      "**/out/**",
      "**/node_modules/**",
      "**/.claude/**",
    ],
  },
  ...nextConfig,
];

export default config;
