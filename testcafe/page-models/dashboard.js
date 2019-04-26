import { Selector, t }  from 'testcafe';
import HoldingAddedModal from './modals/holding-added-modal';
import Header from './commons/header'

const header = Selector ('div .Header-secondary');

export default class DashboardPage{
    constructor(){
        this.header = new Header();
        
    }

}