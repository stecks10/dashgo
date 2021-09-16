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
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[600]
    },
    axisTicks: {
      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[600]
    },
    categories: ['2021-03-18T00:00:00.000Z', '2021-03-19T00:00:00.000Z', '2021-03-20T00:00:00.000Z', '2021-03-21T00:00:00.000Z', '2021-03-22T00:00:00.000Z', '2021-03-23T00:00:00.000Z', '2021-03-24T00:00:00.000Z']
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
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
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      w: "100%",
      my: "6",
      maxW: 1400,
      mx: "auto",
      px: "6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
        flex: "1",
        gap: "4",
        minChildWidth: "320px",
        align: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          p: "8",
          bg: "gray.800",
          borderRadius: 0,
          pb: "4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
            fontSize: "lg",
            mb: "4",
            children: "Inscritos da semana"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          p: "8",
          bg: "gray.800",
          borderRadius: 0,
          pb: "4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
            fontSize: "lg",
            mb: "4",
            children: "Taxa de abertura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmIxMzFjNjMwY2UyOTgwMDMxYjM4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1RLEtBQUssR0FBR0gsbURBQU8sTUFBQztBQUFBLFNBQU0sK09BQU47QUFBQSxDQUFELEVBQW1DO0FBQ3RESSxFQUFBQSxHQUFHLEVBQUUsS0FEaUQ7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsb0NBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBckI7TUFBTUQ7QUFJTixJQUFNRSxPQUFvQixHQUFHO0FBQzNCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREo7QUFJTEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRTtBQURMLEtBSkQ7QUFPTEMsSUFBQUEsU0FBUyxFQUFFWixvRUFBQTtBQVBOLEdBRG9CO0FBVTNCZSxFQUFBQSxJQUFJLEVBQUU7QUFDSk4sSUFBQUEsSUFBSSxFQUFFO0FBREYsR0FWcUI7QUFhM0JPLEVBQUFBLFVBQVUsRUFBRTtBQUNWTCxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQWJlO0FBZ0IzQk0sRUFBQUEsT0FBTyxFQUFFO0FBQ1BOLElBQUFBLE9BQU8sRUFBRTtBQURGLEdBaEJrQjtBQW1CM0JPLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUUsVUFERDtBQUVMQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsS0FBSyxFQUFFckIsb0VBQUE7QUFERyxLQUZQO0FBS0xzQixJQUFBQSxTQUFTLEVBQUU7QUFDVEQsTUFBQUEsS0FBSyxFQUFFckIsb0VBQUE7QUFERSxLQUxOO0FBUUx1QixJQUFBQSxVQUFVLEVBQUUsQ0FDViwwQkFEVSxFQUVWLDBCQUZVLEVBR1YsMEJBSFUsRUFJViwwQkFKVSxFQUtWLDBCQUxVLEVBTVYsMEJBTlUsRUFPViwwQkFQVTtBQVJQLEdBbkJvQjtBQXFDM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxPQUFPLEVBQUUsR0FETDtBQUVKTixJQUFBQSxJQUFJLEVBQUUsVUFGRjtBQUdKTyxJQUFBQSxRQUFRLEVBQUU7QUFDUkMsTUFBQUEsS0FBSyxFQUFFLE1BREM7QUFFUkMsTUFBQUEsV0FBVyxFQUFFLEdBRkw7QUFHUkMsTUFBQUEsU0FBUyxFQUFFO0FBSEg7QUFITjtBQXJDcUIsQ0FBN0I7QUErQ0EsSUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLEVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsR0FBMUI7QUFBekIsQ0FBRCxDQUFmO0FBRWUsU0FBU0MsU0FBVCxHQUFxQjtBQUNsQyxzQkFDRSw4REFBQyxrREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixLQUFDLEVBQUMsT0FBM0I7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRSw4REFBQyxrREFBRDtBQUFNLE9BQUMsRUFBQyxNQUFSO0FBQWUsUUFBRSxFQUFDLEdBQWxCO0FBQXNCLFVBQUksRUFBRSxJQUE1QjtBQUFrQyxRQUFFLEVBQUMsTUFBckM7QUFBNEMsUUFBRSxFQUFDLEdBQS9DO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UsOERBQUMsd0RBQUQ7QUFBWSxZQUFJLEVBQUMsR0FBakI7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLHFCQUFhLEVBQUMsT0FBM0M7QUFBbUQsYUFBSyxFQUFDLFlBQXpEO0FBQUEsZ0NBQ0UsOERBQUMsaURBQUQ7QUFBSyxXQUFDLEVBQUMsR0FBUDtBQUFXLFlBQUUsRUFBQyxVQUFkO0FBQXlCLHNCQUFZLEVBQUUsQ0FBdkM7QUFBMEMsWUFBRSxFQUFDLEdBQTdDO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBUSxFQUFDLElBQWY7QUFBb0IsY0FBRSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsS0FBRDtBQUFPLG1CQUFPLEVBQUUzQixPQUFoQjtBQUF5QixrQkFBTSxFQUFFd0IsTUFBakM7QUFBeUMsZ0JBQUksRUFBQyxNQUE5QztBQUFxRCxrQkFBTSxFQUFFO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0UsOERBQUMsaURBQUQ7QUFBSyxXQUFDLEVBQUMsR0FBUDtBQUFXLFlBQUUsRUFBQyxVQUFkO0FBQXlCLHNCQUFZLEVBQUUsQ0FBdkM7QUFBMEMsWUFBRSxFQUFDLEdBQTdDO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBUSxFQUFDLElBQWY7QUFBb0IsY0FBRSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsS0FBRDtBQUFPLG1CQUFPLEVBQUV4QixPQUFoQjtBQUF5QixrQkFBTSxFQUFFd0IsTUFBakM7QUFBeUMsZ0JBQUksRUFBQyxNQUE5QztBQUFxRCxrQkFBTSxFQUFFO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEO01BekJ1QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgU2ltcGxlR3JpZCwgQm94LCBUZXh0LCB0aGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyBBcGV4T3B0aW9ucyB9IGZyb20gJ2FwZXhjaGFydHMnO1xyXG5cclxuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBvcHRpb25zOiBBcGV4T3B0aW9ucyA9IHtcclxuICBjaGFydDoge1xyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB6b29tOiB7XHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGZvcmVDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNTAwXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZGF0YUxhYmVsczoge1xyXG4gICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHhheGlzOiB7XHJcbiAgICB0eXBlOiAnZGF0ZXRpbWUnLFxyXG4gICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXSxcclxuICAgIH0sXHJcbiAgICBheGlzVGlja3M6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzYwMF0sXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAnMjAyMS0wMy0xOFQwMDowMDowMC4wMDBaJyxcclxuICAgICAgJzIwMjEtMDMtMTlUMDA6MDA6MDAuMDAwWicsXHJcbiAgICAgICcyMDIxLTAzLTIwVDAwOjAwOjAwLjAwMFonLFxyXG4gICAgICAnMjAyMS0wMy0yMVQwMDowMDowMC4wMDBaJyxcclxuICAgICAgJzIwMjEtMDMtMjJUMDA6MDA6MDAuMDAwWicsXHJcbiAgICAgICcyMDIxLTAzLTIzVDAwOjAwOjAwLjAwMFonLFxyXG4gICAgICAnMjAyMS0wMy0yNFQwMDowMDowMC4wMDBaJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBmaWxsOiB7XHJcbiAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICB0eXBlOiAnZ3JhZGllbnQnLFxyXG4gICAgZ3JhZGllbnQ6IHtcclxuICAgICAgc2hhZGU6ICdkYXJrJyxcclxuICAgICAgb3BhY2l0eUZyb206IDAuNyxcclxuICAgICAgb3BhY2l0eVRvOiAwLjMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IHNlcmllcyA9IFt7IG5hbWU6ICdzZXJpZXMxJywgZGF0YTogWzMxLCAxMjAsIDEwLCAyOCwgNTEsIDE4LCAxMDldIH1dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaEJvYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwdmhcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgPEZsZXggdz1cIjEwMCVcIiBteT1cIjZcIiBtYXhXPXsxNDAwfSBteD1cImF1dG9cIiBweD1cIjZcIj5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgICA8U2ltcGxlR3JpZCBmbGV4PVwiMVwiIGdhcD1cIjRcIiBtaW5DaGlsZFdpZHRoPVwiMzIwcHhcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgIDxCb3ggcD1cIjhcIiBiZz1cImdyYXkuODAwXCIgYm9yZGVyUmFkaXVzPXswfSBwYj1cIjRcIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPlxyXG4gICAgICAgICAgICAgIEluc2NyaXRvcyBkYSBzZW1hbmFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJhcmVhXCIgaGVpZ2h0PXsxNjB9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggcD1cIjhcIiBiZz1cImdyYXkuODAwXCIgYm9yZGVyUmFkaXVzPXswfSBwYj1cIjRcIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPlxyXG4gICAgICAgICAgICAgIFRheGEgZGUgYWJlcnR1cmFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJhcmVhXCIgaGVpZ2h0PXsxNjB9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwiU2ltcGxlR3JpZCIsIkJveCIsIlRleHQiLCJ0aGVtZSIsImR5bmFtaWMiLCJIZWFkZXIiLCJTaWRlYmFyIiwiQ2hhcnQiLCJzc3IiLCJvcHRpb25zIiwiY2hhcnQiLCJ0b29sYmFyIiwic2hvdyIsInpvb20iLCJlbmFibGVkIiwiZm9yZUNvbG9yIiwiY29sb3JzIiwiZ3JheSIsImdyaWQiLCJkYXRhTGFiZWxzIiwidG9vbHRpcCIsInhheGlzIiwidHlwZSIsImF4aXNCb3JkZXIiLCJjb2xvciIsImF4aXNUaWNrcyIsImNhdGVnb3JpZXMiLCJmaWxsIiwib3BhY2l0eSIsImdyYWRpZW50Iiwic2hhZGUiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiRGFzaEJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==