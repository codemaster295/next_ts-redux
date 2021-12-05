/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["blogmmo.herokuapp.com"],
  },
  env: {
    baseUrl: 'https://blogmmo.herokuapp.com',
  },
}
