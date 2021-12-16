/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["blogmmo.herokuapp.com", "fakestoreapi.com"],
  },
  env: {
    baseUrl: "https://blogmmo.herokuapp.com/api/v1",
    PRISMIC_TOKEN: "MC5ZYTlOZFJNQUFCOEE1YURi.Re-_ve-_vVTvv71pCe-_ve-_vWnvv73vv73vv71G77-977-9de-_vV5ZdUdV77-977-977-9RHrvv73vv73vv70k",
    PRISMIC_URL: "https://blognft.prismic.io/api/v2",
  },
};
