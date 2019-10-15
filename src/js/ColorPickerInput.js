import Util from '@foragefox/page-builder-util';

class ColorPickerInput {
	
	constructor(container, options) {
		this.container = container;		
		this.options = $.extend(true, {}, ColorPickerInput.DEFAULTS, this.container.dataset, typeof options == 'object' && options);

		this.renderPopover();
		this.bindEvents();
	}
	
	
	renderPopover(){
		this.$container = $(this.container);
		this.$container.html(Util.supplant(this.options.templates.body, {name: this.options.name}));
		this.$input = $('#color-picker-input');
		this.$miniPalette = $('#mini-palette');
		this.$palette = $('#palette');
		this.ctx = this.$palette[0].getContext('2d');
		this.$hexInput = $('#hex');
		this.$rgbInput = $('#rgb');		
		this.$preview = $('.color-preview');
		this.$popper = $('#palette-popover');
		this.$paletteToggle = $('#palette-toggle');
		this.$clear = $('#clear-fields');
		this.hex;
		this.rgb;
		new Popper(this.$input, this.$popper, { placement: 'right' } );
		this.renderMiniPalette();
	}
	
	
	bindEvents(){
		$(document).click(this.close.bind(this))
		this.$miniPaletteItem.click(this.handleMiniPaletteSelect.bind(this));
		this.$palette.click(this.handlePaletteSelect.bind(this));
		this.$input.on('focus', this.show.bind(this))
		this.$paletteToggle.click(this.togglePalette.bind(this));

		this.$hexInput.change(this.handleManualHexInput.bind(this));
		this.$rgbInput.change(this.handleManualRgbInput.bind(this));
		this.$input.change(this.handleManualHexInput.bind(this));
		this.$clear.click(this.clearFields.bind(this));
	}
	
	clearFields(){
		this.hex = null;
		this.rgb = null;
		this.populateInputs();
	}
	
	handleManualHexInput(e){
		var newHexVal = $(e.target).val()
		if (!this.isHexColor(newHexVal.replace('#', ''))){
			return
		}
		this.hex = newHexVal;
		this.rgb = this.hexToRgb(this.hex);
		this.populateInputs();
	}
	
	
	isHexColor(hex) {
		return typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
	}
	
	
	handleManualRgbInput(e){
		this.rgb = $(e.target).val();
		this.hex = (this.rgbToHex(this.rgb)) ? this.rgbToHex(this.rgb) : this.hex;
		this.populateInputs();
	}

	
	show(){
		this.$popper.show();
		this.renderPalette();
	}
	
	
	close(e) {
		var $target = $(e.target);
		var containerId = '#' + this.$container.attr('id');
		if ($target != this.$container && !$target.closest(containerId).length){
			this.$popper.hide();
		}
	}
	
	
	togglePalette(){
		this.$palette.toggle();
		this.$miniPalette.toggle();
	}
	
	
	handleMiniPaletteSelect(e){
		var $target = $(e.target);
		this.rgb = $target.data('rgb');
		this.hex = $target.data('hex');
		this.populateInputs();		
	}
	
	
	populateInputs(){
		this.$input.val(this.hex);
		this.$hexInput.val(this.hex);
		this.$rgbInput.val(this.rgb);
		
		this.$preview.css('background-color', (this.hex) ? this.hex : '');
	}
	
	
	renderMiniPalette() {
		for (var hex of this.options.palette){
			var rgb = this.hexToRgb(hex);
			
			var paletteItem = $('<div class="palette-item"></div>')
				.css('background-color', hex)
				.data('hex', hex)
				.data('rgb', rgb);
			this.$miniPalette.append(paletteItem);
		}
		this.$miniPaletteItem = $('.palette-item');
	}
	
	
	renderPalette(){
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
	
	
	handlePaletteSelect(e) {
        var x = e.pageX - this.$palette.offset().left;
        var y = e.pageY - this.$palette.offset().top;

        var data = this.ctx.getImageData(x, y, 1, 1).data
        
        this.hex = '#' + this.decToHex(data[0]) + this.decToHex(data[1]) + this.decToHex(data[2])        
        this.rgb = this.hexToRgb(this.hex);
		
		this.populateInputs();
    }
	
	
	hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
	}
	
	
	rgbToHex(rgbStr){
		var rgb = rgbStr.split(",")
		if (rgb.length != 3 || rgb.filter(val => val < 0 || val > 255).length != 0 ) {
			return null
		}
		return '#' + this.decToHex(rgb[0]) + this.decToHex(rgb[1]) + this.decToHex(rgb[2])
	}
	
	
	decToHex(dec) {
		 var hex = parseInt(dec).toString(16);
		 return hex.length == 1 ? "0" + hex : hex;
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
		body: `
			<div class="color-preview"></div>
			<input id="color-picker-input" name="{{name}}" />
			<div id="palette-popover">
				<div id="mini-palette"></div>
				<canvas id="palette" width="300" height="150" ></canvas>
				<div class="palette-form-group">
					<label id="hexLabel" for="hex">HEX: </label>    
					<input type="text" id="hex"></input>
					<input type="text" class="color-preview"></input>
				</div>
				<div class="palette-form-group">
					<label for="rgb">RGB: </label>
					<input type="text" id="rgb"></input>					
				</div>
				<div id="palette-toolbar">
					<a id="palette-toggle" href="javascript:void(0)">toggle palettes</a>
					<a id="clear-fields" href="javascript:void(0)">clear</a>
				</div>
			</div>
		`
	}
}




export default ColorPickerInput;