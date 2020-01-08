const VlContentHeader = require('../components/vl-content-header');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlContentHeaderPage extends Page {
    async _getContentHeader(selector) {
        return new VlContentHeader(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-content-header.html');
    }
}

module.exports = VlContentHeaderPage;
