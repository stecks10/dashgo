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
            lineNumber: 23,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerHeader, {
            children: "Navega\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerBody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_0__.SidebarNav, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    as: "aside",
    w: "64",
    mr: "8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_0__.SidebarNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuMjBiOTFlYzIyMmQ2MjY3YjViYTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBOztBQUVPLFNBQVNTLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdSLG9FQUFrQixDQUFDO0FBQzFDUyxJQUFBQSxJQUFJLEVBQUUsSUFEb0M7QUFFMUNDLElBQUFBLEVBQUUsRUFBRTtBQUZzQyxHQUFELENBQTNDOztBQUtBLE1BQUlGLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQUEsa0VBQUMsb0RBQUQ7QUFBUSxZQUFNLEVBQUUsSUFBaEI7QUFBc0IsZUFBUyxFQUFDLE1BQWhDO0FBQXVDLGFBQU8sRUFBRSxtQkFBTSxDQUFFLENBQXhEO0FBQUEsNkJBQ0UsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFBLGtDQUNFLDhEQUFDLCtEQUFEO0FBQW1CLGNBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFJRSw4REFBQyx3REFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUQ7O0FBRUQsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixLQUFDLEVBQUMsSUFBbEI7QUFBdUIsTUFBRSxFQUFDLEdBQTFCO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQTFCZUQ7VUFDV1A7OztLQURYTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBEcmF3ZXIsXHJcbiAgdXNlQnJlYWtwb2ludFZhbHVlLFxyXG4gIERyYXdlck92ZXJsYXksXHJcbiAgRHJhd2VyQ29udGVudCxcclxuICBEcmF3ZXJDbG9zZUJ1dHRvbixcclxuICBEcmF3ZXJIZWFkZXIsXHJcbiAgRHJhd2VyQm9keSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgU2lkZWJhck5hdiB9IGZyb20gJy4vU2lkZWJhck5hdic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBpc0RyYXdlclNpZGVyYmFyID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6IHRydWUsXHJcbiAgICBsZzogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RyYXdlclNpZGVyYmFyKSB7XHJcbiAgICA8RHJhd2VyIGlzT3Blbj17dHJ1ZX0gcGxhY2VtZW50PVwibGVmdFwiIG9uQ2xvc2U9eygpID0+IHt9fT5cclxuICAgICAgPERyYXdlck92ZXJsYXk+XHJcbiAgICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gbXQ9XCI2XCIgLz5cclxuICAgICAgICAgIDxEcmF3ZXJIZWFkZXI+TmF2ZWdhw6fDo288L0RyYXdlckhlYWRlcj5cclxuXHJcbiAgICAgICAgICA8RHJhd2VyQm9keT5cclxuICAgICAgICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgICAgICAgIDwvRHJhd2VyQm9keT5cclxuICAgICAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgICAgIDwvRHJhd2VyT3ZlcmxheT5cclxuICAgIDwvRHJhd2VyPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXNpZGVcIiB3PVwiNjRcIiBtcj1cIjhcIj5cclxuICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIkRyYXdlciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkRyYXdlck92ZXJsYXkiLCJEcmF3ZXJDb250ZW50IiwiRHJhd2VyQ2xvc2VCdXR0b24iLCJEcmF3ZXJIZWFkZXIiLCJEcmF3ZXJCb2R5IiwiU2lkZWJhck5hdiIsIlNpZGViYXIiLCJpc0RyYXdlclNpZGVyYmFyIiwiYmFzZSIsImxnIl0sInNvdXJjZVJvb3QiOiIifQ==