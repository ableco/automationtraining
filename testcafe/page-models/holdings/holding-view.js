import { t, Selector } from 'testcafe';
import ButtonDropdown from '../commons/button-dropdown';

class Valuation {
    constructor(selector){
        this.date = selector.find('.ValuationRow--date .PreviewRow');
        this.description = selector.find('.ValuationRow--description .PreviewRow');
        this.pricePerShare = selector.find('.ValuationRow--price .PreviewRow span');
        this.marketValue = selector.find('.ValuationRow--value .PreviewRow span')
    }
}

export default class HoldingView{
    constructor(){
        this.actionsDropdown = new ButtonDropdown(Selector('.InvestmentDetails .InvestmentDetails-actions'));
        this.title = Selector('.InvestmentDetails h1');
        this.shares = Selector('.InvestmentDetails .InvestmentAmount-quantity');
        
        // Valuation History buttons (view)
        this.editValuationButton = Selector('.InvestmentView--History span.Button-holder').withExactText('Edit').parent(0);
        this.updateValuationButton = Selector('.InvestmentView--History span.Button-holder').withExactText('Update').parent(0);
        // Valuation History buttons (edition)
        this.cancelValuationButton = Selector('.InvestmentView--History span.Button-holder').withExactText('Cancel').parent(0);
        this.saveValuationButton = Selector('.InvestmentView--History span.Button-holder').withExactText('Save Changes').parent(0);


        // Valuation list
        this.valuationList = Selector('.InvestmentView--History .Table--body .Table--row');
        this.lastValuation = null;

        // Update valuation
        this.newValuationDate = Selector('.InvestmentView--History .Table .Table--newEntry .ValuationRow--date input');
        this.newValuationDescription = Selector('.InvestmentView--History .Table .Table--newEntry .ValuationRow--description input');
        this.newValuationPrice = Selector('.InvestmentView--History .Table .Table--newEntry .ValuationRow--price input');
        this.newValuationValue = Selector('.InvestmentView--History .Table .Table--newEntry .ValuationRow--value input');

    }

    async valuationRow(selector){
        this.lastValuation = new Valuation(selector);
    }

}