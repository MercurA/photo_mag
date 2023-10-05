/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
},
  reactStrictMode: true,
  experimental: {
		esmExternals: "loose",
	},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '"fasrsources266.weebly.com',
        port: '',
        pathname: '/uploads/1/2/5/3/125388556/646580940.jpg',
      },
    ],
  },
}

module.exports = nextConfig
