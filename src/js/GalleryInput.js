import { extend, supplant, findOne, find, isString, on, append, closest, remove } from '@foragefox/doubledash';
import Sortable from 'sortablejs';

class GalleryInput {

	constructor(element, options) {
		this.element = element;
		this.options = extend(true, GalleryInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);

		this.files = [];

		this.element.innerHTML = supplant(this.options.templates.body, {
			name: this.options.name
		});

		this.input = findOne('input', this.element);
		this.thumbs = findOne('.gallery-input-thumbs', this.element);

		this.initValue();
		this.initEvents();
	}

	initEvents() {
		on(this.element, 'click', '.gallery-input-add-btn', () => this.open());
		on(this.element, 'click', '.gallery-input-remove-link', (event) => this.removeImage(event));
		
		Sortable.create(this.thumbs, {
			animation: 150,
			onUpdate: (event) => {
				let files = [];

				let thumbs = find('.thumb', this.thumbs);
				for (let i = 0; i < thumbs.length; i++) {
					files.push({ id: thumbs[i].dataset.id, path: findOne('img', thumbs[i]).getAttribute('src') });
				};
				
				this.files = files;
				this.input.value = JSON.stringify(this.files);
			}
		});
	}

	open() {
		this.options.onOpen(this);
	}

	addFile(file) {
		let fileIds = this.files.map(function (item) { return item.id; });

		if (!fileIds.includes(file.id)) {
			append(supplant(this.options.templates.thumb, { image: file }), this.thumbs);
			this.files.push(file);
		}

		this.input.value = JSON.stringify(this.files);
	}

	removeImage(event) {
		let target = event.delegateTarget;

		//remove thumb
		let thumbnail = closest(target, '.thumb');
		let id = thumbnail.dataset.id;

		remove(thumbnail);

		// remove from files array
		for (let i = 0; i < this.files.length; i++) {
			if (id == this.files[i].id) {
				this.files.splice(i, 1);
			}
		}

		// update input field
		this.input.value = JSON.stringify(this.files);
	}

	initValue() {
		if (this.options.value) {
			let files = isString(this.options.value) ? JSON.parse(this.options.value) : this.options.value;
			for (let i = 0; i < files.length; i++) {
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