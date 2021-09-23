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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuMmNkOTI2NWE0ZDg5MjM4ZmQ4OTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNPLE1BQVQsR0FBa0I7QUFBQTs7QUFDdkIsMEJBQW1CTCxnRkFBZ0IsRUFBbkM7QUFBQSxNQUFRTSxNQUFSLHFCQUFRQSxNQUFSOztBQUVBLE1BQU1DLGFBQWEsR0FBR1Isb0VBQWtCLENBQUM7QUFDdkNTLElBQUFBLElBQUksRUFBRSxLQURpQztBQUV2Q0MsSUFBQUEsRUFBRSxFQUFFO0FBRm1DLEdBQUQsQ0FBeEM7QUFLQSxzQkFDRSw4REFBQyxrREFBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsS0FBQyxFQUFDLE1BRko7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLEtBQUMsRUFBQyxJQUpKO0FBS0UsTUFBRSxFQUFDLE1BTEw7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLE1BQUUsRUFBQyxHQVBMO0FBUUUsU0FBSyxFQUFDLFFBUlI7QUFBQSw0QkFVRSw4REFBQyx1Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFZR0YsYUFBYSxpQkFBSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWnBCLGVBY0UsOERBQUMsa0RBQUQ7QUFBTSxXQUFLLEVBQUMsUUFBWjtBQUFxQixRQUFFLEVBQUMsTUFBeEI7QUFBQSw4QkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFTLHVCQUFlLEVBQUVBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0E3QmVGO1VBQ0tMLDhFQUVHRDs7O0tBSFJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGhCO0FBQ0E7O0FBUUEsSUFBTVEsb0JBQW9CLGdCQUFHRixvREFBYSxDQUFDLEVBQUQsQ0FBMUM7QUFFTyxTQUFTRyxrQkFBVCxPQUFzRTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7QUFDM0UsTUFBTUMsVUFBVSxHQUFHTiwrREFBYSxFQUFoQztBQUVBLHNCQUNFLDhEQUFDLG9CQUFELENBQXNCLFFBQXRCO0FBQStCLFNBQUssRUFBRU0sVUFBdEM7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQVJlRDtVQUNLSjs7O0tBRExJO0FBVVQsSUFBTWQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBOztBQUFBLFNBQU1ZLGlEQUFVLENBQUNDLG9CQUFELENBQWhCO0FBQUEsQ0FBekI7O0lBQU1iIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNpZGViYXJEcmF3ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dCc7XHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zTmF2IH0gZnJvbSAnLi9Ob3RpZmljYXRpb25zTmF2JztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vUHJvZmlsZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJveCB9IGZyb20gJy4vU2VhcmNoQm94JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBvbk9wZW4gfSA9IHVzZVNpZGViYXJEcmF3ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNXaWRlVmVyc2lvbiA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XHJcbiAgICBiYXNlOiBmYWxzZSxcclxuICAgIGxnOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYXM9XCJoZWFkZXJcIlxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIG1heFdpZHRoPXsxNDAwfVxyXG4gICAgICBoPVwiMjBcIlxyXG4gICAgICBteD1cImF1dG9cIlxyXG4gICAgICBtdD1cIjRcIlxyXG4gICAgICBweD1cIjZcIlxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxMb2dvIC8+XHJcblxyXG4gICAgICB7aXNXaWRlVmVyc2lvbiAmJiA8U2VhcmNoQm94IC8+fVxyXG5cclxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtbD1cImF1dG9cIj5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uc05hdiAvPlxyXG4gICAgICAgIDxQcm9maWxlIHNob3dQcm9maWxlRGF0YT17aXNXaWRlVmVyc2lvbn0gLz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSwgVXNlRGlzY2xvc3VyZVJldHVybiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgU2lkZUJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbnR5cGUgU2lkZWJhckRyYXdlckNvbnRleHREYXRhID0gVXNlRGlzY2xvc3VyZVJldHVybjtcclxuXHJcbmNvbnN0IFNpZGVCYXJEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGVEcmF3ZXJQcm92aWRlcih7IGNoaWxkcmVuIH06IFNpZGVCYXJEcmF3ZXJQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgZGlzY2xvc3VyZSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGVCYXJEcmF3ZXJDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIkZsZXgiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJ1c2VTaWRlYmFyRHJhd2VyIiwiTG9nbyIsIk5vdGlmaWNhdGlvbnNOYXYiLCJQcm9maWxlIiwiU2VhcmNoQm94IiwiSGVhZGVyIiwib25PcGVuIiwiaXNXaWRlVmVyc2lvbiIsImJhc2UiLCJsZyIsInVzZURpc2Nsb3N1cmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlNpZGVCYXJEcmF3ZXJDb250ZXh0IiwiU2lkZURyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIl0sInNvdXJjZVJvb3QiOiIifQ==