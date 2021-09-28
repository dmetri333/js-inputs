import { extend, supplant, findOne, on, trigger, append, contains, toggle, hide, show, offset, create, width, height } from '@foragefox/doubledash';
import { createPopper } from '@popperjs/core';


class ColorPickerInput {

	constructor(element, options) {
		this.element = element;
		this.options = extend(true, ColorPickerInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
       
		append(supplant(this.options.templates.input, {
			name: this.options.name,
			size: this.options.fieldsize,
			placeholder: this.options.placeholder 
		}), this.element);

		append(this.options.templates.popover, this.element);

		this.open = false;

		this.renderPopover();
		this.bindEvents();

		if (this.options.value) {
			this.input.value = this.options.value;
			trigger(this.input, 'change');
		}
	}

	renderPopover() {
		this.input = findOne('.color-input', this.element);
		this.popper = findOne('.palette-popover', this.element);
		this.miniPalette = findOne('.mini-palette', this.element);
		this.palette = findOne('.palette', this.element);
		this.ctx = this.palette.getContext('2d');
		this.hexInput = findOne('.hex', this.element);
		this.rgbInput = findOne('.rgb', this.element);
		this.preview = findOne('.color-preview', this.element);
		this.paletteToggle = findOne('.palette-toggle', this.element);
		this.clear = findOne('.clear-fields', this.element);

		createPopper(this.input, this.popper, { placement: this.options.placement });

		this.renderMiniPalette();
	}

	bindEvents() {
		on(document, 'click', (event) => this.close(event));
		on(this.input, 'focus', () => this.show());
		on(this.paletteToggle, 'click', () => this.togglePalette());
		on(this.clear, 'click', () => this.clearFields());
		on(this.miniPalette, 'click', '.palette-item', (event) => this.handleMiniPaletteSelect(event));
		on(this.palette, 'click', (event) => this.handlePaletteSelect(event));
		on(this.hexInput, 'change', (event) => this.handleManualHexInput(event));
		on(this.rgbInput, 'change', (event) => this.handleManualRgbInput(event));
		on(this.input, 'change', (event) => this.handleManualInput(event));
	}

	close(event) {
		let target = event.target;

		if (target != this.element && !contains(this.element, target)) {
			this.open = false;
			hide(this.popper);
		}
	}

	show() {
		this.open = true;
		show(this.popper, 'block');
		this.renderPalette();
	}

	clearFields() {
		this.populateInputs(null, null);
	}

	togglePalette() {
		toggle(this.palette);
		toggle(this.miniPalette);
	}

	populateInputs(hex, rgb) {
		this.input.value = rgb;
		this.hexInput.value = hex;
		this.rgbInput.value = rgb;

		this.preview.style.backgroundColor = (rgb ? rgb : '');
	}


	handleManualInput(event) {
		let value = event.target.value;
		if (this.isHexColor(value)) {
			this.handleManualHexInput(event);
		}

		if (this.isRgb(value)) {
			this.handleManualRgbInput(event);
		}

		return;
	}

	handleManualHexInput(event) {
		let hex = event.target.value;
		if (!this.isHexColor(hex)) {
			return;
		}

		let rgb = this.hexToRgb(hex);
		this.populateInputs(hex, rgb);
	}

	handleManualRgbInput(event) {
		let rgb = event.target.value;
		if (!this.isRgb(rgb)) {
			return;
		}

		let hex = this.rgbToHex(rgb) ? this.rgbToHex(rgb) : hex;
		this.populateInputs(hex, rgb);
	}

	handleMiniPaletteSelect(event) {
		let target = event.target;
		let hex = target.dataset.hex;
		let rgb = target.dataset.rgb;
		this.populateInputs(hex, rgb);
	}

	handlePaletteSelect(event) {
		let paletteOffset = offset(this.palette);
		let x = event.pageX - paletteOffset.left;
		let y = event.pageY - paletteOffset.top;

		let data = this.ctx.getImageData(x, y, 1, 1).data

		let hex = '#' + this.decToHex(data[0]) + this.decToHex(data[1]) + this.decToHex(data[2])
		let rgb = this.hexToRgb(hex);

		this.populateInputs(hex, rgb);
	}

	renderMiniPalette() {
		for (let hex of this.options.palette) {
			let rgb = this.hexToRgb(hex);

			let paletteItem = create('div', { 'class': 'palette-item' });
			paletteItem.style.backgroundColor = hex;
			paletteItem.dataset.hex = hex;
			paletteItem.dataset.rgb = rgb;

			append(paletteItem, this.miniPalette);
		}
	}

	renderPalette() {
		let gradient = this.ctx.createLinearGradient(0, 0, width(this.palette), 0);

		gradient.addColorStop(0,    "rgb(255,   0,   0)");
		gradient.addColorStop(0.15, "rgb(255,   0, 255)");
		gradient.addColorStop(0.33, "rgb(0,     0, 255)");
		gradient.addColorStop(0.49, "rgb(0,   255, 255)");
		gradient.addColorStop(0.67, "rgb(0,   255,   0)");
		gradient.addColorStop(0.84, "rgb(255, 255,   0)");
		gradient.addColorStop(1,    "rgb(255,   0,   0)");

		this.ctx.fillStyle = gradient
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		gradient = this.ctx.createLinearGradient(0, 0, 0, height(this.palette));
		gradient.addColorStop(0,   "rgba(255, 255, 255, 1)");
		gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
		gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
		gradient.addColorStop(1,   "rgba(0,     0,   0, 1)");

		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	hexToRgb(hex) {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', 1)' : null;
	}
    
	rgbToHex(rgba) {
        rgba = rgba.substr(5).split(")")[0].split(',');
	  
        let r = (+rgba[0]).toString(16),
			g = (+rgba[1]).toString(16),
			b = (+rgba[2]).toString(16),
			a = Math.round(+rgba[3] * 255).toString(16);
	  
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;

        return "#" + r + g + b;
	}

	decToHex(dec) {
		let hex = parseInt(dec).toString(16);
		return hex.length == 1 ? '0' + hex : hex;
	}

	isHexColor(hex) {
		return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
	}

	isRgb(rgb) {
		return /rgba\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*(1|0?\.\d+)\)/i.test(rgb);
	}

	hexFix(str) {
		let v, w;
		v = parseInt(str, 16);	// in rrggbb
		if (str.length == 3) {
			// nybble colors - fix to hex colors
			//  0x00000rgb              -> 0x000r0g0b
			//  0x000r0g0b | 0x00r0g0b0 -> 0x00rrggbb
			w = ((v & 0xF00) << 8) | ((v & 0x0F0) << 4) | (v & 0x00F);
			v = w | (w << 4);
		}
		return v.toString(16).toUpperCase();
	}

}


ColorPickerInput.DEFAULTS = {
	name: '',
	value: '',
	fieldsize: '',
	placeholder: '',
	placement: 'bottom',
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
			<div class="input-group input-group-{{size}}">
				<div class="input-group-prepend">
					<span class="input-group-text color-preview"></span>
				</div>
				<input type="text" class="form-control color-input" name="{{name}}" placeholder="{{placeholder}}" autocomplete="off" />
			</div>
			`,
		popover: `
			<div class="palette-popover">
				<div class="mini-palette"></div>
				<canvas class="palette" width="300" height="150" ></canvas>
				<div class="palette-form-group">
					<label class="hexLabel" for="hex">HEX:</label>    
					<input type="text" name="hex" class="hex" pattern="#([0-9A-F]{3}){1,2}" autocomplete="off"></input>
					<div class="color-preview"></div>
				</div>
				<div class="palette-form-group">
					<label for="rgb">RGB:</label>
					<input type="text" name="rgb" class="rgb" autocomplete="off" pattern="[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}"></input>	
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