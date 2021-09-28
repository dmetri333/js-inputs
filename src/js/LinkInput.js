import { extend, supplant, findOne, isString, on, show, hide } from '@foragefox/doubledash';

class LinkInput {

	constructor(element, options) {
		this.element = element;
		this.options = extend(true, LinkInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		this.element.innerHTML = supplant(this.options.templates.body, {
			name: this.options.name
		});

		this.input = findOne('input', this.element);
		this.preview = findOne('.link-input-preview', this.element);
		this.add = findOne('.link-input-add', this.element);

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		on(this.element, 'click', '.link-input-add-btn', () => this.open());
		on(this.element, 'click', '.link-input-edit-link', () => this.open());
		on(this.element, 'click', '.link-input-remove-link', () => this.removeLink());
	}

	open() {
		this.options.onOpen(this);
	}

	addLink(link) {
		this.link = link;

		this.preview.innerHTML = supplant(this.options.templates.preview, { link: link });

		this.input.value = JSON.stringify(link);

		show(this.preview);
		hide(this.add);
	}

	removeLink() {
		this.link = null;

		this.input.value = '';
		this.preview.innerHTML = '';

		hide(this.preview);
		show(this.add);
	}

	initValue() {
		if (this.options.value) {
			var link = isString(this.options.value) ? JSON.parse(this.options.value) : this.options.value;
			this.link = link;
			this.addLink(link);
		}
	}

}

LinkInput.DEFAULTS = {
	name: '',
	onOpen: function () { },
	templates: {
		body: `
  			<input type="hidden" name="{{name}}" value="">
			<div class="link-input-preview" style="display: none;"></div>
			<div class="link-input-add" style="display: block;">
				<a class="btn btn-sm btn-secondary link-input-add-btn" href="javascript:void(0);">Select Link</a>
			</div>`,
		preview: `
			<div class="link-input-url">
				<div><strong>{{link.url}}</strong></div>
				{{if (link.text != '')}}
					<div><em>{{link.text}}</em></div>
				{{endif}}
			</div>
			<div class="link-input-options">
				<a class="link-input-edit-link" href="javascript:void(0);">Edit</a>&nbsp;&nbsp;
				<a class="link-input-remove-link" href="javascript:void(0);">Remove</a>
			</div>`
	}
}

export default LinkInput;