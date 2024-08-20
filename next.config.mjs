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
                            value: `(?<subdomain>[^.]+)\\.localhost`,
                        },
                    ],
                    destination: '/preview/:subdomain',
                },
                {
                    source: '/',
                    has: [
                        {
                            type: 'host',
                            value: `localhost`,
                        },
                    ],
                    destination: '/',
                },
            ]
        }
    },
};
export default nextConfig;
