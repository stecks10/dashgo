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
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      w: "100%",
      my: "6",
      maxW: 1400,
      mx: "auto",
      px: "6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmY3ZmE2MWJlMDcwODAzYmNkMTI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1RLEtBQUssR0FBR0gsbURBQU8sTUFBQztBQUFBLFNBQU0sK09BQU47QUFBQSxDQUFELEVBQW1DO0FBQ3RESSxFQUFBQSxHQUFHLEVBQUUsS0FEaUQ7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsb0NBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBckI7TUFBTUQ7QUFJTixJQUFNRSxPQUFvQixHQUFHO0FBQzNCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREo7QUFJTEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRTtBQURMLEtBSkQ7QUFPTEMsSUFBQUEsU0FBUyxFQUFFWixvRUFBQTtBQVBOLEdBRG9CO0FBVTNCZSxFQUFBQSxJQUFJLEVBQUU7QUFDSk4sSUFBQUEsSUFBSSxFQUFFO0FBREYsR0FWcUI7QUFhM0JPLEVBQUFBLFVBQVUsRUFBRTtBQUNWTCxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQWJlO0FBZ0IzQk0sRUFBQUEsT0FBTyxFQUFFO0FBQ1BOLElBQUFBLE9BQU8sRUFBRTtBQURGLEdBaEJrQjtBQW1CM0JPLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUUsVUFERDtBQUVMQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsS0FBSyxFQUFFckIsb0VBQUE7QUFERyxLQUZQO0FBS0xzQixJQUFBQSxTQUFTLEVBQUU7QUFDVEQsTUFBQUEsS0FBSyxFQUFFckIsb0VBQUE7QUFERSxLQUxOO0FBUUx1QixJQUFBQSxVQUFVLEVBQUUsQ0FDViwwQkFEVSxFQUVWLDBCQUZVLEVBR1YsMEJBSFUsRUFJViwwQkFKVSxFQUtWLDBCQUxVLEVBTVYsMEJBTlUsRUFPViwwQkFQVTtBQVJQO0FBbkJvQixDQUE3QjtBQXNDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixHQUExQjtBQUF6QixDQUFELENBQWY7QUFFZSxTQUFTQyxTQUFULEdBQXFCO0FBQ2xDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQXlCLEtBQUMsRUFBQyxPQUEzQjtBQUFBLDRCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLDhEQUFDLGtEQUFEO0FBQU0sT0FBQyxFQUFDLE1BQVI7QUFBZSxRQUFFLEVBQUMsR0FBbEI7QUFBc0IsVUFBSSxFQUFFLElBQTVCO0FBQWtDLFFBQUUsRUFBQyxNQUFyQztBQUE0QyxRQUFFLEVBQUMsR0FBL0M7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRSw4REFBQyx3REFBRDtBQUFZLFlBQUksRUFBQyxHQUFqQjtBQUFxQixXQUFHLEVBQUMsR0FBekI7QUFBNkIscUJBQWEsRUFBQyxPQUEzQztBQUFtRCxhQUFLLEVBQUMsWUFBekQ7QUFBQSxnQ0FDRSw4REFBQyxpREFBRDtBQUFLLFdBQUMsRUFBQyxHQUFQO0FBQVcsWUFBRSxFQUFDLFVBQWQ7QUFBeUIsc0JBQVksRUFBRSxDQUF2QztBQUEwQyxZQUFFLEVBQUMsR0FBN0M7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFRLEVBQUMsSUFBZjtBQUFvQixjQUFFLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQyxLQUFEO0FBQU8sbUJBQU8sRUFBRXJCLE9BQWhCO0FBQXlCLGtCQUFNLEVBQUVrQixNQUFqQztBQUF5QyxnQkFBSSxFQUFDLE1BQTlDO0FBQXFELGtCQUFNLEVBQUU7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRSw4REFBQyxpREFBRDtBQUNFLFdBQUMsRUFBQyxHQURKO0FBRUUsWUFBRSxFQUFDLFVBRkw7QUFHRSxzQkFBWSxFQUFFLENBSGhCLENBSUU7QUFKRjtBQUFBLGlDQU1FLDhEQUFDLGtEQUFEO0FBQU0sb0JBQVEsRUFBQyxJQUFmO0FBQW9CLGNBQUUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7TUE3QnVCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBTaW1wbGVHcmlkLCBCb3gsIFRleHQsIHRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IEFwZXhPcHRpb25zIH0gZnJvbSAnYXBleGNoYXJ0cyc7XHJcblxyXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IG9wdGlvbnM6IEFwZXhPcHRpb25zID0ge1xyXG4gIGNoYXJ0OiB7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHpvb206IHtcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZm9yZUNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs1MDBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgfSxcclxuICBkYXRhTGFiZWxzOiB7XHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgeGF4aXM6IHtcclxuICAgIHR5cGU6ICdkYXRldGltZScsXHJcbiAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2MDBdLFxyXG4gICAgfSxcclxuICAgIGF4aXNUaWNrczoge1xyXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXSxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICcyMDIxLTAzLTE4VDAwOjAwOjAwLjAwMFonLFxyXG4gICAgICAnMjAyMS0wMy0xOVQwMDowMDowMC4wMDBaJyxcclxuICAgICAgJzIwMjEtMDMtMjBUMDA6MDA6MDAuMDAwWicsXHJcbiAgICAgICcyMDIxLTAzLTIxVDAwOjAwOjAwLjAwMFonLFxyXG4gICAgICAnMjAyMS0wMy0yMlQwMDowMDowMC4wMDBaJyxcclxuICAgICAgJzIwMjEtMDMtMjNUMDA6MDA6MDAuMDAwWicsXHJcbiAgICAgICcyMDIxLTAzLTI0VDAwOjAwOjAwLjAwMFonLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG5jb25zdCBzZXJpZXMgPSBbeyBuYW1lOiAnc2VyaWVzMScsIGRhdGE6IFszMSwgMTIwLCAxMCwgMjgsIDUxLCAxOCwgMTA5XSB9XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgaD1cIjEwMHZoXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIgbXk9XCI2XCIgbWF4Vz17MTQwMH0gbXg9XCJhdXRvXCIgcHg9XCI2XCI+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgICAgPFNpbXBsZUdyaWQgZmxleD1cIjFcIiBnYXA9XCI0XCIgbWluQ2hpbGRXaWR0aD1cIjMyMHB4XCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICA8Qm94IHA9XCI4XCIgYmc9XCJncmF5LjgwMFwiIGJvcmRlclJhZGl1cz17MH0gcGI9XCI0XCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtYj1cIjRcIj5cclxuICAgICAgICAgICAgICBJbnNjcml0b3MgZGEgc2VtYW5hXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPVwiYXJlYVwiIGhlaWdodD17MTYwfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHA9XCI4XCJcclxuICAgICAgICAgICAgYmc9XCJncmF5LjgwMFwiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MH1cclxuICAgICAgICAgICAgLy8gcGI9XCI0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPlxyXG4gICAgICAgICAgICAgIFRheGEgZGUgYWJlcnR1cmFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmxleCIsIlNpbXBsZUdyaWQiLCJCb3giLCJUZXh0IiwidGhlbWUiLCJkeW5hbWljIiwiSGVhZGVyIiwiU2lkZWJhciIsIkNoYXJ0Iiwic3NyIiwib3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlZCIsImZvcmVDb2xvciIsImNvbG9ycyIsImdyYXkiLCJncmlkIiwiZGF0YUxhYmVscyIsInRvb2x0aXAiLCJ4YXhpcyIsInR5cGUiLCJheGlzQm9yZGVyIiwiY29sb3IiLCJheGlzVGlja3MiLCJjYXRlZ29yaWVzIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJEYXNoQm9hcmQiXSwic291cmNlUm9vdCI6IiJ9