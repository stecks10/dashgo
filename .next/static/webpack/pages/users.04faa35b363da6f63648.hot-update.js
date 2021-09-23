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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
      isOpen: true,
      placement: "left",
      onClose: function onClose() {},
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerOverlay, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerCloseButton, {
            mt: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerHeader, {
            children: "Navega\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerBody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_0__.SidebarNav, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    as: "aside",
    w: "64",
    mr: "8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_0__.SidebarNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuMDRmYWEzNWIzNjNkYTZmNjM2NDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBOztBQUVPLFNBQVNTLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdSLG9FQUFrQixDQUFDO0FBQzFDUyxJQUFBQSxJQUFJLEVBQUUsSUFEb0M7QUFFMUNDLElBQUFBLEVBQUUsRUFBRTtBQUZzQyxHQUFELENBQTNDOztBQUtBLE1BQUlGLGdCQUFKLEVBQXNCO0FBQ3BCLHdCQUNFLDhEQUFDLG9EQUFEO0FBQVEsWUFBTSxFQUFFLElBQWhCO0FBQXNCLGVBQVMsRUFBQyxNQUFoQztBQUF1QyxhQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUF4RDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFBQSxrQ0FDRSw4REFBQywrREFBRDtBQUFtQixjQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBSUUsOERBQUMsd0RBQUQ7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBY0Q7O0FBRUQsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixLQUFDLEVBQUMsSUFBbEI7QUFBdUIsTUFBRSxFQUFDLEdBQTFCO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQTVCZUQ7VUFDV1A7OztLQURYTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBEcmF3ZXIsXHJcbiAgdXNlQnJlYWtwb2ludFZhbHVlLFxyXG4gIERyYXdlck92ZXJsYXksXHJcbiAgRHJhd2VyQ29udGVudCxcclxuICBEcmF3ZXJDbG9zZUJ1dHRvbixcclxuICBEcmF3ZXJIZWFkZXIsXHJcbiAgRHJhd2VyQm9keSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgU2lkZWJhck5hdiB9IGZyb20gJy4vU2lkZWJhck5hdic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBpc0RyYXdlclNpZGVyYmFyID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6IHRydWUsXHJcbiAgICBsZzogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RyYXdlclNpZGVyYmFyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhd2VyIGlzT3Blbj17dHJ1ZX0gcGxhY2VtZW50PVwibGVmdFwiIG9uQ2xvc2U9eygpID0+IHt9fT5cclxuICAgICAgICA8RHJhd2VyT3ZlcmxheT5cclxuICAgICAgICAgIDxEcmF3ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gbXQ9XCI2XCIgLz5cclxuICAgICAgICAgICAgPERyYXdlckhlYWRlcj5OYXZlZ2HDp8OjbzwvRHJhd2VySGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPERyYXdlckJvZHk+XHJcbiAgICAgICAgICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgICAgICAgICAgPC9EcmF3ZXJCb2R5PlxyXG4gICAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICAgIDwvRHJhd2VyT3ZlcmxheT5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhc2lkZVwiIHc9XCI2NFwiIG1yPVwiOFwiPlxyXG4gICAgICA8U2lkZWJhck5hdiAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiRHJhd2VyIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiRHJhd2VyT3ZlcmxheSIsIkRyYXdlckNvbnRlbnQiLCJEcmF3ZXJDbG9zZUJ1dHRvbiIsIkRyYXdlckhlYWRlciIsIkRyYXdlckJvZHkiLCJTaWRlYmFyTmF2IiwiU2lkZWJhciIsImlzRHJhd2VyU2lkZXJiYXIiLCJiYXNlIiwibGciXSwic291cmNlUm9vdCI6IiJ9