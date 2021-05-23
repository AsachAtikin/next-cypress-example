require('dotenv').config();
const path = require('path');
const { withEffectoReactAliases } = require('effector-next/tools');

const nextConfiguration = {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },

  env: {},

  publicRuntimeConfig: {
    weatherApiBaseUrl: process.env.WEATHER_API_BASE_URL,
    weatherApiIconBaseUrl: process.env.WEATHER_API_ICON_BASE_URL,
  },
};

module.exports = withEffectoReactAliases()(nextConfiguration);
