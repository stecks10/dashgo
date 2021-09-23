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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuZWU2YzEwYWU3Mzk1YWQxNGY4YjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBOztBQUVPLFNBQVNVLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsMEJBQTRCRixnRkFBZ0IsRUFBNUM7QUFBQSxNQUFRRyxNQUFSLHFCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLE9BQWhCLHFCQUFnQkEsT0FBaEI7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUdYLG9FQUFrQixDQUFDO0FBQzFDWSxJQUFBQSxJQUFJLEVBQUUsSUFEb0M7QUFFMUNDLElBQUFBLEVBQUUsRUFBRTtBQUZzQyxHQUFELENBQTNDOztBQUtBLE1BQUlGLGdCQUFKLEVBQXNCO0FBQ3BCLHdCQUNFLDhEQUFDLG9EQUFEO0FBQVEsWUFBTSxFQUFFRixNQUFoQjtBQUF3QixlQUFTLEVBQUMsTUFBbEM7QUFBeUMsYUFBTyxFQUFFQyxPQUFsRDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFBZSxZQUFFLEVBQUMsVUFBbEI7QUFBNkIsV0FBQyxFQUFDLEdBQS9CO0FBQUEsa0NBQ0UsOERBQUMsK0RBQUQ7QUFBbUIsY0FBRSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUlFLDhEQUFDLHdEQUFEO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWNEOztBQUVELHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsS0FBQyxFQUFDLElBQWxCO0FBQXVCLE1BQUUsRUFBQyxHQUExQjtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0E5QmVGO1VBQ2NGLDhFQUVITjs7O0tBSFhRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIERyYXdlcixcclxuICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiAgRHJhd2VyT3ZlcmxheSxcclxuICBEcmF3ZXJDb250ZW50LFxyXG4gIERyYXdlckNsb3NlQnV0dG9uLFxyXG4gIERyYXdlckhlYWRlcixcclxuICBEcmF3ZXJCb2R5LFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTaWRlYmFyRHJhd2VyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBTaWRlYmFyTmF2IH0gZnJvbSAnLi9TaWRlYmFyTmF2JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbkNsb3NlIH0gPSB1c2VTaWRlYmFyRHJhd2VyKCk7XHJcblxyXG4gIGNvbnN0IGlzRHJhd2VyU2lkZXJiYXIgPSB1c2VCcmVha3BvaW50VmFsdWUoe1xyXG4gICAgYmFzZTogdHJ1ZSxcclxuICAgIGxnOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlzRHJhd2VyU2lkZXJiYXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmF3ZXIgaXNPcGVuPXtpc09wZW59IHBsYWNlbWVudD1cImxlZnRcIiBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgICA8RHJhd2VyT3ZlcmxheT5cclxuICAgICAgICAgIDxEcmF3ZXJDb250ZW50IGJnPVwiZ3JheS44MDBcIiBwPVwiNFwiPlxyXG4gICAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gbXQ9XCI2XCIgLz5cclxuICAgICAgICAgICAgPERyYXdlckhlYWRlcj5OYXZlZ2HDp8OjbzwvRHJhd2VySGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPERyYXdlckJvZHk+XHJcbiAgICAgICAgICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgICAgICAgICAgPC9EcmF3ZXJCb2R5PlxyXG4gICAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICAgIDwvRHJhd2VyT3ZlcmxheT5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhc2lkZVwiIHc9XCI2NFwiIG1yPVwiOFwiPlxyXG4gICAgICA8U2lkZWJhck5hdiAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiRHJhd2VyIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiRHJhd2VyT3ZlcmxheSIsIkRyYXdlckNvbnRlbnQiLCJEcmF3ZXJDbG9zZUJ1dHRvbiIsIkRyYXdlckhlYWRlciIsIkRyYXdlckJvZHkiLCJ1c2VTaWRlYmFyRHJhd2VyIiwiU2lkZWJhck5hdiIsIlNpZGViYXIiLCJpc09wZW4iLCJvbkNsb3NlIiwiaXNEcmF3ZXJTaWRlcmJhciIsImJhc2UiLCJsZyJdLCJzb3VyY2VSb290IjoiIn0=