import { Selector } from 'testcafe';

fixture `falabella`
    .page `https://www.google.cl`;

   

test('New Test', async t => {
        const searchField = Selector('input.gLFyf')
        const searchButtton = Selector('input.gNO89b')
        const firstResult = Selector('div.dbg0pd')
        const gotourl = Selector('div.QqG1Sd')
        const gotorecipes = Selector('#new_tottus_nav_cliente_recetas').find('a')
        const buttonhigh = Selector('button').withText('ALTA')
        const gotocinnamons = Selector('div').withText('Alta').nth(24).find('div').nth(4).find('img')


    await t

        .maximizeWindow()
        .typeText(searchField, 'tottus sucursales')
        .click(searchButtton)
        .click(firstResult)
        .click(gotourl)
        .click(gotorecipes)
        .click(buttonhigh)
        .click(gotocinnamons)
        .expect(Selector('#hero').find('p').withText('– 15g canela en polvo').textContent).ok()
        .expect(Selector('#hero').find('p').withText('– 125g azúcar rubia').textContent).ok();
    
    
});