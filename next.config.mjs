/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Linting is run separately via `npm run lint` (flat ESLint config).
    // next build's built-in lint step still uses next 14's legacy
    // ESLint invocation, which is incompatible with ESLint 9.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
