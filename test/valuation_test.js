import HoldingPage from '../page_model/holding_page';
import ValuationPage from '../page_model/valuation_page';
import regularUser from '../helper/roles';

const pageHolding = new HoldingPage();
const pageValuation = new ValuationPage();

fixture `Holdings` 
    .beforeEach( async t => {
        await t
            .maximizeWindow()
            .useRole(regularUser);
        
    });

test('Equity - Update valuation action from actions dropdown menu | C7475', async t => {
    const holding = {
        companyName: 'EAR Company',
        portfolioName: 'EAR Portfolio',
        series: 'Common Stock',
        date : '12/01/2017',
        amount: '200',
        shares: '100'
    }

    const valuation = {
        description: 'Test Valuation Automation',
        pricePerUnit: '100.0000'
    };

    await pageHolding.createEquityHolding(holding);
    await pageValuation.createValuationFromModal(valuation);

    await t
        .expect(pageValuation.valuationModal.exists).notOk({ timeout : 10000 })
        .expect(pageValuation.valuationDescriptionTable.innerText).eql(valuation.description)
        .expect(pageValuation.valuationPricePerShareTable.innerText).eql(`$${valuation.pricePerUnit}`);
})  


