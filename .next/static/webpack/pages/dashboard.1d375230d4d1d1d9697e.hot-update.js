"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Sidebar.tsx";



function Sidebar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    as: "aside",
    w: "64",
    mr: "8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      spacing: "12",
      align: "flex-start",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontWeight: "bold",
          color: "gray.400",
          fontSize: "small",
          children: "GERAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
          spacing: "4",
          mt: "8",
          align: "stretch",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            display: "flex",
            align: "center",
            color: "pink.400",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              as: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiDashboardLine,
              fontSize: "20"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              ml: "4",
              fontWeight: "medium",
              children: "Dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjFkMzc1MjMwZDRkMWQxZDk2OTdlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sU0FBU00sT0FBVCxHQUFtQjtBQUN4QixzQkFDRSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLEtBQUMsRUFBQyxJQUFsQjtBQUF1QixNQUFFLEVBQUMsR0FBMUI7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFPLGFBQU8sRUFBQyxJQUFmO0FBQW9CLFdBQUssRUFBQyxZQUExQjtBQUFBLDZCQUNFLDhEQUFDLGlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBVSxFQUFDLE1BQWpCO0FBQXdCLGVBQUssRUFBQyxVQUE5QjtBQUF5QyxrQkFBUSxFQUFDLE9BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTyxpQkFBTyxFQUFDLEdBQWY7QUFBbUIsWUFBRSxFQUFDLEdBQXRCO0FBQTBCLGVBQUssRUFBQyxTQUFoQztBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sbUJBQU8sRUFBQyxNQUFkO0FBQXFCLGlCQUFLLEVBQUMsUUFBM0I7QUFBb0MsaUJBQUssRUFBQyxVQUExQztBQUFBLG9DQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUUsRUFBRUQsMkRBQVY7QUFBMkIsc0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBRSxFQUFDLEdBQVQ7QUFBYSx3QkFBVSxFQUFDLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDtLQXBCZUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBTdGFjaywgVGV4dCwgTGluaywgSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBSaURhc2hib2FyZExpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImFzaWRlXCIgdz1cIjY0XCIgbXI9XCI4XCI+XHJcbiAgICAgIDxTdGFjayBzcGFjaW5nPVwiMTJcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cImdyYXkuNDAwXCIgZm9udFNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICBHRVJBTFxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCI0XCIgbXQ9XCI4XCIgYWxpZ249XCJzdHJldGNoXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInBpbmsuNDAwXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gYXM9e1JpRGFzaGJvYXJkTGluZX0gZm9udFNpemU9XCIyMFwiIC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgbWw9XCI0XCIgZm9udFdlaWdodD1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1N0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiU3RhY2siLCJUZXh0IiwiTGluayIsIkljb24iLCJSaURhc2hib2FyZExpbmUiLCJTaWRlYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==