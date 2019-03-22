import { Selector } from 'testcafe'

export default class Page {
    constructor(){
        this.txtHolding = Selector('.DashboardLayoutColumn-title')
        this.btnNewInvestment = Selector('.Button--default')
    }
}