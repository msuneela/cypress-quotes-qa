class RecentActivityPage{
    get quoteReference() {
        return cy.get('[data-testid="policy-number"]');
    }
    get clientName() {
        return cy.get('[data-testid="policy-name"]');
    }
    get postCode() {
        return cy.get('[data-testid="policy-postcode"]');
    }
    get resetButton() {
        return cy.get('[data-testid="reset-filter-button"]');
    }
    get filterPopover() {
        return cy.get('[data-testid="filter-popover-button"]');
    }
    get checkBox(){
        return cy.get('input[type="checkbox"]',{timeout:1000});
    }
    get tablerows(){
        return cy.get('tbody > tr', {timeout:60000});
    }
    verifySearchcriteria(searchcriteria){
        cy.get('[data-testid="retrieved-quote"]', {timeout:40000}).eq(0).should('contain', searchcriteria)
    }
    verifyTableRowNumber(num){
       cy.get('tbody > tr', {timeout:60000}).should('have.length',num)
    }
  get errortextPostcode(){
    return cy.get('#policy-postcode-helper-text')
  }
  get errortextName(){
    return cy.get('#policy-name-helper-text')
  }


}
export default new RecentActivityPage();