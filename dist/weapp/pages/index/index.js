(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_hooks_lib_useToast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-hooks/lib/useToast */ "./node_modules/taro-hooks/lib/useToast/index.js");
/* harmony import */ var taro_hooks_lib_useToast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_hooks_lib_useToast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_hooks_lib_useModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-hooks/lib/useModal */ "./node_modules/taro-hooks/lib/useModal/index.js");
/* harmony import */ var taro_hooks_lib_useModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_hooks_lib_useModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var taro_hooks_lib_useNavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-hooks/lib/useNavigationBar */ "./node_modules/taro-hooks/lib/useNavigationBar/index.js");
/* harmony import */ var taro_hooks_lib_useNavigationBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_hooks_lib_useNavigationBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var taro_hooks_lib_useEnv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-hooks/lib/useEnv */ "./node_modules/taro-hooks/lib/useEnv/index.js");
/* harmony import */ var taro_hooks_lib_useEnv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taro_hooks_lib_useEnv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _public_taro_utils_apiservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/public/taro-utils/apiservice */ "./src/public/taro-utils/apiservice/index.ts");
/* harmony import */ var _hook_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hook.png */ "./src/pages/index/hook.png");
/* harmony import */ var _hook_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_hook_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














var Index = function Index() {
  var env = taro_hooks_lib_useEnv__WEBPACK_IMPORTED_MODULE_4___default()();

  var _useNavigationBar = taro_hooks_lib_useNavigationBar__WEBPACK_IMPORTED_MODULE_2___default()({
    title: "Taro Hooks"
  }),
      _useNavigationBar2 = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useNavigationBar, 2),
      _ = _useNavigationBar2[0],
      setTitle = _useNavigationBar2[1].setTitle;

  var _useModal = taro_hooks_lib_useModal__WEBPACK_IMPORTED_MODULE_1___default()({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true
  }),
      _useModal2 = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useModal, 1),
      show = _useModal2[0];

  var _useToast = taro_hooks_lib_useToast__WEBPACK_IMPORTED_MODULE_0___default()({
    mask: true
  }),
      _useToast2 = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useToast, 1),
      showToast = _useToast2[0];

  var handleModal = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    show({
      content: "不如给一个star⭐️!"
    }).then(function () {
      showToast({
        title: "点击了支持!"
      });
    });
  }, [show, showToast]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
    className: "wrapper",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
      className: "logo",
      src: _hook_png__WEBPACK_IMPORTED_MODULE_9___default.a
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "o"], {
      className: "title",
      children: "\u4E3ATaro\u800C\u8BBE\u8BA1\u7684Hooks Library"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "o"], {
      className: "desc",
      children: "\u76EE\u524D\u8986\u76D670%\u5B98\u65B9API. \u62B9\u5E73\u90E8\u5206API\u5728H5\u7AEF\u77ED\u677F. \u63D0\u4F9B\u8FD140+Hooks! \u5E76\u7ED3\u5408ahook\u9002\u914DTaro!"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
      className: "list",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "o"], {
        className: "label",
        children: "\u8FD0\u884C\u73AF\u5883"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "o"], {
        className: "note",
        children: env
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "a"], {
      className: "button",
      onClick: function onClick() {
        return setTitle("Taro Hooks Nice!");
      },
      children: "\u8BBE\u7F6E\u6807\u9898"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "a"], {
      className: "button",
      onClick: handleModal,
      children: "\u4F7F\u7528Modal"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
      type: "primary",
      onClick: function onClick() {
        Object(_public_taro_utils_apiservice__WEBPACK_IMPORTED_MODULE_8__[/* navigateTo */ "a"])({
          url: "/pages/login/index"
        });
      },
      children: "\u767B\u9646"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtButton */ "a"], {
      onClick: function onClick() {
        Object(_public_taro_utils_apiservice__WEBPACK_IMPORTED_MODULE_8__[/* navigateTo */ "a"])({
          url: "/subpackages/manage/test-page/index"
        });
      },
      children: "\u5206\u53051"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./node_modules/taro-hooks/lib/constant.js":
/*!*************************************************!*\
  !*** ./node_modules/taro-hooks/lib/constant.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENV_TYPE = void 0;
var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
exports.ENV_TYPE = ENV_TYPE;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useEnv/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useEnv/index.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");

function useEnv() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      env = _useState2[0],
      setEnv = _useState2[1];

  (0, _react.useEffect)(function () {
    setEnv((0, _taro.getEnv)());
  }, []);
  return env;
}

var _default = useEnv;
exports.default = _default;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useModal/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useModal/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");

function useModal(option) {
  var initialOption = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    initialOption.current = option;
  }, [option]);
  var showModalAsync = (0, _react.useCallback)(function (option) {
    return new Promise(function (resolve, reject) {
      try {
        if (!option && !initialOption.current) {
          console.warn('please provide a option');
          return reject(new Error('please provide a option'));
        } else {
          var options = Object.assign({}, initialOption.current || {}, option || {});
          (0, _taro.showModal)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, options), {}, {
            success: resolve,
            fail: reject
          })).catch(reject);
        }
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);
  return [showModalAsync];
}

var _default = useModal;
exports.default = _default;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useNavigationBar/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useNavigationBar/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");

var _useEnv = _interopRequireDefault(__webpack_require__(/*! ../useEnv */ "./node_modules/taro-hooks/lib/useEnv/index.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/taro-hooks/lib/constant.js");

function useNavigationBar(option) {
  var _initialOption$curren2;

  var initialOption = (0, _react.useRef)({});
  var env = (0, _useEnv.default)();
  (0, _react.useEffect)(function () {
    if (option && env && env !== _constant.ENV_TYPE.WEB) {
      var PromiseArray = [];
      var loading = option.loading,
          _title = option.title,
          frontColor = option.frontColor,
          backgroundColor = option.backgroundColor,
          animation = option.animation,
          _hideHomeButton = option.hideHomeButton;
      loading && PromiseArray.push(toggleLoadingAsync());
      _title && PromiseArray.push(setTitleAsync(_title));
      _hideHomeButton && PromiseArray.push(hideHomeButtonAsync());
      frontColor && backgroundColor && PromiseArray.push(setColorAsync({
        backgroundColor: backgroundColor,
        frontColor: frontColor,
        animation: animation
      }));
      PromiseArray.length && Promise.all(PromiseArray).finally(function () {
        initialOption.current = option;
      });
    }
  }, [option, env]);
  var toggleLoadingAsync = (0, _react.useCallback)(function () {
    return new Promise(function (resolve, reject) {
      try {
        var _initialOption$curren;

        var _Action = _taro.showNavigationBarLoading,
            _option = {
          loading: true
        };

        if ((_initialOption$curren = initialOption.current) === null || _initialOption$curren === void 0 ? void 0 : _initialOption$curren.loading) {
          _Action = _taro.hideNavigationBarLoading;
          _option = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
            loading: false
          });
        }

        _Action({
          success: function success(res) {
            initialOption.current = _option;
            resolve(res);
          },
          fail: reject
        });
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);
  var setTitleAsync = (0, _react.useCallback)(function (title) {
    return new Promise(function (resolve, reject) {
      try {
        if (!title) {
          throw new Error('you must provide a title');
        }

        (0, _taro.setNavigationBarTitle)({
          title: title,
          success: function success(res) {
            initialOption.current = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
              title: title
            });
            resolve(res);
          }
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  var setColorAsync = (0, _react.useCallback)(function (option) {
    return new Promise(function (resolve, reject) {
      try {
        if (!option.backgroundColor || !option.frontColor) {
          throw new Error('you must provide backgroundColor or frontColor');
        }

        (0, _taro.setNavigationBarColor)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, option), {}, {
          success: function success(res) {
            var frontColor = option.frontColor,
                backgroundColor = option.backgroundColor,
                _option$animation = option.animation,
                animation = _option$animation === void 0 ? false : _option$animation;
            initialOption.current = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
              frontColor: frontColor,
              backgroundColor: backgroundColor,
              animation: animation
            });
            resolve(res);
          },
          fail: reject
        }));
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  var hideHomeButtonAsync = (0, _react.useCallback)(function () {
    return new Promise(function (resolve, reject) {
      try {
        (0, _taro.hideHomeButton)({
          success: function success(res) {
            initialOption.current = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
              hideHomeButton: true
            });
            resolve(res);
          },
          fail: reject
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  return [((_initialOption$curren2 = initialOption.current) === null || _initialOption$curren2 === void 0 ? void 0 : _initialOption$curren2.loading) || false, {
    toggleLoading: toggleLoadingAsync,
    hideHomeButton: hideHomeButtonAsync,
    setTitle: setTitleAsync,
    setColor: setColorAsync
  }];
}

var _default = useNavigationBar;
exports.default = _default;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useToast/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useToast/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");

function useToast(option) {
  var initialOption = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    initialOption.current = option;
  }, [option]);
  var showToastAsync = (0, _react.useCallback)(function (option) {
    return new Promise(function (resolve, reject) {
      try {
        if (!option && !initialOption.current) {
          console.warn('please provide a option');
          return reject(new Error('please provide a option'));
        } else {
          var options = Object.assign({}, initialOption.current || {}, option || {});

          if (!options.title) {
            reject({
              errMsg: 'showToast: fail'
            });
          } else {
            (0, _taro.showToast)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, options), {}, {
              success: resolve,
              fail: reject
            })).catch(reject);
          }
        }
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);
  var hideToastAsync = (0, _react.useCallback)(function () {
    return new Promise(function (resolve, reject) {
      try {
        (0, _taro.hideToast)({
          success: resolve,
          fail: reject
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  return [showToastAsync, hideToastAsync];
}

var _default = useToast;
exports.default = _default;

/***/ }),

/***/ "./src/pages/index/hook.png":
/*!**********************************!*\
  !*** ./src/pages/index/hook.png ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/hook.png";

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"Taro-hooks","enableShareAppMessage":true};

_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map