import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import cypress from 'cypress';
import homePage from '../../support/pageObjects/home.page';
import loginPage from '../../support/pageObjects/login.page';
import recentActivityPage from '../../support/pageObjects/recent-activity.page';



When('the user search by a {string}  {string}', (reference,number) => {
    
    recentActivityPage.tablerows.should('be.visible');
    
    recentActivityPage.quoteReference.type(number);
});
When('the user user search by a full or partial {string}',(reference)=>{
    recentActivityPage.quoteReference.type(reference);

})
When('the user search by a invalid reference {string}',(reference)=>{
    recentActivityPage.quoteReference.type(reference);

})
When('the user search by client first or last name {string} or a combination of both',(firstlastname)=>{
    recentActivityPage.clientName.type(firstlastname);
    
})
When('the user search by {string}',(postcode)=>{
    recentActivityPage.postCode.type(postcode);

})

When('the user search by invalid {string}',(postcode)=>{
    recentActivityPage.postCode.type(postcode);
    homePage.search.click();

})
Then('the user should see errormessage',()=>{
    recentActivityPage.errortextPostcode.should('contain','Please enter a valid postcode')

})

Then('the user click search button should show results matching {string}', (searchcriteria) => {
    homePage.search.click();
    recentActivityPage.verifySearchcriteria(searchcriteria);
});

Then('the user reset the search fields, showing all recent activity', () => {
    recentActivityPage.quoteReference.type('reference');
    recentActivityPage.resetButton.click();
    recentActivityPage.verifyTableRowNumber(10);
});

Then('the user click search button should not show any results', () => {
    homePage.search.click();
    recentActivityPage.verifyTableRowNumber(0);

})

When('the user search by client invalid first or last name {string}', (name)=>{
    recentActivityPage.clientName.type(name);
})
Then('click search button should see errot text for name',()=>{
    homePage.search.click();
    recentActivityPage.errortextName.should('contain','Please enter a valid client name')

})
