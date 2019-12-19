import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlContentHeader
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property 
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
	        		<picture class="vl-content-header__bg">
	        			<slot name="image"></slot>
	        		</picture>
	        		<div class="vl-layout">
	        			<div class="vl-content-header__content">
	        				<div class="vl-content-header__context vl-content-header__context--has-link">
        						<slot name="context-link"></slot>
	        				</div>
	        				<h2 class="vl-content-header__title vl-content-header__title--has-link">
			        			<slot name="title-link"></slot>
	        				</h2>
	        			</div>
	        		</div>
			    </div>
        	</header>
          `);
    }
	
	
}

define('vl-content-header', VlContentHeader);
