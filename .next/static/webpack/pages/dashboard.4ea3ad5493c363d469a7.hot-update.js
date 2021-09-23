"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

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
    }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_3__.SearchBox, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjRlYTNhZDU0OTNjMzYzZDQ2OWE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTTSxNQUFULEdBQWtCO0FBQUE7O0FBQ3ZCLE1BQU1DLGFBQWEsR0FBR04sb0VBQWtCLENBQUM7QUFDdkNPLElBQUFBLElBQUksRUFBRSxLQURpQztBQUV2Q0MsSUFBQUEsRUFBRSxFQUFFO0FBRm1DLEdBQUQsQ0FBeEM7QUFLQSxzQkFDRSw4REFBQyxrREFBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsS0FBQyxFQUFDLE1BRko7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLEtBQUMsRUFBQyxJQUpKO0FBS0UsTUFBRSxFQUFDLE1BTEw7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLE1BQUUsRUFBQyxHQVBMO0FBUUUsU0FBSyxFQUFDLFFBUlI7QUFBQSw0QkFVRSw4REFBQyx1Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFZR0YsYUFBYSxpQkFBSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWnBCLGVBYUUsOERBQUMsa0RBQUQ7QUFBTSxXQUFLLEVBQUMsUUFBWjtBQUFxQixRQUFFLEVBQUMsTUFBeEI7QUFBQSw4QkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFTLHVCQUFlLEVBQUVBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0ExQmVEO1VBQ1FMOzs7S0FEUksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4vTG9nbyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNOYXYgfSBmcm9tICcuL05vdGlmaWNhdGlvbnNOYXYnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9Qcm9maWxlJztcclxuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnLi9TZWFyY2hCb3gnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBpc1dpZGVWZXJzaW9uID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6IGZhbHNlLFxyXG4gICAgbGc6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cImhlYWRlclwiXHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgbWF4V2lkdGg9ezE0MDB9XHJcbiAgICAgIGg9XCIyMFwiXHJcbiAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgIG10PVwiNFwiXHJcbiAgICAgIHB4PVwiNlwiXHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPExvZ28gLz5cclxuXHJcbiAgICAgIHtpc1dpZGVWZXJzaW9uICYmIDxTZWFyY2hCb3ggLz59XHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbnNOYXYgLz5cclxuICAgICAgICA8UHJvZmlsZSBzaG93UHJvZmlsZURhdGE9e2lzV2lkZVZlcnNpb259IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwidXNlQnJlYWtwb2ludFZhbHVlIiwiTG9nbyIsIk5vdGlmaWNhdGlvbnNOYXYiLCJQcm9maWxlIiwiU2VhcmNoQm94IiwiSGVhZGVyIiwiaXNXaWRlVmVyc2lvbiIsImJhc2UiLCJsZyJdLCJzb3VyY2VSb290IjoiIn0=