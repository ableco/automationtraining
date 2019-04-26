import { t } from 'testcafe';


export default class Dropdown{
    constructor(selector){
        this.button = selector.find('.SelectCurrentSelection');
        this.linkList = selector.find('li.SelectOption a')
    }

    async selectOption (option){
        await t
            .click(this.button, { visibilityCheck: true })
            .click(this.linkList.withExactText(option), { visibilityCheck: true })
    }
}