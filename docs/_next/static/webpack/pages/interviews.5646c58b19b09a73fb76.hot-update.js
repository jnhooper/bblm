webpackHotUpdate_N_E("pages/interviews",{

/***/ "./components/Blockquote/Blockquote.tsx":
/*!**********************************************!*\
  !*** ./components/Blockquote/Blockquote.tsx ***!
  \**********************************************/
/*! exports provided: Blockquote, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Blockquote\", function() { return Blockquote; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Blockquote/styles.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/johnnissen-hooper/projects/bblm/components/Blockquote/Blockquote.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Blockquote = function Blockquote(props) {\n  var children = props.children,\n      cite = props.cite,\n      href = props.href;\n  var citeUrl = cite ? cite : href ? href : null;\n\n  var quote = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"blockquote\", {\n    css: _styles__WEBPACK_IMPORTED_MODULE_2__[\"blockquoteStyle\"],\n    cite: citeUrl,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, children, \" ...\", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 14\n    }\n  }, \"Click to read more\")));\n\n  return props.href ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    passHref: true,\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"a\", {\n    css: _styles__WEBPACK_IMPORTED_MODULE_2__[\"linkQuote\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, quote)) : quote;\n};\n_c = Blockquote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blockquote);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blockquote\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9ja3F1b3RlL0Jsb2NrcXVvdGUudHN4PzJhNjAiXSwibmFtZXMiOlsiQmxvY2txdW90ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJjaXRlIiwiaHJlZiIsImNpdGVVcmwiLCJxdW90ZSIsImJsb2NrcXVvdGVTdHlsZSIsImxpbmtRdW90ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQzVCQyxRQUQ0QixHQUNKRCxLQURJLENBQzVCQyxRQUQ0QjtBQUFBLE1BQ2xCQyxJQURrQixHQUNKRixLQURJLENBQ2xCRSxJQURrQjtBQUFBLE1BQ1pDLElBRFksR0FDSkgsS0FESSxDQUNaRyxJQURZO0FBRW5DLE1BQU1DLE9BQU8sR0FBR0YsSUFBSSxHQUFHQSxJQUFILEdBQVdDLElBQUksR0FBR0EsSUFBSCxHQUFVLElBQTdDOztBQUNBLE1BQU1FLEtBQUssR0FDVDtBQUFZLE9BQUcsRUFBRUMsdURBQWpCO0FBQWtDLFFBQUksRUFBRUYsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUgsUUFGSixVQUdPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSFAsQ0FERixDQURGOztBQVVBLFNBQ0VELEtBQUssQ0FBQ0csSUFBTixHQUVFLDBEQUFDLGdEQUFEO0FBQVUsWUFBUSxNQUFsQjtBQUFtQixRQUFJLEVBQUVBLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUksaURBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQURILENBREYsQ0FGRixHQVFEQSxLQVREO0FBWUQsQ0F6Qk07S0FBTU4sVTtBQTJCRUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2NrcXVvdGUvQmxvY2txdW90ZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge2Jsb2NrcXVvdGVTdHlsZSwgbGlua1F1b3RlfSBmcm9tICcuL3N0eWxlcyc7XG5cblxuZXhwb3J0IGNvbnN0IEJsb2NrcXVvdGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2NoaWxkcmVuLCBjaXRlLCBocmVmfSA9IHByb3BzO1xuICBjb25zdCBjaXRlVXJsID0gY2l0ZSA/IGNpdGUgOiAoaHJlZiA/IGhyZWYgOiBudWxsKTtcbiAgY29uc3QgcXVvdGUgPSAoXG4gICAgPGJsb2NrcXVvdGUgY3NzPXtibG9ja3F1b3RlU3R5bGV9IGNpdGU9e2NpdGVVcmx9PlxuICAgICAgPHA+XG4gICAgICAgIHtcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICB9IC4uLjxlbT5DbGljayB0byByZWFkIG1vcmU8L2VtPlxuICAgICAgPC9wPlxuICAgIDwvYmxvY2txdW90ZT5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMuaHJlZiA/XG4gICAgKFxuICAgICAgPE5leHRMaW5rIHBhc3NIcmVmIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8YSBjc3M9e2xpbmtRdW90ZX0+XG4gICAgICAgICAge3F1b3RlfVxuICAgICAgICA8L2E+XG4gICAgICA8L05leHRMaW5rPlxuICAgIClcbiA6IHF1b3RlXG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2txdW90ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Blockquote/Blockquote.tsx\n");

/***/ })

})