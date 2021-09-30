import { extend, supplant, findOne, on, append, populateForm, parseForm } from '@foragefox/doubledash';
import ColorPickerInput from './ColorPickerInput';
import { createPopper } from '@popperjs/core';

class BoxStyleInput {

	constructor(element, options) {
		this.element = element;
		this.options = extend(true, BoxStyleInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
       
		append(supplant(this.options.templates.input, {
			name: this.options.name
		}), this.element);

		this.input = findOne('input', this.element);

		this.colorPicker;
		this.currentProperty = '';
		this.data = {};

		this.bindEvents();

		if (this.options.value) {
			this.input.value = this.options.value;
			this.data = JSON.parse(this.options.value);
		}

		this.setLabels();
	}

	bindEvents() {
		on(this.element, 'click', '.close', () => this.close());
		on(this.element, 'click', '[data-prop]', (event) => this.show(event));
		on(this.element, 'click', '.save', () => this.save());
	}

	close() {
		if (this.popper) {
			this.popper.destroy()
		}

		if (this.popperEl) {
			this.popperEl.remove();
		}

		this.currentProperty = '';
	}

	show(event) {
		let target = event.target;

		// same property dont reopen it
		if (this.currentProperty == target.dataset.prop) {
			return;
		}

		this.close();

		this.currentProperty = target.dataset.prop;
		let type = target.dataset.type;

		this.popperEl = append(this.options.templates.popovers[type].trim(), this.element);

		this.popper = createPopper(target, this.popperEl, { placement: this.options.placement });
	
		if (this.data[this.currentProperty])
			populateForm(findOne('form', this.popperEl), this.data[this.currentProperty]);

		if (type == 'border') {
			this.colorPicker = new ColorPickerInput(findOne('[data-input]', this.popperEl));
		}

	}

	save() {
		let label = findOne('[data-prop=' + this.currentProperty + ']', this.element);
		let meta = parseForm(this.popperEl);

		if (meta.size == '') {
			delete this.data[this.currentProperty];
		} else {
			this.data[this.currentProperty] = meta;	
		}
		
		label.innerText = meta.size;
		this.input.value = JSON.stringify(this.data);
		this.close();
	}

	setLabels() {
		for (const property in this.data) {
			let label = findOne('[data-prop=' + property + ']', this.element);
			if (label && this.data[property].size != '') {
				label.innerText = this.data[property].size;
			}
		}
	}

}


BoxStyleInput.DEFAULTS = {
	name: '',
	value: '',
	placement: 'bottom',
	templates: {
		input: `
			<input type="hidden" name="{{name}}" value="">
			<div class="box-style-input-margin">
				<span class="box-style-input-label">margin</span>
				<a class="prop prop-t" data-type="margin" data-prop="mt"></a>
				<a class="prop prop-r" data-type="margin" data-prop="mr"></a>
				<a class="prop prop-b" data-type="margin" data-prop="mb"></a>
				<a class="prop prop-l" data-type="margin" data-prop="ml"></a>
				
				<div class="box-style-input-border">
					<span class="box-style-input-label">border</span>
					<a class="prop prop-t" data-type="border" data-prop="bt"></a>
					<a class="prop prop-r" data-type="border" data-prop="br"></a>
					<a class="prop prop-b" data-type="border" data-prop="bb"></a>
					<a class="prop prop-l" data-type="border" data-prop="bl"></a>

					<div class="box-style-input-padding">
						<span class="box-style-input-label">padding</span>
						<a class="prop prop-t" data-type="padding" data-prop="pt"></a>
						<a class="prop prop-r" data-type="padding" data-prop="pr"></a>
						<a class="prop prop-b" data-type="padding" data-prop="pb"></a>
						<a class="prop prop-l" data-type="padding" data-prop="pl"></a>

						<div class="box-style-input-div"></div>
					</div>
				</div>
			</div>
			`,
		popovers: {
			margin: `
				<div class="box-style-popover">
					<div class="box-style-popover-header">
						<h6>Margin</h6>
						<a class="close"></a>
					</div>
					<div>
						<div class="input-group input-group-sm">
							<input type="text" class="form-control" name="size" value="" placeholder="##px" />
							<div class="input-group-append">
								<button class="btn btn-outline-secondary save" type="button">Set</button>
							</div>
						</div>
					</div>
				</div>
			`,
			border: `
				<div class="box-style-popover">
					<div class="box-style-popover-header">
						<h6>Border</h6>
						<a class="close"></a>
					</div>	
					<div>
						<div class="form-group">
							<input type="text" class="form-control form-control-sm" name="size" placeholder="##px" />
						</div>
						<div class="form-group">
							<div class="color-picker-input" data-input="color-picker" data-value="" data-name="color" data-placeholder="color" data-fieldsize="sm"></div>
						</div>
						<div class="form-group">
							<select class="custom-select custom-select-sm" name="style">
								<option value="solid">Solid</option>
								<option value="dotted">Dotted</option>
								<option value="dashed">Dashed</option>
								<option value="double">Double</option>
								<option value="groove">Groove</option>
								<option value="ridge">Ridge</option>
								<option value="inset">Inset</option>
								<option value="outset">Outset</option>
							</select>
						</div>
						<div>
							<button class="btn btn-outline-secondary btn-sm save" type="button">Set</button>
						</div>
					</div>	
				</div>
			`,
			padding: `
				<div class="box-style-popover">
					<div class="box-style-popover-header">
						<h6>Padding</h6>
						<a class="close"></a>
					</div>
					<div>
						<div class="input-group input-group-sm">
							<input type="text" class="form-control" name="size" placeholder="##px" />
							<div class="input-group-append">
								<button class="btn btn-outline-secondary save" type="button">Set</button>
							</div>
						</div>
					</div>
				</div>
			`,
		}
	}
}

export default BoxStyleInput;