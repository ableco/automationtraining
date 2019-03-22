import { ClientFunction } from 'testcafe';
import PageHolding from '../page_model/holding_page';
import regularUser from '../helper/roles'

const pageHolding = new PageHolding();
const holding = {
    companyName: 'EAR Company',
    portfolioName: 'EAR Portfolio',
    series: 'Common Stock',
    date : '12/01/2017',
    amount: '200',
    shares: '100'
}

fixture `Holdings` 
    .beforeEach( async t => {
        await t
            .maximizeWindow()
            .useRole(regularUser);
    });

test('Create an Equity with mandatory fields only | C1191', async t => {
    await pageHolding.createEquityHolding(holding);
    await t.expect(pageHolding.confirmationModal.innerText).eql('Investment Added!');
})

test('Create llc with mandatory fields | C81283', async t => {
    await pageHolding.createLlcHolding(holding);
    await t.expect(pageHolding.confirmationModal.innerText).eql('Investment Added!');
})

test('Deletion of an investment should redirect the user back | C3057', async t => {
    const getLocation = ClientFunction(() => document.location.href);
    const initialURL = await getLocation();
    
    await pageHolding.createEquityHolding(holding);
    await pageHolding.goToHoldingPageFromViewInvestmentModal();
    await pageHolding.deleteHolding();

    await t    
        .expect(pageHolding.deleteModal.exists).notOk({ timeout: 10000 })
        .expect(getLocation()).eql(initialURL);
})