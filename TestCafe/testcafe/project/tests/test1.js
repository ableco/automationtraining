import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://mighty-client-qa-stable.herokuapp.com/`;
  

test('My first test', async t => {
    await t
    .typeText('.InputText', 'admin@able.co')
    .click('#submit-button')

    const articleHeader = await Selector ('.result-content').find('h1');

    //Obtain the text of the article header
    let headerText = await articleHeader.innerText;
    console.log(headerText);


});
