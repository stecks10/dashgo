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
/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mirage */ "./src/services/mirage/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







if (true) {
  (0,_services_mirage__WEBPACK_IMPORTED_MODULE_3__.makeServer)();
}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_2__.SidebarDrawerProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeServer": () => (/* binding */ makeServer)
/* harmony export */ });
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ "miragejs");
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(miragejs__WEBPACK_IMPORTED_MODULE_0__);

function makeServer() {
  const server = (0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({
    models: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({})
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/users');
      this.post('/users');
      this.namespace = '';
      this.passthrough();
    }

  });
  return server;
}

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

/***/ "miragejs":
/*!***************************!*\
  !*** external "miragejs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("miragejs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2guZ28vLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4Iiwid2VicGFjazovL2Rhc2guZ28vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9zZXJ2aWNlcy9taXJhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwibWlyYWdlanNcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSwgVXNlRGlzY2xvc3VyZVJldHVybiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW50ZXJmYWNlIFNpZGVCYXJEcmF3ZXJQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSA9IFVzZURpc2Nsb3N1cmVSZXR1cm47XHJcblxyXG5jb25zdCBTaWRlQmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyRHJhd2VyUHJvdmlkZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IGRpc2Nsb3N1cmUgPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNjbG9zdXJlLm9uQ2xvc2UoKTtcclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVCYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNjbG9zdXJlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhckRyYXdlciA9ICgpID0+IHVzZUNvbnRleHQoU2lkZUJhckRyYXdlckNvbnRleHQpO1xyXG4iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmltcG9ydCB7IFNpZGViYXJEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0JztcbmltcG9ydCB7IG1ha2VTZXJ2ZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9taXJhZ2UnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgbWFrZVNlcnZlcigpO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1NpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IGNyZWF0ZVNlcnZlciwgTW9kZWwgfSBmcm9tICdtaXJhZ2Vqcyc7XHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XHJcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcclxuICAgIG1vZGVsczoge1xyXG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pLFxyXG4gICAgfSxcclxuXHJcbiAgICByb3V0ZXMoKSB7XHJcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2FwaSc7XHJcbiAgICAgIHRoaXMudGltaW5nID0gNzUwO1xyXG5cclxuICAgICAgdGhpcy5nZXQoJy91c2VycycpO1xyXG4gICAgICB0aGlzLnBvc3QoJy91c2VycycpO1xyXG5cclxuICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnJztcclxuICAgICAgdGhpcy5wYXNzdGhyb3VnaCgpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNlcnZlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGNvbG9yczoge1xyXG4gICAgZ3JheToge1xyXG4gICAgICAnOTAwJzogJyMxODFCMjMnLFxyXG4gICAgICAnODAwJzogJyMxRjIwMjknLFxyXG4gICAgICAnNzAwJzogJyMzNTM2NDYnLFxyXG4gICAgICAnNjAwJzogJyM0QjRENjMnLFxyXG4gICAgICAnNTAwJzogJyM2MTY0ODAnLFxyXG4gICAgICAnNDAwJzogJyM3OTdEOUEnLFxyXG4gICAgICAnMzAwJzogJyM5Njk5QjAnLFxyXG4gICAgICAnMjAwJzogJyNCM0I1QzYnLFxyXG4gICAgICAnMTAwJzogJyNEMUQyREMnLFxyXG4gICAgICAnNTAnOiAnI0VFRUVGMicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9udHM6IHtcclxuICAgIGhlYWRpbmc6ICdSb2JvdG8nLFxyXG4gICAgYm9keTogJ1JvYm90bycsXHJcbiAgfSxcclxuICBzdHlsZXM6IHtcclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgYmc6ICdncmF5LjkwMCcsXHJcbiAgICAgICAgY29sb3I6ICdncmF5LjUwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWlyYWdlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTaWRlQmFyRHJhd2VyQ29udGV4dCIsIlNpZGViYXJEcmF3ZXJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzY2xvc3VyZSIsInJvdXRlciIsIm9uQ2xvc2UiLCJhc1BhdGgiLCJ1c2VTaWRlYmFyRHJhd2VyIiwiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIm1ha2VTZXJ2ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZVNlcnZlciIsIk1vZGVsIiwic2VydmVyIiwibW9kZWxzIiwidXNlciIsImV4dGVuZCIsInJvdXRlcyIsIm5hbWVzcGFjZSIsInRpbWluZyIsImdldCIsInBvc3QiLCJwYXNzdGhyb3VnaCIsImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiZ3JheSIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJiZyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==