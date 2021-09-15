"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Header.tsx";



function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    as: "header",
    w: "100%",
    maxWidth: 1400,
    h: "20",
    marginX: "auto",
    mt: "4",
    px: "6",
    align: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "3xl",
      fontWeight: "bold",
      letterSpacing: "tight",
      w: "64",
      children: ["Dashgo", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        as: "span",
        ml: "1",
        color: "pink.500",
        children: "."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      as: "label",
      flex: "1",
      py: "4",
      px: "8",
      ml: "6",
      maxW: 400,
      alignSelf: "center",
      color: "gray.200",
      position: "relative",
      bg: "gray.800",
      borderRadius: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        color: "gray.50",
        variant: "unstyled",
        px: "4",
        mr: "4",
        placeholder: "Buscar na plataforma",
        _placeholder: {
          color: 'gray.400'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiSearchLine,
        fontSize: "2xl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjkyMmZjNDNmMTU0ZDk1ZGY3OTQ1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sU0FBU0ssTUFBVCxHQUFrQjtBQUN2QixzQkFDRSw4REFBQyxrREFBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsS0FBQyxFQUFDLE1BRko7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLEtBQUMsRUFBQyxJQUpKO0FBS0UsV0FBTyxFQUFDLE1BTFY7QUFNRSxNQUFFLEVBQUMsR0FOTDtBQU9FLE1BQUUsRUFBQyxHQVBMO0FBUUUsU0FBSyxFQUFDLFFBUlI7QUFBQSw0QkFVRSw4REFBQyxrREFBRDtBQUFNLGNBQVEsRUFBQyxLQUFmO0FBQXFCLGdCQUFVLEVBQUMsTUFBaEM7QUFBdUMsbUJBQWEsRUFBQyxPQUFyRDtBQUE2RCxPQUFDLEVBQUMsSUFBL0Q7QUFBQSx3Q0FFRSw4REFBQyxrREFBRDtBQUFNLFVBQUUsRUFBQyxNQUFUO0FBQWdCLFVBQUUsRUFBQyxHQUFuQjtBQUF1QixhQUFLLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWlCRSw4REFBQyxrREFBRDtBQUNFLFFBQUUsRUFBQyxPQURMO0FBRUUsVUFBSSxFQUFDLEdBRlA7QUFHRSxRQUFFLEVBQUMsR0FITDtBQUlFLFFBQUUsRUFBQyxHQUpMO0FBS0UsUUFBRSxFQUFDLEdBTEw7QUFNRSxVQUFJLEVBQUUsR0FOUjtBQU9FLGVBQVMsRUFBQyxRQVBaO0FBUUUsV0FBSyxFQUFDLFVBUlI7QUFTRSxjQUFRLEVBQUMsVUFUWDtBQVVFLFFBQUUsRUFBQyxVQVZMO0FBV0Usa0JBQVksRUFBQyxNQVhmO0FBQUEsOEJBYUUsOERBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLGVBQU8sRUFBQyxVQUZWO0FBR0UsVUFBRSxFQUFDLEdBSEw7QUFJRSxVQUFFLEVBQUMsR0FKTDtBQUtFLG1CQUFXLEVBQUMsc0JBTGQ7QUFNRSxvQkFBWSxFQUFFO0FBQUVDLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQXNCRSw4REFBQyxrREFBRDtBQUFNLFVBQUUsRUFBRUYsd0RBQVY7QUFBd0IsZ0JBQVEsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRDRDtLQTdDZUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBUZXh0LCBJbnB1dCwgSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBSaVNlYXJjaExpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cImhlYWRlclwiXHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgbWF4V2lkdGg9ezE0MDB9XHJcbiAgICAgIGg9XCIyMFwiXHJcbiAgICAgIG1hcmdpblg9XCJhdXRvXCJcclxuICAgICAgbXQ9XCI0XCJcclxuICAgICAgcHg9XCI2XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cIjN4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgbGV0dGVyU3BhY2luZz1cInRpZ2h0XCIgdz1cIjY0XCI+XHJcbiAgICAgICAgRGFzaGdvXHJcbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgbWw9XCIxXCIgY29sb3I9XCJwaW5rLjUwMFwiPlxyXG4gICAgICAgICAgLlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBhcz1cImxhYmVsXCJcclxuICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgcHk9XCI0XCJcclxuICAgICAgICBweD1cIjhcIlxyXG4gICAgICAgIG1sPVwiNlwiXHJcbiAgICAgICAgbWF4Vz17NDAwfVxyXG4gICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXHJcbiAgICAgICAgY29sb3I9XCJncmF5LjIwMFwiXHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgYmc9XCJncmF5LjgwMFwiXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGNvbG9yPVwiZ3JheS41MFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxyXG4gICAgICAgICAgcHg9XCI0XCJcclxuICAgICAgICAgIG1yPVwiNFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBuYSBwbGF0YWZvcm1hXCJcclxuICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBjb2xvcjogJ2dyYXkuNDAwJyB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxJY29uIGFzPXtSaVNlYXJjaExpbmV9IGZvbnRTaXplPVwiMnhsXCIgLz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZsZXgiLCJUZXh0IiwiSW5wdXQiLCJJY29uIiwiUmlTZWFyY2hMaW5lIiwiSGVhZGVyIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9