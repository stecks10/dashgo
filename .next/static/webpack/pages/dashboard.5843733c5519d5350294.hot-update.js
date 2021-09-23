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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjU4NDM3MzNjNTUxOWQ1MzUwMjk0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTVSxNQUFULEdBQWtCO0FBQUE7O0FBQ3ZCLDBCQUFtQkwsZ0ZBQWdCLEVBQW5DO0FBQUEsTUFBUU0sTUFBUixxQkFBUUEsTUFBUjs7QUFFQSxNQUFNQyxhQUFhLEdBQUdYLG9FQUFrQixDQUFDO0FBQ3ZDWSxJQUFBQSxJQUFJLEVBQUUsS0FEaUM7QUFFdkNDLElBQUFBLEVBQUUsRUFBRTtBQUZtQyxHQUFELENBQXhDO0FBS0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxNQUFFLEVBQUMsUUFETDtBQUVFLEtBQUMsRUFBQyxNQUZKO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxLQUFDLEVBQUMsSUFKSjtBQUtFLE1BQUUsRUFBQyxNQUxMO0FBTUUsTUFBRSxFQUFDLEdBTkw7QUFPRSxNQUFFLEVBQUMsR0FQTDtBQVFFLFNBQUssRUFBQyxRQVJSO0FBQUEsZUFVRyxDQUFDRixhQUFELGlCQUNDLDhEQUFDLHdEQUFEO0FBQ0Usb0JBQVcsaUJBRGI7QUFFRSxVQUFJLGVBQUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFFLEVBQUVSLHNEQUFVQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlI7QUFHRSxjQUFRLEVBQUMsSUFIWDtBQUlFLGFBQU8sRUFBQyxVQUpWO0FBS0UsYUFBTyxFQUFFTyxNQUxYO0FBTUUsUUFBRSxFQUFDO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLGVBb0JFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsRUFzQkdDLGFBQWEsaUJBQUksOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCcEIsZUF3QkUsOERBQUMsa0RBQUQ7QUFBTSxXQUFLLEVBQUMsUUFBWjtBQUFxQixRQUFFLEVBQUMsTUFBeEI7QUFBQSw4QkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFTLHVCQUFlLEVBQUVBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBdkNlRjtVQUNLTCw4RUFFR0o7OztLQUhSUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIHVzZUJyZWFrcG9pbnRWYWx1ZSwgSWNvbkJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBSaU1lbnVMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5pbXBvcnQgeyB1c2VTaWRlYmFyRHJhd2VyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc05hdiB9IGZyb20gJy4vTm90aWZpY2F0aW9uc05hdic7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL1Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tICcuL1NlYXJjaEJveCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgb25PcGVuIH0gPSB1c2VTaWRlYmFyRHJhd2VyKCk7XHJcblxyXG4gIGNvbnN0IGlzV2lkZVZlcnNpb24gPSB1c2VCcmVha3BvaW50VmFsdWUoe1xyXG4gICAgYmFzZTogZmFsc2UsXHJcbiAgICBsZzogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIGFzPVwiaGVhZGVyXCJcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBtYXhXaWR0aD17MTQwMH1cclxuICAgICAgaD1cIjIwXCJcclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgbXQ9XCI0XCJcclxuICAgICAgcHg9XCI2XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICB7IWlzV2lkZVZlcnNpb24gJiYgKFxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgIGljb249ezxJY29uIGFzPXtSaU1lbnVMaW5lfSAvPn1cclxuICAgICAgICAgIGZvbnRTaXplPVwiMjRcIlxyXG4gICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cclxuICAgICAgICAgIG1yPVwiMlwiXHJcbiAgICAgICAgPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgPExvZ28gLz5cclxuXHJcbiAgICAgIHtpc1dpZGVWZXJzaW9uICYmIDxTZWFyY2hCb3ggLz59XHJcblxyXG4gICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1sPVwiYXV0b1wiPlxyXG4gICAgICAgIDxOb3RpZmljYXRpb25zTmF2IC8+XHJcbiAgICAgICAgPFByb2ZpbGUgc2hvd1Byb2ZpbGVEYXRhPXtpc1dpZGVWZXJzaW9ufSAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmxleCIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkljb25CdXR0b24iLCJJY29uIiwiUmlNZW51TGluZSIsInVzZVNpZGViYXJEcmF3ZXIiLCJMb2dvIiwiTm90aWZpY2F0aW9uc05hdiIsIlByb2ZpbGUiLCJTZWFyY2hCb3giLCJIZWFkZXIiLCJvbk9wZW4iLCJpc1dpZGVWZXJzaW9uIiwiYmFzZSIsImxnIl0sInNvdXJjZVJvb3QiOiIifQ==