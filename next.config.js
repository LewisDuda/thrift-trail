/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [process.env.GOOGLE_IMG_URL],
	},
};

module.exports = nextConfig;
