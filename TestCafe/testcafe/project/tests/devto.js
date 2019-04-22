import { Selector } from 'testcafe'

fixture('DEV Tests')
    .page('http://dev.to/');

    test("Check founder's names", async (t) => {
        //const aboutLink = Selector('#sidebar-wrapper-left > div.side-bar > div.widget > div.side-footer > a:nth-child(1)');
        
        const aboutLink = Selector('a').withText('About');
        const firstFounder = Selector('b').withText('Ben Halpern');
        const secondFounder = Selector('b').withText('Jess Lee');
        const thirdFounder = Selector('b').withText('Peter Frank');
        
        await t
        .click(aboutLink)
        .expect(firstFounder.exists).ok()
        .expect(secondFounder.exists).ok()
        .expect(thirdFounder.exists).ok();
    });

    
