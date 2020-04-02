function doGet() {
}
function processForm() {
}
function manageSheets() {
}(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _processForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const doGet = () => {
  return HtmlService.createTemplateFromFile('Index').evaluate();
};

const htmlTemplete = HtmlService.createTemplateFromFile('Index');
htmlTemplete.data = Object(_manage__WEBPACK_IMPORTED_MODULE_1__["default"])();
global.doGet = doGet;
global.processForm = _processForm__WEBPACK_IMPORTED_MODULE_0__["default"];
global.manageSheets = _manage__WEBPACK_IMPORTED_MODULE_1__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const arrayInsertion = (toAddArray, sheet, idPrefix, courseName) => {
  if (toAddArray[1] != null) {
    const itemArray = [];
    let itemId;
    let itemNo;
    let i;
    itemNo = sheet.getLastRow() - 1;

    for (i = 0; i < toAddArray.length; i += 1) {
      itemNo += 1;
      itemId = idPrefix + itemNo;
      itemArray.push([itemId, courseName, toAddArray[i]]);
    }

    sheet.getRange(sheet.getLastRow() + 1, 1, toAddArray.length, 3).setValues(itemArray);
  }
};

const processForm = courseDetails => {
  const url = 'https://docs.google.com/spreadsheets/d/1ykn43-IQIJsHo1irRPwqXrWZmfmdtu6z-TZabdIS9Nk/edit#gid=0';
  const ss = SpreadsheetApp.openByUrl(url);
  const courseSheet = ss.getSheetByName('courses');
  const ws = ss.getSheetByName('quizes');
  const as = ss.getSheetByName('assignments');
  const ts = ss.getSheetByName('tutorials');
  courseSheet.appendRow([courseSheet.getLastRow(), courseDetails.name]);
  arrayInsertion(courseDetails.quizes, ws, 'QZ', courseDetails.name);
  arrayInsertion(courseDetails.assignments, as, 'ASN', courseDetails.name);
  arrayInsertion(courseDetails.tutorials, ts, 'TUTE', courseDetails.name);
};

/* harmony default export */ __webpack_exports__["default"] = (processForm);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function manageSheets() {
  const ss = SpreadsheetApp.openById('1ykn43-IQIJsHo1irRPwqXrWZmfmdtu6z-TZabdIS9Nk');
  const sheets = ss.getSheets();
  const courses = ss.getSheetByName('courses').getDataRange().getValues();
  const quizes = ss.getSheetByName('quizes').getDataRange().getValues();
  const assignments = ss.getSheetByName('assignments').getDataRange().getValues();
  const tutorials = ss.getSheetByName('tutorials').getDataRange().getValues();
  const sheetNames = [];

  for (let x = 0; x < sheets.length; x += 1) {
    sheetNames.push(sheets[x].getName());
  }

  const sheetData = {
    names: sheetNames,
    courses,
    assignments,
    tutorials,
    quizes
  };
  return sheetData;
}

/* harmony default export */ __webpack_exports__["default"] = (manageSheets);

/***/ })
/******/ ])));