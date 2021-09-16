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
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      w: "100%",
      my: "6",
      maxW: 1400,
      mx: "auto",
      px: "6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
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
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmUxMTliYmQ0MjBkYzlmMWQ5ODJlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1RLEtBQUssR0FBR0gsbURBQU8sTUFBQztBQUFBLFNBQU0sK09BQU47QUFBQSxDQUFELEVBQW1DO0FBQ3RESSxFQUFBQSxHQUFHLEVBQUUsS0FEaUQ7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsb0NBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBckI7TUFBTUQ7QUFJTixJQUFNRSxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUU7QUFEQyxLQURKO0FBSUxDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxPQUFPLEVBQUU7QUFETCxLQUpEO0FBT0xDLElBQUFBLFNBQVMsRUFBRVosb0VBQUE7QUFQTixHQURPO0FBVWRlLEVBQUFBLElBQUksRUFBRTtBQUNKTixJQUFBQSxJQUFJLEVBQUU7QUFERixHQVZRO0FBYWRPLEVBQUFBLFVBQVUsRUFBRTtBQUNWTCxJQUFBQSxPQUFPLEVBQUU7QUFEQztBQWJFLENBQWhCO0FBaUJBLElBQU1NLE1BQU0sR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEdBQTFCO0FBQXpCLENBQUQsQ0FBZjtBQUVlLFNBQVNDLFNBQVQsR0FBcUI7QUFDbEMsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsS0FBQyxFQUFDLE9BQTNCO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0UsOERBQUMsa0RBQUQ7QUFBTSxPQUFDLEVBQUMsTUFBUjtBQUFlLFFBQUUsRUFBQyxHQUFsQjtBQUFzQixVQUFJLEVBQUUsSUFBNUI7QUFBa0MsUUFBRSxFQUFDLE1BQXJDO0FBQTRDLFFBQUUsRUFBQyxHQUEvQztBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFLDhEQUFDLHdEQUFEO0FBQVksWUFBSSxFQUFDLEdBQWpCO0FBQXFCLFdBQUcsRUFBQyxHQUF6QjtBQUE2QixxQkFBYSxFQUFDLE9BQTNDO0FBQW1ELGFBQUssRUFBQyxZQUF6RDtBQUFBLGdDQUNFLDhEQUFDLGlEQUFEO0FBQ0UsV0FBQyxFQUFDLEdBREo7QUFFRSxZQUFFLEVBQUMsVUFGTDtBQUdFLHNCQUFZLEVBQUUsQ0FIaEIsQ0FJRTtBQUpGO0FBQUEsa0NBTUUsOERBQUMsa0RBQUQ7QUFBTSxvQkFBUSxFQUFDLElBQWY7QUFBb0IsY0FBRSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBU0UsOERBQUMsS0FBRDtBQUFPLG1CQUFPLEVBQUVkLE9BQWhCO0FBQXlCLGtCQUFNLEVBQUVXLE1BQWpDO0FBQXlDLGdCQUFJLEVBQUMsTUFBOUM7QUFBcUQsa0JBQU0sRUFBRTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVlFLDhEQUFDLGlEQUFEO0FBQ0UsV0FBQyxFQUFDLEdBREo7QUFFRSxZQUFFLEVBQUMsVUFGTDtBQUdFLHNCQUFZLEVBQUUsQ0FIaEIsQ0FJRTtBQUpGO0FBQUEsaUNBTUUsOERBQUMsa0RBQUQ7QUFBTSxvQkFBUSxFQUFDLElBQWY7QUFBb0IsY0FBRSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDtNQWxDdUJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIFNpbXBsZUdyaWQsIEJveCwgVGV4dCwgdGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuXHJcbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBjaGFydDoge1xyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB6b29tOiB7XHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGZvcmVDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNTAwXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZGF0YUxhYmVsczoge1xyXG4gICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuY29uc3Qgc2VyaWVzID0gW3sgbmFtZTogJ3NlcmllczEnLCBkYXRhOiBbMzEsIDEyMCwgMTAsIDI4LCA1MSwgMTgsIDEwOV0gfV07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoQm9hcmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGg9XCIxMDB2aFwiPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8RmxleCB3PVwiMTAwJVwiIG15PVwiNlwiIG1heFc9ezE0MDB9IG14PVwiYXV0b1wiIHB4PVwiNlwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGZsZXg9XCIxXCIgZ2FwPVwiNFwiIG1pbkNoaWxkV2lkdGg9XCIzMjBweFwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBwPVwiOFwiXHJcbiAgICAgICAgICAgIGJnPVwiZ3JheS44MDBcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezB9XHJcbiAgICAgICAgICAgIC8vIHBiPVwiNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtYj1cIjRcIj5cclxuICAgICAgICAgICAgICBJbnNjcml0b3MgZGEgc2VtYW5hXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPVwiYXJlYVwiIGhlaWdodD17MTYwfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHA9XCI4XCJcclxuICAgICAgICAgICAgYmc9XCJncmF5LjgwMFwiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MH1cclxuICAgICAgICAgICAgLy8gcGI9XCI0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPlxyXG4gICAgICAgICAgICAgIFRheGEgZGUgYWJlcnR1cmFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmxleCIsIlNpbXBsZUdyaWQiLCJCb3giLCJUZXh0IiwidGhlbWUiLCJkeW5hbWljIiwiSGVhZGVyIiwiU2lkZWJhciIsIkNoYXJ0Iiwic3NyIiwib3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlZCIsImZvcmVDb2xvciIsImNvbG9ycyIsImdyYXkiLCJncmlkIiwiZGF0YUxhYmVscyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiRGFzaEJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==