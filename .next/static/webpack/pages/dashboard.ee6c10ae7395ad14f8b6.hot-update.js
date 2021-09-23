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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contexts/SidebarDrawerContext */ "./src/contexts/SidebarDrawerContext.tsx");
/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarNav */ "./src/components/Sidebar/SidebarNav.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Sidebar\\index.tsx",
    _s = $RefreshSig$();





function Sidebar() {
  _s();

  var _useSidebarDrawer = (0,_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_0__.useSidebarDrawer)(),
      isOpen = _useSidebarDrawer.isOpen,
      onClose = _useSidebarDrawer.onClose;

  var isDrawerSiderbar = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({
    base: true,
    lg: false
  });

  if (isDrawerSiderbar) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
      isOpen: isOpen,
      placement: "left",
      onClose: onClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerOverlay, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerContent, {
          bg: "gray.800",
          p: "4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerCloseButton, {
            mt: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerHeader, {
            children: "Navega\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerBody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_1__.SidebarNav, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    as: "aside",
    w: "64",
    mr: "8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_1__.SidebarNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Sidebar, "0zMt11sex/QZqLNL/XWohlxaKdQ=", false, function () {
  return [_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_0__.useSidebarDrawer, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmVlNmMxMGFlNzM5NWFkMTRmOGI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTs7QUFFTyxTQUFTVSxPQUFULEdBQW1CO0FBQUE7O0FBQ3hCLDBCQUE0QkYsZ0ZBQWdCLEVBQTVDO0FBQUEsTUFBUUcsTUFBUixxQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxPQUFoQixxQkFBZ0JBLE9BQWhCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHWCxvRUFBa0IsQ0FBQztBQUMxQ1ksSUFBQUEsSUFBSSxFQUFFLElBRG9DO0FBRTFDQyxJQUFBQSxFQUFFLEVBQUU7QUFGc0MsR0FBRCxDQUEzQzs7QUFLQSxNQUFJRixnQkFBSixFQUFzQjtBQUNwQix3QkFDRSw4REFBQyxvREFBRDtBQUFRLFlBQU0sRUFBRUYsTUFBaEI7QUFBd0IsZUFBUyxFQUFDLE1BQWxDO0FBQXlDLGFBQU8sRUFBRUMsT0FBbEQ7QUFBQSw2QkFDRSw4REFBQywyREFBRDtBQUFBLCtCQUNFLDhEQUFDLDJEQUFEO0FBQWUsWUFBRSxFQUFDLFVBQWxCO0FBQTZCLFdBQUMsRUFBQyxHQUEvQjtBQUFBLGtDQUNFLDhEQUFDLCtEQUFEO0FBQW1CLGNBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFJRSw4REFBQyx3REFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFjRDs7QUFFRCxzQkFDRSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLEtBQUMsRUFBQyxJQUFsQjtBQUF1QixNQUFFLEVBQUMsR0FBMUI7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBOUJlRjtVQUNjRiw4RUFFSE47OztLQUhYUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBEcmF3ZXIsXHJcbiAgdXNlQnJlYWtwb2ludFZhbHVlLFxyXG4gIERyYXdlck92ZXJsYXksXHJcbiAgRHJhd2VyQ29udGVudCxcclxuICBEcmF3ZXJDbG9zZUJ1dHRvbixcclxuICBEcmF3ZXJIZWFkZXIsXHJcbiAgRHJhd2VyQm9keSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2lkZWJhckRyYXdlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgU2lkZWJhck5hdiB9IGZyb20gJy4vU2lkZWJhck5hdic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25DbG9zZSB9ID0gdXNlU2lkZWJhckRyYXdlcigpO1xyXG5cclxuICBjb25zdCBpc0RyYXdlclNpZGVyYmFyID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6IHRydWUsXHJcbiAgICBsZzogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RyYXdlclNpZGVyYmFyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhd2VyIGlzT3Blbj17aXNPcGVufSBwbGFjZW1lbnQ9XCJsZWZ0XCIgb25DbG9zZT17b25DbG9zZX0+XHJcbiAgICAgICAgPERyYXdlck92ZXJsYXk+XHJcbiAgICAgICAgICA8RHJhd2VyQ29udGVudCBiZz1cImdyYXkuODAwXCIgcD1cIjRcIj5cclxuICAgICAgICAgICAgPERyYXdlckNsb3NlQnV0dG9uIG10PVwiNlwiIC8+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJIZWFkZXI+TmF2ZWdhw6fDo288L0RyYXdlckhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxEcmF3ZXJCb2R5PlxyXG4gICAgICAgICAgICAgIDxTaWRlYmFyTmF2IC8+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyQm9keT5cclxuICAgICAgICAgIDwvRHJhd2VyQ29udGVudD5cclxuICAgICAgICA8L0RyYXdlck92ZXJsYXk+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXNpZGVcIiB3PVwiNjRcIiBtcj1cIjhcIj5cclxuICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIkRyYXdlciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkRyYXdlck92ZXJsYXkiLCJEcmF3ZXJDb250ZW50IiwiRHJhd2VyQ2xvc2VCdXR0b24iLCJEcmF3ZXJIZWFkZXIiLCJEcmF3ZXJCb2R5IiwidXNlU2lkZWJhckRyYXdlciIsIlNpZGViYXJOYXYiLCJTaWRlYmFyIiwiaXNPcGVuIiwib25DbG9zZSIsImlzRHJhd2VyU2lkZXJiYXIiLCJiYXNlIiwibGciXSwic291cmNlUm9vdCI6IiJ9