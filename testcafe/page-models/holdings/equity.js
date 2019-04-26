import { Selector , t }  from 'testcafe';
import Dropdown from '../commons/dropdown';

export default class Equity{
    constructor(){

        //Mandatory fields
        this.seriesDropdown = new Dropdown(Selector('div.FormElement--SeriesName'));
        this.acquisitionDateInput = Selector('input[label="Acquisition date"]');
        this.amountInput = Selector('input[name="total_acquisition_amount"]');
        this.salesPriceSelect = new Dropdown(Selector('div.EquityFormTypeOfSalePrice div.Select'));
        this.sharesNumberInput = Selector('input[name="quantity"]')

        //Optional
        this.customNameInput = Selector('input[name="custom_name"]')


    }
}