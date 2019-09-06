import Util from '@dmetri333/page-builder-util';
import { FileInput, ImageInput, GalleryInput, ColorPickerInput, AlignInput } from "./inputs"

class InputInitializer {

	constructor(element, mediaLibrary) {
		
		$(element).find('[data-input]').each(function(i, item) {

            switch(item.dataset.input) {
            	case 'file':
            		new FileInput(item, { mediaLibrary: mediaLibrary });
            		break;
            	case 'image':
            		new ImageInput(item, { mediaLibrary: mediaLibrary });
            		break;
            	case 'gallery':
            		new GalleryInput(item, { mediaLibrary: mediaLibrary });
            		break;
            	case 'color-picker':
            		new ColorPickerInput(item);
            		break;
            	case 'align':
            		new AlignInput(item);
            		break;		
            }
		});
		
    }
	
}

export default InputInitializer;