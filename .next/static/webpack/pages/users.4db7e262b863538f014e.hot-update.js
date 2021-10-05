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


var _excluded = ["children"];

var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\ActiveLink.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_vnn20_OneDrive_rea_de_Trabalho_dash_go_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function ActiveLink(_ref) {
  _s();

  var children = _ref.children,
      rest = (0,C_Users_vnn20_OneDrive_rea_de_Trabalho_dash_go_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
      asPath = _useRouter.asPath;

  var isActive = false;

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, rest), {}, {
    children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(children, {
      color: isActive ? 'pink.400' : 'gray.50'
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuNGRiN2UyNjJiODYzNTM4ZjAxNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNTyxTQUFTRyxVQUFULE9BQTREO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQztBQUFBLE1BQXpCQyxJQUF5Qjs7QUFDakUsbUJBQW1CSixzREFBUyxFQUE1QjtBQUFBLE1BQVFLLE1BQVIsY0FBUUEsTUFBUjs7QUFFQSxNQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFFQSxNQUFJRCxNQUFNLEtBQUtELElBQUksQ0FBQ0csSUFBaEIsSUFBd0JGLE1BQU0sS0FBS0QsSUFBSSxDQUFDSSxFQUE1QyxFQUFnRDtBQUM5Q0YsSUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRDs7QUFDRCxzQkFDRSw4REFBQyxrREFBRCxrQ0FBVUYsSUFBVjtBQUFBLDJCQUNHSCxtREFBWSxDQUFDRSxRQUFELEVBQVc7QUFDdEJNLE1BQUFBLEtBQUssRUFBRUgsUUFBUSxHQUFHLFVBQUgsR0FBZ0I7QUFEVCxLQUFYO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBZmVKO1VBQ0tGOzs7S0FETEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWN0aXZlTGluay50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmssIHsgTGlua1Byb3BzIH0gZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBBY3RpdmVMaW5rUHJvcHMgZXh0ZW5kcyBMaW5rUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBY3RpdmVMaW5rKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQWN0aXZlTGlua1Byb3BzKSB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGFzUGF0aCA9PT0gcmVzdC5ocmVmIHx8IGFzUGF0aCA9PT0gcmVzdC5hcykge1xyXG4gICAgaXNBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgey4uLnJlc3R9PlxyXG4gICAgICB7Y2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XHJcbiAgICAgICAgY29sb3I6IGlzQWN0aXZlID8gJ3BpbmsuNDAwJyA6ICdncmF5LjUwJyxcclxuICAgICAgfSl9XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImNsb25lRWxlbWVudCIsIkFjdGl2ZUxpbmsiLCJjaGlsZHJlbiIsInJlc3QiLCJhc1BhdGgiLCJpc0FjdGl2ZSIsImhyZWYiLCJhcyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==