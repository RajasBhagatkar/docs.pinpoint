/** @type {import('next').NextConfig} */
const nextConfig = require('nextra')({
  reactStrictMode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
})

module.exports = nextConfig()
