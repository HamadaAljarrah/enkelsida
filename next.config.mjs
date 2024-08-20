/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/',
                    has: [
                        {
                            type: 'host',
                            value: `(?<subdomain>[^.]+)\\.${process.env.NEXT_PUBLIC_DOMAIN}`,
                        },
                    ],
                    destination: '/preview/:subdomain',
                },
                {
                    source: '/',
                    has: [
                        {
                            type: 'host',
                            value: `${process.env.NEXT_PUBLIC_DOMAIN}`,
                        },
                    ],
                    destination: '/',
                },
            ]
        }
    },
};
export default nextConfig;
