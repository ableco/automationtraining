import {Selector} from 'testcafe';

export default class HomePage {
    constructor(){
        this.dashboardLnk = Selector('a.u-tabDefault').withText('Dashboard');
        this.addNewBtn = Selector('button').withText('Add New...');
        this.newHoldingMenuItem = Selector('a.u-dropdownLink').withText('New Holding');
    }
}