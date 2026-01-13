/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // enables static site
  images: {
    unoptimized: true,       // fixes next/image on shared hosting
  },
};

module.exports = nextConfig;
