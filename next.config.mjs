/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  // The sandbox TypeScript worker crashes with a cryptic "id" error during
  // Next's type-check phase; type errors are caught by `tsc --noEmit` in CI
  // instead. Same for ESLint (not installed in this project).
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
