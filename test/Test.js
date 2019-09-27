
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
			
			selectCallback: function(selected) {
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
			selectCallback: function(selected) {
				
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
			selectCallback: function(selected) {
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
	
}
