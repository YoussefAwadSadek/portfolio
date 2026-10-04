/**
 * Next.js configuration.
 *
 * This portfolio is built as a fully static site so it can be hosted on
 * GitHub Pages (and still works perfectly on Vercel).
 *
 * - `output: 'export'`    -> emits a static `out/` folder on `next build`.
 * - `images.unoptimized`  -> required because the static export has no image
 *                            optimization server.
 *
 * GitHub Pages project sites are served from a sub-path
 * (e.g. https://username.github.io/portfolio). When deploying there, set the
 * environment variable `NEXT_PUBLIC_BASE_PATH=/portfolio` so all asset and
 * link URLs resolve correctly. For a user/organization site
 * (username.github.io) or for Vercel, leave it unset.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  // Expose the base path to the client bundle so components can prefix
  // static assets (e.g. the avatar) when hosted under a sub-path.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
