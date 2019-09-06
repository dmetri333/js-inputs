
class MediaLibrary {
	
	constructor(options) {
		//this.options = $.extend(true, {}, MediaLibrary.DEFAULTS, typeof options == 'object' && options);
		
		
		this.assets = [
			{
				id: 3,
				parentId: 0,
				name: "starry-night-alex-ruiz.jpg",
				basename: "starry-night-alex-ruiz",
				size: "163kB",
				height: 578,
				width: 864,
				extension: "jpg",
				type: "jpg",
				icon: 'image',
				path: "http://images.fineartamerica.com/images-medium-large/starry-night-alex-ruiz.jpg"
			},
			{
				id: 4,
				parentId: 0,
				name: "img_lights.jpg",
				basename: "img_lights",
				size: "20kB",
				height: 400,
				width: 600,
				extension: "jpg",
				type: "jpg",
				icon: 'image',
				path: "https://www.w3schools.com/w3css/img_lights.jpg"
			},
			{
				id: 5,
				parentId: 0,
				name: "rose-blue-flower-rose-blooms-67636.jpeg",
				basename: "rose-blue-flower-rose-blooms-67636",
				size: "21kB",
				height: 331,
				width: 500,
				extension: "jpeg",
				type: "jpeg",
				icon: 'image',
				path: "http://images.fineartamerica.com/images-medium-large/starry-night-alex-ruiz.jpg"
			},
			{
				id: 6,
				parentId: 0,
				name: "document-1.pdf",
				basename: "document-1",
				size: "1MB",
				type: "pdf",
				extension: "pdf",
				icon: 'pdf',
				url: "/document-1.pdf"
			}
			
		];
		
		this.config = {
				optionsInternal: null,
				set options(val) {
				    this.optionsInternal = $.extend({}, MediaLibrary.CONFIG, val);			    
				},
				get options() {
				    return this.optionsInternal;
				}
		}
		this.config.options = options;
		
	}
	
	open() {
		this.config.options.selectCallback(this.select());
	}
	
	reset() {

	}
	
	select() {		
		var data = [];
		
		var length = this.config.options.multiSelectOn ? 3 : 1;
		
		for (var i = 0; i < length; i++) {
			if (this.config.options.acceptedFiles.includes(this.assets[i].type)) {
				data.push(this.assets[i]);
			}	
			
		}
		
		return data;
	}
	
}


MediaLibrary.CONFIG = {
	multiSelectOn: false,
	selected: [],
	acceptedFiles: ['png','svg','bmp','jpg','jpeg','gif','pdf','mov','mp4','wmv','mp3','txt','doc','docx','dotx','ppt','pptx','potx','xls','xlsx','pages','kth','zip','key','ai','eps','psd','sketch','ase','aep'],
	selectCallback: function(selected) {}
}


