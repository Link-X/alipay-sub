(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/public/taro-utils/apiservice/index.ts":
/*!***************************************************!*\
  !*** ./src/public/taro-utils/apiservice/index.ts ***!
  \***************************************************/
/*! exports provided: navigateTo, redirectTo, switchTab, navigateBack, reLaunch, navigateToMiniProgram, getCurrentPagesFn, returnToIndexPage, getSystemInfo, getSystemInfoSync, canIUse, getLaunchOptionsSync, tarorequest, uploadFile, downloadFile */
/*! exports used: navigateTo, tarorequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigate */ "./src/public/taro-utils/apiservice/navigate/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _navigate__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _stystem_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stystem-info */ "./src/public/taro-utils/apiservice/stystem-info/index.ts");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network */ "./src/public/taro-utils/apiservice/network/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _network__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),

/***/ "./src/public/taro-utils/apiservice/navigate/index.ts":
/*!************************************************************!*\
  !*** ./src/public/taro-utils/apiservice/navigate/index.ts ***!
  \************************************************************/
/*! exports provided: navigateTo, redirectTo, switchTab, navigateBack, reLaunch, navigateToMiniProgram, getCurrentPagesFn, returnToIndexPage */
/*! exports used: navigateTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigateTo; });
/* unused harmony export redirectTo */
/* unused harmony export switchTab */
/* unused harmony export navigateBack */
/* unused harmony export reLaunch */
/* unused harmony export navigateToMiniProgram */
/* unused harmony export getCurrentPagesFn */
/* unused harmony export returnToIndexPage */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 处理不同平台的api之间的差异
 * process.env.TARO_ENV
 * 用于判断当前编译类型，目前有 weapp / swan / alipay / h5 / rn 五个取值
 * */

var navigateTo = function navigateTo(payload) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo(payload);
};
var redirectTo = function redirectTo(payload) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.redirectTo(payload);
};
var switchTab = function switchTab(payload) {
  if (true) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.switchTab(payload);
  } else {}
};
var navigateBack = function navigateBack(payload) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateBack(payload);
};
var reLaunch = function reLaunch(payload) {
  if (true) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.reLaunch(payload);
  } else {}
};
var navigateToMiniProgram = function navigateToMiniProgram(payload) {
  if (true) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateToMiniProgram(payload);
  } else {}
};
var getCurrentPagesFn = function getCurrentPagesFn() {
  if (true) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getCurrentPages();
  } else { var lasIndex, pramsIndex, hash; }
};
var returnToIndexPage = function returnToIndexPage() {
  switchTab({
    url: "/pages/home-page/index"
  });
};

/***/ }),

/***/ "./src/public/taro-utils/apiservice/network/index.ts":
/*!***********************************************************!*\
  !*** ./src/public/taro-utils/apiservice/network/index.ts ***!
  \***********************************************************/
/*! exports provided: tarorequest, uploadFile, downloadFile */
/*! exports used: tarorequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tarorequest; });
/* unused harmony export uploadFile */
/* unused harmony export downloadFile */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var tarorequest = function tarorequest(payload) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.request(payload);
};
var uploadFile = function uploadFile(payload) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.uploadFile(payload);
};
var downloadFile = function downloadFile(payload) {
  if (true) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.downloadFile(payload);
  } else {}
};

/***/ }),

/***/ "./src/public/taro-utils/apiservice/stystem-info/index.ts":
/*!****************************************************************!*\
  !*** ./src/public/taro-utils/apiservice/stystem-info/index.ts ***!
  \****************************************************************/
/*! exports provided: getSystemInfo, getSystemInfoSync, canIUse, getLaunchOptionsSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSystemInfo */
/* unused harmony export getSystemInfoSync */
/* unused harmony export canIUse */
/* unused harmony export getLaunchOptionsSync */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var getSystemInfo = function getSystemInfo(payload) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getSystemInfo(payload);
};
var getSystemInfoSync = function getSystemInfoSync() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getSystemInfoSync();
};
var canIUse = function canIUse(payload) {
  if (true) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.canIUse(payload);
  }
};
var getLaunchOptionsSync = function getLaunchOptionsSync() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getLaunchOptionsSync();
};

/***/ })

}]);
//# sourceMappingURL=common.js.map