import Util from '@dmetri333/page-builder-util';

class GalleryInput {

	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, GalleryInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		this.files = [];
		
		this.$element.html(Util.supplant(this.options.templates.body, {name: this.options.name}));

		this.setInitValue();
		this.initEvents();
	}
	    
	initEvents() {
		this.$element.on('click', '.gallery-input-add-btn', this.open.bind(this));
		this.$element.on('click', '.gallery-input-remove-link', this.removeImage.bind(this));
	}
	
	open() {
		this.options.mediaLibrary.config.options.multiSelectOn = true;
		this.options.mediaLibrary.config.options.acceptedFiles = ['png', 'jpeg', 'jpg'];
		this.options.mediaLibrary.config.options.selectCallback = this.addFiles.bind(this);
		
		this.options.mediaLibrary.reset();
		this.options.mediaLibrary.open();
	}
		
	addFiles(selected) {
		if (selected.length > 0) {	
			var thumbnails = this.$element.find('.gallery-input-thumbs');
			
			var inputIds = this.getImageIdList(this.files);
			
			for (var j = 0; j < selected.length; j++) {
				var image = this.prepareFile(selected[j]);
				if (!inputIds.includes(image.id)) {	
					this.files.push(image);
					thumbnails.append(Util.supplant(this.options.templates.thumb, {image: image}));
				}				
			}
			
			this.$element.find('input').val(JSON.stringify(this.files));
		}
		
	}
	
	setInitValue() {
		if (this.options.value) {
			var files = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;
			this.addFiles(files);
		}
	}
	
	removeImage(event) {
		var target = event.currentTarget;

		//remove thumb
		var thumbnail = target.closest('.thumb');
		thumbnail.remove();
		
		// remove from files array
		var id = $(thumbnail).attr('data-id');
		for (var i = 0; i < this.files.length; i++) {
			if (id == this.files[i].id) {
				this.files.splice(i, 1);
			}
		}
		
		// update input field
		this.$element.find('input').val(JSON.stringify(this.files));	
	}
	
	getImageIdList(images) {
		var list = [];
		for (var i = 0; i < images.length; i++) {
			list.push(images[i].id);
		}
		
		return list;
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


GalleryInput.DEFAULTS = {
	name: '',
	mediaLibrary: null,
	templates: {
		body: ` <input type="hidden" name="{{name}}" value="" />
				<div class="gallery-input-preview">
					<div class="gallery-input-thumbs"></div>
					<div class="gallery-input-add">
						<a class="btn btn-sm btn-primary gallery-input-add-btn" href="javascript:void(0);">Add to gallery</a>
					</div>
				</div>`,
		thumb: `<div class="thumb" data-id="{{image.id}}">
			<img src="{{image.path}}" alt="" >
			<div><a class="gallery-input-remove-link" href="javascript:void(0);">Remove</a></div>
		</div>`
	}
}

export default GalleryInput;