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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contexts/SidebarDrawerContext */ "./src/contexts/SidebarDrawerContext.tsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./src/components/Header/Logo.tsx");
/* harmony import */ var _NotificationsNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationsNav */ "./src/components/Header/NotificationsNav.tsx");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile */ "./src/components/Header/Profile.tsx");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBox */ "./src/components/Header/SearchBox.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();









function Header() {
  _s();

  var _useSidebarDrawer = (0,_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_0__.useSidebarDrawer)(),
      onOpen = _useSidebarDrawer.onOpen;

  var isWideVersion = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue)({
    base: false,
    lg: true
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    as: "header",
    w: "100%",
    maxWidth: 1400,
    h: "20",
    mx: "auto",
    mt: "4",
    px: "6",
    align: "center",
    children: [!isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
      "aria-label": "Open navigation",
      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_7__.RiMenuLine
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this),
      fontSize: "24",
      variant: "unstyled",
      onClick: onOpen,
      mr: "2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_1__.Logo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_4__.SearchBox, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
      align: "center",
      ml: "auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_NotificationsNav__WEBPACK_IMPORTED_MODULE_2__.NotificationsNav, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_3__.Profile, {
        showProfileData: isWideVersion
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Header, "VdG2HzU5akaMP6mAHU8nvd6X3Go=", false, function () {
  return [_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_0__.useSidebarDrawer, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuNTg0MzczM2M1NTE5ZDUzNTAyOTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNVLE1BQVQsR0FBa0I7QUFBQTs7QUFDdkIsMEJBQW1CTCxnRkFBZ0IsRUFBbkM7QUFBQSxNQUFRTSxNQUFSLHFCQUFRQSxNQUFSOztBQUVBLE1BQU1DLGFBQWEsR0FBR1gsb0VBQWtCLENBQUM7QUFDdkNZLElBQUFBLElBQUksRUFBRSxLQURpQztBQUV2Q0MsSUFBQUEsRUFBRSxFQUFFO0FBRm1DLEdBQUQsQ0FBeEM7QUFLQSxzQkFDRSw4REFBQyxrREFBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsS0FBQyxFQUFDLE1BRko7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLEtBQUMsRUFBQyxJQUpKO0FBS0UsTUFBRSxFQUFDLE1BTEw7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLE1BQUUsRUFBQyxHQVBMO0FBUUUsU0FBSyxFQUFDLFFBUlI7QUFBQSxlQVVHLENBQUNGLGFBQUQsaUJBQ0MsOERBQUMsd0RBQUQ7QUFDRSxvQkFBVyxpQkFEYjtBQUVFLFVBQUksZUFBRSw4REFBQyxrREFBRDtBQUFNLFVBQUUsRUFBRVIsc0RBQVVBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUjtBQUdFLGNBQVEsRUFBQyxJQUhYO0FBSUUsYUFBTyxFQUFDLFVBSlY7QUFLRSxhQUFPLEVBQUVPLE1BTFg7QUFNRSxRQUFFLEVBQUM7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFvQkUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixFQXNCR0MsYUFBYSxpQkFBSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJwQixlQXdCRSw4REFBQyxrREFBRDtBQUFNLFdBQUssRUFBQyxRQUFaO0FBQXFCLFFBQUUsRUFBQyxNQUF4QjtBQUFBLDhCQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDZDQUFEO0FBQVMsdUJBQWUsRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0F2Q2VGO1VBQ0tMLDhFQUVHSjs7O0tBSFJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgdXNlQnJlYWtwb2ludFZhbHVlLCBJY29uQnV0dG9uLCBJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IFJpTWVudUxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IHVzZVNpZGViYXJEcmF3ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dCc7XHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zTmF2IH0gZnJvbSAnLi9Ob3RpZmljYXRpb25zTmF2JztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vUHJvZmlsZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJveCB9IGZyb20gJy4vU2VhcmNoQm94JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBvbk9wZW4gfSA9IHVzZVNpZGViYXJEcmF3ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNXaWRlVmVyc2lvbiA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XHJcbiAgICBiYXNlOiBmYWxzZSxcclxuICAgIGxnOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYXM9XCJoZWFkZXJcIlxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIG1heFdpZHRoPXsxNDAwfVxyXG4gICAgICBoPVwiMjBcIlxyXG4gICAgICBteD1cImF1dG9cIlxyXG4gICAgICBtdD1cIjRcIlxyXG4gICAgICBweD1cIjZcIlxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIHshaXNXaWRlVmVyc2lvbiAmJiAoXHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgaWNvbj17PEljb24gYXM9e1JpTWVudUxpbmV9IC8+fVxyXG4gICAgICAgICAgZm9udFNpemU9XCIyNFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17b25PcGVufVxyXG4gICAgICAgICAgbXI9XCIyXCJcclxuICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICA8TG9nbyAvPlxyXG5cclxuICAgICAge2lzV2lkZVZlcnNpb24gJiYgPFNlYXJjaEJveCAvPn1cclxuXHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbnNOYXYgLz5cclxuICAgICAgICA8UHJvZmlsZSBzaG93UHJvZmlsZURhdGE9e2lzV2lkZVZlcnNpb259IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwidXNlQnJlYWtwb2ludFZhbHVlIiwiSWNvbkJ1dHRvbiIsIkljb24iLCJSaU1lbnVMaW5lIiwidXNlU2lkZWJhckRyYXdlciIsIkxvZ28iLCJOb3RpZmljYXRpb25zTmF2IiwiUHJvZmlsZSIsIlNlYXJjaEJveCIsIkhlYWRlciIsIm9uT3BlbiIsImlzV2lkZVZlcnNpb24iLCJiYXNlIiwibGciXSwic291cmNlUm9vdCI6IiJ9