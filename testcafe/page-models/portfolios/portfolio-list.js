import { Selector, t} from 'testcafe'

const portfolioList = Selector('div.PortfoliosTable .Table--body');

class Portfolio{
    constructor(name){
        this.link = portfolioList.find(".Table--row h4").withText(text);
    }
}


export default class PortfolioListPage{
    constructor(){
        this.heading = Selector('.PortfoliosView-header h1')
        this.addPortfolio = Selector('.PortfoliosView-header button')
    }
}