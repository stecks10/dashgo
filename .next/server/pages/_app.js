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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ "./src/contexts/SidebarDrawerContext.tsx");
/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mirage */ "./src/services/mirage/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








if (true) {
  (0,_services_mirage__WEBPACK_IMPORTED_MODULE_4__.makeServer)();
}

const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);


function makeServer() {
  const server = (0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({
    models: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({})
    },
    factories: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Factory.extend({
        name(i) {
          return `User ${i + 1}`;
        },

        email() {
          return faker__WEBPACK_IMPORTED_MODULE_1___default().internet.email().toLocaleLowerCase;
        },

        createdAt() {
          return faker__WEBPACK_IMPORTED_MODULE_1___default().date.recent(10);
        }

      })
    },

    seeds(server) {
      server.createList('user', 200);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/***/ ((module) => {

module.exports = require("faker");

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

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTVosS0FBSyxHQUFHaUMsNkRBQVcsQ0FBQztBQUMvQkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLElBQUksRUFBRTtBQUNKLGFBQU8sU0FESDtBQUVKLGFBQU8sU0FGSDtBQUdKLGFBQU8sU0FISDtBQUlKLGFBQU8sU0FKSDtBQUtKLGFBQU8sU0FMSDtBQU1KLGFBQU8sU0FOSDtBQU9KLGFBQU8sU0FQSDtBQVFKLGFBQU8sU0FSSDtBQVNKLGFBQU8sU0FUSDtBQVVKLFlBQU07QUFWRjtBQURBLEdBRHVCO0FBZS9CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLFFBREo7QUFFTEMsSUFBQUEsSUFBSSxFQUFFO0FBRkQsR0Fmd0I7QUFtQi9CQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05GLE1BQUFBLElBQUksRUFBRTtBQUNKRyxRQUFBQSxFQUFFLEVBQUUsVUFEQTtBQUVKQyxRQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURBO0FBREY7QUFuQnVCLENBQUQsQ0FBekI7Ozs7Ozs7Ozs7QUNGUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2guZ28vLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4Iiwid2VicGFjazovL2Rhc2guZ28vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9zZXJ2aWNlcy9taXJhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwibWlyYWdlanNcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwicmVhY3QtcXVlcnlcIiIsIndlYnBhY2s6Ly9kYXNoLmdvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSwgVXNlRGlzY2xvc3VyZVJldHVybiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW50ZXJmYWNlIFNpZGVCYXJEcmF3ZXJQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSA9IFVzZURpc2Nsb3N1cmVSZXR1cm47XHJcblxyXG5jb25zdCBTaWRlQmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyRHJhd2VyUHJvdmlkZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IGRpc2Nsb3N1cmUgPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNjbG9zdXJlLm9uQ2xvc2UoKTtcclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVCYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNjbG9zdXJlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhckRyYXdlciA9ICgpID0+IHVzZUNvbnRleHQoU2lkZUJhckRyYXdlckNvbnRleHQpO1xyXG4iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmltcG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIFF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG5pbXBvcnQgeyBTaWRlYmFyRHJhd2VyUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dCc7XG5pbXBvcnQgeyBtYWtlU2VydmVyIH0gZnJvbSAnLi4vc2VydmljZXMvbWlyYWdlJztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIG1ha2VTZXJ2ZXIoKTtcbn1cblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxTaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1NpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IGNyZWF0ZVNlcnZlciwgRmFjdG9yeSwgTW9kZWwgfSBmcm9tICdtaXJhZ2Vqcyc7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XHJcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcclxuICAgIG1vZGVsczoge1xyXG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pLFxyXG4gICAgfSxcclxuXHJcbiAgICBmYWN0b3JpZXM6IHtcclxuICAgICAgdXNlcjogRmFjdG9yeS5leHRlbmQoe1xyXG4gICAgICAgIG5hbWUoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gYFVzZXIgJHtpICsgMX1gO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWwoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFrZXIuaW50ZXJuZXQuZW1haWwoKS50b0xvY2FsZUxvd2VyQ2FzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWRBdCgpIHtcclxuICAgICAgICAgIHJldHVybiBmYWtlci5kYXRlLnJlY2VudCgxMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG5cclxuICAgIHNlZWRzKHNlcnZlcikge1xyXG4gICAgICBzZXJ2ZXIuY3JlYXRlTGlzdCgndXNlcicsIDIwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJvdXRlcygpIHtcclxuICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnYXBpJztcclxuICAgICAgdGhpcy50aW1pbmcgPSA3NTA7XHJcblxyXG4gICAgICB0aGlzLmdldCgnL3VzZXJzJyk7XHJcbiAgICAgIHRoaXMucG9zdCgnL3VzZXJzJyk7XHJcblxyXG4gICAgICB0aGlzLm5hbWVzcGFjZSA9ICcnO1xyXG4gICAgICB0aGlzLnBhc3N0aHJvdWdoKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc2VydmVyO1xyXG59XHJcbiIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBncmF5OiB7XHJcbiAgICAgICc5MDAnOiAnIzE4MUIyMycsXHJcbiAgICAgICc4MDAnOiAnIzFGMjAyOScsXHJcbiAgICAgICc3MDAnOiAnIzM1MzY0NicsXHJcbiAgICAgICc2MDAnOiAnIzRCNEQ2MycsXHJcbiAgICAgICc1MDAnOiAnIzYxNjQ4MCcsXHJcbiAgICAgICc0MDAnOiAnIzc5N0Q5QScsXHJcbiAgICAgICczMDAnOiAnIzk2OTlCMCcsXHJcbiAgICAgICcyMDAnOiAnI0IzQjVDNicsXHJcbiAgICAgICcxMDAnOiAnI0QxRDJEQycsXHJcbiAgICAgICc1MCc6ICcjRUVFRUYyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb250czoge1xyXG4gICAgaGVhZGluZzogJ1JvYm90bycsXHJcbiAgICBib2R5OiAnUm9ib3RvJyxcclxuICB9LFxyXG4gIHN0eWxlczoge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBiZzogJ2dyYXkuOTAwJyxcclxuICAgICAgICBjb2xvcjogJ2dyYXkuNTAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXJhZ2Vqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNpZGVCYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwicm91dGVyIiwib25DbG9zZSIsImFzUGF0aCIsInVzZVNpZGViYXJEcmF3ZXIiLCJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlF1ZXJ5Q2xpZW50IiwibWFrZVNlcnZlciIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjcmVhdGVTZXJ2ZXIiLCJGYWN0b3J5IiwiTW9kZWwiLCJmYWtlciIsInNlcnZlciIsIm1vZGVscyIsInVzZXIiLCJleHRlbmQiLCJmYWN0b3JpZXMiLCJuYW1lIiwiaSIsImVtYWlsIiwiaW50ZXJuZXQiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImNyZWF0ZWRBdCIsImRhdGUiLCJyZWNlbnQiLCJzZWVkcyIsImNyZWF0ZUxpc3QiLCJyb3V0ZXMiLCJuYW1lc3BhY2UiLCJ0aW1pbmciLCJnZXQiLCJwb3N0IiwicGFzc3Rocm91Z2giLCJleHRlbmRUaGVtZSIsImNvbG9ycyIsImdyYXkiLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=