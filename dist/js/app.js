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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/MakeResponsive.js":
/*!***********************************!*\
  !*** ./modules/MakeResponsive.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeResponsive; });\nvar canvas = document.getElementById('canvas');\n// code from Adobe Animate responsive\nfunction makeResponsive(_w, _h, isResp, respDim, isScale, scaleType) {\n  var lastW, lastH, lastS=1;\n  //canvas.setAttribute('width', _w);\n  //canvas.setAttribute('height', _h);\n  window.addEventListener('resize', resizeCanvas);\n  resizeCanvas();\n  function resizeCanvas() {\n    //var w = lib.properties.width, h = lib.properties.height;\n    var w = _w, h = _h;\n    var iw = window.innerWidth, ih=window.innerHeight;\n    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;\n    if(isResp) {\n      if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {\n        sRatio = lastS;\n      }\n      else if(!isScale) {\n        if(iw<w || ih<h)\n          sRatio = Math.min(xRatio, yRatio);\n      }\n      else if(scaleType==1) {\n        sRatio = Math.min(xRatio, yRatio);\n      }\n      else if(scaleType==2) {\n        sRatio = Math.max(xRatio, yRatio);\n      }\n    }\n    canvas.width = w*pRatio*sRatio;\n    canvas.height = h*pRatio*sRatio;\n    canvas.style.width =  w*sRatio+'px';\n    canvas.style.height = h*sRatio+'px';\n    //stage.scaleX = pRatio*sRatio;\n    //stage.scaleY = pRatio*sRatio;\n    lastW = iw; lastH = ih; lastS = sRatio;\n    //stage.tickOnUpdate = false;\n    //stage.update();\n    //stage.tickOnUpdate = true;\n  }\n}\n\n\n//# sourceURL=webpack:///./modules/MakeResponsive.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MakeResponsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/MakeResponsive.js */ \"./modules/MakeResponsive.js\");\n\n\nObject(_modules_MakeResponsive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1920, 1080, true,'both',true,1);\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });