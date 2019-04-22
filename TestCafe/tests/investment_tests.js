import adminRole from '../helpers/roles_helper';
import HomePage from '../pages/home_page';
import InvestmentCreatePage from '../pages/new_investment_page';
import InvestmentDetailPage from '../pages/investment_detail_page';

const homePage = new HomePage();
const investmentCreatePage = new InvestmentCreatePage();
const investmentDetailPage = new InvestmentDetailPage();

fixture('Investment Tests')
    .beforeEach( async t => {
        await t.useRole(adminRole);
    });                                         

  test('Create Investment', async t => {
      await t
          .click(homePage.addNewBtn)
          .click(homePage.newHoldingMenuItem)

          .click(investmentCreatePage.companyDropDown)
          .typeText(investmentCreatePage.companyInputTxt, 'Test Company')
          .pressKey('tab')

          .click(investmentCreatePage.portfolioDropDown)
          .typeText(investmentCreatePage.portfolioInputTxt, 'Test Portafolio')
          .pressKey('tab')

          .click(investmentCreatePage.equityButton)
          .click(investmentCreatePage.seriesDropDown)
          .click(investmentCreatePage.seriesOptions.withText('Series Seed'))
          .typeText(investmentCreatePage.customSeriesName, 'abc')
          .typeText(investmentCreatePage.adquisitionDate, '12252018')
          .typeText(investmentCreatePage.investmentAmount, '10000')
          .typeText(investmentCreatePage.numberOfShares, '400')
          .click(investmentCreatePage.addHoldingBtn)
          .expect(investmentCreatePage.confirmationH1.innerText).eql('Investment Added!');
  });

  test
      .before( async t => {
        await t.useRole(adminRole);
        await t.click(homePage.addNewBtn).click(homePage.newHoldingMenuItem);
        await investmentCreatePage.createEquity('Test Company', 'Test Portafolio', 'Series Seed', 'xyz', '12252018', '1000', '400');
      })
      ('Update Investment', async t => {
          const description = (new Date()).toLocaleString();
          const newPricePerShare = (Math.random() * (999.99 - 100.00) + 100.00).toFixed(2);
          await t
          .click(investmentCreatePage.confirmationBtn)
          .click(investmentDetailPage.actionsDropDown)
          .click(investmentDetailPage.actionsMenuItems.withText('Update Valuation'))
          .typeText(investmentDetailPage.updateValuationModal.descriptionInput, description)
          .typeText(investmentDetailPage.updateValuationModal.pricePerShareInput, newPricePerShare)
          .click(investmentDetailPage.updateValuationModal.saveChagnesBtn)
          .expect(investmentDetailPage.updateValuationModal.saveChagnesBtn.exists).notOk('Button Shouldnt Exist', {timeout: 15000})
          .expect(investmentDetailPage.pricePerShareColumn.count).eql(2)
          .expect(investmentDetailPage.pricePerShareColumn.nth(0).textContent).contains(newPricePerShare)
          .expect(investmentDetailPage.descriptionColumn.nth(0).textContent).eql(description);
 });

test
    .before( async t => {
        await t.useRole(adminRole)
        await t.click(homePage.addNewBtn).click(homePage.newHoldingMenuItem);
        await investmentCreatePage.createEquity('Test Company', 'Test Portafolio', 'Series Seed', 'jkl', '12252018', '1000', '400');
    })
    ('Delete Investment', async t => {       
        await t
        .click(investmentCreatePage.confirmationBtn)
        .click(investmentDetailPage.actionsDropDown)
        .click(investmentDetailPage.actionsMenuItems.withText('Delete Holding'))
        //Reason to use wait: it was necessary to add a wait (of 5 sec at least) after the creation of the investment to be deleted and 
        //before its proper deletion, otherwise the remove action doesn't find the investment created in the same test and can't remove it.
        .wait (5000) 
        .click(investmentDetailPage.deleteHoldingBtn)
        .expect(investmentDetailPage.deleteHoldingBtn.exists).notOk('Button Shouldnt Exist', {timeout: 15000})
        .expect(investmentDetailPage.alertMessage.textContent).eql('Holding successfully deleted');
        
});