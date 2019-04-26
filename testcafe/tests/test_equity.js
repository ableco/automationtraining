import DashboardPage from "../page-models/dashboard";
import NewHolding from "../page-models/holdings/new-holding"
import HoldingView from '../page-models/holdings/holding-view';
import CompanyView from '../page-models/companies/company-view';
import HoldingAddedModal from '../page-models/modals/holding-added-modal';
import DeleteHoldingModal from '../page-models/modals/delete-holding-modal';
import FlashMessage from "../page-models/commons/flash-message";
import { loginAccount } from "../helpers/roles";

const dashboardPage = new DashboardPage();
const newHoldingPage = new NewHolding();
const companyViewPage = new CompanyView();
const holdingViewPage = new HoldingView();

const holdingAddedModal = new HoldingAddedModal();
const deleteHoldingModal = new DeleteHoldingModal();
const flashMessage = new FlashMessage();

const test_01_data = {
    company: 'Chatous',
    portfolio: 'Test Portafolio',
    type: 'Equity',
    initialAmount: '2500',
    series: 'Series A',
    equityName: 'Equity MQ 06',
    acquisitionDate: '04/10/2019',
    salesPrice: 'Total',
    sharesNumber: '10',
}

const test_02_data = {
    company: 'Chatous',
    portfolio: 'Test Portafolio',
    type: 'Equity',
    initialAmount: '2500',
    series: 'Series A',
    equityName: 'Equity MQ 07',
    acquisitionDate: '04/10/2019',
    salesPrice: 'Total',
    sharesNumber: '10',
}

const test_03_data = {
    company: 'Chatous',
    portfolio: 'Test Portafolio',
    type: 'Equity',
    initialAmount: '2500',
    series: 'Series A',
    equityName: 'Equity MQ 08',
    acquisitionDate: '04/10/2019',
    salesPrice: 'Total',
    sharesNumber: '10',
    acquisitionDate: '04/10/2019',
    newValuationdDate:'04/15/2019',
    newValuationDescription: 'New valuation',
    newValuationPrice: '275',
    newValuationValue: '$2,750.00'
}

fixture('Equity Operations')

    .beforeEach( async t => {
        await t.useRole(loginAccount);
    });
    

test("Add new equity with mandatory fields", async(t) => {

    await dashboardPage.header.addNewDropdown.selectOption('New Holding');
    await t.expect(newHoldingPage.title.textContent).eql('Create a New Investment');
    
    await newHoldingPage.selectCompanyPortfolio(test_01_data.company, test_01_data.portfolio);

    await t
        .click(newHoldingPage.holdingList.withExactText(test_01_data.type), { visibilityCheck: true });
    
    await t
        .click(newHoldingPage.newEquity.amountInput)
        .typeText(newHoldingPage.newEquity.amountInput, test_01_data.initialAmount)

    await newHoldingPage.newEquity.seriesDropdown.selectOption(test_01_data.series);

    await t
        .typeText(newHoldingPage.newEquity.customNameInput, test_01_data.equityName);

    await t
        .selectText(newHoldingPage.newEquity.acquisitionDateInput)
        .pressKey('delete')
        .typeText(newHoldingPage.newEquity.acquisitionDateInput, test_01_data.acquisitionDate);

    await newHoldingPage.newEquity.salesPriceSelect.selectOption(test_01_data.salesPrice);

    await t
        .typeText(newHoldingPage.newEquity.sharesNumberInput, test_01_data.sharesNumber);

    await t
        .click(newHoldingPage.addholdingButton);

    await t
        .expect(holdingAddedModal.title.textContent).eql('Investment Added!');

    await t
        .expect(holdingAddedModal.info.textContent).contains(test_01_data.equityName);
    
    await t
        .click(holdingAddedModal.closeButton);

    await t
        .expect(flashMessage.message.textContent).contains('Created equity holding '+test_01_data.equityName); 
    
});

test("Delete investment", async(t) => {
    // Test data preparation: create holding
    await dashboardPage.header.addNewDropdown.selectOption('New Holding');
    await t
        .expect(newHoldingPage.title.textContent).eql('Create a New Investment');
    
    await newHoldingPage.selectCompanyPortfolio(test_02_data.company, test_02_data.portfolio);

    await newHoldingPage.addNewEquityWithMandatoryFields(test_02_data.type, test_02_data.initialAmount, test_02_data.series, test_02_data.equityName, test_02_data.acquisitionDate, test_02_data.salesPrice, test_02_data.sharesNumber);
    
    await t
        .expect(holdingAddedModal.title.textContent).eql('Investment Added!');
    
    await t
        .click(holdingAddedModal.closeButton);

    await t
        .expect(flashMessage.message.textContent).contains('Created equity holding '+test_02_data.equityName); 

    // Look for the holding
    await dashboardPage.header.searchCompanyPortfolio.selectOption(test_02_data.company,'Companies');
    
    await t
        .expect(companyViewPage.companyName.textContent).eql(test_02_data.company);
    
    await companyViewPage.openHolding(test_02_data.equityName);

    await t
        .expect(holdingViewPage.title.textContent).contains(test_02_data.equityName);

    // Delete holding
    await  holdingViewPage.actionsDropdown.selectOption('Delete Holding');

    await t
        .expect(deleteHoldingModal.info.textContent).contains(test_02_data.equityName);

    await t
        .click(deleteHoldingModal.removeButton);
    
    await t
        .expect(flashMessage.message.textContent).contains('Holding successfully deleted'); 
});

test("Verify that the 'Market Value' field in Valuations History Table is updated after the Price Per Share is updated", async(t) => {
    // Test data preparation: create holding
    await dashboardPage.header.addNewDropdown.selectOption('New Holding');
    await t
        .expect(newHoldingPage.title.textContent).eql('Create a New Investment');
    
    await newHoldingPage.selectCompanyPortfolio(test_03_data.company, test_03_data.portfolio);

    await newHoldingPage.addNewEquityWithMandatoryFields(test_03_data.type, test_03_data.initialAmount, test_03_data.series, test_03_data.equityName, test_03_data.acquisitionDate, test_03_data.salesPrice, test_03_data.sharesNumber);
    
    await t
        .expect(holdingAddedModal.title.textContent).eql('Investment Added!');
    
    await t
        .click(holdingAddedModal.closeButton);

    await t
        .expect(flashMessage.message.textContent).contains('Created equity holding '+test_03_data.equityName); 

    // Look for the holding
    await dashboardPage.header.searchCompanyPortfolio.selectOption(test_03_data.company,'Companies');

    await t
        .expect(companyViewPage.companyName.textContent).eql(test_03_data.company);

    await companyViewPage.openHolding(test_03_data.equityName);

    await t
        .expect(holdingViewPage.title.textContent).contains(test_03_data.equityName);

    // Change the valuation
    await t
        .click(holdingViewPage.updateValuationButton)
        .selectText(holdingViewPage.newValuationDate)
        .pressKey('delete')
        .typeText(holdingViewPage.newValuationDate, test_03_data.newValuationdDate)

        .typeText(holdingViewPage.newValuationDescription, test_03_data.newValuationDescription)
        .typeText(holdingViewPage.newValuationPrice, test_03_data.newValuationPrice)
        .click(holdingViewPage.newValuationValue)
        .click(holdingViewPage.saveValuationButton);

    await t
        .expect(holdingViewPage.valuationList.count).gt(1);

    await holdingViewPage.valuationRow(holdingViewPage.valuationList.nth(0));
    
    await t
        .expect(holdingViewPage.lastValuation.marketValue.textContent).eql(test_03_data.newValuationValue);


});