"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YmU3N2FlMmI3NjViZDM5MjBjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBOztBQVFBLElBQU1LLG9CQUFvQixnQkFBR0gsb0RBQWEsQ0FBQyxFQUFELENBQTFDO0FBRU8sU0FBU0kscUJBQVQsT0FFd0I7QUFBQTs7QUFBQSxNQUQ3QkMsUUFDNkIsUUFEN0JBLFFBQzZCO0FBQzdCLE1BQU1DLFVBQVUsR0FBR1IsK0RBQWEsRUFBaEM7QUFDQSxNQUFNUyxNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBRUFILEVBQUFBLDJEQUFTLENBQUMsWUFBTTtBQUNkTyxJQUFBQSxVQUFVLENBQUNFLE9BQVg7QUFDRCxHQUZRLEVBRU4sQ0FBQ0QsTUFBTSxDQUFDRSxNQUFSLENBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLG9CQUFELENBQXNCLFFBQXRCO0FBQStCLFNBQUssRUFBRUgsVUFBdEM7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQWZlRDtVQUdLTiw2REFDSkk7OztLQUpERTtBQWlCVCxJQUFNTSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUE7O0FBQUEsU0FBTVQsaURBQVUsQ0FBQ0Usb0JBQUQsQ0FBaEI7QUFBQSxDQUF6Qjs7SUFBTU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbiAgVXNlRGlzY2xvc3VyZVJldHVybixcclxuICB1c2VFZmZlY3QsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW50ZXJmYWNlIFNpZGVCYXJEcmF3ZXJQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSA9IFVzZURpc2Nsb3N1cmVSZXR1cm47XHJcblxyXG5jb25zdCBTaWRlQmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyRHJhd2VyUHJvdmlkZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IGRpc2Nsb3N1cmUgPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNjbG9zdXJlLm9uQ2xvc2UoKTtcclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVCYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNjbG9zdXJlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhckRyYXdlciA9ICgpID0+IHVzZUNvbnRleHQoU2lkZUJhckRyYXdlckNvbnRleHQpO1xyXG4iXSwibmFtZXMiOlsidXNlRGlzY2xvc3VyZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiU2lkZUJhckRyYXdlckNvbnRleHQiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc2Nsb3N1cmUiLCJyb3V0ZXIiLCJvbkNsb3NlIiwiYXNQYXRoIiwidXNlU2lkZWJhckRyYXdlciJdLCJzb3VyY2VSb290IjoiIn0=