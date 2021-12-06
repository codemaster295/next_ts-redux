/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["blogmmo.herokuapp.com", "storage.googleapis.com"],
  },
  env: {
    baseUrl: 'https://blogmmo.herokuapp.com',
  },
}
