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
    backgroundColor: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.palette.background.black,
    width: "100%",
    height: 80,
    marginBottom: 160,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    paddingLeft: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.spacing(2)
  },
  title: {
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.palette.surface.white,
    fontSize: _styles_theme__WEBPACK_IMPORTED_MODULE_0__.default.typography.h2.fontSize
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTEzZjZkYjAyMjFlZWY1Y2Y0ODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLFNBQVMsR0FBR0YsNkRBQVUsQ0FBQyxPQUFPO0FBQ2xDRyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFSCwyRUFEYjtBQUVKTyxJQUFBQSxLQUFLLEVBQUUsTUFGSDtBQUdKQyxJQUFBQSxNQUFNLEVBQUUsRUFISjtBQUlKQyxJQUFBQSxZQUFZLEVBQUUsR0FKVjtBQUtKQyxJQUFBQSxTQUFTLEVBQUUsaUNBTFA7QUFNSkMsSUFBQUEsV0FBVyxFQUFFWCwwREFBQSxDQUFjLENBQWQ7QUFOVCxHQUQ0QjtBQVNsQ2EsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRWQsd0VBREY7QUFFTGlCLElBQUFBLFFBQVEsRUFBRWpCLHlFQUE0QmlCO0FBRmpDO0FBVDJCLENBQVAsQ0FBRCxDQUE1QjtBQWVBLCtEQUFlaEIsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub3BiYXIvc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5ibGFjayxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogODAsXHJcbiAgICBtYXJnaW5Cb3R0b206IDE2MCxcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXHJcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuaDIuZm9udFNpemUsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xyXG4iXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInRoZW1lIiwidXNlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiYmxhY2siLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImJveFNoYWRvdyIsInBhZGRpbmdMZWZ0Iiwic3BhY2luZyIsInRpdGxlIiwiY29sb3IiLCJzdXJmYWNlIiwid2hpdGUiLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=