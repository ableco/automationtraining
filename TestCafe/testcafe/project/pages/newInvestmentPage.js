import {Selector} from 'testcafe';

export default class NewInvestmentPage {
    constructor(){
        this.header = Selector('h1.u-heading');
        this.companyDropDown = Selector('label').withText('Company').nextSibling('div[id]');
        this.companyInputTxt = Selector(this.companyDropDown).find('input.InputText');

        this.portfolioDropDown = Selector('label').withText('Portfolio').nextSibling('div[id]');
        this.portfolioInputTxt = Selector(this.portfolioDropDown).find('input.InputText');

        this.equityButton = Selector('.TabButton').withText('Equity');

        this.seriesDropDown = Selector('label').withText('Series').nextSibling('div[id]');
        this.seriesOptions = Selector(this.seriesDropDown).find('.SelectOptions a.SelectOption-link');

        this.customSeriesName = Selector('label').withText('Custom Series Name').nextSibling('div[id]').find('input.InputText');
        this.adquisitionDate = Selector('label').withText('Acquisition date').nextSibling('div[id]').find('input.InputText');
        this.investmentAmount = Selector('label').withText('Investment amount').nextSibling('div[id]').find('input.InputText');
        this.numberOfShares = Selector('label').withText('Number of shares').nextSibling('div[id]').find('input.InputText');

        this.addHoldingBtn = Selector('button').withText('Add Holding');

        this.confirmationH1 = Selector('h1.CreatedInvestmentConfirmation-headline');
        this.viewInvestment = Selector('.btn').find('span').withText('View Investment');

          //Delete holding
          this.actionsMenu = Selector('.btn').find('span').withText('Actions');
          this.deleteOption = Selector('.DropdownMenu').find('li').withText('Delete Holding');
          this.deleteModal = Selector('.ModalContent');
          this.removeButton = Selector('.ModalFooter-actionButtons .btn').withText('Remove');
          this.message = Selector ('.Alert-body');
         
    }
}
