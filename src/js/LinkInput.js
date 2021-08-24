import __ from '@foragefox/doubledash';

class LinkInput {

	constructor(element, options) {
		this.element = element;
		this.options = __.lang.extend(true, LinkInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		this.element.innerHTML = __.template.supplant(this.options.templates.body, {
			name: this.options.name
		});

		this.input = __.dom.findOne('input', this.element);
		this.preview = __.dom.findOne('.link-input-preview', this.element);
		this.add = __.dom.findOne('.link-input-add', this.element);

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		__.event.on(this.element, 'click', '.link-input-add-btn', () => this.open());
		__.event.on(this.element, 'click', '.link-input-edit-link', () => this.open());
		__.event.on(this.element, 'click', '.link-input-remove-link', () => this.removeLink());
	}

	open() {
		this.options.onOpen(this);
	}

	addLink(link) {
		this.link = link;

		this.preview.innerHTML = __.template.supplant(this.options.templates.preview, { link: link });

		this.input.value = JSON.stringify(link);

		__.dom.show(this.preview);
		__.dom.hide(this.add);
	}

	removeLink() {
		this.link = null;

		this.input.value = '';
		this.preview.innerHTML = '';

		__.dom.hide(this.preview);
		__.dom.show(this.add);
	}

	initValue() {
		if (this.options.value) {
			var link = __.lang.isString(this.options.value) ? JSON.parse(this.options.value) : this.options.value;
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