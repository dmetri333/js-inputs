import Util from '@foragefox/page-builder-util';

class Repeater {

	constructor(element, options) {
		this.options = $.extend(true, {}, Repeater.DEFAULTS, typeof options == 'object' && options);
		this.element = $(element);

		this.storedItem = this.element.find('.template').hide();
		this.items = this.element.find('.items');
		this.bindEvents();
	}


	bindEvents() {
		this.element.on('click', '[data-repeater-remove]', this.removeItem.bind(this));
		this.element.on('click', '[data-repeater-add]', this.addItem.bind(this))
	}

	addItem() {
		this.items.append("<div class='item'>" + this.storedItem.html() + "<div/>");//.insertBefore('[data-repeater-add]');		
	}

	removeItem(event) {
		var removeButton = event.currentTarget;
		$(removeButton).parents('.item').remove();
	}

}

Repeater.DEFAULTS = {
}

export default Repeater;