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
                            value: `(?<subdomain>[^.]+)\\.enkelsida.com`,
                        },
                    ],
                    destination: '/preview/:subdomain',
                },
                {
                    source: '/',
                    has: [
                        {
                            type: 'host',
                            value: `enkelsida.com`,
                        },
                    ],
                    destination: '/',
                },
            ]
        }
    },
};
export default nextConfig;
