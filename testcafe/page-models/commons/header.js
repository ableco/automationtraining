import { t, Selector } from "testcafe";
import ButtonDropdown from "./button-dropdown";
import SearchDropdown from "./search-dropdown";

const primaryHeader = Selector ('div .Header-primary');
const secondaryHeader = Selector ('div .Header-secondary');

export default class Header{
    constructor (){
        // Primary Header

        //Secondary Header
        this.navigationList = secondaryHeader.find(".NavigationTabs a");
        
        this.addNewDropdown = new ButtonDropdown(secondaryHeader.find('.Dropdown'));

        this.searchCompanyPortfolio = new SearchDropdown(secondaryHeader.find('div.SearchBox'));
    }
}