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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









if (true) {
  (0,_services_mirage__WEBPACK_IMPORTED_MODULE_5__.makeServer)();
}

const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
    client: queryClient,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_4__.SidebarDrawerProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_2__.ReactQueryDevtools, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
      server.createList('user', 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0osYUFBTyxTQURIO0FBRUosYUFBTyxTQUZIO0FBR0osYUFBTyxTQUhIO0FBSUosYUFBTyxTQUpIO0FBS0osYUFBTyxTQUxIO0FBTUosYUFBTyxTQU5IO0FBT0osYUFBTyxTQVBIO0FBUUosYUFBTyxTQVJIO0FBU0osYUFBTyxTQVRIO0FBVUosWUFBTTtBQVZGO0FBREEsR0FEdUI7QUFlL0JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsUUFESjtBQUVMQyxJQUFBQSxJQUFJLEVBQUU7QUFGRCxHQWZ3QjtBQW1CL0JDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkYsTUFBQUEsSUFBSSxFQUFFO0FBQ0pHLFFBQUFBLEVBQUUsRUFBRSxVQURBO0FBRUpDLFFBQUFBLEtBQUssRUFBRTtBQUZIO0FBREE7QUFERjtBQW5CdUIsQ0FBRCxDQUF6Qjs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoLmdvLy4vc3JjL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9kYXNoLmdvLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2Rhc2guZ28vLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzIiwid2VicGFjazovL2Rhc2guZ28vLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovL2Rhc2guZ28vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcIm1pcmFnZWpzXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIiLCJ3ZWJwYWNrOi8vZGFzaC5nby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBTaWRlQmFyRHJhd2VyUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuO1xyXG5cclxuY29uc3QgU2lkZUJhckRyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRyYXdlclByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufTogU2lkZUJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBkaXNjbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzY2xvc3VyZS5vbkNsb3NlKCk7XHJcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlQmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU2lkZUJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGVCYXJEcmF3ZXJDb250ZXh0KTtcclxuIiwiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnO1xuXG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyLCBRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnO1xuaW1wb3J0IHsgbWFrZVNlcnZlciB9IGZyb20gJy4uL3NlcnZpY2VzL21pcmFnZSc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBtYWtlU2VydmVyKCk7XG59XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuXG4gICAgICA8UmVhY3RRdWVyeURldnRvb2xzIC8+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCB7XHJcbiAgQWN0aXZlTW9kZWxTZXJpYWxpemVyLFxyXG4gIGNyZWF0ZVNlcnZlcixcclxuICBGYWN0b3J5LFxyXG4gIE1vZGVsLFxyXG4gIFJlc3BvbnNlLFxyXG59IGZyb20gJ21pcmFnZWpzJztcclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBjcmVhdGVkX2F0OiBzdHJpbmc7XHJcbn07XHJcblxyXG4vLyBVc2VyXHJcbi8vIEFkZHJlc3NcclxuXHJcbi8vIEFjdGl2ZSBNb2RlbFxyXG4vLyB7IG5hbWU6IFwiRGllZ29cIiwgZW1haWw6XCJlbWFpbEB0ZXN0ZS5jb21cIiwgYWRkcmVzczoge1wiLi4uXCJ9IH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2VydmVyKCkge1xyXG4gIGNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcih7XHJcbiAgICBzZXJpYWxpemVyczoge1xyXG4gICAgICBhcHBsaWNhdGlvbjogQWN0aXZlTW9kZWxTZXJpYWxpemVyLFxyXG4gICAgfSxcclxuXHJcbiAgICBtb2RlbHM6IHtcclxuICAgICAgdXNlcjogTW9kZWwuZXh0ZW5kPFBhcnRpYWw8VXNlcj4+KHt9KSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZ2VyYXIgZGFkb3MgZW0gbWFzc2FcclxuICAgIGZhY3Rvcmllczoge1xyXG4gICAgICB1c2VyOiBGYWN0b3J5LmV4dGVuZCh7XHJcbiAgICAgICAgbmFtZSgpIHtcclxuICAgICAgICAgIHJldHVybiBmYWtlci5uYW1lLmZpbmROYW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbCgpIHtcclxuICAgICAgICAgIHJldHVybiBmYWtlci5pbnRlcm5ldC5lbWFpbCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkQXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFrZXIuZGF0ZS5yZWNlbnQoMTApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjcmlhw6fDo28gZGUgdXNlcnMgZmFrZVxyXG4gICAgc2VlZHMoc2VydmVyKSB7XHJcbiAgICAgIHNlcnZlci5jcmVhdGVMaXN0KCd1c2VyJywgMTAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgcm91dGVzKCkge1xyXG4gICAgICAvLyByb3RhOiAnL2FwaS91c2VycydcclxuICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnYXBpJztcclxuXHJcbiAgICAgIC8vIGRlbGF5IGRlIDc1MG1zXHJcbiAgICAgIHRoaXMudGltaW5nID0gNzUwO1xyXG5cclxuICAgICAgLy8gQ1JVRFxyXG4gICAgICB0aGlzLmdldCgnL3VzZXJzJywgZnVuY3Rpb24gKHNjaGVtYSwgcmVxdWVzdCkge1xyXG4gICAgICAgIC8vIHBhZ2UgLT4gcXVhbCBww6FnaW5hIGVzdG91IGV4aWJpbmRvIG5vIG1vbWVudG9cclxuICAgICAgICAvLyBwZXJfcGFnZSAtPiBxdWFudG9zIHJlZ2lzdHJvcyB2b3UgZXhpYmlyIHBvciBww6FnaW5hXHJcbiAgICAgICAgY29uc3QgeyBwYWdlID0gMSwgcGVyX3BhZ2UgPSAxMCB9ID0gcmVxdWVzdC5xdWVyeVBhcmFtcztcclxuXHJcbiAgICAgICAgLy8gdG90YWwgZGUgcmVnaXN0cm9zICh1c2VycylcclxuICAgICAgICBjb25zdCB0b3RhbCA9IHNjaGVtYS5hbGwoJ3VzZXInKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vIGV4ZW1wbG8gcGFyYSBwYWdlID0gM1xyXG4gICAgICAgIC8vIHBhZ2VTdGFydCA9ICgzLTEpKjEwID0gMjBcclxuICAgICAgICAvLyBwYWdlRW5kID0gMjAgKyAxMCA9IDMwXHJcbiAgICAgICAgLy8gbmEgcMOhZ2luYSAzIC0+IHZvdSBleGliaXIgb3MgcmVnaXN0cm9zICh1c2VycykgZGUgMjAgLSAzMFxyXG4gICAgICAgIGNvbnN0IHBhZ2VTdGFydCA9IChOdW1iZXIocGFnZSkgLSAxKSAqIE51bWJlcihwZXJfcGFnZSk7XHJcbiAgICAgICAgY29uc3QgcGFnZUVuZCA9IHBhZ2VTdGFydCArIE51bWJlcihwZXJfcGFnZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zZXJpYWxpemUoc2NoZW1hLmFsbCgndXNlcicpKS51c2Vycy5zbGljZShcclxuICAgICAgICAgIHBhZ2VTdGFydCxcclxuICAgICAgICAgIHBhZ2VFbmRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyAyMDAgLT4gY8OzZGlnbyBIVFRQOiBPS1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoMjAwLCB7ICd4LXRvdGFsLWNvdW50JzogU3RyaW5nKHRvdGFsKSB9LCB7IHVzZXJzIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZ2V0KCcvdXNlcnMvOmlkJyk7XHJcbiAgICAgIHRoaXMucG9zdCgnL3VzZXJzJyk7XHJcblxyXG4gICAgICAvLyByZXNldGFyIGFzIHJvdGFzIHBhcmEgZGVmYXVsdFxyXG4gICAgICB0aGlzLm5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgLy8gdGVudGEgZmF6ZXIgYXMgcmVxdWlzacOnw7VlcyBwZWxvIG1pcmFnZSwgc2UgbsOjbyBkZXIgY2VydG8sIFwicGFzc2UgYSBkaWFudGVcIlxyXG4gICAgICB0aGlzLnBhc3N0aHJvdWdoKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc2VydmVyO1xyXG59XHJcbiIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBncmF5OiB7XHJcbiAgICAgICc5MDAnOiAnIzE4MUIyMycsXHJcbiAgICAgICc4MDAnOiAnIzFGMjAyOScsXHJcbiAgICAgICc3MDAnOiAnIzM1MzY0NicsXHJcbiAgICAgICc2MDAnOiAnIzRCNEQ2MycsXHJcbiAgICAgICc1MDAnOiAnIzYxNjQ4MCcsXHJcbiAgICAgICc0MDAnOiAnIzc5N0Q5QScsXHJcbiAgICAgICczMDAnOiAnIzk2OTlCMCcsXHJcbiAgICAgICcyMDAnOiAnI0IzQjVDNicsXHJcbiAgICAgICcxMDAnOiAnI0QxRDJEQycsXHJcbiAgICAgICc1MCc6ICcjRUVFRUYyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb250czoge1xyXG4gICAgaGVhZGluZzogJ1JvYm90bycsXHJcbiAgICBib2R5OiAnUm9ib3RvJyxcclxuICB9LFxyXG4gIHN0eWxlczoge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBiZzogJ2dyYXkuOTAwJyxcclxuICAgICAgICBjb2xvcjogJ2dyYXkuNTAnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXJhZ2Vqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNpZGVCYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwicm91dGVyIiwib25DbG9zZSIsImFzUGF0aCIsInVzZVNpZGViYXJEcmF3ZXIiLCJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwiUmVhY3RRdWVyeURldnRvb2xzIiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlF1ZXJ5Q2xpZW50IiwibWFrZVNlcnZlciIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJmYWtlciIsIkFjdGl2ZU1vZGVsU2VyaWFsaXplciIsImNyZWF0ZVNlcnZlciIsIkZhY3RvcnkiLCJNb2RlbCIsIlJlc3BvbnNlIiwic2VydmVyIiwic2VyaWFsaXplcnMiLCJhcHBsaWNhdGlvbiIsIm1vZGVscyIsInVzZXIiLCJleHRlbmQiLCJmYWN0b3JpZXMiLCJuYW1lIiwiZmluZE5hbWUiLCJlbWFpbCIsImludGVybmV0IiwidG9Mb3dlckNhc2UiLCJjcmVhdGVkQXQiLCJkYXRlIiwicmVjZW50Iiwic2VlZHMiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0Iiwic2NoZW1hIiwicmVxdWVzdCIsInBhZ2UiLCJwZXJfcGFnZSIsInF1ZXJ5UGFyYW1zIiwidG90YWwiLCJhbGwiLCJsZW5ndGgiLCJwYWdlU3RhcnQiLCJOdW1iZXIiLCJwYWdlRW5kIiwidXNlcnMiLCJzZXJpYWxpemUiLCJzbGljZSIsIlN0cmluZyIsInBvc3QiLCJwYXNzdGhyb3VnaCIsImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiZ3JheSIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJiZyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==