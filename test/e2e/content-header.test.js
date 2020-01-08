
const { assert, driver } = require('vl-ui-core').Test;
const VlContentHeaderPage = require('./pages/vl-content-header.page');

describe('vl-content-header', async () => {
    const vlContentHeaderPage = new VlContentHeaderPage(driver);

    before(() => {
        return vlContentHeaderPage.load();
    });


    it('ik kan een context-link meegegeven', async () => {
        const header = await vlContentHeaderPage.getHeader();
        const link = await header.getContextLink();

        assert.isTrue(await link.getText() == 'Context');
    });

    it('ik kan een title-link meegeven', async () => {
        const header = await vlContentHeaderPage.getHeader();
        const link = await header.getTitleLink();

        assert.isTrue(await link.getText() == 'Vlaanderen');
    });
});
