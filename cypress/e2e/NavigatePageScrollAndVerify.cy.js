import HomePage from '../support/PageObjects/HomePage';
import data from '../fixtures/homepage.json'
import "cypress-real-events";

let softWareSolutionsParagraph = data.SoftWareSolutionsParagraph
let innovateItParagraph = data.InnovateItParagraph
let logisticsAndTransportationsParagraph = data.LogisticsAndTransportationsParagraph

const homePage=new HomePage();

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

  it('Goes to the SoftwareSolutionSection, click and verifies labels and small elements.', () => {
    homePage.getSoftwareSolutionsLabel().should('have.text','Software Solutions for Your Industry')
    homePage.getSoftwareSolutionsParagraph().should('have.text',softWareSolutionsParagraph)
    homePage.getLogisticandTransportationLabel().should('have.text','Logistics & Transportation')
    homePage.getLogicsticsAndTransportationDiv().realHover()
    homePage.getLogicsticsAndTransportationParagraph().should('be.visible')
    homePage.getLogicsticsAndTransportationParagraph().should('have.text',logisticsAndTransportationsParagraph)
    hoverAndClickSection(homePage.getLogisticandTransportationUrl())
    homePage.getOilAndGasLabel().should('have.text','Oil & Gas')
    homePage.getOilAndGasDiv().realHover()
    homePage.getOilAndGasParagraph().should('be.visible')
    hoverAndClickSection(homePage.getOilAndGasUrl())
    homePage.getTelecomLabel().should('have.text','Telecom')
    homePage.getTelecomDiv().realHover()
    homePage.getTelecomParagraph().should('be.visible')
    hoverAndClickSection(homePage.getTelecomUrl())
    homePage.getTechnologyAndInnovationDiv().realHover()
    homePage.getTechnologyAndInnovationParagraph().should('be.visible')
    homePage.getTechnologyAndInnovationLabel().should('have.text','Technology & Innovation ')
    hoverAndClickSection(homePage.getTechnologyAndInnovationUrl())
    homePage.getFinancialServicesLabel().should('have.text','Financial Services')
    homePage.getFinancialServicesDiv().realHover()
    homePage.getFinancialServicesParagraph().should('be.visible')
    hoverAndClickSection(homePage.getFinancialServicesUrl())
    homePage.getHealthCareAndLifeScienceLabel().should('have.text','Healthcare & Life Sciences')
    homePage.getHealthCareAndLifeScienceDiv().realHover()
    homePage.getHealthCareAndLifeScienceParagraph().should('be.visible')
    hoverAndClickSection(homePage.getHealthCareAndLifeScienceUrl())
    homePage.getTravelAndHospitalityLabel().should('have.text','Travel & Hospitality')
    homePage.getTravelAndHospitalityDiv().realHover()
    homePage.getTravelAndHospitalityParagraph().should('be.visible')
    hoverAndClickSection(homePage.getTravelAndHospitalityUrl())
    homePage.getRetailAndEcommerceLabel().should('have.text','Retail & Ecommerce')
    homePage.getRetailAndEcommerceDiv().realHover()
    homePage.getRetailAndEcommerceParagraph().should('be.visible')
    hoverAndClickSection(homePage.getRetailAndEcommerceUrl())
    homePage.getDigitalMarketingLabel().should('have.text','Digital Marketing')
    homePage.getDigitalMarketingDiv().realHover()
    homePage.getDigitalMarketingParagraph().should('be.visible')
    hoverAndClickSection(homePage.getDigitalMarketingUrl())
  })

  it('Goes to Innovative IT Software Services section, click and verifies labels and small elements.', ()=>{
    homePage.getInnovativeItSoftwareServicesLabel().should('have.text','Innovative IT Software Services')
    homePage.getInnovativeItSoftwareServicesParagraph().should('have.text',innovateItParagraph)
    homePage.getSoftWareDevolopmentOutsorcingDiv().should('have.text','Software Development Outsourcing')

    
  })
})