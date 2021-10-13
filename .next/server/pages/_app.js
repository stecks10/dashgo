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
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query/devtools */ "react-query/devtools");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ "./src/contexts/SidebarDrawerContext.tsx");
/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mirage */ "./src/services/mirage/index.ts");
/* harmony import */ var _services_queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/queryClient */ "./src/services/queryClient.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










if (true) {
  (0,_services_mirage__WEBPACK_IMPORTED_MODULE_5__.makeServer)();
}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
    client: _services_queryClient__WEBPACK_IMPORTED_MODULE_6__.queryClient,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_4__.SidebarDrawerProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_2__.ReactQueryDevtools, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ "miragejs");
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(miragejs__WEBPACK_IMPORTED_MODULE_1__);


// User
// Address
// Active Model
// { name: "Diego", email:"email@teste.com", address: {"..."} }
function makeServer() {
  const server = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({
    serializers: {
      application: miragejs__WEBPACK_IMPORTED_MODULE_1__.ActiveModelSerializer
    },
    models: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({})
    },
    // gerar dados em massa
    factories: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({
        name() {
          return faker__WEBPACK_IMPORTED_MODULE_0___default().name.findName();
        },

        email() {
          return faker__WEBPACK_IMPORTED_MODULE_0___default().internet.email().toLowerCase();
        },

        createdAt() {
          return faker__WEBPACK_IMPORTED_MODULE_0___default().date.recent(10);
        }

      })
    },

    // criação de users fake
    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      // rota: '/api/users'
      this.namespace = 'api'; // delay de 750ms

      this.timing = 750; // CRUD

      this.get('/users', function (schema, request) {
        // page -> qual página estou exibindo no momento
        // per_page -> quantos registros vou exibir por página
        const {
          page = 1,
          per_page = 10
        } = request.queryParams; // total de registros (users)

        const total = schema.all('user').length; // exemplo para page = 3
        // pageStart = (3-1)*10 = 20
        // pageEnd = 20 + 10 = 30
        // na página 3 -> vou exibir os registros (users) de 20 - 30

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd); // 200 -> código HTTP: OK

        return new miragejs__WEBPACK_IMPORTED_MODULE_1__.Response(200, {
          'x-total-count': String(total)
        }, {
          users
        });
      });
      this.get('/users/:id');
      this.post('/users'); // resetar as rotas para default

      this.namespace = ''; // tenta fazer as requisições pelo mirage, se não der certo, "passe a diante"

      this.passthrough();
    }

  });
  return server;
}

/***/ }),

/***/ "./src/services/queryClient.ts":
/*!*************************************!*\
  !*** ./src/services/queryClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryClient": () => (/* binding */ queryClient)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);

const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();

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

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-query/devtools");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUQsNkRBQVcsQ0FBQztBQUMvQkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLElBQUksRUFBRTtBQUNKLGFBQU8sU0FESDtBQUVKLGFBQU8sU0FGSDtBQUdKLGFBQU8sU0FISDtBQUlKLGFBQU8sU0FKSDtBQUtKLGFBQU8sU0FMSDtBQU1KLGFBQU8sU0FOSDtBQU9KLGFBQU8sU0FQSDtBQVFKLGFBQU8sU0FSSDtBQVNKLGFBQU8sU0FUSDtBQVVKLFlBQU07QUFWRjtBQURBLEdBRHVCO0FBZS9CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLFFBREo7QUFFTEMsSUFBQUEsSUFBSSxFQUFFO0FBRkQsR0Fmd0I7QUFtQi9CQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05GLE1BQUFBLElBQUksRUFBRTtBQUNKRyxRQUFBQSxFQUFFLEVBQUUsVUFEQTtBQUVKQyxRQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURBO0FBREY7QUFuQnVCLENBQUQsQ0FBekI7Ozs7Ozs7Ozs7QUNGUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vZGFzaC5nby8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9kYXNoLmdvLy4vc3JjL3NlcnZpY2VzL21pcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9kYXNoLmdvLy4vc3JjL3NlcnZpY2VzL3F1ZXJ5Q2xpZW50LnRzIiwid2VicGFjazovL2Rhc2guZ28vLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovL2Rhc2guZ28vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcIm1pcmFnZWpzXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuO1xyXG5cclxuY29uc3QgU2lkZUJhckRyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRyYXdlclByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufTogU2lkZUJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBkaXNjbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzY2xvc3VyZS5vbkNsb3NlKCk7XHJcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGVCYXJEcmF3ZXJDb250ZXh0KTtcclxuIiwiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnO1xuXG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyLCBRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnO1xuaW1wb3J0IHsgbWFrZVNlcnZlciB9IGZyb20gJy4uL3NlcnZpY2VzL21pcmFnZSc7XG5pbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gJy4uL3NlcnZpY2VzL3F1ZXJ5Q2xpZW50JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIG1ha2VTZXJ2ZXIoKTtcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxTaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1NpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG5cbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHtcclxuICBBY3RpdmVNb2RlbFNlcmlhbGl6ZXIsXHJcbiAgY3JlYXRlU2VydmVyLFxyXG4gIEZhY3RvcnksXHJcbiAgTW9kZWwsXHJcbiAgUmVzcG9uc2UsXHJcbn0gZnJvbSAnbWlyYWdlanMnO1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxufTtcclxuXHJcbi8vIFVzZXJcclxuLy8gQWRkcmVzc1xyXG5cclxuLy8gQWN0aXZlIE1vZGVsXHJcbi8vIHsgbmFtZTogXCJEaWVnb1wiLCBlbWFpbDpcImVtYWlsQHRlc3RlLmNvbVwiLCBhZGRyZXNzOiB7XCIuLi5cIn0gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XHJcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcclxuICAgIHNlcmlhbGl6ZXJzOiB7XHJcbiAgICAgIGFwcGxpY2F0aW9uOiBBY3RpdmVNb2RlbFNlcmlhbGl6ZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIG1vZGVsczoge1xyXG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBnZXJhciBkYWRvcyBlbSBtYXNzYVxyXG4gICAgZmFjdG9yaWVzOiB7XHJcbiAgICAgIHVzZXI6IEZhY3RvcnkuZXh0ZW5kKHtcclxuICAgICAgICBuYW1lKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZha2VyLm5hbWUuZmluZE5hbWUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtYWlsKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZha2VyLmludGVybmV0LmVtYWlsKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWRBdCgpIHtcclxuICAgICAgICAgIHJldHVybiBmYWtlci5kYXRlLnJlY2VudCgxMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNyaWHDp8OjbyBkZSB1c2VycyBmYWtlXHJcbiAgICBzZWVkcyhzZXJ2ZXIpIHtcclxuICAgICAgc2VydmVyLmNyZWF0ZUxpc3QoJ3VzZXInLCAyMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICByb3V0ZXMoKSB7XHJcbiAgICAgIC8vIHJvdGE6ICcvYXBpL3VzZXJzJ1xyXG4gICAgICB0aGlzLm5hbWVzcGFjZSA9ICdhcGknO1xyXG5cclxuICAgICAgLy8gZGVsYXkgZGUgNzUwbXNcclxuICAgICAgdGhpcy50aW1pbmcgPSA3NTA7XHJcblxyXG4gICAgICAvLyBDUlVEXHJcbiAgICAgIHRoaXMuZ2V0KCcvdXNlcnMnLCBmdW5jdGlvbiAoc2NoZW1hLCByZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gcGFnZSAtPiBxdWFsIHDDoWdpbmEgZXN0b3UgZXhpYmluZG8gbm8gbW9tZW50b1xyXG4gICAgICAgIC8vIHBlcl9wYWdlIC0+IHF1YW50b3MgcmVnaXN0cm9zIHZvdSBleGliaXIgcG9yIHDDoWdpbmFcclxuICAgICAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJfcGFnZSA9IDEwIH0gPSByZXF1ZXN0LnF1ZXJ5UGFyYW1zO1xyXG5cclxuICAgICAgICAvLyB0b3RhbCBkZSByZWdpc3Ryb3MgKHVzZXJzKVxyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gc2NoZW1hLmFsbCgndXNlcicpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gZXhlbXBsbyBwYXJhIHBhZ2UgPSAzXHJcbiAgICAgICAgLy8gcGFnZVN0YXJ0ID0gKDMtMSkqMTAgPSAyMFxyXG4gICAgICAgIC8vIHBhZ2VFbmQgPSAyMCArIDEwID0gMzBcclxuICAgICAgICAvLyBuYSBww6FnaW5hIDMgLT4gdm91IGV4aWJpciBvcyByZWdpc3Ryb3MgKHVzZXJzKSBkZSAyMCAtIDMwXHJcbiAgICAgICAgY29uc3QgcGFnZVN0YXJ0ID0gKE51bWJlcihwYWdlKSAtIDEpICogTnVtYmVyKHBlcl9wYWdlKTtcclxuICAgICAgICBjb25zdCBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgTnVtYmVyKHBlcl9wYWdlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnNlcmlhbGl6ZShzY2hlbWEuYWxsKCd1c2VyJykpLnVzZXJzLnNsaWNlKFxyXG4gICAgICAgICAgcGFnZVN0YXJ0LFxyXG4gICAgICAgICAgcGFnZUVuZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIDIwMCAtPiBjw7NkaWdvIEhUVFA6IE9LXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZSgyMDAsIHsgJ3gtdG90YWwtY291bnQnOiBTdHJpbmcodG90YWwpIH0sIHsgdXNlcnMgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5nZXQoJy91c2Vycy86aWQnKTtcclxuICAgICAgdGhpcy5wb3N0KCcvdXNlcnMnKTtcclxuXHJcbiAgICAgIC8vIHJlc2V0YXIgYXMgcm90YXMgcGFyYSBkZWZhdWx0XHJcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gJyc7XHJcblxyXG4gICAgICAvLyB0ZW50YSBmYXplciBhcyByZXF1aXNpw6fDtWVzIHBlbG8gbWlyYWdlLCBzZSBuw6NvIGRlciBjZXJ0bywgXCJwYXNzZSBhIGRpYW50ZVwiXHJcbiAgICAgIHRoaXMucGFzc3Rocm91Z2goKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzZXJ2ZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuIiwiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICBjb2xvcnM6IHtcclxuICAgIGdyYXk6IHtcclxuICAgICAgJzkwMCc6ICcjMTgxQjIzJyxcclxuICAgICAgJzgwMCc6ICcjMUYyMDI5JyxcclxuICAgICAgJzcwMCc6ICcjMzUzNjQ2JyxcclxuICAgICAgJzYwMCc6ICcjNEI0RDYzJyxcclxuICAgICAgJzUwMCc6ICcjNjE2NDgwJyxcclxuICAgICAgJzQwMCc6ICcjNzk3RDlBJyxcclxuICAgICAgJzMwMCc6ICcjOTY5OUIwJyxcclxuICAgICAgJzIwMCc6ICcjQjNCNUM2JyxcclxuICAgICAgJzEwMCc6ICcjRDFEMkRDJyxcclxuICAgICAgJzUwJzogJyNFRUVFRjInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBoZWFkaW5nOiAnUm9ib3RvJyxcclxuICAgIGJvZHk6ICdSb2JvdG8nLFxyXG4gIH0sXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIGJnOiAnZ3JheS45MDAnLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JheS41MCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1pcmFnZWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlRGlzY2xvc3VyZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiU2lkZUJhckRyYXdlckNvbnRleHQiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc2Nsb3N1cmUiLCJyb3V0ZXIiLCJvbkNsb3NlIiwiYXNQYXRoIiwidXNlU2lkZWJhckRyYXdlciIsIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwibWFrZVNlcnZlciIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJmYWtlciIsIkFjdGl2ZU1vZGVsU2VyaWFsaXplciIsImNyZWF0ZVNlcnZlciIsIkZhY3RvcnkiLCJNb2RlbCIsIlJlc3BvbnNlIiwic2VydmVyIiwic2VyaWFsaXplcnMiLCJhcHBsaWNhdGlvbiIsIm1vZGVscyIsInVzZXIiLCJleHRlbmQiLCJmYWN0b3JpZXMiLCJuYW1lIiwiZmluZE5hbWUiLCJlbWFpbCIsImludGVybmV0IiwidG9Mb3dlckNhc2UiLCJjcmVhdGVkQXQiLCJkYXRlIiwicmVjZW50Iiwic2VlZHMiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0Iiwic2NoZW1hIiwicmVxdWVzdCIsInBhZ2UiLCJwZXJfcGFnZSIsInF1ZXJ5UGFyYW1zIiwidG90YWwiLCJhbGwiLCJsZW5ndGgiLCJwYWdlU3RhcnQiLCJOdW1iZXIiLCJwYWdlRW5kIiwidXNlcnMiLCJzZXJpYWxpemUiLCJzbGljZSIsIlN0cmluZyIsInBvc3QiLCJwYXNzdGhyb3VnaCIsIlF1ZXJ5Q2xpZW50IiwiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJncmF5IiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsInN0eWxlcyIsImdsb2JhbCIsImJnIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9