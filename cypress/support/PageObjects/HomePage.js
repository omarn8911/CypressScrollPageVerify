class HomePage {

    getSoftwareSolutionsLabel() {
        return cy.get('.main-title-industry.white-text')
    }

    getSoftwareSolutionsParagraph() {
        return cy.get('[class="white-text width-industry-section"]')
    }

    getLogicsticsAndTransportationDiv(){
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(1)')
    }

    getLogisticandTransportationLabel(){
        return cy.get('[href="http://www.teaminternational.com/industries/logistics-transportation/"] > div > div > h3')
    }

    getLogicsticsAndTransportationParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/logistics-transportation/"] > div > div > p')
    }

    getLogisticandTransportationUrl() {
        return cy.get('[href="http://www.teaminternational.com/industries/logistics-transportation/"]');
    }

    getOilAndGasDiv(){
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(2)')
    }

    getOilAndGasLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/oil-gas/"] > div > div > h3')
    }

    getOilAndGasParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/oil-gas/"] > div > div > p')
    }

    getOilAndGasUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/oil-gas/"]');
    }

    getTelecomDiv(){
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(3)')
    }

    getTelecomLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/it-solutions-for-telecom-industry/"] > div > div > h3')
    }

    getTelecomParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/it-solutions-for-telecom-industry/"] > div > div > p')
    }

    getTelecomUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/it-solutions-for-telecom-industry/"]');
    }

    getTechnologyAndInnovationDiv(){
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(4)')
    }

    getTechnologyAndInnovationLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/technology-innovation/"] > div > div > h3')
    }

    getTechnologyAndInnovationParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/technology-innovation/"] > div > div > p')
    }

    getTechnologyAndInnovationUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/technology-innovation/"]');
    }

    getFinancialServicesDiv() {
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(5)')
    }

    getFinancialServicesLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/financial-services/"] > div > div > h3')
    }

    getFinancialServicesParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/financial-services/"] > div > div > p')
    }

    getFinancialServicesUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/financial-services/"]');
    }

    getHealthCareAndLifeScienceDiv() {
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(6)')
    }

    getHealthCareAndLifeScienceLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/healthcare-life-sciences/"] > div > div > h3')
    }

    getHealthCareAndLifeScienceParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/healthcare-life-sciences/"] > div > div > p')
    }

    getHealthCareAndLifeScienceUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/healthcare-life-sciences/"]');
    }

    getTravelAndHospitalityDiv() {
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(7)')
    }

    getTravelAndHospitalityLabel(){
        return cy.get('a[href="http://www.teaminternational.com/industries/it-hospitality-solutions/"] > div > div > h3')
    }

    getTravelAndHospitalityParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/it-hospitality-solutions/"] > div > div > p')
    }

    getTravelAndHospitalityUrl(){
        return cy.get('a[href="http://www.teaminternational.com/industries/it-hospitality-solutions/"]')
    }

    getRetailAndEcommerceDiv() {
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(8)')
    }

    getRetailAndEcommerceLabel(){
        return cy.get('a[href="http://www.teaminternational.com/industries/retail-it-solutions/"] > div > div > h3')
    }

    getRetailAndEcommerceParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/retail-it-solutions/"] > div > div > p')
    }

    getRetailAndEcommerceUrl(){
        return cy.get('a[href="http://www.teaminternational.com/industries/retail-it-solutions/"]')
    }

    getDigitalMarketingDiv() {
        return cy.get('[class="industrial-item col-12 col-sm-6 col-xl-4"]:nth-child(9)')
    }

    getDigitalMarketingLabel(){
        return cy.get('a[href="http://www.teaminternational.com/industries/digital-marketing/"] > div > div > h3')
    }

    getDigitalMarketingParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/digital-marketing/"] > div > div > p')
    }

    getDigitalMarketingUrl(){
        return cy.get('a[href="http://www.teaminternational.com/industries/digital-marketing/"]')
    }

    getReturnHomeBtnHeader(){
        return cy.get('a[href="https://www.teaminternational.com/"] ')
    }

    getInnovativeItSoftwareServicesLabel(){
        return cy.get('h2[class="white-text "]')
    }

    getInnovativeItSoftwareServicesParagraph(){
        return cy.get('#content > section.section.services-section.fp-section > div > div:nth-child(1) > div > div > p')
    }

    getSoftWareDevolopmentOutsorcingDiv(){
        return cy.get('body > div:nth-child(1) > div:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > p:nth-child(1)')
    }

    getAutomationServices(){
        return cy.get('body > div:nth-child(1) > div:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1) > p:nth-child(1)"]')
    }

    }
    export default HomePage