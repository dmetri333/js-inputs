import Util from '@foragefox/page-builder-util';
import ColorPickerInput from './ColorPickerInput';

class BoxStyleInput {

	constructor(container, options) {
		this.container = container;
		this.$container = $(this.container);
		this.options = $.extend(true, {}, BoxStyleInput.DEFAULTS, this.container.dataset, typeof options == 'object' && options);

		this.$container.append(Util.supplant(this.options.templates.input, { name: this.options.name }));
		this.input = this.$container.find('input')

		this.colorPicker;
		this.currentProperty = '';
		this.data = {};

		this.bindEvents();

		if (this.options.value) {
			this.input.val(this.options.value);
			this.data = JSON.parse(this.options.value);
		}

		this.setLabels();
	}

	bindEvents() {
		this.$container.on('click', '.close', () => this.close());
		this.$container.on('click', '[data-prop]', (event) => this.show(event));
		this.$container.on('click', '.save', () => this.save());
	}

	/*
	hide(event) {
		if (this.colorPicker && this.colorPicker.open == true)
			return

		let target = $(event.target);
		if (target != this.$container && !target.closest(this.$container).length) {
			this.close();
		}
		
	}
	*/

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
		
		this.popperEl = $(Util.supplant(this.options.templates.popovers[type])).appendTo(this.$container);

		this.popper = new Popper(target, this.popperEl, { placement: this.options.placement });
	
		if (this.data[this.currentProperty])
			Util.formFromJSON(this.popperEl.find('form'), this.data[this.currentProperty]);

		if (type == 'border') {
			this.colorPicker = new ColorPickerInput(this.popperEl.find('[data-input]')[0]);
		}

	}

	save() {
		let label = this.container.querySelector('[data-prop=' + this.currentProperty + ']');
		let meta = Util.formToJSON(this.popperEl.find('form'));

		if (meta.size == '') {
			delete this.data[this.currentProperty];
		} else {
			this.data[this.currentProperty] = meta;	
		}
		
		label.innerText = meta.size;
		this.input.val(JSON.stringify(this.data));
		this.close();
	}

	setLabels() {
		for (const property in this.data) {
			let label = this.container.querySelector('[data-prop=' + property + ']');
			if (label && this.data[property].size != '') {
				label.innerText = this.data[property].size;
			}
		}
	}

	/*
	normalizeData(data) {
		// move padding and margin out of sub input
		for (const property in data) {
			if (['mt','mr','mb','ml','pt','pr','pb','pl'].includes(property)) {
				data[property] = data[property].size;
			}
		}

		return data;
	}

	unnormalizeData(data) {
		for (const property in data) {
			if (['mt','mr','mb','ml','pt','pr','pb','pl'].includes(property)) {
				data[property] = { size: data[property] };
			}
		}
	}
	*/
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
					<form>
						<div class="input-group input-group-sm">
							<input type="text" class="form-control" name="size" value="" placeholder="##px" />
							<div class="input-group-append">
								<button class="btn btn-outline-secondary save" type="button">Set</button>
							</div>
						</div>
					</form>
				</div>
			`,
			border: `
				<div class="box-style-popover">
					<div class="box-style-popover-header">
						<h6>Border</h6>
						<a class="close"></a>
					</div>	
					<form>
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
					</form>	
				</div>
			`,
			padding: `
				<div class="box-style-popover">
					<div class="box-style-popover-header">
						<h6>Padding</h6>
						<a class="close"></a>
					</div>
					<form>
						<div class="input-group input-group-sm">
							<input type="text" class="form-control" name="size" placeholder="##px" />
							<div class="input-group-append">
								<button class="btn btn-outline-secondary save" type="button">Set</button>
							</div>
						</div>
					</form>
				</div>
			`,
		}
	}
}

export default BoxStyleInput;