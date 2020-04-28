
class Test {

	constructor(element) {
		this.initInputs(element);
	}

	initInputs(element) {

		$(element).find('[data-input]').each(function (i, item) {

			switch (item.dataset.input) {
				case 'file':
					new EnigmaInputs.FileInput(item, { onOpen: this.fileOnOpen });
					break;
				case 'image':
					new EnigmaInputs.ImageInput(item, { onOpen: this.imageOnOpen });
					break;
				case 'gallery':
					new EnigmaInputs.GalleryInput(item, { onOpen: this.galleryOnOpen });
					break;
				case 'color-picker':
					new EnigmaInputs.ColorPickerInput(item);
					break;
				case 'align':
					new EnigmaInputs.AlignInput(item);
					break;
				case 'link':
					new EnigmaInputs.LinkInput(item, { onOpen: this.linkOnOpen });
					break;
				case 'angle':
					new EnigmaInputs.AngleInput(item);
					break;
				case 'repeater':
					new EnigmaInputs.Repeater(item, {
						onAdd: function(item) {
							this.initInputs(item);
						}.bind(this)
					});
					break;	
			}
		}.bind(this));

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
			selectCallback: function (link) {
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
