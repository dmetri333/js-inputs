var Inputs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@foragefox/page-builder-util/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/page-builder-util/src/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Page Builder Utils\n */\nconst Util = {\n\n\t/**\n\t * Function todo js templating\n\t *\n\t * $.supplant(text, json)\n\t * $.supplant(element, json)\n\t * \n\t */\n\tsupplant(template, json) {\n\t\tif (template && template.nodeType === Node.ELEMENT_NODE) {\n\t\t\ttemplate = template.innerHTML;\n\t\t}\n\n\t\tvar re = /{{([^{{}}]*)}}/g,\n\t\t\treExp = /(^( )?(if|for|else|switch|case|break|\\/if|\\/for|\\/else))(.*)?/g,\n\t\t\treExp2 = /(^( )?(\\/if|\\/for|\\/else))(.*)?/g,\n\t\t\tcode = 'var r=[];\\n',\n\t\t\tcursor = 0,\n\t\t\tmatch;\n\n\t\tvar add = function (line, js) {\n\t\t\tif (js) {\n\t\t\t\tif (line.match(reExp)) {\n\n\t\t\t\t\tswitch (match[1].split(' ')[0]) {\n\t\t\t\t\t\tcase 'if':\n\t\t\t\t\t\tcase 'for':\n\t\t\t\t\t\tcase 'switch':\n\t\t\t\t\t\t\tcode += line + '{' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'else':\n\t\t\t\t\t\t\tcode += '} else {' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'elseif':\n\t\t\t\t\t\t\tcode += '}' + line + '{' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'case':\n\t\t\t\t\t\t\tcode += line + ':' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase '/if':\n\t\t\t\t\t\tcase '/for':\n\t\t\t\t\t\t\tcode += '}' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\tcode += line + '\\n'\n\t\t\t\t\t}\n\n\t\t\t\t} else {\n\t\t\t\t\tcode += 'r.push(' + line + ');\\n';\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tcode += line != '' ? 'r.push(\"' + line.replace(/\"/g, '\\\\\"') + '\");\\n' : '';\n\t\t\t}\n\n\t\t\treturn add;\n\t\t}\n\n\t\twhile (match = re.exec(template)) {\n\t\t\tadd(template.slice(cursor, match.index))(match[1], true);\n\t\t\tcursor = match.index + match[0].length;\n\t\t}\n\n\t\tadd(template.substr(cursor, template.length - cursor));\n\n\t\tcode += 'return r.join(\"\");';\n\t\treturn new Function(' with (this) { ' + code.replace(/[\\r\\t\\n]/g, '') + '}').apply(json);\n\t},\n\n\tformToJSON(form) {\n\t\tvar elements = {};\n\t\tvar $form = $(form);\n\n\t\t$form.find('input, select, textarea').each(function () {\n\t\t\tvar $element = $(this);\n\t\t\tvar name = $element.attr('name')\n\t\t\tvar type = $element.attr('type')\n\t\t\tif (name) {\n\t\t\t\tvar $value;\n\t\t\t\tif (type == 'radio') {\n\t\t\t\t\t$value = $('input[name=' + name + ']:checked', $form).val();\n\t\t\t\t} else if (type == 'checkbox') {\n\t\t\t\t\t$value = $element.is(':checked');\n\t\t\t\t} else {\n\t\t\t\t\t$value = $element.val();\n\t\t\t\t}\n\n\t\t\t\telements[$element.attr('name')] = $value\n\t\t\t}\n\t\t});\n\n\t\treturn elements;\n\t},\n\n\tformFromJSON(form, data) {\n\t\tvar $form = $(form);\n\n\t\t$.each(data, function (key, value) {\n\t\t\tvar $element = $('[name=\"' + key + '\"]', $form);\n\n\t\t\tif ($element.length > 0) {\n\t\t\t\tvar type = $element.first().attr('type');\n\t\t\t\tif (type == 'radio') {\n\t\t\t\t\t$('[name=\"' + key + '\"][value=\"' + value + '\"]').prop('checked', true);\n\t\t\t\t} else if (type == 'checkbox' && (value == true || value == 'true')) {\n\t\t\t\t\t$('[name=\"' + key + '\"]').prop('checked', true);\n\t\t\t\t} else {\n\t\t\t\t\t$element.val(value);\n\t\t\t\t}\n\t\t\t\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\tvar $smartElement = $('[data-name=\"' + key + '\"]', $form);\n\t\t\tif ($smartElement.length > 0) {\n\t\t\t\tvalue = typeof value === 'object' ? JSON.stringify(value) : value;\n\t\t\t\t$smartElement.attr('data-value', value);\n\t\t\t\t\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t});\n\t},\n\n\n\thyphenToCamelCase(hyphen) {\n\t\treturn hyphen.replace(/-([a-z])/g, function (match) {\n\t\t\treturn match[1].toUppercase();\n\t\t});\n\t},\n\n\tcamelCaseToHyphen(camelCase) {\n\t\treturn camelCase.replace(/[A-Z]/g, '-$1').toLowerCase();\n\t},\n\n\trgb2hex(rgb) {\n\t\tif (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;\n\n\t\trgb = rgb.match(/^rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)$/);\n\t\tif (!rgb)\n\t\t\treturn '';\n\n\t\tfunction hex(x) {\n\t\t\treturn (\"0\" + parseInt(x).toString(16)).slice(-2);\n\t\t}\n\t\treturn \"#\" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);\n\t},\n\n\tgenId(length) {\n\t\tlength = length ? length : 8;\n\t\tvar result = '';\n\t\tvar characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n\t\tvar charactersLength = characters.length;\n\t\tfor (var i = 0; i < length; i++) {\n\t\t\tresult += characters.charAt(Math.floor(Math.random() * charactersLength));\n\t\t}\n\t\treturn result;\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack://Inputs/./node_modules/@foragefox/page-builder-util/src/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: FileInput, ImageInput, GalleryInput, ColorPickerInput, AlignInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_FileInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/FileInput */ \"./src/js/FileInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FileInput\", function() { return _js_FileInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _js_ImageInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ImageInput */ \"./src/js/ImageInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ImageInput\", function() { return _js_ImageInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _js_GalleryInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/GalleryInput */ \"./src/js/GalleryInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GalleryInput\", function() { return _js_GalleryInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _js_ColorPickerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ColorPickerInput */ \"./src/js/ColorPickerInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ColorPickerInput\", function() { return _js_ColorPickerInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _js_AlignInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/AlignInput */ \"./src/js/AlignInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AlignInput\", function() { return _js_AlignInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Inputs/./src/index.js?");

/***/ }),

/***/ "./src/js/AlignInput.js":
/*!******************************!*\
  !*** ./src/js/AlignInput.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/page-builder-util */ \"./node_modules/@foragefox/page-builder-util/src/index.js\");\n\n\nclass AlignInput {\n\n\tconstructor(element, options) {            \n\t\tthis.element = element;\n\t\tthis.$element = $(element);\n\t\tthis.options = $.extend(true, {}, AlignInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);\n\t\t\n     \n\t\tthis.$element.html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.body, {\n\t\t\tname: this.options.name,\n\t\t\tvalue: this.options.value,\n\t\t\tvalues: this.options.values\n\t\t}));\t\n    }\n}\n\nAlignInput.DEFAULTS = {\n\tname: '',\n\tvalue: '',\n\tvalues: {\n\t\t'top-left': 'top left',\n\t\t'top-center': 'top center',\n\t\t'top-right': 'top right',\n\t\t'center-left': 'center left',\n\t\t'center-center': 'center center',\n\t\t'center-right': 'center right',\n\t\t'bottom-left': 'bottom left',\n\t\t'bottom-center': 'bottom center',\n\t\t'bottom-right': 'bottom right'\n\t},\n\ttemplates: {\n\t\tbody: `\n  \t\t\t<div class=\"align-input\">\n  \t\t\t\t<div class=\"align-input-hline top-left\"></div>\n\t\t\t\t<div class=\"align-input-hline top-right\"></div>\n\t\t\t\t<div class=\"align-input-hline bottom-left\"></div>\n\t\t\t\t<div class=\"align-input-hline bottom-right\"></div>\n\t\t\t\t<div class=\"align-input-vline top-left\"></div>\n\t\t\t\t<div class=\"align-input-vline top-right\"></div>\n\t\t\t\t<div class=\"align-input-vline bottom-left\"></div>\n\t\t\t\t<div class=\"align-input-vline bottom-right\"></div>\n\t\t\t\t{{for (var key in values)}}\n\t\t\t\t\t<label class=\"align-input-control {{key}}\">\n\t\t\t\t\t\t<input name=\"{{name}}\" value=\"{{values[key]}}\" type=\"radio\" {{if (values[key] == value)}}checked{{/if}}/>\n\t\t\t\t\t\t<span class=\"a-indicator\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t{{/for}}\n\t\t\t</div>`\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlignInput);\n\n//# sourceURL=webpack://Inputs/./src/js/AlignInput.js?");

/***/ }),

/***/ "./src/js/ColorPickerInput.js":
/*!************************************!*\
  !*** ./src/js/ColorPickerInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/page-builder-util */ \"./node_modules/@foragefox/page-builder-util/src/index.js\");\n\n\nclass ColorPickerInput {\n\t\n\tconstructor(element, options) {\n\t\tthis.element = element;\n\t\tthis.$element = $(element);\n\t\tthis.options = $.extend(true, {}, ColorPickerInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);\n\t\t\n\t\tthis.$element.html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.body, {name: this.options.name}));\n\t\t\n\t\tthis.addColorPicker();\t\n\t}\n\t\n\taddColorPicker() {\n\t    var colorPicker = new ColorPicker.MultiSpectral(this.$element.find('input')[0], {\n            color: this.options.value,\n            history: {\n                hidden: false,\n                colors: this.options.palette\n            }, \n        });\n    }\n\t\n}\n\nColorPickerInput.DEFAULTS = {\n\tname: '',\n\tvalue: 'white',\n\tpalette: ['#000000', '#ffffff', '#dd3333', '#dd9933', '#eeee22', '#81d742', '#1e73be', '#8224e3'],\n\ttemplates: {\n\t\tbody: `<span class=\"colorpicker-input colorpicker-input--position-left\">\n                <input type=\"text\" name=\"{{name}}\" class=\"form-control color-picker\">\n                <span id=\"colorpicker-anchor\" class=\"colorpicker-custom-anchor colorpicker-circle-anchor\">\n          \t\t\t<span class=\"colorpicker-circle-anchor__color\" data-color></span>\n                </span>\n  \t\t\t</span>`,\n\t\t\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPickerInput);\n\n//# sourceURL=webpack://Inputs/./src/js/ColorPickerInput.js?");

/***/ }),

/***/ "./src/js/FileInput.js":
/*!*****************************!*\
  !*** ./src/js/FileInput.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/page-builder-util */ \"./node_modules/@foragefox/page-builder-util/src/index.js\");\n\n\nclass FileInput {\n\n\tconstructor(element, options) {\n\t\tthis.element = element;\n\t\tthis.$element = $(element);\n\t\tthis.options = $.extend(true, {}, FileInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);\n\t\t\n\t\tthis.$element.html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.body, {name: this.options.name}));\n\t\t\n\t\tthis.initValue();\n\t\tthis.initEvents();\n    }\n    \n\tinitEvents() {\n\t\tthis.$element.on('click', '.file-input-add-btn', this.open.bind(this));\n\t\tthis.$element.on('click', '.file-input-edit-link', this.open.bind(this));\n\t\tthis.$element.on('click', '.file-input-remove-link', this.removeFile.bind(this));\n\t}\n\n\topen() {\n\t\tthis.options.onOpen(this);\n\t}\n\t\n\taddFile(file) {\n\t\tthis.file = file;\n\t\t\n\t\tif (!file.type) {\n\t\t\tfile.type = file.name.split('.').pop();\n\t\t}\n\t\t\n\t\tthis.$element.find('.file-input-preview').html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.preview, {file: file}));\n\t\t\n\t\tthis.$element.find('input').val(JSON.stringify(file));\n\t\t\n\t\tthis.$element.find('.file-input-preview').show();\n\t\tthis.$element.find('.file-input-add').hide();\n\t\t\n\t}\n\t\n\tremoveFile() {\n\t\tthis.file = null;\n\t\t\n\t\tthis.$element.find('input').val('');\n\t\tthis.$element.find('.file-input-preview').html('');\n\t\t\n\t\tthis.$element.find('.file-input-preview').hide();\n\t\tthis.$element.find('.file-input-add').show();\t\n\t}\n\t\n\t\n\tinitValue() {\n\t\n\t\tif (this.options.value) {\n\t\t\tvar file = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;\n\t\t\tthis.file = file;\n\t\t\tthis.addFile(file);\n\t\t}\n\t\t\n\t}\n\n}\n\n\nFileInput.DEFAULTS = {\n\tname: '',\n\tonOpen: function() {},\n\ttemplates: {\n\t\tbody: `\n  \t\t\t<input type=\"hidden\" name=\"{{name}}\" value=\"\">\n\t\t\t<div class=\"file-input-preview\" style=\"display: none;\"></div>\n\t\t\t<div class=\"file-input-add\" style=\"display: block;\">\n\t\t\t\t<p>\n\t\t\t\t\tNo file selected \n\t\t\t\t\t<a class=\"btn btn-sm btn-primary file-input-add-btn\" href=\"#\">Add File</a>\n\t\t\t\t</p>\n\t\t\t</div>`,\n\t\tpreview: `<div class=\"file-input-icon\">\n\t\t\t\t\t<div class=\"file-icon file-icon-lg\" data-type=\"{{file.type}}\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"file-input-details\">\n\t\t\t\t\t<div class=\"file-input-meta\">\n\t\t\t\t\t\t<div><strong>{{file.name}}</strong></div>\n\t\t\t\t\t\t<div>{{file.size}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"file-input-options\">\n\t\t\t\t\t\t<a class=\"file-input-edit-link\" href=\"javascript:void(0);\">Edit</a>&nbsp;&nbsp;\t\t\t\t\t\n\t\t\t\t\t\t<a class=\"file-input-remove-link\" href=\"javascript:void(0);\">Remove</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileInput);\n\n//# sourceURL=webpack://Inputs/./src/js/FileInput.js?");

/***/ }),

/***/ "./src/js/GalleryInput.js":
/*!********************************!*\
  !*** ./src/js/GalleryInput.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/page-builder-util */ \"./node_modules/@foragefox/page-builder-util/src/index.js\");\n\n\nclass GalleryInput {\n\n\tconstructor(element, options) {\n\t\tthis.element = element;\n\t\tthis.$element = $(element);\n\t\tthis.options = $.extend(true, {}, GalleryInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);\n\t\tthis.files = [];\n\t\t\n\t\tthis.$element.html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.body, {name: this.options.name}));\n\n\t\tthis.initValue();\n\t\tthis.initEvents();\n\t}\n\t    \n\tinitEvents() {\n\t\tthis.$element.on('click', '.gallery-input-add-btn', this.open.bind(this));\n\t\tthis.$element.on('click', '.gallery-input-remove-link', this.removeImage.bind(this));\n\t}\n\t\n\topen() {\n\t\tthis.options.onOpen(this);\n\t}\n\t\n\taddFile(file) {\n\t\tvar fileIds = this.files.map(function(item) { return item.id; });\n\t\t\n\t\tif (!fileIds.includes(file.id)) {\t\n\t\t\tthis.$element.find('.gallery-input-thumbs').append(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.thumb, {image: file}));\n\t\t\tthis.files.push(file);\n\t\t}\t\t\t\t\n\n\t\tthis.$element.find('input').val(JSON.stringify(this.files));\n\t}\n\t\n\t\n\tremoveImage(event) {\n\t\tvar target = event.currentTarget;\n\n\t\t//remove thumb\n\t\tvar thumbnail = target.closest('.thumb');\n\t\tthumbnail.remove();\n\t\t\n\t\t// remove from files array\n\t\tvar id = $(thumbnail).attr('data-id');\n\t\tfor (var i = 0; i < this.files.length; i++) {\n\t\t\tif (id == this.files[i].id) {\n\t\t\t\tthis.files.splice(i, 1);\n\t\t\t}\n\t\t}\n\t\t\n\t\t// update input field\n\t\tthis.$element.find('input').val(JSON.stringify(this.files));\t\n\t}\n\t\n\tinitValue() {\n\t\tif (this.options.value) {\n\t\t\tvar files = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;\n\t\t\tfor (var i = 0; i < files.length; i++) {\n\t\t\t\tthis.addFile(files[i]);\n\t\t\t}\n\t\t}\n\t}\n\t\n}\n\n\nGalleryInput.DEFAULTS = {\n\tname: '',\n\tonOpen: function() {},\n\ttemplates: {\n\t\tbody: ` <input type=\"hidden\" name=\"{{name}}\" value=\"\" />\n\t\t\t\t<div class=\"gallery-input-preview\">\n\t\t\t\t\t<div class=\"gallery-input-thumbs\"></div>\n\t\t\t\t\t<div class=\"gallery-input-add\">\n\t\t\t\t\t\t<a class=\"btn btn-sm btn-primary gallery-input-add-btn\" href=\"javascript:void(0);\">Add to gallery</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`,\n\t\tthumb: `<div class=\"thumb\" data-id=\"{{image.id}}\">\n\t\t\t<img src=\"{{image.path}}\" alt=\"\" >\n\t\t\t<div><a class=\"gallery-input-remove-link\" href=\"javascript:void(0);\">Remove</a></div>\n\t\t</div>`\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryInput);\n\n//# sourceURL=webpack://Inputs/./src/js/GalleryInput.js?");

/***/ }),

/***/ "./src/js/ImageInput.js":
/*!******************************!*\
  !*** ./src/js/ImageInput.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/page-builder-util */ \"./node_modules/@foragefox/page-builder-util/src/index.js\");\n\n\nclass ImageInput {\n\n\tconstructor(element, options) {\n\t\tthis.element = element;\n\t\tthis.$element = $(element);\n\t\tthis.options = $.extend(true, {}, ImageInput.DEFAULTS, this.element.dataset, typeof options == 'object' && options);\n\t\t\n      \tthis.$element.html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.body, {name: this.options.name}));\n      \t\n      \tthis.initValue();\n\t\tthis.initEvents();\t\t\n    }\n    \n\tinitEvents() {\n\t\tthis.$element.on('click', '.image-input-add-btn', this.open.bind(this));\n\t\tthis.$element.on('click', '.image-input-edit-link', this.open.bind(this));\n\t\tthis.$element.on('click', '.image-input-remove-link', this.removeImage.bind(this));\n\t}\n   \n\topen() {\n\t\tthis.options.onOpen(this);\n\t}\n\t\n\taddFile(file) {\n\t\tthis.file = file;\n\t\t\n\t\tthis.$element.find('.image-input-preview').html(_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.preview, {image: file}));\n\t\tthis.$element.find('input').val(JSON.stringify(file));\n\t\t\n\t\tthis.$element.find('.image-input-preview').show();\n\t\tthis.$element.find('.image-input-add').hide();\n\t\t\n\t}\n\n\tremoveImage(event) {\n\t\tthis.file = null;\n\t\t\n\t\tthis.$element.find('input').val('');\n\t\tthis.$element.find('img').attr('src', '')\n\n\t\tthis.$element.find('.image-input-preview').hide();\n\t\tthis.$element.find('.image-input-add').show();\t\n\t}\n\t\n\tinitValue() {\n\t\t\n\t\tif (this.options.value) {\n\t\t\tvar file = typeof this.options.value === 'string' ? JSON.parse(this.options.value) : this.options.value;\n\t\t\tthis.file = file;\n\t\t\tthis.addFile(file);\n\t\t}\n\t\t\n\t}\n\t\n}\n\nImageInput.DEFAULTS = {\n\tname: '',\n\tonOpen: function() {},\n\ttemplates: {\n\t\tbody: ` <input type=\"hidden\" name=\"{{name}}\" value=\"\" />\n\t\t\t\t<div class=\"image-input-preview\" style=\"display: none;\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"image-input-add\" style=\"display: block;\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tNo file selected \n\t\t\t\t\t\t<a class=\"btn btn-sm btn-primary image-input-add-btn\" href=\"javascipt:void(0);\">Add Image</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>`,\n\t\tpreview: `\n\t\t\t\t<img src=\"{{image.path}}\" />\n\t\t\t\t<div class=\"image-input-meta\">\n\t\t\t\t\t<div class=\"image-input-options\">\n\t\t\t\t\t\t<a class=\"image-input-edit-link\" href=\"javascript:void(0);\">Edit</a>&nbsp;&nbsp;\t\t\t\t\t\n\t\t\t\t\t\t<a class=\"image-input-remove-link\" href=\"javascript:void(0);\">Remove</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`\t\t\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageInput);\n\n//# sourceURL=webpack://Inputs/./src/js/ImageInput.js?");

/***/ })

/******/ });