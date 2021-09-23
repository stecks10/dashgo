"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDrawerProvider": function() { return /* binding */ SidebarDrawerProvider; },
/* harmony export */   "useSidebarDrawer": function() { return /* binding */ useSidebarDrawer; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\contexts\\SidebarDrawerContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();





var SideBarDrawerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function SidebarDrawerProvider(_ref) {
  _s();

  var children = _ref.children;
  var disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    disclosure.onClose();
  }, [router.asPath]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SideBarDrawerContext.Provider, {
    value: disclosure,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(SidebarDrawerProvider, "8Gecg9/0jsQNPSCCiLhNAJ9Sc7U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = SidebarDrawerProvider;
var useSidebarDrawer = function useSidebarDrawer() {
  _s2();

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SideBarDrawerContext);
};

_s2(useSidebarDrawer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "SidebarDrawerProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuOGJlNzdhZTJiNzY1YmQzOTIwY2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTs7QUFRQSxJQUFNSyxvQkFBb0IsZ0JBQUdILG9EQUFhLENBQUMsRUFBRCxDQUExQztBQUVPLFNBQVNJLHFCQUFULE9BRXdCO0FBQUE7O0FBQUEsTUFEN0JDLFFBQzZCLFFBRDdCQSxRQUM2QjtBQUM3QixNQUFNQyxVQUFVLEdBQUdSLCtEQUFhLEVBQWhDO0FBQ0EsTUFBTVMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUVBSCxFQUFBQSwyREFBUyxDQUFDLFlBQU07QUFDZE8sSUFBQUEsVUFBVSxDQUFDRSxPQUFYO0FBQ0QsR0FGUSxFQUVOLENBQUNELE1BQU0sQ0FBQ0UsTUFBUixDQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixTQUFLLEVBQUVILFVBQXRDO0FBQUEsY0FDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FmZUQ7VUFHS04sNkRBQ0pJOzs7S0FKREU7QUFpQlQsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBOztBQUFBLFNBQU1ULGlEQUFVLENBQUNFLG9CQUFELENBQWhCO0FBQUEsQ0FBekI7O0lBQU1PIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIFVzZURpc2Nsb3N1cmVSZXR1cm4sXHJcbiAgdXNlRWZmZWN0LFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuO1xyXG5cclxuY29uc3QgU2lkZUJhckRyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRyYXdlclByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufTogU2lkZUJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBkaXNjbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzY2xvc3VyZS5vbkNsb3NlKCk7XHJcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGVCYXJEcmF3ZXJDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIlNpZGVCYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwicm91dGVyIiwib25DbG9zZSIsImFzUGF0aCIsInVzZVNpZGViYXJEcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9