
class Test {

	constructor(element) {
		this.initInputs(element);
	}

	initInputs(element) {

		let inputs = element.querySelectorAll('[data-input]');

		for (let i = 0; i < inputs.length; i++) {
			switch (inputs[i].dataset.input) {
				case 'file':
					new EnigmaInputs.FileInput(inputs[i], { onOpen: this.fileOnOpen });
					break;
				case 'image':
					new EnigmaInputs.ImageInput(inputs[i], { onOpen: this.imageOnOpen });
					break;
				case 'gallery':
					new EnigmaInputs.GalleryInput(inputs[i], { onOpen: this.galleryOnOpen });
					break;
				case 'color-picker':
					new EnigmaInputs.ColorPickerInput(inputs[i]);
					break;
				case 'box-style':
					new EnigmaInputs.BoxStyleInput(inputs[i]);
					break;	
				case 'align':
					new EnigmaInputs.AlignInput(inputs[i]);
					break;
				case 'link':
					new EnigmaInputs.LinkInput(inputs[i], { onOpen: this.linkOnOpen });
					break;
				case 'angle':
					new EnigmaInputs.AngleInput(inputs[i]);
					break;
				case 'repeater':
					new EnigmaInputs.Repeater(inputs[i], {
						onAdd: function(item) {
							this.initInputs(item);
						}.bind(this)
					});
					break;	
			}
		}

	}


	fileOnOpen(fileInput) {

		var mediaLibrary = new MediaLibrary({

			selectCallback: function (selected) {
				if (selected.length > 0) {

					fileInput.addFile({
						id: selected[0].id,
						name: selected[0].name,
						size: selected[0].size,
						path: selected[0].path,
						type: selected[0].extension
					});

				}

			},
			selected: fileInput.file ? [fileInput.file.id] : []
		});

		mediaLibrary.open();
	}

	imageOnOpen(imageInput) {
		var mediaLibrary = new MediaLibrary({

			acceptedFiles: ['png', 'jpeg', 'jpg'],
			selectCallback: function (selected) {

				if (selected.length > 0) {

					imageInput.addFile({
						id: selected[0].id,
						path: selected[0].path
					});

				}

			},
			selected: imageInput.file ? [imageInput.file.id] : []
		});

		mediaLibrary.open();
	}

	galleryOnOpen(galleryInput) {
		var mediaLibrary = new MediaLibrary({

			multiSelectOn: true,
			acceptedFiles: ['png', 'jpeg', 'jpg'],
			selectCallback: function (selected) {
				for (var i = 0; i < selected.length; i++) {
					galleryInput.addFile({
						id: selected[i].id,
						path: selected[i].path
					});
				}

			}
		});

		mediaLibrary.open();
	}

	linkOnOpen(linkInput) {
		var linkPicker = new LinkPicker.LinkPicker({
			onSelect: function (link) {
				if (link.url)
					linkInput.addLink(link);
				else
					linkInput.removeLink();
			},
			link: linkInput.link ? linkInput.link : {}
		});

		linkPicker.open();
	}

}
