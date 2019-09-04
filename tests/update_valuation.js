import LoginPageModel from '../page_models/login_page_model';
import NewholdingPageModel from '../page_models/holding_detail_page_model';

const loginPage = new LoginPageModel();
const newholdingPage = new NewholdingPageModel();
const valuationText = "New Valuation";
const pricePerShare = "3.0000";
const marketValue = "6.00";

fixture`update valuation`
  .page`https://mighty-client-qa-stable.herokuapp.com/mighty-mouse-org/investments/bc1132b33d0cff0237219a1e47b44fec`

test("Update holding valuation", async t => {
  await loginPage.logIn({
    email: "admin@able.co",
    password: "password"
  })

  await t.expect(newholdingPage.actionsButton.textContent).eql("Actions");

  await newholdingPage.updateValuation({
    text: valuationText,
    price: pricePerShare
  });

  await t
    .expect(newholdingPage.recordDescriptionLabel.innerText).eql(valuationText)
    .expect(newholdingPage.recordPricePerShareLabel.innerText).eql(`$` + pricePerShare)
    .expect(newholdingPage.recordMarketValueLabel.innerText).eql(`$` + marketValue);
});
