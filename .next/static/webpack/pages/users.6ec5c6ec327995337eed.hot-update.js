"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuNmVjNWM2ZWMzMjc5OTUzMzdlZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTs7QUFFTyxTQUFTTyxVQUFULEdBQXNCO0FBQzNCLHNCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBTyxFQUFDLElBQWY7QUFBb0IsU0FBSyxFQUFDLFlBQTFCO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBWSxXQUFLLEVBQUMsT0FBbEI7QUFBQSw4QkFDRSw4REFBQyw2Q0FBRDtBQUFTLFlBQUksRUFBRUwsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDZDQUFEO0FBQVMsWUFBSSxFQUFFRCwwREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsbURBQUQ7QUFBWSxXQUFLLEVBQUMsaUJBQWxCO0FBQUEsOEJBQ0UsOERBQUMsNkNBQUQ7QUFBUyxZQUFJLEVBQUVFLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFTLFlBQUksRUFBRUMsNkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEO0tBZGVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZoQjtBQVNBOztBQUVPLFNBQVNFLE9BQVQsR0FBbUI7QUFDeEIsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixLQUFDLEVBQUMsSUFBbEI7QUFBdUIsTUFBRSxFQUFDLEdBQTFCO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBTmVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhck5hdi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUmlDb250YWN0c0xpbmUsXHJcbiAgUmlEYXNoYm9hcmRMaW5lLFxyXG4gIFJpR2l0TWVyZ2VMaW5lLFxyXG4gIFJpSW5wdXRNZXRob2RMaW5lLFxyXG59IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJy4vTmF2TGluayc7XHJcbmltcG9ydCB7IE5hdlNlY3Rpb24gfSBmcm9tICcuL05hdlNlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJOYXYoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBzcGFjaW5nPVwiMTJcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgPE5hdlNlY3Rpb24gdGl0bGU9XCJHZXJhbFwiPlxyXG4gICAgICAgIDxOYXZMaW5rIGljb249e1JpRGFzaGJvYXJkTGluZX0+RGFzaGJvYXJkPC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGljb249e1JpQ29udGFjdHNMaW5lfT5Vc3XDoXJpb3M8L05hdkxpbms+XHJcbiAgICAgIDwvTmF2U2VjdGlvbj5cclxuXHJcbiAgICAgIDxOYXZTZWN0aW9uIHRpdGxlPVwiQVVUT01Bw4fDg09cIj5cclxuICAgICAgICA8TmF2TGluayBpY29uPXtSaUdpdE1lcmdlTGluZX0+Rm9ybXVsw6FyaW9zPC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGljb249e1JpSW5wdXRNZXRob2RMaW5lfT5BdXRvbWHDp8OjbzwvTmF2TGluaz5cclxuICAgICAgPC9OYXZTZWN0aW9uPlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEJveCwgU3RhY2ssIFRleHQsIExpbmssIEljb24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBSaUNvbnRhY3RzTGluZSxcclxuICBSaURhc2hib2FyZExpbmUsXHJcbiAgUmlHaXRNZXJnZUxpbmUsXHJcbiAgUmlJbnB1dE1ldGhvZExpbmUsXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnLi9OYXZMaW5rJztcclxuaW1wb3J0IHsgTmF2U2VjdGlvbiB9IGZyb20gJy4vTmF2U2VjdGlvbic7XHJcbmltcG9ydCB7IFNpZGViYXJOYXYgfSBmcm9tICcuL1NpZGViYXJOYXYnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhc2lkZVwiIHc9XCI2NFwiIG1yPVwiOFwiPlxyXG4gICAgICA8U2lkZWJhck5hdiAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU3RhY2siLCJSaUNvbnRhY3RzTGluZSIsIlJpRGFzaGJvYXJkTGluZSIsIlJpR2l0TWVyZ2VMaW5lIiwiUmlJbnB1dE1ldGhvZExpbmUiLCJOYXZMaW5rIiwiTmF2U2VjdGlvbiIsIlNpZGViYXJOYXYiLCJCb3giLCJTaWRlYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==