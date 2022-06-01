(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _regeneratorRuntime; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/login/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/login/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _public_user_miniprogram_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/user-miniprogram/hooks */ "./src/public/user-miniprogram/hooks/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/pages/login/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





 // import {} from 'taro-hooks'





var Login = function Login() {
  var _useLogin = Object(_public_user_miniprogram_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useLogin */ "b"])(),
      getCode = _useLogin.getCode;

  var _useGetInfo = Object(_public_user_miniprogram_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useGetInfo */ "a"])(),
      options = _useGetInfo.options;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
    className: "login",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtButton */ "a"], {
      onClick: /*#__PURE__*/Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee() {
        var code;
        return Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getCode();

              case 2:
                code = _context.sent;
                console.log(code);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      children: "\u83B7\u53D6\u767B\u9646coee"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "a"], Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options), {}, {
      children: "\u83B7\u53D6\u4E2A\u4EBA\u4FE1\u606F"
    }))]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ "./src/pages/login/index.less":
/*!************************************!*\
  !*** ./src/pages/login/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/login/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/public/taro-utils/configuration/globaldata.json":
/*!*************************************************************!*\
  !*** ./src/public/taro-utils/configuration/globaldata.json ***!
  \*************************************************************/
/*! exports provided: ENVAPI, KA, default */
/*! exports used: default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ENVAPI\":{\"DEV\":\"\",\"TEST\":\"\",\"PROD\":\"\"},\"KA\":{}}");

/***/ }),

/***/ "./src/public/taro-utils/methods/global-env.ts":
/*!*****************************************************!*\
  !*** ./src/public/taro-utils/methods/global-env.ts ***!
  \*****************************************************/
/*! exports provided: isH5, isWeapp, isAlipay, isDev */
/*! exports used: isAlipay, isDev, isWeapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isH5 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isWeapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAlipay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDev; });
var isH5 = "weapp" === 'h5';
var isWeapp = "weapp" === 'weapp';
var isAlipay = "weapp" === 'alipay';
var isDev = "development" === 'development';

/***/ }),

/***/ "./src/public/taro-utils/methods/index.ts":
/*!************************************************!*\
  !*** ./src/public/taro-utils/methods/index.ts ***!
  \************************************************/
/*! exports provided: isH5, isWeapp, isAlipay, isDev, HTTP */
/*! exports used: isAlipay, isWeapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _global_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-env */ "./src/public/taro-utils/methods/global-env.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _global_env__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _global_env__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/public/taro-utils/methods/request.ts");



/***/ }),

/***/ "./src/public/taro-utils/methods/request.ts":
/*!**************************************************!*\
  !*** ./src/public/taro-utils/methods/request.ts ***!
  \**************************************************/
/*! exports provided: HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HTTP */
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _global_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-env */ "./src/public/taro-utils/methods/global-env.ts");
/* harmony import */ var _apiservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiservice */ "./src/public/taro-utils/apiservice/index.ts");
/* harmony import */ var _configuration_globaldata_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configuration/globaldata.json */ "./src/public/taro-utils/configuration/globaldata.json");
var _configuration_globaldata_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../configuration/globaldata.json */ "./src/public/taro-utils/configuration/globaldata.json", 1);



// import { request } from "@tarojs/taro/types";



var ENVAPI = _configuration_globaldata_json__WEBPACK_IMPORTED_MODULE_5__.ENVAPI;
var dontLogin = [];
var DEV = ENVAPI.DEV,
    PROD = ENVAPI.PROD,
    TEST = ENVAPI.TEST;

var getRequestUrl = function getRequestUrl(path) {
  var baseUrl = _global_env__WEBPACK_IMPORTED_MODULE_3__[/* isDev */ "b"] ? DEV : PROD;
  return "".concat(baseUrl).concat(path);
};

var errCallback = {
  403: function _() {},
  401: function _() {},
  notNumber: function notNumber(data) {},
  init: function init(code, data) {
    if (code === 0) {
      return false;
    }

    var func = this[code] ? this[code] : this.notNumber;

    try {
      func(data);
      return true;
    } catch (err) {}
  }
};

var request = function request(url, options) {
  var urlFormat = getRequestUrl(url);
  options.header = options.header || {};
  return new Promise( /*#__PURE__*/function () {
    var _ref = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(resolve, reject) {
      var res, data, code, paramete;
      return Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_apiservice__WEBPACK_IMPORTED_MODULE_4__[/* tarorequest */ "b"])(Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, options), {}, {
                url: urlFormat
              }));

            case 2:
              res = _context.sent;
              data = res && res.data || {};
              code = res && res.data && res.data.code;
              paramete = data && data.data || {};

              if (errCallback.init(code, data)) {
                _context.next = 9;
                break;
              }

              resolve(paramete);
              return _context.abrupt("return");

            case 9:
              reject(res);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var postInit = function postInit(options) {
  return Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, {
    method: "post",
    header: {
      "content-type": "application/json"
    }
  }), options || {});
};

var HTTP = {
  get: function get(url, options) {
    var opt = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, {
      method: "GET",
      header: {}
    }), options || {});

    return request(url, opt);
  },
  post: function post(url, options) {
    return request(url, postInit(options));
  }
};

/***/ }),

/***/ "./src/public/user-miniprogram/hooks/index.ts":
/*!****************************************************!*\
  !*** ./src/public/user-miniprogram/hooks/index.ts ***!
  \****************************************************/
/*! exports provided: useLogin, useGetInfo */
/*! exports used: useGetInfo, useLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _use_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-login */ "./src/public/user-miniprogram/hooks/use-login/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _use_login__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _use_get_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-get-info */ "./src/public/user-miniprogram/hooks/use-get-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _use_get_info__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),

/***/ "./src/public/user-miniprogram/hooks/use-get-info/index.ts":
/*!*****************************************************************!*\
  !*** ./src/public/user-miniprogram/hooks/use-get-info/index.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_taro_utils_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/taro-utils/methods */ "./src/public/taro-utils/methods/index.ts");






/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var weappLogin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/function () {
    var _ref = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee(event) {
      return Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              /** 小程序登录 */
              if (event && event.detail && event.detail.errMsg) {
                if (event.detail.errMsg.indexOf("ok") !== -1) {
                  try {
                    console.log(event.detail);
                  } catch (err) {
                    console.log(err);
                  }
                }
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var alipayLogin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee2() {
    var code;
    return Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getOpenUserInfo();

          case 3:
            code = _context2.sent;
            console.log(code);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  })), []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    openType: _public_taro_utils_methods__WEBPACK_IMPORTED_MODULE_5__[/* isAlipay */ "a"] ? "getAuthorize" : "getUserInfo",
    onGetAuthorize: alipayLogin,
    onGetUserInfo: weappLogin,
    scope: "userInfo"
  }),
      _useState2 = Object(_Users_xdb_Desktop_cb_code_citizen_end_main_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 1),
      options = _useState2[0];

  return {
    options: options
  };
});

/***/ }),

/***/ "./src/public/user-miniprogram/hooks/use-login/index.ts":
/*!**************************************************************!*\
  !*** ./src/public/user-miniprogram/hooks/use-login/index.ts ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_taro_utils_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/taro-utils/methods */ "./src/public/taro-utils/methods/index.ts");



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var weappLogin = function weappLogin(resovle, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.login({
      success: function success(res) {
        if (res.code) {
          resovle(res);
        } else {
          console.log("登录失败！" + res.errMsg);
          reject(res);
        }
      }
    });
  };

  var alipayLogin = function alipayLogin(resovle, reject) {
    my.getAuthCode({
      scopes: ["auth_user"],
      success: function success(res) {
        resovle({
          code: res.authCode,
          authSuccessScopes: res.authSuccessScopes
        });
      },
      fail: function fail(err) {
        reject({
          errMsg: err.authErrorScopes
        });
      }
    });
  };

  var getCode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return new Promise(function (resovle, reject) {
      if (_public_taro_utils_methods__WEBPACK_IMPORTED_MODULE_2__[/* isWeapp */ "b"]) {
        weappLogin(resovle, reject);
      }

      if (_public_taro_utils_methods__WEBPACK_IMPORTED_MODULE_2__[/* isAlipay */ "a"]) {
        alipayLogin(resovle, reject);
      }
    });
  }, []);
  return {
    getCode: getCode
  };
});

/***/ })

},[["./src/pages/login/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map