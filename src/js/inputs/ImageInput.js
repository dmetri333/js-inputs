import Util from '@dmetri333/page-builder-util';

class ImageInput {

	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, ImageInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		this.file = null;
		
      	this.$element.html(Util.supplant(this.options.templates.body, {name: this.options.name}));
      	
      	this.setInitValue();
		this.initEvents();		
    }
    
	initEvents() {
		this.$element.on('click', '.image-input-add-btn', this.open.bind(this));
		this.$element.on('click', '.image-input-edit-link', this.open.bind(this));
		this.$element.on('click', '.image-input-remove-link', this.removeImage.bind(this));
	}
   
	open() {
		this.options.mediaLibrary.config.options.multiSelectOn = false;
		this.options.mediaLibrary.config.options.acceptedFiles = ['png', 'jpeg', 'jpg'];
		this.options.mediaLibrary.config.options.selectCallback = this.select.bind(this);
		this.options.mediaLibrary.config.options.selected = this.file ? [this.file.id] : [];
		
		this.options.mediaLibrary.reset();
		this.options.mediaLibrary.open();
	}
	
	select(selected) {
		if (selected.length > 0) {
			this.file = this.prepareFile(selected[0]);

			this.$element.find('.image-input-preview').html(Util.supplant(this.options.templates.preview, {image: this.file}));
			this.$element.find('input').val(JSON.stringify(this.file));
			
			this.$element.find('.image-input-preview').show();
			this.$element.find('.image-input-add').hide();
		}
	}

	removeImage(event) {
		this.file = null;
		this.$element.find('input').val('');
		this.$element.find('img').attr('src', '')

		this.$element.find('.image-input-preview').hide();
		this.$element.find('.image-input-add').show();	
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

ImageInput.DEFAULTS = {
	name: '',
	mediaLibrary: null,
	templates: {
		body: ` <input type="hidden" name="{{name}}" value="" />
				<div class="image-input-preview" style="display: none;">
				</div>
				<div class="image-input-add" style="display: block;">
					<p>
						No file selected 
						<a class="btn btn-sm btn-primary image-input-add-btn" href="javascipt:void(0);">Add Image</a>
					</p>
				</div>`,
		preview: `
				<img src="{{image.path}}" alt="">
				<div class="image-input-meta">
					<div class="image-input-options">
						<a class="image-input-edit-link" href="javascript:void(0);">Edit</a>&nbsp;&nbsp;					
						<a class="image-input-remove-link" href="javascript:void(0);">Remove</a>
					</div>
				</div>`		
	}
}

export default ImageInput;