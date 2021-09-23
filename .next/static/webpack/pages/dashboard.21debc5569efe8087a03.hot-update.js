"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Sidebar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Sidebar/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarNav */ "./src/components/Sidebar/SidebarNav.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Sidebar\\index.tsx",
    _s = $RefreshSig$();




function Sidebar() {
  _s();

  var isDrawerSiderbar = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
    base: true,
    lg: false
  });

  if (isDrawerSiderbar) {
    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
      isOpen: true,
      placement: "left",
      onClose: function onClose() {},
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerOverlay, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerCloseButton, {
            mt: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerHeader, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    as: "aside",
    w: "64",
    mr: "8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_0__.SidebarNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(Sidebar, "W5gw0LfzHdQpLog8Ky5lbOwfFDU=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue];
});

_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjIxZGViYzU1NjllZmU4MDg3YTAzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTs7QUFFTyxTQUFTUSxPQUFULEdBQW1CO0FBQUE7O0FBQ3hCLE1BQU1DLGdCQUFnQixHQUFHUCxvRUFBa0IsQ0FBQztBQUMxQ1EsSUFBQUEsSUFBSSxFQUFFLElBRG9DO0FBRTFDQyxJQUFBQSxFQUFFLEVBQUU7QUFGc0MsR0FBRCxDQUEzQzs7QUFLQSxNQUFJRixnQkFBSixFQUFzQjtBQUNwQjtBQUFBLGtFQUFDLG9EQUFEO0FBQVEsWUFBTSxFQUFFLElBQWhCO0FBQXNCLGVBQVMsRUFBQyxNQUFoQztBQUF1QyxhQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUF4RDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFBQSxrQ0FDRSw4REFBQywrREFBRDtBQUFtQixjQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRRDs7QUFFRCxzQkFDRSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLEtBQUMsRUFBQyxJQUFsQjtBQUF1QixNQUFFLEVBQUMsR0FBMUI7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBdEJlRDtVQUNXTjs7O0tBRFhNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIERyYXdlcixcclxuICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiAgRHJhd2VyT3ZlcmxheSxcclxuICBEcmF3ZXJDb250ZW50LFxyXG4gIERyYXdlckNsb3NlQnV0dG9uLFxyXG4gIERyYXdlckhlYWRlcixcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgU2lkZWJhck5hdiB9IGZyb20gJy4vU2lkZWJhck5hdic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBpc0RyYXdlclNpZGVyYmFyID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6IHRydWUsXHJcbiAgICBsZzogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RyYXdlclNpZGVyYmFyKSB7XHJcbiAgICA8RHJhd2VyIGlzT3Blbj17dHJ1ZX0gcGxhY2VtZW50PVwibGVmdFwiIG9uQ2xvc2U9eygpID0+IHt9fT5cclxuICAgICAgPERyYXdlck92ZXJsYXk+XHJcbiAgICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gbXQ9XCI2XCIgLz5cclxuICAgICAgICAgIDxEcmF3ZXJIZWFkZXI+PC9EcmF3ZXJIZWFkZXI+XHJcbiAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICA8L0RyYXdlck92ZXJsYXk+XHJcbiAgICA8L0RyYXdlcj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImFzaWRlXCIgdz1cIjY0XCIgbXI9XCI4XCI+XHJcbiAgICAgIDxTaWRlYmFyTmF2IC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJEcmF3ZXIiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJEcmF3ZXJPdmVybGF5IiwiRHJhd2VyQ29udGVudCIsIkRyYXdlckNsb3NlQnV0dG9uIiwiRHJhd2VySGVhZGVyIiwiU2lkZWJhck5hdiIsIlNpZGViYXIiLCJpc0RyYXdlclNpZGVyYmFyIiwiYmFzZSIsImxnIl0sInNvdXJjZVJvb3QiOiIifQ==