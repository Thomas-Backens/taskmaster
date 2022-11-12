"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Topbar/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Topbar/styles.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");
/* module decorator */ module = __webpack_require__.hmd(module);


const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(() => ({
  root: {
    backgroundColor: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.palette.surface.black,
    width: "100%",
    height: 80,
    marginBottom: 160,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    paddingLeft: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.spacing(2)
  },
  title: {
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.palette.surface.white,
    fontSize: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.typography.h1.fontSize
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg5ZjBjNzdlYzc3OTZiMzQ0MWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLFNBQVMsR0FBR0YsNkRBQVUsQ0FBQyxPQUFPO0FBQ2xDRyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFSCx3RUFEYjtBQUVKTyxJQUFBQSxLQUFLLEVBQUUsTUFGSDtBQUdKQyxJQUFBQSxNQUFNLEVBQUUsRUFISjtBQUlKQyxJQUFBQSxZQUFZLEVBQUUsR0FKVjtBQUtKQyxJQUFBQSxTQUFTLEVBQUUsaUNBTFA7QUFNSkMsSUFBQUEsV0FBVyxFQUFFWCwwREFBQSxDQUFjLENBQWQ7QUFOVCxHQUQ0QjtBQVNsQ2EsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRWQsd0VBREY7QUFFTGdCLElBQUFBLFFBQVEsRUFBRWhCLHlFQUE0QmdCO0FBRmpDO0FBVDJCLENBQVAsQ0FBRCxDQUE1QjtBQWVBLCtEQUFlZixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvcGJhci9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJsYWNrLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiA4MCxcclxuICAgIG1hcmdpbkJvdHRvbTogMTYwLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oMS5mb250U2l6ZSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidGhlbWUiLCJ1c2VTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInN1cmZhY2UiLCJibGFjayIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiYm94U2hhZG93IiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwidGl0bGUiLCJjb2xvciIsIndoaXRlIiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9