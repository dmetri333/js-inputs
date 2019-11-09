var LinkPicker =
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
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Page Builder Utils\n */\nconst Util = {\n\n\t/**\n\t * Function todo js templating\n\t *\n\t * $.supplant(text, json)\n\t * $.supplant(element, json)\n\t * \n\t */\n\tsupplant(template, json) {\n\t\tif (template && template.nodeType === Node.ELEMENT_NODE) {\n\t\t\ttemplate = template.innerHTML;\n\t\t}\n\n\t\tvar re = /{{([^{{}}]*)}}/g,\n\t\t\treExp = /(^( )?(if|for|else|elseif|switch|case|break|\\/if|\\/for|\\/else))(.*)?/g,\n\t\t\treExp2 = /(^( )?(\\/if|\\/for|\\/else))(.*)?/g,\n\t\t\tcode = 'var r=[];\\n',\n\t\t\tcursor = 0,\n\t\t\tmatch;\n\n\t\tvar add = function (line, js) {\n\t\t\tif (js) {\n\t\t\t\tif (line.match(reExp)) {\n\n\t\t\t\t\tswitch (match[1].split(' ')[0]) {\n\t\t\t\t\t\tcase 'if':\n\t\t\t\t\t\tcase 'for':\n\t\t\t\t\t\tcase 'switch':\n\t\t\t\t\t\t\tcode += line + '{' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'else':\n\t\t\t\t\t\t\tcode += '} else {' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'elseif':\n\t\t\t\t\t\t\tcode += '}' + line + '{' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase 'case':\n\t\t\t\t\t\t\tcode += line + ':' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase '/if':\n\t\t\t\t\t\tcase '/for':\n\t\t\t\t\t\t\tcode += '}' + '\\n'\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\tcode += line + '\\n'\n\t\t\t\t\t}\n\n\t\t\t\t} else {\n\t\t\t\t\tcode += 'r.push(' + line + ');\\n';\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tcode += line != '' ? 'r.push(\"' + line.replace(/\"/g, '\\\\\"') + '\");\\n' : '';\n\t\t\t}\n\n\t\t\treturn add;\n\t\t}\n\n\t\twhile (match = re.exec(template)) {\n\t\t\tadd(template.slice(cursor, match.index))(match[1], true);\n\t\t\tcursor = match.index + match[0].length;\n\t\t}\n\n\t\tadd(template.substr(cursor, template.length - cursor));\n\n\t\tcode += 'return r.join(\"\");';\n\t\treturn new Function(' with (this) { ' + code.replace(/[\\r\\t\\n]/g, '') + '}').apply(json);\n\t},\n\n\tformToJSON(form) {\n\t\tvar elements = {};\n\t\tvar $form = $(form);\n\t\tvar that = this;\n\n\t\t$form.find('input, select, textarea').each(function () {\n\t\t\tvar $element = $(this);\n\t\t\tvar name = $element.attr('name')\n\t\t\tvar type = $element.attr('type')\n\t\t\tif (name) {\n\t\t\t\tvar value;\n\t\t\t\tif (type == 'radio') {\n\t\t\t\t\tvalue = $('input[name=' + name + ']:checked', $form).val();\n\t\t\t\t} else if (type == 'checkbox') {\n\t\t\t\t\tvalue = $element.is(':checked');\n\t\t\t\t} else {\n\t\t\t\t\tvalue = $element.val();\n\t\t\t\t\t\n\t\t\t\t\tvalue = that.isJsonString(value) ? JSON.parse(value) : value;\n\t\t\t\t}\n\n\t\t\t\telements[$element.attr('name')] = value\n\t\t\t}\n\t\t});\n\n\t\treturn elements;\n\t},\n\n\tformFromJSON(form, data) {\n\t\tvar $form = $(form);\n\n\t\t$.each(data, function (key, value) {\n\t\t\tvar $element = $('[name=\"' + key + '\"]', $form);\n\n\t\t\tif ($element.length > 0) {\n\t\t\t\tvar type = $element.first().attr('type');\n\t\t\t\tif (type == 'radio') {\n\t\t\t\t\t$('[name=\"' + key + '\"][value=\"' + value + '\"]').prop('checked', true);\n\t\t\t\t} else if (type == 'checkbox' && (value == true || value == 'true')) {\n\t\t\t\t\t$('[name=\"' + key + '\"]').prop('checked', true);\n\t\t\t\t} else {\n\t\t\t\t\t$element.val(value);\n\t\t\t\t}\n\t\t\t\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\tvar $smartElement = $('[data-name=\"' + key + '\"]', $form);\n\t\t\tif ($smartElement.length > 0) {\n\t\t\t\tvalue = typeof value === 'object' ? JSON.stringify(value) : value;\n\t\t\t\t$smartElement.attr('data-value', value);\n\t\t\t\t\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t});\n\t},\n\n\tisJsonString(str) {\n\t    try {\n\t        JSON.parse(str);\n\t    } catch (e) {\n\t        return false;\n\t    }\n\t    return true;\n\t},\n\t\n\thyphenToCamelCase(hyphen) {\n\t\treturn hyphen.replace(/-([a-z])/g, function (match) {\n\t\t\treturn match[1].toUppercase();\n\t\t});\n\t},\n\n\tcamelCaseToHyphen(camelCase) {\n\t\treturn camelCase.replace(/[A-Z]/g, '-$1').toLowerCase();\n\t},\n\n\trgb2hex(rgb) {\n\t\tif (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;\n\n\t\trgb = rgb.match(/^rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)$/);\n\t\tif (!rgb)\n\t\t\treturn '';\n\n\t\tfunction hex(x) {\n\t\t\treturn (\"0\" + parseInt(x).toString(16)).slice(-2);\n\t\t}\n\t\treturn \"#\" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);\n\t},\n\n\tgenId(length) {\n\t\tlength = length ? length : 8;\n\t\tvar result = '';\n\t\tvar characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n\t\tvar charactersLength = characters.length;\n\t\tfor (var i = 0; i < length; i++) {\n\t\t\tresult += characters.charAt(Math.floor(Math.random() * charactersLength));\n\t\t}\n\t\treturn result;\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/page-builder-util/src/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: LinkPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_LinkPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/LinkPicker */ \"./src/js/LinkPicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LinkPicker\", function() { return _js_LinkPicker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://LinkPicker/./src/index.js?");

/***/ }),

/***/ "./src/js/LinkPicker.js":
/*!******************************!*\
  !*** ./src/js/LinkPicker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/page-builder-util */ \"./node_modules/@foragefox/page-builder-util/src/index.js\");\n\n\nclass LinkPicker {\n\t\n\tconstructor(options) {\n\t\tthis.options = $.extend(true, {}, LinkPicker.DEFAULTS, typeof options == 'object' && options); \n\t\t\n\t\tthis.$body = $('body');\n\t\t\n\t\tthis.init();\n\t\tthis.populate();\n\t}\n\n\tinit() {\n\t\tthis.initModal();\n\t\tthis.bindEvents();\n\t}\n\t\n\tinitModal() {\n\t\tvar linkForm = _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.linkForm);\n\t\tvar modal = _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].supplant(this.options.templates.modal, { linkForm: linkForm });\n\n\t\tthis.$element = $(this.options.templates.container);\n\t\tthis.$element.append(modal);\n\t\t\n\t\tthis.$body.append(this.$element);\n\t}\n\t\n\tbindEvents() {\n\t\tthis.$element.on('click', '[data-action=close]', this.close.bind(this));\n\t\tthis.$element.on('click', '[data-action=add-link]', this.addLink.bind(this));\n\t}\n\t\n\topen() {\n\t\t//this.populateLinkList();\n\t\tthis.$element.show().addClass('open');\n\t\t$(document).off('focusin.modal');\n\t}\n\t\n\tclose() {\n\t\tthis.$element.remove();\n\t}\n\t\n\taddLink() {\n\t\tvar result = _foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formToJSON(this.$element.find('.link-form'));\n\t\tthis.options.selectCallback(result) \n\t\tthis.close();\n\t}\n\n\tpopulate() {\n\t\tif (this.options.link.url) {\n\t\t\t_foragefox_page_builder_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formFromJSON(this.$element.find('.link-form'), this.options.link);\n\t\t}\n\t}\n\n}\n\n\nLinkPicker.DEFAULTS = {\n\tendpoint: '',\n\tselectCallback: function(result) {},\n\tlink: {},\n\ttemplates: {\n\t\tcontainer: `<div class=\"link-picker fade\"></div>`,\n\t\tlinkItem: `\n\t\t\t<li class=\"link-item\">\n\t\t\t\t<input type=\"hidden\" class=\"item-permalink\" value=\"{{url}}\">\n\t\t\t\t<span class=\"item-title\">{{title}}</span>\n\t\t\t\t<span class=\"item-info\">{{info}}</span>\n\t\t\t</li>\n\t\t\t`,\n\t\tmodal: `\n\t\t\t<div class=\"link-picker-dialog\">\n\t\t\t\t<div class=\"link-picker-content\">\n\n\t\t\t\t\t<div class=\"link-picker-header\">\n\t\t\t\t\t\t<button data-action=\"close\" type=\"button\" class=\"close\" aria-label=\"Close\"><i class=\"lp-icon-close\"></i></button>\n\t\t\t\t\t\t<h3>Insert/edit link</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div class=\"link-picker-body\">\n\t\t\t\t\t\t{{linkForm}}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"link-picker-footer\">\n\t\t\t\t\t\t<button data-action=\"close\" class=\"btn btn-link\">Cancel</button>\n\t\t\t\t\t\t<button data-action=\"add-link\" class=\"btn btn-primary\">Add Link</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,\n\t\tlinkForm: `\n\t\t\t<div class=\"link-form\">\n\t\t\t\t<p><i>Enter the destination URL</i></p>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"url\" class=\"col-sm-2 col-form-label\">URL</label>\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" autocomplete=\"off\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"text\" class=\"col-sm-2 col-form-label\">Text</label>\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"text\" id=\"text\" autocomplete=\"off\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<div class=\"offset-md-2 col-sm-10\">\n\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"_blank\" name=\"targetBlank\" id=\"targetBlank\" />\n\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"targetBlank\">\n\t\t\t\t\t\t\t\tOpen link in a new tab\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkPicker);\n\n\n//# sourceURL=webpack://LinkPicker/./src/js/LinkPicker.js?");

/***/ })

/******/ });