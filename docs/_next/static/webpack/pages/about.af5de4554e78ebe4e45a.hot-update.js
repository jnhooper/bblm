webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Link/Link.tsx":
/*!**********************************!*\
  !*** ./components/Link/Link.tsx ***!
  \**********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/johnnissen-hooper/projects/bblm/components/Link/Link.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/**\n * I love this blog https://tobiasahlin.com/blog/css-trick-animating-link-underlines/\n */\n\nvar StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"Link__StyledLink\",\n  componentId: \"v2ca8f-0\"\n})({\n  position: 'relative',\n  // color: 'white',\n  textDecoration: 'none',\n  ':hover,:focus': {// color: 'white',\n  },\n  '::before': {\n    content: '\"\"',\n    position: 'absolute',\n    width: '100%',\n    height: '0.1rem',\n    bottom: 0,\n    left: 0,\n    // backgroundColor: '#fddb3a',\n    backgroundColor: '#333533',\n    visibility: 'hidden',\n    transform: 'scaleX(0)',\n    transition: 'all 0.3s ease-in-out 0s'\n  },\n  ':hover::before, :focus::before': {\n    visibility: 'visible',\n    transform: 'scaleX(1)'\n  }\n});\n_c = StyledLink;\nvar Link = function Link(props) {\n  var children = props.children,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"children\"]);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    passHref: true\n  }, rest, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }), __jsx(StyledLink, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, children));\n};\n_c2 = Link;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledLink\");\n$RefreshReg$(_c2, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rL0xpbmsudHN4P2Y3YzMiXSwibmFtZXMiOlsiU3R5bGVkTGluayIsInN0eWxlZCIsImEiLCJwb3NpdGlvbiIsInRleHREZWNvcmF0aW9uIiwiY29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInZpc2liaWxpdHkiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiTGluayIsInByb3BzIiwiY2hpbGRyZW4iLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7OztBQUdBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxHQUFZO0FBQzFCQyxVQUFRLEVBQUUsVUFEZ0I7QUFFMUI7QUFDQUMsZ0JBQWMsRUFBRSxNQUhVO0FBSTFCLG1CQUFpQixDQUNmO0FBRGUsR0FKUztBQU8xQixjQUFZO0FBQ1ZDLFdBQU8sRUFBRSxJQURDO0FBRVZGLFlBQVEsRUFBRSxVQUZBO0FBR1ZHLFNBQUssRUFBRSxNQUhHO0FBSVZDLFVBQU0sRUFBRSxRQUpFO0FBS1ZDLFVBQU0sRUFBRSxDQUxFO0FBTVZDLFFBQUksRUFBRSxDQU5JO0FBT1Y7QUFDQUMsbUJBQWUsRUFBRSxTQVJQO0FBU1ZDLGNBQVUsRUFBRSxRQVRGO0FBVVZDLGFBQVMsRUFBRSxXQVZEO0FBV1ZDLGNBQVUsRUFBRTtBQVhGLEdBUGM7QUFvQjFCLG9DQUFrQztBQUNoQ0YsY0FBVSxFQUFFLFNBRG9CO0FBRWhDQyxhQUFTLEVBQUU7QUFGcUI7QUFwQlIsQ0FBWixDQUFoQjtLQUFNWixVO0FBMEJDLElBQU1jLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3RCQyxRQURzQixHQUNERCxLQURDLENBQ3RCQyxRQURzQjtBQUFBLE1BQ1RDLElBRFMsc0dBQ0RGLEtBREM7O0FBRTdCLFNBQ0UsTUFBQyxnREFBRDtBQUFVLFlBQVE7QUFBbEIsS0FBdUJFLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREYsQ0FERjtBQU9ELENBVE07TUFBTUYsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGluay9MaW5rLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuLyoqXG4gKiBJIGxvdmUgdGhpcyBibG9nIGh0dHBzOi8vdG9iaWFzYWhsaW4uY29tL2Jsb2cvY3NzLXRyaWNrLWFuaW1hdGluZy1saW5rLXVuZGVybGluZXMvXG4gKi9cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAvLyBjb2xvcjogJ3doaXRlJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgJzpob3Zlciw6Zm9jdXMnOiB7XG4gICAgLy8gY29sb3I6ICd3aGl0ZScsXG4gIH0sXG4gICc6OmJlZm9yZSc6IHtcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcwLjFyZW0nLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNmZGRiM2EnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzM1MzMnLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgfSxcbiAgJzpob3Zlcjo6YmVmb3JlLCA6Zm9jdXM6OmJlZm9yZSc6IHtcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtjaGlsZHJlbiwgLi4ucmVzdH0gPSBwcm9wcztcbiAgcmV0dXJuKFxuICAgIDxOZXh0TGluayBwYXNzSHJlZiB7Li4ucmVzdH0+XG4gICAgICA8U3R5bGVkTGluaz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9TdHlsZWRMaW5rPlxuICAgIDwvTmV4dExpbms+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Link/Link.tsx\n");

/***/ })

})