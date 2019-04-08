import { Selector, t } from 'testcafe';

export default class companiesPage {
  constructor () {
    this.companiesList      = Selector('.companiesList').find('.CompanyCard')
  }

  async gotoCompanyDetailsPage (companyName) {
    await t 
      .click(this.companiesList.find('.CompanyCard-title.u-metaContentBold').withText(companyName))
  }
}


