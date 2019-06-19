import {Selector} from 'testcafe';

export default class DashboardPage{
    constructor() {
        this.holdingsText = Selector('.DashboardHomeColumn .DashboardLayoutColumn-title');
        this.addInvButton = Selector('.Button-holder').withText('Add New...');
        this.dropdownHolding = Selector('a.u-dropdownLink').withText('New Holding');
    }
};