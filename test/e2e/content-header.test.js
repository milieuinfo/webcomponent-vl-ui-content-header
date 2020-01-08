
const { assert, driver } = require('vl-ui-core').Test;
const VlContentHeaderPage = require('./pages/vl-content-header.page');

describe('vl-content-header', async () => {
    const vlContentHeaderPage = new VlContentHeaderPage(driver);

    before(() => {
        return vlContentHeaderPage.load();
    });


});
