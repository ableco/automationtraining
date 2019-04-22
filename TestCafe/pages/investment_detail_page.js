import {Selector} from 'testcafe';

export default class InvestmentDetailPage{
    constructor(){
        this.actionsDropDown = Selector('button').withText('Actions');
        this.actionsMenuItems = Selector('.DropdownMenu a');

        //Valuation History Section
        this.pricePerShareColumn = Selector('.ValuationRow--price span');
        this.descriptionColumn = Selector('.ValuationRow--description div').filterVisible();

        //Modal Delete
        this.deleteHoldingBtn = Selector('.modalOverlay button').withText('Remove');

        //Message
        this.alertMessage = Selector('.Alert-body');

        this.updateValuationModal = {
            descriptionInput: Selector('input').withAttribute('placeholder', 'Add description...').filterVisible(),
            pricePerShareInput: Selector('input').withAttribute('placeholder', '0.0000').filterVisible(),
            saveChagnesBtn: Selector('button').withText('Save Changes').filterVisible()
        };
    }
}