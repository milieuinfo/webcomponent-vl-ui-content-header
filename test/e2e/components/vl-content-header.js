const { VlElement } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlContentHeader extends VlElement {  
    constructor(driver, selector) {
        super(driver, selector);
    }

    async getImage() {
        return this.shadowRoot.findElement(By.css('#picture'));
    }

    async getContextLink() {
        return this.shadowRoot.findElement(By.css('#context>a'));
    }

    async getTitleLink() {
        return this.shadowRoot.findElement(By.css('#title>a'));
    }
   
}

module.exports = VlContentHeader;
