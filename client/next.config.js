const withImages = require("next-images");
const dotEnvResult = require("dotenv").config();

const prod = process.env.NODE_ENV === "production";

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = withImages({
  env: {
    MELI_API_URL: prod ? process.env.MELI_API_URL : process.env.MELI_API_URL_DEV
  },
  target: "serverless",
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});
