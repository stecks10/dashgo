"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Sidebar/SidebarNav.tsx":
/*!***********************************************!*\
  !*** ./src/components/Sidebar/SidebarNav.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarNav": function() { return /* binding */ SidebarNav; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink */ "./src/components/Sidebar/NavLink.tsx");
/* harmony import */ var _NavSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavSection */ "./src/components/Sidebar/NavSection.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Sidebar\\SidebarNav.tsx";





function SidebarNav() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    spacing: "12",
    align: "flex-start",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_NavSection__WEBPACK_IMPORTED_MODULE_1__.NavSection, {
      title: "Geral",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiDashboardLine,
        children: "Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiContactsLine,
        children: "Usu\xE1rios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_NavSection__WEBPACK_IMPORTED_MODULE_1__.NavSection, {
      title: "AUTOMA\xC7\xC3O",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiGitMergeLine,
        children: "Formul\xE1rios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiInputMethodLine,
        children: "Automa\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = SidebarNav;

var _c;

$RefreshReg$(_c, "SidebarNav");

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


/***/ }),

/***/ "./src/components/Sidebar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Sidebar/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarNav */ "./src/components/Sidebar/SidebarNav.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\components\\Sidebar\\index.tsx";



function Sidebar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    as: "aside",
    w: "64",
    mr: "8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SidebarNav__WEBPACK_IMPORTED_MODULE_0__.SidebarNav, {}, void 0, false, {
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
_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjZlYzVjNmVjMzI3OTk1MzM3ZWVkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7O0FBRU8sU0FBU08sVUFBVCxHQUFzQjtBQUMzQixzQkFDRSw4REFBQyxtREFBRDtBQUFPLFdBQU8sRUFBQyxJQUFmO0FBQW9CLFNBQUssRUFBQyxZQUExQjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQVksV0FBSyxFQUFDLE9BQWxCO0FBQUEsOEJBQ0UsOERBQUMsNkNBQUQ7QUFBUyxZQUFJLEVBQUVMLDJEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFTLFlBQUksRUFBRUQsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLDhEQUFDLG1EQUFEO0FBQVksV0FBSyxFQUFDLGlCQUFsQjtBQUFBLDhCQUNFLDhEQUFDLDZDQUFEO0FBQVMsWUFBSSxFQUFFRSwwREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBUyxZQUFJLEVBQUVDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtLQWRlRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWaEI7QUFTQTs7QUFFTyxTQUFTRSxPQUFULEdBQW1CO0FBQ3hCLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsS0FBQyxFQUFDLElBQWxCO0FBQXVCLE1BQUUsRUFBQyxHQUExQjtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtLQU5lQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJOYXYudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFJpQ29udGFjdHNMaW5lLFxyXG4gIFJpRGFzaGJvYXJkTGluZSxcclxuICBSaUdpdE1lcmdlTGluZSxcclxuICBSaUlucHV0TWV0aG9kTGluZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICcuL05hdkxpbmsnO1xyXG5pbXBvcnQgeyBOYXZTZWN0aW9uIH0gZnJvbSAnLi9OYXZTZWN0aW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyTmF2KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz1cIjEyXCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgIDxOYXZTZWN0aW9uIHRpdGxlPVwiR2VyYWxcIj5cclxuICAgICAgICA8TmF2TGluayBpY29uPXtSaURhc2hib2FyZExpbmV9PkRhc2hib2FyZDwvTmF2TGluaz5cclxuICAgICAgICA8TmF2TGluayBpY29uPXtSaUNvbnRhY3RzTGluZX0+VXN1w6FyaW9zPC9OYXZMaW5rPlxyXG4gICAgICA8L05hdlNlY3Rpb24+XHJcblxyXG4gICAgICA8TmF2U2VjdGlvbiB0aXRsZT1cIkFVVE9NQcOHw4NPXCI+XHJcbiAgICAgICAgPE5hdkxpbmsgaWNvbj17UmlHaXRNZXJnZUxpbmV9PkZvcm11bMOhcmlvczwvTmF2TGluaz5cclxuICAgICAgICA8TmF2TGluayBpY29uPXtSaUlucHV0TWV0aG9kTGluZX0+QXV0b21hw6fDo288L05hdkxpbms+XHJcbiAgICAgIDwvTmF2U2VjdGlvbj5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCb3gsIFN0YWNrLCBUZXh0LCBMaW5rLCBJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUmlDb250YWN0c0xpbmUsXHJcbiAgUmlEYXNoYm9hcmRMaW5lLFxyXG4gIFJpR2l0TWVyZ2VMaW5lLFxyXG4gIFJpSW5wdXRNZXRob2RMaW5lLFxyXG59IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJy4vTmF2TGluayc7XHJcbmltcG9ydCB7IE5hdlNlY3Rpb24gfSBmcm9tICcuL05hdlNlY3Rpb24nO1xyXG5pbXBvcnQgeyBTaWRlYmFyTmF2IH0gZnJvbSAnLi9TaWRlYmFyTmF2JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXNpZGVcIiB3PVwiNjRcIiBtcj1cIjhcIj5cclxuICAgICAgPFNpZGViYXJOYXYgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlN0YWNrIiwiUmlDb250YWN0c0xpbmUiLCJSaURhc2hib2FyZExpbmUiLCJSaUdpdE1lcmdlTGluZSIsIlJpSW5wdXRNZXRob2RMaW5lIiwiTmF2TGluayIsIk5hdlNlY3Rpb24iLCJTaWRlYmFyTmF2IiwiQm94IiwiU2lkZWJhciJdLCJzb3VyY2VSb290IjoiIn0=