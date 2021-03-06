
const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlContentHeaderPage = require('./pages/vl-content-header.page');

describe('vl-content-header', async () => {
  let vlContentHeaderPage;

  before(() => {
    vlContentHeaderPage = new VlContentHeaderPage(getDriver());
    return vlContentHeaderPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlContentHeaderPage.hasWcagIssues());
  });

  it('als gebruiker kan ik een context-link zien in de content header', async () => {
    const header = await vlContentHeaderPage.getHeader();
    const link = await header.getContextLink();
    await assert.eventually.equal(link.getText(), 'Context');
  });

  it('als gebruiker kan ik de title-link zien in de content header', async () => {
    const header = await vlContentHeaderPage.getHeader();
    const link = await header.getTitleLink();
    await assert.eventually.equal(link.getText(), 'Vlaanderen');
  });

  it('als gebruiker kan ik de afbeelding zien in de content header', async () => {
    const header = await vlContentHeaderPage.getHeader();
    await assert.eventually.isNotNull(header.getImageComponent());
  });
});
