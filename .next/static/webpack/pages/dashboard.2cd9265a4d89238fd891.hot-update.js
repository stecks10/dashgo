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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_1__.Logo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_4__.SearchBox, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
      align: "center",
      ml: "auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_NotificationsNav__WEBPACK_IMPORTED_MODULE_2__.NotificationsNav, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_3__.Profile, {
        showProfileData: isWideVersion
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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


/***/ }),

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideDrawerProvider": function() { return /* binding */ SideDrawerProvider; },
/* harmony export */   "useSidebarDrawer": function() { return /* binding */ useSidebarDrawer; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\contexts\\SidebarDrawerContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var SideBarDrawerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function SideDrawerProvider(_ref) {
  _s();

  var children = _ref.children;
  var disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SideBarDrawerContext.Provider, {
    value: disclosure,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(SideDrawerProvider, "OCqSTwkT2hNmn5d1yjC4W7mt+As=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure];
});

_c = SideDrawerProvider;
var useSidebarDrawer = function useSidebarDrawer() {
  _s2();

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SideBarDrawerContext);
};

_s2(useSidebarDrawer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "SideDrawerProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjJjZDkyNjVhNGQ4OTIzOGZkODkxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTTyxNQUFULEdBQWtCO0FBQUE7O0FBQ3ZCLDBCQUFtQkwsZ0ZBQWdCLEVBQW5DO0FBQUEsTUFBUU0sTUFBUixxQkFBUUEsTUFBUjs7QUFFQSxNQUFNQyxhQUFhLEdBQUdSLG9FQUFrQixDQUFDO0FBQ3ZDUyxJQUFBQSxJQUFJLEVBQUUsS0FEaUM7QUFFdkNDLElBQUFBLEVBQUUsRUFBRTtBQUZtQyxHQUFELENBQXhDO0FBS0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxNQUFFLEVBQUMsUUFETDtBQUVFLEtBQUMsRUFBQyxNQUZKO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxLQUFDLEVBQUMsSUFKSjtBQUtFLE1BQUUsRUFBQyxNQUxMO0FBTUUsTUFBRSxFQUFDLEdBTkw7QUFPRSxNQUFFLEVBQUMsR0FQTDtBQVFFLFNBQUssRUFBQyxRQVJSO0FBQUEsNEJBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLEVBWUdGLGFBQWEsaUJBQUksOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpwQixlQWNFLDhEQUFDLGtEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBcUIsUUFBRSxFQUFDLE1BQXhCO0FBQUEsOEJBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBUyx1QkFBZSxFQUFFQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBN0JlRjtVQUNLTCw4RUFFR0Q7OztLQUhSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BoQjtBQUNBOztBQVFBLElBQU1RLG9CQUFvQixnQkFBR0Ysb0RBQWEsQ0FBQyxFQUFELENBQTFDO0FBRU8sU0FBU0csa0JBQVQsT0FBc0U7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQzNFLE1BQU1DLFVBQVUsR0FBR04sK0RBQWEsRUFBaEM7QUFFQSxzQkFDRSw4REFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixTQUFLLEVBQUVNLFVBQXRDO0FBQUEsY0FDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FSZUQ7VUFDS0o7OztLQURMSTtBQVVULElBQU1kLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTs7QUFBQSxTQUFNWSxpREFBVSxDQUFDQyxvQkFBRCxDQUFoQjtBQUFBLENBQXpCOztJQUFNYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTaWRlYmFyRHJhd2VyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc05hdiB9IGZyb20gJy4vTm90aWZpY2F0aW9uc05hdic7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL1Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tICcuL1NlYXJjaEJveCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgb25PcGVuIH0gPSB1c2VTaWRlYmFyRHJhd2VyKCk7XHJcblxyXG4gIGNvbnN0IGlzV2lkZVZlcnNpb24gPSB1c2VCcmVha3BvaW50VmFsdWUoe1xyXG4gICAgYmFzZTogZmFsc2UsXHJcbiAgICBsZzogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIGFzPVwiaGVhZGVyXCJcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBtYXhXaWR0aD17MTQwMH1cclxuICAgICAgaD1cIjIwXCJcclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgbXQ9XCI0XCJcclxuICAgICAgcHg9XCI2XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8TG9nbyAvPlxyXG5cclxuICAgICAge2lzV2lkZVZlcnNpb24gJiYgPFNlYXJjaEJveCAvPn1cclxuXHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbnNOYXYgLz5cclxuICAgICAgICA8UHJvZmlsZSBzaG93UHJvZmlsZURhdGE9e2lzV2lkZVZlcnNpb259IC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFNpZGVCYXJEcmF3ZXJQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSA9IFVzZURpc2Nsb3N1cmVSZXR1cm47XHJcblxyXG5jb25zdCBTaWRlQmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlRHJhd2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IGRpc2Nsb3N1cmUgPSB1c2VEaXNjbG9zdXJlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc2Nsb3N1cmV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NpZGVCYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTaWRlYmFyRHJhd2VyID0gKCkgPT4gdXNlQ29udGV4dChTaWRlQmFyRHJhd2VyQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwidXNlQnJlYWtwb2ludFZhbHVlIiwidXNlU2lkZWJhckRyYXdlciIsIkxvZ28iLCJOb3RpZmljYXRpb25zTmF2IiwiUHJvZmlsZSIsIlNlYXJjaEJveCIsIkhlYWRlciIsIm9uT3BlbiIsImlzV2lkZVZlcnNpb24iLCJiYXNlIiwibGciLCJ1c2VEaXNjbG9zdXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJTaWRlQmFyRHJhd2VyQ29udGV4dCIsIlNpZGVEcmF3ZXJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzY2xvc3VyZSJdLCJzb3VyY2VSb290IjoiIn0=