import Util from '@foragefox/page-builder-util';

class ColorPickerInput {
	
	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, ColorPickerInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		
		this.$element.html(Util.supplant(this.options.templates.body, {name: this.options.name}));
		
		this.addColorPicker();	
	}
	
	addColorPicker() {
	    var colorPicker = new ColorPicker.MultiSpectral(this.$element.find('input')[0], {
            color: this.options.value,
            history: {
                hidden: false,
                colors: this.options.palette
            }, 
        });
    }
	
}

ColorPickerInput.DEFAULTS = {
	name: '',
	value: 'white',
	palette: ['#000000', '#ffffff', '#dd3333', '#dd9933', '#eeee22', '#81d742', '#1e73be', '#8224e3'],
	templates: {
		body: `<span class="colorpicker-input colorpicker-input--position-left">
                <input type="text" name="{{name}}" class="form-control color-picker">
                <span id="colorpicker-anchor" class="colorpicker-custom-anchor colorpicker-circle-anchor">
          			<span class="colorpicker-circle-anchor__color" data-color></span>
                </span>
  			</span>`,
		
	}
}

export default ColorPickerInput;