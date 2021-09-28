import { extend, supplant, findOne, find, append, populateForm, on, parents, remove } from '@foragefox/doubledash';
import Sortable from 'sortablejs';

class Repeater {

	constructor(element, options) {
		this.element = element;
		this.options = extend(true, Repeater.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		append(supplant(this.options.templates.body, {
			addLabel: this.options.addLabel 
		}), this.element);

		this.template = this.buildTemplate();
		this.items = findOne('.items', this.element);
		this.itemCount = 0;

		this.populate();
		this.bindEvents();
	}

	bindEvents() {
		on(this.element, 'click', '[data-repeater-remove]', (event) => this.removeItem(event));
		on(this.element, 'click', '[data-repeater-add]', () => this.addItem());

		return Sortable.create(this.items, {
			handle: '[data-repeater-move]',
			animation: 150
		});
	}

	populate() {
		let data = this.element.dataset.value;
		
		if (data && data.constructor === Object && Object.entries(data).length !== 0) {
			let count = Object.values(data)[0].length;
		
			for (let i = 0; i < count; i++) {
				let itemData = {};

				for (const key in data) {
					const value = data[key];
					itemData[this.options.name + '-' + key] = value[i];
				}

				this.addItem(itemData);
			}
		}
	}

	addItem(data) {
		let html = supplant(this.options.templates.item, { 
			item: supplant(this.template, { index: this.itemCount })
		});

		let item = append(html, this.items);

		if (data) {
			populateForm(item, data);
		}
		
		this.options.onAdd(item);

		this.itemCount++;
	}

	removeItem(event) {
		let removeButton = event.delegateTarget;
		let item = parents(removeButton, '.item');
		remove(item[0]);

		this.options.onRemove(item);
	}

	buildTemplate() {
		let template = findOne('[data-repeater-template]', this.element);
		
		let fields = find('input, select, textarea, [data-name]', template);
		for (let i = 0; i < fields.length; i++) {
			if (fields[i].hasAttribute('name')) {
				fields[i].setAttribute('name', this.options.name + '-' + fields[i].getAttribute('name'));
			} else if ('name' in fields[i].dataset) {
				fields[i].dataset.name = this.options.name + '-' + fields[i].dataset.name;
			}
		};

		let html = template.innerHTML;

		remove(template);
		return html;
	}

}

Repeater.DEFAULTS = {
	addLabel: '+ Add',
	onAdd: function(item) {},
	onRemove: function(item) {},
	templates: {
		body: `
			<div class="items"></div>
			<div class="add-field">
				<button type="button" class="btn btn-sm btn-outline-secondary" data-repeater-add="">{{addLabel}}</button>	
			</div>
		`,
		item: `<div class='item'>{{& item}}<div/>`
	}
}

export default Repeater;