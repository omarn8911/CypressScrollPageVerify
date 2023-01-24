import HomePage from '../support/PageObjects/HomePage';

describe('Team International Home Page', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  //Since the hover and click action repeats during this test, I decided to crate a function to reutilize
  //Why not a Custom Command? ->Because is not a good practice according to Cypress documentation: https://docs.cypress.io/api/cypress-api/custom-commands#cyhover-and-cymount
  // you shouldn't create custom commands at leats is somethig that repeat through multiple features, but that's not the case here, at least not yet.
  //We're also receiving getUrl functions withe the 'geturl' parameter to use our Page Object Model functions imported from: ../support/PageObjects/HomePage
  const hoverAndClickSection = (geturl) => {
    geturl
    .trigger('mouseover').then((link) => {
      const href = link.prop('href')
      link.removeAttr('target')
      link.attr('href', 'javascript:void(0)')
      cy.visit(href) //The 'visit' command implicitly waits/validate for a page to succesfully load, if the page doesn't load it will throw error.
  })
  //added test for the home header button
  homePage.getReturnHomeBtnHeader().click()
  }

  const homePage=new HomePage();

  it('Navigates to the SoftwareSolutionSection and verifies small elements', () => {
    homePage.getLogisticandTransportationLabel().should('have.text','Logistics & Transportation')
    hoverAndClickSection(homePage.getLogisticandTransportationUrl())
    homePage.getOilAndGasLabel().should('have.text','Oil & Gas')
    hoverAndClickSection(homePage.getOilAndGasUrl())
    homePage.getTelecomLabel().should('have.text','Telecom')
    hoverAndClickSection(homePage.getTelecomUrl())
    homePage.getTechnologyAndInnovationLabel().should('have.text','Technology & Innovation ')
    hoverAndClickSection(homePage.getTechnologyAndInnovationUrl())
    homePage.getFinancialServicesLabel().should('have.text','Financial Services')
    hoverAndClickSection(homePage.getFinancialServicesUrl())
    homePage.getHealthCareAndLifeScienceLabel().should('have.text','Healthcare & Life Sciences')
    hoverAndClickSection(homePage.getHealthCareAndLifeScienceUrl())
    homePage.getTravelAndHospitalityLabel().should('have.text','Travel & Hospitality')
    hoverAndClickSection(homePage.getTravelAndHospitalityUrl())
    homePage.getRetailAndEcommerceLabel().should('have.text','Retail & Ecommerce')
    hoverAndClickSection(homePage.getRetailAndEcommerceUrl())
    homePage.getDigitalMarketingLabel().should('have.text','Digital Marketing')
    hoverAndClickSection(homePage.getDigitalMarketingUrl())
  })
})