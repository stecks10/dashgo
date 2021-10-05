"use strict";
self["webpackHotUpdate_N_E"]("pages/users/create",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvY3JlYXRlLjJhM2I3MWI5OWJlZDRjYTdlYjQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBT08sU0FBU0csVUFBVCxPQUlhO0FBQUE7O0FBQUEsTUFIbEJDLFFBR2tCLFFBSGxCQSxRQUdrQjtBQUFBLG1DQUZsQkMsb0JBRWtCO0FBQUEsTUFGbEJBLG9CQUVrQixzQ0FGSyxLQUVMO0FBQUEsTUFEZkMsSUFDZTs7QUFDbEIsbUJBQW1CTCxzREFBUyxFQUE1QjtBQUFBLE1BQVFNLE1BQVIsY0FBUUEsTUFBUjs7QUFFQSxNQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFFQSxNQUFJSCxvQkFBb0IsS0FBS0UsTUFBTSxLQUFLRCxJQUFJLENBQUNHLElBQWhCLElBQXdCRixNQUFNLEtBQUtELElBQUksQ0FBQ0ksRUFBN0MsQ0FBeEIsRUFBMEU7QUFDeEVGLElBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsa0RBQUQsa0NBQVVGLElBQVY7QUFBQSwyQkFDR0osbURBQVksQ0FBQ0UsUUFBRCxFQUFXO0FBQ3RCTyxNQUFBQSxLQUFLLEVBQUVILFFBQVEsR0FBRyxVQUFILEdBQWdCO0FBRFQsS0FBWDtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQXBCZUw7VUFLS0Y7OztLQUxMRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BY3RpdmVMaW5rLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluaywgeyBMaW5rUHJvcHMgfSBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEFjdGl2ZUxpbmtQcm9wcyBleHRlbmRzIExpbmtQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDtcclxuICBzaG91bGRNYXRjaEV4YWN0SHJlZj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBY3RpdmVMaW5rKHtcclxuICBjaGlsZHJlbixcclxuICBzaG91bGRNYXRjaEV4YWN0SHJlZiA9IGZhbHNlLFxyXG4gIC4uLnJlc3RcclxufTogQWN0aXZlTGlua1Byb3BzKSB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgaWYgKHNob3VsZE1hdGNoRXhhY3RIcmVmICYmIChhc1BhdGggPT09IHJlc3QuaHJlZiB8fCBhc1BhdGggPT09IHJlc3QuYXMpKSB7XHJcbiAgICBpc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgey4uLnJlc3R9PlxyXG4gICAgICB7Y2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XHJcbiAgICAgICAgY29sb3I6IGlzQWN0aXZlID8gJ3BpbmsuNDAwJyA6ICdncmF5LjUwJyxcclxuICAgICAgfSl9XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImNsb25lRWxlbWVudCIsIkFjdGl2ZUxpbmsiLCJjaGlsZHJlbiIsInNob3VsZE1hdGNoRXhhY3RIcmVmIiwicmVzdCIsImFzUGF0aCIsImlzQWN0aXZlIiwiaHJlZiIsImFzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9