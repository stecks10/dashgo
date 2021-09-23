"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    disclosure.onClose();
  }, [router.asPath]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SideBarDrawerContext.Provider, {
    value: disclosure,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjc2ZjQxY2FmNGIyZTU1YTk4MzM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUssb0JBQW9CLGdCQUFHSixvREFBYSxDQUFDLEVBQUQsQ0FBMUM7QUFFTyxTQUFTSyxxQkFBVCxPQUV3QjtBQUFBOztBQUFBLE1BRDdCQyxRQUM2QixRQUQ3QkEsUUFDNkI7QUFDN0IsTUFBTUMsVUFBVSxHQUFHUiwrREFBYSxFQUFoQztBQUNBLE1BQU1TLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RLLElBQUFBLFVBQVUsQ0FBQ0UsT0FBWDtBQUNELEdBRlEsRUFFTixDQUFDRCxNQUFNLENBQUNFLE1BQVIsQ0FGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsb0JBQUQsQ0FBc0IsUUFBdEI7QUFBK0IsU0FBSyxFQUFFSCxVQUF0QztBQUFBLGNBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBZmVEO1VBR0tOLDZEQUNKSTs7O0tBSkRFO0FBaUJULElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTs7QUFBQSxTQUFNVixpREFBVSxDQUFDRyxvQkFBRCxDQUFoQjtBQUFBLENBQXpCOztJQUFNTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuO1xyXG5cclxuY29uc3QgU2lkZUJhckRyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRyYXdlclByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufTogU2lkZUJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBkaXNjbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzY2xvc3VyZS5vbkNsb3NlKCk7XHJcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGVCYXJEcmF3ZXJDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNpZGVCYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwicm91dGVyIiwib25DbG9zZSIsImFzUGF0aCIsInVzZVNpZGViYXJEcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9