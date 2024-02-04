/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/tcp1p-pages",
    assetPrefix: "/tcp1p-pages",
    output: "export",
    images:{
        unoptimized: true
    }
}

module.exports = nextConfig
