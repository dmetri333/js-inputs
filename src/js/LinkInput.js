import Util from '@foragefox/page-builder-util';

class LinkInput {

	constructor(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = $.extend(true, {}, LinkInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);
		
		this.$element.html(Util.supplant(this.options.templates.body, { name: this.options.name }));
		
		this.initValue();
		this.initEvents();
    }
    
	initEvents() {
		this.$element.on('click', '.link-input-add-btn', this.open.bind(this));
		this.$element.on('click', '.link-input-edit-link', this.open.bind(this));
		this.$element.on('click', '.link-input-remove-link', this.removeLink.bind(this));
	}

	open() {
		this.options.onOpen(this);
	}

	addLink(link) {
		this.link = link;

		this.$element.find('.link-input-preview').html(Util.supplant(this.options.templates.preview, { link: link }));
		
		this.$element.find('input').val(JSON.stringify(link));
		
		this.$element.find('.link-input-preview').show();
		this.$element.find('.link-input-add').hide();
	}
	
	removeLink() {
		this.link = null;
		
		this.$element.find('input').val('');
		this.$element.find('.link-input-preview').html('');
		
		this.$element.find('.link-input-preview').hide();
		this.$element.find('.link-input-add').show();	
	}
	
	initValue() {
		if (this.options.value) {
			var link = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;
			this.link = link;
			this.addLink(link);
		}
	}

}

LinkInput.DEFAULTS = {
	name: '',
	onOpen: function() {},
	templates: {
		body: `
  			<input type="hidden" name="{{name}}" value="">
			<div class="link-input-preview" style="display: none;"></div>
			<div class="link-input-add" style="display: block;">
				<a class="btn btn-sm btn-primary link-input-add-btn" href="#">Select Link</a>
			</div>`,
		preview: `
			<span class="link-input-url">{{link.url}}</span>
			<span class="link-input-options">
				<a class="link-input-edit-link" href="javascript:void(0);">Edit</a>&nbsp;&nbsp;					
				<a class="link-input-remove-link" href="javascript:void(0);">Remove</a>
			</span>`
	}
}

export default LinkInput;