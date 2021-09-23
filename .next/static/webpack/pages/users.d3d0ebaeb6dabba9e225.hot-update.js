"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/components/Header/Logo.tsx");
/* harmony import */ var _NotificationsNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsNav */ "./src/components/Header/NotificationsNav.tsx");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ "./src/components/Header/Profile.tsx");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBox */ "./src/components/Header/SearchBox.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();







function Header() {
  _s();

  var isWideVersion = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue)({
    base: false,
    lg: true
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    as: "header",
    w: "100%",
    maxWidth: 1400,
    h: "20",
    mx: "auto",
    mt: "4",
    px: "6",
    align: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_0__.Logo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_3__.SearchBox, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
      align: "center",
      ml: "auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_NotificationsNav__WEBPACK_IMPORTED_MODULE_1__.NotificationsNav, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {
        showProfileData: isWideVersion
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Header, "3oSx7AotzFNmOkbv4NfIDZx1j4Q=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuZDNkMGViYWViNmRhYmJhOWUyMjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNNLE1BQVQsR0FBa0I7QUFBQTs7QUFDdkIsTUFBTUMsYUFBYSxHQUFHTixvRUFBa0IsQ0FBQztBQUN2Q08sSUFBQUEsSUFBSSxFQUFFLEtBRGlDO0FBRXZDQyxJQUFBQSxFQUFFLEVBQUU7QUFGbUMsR0FBRCxDQUF4QztBQUtBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQ0UsTUFBRSxFQUFDLFFBREw7QUFFRSxLQUFDLEVBQUMsTUFGSjtBQUdFLFlBQVEsRUFBRSxJQUhaO0FBSUUsS0FBQyxFQUFDLElBSko7QUFLRSxNQUFFLEVBQUMsTUFMTDtBQU1FLE1BQUUsRUFBQyxHQU5MO0FBT0UsTUFBRSxFQUFDLEdBUEw7QUFRRSxTQUFLLEVBQUMsUUFSUjtBQUFBLDRCQVVFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWFFLDhEQUFDLGtEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBcUIsUUFBRSxFQUFDLE1BQXhCO0FBQUEsOEJBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBUyx1QkFBZSxFQUFFRjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBMUJlRDtVQUNRTDs7O0tBRFJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zTmF2IH0gZnJvbSAnLi9Ob3RpZmljYXRpb25zTmF2JztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vUHJvZmlsZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJveCB9IGZyb20gJy4vU2VhcmNoQm94JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgaXNXaWRlVmVyc2lvbiA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XHJcbiAgICBiYXNlOiBmYWxzZSxcclxuICAgIGxnOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYXM9XCJoZWFkZXJcIlxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIG1heFdpZHRoPXsxNDAwfVxyXG4gICAgICBoPVwiMjBcIlxyXG4gICAgICBteD1cImF1dG9cIlxyXG4gICAgICBtdD1cIjRcIlxyXG4gICAgICBweD1cIjZcIlxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDxTZWFyY2hCb3ggLz5cclxuXHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbnNOYXYgLz5cclxuICAgICAgICA8UHJvZmlsZSBzaG93UHJvZmlsZURhdGE9e2lzV2lkZVZlcnNpb259IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwidXNlQnJlYWtwb2ludFZhbHVlIiwiTG9nbyIsIk5vdGlmaWNhdGlvbnNOYXYiLCJQcm9maWxlIiwiU2VhcmNoQm94IiwiSGVhZGVyIiwiaXNXaWRlVmVyc2lvbiIsImJhc2UiLCJsZyJdLCJzb3VyY2VSb290IjoiIn0=