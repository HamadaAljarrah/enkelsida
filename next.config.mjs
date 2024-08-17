/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                has: [
                  {
                    type: 'host',
                    value: '(?<subdomain>[^.]+)\\.localhost',
                  },
                ],
                destination: '/preview/:subdomain',
            },
        ];
    },
};

export default nextConfig;
