"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\index.tsx";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "100vw",
    h: "100vh",
    align: "center",
    justify: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      as: "form",
      width: "100%",
      maxWidth: 360,
      bg: "gray.800",
      p: "8",
      borderRadius: 8,
      flexDir: "column",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        spacing: "4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
          name: "email",
          id: "email",
          type: "email",
          focusBorderColor: "pink.500",
          bgColor: "gray.900",
          variant: "filled",
          _hover: {
            bgColor: 'gray.900'
          },
          size: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
          htmlFor: "password",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
          name: "password",
          id: "password",
          type: "password",
          focusBorderColor: "pink.500",
          bgColor: "gray.900",
          variant: "filled",
          _hover: {
            bgColor: 'gray.900'
          },
          size: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        mt: "6",
        colorScheme: "pink",
        size: "lg",
        children: "Entrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTE1NThhYjA3OWE4YmMyNjFhOTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTSyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sS0FBQyxFQUFDLE9BQVI7QUFBZ0IsS0FBQyxFQUFDLE9BQWxCO0FBQTBCLFNBQUssRUFBQyxRQUFoQztBQUF5QyxXQUFPLEVBQUMsUUFBakQ7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUNFLFFBQUUsRUFBQyxNQURMO0FBRUUsV0FBSyxFQUFDLE1BRlI7QUFHRSxjQUFRLEVBQUUsR0FIWjtBQUlFLFFBQUUsRUFBQyxVQUpMO0FBS0UsT0FBQyxFQUFDLEdBTEo7QUFNRSxrQkFBWSxFQUFFLENBTmhCO0FBT0UsYUFBTyxFQUFDLFFBUFY7QUFBQSw4QkFTRSw4REFBQyxtREFBRDtBQUFPLGVBQU8sRUFBQyxHQUFmO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQ7QUFBVyxpQkFBTyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0UsOERBQUMsbURBQUQ7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLFlBQUUsRUFBQyxPQUZMO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSwwQkFBZ0IsRUFBQyxVQUpuQjtBQUtFLGlCQUFPLEVBQUMsVUFMVjtBQU1FLGlCQUFPLEVBQUMsUUFOVjtBQU9FLGdCQUFNLEVBQUU7QUFDTkMsWUFBQUEsT0FBTyxFQUFFO0FBREgsV0FQVjtBQVVFLGNBQUksRUFBQztBQVZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFnQkUsOERBQUMsdURBQUQ7QUFBVyxpQkFBTyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixlQWlCRSw4REFBQyxtREFBRDtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsWUFBRSxFQUFDLFVBRkw7QUFHRSxjQUFJLEVBQUMsVUFIUDtBQUlFLDBCQUFnQixFQUFDLFVBSm5CO0FBS0UsaUJBQU8sRUFBQyxVQUxWO0FBTUUsaUJBQU8sRUFBQyxRQU5WO0FBT0UsZ0JBQU0sRUFBRTtBQUNOQSxZQUFBQSxPQUFPLEVBQUU7QUFESCxXQVBWO0FBVUUsY0FBSSxFQUFDO0FBVlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUF1Q0UsOERBQUMsb0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixVQUFFLEVBQUMsR0FBekI7QUFBNkIsbUJBQVcsRUFBQyxNQUF6QztBQUFnRCxZQUFJLEVBQUMsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEO0tBaER1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBJbnB1dCwgQnV0dG9uLCBTdGFjaywgRm9ybUxhYmVsIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggdz1cIjEwMHZ3XCIgaD1cIjEwMHZoXCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICA8RmxleFxuICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBtYXhXaWR0aD17MzYwfVxuICAgICAgICBiZz1cImdyYXkuODAwXCJcbiAgICAgICAgcD1cIjhcIlxuICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgPlxuICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjRcIj5cbiAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9Gb3JtTGFiZWw+XG5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBmb2N1c0JvcmRlckNvbG9yPVwicGluay41MDBcIlxuICAgICAgICAgICAgYmdDb2xvcj1cImdyYXkuOTAwXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgIGJnQ29sb3I6ICdncmF5LjkwMCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5TZW5oYTwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I9XCJwaW5rLjUwMFwiXG4gICAgICAgICAgICBiZ0NvbG9yPVwiZ3JheS45MDBcIlxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgYmdDb2xvcjogJ2dyYXkuOTAwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG10PVwiNlwiIGNvbG9yU2NoZW1lPVwicGlua1wiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgIEVudHJhclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRmxleCIsIklucHV0IiwiQnV0dG9uIiwiU3RhY2siLCJGb3JtTGFiZWwiLCJIb21lIiwiYmdDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=