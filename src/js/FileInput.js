import Util from '@foragefox/page-builder-util';

class FileInput {

	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, FileInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		
		this.$element.html(Util.supplant(this.options.templates.body, {name: this.options.name}));
		
		this.initValue();
		this.initEvents();
    }
    
	initEvents() {
		this.$element.on('click', '.file-input-add-btn', this.open.bind(this));
		this.$element.on('click', '.file-input-edit-link', this.open.bind(this));
		this.$element.on('click', '.file-input-remove-link', this.removeFile.bind(this));
	}

	open() {
		this.options.onOpen(this);
	}
	
	addFile(file) {
		this.file = file;
		
		if (!file.type) {
			file.type = file.name.split('.').pop();
		}
		
		this.$element.find('.file-input-preview').html(Util.supplant(this.options.templates.preview, {file: file}));
		
		this.$element.find('input').val(JSON.stringify(file));
		
		this.$element.find('.file-input-preview').show();
		this.$element.find('.file-input-add').hide();
		
	}
	
	removeFile() {
		this.file = null;
		
		this.$element.find('input').val('');
		this.$element.find('.file-input-preview').html('');
		
		this.$element.find('.file-input-preview').hide();
		this.$element.find('.file-input-add').show();	
	}
	
	
	initValue() {
	
		if (this.options.value) {
			var file = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;
			this.file = file;
			this.addFile(file);
		}
		
	}

}


FileInput.DEFAULTS = {
	name: '',
	onOpen: function() {},
	templates: {
		body: `
  			<input type="hidden" name="{{name}}" value="">
			<div class="file-input-preview" style="display: none;"></div>
			<div class="file-input-add" style="display: block;">
				<p>
					No file selected 
					<a class="btn btn-sm btn-primary file-input-add-btn" href="#">Add File</a>
				</p>
			</div>`,
		preview: `<div class="file-input-icon">
					<div class="file-icon file-icon-lg" data-type="{{file.type}}"></div>
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