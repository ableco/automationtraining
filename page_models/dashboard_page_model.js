import { Selector, t } from 'testcafe';

export default class DashboardPageModel {
  constructor() {
    this.dashboardTitle = Selector(".DashboardLayoutColumn-title");
    this.addnewButton = Selector(".Button-holder");
    this.newHoldingButton = Selector(".DropdownMenuItem").withText('New Holding');
  }
}