import Util from '@foragefox/page-builder-util';
import Sortable from 'sortablejs';

class GalleryInput {

	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, GalleryInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		this.files = [];

		this.$element.html(Util.supplant(this.options.templates.body, { name: this.options.name }));
		this.thumbs = this.$element.find('.gallery-input-thumbs');

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		this.$element.on('click', '.gallery-input-add-btn', this.open.bind(this));
		this.$element.on('click', '.gallery-input-remove-link', this.removeImage.bind(this));
		
		return Sortable.create(this.thumbs[0], {
			animation: 150
		});
	}

	open() {
		this.options.onOpen(this);
	}

	addFile(file) {
		var fileIds = this.files.map(function (item) { return item.id; });

		if (!fileIds.includes(file.id)) {
			this.thumbs.append(Util.supplant(this.options.templates.thumb, { image: file }));
			this.files.push(file);
		}

		this.$element.find('input').val(JSON.stringify(this.files));
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

	initValue() {
		if (this.options.value) {
			var files = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;
			for (var i = 0; i < files.length; i++) {
				this.addFile(files[i]);
			}
		}
	}

}


GalleryInput.DEFAULTS = {
	name: '',
	onOpen: function () { },
	templates: {
		body: ` <input type="hidden" name="{{name}}" value="" />
				<div class="gallery-input-preview">
					<div class="gallery-input-thumbs"></div>
					<div class="gallery-input-add">
						<a class="btn btn-sm btn-secondary gallery-input-add-btn" href="javascript:void(0);">Add to gallery</a>
					</div>
				</div>`,
		thumb: `<div class="thumb" data-id="{{image.id}}">
			<img src="{{image.path}}" alt="" >
			<div><a class="gallery-input-remove-link" href="javascript:void(0);">Remove</a></div>
		</div>`
	}
}

export default GalleryInput;