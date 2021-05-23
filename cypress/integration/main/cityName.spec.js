describe('Main page', () => {
  beforeEach(() => {
    cy.mockServerReset();

    cy.fixture('forecast/city').then((cityForecast) => {
      cy.mockServerRequest({
        method: 'GET',
        route: '/weather',
        fixture: cityForecast,
      });
    });
  });

  it('Successfully loads', () => {
    cy.visit('/hui');
  });
});
