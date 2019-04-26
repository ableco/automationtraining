import { Selector, t }  from 'testcafe';
import Header from '../commons/header';
import ButtonDropdown from '../commons/button-dropdown';

export default class CompanyView{
    constructor(){
        this.header = new Header();
        
        // Company header
        this.companyName = Selector('.CompanyProfileHeader-info h1');
        this.companyTabs = Selector('.CompanyProfileTabs .NavigationTabs-singleTab a');

        // Holdings
        this.expandCollapseDropdown = new ButtonDropdown(Selector('.CompanyProfile-content .ExpandCollapseDropdown'));

        // Investment List
        this.companyList = Selector('.ProfileTableRowDetail-value--investmentName a');

    }

    async selectTab(option){
        await t
            .click(this.companyTabs.withExactText(option), { visibilityCheck: true })
    }

    async selectHolding(name){
        await t
        .click(this.companyList.withExactText(name), { visibilityCheck: true })
    }

    async openHolding(name){
        await this.selectTab('My Holdings');

        await this.expandCollapseDropdown.selectOption('Expand all');
    
        await this.selectHolding(name);
    }

}