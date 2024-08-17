/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                has: [
                  {
                    type: 'host',
                    value: `(?<subdomain>[^.]+)\\.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
                  },
                ],
                destination: '/preview/:subdomain',
            },
        ];
    },
};

export default nextConfig;
