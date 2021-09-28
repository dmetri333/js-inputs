import { extend, supplant, findOne, isString, on, show, hide } from '@foragefox/doubledash';

class ImageInput {

	constructor(element, options) {
		this.element = element;
		this.options = extend(true, ImageInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		this.element.innerHTML = supplant(this.options.templates.body, {
			name: this.options.name
		});

		this.input = findOne('input', this.element);
		this.preview = findOne('.image-input-preview', this.element);
		this.add = findOne('.image-input-add', this.element);

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		on(this.element, 'click', '.image-input-add-btn', () => this.open());
		on(this.element, 'click', '.image-input-edit-link', () => this.open());
		on(this.element, 'click', '.image-input-remove-link', () => this.removeImage());
	}

	open() {
		this.options.onOpen(this);
	}

	addFile(file) {
		this.file = file;

		this.preview.innerHTML = supplant(this.options.templates.preview, { image: file });
		this.input.value = JSON.stringify(file);

		show(this.preview);
		hide(this.add);
	}

	removeImage() {
		this.file = null;

		this.input.value = '';
		this.preview.innerHTML = '';

		hide(this.preview);
		show(this.add);
	}

	initValue() {

		if (this.options.value) {
			var file = isString(this.options.value) ? JSON.parse(this.options.value) : this.options.value;
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