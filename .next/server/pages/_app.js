"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDrawerProvider": () => (/* binding */ SidebarDrawerProvider),
/* harmony export */   "useSidebarDrawer": () => (/* binding */ useSidebarDrawer)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\contexts\\SidebarDrawerContext.tsx";




const SideBarDrawerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function SidebarDrawerProvider({
  children
}) {
  const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useDisclosure)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SideBarDrawerContext.Provider, {
    value: disclosure,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
const useSidebarDrawer = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SideBarDrawerContext);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ "./src/contexts/SidebarDrawerContext.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_2__.SidebarDrawerProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
});

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUssb0JBQW9CLGdCQUFHSixvREFBYSxDQUFDLEVBQUQsQ0FBMUM7QUFFTyxTQUFTSyxxQkFBVCxDQUErQjtBQUNwQ0MsRUFBQUE7QUFEb0MsQ0FBL0IsRUFFd0I7QUFDN0IsUUFBTUMsVUFBVSxHQUFHUiwrREFBYSxFQUFoQztBQUNBLFFBQU1TLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RLLElBQUFBLFVBQVUsQ0FBQ0UsT0FBWDtBQUNELEdBRlEsRUFFTixDQUFDRCxNQUFNLENBQUNFLE1BQVIsQ0FGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsb0JBQUQsQ0FBc0IsUUFBdEI7QUFBK0IsU0FBSyxFQUFFSCxVQUF0QztBQUFBLGNBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7QUFFTSxNQUFNSyxnQkFBZ0IsR0FBRyxNQUFNVixpREFBVSxDQUFDRyxvQkFBRCxDQUF6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCUDtBQUNBO0FBRUE7OztBQUVBLFNBQVNVLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSw4REFBQyw0REFBRDtBQUFnQixTQUFLLEVBQUVILGdEQUF2QjtBQUFBLDJCQUNFLDhEQUFDLGlGQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRU8sTUFBTUQsS0FBSyxHQUFHSSw2REFBVyxDQUFDO0FBQy9CQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0osYUFBTyxTQURIO0FBRUosYUFBTyxTQUZIO0FBR0osYUFBTyxTQUhIO0FBSUosYUFBTyxTQUpIO0FBS0osYUFBTyxTQUxIO0FBTUosYUFBTyxTQU5IO0FBT0osYUFBTyxTQVBIO0FBUUosYUFBTyxTQVJIO0FBU0osYUFBTyxTQVRIO0FBVUosWUFBTTtBQVZGO0FBREEsR0FEdUI7QUFlL0JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsUUFESjtBQUVMQyxJQUFBQSxJQUFJLEVBQUU7QUFGRCxHQWZ3QjtBQW1CL0JDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkYsTUFBQUEsSUFBSSxFQUFFO0FBQ0pHLFFBQUFBLEVBQUUsRUFBRSxVQURBO0FBRUpDLFFBQUFBLEtBQUssRUFBRTtBQUZIO0FBREE7QUFERjtBQW5CdUIsQ0FBRCxDQUF6Qjs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9kYXNoLmdvLy4vc3JjL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL2Rhc2guZ28vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Rhc2guZ28vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rhc2guZ28vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNjbG9zdXJlLCBVc2VEaXNjbG9zdXJlUmV0dXJuIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgU2lkZUJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbnR5cGUgU2lkZWJhckRyYXdlckNvbnRleHREYXRhID0gVXNlRGlzY2xvc3VyZVJldHVybjtcclxuXHJcbmNvbnN0IFNpZGVCYXJEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJEcmF3ZXJQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IFNpZGVCYXJEcmF3ZXJQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgZGlzY2xvc3VyZSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc2Nsb3N1cmUub25DbG9zZSgpO1xyXG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc2Nsb3N1cmV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NpZGVCYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTaWRlYmFyRHJhd2VyID0gKCkgPT4gdXNlQ29udGV4dChTaWRlQmFyRHJhd2VyQ29udGV4dCk7XHJcbiIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcblxuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1NpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBncmF5OiB7XHJcbiAgICAgICc5MDAnOiAnIzE4MUIyMycsXHJcbiAgICAgICc4MDAnOiAnIzFGMjAyOScsXHJcbiAgICAgICc3MDAnOiAnIzM1MzY0NicsXHJcbiAgICAgICc2MDAnOiAnIzRCNEQ2MycsXHJcbiAgICAgICc1MDAnOiAnIzYxNjQ4MCcsXHJcbiAgICAgICc0MDAnOiAnIzc5N0Q5QScsXHJcbiAgICAgICczMDAnOiAnIzk2OTlCMCcsXHJcbiAgICAgICcyMDAnOiAnI0IzQjVDNicsXHJcbiAgICAgICcxMDAnOiAnI0QxRDJEQycsXHJcbiAgICAgICc1MCc6ICcjRUVFRUYyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb250czoge1xyXG4gICAgaGVhZGluZzogJ1JvYm90bycsXHJcbiAgICBib2R5OiAnUm9ib3RvJyxcclxuICB9LFxyXG4gIHN0eWxlczoge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBiZzogJ2dyYXkuOTAwJyxcclxuICAgICAgICBjb2xvcjogJ2dyYXkuNTAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNpZGVCYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwicm91dGVyIiwib25DbG9zZSIsImFzUGF0aCIsInVzZVNpZGViYXJEcmF3ZXIiLCJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJleHRlbmRUaGVtZSIsImNvbG9ycyIsImdyYXkiLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=