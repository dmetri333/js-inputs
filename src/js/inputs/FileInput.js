import Util from '@dmetri333/page-builder-util';

class FileInput {

	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, FileInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		this.file = null;
		
		this.$element.html(Util.supplant(this.options.templates.body, {name: this.options.name}));
		
		this.setInitValue();
		this.initEvents();
    }
    
	initEvents() {
		this.$element.on('click', '.file-input-add-btn', this.open.bind(this));
		this.$element.on('click', '.file-input-edit-link', this.open.bind(this));
		this.$element.on('click', '.file-input-remove-link', this.removeFile.bind(this));
	}
	
	open() {
		
		this.options.mediaLibrary.config.options.multiSelectOn = false;
		this.options.mediaLibrary.config.options.acceptedFiles = MediaLibrary.CONFIG.acceptedFiles;
		this.options.mediaLibrary.config.options.selectCallback = this.addFile.bind(this);
		this.options.mediaLibrary.config.options.selected = this.file ? [this.file.id] : [];
		
		this.options.mediaLibrary.reset();
		this.options.mediaLibrary.open();
	}

	addFile(selected) {
		if (selected.length > 0) {
			this.file = this.prepareFile(selected[0]);
			
			this.$element.find('.file-input-preview').html(Util.supplant(this.options.templates.preview, {file: this.file}));
			
			this.$element.find('input').val(JSON.stringify(this.file));
			
			this.$element.find('.file-input-preview').show();
			this.$element.find('.file-input-add').hide();
		}
	}
	
	removeFile() {
		this.file = null;
		this.$element.find('input').val('');
		this.$element.find('.file-input-preview').html('');
		
		this.$element.find('.file-input-preview').hide();
		this.$element.find('.file-input-add').show();	
	}
	
	
	setInitValue() {
	
		if (this.options.value) {
			var file = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;
			this.addFile([file]);
		}
		
	}
	
	prepareFile(file) {
		return {
			id: file.id,
			name: file.name,
			basename: file.basename,
			size: file.size,
			path: file.path,
			type: file.type
		}
	}
		
}


FileInput.DEFAULTS = {
	name: '',
	mediaLibrary: null,
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
						<div><strong>{{file.basename}}</strong></div>
						<div><strong>File name:</strong> {{file.name}}</div>
						<div><strong>File size:</strong> {{file.size}}</div>
					</div>
					<div class="file-input-options">
						<a class="file-input-edit-link" href="javascript:void(0);">Edit</a>&nbsp;&nbsp;					
						<a class="file-input-remove-link" href="javascript:void(0);">Remove</a>
					</div>
				</div>`
	}
}

export default FileInput;