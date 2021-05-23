# `Cypress` tests

Features:
- Since SSR is used, it is necessary to mock requests that are sent from the server (`Cypress` does not allow mocking [server-side requests](https://github.com/cypress-io/cypress/issues/588#issuecomment-321598634) ). The `mockttp` library is used for this. 2 custom [cypress-commands](https://docs.cypress.io/api/cypress-api/custom-commands) were created and a [task](https://docs.cypress.io/api/plugins/writing-a-plugin#on) was added to plugins, which receives the method, route and fixture from the command and passes them to the `mockttp`, as well as reset the mocks.
