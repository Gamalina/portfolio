/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "private-user-images.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "cdn0.iconfinder.com",
            },
            {
                protocol: "https",
                hostname: "cdn1.iconfinder.com",
            },
            {
                protocol: "https",
                hostname: "cdn2.iconfinder.com",
            },
            {
                protocol: "https",
                hostname: "cdn3.iconfinder.com",
            },
            {
                protocol: "https",
                hostname: "cdn4.iconfinder.com",
            },
        ]
    }
};


export default nextConfig;
