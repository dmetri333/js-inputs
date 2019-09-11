
class Test {

	constructor(element) {
		
		$(element).find('[data-input]').each(function(i, item) {

            switch(item.dataset.input) {
            	case 'file':
            		new Inputs.FileInput(item, { onOpen: this.fileOnOpen });
            		break;
            	case 'image':
            		new Inputs.ImageInput(item, { onOpen: this.imageOnOpen });
            		break;
            	case 'gallery':
            		new Inputs.GalleryInput(item, { onOpen: this.galleryOnOpen });
            		break;
            	case 'color-picker':
            		new Inputs.ColorPickerInput(item);
            		break;
            	case 'align':
            		new Inputs.AlignInput(item);
            		break;		
            }
		}.bind(this));
		
    }
	
	fileOnOpen(fileInput) {
		var mediaLibrary = new MediaLibrary({
			endpoints: {
				load: '/test/mock/data/media.js',
				upload: '/test/mock/endpoints/file-upload.php',
				loadFolder: '/test/mock/endpoints/load-folder.php',
				getAsset: '/test/mock/endpoints/get-asset.php'
			},
			selectCallback: fileInput.addFile.bind(fileInput),
			selected: fileInput.file ? [fileInput.file.id] : []
		});
		
		mediaLibrary.open();
	}
	
	imageOnOpen(imageInput) {
		var mediaLibrary = new MediaLibrary({
			endpoints: {
				load: '/test/mock/data/media.js',
				upload: '/test/mock/endpoints/file-upload.php',
				loadFolder: '/test/mock/endpoints/load-folder.php',
				getAsset: '/test/mock/endpoints/get-asset.php'
			},
			acceptedFiles: ['png', 'jpeg', 'jpg'],
			selectCallback: imageInput.addFile.bind(imageInput),
			selected: imageInput.file ? [imageInput.file.id] : []
		});
		
		mediaLibrary.open();
	}
	
	galleryOnOpen(galleryInput) {
		var mediaLibrary = new MediaLibrary({
			endpoints: {
				load: '/test/mock/data/media.js',
				upload: '/test/mock/endpoints/file-upload.php',
				loadFolder: '/test/mock/endpoints/load-folder.php',
				getAsset: '/test/mock/endpoints/get-asset.php'
			},
			multiSelectOn: true,
			acceptedFiles: ['png', 'jpeg', 'jpg'],
			selectCallback: galleryInput.addFiles.bind(galleryInput)
		});
		
		mediaLibrary.open();
	}
	
}
