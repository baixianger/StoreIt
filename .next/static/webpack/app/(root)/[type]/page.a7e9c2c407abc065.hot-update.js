"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/[type]/page",{

/***/ "(app-pages-browser)/./components/ActionsModalContent.tsx":
/*!********************************************!*\
  !*** ./components/ActionsModalContent.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FileDetails: () => (/* binding */ FileDetails),\n/* harmony export */   ShareInput: () => (/* binding */ ShareInput)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Thumbnail */ \"(app-pages-browser)/./components/Thumbnail.tsx\");\n/* harmony import */ var _components_FormattedDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormattedDateTime */ \"(app-pages-browser)/./components/FormattedDateTime.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\n\n\n\n\nconst ImageThumbnail = (param)=>{\n    let { file } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"file-details-thumbnail\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: file.type,\n                extension: file.extension,\n                url: file.url\n            }, void 0, false, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"subtitle-2 mb-1\",\n                        children: file.name\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormattedDateTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        date: file.$createdAt,\n                        className: \"caption\"\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ImageThumbnail;\nconst DetailRow = (param)=>{\n    let { label, value } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"file-details-label text-left\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"file-details-value text-left\",\n                children: value\n            }, void 0, false, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = DetailRow;\nconst FileDetails = (param)=>{\n    let { file } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageThumbnail, {\n                file: file\n            }, void 0, false, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4 px-2 pt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailRow, {\n                        label: \"Format:\",\n                        value: file.extension\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailRow, {\n                        label: \"Size:\",\n                        value: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.convertFileSize)(file.size)\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailRow, {\n                        label: \"Owner:\",\n                        value: file.owner.fullName\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailRow, {\n                        label: \"Last edit:\",\n                        value: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatDateTime)(file.$updatedAt)\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c2 = FileDetails;\nconst ShareInput = (param)=>{\n    let { file, onInputChange, onRemove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageThumbnail, {\n                file: file\n            }, void 0, false, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"share-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"subtitle-2 pl-1 text-light-100\",\n                        children: \"Share file with other users\"\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"email\",\n                        placeholder: \"Enter email address\",\n                        onChange: (e)=>onInputChange(e.target.value.trim().split(\",\")),\n                        className: \"share-input-field\"\n                    }, void 0, false, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"subtitle-2 text-light-100\",\n                                        children: \"Shared with\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"subtitle-2 text-light-200\",\n                                        children: [\n                                            file.users.length,\n                                            \" users\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"pt-2\",\n                                children: file.users.map((email)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex items-center justify-between gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"subtitle-2\",\n                                                children: email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                onClick: ()=>onRemove(email),\n                                                className: \"share-remove-user\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    src: \"/assets/icons/remove.svg\",\n                                                    alt: \"Remove\",\n                                                    width: 24,\n                                                    height: 24,\n                                                    className: \"remove-icon\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, email, true, {\n                                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/baixianger/Nextjs/store_it/components/ActionsModalContent.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c3 = ShareInput;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ImageThumbnail\");\n$RefreshReg$(_c1, \"DetailRow\");\n$RefreshReg$(_c2, \"FileDetails\");\n$RefreshReg$(_c3, \"ShareInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWN0aW9uc01vZGFsQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ2dCO0FBQ0Q7QUFDcEM7QUFDb0I7QUFDRTtBQUNqQjtBQUcvQixNQUFNUSxpQkFBaUI7UUFBQyxFQUFFQyxJQUFJLEVBQTBCO3lCQUN0RCw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNYLDZEQUFTQTtnQkFBQ1ksTUFBTUgsS0FBS0csSUFBSTtnQkFBRUMsV0FBV0osS0FBS0ksU0FBUztnQkFBRUMsS0FBS0wsS0FBS0ssR0FBRzs7Ozs7OzBCQUNwRSw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFBRUosV0FBVTtrQ0FBbUJGLEtBQUtPLElBQUk7Ozs7OztrQ0FDekMsOERBQUNmLHFFQUFpQkE7d0JBQUNnQixNQUFNUixLQUFLUyxVQUFVO3dCQUFFUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTHBESDtBQVVOLE1BQU1XLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBb0M7eUJBQ25FLDhEQUFDWDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0k7Z0JBQUVKLFdBQVU7MEJBQWdDUzs7Ozs7OzBCQUM3Qyw4REFBQ0w7Z0JBQUVKLFdBQVU7MEJBQWdDVTs7Ozs7Ozs7Ozs7OztNQUgzQ0Y7QUFPQyxNQUFNRyxjQUFjO1FBQUMsRUFBRWIsSUFBSSxFQUF3QjtJQUN4RCxxQkFDRTs7MEJBQ0UsOERBQUNEO2dCQUFlQyxNQUFNQTs7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUTt3QkFBVUMsT0FBTTt3QkFBVUMsT0FBT1osS0FBS0ksU0FBUzs7Ozs7O2tDQUNoRCw4REFBQ007d0JBQVVDLE9BQU07d0JBQVFDLE9BQU9uQiwyREFBZUEsQ0FBQ08sS0FBS2MsSUFBSTs7Ozs7O2tDQUN6RCw4REFBQ0o7d0JBQVVDLE9BQU07d0JBQVNDLE9BQU9aLEtBQUtlLEtBQUssQ0FBQ0MsUUFBUTs7Ozs7O2tDQUNwRCw4REFBQ047d0JBQVVDLE9BQU07d0JBQWFDLE9BQU9sQiwwREFBY0EsQ0FBQ00sS0FBS2lCLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FBSTNFLEVBQUU7TUFaV0o7QUFxQk4sTUFBTUssYUFBYTtRQUFDLEVBQUNsQixJQUFJLEVBQUVtQixhQUFhLEVBQUVDLFFBQVEsRUFBUTtJQUMvRCxxQkFDRTs7MEJBQ0UsOERBQUNyQjtnQkFBZUMsTUFBTUE7Ozs7OzswQkFFdEIsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUVKLFdBQVU7a0NBQWlDOzs7Ozs7a0NBRzlDLDhEQUFDTix1REFBS0E7d0JBQ0pPLE1BQUs7d0JBQ0xrQixhQUFZO3dCQUNaQyxVQUFVLENBQUNDLElBQU1KLGNBQWNJLEVBQUVDLE1BQU0sQ0FBQ1osS0FBSyxDQUFDYSxJQUFJLEdBQUdDLEtBQUssQ0FBQzt3QkFDM0R4QixXQUFVOzs7Ozs7a0NBRVosOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FBRUosV0FBVTtrREFBNEI7Ozs7OztrREFDekMsOERBQUNJO3dDQUFFSixXQUFVOzs0Q0FDVkYsS0FBSzJCLEtBQUssQ0FBQ0MsTUFBTTs0Q0FBQzs7Ozs7Ozs7Ozs7OzswQ0FJdkIsOERBQUNDO2dDQUFHM0IsV0FBVTswQ0FDWEYsS0FBSzJCLEtBQUssQ0FBQ0csR0FBRyxDQUFDLENBQUNDLHNCQUNmLDhEQUFDQzt3Q0FFQzlCLFdBQVU7OzBEQUVWLDhEQUFDSTtnREFBRUosV0FBVTswREFBYzZCOzs7Ozs7MERBQzNCLDhEQUFDbEMseURBQU1BO2dEQUNMb0MsU0FBUyxJQUFNYixTQUFTVztnREFDeEI3QixXQUFVOzBEQUVWLDRFQUFDSixrREFBS0E7b0RBQ0pvQyxLQUFJO29EQUNKQyxLQUFJO29EQUNKQyxPQUFPO29EQUNQQyxRQUFRO29EQUNSbkMsV0FBVTs7Ozs7Ozs7Ozs7O3VDQWJUNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCckIsRUFBRTtNQWpEV2IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWl4aWFuZ2VyL05leHRqcy9zdG9yZV9pdC9jb21wb25lbnRzL0FjdGlvbnNNb2RhbENvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaHVtYm5haWwgZnJvbSBcIkAvY29tcG9uZW50cy9UaHVtYm5haWxcIjtcbmltcG9ydCBGb3JtYXR0ZWREYXRlVGltZSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1hdHRlZERhdGVUaW1lXCI7XG5pbXBvcnQgeyBjb252ZXJ0RmlsZVNpemUsIGZvcm1hdERhdGVUaW1lIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7RmlsZURvY3VtZW50fSBmcm9tIFwiQC90eXBlc1wiO1xuXG5jb25zdCBJbWFnZVRodW1ibmFpbCA9ICh7IGZpbGUgfTogeyBmaWxlOiBGaWxlRG9jdW1lbnQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtZGV0YWlscy10aHVtYm5haWxcIj5cbiAgICA8VGh1bWJuYWlsIHR5cGU9e2ZpbGUudHlwZX0gZXh0ZW5zaW9uPXtmaWxlLmV4dGVuc2lvbn0gdXJsPXtmaWxlLnVybH0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlLTIgbWItMVwiPntmaWxlLm5hbWV9PC9wPlxuICAgICAgPEZvcm1hdHRlZERhdGVUaW1lIGRhdGU9e2ZpbGUuJGNyZWF0ZWRBdH0gY2xhc3NOYW1lPVwiY2FwdGlvblwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGV0YWlsUm93ID0gKHsgbGFiZWwsIHZhbHVlIH06IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgIDxwIGNsYXNzTmFtZT1cImZpbGUtZGV0YWlscy1sYWJlbCB0ZXh0LWxlZnRcIj57bGFiZWx9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImZpbGUtZGV0YWlscy12YWx1ZSB0ZXh0LWxlZnRcIj57dmFsdWV9PC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBGaWxlRGV0YWlscyA9ICh7IGZpbGV9OiB7IGZpbGU6IEZpbGVEb2N1bWVudH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEltYWdlVGh1bWJuYWlsIGZpbGU9e2ZpbGV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBweC0yIHB0LTJcIj5cbiAgICAgICAgPERldGFpbFJvdyBsYWJlbD1cIkZvcm1hdDpcIiB2YWx1ZT17ZmlsZS5leHRlbnNpb259IC8+XG4gICAgICAgIDxEZXRhaWxSb3cgbGFiZWw9XCJTaXplOlwiIHZhbHVlPXtjb252ZXJ0RmlsZVNpemUoZmlsZS5zaXplKX0gLz5cbiAgICAgICAgPERldGFpbFJvdyBsYWJlbD1cIk93bmVyOlwiIHZhbHVlPXtmaWxlLm93bmVyLmZ1bGxOYW1lfSAvPlxuICAgICAgICA8RGV0YWlsUm93IGxhYmVsPVwiTGFzdCBlZGl0OlwiIHZhbHVlPXtmb3JtYXREYXRlVGltZShmaWxlLiR1cGRhdGVkQXQpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZpbGU6IEZpbGVEb2N1bWVudDtcbiAgb25JbnB1dENoYW5nZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nW10+PjtcbiAgb25SZW1vdmU6IChlbWFpbDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgU2hhcmVJbnB1dCA9ICh7ZmlsZSwgb25JbnB1dENoYW5nZSwgb25SZW1vdmV9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW1hZ2VUaHVtYm5haWwgZmlsZT17ZmlsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS13cmFwcGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlLTIgcGwtMSB0ZXh0LWxpZ2h0LTEwMFwiPlxuICAgICAgICAgIFNoYXJlIGZpbGUgd2l0aCBvdGhlciB1c2Vyc1xuICAgICAgICA8L3A+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUudHJpbSgpLnNwbGl0KFwiLFwiKSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmUtaW5wdXQtZmllbGRcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZS0yIHRleHQtbGlnaHQtMTAwXCI+U2hhcmVkIHdpdGg8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZS0yIHRleHQtbGlnaHQtMjAwXCI+XG4gICAgICAgICAgICAgIHtmaWxlLnVzZXJzLmxlbmd0aH0gdXNlcnNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwdC0yXCI+XG4gICAgICAgICAgICB7ZmlsZS51c2Vycy5tYXAoKGVtYWlsOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtlbWFpbH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUtMlwiPntlbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZW1vdmUoZW1haWwpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmUtcmVtb3ZlLXVzZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ljb25zL3JlbW92ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJSZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJUaHVtYm5haWwiLCJGb3JtYXR0ZWREYXRlVGltZSIsImNvbnZlcnRGaWxlU2l6ZSIsImZvcm1hdERhdGVUaW1lIiwiUmVhY3QiLCJJbnB1dCIsIkJ1dHRvbiIsIkltYWdlIiwiSW1hZ2VUaHVtYm5haWwiLCJmaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsImV4dGVuc2lvbiIsInVybCIsInAiLCJuYW1lIiwiZGF0ZSIsIiRjcmVhdGVkQXQiLCJEZXRhaWxSb3ciLCJsYWJlbCIsInZhbHVlIiwiRmlsZURldGFpbHMiLCJzaXplIiwib3duZXIiLCJmdWxsTmFtZSIsIiR1cGRhdGVkQXQiLCJTaGFyZUlucHV0Iiwib25JbnB1dENoYW5nZSIsIm9uUmVtb3ZlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0cmltIiwic3BsaXQiLCJ1c2VycyIsImxlbmd0aCIsInVsIiwibWFwIiwiZW1haWwiLCJsaSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ActionsModalContent.tsx\n"));

/***/ })

});