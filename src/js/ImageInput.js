import __ from '@foragefox/doubledash';

class ImageInput {

	constructor(element, options) {
		this.element = element;
		this.options = __.lang.extend(true, ImageInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		this.element.innerHTML = __.template.supplant(this.options.templates.body, {
			name: this.options.name
		});

		this.input = __.dom.findOne('input', this.element);
		this.preview = __.dom.findOne('.image-input-preview', this.element);
		this.add = __.dom.findOne('.image-input-add', this.element);

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		__.event.on(this.element, 'click', '.image-input-add-btn', () => this.open());
		__.event.on(this.element, 'click', '.image-input-edit-link', () => this.open());
		__.event.on(this.element, 'click', '.image-input-remove-link', () => this.removeImage());
	}

	open() {
		this.options.onOpen(this);
	}

	addFile(file) {
		this.file = file;

		this.preview.innerHTML = __.template.supplant(this.options.templates.preview, { image: file });
		this.input.value = JSON.stringify(file);

		__.dom.show(this.preview);
		__.dom.hide(this.add);
	}

	removeImage() {
		this.file = null;

		this.input.value = '';
		this.preview.innerHTML = '';

		__.dom.hide(this.preview);
		__.dom.show(this.add);
	}

	initValue() {

		if (this.options.value) {
			var file = __.lang.isString(this.options.value) ? JSON.parse(this.options.value) : this.options.value;
			this.file = file;
			this.addFile(file);
		}

	}

}

ImageInput.DEFAULTS = {
	name: '',
	onOpen: function () { },
	templates: {
		body: ` <input type="hidden" name="{{name}}" value="" />
				<div class="image-input-preview" style="display: none;">
				</div>
				<div class="image-input-add" style="display: block;">
					<p>
						No file selected 
						<a class="btn btn-sm btn-secondary image-input-add-btn" href="javascript:void(0);">Add Image</a>
					</p>
				</div>`,
		preview: `
				<img src="{{image.path}}" />
				<div class="image-input-meta">
					<div class="image-input-options">
						<a class="image-input-edit-link" href="javascript:void(0);">Edit</a>&nbsp;&nbsp;					
						<a class="image-input-remove-link" href="javascript:void(0);">Remove</a>
					</div>
				</div>`
	}
}

export default ImageInput;