const holdingPage = new HoldingPage ();


fixture ('Mighty Holding')
.page ('https://mighty-client-qa-stable.herokuapp.com/');

test ("Remove existing holding", async(t)=> {
    loginPage.logIn ('admin@able.co','password');
    organizationHoldingsPage.clickInvestment();
    investmentPage.createHolding('Test Company','Test','Series Seed','100000','500');

    await t
    .click (organizationHoldingsPage.viewInvestmentButton);

    organizationHoldingsPage.removeHolding();

    await t
    .expect(holdingPage.confirmationMsg.innerText).eql('Holding successfully...')


})