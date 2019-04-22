import { Selector } from 'testcafe'

fixture('DEV Tests')
    .page('https://mighty-client-qa-stable.herokuapp.com/login');

    test("Test Selectors", async (t) => {
        //const aboutLink = Selector('#sidebar-wrapper-left > div.side-bar > div.widget > div.side-footer > a:nth-child(1)');
        
        const activityLink = Selector('a').withText('Test Company · jmc');
       
        await t
        .click(activityLink)
       
    });

    
