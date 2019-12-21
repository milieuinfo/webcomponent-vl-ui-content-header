import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlContentHeader
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-content-header/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-content-header/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-content-header.html|Demo}
 * 
 * 
 * TODO:
 * 	 vl-image maken met vaste sizes
 * 
 */
export class VlContentHeader extends VlElement(HTMLElement) {
	constructor() {
		super(`
			<style>
				@import '../style.css';
			</style>
			<header class="vl-content-header vl-content-header--large vl-content-header--show-mobile vl-content-header--has-context">
				<div class="vl-content-header__wrapper">
					<picture id="picture" class="vl-content-header__bg"></picture>
					<div class="vl-layout">
						<div class="vl-content-header__content">
							<div id="context" class="vl-content-header__context vl-content-header__context--has-link"></div>
							<h2 id="title" class="vl-content-header__title vl-content-header__title--has-link"></h2>
						</div>
					</div>
				</div>
			</header>
		`);
	}

	connectedCallback() {
		this.__processSlotElements();
		this._observer = this.__observeSlotElements(() => this.__processSlotElements());
	}

	disconnectedCallback() {
		this._observer.disconnect();
	}

	get pictureElement() {
		return this._shadow.querySelector('#picture');
	}

	get pictureSlotElement() {
		return this.querySelector('img[slot="image"]');
	}

	get contextElement() {
		return this._shadow.querySelector('#context');
	}

	get contextSlotElement() {
		return this.querySelector('a[slot="context-link"]');
	}

	get titleElement() {
		return this._shadow.querySelector('#title');
	}

	get titleSlotElement() {
		return this.querySelector('a[slot="title-link"]');
	}

	get _classPrefix() {
		return 'vl-content-header';
	}

	__processSlotElements() {
		this.__processImage(this.pictureSlotElement);
		this.__processContext(this.contextSlotElement);
		this.__processTitle(this.titleSlotElement);
	}

	__processImage(image) {
		this.__clearChildren(this.pictureElement);
		this.pictureElement.appendChild(image.cloneNode(true));
	}

	__processContext(context) {
		this.__clearChildren(this.contextElement);
		context = context.cloneNode(true);
		context.classList.add(this._classPrefix + '__context__link');
		this.contextElement.appendChild(context);
	}

	__processTitle(title) {
		this.__clearChildren(this.titleElement);
		title = title.cloneNode(true);
		title.classList.add(this._classPrefix + '__title__link');
		this.titleElement.appendChild(title);
	}

	__clearChildren(element) {
		while (element.hasChildNodes()) {
			element.firstChild.remove();
		}
	}

	__observeSlotElements(callback) {
		const observer = new MutationObserver(callback);
		observer.observe(this, { attributes: true, childList: true, characterData: true, subtree: true });
		return observer;
	}
}

define('vl-content-header', VlContentHeader);
