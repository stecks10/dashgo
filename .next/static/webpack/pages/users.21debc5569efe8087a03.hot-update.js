"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuMjFkZWJjNTU2OWVmZTgwODdhMDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBOztBQUVPLFNBQVNRLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdQLG9FQUFrQixDQUFDO0FBQzFDUSxJQUFBQSxJQUFJLEVBQUUsSUFEb0M7QUFFMUNDLElBQUFBLEVBQUUsRUFBRTtBQUZzQyxHQUFELENBQTNDOztBQUtBLE1BQUlGLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQUEsa0VBQUMsb0RBQUQ7QUFBUSxZQUFNLEVBQUUsSUFBaEI7QUFBc0IsZUFBUyxFQUFDLE1BQWhDO0FBQXVDLGFBQU8sRUFBRSxtQkFBTSxDQUFFLENBQXhEO0FBQUEsNkJBQ0UsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFBLGtDQUNFLDhEQUFDLCtEQUFEO0FBQW1CLGNBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFEOztBQUVELHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsS0FBQyxFQUFDLElBQWxCO0FBQXVCLE1BQUUsRUFBQyxHQUExQjtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0F0QmVEO1VBQ1dOOzs7S0FEWE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRHJhd2VyLFxyXG4gIHVzZUJyZWFrcG9pbnRWYWx1ZSxcclxuICBEcmF3ZXJPdmVybGF5LFxyXG4gIERyYXdlckNvbnRlbnQsXHJcbiAgRHJhd2VyQ2xvc2VCdXR0b24sXHJcbiAgRHJhd2VySGVhZGVyLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBTaWRlYmFyTmF2IH0gZnJvbSAnLi9TaWRlYmFyTmF2JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IGlzRHJhd2VyU2lkZXJiYXIgPSB1c2VCcmVha3BvaW50VmFsdWUoe1xyXG4gICAgYmFzZTogdHJ1ZSxcclxuICAgIGxnOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlzRHJhd2VyU2lkZXJiYXIpIHtcclxuICAgIDxEcmF3ZXIgaXNPcGVuPXt0cnVlfSBwbGFjZW1lbnQ9XCJsZWZ0XCIgb25DbG9zZT17KCkgPT4ge319PlxyXG4gICAgICA8RHJhd2VyT3ZlcmxheT5cclxuICAgICAgICA8RHJhd2VyQ29udGVudD5cclxuICAgICAgICAgIDxEcmF3ZXJDbG9zZUJ1dHRvbiBtdD1cIjZcIiAvPlxyXG4gICAgICAgICAgPERyYXdlckhlYWRlcj48L0RyYXdlckhlYWRlcj5cclxuICAgICAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgICAgIDwvRHJhd2VyT3ZlcmxheT5cclxuICAgIDwvRHJhd2VyPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXNpZGVcIiB3PVwiNjRcIiBtcj1cIjhcIj5cclxuICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIkRyYXdlciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkRyYXdlck92ZXJsYXkiLCJEcmF3ZXJDb250ZW50IiwiRHJhd2VyQ2xvc2VCdXR0b24iLCJEcmF3ZXJIZWFkZXIiLCJTaWRlYmFyTmF2IiwiU2lkZWJhciIsImlzRHJhd2VyU2lkZXJiYXIiLCJiYXNlIiwibGciXSwic291cmNlUm9vdCI6IiJ9