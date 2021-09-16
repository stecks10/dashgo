"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashBoard; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\dashboard.tsx";





var Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-apexcharts_dist_react-apexcharts_min_js").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js")];
    },
    modules: ["dashboard.tsx -> " + 'react-apexcharts']
  }
});
_c2 = Chart;
var options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[500]
  }
};
var series = [{
  name: 'series1',
  data: [31, 120, 10, 28, 51, 18, 109]
}];
function DashBoard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    direction: "column",
    h: "100vh",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      w: "100%",
      my: "6",
      maxW: 1400,
      mx: "auto",
      px: "6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
        flex: "1",
        gap: "4",
        minChildWidth: "320px",
        align: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          p: "8",
          bg: "gray.800",
          borderRadius: 0 // pb="4"
          ,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
            fontSize: "lg",
            mb: "4",
            children: "Inscritos da semana"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          p: "8",
          bg: "gray.800",
          borderRadius: 0 // pb="4"
          ,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
            fontSize: "lg",
            mb: "4",
            children: "Taxa de abertura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
_c3 = DashBoard;

var _c, _c2, _c3;

$RefreshReg$(_c, "Chart$dynamic");
$RefreshReg$(_c2, "Chart");
$RefreshReg$(_c3, "DashBoard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjQ1MjZlZTc4MmEzMjUwNDYxNTczLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1RLEtBQUssR0FBR0gsbURBQU8sTUFBQztBQUFBLFNBQU0sK09BQU47QUFBQSxDQUFELEVBQW1DO0FBQ3RESSxFQUFBQSxHQUFHLEVBQUUsS0FEaUQ7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsb0NBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBckI7TUFBTUQ7QUFJTixJQUFNRSxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUU7QUFEQyxLQURKO0FBSUxDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxPQUFPLEVBQUU7QUFETCxLQUpEO0FBT0xDLElBQUFBLFNBQVMsRUFBRVosb0VBQUE7QUFQTjtBQURPLENBQWhCO0FBV0EsSUFBTWUsTUFBTSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLEVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsR0FBMUI7QUFBekIsQ0FBRCxDQUFmO0FBRWUsU0FBU0MsU0FBVCxHQUFxQjtBQUNsQyxzQkFDRSw4REFBQyxrREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixLQUFDLEVBQUMsT0FBM0I7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRSw4REFBQyxrREFBRDtBQUFNLE9BQUMsRUFBQyxNQUFSO0FBQWUsUUFBRSxFQUFDLEdBQWxCO0FBQXNCLFVBQUksRUFBRSxJQUE1QjtBQUFrQyxRQUFFLEVBQUMsTUFBckM7QUFBNEMsUUFBRSxFQUFDLEdBQS9DO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UsOERBQUMsd0RBQUQ7QUFBWSxZQUFJLEVBQUMsR0FBakI7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLHFCQUFhLEVBQUMsT0FBM0M7QUFBbUQsYUFBSyxFQUFDLFlBQXpEO0FBQUEsZ0NBQ0UsOERBQUMsaURBQUQ7QUFDRSxXQUFDLEVBQUMsR0FESjtBQUVFLFlBQUUsRUFBQyxVQUZMO0FBR0Usc0JBQVksRUFBRSxDQUhoQixDQUlFO0FBSkY7QUFBQSxrQ0FNRSw4REFBQyxrREFBRDtBQUFNLG9CQUFRLEVBQUMsSUFBZjtBQUFvQixjQUFFLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFTRSw4REFBQyxLQUFEO0FBQU8sbUJBQU8sRUFBRVosT0FBaEI7QUFBeUIsa0JBQU0sRUFBRVMsTUFBakM7QUFBeUMsZ0JBQUksRUFBQyxNQUE5QztBQUFxRCxrQkFBTSxFQUFFO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUUsOERBQUMsaURBQUQ7QUFDRSxXQUFDLEVBQUMsR0FESjtBQUVFLFlBQUUsRUFBQyxVQUZMO0FBR0Usc0JBQVksRUFBRSxDQUhoQixDQUlFO0FBSkY7QUFBQSxpQ0FNRSw4REFBQyxrREFBRDtBQUFNLG9CQUFRLEVBQUMsSUFBZjtBQUFvQixjQUFFLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEO01BbEN1QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgU2ltcGxlR3JpZCwgQm94LCBUZXh0LCB0aGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGNoYXJ0OiB7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHpvb206IHtcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZm9yZUNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs1MDBdLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IHNlcmllcyA9IFt7IG5hbWU6ICdzZXJpZXMxJywgZGF0YTogWzMxLCAxMjAsIDEwLCAyOCwgNTEsIDE4LCAxMDldIH1dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaEJvYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwdmhcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgPEZsZXggdz1cIjEwMCVcIiBteT1cIjZcIiBtYXhXPXsxNDAwfSBteD1cImF1dG9cIiBweD1cIjZcIj5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgICA8U2ltcGxlR3JpZCBmbGV4PVwiMVwiIGdhcD1cIjRcIiBtaW5DaGlsZFdpZHRoPVwiMzIwcHhcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgcD1cIjhcIlxyXG4gICAgICAgICAgICBiZz1cImdyYXkuODAwXCJcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXswfVxyXG4gICAgICAgICAgICAvLyBwYj1cIjRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgbWI9XCI0XCI+XHJcbiAgICAgICAgICAgICAgSW5zY3JpdG9zIGRhIHNlbWFuYVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImFyZWFcIiBoZWlnaHQ9ezE2MH0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBwPVwiOFwiXHJcbiAgICAgICAgICAgIGJnPVwiZ3JheS44MDBcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezB9XHJcbiAgICAgICAgICAgIC8vIHBiPVwiNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtYj1cIjRcIj5cclxuICAgICAgICAgICAgICBUYXhhIGRlIGFiZXJ0dXJhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZsZXgiLCJTaW1wbGVHcmlkIiwiQm94IiwiVGV4dCIsInRoZW1lIiwiZHluYW1pYyIsIkhlYWRlciIsIlNpZGViYXIiLCJDaGFydCIsInNzciIsIm9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93Iiwiem9vbSIsImVuYWJsZWQiLCJmb3JlQ29sb3IiLCJjb2xvcnMiLCJncmF5Iiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJEYXNoQm9hcmQiXSwic291cmNlUm9vdCI6IiJ9