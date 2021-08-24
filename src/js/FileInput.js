import __ from '@foragefox/doubledash';

class FileInput {

	constructor(element, options) {
		this.element = element;
		this.options = __.lang.extend(true, FileInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		this.element.innerHTML = __.template.supplant(this.options.templates.body, {
			name: this.options.name
		});

		this.input = __.dom.findOne('input', this.element);
		this.preview = __.dom.findOne('.file-input-preview', this.element);
		this.add = __.dom.findOne('.file-input-add', this.element);

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		__.event.on(this.element, 'click', '.file-input-add-btn', () => this.open());
		__.event.on(this.element, 'click', '.file-input-edit-link', () => this.open());
		__.event.on(this.element, 'click', '.file-input-remove-link', () => this.removeFile());
	}

	open() {
		this.options.onOpen(this);
	}

	addFile(file) {
		this.file = file;

		if (!file.type) {
			file.type = file.name.split('.').pop();
		}

		this.preview.innerHTML = __.template.supplant(this.options.templates.preview, { file: file });
		this.input.value = JSON.stringify(file);

		__.dom.show(this.preview);
		__.dom.hide(this.add);
	}

	removeFile() {
		this.file = null;

		this.input.value = '';
		this.preview.innerHTML = '';

		__.dom.hide(this.preview);
		__.dom.show(this.add);
	}

	initValue() {
		if (this.options.value) {
			let file = __.lang.isString(this.options.value) ? JSON.parse(this.options.value) : this.options.value;
			this.file = file;
			this.addFile(file);
		}
	}

}


FileInput.DEFAULTS = {
	name: '',
	onOpen: function () { },
	templates: {
		body: `
  			<input type="hidden" name="{{name}}" value="">
			<div class="file-input-preview" style="display: none;"></div>
			<div class="file-input-add" style="display: block;">
				<p>
					No file selected 
					<a class="btn btn-sm btn-secondary file-input-add-btn" href="javascript:void(0);">Add File</a>
				</p>
			</div>`,
		preview: `<div class="file-input-icon">
					<div class="file-icon" data-type="{{file.type}}"></div>
				</div>
				<div class="file-input-details">
					<div class="file-input-meta">
						<div><strong>{{file.name}}</strong></div>
						<div>{{file.size}}</div>
					</div>
					<div class="file-input-options">
						<a class="file-input-edit-link" href="javascript:void(0);">Edit</a>&nbsp;&nbsp;					
						<a class="file-input-remove-link" href="javascript:void(0);">Remove</a>
					</div>
				</div>`
	}
}

export default FileInput;