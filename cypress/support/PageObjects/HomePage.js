class HomePage {

    getLogisticandTransportationLabel(){
        return cy.get('[href="http://www.teaminternational.com/industries/logistics-transportation/"] > div > div > h3')
    }

    getLogisticandTransportationParagraph(){
        return cy.get('[href="http://www.teaminternational.com/industries/logistics-transportation/"] > div > div > p')
    }

    getLogisticandTransportationUrl() {
        return cy.get('[href="http://www.teaminternational.com/industries/logistics-transportation/"]');
    }

    getOilAndGasLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/oil-gas/"] > div > div > h3')
    }

    getOilAndGasUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/oil-gas/"]');
    }

    getTelecomLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/it-solutions-for-telecom-industry/"] > div > div > h3')
    }

    getTelecomUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/it-solutions-for-telecom-industry/"]');
    }

    getTechnologyAndInnovationLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/technology-innovation/"] > div > div > h3')
    }

    getTechnologyAndInnovationUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/technology-innovation/"]');
    }

    getFinancialServicesLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/financial-services/"] > div > div > h3')
    }

    getFinancialServicesUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/financial-services/"]');
    }

    getHealthCareAndLifeScienceLabel() {
        return cy.get('a[href="http://www.teaminternational.com/industries/healthcare-life-sciences/"] > div > div > h3')
    }

    getHealthCareAndLifeScienceUrl() {
        return cy.get('a[href="http://www.teaminternational.com/industries/healthcare-life-sciences/"]');
    }

    getTravelAndHospitalityLabel(){
        return cy.get('a[href="http://www.teaminternational.com/industries/it-hospitality-solutions/"] > div > div > h3')
    }

    getTravelAndHospitalityUrl(){
        return cy.get('a[href="http://www.teaminternational.com/industries/it-hospitality-solutions/"]')
    }

    getRetailAndEcommerceLabel(){
        return cy.get('a[href="http://www.teaminternational.com/industries/retail-it-solutions/"] > div > div > h3')
    }

    getRetailAndEcommerceUrl(){
        return cy.get('a[href="http://www.teaminternational.com/industries/retail-it-solutions/"]')
    }

    getDigitalMarketingLabel(){
        return cy.get('a[href="http://www.teaminternational.com/industries/digital-marketing/"] > div > div > h3')
    }

    getDigitalMarketingUrl(){
        return cy.get('a[href="http://www.teaminternational.com/industries/digital-marketing/"]')
    }

    getReturnHomeBtnHeader(){
        return cy.get('a[href="https://www.teaminternational.com/"] ')
    }

    }
    export default HomePage