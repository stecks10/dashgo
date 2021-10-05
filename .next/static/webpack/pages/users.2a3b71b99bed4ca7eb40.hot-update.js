"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/components/ActiveLink.tsx":
/*!***************************************!*\
  !*** ./src/components/ActiveLink.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveLink": function() { return /* binding */ ActiveLink; }
/* harmony export */ });
/* harmony import */ var C_Users_vnn20_OneDrive_rea_de_Trabalho_dash_go_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_vnn20_OneDrive_rea_de_Trabalho_dash_go_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["children", "shouldMatchExactHref"];

var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\ActiveLink.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_vnn20_OneDrive_rea_de_Trabalho_dash_go_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function ActiveLink(_ref) {
  _s();

  var children = _ref.children,
      _ref$shouldMatchExact = _ref.shouldMatchExactHref,
      shouldMatchExactHref = _ref$shouldMatchExact === void 0 ? false : _ref$shouldMatchExact,
      rest = (0,C_Users_vnn20_OneDrive_rea_de_Trabalho_dash_go_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      asPath = _useRouter.asPath;

  var isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, rest), {}, {
    children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(children, {
      color: isActive ? 'pink.400' : 'gray.50'
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(ActiveLink, "9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = ActiveLink;

var _c;

$RefreshReg$(_c, "ActiveLink");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuMmEzYjcxYjk5YmVkNGNhN2ViNDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPTyxTQUFTRyxVQUFULE9BSWE7QUFBQTs7QUFBQSxNQUhsQkMsUUFHa0IsUUFIbEJBLFFBR2tCO0FBQUEsbUNBRmxCQyxvQkFFa0I7QUFBQSxNQUZsQkEsb0JBRWtCLHNDQUZLLEtBRUw7QUFBQSxNQURmQyxJQUNlOztBQUNsQixtQkFBbUJMLHNEQUFTLEVBQTVCO0FBQUEsTUFBUU0sTUFBUixjQUFRQSxNQUFSOztBQUVBLE1BQUlDLFFBQVEsR0FBRyxLQUFmOztBQUVBLE1BQUlILG9CQUFvQixLQUFLRSxNQUFNLEtBQUtELElBQUksQ0FBQ0csSUFBaEIsSUFBd0JGLE1BQU0sS0FBS0QsSUFBSSxDQUFDSSxFQUE3QyxDQUF4QixFQUEwRTtBQUN4RUYsSUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxzQkFDRSw4REFBQyxrREFBRCxrQ0FBVUYsSUFBVjtBQUFBLDJCQUNHSixtREFBWSxDQUFDRSxRQUFELEVBQVc7QUFDdEJPLE1BQUFBLEtBQUssRUFBRUgsUUFBUSxHQUFHLFVBQUgsR0FBZ0I7QUFEVCxLQUFYO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBcEJlTDtVQUtLRjs7O0tBTExFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FjdGl2ZUxpbmsudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgQWN0aXZlTGlua1Byb3BzIGV4dGVuZHMgTGlua1Byb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50O1xyXG4gIHNob3VsZE1hdGNoRXhhY3RIcmVmPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFjdGl2ZUxpbmsoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHNob3VsZE1hdGNoRXhhY3RIcmVmID0gZmFsc2UsXHJcbiAgLi4ucmVzdFxyXG59OiBBY3RpdmVMaW5rUHJvcHMpIHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBpZiAoc2hvdWxkTWF0Y2hFeGFjdEhyZWYgJiYgKGFzUGF0aCA9PT0gcmVzdC5ocmVmIHx8IGFzUGF0aCA9PT0gcmVzdC5hcykpIHtcclxuICAgIGlzQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayB7Li4ucmVzdH0+XHJcbiAgICAgIHtjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgICAgICBjb2xvcjogaXNBY3RpdmUgPyAncGluay40MDAnIDogJ2dyYXkuNTAnLFxyXG4gICAgICB9KX1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiY2xvbmVFbGVtZW50IiwiQWN0aXZlTGluayIsImNoaWxkcmVuIiwic2hvdWxkTWF0Y2hFeGFjdEhyZWYiLCJyZXN0IiwiYXNQYXRoIiwiaXNBY3RpdmUiLCJocmVmIiwiYXMiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=