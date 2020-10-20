module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CityList.js":
/*!********************************!*\
  !*** ./components/CityList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\components\\CityList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CityList = ({
  id,
  cities
}) => {
  const render = cities.map(c => __jsx("div", {
    className: "city",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 36
    }
  }, c));
  return __jsx("div", {
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, render);
};

/* harmony default export */ __webpack_exports__["default"] = (CityList);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header() {
  return __jsx("div", {
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "header-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "logo"), __jsx("div", {
    id: "header-tel",
    className: "tel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "tel"), __jsx("div", {
    id: "header-mail",
    className: "mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "mail"));
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Navbar() {
  return __jsx("div", {
    id: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "navbar-reservation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "r\xE9servations"), __jsx("div", {
    id: "navbar-vehicle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "v\xE9hicules"), __jsx("div", {
    id: "navbar-agencies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "agences"), __jsx("div", {
    id: "navbar-contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "contact"), __jsx("div", {
    id: "navbar-qea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "FAQ"), __jsx("div", {
    id: "navbar-enterprise",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Entreprise"), __jsx("div", {
    id: "navbar-covid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "covid"), __jsx("div", {
    id: "navbar-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "loupe"));
}

/***/ }),

/***/ "./components/Presentation.js":
/*!************************************!*\
  !*** ./components/Presentation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Presentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\components\\Presentation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Presentation({
  id,
  title,
  text
}) {
  return __jsx("div", {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "presentation-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, title), __jsx("div", {
    id: "presentation-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, text));
}

/***/ }),

/***/ "./components/Review.js":
/*!******************************!*\
  !*** ./components/Review.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Review; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\components\\Review.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Review({
  text,
  user,
  rating,
  link
}) {
  return __jsx("div", {
    class: "review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "review-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, text), __jsx("div", {
    className: "review-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, user), __jsx("div", {
    className: "review-rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, rating), __jsx("div", {
    className: "review-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, link));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Presentation */ "./components/Presentation.js");
/* harmony import */ var _components_Review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Review */ "./components/Review.js");
/* harmony import */ var _components_CityList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CityList */ "./components/CityList.js");
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const cities = ["Nantes", "Limoges", "Tours", "Reims", "Lille", "Charleroi", "Liège", "Mâcon", "Montauban", "Quimper", "Caen", "Le Havre", "Dijon", "Strasbourg (bientôt)"];

const Index = () => {
  return __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "carroussel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "carroussel"), __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "presentation",
    title: "Qui somme nous",
    text: "Cr\xE9\xE9 en 1863, Jaipasdevoiture est une entreprise familiale de location de v\xE9hicule.Avant tout orient\xE9 vers la satisfaction du client, notre soci\xE9t\xE9 s\u2019est toujours efforc\xE9 deproposer un service personnalis\xE9 et de qualit\xE9. Nous nous somme toujours adapt\xE9 \xE0chaque changement des habitudes de consommation de nos clients.Jaipasdevoiture c\u2019est plus de 2800 v\xE9hicules, de la voiture de tourisme au camionsemi-remorque en passant par le v\xE9lo \xE9lectrique. Tout ce qu\u2019il faut quelque soit votrebesoin ou vos envies.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "localization",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "localization-presentation",
    title: "O\xF9 nous trouver",
    text: "Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et deBelgique.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_CityList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cities: cities,
    id: "localization-cities",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "localization-map",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/img/map.png",
    alt: "map",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))), __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "keys",
    title: "Chiffres cl\xE9s",
    text: __jsx("div", {
      id: "keys-grid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "key-figure",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, "plus de 100.000 clients satisfaits"), __jsx("div", {
      className: "key-figure",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, "2800 v\xE9hicules"), __jsx("div", {
      className: "key-figure",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, "157 ans"), __jsx("div", {
      className: "key-figure",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, "50 employ\xE9s"), __jsx("div", {
      className: "key-figure",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, "13 agences"), __jsx("div", {
      className: "key-figure",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, "1 passion")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "reviews",
    title: "Avis clients",
    text: __jsx("div", {
      id: "review-grid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
      link: "",
      rating: 5,
      text: "j'adore les voitures",
      user: "micheline",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }), __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
      link: "",
      rating: 4,
      text: "trop cool la vie",
      user: "jean jacqueq",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }), __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
      link: "",
      rating: 3,
      text: "vroom vroom",
      user: "albert",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "partners",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "partners"), __jsx("div", {
    id: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "contacts"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaXR5TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZXNlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNpdHlMaXN0IiwiaWQiLCJjaXRpZXMiLCJyZW5kZXIiLCJtYXAiLCJjIiwiSGVhZGVyIiwiTmF2YmFyIiwiUHJlc2VudGF0aW9uIiwidGl0bGUiLCJ0ZXh0IiwiUmV2aWV3IiwidXNlciIsInJhdGluZyIsImxpbmsiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBDRixFQXFDRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNGLENBREY7QUEwQ0QsQ0E1Q0Q7O0FBOENlYSxvRUFBZixFOzs7Ozs7Ozs7OztBQ3REQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDaXR5TGlzdCA9ICh7IGlkLCBjaXRpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gY2l0aWVzLm1hcChjID0+IDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPntjfTwvZGl2Pik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdHlMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWxvZ29cIj5sb2dvPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItdGVsXCIgY2xhc3NOYW1lPVwidGVsXCI+dGVsPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItbWFpbFwiIGNsYXNzTmFtZT1cIm1haWxcIj5tYWlsPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXItcmVzZXJ2YXRpb25cIj5yw6lzZXJ2YXRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXItdmVoaWNsZVwiPnbDqWhpY3VsZXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhci1hZ2VuY2llc1wiPmFnZW5jZXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhci1jb250YWN0XCI+Y29udGFjdDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyLXFlYVwiPkZBUTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyLWVudGVycHJpc2VcIj5FbnRyZXByaXNlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXItY292aWRcIj5jb3ZpZDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyLXNlYXJjaFwiPmxvdXBlPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlc2VudGF0aW9uKHsgaWQsIHRpdGxlLCB0ZXh0IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJlc2VudGF0aW9uLXRpdGxlXCI+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJlc2VudGF0aW9uLXRleHRcIj57dGV4dH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZpZXcoeyB0ZXh0LCB1c2VyLCByYXRpbmcsIGxpbmsgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXRleHRcIj57dGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclwiPnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1yYXRpbmdcIj57cmF0aW5nfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1saW5rXCI+e2xpbmt9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgUHJlc2VudGF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJlc2VudGF0aW9uJztcclxuaW1wb3J0IFJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL1Jldmlldyc7XHJcbmltcG9ydCBDaXR5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NpdHlMaXN0JztcclxuXHJcbmNvbnN0IGNpdGllcyA9IFtcIk5hbnRlc1wiLCBcIkxpbW9nZXNcIiwgXCJUb3Vyc1wiLCBcIlJlaW1zXCIsIFwiTGlsbGVcIiwgXCJDaGFybGVyb2lcIiwgXCJMacOoZ2VcIiwgXCJNw6Jjb25cIiwgXCJNb250YXViYW5cIiwgXCJRdWltcGVyXCIsIFwiQ2FlblwiLCBcIkxlIEhhdnJlXCIsIFwiRGlqb25cIiwgXCJTdHJhc2JvdXJnIChiaWVudMO0dClcIixdO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwiY2Fycm91c3NlbFwiPmNhcnJvdXNzZWw8L2Rpdj5cclxuXHJcbiAgICAgIDxQcmVzZW50YXRpb24gaWQ9XCJwcmVzZW50YXRpb25cIiB0aXRsZT1cIlF1aSBzb21tZSBub3VzXCIgdGV4dD1cIkNyw6nDqSBlbiAxODYzLCBKYWlwYXNkZXZvaXR1cmUgZXN0IHVuZSBlbnRyZXByaXNlIGZhbWlsaWFsZSBkZSBsb2NhdGlvbiBkZSB2w6loaWN1bGUuQXZhbnQgdG91dCBvcmllbnTDqSB2ZXJzIGxhIHNhdGlzZmFjdGlvbiBkdSBjbGllbnQsIG5vdHJlIHNvY2nDqXTDqSBz4oCZZXN0IHRvdWpvdXJzIGVmZm9yY8OpIGRlcHJvcG9zZXIgdW4gc2VydmljZSBwZXJzb25uYWxpc8OpIGV0IGRlIHF1YWxpdMOpLiBOb3VzIG5vdXMgc29tbWUgdG91am91cnMgYWRhcHTDqSDDoGNoYXF1ZSBjaGFuZ2VtZW50IGRlcyBoYWJpdHVkZXMgZGUgY29uc29tbWF0aW9uIGRlIG5vcyBjbGllbnRzLkphaXBhc2Rldm9pdHVyZSBj4oCZZXN0IHBsdXMgZGUgMjgwMCB2w6loaWN1bGVzLCBkZSBsYSB2b2l0dXJlIGRlIHRvdXJpc21lIGF1IGNhbWlvbnNlbWktcmVtb3JxdWUgZW4gcGFzc2FudCBwYXIgbGUgdsOpbG8gw6lsZWN0cmlxdWUuIFRvdXQgY2UgcXXigJlpbCBmYXV0IHF1ZWxxdWUgc29pdCB2b3RyZWJlc29pbiBvdSB2b3MgZW52aWVzLlwiIC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwibG9jYWxpemF0aW9uXCI+XHJcbiAgICAgICAgPFByZXNlbnRhdGlvbiBpZD1cImxvY2FsaXphdGlvbi1wcmVzZW50YXRpb25cIiB0aXRsZT1cIk/DuSBub3VzIHRyb3V2ZXJcIiB0ZXh0PVwiVm91cyBwb3VycmV6IHRyb3V2ZXIgbm9zIGFnZW5jZXMgZGFucyBwbHVzIGRlIDEzIGdyYW5kZXMgdmlsbGVzIGRlIEZyYW5jZSBldCBkZUJlbGdpcXVlLlwiIC8+XHJcblxyXG5cclxuICAgICAgICA8Q2l0eUxpc3QgY2l0aWVzPXtjaXRpZXN9IGlkPVwibG9jYWxpemF0aW9uLWNpdGllc1wiIC8+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb2NhbGl6YXRpb24tbWFwXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbWFwLnBuZ1wiIGFsdD1cIm1hcFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJlc2VudGF0aW9uIGlkPVwia2V5c1wiIHRpdGxlPVwiQ2hpZmZyZXMgY2zDqXNcIiB0ZXh0PXtcclxuICAgICAgICA8ZGl2IGlkPVwia2V5cy1ncmlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1maWd1cmVcIj5wbHVzIGRlIDEwMC4wMDAgY2xpZW50cyBzYXRpc2ZhaXRzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1maWd1cmVcIj4yODAwIHbDqWhpY3VsZXM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWZpZ3VyZVwiPjE1NyBhbnM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWZpZ3VyZVwiPjUwIGVtcGxvecOpczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktZmlndXJlXCI+MTMgYWdlbmNlczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktZmlndXJlXCI+MSBwYXNzaW9uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH0gLz5cclxuXHJcbiAgICAgIDxQcmVzZW50YXRpb24gaWQ9XCJyZXZpZXdzXCIgdGl0bGU9XCJBdmlzIGNsaWVudHNcIiB0ZXh0PXtcclxuICAgICAgICA8ZGl2IGlkPVwicmV2aWV3LWdyaWRcIj5cclxuICAgICAgICAgIDxSZXZpZXcgbGluaz1cIlwiIHJhdGluZz17NX0gdGV4dD1cImonYWRvcmUgbGVzIHZvaXR1cmVzXCIgdXNlcj1cIm1pY2hlbGluZVwiIC8+XHJcbiAgICAgICAgICA8UmV2aWV3IGxpbms9XCJcIiByYXRpbmc9ezR9IHRleHQ9XCJ0cm9wIGNvb2wgbGEgdmllXCIgdXNlcj1cImplYW4gamFjcXVlcVwiIC8+XHJcbiAgICAgICAgICA8UmV2aWV3IGxpbms9XCJcIiByYXRpbmc9ezN9IHRleHQ9XCJ2cm9vbSB2cm9vbVwiIHVzZXI9XCJhbGJlcnRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9IC8+XHJcbiAgICAgIDxkaXYgaWQ9XCJwYXJ0bmVyc1wiPnBhcnRuZXJzPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb250YWN0XCI+Y29udGFjdHM8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==