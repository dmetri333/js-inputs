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

/***/ "./node_modules/@foragefox/doubledash/src/__.js":
/*!******************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/__.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./node_modules/@foragefox/doubledash/src/animate/index.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./node_modules/@foragefox/doubledash/src/dom/index.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ \"./node_modules/@foragefox/doubledash/src/event/index.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"./node_modules/@foragefox/doubledash/src/form/index.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ \"./node_modules/@foragefox/doubledash/src/lang/index.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location */ \"./node_modules/@foragefox/doubledash/src/location/index.js\");\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./size */ \"./node_modules/@foragefox/doubledash/src/size/index.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ \"./node_modules/@foragefox/doubledash/src/template/index.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    animate: _animate__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    dom: _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    event: _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    form: _form__WEBPACK_IMPORTED_MODULE_3__[\"default\"],    \n    lang: _lang__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    location: _location__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    size: _size__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    template: _template__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/__.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/animation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/animation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet animations = {\n    show: [\n        'bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight',\n        'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight', \n        'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpLeft',\n        'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight',\n        'zoomingIn', 'zoomingInUp', 'zoomingInDown', 'zoomingInLeft', 'zoomingInRight'\n    ],\n    hide: [\n        'bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight',\n        'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight', \n        'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpLeft',\n        'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight',\n        'zoomingOut', 'zoomingOutUp', 'zoomingOutDown', 'zoomingOutLeft', 'zoomingOutRight'\n    ],\n    attention: ['bounce', 'flash', 'heartBeat', 'jello', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble']\n};\n\n/**\n * \n * The `animation()` function triggers a predefined animation on the specified `element`.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.animation(element, animation, options);\n * ```\n * \n * @param {Element} element\n * @param {string} animation\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }] \n */\nfunction animation(element, animation, options) {\n\n    let isShowing = animations.show.includes(animation) || false;\n    let attention = animations.attention.includes(animation);\n\n    // We create a Promise and return it\n    return new Promise((resolve, reject) => {\n\n        if (!animations.show.includes(animation) && !animations.hide.includes(animation) && !animations.attention.includes(animation)) {\n            console.error(`Animation ${animation} not found`);\n            reject(`Animation ${animation} not found`);\n            return;\n        }\n\n        let classes = ['animate', animation];\n\n        // When the animation ends, we clean the classes and resolve the Promise\n        function handleAnimationEnd(event) {\n            event.stopPropagation();\n        \n            if (!isShowing && !attention) {\n                element.style.display = 'none';\n            }\n            \n            element.classList.remove(...classes);\n\n            resolve('Animation ended');\n        }\n\n        if (options.duration) {\n            element.style.setProperty('--animate-duration', options.duration);\n        }\n\n        if (options.delay) {\n            element.style.setProperty('--animate-delay', options.delay);\n        }\n\n        if (options.repeat) {\n            element.style.setProperty('--animate-repeat', options.repeat);\n        }\n\n        element.addEventListener('animationend', handleAnimationEnd, { once: true });\n\n        element.classList.add(...classes);\n\n        if (window.getComputedStyle(element).display === \"none\") {\n            element.style.display = '';\n        }\n\n        if (isShowing && !attention) {\n            element.style.display = '';\n        }\n\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animation);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/animation.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/bounce.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/bounce.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `bounce()` function bounces the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.bounce(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction bounce(element, options) {\n    options = options ? options : {};\n    \n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'bounce', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (bounce);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/bounce.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/bounceIn.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/bounceIn.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `bounceIn()` function bounces in the specified `element`. This function shows hidden elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.bounceIn(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction bounceIn(element, options) {\n    options = options ? options : {};\n\n    let animation = 'bounceIn';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (bounceIn);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/bounceIn.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/bounceOut.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/bounceOut.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `bounceOut()` function bounces out the specified `element`. This function hides visible elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.bounceOut(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction bounceOut(element, options) {\n    options = options ? options : {};\n\n    let animation = 'bounceOut';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (bounceOut);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/bounceOut.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/fadeIn.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/fadeIn.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `fadeIn()` function fades in the specified `element`. This function shows hidden elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.fadeIn(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function fadeIn(element, options) {\n    options = options ? options : {};\n\n    let animation = 'fadeIn';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (fadeIn);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/fadeIn.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/fadeOut.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/fadeOut.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `fadeOut()` function fades out the specified `element`. This function hides visible elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.fadeOut(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function fadeOut(element, options) {\n    options = options ? options : {};\n\n    let animation = 'fadeOut';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (fadeOut);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/fadeOut.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/flash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/flash.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `flash()` function flashes the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.flash(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction flash(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'flash', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (flash);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/flash.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/heartBeat.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/heartBeat.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `heartBeat()` function pulses like a heartBeat the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.heartBeat(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction heartBeat(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'heartBeat', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (heartBeat);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/heartBeat.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce */ \"./node_modules/@foragefox/doubledash/src/animate/bounce.js\");\n/* harmony import */ var _bounceIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bounceIn */ \"./node_modules/@foragefox/doubledash/src/animate/bounceIn.js\");\n/* harmony import */ var _bounceOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounceOut */ \"./node_modules/@foragefox/doubledash/src/animate/bounceOut.js\");\n/* harmony import */ var _fadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fadeIn */ \"./node_modules/@foragefox/doubledash/src/animate/fadeIn.js\");\n/* harmony import */ var _fadeOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fadeOut */ \"./node_modules/@foragefox/doubledash/src/animate/fadeOut.js\");\n/* harmony import */ var _flash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flash */ \"./node_modules/@foragefox/doubledash/src/animate/flash.js\");\n/* harmony import */ var _heartBeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heartBeat */ \"./node_modules/@foragefox/doubledash/src/animate/heartBeat.js\");\n/* harmony import */ var _jello__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jello */ \"./node_modules/@foragefox/doubledash/src/animate/jello.js\");\n/* harmony import */ var _pulse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pulse */ \"./node_modules/@foragefox/doubledash/src/animate/pulse.js\");\n/* harmony import */ var _rotateIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rotateIn */ \"./node_modules/@foragefox/doubledash/src/animate/rotateIn.js\");\n/* harmony import */ var _rotateOut__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rotateOut */ \"./node_modules/@foragefox/doubledash/src/animate/rotateOut.js\");\n/* harmony import */ var _rubberBand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rubberBand */ \"./node_modules/@foragefox/doubledash/src/animate/rubberBand.js\");\n/* harmony import */ var _shake__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shake */ \"./node_modules/@foragefox/doubledash/src/animate/shake.js\");\n/* harmony import */ var _slideIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slideIn */ \"./node_modules/@foragefox/doubledash/src/animate/slideIn.js\");\n/* harmony import */ var _slideOut__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slideOut */ \"./node_modules/@foragefox/doubledash/src/animate/slideOut.js\");\n/* harmony import */ var _swing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./swing */ \"./node_modules/@foragefox/doubledash/src/animate/swing.js\");\n/* harmony import */ var _tada__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tada */ \"./node_modules/@foragefox/doubledash/src/animate/tada.js\");\n/* harmony import */ var _wobble__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wobble */ \"./node_modules/@foragefox/doubledash/src/animate/wobble.js\");\n/* harmony import */ var _zoomingIn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./zoomingIn */ \"./node_modules/@foragefox/doubledash/src/animate/zoomingIn.js\");\n/* harmony import */ var _zoomingOut__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zoomingOut */ \"./node_modules/@foragefox/doubledash/src/animate/zoomingOut.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    animation: _animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    bounce: _bounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    bounceIn: _bounceIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    bounceOut: _bounceOut__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fadeIn: _fadeIn__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    fadeOut: _fadeOut__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    flash: _flash__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    heartBeat: _heartBeat__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    jello: _jello__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    pulse: _pulse__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    rotateIn: _rotateIn__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    rotateOut: _rotateOut__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    rubberBand: _rubberBand__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    shake: _shake__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    slideIn: _slideIn__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n    slideOut: _slideOut__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n    swing: _swing__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n    tada: _tada__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n    wobble: _wobble__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n    zoomingIn: _zoomingIn__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n    zoomingOut: _zoomingOut__WEBPACK_IMPORTED_MODULE_20__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/jello.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/jello.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `jello()` function give a jello like effect of the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.jello(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction jello(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'jello', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (jello);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/jello.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/pulse.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/pulse.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `pulse()` function pulses the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.pulse(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction pulse(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'pulse', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (pulse);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/pulse.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/rotateIn.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/rotateIn.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `rotateIn()` function rotates in the specified `element`. This function shows hidden elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.rotateIn(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function rotateIn(element, options) {\n    options = options ? options : {};\n\n    let animation = 'rotateIn';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (rotateIn);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/rotateIn.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/rotateOut.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/rotateOut.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `rotateOut()` function rotates out the specified `element`. This function hides visible elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.rotateOut(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function rotateOut(element, options) {\n    options = options ? options : {};\n\n    let animation = 'rotateOut';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (rotateOut);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/rotateOut.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/rubberBand.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/rubberBand.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `rubberBand()` function give a rubberBand like effect of the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.rubberBand(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction rubberBand(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'rubberBand', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (rubberBand);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/rubberBand.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/shake.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/shake.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `shake()` function shakes the specified `element` for attention.\n * \n* The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.shake(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction shake(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'shake', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (shake);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/shake.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/slideIn.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/slideIn.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `slideIn()` function slides in the specified `element`. This function shows hidden elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.slideIn(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function slideIn(element, options) {\n    options = options ? options : {};\n\n    let animation = 'slideIn';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n    else\n        animation = animation + 'Down'\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (slideIn);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/slideIn.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/slideOut.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/slideOut.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `slideOut()` function slides out the specified `element`. This function hides visible elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.slideOut(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function slideOut(element, options) {\n    options = options ? options : {};\n\n    let animation = 'slideOut';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n    else\n        animation = animation + 'Down'\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (slideOut);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/slideOut.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/swing.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/swing.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `swings()` function swings the specified `element` for attention.\n * \n* The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.swing(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction swing(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'swing', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (swing);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/swing.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/tada.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/tada.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `tada()` function gives a magic like effect of the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.tada(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction tada(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'tada', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (tada);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/tada.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/wobble.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/wobble.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `wobble()` function wobbles the specified `element` for attention.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.wobble(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\nfunction wobble(element, options) {\n    options = options ? options : {};\n\n    return Object(_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, 'wobble', options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (wobble);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/wobble.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/zoomingIn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/zoomingIn.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `zoomingIn()` function zooms in the specified `element`. This function shows hidden elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.zoomingIn(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function zoomingIn(element, options) {\n    options = options ? options : {};\n\n    let animation = 'zoomingIn';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (zoomingIn);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/zoomingIn.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/animate/zoomingOut.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/animate/zoomingOut.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n\n\n/**\n * \n * The `zoomingOut()` function zooms out the specified `element`. This function hides visible elements as a result.\n * \n * The animate.css file is requred for this function to work\n * \n * ```js\n * __.animate.zoomingOut(element, options);\n * ```\n * \n * @param {Element} element\n * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]\n * @returns {Promise}\n */\n function zoomingOut(element, options) {\n    options = options ? options : {};\n\n    let animation = 'zoomingOut';\n    if (options.direction)\n        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);\n\n    return animation(element, animation, options);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (zoomingOut);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/animate/zoomingOut.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/after.js":
/*!*************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/after.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n/**\n * \n * The `after()` function inserts the specified `element` after the specified `target`.\n * \n * ```js\n * __.dom.after(element, target);\n * ```\n * \n * @param {Element} element\n * @param {Element} target\n * @returns {Element}\n */\nfunction after(element, target) {\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element)) {\n        target.insertAdjacentHTML('afterend', element);\n        return target.nextElementSibling;\n    }\n        \n\n    return target.insertAdjacentElement('afterend', element);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (after);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/after.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/append.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/append.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n/**\n * \n * The `append()` function inserts the specified `element` at the end of the specified `target`.\n *  \n * ```js\n * __.dom.after(element, target);\n * ```\n * \n * @param {Element} element\n * @param {Element} target\n * @returns {Element}\n */\nfunction append(element, target) {\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element)) {\n        target.insertAdjacentHTML('beforeend', element);\n        return target.lastChild;\n    }\n    \n    return target.appendChild(element);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (append);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/append.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/before.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/before.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n/**\n * \n * The `before()` function inserts the specified `element` in front of (before) the specified `target`.\n * \n * ```js\n * __.dom.before(element, target);\n * ```\n * \n * @param {Element} element\n * @param {Element} target\n * @returns {Element}\n */\nfunction before(element, target) {\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element)) {\n        target.insertAdjacentHTML('beforebegin', element);\n        return target.previousElementSibling;\n    }\n        \n    return target.insertAdjacentElement('beforebegin', element);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (before);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/before.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/children.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/children.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n\n\n/**\n * \n * The `children()` function returns all direct children of the specified `element`. Optional a `selector` can be added to narrow down your returned results.\n * \n * ```js\n * __.dom.children(element, selector);\n * ```\n * \n * @param {Element} element\n * @param {string} [selector=undefined]\n * @returns {array}\n */\nfunction children(element, selector) {\n    if (Object(_lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector)) {\n        return [].concat(...element.children);\n    }\n\n    return [].concat(...element.children).filter(child => child.matches(selector))\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (children);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/children.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/clone.js":
/*!*************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/clone.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `clone()` function makes a copy of the specified `element`, including child nodes, text and attributes.\n * \n * ```js\n * __.dom.clone(element);\n * ```\n * \n * @param {Element} element\n * @returns {Element}\n */\nfunction clone(element) {\n    return element.cloneNode(true);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (clone);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/clone.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/closest.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/closest.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n/**\n * \n * The `closest()` function returns the closest matching selector up the DOM tree.\n * \n * ```js\n * __.dom.closest(element, selector);\n * ```\n * \n * @param {Element} element\n * @param {string|Element} selector\n * @returns {Element|boolean}\n */\nfunction closest(element, selector) {\n    const NODE_TEXT = 3\n    \n    let isSelector = Object(_lang_isString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector);\n    let ancestor = element.parentNode\n    \n    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {\n    \n        if (!isSelector) {\n            if (ancestor == selector) {\n                return ancestor;\n            }\n        } else if (ancestor.matches(selector)) {\n            return ancestor;\n        }\n        \n        ancestor = ancestor.parentNode;\n    }\n    \n    return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (closest);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/closest.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/contains.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/contains.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n/**\n * \n * @param {Element} element\n * @param {string|Element} child\n * @returns {boolean}\n */\nfunction contains(element, child) {\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(child)) {\n        return !!element.querySelector(child);\n    } \n\n    return element !== child && element.contains(child);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (contains);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/contains.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/create.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isArray */ \"./node_modules/@foragefox/doubledash/src/lang/isArray.js\");\n\n\n/**\n * \n * The `create()` function creates the HTML element specified by the `tag`. Optional `attributes` and `text` can be added.\n * \n * ```js\n * __.dom.create(tag, attributes, text);\n * ```\n * \n * @param {string} tag\n * @param {Object} [attributes={}]\n * @param {string} [text=undefined]\n * @returns {Element}\n */\nfunction create(tag, attributes, text) {\n    const element = document.createElement(tag);\n\n    for (const key in attributes) {\n        let val = attributes[key];\n        if (key === 'class') {\n            if (Object(_lang_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val)) {\n                element.classList.add(...val);\n            } else {\n                element.classList.add(val);\n            }\n        } else {\n            element.setAttribute(key, val);\n        }\n    }\n\n    if (text) {\n        element.innerHTML = text;\n    }\n\n    return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/create.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/elementIndex.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/elementIndex.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `index()` function returns the index position of the specified `element` relative to the element siblings.\n * \n * ```js\n * __.dom.index(element);\n * ```\n * \n * @param {Element} element\n * @returns {number}\n */\nfunction index(element) {\n    if (!element)\n        return -1;\n\n    let i = 0;\n    do {\n        i++;\n    } while (element = element.previousElementSibling);\n    \n    return i-1;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/elementIndex.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/empty.js":
/*!*************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/empty.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `empty()` function removes all child nodes and content from the specified `element`.\n * \n * ```js\n * __.dom.empty(element);\n * ```\n * \n * @param {Element} element\n */\nfunction empty(element) {\n    while(element.firstChild)\n        element.removeChild(element.firstChild);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (empty);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/empty.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/find.js":
/*!************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/find.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `find()` function allow you to select and manipulate HTML elements. Optional element to start your search on, by default it uses the entire document. \n * \n * Selectors are used to \"find\" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.\n * \n * ```js\n * __.dom.find(selector, element);\n * ```\n * \n * @param {string} selector\n * @param {Element} [element=document.documentElement]\n * @returns {array}\n */\nfunction find(selector, element = document.documentElement) {\n    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/find.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/findOne.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/findOne.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `findOne()` function is similar to `find()` but will only return a single element. Optional element to start your search on, by default it uses the entire document. \n * \n * Selectors are used to \"find\" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.\n * \n * ```js\n * __.dom.findOne(selector, element);\n * ```\n * \n * @param {string} selector \n * @param {Element} [element=document.documentElement]\n * @returns {Element}\n */\nfunction findOne(selector, element = document.documentElement) {\n    return Element.prototype.querySelector.call(element, selector)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (findOne);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/findOne.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/hide.js":
/*!************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/hide.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * The `hide()` function sets the specified `element` display to none.\n * \n * ```js\n * __.dom.hide(element);\n * ```\n * \n * @param {Element} element\n */\n function hide(element) {\n    element.style.display = 'none';\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (hide);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/hide.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _after__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./after */ \"./node_modules/@foragefox/doubledash/src/dom/after.js\");\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ \"./node_modules/@foragefox/doubledash/src/dom/append.js\");\n/* harmony import */ var _before__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./before */ \"./node_modules/@foragefox/doubledash/src/dom/before.js\");\n/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./children */ \"./node_modules/@foragefox/doubledash/src/dom/children.js\");\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clone */ \"./node_modules/@foragefox/doubledash/src/dom/clone.js\");\n/* harmony import */ var _closest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closest */ \"./node_modules/@foragefox/doubledash/src/dom/closest.js\");\n/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contains */ \"./node_modules/@foragefox/doubledash/src/dom/contains.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create */ \"./node_modules/@foragefox/doubledash/src/dom/create.js\");\n/* harmony import */ var _elementIndex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elementIndex */ \"./node_modules/@foragefox/doubledash/src/dom/elementIndex.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./empty */ \"./node_modules/@foragefox/doubledash/src/dom/empty.js\");\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./find */ \"./node_modules/@foragefox/doubledash/src/dom/find.js\");\n/* harmony import */ var _findOne__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./findOne */ \"./node_modules/@foragefox/doubledash/src/dom/findOne.js\");\n/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hide */ \"./node_modules/@foragefox/doubledash/src/dom/hide.js\");\n/* harmony import */ var _next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./next */ \"./node_modules/@foragefox/doubledash/src/dom/next.js\");\n/* harmony import */ var _parents__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parents */ \"./node_modules/@foragefox/doubledash/src/dom/parents.js\");\n/* harmony import */ var _prepend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prepend */ \"./node_modules/@foragefox/doubledash/src/dom/prepend.js\");\n/* harmony import */ var _prev__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./prev */ \"./node_modules/@foragefox/doubledash/src/dom/prev.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remove */ \"./node_modules/@foragefox/doubledash/src/dom/remove.js\");\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./show */ \"./node_modules/@foragefox/doubledash/src/dom/show.js\");\n/* harmony import */ var _siblings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./siblings */ \"./node_modules/@foragefox/doubledash/src/dom/siblings.js\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./toggle */ \"./node_modules/@foragefox/doubledash/src/dom/toggle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    after: _after__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    append: _append__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    before: _before__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    children: _children__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    clone: _clone__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    closest: _closest__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    contains: _contains__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    create: _create__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    index: _elementIndex__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    empty: _empty__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    find: _find__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    findOne: _findOne__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    hide: _hide__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    next: _next__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    parents: _parents__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n    prepend: _prepend__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n    prev: _prev__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n    remove: _remove__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n    show: _show__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n    siblings: _siblings__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n    toggle: _toggle__WEBPACK_IMPORTED_MODULE_20__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/next.js":
/*!************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/next.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n\n\n/**\n * \n * The `next()` function returns the next sibling element of the specified `element`. Optionally a `selector` can be added to be more specific. \n * \n * Sibling elements are elements that share the same parent.\n * \n * ```js\n * __.dom.next(element, selector);\n * ```\n * \n * @param {Element} element \n * @param {string} [selector=undefined]\n * @returns {Element}\n */\nfunction next(element, selector) {\n    let next = element.nextElementSibling;\n\n    if (Object(_lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector)) {\n        return next;\n    }\n\n    while (next) {\n        if (next.matches(selector)) {\n            return next;\n        }\n\n        next = next.nextElementSibling;\n    }\n\n    return undefined;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/next.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/parents.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/parents.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n\n\nconst NODE_TEXT = 3\n\n/**\n * \n * The `parents()` function returns all ancestor elements of the specified `element`. Optionally add a `selector` to match elements against.\n * \n * An ancestor is a parent, grandparent, great-grandparent, and so on. \n * \n * ```js\n * __.dom.parents(element, selector);\n * ```\n * \n * @param {Element} element\n * @param {string} [selector=undefined]\n * @returns {array}\n */\nfunction parents(element, selector) {\n    const parents = []\n\n    let noSelector = Object(_lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector);\n\n    let ancestor = element.parentNode\n\n    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {\n        if (noSelector) {\n            parents.push(ancestor)\n        } else if (ancestor.matches(selector)) {\n            parents.push(ancestor)\n        }\n\n        ancestor = ancestor.parentNode\n    }\n\n    return parents\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parents);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/parents.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/prepend.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/prepend.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n/**\n * \n * The `prepend()` function inserts the specified `element` at the beginning of the specified `target`.\n * \n * ```js\n * __.dom.prepend(element, target);\n * ```\n * \n * @param {Element} element\n * @param {Element} target\n * @returns {Element}\n */\nfunction prepend(element, target) {\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element)) {\n        target.insertAdjacentHTML('afterbegin', element);\n        return target.firstChild;\n    }\n\n    return target.insertBefore(element, target.firstChild);\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (prepend);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/prepend.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/prev.js":
/*!************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/prev.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n\n\n/**\n * \n * The `prev()` function returns the previous sibling element of the specified `element`.  Optionally a `selector` can be added to be more specific. \n * \n * Sibling elements are elements that share the same parent.\n * \n * ```js\n * __.dom.prev(element, selector);\n * ```\n * \n * @param {Element} element\n * @param {string} [selector=undefined]\n * @returns {Element}\n */\nfunction prev(element, selector) {\n    let previous = element.previousElementSibling;\n\n    if (Object(_lang_isUndefined__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector)) {\n        return previous;\n    }\n\n    while (previous) {\n      if (previous.matches(selector)) {\n        return previous;\n      }\n\n      previous = previous.previousElementSibling;\n    }\n\n    return undefined;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prev);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/prev.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/remove.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/remove.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * The `remove()` function removes the specified `element` and its child elements.\n * \n * ```js\n * __.dom.remove(element);\n * ```\n * \n * @param {Element} element\n */\nfunction remove(element) {\n    element.parentNode.removeChild(element);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remove);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/remove.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/show.js":
/*!************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/show.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * The `show()` function sets the specified `element` display to ''.\n * \n * ```js\n * __.dom.show(element, display);\n * ```\n * \n * @param {Element} element\n * @param {string} display\n */\n function show(element, display) {\n    display = display ? display : '';\n    element.style.display = display;\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (show);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/show.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/siblings.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/siblings.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * The `siblings()` function returns all sibling elements of the specified `element`.\n * \n * Sibling elements are elements that share the same parent.\n * \n * ```js\n * __.dom.siblings(element);\n * ```\n * \n * @param {Element} element\n * @returns {array}\n */\nfunction siblings(element) {\n    return [].concat(...element.parentNode.children).filter(child => child !== element)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (siblings);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/siblings.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/dom/toggle.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/dom/toggle.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * The `toggle()` function display or hide the element.\n * \n * ```js\n * __.dom.toggle(element, display);\n * ```\n * \n * @param {Element} element\n * @param {string} display\n */\n function toggle(element, display) {\n    if (element.ownerDocument.defaultView.getComputedStyle(element, null).display === 'none') {\n        display = display ? display : '';\n        element.style.display = display;\n    } else {\n        element.style.display = 'none';\n    }\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (toggle);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/dom/toggle.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/helpers.js ***!
  \*****************************************************************/
/*! exports provided: getTypeEvent, addHandler, removeHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTypeEvent\", function() { return getTypeEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addHandler\", function() { return addHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeHandler\", function() { return removeHandler; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./node_modules/@foragefox/doubledash/src/event/settings.js\");\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n\nfunction getTypeEvent(eventName) {\n    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')\n    return eventName.replace(_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stripNameRegex, '')\n}\n\nfunction eventHandler(element, fn) {\n    return function handler(event) {\n        event.delegateTarget = element\n\n        return fn.apply(element, [event])\n    }\n}\n  \nfunction eventDelegationHandler(element, selector, fn) {\n    return function handler(event) {\n        const domElements = element.querySelectorAll(selector)\n\n        for (let { target } = event; target && target !== this; target = target.parentNode) {\n            for (let i = domElements.length; i--;) {\n                if (domElements[i] === target) {\n                    event.delegateTarget = target\n\n                    return fn.apply(target, [event])\n                }\n            }\n        }\n\n        // To please ESLint\n        return null\n    }\n}\n\nfunction addHandler(element, eventName, selector, handler, once) {\n    if (!Object(_lang_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(eventName) || !element) {\n        return\n    }\n\n    const originalEventName = eventName;\n    const delegation = Object(_lang_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selector);\n    handler = delegation ? handler : selector;\n    once = once ? once : false;\n    eventName = getTypeEvent(originalEventName);\n    \n    const isNative = _settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nativeEvents.includes(eventName);\n    if (!isNative) {\n        eventName = originalEventName;\n    }\n\n    const fn = delegation ?\n        eventDelegationHandler(element, selector, handler) :\n        eventHandler(element, handler)\n\n    element.addEventListener(eventName, fn, once);\n}\n\nfunction removeHandler(element, eventName, eventHandler) {\n\n    if (!Object(_lang_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(eventName) || !element) {\n        return\n    }\n\n    element.removeEventListener(eventName, eventHandler);\n}\n\n\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/helpers.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./node_modules/@foragefox/doubledash/src/event/settings.js\");\n/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./off */ \"./node_modules/@foragefox/doubledash/src/event/off.js\");\n/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on */ \"./node_modules/@foragefox/doubledash/src/event/on.js\");\n/* harmony import */ var _once__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./once */ \"./node_modules/@foragefox/doubledash/src/event/once.js\");\n/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trigger */ \"./node_modules/@foragefox/doubledash/src/event/trigger.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    settings: _settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    off: _off__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    on: _on__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    once: _once__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    trigger: _trigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/off.js":
/*!*************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/off.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./node_modules/@foragefox/doubledash/src/event/helpers.js\");\n\n\n/**\n * Remove an event listener. All three arguments must be identical to the ones used when setting up the listener.\n * \n * @param {Element} element \n * @param {string} eventName \n * @param {Function} eventHandler \n */\nfunction off(element, eventName, eventHandler) {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"removeHandler\"])(element, eventName, eventHandler);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (off);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/off.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/on.js":
/*!************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/on.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./node_modules/@foragefox/doubledash/src/event/helpers.js\");\n\n\n/**\n * Add an event listener\n * \n * @param {Element} element \n * @param {string} eventName \n * @param {string} selector \n * @param {Function} handler \n */\nfunction on(element, eventName, selector, handler) {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addHandler\"])(element, eventName, selector, handler, false)\n}\n\n/**\n * Add an event listener\n * \n * @name on\n * @param {Element} element \n * @param {string} eventName \n * @param {Function} handler \n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (on);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/on.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/once.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/once.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./node_modules/@foragefox/doubledash/src/event/helpers.js\");\n\n\n/**\n * Run an event callback exactly once and then automatically remove it. Works the same as the on() method.\n * \n * @param {Element} element \n * @param {string} eventName \n * @param {string} selector\n * @param {Function} handler \n */\nfunction once(element, eventName, selector, handler) {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addHandler\"])(element, eventName, selector, handler, true)\n}\n\n/**\n * Run an event callback exactly once and then automatically remove it. Works the same as the on() method.\n * \n * @name once\n * @param {Element} element \n * @param {string} eventName \n * @param {Function} handler \n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (once);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/once.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/settings.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/settings.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet settings = {\n    stripNameRegex: /\\..*/,\n    nativeEvents: [\n        'click',\n        'dblclick',\n        'mouseup',\n        'mousedown',\n        'contextmenu',\n        'mousewheel',\n        'DOMMouseScroll',\n        'mouseover',\n        'mouseout',\n        'mousemove',\n        'selectstart',\n        'selectend',\n        'keydown',\n        'keypress',\n        'keyup',\n        'orientationchange',\n        'touchstart',\n        'touchmove',\n        'touchend',\n        'touchcancel',\n        'pointerdown',\n        'pointermove',\n        'pointerup',\n        'pointerleave',\n        'pointercancel',\n        'gesturestart',\n        'gesturechange',\n        'gestureend',\n        'focus',\n        'blur',\n        'change',\n        'reset',\n        'select',\n        'submit',\n        'focusin',\n        'focusout',\n        'load',\n        'unload',\n        'beforeunload',\n        'resize',\n        'move',\n        'DOMContentLoaded',\n        'readystatechange',\n        'error',\n        'abort',\n        'scroll'\n    ]\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (settings);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/settings.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/event/trigger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/event/trigger.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./node_modules/@foragefox/doubledash/src/event/settings.js\");\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./node_modules/@foragefox/doubledash/src/event/helpers.js\");\n\n\n\n\n/**\n * Trigger a native or custom event\n * \n * @param {Element} element \n * @param {string} eventName \n * @param {object} args \n * @returns {Event}\n */\nfunction trigger(element, eventName, args) {\n\n    if (!Object(_lang_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(eventName) || !element) {\n        return\n    }\n\n    let evt = null;\n\n    const typeEvent = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"getTypeEvent\"])(eventName)\n    const isNative = _settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nativeEvents.includes(typeEvent)\n    \n    args = args ? args : {};\n    \n    if (isNative) {\n        evt = document.createEvent('HTMLEvents')\n        evt.initEvent(typeEvent, true, true)\n    } else {\n        evt = new CustomEvent(eventName, {\n            bubbles: true,\n            cancelable: true,\n            detail: args\n        })\n    }\n\n    element.dispatchEvent(evt);\n\n    return evt;\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (trigger);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/event/trigger.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/form/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/form/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parseForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseForm */ \"./node_modules/@foragefox/doubledash/src/form/parseForm.js\");\n/* harmony import */ var _populateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateForm */ \"./node_modules/@foragefox/doubledash/src/form/populateForm.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    parseForm: _parseForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    populateForm: _populateForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/form/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/form/parseForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/form/parseForm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isSet */ \"./node_modules/@foragefox/doubledash/src/lang/isSet.js\");\n/* harmony import */ var _lang_isJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isJson */ \"./node_modules/@foragefox/doubledash/src/lang/isJson.js\");\n/* harmony import */ var _dom_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/find */ \"./node_modules/@foragefox/doubledash/src/dom/find.js\");\n/* harmony import */ var _dom_findOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/findOne */ \"./node_modules/@foragefox/doubledash/src/dom/findOne.js\");\n\n\n\n\n\n/**\n * The `parseForm()` function finds all form elements and returns a JSON object of all the values.\n * \n * @param {Element} element \n * @returns {object}\n */\nfunction parseForm(form) {\n    \n    let data = {};\n\n    let elements = Object(_dom_find__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('input, select, textarea', form);\n    for (let i = 0; i < elements.length; i++) {\n        let field = elements[i];\n        let name = field.getAttribute('name');\n        let type = field.getAttribute('type');\n\n        if (name) {\n            let value;\n\n            if (type == 'radio') {\n                let checked = Object(_dom_findOne__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('input[name=' + name + ']:checked', form);\n                value = Object(_lang_isSet__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(checked) ? checked.value : undefined;\n            } else if (type == 'checkbox') {\n                value = field.checked;\n            } else {\n                value = field.value;\n                value = Object(_lang_isJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value) ? JSON.parse(value) : value;\n            }\n\n            // check for repeaters `[]`\n            if (name.indexOf('[]') !== -1) {\n                let splitsville = name.split(/-(.*)/);\n                let repeater = splitsville[0];\n                let cleanName = splitsville[1];\n\n                if (!data.hasOwnProperty(repeater)) {\n                    data[repeater] = {};\n                }\n\n                if (data[repeater].hasOwnProperty(cleanName)) {\n                    data[repeater][cleanName].push(value);\n                } else {\n                    data[repeater][cleanName] = [value];\n                }\n\n            } else {\n                data[name] = value;\n            }\n\n        }\n    }\n\n    return data;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseForm);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/form/parseForm.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/form/populateForm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/form/populateForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_findOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/findOne */ \"./node_modules/@foragefox/doubledash/src/dom/findOne.js\");\n/* harmony import */ var _lang_isSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isSet */ \"./node_modules/@foragefox/doubledash/src/lang/isSet.js\");\n\n\n\n/**\n * \n * The `populateForm()` function poulates form inputs with a data object.\n * \n * @param {Element} form\n * @param {object} data\n */\nfunction populateForm(form, data) {\n  \n    for (const key in data) {\n        let value = data[key];\n        let element = Object(_dom_findOne__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[name=\"' + key + '\"]', form);\n        if (Object(_lang_isSet__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element)) {\n            var type = element.getAttribute('type');\n            if (type == 'radio') {\n                Object(_dom_findOne__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[name=\"' + key + '\"][value=\"' + value + '\"]', form).checked = true;\n            } else if (type == 'checkbox' && (value == true || value == 'true')) {\n                element.checked = true;\n            } else {\n                element.value = value;\n            }\n            \n            continue;\n        }\n        \n        let smartElement = Object(_dom_findOne__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[data-name=\"' + key + '\"]', form);\n        if (Object(_lang_isSet__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(smartElement)) {\n            value = typeof value === 'object' ? JSON.stringify(value) : value;\n            smartElement.setAttribute('data-value', value);\n            \n            continue;\n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (populateForm);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/form/populateForm.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/index.js ***!
  \*********************************************************/
/*! exports provided: animation, bounce, bounceIn, bounceOut, fadeIn, fadeOut, flash, heartBeat, jello, pulse, rotateIn, rotateOut, rubberBand, shake, slideIn, slideOut, swing, tada, wobble, zoomingIn, zoomingOut, after, append, before, children, clone, closest, contains, create, index, empty, find, findOne, hide, next, parents, prepend, prev, remove, show, siblings, toggle, off, on, once, trigger, parseForm, populateForm, escapeHtml, extend, isArray, isBoolean, isEmpty, isFunction, isJson, isNull, isNumber, isObject, isRegExp, isSet, isString, isUndefined, offset, position, height, outerHeight, outerWidth, setHeight, setWidth, width, compile, supplant, animate, dom, event, form, lang, location, size, template, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate/animation */ \"./node_modules/@foragefox/doubledash/src/animate/animation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"animation\", function() { return _animate_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _animate_bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate/bounce */ \"./node_modules/@foragefox/doubledash/src/animate/bounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bounce\", function() { return _animate_bounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _animate_bounceIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate/bounceIn */ \"./node_modules/@foragefox/doubledash/src/animate/bounceIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bounceIn\", function() { return _animate_bounceIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _animate_bounceOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate/bounceOut */ \"./node_modules/@foragefox/doubledash/src/animate/bounceOut.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bounceOut\", function() { return _animate_bounceOut__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _animate_fadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animate/fadeIn */ \"./node_modules/@foragefox/doubledash/src/animate/fadeIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return _animate_fadeIn__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _animate_fadeOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animate/fadeOut */ \"./node_modules/@foragefox/doubledash/src/animate/fadeOut.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return _animate_fadeOut__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _animate_flash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animate/flash */ \"./node_modules/@foragefox/doubledash/src/animate/flash.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flash\", function() { return _animate_flash__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _animate_heartBeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animate/heartBeat */ \"./node_modules/@foragefox/doubledash/src/animate/heartBeat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"heartBeat\", function() { return _animate_heartBeat__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _animate_jello__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animate/jello */ \"./node_modules/@foragefox/doubledash/src/animate/jello.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"jello\", function() { return _animate_jello__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _animate_pulse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animate/pulse */ \"./node_modules/@foragefox/doubledash/src/animate/pulse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pulse\", function() { return _animate_pulse__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _animate_rotateIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animate/rotateIn */ \"./node_modules/@foragefox/doubledash/src/animate/rotateIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rotateIn\", function() { return _animate_rotateIn__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _animate_rotateOut__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animate/rotateOut */ \"./node_modules/@foragefox/doubledash/src/animate/rotateOut.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rotateOut\", function() { return _animate_rotateOut__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _animate_rubberBand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animate/rubberBand */ \"./node_modules/@foragefox/doubledash/src/animate/rubberBand.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rubberBand\", function() { return _animate_rubberBand__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _animate_shake__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animate/shake */ \"./node_modules/@foragefox/doubledash/src/animate/shake.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shake\", function() { return _animate_shake__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _animate_slideIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./animate/slideIn */ \"./node_modules/@foragefox/doubledash/src/animate/slideIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slideIn\", function() { return _animate_slideIn__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _animate_slideOut__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./animate/slideOut */ \"./node_modules/@foragefox/doubledash/src/animate/slideOut.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slideOut\", function() { return _animate_slideOut__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _animate_swing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animate/swing */ \"./node_modules/@foragefox/doubledash/src/animate/swing.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"swing\", function() { return _animate_swing__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _animate_tada__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animate/tada */ \"./node_modules/@foragefox/doubledash/src/animate/tada.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tada\", function() { return _animate_tada__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _animate_wobble__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./animate/wobble */ \"./node_modules/@foragefox/doubledash/src/animate/wobble.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"wobble\", function() { return _animate_wobble__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _animate_zoomingIn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animate/zoomingIn */ \"./node_modules/@foragefox/doubledash/src/animate/zoomingIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zoomingIn\", function() { return _animate_zoomingIn__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _animate_zoomingOut__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animate/zoomingOut */ \"./node_modules/@foragefox/doubledash/src/animate/zoomingOut.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zoomingOut\", function() { return _animate_zoomingOut__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _dom_after__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dom/after */ \"./node_modules/@foragefox/doubledash/src/dom/after.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"after\", function() { return _dom_after__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _dom_append__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dom/append */ \"./node_modules/@foragefox/doubledash/src/dom/append.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return _dom_append__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _dom_before__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dom/before */ \"./node_modules/@foragefox/doubledash/src/dom/before.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"before\", function() { return _dom_before__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _dom_children__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dom/children */ \"./node_modules/@foragefox/doubledash/src/dom/children.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"children\", function() { return _dom_children__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _dom_clone__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dom/clone */ \"./node_modules/@foragefox/doubledash/src/dom/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return _dom_clone__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _dom_closest__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dom/closest */ \"./node_modules/@foragefox/doubledash/src/dom/closest.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"closest\", function() { return _dom_closest__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dom/contains */ \"./node_modules/@foragefox/doubledash/src/dom/contains.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"contains\", function() { return _dom_contains__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _dom_create__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dom/create */ \"./node_modules/@foragefox/doubledash/src/dom/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _dom_create__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _dom_elementIndex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dom/elementIndex */ \"./node_modules/@foragefox/doubledash/src/dom/elementIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return _dom_elementIndex__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _dom_empty__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dom/empty */ \"./node_modules/@foragefox/doubledash/src/dom/empty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return _dom_empty__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _dom_find__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dom/find */ \"./node_modules/@foragefox/doubledash/src/dom/find.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _dom_find__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _dom_findOne__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dom/findOne */ \"./node_modules/@foragefox/doubledash/src/dom/findOne.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findOne\", function() { return _dom_findOne__WEBPACK_IMPORTED_MODULE_32__[\"default\"]; });\n\n/* harmony import */ var _dom_hide__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dom/hide */ \"./node_modules/@foragefox/doubledash/src/dom/hide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hide\", function() { return _dom_hide__WEBPACK_IMPORTED_MODULE_33__[\"default\"]; });\n\n/* harmony import */ var _dom_next__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dom/next */ \"./node_modules/@foragefox/doubledash/src/dom/next.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"next\", function() { return _dom_next__WEBPACK_IMPORTED_MODULE_34__[\"default\"]; });\n\n/* harmony import */ var _dom_parents__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dom/parents */ \"./node_modules/@foragefox/doubledash/src/dom/parents.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parents\", function() { return _dom_parents__WEBPACK_IMPORTED_MODULE_35__[\"default\"]; });\n\n/* harmony import */ var _dom_prepend__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dom/prepend */ \"./node_modules/@foragefox/doubledash/src/dom/prepend.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prepend\", function() { return _dom_prepend__WEBPACK_IMPORTED_MODULE_36__[\"default\"]; });\n\n/* harmony import */ var _dom_prev__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dom/prev */ \"./node_modules/@foragefox/doubledash/src/dom/prev.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prev\", function() { return _dom_prev__WEBPACK_IMPORTED_MODULE_37__[\"default\"]; });\n\n/* harmony import */ var _dom_remove__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dom/remove */ \"./node_modules/@foragefox/doubledash/src/dom/remove.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return _dom_remove__WEBPACK_IMPORTED_MODULE_38__[\"default\"]; });\n\n/* harmony import */ var _dom_show__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dom/show */ \"./node_modules/@foragefox/doubledash/src/dom/show.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return _dom_show__WEBPACK_IMPORTED_MODULE_39__[\"default\"]; });\n\n/* harmony import */ var _dom_siblings__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dom/siblings */ \"./node_modules/@foragefox/doubledash/src/dom/siblings.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"siblings\", function() { return _dom_siblings__WEBPACK_IMPORTED_MODULE_40__[\"default\"]; });\n\n/* harmony import */ var _dom_toggle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dom/toggle */ \"./node_modules/@foragefox/doubledash/src/dom/toggle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toggle\", function() { return _dom_toggle__WEBPACK_IMPORTED_MODULE_41__[\"default\"]; });\n\n/* harmony import */ var _event_off__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./event/off */ \"./node_modules/@foragefox/doubledash/src/event/off.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"off\", function() { return _event_off__WEBPACK_IMPORTED_MODULE_42__[\"default\"]; });\n\n/* harmony import */ var _event_on__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./event/on */ \"./node_modules/@foragefox/doubledash/src/event/on.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"on\", function() { return _event_on__WEBPACK_IMPORTED_MODULE_43__[\"default\"]; });\n\n/* harmony import */ var _event_once__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./event/once */ \"./node_modules/@foragefox/doubledash/src/event/once.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"once\", function() { return _event_once__WEBPACK_IMPORTED_MODULE_44__[\"default\"]; });\n\n/* harmony import */ var _event_trigger__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./event/trigger */ \"./node_modules/@foragefox/doubledash/src/event/trigger.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"trigger\", function() { return _event_trigger__WEBPACK_IMPORTED_MODULE_45__[\"default\"]; });\n\n/* harmony import */ var _form_parseForm__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./form/parseForm */ \"./node_modules/@foragefox/doubledash/src/form/parseForm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parseForm\", function() { return _form_parseForm__WEBPACK_IMPORTED_MODULE_46__[\"default\"]; });\n\n/* harmony import */ var _form_populateForm__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./form/populateForm */ \"./node_modules/@foragefox/doubledash/src/form/populateForm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"populateForm\", function() { return _form_populateForm__WEBPACK_IMPORTED_MODULE_47__[\"default\"]; });\n\n/* harmony import */ var _lang_escapeHtml__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./lang/escapeHtml */ \"./node_modules/@foragefox/doubledash/src/lang/escapeHtml.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"escapeHtml\", function() { return _lang_escapeHtml__WEBPACK_IMPORTED_MODULE_48__[\"default\"]; });\n\n/* harmony import */ var _lang_extend__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./lang/extend */ \"./node_modules/@foragefox/doubledash/src/lang/extend.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return _lang_extend__WEBPACK_IMPORTED_MODULE_49__[\"default\"]; });\n\n/* harmony import */ var _lang_isArray__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./lang/isArray */ \"./node_modules/@foragefox/doubledash/src/lang/isArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _lang_isArray__WEBPACK_IMPORTED_MODULE_50__[\"default\"]; });\n\n/* harmony import */ var _lang_isBoolean__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./lang/isBoolean */ \"./node_modules/@foragefox/doubledash/src/lang/isBoolean.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return _lang_isBoolean__WEBPACK_IMPORTED_MODULE_51__[\"default\"]; });\n\n/* harmony import */ var _lang_isEmpty__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./lang/isEmpty */ \"./node_modules/@foragefox/doubledash/src/lang/isEmpty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return _lang_isEmpty__WEBPACK_IMPORTED_MODULE_52__[\"default\"]; });\n\n/* harmony import */ var _lang_isFunction__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./lang/isFunction */ \"./node_modules/@foragefox/doubledash/src/lang/isFunction.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return _lang_isFunction__WEBPACK_IMPORTED_MODULE_53__[\"default\"]; });\n\n/* harmony import */ var _lang_isJson__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./lang/isJson */ \"./node_modules/@foragefox/doubledash/src/lang/isJson.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isJson\", function() { return _lang_isJson__WEBPACK_IMPORTED_MODULE_54__[\"default\"]; });\n\n/* harmony import */ var _lang_isNull__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./lang/isNull */ \"./node_modules/@foragefox/doubledash/src/lang/isNull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return _lang_isNull__WEBPACK_IMPORTED_MODULE_55__[\"default\"]; });\n\n/* harmony import */ var _lang_isNumber__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./lang/isNumber */ \"./node_modules/@foragefox/doubledash/src/lang/isNumber.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _lang_isNumber__WEBPACK_IMPORTED_MODULE_56__[\"default\"]; });\n\n/* harmony import */ var _lang_isObject__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./lang/isObject */ \"./node_modules/@foragefox/doubledash/src/lang/isObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _lang_isObject__WEBPACK_IMPORTED_MODULE_57__[\"default\"]; });\n\n/* harmony import */ var _lang_isRegExp__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./lang/isRegExp */ \"./node_modules/@foragefox/doubledash/src/lang/isRegExp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isRegExp\", function() { return _lang_isRegExp__WEBPACK_IMPORTED_MODULE_58__[\"default\"]; });\n\n/* harmony import */ var _lang_isSet__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./lang/isSet */ \"./node_modules/@foragefox/doubledash/src/lang/isSet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSet\", function() { return _lang_isSet__WEBPACK_IMPORTED_MODULE_59__[\"default\"]; });\n\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _lang_isString__WEBPACK_IMPORTED_MODULE_60__[\"default\"]; });\n\n/* harmony import */ var _lang_isUndefined__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./lang/isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return _lang_isUndefined__WEBPACK_IMPORTED_MODULE_61__[\"default\"]; });\n\n/* harmony import */ var _location_offset__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./location/offset */ \"./node_modules/@foragefox/doubledash/src/location/offset.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"offset\", function() { return _location_offset__WEBPACK_IMPORTED_MODULE_62__[\"default\"]; });\n\n/* harmony import */ var _location_position__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./location/position */ \"./node_modules/@foragefox/doubledash/src/location/position.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return _location_position__WEBPACK_IMPORTED_MODULE_63__[\"default\"]; });\n\n/* harmony import */ var _size_height__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./size/height */ \"./node_modules/@foragefox/doubledash/src/size/height.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return _size_height__WEBPACK_IMPORTED_MODULE_64__[\"default\"]; });\n\n/* harmony import */ var _size_outerHeight__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./size/outerHeight */ \"./node_modules/@foragefox/doubledash/src/size/outerHeight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"outerHeight\", function() { return _size_outerHeight__WEBPACK_IMPORTED_MODULE_65__[\"default\"]; });\n\n/* harmony import */ var _size_outerWidth__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./size/outerWidth */ \"./node_modules/@foragefox/doubledash/src/size/outerWidth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"outerWidth\", function() { return _size_outerWidth__WEBPACK_IMPORTED_MODULE_66__[\"default\"]; });\n\n/* harmony import */ var _size_setHeight__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./size/setHeight */ \"./node_modules/@foragefox/doubledash/src/size/setHeight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setHeight\", function() { return _size_setHeight__WEBPACK_IMPORTED_MODULE_67__[\"default\"]; });\n\n/* harmony import */ var _size_setWidth__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./size/setWidth */ \"./node_modules/@foragefox/doubledash/src/size/setWidth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setWidth\", function() { return _size_setWidth__WEBPACK_IMPORTED_MODULE_68__[\"default\"]; });\n\n/* harmony import */ var _size_width__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./size/width */ \"./node_modules/@foragefox/doubledash/src/size/width.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return _size_width__WEBPACK_IMPORTED_MODULE_69__[\"default\"]; });\n\n/* harmony import */ var _template_compile__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./template/compile */ \"./node_modules/@foragefox/doubledash/src/template/compile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return _template_compile__WEBPACK_IMPORTED_MODULE_70__[\"default\"]; });\n\n/* harmony import */ var _template_supplant__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./template/supplant */ \"./node_modules/@foragefox/doubledash/src/template/supplant.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"supplant\", function() { return _template_supplant__WEBPACK_IMPORTED_MODULE_71__[\"default\"]; });\n\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./animate */ \"./node_modules/@foragefox/doubledash/src/animate/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"animate\", function() { return _animate__WEBPACK_IMPORTED_MODULE_72__[\"default\"]; });\n\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./dom */ \"./node_modules/@foragefox/doubledash/src/dom/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dom\", function() { return _dom__WEBPACK_IMPORTED_MODULE_73__[\"default\"]; });\n\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./event */ \"./node_modules/@foragefox/doubledash/src/event/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return _event__WEBPACK_IMPORTED_MODULE_74__[\"default\"]; });\n\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./form */ \"./node_modules/@foragefox/doubledash/src/form/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return _form__WEBPACK_IMPORTED_MODULE_75__[\"default\"]; });\n\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./lang */ \"./node_modules/@foragefox/doubledash/src/lang/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lang\", function() { return _lang__WEBPACK_IMPORTED_MODULE_76__[\"default\"]; });\n\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./location */ \"./node_modules/@foragefox/doubledash/src/location/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"location\", function() { return _location__WEBPACK_IMPORTED_MODULE_77__[\"default\"]; });\n\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./size */ \"./node_modules/@foragefox/doubledash/src/size/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"size\", function() { return _size__WEBPACK_IMPORTED_MODULE_78__[\"default\"]; });\n\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./template */ \"./node_modules/@foragefox/doubledash/src/template/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return _template__WEBPACK_IMPORTED_MODULE_79__[\"default\"]; });\n\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./__.js */ \"./node_modules/@foragefox/doubledash/src/__.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _js__WEBPACK_IMPORTED_MODULE_80__[\"default\"]; });\n\n// animate\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//dom\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//event\n\n\n\n\n\n// form\n\n\n\n// Lang\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// location\n\n\n\n// size\n\n\n\n\n\n\n\n// template\n\n\n\n// category\n\n\n\n\n\n\n\n\n\n// all\n\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/escapeHtml.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/escapeHtml.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * The `escapeHtml()` function makes html XSS safe.\n * \n * @param {string} string \n * @returns {string}\n */\nfunction escapeHtml(string) {\n    \n    let entityMap = {\n        '&': '&amp;',\n        '<': '&lt;',\n        '>': '&gt;',\n        '\"': '&quot;',\n        \"'\": '&#39;',\n        '/': '&#x2F;',\n        '`': '&#x60;',\n        '=': '&#x3D;'\n      };\n\n    return String(string).replace(/[&<>\"'`=\\/]/g, (s) => {\n        return entityMap[s];\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (escapeHtml);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/escapeHtml.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/extend.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/extend.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isBoolean */ \"./node_modules/@foragefox/doubledash/src/lang/isBoolean.js\");\n/* harmony import */ var _lang_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/@foragefox/doubledash/src/lang/isObject.js\");\n\n\n\n/**\n * The extend() function merges the contents of two or more objects together into the first object.\n * \n * @param {object} obj1\n * @param {object} obj2\n * @returns {object}\n */\nfunction extend() {\n\n\t// Variables\n\tlet extended = {};\n\tlet deep = false;\n\tlet i = 0;\n\tlet length = arguments.length;\n\n\t// Check if a deep merge\n\tif ( Object(_lang_isBoolean__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments[0]) ) {\n\t\tdeep = arguments[0];\n\t\ti++;\n\t}\n\n\t// Loop through each object and conduct a merge\n\tfor ( ; i < length; i++ ) {\n\t\tlet obj = arguments[i];\n\t\t\n        for ( let prop in obj ) {\n\t\t\tif ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {\n\t\t\t\t// If deep merge and property is an object, merge properties\n\t\t\t\tif ( deep && Object(_lang_isObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj[prop]) ) {\n\t\t\t\t\textended[prop] = extend( true, extended[prop], obj[prop] );\n\t\t\t\t} else {\n\t\t\t\t\textended[prop] = obj[prop];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn extended;\n}\n\n/**\n * Merge the contents of two or more objects together into the first object.\n * \n * @name extend\n * \n * @param {boolean} deep\n * @param {object} obj1\n * @param {object} obj2\n * @returns {object}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extend);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/extend.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _escapeHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escapeHtml */ \"./node_modules/@foragefox/doubledash/src/lang/escapeHtml.js\");\n/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ \"./node_modules/@foragefox/doubledash/src/lang/extend.js\");\n/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray */ \"./node_modules/@foragefox/doubledash/src/lang/isArray.js\");\n/* harmony import */ var _isBoolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBoolean */ \"./node_modules/@foragefox/doubledash/src/lang/isBoolean.js\");\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isEmpty */ \"./node_modules/@foragefox/doubledash/src/lang/isEmpty.js\");\n/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isFunction */ \"./node_modules/@foragefox/doubledash/src/lang/isFunction.js\");\n/* harmony import */ var _isJson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isJson */ \"./node_modules/@foragefox/doubledash/src/lang/isJson.js\");\n/* harmony import */ var _isNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isNull */ \"./node_modules/@foragefox/doubledash/src/lang/isNull.js\");\n/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNumber */ \"./node_modules/@foragefox/doubledash/src/lang/isNumber.js\");\n/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isObject */ \"./node_modules/@foragefox/doubledash/src/lang/isObject.js\");\n/* harmony import */ var _isRegExp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isRegExp */ \"./node_modules/@foragefox/doubledash/src/lang/isRegExp.js\");\n/* harmony import */ var _isSet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isSet */ \"./node_modules/@foragefox/doubledash/src/lang/isSet.js\");\n/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    escapeHtml: _escapeHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    extend: _extend__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    isArray: _isArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    isBoolean: _isBoolean__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    isEmpty: _isEmpty__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    isFunction: _isFunction__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    isJson: _isJson__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    isNull: _isNull__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    isNumber: _isNumber__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    isObject: _isObject__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    isRegExp: _isRegExp__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    isSet: _isSet__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    isString: _isString__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    isUndefined: _isUndefined__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isArray.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isArray()` function determines whether an object is an array.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isArray(variable) {\n    return Object.prototype.toString.call(variable) === '[object Array]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isArray);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isArray.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isBoolean.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isBoolean.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isBoolean()` function determines whether an object is an boolean.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isBoolean(variable) {\n    return Object.prototype.toString.call(variable) === '[object Boolean]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isBoolean);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isBoolean.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isEmpty.js":
/*!****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isEmpty.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n/* harmony import */ var _isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNull */ \"./node_modules/@foragefox/doubledash/src/lang/isNull.js\");\n/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray */ \"./node_modules/@foragefox/doubledash/src/lang/isArray.js\");\n/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isObject */ \"./node_modules/@foragefox/doubledash/src/lang/isObject.js\");\n\n\n\n\n\n\n/**\n * \n * The `isEmpty()` function determines whether an object is empty.\n * \n * Empty means undefined, null, NaN, 0, false, '', [], {}\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isEmpty(variable) {\n    return Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(variable) || Object(_isNull__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(variable) || Number.isNaN(variable) || variable === 0 || variable === false || ((Object(_isString__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(variable) || Object(_isArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(variable)) && variable.length === 0) || (Object(_isObject__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(variable) && Object.getOwnPropertyNames(variable).length === 0);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isEmpty);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isEmpty.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isFunction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isFunction.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isFunction()` function determines whether an object is function.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isFunction(variable) {\n    return Object.prototype.toString.call(variable) === '[object Function]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isFunction);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isFunction.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isJson.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isJson.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isJson()` function determines whether an object is a JSON.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isJson(variable) {\n    try {\n        JSON.parse(variable);\n    } catch (e) {\n        return false;\n    }\n    return true;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isJson);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isJson.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isNull.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isNull.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isNull()` function determines whether an object is null.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isNull(variable) {\n    return Object.prototype.toString.call(variable) === '[object Null]';\n}\n    \n/* harmony default export */ __webpack_exports__[\"default\"] = (isNull);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isNull.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isNumber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isNumber.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * The `isNumber()` function determines whether an object is a number.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isNumber(variable) {\n    return Object.prototype.toString.call(variable) === '[object Number]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isNumber);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isNumber.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isObject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isObject.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * The `isObject()` function determines whether an object is a object.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isObject(variable) {\n    return Object.prototype.toString.call(variable) === '[object Object]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isObject);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isObject.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isRegExp.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isRegExp.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * \n * The `isRegExp()` function determines whether an object is a regular expression.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isRegExp(variable) {\n    return Object.prototype.toString.call(variable) === '[object RegExp]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isRegExp);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isRegExp.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isSet.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isSet.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ \"./node_modules/@foragefox/doubledash/src/lang/isUndefined.js\");\n/* harmony import */ var _isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNull */ \"./node_modules/@foragefox/doubledash/src/lang/isNull.js\");\n\n\n\n/**\n * \n * The `isSet()` function determines whether an object is undefined or null.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isSet(variable) {\n    return !Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(variable) && !Object(_isNull__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(variable);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isSet);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isSet.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isString.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isString.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isString()` function determines whether an object is a string.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isString(variable) {\n    return Object.prototype.toString.call(variable) === '[object String]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isString);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isString.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/lang/isUndefined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/lang/isUndefined.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * \n * The `isUndefined()` function determines whether an object is undefined.\n * \n * @param {*} variable \n * @returns {boolean}\n */\nfunction isUndefined(variable) {\n    return Object.prototype.toString.call(variable) === '[object Undefined]';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isUndefined);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/lang/isUndefined.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/location/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/location/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset */ \"./node_modules/@foragefox/doubledash/src/location/offset.js\");\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ \"./node_modules/@foragefox/doubledash/src/location/position.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    offset: _offset__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    position: _position__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/location/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/location/offset.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/location/offset.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * The `offset()` function gets the current coordinates of the element relative to the document.\n * \n * ```js\n * __.location.offset(element);\n * ```\n * \n * @param {Element} element \n * @returns {Object}\n */\t\nfunction offset(element) {\n    let rect = element.getBoundingClientRect();\n\n    return {\n        top: rect.top + document.body.scrollTop,\n        left: rect.left + document.body.scrollLeft\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (offset);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/location/offset.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/location/position.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/location/position.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * The `position()` function gets the current coordinates of the element relative to the offset parent.\n * \n * ```js\n * __.location.position(element, relativeToViewport);\n * ```\n * \n * @param {Element} element \n * @param {boolean} relativeToViewport\n * @returns {Object}\n */\t\nfunction position(element, relativeToViewport) {\n\n    if (relativeToViewport && relativeToViewport === true) {\n        return element.getBoundingClientRect();\n    }\n\n    return {\n        left: element.offsetLeft,\n        top: element.offsetTop\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (position);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/location/position.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/height.js":
/*!***************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/height.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * The `height()` function returns the height of the element.\n * (element + padding)\n * \n * ```js\n * __.size.height(element);\n * ```\n * \n * @param {Element} element \n * @returns {int}\n */\t\nfunction height(element) {\n    return element.clientHeight;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (height);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/height.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./width */ \"./node_modules/@foragefox/doubledash/src/size/width.js\");\n/* harmony import */ var _outerWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outerWidth */ \"./node_modules/@foragefox/doubledash/src/size/outerWidth.js\");\n/* harmony import */ var _setWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setWidth */ \"./node_modules/@foragefox/doubledash/src/size/setWidth.js\");\n/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./height */ \"./node_modules/@foragefox/doubledash/src/size/height.js\");\n/* harmony import */ var _outerHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outerHeight */ \"./node_modules/@foragefox/doubledash/src/size/outerHeight.js\");\n/* harmony import */ var _setHeight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setHeight */ \"./node_modules/@foragefox/doubledash/src/size/setHeight.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    width: _width__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    outerWidth: _outerWidth__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    setWidth: _setWidth__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    height: _height__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    outerHeight: _outerHeight__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    setHeight: _setHeight__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/outerHeight.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/outerHeight.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * The `outerHeight()` function returns the outer height of the element. Includes margins if includeMargings is set to true. returns the height of the element.\n * (element + padding + border) OR (element + padding + border + margin)\n * \n * ```js\n * __.size.outerHeight(element, includeMargins);\n * ```\n * \n * @param {Element} element \n * @param {boolean} includeMargins\n * @returns {int}\n */\t\nfunction outerHeight(element, includeMargins) {\n    if (includeMargins && includeMargins === true) {\n        let height = element.offsetHeight;\n        let style = getComputedStyle(element);\n    \n        height += parseInt(style.marginTop) + parseInt(style.marginBottom);\n        return height;\n    }\n\n    return element.offsetHeight;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (outerHeight);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/outerHeight.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/outerWidth.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/outerWidth.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * The `outerWidth()` function returns the outer width of the element. Includes margins if includeMargings is set to true. returns the width of the element.\n * (element + padding + border) OR (element + padding + border + margin)\n * \n * ```js\n * __.size.outerWidth(element, includeMargins);\n * ```\n * \n * @param {Element} element \n * @param {boolean} includeMargins\n * @returns {int}\n */\t\nfunction outerWidth(element, includeMargins) {\n    if (includeMargins && includeMargins === true) {\n        let width = element.offsetWidth;\n        let style = getComputedStyle(element);\n      \n        width += parseInt(style.marginLeft) + parseInt(style.marginRight);\n        return width;\n    }\n    \n    return element.offsetWidth;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (outerWidth);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/outerWidth.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/setHeight.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/setHeight.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isFunction */ \"./node_modules/@foragefox/doubledash/src/lang/isFunction.js\");\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n\n/**\n * The `setHeight()` function sets the height of the element.\n * \n * ```js\n * __.size.setHeight(element, value);\n * ```\n * \n * @param {Element} element \n * @param {number|string|function} value\n */\t\nfunction setHeight(element, value) {\n    if (Object(_lang_isFunction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) \n        value = value();\n\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value)) \n        element.style.height = value;\n    else\n        element.style.height = value + 'px';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setHeight);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/setHeight.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/setWidth.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/setWidth.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/isFunction */ \"./node_modules/@foragefox/doubledash/src/lang/isFunction.js\");\n/* harmony import */ var _lang_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/isString */ \"./node_modules/@foragefox/doubledash/src/lang/isString.js\");\n\n\n\n/**\n * The `setWidth()` function sets the width of the element.\n * \n * ```js\n * __.size.setWidth(element, value);\n * ```\n * \n * @param {Element} element \n * @param {number|string|function} value\n */\t\nfunction setWidth(element, value) {\n    if (Object(_lang_isFunction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) \n        value = value();\n\n    if (Object(_lang_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value)) \n        element.style.width = value;\n    else \n        element.style.width = value + 'px';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setWidth);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/setWidth.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/size/width.js":
/*!**************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/size/width.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * The `width()` function returns the width of the element.\n * (element + padding)\n * \n * ```js\n * __.size.width(element);\n * ```\n * \n * @param {Element} element \n * @returns {int}\n */\t\nfunction width(element) {\n    return element.clientWidth;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (width);\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/size/width.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/template/compile.js":
/*!********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/template/compile.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supplant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplant */ \"./node_modules/@foragefox/doubledash/src/template/supplant.js\");\n\n\n\n/**\n * Alias of supplant\n * \n * ```js\n * __.template.compile(template, json);\n * ```\n * \n * @param {string|Element} template \n * @param {Object} json \n * @returns \n */\nfunction compile(template, json) {\n    return Object(_supplant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(template, json);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (compile);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/template/compile.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/template/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/template/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./node_modules/@foragefox/doubledash/src/template/settings.js\");\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compile */ \"./node_modules/@foragefox/doubledash/src/template/compile.js\");\n/* harmony import */ var _supplant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplant */ \"./node_modules/@foragefox/doubledash/src/template/supplant.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    settings: _settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    compile: _compile__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    supplant: _supplant__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/template/index.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/template/settings.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/template/settings.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet settings = {\n    tokens: {\n        '&': {\n            process: (line, token, statement) => {\n                return 'r.push(' + statement + ');' + '\\n';\n            }\n        },\n        'if': {\n            process: (line, token, statement) => {\n                return 'if ' + statement + '{' + '\\n';\n            }\n        },\n        'elseif': {\n            process: (line, token, statement) => {\n                return '} else if' + statement + '{' + '\\n';\n            }\n        },\n        'else': {\n            process: (line, token, statement) => {\n                return '} else {' + '\\n';\n            }\n        },\n        'endif': {\n            process: (line, token, statement) => {\n                return '}' + '\\n';\n            }\n        },\n        'for': {\n            process: (line, token, statement) => {\n                return 'for ' + statement + '{' + '\\n';\n            }\n        },\n        'endfor': {\n            process: (line, token, statement) => {\n                return '}' + '\\n';\n            }\n        },\n        'break': {\n            process: (line, token, statement) => {\n                return 'break;' + '\\n';\n            }\n        },\n        'continue': {\n            process: (line, token, statement) => {\n                return 'continue;' + '\\n';\n            }\n        },\n    }\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (settings);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/template/settings.js?");

/***/ }),

/***/ "./node_modules/@foragefox/doubledash/src/template/supplant.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@foragefox/doubledash/src/template/supplant.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./node_modules/@foragefox/doubledash/src/template/settings.js\");\n/* harmony import */ var _lang_escapeHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/escapeHtml */ \"./node_modules/@foragefox/doubledash/src/lang/escapeHtml.js\");\n\n\n\n/**\n * Populates a template with a object\n * \n * ```js\n * __.template.supplant(template, json);\n * ```\n * \n * @param {string|Element} template \n * @param {Object} json \n * @returns \n */\nfunction supplant(template, json) {\n    template = (template && template.nodeType === Node.ELEMENT_NODE) ? template.innerHTML : template;\n    json = json ? json : {};\n\n    let re = /{{([^{{}}]*)}}/g,\n        reExp = new RegExp('(^( )?(' + Object.keys(_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tokens).join('|') + '))(.*)?', 'g'),\n        code = 'var r=[];\\n',\n        cursor = 0,\n        match;\n\n    let add = (line, js) => {\n        if (js) {\n            \n            if (line.match(reExp)) {\n\n                let [token, statement] = match[1].split(/ (.+)/);\n\n                if (_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tokens.hasOwnProperty(token)) {\n                    let tokenDef = _settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tokens[token];\n                    code += tokenDef.process(line, token, statement);\n                } else {\n                    throw new SyntaxError(`Token not found '${token}'`);\n                }\n                \n            } else {\n                code += 'r.push(_escape(' + line + '));\\n';\n            }\n        } else {\n            code += line != '' ? 'r.push(\"' + line.replace(/\"/g, '\\\\\"') + '\");\\n' : '';\n        }\n\n        return add;\n    }\n\n    while (match = re.exec(template)) {\n        add(template.slice(cursor, match.index))(match[1], true);\n        cursor = match.index + match[0].length;\n    }\n\n    add(template.substr(cursor, template.length - cursor));\n\n    // Attach exscape function to json\n    json._escape = _lang_escapeHtml__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n    code += 'return r.join(\"\");';\n    return new Function(' with (this) { ' + code.replace(/[\\r\\t\\n]/g, '') + '}').apply(json);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (supplant);\n\n//# sourceURL=webpack://LinkPicker/./node_modules/@foragefox/doubledash/src/template/supplant.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @foragefox/doubledash */ \"./node_modules/@foragefox/doubledash/src/index.js\");\n\n\nclass LinkPicker {\n\t\n\tconstructor(options) {\n\t\tthis.options = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lang.extend(true, LinkPicker.DEFAULTS, typeof options == 'object' && options);\n\t\t\n\t\tthis.initModal();\n\t\tthis.bindEvents();\n\t\tthis.populate();\n\t}\n\t\n\tinitModal() {\n\t\tlet modal = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].template.supplant(this.options.templates.modal, {\n\t\t\tlinkForm: this.options.templates.linkForm,\n\t\t\texistingContent: (this.options.enableExistingContent ? this.options.templates.existingContent : '')\n\t\t});\n\n\t\tthis.element = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.append(modal, document.body);\n\n\t\tthis.contentList = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.findOne('.results-list-content ul', this.element);\n\t\tthis.sectionList = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.findOne('.results-list-section ul', this.element);\n\t\tthis.linkForm = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.findOne('.link-form', this.element);\n\t}\n\t\n\tbindEvents() {\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.on(this.element, 'click', '[data-action=close]', () => this.close());\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.on(this.element, 'click', '[data-action=add-link]', () => this.addLink());\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.on(this.element, 'input', '[data-action=search-content]', (event) => this.populateContent(event));\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.on(this.element, 'click', '[data-action=select-link]', (event) => this.selectLink(event));\n\t}\n\t\n\topen() {\n\t\tthis.populateSection();\n\n\t\tthis.element.classList.add('open');\n\t\t\n\t\tthis.options.onOpen();\n\t}\n\t\n\tclose() {\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.remove(this.element);\n\n\t\tthis.options.onClose();\n\t}\n\t\n\taddLink() {\n\t\tvar result = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.parseForm(this.linkForm);\n\t\tthis.options.onSelect(result) \n\t\tthis.close();\n\t}\n\n\tpopulate() {\n\t\tif (this.options.link.url) {\n\t\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.populateForm(this.linkForm, this.options.link);\n\t\t}\n\t}\n\n\tselectLink(event) {\n\t\tlet item = event.delegateTarget;\n\t\n\t\tlet link = { text: item.dataset.text, url: item.dataset.url };\n\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.populateForm(this.linkForm, link);\n\t}\n\n\tpopulateContent(event) {\n\t\tlet value = event.target.value;\n\t\t\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.empty(this.contentList);\n\t\t\n\t\tif (value.length < 3) {\n\t\t\treturn;\n\t\t}\n\n\t\tfetch(this.options.endpoint + '?' + new URLSearchParams({q: value}), {\n\t\t\t\theaders: {\n\t\t\t\t\t'Accept': 'application/json'\n\t\t\t\t}\n\t\t\t})\n\t\t\t.then(this.responseHandler)\n\t\t\t.then(data => {\n\t\t\t\tlet html = '';\n\t\t\t\tfor (let i = 0; i < data.length; i++) {\n\t\t\t\t\tdata[i].tab = 'content';\n\t\t\t\t\t\n\t\t\t\t\tlet link = this.options.mapData(data[i]);\n\t\t\t\t\t\n\t\t\t\t\thtml += _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].template.supplant(this.options.templates.existingContentItem, link);\n\t\t\t\t}\n\n\t\t\t\tthis.contentList.innerHTML = html;\n\t\t\t})\n\t\t\t.catch((error) => {\n\t\t\t\tconsole.error('Error: ', error);\n\t\t\t});\n\t}\n\n\tpopulateSection() {\n\t\tif (!this.sectionList) return;\n\n\t\t_foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.empty(this.sectionList);\n\t\t\n\t\tlet html = '';\n\t\tlet sections = _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dom.find('[data-structure=container]');\n\t\tfor (let i = 0; i < sections.length; i++) {\n\t\t\thtml += _foragefox_doubledash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].template.supplant(this.options.templates.existingContentItem, { \n\t\t\t\ttext: 'Container ' + i,\n\t\t\t\turl: '#'+sections[i].id,\n\t\t\t\ttab: 'section'\n\t\t\t});\n\t\t}\n\n\t\tthis.sectionList.innerHtml = html;\n\t}\n\n\tresponseHandler(response) {\n\n\t\tif (!response.ok) {\n\t\t\treturn Promise.reject(response.statusText);\n\t\t}\n\t\n\t\treturn response.text().then(text => {\n\t\t\tconst data = text && JSON.parse(text);\n\n\t\t\tif (data && data.error && data.error.status) {\n\t\t\t\treturn Promise.reject(data.error.message);\n\t\t\t}\n\n\t\t\tif (data && data.status && data.status.error) {\n\t\t\t\treturn Promise.reject(data.status.message);\n\t\t\t}\n\t\n\t\t\treturn data.payload;\n\t\t});\n\t\n\t}\n}\n\n\nLinkPicker.DEFAULTS = {\n\tendpoint: '',\t\n\tlink: {},\n\tenableExistingContent: false,\n\tmapData: function(data) { return data; },\n\tonSelect: function(result) { },\n\tonOpen: function() { },\n\tonClose: function() { },\n\ttemplates: {\n\t\tmodal: `\n\t\t\t<div class=\"link-picker\">\n\t\t\t\t<div class=\"link-picker-dialog\">\n\t\t\t\t\t<div class=\"link-picker-content\">\n\n\t\t\t\t\t\t<div class=\"link-picker-header\">\n\t\t\t\t\t\t\t<button data-action=\"close\" type=\"button\" class=\"close\" aria-label=\"Close\"><i class=\"lp-icon-close\"></i></button>\n\t\t\t\t\t\t\t<h3>Insert/edit link</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"link-picker-body\">\n\t\t\t\t\t\t\t{{& linkForm}}\n\t\t\t\t\t\t\t{{& existingContent}}\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"link-picker-footer\">\n\t\t\t\t\t\t\t<button data-action=\"close\" class=\"btn btn-link\">Cancel</button>\n\t\t\t\t\t\t\t<button data-action=\"add-link\" class=\"btn btn-primary\">Add Link</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t`,\n\t\tlinkForm: `\n\t\t\t<div class=\"link-form\">\n\t\t\t\t<p><i>Enter the destination URL</i></p>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"url\" class=\"col-sm-2 col-form-label\">URL</label>\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" autocomplete=\"off\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"text\" class=\"col-sm-2 col-form-label\">Text</label>\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"text\" id=\"text\" autocomplete=\"off\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<div class=\"offset-md-2 col-sm-10\">\n\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"_blank\" name=\"targetBlank\" id=\"targetBlank\" />\n\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"targetBlank\">\n\t\t\t\t\t\t\t\tOpen link in a new tab\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,\n\t\texistingContent: `\n\t\t\t<div class=\"existing-content\">\n\n\t\t\t\t<p><i>Or link to existing content</i></p>\n\n\t\t\t\t<ul class=\"nav nav-tabs nav-fill\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#lp-content\" data-toggle=\"tab\">Content</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#lp-section\" data-toggle=\"tab\">Section</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link disabled\" href=\"#lp-modals\" tabindex=\"-1\" aria-disabled=\"true\" data-toggle=\"tab\">Modals</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t<div class=\"tab-pane fade show active\" id=\"lp-content\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\t\t\t\t\t\t<div class=\"results-list results-list-content\">\n\t\t\t\t\t\t\t<input class=\"form-control\" data-action=\"search-content\" value=\"\" placeholder=\"search links...\" />\n\t\t\t\t\t\t\t<ul></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"lp-section\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n\t\t\t\t\t\t<div class=\"results-list results-list-section\">\n\t\t\t\t\t\t\t<ul></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t\n\t\t\t</div>\n\t\t`,\n\t\texistingContentItem: `\t<li class=\"text-truncate\" data-action=\"select-link\" data-text=\"{{text}}\" data-url=\"{{url}}\">\n\t\t\t\t\t\t\t\t\t{{text}}  <em class=\"text-muted small\">{{url}}</em>\n\t\t\t\t\t\t\t\t</li>`\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkPicker);\n\n\n//# sourceURL=webpack://LinkPicker/./src/js/LinkPicker.js?");

/***/ })

/******/ });