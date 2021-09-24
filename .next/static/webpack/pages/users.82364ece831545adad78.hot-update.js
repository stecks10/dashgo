"use strict";
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/pages/users/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/users/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserList; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Pagination */ "./src/components/Pagination/index.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Sidebar */ "./src/components/Sidebar/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\vnn20\\OneDrive\\\xC1rea de Trabalho\\dash.go\\src\\pages\\users\\index.tsx",
    _s = $RefreshSig$();







function UserList() {
  _s();

  var isWideVersion = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({
    base: false,
    lg: true
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_0__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      w: "100%",
      my: "6",
      maxW: 1400,
      mx: "auto",
      px: "6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        flex: "1",
        borderRadius: 8,
        bg: "gray.800",
        p: "8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
          mb: "8",
          justify: "space-between",
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
            size: "lg",
            fontWeight: "normal",
            children: "Usu\xE1rios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            w: "28",
            height: "8",
            as: "a",
            size: "sn",
            fontSize: "sn",
            colorScheme: "pink",
            leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
              as: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiAddLine,
              fontSize: "15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this),
            children: "Criar novo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {
          colorScheme: "whiteAlpha",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Thead, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
                px: "6",
                color: "gray.300",
                width: "8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  colorScheme: "pink"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
                children: "Usu\xE1rio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 35
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
                children: "Data de cadastro"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
                width: "8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tbody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                px: "6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  colorScheme: "pink"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    fontWeight: "bold",
                    children: "Vitor Nunes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    fontSize: "sm",
                    color: "gray.300",
                    children: "vnn2006@gmail.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: "17 de Setembro 2021"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 35
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  w: "28",
                  height: "8",
                  as: "a",
                  size: "sn",
                  fontSize: "sn",
                  colorScheme: "purple",
                  leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                    as: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiPencilLine,
                    fontSize: "15"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 31
                  }, this),
                  children: "Editar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tbody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                px: "6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  colorScheme: "pink"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    fontWeight: "bold",
                    children: "Vitor Nunes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    fontSize: "sm",
                    color: "gray.300",
                    children: "vnn2006@gmail.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: "17 de Setembro 2021"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 35
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  w: "28",
                  height: "8",
                  as: "a",
                  size: "sn",
                  fontSize: "sn",
                  colorScheme: "purple",
                  leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                    as: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiPencilLine,
                    fontSize: "15"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 31
                  }, this),
                  children: "Editar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tbody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                px: "6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  colorScheme: "pink"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    fontWeight: "bold",
                    children: "Vitor Nunes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    fontSize: "sm",
                    color: "gray.300",
                    children: "vnn2006@gmail.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this), isWideVersion && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: "17 de Setembro 2021"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 35
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  w: "28",
                  height: "8",
                  as: "a",
                  size: "sn",
                  fontSize: "sn",
                  colorScheme: "purple",
                  leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                    as: react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiPencilLine,
                    fontSize: "15"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 31
                  }, this),
                  children: "Editar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.Pagination, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(UserList, "3oSx7AotzFNmOkbv4NfIDZx1j4Q=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue];
});

_c = UserList;

var _c;

$RefreshReg$(_c, "UserList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuODIzNjRlY2U4MzE1NDVhZGFkNzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTbUIsUUFBVCxHQUFvQjtBQUFBOztBQUNqQyxNQUFNQyxhQUFhLEdBQUdQLG9FQUFrQixDQUFDO0FBQ3ZDUSxJQUFBQSxJQUFJLEVBQUUsS0FEaUM7QUFFdkNDLElBQUFBLEVBQUUsRUFBRTtBQUZtQyxHQUFELENBQXhDO0FBSUEsc0JBQ0UsOERBQUMsaURBQUQ7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRSw4REFBQyxrREFBRDtBQUFNLE9BQUMsRUFBQyxNQUFSO0FBQWUsUUFBRSxFQUFDLEdBQWxCO0FBQXNCLFVBQUksRUFBRSxJQUE1QjtBQUFrQyxRQUFFLEVBQUMsTUFBckM7QUFBNEMsUUFBRSxFQUFDLEdBQS9DO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UsOERBQUMsaURBQUQ7QUFBSyxZQUFJLEVBQUMsR0FBVjtBQUFjLG9CQUFZLEVBQUUsQ0FBNUI7QUFBK0IsVUFBRSxFQUFDLFVBQWxDO0FBQTZDLFNBQUMsRUFBQyxHQUEvQztBQUFBLGdDQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBRSxFQUFDLEdBQVQ7QUFBYSxpQkFBTyxFQUFDLGVBQXJCO0FBQXFDLGVBQUssRUFBQyxRQUEzQztBQUFBLGtDQUNFLDhEQUFDLHFEQUFEO0FBQVMsZ0JBQUksRUFBQyxJQUFkO0FBQW1CLHNCQUFVLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRSw4REFBQyxvREFBRDtBQUNFLGFBQUMsRUFBQyxJQURKO0FBRUUsa0JBQU0sRUFBQyxHQUZUO0FBR0UsY0FBRSxFQUFDLEdBSEw7QUFJRSxn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QUFBO0FBQUEsVUFERjtBQW1JRDs7R0F4SXVCSTtVQUNBTjs7O0tBREFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy91c2Vycy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBIZWFkaW5nLFxyXG4gIEJ1dHRvbixcclxuICBJY29uLFxyXG4gIFRhYmxlLFxyXG4gIFRoZWFkLFxyXG4gIFRyLFxyXG4gIFRkLFxyXG4gIFRoLFxyXG4gIENoZWNrYm94LFxyXG4gIFRib2R5LFxyXG4gIFRleHQsXHJcbiAgdXNlQnJlYWtwb2ludFZhbHVlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBSaUFkZExpbmUsIFJpUGVuY2lsTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTGlzdCgpIHtcclxuICBjb25zdCBpc1dpZGVWZXJzaW9uID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6IGZhbHNlLFxyXG4gICAgbGc6IHRydWUsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIgbXk9XCI2XCIgbWF4Vz17MTQwMH0gbXg9XCJhdXRvXCIgcHg9XCI2XCI+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgICAgPEJveCBmbGV4PVwiMVwiIGJvcmRlclJhZGl1cz17OH0gYmc9XCJncmF5LjgwMFwiIHA9XCI4XCI+XHJcbiAgICAgICAgICA8RmxleCBtYj1cIjhcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJub3JtYWxcIj5cclxuICAgICAgICAgICAgICBVc3XDoXJpb3NcclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHc9XCIyOFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiOFwiXHJcbiAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICBzaXplPVwic25cIlxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwic25cIlxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwicGlua1wiXHJcbiAgICAgICAgICAgICAgbGVmdEljb249ezxJY29uIGFzPXtSaUFkZExpbmV9IGZvbnRTaXplPVwiMTVcIiAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyaWFyIG5vdm9cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgPFRhYmxlIGNvbG9yU2NoZW1lPVwid2hpdGVBbHBoYVwiPlxyXG4gICAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgPFRoIHB4PVwiNlwiIGNvbG9yPVwiZ3JheS4zMDBcIiB3aWR0aD1cIjhcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNvbG9yU2NoZW1lPVwicGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RoPlxyXG4gICAgICAgICAgICAgICAge2lzV2lkZVZlcnNpb24gJiYgPFRoPlVzdcOhcmlvPC9UaD59XHJcbiAgICAgICAgICAgICAgICA8VGg+RGF0YSBkZSBjYWRhc3RybzwvVGg+XHJcbiAgICAgICAgICAgICAgICA8VGggd2lkdGg9XCI4XCI+PC9UaD5cclxuICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICA8L1RoZWFkPlxyXG4gICAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgPFRkIHB4PVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY29sb3JTY2hlbWU9XCJwaW5rXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj5WaXRvciBOdW5lczwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgdm5uMjAwNkBnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9UZD5cclxuICAgICAgICAgICAgICAgIHtpc1dpZGVWZXJzaW9uICYmIDxUZD4xNyBkZSBTZXRlbWJybyAyMDIxPC9UZD59XHJcbiAgICAgICAgICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB3PVwiMjhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNuXCJcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInNuXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInB1cnBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdEljb249ezxJY29uIGFzPXtSaVBlbmNpbExpbmV9IGZvbnRTaXplPVwiMTVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICAgICAgPFRib2R5PlxyXG4gICAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICAgIDxUZCBweD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNvbG9yU2NoZW1lPVwicGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgPFRkPlxyXG4gICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+Vml0b3IgTnVuZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS4zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHZubjIwMDZAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICB7aXNXaWRlVmVyc2lvbiAmJiA8VGQ+MTcgZGUgU2V0ZW1icm8gMjAyMTwvVGQ+fVxyXG4gICAgICAgICAgICAgICAgPFRkPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdz1cIjI4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJwdXJwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRJY29uPXs8SWNvbiBhcz17UmlQZW5jaWxMaW5lfSBmb250U2l6ZT1cIjE1XCIgLz59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFZGl0YXJcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgICAgIDxUYm9keT5cclxuICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICA8VGQgcHg9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjb2xvclNjaGVtZT1cInBpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9UZD5cclxuICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiPlZpdG9yIE51bmVzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXkuMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB2bm4yMDA2QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAge2lzV2lkZVZlcnNpb24gJiYgPFRkPjE3IGRlIFNldGVtYnJvIDIwMjE8L1RkPn1cclxuICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHc9XCIyOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwicHVycGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0SWNvbj17PEljb24gYXM9e1JpUGVuY2lsTGluZX0gZm9udFNpemU9XCIxNVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9UZD5cclxuICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICA8L1Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiSGVhZGluZyIsIkJ1dHRvbiIsIkljb24iLCJUYWJsZSIsIlRoZWFkIiwiVHIiLCJUZCIsIlRoIiwiQ2hlY2tib3giLCJUYm9keSIsIlRleHQiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJSaUFkZExpbmUiLCJSaVBlbmNpbExpbmUiLCJIZWFkZXIiLCJQYWdpbmF0aW9uIiwiU2lkZWJhciIsIlVzZXJMaXN0IiwiaXNXaWRlVmVyc2lvbiIsImJhc2UiLCJsZyJdLCJzb3VyY2VSb290IjoiIn0=