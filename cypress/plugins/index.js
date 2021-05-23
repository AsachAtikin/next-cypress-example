require('dotenv').config();

// eslint-disable-next-line import/no-extraneous-dependencies
const { getLocal } = require('mockttp');

const mockServer = getLocal();

mockServer.start(Number(process.env.TEST_PORT));

module.exports = (on) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    mockServerRequest: async ({ method, route, fixture }) => {
      if (!method) {
        throw new Error('Method not specified!');
      }

      await mockServer[method.toLowerCase()](route)
        .thenJson(200, fixture, { 'Content-Type': 'application/json' });
      return null;
    },
    mockServerReset: async () => {
      await mockServer.reset();
      return null;
    },
  });
};
