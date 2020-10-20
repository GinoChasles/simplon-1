webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CityList.js":
/*!********************************!*\
  !*** ./components/CityList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\components\\CityList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CityList = function CityList(_ref) {
  var id = _ref.id,
      cities = _ref.cities;
  var render = cities.map(function (c) {
    return __jsx("div", {
      className: "city",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 36
      }
    }, c);
  });
  return __jsx("div", {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, render);
};

_c = CityList;
/* harmony default export */ __webpack_exports__["default"] = (Cities);

var _c;

$RefreshReg$(_c, "CityList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Presentation */ "./components/Presentation.js");
/* harmony import */ var _components_Review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Review */ "./components/Review.js");
/* harmony import */ var _components_CityList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CityList */ "./components/CityList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Leduc\\Desktop\\jaipasdevoiture\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  return __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "carroussel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "carroussel"), __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "presentation",
    title: "Qui somme nous",
    text: "Cr\xE9\xE9 en 1863, Jaipasdevoiture est une entreprise familiale de location de v\xE9hicule.Avant tout orient\xE9 vers la satisfaction du client, notre soci\xE9t\xE9 s\u2019est toujours efforc\xE9 deproposer un service personnalis\xE9 et de qualit\xE9. Nous nous somme toujours adapt\xE9 \xE0chaque changement des habitudes de consommation de nos clients.Jaipasdevoiture c\u2019est plus de 2800 v\xE9hicules, de la voiture de tourisme au camionsemi-remorque en passant par le v\xE9lo \xE9lectrique. Tout ce qu\u2019il faut quelque soit votrebesoin ou vos envies.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "localization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "localization-presentation",
    title: "O\xF9 nous trouver",
    text: "Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et deBelgique.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_components_CityList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cities: [],
    id: "localization-cities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Nantes"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Limoges"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Tours"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Reims"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Lille"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Charleroi"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Li\xE8ge"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "M\xE2con"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Montauban"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Quimper"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Caen"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Le Havre"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Dijon"), __jsx("div", {
    className: "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Strasbourg (bient\xF4t)")), __jsx("div", {
    id: "localization-map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/img/map.png",
    alt: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))), __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "keys",
    title: "Chiffres cl\xE9s",
    text: __jsx("div", {
      id: "keys-grid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "key-figure",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "plus de 100.000 clients satisfaits"), __jsx("div", {
      className: "key-figure",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "2800 v\xE9hicules"), __jsx("div", {
      className: "key-figure",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, "157 ans"), __jsx("div", {
      className: "key-figure",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, "50 employ\xE9s"), __jsx("div", {
      className: "key-figure",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, "13 agences"), __jsx("div", {
      className: "key-figure",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "1 passion")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "reviews",
    title: "Avis clients",
    text: __jsx("div", {
      id: "review-grid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
      link: "",
      rating: 5,
      text: "j'adore les voitures",
      user: "micheline",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }), __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
      link: "",
      rating: 4,
      text: "trop cool la vie",
      user: "jean jacqueq",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }), __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
      link: "",
      rating: 3,
      text: "vroom vroom",
      user: "albert",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "partners",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "partners"), __jsx("div", {
    id: "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "contacts"));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaXR5TGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2l0eUxpc3QiLCJpZCIsImNpdGllcyIsInJlbmRlciIsIm1hcCIsImMiLCJDaXRpZXMiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFvQjtBQUFBLE1BQWpCQyxFQUFpQixRQUFqQkEsRUFBaUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDakMsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsV0FBSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUJBLENBQXZCLENBQUo7QUFBQSxHQUFaLENBQWY7QUFFQSxTQUNJO0FBQUssTUFBRSxFQUFFSixFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsTUFETCxDQURKO0FBS0gsQ0FSRDs7S0FBTUgsUTtBQVVTTSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFbEIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFO0FBQUssTUFBRSxFQUFDLFlBQVI7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TUFIRixDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0YsRUFtREU7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ERixFQW9ERTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGLENBREY7QUF5REQsQ0EzREQ7O0tBQU1BLEs7QUE2RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3ZDYwOTZkZjc1ZTk3NjcwMTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDaXR5TGlzdCA9ICh7IGlkLCBjaXRpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gY2l0aWVzLm1hcChjID0+IDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPntjfTwvZGl2Pik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdGllczsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBQcmVzZW50YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QcmVzZW50YXRpb24nO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3JztcclxuaW1wb3J0IENpdHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2l0eUxpc3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwiY2Fycm91c3NlbFwiPmNhcnJvdXNzZWw8L2Rpdj5cclxuXHJcbiAgICAgIDxQcmVzZW50YXRpb24gaWQ9XCJwcmVzZW50YXRpb25cIiB0aXRsZT1cIlF1aSBzb21tZSBub3VzXCIgdGV4dD1cIkNyw6nDqSBlbiAxODYzLCBKYWlwYXNkZXZvaXR1cmUgZXN0IHVuZSBlbnRyZXByaXNlIGZhbWlsaWFsZSBkZSBsb2NhdGlvbiBkZSB2w6loaWN1bGUuQXZhbnQgdG91dCBvcmllbnTDqSB2ZXJzIGxhIHNhdGlzZmFjdGlvbiBkdSBjbGllbnQsIG5vdHJlIHNvY2nDqXTDqSBz4oCZZXN0IHRvdWpvdXJzIGVmZm9yY8OpIGRlcHJvcG9zZXIgdW4gc2VydmljZSBwZXJzb25uYWxpc8OpIGV0IGRlIHF1YWxpdMOpLiBOb3VzIG5vdXMgc29tbWUgdG91am91cnMgYWRhcHTDqSDDoGNoYXF1ZSBjaGFuZ2VtZW50IGRlcyBoYWJpdHVkZXMgZGUgY29uc29tbWF0aW9uIGRlIG5vcyBjbGllbnRzLkphaXBhc2Rldm9pdHVyZSBj4oCZZXN0IHBsdXMgZGUgMjgwMCB2w6loaWN1bGVzLCBkZSBsYSB2b2l0dXJlIGRlIHRvdXJpc21lIGF1IGNhbWlvbnNlbWktcmVtb3JxdWUgZW4gcGFzc2FudCBwYXIgbGUgdsOpbG8gw6lsZWN0cmlxdWUuIFRvdXQgY2UgcXXigJlpbCBmYXV0IHF1ZWxxdWUgc29pdCB2b3RyZWJlc29pbiBvdSB2b3MgZW52aWVzLlwiIC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwibG9jYWxpemF0aW9uXCI+XHJcbiAgICAgICAgPFByZXNlbnRhdGlvbiBpZD1cImxvY2FsaXphdGlvbi1wcmVzZW50YXRpb25cIiB0aXRsZT1cIk/DuSBub3VzIHRyb3V2ZXJcIiB0ZXh0PVwiVm91cyBwb3VycmV6IHRyb3V2ZXIgbm9zIGFnZW5jZXMgZGFucyBwbHVzIGRlIDEzIGdyYW5kZXMgdmlsbGVzIGRlIEZyYW5jZSBldCBkZUJlbGdpcXVlLlwiIC8+XHJcblxyXG5cclxuICAgICAgICA8Q2l0eUxpc3QgY2l0aWVzPXtbXX0gaWQ9XCJsb2NhbGl6YXRpb24tY2l0aWVzXCIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXR5XCI+TmFudGVzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlcIj5MaW1vZ2VzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlcIj5Ub3VyczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXR5XCI+UmVpbXM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPkxpbGxlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlcIj5DaGFybGVyb2k8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPkxpw6hnZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXR5XCI+TcOiY29uPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlcIj5Nb250YXViYW48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPlF1aW1wZXI8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPkNhZW48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0eVwiPkxlIEhhdnJlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlcIj5EaWpvbjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXR5XCI+U3RyYXNib3VyZyAoYmllbnTDtHQpPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvY2FsaXphdGlvbi1tYXBcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9tYXAucG5nXCIgYWx0PVwibWFwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQcmVzZW50YXRpb24gaWQ9XCJrZXlzXCIgdGl0bGU9XCJDaGlmZnJlcyBjbMOpc1wiIHRleHQ9e1xyXG4gICAgICAgIDxkaXYgaWQ9XCJrZXlzLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWZpZ3VyZVwiPnBsdXMgZGUgMTAwLjAwMCBjbGllbnRzIHNhdGlzZmFpdHM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LWZpZ3VyZVwiPjI4MDAgdsOpaGljdWxlczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktZmlndXJlXCI+MTU3IGFuczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktZmlndXJlXCI+NTAgZW1wbG95w6lzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1maWd1cmVcIj4xMyBhZ2VuY2VzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1maWd1cmVcIj4xIHBhc3Npb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfSAvPlxyXG5cclxuICAgICAgPFByZXNlbnRhdGlvbiBpZD1cInJldmlld3NcIiB0aXRsZT1cIkF2aXMgY2xpZW50c1wiIHRleHQ9e1xyXG4gICAgICAgIDxkaXYgaWQ9XCJyZXZpZXctZ3JpZFwiPlxyXG4gICAgICAgICAgPFJldmlldyBsaW5rPVwiXCIgcmF0aW5nPXs1fSB0ZXh0PVwiaidhZG9yZSBsZXMgdm9pdHVyZXNcIiB1c2VyPVwibWljaGVsaW5lXCIgLz5cclxuICAgICAgICAgIDxSZXZpZXcgbGluaz1cIlwiIHJhdGluZz17NH0gdGV4dD1cInRyb3AgY29vbCBsYSB2aWVcIiB1c2VyPVwiamVhbiBqYWNxdWVxXCIgLz5cclxuICAgICAgICAgIDxSZXZpZXcgbGluaz1cIlwiIHJhdGluZz17M30gdGV4dD1cInZyb29tIHZyb29tXCIgdXNlcj1cImFsYmVydFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH0gLz5cclxuICAgICAgPGRpdiBpZD1cInBhcnRuZXJzXCI+cGFydG5lcnM8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIj5jb250YWN0czwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9