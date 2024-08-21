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
                            value: `(?<subdomain>[^.]+)\\.enkelsida`,
                        },
                    ],
                    destination: '/preview/:subdomain',
                },
                {
                    source: '/',
                    has: [
                        {
                            type: 'host',
                            value: `enkelsida`,
                        },
                    ],
                    destination: '/',
                },
            ]
        }
    },
};
export default nextConfig;
