import Util from '@foragefox/page-builder-util';

class ColorPickerInput {
	
	constructor(container, options) {
		this.container = container;		
		this.$container = $(this.container);
		this.options = $.extend(true, {}, ColorPickerInput.DEFAULTS, this.container.dataset, typeof options == 'object' && options);
		
		this.$container.append(Util.supplant(this.options.templates.input, {name: this.options.name}));
		this.$container.append(Util.supplant(this.options.templates.popover));
		
		this.renderPopover();
		this.bindEvents();
		
		if (this.options.value) {
			this.$input.val(this.options.value);
			this.$input.change();
		}
	}
	
	renderPopover() {
		
		this.$input = this.$container.find('.color-input');
		this.$popper = this.$container.find('.palette-popover');
		this.$miniPalette = this.$container.find('.mini-palette');
		this.$palette = this.$container.find('.palette');
		this.ctx = this.$palette[0].getContext('2d');
		this.$hexInput = this.$container.find('.hex');
		this.$rgbInput = this.$container.find('.rgb');		
		this.$preview = this.$container.find('.color-preview');
		this.$paletteToggle = this.$container.find('.palette-toggle');
		this.$clear = this.$container.find('.clear-fields');
		
		this.$hexInput[0].setCustomValidity('Please enter a valid hex color code.');
		this.$rgbInput[0].setCustomValidity('Please enter a valid RGB value.');
		
		new Popper(this.$input, this.$popper, { placement: 'bottom' } );
		
		this.renderMiniPalette();
	}
	
	bindEvents() {
		$(document).on('click', this.close.bind(this));
		this.$input.on('focus', this.show.bind(this));
		this.$paletteToggle.on('click', this.togglePalette.bind(this));
		this.$clear.on('click', this.clearFields.bind(this));
		this.$miniPalette.on('click', '.palette-item', this.handleMiniPaletteSelect.bind(this));
		this.$palette.on('click', this.handlePaletteSelect.bind(this));
		this.$hexInput.on('change', this.handleManualHexInput.bind(this));
		this.$rgbInput.on('change', this.handleManualRgbInput.bind(this));
		this.$input.on('change', this.handleManualHexInput.bind(this));
	}
	
	close(e) {
		var $target = $(e.target);
		if ($target != this.$container && !$target.closest(this.$container).length){
			this.$popper.hide();
		}
	}
	
	show() {
		this.$popper.show();
		this.renderPalette();
	}
	
	clearFields() {
		this.populateInputs(null, null);
	}
	
	togglePalette() {
		this.$palette.toggle();
		this.$miniPalette.toggle();
	}
	
	populateInputs(hex, rgb) {
		this.$input.val(hex);
		this.$hexInput.val(hex);
		this.$rgbInput.val(rgb);
		
		this.$preview.css('background-color', (hex) ? hex : '');
	}
	
	handleManualHexInput(e) {
		var newHexVal = $(e.target).val()
		if (!this.isHexColor(newHexVal)) {
			this.$hexInput[0].reportValidity();
			return
		}
		
		var hex = newHexVal;
		var rgb = this.hexToRgb(hex);
		this.populateInputs(hex, rgb);
	}

	handleManualRgbInput(e) {
		var rgb = $(e.target).val();
		if (!this.isRgb(rgb)) {
			this.$rgbInput[0].reportValidity();
			return
		}
		
		var hex = (this.rgbToHex(rgb)) ? this.rgbToHex(rgb) : hex;
		this.populateInputs(hex, rgb);
	}

	handleMiniPaletteSelect(e) {
		var $target = $(e.target);
		var rgb = $target.data('rgb');
		var hex = $target.data('hex');
		this.populateInputs(hex, rgb);		
	}
	
	handlePaletteSelect(e) {
        var x = e.pageX - this.$palette.offset().left;
        var y = e.pageY - this.$palette.offset().top;

        var data = this.ctx.getImageData(x, y, 1, 1).data
        
        var hex = '#' + this.decToHex(data[0]) + this.decToHex(data[1]) + this.decToHex(data[2])        
        var rgb = this.hexToRgb(hex);
		
		this.populateInputs(hex, rgb);
    }
	
	renderMiniPalette() {
		for (var hex of this.options.palette) {
			var rgb = this.hexToRgb(hex);
			
			var paletteItem = $('<div class="palette-item"></div>')
				.css('background-color', hex)
				.data('hex', hex)
				.data('rgb', rgb);
			this.$miniPalette.append(paletteItem);
		}
	}
	
	renderPalette() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.$palette.width(), 0);

        gradient.addColorStop(0,    "rgb(255,   0,   0)");
        gradient.addColorStop(0.15, "rgb(255,   0, 255)");
        gradient.addColorStop(0.33, "rgb(0,     0, 255)");
        gradient.addColorStop(0.49, "rgb(0,   255, 255)");
        gradient.addColorStop(0.67, "rgb(0,   255,   0)");
        gradient.addColorStop(0.84, "rgb(255, 255,   0)");
        gradient.addColorStop(1,    "rgb(255,   0,   0)");
        
        this.ctx.fillStyle = gradient
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        gradient = this.ctx.createLinearGradient(0, 0, 0, this.$palette.height());
        gradient.addColorStop(0,   "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
        gradient.addColorStop(1,   "rgba(0,     0,   0, 1)");
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}
	
	hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
	}
	
	rgbToHex(rgbStr) {
		var rgb = rgbStr.split(',')
		if (rgb.length != 3 || rgb.filter(val => val < 0 || val > 255).length != 0 ) {
			return null
		}
		return '#' + this.decToHex(rgb[0]) + this.decToHex(rgb[1]) + this.decToHex(rgb[2])
	}
	
	decToHex(dec) {
		 var hex = parseInt(dec).toString(16);
		 return hex.length == 1 ? '0' + hex : hex;
	}
	
	isHexColor(hex) {
		return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
	}
	
	isRgb(rgb) {
		return /^[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}$/i.test(rgb);
	}
	
}
	

ColorPickerInput.DEFAULTS = {
	name: '',
	value: 'white',
	palette: [
		'#BFEDD2',
		'#FBEEB8',
		'#F8CAC6',
		'#ECCAFA',
		'#C2E0F4',
		'#2DC26B',
		'#F1C40F',
		'#E03E2D',
		'#B96AD9',
		'#3598DB',
		'#169179',
		'#E67E23',
		'#BA372A',
		'#843FA1',
		'#236FA1',
		'#ECF0F1',
		'#CED4D9',
		'#95A5A6',
		'#7E8C8D',
		'#34495E',
		'#000000',
		'#FFFFFF',
	],
	templates: {
		input: `
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text color-preview"></span>
				</div>
				<input type="text" class="form-control color-input" name="{{name}}" autocomplete="off" />
			</div>
			`,
		popover: `
			<div class="palette-popover">
				<div class="mini-palette"></div>
				<canvas class="palette" width="300" height="150" ></canvas>
				<div class="palette-form-group">
					<label class="hexLabel" for="hex">HEX: </label>    
					<input type="text" class="hex" pattern="#([0-9A-F]{3}){1,2}" autocomplete="off"></input>
					<div class="color-preview"></div>
				</div>
				<div class="palette-form-group">
					<label for="rgb">RGB: </label>
					<input name="rgb" class="rgb" autocomplete="off" pattern="[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}"></input>	
				</div>
				<div class="palette-toolbar">
					<a class="clear-fields" href="javascript:void(0)"><svg width="24" height="24"><path stroke="#E03E2D" stroke-width="2" d="M21 3L3 21" fill-rule="evenodd"></path></svg></a>
					<a class="palette-toggle" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg></a>
				</div>
			</div>
		`
	}
}




export default ColorPickerInput;