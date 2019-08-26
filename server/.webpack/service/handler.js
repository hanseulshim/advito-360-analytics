(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/lodash.merge/index.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash.merge/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../server/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/objection/lib/model/AjvValidator.js":
/*!***********************************************************!*\
  !*** ../node_modules/objection/lib/model/AjvValidator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Validator } = __webpack_require__(/*! ./Validator */ "../node_modules/objection/lib/model/Validator.js");
const { ValidationErrorType } = __webpack_require__(/*! ../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { isObject, once, cloneDeep: lodashCloneDeep, omit } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

const getAjv = once(() => {
  try {
    return __webpack_require__(/*! ajv */ "ajv");
  } catch (err) {
    throw new Error('Optional ajv dependency not installed. Please run `npm install ajv --save`');
  }
});

class AjvValidator extends Validator {
  static init(self, conf) {
    super.init(self, conf);

    self.ajvOptions = Object.assign({ errorDataPath: 'property' }, conf.options, {
      allErrors: true
    });

    // Create a normal Ajv instance.
    self.ajv = new getAjv()(
      Object.assign(
        {
          useDefaults: true
        },
        self.ajvOptions
      )
    );

    // Create an instance that doesn't set default values. We need this one
    // to validate `patch` objects (objects that have a subset of properties).
    self.ajvNoDefaults = new getAjv()(
      Object.assign({}, self.ajvOptions, {
        useDefaults: false
      })
    );

    // A cache for the compiled validator functions.
    self.cache = new Map();

    conf.onCreateAjv(self.ajv);
    conf.onCreateAjv(self.ajvNoDefaults);
  }

  beforeValidate({ json, model, options, ctx }) {
    ctx.jsonSchema = model.constructor.getJsonSchema();

    // Objection model's have a `$beforeValidate` hook that is allowed to modify the schema.
    // We need to clone the schema in case the function modifies it. We only do this in the
    // rare case that the given model has implemented the hook.
    if (model.$beforeValidate !== model.$objectionModelClass.prototype.$beforeValidate) {
      ctx.jsonSchema = cloneDeep(ctx.jsonSchema);
      const ret = model.$beforeValidate(ctx.jsonSchema, json, options);

      if (ret !== undefined) {
        ctx.jsonSchema = ret;
      }
    }
  }

  validate({ json, model, options, ctx }) {
    if (!ctx.jsonSchema) {
      return json;
    }

    const modelClass = model.constructor;
    const validator = this.getValidator(modelClass, ctx.jsonSchema, !!options.patch);

    // We need to clone the input json if we are about to set default values.
    if (!options.mutable && !options.patch && setsDefaultValues(ctx.jsonSchema)) {
      json = cloneDeep(json);
    }

    validator.call(model, json);
    const error = parseValidationError(validator.errors, modelClass, options);

    if (error) {
      throw error;
    }

    return json;
  }

  getValidator(modelClass, jsonSchema, isPatchObject) {
    // Use the AJV custom serializer if provided.
    const createCacheKey = this.ajvOptions.serialize || JSON.stringify;

    // Optimization for the common case where jsonSchema is never modified.
    // In that case we don't need to call the costly createCacheKey function.
    const cacheKey =
      jsonSchema === modelClass.getJsonSchema()
        ? modelClass.uniqueTag()
        : createCacheKey(jsonSchema);

    let validators = this.cache.get(cacheKey);
    let validator = null;

    if (!validators) {
      validators = {
        // Validator created for the schema object without `required` properties
        // using the AJV instance that doesn't set default values.
        patchValidator: null,

        // Validator created for the unmodified schema.
        normalValidator: null
      };

      this.cache.set(cacheKey, validators);
    }

    if (isPatchObject) {
      validator = validators.patchValidator;

      if (!validator) {
        validator = this.compilePatchValidator(jsonSchema);
        validators.patchValidator = validator;
      }
    } else {
      validator = validators.normalValidator;

      if (!validator) {
        validator = this.compileNormalValidator(jsonSchema);
        validators.normalValidator = validator;
      }
    }

    return validator;
  }

  compilePatchValidator(jsonSchema) {
    jsonSchema = jsonSchemaWithoutRequired(jsonSchema);
    // We need to use the ajv instance that doesn't set the default values.
    return this.ajvNoDefaults.compile(jsonSchema);
  }

  compileNormalValidator(jsonSchema) {
    return this.ajv.compile(jsonSchema);
  }
}

function parseValidationError(errors, modelClass, options) {
  if (!errors) {
    return null;
  }

  let relationNames = modelClass.getRelationNames();
  let errorHash = {};
  let numErrors = 0;

  for (const error of errors) {
    const dataPath = `${options.dataPath || ''}${error.dataPath}`;

    // If additionalProperties = false, relations can pop up as additionalProperty
    // errors. Skip those.
    if (
      error.params &&
      error.params.additionalProperty &&
      relationNames.includes(error.params.additionalProperty)
    ) {
      continue;
    }

    // Unknown properties are reported in `['propertyName']` notation,
    // so replace those with dot-notation, see:
    // https://github.com/epoberezkin/ajv/issues/671
    const key = dataPath.replace(/\['([^' ]*)'\]/g, '.$1').substring(1);

    // More than one error can occur for the same key in Ajv, merge them in the array:
    const array = errorHash[key] || (errorHash[key] = []);

    // Use unshift instead of push so that the last error ends up at [0],
    // preserving previous behavior where only the last error was stored.
    array.unshift({
      message: error.message,
      keyword: error.keyword,
      params: error.params
    });

    ++numErrors;
  }

  if (numErrors === 0) {
    return null;
  }

  return modelClass.createValidationError({
    type: ValidationErrorType.ModelValidation,
    data: errorHash
  });
}

function cloneDeep(obj) {
  if (isObject(obj) && obj.$isObjectionModel) {
    return obj.$clone();
  } else {
    return lodashCloneDeep(obj);
  }
}

function setsDefaultValues(jsonSchema) {
  return jsonSchema && jsonSchema.properties && hasDefaults(jsonSchema.properties);
}

function hasDefaults(obj) {
  if (Array.isArray(obj)) {
    return arrayHasDefaults(obj);
  } else {
    return objectHasDefaults(obj);
  }
}

function arrayHasDefaults(arr) {
  for (let i = 0, l = arr.length; i < l; ++i) {
    const val = arr[i];

    if (isObject(val) && hasDefaults(val)) {
      return true;
    }
  }

  return false;
}

function objectHasDefaults(obj) {
  const keys = Object.keys(obj);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];

    if (key === 'default') {
      return true;
    } else {
      const val = obj[key];

      if (isObject(val) && hasDefaults(val)) {
        return true;
      }
    }
  }

  return false;
}

function jsonSchemaWithoutRequired(jsonSchema) {
  const subSchemaProps = ['anyOf', 'oneOf', 'allOf', 'not', 'then', 'else'];

  return Object.assign(
    omit(jsonSchema, ['required', ...subSchemaProps]),
    ...subSchemaProps.map(prop => subSchemaWithoutRequired(jsonSchema, prop))
  );
}

function subSchemaWithoutRequired(jsonSchema, prop) {
  if (jsonSchema[prop]) {
    if (Array.isArray(jsonSchema[prop])) {
      const schemaArray = jsonSchemaArrayWithoutRequired(jsonSchema[prop]);

      if (schemaArray.length !== 0) {
        return {
          [prop]: schemaArray
        };
      } else {
        return {};
      }
    } else {
      return {
        [prop]: jsonSchemaWithoutRequired(jsonSchema[prop])
      };
    }
  } else {
    return {};
  }
}

function jsonSchemaArrayWithoutRequired(jsonSchemaArray) {
  return jsonSchemaArray.map(jsonSchemaWithoutRequired).filter(isNotEmptyObject);
}

function isNotEmptyObject(obj) {
  return Object.keys(obj).length !== 0;
}

module.exports = {
  AjvValidator
};


/***/ }),

/***/ "../node_modules/objection/lib/model/Model.js":
/*!****************************************************!*\
  !*** ../node_modules/objection/lib/model/Model.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { clone } = __webpack_require__(/*! ./modelClone */ "../node_modules/objection/lib/model/modelClone.js");
const { bindKnex } = __webpack_require__(/*! ./modelBindKnex */ "../node_modules/objection/lib/model/modelBindKnex.js");
const { validate } = __webpack_require__(/*! ./modelValidate */ "../node_modules/objection/lib/model/modelValidate.js");
const { isMsSql } = __webpack_require__(/*! ../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const { omit, pick } = __webpack_require__(/*! ./modelFilter */ "../node_modules/objection/lib/model/modelFilter.js");
const { visitModels } = __webpack_require__(/*! ./modelVisitor */ "../node_modules/objection/lib/model/modelVisitor.js");
const { hasId, getSetId } = __webpack_require__(/*! ./modelId */ "../node_modules/objection/lib/model/modelId.js");
const { map: promiseMap } = __webpack_require__(/*! ../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { toJson, toDatabaseJson } = __webpack_require__(/*! ./modelToJson */ "../node_modules/objection/lib/model/modelToJson.js");
const { values, propKey, hasProps } = __webpack_require__(/*! ./modelValues */ "../node_modules/objection/lib/model/modelValues.js");
const { defineNonEnumerableProperty } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { parseRelationsIntoModelInstances } = __webpack_require__(/*! ./modelParseRelations */ "../node_modules/objection/lib/model/modelParseRelations.js");
const { fetchTableMetadata, tableMetadata } = __webpack_require__(/*! ./modelTableMetadata */ "../node_modules/objection/lib/model/modelTableMetadata.js");
const { asArray, isFunction, isString, asSingle } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { setJson, setFast, setRelated, appendRelated, setDatabaseJson } = __webpack_require__(/*! ./modelSet */ "../node_modules/objection/lib/model/modelSet.js");
const {
  getJsonAttributes,
  parseJsonAttributes,
  formatJsonAttributes
} = __webpack_require__(/*! ./modelJsonAttributes */ "../node_modules/objection/lib/model/modelJsonAttributes.js");
const { columnNameToPropertyName, propertyNameToColumnName } = __webpack_require__(/*! ./modelColPropMap */ "../node_modules/objection/lib/model/modelColPropMap.js");

const { raw } = __webpack_require__(/*! ../queryBuilder/RawBuilder */ "../node_modules/objection/lib/queryBuilder/RawBuilder.js");
const { ref } = __webpack_require__(/*! ../queryBuilder/ReferenceBuilder */ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js");

const { AjvValidator } = __webpack_require__(/*! ./AjvValidator */ "../node_modules/objection/lib/model/AjvValidator.js");
const { QueryBuilder } = __webpack_require__(/*! ../queryBuilder/QueryBuilder */ "../node_modules/objection/lib/queryBuilder/QueryBuilder.js");
const { NotFoundError } = __webpack_require__(/*! ./NotFoundError */ "../node_modules/objection/lib/model/NotFoundError.js");
const { ValidationError } = __webpack_require__(/*! ./ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { ModifierNotFoundError } = __webpack_require__(/*! ./ModifierNotFoundError */ "../node_modules/objection/lib/model/ModifierNotFoundError.js");
const { RelationProperty } = __webpack_require__(/*! ../relations/RelationProperty */ "../node_modules/objection/lib/relations/RelationProperty.js");

const { HasOneRelation } = __webpack_require__(/*! ../relations/hasOne/HasOneRelation */ "../node_modules/objection/lib/relations/hasOne/HasOneRelation.js");
const { HasManyRelation } = __webpack_require__(/*! ../relations/hasMany/HasManyRelation */ "../node_modules/objection/lib/relations/hasMany/HasManyRelation.js");
const { ManyToManyRelation } = __webpack_require__(/*! ../relations/manyToMany/ManyToManyRelation */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyRelation.js");
const { BelongsToOneRelation } = __webpack_require__(/*! ../relations/belongsToOne/BelongsToOneRelation */ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelation.js");
const { HasOneThroughRelation } = __webpack_require__(/*! ../relations/hasOneThrough/HasOneThroughRelation */ "../node_modules/objection/lib/relations/hasOneThrough/HasOneThroughRelation.js");

const { InstanceFindOperation } = __webpack_require__(/*! ../queryBuilder/operations/InstanceFindOperation */ "../node_modules/objection/lib/queryBuilder/operations/InstanceFindOperation.js");
const { InstanceInsertOperation } = __webpack_require__(/*! ../queryBuilder/operations/InstanceInsertOperation */ "../node_modules/objection/lib/queryBuilder/operations/InstanceInsertOperation.js");
const { InstanceUpdateOperation } = __webpack_require__(/*! ../queryBuilder/operations/InstanceUpdateOperation */ "../node_modules/objection/lib/queryBuilder/operations/InstanceUpdateOperation.js");
const { InstanceDeleteOperation } = __webpack_require__(/*! ../queryBuilder/operations/InstanceDeleteOperation */ "../node_modules/objection/lib/queryBuilder/operations/InstanceDeleteOperation.js");

class Model {
  $id(maybeId) {
    return getSetId(this, maybeId);
  }

  $hasId() {
    return hasId(this);
  }

  $hasProps(props) {
    return hasProps(this, props);
  }

  $query(trx) {
    const modelClass = this.constructor;

    return modelClass
      .query(trx)
      .findOperationFactory(() => {
        return new InstanceFindOperation('find', { instance: this });
      })
      .insertOperationFactory(() => {
        return new InstanceInsertOperation('insert', { instance: this });
      })
      .updateOperationFactory(() => {
        return new InstanceUpdateOperation('update', { instance: this });
      })
      .patchOperationFactory(() => {
        return new InstanceUpdateOperation('patch', {
          instance: this,
          modelOptions: { patch: true }
        });
      })
      .deleteOperationFactory(() => {
        return new InstanceDeleteOperation('delete', { instance: this });
      })
      .relateOperationFactory(() => {
        throw new Error('`relate` makes no sense in this context');
      })
      .unrelateOperationFactory(() => {
        throw new Error('`unrelate` makes no sense in this context');
      });
  }

  $relatedQuery(relationName, trx) {
    const modelClass = this.constructor;
    const relation = modelClass.getRelation(relationName);
    const RelatedModelClass = relation.relatedModelClass;

    return RelatedModelClass.query(trx)
      .findOperationFactory(builder => {
        const operation = relation.find(builder, [this]);
        operation.assignResultToOwner = this.constructor.relatedFindQueryMutates;
        return operation;
      })
      .insertOperationFactory(builder => {
        const operation = relation.insert(builder, this);
        operation.assignResultToOwner = this.constructor.relatedInsertQueryMutates;
        return operation;
      })
      .updateOperationFactory(builder => {
        return relation.update(builder, this);
      })
      .patchOperationFactory(builder => {
        return relation.patch(builder, this);
      })
      .deleteOperationFactory(builder => {
        return relation.delete(builder, this);
      })
      .relateOperationFactory(builder => {
        return relation.relate(builder, this);
      })
      .unrelateOperationFactory(builder => {
        return relation.unrelate(builder, this);
      });
  }

  $loadRelated(relationExpression, modifiers, trx) {
    return this.constructor.loadRelated(this, relationExpression, modifiers, trx);
  }

  $beforeValidate(jsonSchema, json, options) {
    /* istanbul ignore next */
    return jsonSchema;
  }

  $validate(json, options) {
    return validate(this, json, options);
  }

  $afterValidate(json, options) {
    // Do nothing by default.
  }

  $parseDatabaseJson(json) {
    const columnNameMappers = this.constructor.getColumnNameMappers();

    if (columnNameMappers) {
      json = columnNameMappers.parse(json);
    }

    return parseJsonAttributes(json, this.constructor);
  }

  $formatDatabaseJson(json) {
    const columnNameMappers = this.constructor.getColumnNameMappers();

    json = formatJsonAttributes(json, this.constructor);

    if (columnNameMappers) {
      json = columnNameMappers.format(json);
    }

    return json;
  }

  $parseJson(json, options) {
    return json;
  }

  $formatJson(json) {
    return json;
  }

  $setJson(json, options) {
    return setJson(this, json, options);
  }

  $setDatabaseJson(json) {
    return setDatabaseJson(this, json);
  }

  $set(obj) {
    return setFast(this, obj);
  }

  $setRelated(relation, models) {
    return setRelated(this, relation, models);
  }

  $appendRelated(relation, models) {
    return appendRelated(this, relation, models);
  }

  $toJson(opt) {
    return toJson(this, opt);
  }

  toJSON(opt) {
    return this.$toJson(opt);
  }

  $toDatabaseJson(builder) {
    return toDatabaseJson(this, builder);
  }

  $beforeInsert(queryContext) {
    // Do nothing by default.
  }

  $afterInsert(queryContext) {
    // Do nothing by default.
  }

  $beforeUpdate(opt, queryContext) {
    // Do nothing by default.
  }

  $afterUpdate(opt, queryContext) {
    // Do nothing by default.
  }

  // TODO: Deprecate & remove in 3.0
  $afterGet(queryContext) {
    // Do nothing by default.
  }

  $afterFind(queryContext) {
    // Do nothing by default.
  }

  $beforeDelete(queryContext) {
    // Do nothing by default.
  }

  $afterDelete(queryContext) {
    // Do nothing by default.
  }

  $omit(...args) {
    return omit(this, args);
  }

  $pick(...args) {
    return pick(this, args);
  }

  $values(props) {
    return values(this, props);
  }

  $propKey(props) {
    return propKey(this, props);
  }

  $idKey() {
    return this.$propKey(this.constructor.getIdPropertyArray());
  }

  $clone(opt) {
    return clone(this, !!(opt && opt.shallow), false);
  }

  $traverse(filterConstructor, callback) {
    if (callback === undefined) {
      callback = filterConstructor;
      filterConstructor = null;
    }

    this.constructor.traverse(filterConstructor, this, callback);
    return this;
  }

  $traverseAsync(filterConstructor, callback) {
    if (callback === undefined) {
      callback = filterConstructor;
      filterConstructor = null;
    }

    return this.constructor.traverseAsync(filterConstructor, this, callback);
  }

  $omitFromJson(props) {
    if (arguments.length === 0) {
      return this.$$omitFromJson;
    } else {
      if (!this.hasOwnProperty('$$omitFromJson')) {
        defineNonEnumerableProperty(this, '$$omitFromJson', props);
      } else {
        this.$$omitFromJson = this.$$omitFromJson.concat(props);
      }
    }
  }

  $omitFromDatabaseJson(props) {
    if (arguments.length === 0) {
      return this.$$omitFromDatabaseJson;
    } else {
      if (!this.hasOwnProperty('$$omitFromDatabaseJson')) {
        defineNonEnumerableProperty(this, '$$omitFromDatabaseJson', props);
      } else {
        this.$$omitFromDatabaseJson = this.$$omitFromDatabaseJson.concat(props);
      }
    }
  }

  $knex() {
    return this.constructor.knex();
  }

  $transaction() {
    return this.constructor.transaction();
  }

  get $ref() {
    return this.constructor.ref;
  }

  static get objectionModelClass() {
    return Model;
  }

  static fromJson(json, options) {
    const model = new this();
    model.$setJson(json || {}, options);
    return model;
  }

  static fromDatabaseJson(json) {
    const model = new this();
    model.$setDatabaseJson(json || {});
    return model;
  }

  static onCreateQuery(builder) {
    // Do nothing by default.
  }

  static beforeFind(args) {
    // Do nothing by default.
  }

  static afterFind(args) {
    // Do nothing by default.
  }

  static beforeInsert(args) {
    // Do nothing by default.
  }

  static afterInsert(args) {
    // Do nothing by default.
  }

  static beforeUpdate(args) {
    // Do nothing by default.
  }

  static afterUpdate(args) {
    // Do nothing by default.
  }

  static beforeDelete(args) {
    // Do nothing by default.
  }

  static afterDelete(args) {
    // Do nothing by default.
  }

  static omitImpl(obj, prop) {
    delete obj[prop];
  }

  static joinTableAlias(relationPath) {
    return `${relationPath}_join`;
  }

  static createValidator() {
    return new AjvValidator({
      onCreateAjv: ajv => {
        /* Do Nothing by default */
      },
      options: {
        allErrors: true,
        validateSchema: false,
        ownProperties: true,
        v5: true
      }
    });
  }

  static modifierNotFound(builder, modifier) {
    throw new this.ModifierNotFoundError(modifier);
  }

  static createNotFoundError(ctx, props) {
    return new this.NotFoundError(props);
  }

  static createValidationError(props) {
    return new this.ValidationError(props);
  }

  static getTableName() {
    let tableName = this.tableName;

    if (isFunction(tableName)) {
      tableName = this.tableName();
    }

    if (!isString(tableName)) {
      throw new Error(`Model ${this.name} must have a static property tableName`);
    }

    return tableName;
  }

  static getIdColumn() {
    let idColumn = this.idColumn;

    if (isFunction(idColumn)) {
      idColumn = this.idColumn();
    }

    return idColumn;
  }

  static getValidator() {
    return cachedGet(this, '$$validator', getValidator);
  }

  static getJsonSchema() {
    return cachedGet(this, '$$jsonSchema', getJsonSchema);
  }

  static getJsonAttributes() {
    return cachedGet(this, '$$jsonAttributes', getJsonAttributes);
  }

  static getColumnNameMappers() {
    return cachedGet(this, '$$columnNameMappers', getColumnNameMappers);
  }

  static getConcurrency(knex) {
    const DEFAULT_CONCURRENCY = 4;

    if (this.concurrency === null) {
      if (!knex) {
        return DEFAULT_CONCURRENCY;
      }

      // The mssql driver is shit, and we cannot have concurrent queries.
      if (isMsSql(knex)) {
        return 1;
      } else {
        return DEFAULT_CONCURRENCY;
      }
    } else {
      if (isFunction(this.concurrency)) {
        return this.concurrency();
      } else {
        return this.concurrency;
      }
    }
  }

  static getModifiers() {
    return this.modifiers || this.namedFilters || {};
  }

  static columnNameToPropertyName(columnName) {
    let colToProp = cachedGet(this, '$$colToProp', () => new Map());
    let propertyName = colToProp.get(columnName);

    if (!propertyName) {
      propertyName = columnNameToPropertyName(this, columnName);
      colToProp.set(columnName, propertyName);
    }

    return propertyName;
  }

  static propertyNameToColumnName(propertyName) {
    let propToCol = cachedGet(this, '$$propToCol', () => new Map());
    let columnName = propToCol.get(propertyName);

    if (!columnName) {
      columnName = propertyNameToColumnName(this, propertyName);
      propToCol.set(propertyName, columnName);
    }

    return columnName;
  }

  static getReadOnlyAttributes() {
    return cachedGet(this, '$$readOnlyAttributes', getReadOnlyAttributes);
  }

  static getIdRelationProperty() {
    return cachedGet(this, '$$idRelationProperty', getIdRelationProperty);
  }

  static getIdColumnArray() {
    return this.getIdRelationProperty().cols;
  }

  static getIdPropertyArray() {
    return this.getIdRelationProperty().props;
  }

  static getIdProperty() {
    const idProps = this.getIdPropertyArray();

    if (idProps.length === 1) {
      return idProps[0];
    } else {
      return idProps;
    }
  }

  static getRelationMappings() {
    return cachedGet(this, '$$relationMappings', getRelationMappings);
  }

  static getRelations() {
    const relations = Object.create(null);

    for (const relationName of this.getRelationNames()) {
      relations[relationName] = this.getRelation(relationName);
    }

    return relations;
  }

  static getRelationNames() {
    return cachedGet(this, '$$relationNames', getRelationNames);
  }

  static getVirtualAttributes() {
    return cachedGet(this, '$$virtualAttributes', getVirtualAttributes);
  }

  static query(trx) {
    const query = this.QueryBuilder.forClass(this).transacting(trx);
    this.onCreateQuery(query);
    return query;
  }

  static relatedQuery(relationName) {
    const relation = this.getRelation(relationName);
    const modelClass = relation.relatedModelClass;

    return modelClass
      .query()
      .alias(relation.name)
      .findOperationFactory(builder => relation.subQuery(builder));
  }

  static fetchTableMetadata(opt) {
    return fetchTableMetadata(this, opt);
  }

  static tableMetadata(opt) {
    return tableMetadata(this, opt);
  }

  static knex(...args) {
    if (args.length) {
      defineNonEnumerableProperty(this, '$$knex', args[0]);
    } else {
      return this.$$knex;
    }
  }

  static transaction() {
    return this.knex();
  }

  static raw(...args) {
    return raw(...args).toKnexRaw(this.query());
  }

  static get ref() {
    return (...args) => {
      return ref(...args).model(this);
    };
  }

  /**
   * NB. for v2.0, this can simply return `this.knex().fn`.
   * However, in order to maintain backwards comparability of a bug that didn't
   * have this method as a getter, the returned value needs to be callable and
   * return the "same" `knex#FunctionHelper` instance.
   * The effect is that `Model.fn.now()` and `Model.fn().now()` produce the same result.
   */
  static get fn() {
    const fnHelper = this.knex().fn;
    const wrapper = () => fnHelper;
    Object.assign(wrapper, fnHelper);
    Object.setPrototypeOf(wrapper, Object.getPrototypeOf(fnHelper));
    return wrapper;
  }

  static knexQuery() {
    return this.knex().table(this.getTableName());
  }

  static uniqueTag() {
    if (this.name) {
      return `${this.getTableName()}_${this.name}`;
    } else {
      return this.getTableName();
    }
  }

  static bindKnex(knex) {
    return bindKnex(this, knex);
  }

  static bindTransaction(trx) {
    return bindKnex(this, trx);
  }

  static ensureModel(model, options) {
    const modelClass = this;

    if (!model) {
      return null;
    }

    if (model instanceof modelClass) {
      return parseRelationsIntoModelInstances(model, model, options);
    } else {
      return modelClass.fromJson(model, options);
    }
  }

  static ensureModelArray(input, options) {
    if (!input) {
      return [];
    }

    if (Array.isArray(input)) {
      const models = new Array(input.length);

      for (let i = 0, l = input.length; i < l; ++i) {
        models[i] = this.ensureModel(input[i], options);
      }

      return models;
    } else {
      return [this.ensureModel(input, options)];
    }
  }

  static getRelationUnsafe(name) {
    const mapping = this.getRelationMappings()[name];

    if (!mapping) {
      return null;
    }

    if (!this.hasOwnProperty('$$relations')) {
      defineNonEnumerableProperty(this, '$$relations', Object.create(null));
    }

    if (!this.$$relations[name]) {
      this.$$relations[name] = new mapping.relation(name, this);
      this.$$relations[name].setMapping(mapping);
    }

    return this.$$relations[name];
  }

  static getRelation(name) {
    const relation = this.getRelationUnsafe(name);

    if (!relation) {
      throw new Error(`A model class ${this.name} doesn't have relation ${name}`);
    }

    return relation;
  }

  static loadRelated($models, expression, modifiers, trx) {
    return this.query(trx)
      .resolve(this.ensureModelArray($models))
      .findOptions({ dontCallFindHooks: true })
      .eager(expression, modifiers)
      .runAfter(models => (Array.isArray($models) ? models : models[0]));
  }

  static traverse(...args) {
    const { traverser, models, filterConstructor } = getTraverseArgs(...args);

    if (!asSingle(models)) {
      return;
    }

    const modelClass = asSingle(models).constructor;

    visitModels(models, modelClass, (model, _, parent, relation) => {
      if (!filterConstructor || model instanceof filterConstructor) {
        traverser(model, parent, relation && relation.name);
      }
    });

    return this;
  }

  static traverseAsync(...args) {
    const { traverser, models, filterConstructor } = getTraverseArgs(...args);

    if (!asSingle(models)) {
      return Promise.resolve();
    }

    const modelClass = asSingle(models).constructor;
    const promises = [];

    visitModels(models, modelClass, (model, _, parent, relation) => {
      if (!filterConstructor || model instanceof filterConstructor) {
        const maybePromise = traverser(model, parent, relation && relation.name);
        promises.push(maybePromise);
      }
    });

    return promiseMap(promises, it => it, { concurrency: this.getConcurrency(this.knex()) });
  }
}

Object.defineProperties(Model.prototype, {
  $isObjectionModel: {
    enumerable: false,
    writable: false,
    value: true
  },

  $objectionModelClass: {
    enumerable: false,
    writable: false,
    value: Model
  }
});

Model.QueryBuilder = QueryBuilder;

Model.HasOneRelation = HasOneRelation;
Model.HasManyRelation = HasManyRelation;
Model.ManyToManyRelation = ManyToManyRelation;
Model.BelongsToOneRelation = BelongsToOneRelation;
Model.HasOneThroughRelation = HasOneThroughRelation;

Model.JoinEagerAlgorithm = 'JoinEagerAlgorithm';
Model.NaiveEagerAlgorithm = 'NaiveEagerAlgorithm';
Model.WhereInEagerAlgorithm = 'WhereInEagerAlgorithm';

Model.ValidationError = ValidationError;
Model.NotFoundError = NotFoundError;
Model.ModifierNotFoundError = ModifierNotFoundError;

Model.tableName = null;
Model.jsonSchema = null;
Model.idColumn = 'id';
Model.uidProp = '#id';
Model.uidRefProp = '#ref';
Model.dbRefProp = '#dbRef';
Model.propRefRegex = /#ref{([^\.]+)\.([^}]+)}/g;
Model.jsonAttributes = null;
Model.cloneObjectAttributes = true;
Model.virtualAttributes = null;
Model.relationMappings = null;
Model.modelPaths = [];
Model.pickJsonSchemaProperties = false;
Model.defaultEagerAlgorithm = Model.WhereInEagerAlgorithm;
Model.defaultEagerOptions = Object.freeze({ minimize: false, separator: ':', aliases: {} });
Model.defaultFindOptions = Object.freeze({});
Model.modifiers = null;
Model.namedFilters = null;
Model.useLimitInFirst = false;
Model.columnNameMappers = null;
Model.relatedFindQueryMutates = true;
Model.relatedInsertQueryMutates = true;
Model.concurrency = null;

function cachedGet(target, hiddenPropertyName, creator) {
  if (!target.hasOwnProperty(hiddenPropertyName)) {
    defineNonEnumerableProperty(target, hiddenPropertyName, creator(target));
  }

  return target[hiddenPropertyName];
}

function getValidator(modelClass) {
  return modelClass.createValidator();
}

function getJsonSchema(modelClass) {
  return modelClass.jsonSchema;
}

function getColumnNameMappers(modelClass) {
  return modelClass.columnNameMappers;
}

function getIdRelationProperty(modelClass) {
  const idColumn = asArray(modelClass.getIdColumn());

  return new RelationProperty(
    idColumn.map(idCol => `${modelClass.getTableName()}.${idCol}`),
    () => modelClass
  );
}

function getReadOnlyAttributes(modelClass) {
  const propertyNames = Object.getOwnPropertyNames(modelClass.prototype);

  return propertyNames.filter(propName => {
    const desc = Object.getOwnPropertyDescriptor(modelClass.prototype, propName);
    return (desc.get && !desc.set) || desc.writable === false || isFunction(desc.value);
  });
}

function getRelationMappings(modelClass) {
  let relationMappings = modelClass.relationMappings;

  if (isFunction(relationMappings)) {
    relationMappings = relationMappings.call(modelClass);
  }

  return relationMappings || {};
}

function getRelationNames(modelClass) {
  return Object.keys(modelClass.getRelationMappings());
}

function getVirtualAttributes(modelClass) {
  return modelClass.virtualAttributes || [];
}

function getTraverseArgs(filterConstructor, models, traverser) {
  filterConstructor = filterConstructor || null;

  if (traverser === undefined) {
    traverser = models;
    models = filterConstructor;
    filterConstructor = null;
  }

  if (!isFunction(traverser)) {
    throw new Error('traverser must be a function');
  }

  return {
    traverser,
    models,
    filterConstructor
  };
}

module.exports = {
  Model
};


/***/ }),

/***/ "../node_modules/objection/lib/model/ModifierNotFoundError.js":
/*!********************************************************************!*\
  !*** ../node_modules/objection/lib/model/ModifierNotFoundError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class ModifierNotFoundError extends Error {
  constructor(modifierName) {
    super(`Unable to determine modify function from provided value: "${modifierName}".`);
    this.modifierName = modifierName;
  }
}

module.exports = {
  ModifierNotFoundError
};


/***/ }),

/***/ "../node_modules/objection/lib/model/NotFoundError.js":
/*!************************************************************!*\
  !*** ../node_modules/objection/lib/model/NotFoundError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class NotFoundError extends Error {
  constructor(data = {}) {
    super(data.message || 'NotFoundError');

    this.name = this.constructor.name;
    this.data = data;
    this.statusCode = 404;
  }
}

module.exports = {
  NotFoundError
};


/***/ }),

/***/ "../node_modules/objection/lib/model/RelationDoesNotExistError.js":
/*!************************************************************************!*\
  !*** ../node_modules/objection/lib/model/RelationDoesNotExistError.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class RelationDoesNotExistError extends Error {
  constructor(relationName) {
    super(`unknown relation "${relationName}" in a relation expression`);

    this.name = this.constructor.name;
    this.relationName = relationName;
  }
}

module.exports = {
  RelationDoesNotExistError
};


/***/ }),

/***/ "../node_modules/objection/lib/model/ValidationError.js":
/*!**************************************************************!*\
  !*** ../node_modules/objection/lib/model/ValidationError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray, isString } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

const ValidationErrorType = {
  ModelValidation: 'ModelValidation',
  RelationExpression: 'RelationExpression',
  UnallowedRelation: 'UnallowedRelation',
  InvalidGraph: 'InvalidGraph'
};

class ValidationError extends Error {
  static get Type() {
    return ValidationErrorType;
  }

  constructor({ type, message, data = {}, statusCode = 400 }) {
    super(message || errorsToMessage(data));

    this.name = this.constructor.name;
    this.type = type;
    this.data = data;
    this.statusCode = statusCode;
  }
}

function errorsToMessage(data) {
  return Object.keys(data)
    .reduce((messages, key) => {
      messages.push(
        `${key}: ${asArray(data[key])
          .map(message)
          .join(', ')}`
      );
      return messages;
    }, [])
    .join(', ');
}

function message(it) {
  if (isString(it)) {
    return it;
  } else {
    return it.message;
  }
}

module.exports = {
  ValidationError,
  ValidationErrorType
};


/***/ }),

/***/ "../node_modules/objection/lib/model/Validator.js":
/*!********************************************************!*\
  !*** ../node_modules/objection/lib/model/Validator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Validator {
  constructor(...args) {
    this.constructor.init(this, ...args);
  }

  static init() {}

  beforeValidate({ model, json, options }) {
    model.$beforeValidate(null, json, options);
  }

  validate() {
    /* istanbul ignore next */
    throw new Error('not implemented');
  }

  afterValidate({ model, json, options }) {
    model.$afterValidate(json, options);
  }
}

module.exports = {
  Validator
};


/***/ }),

/***/ "../node_modules/objection/lib/model/graph/ModelGraph.js":
/*!***************************************************************!*\
  !*** ../node_modules/objection/lib/model/graph/ModelGraph.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ModelGraphBuilder } = __webpack_require__(/*! ./ModelGraphBuilder */ "../node_modules/objection/lib/model/graph/ModelGraphBuilder.js");
const NOT_CALCULATED = {};

class ModelGraph {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;

    // These are calculated lazily.
    this._nodesByObjects = NOT_CALCULATED;
    this._nodesByIdPathKeys = NOT_CALCULATED;
  }

  static create(rootModelClass, roots) {
    const builder = ModelGraphBuilder.buildGraph(rootModelClass, roots);
    return new ModelGraph(builder.nodes, builder.edges);
  }

  static createEmpty() {
    return new ModelGraph([], []);
  }

  get rootObjects() {
    return this.nodes.filter(node => !node.parentEdge).map(node => node.obj);
  }

  nodeForObject(obj) {
    if (!obj) {
      return null;
    }

    if (this._nodesByObjects === NOT_CALCULATED) {
      this._nodesByObjects = createNodesByObjectsMap(this.nodes);
    }

    return this._nodesByObjects.get(obj) || null;
  }

  nodeForNode(node) {
    if (!node) {
      return null;
    }

    if (this._nodesByIdPathKeys === NOT_CALCULATED) {
      this._nodesByIdPathKeys = createNodesByIdPathKeysMap(this.nodes);
    }

    return this._nodesByIdPathKeys.get(node.idPathKey) || null;
  }
}

function createNodesByObjectsMap(nodes) {
  const nodesByObjects = new Map();

  for (const node of nodes) {
    nodesByObjects.set(node.obj, node);
  }

  return nodesByObjects;
}

function createNodesByIdPathKeysMap(nodes) {
  const nodesByIdPathKeys = new Map();

  for (const node of nodes) {
    const idPathKey = node.idPathKey;

    if (idPathKey !== null) {
      nodesByIdPathKeys.set(idPathKey, node);
    }
  }

  return nodesByIdPathKeys;
}

module.exports = {
  ModelGraph
};


/***/ }),

/***/ "../node_modules/objection/lib/model/graph/ModelGraphBuilder.js":
/*!**********************************************************************!*\
  !*** ../node_modules/objection/lib/model/graph/ModelGraphBuilder.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject, isString, asArray, asSingle } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { ValidationErrorType } = __webpack_require__(/*! ../../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { ModelGraphNode } = __webpack_require__(/*! ./ModelGraphNode */ "../node_modules/objection/lib/model/graph/ModelGraphNode.js");
const { ModelGraphEdge } = __webpack_require__(/*! ./ModelGraphEdge */ "../node_modules/objection/lib/model/graph/ModelGraphEdge.js");

class ModelGraphBuilder {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  static buildGraph(rootModelClass, roots) {
    const builder = new this();
    builder._buildGraph(rootModelClass, roots);

    return builder;
  }

  _buildGraph(rootModelClass, roots) {
    if (roots) {
      if (Array.isArray(roots)) {
        this._buildNodes(rootModelClass, roots);
      } else if (isObject(roots)) {
        this._buildNode(rootModelClass, roots);
      } else {
        throw createNotModelError(rootModelClass, roots);
      }
    }

    this._buildReferences();
  }

  _buildNodes(modelClass, objs, parentNode = null, relation = null) {
    objs = asArray(objs);

    objs.forEach((obj, index) => {
      this._buildNode(modelClass, obj, parentNode, relation, index);
    });
  }

  _buildNode(modelClass, obj, parentNode = null, relation = null, index = null) {
    obj = asSingle(obj);

    if (!isObject(obj) || !obj.$isObjectionModel) {
      throw createNotModelError(modelClass, obj);
    }

    const node = new ModelGraphNode(modelClass, obj);
    this.nodes.push(node);

    if (parentNode) {
      const edge = new ModelGraphEdge(
        ModelGraphEdge.Type.Relation,
        parentNode,
        node,
        relation,
        index
      );

      node.parentEdge = edge;
      this._addEdge(parentNode, node, edge);
    }

    this._buildRelationNodes(node);
  }

  _buildRelationNodes(node) {
    for (const relationName of node.modelClass.getRelationNames()) {
      const relatedObjects = node.obj[relationName];

      if (!relatedObjects) {
        continue;
      }

      const relation = node.modelClass.getRelation(relationName);

      if (relation.isOneToOne()) {
        this._buildNode(relation.relatedModelClass, relatedObjects, node, relation);
      } else {
        this._buildNodes(relation.relatedModelClass, relatedObjects, node, relation);
      }
    }
  }

  _buildReferences() {
    const nodesByUid = this._nodesByUid();

    this._buildObjectReferences(nodesByUid);
    this._buildPropertyReferences(nodesByUid);
  }

  _nodesByUid() {
    const nodesByUid = new Map();

    for (const node of this.nodes) {
      const uid = node.uid;

      if (uid === undefined) {
        continue;
      }

      nodesByUid.set(uid, node);
    }

    return nodesByUid;
  }

  _buildObjectReferences(nodesByUid) {
    for (const node of this.nodes) {
      const ref = node.reference;

      if (ref === undefined) {
        continue;
      }

      const refNode = nodesByUid.get(ref);

      if (!refNode) {
        throw createReferenceFoundError(node, ref);
      }

      const edge = new ModelGraphEdge(ModelGraphEdge.Type.Reference, node, refNode);
      edge.refType = ModelGraphEdge.ReferenceType.Object;

      this._addEdge(node, refNode, edge);
    }
  }

  _buildPropertyReferences(nodesByUid) {
    for (const node of this.nodes) {
      const relationNames = node.modelClass.getRelationNames();

      for (const prop of Object.keys(node.obj)) {
        if (relationNames.includes(prop)) {
          continue;
        }

        this._buildPropertyReference(nodesByUid, node, prop);
      }
    }
  }

  _buildPropertyReference(nodesByUid, node, prop) {
    visitStrings(node.obj[prop], [prop], (str, path) => {
      forEachMatch(node.modelClass.propRefRegex, str, match => {
        const [_, ref, refPath] = match;
        const refNode = nodesByUid.get(ref);

        if (!refNode) {
          throw createReferenceFoundError(node, ref);
        }

        const edge = new ModelGraphEdge(ModelGraphEdge.Type.Reference, node, refNode);

        edge.refType = ModelGraphEdge.ReferenceType.Property;
        edge.refMatch = match[0];
        edge.refOwnerDataPath = path.slice();
        edge.refRelatedDataPath = refPath.split('.');

        this._addEdge(node, refNode, edge);
      });
    });
  }

  _addEdge(ownerNode, relatedNode, edge) {
    this.edges.push(edge);

    ownerNode.edges.push(edge);
    relatedNode.edges.push(edge);

    if (edge.type === ModelGraphEdge.Type.Reference) {
      ownerNode.refEdges.push(edge);
      relatedNode.refEdges.push(edge);
    }
  }
}

function visitStrings(value, path, visit) {
  if (Array.isArray(value)) {
    visitStringsInArray(value, path, visit);
  } else if (isObject(value)) {
    visitStringsInObject(value, path, visit);
  } else if (isString(value)) {
    visit(value, path);
  }
}

function visitStringsInArray(value, path, visit) {
  for (let i = 0; i < value.length; ++i) {
    path.push(i);
    visitStrings(value[i], path, visit);
    path.pop();
  }
}

function visitStringsInObject(value, path, visit) {
  for (const prop of Object.keys(value)) {
    path.push(prop);
    visitStrings(value[prop], path, visit);
    path.pop();
  }
}

function forEachMatch(regex, str, cb) {
  let matchResult = regex.exec(str);

  while (matchResult) {
    cb(matchResult);
    matchResult = regex.exec(str);
  }
}

function createReferenceFoundError(node, ref) {
  return new Error('no reference found');
}

function createNotModelError(modelClass, value) {
  throw modelClass.createValidationError({
    type: ValidationErrorType.InvalidGraph,
    message: `expected value "${value}" to be an instance of ${modelClass.name}`
  });
}

module.exports = {
  ModelGraphBuilder,
  createNotModelError
};


/***/ }),

/***/ "../node_modules/objection/lib/model/graph/ModelGraphEdge.js":
/*!*******************************************************************!*\
  !*** ../node_modules/objection/lib/model/graph/ModelGraphEdge.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Type = {
  Relation: 'Relation',
  Reference: 'Reference'
};

const ReferenceType = {
  Object: 'Object',
  Property: 'Property'
};

class ModelGraphEdge {
  constructor(type, ownerNode, relatedNode, relation = null, relationIndex = null) {
    this.type = type;

    this.ownerNode = ownerNode;
    this.relatedNode = relatedNode;
    this.relation = relation;
    this.relationIndex = relationIndex;

    this.refType = null;
    this.refMatch = null;

    this.refOwnerDataPath = null;
    this.refRelatedDataPath = null;
  }

  static get Type() {
    return Type;
  }

  static get ReferenceType() {
    return ReferenceType;
  }

  getOtherNode(node) {
    return this.isOwnerNode(node) ? this.relatedNode : this.ownerNode;
  }

  isOwnerNode(node) {
    return node === this.ownerNode;
  }

  isRelatedNode(node) {
    return node === this.relatedNode;
  }
}

module.exports = {
  ModelGraphEdge
};


/***/ }),

/***/ "../node_modules/objection/lib/model/graph/ModelGraphNode.js":
/*!*******************************************************************!*\
  !*** ../node_modules/objection/lib/model/graph/ModelGraphNode.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ModelGraphEdge } = __webpack_require__(/*! ./ModelGraphEdge */ "../node_modules/objection/lib/model/graph/ModelGraphEdge.js");
const { isNumber } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const NOT_CALCULATED = {};

class ModelGraphNode {
  constructor(modelClass, obj) {
    this.modelClass = modelClass;
    this.obj = obj;
    this.edges = [];
    this.userData = {};
    this.hadIdOriginally = obj.$hasId();

    // These are also included in `edges`. These are simply
    // shortcuts for commonly used edges.
    this.refEdges = [];
    this.parentEdge = null;

    // These are calculated lazily.
    this._relationPath = NOT_CALCULATED;
    this._relationPathKey = NOT_CALCULATED;

    this._dataPath = NOT_CALCULATED;
    this._dataPathKey = NOT_CALCULATED;

    this._idPath = NOT_CALCULATED;
    this._idPathKey = NOT_CALCULATED;
  }

  get isReference() {
    return this.reference !== undefined;
  }

  get isDbReference() {
    return this.dbReference !== undefined;
  }

  get reference() {
    return this.obj[this.modelClass.uidRefProp];
  }

  get dbReference() {
    return this.obj[this.modelClass.dbRefProp];
  }

  get uid() {
    return this.obj[this.modelClass.uidProp];
  }

  get parentNode() {
    if (this.parentEdge) {
      return this.parentEdge.ownerNode;
    } else {
      return null;
    }
  }

  get indexInRelation() {
    if (this.parentEdge) {
      return this.parentEdge.relationIndex;
    } else {
      return null;
    }
  }

  get relationName() {
    if (this.parentEdge) {
      return this.parentEdge.relation.name;
    } else {
      return null;
    }
  }

  get relationPath() {
    if (this._relationPath === NOT_CALCULATED) {
      this._relationPath = this._createRelationPath();
    }

    return this._relationPath;
  }

  get relationPathKey() {
    if (this._relationPathKey === NOT_CALCULATED) {
      this._relationPathKey = this._createRelationPathKey();
    }

    return this._relationPathKey;
  }

  get dataPath() {
    if (this._dataPath === NOT_CALCULATED) {
      this._dataPath = this._createDataPath();
    }

    return this._dataPath;
  }

  get dataPathKey() {
    if (this._dataPathKey === NOT_CALCULATED) {
      this._dataPathKey = this._createDataPathKey();
    }

    return this._dataPathKey;
  }

  get idPath() {
    if (this._idPath === NOT_CALCULATED) {
      this._idPath = this._createIdPath();
    }

    return this._idPath;
  }

  get idPathKey() {
    if (this._idPathKey === NOT_CALCULATED) {
      this._idPathKey = this._createIdPathKey();
    }

    return this._idPathKey;
  }

  /**
   * If this node is a reference, returns the referred node.
   */
  get referencedNode() {
    for (const edge of this.refEdges) {
      if (edge.refType === ModelGraphEdge.ReferenceType.Object && edge.isOwnerNode(this)) {
        return edge.relatedNode;
      }
    }

    return null;
  }

  /**
   * Returns all nodes that are references to this node.
   */
  get referencingNodes() {
    const nodes = [];

    for (const edge of this.refEdges) {
      if (edge.refType === ModelGraphEdge.ReferenceType.Object && edge.isRelatedNode(this)) {
        nodes.push(edge.ownerNode);
      }
    }

    return nodes;
  }

  get descendantRelationNodes() {
    return this._collectDescendantRelationNodes([]);
  }

  removeEdge(edge) {
    // Don't allow removing parent edges for now. It would
    // cause all kinds of cache invalidation.
    if (edge === this.parentEdge) {
      throw new Error('cannot remove parent edge');
    }

    this.edges = this.edges.filter(it => it !== edge);
    this.refEdges = this.refEdges.filter(it => it !== edge);
  }

  _collectDescendantRelationNodes(nodes) {
    for (const edge of this.edges) {
      if (edge.type === ModelGraphEdge.Type.Relation && edge.isOwnerNode(this)) {
        nodes.push(edge.relatedNode);
        edge.relatedNode._collectDescendantRelationNodes(nodes);
      }
    }

    return nodes;
  }

  _createRelationPath() {
    if (this.parentNode === null) {
      return [];
    } else {
      return [...this.parentNode.relationPath, this.relationName];
    }
  }

  _createRelationPathKey() {
    return this.relationPath.join('.');
  }

  _createDataPath() {
    if (this.parentEdge === null) {
      return [];
    } else if (this.parentEdge.relation.isOneToOne()) {
      return [...this.parentNode.dataPath, this.relationName];
    } else {
      return [...this.parentNode.dataPath, this.relationName, this.indexInRelation];
    }
  }

  _createDataPathKey() {
    const dataPathKey = this.dataPath.reduce((key, it) => {
      if (isNumber(it)) {
        return `${key}[${it}]`;
      } else {
        return key ? `${key}.${it}` : it;
      }
    }, '');

    return dataPathKey ? '.' + dataPathKey : dataPathKey;
  }

  _createIdPath() {
    if (!this.obj.$hasId()) {
      return null;
    }

    if (this.parentEdge === null) {
      return [this.obj.$idKey()];
    } else {
      const path = this.parentNode.idPath;

      if (path === null) {
        return null;
      }

      return [...path, this.relationName, this.obj.$idKey()];
    }
  }

  _createIdPathKey() {
    const idPath = this.idPath;

    if (idPath) {
      return this.idPath.join('.');
    } else {
      return null;
    }
  }
}

module.exports = {
  ModelGraphNode
};


/***/ }),

/***/ "../node_modules/objection/lib/model/inheritModel.js":
/*!***********************************************************!*\
  !*** ../node_modules/objection/lib/model/inheritModel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const cache = new Map();

function inheritModel(modelClass) {
  let inherit = cache.get(modelClass.name);

  if (!inherit) {
    inherit = createClassInheritor(modelClass.name);
    cache.set(modelClass.name, inherit);
  }

  return inherit(modelClass);
}

function createClassInheritor(className) {
  return new Function(
    'BaseClass',
    `
    'use strict';
    return class ${className} extends BaseClass {}
  `
  );
}

module.exports = {
  inheritModel
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelBindKnex.js":
/*!************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelBindKnex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { inheritModel } = __webpack_require__(/*! ./inheritModel */ "../node_modules/objection/lib/model/inheritModel.js");
const { staticHiddenProps } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { defineNonEnumerableProperty } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");

function bindKnex(modelClass, knex) {
  let BoundModelClass = getBoundModelFromCache(modelClass, knex);

  if (BoundModelClass === null) {
    BoundModelClass = inheritModel(modelClass);
    BoundModelClass = copyHiddenProperties(modelClass, BoundModelClass);

    BoundModelClass.knex(knex);

    BoundModelClass = putBoundModelToCache(modelClass, BoundModelClass, knex);
    BoundModelClass = bindRelations(modelClass, BoundModelClass, knex);
  }

  return BoundModelClass;
}

function getBoundModelFromCache(modelClass, knex) {
  const cache = getCache(knex);
  const cacheKey = modelClass.uniqueTag();

  return cache.get(cacheKey) || null;
}

function getCache(knex) {
  if (!knex.$$objection) {
    createCache(knex);
  }

  return knex.$$objection.boundModels;
}

function createCache(knex) {
  defineNonEnumerableProperty(knex, '$$objection', {
    boundModels: new Map()
  });
}

function copyHiddenProperties(modelClass, BoundModelClass) {
  for (const prop of staticHiddenProps) {
    // $$relations and $$relationArray are handled in separately.
    if (modelClass.hasOwnProperty(prop) && prop !== '$$relations' && prop !== '$$relationArray') {
      defineNonEnumerableProperty(BoundModelClass, prop, modelClass[prop]);
    }
  }

  return BoundModelClass;
}

function putBoundModelToCache(modelClass, BoundModelClass, knex) {
  const cache = getCache(knex);
  const cacheKey = modelClass.uniqueTag();

  cache.set(cacheKey, BoundModelClass);
  return BoundModelClass;
}

function bindRelations(modelClass, BoundModelClass, knex) {
  const boundRelations = Object.create(null);
  const boundRelationArray = [];

  for (const relationName of modelClass.getRelationNames()) {
    const relation = modelClass.getRelation(relationName);
    const boundRelation = relation.bindKnex(knex);

    boundRelations[relation.name] = boundRelation;
    boundRelationArray.push(boundRelation);
  }

  defineNonEnumerableProperty(BoundModelClass, '$$relations', boundRelations);
  defineNonEnumerableProperty(BoundModelClass, '$$relationArray', boundRelationArray);

  return BoundModelClass;
}

module.exports = {
  bindKnex
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelClone.js":
/*!*********************************************************!*\
  !*** ../node_modules/objection/lib/model/modelClone.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject, cloneDeep } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { hiddenProps } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { defineNonEnumerableProperty } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { isInternalProp } = __webpack_require__(/*! ../utils/internalPropUtils */ "../node_modules/objection/lib/utils/internalPropUtils.js");

function clone(model, shallow, stripInternal) {
  let clone = null;

  const omitFromJson = model.$omitFromJson();
  const omitFromDatabaseJson = model.$omitFromDatabaseJson();

  if (!shallow && !stripInternal) {
    clone = cloneSimple(model);
  } else {
    clone = cloneWithOpt(model, shallow, stripInternal);
  }

  if (omitFromJson) {
    clone.$omitFromJson(omitFromJson);
  }

  if (omitFromDatabaseJson) {
    clone.$omitFromDatabaseJson(omitFromDatabaseJson);
  }

  clone = copyHiddenProps(model, clone);
  return clone;
}

function cloneSimple(model) {
  const clone = new model.constructor();
  const keys = Object.keys(model);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = model[key];

    if (isObject(value)) {
      clone[key] = cloneObject(value);
    } else {
      clone[key] = value;
    }
  }

  return clone;
}

function cloneWithOpt(model, shallow, stripInternal) {
  const clone = new model.constructor();
  const keys = Object.keys(model);
  const relationNames = model.constructor.getRelationNames();

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = model[key];

    if ((shallow && relationNames.includes(key)) || (stripInternal && isInternalProp(key))) {
      continue;
    }

    if (isObject(value)) {
      clone[key] = cloneObject(value);
    } else {
      clone[key] = value;
    }
  }

  return clone;
}

function cloneObject(value) {
  if (Array.isArray(value)) {
    return cloneArray(value);
  } else if (value.$isObjectionModel) {
    return clone(value, false, false);
  } else if (Buffer.isBuffer(value)) {
    return new Buffer(value);
  } else {
    return cloneDeep(value);
  }
}

function cloneArray(value) {
  const ret = new Array(value.length);

  for (let i = 0, l = ret.length; i < l; ++i) {
    const item = value[i];

    if (isObject(item)) {
      ret[i] = cloneObject(item);
    } else {
      ret[i] = item;
    }
  }

  return ret;
}

function copyHiddenProps(model, clone) {
  for (let i = 0, l = hiddenProps.length; i < l; ++i) {
    const prop = hiddenProps[i];

    if (model.hasOwnProperty(prop)) {
      defineNonEnumerableProperty(clone, prop, model[prop]);
    }
  }

  return clone;
}

module.exports = {
  clone
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelColPropMap.js":
/*!**************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelColPropMap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { difference } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function columnNameToPropertyName(modelClass, columnName) {
  const model = new modelClass();
  const addedProps = Object.keys(model.$parseDatabaseJson({}));

  const row = {};
  row[columnName] = null;

  const props = Object.keys(model.$parseDatabaseJson(row));
  const propertyName = difference(props, addedProps)[0];

  return propertyName || columnName;
}

function propertyNameToColumnName(modelClass, propertyName) {
  const model = new modelClass();
  const addedCols = Object.keys(model.$formatDatabaseJson({}));

  const obj = {};
  obj[propertyName] = null;

  const cols = Object.keys(model.$formatDatabaseJson(obj));
  const columnName = difference(cols, addedCols)[0];

  return columnName || propertyName;
}

module.exports = {
  columnNameToPropertyName,
  propertyNameToColumnName
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelFilter.js":
/*!**********************************************************!*\
  !*** ../node_modules/objection/lib/model/modelFilter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { isInternalProp } = __webpack_require__(/*! ../utils/internalPropUtils */ "../node_modules/objection/lib/utils/internalPropUtils.js");

function omit(model, args) {
  if (args.length === 1 && isObject(args[0])) {
    const keys = args[0];

    if (Array.isArray(keys)) {
      omitArray(model, keys);
    } else {
      omitObject(model, keys);
    }
  } else {
    omitArray(model, args);
  }

  return model;
}

function pick(model, args) {
  if (args.length === 1 && isObject(args[0])) {
    const keys = args[0];

    if (Array.isArray(keys)) {
      pickArray(model, keys);
    } else {
      pickObject(model, keys);
    }
  } else {
    pickArray(model, args);
  }

  return model;
}

function omitObject(model, keyObj) {
  const modelClass = model.constructor;
  const keys = Object.keys(keyObj);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = keyObj[key];

    if (value && !isInternalProp(key) && model.hasOwnProperty(key)) {
      modelClass.omitImpl(model, key);
    }
  }
}

function omitArray(model, keys) {
  const modelClass = model.constructor;

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];

    if (!isInternalProp(key) && model.hasOwnProperty(key)) {
      modelClass.omitImpl(model, key);
    }
  }
}

function pickObject(model, keyObj) {
  const modelClass = model.constructor;
  const keys = Object.keys(model);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];

    if (!isInternalProp(key) && !keyObj[key]) {
      modelClass.omitImpl(model, key);
    }
  }
}

function pickArray(model, pick) {
  const modelClass = model.constructor;
  const keys = Object.keys(model);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];

    if (!isInternalProp(key) && !contains(pick, key)) {
      modelClass.omitImpl(model, key);
    }
  }
}

function contains(arr, value) {
  for (let i = 0, l = arr.length; i < l; ++i) {
    if (arr[i] === value) {
      return true;
    }
  }

  return false;
}

module.exports = {
  omit,
  pick
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelId.js":
/*!******************************************************!*\
  !*** ../node_modules/objection/lib/model/modelId.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getSetId(model, maybeId) {
  if (maybeId !== undefined) {
    return setId(model, maybeId);
  } else {
    return getId(model);
  }
}

function hasId(model) {
  return model.$hasProps(model.constructor.getIdPropertyArray());
}

function setId(model, id) {
  const idProp = model.constructor.getIdProperty();
  const isCompositeId = Array.isArray(idProp);

  if (Array.isArray(id)) {
    if (isCompositeId) {
      if (id.length !== idProp.length) {
        throw new Error('trying to set an invalid identifier for a model');
      }

      for (let i = 0; i < id.length; ++i) {
        model[idProp[i]] = id[i];
      }
    } else {
      if (id.length !== 1) {
        throw new Error('trying to set an invalid identifier for a model');
      }

      model[idProp] = id[0];
    }
  } else {
    if (isCompositeId) {
      if (idProp.length > 1) {
        throw new Error('trying to set an invalid identifier for a model');
      }

      model[idProp[0]] = id;
    } else {
      model[idProp] = id;
    }
  }
}

function getId(model) {
  const idProp = model.constructor.getIdProperty();
  const isCompositeId = Array.isArray(idProp);

  if (isCompositeId) {
    return model.$values(idProp);
  } else {
    return model[idProp];
  }
}

module.exports = {
  getSetId,
  hasId
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelJsonAttributes.js":
/*!******************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelJsonAttributes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray, isObject, flatten, isString } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function parseJsonAttributes(json, modelClass) {
  const jsonAttr = modelClass.getJsonAttributes();

  if (jsonAttr.length) {
    // JSON attributes may be returned as strings depending on the database and
    // the database client. Convert them to objects here.
    for (let i = 0, l = jsonAttr.length; i < l; ++i) {
      const attr = jsonAttr[i];
      const value = json[attr];

      if (isString(value)) {
        const parsed = tryParseJson(value);

        // tryParseJson returns undefined if parsing failed.
        if (parsed !== undefined) {
          json[attr] = parsed;
        }
      }
    }
  }

  return json;
}

function formatJsonAttributes(json, modelClass) {
  const jsonAttr = modelClass.getJsonAttributes();

  if (jsonAttr.length) {
    // All database clients want JSON columns as strings. Do the conversion here.
    for (let i = 0, l = jsonAttr.length; i < l; ++i) {
      const attr = jsonAttr[i];
      const value = json[attr];

      if (isObject(value)) {
        json[attr] = JSON.stringify(value);
      }
    }
  }

  return json;
}

function getJsonAttributes(modelClass) {
  let jsonAttributes = modelClass.jsonAttributes;

  if (Array.isArray(jsonAttributes)) {
    return jsonAttributes;
  }

  jsonAttributes = [];

  if (modelClass.getJsonSchema()) {
    const props = modelClass.getJsonSchema().properties || {};

    for (const propName of Object.keys(props)) {
      const prop = props[propName];
      let types = asArray(prop.type).filter(it => !!it);

      if (types.length === 0 && Array.isArray(prop.anyOf)) {
        types = flatten(prop.anyOf.map(it => it.type));
      }

      if (types.length === 0 && Array.isArray(prop.oneOf)) {
        types = flatten(prop.oneOf.map(it => it.type));
      }

      if (types.indexOf('object') !== -1 || types.indexOf('array') !== -1) {
        jsonAttributes.push(propName);
      }
    }
  }

  return jsonAttributes;
}

function tryParseJson(maybeJsonStr) {
  try {
    return JSON.parse(maybeJsonStr);
  } catch (err) {
    return undefined;
  }
}

module.exports = {
  parseJsonAttributes,
  formatJsonAttributes,
  getJsonAttributes
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelParseRelations.js":
/*!******************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelParseRelations.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function parseRelationsIntoModelInstances(model, json, options = {}) {
  if (!options.cache) {
    options = Object.assign({}, options, {
      cache: new Map()
    });
  }

  options.cache.set(json, model);

  for (const relationName of model.constructor.getRelationNames()) {
    const relationJson = json[relationName];

    if (relationJson !== undefined) {
      const relation = model.constructor.getRelation(relationName);
      const relationModel = parseRelation(relationJson, relation, options);

      if (relationModel !== relationJson) {
        model[relation.name] = relationModel;
      }
    }
  }

  return model;
}

function parseRelation(json, relation, options) {
  if (Array.isArray(json)) {
    return parseRelationArray(json, relation, options);
  } else if (json) {
    return parseRelationObject(json, relation, options);
  } else {
    return null;
  }
}

function parseRelationArray(json, relation, options) {
  const models = new Array(json.length);
  let didChange = false;

  for (let i = 0, l = json.length; i < l; ++i) {
    const model = parseRelationObject(json[i], relation, options);

    if (model !== json[i]) {
      didChange = true;
    }

    models[i] = model;
  }

  if (didChange) {
    return models;
  } else {
    return json;
  }
}

function parseRelationObject(json, relation, options) {
  if (isObject(json)) {
    const modelClass = relation.relatedModelClass;
    let model = options.cache.get(json);

    if (model === undefined) {
      if (json instanceof modelClass) {
        model = parseRelationsIntoModelInstances(json, json, options);
      } else {
        model = modelClass.fromJson(json, options);
      }
    }

    return model;
  } else {
    return json;
  }
}

module.exports = {
  parseRelationsIntoModelInstances
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelQueryProps.js":
/*!**************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelQueryProps.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject, isFunction } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { defineNonEnumerableProperty } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { isKnexRaw, isKnexQueryBuilder } = __webpack_require__(/*! ../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");

const QUERY_PROPS_PROPERTY = '$$queryProps';

// Removes query properties from `json` and stores them into a hidden property
// inside `model` so that they can be later merged back to `json`.
function splitQueryProps(model, json) {
  const keys = Object.keys(json);

  if (hasQueryProps(json, keys)) {
    const queryProps = {};
    const modelProps = {};

    for (let i = 0, l = keys.length; i < l; ++i) {
      const key = keys[i];
      const value = json[key];

      if (isQueryProp(value)) {
        queryProps[key] = value;
      } else {
        modelProps[key] = value;
      }
    }

    defineNonEnumerableProperty(model, QUERY_PROPS_PROPERTY, queryProps);

    return modelProps;
  } else {
    return json;
  }
}

function hasQueryProps(json, keys) {
  for (let i = 0, l = keys.length; i < l; ++i) {
    if (isQueryProp(json[keys[i]])) {
      return true;
    }
  }

  return false;
}

function isQueryProp(value) {
  if (!isObject(value)) {
    return false;
  }

  return (
    isKnexQueryBuilder(value) ||
    isKnexRaw(value) ||
    isKnexRawConvertable(value) ||
    value.isObjectionQueryBuilderBase
  );
}

// Merges and converts `model`'s query properties into `json`.
function mergeQueryProps(model, json, omitProps, builder) {
  json = convertExistingQueryProps(json, builder);
  json = convertAndMergeHiddenQueryProps(model, json, omitProps, builder);

  return json;
}

// Converts the query properties in `json` to knex raw instances.
// `json` may have query properties even though we removed them.
// For example they may have been added in lifecycle hooks.
function convertExistingQueryProps(json, builder) {
  const keys = Object.keys(json);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = json[key];

    if (isQueryProp(value)) {
      json[key] = queryPropToKnexRaw(value, builder);
    }
  }

  return json;
}

// Converts and merges the query props that were split from the model
// and stored into QUERY_PROPS_PROPERTY.
function convertAndMergeHiddenQueryProps(model, json, omitProps, builder) {
  const queryProps = model[QUERY_PROPS_PROPERTY];

  if (!queryProps) {
    // The model has no query properties.
    return json;
  }

  const modelClass = model.constructor;
  const keys = Object.keys(queryProps);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];

    if (!omitProps || !omitProps.includes(key)) {
      const queryProp = queryPropToKnexRaw(queryProps[key], builder);
      json[modelClass.propertyNameToColumnName(key)] = queryProp;
    }
  }

  return json;
}

// Converts a query property into a knex `raw` instance.
function queryPropToKnexRaw(queryProp, builder) {
  if (!queryProp) {
    return queryProp;
  }

  if (queryProp.isObjectionQueryBuilderBase) {
    return buildObjectionQueryBuilder(queryProp, builder);
  } else if (isKnexRawConvertable(queryProp)) {
    return buildKnexRawConvertable(queryProp, builder);
  } else {
    return queryProp;
  }
}

function buildObjectionQueryBuilder(builder, parentBuilder) {
  return builder.subqueryOf(parentBuilder).toKnexQuery();
}

function buildKnexRawConvertable(convertable, builder) {
  if (!builder) {
    throw new Error(
      'toDatabaseJson called without a query builder instance for a model with query properties'
    );
  }

  return convertable.toKnexRaw(builder);
}

function isKnexRawConvertable(queryProp) {
  return isFunction(queryProp.toKnexRaw);
}

module.exports = {
  splitQueryProps,
  mergeQueryProps
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelSet.js":
/*!*******************************************************!*\
  !*** ../node_modules/objection/lib/model/modelSet.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isInternalProp } = __webpack_require__(/*! ../utils/internalPropUtils */ "../node_modules/objection/lib/utils/internalPropUtils.js");
const { splitQueryProps } = __webpack_require__(/*! ./modelQueryProps */ "../node_modules/objection/lib/model/modelQueryProps.js");
const { isFunction, isString } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { parseRelationsIntoModelInstances } = __webpack_require__(/*! ./modelParseRelations */ "../node_modules/objection/lib/model/modelParseRelations.js");

function setJson(model, json, options) {
  json = json || {};
  options = options || {};

  if (Object.prototype.toString.call(json) !== '[object Object]') {
    throw new Error(
      'You should only pass objects to $setJson method. ' +
        '$setJson method was given an invalid value ' +
        json
    );
  }

  if (!json.$isObjectionModel) {
    // json can contain "query properties" like `raw` instances, query builders etc.
    // We take them out of `json` and store them to a hidden property $$queryProps
    // in the model instance for later use.
    json = splitQueryProps(model, json);
  }

  json = model.$parseJson(json, options);
  json = model.$validate(json, options);

  model.$set(json);

  if (!options.skipParseRelations) {
    parseRelationsIntoModelInstances(model, json, options);
  }

  return model;
}

function setDatabaseJson(model, json) {
  json = model.$parseDatabaseJson(json);

  if (json) {
    const keys = Object.keys(json);

    for (let i = 0, l = keys.length; i < l; ++i) {
      const key = keys[i];
      model[key] = json[key];
    }
  }

  return model;
}

function setFast(model, obj) {
  if (obj) {
    // Don't try to set read-only properties. They can easily get here
    // through `fromJson` when parsing an object that was previously
    // serialized from a model instance.
    const readOnlyAttr = model.constructor.getReadOnlyAttributes();
    const keys = Object.keys(obj);

    for (let i = 0, l = keys.length; i < l; ++i) {
      const key = keys[i];
      const value = obj[key];

      if (!isInternalProp(key) && !isFunction(value) && !readOnlyAttr.includes(key)) {
        model[key] = value;
      }
    }
  }

  return model;
}

function setRelated(model, relation, models) {
  relation = ensureRelation(model, relation);

  if (relation.isOneToOne()) {
    if (Array.isArray(models)) {
      if (models.length === 0) {
        model[relation.name] = null;
      } else {
        model[relation.name] = models[0] || null;
      }
    } else {
      model[relation.name] = models || null;
    }
  } else {
    if (!models) {
      model[relation.name] = [];
    } else if (Array.isArray(models)) {
      model[relation.name] = models;
    } else {
      model[relation.name] = [models];
    }
  }

  return this;
}

function appendRelated(model, relation, models) {
  relation = ensureRelation(model, relation);

  if (!model[relation.name] || relation.isOneToOne()) {
    return model.$setRelated(relation, models);
  } else {
    if (Array.isArray(models)) {
      models.forEach(it => model[relation.name].push(it));
    } else if (models) {
      model[relation.name].push(models);
    }
  }

  return this;
}

function ensureRelation(model, relation) {
  if (isString(relation)) {
    return model.constructor.getRelation(relation);
  } else {
    return relation;
  }
}

module.exports = {
  setFast,
  setJson,
  setDatabaseJson,
  setRelated,
  appendRelated
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelTableMetadata.js":
/*!*****************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelTableMetadata.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { defineNonEnumerableProperty } = __webpack_require__(/*! ./modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { isPromise } = __webpack_require__(/*! ../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

const TABLE_METADATA = '$$tableMetadata';

function fetchTableMetadata(
  modelClass,
  { parentBuilder = null, knex = null, force = false, table = null } = {}
) {
  // The table isn't necessarily same as `modelClass.getTableName()` for example if
  // a view is queried instead.
  if (!table) {
    if (parentBuilder) {
      table = parentBuilder.tableNameFor(modelClass.getTableName());
    } else {
      table = modelClass.getTableName();
    }
  }

  // Call tableMetadata first instead of accessing the cache directly beause
  // tableMetadata may have been overriden.
  let metadata = modelClass.tableMetadata({ table });

  if (!force && metadata) {
    return Promise.resolve(metadata);
  }

  // Memoize metadata but only for modelClass. The hasOwnProperty check
  // will fail for subclasses and the value gets recreated.
  if (!modelClass.hasOwnProperty(TABLE_METADATA)) {
    defineNonEnumerableProperty(modelClass, TABLE_METADATA, new Map());
  }

  // The cache needs to be checked in addition to calling tableMetadata
  // because the cache may contain a temporary promise in which case
  // tableMetadata returns null.
  metadata = modelClass[TABLE_METADATA].get(table);

  if (!force && metadata) {
    return Promise.resolve(metadata);
  } else {
    const promise = modelClass
      .query(knex)
      .childQueryOf(parentBuilder)
      .columnInfo({ table })
      .then(columnInfo => {
        const metadata = {
          columns: Object.keys(columnInfo)
        };

        modelClass[TABLE_METADATA].set(table, metadata);
        return metadata;
      });

    modelClass[TABLE_METADATA].set(table, promise);
    return promise;
  }
}

function tableMetadata(modelClass, { table } = {}) {
  if (modelClass.hasOwnProperty(TABLE_METADATA)) {
    const metadata = modelClass[TABLE_METADATA].get(table || modelClass.getTableName());

    if (isPromise(metadata)) {
      return null;
    } else {
      return metadata;
    }
  } else {
    return null;
  }
}

module.exports = {
  fetchTableMetadata,
  tableMetadata
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelToJson.js":
/*!**********************************************************!*\
  !*** ../node_modules/objection/lib/model/modelToJson.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isInternalProp } = __webpack_require__(/*! ../utils/internalPropUtils */ "../node_modules/objection/lib/utils/internalPropUtils.js");
const { mergeQueryProps } = __webpack_require__(/*! ./modelQueryProps */ "../node_modules/objection/lib/model/modelQueryProps.js");
const { isObject, cloneDeep, isFunction } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const EMPTY_ARRAY = [];

function toJson(model, optIn) {
  const modelClass = model.constructor;

  const opt = {
    virtuals: getVirtuals(optIn),
    shallow: isShallow(optIn),
    omit: getOmit(optIn, modelClass),
    pick: null,
    omitFromJson: model.$omitFromJson() || null,
    cloneObjects: modelClass.cloneObjectAttributes
  };

  let json = toExternalJsonImpl(model, opt);
  json = model.$formatJson(json);

  return json;
}

function toDatabaseJson(model, builder) {
  const modelClass = model.constructor;

  const opt = {
    virtuals: false,
    shallow: true,
    omit: modelClass.getRelationNames(),
    pick: getPick(modelClass),
    omitFromJson: model.$omitFromDatabaseJson() || null,
    cloneObjects: modelClass.cloneObjectAttributes
  };

  let json = toDatabaseJsonImpl(model, opt);
  json = model.$formatDatabaseJson(json);

  return mergeQueryProps(model, json, opt.omitFromJson, builder);
}

function getVirtuals(opt) {
  if (!opt) {
    return true;
  } else if (Array.isArray(opt.virtuals)) {
    return opt.virtuals;
  } else {
    return opt.virtuals !== false;
  }
}

function isShallow(opt) {
  return !!opt && !!opt.shallow;
}

function getOmit(opt, modelClass) {
  return isShallow(opt) ? modelClass.getRelationNames() : null;
}

function getPick(modelClass) {
  const jsonSchema = modelClass.getJsonSchema();
  return (jsonSchema && modelClass.pickJsonSchemaProperties && jsonSchema.properties) || null;
}

function toExternalJsonImpl(model, opt) {
  const json = {};
  const keys = Object.keys(model);
  const vAttr = getVirtualAttributes(model, opt);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = model[key];

    assignJsonValue(json, key, value, opt);
  }

  if (vAttr.length !== 0) {
    assignVirtualAttributes(json, model, vAttr, opt);
  }

  return json;
}

function getVirtualAttributes(model, opt) {
  if (Array.isArray(opt.virtuals)) {
    return opt.virtuals;
  } else if (opt.virtuals === true) {
    return model.constructor.getVirtualAttributes();
  } else {
    return EMPTY_ARRAY;
  }
}

function toDatabaseJsonImpl(model, opt) {
  const json = {};
  const keys = Object.keys(model);

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = model[key];

    assignJsonValue(json, key, value, opt);
  }

  return json;
}

function assignJsonValue(json, key, value, opt) {
  const type = typeof value;

  if (
    type !== 'function' &&
    type !== 'undefined' &&
    !isInternalProp(key) &&
    !shouldOmit(opt, key) &&
    shouldPick(opt, key)
  ) {
    if (isObject(value)) {
      json[key] = toJsonObject(value, opt);
    } else {
      json[key] = value;
    }
  }
}

function shouldOmit(opt, key) {
  return (
    (opt.omit !== null && opt.omit.includes(key)) ||
    (opt.omitFromJson !== null && opt.omitFromJson.includes(key))
  );
}

function shouldPick(opt, key) {
  return opt.pick === null || key in opt.pick;
}

function assignVirtualAttributes(json, model, vAttr, opt) {
  for (let i = 0, l = vAttr.length; i < l; ++i) {
    const key = vAttr[i];
    let value = model[key];

    if (isFunction(value)) {
      value = value.call(model);
    }

    assignJsonValue(json, key, value, opt);
  }
}

function toJsonObject(value, opt) {
  if (Array.isArray(value)) {
    return toJsonArray(value, opt);
  } else if (value.$isObjectionModel) {
    // No branch for $toDatabaseJson here since there is never a need
    // to have nested models in database rows.
    return value.$toJson(opt);
  } else if (Buffer.isBuffer(value)) {
    return value;
  } else if (opt.cloneObjects) {
    return cloneDeep(value);
  } else {
    return value;
  }
}

function toJsonArray(value, opt) {
  const ret = new Array(value.length);

  for (let i = 0, l = ret.length; i < l; ++i) {
    const item = value[i];

    if (isObject(item)) {
      ret[i] = toJsonObject(item, opt);
    } else {
      ret[i] = item;
    }
  }

  return ret;
}

module.exports = {
  toJson,
  toDatabaseJson
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelUtils.js":
/*!*********************************************************!*\
  !*** ../node_modules/objection/lib/model/modelUtils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const hiddenProps = ['$$queryProps'];

const staticHiddenProps = [
  '$$knex',
  '$$validator',
  '$$jsonSchema',
  '$$colToProp',
  '$$propToCol',
  '$$relationMappings',
  '$$relations',
  '$$relationNames',
  '$$jsonAttributes',
  '$$columnNameMappers',
  '$$tableMetadata',
  '$$readOnlyAttributes',
  '$$idRelationProperty',
  '$$virtualAttributes'
];

function defineNonEnumerableProperty(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}

function keyByProps(models, props) {
  const map = new Map();

  for (let i = 0, l = models.length; i < l; ++i) {
    const model = models[i];
    map.set(model.$propKey(props), model);
  }

  return map;
}

module.exports = {
  hiddenProps,
  staticHiddenProps,
  defineNonEnumerableProperty,
  keyByProps
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelValidate.js":
/*!************************************************************!*\
  !*** ../node_modules/objection/lib/model/modelValidate.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { clone } = __webpack_require__(/*! ./modelClone */ "../node_modules/objection/lib/model/modelClone.js");

function validate(model, json, options = {}) {
  json = json || model;

  const inputJson = json;
  const validatingModelInstance = inputJson && inputJson.$isObjectionModel;

  if (options.skipValidation) {
    return json;
  }

  if (validatingModelInstance) {
    // Strip away relations and other internal stuff.
    // TODO 1: This should use `json.$toJson()` since we always validate the input representation!
    // TODO 2: This should also keep the relations in the object because some validators may
    //         depend on the relations.
    json = clone(json, true, true);
    // We can mutate `json` now that we took a copy of it.
    options = Object.assign({}, options, { mutable: true });
  }

  const modelClass = model.constructor;
  const validator = modelClass.getValidator();
  const args = {
    options,
    model,
    json,
    ctx: Object.create(null)
  };

  validator.beforeValidate(args);
  json = validator.validate(args);
  validator.afterValidate(args);

  if (validatingModelInstance) {
    // If we cloned `json`, we need to copy the possible default values.
    return inputJson.$set(json);
  } else {
    return json;
  }
}

module.exports = {
  validate
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelValues.js":
/*!**********************************************************!*\
  !*** ../node_modules/objection/lib/model/modelValues.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

// Property keys needs to be prefixed with a non-numeric character so that
// they are not considered indexes when used as object keys.
const PROP_KEY_PREFIX = 'k_';

function values(model, args) {
  switch (args.length) {
    case 1:
      return values1(model, args);
    case 2:
      return values2(model, args);
    case 3:
      return values3(model, args);
    default:
      return valuesN(model, args);
  }
}

function propKey(model, props) {
  switch (props.length) {
    case 1:
      return propKey1(model, props);
    case 2:
      return propKey2(model, props);
    case 3:
      return propKey3(model, props);
    default:
      return propKeyN(model, props);
  }
}

function hasProps(model, props) {
  for (let i = 0; i < props.length; ++i) {
    const value = model[props[i]];

    if (isNullOrUndefined(value)) {
      return false;
    }
  }

  return true;
}

function values1(model, args) {
  return [model[args[0]]];
}

function values2(model, args) {
  return [model[args[0]], model[args[1]]];
}

function values3(model, args) {
  return [model[args[0]], model[args[1]], model[args[2]]];
}

function valuesN(model, args) {
  const ret = new Array(args.length);

  for (let i = 0, l = args.length; i < l; ++i) {
    ret[i] = model[args[i]];
  }

  return ret;
}

function propKey1(model, props) {
  return PROP_KEY_PREFIX + propToStr(model[props[0]]);
}

function propKey2(model, props) {
  return PROP_KEY_PREFIX + propToStr(model[props[0]]) + ',' + propToStr(model[props[1]]);
}

function propKey3(model, props) {
  return (
    PROP_KEY_PREFIX +
    propToStr(model[props[0]]) +
    ',' +
    propToStr(model[props[1]]) +
    ',' +
    propToStr(model[props[2]])
  );
}

function propKeyN(model, props) {
  let key = PROP_KEY_PREFIX;

  for (let i = 0, l = props.length; i < l; ++i) {
    key += propToStr(model[props[i]]);

    if (i < l - 1) {
      key += ',';
    }
  }

  return key;
}

function propToStr(value) {
  if (value === null) {
    return 'null';
  } else if (value === undefined) {
    return 'undefined';
  } else if (isObject(value)) {
    return JSON.stringify(value);
  } else {
    return `${value}`;
  }
}

function isNullOrUndefined(val) {
  return val === null || val === undefined;
}

module.exports = {
  PROP_KEY_PREFIX,
  propToStr,
  values,
  hasProps,
  propKey
};


/***/ }),

/***/ "../node_modules/objection/lib/model/modelVisitor.js":
/*!***********************************************************!*\
  !*** ../node_modules/objection/lib/model/modelVisitor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function visitModels(models, modelClass, visitor) {
  doVisit(models, modelClass, null, null, visitor);
}

function doVisit(models, modelClass, parent, rel, visitor) {
  if (Array.isArray(models)) {
    visitMany(models, modelClass, parent, rel, visitor);
  } else if (models) {
    visitOne(models, modelClass, parent, rel, visitor);
  }
}

function visitMany(models, modelClass, parent, rel, visitor) {
  for (let i = 0, l = models.length; i < l; ++i) {
    visitOne(models[i], modelClass, parent, rel, visitor);
  }
}

function visitOne(model, modelClass, parent, rel, visitor) {
  if (model) {
    visitor(model, modelClass, parent, rel);
  }

  const relationNames = modelClass.getRelationNames();

  for (let i = 0, l = relationNames.length; i < l; ++i) {
    const relationName = relationNames[i];
    const relatedObj = model[relationName];

    if (relatedObj) {
      const relation = modelClass.getRelation(relationName);
      doVisit(relatedObj, relation.relatedModelClass, model, relation, visitor);
    }
  }
}

module.exports = {
  visitModels
};


/***/ }),

/***/ "../node_modules/objection/lib/objection.js":
/*!**************************************************!*\
  !*** ../node_modules/objection/lib/objection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Model: NativeModel } = __webpack_require__(/*! ./model/Model */ "../node_modules/objection/lib/model/Model.js");
const { QueryBuilder: NativeQueryBuilder } = __webpack_require__(/*! ./queryBuilder/QueryBuilder */ "../node_modules/objection/lib/queryBuilder/QueryBuilder.js");
const { QueryBuilderBase } = __webpack_require__(/*! ./queryBuilder/QueryBuilderBase */ "../node_modules/objection/lib/queryBuilder/QueryBuilderBase.js");
const { QueryBuilderOperation } = __webpack_require__(/*! ./queryBuilder/operations/QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { RelationExpression } = __webpack_require__(/*! ./queryBuilder/RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");
const { ValidationError } = __webpack_require__(/*! ./model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { NotFoundError } = __webpack_require__(/*! ./model/NotFoundError */ "../node_modules/objection/lib/model/NotFoundError.js");
const { AjvValidator: NativeAjvValidator } = __webpack_require__(/*! ./model/AjvValidator */ "../node_modules/objection/lib/model/AjvValidator.js");
const { Validator: NativeValidator } = __webpack_require__(/*! ./model/Validator */ "../node_modules/objection/lib/model/Validator.js");
const { Relation } = __webpack_require__(/*! ./relations/Relation */ "../node_modules/objection/lib/relations/Relation.js");
const { HasOneRelation } = __webpack_require__(/*! ./relations/hasOne/HasOneRelation */ "../node_modules/objection/lib/relations/hasOne/HasOneRelation.js");
const { HasManyRelation } = __webpack_require__(/*! ./relations/hasMany/HasManyRelation */ "../node_modules/objection/lib/relations/hasMany/HasManyRelation.js");
const { BelongsToOneRelation } = __webpack_require__(/*! ./relations/belongsToOne/BelongsToOneRelation */ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelation.js");
const { HasOneThroughRelation } = __webpack_require__(/*! ./relations/hasOneThrough/HasOneThroughRelation */ "../node_modules/objection/lib/relations/hasOneThrough/HasOneThroughRelation.js");
const { ManyToManyRelation } = __webpack_require__(/*! ./relations/manyToMany/ManyToManyRelation */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyRelation.js");
const { transaction } = __webpack_require__(/*! ./transaction */ "../node_modules/objection/lib/transaction.js");

const {
  snakeCaseMappers,
  knexSnakeCaseMappers,
  knexIdentifierMapping
} = __webpack_require__(/*! ./utils/identifierMapping */ "../node_modules/objection/lib/utils/identifierMapping.js");
const { compose, mixin } = __webpack_require__(/*! ./utils/mixin */ "../node_modules/objection/lib/utils/mixin.js");
const { ref } = __webpack_require__(/*! ./queryBuilder/ReferenceBuilder */ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js");
const { lit } = __webpack_require__(/*! ./queryBuilder/LiteralBuilder */ "../node_modules/objection/lib/queryBuilder/LiteralBuilder.js");
const { raw } = __webpack_require__(/*! ./queryBuilder/RawBuilder */ "../node_modules/objection/lib/queryBuilder/RawBuilder.js");

const { inherit } = __webpack_require__(/*! ../lib/utils/classUtils */ "../node_modules/objection/lib/utils/classUtils.js");
const { deprecate } = __webpack_require__(/*! ../lib/utils/deprecate */ "../node_modules/objection/lib/utils/deprecate.js");

// We need to wrap the classes, that people can inherit, with ES5 classes
// so that babel is able to use ES5 inheritance. sigh... Maybe people
// should stop transpiling node apps to ES5 in the year 2019? Node 6
// with full class support was released three years ago.

function Model() {
  // Nothing to do here.
}

function QueryBuilder(...args) {
  NativeQueryBuilder.init(this, ...args);
}

function Validator(...args) {
  NativeValidator.init(this, ...args);
}

function AjvValidator(...args) {
  NativeAjvValidator.init(this, ...args);
}

inherit(Model, NativeModel);
inherit(QueryBuilder, NativeQueryBuilder);
inherit(Validator, NativeValidator);
inherit(AjvValidator, NativeAjvValidator);

Model.QueryBuilder = QueryBuilder;

module.exports = {
  Model,
  QueryBuilder,
  QueryBuilderBase,
  QueryBuilderOperation,
  RelationExpression,
  ValidationError,
  NotFoundError,
  AjvValidator,
  Validator,
  Relation,
  HasOneRelation,
  HasManyRelation,
  BelongsToOneRelation,
  HasOneThroughRelation,
  ManyToManyRelation,

  transaction,
  compose,
  mixin,
  ref,
  lit,
  raw,

  snakeCaseMappers,
  knexSnakeCaseMappers,
  knexIdentifierMapping
};

Object.defineProperties(module.exports, {
  Promise: {
    enumerable: true,

    get: () => {
      deprecate(
        'objection.Promise is deprecated and will be removed in 2.0.0. Bluebird dependency will be removed in 2.0.0.'
      );
      return __webpack_require__(/*! bluebird */ "bluebird");
    }
  },

  lodash: {
    enumerable: true,

    get: () => {
      deprecate(
        'objection.lodash is deprecated and will be removed in 2.0.0. lodash dependency will be removed in 2.0.0.'
      );
      return __webpack_require__(/*! lodash */ "lodash");
    }
  }
});


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/InternalOptions.js":
/*!*********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/InternalOptions.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class InternalOptions {
  constructor() {
    this.skipUndefined = false;
    this.keepImplicitJoinProps = false;
    this.isInternalQuery = false;
    this.debug = false;
  }

  clone() {
    const copy = new this.constructor();

    copy.skipUndefined = this.skipUndefined;
    copy.keepImplicitJoinProps = this.keepImplicitJoinProps;
    copy.isInternalQuery = this.isInternalQuery;
    copy.debug = this.debug;

    return copy;
  }
}

module.exports = {
  InternalOptions
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/JoinBuilder.js":
/*!*****************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/JoinBuilder.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperationSupport } = __webpack_require__(/*! ./QueryBuilderOperationSupport */ "../node_modules/objection/lib/queryBuilder/QueryBuilderOperationSupport.js");
const { KnexOperation } = __webpack_require__(/*! ./operations/KnexOperation */ "../node_modules/objection/lib/queryBuilder/operations/KnexOperation.js");

class JoinBuilder extends QueryBuilderOperationSupport {
  using(...args) {
    return this.addOperation(new KnexOperation('using'), args);
  }

  on(...args) {
    return this.addOperation(new KnexOperation('on'), args);
  }

  orOn(...args) {
    return this.addOperation(new KnexOperation('orOn'), args);
  }

  onBetween(...args) {
    return this.addOperation(new KnexOperation('onBetween'), args);
  }

  onNotBetween(...args) {
    return this.addOperation(new KnexOperation('onNotBetween'), args);
  }

  orOnBetween(...args) {
    return this.addOperation(new KnexOperation('orOnBetween'), args);
  }

  orOnNotBetween(...args) {
    return this.addOperation(new KnexOperation('orOnNotBetween'), args);
  }

  onIn(...args) {
    return this.addOperation(new KnexOperation('onIn'), args);
  }

  onNotIn(...args) {
    return this.addOperation(new KnexOperation('onNotIn'), args);
  }

  orOnIn(...args) {
    return this.addOperation(new KnexOperation('orOnIn'), args);
  }

  orOnNotIn(...args) {
    return this.addOperation(new KnexOperation('orOnNotIn'), args);
  }

  onNull(...args) {
    return this.addOperation(new KnexOperation('onNull'), args);
  }

  orOnNull(...args) {
    return this.addOperation(new KnexOperation('orOnNull'), args);
  }

  onNotNull(...args) {
    return this.addOperation(new KnexOperation('onNotNull'), args);
  }

  orOnNotNull(...args) {
    return this.addOperation(new KnexOperation('orOnNotNull'), args);
  }

  onExists(...args) {
    return this.addOperation(new KnexOperation('onExists'), args);
  }

  orOnExists(...args) {
    return this.addOperation(new KnexOperation('orOnExists'), args);
  }

  onNotExists(...args) {
    return this.addOperation(new KnexOperation('onNotExists'), args);
  }

  orOnNotExists(...args) {
    return this.addOperation(new KnexOperation('orOnNotExists'), args);
  }

  type(...args) {
    return this.addOperation(new KnexOperation('type'), args);
  }

  andOn(...args) {
    return this.addOperation(new KnexOperation('andOn'), args);
  }

  andOnIn(...args) {
    return this.addOperation(new KnexOperation('andOnIn'), args);
  }

  andOnNotIn(...args) {
    return this.addOperation(new KnexOperation('andOnNotIn'), args);
  }

  andOnNull(...args) {
    return this.addOperation(new KnexOperation('andOnNull'), args);
  }

  andOnNotNull(...args) {
    return this.addOperation(new KnexOperation('andOnNotNull'), args);
  }

  andOnExists(...args) {
    return this.addOperation(new KnexOperation('andOnExists'), args);
  }

  andOnNotExists(...args) {
    return this.addOperation(new KnexOperation('andOnNotExists'), args);
  }

  andOnBetween(...args) {
    return this.addOperation(new KnexOperation('andOnBetween'), args);
  }

  andOnNotBetween(...args) {
    return this.addOperation(new KnexOperation('andOnNotBetween'), args);
  }

  onVal(...args) {
    return this.addOperation(new KnexOperation('onVal'), args);
  }

  andOnVal(...args) {
    return this.addOperation(new KnexOperation('andOnVal'), args);
  }

  orOnVal(...args) {
    return this.addOperation(new KnexOperation('orOnVal'), args);
  }
}

module.exports = {
  JoinBuilder
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/LiteralBuilder.js":
/*!********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/LiteralBuilder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray, isObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { buildArg } = __webpack_require__(/*! ../utils/buildUtils */ "../node_modules/objection/lib/utils/buildUtils.js");
const { deprecate } = __webpack_require__(/*! ../utils/deprecate */ "../node_modules/objection/lib/utils/deprecate.js");

class LiteralBuilder {
  constructor(value) {
    this._value = value;
    this._cast = null;
    // Cast objects and arrays to json by default.
    this._toJson = isObject(value);
    this._toArray = false;
  }

  get cast() {
    return this._cast;
  }

  castText() {
    return this.castTo('text');
  }

  castInt() {
    return this.castTo('integer');
  }

  castBigInt() {
    return this.castTo('bigint');
  }

  castFloat() {
    return this.castTo('float');
  }

  castDecimal() {
    return this.castTo('decimal');
  }

  castReal() {
    return this.castTo('real');
  }

  castBool() {
    return this.castTo('boolean');
  }

  castJson() {
    this._toArray = false;
    this._toJson = true;
    this._cast = 'jsonb';
    return this;
  }

  castArray() {
    deprecate(
      'castArray() is deprecated. Use asArray() instead. castArray() will be removed in 2.0'
    );
    return this.asArray();
  }

  castType(sqlType) {
    deprecate(
      'castType(type) is deprecated. Use castTo(type) instead. castType(type) will be removed in 2.0'
    );
    return this.castTo(sqlType);
  }

  castTo(sqlType) {
    this._cast = sqlType;
    return this;
  }

  asArray() {
    this._toJson = false;
    this._toArray = true;
    return this;
  }

  toKnexRaw(builder) {
    let sql = null;
    let bindings = null;

    if (this._toJson) {
      bindings = JSON.stringify(this._value);
      sql = '?';
    } else if (this._toArray) {
      bindings = asArray(this._value).map(it => buildArg(it, builder));
      sql = `ARRAY[${bindings.map(() => '?').join(', ')}]`;
    } else {
      bindings = this._value;
      sql = '?';
    }

    if (this._cast) {
      sql = `CAST(${sql} AS ${this._cast})`;
    }

    return builder.knex().raw(sql, bindings);
  }
}

function lit(val) {
  return new LiteralBuilder(val);
}

module.exports = {
  LiteralBuilder,
  lit
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/QueryBuilder.js":
/*!******************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/QueryBuilder.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Bluebird = __webpack_require__(/*! bluebird */ "bluebird");

const { raw } = __webpack_require__(/*! ./RawBuilder */ "../node_modules/objection/lib/queryBuilder/RawBuilder.js");
const { deprecate } = __webpack_require__(/*! ../utils/deprecate */ "../node_modules/objection/lib/utils/deprecate.js");
const { createModifier } = __webpack_require__(/*! ../utils/createModifier */ "../node_modules/objection/lib/utils/createModifier.js");
const { ValidationErrorType } = __webpack_require__(/*! ../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { isObject, isString, isFunction, last } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { RelationExpression, DuplicateRelationError } = __webpack_require__(/*! ./RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");
const { Selection } = __webpack_require__(/*! ./operations/select/Selection */ "../node_modules/objection/lib/queryBuilder/operations/select/Selection.js");

const { QueryBuilderContext } = __webpack_require__(/*! ./QueryBuilderContext */ "../node_modules/objection/lib/queryBuilder/QueryBuilderContext.js");
const { QueryBuilderBase } = __webpack_require__(/*! ./QueryBuilderBase */ "../node_modules/objection/lib/queryBuilder/QueryBuilderBase.js");

const { FindOperation } = __webpack_require__(/*! ./operations/FindOperation */ "../node_modules/objection/lib/queryBuilder/operations/FindOperation.js");
const { DeleteOperation } = __webpack_require__(/*! ./operations/DeleteOperation */ "../node_modules/objection/lib/queryBuilder/operations/DeleteOperation.js");
const { UpdateOperation } = __webpack_require__(/*! ./operations/UpdateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js");
const { InsertOperation } = __webpack_require__(/*! ./operations/InsertOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js");
const { RelateOperation } = __webpack_require__(/*! ./operations/RelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/RelateOperation.js");
const { UnrelateOperation } = __webpack_require__(/*! ./operations/UnrelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UnrelateOperation.js");

const { JoinEagerOperation } = __webpack_require__(/*! ./operations/eager/JoinEagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/JoinEagerOperation.js");
const { NaiveEagerOperation } = __webpack_require__(/*! ./operations/eager/NaiveEagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/NaiveEagerOperation.js");
const { WhereInEagerOperation } = __webpack_require__(/*! ./operations/eager/WhereInEagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/WhereInEagerOperation.js");

const { InsertGraphAndFetchOperation } = __webpack_require__(/*! ./operations/InsertGraphAndFetchOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertGraphAndFetchOperation.js");
const { UpsertGraphAndFetchOperation } = __webpack_require__(/*! ./operations/UpsertGraphAndFetchOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpsertGraphAndFetchOperation.js");
const { InsertAndFetchOperation } = __webpack_require__(/*! ./operations/InsertAndFetchOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertAndFetchOperation.js");
const { UpdateAndFetchOperation } = __webpack_require__(/*! ./operations/UpdateAndFetchOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpdateAndFetchOperation.js");
const { JoinRelationOperation } = __webpack_require__(/*! ./operations/JoinRelationOperation */ "../node_modules/objection/lib/queryBuilder/operations/JoinRelationOperation.js");
const { OnBuildKnexOperation } = __webpack_require__(/*! ./operations/OnBuildKnexOperation */ "../node_modules/objection/lib/queryBuilder/operations/OnBuildKnexOperation.js");
const { InsertGraphOperation } = __webpack_require__(/*! ./operations/InsertGraphOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertGraphOperation.js");
const { UpsertGraphOperation } = __webpack_require__(/*! ./operations/UpsertGraphOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpsertGraphOperation.js");
const { RunBeforeOperation } = __webpack_require__(/*! ./operations/RunBeforeOperation */ "../node_modules/objection/lib/queryBuilder/operations/RunBeforeOperation.js");
const { RunAfterOperation } = __webpack_require__(/*! ./operations/RunAfterOperation */ "../node_modules/objection/lib/queryBuilder/operations/RunAfterOperation.js");
const { FindByIdOperation } = __webpack_require__(/*! ./operations/FindByIdOperation */ "../node_modules/objection/lib/queryBuilder/operations/FindByIdOperation.js");
const { FindByIdsOperation } = __webpack_require__(/*! ./operations/FindByIdsOperation */ "../node_modules/objection/lib/queryBuilder/operations/FindByIdsOperation.js");
const { OnBuildOperation } = __webpack_require__(/*! ./operations/OnBuildOperation */ "../node_modules/objection/lib/queryBuilder/operations/OnBuildOperation.js");
const { OnErrorOperation } = __webpack_require__(/*! ./operations/OnErrorOperation */ "../node_modules/objection/lib/queryBuilder/operations/OnErrorOperation.js");
const { SelectOperation } = __webpack_require__(/*! ./operations/select/SelectOperation */ "../node_modules/objection/lib/queryBuilder/operations/select/SelectOperation.js");
const { EagerOperation } = __webpack_require__(/*! ./operations/eager/EagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/EagerOperation.js");
const { RangeOperation } = __webpack_require__(/*! ./operations/RangeOperation */ "../node_modules/objection/lib/queryBuilder/operations/RangeOperation.js");
const { FirstOperation } = __webpack_require__(/*! ./operations/FirstOperation */ "../node_modules/objection/lib/queryBuilder/operations/FirstOperation.js");
const { FromOperation } = __webpack_require__(/*! ./operations/FromOperation */ "../node_modules/objection/lib/queryBuilder/operations/FromOperation.js");
const { KnexOperation } = __webpack_require__(/*! ./operations/KnexOperation */ "../node_modules/objection/lib/queryBuilder/operations/KnexOperation.js");

class QueryBuilder extends QueryBuilderBase {
  static init(self, modelClass) {
    super.init(self, modelClass);

    self._resultModelClass = null;
    self._explicitRejectValue = null;
    self._explicitResolveValue = null;

    self._allowedUpsertExpression = null;
    self._findOperationOptions = modelClass.defaultFindOptions;

    self._findOperationFactory = findOperationFactory;
    self._insertOperationFactory = insertOperationFactory;
    self._updateOperationFactory = updateOperationFactory;
    self._patchOperationFactory = patchOperationFactory;
    self._relateOperationFactory = relateOperationFactory;
    self._unrelateOperationFactory = unrelateOperationFactory;
    self._deleteOperationFactory = deleteOperationFactory;
  }

  static get QueryBuilderContext() {
    return QueryBuilderContext;
  }

  static parseRelationExpression(expr) {
    return RelationExpression.create(expr).toPojo();
  }

  tableNameFor(modelClassOrTableName, newTableName) {
    return super.tableNameFor(getTableName(modelClassOrTableName), newTableName);
  }

  tableName(newTableName) {
    return this.tableNameFor(this.modelClass().getTableName(), newTableName);
  }

  tableRef() {
    return this.tableRefFor(this.modelClass().getTableName());
  }

  aliasFor(modelClassOrTableName, alias) {
    return super.aliasFor(getTableName(modelClassOrTableName), alias);
  }

  alias(alias) {
    return this.aliasFor(this.modelClass().getTableName(), alias);
  }

  fullIdColumnFor(modelClass) {
    const tableName = this.tableRefFor(modelClass.getTableName());
    const idColumn = modelClass.getIdColumn();

    if (Array.isArray(idColumn)) {
      return idColumn.map(col => `${tableName}.${col}`);
    } else {
      return `${tableName}.${idColumn}`;
    }
  }

  fullIdColumn() {
    return this.fullIdColumnFor(this.modelClass());
  }

  applyModifier(...args) {
    for (const arg of args) {
      const modifier = createModifier({
        modifier: arg,
        modelClass: this.modelClass()
      });

      modifier(this);
    }

    return this;
  }

  applyFilter(...args) {
    return this.applyModifier(...args);
  }

  modify(...args) {
    const arg = args[0];
    if (isFunction(arg)) {
      super.modify(...args);
    } else if (arg) {
      this.applyModifier(...args);
    }
    return this;
  }

  reject(error) {
    this._explicitRejectValue = error;
    return this;
  }

  resolve(value) {
    this._explicitResolveValue = value;
    return this;
  }

  isExplicitlyResolvedOrRejected() {
    return !!(this._explicitRejectValue || this._explicitResolveValue);
  }

  isExecutable() {
    return !this.isExplicitlyResolvedOrRejected() && !findQueryExecutorOperation(this);
  }

  findOperationFactory(factory) {
    this._findOperationFactory = factory;
    return this;
  }

  insertOperationFactory(factory) {
    this._insertOperationFactory = factory;
    return this;
  }

  updateOperationFactory(factory) {
    this._updateOperationFactory = factory;
    return this;
  }

  patchOperationFactory(factory) {
    this._patchOperationFactory = factory;
    return this;
  }

  deleteOperationFactory(factory) {
    this._deleteOperationFactory = factory;
    return this;
  }

  relateOperationFactory(factory) {
    this._relateOperationFactory = factory;
    return this;
  }

  unrelateOperationFactory(factory) {
    this._unrelateOperationFactory = factory;
    return this;
  }

  eagerAlgorithm(algorithm, eagerOptions) {
    ensureEagerOperation(this, algorithm);

    if (eagerOptions) {
      this.eagerOptions(eagerOptions);
    }

    return this;
  }

  eager(exp, modifiers) {
    const eagerOp = ensureEagerOperation(this);

    eagerOp.expression = parseRelationExpression(this.modelClass(), exp);
    eagerOp.modifiers = modifiers;

    checkEager(this);
    return this;
  }

  joinEager(exp, modifiers) {
    return this.eagerAlgorithm(getJoinEagerAlgorithm(this)).eager(exp, modifiers);
  }

  naiveEager(exp, modifiers) {
    return this.eagerAlgorithm(getNaiveEagerAlgorithm(this)).eager(exp, modifiers);
  }

  mergeEager(exp, modifiers) {
    const eagerOp = ensureEagerOperation(this);

    eagerOp.expression = eagerOp.expression.merge(parseRelationExpression(this.modelClass(), exp));

    eagerOp.modifiers = Object.assign({}, eagerOp.modifiers, modifiers);

    checkEager(this);
    return this;
  }

  mergeJoinEager(exp, modifiers) {
    return this.eagerAlgorithm(this.modelClass().JoinEagerAlgorithm).mergeEager(exp, modifiers);
  }

  mergeNaiveEager(exp, modifiers) {
    return this.eagerAlgorithm(this.modelClass().NaiveEagerAlgorithm).mergeEager(exp, modifiers);
  }

  allowEager(exp) {
    const eagerOp = ensureEagerOperation(this);
    eagerOp.allowedExpression = parseRelationExpression(this.modelClass(), exp);

    checkEager(this);
    return this;
  }

  mergeAllowEager(exp) {
    const eagerOp = ensureEagerOperation(this);

    if (eagerOp.allowedExpression) {
      eagerOp.allowedExpression = eagerOp.allowedExpression.merge(
        parseRelationExpression(this.modelClass(), exp)
      );
    } else {
      eagerOp.allowedExpression = parseRelationExpression(this.modelClass(), exp);
    }

    checkEager(this);
    return this;
  }

  eagerObject() {
    const eagerOp = this.findOperation(EagerOperation);

    if (eagerOp && !eagerOp.expression.isEmpty) {
      return eagerOp.expression.toPojo();
    } else {
      return null;
    }
  }

  eagerModifiers() {
    const eagerOp = this.findOperation(EagerOperation);

    if (eagerOp && !eagerOp.expression.isEmpty) {
      return Object.assign({}, eagerOp.modifiers);
    } else {
      return {};
    }
  }

  eagerModifiersAtPath() {
    const eagerOp = this.findOperation(EagerOperation);

    if (eagerOp && !eagerOp.expression.isEmpty) {
      return eagerOp.modifiersAtPath.map(it => Object.assign({}, it));
    } else {
      return [];
    }
  }

  modifyEager(path, modifier) {
    const eagerOp = ensureEagerOperation(this);
    eagerOp.modifiersAtPath.push({ path, modifier });
    return this;
  }

  filterEager(...args) {
    return this.modifyEager(...args);
  }

  allowUpsert(exp) {
    this._allowedUpsertExpression = exp || null;

    if (isString(this._allowedUpsertExpression)) {
      this._allowedUpsertExpression = parseRelationExpression(
        this.modelClass(),
        this._allowedUpsertExpression
      );
    }

    return this;
  }

  allowedUpsertExpression() {
    return this._allowedUpsertExpression;
  }

  allowInsert(exp) {
    return this.allowUpsert(exp);
  }

  eagerOptions(opt) {
    const eagerOp = ensureEagerOperation(this);
    eagerOp.eagerOptions = Object.assign({}, eagerOp.eagerOptions, opt);
    return this;
  }

  findOptions(opt) {
    if (arguments.length !== 0) {
      this._findOperationOptions = Object.assign({}, this._findOperationOptions, opt);
      return this;
    } else {
      return this._findOperationOptions;
    }
  }

  resultModelClass() {
    return this._resultModelClass || this.modelClass();
  }

  isFind() {
    return !(
      this.isInsert() ||
      this.isUpdate() ||
      this.isDelete() ||
      this.isRelate() ||
      this.isUnrelate()
    );
  }

  isInsert() {
    return this.has(InsertOperation);
  }

  isUpdate() {
    return this.has(UpdateOperation);
  }

  isDelete() {
    return this.has(DeleteOperation);
  }

  isRelate() {
    return this.has(RelateOperation);
  }

  isUnrelate() {
    return this.has(UnrelateOperation);
  }

  hasWheres() {
    return this.has(QueryBuilderBase.WhereSelector);
  }

  hasSelects() {
    return this.has(QueryBuilderBase.SelectSelector);
  }

  hasEager() {
    const eagerOp = this.findOperation(EagerOperation);
    return !!eagerOp && !eagerOp.expression.isEmpty;
  }

  isSelectAll() {
    if (this._operations.length === 0) {
      return true;
    }

    const tableRef = this.tableRef();
    const tableName = this.tableNameFor(this.modelClass().getTableName());

    return this.everyOperation(op => {
      if (op.constructor === SelectOperation) {
        // SelectOperations with zero selections are the ones that only have
        // raw items or other non-trivial selections.
        return (
          op.selections.length > 0 &&
          op.selections.every(select => {
            return (!select.table || select.table === tableRef) && select.column === '*';
          })
        );
      } else if (op.constructor === FromOperation) {
        return op.table === tableName;
      } else if (op.name === 'as' || op.is(FindOperation)) {
        return true;
      } else {
        return false;
      }
    });
  }

  isFindQuery() {
    deprecate(
      `isFindQuery is deprecated. Use isFind instead. This method will be removed in version 2.0`
    );
    return this.isFind();
  }

  isEagerQuery() {
    deprecate(
      `isEagerQuery is deprecated. Use hasEager instead. This method will be removed in version 2.0`
    );
    return this.hasEager();
  }

  toString() {
    try {
      return this.toKnexQuery().toString();
    } catch (err) {
      return `This query cannot be built synchronously. Consider using debug() method instead.`;
    }
  }

  toSql() {
    return this.toString();
  }

  toFindQuery() {
    return this.clone().clear(
      op => op.is(InsertOperation) || op.is(UpdateOperation) || op.is(DeleteOperation)
    );
  }

  clone() {
    const builder = new this.constructor(this.modelClass());

    // Call the super class's clone implementation.
    this.baseCloneInto(builder);

    builder._resultModelClass = this._resultModelClass;

    builder._explicitRejectValue = this._explicitRejectValue;
    builder._explicitResolveValue = this._explicitResolveValue;

    builder._allowedUpsertExpression = this._allowedUpsertExpression;
    builder._findOperationOptions = this._findOperationOptions;

    builder._findOperationFactory = this._findOperationFactory;
    builder._insertOperationFactory = this._insertOperationFactory;
    builder._updateOperationFactory = this._updateOperationFactory;
    builder._patchOperationFactory = this._patchOperationFactory;
    builder._relateOperationFactory = this._relateOperationFactory;
    builder._unrelateOperationFactory = this._unrelateOperationFactory;
    builder._deleteOperationFactory = this._deleteOperationFactory;

    return builder;
  }

  clearEager() {
    this.clear(EagerOperation);
    return this;
  }

  clearReject() {
    this._explicitRejectValue = null;
    return this;
  }

  clearResolve() {
    this._explicitResolveValue = null;
    return this;
  }

  castTo(modelClass) {
    this._resultModelClass = modelClass;
    return this;
  }

  then(...args) {
    const promise = this.execute();
    return promise.then(...args);
  }

  map(...args) {
    const promise = this.execute();
    return promise.map(...args);
  }

  reduce(...args) {
    const promise = this.execute();
    return promise.reduce(...args);
  }

  catch(...args) {
    const promise = this.execute();
    return promise.catch(...args);
  }

  return(...args) {
    const promise = this.execute();
    return promise.return(...args);
  }

  reflect() {
    const promise = this.execute();
    return promise.reflect();
  }

  bind(...args) {
    const promise = this.execute();
    return promise.bind(...args);
  }

  asCallback(...args) {
    const promise = this.execute();
    return promise.asCallback(...args);
  }

  nodeify(...args) {
    const promise = this.execute();
    return promise.nodeify(...args);
  }

  resultSize() {
    const knex = this.knex();
    const builder = this.clone().clear(/orderBy|offset|limit/);

    const countQuery = knex.count('* as count').from(knexBuilder => {
      builder.toKnexQuery(knexBuilder).as('temp');
    });

    if (this.internalOptions().debug) {
      countQuery.debug();
    }

    return countQuery.then(
      result => (result[0] && result[0].count ? parseInt(result[0].count, 10) : 0)
    );
  }

  toKnexQuery(knexBuilder = this.knex().queryBuilder()) {
    // Take a clone so that we don't modify this instance during build.
    let builder = this.clone();

    builder = addImplicitOperations(builder);
    builder = callOnBuildHooks(builder);

    const queryExecutorOperation = findQueryExecutorOperation(builder);

    if (queryExecutorOperation) {
      // If the query executor is set, we build the builder that it returns.
      return queryExecutorOperation.queryExecutor(builder).toKnexQuery();
    } else {
      return buildKnexQuery(builder, knexBuilder);
    }
  }

  execute() {
    // Take a clone so that we don't modify this instance during execution.
    const builder = this.clone();

    return Bluebird.try(() => beforeExecute(builder))
      .then(() => doExecute(builder))
      .then(result => afterExecute(builder, result))
      .catch(error => handleExecuteError(builder, error));
  }

  pluck(propertyName) {
    return this.runAfter(result => {
      if (Array.isArray(result)) {
        return result.map(it => it && it[propertyName]);
      } else if (isObject(result)) {
        return result[propertyName];
      } else {
        return result;
      }
    });
  }

  throwIfNotFound() {
    return this.runAfter(result => {
      if (
        (Array.isArray(result) && result.length === 0) ||
        result === null ||
        result === undefined ||
        result === 0
      ) {
        throw this.modelClass().createNotFoundError(this.context());
      } else {
        return result;
      }
    });
  }

  findSelection(selection, explicit = false) {
    let noSelectStatements = true;
    let selectionInstance = null;

    this.forEachOperation(true, op => {
      if (op.constructor === SelectOperation) {
        selectionInstance = op.findSelection(this, selection);
        noSelectStatements = false;

        if (selectionInstance) {
          return false;
        }
      }
    });

    if (selectionInstance) {
      return selectionInstance;
    }

    if (noSelectStatements && !explicit) {
      const selectAll = new Selection(this.tableRef(), '*');

      if (Selection.doesSelect(this, selectAll, selection)) {
        return selectAll;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  findAllSelections() {
    let allSelections = [];

    this.forEachOperation(true, op => {
      if (op.constructor === SelectOperation) {
        allSelections = allSelections.concat(op.selections);
      }
    });

    return allSelections;
  }

  hasSelection(selection, explicit) {
    return this.findSelection(selection, explicit) !== null;
  }

  hasSelectionAs(selection, alias, explicit) {
    selection = Selection.create(selection);
    const foundSelection = this.findSelection(selection, explicit);

    if (foundSelection === null) {
      return false;
    } else {
      if (foundSelection.column === '*') {
        // * selects the columns with their column names as aliases.
        return selection.column === alias;
      } else {
        return foundSelection.name === alias;
      }
    }
  }

  traverse(modelClass, traverser) {
    if (typeof traverser === 'undefined') {
      traverser = modelClass;
      modelClass = null;
    }

    return this.runAfter(result => {
      this.resultModelClass().traverse(modelClass, result, traverser);
      return result;
    });
  }

  pick(modelClass, properties) {
    if (typeof properties === 'undefined') {
      properties = modelClass;
      modelClass = null;
    }

    // Turn the properties into a hash for performance.
    properties = properties.reduce((obj, prop) => {
      obj[prop] = true;
      return obj;
    }, {});

    return this.traverse(modelClass, model => {
      model.$pick(properties);
    });
  }

  omit(modelClass, properties) {
    if (typeof properties === 'undefined') {
      properties = modelClass;
      modelClass = null;
    }

    // Turn the properties into a hash for performance.
    properties = properties.reduce((obj, prop) => {
      obj[prop] = true;
      return obj;
    }, {});

    return this.traverse(modelClass, model => {
      model.$omit(properties);
    });
  }

  page(page, pageSize) {
    return this.range(+page * +pageSize, (+page + 1) * +pageSize - 1);
  }

  columnInfo({ table = null } = {}) {
    table = table || this.tableNameFor(this.modelClass().getTableName());

    const knex = this.knex();
    const tableParts = table.split('.');
    const columnInfoQuery = knex(last(tableParts)).columnInfo();

    if (tableParts.length > 1) {
      columnInfoQuery.withSchema(tableParts[0]);
    }

    if (this.internalOptions().debug) {
      columnInfoQuery.debug();
    }

    return columnInfoQuery;
  }

  withSchema(schema) {
    this.internalContext().onBuild.push(builder => {
      if (!builder.has(/withSchema/)) {
        // Need to push this operation to the front because knex doesn't use the
        // schema for operations called before `withSchema`.
        builder.addOperationToFront(new KnexOperation('withSchema'), [schema]);
      }
    });

    return this;
  }

  debug /* istanbul ignore next */() {
    this.internalOptions().debug = true;
    this.internalContext().onBuild.push(builder => {
      builder.addOperation(new KnexOperation('debug'), []);
    });

    return this;
  }

  insert(modelsOrObjects) {
    return writeOperation(this, () => {
      const insertOperation = this._insertOperationFactory(this);

      this.addOperation(insertOperation, [modelsOrObjects]);
    });
  }

  insertAndFetch(modelsOrObjects) {
    return writeOperation(this, () => {
      const insertOperation = this._insertOperationFactory(this);

      const insertAndFetchOperation = new InsertAndFetchOperation('insertAndFetch', {
        delegate: insertOperation
      });

      this.addOperation(insertAndFetchOperation, [modelsOrObjects]);
    });
  }

  insertGraph(modelsOrObjects, opt) {
    return writeOperation(this, () => {
      const insertOperation = this._insertOperationFactory(this);

      const insertGraphOperation = new InsertGraphOperation('insertGraph', {
        delegate: insertOperation,
        opt
      });

      this.addOperation(insertGraphOperation, [modelsOrObjects]);
    });
  }

  insertWithRelated(...args) {
    deprecate(
      `insertWithRelated is deprecated. Use insertGraph instead. This method will be removed in version 2.0`
    );
    return this.insertGraph(...args);
  }

  insertGraphAndFetch(modelsOrObjects, opt) {
    return writeOperation(this, () => {
      const insertOperation = this._insertOperationFactory(this);

      const insertGraphOperation = new InsertGraphOperation('insertGraph', {
        delegate: insertOperation,
        opt
      });

      const insertGraphAndFetchOperation = new InsertGraphAndFetchOperation('insertGraphAndFetch', {
        delegate: insertGraphOperation
      });

      return this.addOperation(insertGraphAndFetchOperation, [modelsOrObjects]);
    });
  }

  insertWithRelatedAndFetch(...args) {
    deprecate(
      `insertWithRelatedAndFetch is deprecated. Use insertGraphAndFetch instead. This method will be removed in version 2.0`
    );
    return this.insertGraphAndFetch(...args);
  }

  update(modelOrObject) {
    return writeOperation(this, () => {
      const updateOperation = this._updateOperationFactory(this);

      this.addOperation(updateOperation, [modelOrObject]);
    });
  }

  updateAndFetch(modelOrObject) {
    return writeOperation(this, () => {
      const updateOperation = this._updateOperationFactory(this);

      if (!(updateOperation.instance instanceof this.modelClass())) {
        throw new Error('updateAndFetch can only be called for instance operations');
      }

      const updateAndFetch = new UpdateAndFetchOperation('updateAndFetch', {
        delegate: updateOperation
      });

      // patchOperation is an instance update operation that already adds the
      // required "where id = $" clause.
      updateAndFetch.skipIdWhere = true;

      this.addOperation(updateAndFetch, [updateOperation.instance.$id(), modelOrObject]);
    });
  }

  updateAndFetchById(id, modelOrObject) {
    return writeOperation(this, () => {
      const updateOperation = this._updateOperationFactory(this);

      const updateAndFetch = new UpdateAndFetchOperation('updateAndFetch', {
        delegate: updateOperation
      });

      this.addOperation(updateAndFetch, [id, modelOrObject]);
    });
  }

  upsertGraph(modelsOrObjects, upsertOptions) {
    return writeOperation(this, () => {
      const upsertGraphOperation = new UpsertGraphOperation('upsertGraph', {
        upsertOptions
      });

      this.addOperation(upsertGraphOperation, [modelsOrObjects]);
    });
  }

  upsertGraphAndFetch(modelsOrObjects, upsertOptions) {
    return writeOperation(this, () => {
      const upsertGraphOperation = new UpsertGraphOperation('upsertGraph', {
        upsertOptions
      });

      const upsertGraphAndFetchOperation = new UpsertGraphAndFetchOperation('upsertGraphAndFetch', {
        delegate: upsertGraphOperation
      });

      return this.addOperation(upsertGraphAndFetchOperation, [modelsOrObjects]);
    });
  }

  patch(modelOrObject) {
    return writeOperation(this, () => {
      const patchOperation = this._patchOperationFactory(this);

      this.addOperation(patchOperation, [modelOrObject]);
    });
  }

  patchAndFetch(modelOrObject) {
    return writeOperation(this, () => {
      const patchOperation = this._patchOperationFactory(this);

      if (!(patchOperation.instance instanceof this.modelClass())) {
        throw new Error('patchAndFetch can only be called for instance operations');
      }

      const patchAndFetch = new UpdateAndFetchOperation('patchAndFetch', {
        delegate: patchOperation
      });

      // patchOperation is an instance update operation that already adds the
      // required "where id = $" clause.
      patchAndFetch.skipIdWhere = true;

      this.addOperation(patchAndFetch, [patchOperation.instance.$id(), modelOrObject]);
    });
  }

  patchAndFetchById(id, modelOrObject) {
    return writeOperation(this, () => {
      const patchOperation = this._patchOperationFactory(this);

      const patchAndFetch = new UpdateAndFetchOperation('patchAndFetch', {
        delegate: patchOperation
      });

      this.addOperation(patchAndFetch, [id, modelOrObject]);
    });
  }

  delete(...args) {
    return writeOperation(this, () => {
      if (args.length) {
        throw new Error(
          `Don't pass arguments to delete(). You should use it like this: delete().where('foo', 'bar').andWhere(...)`
        );
      }

      const deleteOperation = this._deleteOperationFactory(this);
      this.addOperation(deleteOperation, args);
    });
  }

  del(...args) {
    return this.delete(...args);
  }

  relate(...args) {
    return writeOperation(this, () => {
      const relateOperation = this._relateOperationFactory(this);

      this.addOperation(relateOperation, args);
    });
  }

  unrelate(...args) {
    return writeOperation(this, () => {
      if (args.length) {
        throw new Error(
          `Don't pass arguments to unrelate(). You should use it like this: unrelate().where('foo', 'bar').andWhere(...)`
        );
      }

      const unrelateOperation = this._unrelateOperationFactory(this);
      this.addOperation(unrelateOperation, args);
    });
  }

  increment(propertyName, howMuch) {
    const columnName = this.modelClass().propertyNameToColumnName(propertyName);

    return this.patch({
      [columnName]: raw('?? + ?', [columnName, howMuch])
    });
  }

  decrement(propertyName, howMuch) {
    const columnName = this.modelClass().propertyNameToColumnName(propertyName);

    return this.patch({
      [columnName]: raw('?? - ?', [columnName, howMuch])
    });
  }

  findOne(...args) {
    return this.where.apply(this, args).first();
  }

  range(...args) {
    return this.addOperation(new RangeOperation('range'), args);
  }

  first(...args) {
    return this.addOperation(new FirstOperation('first'), args);
  }

  joinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'innerJoin').addCall({
      expression,
      options
    });

    return this;
  }

  innerJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'innerJoin').addCall({
      expression,
      options
    });

    return this;
  }

  outerJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'outerJoin').addCall({
      expression,
      options
    });

    return this;
  }

  fullOuterJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'fullOuterJoin').addCall({
      expression,
      options
    });

    return this;
  }

  leftJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'leftJoin').addCall({
      expression,
      options
    });

    return this;
  }

  leftOuterJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'leftOuterJoin').addCall({
      expression,
      options
    });

    return this;
  }

  rightJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'rightJoin').addCall({
      expression,
      options
    });

    return this;
  }

  rightOuterJoinRelation(expression, options) {
    ensureJoinRelationOperation(this, 'rightOuterJoin').addCall({
      expression,
      options
    });

    return this;
  }

  deleteById(...args) {
    return this.findById(...args).delete();
  }

  findById(...args) {
    return this.addOperation(new FindByIdOperation('findById'), args).first();
  }

  findByIds(...args) {
    return this.addOperation(new FindByIdsOperation('findByIds'), args);
  }

  runBefore(...args) {
    return this.addOperation(new RunBeforeOperation('runBefore'), args);
  }

  onBuild(...args) {
    return this.addOperation(new OnBuildOperation('onBuild'), args);
  }

  onBuildKnex(...args) {
    return this.addOperation(new OnBuildKnexOperation('onBuildKnex'), args);
  }

  runAfter(...args) {
    return this.addOperation(new RunAfterOperation('runAfter'), args);
  }

  onError(...args) {
    return this.addOperation(new OnErrorOperation('onError'), args);
  }

  from(...args) {
    return this.addOperation(new FromOperation('from'), args);
  }

  table(...args) {
    return this.addOperation(new FromOperation('table'), args);
  }
}

Object.defineProperties(QueryBuilder.prototype, {
  isObjectionQueryBuilder: {
    enumerable: false,
    writable: false,
    value: true
  }
});

function getTableName(modelClassOrTableName) {
  if (isString(modelClassOrTableName)) {
    return modelClassOrTableName;
  } else {
    return modelClassOrTableName.getTableName();
  }
}

function ensureEagerOperation(builder, algorithm = null) {
  const defaultEagerOptions = builder.modelClass().defaultEagerOptions;
  const eagerOp = builder.findOperation(EagerOperation);

  if (algorithm) {
    const EagerOperationClass = getOperationClassForEagerAlgorithm(builder, algorithm);

    if (eagerOp instanceof EagerOperationClass) {
      return eagerOp;
    } else {
      const newEagerOp = new EagerOperationClass('eager', {
        defaultEagerOptions
      });

      if (eagerOp) {
        newEagerOp.cloneFrom(eagerOp);
      }

      builder.clear(EagerOperation);
      builder.addOperation(newEagerOp);

      return newEagerOp;
    }
  } else {
    if (eagerOp) {
      return eagerOp;
    } else {
      const EagerOperationClass = getOperationClassForEagerAlgorithm(
        builder,
        getDefaultEagerAlgorithm(builder)
      );

      const newEagerOp = new EagerOperationClass('eager', {
        defaultEagerOptions
      });

      builder.addOperation(newEagerOp);

      return newEagerOp;
    }
  }
}

function getDefaultEagerAlgorithm(builder) {
  return builder.modelClass().defaultEagerAlgorithm;
}

function getJoinEagerAlgorithm(builder) {
  return builder.modelClass().JoinEagerAlgorithm;
}

function getNaiveEagerAlgorithm(builder) {
  return builder.modelClass().NaiveEagerAlgorithm;
}

function getOperationClassForEagerAlgorithm(builder, algorithm) {
  if (algorithm === getJoinEagerAlgorithm(builder)) {
    return JoinEagerOperation;
  } else if (algorithm === getNaiveEagerAlgorithm(builder)) {
    return NaiveEagerOperation;
  } else {
    return WhereInEagerOperation;
  }
}

function parseRelationExpression(modelClass, exp) {
  try {
    return RelationExpression.create(exp);
  } catch (err) {
    if (err instanceof DuplicateRelationError) {
      throw modelClass.createValidationError({
        type: ValidationErrorType.RelationExpression,
        message: `Duplicate relation name "${
          err.relationName
        }" in relation expression "${exp}". Use "a.[b, c]" instead of "[a.b, a.c]".`
      });
    } else {
      throw modelClass.createValidationError({
        type: ValidationErrorType.RelationExpression,
        message: `Invalid relation expression "${exp}"`
      });
    }
  }
}

function checkEager(builder) {
  const eagerOp = builder.findOperation(EagerOperation);

  if (!eagerOp) {
    return;
  }

  const expr = eagerOp.expression;
  const allowedExpr = eagerOp.allowedExpression;

  if (expr.numChildren > 0 && allowedExpr && !allowedExpr.isSubExpression(expr)) {
    const modelClass = builder.modelClass();

    builder.reject(
      modelClass.createValidationError({
        type: ValidationErrorType.UnallowedRelation,
        message: 'eager expression not allowed'
      })
    );
  }
}

function findQueryExecutorOperation(builder) {
  return builder.findOperation(op => op.hasQueryExecutor());
}

function beforeExecute(builder) {
  let promise = Promise.resolve();

  builder = addImplicitOperations(builder);

  // Resolve all before hooks before building and executing the query
  // and the rest of the hooks.
  promise = chainOperationHooks(promise, builder, 'onBefore1');

  promise = chainHooks(promise, builder, builder.context().runBefore);
  promise = chainHooks(promise, builder, builder.internalContext().runBefore);

  promise = chainOperationHooks(promise, builder, 'onBefore2');
  promise = chainOperationHooks(promise, builder, 'onBefore3');

  return promise;
}

function doExecute(builder) {
  let promise = Promise.resolve();

  builder = callOnBuildHooks(builder);
  const queryExecutorOperation = findQueryExecutorOperation(builder);

  const explicitRejectValue = builder._explicitRejectValue;
  const explicitResolveValue = builder._explicitResolveValue;

  if (explicitRejectValue !== null) {
    promise = Promise.reject(explicitRejectValue);
  } else if (explicitResolveValue !== null) {
    promise = Promise.resolve(explicitResolveValue);
  } else if (queryExecutorOperation !== null) {
    promise = Promise.resolve(queryExecutorOperation.queryExecutor(builder));
  } else {
    promise = Promise.resolve(buildKnexQuery(builder));

    promise = chainOperationHooks(promise, builder, 'onRawResult');
    promise = promise.then(result => createModels(result, builder));
  }

  return promise;
}

function afterExecute(builder, result) {
  let promise = Promise.resolve(result);

  promise = chainOperationHooks(promise, builder, 'onAfter1');
  promise = chainOperationHooks(promise, builder, 'onAfter2');

  promise = chainHooks(promise, builder, builder.context().runAfter);
  promise = chainHooks(promise, builder, builder.internalContext().runAfter);

  promise = chainOperationHooks(promise, builder, 'onAfter3');

  return promise;
}

function handleExecuteError(builder, err) {
  let promise = Promise.reject(err);

  builder.forEachOperation(true, op => {
    if (op.hasOnError()) {
      promise = promise.catch(err =>
        builder.callAsyncOperationMethod(op, 'onError', [builder, err])
      );
    }
  });

  return promise;
}

function chainOperationHooks(promise, builder, hookName) {
  return promise.then(result => {
    let promise = Promise.resolve(result);

    builder.forEachOperation(true, op => {
      if (op.hasHook(hookName)) {
        promise = promise.then(result =>
          builder.callAsyncOperationMethod(op, hookName, [builder, result])
        );
      }
    });

    return promise;
  });
}

function ensureJoinRelationOperation(builder, joinOperation) {
  const opName = joinOperation + 'Relation';
  let op = builder.findOperation(opName);

  if (!op) {
    op = new JoinRelationOperation(opName, { joinOperation });
    builder.addOperation(op);
  }

  return op;
}

function addImplicitOperations(builder) {
  if (builder.isFind()) {
    // If no write operations have been called at this point this query is a
    // find query and we need to call the custom find implementation.
    addFindOperation(builder);
  }

  if (builder.hasEager()) {
    moveEagerOperationToEnd(builder);
  }

  return builder;
}

function addFindOperation(builder) {
  if (!builder.has(FindOperation)) {
    const operation = builder._findOperationFactory(builder);
    builder.addOperationToFront(operation, []);
  }
}

function moveEagerOperationToEnd(builder) {
  const eagerOp = builder.findOperation(EagerOperation);

  builder.clear(EagerOperation);
  builder.addOperation(eagerOp);
}

function callOnBuildHooks(builder) {
  callOnBuildFuncs(builder, builder.context().onBuild);
  callOnBuildFuncs(builder, builder.internalContext().onBuild);

  builder.executeOnBuild();
  return builder;
}

function callOnBuildFuncs(builder, func) {
  if (isFunction(func)) {
    func.call(builder, builder);
  } else if (Array.isArray(func)) {
    func.forEach(func => callOnBuildFuncs(builder, func));
  }
}

function buildKnexQuery(builder, knexBuilder = builder.knex().queryBuilder()) {
  builder.executeOnBuildKnex(knexBuilder);

  const fromOperation = builder.findLastOperation(QueryBuilderBase.FromSelector);
  const hasSelects = builder.has(QueryBuilderBase.SelectSelector);

  // Set the table only if it hasn't been explicitly set yet.
  if (!builder.isPartial() && !fromOperation) {
    setDefaultTable(builder, knexBuilder);
  }

  // Only add `table.*` select if there are no explicit selects
  // and `from` is a table name and not a subquery.
  if (!builder.isPartial() && !hasSelects && (!fromOperation || fromOperation.table)) {
    setDefaultSelect(builder, knexBuilder);
  }

  return knexBuilder;
}

function setDefaultTable(builder, knexBuilder) {
  const table = builder.tableNameFor(builder.modelClass().getTableName());
  const tableRef = builder.tableRef();

  if (table === tableRef) {
    knexBuilder.table(table);
  } else {
    knexBuilder.table(`${table} as ${tableRef}`);
  }
}

function setDefaultSelect(builder, knexBuilder) {
  const tableRef = builder.tableRef();

  knexBuilder.select(`${tableRef}.*`);
}

function chainHooks(promise, builder, func) {
  return promise.then(result => {
    let promise = Promise.resolve(result);

    if (isFunction(func)) {
      promise = promise.then(result => func.call(builder, result, builder));
    } else if (Array.isArray(func)) {
      func.forEach(func => {
        promise = chainHooks(promise, builder, func);
      });
    }

    return promise;
  });
}

function createModels(result, builder) {
  const modelClass = builder.resultModelClass();

  if (result === null || result === undefined) {
    return null;
  }

  if (Array.isArray(result)) {
    if (result.length && shouldBeConvertedToModel(result[0], modelClass)) {
      for (let i = 0, l = result.length; i < l; ++i) {
        result[i] = modelClass.fromDatabaseJson(result[i]);
      }
    }
  } else if (shouldBeConvertedToModel(result, modelClass)) {
    result = modelClass.fromDatabaseJson(result);
  }

  return result;
}

function shouldBeConvertedToModel(obj, modelClass) {
  return isObject(obj) && !(obj instanceof modelClass);
}

function writeOperation(builder, cb) {
  if (!builder.isFind()) {
    return builder.reject(
      new Error(
        'Double call to a write method. ' +
          'You can only call one of the write methods ' +
          '(insert, update, patch, delete, relate, unrelate, increment, decrement) ' +
          'and only once per query builder.'
      )
    );
  }

  try {
    cb();
    return builder;
  } catch (err) {
    return builder.reject(err);
  }
}

function findOperationFactory() {
  return new FindOperation('find');
}

function insertOperationFactory() {
  return new InsertOperation('insert');
}

function updateOperationFactory() {
  return new UpdateOperation('update');
}

function patchOperationFactory() {
  return new UpdateOperation('patch', {
    modelOptions: { patch: true }
  });
}

function relateOperationFactory() {
  return new RelateOperation('relate', {});
}

function unrelateOperationFactory() {
  return new UnrelateOperation('unrelate', {});
}

function deleteOperationFactory() {
  return new DeleteOperation('delete');
}

module.exports = {
  QueryBuilder
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/QueryBuilderBase.js":
/*!**********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/QueryBuilderBase.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperationSupport } = __webpack_require__(/*! ./QueryBuilderOperationSupport */ "../node_modules/objection/lib/queryBuilder/QueryBuilderOperationSupport.js");
const { isSqlite, isMsSql } = __webpack_require__(/*! ../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");

const { KnexOperation } = __webpack_require__(/*! ./operations/KnexOperation */ "../node_modules/objection/lib/queryBuilder/operations/KnexOperation.js");
const { SelectOperation } = __webpack_require__(/*! ./operations/select/SelectOperation */ "../node_modules/objection/lib/queryBuilder/operations/select/SelectOperation.js");
const { ReturningOperation } = __webpack_require__(/*! ./operations/ReturningOperation */ "../node_modules/objection/lib/queryBuilder/operations/ReturningOperation.js");
const { WhereCompositeOperation } = __webpack_require__(/*! ./operations/WhereCompositeOperation */ "../node_modules/objection/lib/queryBuilder/operations/WhereCompositeOperation.js");
const { WhereJsonPostgresOperation } = __webpack_require__(/*! ./operations/jsonApi/WhereJsonPostgresOperation */ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonPostgresOperation.js");

const {
  WhereInCompositeOperation
} = __webpack_require__(/*! ./operations/whereInComposite/WhereInCompositeOperation */ "../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeOperation.js");
const {
  WhereInCompositeSqliteOperation
} = __webpack_require__(/*! ./operations/whereInComposite/WhereInCompositeSqliteOperation */ "../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeSqliteOperation.js");
const {
  WhereInCompositeMsSqlOperation
} = __webpack_require__(/*! ./operations/whereInComposite/WhereInCompositeMsSqlOperation */ "../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeMsSqlOperation.js");
const {
  WhereJsonHasPostgresOperation
} = __webpack_require__(/*! ./operations/jsonApi/WhereJsonHasPostgresOperation */ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonHasPostgresOperation.js");
const {
  WhereJsonNotObjectPostgresOperation
} = __webpack_require__(/*! ./operations/jsonApi/WhereJsonNotObjectPostgresOperation */ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonNotObjectPostgresOperation.js");

class QueryBuilderBase extends QueryBuilderOperationSupport {
  modify(...args) {
    const func = args[0];

    if (!func) {
      return this;
    }

    if (args.length === 1) {
      func.call(this, this);
    } else {
      args[0] = this;
      func(...args);
    }

    return this;
  }

  transacting(trx) {
    this._context.knex = trx || null;
    return this;
  }

  select(...args) {
    return this.addOperation(new SelectOperation('select'), args);
  }

  insert(...args) {
    return this.addOperation(new KnexOperation('insert'), args);
  }

  update(...args) {
    return this.addOperation(new KnexOperation('update'), args);
  }

  delete(...args) {
    return this.addOperation(new KnexOperation('delete'), args);
  }

  del(...args) {
    return this.delete(...args);
  }

  forUpdate(...args) {
    return this.addOperation(new KnexOperation('forUpdate'), args);
  }

  forShare(...args) {
    return this.addOperation(new KnexOperation('forShare'), args);
  }

  as(...args) {
    return this.addOperation(new KnexOperation('as'), args);
  }

  columns(...args) {
    return this.addOperation(new SelectOperation('columns'), args);
  }

  column(...args) {
    return this.addOperation(new SelectOperation('column'), args);
  }

  from(...args) {
    return this.addOperation(new KnexOperation('from'), args);
  }

  fromJS(...args) {
    return this.addOperation(new KnexOperation('fromJS'), args);
  }

  into(...args) {
    return this.addOperation(new KnexOperation('into'), args);
  }

  withSchema(...args) {
    return this.addOperation(new KnexOperation('withSchema'), args);
  }

  table(...args) {
    return this.addOperation(new KnexOperation('table'), args);
  }

  distinct(...args) {
    return this.addOperation(new SelectOperation('distinct'), args);
  }

  join(...args) {
    return this.addOperation(new KnexOperation('join'), args);
  }

  joinRaw(...args) {
    return this.addOperation(new KnexOperation('joinRaw'), args);
  }

  innerJoin(...args) {
    return this.addOperation(new KnexOperation('innerJoin'), args);
  }

  leftJoin(...args) {
    return this.addOperation(new KnexOperation('leftJoin'), args);
  }

  leftOuterJoin(...args) {
    return this.addOperation(new KnexOperation('leftOuterJoin'), args);
  }

  rightJoin(...args) {
    return this.addOperation(new KnexOperation('rightJoin'), args);
  }

  rightOuterJoin(...args) {
    return this.addOperation(new KnexOperation('rightOuterJoin'), args);
  }

  outerJoin(...args) {
    return this.addOperation(new KnexOperation('outerJoin'), args);
  }

  fullOuterJoin(...args) {
    return this.addOperation(new KnexOperation('fullOuterJoin'), args);
  }

  crossJoin(...args) {
    return this.addOperation(new KnexOperation('crossJoin'), args);
  }

  where(...args) {
    return this.addOperation(new KnexOperation('where'), args);
  }

  andWhere(...args) {
    return this.addOperation(new KnexOperation('andWhere'), args);
  }

  orWhere(...args) {
    return this.addOperation(new KnexOperation('orWhere'), args);
  }

  whereNot(...args) {
    return this.addOperation(new KnexOperation('whereNot'), args);
  }

  orWhereNot(...args) {
    return this.addOperation(new KnexOperation('orWhereNot'), args);
  }

  whereRaw(...args) {
    return this.addOperation(new KnexOperation('whereRaw'), args);
  }

  andWhereRaw(...args) {
    return this.addOperation(new KnexOperation('andWhereRaw'), args);
  }

  orWhereRaw(...args) {
    return this.addOperation(new KnexOperation('orWhereRaw'), args);
  }

  whereWrapped(...args) {
    return this.addOperation(new KnexOperation('whereWrapped'), args);
  }

  havingWrapped(...args) {
    return this.addOperation(new KnexOperation('havingWrapped'), args);
  }

  whereExists(...args) {
    return this.addOperation(new KnexOperation('whereExists'), args);
  }

  orWhereExists(...args) {
    return this.addOperation(new KnexOperation('orWhereExists'), args);
  }

  whereNotExists(...args) {
    return this.addOperation(new KnexOperation('whereNotExists'), args);
  }

  orWhereNotExists(...args) {
    return this.addOperation(new KnexOperation('orWhereNotExists'), args);
  }

  whereIn(...args) {
    return this.addOperation(new KnexOperation('whereIn'), args);
  }

  orWhereIn(...args) {
    return this.addOperation(new KnexOperation('orWhereIn'), args);
  }

  whereNotIn(...args) {
    return this.addOperation(new KnexOperation('whereNotIn'), args);
  }

  orWhereNotIn(...args) {
    return this.addOperation(new KnexOperation('orWhereNotIn'), args);
  }

  whereNull(...args) {
    return this.addOperation(new KnexOperation('whereNull'), args);
  }

  orWhereNull(...args) {
    return this.addOperation(new KnexOperation('orWhereNull'), args);
  }

  whereNotNull(...args) {
    return this.addOperation(new KnexOperation('whereNotNull'), args);
  }

  orWhereNotNull(...args) {
    return this.addOperation(new KnexOperation('orWhereNotNull'), args);
  }

  whereBetween(...args) {
    return this.addOperation(new KnexOperation('whereBetween'), args);
  }

  andWhereBetween(...args) {
    return this.addOperation(new KnexOperation('andWhereBetween'), args);
  }

  whereNotBetween(...args) {
    return this.addOperation(new KnexOperation('whereNotBetween'), args);
  }

  andWhereNotBetween(...args) {
    return this.addOperation(new KnexOperation('andWhereNotBetween'), args);
  }

  orWhereBetween(...args) {
    return this.addOperation(new KnexOperation('orWhereBetween'), args);
  }

  orWhereNotBetween(...args) {
    return this.addOperation(new KnexOperation('orWhereNotBetween'), args);
  }

  groupBy(...args) {
    return this.addOperation(new KnexOperation('groupBy'), args);
  }

  groupByRaw(...args) {
    return this.addOperation(new KnexOperation('groupByRaw'), args);
  }

  orderBy(...args) {
    return this.addOperation(new KnexOperation('orderBy'), args);
  }

  orderByRaw(...args) {
    return this.addOperation(new KnexOperation('orderByRaw'), args);
  }

  union(...args) {
    return this.addOperation(new KnexOperation('union'), args);
  }

  unionAll(...args) {
    return this.addOperation(new KnexOperation('unionAll'), args);
  }

  intersect(...args) {
    return this.addOperation(new KnexOperation('intersect'), args);
  }

  having(...args) {
    return this.addOperation(new KnexOperation('having'), args);
  }

  orHaving(...args) {
    return this.addOperation(new KnexOperation('orHaving'), args);
  }

  havingIn(...args) {
    return this.addOperation(new KnexOperation('havingIn'), args);
  }

  orHavingIn(...args) {
    return this.addOperation(new KnexOperation('havingIn'), args);
  }

  havingNotIn(...args) {
    return this.addOperation(new KnexOperation('havingNotIn'), args);
  }

  orHavingNotIn(...args) {
    return this.addOperation(new KnexOperation('orHavingNotIn'), args);
  }

  havingNull(...args) {
    return this.addOperation(new KnexOperation('havingNull'), args);
  }

  orHavingNull(...args) {
    return this.addOperation(new KnexOperation('orHavingNull'), args);
  }

  havingNotNull(...args) {
    return this.addOperation(new KnexOperation('havingNotNull'), args);
  }

  orHavingNotNull(...args) {
    return this.addOperation(new KnexOperation('orHavingNotNull'), args);
  }

  havingExists(...args) {
    return this.addOperation(new KnexOperation('havingExists'), args);
  }

  orHavingExists(...args) {
    return this.addOperation(new KnexOperation('orHavingExists'), args);
  }

  havingNotExists(...args) {
    return this.addOperation(new KnexOperation('havingNotExists'), args);
  }

  orHavingNotExists(...args) {
    return this.addOperation(new KnexOperation('orHavingNotExists'), args);
  }

  havingBetween(...args) {
    return this.addOperation(new KnexOperation('havingBetween'), args);
  }

  orHavingBetween(...args) {
    return this.addOperation(new KnexOperation('havingBetween'), args);
  }

  havingNotBetween(...args) {
    return this.addOperation(new KnexOperation('havingNotBetween'), args);
  }

  orHavingNotBetween(...args) {
    return this.addOperation(new KnexOperation('havingNotBetween'), args);
  }

  havingRaw(...args) {
    return this.addOperation(new KnexOperation('havingRaw'), args);
  }

  orHavingRaw(...args) {
    return this.addOperation(new KnexOperation('orHavingRaw'), args);
  }

  offset(...args) {
    return this.addOperation(new KnexOperation('offset'), args);
  }

  limit(...args) {
    return this.addOperation(new KnexOperation('limit'), args);
  }

  count(...args) {
    return this.addOperation(new SelectOperation('count'), args);
  }

  countDistinct(...args) {
    return this.addOperation(new SelectOperation('countDistinct'), args);
  }

  min(...args) {
    return this.addOperation(new SelectOperation('min'), args);
  }

  max(...args) {
    return this.addOperation(new SelectOperation('max'), args);
  }

  sum(...args) {
    return this.addOperation(new SelectOperation('sum'), args);
  }

  sumDistinct(...args) {
    return this.addOperation(new SelectOperation('sumDistinct'), args);
  }

  avg(...args) {
    return this.addOperation(new SelectOperation('avg'), args);
  }

  avgDistinct(...args) {
    return this.addOperation(new SelectOperation('avgDistinct'), args);
  }

  debug(...args) {
    return this.addOperation(new KnexOperation('debug'), args);
  }

  returning(...args) {
    return this.addOperation(new ReturningOperation('returning'), args);
  }

  truncate(...args) {
    return this.addOperation(new KnexOperation('truncate'), args);
  }

  connection(...args) {
    return this.addOperation(new KnexOperation('connection'), args);
  }

  options(...args) {
    return this.addOperation(new KnexOperation('options'), args);
  }

  columnInfo(...args) {
    return this.addOperation(new KnexOperation('columnInfo'), args);
  }

  off(...args) {
    return this.addOperation(new KnexOperation('off'), args);
  }

  timeout(...args) {
    return this.addOperation(new KnexOperation('timeout'), args);
  }

  with(...args) {
    return this.addOperation(new KnexOperation('with'), args);
  }

  withRaw(...args) {
    return this.addOperation(new KnexOperation('withRaw'), args);
  }

  withWrapped(...args) {
    return this.addOperation(new KnexOperation('withWrapped'), args);
  }

  withRecursive(...args) {
    return this.addOperation(new KnexOperation('withRecursive'), args);
  }

  whereComposite(...args) {
    return this.addOperation(new WhereCompositeOperation('whereComposite'), args);
  }

  whereInComposite(...args) {
    let operation = null;

    if (isSqlite(this.knex())) {
      operation = new WhereInCompositeSqliteOperation('whereInComposite');
    } else if (isMsSql(this.knex())) {
      operation = new WhereInCompositeMsSqlOperation('whereInComposite');
    } else {
      operation = new WhereInCompositeOperation('whereInComposite');
    }

    return this.addOperation(operation, args);
  }

  whereNotInComposite(...args) {
    let operation = null;

    if (isSqlite(this.knex())) {
      operation = new WhereInCompositeSqliteOperation('whereNotInComposite', { prefix: 'not' });
    } else if (isMsSql(this.knex())) {
      operation = new WhereInCompositeMsSqlOperation('whereNotInComposite', { prefix: 'not' });
    } else {
      operation = new WhereInCompositeOperation('whereNotInComposite', { prefix: 'not' });
    }

    return this.addOperation(operation, args);
  }

  whereJsonSupersetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('whereJsonSupersetOf', { operator: '@>', bool: 'and' }),
      args
    );
  }

  orWhereJsonSupersetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('orWhereJsonSupersetOf', { operator: '@>', bool: 'or' }),
      args
    );
  }

  whereJsonNotSupersetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('whereJsonNotSupersetOf', {
        operator: '@>',
        bool: 'and',
        prefix: 'not'
      }),
      args
    );
  }

  orWhereJsonNotSupersetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('orWhereJsonNotSupersetOf', {
        operator: '@>',
        bool: 'or',
        prefix: 'not'
      }),
      args
    );
  }

  whereJsonSubsetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('whereJsonSubsetOf', { operator: '<@', bool: 'and' }),
      args
    );
  }

  orWhereJsonSubsetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('orWhereJsonSubsetOf', { operator: '<@', bool: 'or' }),
      args
    );
  }

  whereJsonNotSubsetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('whereJsonNotSubsetOf', {
        operator: '<@',
        bool: 'and',
        prefix: 'not'
      }),
      args
    );
  }

  orWhereJsonNotSubsetOf(...args) {
    return this.addOperation(
      new WhereJsonPostgresOperation('orWhereJsonNotSubsetOf', {
        operator: '<@',
        bool: 'or',
        prefix: 'not'
      }),
      args
    );
  }

  whereJsonNotArray(...args) {
    return this.addOperation(
      new WhereJsonNotObjectPostgresOperation('whereJsonNotArray', {
        bool: 'and',
        compareValue: []
      }),
      args
    );
  }

  orWhereJsonNotArray(...args) {
    return this.addOperation(
      new WhereJsonNotObjectPostgresOperation('orWhereJsonNotArray', {
        bool: 'or',
        compareValue: []
      }),
      args
    );
  }

  whereJsonNotObject(...args) {
    return this.addOperation(
      new WhereJsonNotObjectPostgresOperation('whereJsonNotObject', {
        bool: 'and',
        compareValue: {}
      }),
      args
    );
  }

  orWhereJsonNotObject(...args) {
    return this.addOperation(
      new WhereJsonNotObjectPostgresOperation('orWhereJsonNotObject', {
        bool: 'or',
        compareValue: {}
      }),
      args
    );
  }

  whereJsonHasAny(...args) {
    return this.addOperation(
      new WhereJsonHasPostgresOperation('whereJsonHasAny', { bool: 'and', operator: '?|' }),
      args
    );
  }

  orWhereJsonHasAny(...args) {
    return this.addOperation(
      new WhereJsonHasPostgresOperation('orWhereJsonHasAny', { bool: 'or', operator: '?|' }),
      args
    );
  }

  whereJsonHasAll(...args) {
    return this.addOperation(
      new WhereJsonHasPostgresOperation('whereJsonHasAll', { bool: 'and', operator: '?&' }),
      args
    );
  }

  orWhereJsonHasAll(...args) {
    return this.addOperation(
      new WhereJsonHasPostgresOperation('orWhereJsonHasAll', { bool: 'or', operator: '?&' }),
      args
    );
  }

  whereJsonIsArray(fieldExpression) {
    return this.whereJsonSupersetOf(fieldExpression, []);
  }

  orWhereJsonIsArray(fieldExpression) {
    return this.orWhereJsonSupersetOf(fieldExpression, []);
  }

  whereJsonIsObject(fieldExpression) {
    return this.whereJsonSupersetOf(fieldExpression, {});
  }

  orWhereJsonIsObject(fieldExpression) {
    return this.orWhereJsonSupersetOf(fieldExpression, {});
  }

  whereColumn(...args) {
    return this.addOperation(new KnexOperation('whereColumn'), args);
  }

  andWhereColumn(...args) {
    return this.addOperation(new KnexOperation('andWhereColumn'), args);
  }

  orWhereColumn(...args) {
    return this.addOperation(new KnexOperation('orWhereColumn'), args);
  }

  whereNotColumn(...args) {
    return this.addOperation(new KnexOperation('whereNotColumn'), args);
  }

  andWhereNotColumn(...args) {
    return this.addOperation(new KnexOperation('andWhereNotColumn'), args);
  }

  orWhereNotColumn(...args) {
    return this.addOperation(new KnexOperation('orWhereNotColumn'), args);
  }
}

Object.defineProperties(QueryBuilderBase.prototype, {
  isObjectionQueryBuilderBase: {
    enumerable: false,
    writable: false,
    value: true
  }
});

module.exports = {
  QueryBuilderBase
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/QueryBuilderContext.js":
/*!*************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/QueryBuilderContext.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderContextBase } = __webpack_require__(/*! ./QueryBuilderContextBase */ "../node_modules/objection/lib/queryBuilder/QueryBuilderContextBase.js");

class QueryBuilderContext extends QueryBuilderContextBase {
  constructor(userContext) {
    super(userContext);

    this.runBefore = [];
    this.runAfter = [];
    this.onBuild = [];
  }

  clone() {
    const ctx = super.clone();

    ctx.runBefore = this.runBefore.slice();
    ctx.runAfter = this.runAfter.slice();
    ctx.onBuild = this.onBuild.slice();

    return ctx;
  }
}

module.exports = {
  QueryBuilderContext
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/QueryBuilderContextBase.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/QueryBuilderContextBase.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { InternalOptions } = __webpack_require__(/*! ./InternalOptions */ "../node_modules/objection/lib/queryBuilder/InternalOptions.js");

class QueryBuilderContextBase {
  constructor(builder) {
    this.userContext = builder ? new builder.constructor.QueryBuilderUserContext(builder) : null;
    this.options = builder ? new this.constructor.InternalOptions() : null;
    this.knex = null;

    this.aliasMap = null;
    this.tableMap = null;
  }

  static get InternalOptions() {
    return InternalOptions;
  }

  clone() {
    const ctx = new this.constructor();

    ctx.userContext = this.userContext;
    ctx.options = this.options.clone();
    ctx.knex = this.knex;

    ctx.aliasMap = this.aliasMap;
    ctx.tableMap = this.tableMap;

    return ctx;
  }
}

module.exports = {
  QueryBuilderContextBase
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/QueryBuilderOperationSupport.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/QueryBuilderOperationSupport.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const promiseUtils = __webpack_require__(/*! ../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

const { isSubclassOf } = __webpack_require__(/*! ../utils/classUtils */ "../node_modules/objection/lib/utils/classUtils.js");
const { isString, isFunction, isRegExp, last } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { QueryBuilderOperation } = __webpack_require__(/*! ./operations/QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { QueryBuilderContextBase } = __webpack_require__(/*! ./QueryBuilderContextBase */ "../node_modules/objection/lib/queryBuilder/QueryBuilderContextBase.js");
const { QueryBuilderUserContext } = __webpack_require__(/*! ./QueryBuilderUserContext */ "../node_modules/objection/lib/queryBuilder/QueryBuilderUserContext.js");

const AllSelector = () => true;
const SelectSelector = /^(select|columns|column|distinct|count|countDistinct|min|max|sum|sumDistinct|avg|avgDistinct)$/;
const WhereSelector = /^(where|orWhere|andWhere|find)/;
const OnSelector = /^(on|orOn|andOn)/;
const OrderBySelector = /orderBy/;
const JoinSelector = /(join|joinRaw|joinRelation)$/i;
const FromSelector = /^(from|into|table)$/;

class QueryBuilderOperationSupport {
  constructor(...args) {
    this.constructor.init(this, ...args);
  }

  static init(self, modelClass) {
    self._modelClass = modelClass;
    self._operations = [];
    self._context = new this.QueryBuilderContext(self);
    self._parentQuery = null;
    self._isPartialQuery = false;
    self._activeOperations = [];
  }

  static forClass(modelClass) {
    return new this(modelClass);
  }

  static get AllSelector() {
    return AllSelector;
  }

  static get QueryBuilderContext() {
    return QueryBuilderContextBase;
  }

  static get QueryBuilderUserContext() {
    return QueryBuilderUserContext;
  }

  static get SelectSelector() {
    return SelectSelector;
  }

  static get WhereSelector() {
    return WhereSelector;
  }

  static get OnSelector() {
    return OnSelector;
  }

  static get JoinSelector() {
    return JoinSelector;
  }

  static get FromSelector() {
    return FromSelector;
  }

  static get OrderBySelector() {
    return OrderBySelector;
  }

  modelClass() {
    return this._modelClass;
  }

  context(obj) {
    const ctx = this._context;

    if (arguments.length === 0) {
      return ctx.userContext;
    } else {
      ctx.userContext = ctx.userContext.newFromObject(this, obj);
      return this;
    }
  }

  mergeContext(obj) {
    const ctx = this._context;
    ctx.userContext = ctx.userContext.newMerge(this, obj);
    return this;
  }

  internalContext(ctx) {
    if (arguments.length === 0) {
      return this._context;
    } else {
      this._context = ctx;
      return this;
    }
  }

  internalOptions(opt) {
    if (arguments.length === 0) {
      return this._context.options;
    } else {
      const oldOpt = this._context.options;
      this._context.options = Object.assign(oldOpt, opt);
      return this;
    }
  }

  isPartial(isPartial) {
    if (arguments.length === 0) {
      return this._isPartialQuery;
    } else {
      this._isPartialQuery = isPartial;
      return this;
    }
  }

  isInternal() {
    return this.internalOptions().isInternalQuery;
  }

  tableNameFor(tableName, newTableName) {
    const ctx = this.internalContext();
    const tableMap = ctx.tableMap;

    if (isString(newTableName)) {
      ctx.tableMap = tableMap || new Map();
      ctx.tableMap.set(tableName, newTableName);
      return this;
    } else {
      return (tableMap && tableMap.get(tableName)) || tableName;
    }
  }

  aliasFor(tableName, alias) {
    const ctx = this.internalContext();
    const aliasMap = ctx.aliasMap;

    if (isString(alias)) {
      ctx.aliasMap = aliasMap || new Map();
      ctx.aliasMap.set(tableName, alias);
      return this;
    } else {
      return (aliasMap && aliasMap.get(tableName)) || null;
    }
  }

  tableRefFor(tableName) {
    return this.aliasFor(tableName) || this.tableNameFor(tableName);
  }

  childQueryOf(query, { fork, isInternalQuery } = {}) {
    if (query) {
      let ctx = query.internalContext();

      if (fork) {
        ctx = ctx.clone();
      }

      if (isInternalQuery) {
        ctx.options.isInternalQuery = true;
      }

      this._parentQuery = query;
      this.internalContext(ctx);

      // Use the parent's knex if there was no knex in `ctx`.
      if (this.unsafeKnex() === null) {
        this.knex(query.unsafeKnex());
      }
    }

    return this;
  }

  subqueryOf(query) {
    if (query) {
      this._parentQuery = query;

      if (this.unsafeKnex() === null) {
        this.knex(query.unsafeKnex());
      }
    }

    return this;
  }

  parentQuery() {
    return this._parentQuery;
  }

  knex(...args) {
    if (args.length === 0) {
      const knex = this.unsafeKnex();

      if (!knex) {
        throw new Error(
          `no database connection available for a query. You need to bind the model class or the query to a knex instance.`
        );
      }

      return knex;
    } else {
      this._context.knex = args[0];
      return this;
    }
  }

  unsafeKnex() {
    return this._context.knex || this._modelClass.knex() || null;
  }

  clear(operationSelector) {
    const operationsToRemove = new Set();

    this.forEachOperation(operationSelector, op => {
      // If an ancestor operation has already been removed,
      // there's no need to remove the children anymore.
      if (!op.isAncestorInSet(operationsToRemove)) {
        operationsToRemove.add(op);
      }
    });

    for (const op of operationsToRemove) {
      this.removeOperation(op);
    }

    return this;
  }

  clearSelect() {
    return this.clear(SelectSelector);
  }

  clearWhere() {
    return this.clear(WhereSelector);
  }

  clearOrder() {
    return this.clear(OrderBySelector);
  }

  copyFrom(queryBuilder, operationSelector) {
    const operationsToAdd = new Set();

    queryBuilder.forEachOperation(operationSelector, op => {
      // If an ancestor operation has already been added,
      // there is no need to add
      if (!op.isAncestorInSet(operationsToAdd)) {
        operationsToAdd.add(op);
      }
    });

    for (const op of operationsToAdd) {
      const opClone = op.clone();

      // We may be moving nested operations to the root. Clear
      // any links to the parent operations.
      opClone.parentOperation = null;
      opClone.adderHookName = null;

      // We don't use `addOperation` here because we don't what to
      // call `onAdd` or add these operations as child operations.
      this._operations.push(opClone);
    }

    return this;
  }

  has(operationSelector) {
    return !!this.findOperation(operationSelector);
  }

  forEachOperation(operationSelector, callback, match = true) {
    const selector = buildFunctionForOperationSelector(operationSelector);

    for (const op of this._operations) {
      if (selector(op) === match && callback(op) === false) {
        break;
      }

      const childRes = op.forEachDescendantOperation(op => {
        if (selector(op) === match && callback(op) === false) {
          return false;
        }
      });

      if (childRes === false) {
        break;
      }
    }

    return this;
  }

  findOperation(operationSelector) {
    let op = null;

    this.forEachOperation(operationSelector, it => {
      op = it;
      return false;
    });

    return op;
  }

  findLastOperation(operationSelector) {
    let op = null;

    this.forEachOperation(operationSelector, it => {
      op = it;
    });

    return op;
  }

  everyOperation(operationSelector) {
    let every = true;

    this.forEachOperation(
      operationSelector,
      () => {
        every = false;
        return false;
      },
      false
    );

    return every;
  }

  callOperationMethod(operation, hookName, args) {
    try {
      operation.removeChildOperationsByHookName(hookName);

      this._activeOperations.push({
        operation,
        hookName
      });

      return operation[hookName](...args);
    } finally {
      this._activeOperations.pop();
    }
  }

  callAsyncOperationMethod(operation, hookName, args) {
    operation.removeChildOperationsByHookName(hookName);

    this._activeOperations.push({
      operation,
      hookName
    });

    return promiseUtils
      .try(() => operation[hookName](...args))
      .then(result => {
        this._activeOperations.pop();
        return result;
      })
      .catch(err => {
        this._activeOperations.pop();
        return Promise.reject(err);
      });
  }

  addOperation(operation, args) {
    const ret = this.addOperationUsingMethod('push', operation, args);
    return ret;
  }

  addOperationToFront(operation, args) {
    return this.addOperationUsingMethod('unshift', operation, args);
  }

  addOperationUsingMethod(arrayMethod, operation, args) {
    const shouldAdd = this.callOperationMethod(operation, 'onAdd', [this, args]);

    if (shouldAdd) {
      if (this._activeOperations.length) {
        const { operation: parentOperation, hookName } = last(this._activeOperations);
        parentOperation.addChildOperation(hookName, operation);
      } else {
        this._operations[arrayMethod](operation);
      }
    }

    return this;
  }

  removeOperation(operation) {
    if (operation.parentOperation) {
      operation.parentOperation.removeChildOperation(operation);
    } else {
      const index = this._operations.indexOf(operation);

      if (index !== -1) {
        this._operations.splice(index, 1);
      }
    }

    return this;
  }

  clone() {
    return this.baseCloneInto(new this.constructor(this.unsafeKnex()));
  }

  baseCloneInto(builder) {
    builder._modelClass = this._modelClass;
    builder._operations = this._operations.map(it => it.clone());
    builder._context = this._context.clone();
    builder._parentQuery = this._parentQuery;
    builder._isPartialQuery = this._isPartialQuery;

    // Don't copy the active operation stack. We never continue (nor can we)
    // a query from the exact mid-hook-call state.
    builder._activeOperations = [];

    return builder;
  }

  toKnexQuery(knexBuilder = this.knex().queryBuilder()) {
    this.executeOnBuild();
    this.executeOnBuildKnex(knexBuilder);

    return knexBuilder;
  }

  executeOnBuild() {
    this.forEachOperation(true, op => {
      if (op.hasOnBuild()) {
        this.callOperationMethod(op, 'onBuild', [this]);
      }
    });
  }

  executeOnBuildKnex(knexBuilder) {
    this.forEachOperation(true, op => {
      if (op.hasOnBuildKnex()) {
        this.callOperationMethod(op, 'onBuildKnex', [knexBuilder, this]);
      }
    });
  }

  toString() {
    return this.toKnexQuery().toString();
  }

  toSql() {
    return this.toString();
  }

  skipUndefined() {
    this.internalOptions().skipUndefined = true;
    return this;
  }
}

function buildFunctionForOperationSelector(operationSelector) {
  if (operationSelector === true) {
    return AllSelector;
  } else if (isRegExp(operationSelector)) {
    return op => operationSelector.test(op.name);
  } else if (isString(operationSelector)) {
    return op => op.name === operationSelector;
  } else if (isSubclassOf(operationSelector, QueryBuilderOperation)) {
    return op => op.is(operationSelector);
  } else if (isFunction(operationSelector)) {
    return operationSelector;
  } else {
    return () => false;
  }
}

module.exports = {
  QueryBuilderOperationSupport
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/QueryBuilderUserContext.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/QueryBuilderUserContext.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const SYMBOL_BUILDER = Symbol();

class QueryBuilderUserContext {
  constructor(builder) {
    // This should never ever be accessed outside this class. We only
    // store it so that we can access builder.knex() lazily.
    this[SYMBOL_BUILDER] = builder;
  }

  get transaction() {
    return this[SYMBOL_BUILDER].knex();
  }

  newFromObject(builder, obj) {
    const ctx = new this.constructor(builder);
    Object.assign(ctx, obj);
    return ctx;
  }

  newMerge(builder, obj) {
    const ctx = new this.constructor(builder);
    Object.assign(ctx, this, obj);
    return ctx;
  }
}

module.exports = {
  QueryBuilderUserContext
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/RawBuilder.js":
/*!****************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/RawBuilder.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPlainObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { buildArg } = __webpack_require__(/*! ../utils/buildUtils */ "../node_modules/objection/lib/utils/buildUtils.js");

class RawBuilder {
  constructor(sql, args) {
    this._sql = `${sql}`;
    this._args = args;
    this._as = null;
  }

  get alias() {
    return this._as;
  }

  as(as) {
    this._as = as;
    return this;
  }

  toKnexRaw(builder) {
    let args = null;
    let sql = this._sql;

    if (this._args.length === 1 && isPlainObject(this._args[0])) {
      args = buildObject(this._args[0], builder);

      if (this._as) {
        args.__alias__ = this._as;
        sql += ' as :__alias__:';
      }
    } else {
      args = buildArray(this._args, builder);

      if (this._as) {
        args.push(this._as);
        sql += ' as ??';
      }
    }

    return builder.knex().raw(sql, args);
  }
}

Object.defineProperties(RawBuilder.prototype, {
  isObjectionRawBuilder: {
    enumerable: false,
    writable: false,
    value: true
  }
});

function buildArray(arr, builder) {
  return arr.map(it => buildArg(it, builder));
}

function buildObject(obj, builder) {
  return Object.keys(obj).reduce((args, key) => {
    args[key] = buildArg(obj[key], builder);
    return args;
  }, {});
}

function raw() {
  let sql = arguments[0];
  let args = null;

  if (arguments.length === 2 && Array.isArray(arguments[1])) {
    args = new Array(arguments[1].length);

    for (let i = 0, l = args.length; i < l; ++i) {
      args[i] = arguments[1][i];
    }
  } else {
    args = new Array(arguments.length - 1);

    for (let i = 1, l = arguments.length; i < l; ++i) {
      args[i - 1] = arguments[i];
    }
  }

  return new RawBuilder(sql, args);
}

module.exports = {
  RawBuilder,
  raw
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js":
/*!**********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { parseFieldExpression } = __webpack_require__(/*! ../utils/parseFieldExpression */ "../node_modules/objection/lib/utils/parseFieldExpression.js");
const { isObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { deprecate } = __webpack_require__(/*! ../utils/deprecate */ "../node_modules/objection/lib/utils/deprecate.js");

class ReferenceBuilder {
  constructor(expr) {
    this._expr = expr;
    this._parsedExpr = null;
    this._column = null;
    this._table = null;
    this._cast = null;
    this._toJson = false;
    this._table = null;
    this._alias = null;
    this._modelClass = null;

    // This `if` makes it possible for `clone` to skip
    // parsing the expression again.
    if (expr !== null) {
      this._parseExpression(expr);
    }
  }

  get parsedExpr() {
    return this._parsedExpr;
  }

  get column() {
    return this._column;
  }

  set column(column) {
    this._column = column;
  }

  get alias() {
    return this._alias;
  }

  set alias(alias) {
    this._alias = alias;
  }

  get tableName() {
    return this._table;
  }

  set tableName(table) {
    this._table = table;
  }

  get modelClass() {
    return this._modelClass;
  }

  set modelClass(modelClass) {
    this._modelClass = modelClass;
  }

  get isPlainColumnRef() {
    return (
      (!this._parsedExpr || this._parsedExpr.access.length === 0) && !this._cast && !this._toJson
    );
  }

  get expression() {
    return this._expr;
  }

  get cast() {
    return this._cast;
  }

  fullColumn(builder) {
    const table = this.tableName
      ? this.tableName
      : this.modelClass
        ? builder.tableRefFor(this.modelClass.getTableName())
        : null;

    if (table) {
      return `${table}.${this.column}`;
    } else {
      return this.column;
    }
  }

  castText() {
    return this.castTo('text');
  }

  castInt() {
    return this.castTo('integer');
  }

  castBigInt() {
    return this.castTo('bigint');
  }

  castFloat() {
    return this.castTo('float');
  }

  castDecimal() {
    return this.castTo('decimal');
  }

  castReal() {
    return this.castTo('real');
  }

  castBool() {
    return this.castTo('boolean');
  }

  castJson() {
    this._toJson = true;
    return this;
  }

  castType(sqlType) {
    deprecate(
      'castType(type) is deprecated. Use castTo(type) instead. castType(type) will be removed in 2.0'
    );
    return this.castTo(sqlType);
  }

  castTo(sqlType) {
    this._cast = sqlType;
    return this;
  }

  from(table) {
    this._table = table;
    return this;
  }

  table(table) {
    this._table = table;
    return this;
  }

  model(modelClass) {
    this._modelClass = modelClass;
    return this;
  }

  as(alias) {
    this._alias = alias;
    return this;
  }

  clone() {
    const clone = new this.constructor(null);

    clone._expr = this._expr;
    clone._parsedExpr = this._parsedExpr;
    clone._column = this._column;
    clone._table = this._table;
    clone._cast = this._cast;
    clone._toJson = this._toJson;
    clone._table = this._table;
    clone._alias = this._alias;
    clone._modelClass = this._modelClass;

    return clone;
  }

  toKnexRaw(builder) {
    return builder.knex().raw(...this._createRawArgs(builder));
  }

  _parseExpression(expr) {
    this._parsedExpr = parseFieldExpression(expr);
    this._column = this._parsedExpr.column;
    this._table = this._parsedExpr.table;
  }

  _createRawArgs(builder) {
    let bindings = [];
    let sql = this._createReferenceSql(builder, bindings);

    sql = this._maybeCast(sql, bindings);
    sql = this._maybeToJsonb(sql, bindings);
    sql = this._maybeAlias(sql, bindings);

    return [sql, bindings];
  }

  _createReferenceSql(builder, bindings) {
    bindings.push(this.fullColumn(builder));

    if (this._parsedExpr.access.length > 0) {
      const extractor = this._cast ? '#>>' : '#>';
      const jsonFieldRef = this._parsedExpr.access.map(field => field.ref).join(',');
      return `??${extractor}'{${jsonFieldRef}}'`;
    } else {
      return '??';
    }
  }

  _maybeCast(sql) {
    if (this._cast) {
      return `CAST(${sql} AS ${this._cast})`;
    } else {
      return sql;
    }
  }

  _maybeToJsonb(sql) {
    if (this._toJson) {
      return `to_jsonb(${sql})`;
    } else {
      return sql;
    }
  }

  _maybeAlias(sql, bindings) {
    if (this._shouldAlias()) {
      bindings.push(this._alias);
      return `${sql} as ??`;
    } else {
      return sql;
    }
  }

  _shouldAlias() {
    if (!this._alias) {
      return false;
    } else if (!this.isPlainColumnRef) {
      return true;
    } else {
      // No need to alias if we are dealing with a simple column reference
      // and the alias is the same as the column name.
      return this._alias !== this._column;
    }
  }
}

Object.defineProperties(ReferenceBuilder.prototype, {
  isObjectionReferenceBuilder: {
    enumerable: false,
    writable: false,
    value: true
  }
});

const ref = reference => {
  if (isObject(reference) && reference.isObjectionReferenceBuilder) {
    return reference;
  } else {
    return new ReferenceBuilder(reference);
  }
};

module.exports = {
  ReferenceBuilder,
  ref
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/RelationExpression.js":
/*!************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/RelationExpression.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const parser = __webpack_require__(/*! ./parsers/relationExpressionParser */ "../node_modules/objection/lib/queryBuilder/parsers/relationExpressionParser.js");
const { isObject, isNumber, isString, union } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { RelationDoesNotExistError } = __webpack_require__(/*! ../model/RelationDoesNotExistError */ "../node_modules/objection/lib/model/RelationDoesNotExistError.js");

class RelationExpressionParseError extends Error {}
class DuplicateRelationError extends RelationExpressionParseError {
  constructor(relationName) {
    super();
    this.relationName = relationName;
  }
}

class RelationExpression {
  constructor(node = newNode(), recursionDepth = 0) {
    this.node = node;
    this.recursionDepth = recursionDepth;
  }

  // Create a relation expression from a string, a pojo or another
  // RelationExpression instance.
  static create(expr) {
    if (isObject(expr)) {
      if (expr.isObjectionRelationExpression) {
        return expr;
      } else {
        return new RelationExpression(normalizeNode(expr));
      }
    } else if (isString(expr)) {
      if (expr.trim().length === 0) {
        return new RelationExpression();
      } else {
        try {
          return new RelationExpression(parse(expr));
        } catch (err) {
          if (err.duplicateRelationName) {
            throw new DuplicateRelationError(err.duplicateRelationName);
          } else {
            throw new RelationExpressionParseError(err.message);
          }
        }
      }
    } else {
      return new RelationExpression();
    }
  }

  // Create a relation expression from a model graph.
  static fromModelGraph(graph) {
    if (!graph) {
      return new RelationExpression();
    } else {
      return new RelationExpression(modelGraphToNode(graph, newNode()));
    }
  }

  get maxRecursionDepth() {
    if (isNumber(this.node.$recursive)) {
      return this.node.$recursive;
    } else {
      return this.node.$recursive ? Number.MAX_SAFE_INTEGER : 0;
    }
  }

  get numChildren() {
    return this.node.$childNames.length;
  }

  get isEmpty() {
    return this.numChildren === 0;
  }

  // Merges this relation expression with another. `expr` can be a string,
  // a pojo, or a RelationExpression instance.
  merge(expr) {
    const node = RelationExpression.create(expr).node;
    return new RelationExpression(mergeNodes(this.node, node));
  }

  // Returns true if `expr` is contained by this expression. For example
  // `a.b` is contained by `a.[b, c]`.
  isSubExpression(expr) {
    expr = RelationExpression.create(expr);

    if (this.node.$allRecursive) {
      return true;
    }

    if (expr.node.$allRecursive) {
      return this.node.$allRecursive;
    }

    if (this.node.$relation !== expr.node.$relation) {
      return false;
    }

    const maxRecursionDepth = expr.maxRecursionDepth;

    if (maxRecursionDepth > 0) {
      return this.node.$allRecursive || this.maxRecursionDepth >= maxRecursionDepth;
    }

    for (const childName of expr.node.$childNames) {
      const ownSubExpression = this.childExpression(childName);
      const subExpression = expr.childExpression(childName);

      if (!ownSubExpression || !ownSubExpression.isSubExpression(subExpression)) {
        return false;
      }
    }

    return true;
  }

  // Returns a RelationExpression for a child node or null if there
  // is no child with the given name `childName`.
  childExpression(childName) {
    if (
      this.node.$allRecursive ||
      (childName === this.node.$name && this.recursionDepth < this.maxRecursionDepth - 1)
    ) {
      return new RelationExpression(this.node, this.recursionDepth + 1);
    }

    const child = this.node[childName];

    if (child) {
      return new RelationExpression(child);
    } else {
      return null;
    }
  }

  // Loops throught all first level children.
  forEachChildExpression(modelClass, cb) {
    const maxRecursionDepth = this.maxRecursionDepth;

    if (this.node.$allRecursive) {
      for (const relationName of modelClass.getRelationNames()) {
        const node = newNode(relationName, true);
        const relation = modelClass.getRelationUnsafe(relationName);
        const childExpr = new RelationExpression(node);

        cb(childExpr, relation);
      }
    } else if (this.recursionDepth < maxRecursionDepth - 1) {
      const relation = modelClass.getRelationUnsafe(this.node.$relation) || null;
      const childExpr = new RelationExpression(this.node, this.recursionDepth + 1);

      cb(childExpr, relation);
    } else if (maxRecursionDepth === 0) {
      for (const childName of this.node.$childNames) {
        const node = this.node[childName];
        const relation = modelClass.getRelationUnsafe(node.$relation);

        if (!relation) {
          throw new RelationDoesNotExistError(node.$relation);
        }

        const childExpr = new RelationExpression(node);

        cb(childExpr, relation);
      }
    }
  }

  expressionsAtPath(path) {
    return findExpressionsAtPath(this, RelationExpression.create(path), []);
  }

  clone() {
    return new RelationExpression(cloneNode(this.node), this.recursionDepth);
  }

  toString() {
    return toString(this.node);
  }

  toPojo() {
    return cloneNode(this.node);
  }

  toJSON() {
    return this.toPojo();
  }
}

const parseCache = new Map();
function parse(str) {
  const cachedNode = parseCache.get(str);

  if (cachedNode) {
    return cloneNode(cachedNode);
  } else {
    const node = parser.parse(str);
    parseCache.set(str, cloneNode(node));
    return node;
  }
}

// All enumerable properties of a node that don't start with `$`
// are child nodes.
function getChildNames(node) {
  if (!node) {
    return [];
  }

  const childNames = [];

  for (const key of Object.keys(node)) {
    if (key[0] !== '$') {
      childNames.push(key);
    }
  }

  return childNames;
}

function toString(node) {
  const childNames = node.$childNames;

  let childExpr = childNames.map(childName => node[childName]).map(toString);
  let str = node.$relation;

  if (node.$recursive) {
    if (isNumber(node.$recursive)) {
      str += '.^' + node.$recursive;
    } else {
      str += '.^';
    }
  } else if (node.$allRecursive) {
    str += '.*';
  }

  if (childExpr.length > 1) {
    childExpr = `[${childExpr.join(', ')}]`;
  } else {
    childExpr = childExpr[0];
  }

  if (node.$modify.length) {
    str += `(${node.$modify.join(', ')})`;
  }

  if (node.$name !== node.$relation) {
    str += ` as ${node.$name}`;
  }

  if (childExpr) {
    if (str) {
      return `${str}.${childExpr}`;
    } else {
      return childExpr;
    }
  } else {
    return str;
  }
}

function cloneNode(node) {
  return normalizeNode(node);
}

function modelGraphToNode(models, node) {
  if (!models) {
    return;
  }

  if (Array.isArray(models)) {
    for (let i = 0, l = models.length; i < l; ++i) {
      modelToNode(models[i], node);
    }
  } else {
    modelToNode(models, node);
  }

  return node;
}

function modelToNode(model, node) {
  const modelClass = model.constructor;
  const relationNames = modelClass.getRelationNames();

  for (let r = 0, lr = relationNames.length; r < lr; ++r) {
    const relName = relationNames[r];

    if (model.hasOwnProperty(relName)) {
      let childNode = node[relName];

      if (!childNode) {
        childNode = newNode(relName);
        node[relName] = childNode;
        node.$childNames.push(relName);
      }

      modelGraphToNode(model[relName], childNode);
    }
  }
}

function newNode(name = null, allRecusive = false) {
  return normalizeNode(null, name, allRecusive);
}

function normalizeNode(node = null, name = null, allRecusive = false) {
  const normalized = {
    $name: (node && node.$name) || name || null,
    $relation: (node && node.$relation) || name || null,
    $modify: (node && node.$modify && node.$modify.slice()) || [],
    $recursive: (node && node.$recursive) || false,
    $allRecursive: (node && node.$allRecursive) || allRecusive || false,
    $childNames: (node && node.$childNames && node.$childNames.slice()) || getChildNames(node)
  };

  for (const childName of normalized.$childNames) {
    const childNode = node[childName];

    if (isObject(childNode) || childNode === true) {
      normalized[childName] = normalizeNode(childNode, childName);
    }
  }

  return normalized;
}

function findExpressionsAtPath(target, path, results) {
  if (path.node.$childNames.length == 0) {
    // Path leaf reached, add target node to result set.
    results.push(target);
  } else {
    for (const childName of path.node.$childNames) {
      const pathChild = path.childExpression(childName);
      const targetChild = target.childExpression(childName);

      if (targetChild) {
        findExpressionsAtPath(targetChild, pathChild, results);
      }
    }
  }

  return results;
}

function mergeNodes(node1, node2) {
  const node = {
    $name: node1.$name,
    $relation: node1.$relation,
    $modify: union(node1.$modify, node2.$modify),
    $recursive: mergeRecursion(node1.$recursive, node2.$recursive),
    $allRecursive: node1.$allRecursive || node2.$allRecursive,
    $childNames: null
  };

  if (!node.$recursive && !node.$allRecursive) {
    node.$childNames = union(node1.$childNames, node2.$childNames);

    for (const childName of node.$childNames) {
      const child1 = node1[childName];
      const child2 = node2[childName];

      if (child1 && child2) {
        node[childName] = mergeNodes(child1, child2);
      } else {
        node[childName] = child1 || child2;
      }
    }
  } else {
    node.$childNames = [];
  }

  return node;
}

function mergeRecursion(rec1, rec2) {
  if (rec1 === true || rec2 === true) {
    return true;
  } else if (isNumber(rec1) && isNumber(rec2)) {
    return Math.max(rec1, rec2);
  } else {
    return rec1 || rec2;
  }
}

Object.defineProperties(RelationExpression.prototype, {
  isObjectionRelationExpression: {
    enumerable: false,
    writable: false,
    value: true
  }
});

module.exports = {
  RelationExpression,
  RelationExpressionParseError,
  DuplicateRelationError
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/StaticHookArguments.js":
/*!*************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/StaticHookArguments.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

const BUILDER_SYMBOL = Symbol();

class StaticHookArguments {
  constructor({ builder, result = null }) {
    // The builder should never be accessed through the arguments.
    // Hide it as well as possible to discourage people from
    // digging it out.
    Object.defineProperty(this, BUILDER_SYMBOL, {
      value: builder
    });

    Object.defineProperty(this, 'result', {
      value: asArray(result)
    });
  }

  static create(args) {
    return new StaticHookArguments(args);
  }

  get findQuery() {
    return this[BUILDER_SYMBOL].toFindQuery().runAfter(asArray);
  }

  get context() {
    return this[BUILDER_SYMBOL].context();
  }

  get transaction() {
    return this[BUILDER_SYMBOL].unsafeKnex();
  }

  get relation() {
    const op = this[BUILDER_SYMBOL].findOperation(hasRelation);

    if (op) {
      return getRelation(op);
    } else {
      return null;
    }
  }

  get modelOptions() {
    const op = this[BUILDER_SYMBOL].findOperation(hasModelOptions);

    if (op) {
      return getModelOptions(op);
    } else {
      return null;
    }
  }

  get modelInstances() {
    const op = this[BUILDER_SYMBOL].findOperation(hasModelInstance);

    if (op) {
      return asArray(getModelInstance(op));
    } else {
      return [];
    }
  }

  get inputModelInstances() {
    const op = this[BUILDER_SYMBOL].findOperation(hasInputModelInstance);

    if (op) {
      return asArray(getInputModelInstance(op));
    } else {
      return [];
    }
  }

  get cancelQuery() {
    const args = this;

    return cancelValue => {
      const builder = this[BUILDER_SYMBOL];

      if (cancelValue === undefined) {
        if (builder.isInsert()) {
          cancelValue = args.inputModelInstances;
        } else if (builder.isFind()) {
          cancelValue = [];
        } else {
          cancelValue = 0;
        }
      }

      builder.resolve(cancelValue);
    };
  }
}

function getRelation(op) {
  return op.relation;
}

function hasRelation(op) {
  return !!getRelation(op);
}

function getModelOptions(op) {
  return op.modelOptions;
}

function hasModelOptions(op) {
  return !!getModelOptions(op);
}

function getModelInstance(op) {
  return op.instance || op.owner || op.owners;
}

function hasModelInstance(op) {
  return !!getModelInstance(op);
}

function getInputModelInstance(op) {
  return op.models || op.model;
}

function hasInputModelInstance(op) {
  return !!getInputModelInstance(op);
}

module.exports = {
  StaticHookArguments
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/GraphAction.js":
/*!***********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/GraphAction.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPostgres } = __webpack_require__(/*! ../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");

const POSTGRES_MAX_INSERT_BATCH_SIZE = 100;
const MAX_CONCURRENCY = 100;

class GraphAction {
  static get ReturningAllSelector() {
    return op => {
      // Only select `returning('*')` operation.
      return op.name === 'returning' && op.args.includes('*');
    };
  }

  run(builder) {
    return null;
  }

  _getConcurrency(builder, nodes) {
    return nodes.reduce((minConcurrency, node) => {
      return Math.min(minConcurrency, node.modelClass.getConcurrency(builder.unsafeKnex()));
    }, MAX_CONCURRENCY);
  }

  _getBatchSize(builder) {
    return isPostgres(builder.unsafeKnex()) ? POSTGRES_MAX_INSERT_BATCH_SIZE : 1;
  }

  _resolveReferences(node) {
    if (node.isReference) {
      this._resolveReference(node);
    }
  }

  _resolveReference(node) {
    const refNode = node.referencedNode;

    for (const prop of Object.keys(refNode.obj)) {
      if (!node.obj.hasOwnProperty(prop)) {
        node.obj[prop] = refNode.obj[prop];
      }
    }
  }
}

module.exports = {
  GraphAction
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js":
/*!**************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray, groupBy } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { ModelGraph } = __webpack_require__(/*! ../../model/graph/ModelGraph */ "../node_modules/objection/lib/model/graph/ModelGraph.js");
const { FetchStrategy } = __webpack_require__(/*! ./GraphOptions */ "../node_modules/objection/lib/queryBuilder/graph/GraphOptions.js");
const { RelationExpression } = __webpack_require__(/*! ../RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");

class GraphOperation {
  constructor({ graph, currentGraph, graphOptions }) {
    this.graph = graph;
    this.currentGraph = currentGraph;
    this.graphOptions = graphOptions;
  }

  static fetchCurrentGraph({ builder, graph, graphOptions }) {
    const rootObjects = graph.rootObjects;
    const rootIds = getRootIds(rootObjects);
    const modelClass = builder.modelClass();

    if (rootIds.length === 0) {
      return Promise.resolve(ModelGraph.create(modelClass, []));
    }

    const eagerExpr = RelationExpression.fromModelGraph(rootObjects);

    return modelClass
      .query()
      .childQueryOf(builder, childQueryOptions())
      .modify(propagateMethodCallsFromQuery(builder))
      .modify(buildFetchQuerySelects(graph, graphOptions, eagerExpr))
      .findByIds(rootIds)
      .eagerAlgorithm(modelClass.WhereInEagerAlgorighm)
      .eager(eagerExpr)
      .internalOptions(fetchQueryInternalOptions())
      .then(models => ModelGraph.create(modelClass, models));
  }

  createActions() {
    return [];
  }

  shouldRelateAncestor(node) {
    if (!node.parentNode) {
      return false;
    }

    return (
      this.graphOptions.shouldRelate(node.parentNode, this.currentGraph) ||
      this.shouldRelateAncestor(node.parentNode)
    );
  }
}

function getRootIds(graph) {
  return asArray(graph)
    .filter(it => it.$hasId())
    .map(root => root.$id());
}

function propagateMethodCallsFromQuery(builder) {
  return fetchBuilder => {
    // Propagate some method calls from the root query.
    for (const method of ['forUpdate', 'forShare']) {
      if (builder.has(method)) {
        fetchBuilder[method]();
      }
    }
  };
}

function buildFetchQuerySelects(graph, graphOptions, eagerExpr) {
  return builder => {
    const nodesByRelationPath = groupNodesByRelationPath(graph, eagerExpr);

    for (const [relationPath, nodes] of nodesByRelationPath.entries()) {
      const selectModifier = createFetchSelectModifier(nodes, graphOptions);

      if (!relationPath) {
        builder.modify(selectModifier);
      } else {
        builder.modifyEager(relationPath, selectModifier);
      }
    }
  };
}

function groupNodesByRelationPath(graph, eagerExpr) {
  const nodesByRelationPath = groupBy(graph.nodes, node => node.relationPathKey);

  // Not all relation paths have nodes. Relations with nulls or empty arrays
  // don't have nodes, but will still need to be fetched. Add these to the
  // map as empty arrays.
  forEachPath(eagerExpr.node, relationPath => {
    if (!nodesByRelationPath.has(relationPath)) {
      nodesByRelationPath.set(relationPath, []);
    }
  });

  return nodesByRelationPath;
}

function createFetchSelectModifier(nodes, graphOptions) {
  if (graphOptions.isFetchStrategy(FetchStrategy.OnlyIdentifiers)) {
    return createIdentifierSelector();
  } else if (graphOptions.isFetchStrategy(FetchStrategy.OnlyNeeded)) {
    return createInputColumnSelector(nodes);
  } else {
    return () => {};
  }
}

// Returns a function that only selects the id column.
function createIdentifierSelector() {
  return builder => {
    builder.select(builder.fullIdColumn());
  };
}

// Returns a function that only selects the columns that exist in the input.
function createInputColumnSelector(nodes) {
  return builder => {
    const selects = new Map();

    for (const node of nodes) {
      const databaseJson = node.obj.$toDatabaseJson(builder);

      for (const column of Object.keys(databaseJson)) {
        if (!shouldSelectColumn(column, selects, node)) {
          continue;
        }

        const selection =
          createManyToManyExtraSelectionIfNeeded(builder, column, node) ||
          createSelection(builder, column, node);

        selects.set(column, selection);
      }
    }

    const selectArr = Array.from(selects.values());
    const idColumn = builder.fullIdColumn();

    if (!selectArr.includes(idColumn)) {
      // Always select the identifer.
      selectArr.push(idColumn);
    }

    builder.select(selectArr);
  };
}

function shouldSelectColumn(column, selects, node) {
  const modelClass = node.modelClass;

  return (
    !selects.has(column) &&
    column !== modelClass.propertyNameToColumnName(modelClass.dbRefProp) &&
    column !== modelClass.propertyNameToColumnName(modelClass.uidRefProp) &&
    column !== modelClass.propertyNameToColumnName(modelClass.uidProp)
  );
}

function createManyToManyExtraSelectionIfNeeded(builder, column, node) {
  if (node.parentEdge && node.parentEdge.relation.isObjectionManyToManyRelation) {
    const relation = node.parentEdge.relation;
    const extra = relation.joinTableExtras.find(extra => extra.aliasCol === column);

    if (extra) {
      return `${builder.tableRefFor(relation.joinModelClass)}.${extra.joinTableCol} as ${
        extra.aliasCol
      }`;
    }
  }

  return null;
}

function createSelection(builder, column, node) {
  return `${builder.tableRefFor(node.modelClass)}.${column}`;
}

function childQueryOptions() {
  return {
    fork: true,
    isInternalQuery: true
  };
}

function fetchQueryInternalOptions() {
  return {
    keepImplicitJoinProps: true
  };
}

function forEachPath(eagerExprNode, cb, path = []) {
  for (const relation of eagerExprNode.$childNames) {
    path.push(relation);
    cb(path.join('.'));
    forEachPath(eagerExprNode[relation], cb, path);
    path.pop();
  }
}

module.exports = {
  GraphOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/GraphOptions.js":
/*!************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/GraphOptions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const NO_RELATE = 'noRelate';
const NO_UNRELATE = 'noUnrelate';
const NO_INSERT = 'noInsert';
const NO_UPDATE = 'noUpdate';
const NO_DELETE = 'noDelete';

const UPDATE = 'update';
const RELATE = 'relate';
const UNRELATE = 'unrelate';
const INSERT_MISSING = 'insertMissing';
const FETCH_STRATEGY = 'fetchStrategy';

const FetchStrategy = {
  OnlyIdentifiers: 'OnlyIdentifiers',
  Everything: 'Everything',
  OnlyNeeded: 'OnlyNeeded'
};

class GraphOptions {
  constructor(options) {
    if (options instanceof GraphOptions) {
      this.options = options.options;
    } else {
      this.options = options;
    }
  }

  isFetchStrategy(strategy) {
    if (!FetchStrategy[strategy]) {
      throw new Error(`unknown strategy "${strategy}"`);
    }

    if (!this.options[FETCH_STRATEGY]) {
      return strategy === FetchStrategy.OnlyIdentifiers;
    } else {
      return this.options[FETCH_STRATEGY] === strategy;
    }
  }

  isInsertOnly() {
    // NO_RELATE is not in the list, since the `insert only` mode does
    // relate things that can be related using inserts.
    return [NO_DELETE, NO_UPDATE, NO_UNRELATE, INSERT_MISSING].every(opt => {
      return this.options[opt] === true;
    });
  }

  // Like `shouldRelate` but ignores settings that explicitly disable relate operations.
  shouldRelateIgnoreDisable(node, currentGraph) {
    if (node.isReference || node.isDbReference) {
      return true;
    }

    return (
      !getCurrentNode(node, currentGraph) &&
      this._hasOption(node, RELATE) &&
      !!node.parentEdge &&
      !!node.parentEdge.relation &&
      node.parentEdge.relation.hasRelateProp(node.obj)
    );
  }

  shouldRelate(node, currentGraph) {
    return !this._hasOption(node, NO_RELATE) && this.shouldRelateIgnoreDisable(node, currentGraph);
  }

  // Like `shouldInsert` but ignores settings that explicitly disable insert operations.
  shouldInsertIgnoreDisable(node, currentGraph) {
    return (
      !getCurrentNode(node, currentGraph) &&
      !this.shouldRelateIgnoreDisable(node, currentGraph) &&
      (!node.hadIdOriginally || this._hasOption(node, INSERT_MISSING))
    );
  }

  shouldInsert(node, currentGraph) {
    return !this._hasOption(node, NO_INSERT) && this.shouldInsertIgnoreDisable(node, currentGraph);
  }

  // Like `shouldPatch() || shouldUpdate()` but ignores settings that explicitly disable
  // update or patch operations.
  shouldPatchOrUpdateIgnoreDisable(node, currentGraph) {
    if (this.shouldRelate(node)) {
      // We should update all nodes that are going to be related. Note that
      // we don't actually update anything unless there is something to update
      // so this is just a preliminary test.
      return true;
    }

    return !!getCurrentNode(node, currentGraph);
  }

  shouldPatch(node, currentGraph) {
    return (
      this.shouldPatchOrUpdateIgnoreDisable(node, currentGraph) &&
      !this._hasOption(node, NO_UPDATE) &&
      !this._hasOption(node, UPDATE)
    );
  }

  shouldUpdate(node, currentGraph) {
    return (
      this.shouldPatchOrUpdateIgnoreDisable(node, currentGraph) &&
      !this._hasOption(node, NO_UPDATE) &&
      this._hasOption(node, UPDATE)
    );
  }

  // Like `shouldUnrelate` but ignores settings that explicitly disable unrelate operations.
  shouldUnrelateIgnoreDisable(currentNode) {
    return this._hasOption(currentNode, UNRELATE);
  }

  shouldUnrelate(currentNode, graph) {
    return (
      !getNode(currentNode, graph) &&
      !this._hasOption(currentNode, NO_UNRELATE) &&
      this.shouldUnrelateIgnoreDisable(currentNode)
    );
  }

  shouldDelete(currentNode, graph) {
    return (
      !getNode(currentNode, graph) &&
      !this._hasOption(currentNode, NO_DELETE) &&
      !this.shouldUnrelateIgnoreDisable(currentNode)
    );
  }

  shouldInsertOrRelate(node, currentGraph) {
    return this.shouldInsert(node, currentGraph) || this.shouldRelate(node, currentGraph);
  }

  shouldDeleteOrUnrelate(currentNode, graph) {
    return this.shouldDelete(currentNode, graph) || this.shouldUnrelate(currentNode, graph);
  }

  rebasedOptions(newRoot) {
    const newOpt = {};
    const newRootRelationPath = newRoot.relationPathKey;

    for (const name of Object.keys(this.options)) {
      const value = this.options[name];

      if (Array.isArray(value)) {
        newOpt[name] = value
          .filter(it => it.startsWith(newRootRelationPath))
          .map(it => it.slice(newRootRelationPath.length + 1))
          .filter(it => !!it);
      } else {
        newOpt[name] = value;
      }
    }

    return new GraphOptions(newOpt);
  }

  _hasOption(node, optionName) {
    const option = this.options[optionName];

    if (Array.isArray(option)) {
      return option.indexOf(node.relationPathKey) !== -1;
    } else {
      return !!option;
    }
  }
}

function getCurrentNode(node, currentGraph) {
  if (!currentGraph || !node) {
    return null;
  }

  return currentGraph.nodeForNode(node);
}

function getNode(currentNode, graph) {
  if (!graph || !currentNode) {
    return null;
  }

  return graph.nodeForNode(currentNode);
}

module.exports = {
  GraphOptions,
  FetchStrategy
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/GraphUpsert.js":
/*!***********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/GraphUpsert.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ModelGraph } = __webpack_require__(/*! ../../model/graph/ModelGraph */ "../node_modules/objection/lib/model/graph/ModelGraph.js");
const { createNotModelError } = __webpack_require__(/*! ../../model/graph/ModelGraphBuilder */ "../node_modules/objection/lib/model/graph/ModelGraphBuilder.js");
const { GraphOperation } = __webpack_require__(/*! ../graph/GraphOperation */ "../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js");
const { GraphInsert } = __webpack_require__(/*! ../graph/insert/GraphInsert */ "../node_modules/objection/lib/queryBuilder/graph/insert/GraphInsert.js");
const { GraphPatch } = __webpack_require__(/*! ../graph/patch/GraphPatch */ "../node_modules/objection/lib/queryBuilder/graph/patch/GraphPatch.js");
const { GraphDelete } = __webpack_require__(/*! ../graph/delete/GraphDelete */ "../node_modules/objection/lib/queryBuilder/graph/delete/GraphDelete.js");
const { GraphRecursiveUpsert } = __webpack_require__(/*! ../graph/recursiveUpsert/GraphRecursiveUpsert */ "../node_modules/objection/lib/queryBuilder/graph/recursiveUpsert/GraphRecursiveUpsert.js");
const { GraphOptions } = __webpack_require__(/*! ../graph/GraphOptions */ "../node_modules/objection/lib/queryBuilder/graph/GraphOptions.js");
const { ValidationErrorType } = __webpack_require__(/*! ../../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { RelationExpression } = __webpack_require__(/*! ../RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");
const { uniqBy, asArray, isObject } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class GraphUpsert {
  constructor({ rootModelClass, objects, upsertOptions }) {
    checkCanBeConvertedToModels(rootModelClass, objects);

    this.objects = rootModelClass.ensureModelArray(objects, GraphUpsert.modelOptions);
    this.isArray = Array.isArray(objects);
    this.upsertOpt = upsertOptions;
  }

  static get modelOptions() {
    return { skipValidation: true };
  }

  run(builder) {
    const modelClass = builder.modelClass();
    const graphOptions = new GraphOptions(this.upsertOpt);

    const graph = ModelGraph.create(modelClass, this.objects);
    assignDbRefsAsRelateProps(graph);

    return fetchCurrentGraph(builder, graphOptions, graph)
      .then(pruneGraphs(graph, graphOptions))
      .then(checkForErrors(graph, graphOptions, builder))
      .then(executeOperations(graph, graphOptions, builder))
      .then(returnResult(this.objects, this.isArray));
  }
}

function checkCanBeConvertedToModels(modelClass, objects) {
  asArray(objects).forEach(obj => {
    if (!isObject(obj)) {
      throw createNotModelError(modelClass, obj);
    }
  });
}

function assignDbRefsAsRelateProps(graph) {
  for (const node of graph.nodes) {
    if (!node.parentEdge || !node.parentEdge.relation || !node.isDbReference) {
      continue;
    }

    node.parentEdge.relation.setRelateProp(node.obj, asArray(node.dbReference));
  }
}

function fetchCurrentGraph(builder, graphOptions, graph) {
  if (graphOptions.isInsertOnly()) {
    return Promise.resolve(ModelGraph.createEmpty());
  } else {
    return GraphOperation.fetchCurrentGraph({ builder, graph, graphOptions });
  }
}

// Remove branches from the graph that require no operations. For example
// we never want to do anything for descendant nodes of a node that is
// deleted or unrelated. We never delete recursively.
function pruneGraphs(graph, graphOptions) {
  return currentGraph => {
    pruneRelatedBranches(graph, currentGraph, graphOptions);

    if (!graphOptions.isInsertOnly()) {
      pruneDeletedBranches(graph, currentGraph);
    }

    return currentGraph;
  };
}

function pruneRelatedBranches(graph, currentGraph, graphOptions) {
  const relateNodes = graph.nodes.filter(node => {
    return (
      !currentGraph.nodeForNode(node) && !graphOptions.shouldInsertIgnoreDisable(node, currentGraph)
    );
  });

  removeBranchesFromGraph(findRoots(relateNodes), graph);
}

function pruneDeletedBranches(graph, currentGraph) {
  const deleteNodes = currentGraph.nodes.filter(currentNode => !graph.nodeForNode(currentNode));

  removeBranchesFromGraph(findRoots(deleteNodes), currentGraph);
}

function findRoots(nodes) {
  const nodeSet = new Set(nodes);

  return uniqBy(
    nodes.filter(node => {
      let parentNode = node.parentNode;

      while (parentNode) {
        if (nodeSet.has(parentNode)) {
          return false;
        }

        parentNode = parentNode.parentNode;
      }

      return true;
    })
  );
}

function removeBranchesFromGraph(branchRoots, graph) {
  const nodesToRemove = new Set(
    branchRoots.reduce(
      (nodesToRemove, node) => [...nodesToRemove, ...node.descendantRelationNodes],
      []
    )
  );

  const edgesToRemove = new Set();

  for (const node of nodesToRemove) {
    for (const edge of node.edges) {
      const otherNode = edge.getOtherNode(node);

      if (!nodesToRemove.has(otherNode)) {
        otherNode.removeEdge(edge);
        edgesToRemove.add(edge);
      }
    }
  }

  graph.nodes = graph.nodes.filter(node => !nodesToRemove.has(node));
  graph.edges = graph.edges.filter(edge => !edgesToRemove.has(edge));

  return graph;
}

function checkForErrors(graph, graphOptions, builder) {
  return currentGraph => {
    checkForNotFoundErrors(graph, currentGraph, graphOptions, builder);
    checkForUnallowedRelationErrors(graph, builder);

    if (graphOptions.isInsertOnly()) {
      checkForHasManyRelateErrors(graph, currentGraph, graphOptions);
    }

    return currentGraph;
  };
}

function checkForNotFoundErrors(graph, currentGraph, graphOptions, builder) {
  for (const node of graph.nodes) {
    if (
      node.obj.$hasId() &&
      !graphOptions.shouldInsertIgnoreDisable(node, currentGraph) &&
      !graphOptions.shouldRelateIgnoreDisable(node, currentGraph) &&
      !currentGraph.nodeForNode(node)
    ) {
      if (!node.parentNode) {
        throw node.modelClass.createNotFoundError(builder.context(), {
          message: `root model (id=${node.obj.$id()}) does not exist. If you want to insert it with an id, use the insertMissing option`,
          dataPath: node.dataPath
        });
      } else {
        throw node.modelClass.createNotFoundError(builder.context(), {
          message: `model (id=${node.obj.$id()}) is not a child of model (id=${node.parentNode.obj.$id()}). If you want to relate it, use the relate option. If you want to insert it with an id, use the insertMissing option`,
          dataPath: node.dataPath
        });
      }
    }
  }
}

function checkForUnallowedRelationErrors(graph, builder) {
  const allowedExpression = builder.allowedUpsertExpression();

  if (allowedExpression) {
    const rootsObjs = graph.nodes.filter(node => !node.parentEdge).map(node => node.obj);
    const expression = RelationExpression.fromModelGraph(rootsObjs);

    if (!allowedExpression.isSubExpression(expression)) {
      throw builder.modelClass().createValidationError({
        type: ValidationErrorType.UnallowedRelation,
        message: 'trying to upsert an unallowed relation'
      });
    }
  }
}

function checkForHasManyRelateErrors(graph, currentGraph, graphOptions) {
  for (const node of graph.nodes) {
    if (
      graphOptions.shouldRelate(node, currentGraph) &&
      node.parentEdge.relation.isObjectionHasManyRelation
    ) {
      throw new Error(
        'You cannot relate HasManyRelation or HasOneRelation using insertGraph, because those require update operations. Consider using upsertGraph instead.'
      );
    }
  }
}

function executeOperations(graph, graphOptions, builder) {
  const operations = graphOptions.isInsertOnly()
    ? [GraphInsert]
    : [GraphDelete, GraphInsert, GraphPatch, GraphRecursiveUpsert];

  return currentGraph => {
    return operations.reduce((promise, Operation) => {
      const operation = new Operation({ graph, currentGraph, graphOptions });
      const actions = operation.createActions();

      return promise.then(() => executeActions(builder, actions));
    }, Promise.resolve());
  };
}

function executeActions(builder, actions) {
  return actions.reduce(
    (promise, action) => promise.then(() => action.run(builder)),
    Promise.resolve()
  );
}

function returnResult(objects, isArray) {
  return () => (isArray ? objects : objects[0]);
}

module.exports = {
  GraphUpsert
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/delete/GraphDelete.js":
/*!******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/delete/GraphDelete.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphOperation } = __webpack_require__(/*! ../GraphOperation */ "../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js");
const { GraphDeleteAction } = __webpack_require__(/*! ./GraphDeleteAction */ "../node_modules/objection/lib/queryBuilder/graph/delete/GraphDeleteAction.js");

class GraphDelete extends GraphOperation {
  createActions() {
    return [
      new GraphDeleteAction({
        nodes: this.currentGraph.nodes.filter(currentNode =>
          this.graphOptions.shouldDeleteOrUnrelate(currentNode, this.graph)
        ),

        graph: this.graph,
        graphOptions: this.graphOptions
      })
    ];
  }
}

module.exports = {
  GraphDelete
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/delete/GraphDeleteAction.js":
/*!************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/delete/GraphDeleteAction.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphAction } = __webpack_require__(/*! ../GraphAction */ "../node_modules/objection/lib/queryBuilder/graph/GraphAction.js");
const { groupBy } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const promiseUtils = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class GraphDeleteAction extends GraphAction {
  constructor({ nodes, graph, graphOptions }) {
    super();

    // Nodes to delete.
    this.nodes = nodes;
    this.graph = graph;
    this.graphOptions = graphOptions;
  }

  run(builder) {
    const nodesTodelete = this._filterOutBelongsToOneRelationUnrelates(this.nodes);
    const builders = this._createDeleteBuilders(builder, nodesTodelete);

    return promiseUtils.map(builders, builder => builder.execute(), {
      concurrency: this._getConcurrency(builder, nodesTodelete)
    });
  }

  _filterOutBelongsToOneRelationUnrelates(nodes) {
    // `BelongsToOneRelation` unrelate is handled by `GraphPatch` because
    // unrelating a `BelongsToOneRelation` is just a matter of updating
    // one field of the parent node.
    return nodes.filter(node => {
      return !(
        this.graphOptions.shouldUnrelate(node, this.graph) &&
        node.parentEdge.relation.isObjectionBelongsToOneRelation
      );
    });
  }

  _createDeleteBuilders(parentBuilder, nodesTodelete) {
    const nodesByRelation = groupBy(nodesTodelete, getRelation);
    const builders = [];

    nodesByRelation.forEach((nodes, relation) => {
      const nodesByParent = groupBy(nodes, getParent);

      nodesByParent.forEach((nodes, parentNode) => {
        const shouldUnrelate = this.graphOptions.shouldUnrelate(nodes[0], this.graph);

        const builder = parentNode.obj.$relatedQuery(relation.name).childQueryOf(parentBuilder);

        if (!relation.isObjectionBelongsToOneRelation) {
          // This is useless in case of BelongsToOneRelation.
          builder.findByIds(nodes.map(node => node.obj.$id()));
        }

        for (const node of nodes) {
          node.userData.deleted = true;
        }

        builders.push(shouldUnrelate ? builder.unrelate() : builder.delete());
      });
    });

    return builders;
  }
}

function getRelation(node) {
  return node.parentEdge.relation;
}

function getParent(node) {
  return node.parentNode;
}

module.exports = {
  GraphDeleteAction
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/insert/GraphInsert.js":
/*!******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/insert/GraphInsert.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { JoinRowGraphInsertAction } = __webpack_require__(/*! ./JoinRowGraphInsertAction */ "../node_modules/objection/lib/queryBuilder/graph/insert/JoinRowGraphInsertAction.js");
const { GraphInsertAction } = __webpack_require__(/*! ./GraphInsertAction */ "../node_modules/objection/lib/queryBuilder/graph/insert/GraphInsertAction.js");
const { GraphOperation } = __webpack_require__(/*! ../GraphOperation */ "../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js");
const { ModelGraphEdge } = __webpack_require__(/*! ../../../model/graph/ModelGraphEdge */ "../node_modules/objection/lib/model/graph/ModelGraphEdge.js");

class GraphInsert extends GraphOperation {
  constructor(...args) {
    super(...args);
    this.dependencies = this._createDependencyMap();
  }

  createActions() {
    return [...this._createNormalActions(), ...this._createJoinRowActions()];
  }

  _createDependencyMap() {
    const dependencies = new Map();

    for (const edge of this.graph.edges) {
      if (edge.type == ModelGraphEdge.Type.Relation) {
        this._createRelationDependency(edge, dependencies);
      } else {
        this._createReferenceDependency(edge, dependencies);
      }
    }

    return dependencies;
  }

  _createRelationDependency(edge, dependencies) {
    if (edge.relation.isObjectionHasManyRelation) {
      // In case of HasManyRelation the related node depends on the owner node
      // because the related node has the foreign key.
      this._addDependency(edge.relatedNode, edge, dependencies);
    } else if (edge.relation.isObjectionBelongsToOneRelation) {
      // In case of BelongsToOneRelation the owner node depends on the related
      // node because the owner node has the foreign key.
      this._addDependency(edge.ownerNode, edge, dependencies);
    }
  }

  _createReferenceDependency(edge, dependencies) {
    this._addDependency(edge.ownerNode, edge, dependencies);
  }

  _addDependency(node, edge, dependencies) {
    let edges = dependencies.get(node);

    if (!edges) {
      edges = [];
      dependencies.set(node, edges);
    }

    edges.push(edge);
  }

  _createNormalActions() {
    const handledNodes = new Set();
    const actions = [];

    while (true) {
      // At this point, don't care if the nodes have already been inserted before
      // given to this class. `GraphInsertAction` will test that and only insert
      // new ones. We need to pass all nodes to `GraphInsertActions` so that we
      // can resolve all dependencies.
      const nodesToInsert = this.graph.nodes.filter(node => {
        return !this._isHandled(node, handledNodes) && !this._hasDependencies(node, handledNodes);
      });

      if (nodesToInsert.length === 0) {
        break;
      }

      actions.push(
        new GraphInsertAction({
          nodes: nodesToInsert,
          currentGraph: this.currentGraph,
          dependencies: this.dependencies,
          graphOptions: this.graphOptions
        })
      );

      for (const node of nodesToInsert) {
        this._markHandled(node, handledNodes);
      }
    }

    if (handledNodes.size !== this.graph.nodes.length) {
      throw new Error('the object graph contains cyclic references');
    }

    return actions;
  }

  _isHandled(node, handledNodes) {
    return handledNodes.has(node);
  }

  _hasDependencies(node, handledNodes) {
    if (!this.dependencies.has(node)) {
      return false;
    }

    for (const edge of this.dependencies.get(node)) {
      const dependencyNode = edge.getOtherNode(node);

      if (!handledNodes.has(dependencyNode) && !this.currentGraph.nodeForNode(dependencyNode)) {
        return true;
      }
    }

    return false;
  }

  _markHandled(node, handledNodes) {
    handledNodes.add(node);

    // The referencing nodes are all references that don't
    // represent any real entity. They are simply intermediate nodes
    // that depend on this node. Once this node is handled, we can
    // also mark those nodes as handled as there is nothing to actually
    // insert.
    for (const refNode of node.referencingNodes) {
      this._markHandled(refNode, handledNodes);
    }
  }

  _createJoinRowActions() {
    return [
      new JoinRowGraphInsertAction({
        nodes: this.graph.nodes.filter(node => {
          return (
            this.currentGraph.nodeForNode(node) === null &&
            node.parentEdge &&
            node.parentEdge.relation.isObjectionManyToManyRelation
          );
        }),

        currentGraph: this.currentGraph,
        graphOptions: this.graphOptions
      })
    ];
  }
}

module.exports = {
  GraphInsert
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/insert/GraphInsertAction.js":
/*!************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/insert/GraphInsertAction.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphAction } = __webpack_require__(/*! ../GraphAction */ "../node_modules/objection/lib/queryBuilder/graph/GraphAction.js");
const { groupBy, chunk, get, set } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { ModelGraphEdge } = __webpack_require__(/*! ../../../model/graph/ModelGraphEdge */ "../node_modules/objection/lib/model/graph/ModelGraphEdge.js");
const promiseUtils = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

/**
 * Inserts a batch of nodes for a GraphInsert.
 *
 * One of these is created for each batch of nodes that can be inserted at once.
 * However, the nodes can have a different table and not all databases support
 * batch inserts, so this class splits the inserts into further sub batches
 * when needed.
 */
class GraphInsertAction extends GraphAction {
  constructor({ nodes, currentGraph, dependencies, graphOptions }) {
    super();

    // Nodes to insert.
    this.nodes = nodes;
    this.currentGraph = currentGraph;
    this.dependencies = dependencies;
    this.graphOptions = graphOptions;
  }

  run(builder) {
    const batches = this._createInsertBatches(builder);
    const concurrency = this._getConcurrency(builder, this.nodes);

    return promiseUtils.map(batches, batch => this._insertBatch(builder, batch), { concurrency });
  }

  _createInsertBatches(builder) {
    const batches = [];
    const batchSize = this._getBatchSize(builder);
    const nodesByModelClass = groupBy(this.nodes, getModelClass);

    for (const nodes of nodesByModelClass.values()) {
      for (const nodeBatch of chunk(nodes, batchSize)) {
        batches.push(nodeBatch);
      }
    }

    return batches;
  }

  _insertBatch(parentBuilder, nodes) {
    return this._beforeInsert(nodes)
      .then(() => this._insert(parentBuilder, nodes))
      .then(() => this._afterInsert(nodes));
  }

  _beforeInsert(nodes) {
    this._resolveDependencies(nodes);
    this._omitManyToManyExtraProps(nodes);
    this._copyRelationPropsFromCurrentIfNeeded(nodes);

    return Promise.resolve();
  }

  _resolveDependencies(nodes) {
    for (const node of nodes) {
      const edges = this.dependencies.get(node);

      if (edges) {
        for (const edge of edges) {
          // `node` needs `dependencyNode` to have been inserted (and it has been).
          const dependencyNode = edge.getOtherNode(node);

          this._resolveDependency(dependencyNode, edge);
        }
      }
    }
  }

  _resolveDependency(dependencyNode, edge) {
    if (edge.type === ModelGraphEdge.Type.Relation && !edge.relation.joinTable) {
      this._resolveRelationDependency(dependencyNode, edge);
    } else if (edge.refType === ModelGraphEdge.ReferenceType.Property) {
      this._resolvePropertyReferenceNode(dependencyNode, edge);
    }
  }

  _resolveRelationDependency(dependencyNode, edge) {
    const dependentNode = edge.getOtherNode(dependencyNode);

    let sourceProp;
    let targetProp;

    if (edge.isOwnerNode(dependencyNode)) {
      sourceProp = edge.relation.ownerProp;
      targetProp = edge.relation.relatedProp;
    } else {
      targetProp = edge.relation.ownerProp;
      sourceProp = edge.relation.relatedProp;
    }

    this._resolveReferences(dependencyNode);

    for (let i = 0, l = targetProp.size; i < l; ++i) {
      targetProp.setProp(dependentNode.obj, i, sourceProp.getProp(dependencyNode.obj, i));
    }
  }

  _resolvePropertyReferenceNode(dependencyNode, edge) {
    const dependentNode = edge.getOtherNode(dependencyNode);

    let sourcePath;
    let targetPath;

    if (edge.isOwnerNode(dependencyNode)) {
      sourcePath = edge.refOwnerDataPath;
      targetPath = edge.refRelatedDataPath;
    } else {
      targetPath = edge.refOwnerDataPath;
      sourcePath = edge.refRelatedDataPath;
    }

    const sourceValue = get(dependencyNode.obj, sourcePath);
    const targetValue = get(dependentNode.obj, targetPath);

    if (targetValue === edge.refMatch) {
      set(dependentNode.obj, targetPath, sourceValue);
    } else {
      set(dependentNode.obj, targetPath, targetValue.replace(edge.refMatch, sourceValue));
    }
  }

  _omitManyToManyExtraProps(nodes) {
    for (const node of nodes) {
      if (
        node.parentEdge &&
        node.parentEdge.type === ModelGraphEdge.Type.Relation &&
        node.parentEdge.relation.joinTableExtras.length > 0
      ) {
        node.parentEdge.relation.omitExtraProps([node.obj]);
      }
    }
  }

  _copyRelationPropsFromCurrentIfNeeded(nodes) {
    for (const node of nodes) {
      const currentNode = this.currentGraph.nodeForNode(node);

      if (!currentNode) {
        continue;
      }

      for (const edge of node.edges) {
        if (edge.type !== ModelGraphEdge.Type.Relation) {
          continue;
        }

        const prop = edge.isOwnerNode(node) ? edge.relation.ownerProp : edge.relation.relatedProp;

        for (let i = 0, l = prop.size; i < l; ++i) {
          const value = prop.getProp(node.obj, i);

          if (value !== undefined) {
            continue;
          }

          prop.setProp(node.obj, i, prop.getProp(currentNode.obj, i));
        }
      }
    }
  }

  _insert(parentBuilder, nodes) {
    const [{ modelClass }] = nodes;

    nodes = nodes.filter(node => {
      return this.graphOptions.shouldInsert(node, this.currentGraph);
    });

    for (const node of nodes) {
      delete node.obj[modelClass.uidProp];
      node.obj.$validate(null, { dataPath: node.dataPathKey });
    }

    if (nodes.length === 0) {
      return;
    }

    for (const node of nodes) {
      node.userData.inserted = true;
    }

    return this._runRelationBeforeInsertMethods(parentBuilder, nodes).then(() => {
      return modelClass
        .query()
        .insert(nodes.map(node => node.obj))
        .childQueryOf(parentBuilder)
        .copyFrom(parentBuilder, GraphAction.ReturningAllSelector)
        .execute();
    });
  }

  _runRelationBeforeInsertMethods(parentBuilder, nodes) {
    return Promise.all(
      nodes.map(node => {
        if (node.parentEdge) {
          return node.parentEdge.relation.beforeInsert(node.obj, parentBuilder.context());
        } else {
          return null;
        }
      })
    );
  }

  _afterInsert(nodes) {
    for (const node of nodes) {
      for (const refNode of node.referencingNodes) {
        this._resolveDependency(refNode, refNode.parentEdge);
      }
    }
  }
}

function getModelClass(node) {
  return node.modelClass;
}

module.exports = {
  GraphInsertAction
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/insert/JoinRowGraphInsertAction.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/insert/JoinRowGraphInsertAction.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphAction } = __webpack_require__(/*! ../GraphAction */ "../node_modules/objection/lib/queryBuilder/graph/GraphAction.js");
const { groupBy, chunk } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const promiseUtils = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class JoinRowGraphInsertAction extends GraphAction {
  constructor({ nodes, currentGraph, graphOptions }) {
    super();

    this.nodes = nodes;
    this.currentGraph = currentGraph;
    this.graphOptions = graphOptions;
  }

  run(builder) {
    const batches = this._createInsertBatches(builder);
    const concurrency = this._getConcurrency(builder, this.nodes);

    return promiseUtils.map(batches, batch => this._insertBatch(builder, batch), { concurrency });
  }

  _createInsertBatches(builder) {
    const batches = [];
    const batchSize = this._getBatchSize(builder);
    const nodesByModel = groupBy(this.nodes, node => getJoinTableModel(builder, node));

    for (const [joinTableModelClass, nodes] of nodesByModel.entries()) {
      for (const nodeBatch of chunk(nodes, batchSize)) {
        batches.push(this._createBatch(joinTableModelClass, nodeBatch));
      }
    }

    return batches;
  }

  _createBatch(joinTableModelClass, nodes) {
    return nodes
      .filter(node => {
        return this.graphOptions.shouldRelate(node, this.currentGraph) || node.userData.inserted;
      })
      .map(node => ({
        node,
        joinTableModelClass,
        joinTableObj: this._createJoinTableObj(joinTableModelClass, node)
      }));
  }

  _createJoinTableObj(joinTableModelClass, node) {
    const { parentEdge, parentNode } = node;
    const { relation } = parentEdge;

    this._resolveReferences(node);

    return joinTableModelClass.fromJson(
      relation.createJoinModel(relation.ownerProp.getProps(parentNode.obj), node.obj)
    );
  }

  _insertBatch(parentBuilder, batch) {
    return this._beforeInsert(parentBuilder, batch).then(() => this._insert(parentBuilder, batch));
  }

  _beforeInsert(parentBuilder, batch) {
    return Promise.all(
      batch.map(({ node, joinTableObj }) => {
        if (node.parentEdge) {
          return node.parentEdge.relation.joinTableBeforeInsert(
            joinTableObj,
            parentBuilder.context()
          );
        } else {
          return null;
        }
      })
    );
  }

  _insert(parentBuilder, batch) {
    if (batch.length > 0) {
      return batch[0].joinTableModelClass
        .query()
        .childQueryOf(parentBuilder)
        .insert(batch.map(it => it.joinTableObj));
    }
  }
}

function getJoinTableModel(builder, node) {
  return node.parentEdge.relation.getJoinModelClass(builder.unsafeKnex());
}

module.exports = {
  JoinRowGraphInsertAction
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/patch/GraphPatch.js":
/*!****************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/patch/GraphPatch.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphOperation } = __webpack_require__(/*! ../GraphOperation */ "../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js");
const { GraphPatchAction } = __webpack_require__(/*! ./GraphPatchAction */ "../node_modules/objection/lib/queryBuilder/graph/patch/GraphPatchAction.js");

class GraphPatch extends GraphOperation {
  createActions() {
    return [
      new GraphPatchAction({
        nodes: this.graph.nodes.filter(node =>
          this.graphOptions.shouldPatchOrUpdateIgnoreDisable(node, this.currentGraph)
        ),

        graph: this.graph,
        currentGraph: this.currentGraph,
        graphOptions: this.graphOptions
      })
    ];
  }
}

module.exports = {
  GraphPatch
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/patch/GraphPatchAction.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/patch/GraphPatchAction.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphAction } = __webpack_require__(/*! ../GraphAction */ "../node_modules/objection/lib/queryBuilder/graph/GraphAction.js");
const { isInternalProp } = __webpack_require__(/*! ../../../utils/internalPropUtils */ "../node_modules/objection/lib/utils/internalPropUtils.js");
const { union, difference, isObject, jsonEquals } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const promiseUtils = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class GraphPatchAction extends GraphAction {
  constructor({ nodes, graph, currentGraph, graphOptions }) {
    super();

    // Nodes to patch.
    this.nodes = nodes;
    this.graph = graph;
    this.currentGraph = currentGraph;
    this.graphOptions = graphOptions;
  }

  run(builder) {
    return promiseUtils.map(this.nodes, node => this._runForNode(builder, node), {
      concurrency: this._getConcurrency(builder, this.nodes)
    });
  }

  _runForNode(builder, node) {
    const shouldPatch = this.graphOptions.shouldPatch(node, this.currentGraph);
    const shouldUpdate = this.graphOptions.shouldUpdate(node, this.currentGraph);

    // BelongsToOneRelation inserts and relates change the parent object's
    // properties. That's why we handle them here.
    const changedPropsBecauseOfBelongsToOneInsert = this._handleBelongsToOneInserts(node);

    // BelongsToOneRelation deletes and unrelates change the parent object's
    // properties. That's why we handle them here.
    const changePropsBecauseOfBelongsToOneDelete = this._handleBelongsToOneDeletes(node);

    const { changedProps, unchangedProps } = this._findChanges(node);
    const allProps = union(changedProps, unchangedProps);

    const propsToUpdate = difference(
      shouldPatch || shouldUpdate
        ? changedProps
        : [...changedPropsBecauseOfBelongsToOneInsert, ...changePropsBecauseOfBelongsToOneDelete],

      // Remove id properties from the props to update. With upsertGraph
      // it never makes sense to change the id.
      node.modelClass.getIdPropertyArray()
    );

    if (propsToUpdate.length === 0) {
      return null;
    }

    delete node.obj[node.modelClass.uidProp];
    delete node.obj[node.modelClass.uidRefProp];
    delete node.obj[node.modelClass.dbRefProp];

    node.obj.$validate(null, {
      dataPath: node.dataPathKey,
      patch: shouldPatch || (!shouldPatch && !shouldUpdate)
    });

    // Don't update the fields that we know not to change.
    node.obj.$omitFromDatabaseJson(difference(allProps, propsToUpdate));
    node.userData.updated = true;

    const updateBuilder = this._createBuilder(node)
      .childQueryOf(builder)
      .copyFrom(builder, GraphAction.ReturningAllSelector);

    if (shouldPatch) {
      updateBuilder.patch(node.obj);
    } else {
      updateBuilder.update(node.obj);
    }

    return updateBuilder.execute().then(result => {
      if (isObject(result) && result.$isObjectionModel) {
        // Handle returning('*').
        node.obj.$set(result);
      }

      return result;
    });
  }

  _handleBelongsToOneInserts(node) {
    const currentNode = this.currentGraph.nodeForNode(node);
    const updatedProps = [];

    for (const edge of node.edges) {
      if (
        edge.isOwnerNode(node) &&
        edge.relation &&
        edge.relation.isObjectionBelongsToOneRelation &&
        edge.relation.relatedProp.hasProps(edge.relatedNode.obj)
      ) {
        const { relation } = edge;

        for (let i = 0, l = relation.ownerProp.size; i < l; ++i) {
          const currentValue = currentNode && relation.ownerProp.getProp(currentNode.obj, i);
          const relatedValue = relation.relatedProp.getProp(edge.relatedNode.obj, i);

          if (currentValue != relatedValue) {
            relation.ownerProp.setProp(node.obj, i, relatedValue);
            updatedProps.push(relation.ownerProp.props[i]);
          }
        }
      }
    }

    return updatedProps;
  }

  _handleBelongsToOneDeletes(node) {
    const currentNode = this.currentGraph.nodeForNode(node);
    const updatedProps = [];

    if (!currentNode) {
      return updatedProps;
    }

    for (const edge of currentNode.edges) {
      if (
        edge.isOwnerNode(currentNode) &&
        edge.relation.isObjectionBelongsToOneRelation &&
        node.obj[edge.relation.name] === null &&
        this.graphOptions.shouldDeleteOrUnrelate(edge.relatedNode, this.graph)
      ) {
        const { relation } = edge;

        for (let i = 0, l = relation.ownerProp.size; i < l; ++i) {
          const currentValue = relation.ownerProp.getProp(currentNode.obj, i);

          if (currentValue != null) {
            relation.ownerProp.setProp(node.obj, i, null);
            updatedProps.push(relation.ownerProp.props[i]);
          }
        }
      }
    }

    return updatedProps;
  }

  _findChanges(node) {
    const obj = node.obj;
    const currentNode = this.currentGraph.nodeForNode(node);
    const currentObj = (currentNode && currentNode.obj) || {};
    const relationNames = node.modelClass.getRelationNames();

    const unchangedProps = [];
    const changedProps = [];

    for (const prop of Object.keys(obj)) {
      if (isInternalProp(prop) || relationNames.includes(prop)) {
        continue;
      }

      const value = obj[prop];
      const currentValue = currentObj[prop];

      // If the current object doesn't have the property, we have to assume
      // it changes (we cannot know if it will). If the object does have the
      // property, we test non-strict equality. See issue #732.
      if (currentValue === undefined || !nonStrictEquals(currentValue, value)) {
        changedProps.push(prop);
      } else {
        unchangedProps.push(prop);
      }
    }

    // We cannot know if the query properties cause changes to the values.
    // We must assume that they do.
    if (obj.$$queryProps) {
      changedProps.push(...Object.keys(obj.$$queryProps));
    }

    return {
      changedProps,
      unchangedProps
    };
  }

  _createBuilder(node) {
    if (node.parentEdge && !node.parentEdge.relation.isObjectionHasManyRelation) {
      return this._createRelatedBuilder(node);
    } else {
      return this._createRootBuilder(node);
    }
  }

  _createRelatedBuilder(node) {
    return node.parentNode.obj
      .$relatedQuery(node.parentEdge.relation.name)
      .findById(node.obj.$id());
  }

  _createRootBuilder(node) {
    return node.obj.$query();
  }
}

function nonStrictEquals(val1, val2) {
  if (val1 == val2) {
    return true;
  }

  return jsonEquals(val1, val2);
}

module.exports = {
  GraphPatchAction
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/recursiveUpsert/GraphRecursiveUpsert.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/recursiveUpsert/GraphRecursiveUpsert.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphOperation } = __webpack_require__(/*! ../GraphOperation */ "../node_modules/objection/lib/queryBuilder/graph/GraphOperation.js");
const { GraphRecursiveUpsertAction } = __webpack_require__(/*! ./GraphRecursiveUpsertAction */ "../node_modules/objection/lib/queryBuilder/graph/recursiveUpsert/GraphRecursiveUpsertAction.js");

class GraphRecursiveUpsert extends GraphOperation {
  createActions() {
    return [
      new GraphRecursiveUpsertAction({
        nodes: this.graph.nodes.filter(node => {
          const shouldRelate = this.graphOptions.shouldRelate(node, this.currentGraph);
          return shouldRelate && hasRelations(node.obj);
        }),

        currentGraph: this.currentGraph,
        graphOptions: this.graphOptions
      })
    ];
  }
}

function hasRelations(obj) {
  for (const relationName of obj.constructor.getRelationNames()) {
    if (obj.hasOwnProperty(relationName)) {
      return true;
    }
  }

  return false;
}

module.exports = {
  GraphRecursiveUpsert
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/graph/recursiveUpsert/GraphRecursiveUpsertAction.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/graph/recursiveUpsert/GraphRecursiveUpsertAction.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { GraphAction } = __webpack_require__(/*! ../GraphAction */ "../node_modules/objection/lib/queryBuilder/graph/GraphAction.js");
const { groupBy } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const promiseUtils = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class GraphRecursiveUpsertAction extends GraphAction {
  constructor({ nodes, graph, graphOptions }) {
    super();

    // Nodes to upsert.
    this.nodes = nodes;
    this.graph = graph;
    this.graphOptions = graphOptions;
  }

  run(builder) {
    const builders = this._createUpsertBuilders(builder, this.nodes);

    return promiseUtils.map(builders, builder => builder.execute(), {
      concurrency: this._getConcurrency(builder, this.nodes)
    });
  }

  _createUpsertBuilders(parentBuilder, nodesToUpsert) {
    const nodesByRelation = groupBy(nodesToUpsert, getRelation);
    const builders = [];

    nodesByRelation.forEach(nodes => {
      const nodesByParent = groupBy(nodes, getParent);

      nodesByParent.forEach(nodes => {
        for (const node of nodes) {
          node.userData.upserted = true;
        }

        builders.push(
          nodes[0].modelClass
            .query()
            .childQueryOf(parentBuilder)
            .copyFrom(parentBuilder, GraphAction.ReturningAllSelector)
            .upsertGraph(nodes.map(node => node.obj), this.graphOptions.rebasedOptions(nodes[0]))
        );
      });
    });

    return builders;
  }
}

function getRelation(node) {
  return node.parentEdge.relation;
}

function getParent(node) {
  return node.parentNode;
}

module.exports = {
  GraphRecursiveUpsertAction
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/join/JoinResultColumn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/join/JoinResultColumn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class JoinResultColumn {
  constructor({ columnAlias, tableNode, name }) {
    this.columnAlias = columnAlias;
    this.tableNode = tableNode;
    this.name = name;
  }

  static create({ tableTree, columnAlias }) {
    const tableNode = tableTree.getNodeForColumnAlias(columnAlias);

    return new JoinResultColumn({
      columnAlias,
      tableNode,
      name: tableNode.getColumnForColumnAlias(columnAlias)
    });
  }
}

module.exports = {
  JoinResultColumn
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/join/JoinResultParser.js":
/*!***************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/join/JoinResultParser.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { JoinResultColumn } = __webpack_require__(/*! ./JoinResultColumn */ "../node_modules/objection/lib/queryBuilder/join/JoinResultColumn.js");
const { groupBy } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class JoinResultParser {
  constructor({ tableTree, omitColumnAliases = [] }) {
    this.tableTree = tableTree;
    this.omitColumnAliases = new Set(omitColumnAliases);

    this.columnsByTableNode = null;
    this.parentMap = null;
    this.rootModels = null;
  }

  static create(args) {
    return new JoinResultParser(args);
  }

  parse(flatRows) {
    if (!Array.isArray(flatRows) || flatRows.length === 0) {
      return flatRows;
    }

    this.columnsByTableNode = this._createColumns(flatRows[0]);
    this.parentMap = new Map();
    this.rootModels = [];

    for (const flatRow of flatRows) {
      this._parseNode(this.tableTree.rootNode, flatRow);
    }

    return this.rootModels;
  }

  _parseNode(tableNode, flatRow, parentModel = null, parentKey = null) {
    const id = tableNode.getIdFromFlatRow(flatRow);

    if (id === null) {
      return;
    }

    const key = getKey(parentKey, id, tableNode);
    let model = this.parentMap.get(key);

    if (!model) {
      model = this._createModel(tableNode, flatRow);

      this._addToParent(tableNode, model, parentModel);
      this.parentMap.set(key, model);
    }

    for (const childNode of tableNode.childNodes) {
      this._parseNode(childNode, flatRow, model, key);
    }
  }

  _createModel(tableNode, flatRow) {
    const row = {};
    const columns = this.columnsByTableNode.get(tableNode);

    if (columns) {
      for (const column of columns) {
        if (!this.omitColumnAliases.has(column.columnAlias)) {
          row[column.name] = flatRow[column.columnAlias];
        }
      }
    }

    const model = tableNode.modelClass.fromDatabaseJson(row);

    for (const childNode of tableNode.childNodes) {
      if (childNode.relation.isOneToOne()) {
        model[childNode.relationProperty] = null;
      } else {
        model[childNode.relationProperty] = [];
      }
    }

    return model;
  }

  _addToParent(tableNode, model, parentModel) {
    if (tableNode.parentNode) {
      if (tableNode.relation.isOneToOne()) {
        parentModel[tableNode.relationProperty] = model;
      } else {
        parentModel[tableNode.relationProperty].push(model);
      }
    } else {
      // Root model. Add to root list.
      this.rootModels.push(model);
    }
  }

  _createColumns(row) {
    const columns = Object.keys(row).map(columnAlias =>
      JoinResultColumn.create({ tableTree: this.tableTree, columnAlias })
    );

    return groupBy(columns, getTableNode);
  }
}

function getTableNode(column) {
  return column.tableNode;
}

function getKey(parentKey, id, tableNode) {
  if (parentKey !== null) {
    return `${parentKey}/${tableNode.relationProperty}/${id}`;
  } else {
    return `/${id}`;
  }
}

module.exports = {
  JoinResultParser
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/join/RelationJoiner.js":
/*!*************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/join/RelationJoiner.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { uniqBy } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { Selection } = __webpack_require__(/*! ../operations/select/Selection */ "../node_modules/objection/lib/queryBuilder/operations/select/Selection.js");
const { createModifier } = __webpack_require__(/*! ../../utils/createModifier */ "../node_modules/objection/lib/utils/createModifier.js");
const { map: mapPromise } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { ValidationErrorType } = __webpack_require__(/*! ../../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");

const { TableTree } = __webpack_require__(/*! ./TableTree */ "../node_modules/objection/lib/queryBuilder/join/TableTree.js");
const { JoinResultParser } = __webpack_require__(/*! ./JoinResultParser */ "../node_modules/objection/lib/queryBuilder/join/JoinResultParser.js");
const { ID_LENGTH_LIMIT } = __webpack_require__(/*! ./utils */ "../node_modules/objection/lib/queryBuilder/join/utils.js");

/**
 * Given a relation expression, builds a query using joins to fetch it.
 */
class RelationJoiner {
  constructor({ modelClass }) {
    this.rootModelClass = modelClass;

    // The relation expression to join.
    this.expression = null;

    // Explicit modifiers for the relation expression.
    this.modifiers = null;

    this.options = defaultOptions();
    this.tableTree = null;
    this.internalSelections = null;
  }

  setExpression(expression) {
    if (!this.expression) {
      this.expression = expression;
    }

    return this;
  }

  setModifiers(modifiers) {
    if (!this.modifiers) {
      this.modifiers = modifiers;
    }

    return this;
  }

  setOptions(options) {
    this.options = Object.assign(this.options, options);
    return this;
  }

  /**
   * Fetches the column information needed for building the select clauses.
   *
   * This must be called before calling `build(builder, true)`. `build(builder, false)`
   * can be called without this since it doesn't build selects.
   */
  fetchColumnInfo(builder) {
    const tableTree = this._getTableTree(builder);
    const allModelClasses = new Set(tableTree.nodes.map(node => node.modelClass));

    return mapPromise(
      Array.from(allModelClasses),
      modelClass => modelClass.fetchTableMetadata({ parentBuilder: builder }),
      {
        concurrency: this.rootModelClass.getConcurrency(builder.unsafeKnex())
      }
    );
  }

  build(builder, buildSelects = true) {
    const rootTableNode = this._getTableTree(builder).rootNode;
    const userSelectQueries = new Map([[rootTableNode, builder]]);

    for (const tableNode of rootTableNode.childNodes) {
      this._buildJoinsForNode({ builder, tableNode, userSelectQueries });
    }

    if (buildSelects) {
      this._buildSelects({ builder, tableNode: rootTableNode, userSelectQueries });
    }
  }

  parseResult(builder, flatRows) {
    const parser = JoinResultParser.create({
      tableTree: this._getTableTree(builder),
      omitColumnAliases: this.internalSelections.map(it => it.alias)
    });

    return parser.parse(flatRows);
  }

  _getTableTree(builder) {
    if (!this.tableTree) {
      // Create the table tree lazily.
      this.tableTree = TableTree.create({
        rootModelClass: this.rootModelClass,
        rootTableAlias: builder.tableRef(),
        expression: this.expression,
        options: this.options
      });
    }

    return this.tableTree;
  }

  _buildJoinsForNode({ builder, tableNode, userSelectQueries }) {
    const subqueryToJoin = createSubqueryToJoin({
      builder,
      tableNode,
      modifiers: this.modifiers
    });

    const userSelectQuery = subqueryToJoin.clone();

    // relation.join applies the relation modifier that can
    // also contain selects.
    userSelectQuery.modify(tableNode.relation.modify);

    // Save the query that contains the user specified selects
    // for later use.
    userSelectQueries.set(tableNode, userSelectQuery);

    tableNode.relation.join(builder, {
      joinOperation: this.options.joinOperation,

      ownerTable: tableNode.parentNode.alias,
      relatedTableAlias: tableNode.alias,
      joinTableAlias: tableNode.joinTableAlias,

      relatedJoinSelectQuery: ensureIdAndRelationPropsAreSelected({
        builder: subqueryToJoin,
        tableNode
      })
    });

    for (const childNode of tableNode.childNodes) {
      this._buildJoinsForNode({ builder, tableNode: childNode, userSelectQueries });
    }
  }

  _buildSelects({ builder, tableNode, userSelectQueries }) {
    const { selections, internalSelections } = getSelectionsForNode({
      builder,
      tableNode,
      userSelectQueries
    });

    for (const selection of selections) {
      checkAliasLength(tableNode.modelClass, selection.name);
    }

    // Save the selections that were added internally (not by the user)
    // so that we can later remove the corresponding properties when
    // parsing the result.
    this.internalSelections = internalSelections;

    builder.select(selectionsToStrings(selections));
  }
}

function defaultOptions() {
  return {
    joinOperation: 'leftJoin',
    minimize: false,
    separator: ':',
    aliases: {}
  };
}

function createSubqueryToJoin({ builder, tableNode, modifiers }) {
  const { relation, expression, modelClass } = tableNode;
  const modifierQuery = modelClass.query().childQueryOf(builder);

  for (const modifierName of expression.node.$modify) {
    const modifier = createModifier({
      modifier: modifierName,
      modelClass,
      modifiers
    });

    try {
      modifier(modifierQuery);
    } catch (err) {
      if (err instanceof modelClass.ModifierNotFoundError) {
        throw modelClass.createValidationError({
          type: ValidationErrorType.RelationExpression,
          message: `could not find modifier "${modifierName}" for relation "${relation.name}"`
        });
      } else {
        throw err;
      }
    }
  }

  return modifierQuery;
}

function ensureIdAndRelationPropsAreSelected({ builder, tableNode }) {
  const tableRef = builder.tableRef();

  const cols = [
    ...builder.modelClass().getIdColumnArray(),
    ...tableNode.relation.relatedProp.cols,
    ...tableNode.childNodes.reduce(
      (cols, childNode) => [...cols, ...childNode.relation.ownerProp.cols],
      []
    )
  ];

  const selectStrings = uniqBy(cols)
    .filter(col => !builder.hasSelectionAs(col, col))
    .map(col => `${tableRef}.${col}`);

  return builder.select(selectStrings);
}

function getSelectionsForNode({ builder, tableNode, userSelectQueries }) {
  const userSelectQuery = userSelectQueries.get(tableNode);
  const userSelections = userSelectQuery.findAllSelections();
  const userSelectedAllColumns = isSelectAllSelectionSet(userSelections);

  let selections = [];
  let internalSelections = [];

  if (tableNode.parentNode) {
    selections = mapUserSelectionsFromSubqueryToMainQuery({ userSelections, tableNode });

    if (userSelectedAllColumns && tableNode.relation.isObjectionManyToManyRelation) {
      const extraSelections = getJoinTableExtraSelectionsForNode({ tableNode });
      selections = selections.concat(extraSelections);
    }
  }

  if (userSelectedAllColumns) {
    const allColumnSelections = getAllColumnSelectionsForNode({ builder, tableNode });
    selections = allColumnSelections.concat(selections);
  } else {
    const idSelections = getIdSelectionsForNode({ tableNode });

    for (const idSelection of idSelections) {
      if (!userSelectQuery.hasSelectionAs(idSelection.column, idSelection.column)) {
        selections.push(idSelection);
        internalSelections.push(idSelection);
      }
    }
  }

  for (const childNode of tableNode.childNodes) {
    const childResult = getSelectionsForNode({ builder, tableNode: childNode, userSelectQueries });

    selections = selections.concat(childResult.selections);
    internalSelections = internalSelections.concat(childResult.internalSelections);
  }

  return {
    selections,
    internalSelections
  };
}

function mapUserSelectionsFromSubqueryToMainQuery({ userSelections, tableNode }) {
  return userSelections.filter(isNotSelectAll).map(selection => {
    return new Selection(
      tableNode.alias,
      selection.name,
      tableNode.getColumnAliasForColumn(selection.name)
    );
  });
}

function getJoinTableExtraSelectionsForNode({ tableNode }) {
  return tableNode.relation.joinTableExtras.map(extra => {
    return new Selection(
      tableNode.joinTableAlias,
      extra.joinTableCol,
      tableNode.getColumnAliasForColumn(extra.aliasCol)
    );
  });
}

function getAllColumnSelectionsForNode({ builder, tableNode }) {
  const table = builder.tableNameFor(tableNode.modelClass);

  return tableNode.modelClass.tableMetadata({ table }).columns.map(columnName => {
    return new Selection(
      tableNode.alias,
      columnName,
      tableNode.getColumnAliasForColumn(columnName)
    );
  });
}

function getIdSelectionsForNode({ tableNode }) {
  return tableNode.modelClass.getIdColumnArray().map(columnName => {
    return new Selection(
      tableNode.alias,
      columnName,
      tableNode.getColumnAliasForColumn(columnName)
    );
  });
}

function selectionsToStrings(selections) {
  return selections.map(selection => {
    const selectStr = `${selection.table}.${selection.column}`;
    return `${selectStr} as ${selection.alias}`;
  });
}

function isSelectAll(selection) {
  return selection.column === '*';
}

function isNotSelectAll(selection) {
  return selection.column !== '*';
}

function isSelectAllSelectionSet(selections) {
  return selections.length === 0 || selections.some(isSelectAll);
}

function checkAliasLength(modelClass, alias) {
  if (alias.length > ID_LENGTH_LIMIT) {
    throw modelClass.createValidationError({
      type: ValidationErrorType.RelationExpression,
      message: `identifier ${alias} is over ${ID_LENGTH_LIMIT} characters long and would be truncated by the database engine.`
    });
  }
}

module.exports = {
  RelationJoiner
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/join/TableNode.js":
/*!********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/join/TableNode.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class TableNode {
  constructor({ tableTree, modelClass, expression, parentNode = null, relation = null }) {
    this.tableTree = tableTree;
    this.modelClass = modelClass;
    this.parentNode = parentNode;
    this.relation = relation;
    this.expression = expression;
    this.childNodes = [];

    this.alias = this._calculateAlias();
    this.idGetter = this._createIdGetter();
  }

  static create(args) {
    const node = new TableNode(args);

    if (node.parentNode) {
      node.parentNode.childNodes.push(node);
    }

    return node;
  }

  get options() {
    return this.tableTree.options;
  }

  get relationProperty() {
    return this.expression.node.$name;
  }

  get joinTableAlias() {
    return this.modelClass.joinTableAlias(this.alias);
  }

  getReferenceForColumn(column) {
    return `${this.alias}.${column}`;
  }

  getColumnAliasForColumn(column) {
    if (this.parentNode) {
      return `${this.alias}${this.options.separator}${column}`;
    } else {
      return column;
    }
  }

  getColumnForColumnAlias(columnAlias) {
    const lastSepIndex = columnAlias.lastIndexOf(this.options.separator);

    if (lastSepIndex === -1) {
      return columnAlias;
    } else {
      return columnAlias.slice(lastSepIndex + this.options.separator.length);
    }
  }

  getIdFromFlatRow(flatRow) {
    return this.idGetter(flatRow);
  }

  _calculateAlias() {
    if (this.parentNode) {
      const relationName = this.expression.node.$name;
      const alias = this.options.aliases[relationName] || relationName;

      if (this.options.minimize) {
        return `_t${this.tableTree.createNextUid()}`;
      } else if (this.parentNode.parentNode) {
        return `${this.parentNode.alias}${this.options.separator}${alias}`;
      } else {
        return alias;
      }
    } else {
      return this.tableTree.rootTableAlias;
    }
  }

  _createIdGetter() {
    const idColumns = this.modelClass.getIdColumnArray();
    const columnAliases = idColumns.map(column => this.getColumnAliasForColumn(column));

    if (idColumns.length === 1) {
      return createIdGetter(columnAliases);
    } else {
      return createCompositeIdGetter(columnAliases);
    }
  }
}

function createIdGetter(columnAliases) {
  const columnAlias = columnAliases[0];

  return flatRow => {
    const id = flatRow[columnAlias];

    if (id === null) {
      return null;
    }

    return `${id}`;
  };
}

function createCompositeIdGetter(columnAliases) {
  if (columnAliases.length === 2) {
    return createTwoIdGetter(columnAliases);
  } else {
    return createMultiIdGetter(columnAliases);
  }
}

function createTwoIdGetter(columnAliases) {
  const columnAlias1 = columnAliases[0];
  const columnAlias2 = columnAliases[1];

  return flatRow => {
    const id1 = flatRow[columnAlias1];
    const id2 = flatRow[columnAlias2];

    if (id1 === null || id2 === null) {
      return null;
    }

    return `${id1},${id2}`;
  };
}

function createMultiIdGetter(columnAliases) {
  return flatRow => {
    let idStr = '';

    for (let i = 0, l = columnAliases.length; i < l; ++i) {
      const columnAlias = columnAliases[i];
      const id = flatRow[columnAlias];

      if (id === null) {
        return null;
      }

      idStr += id;

      if (i !== l - 1) {
        idStr += ',';
      }
    }

    return idStr;
  };
}

module.exports = {
  TableNode
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/join/TableTree.js":
/*!********************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/join/TableTree.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { forEachChildExpression } = __webpack_require__(/*! ./utils */ "../node_modules/objection/lib/queryBuilder/join/utils.js");
const { TableNode } = __webpack_require__(/*! ./TableNode */ "../node_modules/objection/lib/queryBuilder/join/TableNode.js");

class TableTree {
  constructor({ expression, rootModelClass, rootTableAlias, options }) {
    this.options = options;
    this.rootModelClass = rootModelClass;
    this.rootTableAlias = rootTableAlias;
    this.nodes = [];
    this.nodesByAlias = new Map();
    this.uidCounter = 0;

    this._createNodes({ expression, modelClass: rootModelClass });
  }

  static create(args) {
    return new TableTree(args);
  }

  get rootNode() {
    return this.nodes[0];
  }

  getNodeForColumnAlias(columnAlias) {
    const lastSepIndex = columnAlias.lastIndexOf(this.options.separator);

    if (lastSepIndex === -1) {
      return this.rootNode;
    } else {
      const tableAlias = columnAlias.slice(0, lastSepIndex);
      return this.nodesByAlias.get(tableAlias);
    }
  }

  createNextUid() {
    return this.uidCounter++;
  }

  _createNodes({ expression, modelClass }) {
    const rootNode = this._createRootNode({ expression, modelClass });
    this._createChildNodes({ expression, modelClass, parentNode: rootNode });

    for (const node of this.nodes) {
      this.nodesByAlias.set(node.alias, node);
    }
  }

  _createRootNode({ expression, modelClass }) {
    const node = TableNode.create({
      tableTree: this,
      modelClass,
      expression
    });

    this.nodes.push(node);
    return node;
  }

  _createChildNodes({ expression, modelClass, parentNode }) {
    forEachChildExpression(expression, modelClass, (childExpr, relation) => {
      const node = TableNode.create({
        tableTree: this,
        modelClass: relation.relatedModelClass,
        expression: childExpr,

        parentNode,
        relation
      });

      this.nodes.push(node);

      this._createChildNodes({
        expression: childExpr,
        modelClass: relation.relatedModelClass,
        parentNode: node
      });
    });
  }
}

module.exports = {
  TableTree
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/join/utils.js":
/*!****************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/join/utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ValidationErrorType } = __webpack_require__(/*! ../../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");

const ID_LENGTH_LIMIT = 63;
const RELATION_RECURSION_LIMIT = 64;

// Given a relation expression, goes through all first level children.
function forEachChildExpression(expr, modelClass, callback) {
  if (expr.node.$allRecursive || expr.maxRecursionDepth > RELATION_RECURSION_LIMIT) {
    throw modelClass.createValidationError({
      type: ValidationErrorType.RelationExpression,
      message: `recursion depth of eager expression ${expr.toString()} too big for JoinEagerAlgorithm`
    });
  }

  expr.forEachChildExpression(modelClass, callback);
}

module.exports = {
  ID_LENGTH_LIMIT,
  RELATION_RECURSION_LIMIT,

  forEachChildExpression
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

// Operation that simply delegates all calls to the operation passed
// to to the constructor in `opt.delegate`.
class DelegateOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);

    this.delegate = opt.delegate;
  }

  is(OperationClass) {
    return super.is(OperationClass) || this.delegate.is(OperationClass);
  }

  onAdd(builder, args) {
    return this.delegate.onAdd(builder, args);
  }

  onBefore1(builder, result) {
    return this.delegate.onBefore1(builder, result);
  }

  hasOnBefore1() {
    return this.onBefore1 !== DelegateOperation.prototype.onBefore1 || this.delegate.hasOnBefore1();
  }

  onBefore2(builder, result) {
    return this.delegate.onBefore2(builder, result);
  }

  hasOnBefore2() {
    return this.onBefore2 !== DelegateOperation.prototype.onBefore2 || this.delegate.hasOnBefore2();
  }

  onBefore3(builder, result) {
    return this.delegate.onBefore3(builder, result);
  }

  hasOnBefore3() {
    return this.onBefore3 !== DelegateOperation.prototype.onBefore3 || this.delegate.hasOnBefore3();
  }

  onBuild(builder) {
    return this.delegate.onBuild(builder);
  }

  hasOnBuild() {
    return this.onBuild !== DelegateOperation.prototype.onBuild || this.delegate.hasOnBuild();
  }

  onBuildKnex(knexBuilder, builder) {
    return this.delegate.onBuildKnex(knexBuilder, builder);
  }

  hasOnBuildKnex() {
    return (
      this.onBuildKnex !== DelegateOperation.prototype.onBuildKnex || this.delegate.hasOnBuildKnex()
    );
  }

  onRawResult(builder, result) {
    return this.delegate.onRawResult(builder, result);
  }

  hasOnRawResult() {
    return (
      this.onRawResult !== DelegateOperation.prototype.onRawResult || this.delegate.hasOnRawResult()
    );
  }

  onAfter1(builder, result) {
    return this.delegate.onAfter1(builder, result);
  }

  hasOnAfter1() {
    return this.onAfter1 !== DelegateOperation.prototype.onAfter1 || this.delegate.hasOnAfter1();
  }

  onAfter2(builder, result) {
    return this.delegate.onAfter2(builder, result);
  }

  hasOnAfter2() {
    return this.onAfter2 !== DelegateOperation.prototype.onAfter2 || this.delegate.hasOnAfter2();
  }

  onAfter3(builder, result) {
    return this.delegate.onAfter3(builder, result);
  }

  hasOnAfter3() {
    return this.onAfter3 !== DelegateOperation.prototype.onAfter3 || this.delegate.hasOnAfter3();
  }

  queryExecutor(builder) {
    return this.delegate.queryExecutor(builder);
  }

  hasQueryExecutor() {
    return (
      this.queryExecutor !== DelegateOperation.prototype.queryExecutor ||
      this.delegate.hasQueryExecutor()
    );
  }

  onError(builder, error) {
    return this.delegate.onError(builder, error);
  }

  hasOnError() {
    return this.onError !== DelegateOperation.prototype.onError || this.delegate.hasOnError();
  }

  clone() {
    const clone = super.clone();
    clone.delegate = this.delegate && this.delegate.clone();
    return clone;
  }
}

module.exports = {
  DelegateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/DeleteOperation.js":
/*!********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/DeleteOperation.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { after, afterReturn } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { StaticHookArguments } = __webpack_require__(/*! ../StaticHookArguments */ "../node_modules/objection/lib/queryBuilder/StaticHookArguments.js");

class DeleteOperation extends QueryBuilderOperation {
  onBefore2(builder, result) {
    const maybePromise = callBeforeDelete(builder);
    return afterReturn(maybePromise, result);
  }

  onBuildKnex(knexBuilder) {
    knexBuilder.delete();
  }

  onAfter2(builder, result) {
    return callAfterDelete(builder, result);
  }
}

function callBeforeDelete(builder) {
  return callStaticBeforeDelete(builder);
}

function callStaticBeforeDelete(builder) {
  const args = StaticHookArguments.create({ builder });
  return builder.modelClass().beforeDelete(args);
}

function callAfterDelete(builder, result) {
  return callStaticAfterDelete(builder, result);
}

function callStaticAfterDelete(builder, result) {
  const args = StaticHookArguments.create({ builder, result });
  const maybePromise = builder.modelClass().afterDelete(args);

  return after(maybePromise, maybeResult => {
    if (maybeResult === undefined) {
      return result;
    } else {
      return maybeResult;
    }
  });
}

module.exports = {
  DeleteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/FindByIdOperation.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/FindByIdOperation.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class FindByIdOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.id = null;
  }

  onAdd(builder, args) {
    this.id = args[0];
    return super.onAdd(builder, args);
  }

  onBuild(builder) {
    builder.whereComposite(builder.fullIdColumn(), this.id);
  }

  clone() {
    const clone = super.clone();
    clone.id = this.id;
    return clone;
  }
}

module.exports = {
  FindByIdOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/FindByIdsOperation.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/FindByIdsOperation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class FindByIdsOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.ids = null;
  }

  onAdd(builder, args) {
    this.ids = args[0];
    return super.onAdd(builder, args);
  }

  onBuild(builder) {
    builder.whereInComposite(builder.fullIdColumn(), this.ids);
  }

  clone() {
    const clone = super.clone();
    clone.ids = this.ids;
    return clone;
  }
}

module.exports = {
  FindByIdsOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/FindOperation.js":
/*!******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/FindOperation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { StaticHookArguments } = __webpack_require__(/*! ../StaticHookArguments */ "../node_modules/objection/lib/queryBuilder/StaticHookArguments.js");
const { isPromise, after, afterReturn } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { isObject } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class FindOperation extends QueryBuilderOperation {
  onBefore2(builder, result) {
    return afterReturn(callStaticBeforeFind(builder), result);
  }

  onAfter3(builder, results) {
    const opt = builder.findOptions();

    if (opt.dontCallFindHooks) {
      return results;
    } else {
      return callAfterFind(builder, results);
    }
  }
}

function callStaticBeforeFind(builder) {
  const args = StaticHookArguments.create({ builder });
  return builder.modelClass().beforeFind(args);
}

function callAfterFind(builder, result) {
  const opt = builder.findOptions();
  const maybePromise = callInstanceAfterFind(builder.context(), result, opt.callAfterFindDeeply);

  return after(maybePromise, () => callStaticAfterFind(builder, result));
}

function callStaticAfterFind(builder, result) {
  const args = StaticHookArguments.create({ builder, result });
  const maybePromise = builder.modelClass().afterFind(args);

  return after(maybePromise, maybeResult => {
    if (maybeResult === undefined) {
      return result;
    } else {
      return maybeResult;
    }
  });
}

function callInstanceAfterFind(ctx, results, deep) {
  if (Array.isArray(results)) {
    if (results.length === 1) {
      return callAfterFindForOne(ctx, results[0], results, deep);
    } else {
      return callAfterFindArray(ctx, results, deep);
    }
  } else {
    return callAfterFindForOne(ctx, results, results, deep);
  }
}

function callAfterFindArray(ctx, results, deep) {
  if (results.length === 0 || !isObject(results[0])) {
    return results;
  }

  const mapped = new Array(results.length);
  let containsPromise = false;

  for (let i = 0, l = results.length; i < l; ++i) {
    mapped[i] = callAfterFindForOne(ctx, results[i], results[i], deep);

    if (isPromise(mapped[i])) {
      containsPromise = true;
    }
  }

  if (containsPromise) {
    return Promise.all(mapped);
  } else {
    return mapped;
  }
}

function callAfterFindForOne(ctx, model, result, deep) {
  if (!isObject(model) || !model.$isObjectionModel) {
    return result;
  }

  if (deep) {
    const results = [];
    const containsPromise = callAfterFindForRelations(ctx, model, results);

    if (containsPromise) {
      return Promise.all(results).then(() => {
        return doCallAfterFind(ctx, model, result);
      });
    } else {
      return doCallAfterFind(ctx, model, result);
    }
  } else {
    return doCallAfterFind(ctx, model, result);
  }
}

function callAfterFindForRelations(ctx, model, results) {
  const keys = Object.keys(model);
  let containsPromise = false;

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];
    const value = model[key];

    if (isRelation(value)) {
      const maybePromise = callInstanceAfterFind(ctx, value, true);

      if (isPromise(maybePromise)) {
        containsPromise = true;
      }

      results.push(maybePromise);
    }
  }

  return containsPromise;
}

function isRelation(value) {
  return (
    (isObject(value) && value.$isObjectionModel) ||
    (isNonEmptyObjectArray(value) && value[0].$isObjectionModel)
  );
}

function isNonEmptyObjectArray(value) {
  return Array.isArray(value) && value.length > 0 && isObject(value[0]);
}

function doCallAfterFind(ctx, model, result) {
  const afterFind = getAfterFindHook(model);

  if (afterFind !== null) {
    const maybePromise = afterFind.call(model, ctx);

    if (isPromise(maybePromise)) {
      return maybePromise.then(() => result);
    } else {
      return result;
    }
  } else {
    return result;
  }
}

function getAfterFindHook(model) {
  if (model.$afterFind !== model.$objectionModelClass.prototype.$afterFind) {
    return model.$afterFind;
  } else if (model.$afterGet !== model.$objectionModelClass.prototype.$afterGet) {
    return model.$afterGet;
  } else {
    return null;
  }
}

module.exports = {
  FindOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/FirstOperation.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/FirstOperation.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class FirstOperation extends QueryBuilderOperation {
  onBuildKnex(knexBuilder, builder) {
    const modelClass = builder.modelClass();

    if (builder.isFind() && modelClass.useLimitInFirst) {
      knexBuilder.limit(1);
    }
  }

  onAfter3(_, result) {
    if (Array.isArray(result)) {
      return result[0];
    } else {
      return result;
    }
  }
}

module.exports = {
  FirstOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/FromOperation.js":
/*!******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/FromOperation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ./ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");
const { isPlainObject, isString } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

const ALIAS_REGEX = /\s+as\s+/i;

// FromOperation corresponds to a `.from(args)` call. The call is delegated to
// knex, but we first try to parse the arguments so that we can determine which
// tables have been mentioned in a query's from clause. We only parse string
// references and not `raw` or `ref` etc. references at this point thouhg.
class FromOperation extends ObjectionToKnexConvertingOperation {
  constructor(name, opt) {
    super(name, opt);

    this.table = null;
    this.alias = null;
  }

  onAdd(builder, args) {
    const ret = super.onAdd(builder, args);
    const parsed = parseTableAndAlias(this.args[0], builder);

    if (parsed.table) {
      builder.tableName(parsed.table);
      this.table = parsed.table;
    }

    if (parsed.alias) {
      builder.aliasFor(builder.modelClass().getTableName(), parsed.alias);
      this.alias = parsed.alias;
    }

    return ret;
  }

  onBuildKnex(knexBuilder, builder) {
    // Simply call knex's from method with the converted arguments.
    knexBuilder.from.apply(knexBuilder, this.getKnexArgs(builder));
  }

  clone() {
    const clone = super.clone();

    clone.table = this.table;
    clone.alias = this.alias;

    return clone;
  }
}

function parseTableAndAlias(arg, builder) {
  if (isString(arg)) {
    return parseTableAndAliasFromString(arg);
  } else if (isPlainObject(arg)) {
    return parseTableAndAliasFromObject(arg, builder);
  } else {
    // Could not parse table and alias from the arguments.
    return {
      table: null,
      alias: null
    };
  }
}

function parseTableAndAliasFromString(arg) {
  if (ALIAS_REGEX.test(arg)) {
    const parts = arg.split(ALIAS_REGEX);

    return {
      table: parts[0].trim(),
      alias: parts[1].trim()
    };
  } else {
    return {
      table: arg.trim(),
      alias: null
    };
  }
}

function parseTableAndAliasFromObject(arg, builder) {
  for (const alias of Object.keys(arg)) {
    const table = arg[alias].trim();

    if (table === builder.modelClass().getTableName()) {
      return {
        alias,
        table
      };
    }
  }

  throw new Error(
    `one of the tables in ${JSON.stringify(arg)} must be the query's model class's table.`
  );
}

module.exports = {
  FromOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InsertAndFetchOperation.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InsertAndFetchOperation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { InsertOperation } = __webpack_require__(/*! ./InsertOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js");
const { DelegateOperation } = __webpack_require__(/*! ./DelegateOperation */ "../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js");
const { keyByProps } = __webpack_require__(/*! ../../model/modelUtils */ "../node_modules/objection/lib/model/modelUtils.js");
const { asArray } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { after } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class InsertAndFetchOperation extends DelegateOperation {
  constructor(name, opt) {
    super(name, opt);

    if (!this.delegate.is(InsertOperation)) {
      throw new Error('Invalid delegate');
    }
  }

  onAfter2(builder, inserted) {
    const modelClass = builder.modelClass();
    const maybePromise = super.onAfter2(builder, inserted);

    return after(maybePromise, insertedModels => {
      const insertedModelArray = asArray(insertedModels);
      const idProps = modelClass.getIdPropertyArray();
      const ids = insertedModelArray.map(model => model.$id());

      return modelClass
        .query()
        .childQueryOf(builder)
        .findByIds(ids)
        .castTo(builder.resultModelClass())
        .then(fetchedModels => {
          const modelsById = keyByProps(fetchedModels, idProps);

          // Instead of returning the freshly fetched models, update the input
          // models with the fresh values.
          insertedModelArray.forEach(insertedModel => {
            insertedModel.$set(modelsById.get(insertedModel.$propKey(idProps)));
          });

          return insertedModels;
        });
    });
  }
}

module.exports = {
  InsertAndFetchOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InsertGraphAndFetchOperation.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InsertGraphAndFetchOperation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DelegateOperation } = __webpack_require__(/*! ./DelegateOperation */ "../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js");
const { InsertGraphOperation } = __webpack_require__(/*! ./InsertGraphOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertGraphOperation.js");
const { RelationExpression } = __webpack_require__(/*! ../RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");

class InsertGraphAndFetchOperation extends DelegateOperation {
  constructor(name, opt) {
    super(name, opt);

    if (!this.delegate.is(InsertGraphOperation)) {
      throw new Error('Invalid delegate');
    }
  }

  get models() {
    return this.delegate.models;
  }

  get isArray() {
    return this.delegate.isArray;
  }

  onAfter2(builder) {
    if (this.models.length === 0) {
      return this.isArray ? [] : null;
    }

    const eager = RelationExpression.fromModelGraph(this.models);
    const modelClass = this.models[0].constructor;
    const ids = this.models.map(model => model.$id());

    return modelClass
      .query()
      .childQueryOf(builder)
      .findByIds(ids)
      .eager(eager)
      .then(models => {
        return this.isArray ? models : models[0] || null;
      });
  }
}

module.exports = {
  InsertGraphAndFetchOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InsertGraphOperation.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InsertGraphOperation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DelegateOperation } = __webpack_require__(/*! ./DelegateOperation */ "../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js");
const { InsertOperation } = __webpack_require__(/*! ./InsertOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js");
const { GraphUpsert } = __webpack_require__(/*! ../graph/GraphUpsert */ "../node_modules/objection/lib/queryBuilder/graph/GraphUpsert.js");

class InsertGraphOperation extends DelegateOperation {
  constructor(name, opt = null) {
    super(name, opt);

    if (!this.delegate.is(InsertOperation)) {
      throw new Error('Invalid delegate');
    }

    Object.assign(this.delegate.modelOptions, GraphUpsert.modelOptions);
    this.upsertOptions = opt.opt || {};
    this.upsert = null;
  }

  get models() {
    return this.delegate.models;
  }

  get isArray() {
    return this.delegate.isArray;
  }

  onAdd(builder, args) {
    const retVal = super.onAdd(builder, args);

    this.upsert = new GraphUpsert({
      objects: this.models,
      rootModelClass: builder.modelClass(),

      upsertOptions: Object.assign({}, this.upsertOptions, {
        noUpdate: true,
        noDelete: true,
        noUnrelate: true,
        insertMissing: true
      })
    });

    // We resolve this query here and will not execute it. This is because the root
    // value may depend on other models in the graph and cannot be inserted first.
    builder.resolve([]);

    return retVal;
  }

  onBefore1() {
    // Do nothing.
  }

  onBefore2() {
    // Do nothing. We override this with empty implementation so that
    // the $beforeInsert() hooks are not called twice for the root models.
  }

  onBefore3() {
    // Do nothing.
  }

  onBuild() {
    // Do nothing.
  }

  onBuildKnex() {
    // Do nothing.
  }

  // We overrode all other hooks but this one and do all the work in here.
  // This is a bit hacky.
  onAfter1(builder, ...restArgs) {
    return this.upsert.run(builder).then(() => super.onAfter1(builder, ...restArgs));
  }

  onAfter2() {
    // We override this with empty implementation so that the $afterInsert() hooks
    // are not called twice for the root models.
    return this.isArray ? this.models : this.models[0] || null;
  }

  clone() {
    const clone = super.clone();
    clone.upsert = this.upsert;
    return clone;
  }
}

module.exports = {
  InsertGraphOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js":
/*!********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { StaticHookArguments } = __webpack_require__(/*! ../StaticHookArguments */ "../node_modules/objection/lib/queryBuilder/StaticHookArguments.js");
const { after, mapAfterAllReturn, afterReturn } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { isPostgres, isSqlite, isMySql } = __webpack_require__(/*! ../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const { isObject } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

// Base class for all insert operations.
class InsertOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);

    this.models = null;
    this.isArray = false;
    this.modelOptions = Object.assign({}, this.opt.modelOptions || {});
  }

  onAdd(builder, args) {
    const json = args[0];
    const modelClass = builder.modelClass();

    this.isArray = Array.isArray(json);
    this.models = modelClass.ensureModelArray(json, this.modelOptions);

    return true;
  }

  onBefore2(builder, result) {
    if (this.models.length > 1 && !isPostgres(builder.knex())) {
      throw new Error('batch insert only works with Postgresql');
    } else {
      const maybePromise = callBeforeInsert(builder, this.models);
      return afterReturn(maybePromise, result);
    }
  }

  onBuildKnex(knexBuilder, builder) {
    if (!isSqlite(builder.knex()) && !isMySql(builder.knex()) && !builder.has(/returning/)) {
      // If the user hasn't specified a `returning` clause, we make sure
      // that at least the identifier is returned.
      knexBuilder.returning(builder.modelClass().getIdColumn());
    }

    knexBuilder.insert(this.models.map(model => model.$toDatabaseJson(builder)));
  }

  onAfter1(_, ret) {
    if (!Array.isArray(ret) || !ret.length || ret === this.models) {
      // Early exit if there is nothing to do.
      return this.models;
    }

    if (isObject(ret[0])) {
      // If the user specified a `returning` clause the result may be an array of objects.
      // Merge all values of the objects to our models.
      for (let i = 0, l = this.models.length; i < l; ++i) {
        this.models[i].$set(ret[i]);
      }
    } else {
      // If the return value is not an array of objects, we assume it is an array of identifiers.
      for (let i = 0, l = this.models.length; i < l; ++i) {
        const model = this.models[i];

        // Don't set the id if the model already has one. MySQL and Sqlite don't return the correct
        // primary key value if the id is not generated in db, but given explicitly.
        if (!model.$id()) {
          model.$id(ret[i]);
        }
      }
    }

    return this.models;
  }

  onAfter2(builder, models) {
    const result = this.isArray ? models : models[0] || null;
    return callAfterInsert(builder, this.models, result);
  }

  clone() {
    const clone = super.clone();

    clone.models = this.models;
    clone.isArray = this.isArray;

    return clone;
  }
}

function callBeforeInsert(builder, models) {
  const maybePromise = callInstanceBeforeInsert(builder, models);
  return after(maybePromise, () => callStaticBeforeInsert(builder));
}

function callInstanceBeforeInsert(builder, models) {
  return mapAfterAllReturn(models, model => model.$beforeInsert(builder.context()), models);
}

function callStaticBeforeInsert(builder) {
  const args = StaticHookArguments.create({ builder });
  return builder.modelClass().beforeInsert(args);
}

function callAfterInsert(builder, models, result) {
  const maybePromise = callInstanceAfterInsert(builder, models);
  return after(maybePromise, () => callStaticAfterInsert(builder, result));
}

function callInstanceAfterInsert(builder, models) {
  return mapAfterAllReturn(models, model => model.$afterInsert(builder.context()), models);
}

function callStaticAfterInsert(builder, result) {
  const args = StaticHookArguments.create({ builder, result });
  const maybePromise = builder.modelClass().afterInsert(args);

  return after(maybePromise, maybeResult => {
    if (maybeResult === undefined) {
      return result;
    } else {
      return maybeResult;
    }
  });
}

module.exports = {
  InsertOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InstanceDeleteOperation.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InstanceDeleteOperation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DeleteOperation } = __webpack_require__(/*! ./DeleteOperation */ "../node_modules/objection/lib/queryBuilder/operations/DeleteOperation.js");
const { assertHasId } = __webpack_require__(/*! ../../utils/assert */ "../node_modules/objection/lib/utils/assert.js");
const { afterReturn, after } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class InstanceDeleteOperation extends DeleteOperation {
  constructor(name, opt) {
    super(name, opt);
    this.instance = opt.instance;
  }

  onBefore2(builder, result) {
    let maybePromise = this.instance.$beforeDelete(builder.context());
    maybePromise = after(maybePromise, () => super.onBefore2(builder, result));
    return afterReturn(maybePromise, result);
  }

  onBuild(builder) {
    super.onBuild(builder);

    assertHasId(this.instance);
    builder.findById(this.instance.$id());
  }

  onAfter2(builder, result) {
    // The result may be an object if `returning` was used.
    if (Array.isArray(result)) {
      result = result[0];
    }

    const maybePromise = this.instance.$afterDelete(builder.context());
    return after(maybePromise, () => super.onAfter2(builder, result));
  }
}

module.exports = {
  InstanceDeleteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InstanceFindOperation.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InstanceFindOperation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { FindOperation } = __webpack_require__(/*! ./FindOperation */ "../node_modules/objection/lib/queryBuilder/operations/FindOperation.js");
const { assertHasId } = __webpack_require__(/*! ../../utils/assert */ "../node_modules/objection/lib/utils/assert.js");

class InstanceFindOperation extends FindOperation {
  constructor(name, opt) {
    super(name, opt);
    this.instance = opt.instance;
  }

  onBuild(builder) {
    assertHasId(this.instance);
    builder.findById(this.instance.$id());
  }
}

module.exports = {
  InstanceFindOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InstanceInsertOperation.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InstanceInsertOperation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { InsertOperation } = __webpack_require__(/*! ./InsertOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js");

class InstanceInsertOperation extends InsertOperation {
  constructor(name, opt) {
    super(name, opt);
    this.instance = opt.instance;
  }

  onAdd(builder, args) {
    if (!args || args.length === 0) {
      args = [this.instance];
    } else {
      args[0] = this.instance;
    }

    return super.onAdd(builder, args);
  }
}

module.exports = {
  InstanceInsertOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/InstanceUpdateOperation.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/InstanceUpdateOperation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { UpdateOperation } = __webpack_require__(/*! ./UpdateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js");
const { assertHasId } = __webpack_require__(/*! ../../utils/assert */ "../node_modules/objection/lib/utils/assert.js");
const { isObject } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { after } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class InstanceUpdateOperation extends UpdateOperation {
  constructor(name, opt) {
    super(name, opt);

    this.instance = opt.instance;
    this.modelOptions.old = opt.instance;
  }

  onAdd(builder, args) {
    const retVal = super.onAdd(builder, args);

    if (!this.model) {
      this.model = this.instance;
    }

    return retVal;
  }

  onBuild(builder) {
    super.onBuild(builder);

    assertHasId(this.instance);
    builder.findById(this.instance.$id());
  }

  onAfter2(builder, result) {
    // The result may be an object if `returning` was used.
    if (Array.isArray(result)) {
      result = result[0];
    }

    const maybePromise = super.onAfter2(builder, result);

    return after(maybePromise, result => {
      this.instance.$set(this.model);

      if (isObject(result)) {
        this.instance.$set(result);
      }

      return result;
    });
  }
}

module.exports = {
  InstanceUpdateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/JoinRelationOperation.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/JoinRelationOperation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { RelationExpression } = __webpack_require__(/*! ../RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");
const { RelationJoiner } = __webpack_require__(/*! ../join/RelationJoiner */ "../node_modules/objection/lib/queryBuilder/join/RelationJoiner.js");
const { isString } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class JoinRelationOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.calls = [];
  }

  get joinOperation() {
    return this.opt.joinOperation;
  }

  addCall(call) {
    this.calls.push(call);
  }

  onBuild(builder) {
    const modelClass = builder.modelClass();
    const joinOperation = this.joinOperation;
    let mergedExpr = RelationExpression.create();

    for (const call of this.calls) {
      const expr = RelationExpression.create(call.expression).toPojo();
      const childNames = expr.$childNames;
      const options = call.options || {};

      if (childNames.length === 1) {
        applyAlias(expr, modelClass, builder, options);
      }

      if (options.aliases) {
        applyAliases(expr, modelClass, options);
      }

      mergedExpr = mergedExpr.merge(expr);
    }

    const joiner = new RelationJoiner({
      modelClass
    });

    joiner.setOptions({ joinOperation });
    joiner.setExpression(mergedExpr);
    joiner.build(builder, false);
  }

  clone() {
    const clone = super.clone();
    clone.calls = this.calls.slice();
    return clone;
  }
}

function applyAlias(expr, modelClass, builder, options) {
  const childNames = expr.$childNames;
  const childName = childNames[0];
  const childExpr = expr[childName];
  const relation = modelClass.getRelation(childExpr.$relation);

  let alias = childName;

  if (options.alias === false) {
    alias = builder.tableRefFor(relation.relatedModelClass.getTableName());
  } else if (isString(options.alias)) {
    alias = options.alias;
  }

  if (childName !== alias) {
    renameRelationExpressionNode(expr, childName, alias);
  }
}

function applyAliases(expr, modelClass, options) {
  for (const childName of expr.$childNames) {
    const childExpr = expr[childName];
    const relation = modelClass.getRelation(childExpr.$relation);
    const alias = options.aliases[childExpr.$relation];

    if (alias && alias !== childName) {
      renameRelationExpressionNode(expr, childName, alias);
    }

    applyAliases(childExpr, relation.relatedModelClass, options);
  }
}

function renameRelationExpressionNode(expr, oldName, newName) {
  const childExpr = expr[oldName];
  delete expr[oldName];
  expr[newName] = childExpr;
  childExpr.$name = newName;
  expr.$childNames = expr.$childNames.map(it => (it === oldName ? newName : it));
}

module.exports = {
  JoinRelationOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/KnexOperation.js":
/*!******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/KnexOperation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ./ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");

// An operation that simply calls the equivalent knex method.
class KnexOperation extends ObjectionToKnexConvertingOperation {
  onBuildKnex(knexBuilder, builder) {
    knexBuilder[this.name].apply(knexBuilder, this.getKnexArgs(builder));
  }
}

module.exports = {
  KnexOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { isPlainObject, isObject, isFunction, once } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { isKnexQueryBuilder, isKnexJoinBuilder } = __webpack_require__(/*! ../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const getJoinBuilder = once(() => __webpack_require__(/*! ../JoinBuilder */ "../node_modules/objection/lib/queryBuilder/JoinBuilder.js").JoinBuilder);

// An abstract operation base class that converts all arguments from objection types
// to knex types. For example objection query builders are converted into knex query
// builders and objection RawBuilder instances are converted into knex Raw instances.
class ObjectionToKnexConvertingOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.args = null;
  }

  getKnexArgs(builder) {
    return convertArgs(this.name, builder, this.args);
  }

  onAdd(builder, args) {
    this.args = Array.from(args);
    return shouldBeAdded(this.name, builder, this.args);
  }

  clone() {
    const clone = super.clone();
    clone.args = this.args;
    return clone;
  }
}

function shouldBeAdded(opName, builder, args) {
  const skipUndefined = builder.internalOptions().skipUndefined;

  for (let i = 0, l = args.length; i < l; ++i) {
    const arg = args[i];

    if (isUndefined(arg)) {
      if (skipUndefined) {
        return false;
      } else {
        throw new Error(
          `undefined passed as argument #${i} for '${opName}' operation. Call skipUndefined() method to ignore the undefined values.`
        );
      }
    }
  }

  return true;
}

function convertArgs(opName, builder, args) {
  const skipUndefined = builder.internalOptions().skipUndefined;

  return args.map((arg, i) => {
    if (hasToKnexRawMethod(arg)) {
      return convertToKnexRaw(arg, builder);
    } else if (isObjectionQueryBuilderBase(arg)) {
      return convertQueryBuilderBase(arg, builder);
    } else if (isArray(arg)) {
      return convertArray(arg, builder, i, opName, skipUndefined);
    } else if (isFunction(arg)) {
      return convertFunction(arg, builder);
    } else if (isModel(arg)) {
      return convertModel(arg);
    } else if (isPlainObject(arg)) {
      return convertPlainObject(arg, builder, i, opName, skipUndefined);
    } else {
      return arg;
    }
  });
}

function isUndefined(item) {
  return item === undefined;
}

function hasToKnexRawMethod(item) {
  return isObject(item) && isFunction(item.toKnexRaw);
}

function convertToKnexRaw(item, builder) {
  return item.toKnexRaw(builder);
}

function isObjectionQueryBuilderBase(item) {
  return isObject(item) && item.isObjectionQueryBuilderBase === true;
}

function convertQueryBuilderBase(item, builder) {
  return item.subqueryOf(builder).toKnexQuery();
}

function isArray(item) {
  return Array.isArray(item);
}

function convertArray(arr, builder, i, opName, skipUndefined) {
  return arr.map(item => {
    if (item === undefined) {
      if (!skipUndefined) {
        throw new Error(
          `undefined passed as an item in argument #${i} for '${opName}' operation. Call skipUndefined() method to ignore the undefined values.`
        );
      }
    } else if (hasToKnexRawMethod(item)) {
      return convertToKnexRaw(item, builder);
    } else if (isObjectionQueryBuilderBase(item)) {
      return convertQueryBuilderBase(item);
    } else {
      return item;
    }
  });
}

function convertFunction(func, builder) {
  return function convertedKnexArgumentFunction(...args) {
    if (isKnexQueryBuilder(this)) {
      convertQueryBuilderFunction(this, func, builder);
    } else if (isKnexJoinBuilder(this)) {
      convertJoinBuilderFunction(this, func, builder);
    } else {
      return func.apply(this, args);
    }
  };
}

function convertQueryBuilderFunction(knexQueryBuilder, func, builder) {
  const convertedQueryBuilder = builder.constructor.forClass(builder.modelClass());

  convertedQueryBuilder.subqueryOf(builder).isPartial(true);
  func.call(convertedQueryBuilder, convertedQueryBuilder);

  convertedQueryBuilder.toKnexQuery(knexQueryBuilder);
}

function convertJoinBuilderFunction(knexJoinBuilder, func, builder) {
  const JoinBuilder = getJoinBuilder();
  const joinClauseBuilder = JoinBuilder.forClass(builder.modelClass());

  joinClauseBuilder.subqueryOf(builder).isPartial(true);
  func.call(joinClauseBuilder, joinClauseBuilder);

  joinClauseBuilder.toKnexQuery(knexJoinBuilder);
}

function isModel(item) {
  return isObject(item) && item.$isObjectionModel;
}

function convertModel(model) {
  return model.$toDatabaseJson();
}

function convertPlainObject(obj, builder, i, opName, skipUndefined) {
  return Object.keys(obj).reduce((out, key) => {
    const item = obj[key];

    if (item === undefined) {
      if (!skipUndefined) {
        throw new Error(
          `undefined passed as a property in argument #${i} for '${opName}' operation. Call skipUndefined() method to ignore the undefined values.`
        );
      }
    } else if (hasToKnexRawMethod(item)) {
      out[key] = convertToKnexRaw(item, builder);
    } else if (isObjectionQueryBuilderBase(item)) {
      out[key] = convertQueryBuilderBase(item, builder);
    } else {
      out[key] = item;
    }

    return out;
  }, {});
}

module.exports = {
  ObjectionToKnexConvertingOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/OnBuildKnexOperation.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/OnBuildKnexOperation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class OnBuildKnexOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.func = null;
  }

  onAdd(_, args) {
    this.func = args[0];
    return true;
  }

  onBuildKnex(knexBuilder, builder) {
    return this.func.call(knexBuilder, knexBuilder, builder);
  }

  clone() {
    const clone = super.clone();
    clone.func = this.func;
    return clone;
  }
}

module.exports = {
  OnBuildKnexOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/OnBuildOperation.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/OnBuildOperation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class OnBuildOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.func = null;
  }

  onAdd(_, args) {
    this.func = args[0];
    return true;
  }

  onBuild(builder) {
    return this.func.call(builder, builder);
  }

  clone() {
    const clone = super.clone();
    clone.func = this.func;
    return clone;
  }
}

module.exports = {
  OnBuildOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/OnErrorOperation.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/OnErrorOperation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class OnErrorOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.func = null;
  }

  onAdd(_, args) {
    this.func = args[0];
    return true;
  }

  onError(builder, error) {
    return this.func.call(builder, error, builder);
  }

  clone() {
    const clone = super.clone();
    clone.func = this.func;
    return clone;
  }
}

module.exports = {
  OnErrorOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const hookNameToHasMethodName = {
  onAdd: 'hasOnAdd',
  onBefore1: 'hasOnBefore1',
  onBefore2: 'hasOnBefore2',
  onBefore3: 'hasOnBefore3',
  onBuild: 'hasOnBuild',
  onBuildKnex: 'hasOnBuildKnex',
  onRawResult: 'hasOnRawResult',
  queryExecutor: 'hasQueryExecutor',
  onAfter1: 'hasOnAfter1',
  onAfter2: 'hasOnAfter2',
  onAfter3: 'hasOnAfter3',
  onError: 'hasOnError'
};

// An abstract base class for all query builder operations. QueryBuilderOperations almost always
// correspond to a single query builder method call. For example SelectOperation could be added when
// a `select` method is called.
//
// QueryBuilderOperation is just a bunch of query execution lifecycle hooks that subclasses
// can (but don't have to) implement.
//
// Basically a query builder is nothing but an array of QueryBuilderOperations. When the query is
// executed the hooks are called in the order explained below. The hooks are called so that a
// certain hook is called for _all_ operations before the next hook is called. For example if
// a builder has 5 operations, onBefore1 hook is called for each of them (and their results are awaited)
// before onBefore2 hook is called for any of the operations.
class QueryBuilderOperation {
  constructor(name = null, opt = {}) {
    this.name = name;
    this.opt = opt;

    // From which hook was this operation added as a child
    // operation.
    this.adderHookName = null;

    // The parent operation that added this operation.
    this.parentOperation = null;

    // Operations this operation added in any of its hooks.
    this.childOperations = [];
  }

  is(OperationClass) {
    return this instanceof OperationClass;
  }

  hasHook(hookName) {
    return this[hookNameToHasMethodName[hookName]]();
  }

  // This is called immediately when a query builder method is called.
  //
  // This method must be synchronous.
  // This method should never call any methods that add operations to the builder.
  onAdd(builder, args) {
    return true;
  }
  hasOnAdd() {
    return true;
  }

  // This is called as the first thing when the query is executed but before
  // the actual database operation (knex query) is executed.
  //
  // This method can be asynchronous.
  // You may call methods that add operations to to the builder.
  onBefore1(builder, result) {}
  hasOnBefore1() {
    return this.onBefore1 !== QueryBuilderOperation.prototype.onBefore1;
  }

  // This is called as the second thing when the query is executed but before
  // the actual database operation (knex query) is executed.
  //
  // This method can be asynchronous.
  // You may call methods that add operations to to the builder.
  onBefore2(builder, result) {}
  hasOnBefore2() {
    return this.onBefore2 !== QueryBuilderOperation.prototype.onBefore2;
  }

  // This is called as the third thing when the query is executed but before
  // the actual database operation (knex query) is executed.
  //
  // This method can be asynchronous.
  // You may call methods that add operations to to the builder.
  onBefore3(builder, result) {}
  hasOnBefore3() {
    return this.onBefore3 !== QueryBuilderOperation.prototype.onBefore3;
  }

  // This is called as the last thing when the query is executed but before
  // the actual database operation (knex query) is executed. If your operation
  // needs to call other query building operations (methods that add QueryBuilderOperations)
  // this is the best and last place to do it.
  //
  // This method must be synchronous.
  // You may call methods that add operations to to the builder.
  onBuild(builder) {}
  hasOnBuild() {
    return this.onBuild !== QueryBuilderOperation.prototype.onBuild;
  }

  // This is called when the knex query is built. Here you should only call knex
  // methods. You may call getters and other immutable methods of the `builder`
  // but you should never call methods that add QueryBuilderOperations.
  //
  // This method must be synchronous.
  // This method should never call any methods that add operations to the builder.
  onBuildKnex(knexBuilder, builder) {}
  hasOnBuildKnex() {
    return this.onBuildKnex !== QueryBuilderOperation.prototype.onBuildKnex;
  }

  // The raw knex result is passed to this method right after the database query
  // has finished. This method may modify it and return the modified rows. The
  // rows are automatically converted to models (if possible) after this hook
  // is called.
  //
  // This method can be asynchronous.
  onRawResult(builder, rows) {
    return rows;
  }
  hasOnRawResult() {
    return this.onRawResult !== QueryBuilderOperation.prototype.onRawResult;
  }

  // This is called as the first thing after the query has been executed and
  // rows have been converted to model instances.
  //
  // This method can be asynchronous.
  onAfter1(builder, result) {
    return result;
  }
  hasOnAfter1() {
    return this.onAfter1 !== QueryBuilderOperation.prototype.onAfter1;
  }

  // This is called as the second thing after the query has been executed and
  // rows have been converted to model instances.
  //
  // This method can be asynchronous.
  onAfter2(builder, result) {
    return result;
  }
  hasOnAfter2() {
    return this.onAfter2 !== QueryBuilderOperation.prototype.onAfter2;
  }

  // This is called as the third thing after the query has been executed and
  // rows have been converted to model instances.
  //
  // This method can be asynchronous.
  onAfter3(builder, result) {
    return result;
  }
  hasOnAfter3() {
    return this.onAfter3 !== QueryBuilderOperation.prototype.onAfter3;
  }

  // This method can be implemented to return another operation that will replace
  // this one. This method is called after all `onBeforeX` and `onBuildX` hooks
  // but before the database query is executed.
  //
  // This method must return a QueryBuilder instance.
  queryExecutor(builder) {}
  hasQueryExecutor() {
    return this.queryExecutor !== QueryBuilderOperation.prototype.queryExecutor;
  }

  // This is called if an error occurs in the query execution.
  //
  // This method must return a QueryBuilder instance.
  onError(builder, error) {}
  hasOnError() {
    return this.onError !== QueryBuilderOperation.prototype.onError;
  }

  // Given a set of operations, returns true if any of this operation's
  // ancestor operations are included in the set.
  isAncestorInSet(operationSet) {
    let ancestor = this.parentOperation;

    while (ancestor) {
      if (operationSet.has(ancestor)) {
        return true;
      }

      ancestor = ancestor.parentOperation;
    }

    return false;
  }

  // Takes a deep clone of this operation.
  clone() {
    const clone = new this.constructor(this.name, this.opt);

    clone.adderHookName = this.adderHookName;
    clone.parentOperation = this.parentOperation;

    clone.childOperations = this.childOperations.map(childOp => {
      const childOpClone = childOp.clone();

      childOpClone.parentOperation = clone;
      return childOpClone;
    });

    return clone;
  }

  // Add an operation as a child operation. `hookName` must be the
  // name of the parent operation's hook that called this method.
  addChildOperation(hookName, operation) {
    operation.adderHookName = hookName;
    operation.parentOperation = this;

    this.childOperations.push(operation);
  }

  // Removes a single child operation.
  removeChildOperation(operation) {
    const index = this.childOperations.indexOf(operation);

    if (index !== -1) {
      operation.parentOperation = null;
      this.childOperations.splice(index, 1);
    }
  }

  // Removes all child operations that were added from the `hookName` hook.
  removeChildOperationsByHookName(hookName) {
    this.childOperations = this.childOperations.filter(op => op.adderHookName !== hookName);
  }

  // Iterates through all descendant operations recursively.
  forEachDescendantOperation(callback) {
    for (const operation of this.childOperations) {
      if (callback(operation) === false) {
        return false;
      }

      if (operation.forEachDescendantOperation(callback) === false) {
        return false;
      }
    }

    return true;
  }
}

module.exports = {
  QueryBuilderOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/RangeOperation.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/RangeOperation.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class RangeOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.resultSizeBuilder = null;
  }

  onAdd(builder, args) {
    if (args.length === 2) {
      const start = args[0];
      const end = args[1];

      // Need to set these here instead of `onBuildKnex` so that they
      // don't end up in the resultSize query.
      builder.limit(end - start + 1).offset(start);
    }

    return true;
  }

  onBefore1(builder, result) {
    this.resultSizeBuilder = builder.clone();
    return super.onBefore1(builder, result);
  }

  onAfter3(_, results) {
    return this.resultSizeBuilder.resultSize().then(resultSize => {
      return {
        results,
        total: parseInt(resultSize, 10)
      };
    });
  }

  clone() {
    const clone = super.clone();
    clone.resultSizeBuilder = this.resultSizeBuilder;
    return clone;
  }
}

module.exports = {
  RangeOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/RelateOperation.js":
/*!********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/RelateOperation.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class RelateOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
    this.input = null;
    this.ids = null;
  }

  clone() {
    const clone = super.clone();

    clone.input = this.input;
    clone.ids = this.ids;

    return clone;
  }
}

module.exports = {
  RelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/ReturningOperation.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/ReturningOperation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { flatten } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ./ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");

// This class's only purpose is to normalize the arguments into an array.
//
// In knex, if a single column is given to `returning` it returns an array with the that column's value
// in it. If an array is given with a one item inside, the return value is an object.
class ReturningOperation extends ObjectionToKnexConvertingOperation {
  onAdd(builder, args) {
    args = flatten(args);

    // Don't add an empty returning list.
    if (args.length === 0) {
      return false;
    }

    return super.onAdd(builder, args);
  }

  onBuildKnex(knexBuilder, builder) {
    // Always pass an array of columns to knex.returning.
    knexBuilder.returning(this.getKnexArgs(builder));
  }
}

module.exports = {
  ReturningOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/RunAfterOperation.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/RunAfterOperation.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class RunAfterOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.func = null;
  }

  onAdd(_, args) {
    this.func = args[0];
    return true;
  }

  onAfter3(builder, result) {
    return this.func.call(builder, result, builder);
  }

  clone() {
    const clone = super.clone();
    clone.func = this.func;
    return clone;
  }
}

module.exports = {
  RunAfterOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/RunBeforeOperation.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/RunBeforeOperation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class RunBeforeOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.func = null;
  }

  onAdd(_, args) {
    this.func = args[0];
    return true;
  }

  onBefore1(builder, result) {
    return this.func.call(builder, result, builder);
  }

  clone() {
    const clone = super.clone();
    clone.func = this.func;
    return clone;
  }
}

module.exports = {
  RunBeforeOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/UnrelateOperation.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/UnrelateOperation.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class UnrelateOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
    this.ids = null;
  }

  clone() {
    const clone = super.clone();
    clone.ids = this.ids;
    return clone;
  }
}

module.exports = {
  UnrelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/UpdateAndFetchOperation.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/UpdateAndFetchOperation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DelegateOperation } = __webpack_require__(/*! ./DelegateOperation */ "../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js");
const { UpdateOperation } = __webpack_require__(/*! ./UpdateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js");
const { afterReturn } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class UpdateAndFetchOperation extends DelegateOperation {
  constructor(name, opt) {
    super(name, opt);

    if (!this.delegate.is(UpdateOperation)) {
      throw new Error('Invalid delegate');
    }

    this.id = null;
    this.skipIdWhere = false;
  }

  get model() {
    return this.delegate.model;
  }

  onAdd(builder, args) {
    this.id = args[0];
    return this.delegate.onAdd(builder, args.slice(1));
  }

  onBuild(builder) {
    super.onBuild(builder);

    if (!this.skipIdWhere) {
      builder.findById(this.id);
    }
  }

  onAfter2(builder, numUpdated) {
    if (numUpdated == 0) {
      // If nothing was updated, we should fetch nothing.
      return afterReturn(super.onAfter2(builder, numUpdated), undefined);
    }

    return builder
      .modelClass()
      .query()
      .childQueryOf(builder)
      .findById(this.id)
      .castTo(builder.resultModelClass())
      .then(fetched => {
        let retVal = undefined;

        if (fetched) {
          this.model.$set(fetched);
          retVal = this.model;
        }

        return afterReturn(super.onAfter2(builder, numUpdated), retVal);
      });
  }

  clone() {
    const clone = super.clone();

    clone.id = this.id;
    clone.skipIdWhere = this.skipIdWhere;

    return clone;
  }
}

module.exports = {
  UpdateAndFetchOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js":
/*!********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ref } = __webpack_require__(/*! ../../queryBuilder/ReferenceBuilder */ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js");
const { isEmpty } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { after, afterReturn } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { isKnexRaw, isKnexQueryBuilder } = __webpack_require__(/*! ../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { StaticHookArguments } = __webpack_require__(/*! ../StaticHookArguments */ "../node_modules/objection/lib/queryBuilder/StaticHookArguments.js");

class UpdateOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);

    this.model = null;
    this.modelOptions = Object.assign({}, this.opt.modelOptions || {});
  }

  onAdd(builder, args) {
    const json = args[0];
    const modelClass = builder.modelClass();

    this.model = modelClass.ensureModel(json, this.modelOptions);
    return true;
  }

  onBefore2(builder, result) {
    const maybePromise = callBeforeUpdate(builder, this.model, this.modelOptions);
    return afterReturn(maybePromise, result);
  }

  onBefore3(builder) {
    const row = this.model.$toDatabaseJson(builder);

    if (isEmpty(row)) {
      // Resolve the query if there is nothing to update.
      builder.resolve(0);
    }
  }

  onBuildKnex(knexBuilder, builder) {
    const json = this.model.$toDatabaseJson(builder);
    const convertedJson = this.convertFieldExpressionsToRaw(builder, json);

    knexBuilder.update(convertedJson);
  }

  onAfter2(builder, numUpdated) {
    return callAfterUpdate(builder, this.model, this.modelOptions, numUpdated);
  }

  convertFieldExpressionsToRaw(builder, json) {
    const knex = builder.knex();
    const modelClass = builder.modelClass();
    const convertedJson = {};

    for (const key of Object.keys(json)) {
      let val = json[key];

      if (key.indexOf(':') > -1) {
        // 'col:attr' : ref('other:lol') is transformed to
        // "col" : raw(`jsonb_set("col", '{attr}', to_jsonb("other"#>'{lol}'), true)`)

        let parsed = ref(key);
        let jsonRefs = '{' + parsed.parsedExpr.access.map(it => it.ref).join(',') + '}';
        let valuePlaceholder = '?';

        if (isKnexQueryBuilder(val) || isKnexRaw(val)) {
          valuePlaceholder = 'to_jsonb(?)';
        } else {
          val = JSON.stringify(val);
        }

        convertedJson[parsed.column] = knex.raw(
          `jsonb_set(??, '${jsonRefs}', ${valuePlaceholder}, true)`,
          [convertedJson[parsed.column] || parsed.column, val]
        );
      } else {
        convertedJson[key] = val;
      }
    }

    return convertedJson;
  }

  clone() {
    const clone = super.clone();
    clone.model = this.model;
    return clone;
  }
}

function callBeforeUpdate(builder, model, modelOptions) {
  const maybePromise = callInstanceBeforeUpdate(builder, model, modelOptions);
  return after(maybePromise, () => callStaticBeforeUpdate(builder));
}

function callInstanceBeforeUpdate(builder, model, modelOptions) {
  return model.$beforeUpdate(modelOptions, builder.context());
}

function callStaticBeforeUpdate(builder) {
  const args = StaticHookArguments.create({ builder });
  return builder.modelClass().beforeUpdate(args);
}

function callAfterUpdate(builder, model, modelOptions, result) {
  const maybePromise = callInstanceAfterUpdate(builder, model, modelOptions);
  return after(maybePromise, () => callStaticAfterUpdate(builder, result));
}

function callInstanceAfterUpdate(builder, model, modelOptions) {
  return model.$afterUpdate(modelOptions, builder.context());
}

function callStaticAfterUpdate(builder, result) {
  const args = StaticHookArguments.create({ builder, result });
  const maybePromise = builder.modelClass().afterUpdate(args);

  return after(maybePromise, maybeResult => {
    if (maybeResult === undefined) {
      return result;
    } else {
      return maybeResult;
    }
  });
}

module.exports = {
  UpdateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/UpsertGraphAndFetchOperation.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/UpsertGraphAndFetchOperation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DelegateOperation } = __webpack_require__(/*! ./DelegateOperation */ "../node_modules/objection/lib/queryBuilder/operations/DelegateOperation.js");
const { UpsertGraphOperation } = __webpack_require__(/*! ./UpsertGraphOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpsertGraphOperation.js");
const { RelationExpression } = __webpack_require__(/*! ../RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");

class UpsertGraphAndFetchOperation extends DelegateOperation {
  constructor(name, opt) {
    super(name, opt);

    if (!this.delegate.is(UpsertGraphOperation)) {
      throw new Error('Invalid delegate');
    }
  }

  get models() {
    return this.delegate.models;
  }

  get isArray() {
    return this.delegate.isArray;
  }

  onAfter3(builder) {
    if (this.models.length === 0) {
      return this.isArray ? [] : null;
    }

    const eager = RelationExpression.fromModelGraph(this.models);
    const modelClass = this.models[0].constructor;
    const ids = this.models.map(model => model.$id());

    return modelClass
      .query()
      .childQueryOf(builder)
      .findByIds(ids)
      .eager(eager)
      .then(models => {
        return this.isArray ? models : models[0] || null;
      });
  }
}

module.exports = {
  UpsertGraphAndFetchOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/UpsertGraphOperation.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/UpsertGraphOperation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ./QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { GraphUpsert } = __webpack_require__(/*! ../graph/GraphUpsert */ "../node_modules/objection/lib/queryBuilder/graph/GraphUpsert.js");

class UpsertGraphOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(
      name,
      Object.assign({}, opt, {
        upsertOptions: {}
      })
    );

    this.upsertOptions = opt.upsertOptions || {};
    this.upsert = null;
  }

  get models() {
    return this.upsert.objects;
  }

  get isArray() {
    return this.upsert.isArray;
  }

  onAdd(builder, args) {
    const [objects] = args;

    this.upsert = new GraphUpsert({
      objects,
      rootModelClass: builder.modelClass(),
      upsertOptions: this.upsertOptions
    });

    // Never execute this builder.
    builder.resolve([]);

    return true;
  }

  onAfter1(builder) {
    return this.upsert.run(builder);
  }

  clone() {
    const clone = super.clone();
    clone.upsert = this.upsert;
    return clone;
  }
}

module.exports = {
  UpsertGraphOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/WhereCompositeOperation.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/WhereCompositeOperation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ./ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");
const { asSingle } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class WhereCompositeOperation extends ObjectionToKnexConvertingOperation {
  onBuildKnex(knexBuilder, builder) {
    const args = this.getKnexArgs(builder);

    if (args.length === 2) {
      // Convert whereComposite('foo', 1) into whereComposite('foo', '=', 1)
      args.splice(1, 0, '=');
    } else if (args.length !== 3) {
      throw new Error(`invalid number of arguments ${args.length}`);
    }

    knexBuilder.where(...buildWhereArgs(...args));
  }
}

function buildWhereArgs(cols, op, values) {
  if (isNormalWhere(cols, values)) {
    return buildNormalWhereArgs(cols, op, values);
  } else if (isCompositeWhere(cols, values)) {
    return buildCompositeWhereArgs(cols, op, values);
  } else {
    throw new Error(`both cols and values must have same dimensions`);
  }
}

function isNormalWhere(cols, values) {
  return (
    (!Array.isArray(cols) || cols.length === 1) && (!Array.isArray(values) || values.length === 1)
  );
}

function buildNormalWhereArgs(cols, op, values) {
  return [asSingle(cols), op, asSingle(values)];
}

function isCompositeWhere(cols, values) {
  return Array.isArray(cols) && Array.isArray(values) && cols.length === values.length;
}

function buildCompositeWhereArgs(cols, op, values) {
  return [
    builder => {
      for (let i = 0, l = cols.length; i < l; ++i) {
        builder.where(cols[i], op, values[i]);
      }
    }
  ];
}

module.exports = {
  WhereCompositeOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/eager/EagerOperation.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/eager/EagerOperation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ../QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");
const { RelationExpression } = __webpack_require__(/*! ../../RelationExpression */ "../node_modules/objection/lib/queryBuilder/RelationExpression.js");

class EagerOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);

    this.expression = RelationExpression.create();
    this.modifiers = {};
    this.modifiersAtPath = [];
    this.allowedExpression = null;
    this.eagerOptions = this.opt.defaultEagerOptions;
  }

  get finalExpression() {
    const expression = this.expression.clone();

    this.modifiersAtPath.forEach((modifier, i) => {
      const modifierName = getModifierName(i);

      expression.expressionsAtPath(modifier.path).forEach(expr => {
        expr.node.$modify.push(modifierName);
      });
    });

    return expression;
  }

  get finalModifiers() {
    const modifiers = Object.assign({}, this.modifiers);

    this.modifiersAtPath.forEach((modifier, i) => {
      const modifierName = getModifierName(i);

      modifiers[modifierName] = modifier.modifier;
    });

    return modifiers;
  }

  cloneFrom(eagerOp) {
    this.expression = eagerOp.expression.clone();
    this.modifiers = Object.assign({}, eagerOp.modifiers);
    this.modifiersAtPath = eagerOp.modifiersAtPath.slice();
    this.allowedExpression = eagerOp.allowedExpression && eagerOp.allowedExpression.clone();
    this.eagerOptions = Object.assign({}, eagerOp.eagerOptions);
  }

  clone() {
    const clone = super.clone();
    clone.cloneFrom(this);
    return clone;
  }
}

function getModifierName(index) {
  return `_f${index}_`;
}

module.exports = {
  EagerOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/eager/JoinEagerOperation.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/eager/JoinEagerOperation.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { EagerOperation } = __webpack_require__(/*! ./EagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/EagerOperation.js");
const { RelationJoiner } = __webpack_require__(/*! ../../join/RelationJoiner */ "../node_modules/objection/lib/queryBuilder/join/RelationJoiner.js");

class JoinEagerOperation extends EagerOperation {
  constructor(name, opt) {
    super(name, opt);
    this.joiner = null;
  }

  onAdd(builder) {
    builder.findOptions({ callAfterFindDeeply: true });

    this.joiner = new RelationJoiner({
      modelClass: builder.modelClass()
    });

    return true;
  }

  onBefore3(builder) {
    return this.joiner
      .setExpression(this.finalExpression)
      .setModifiers(this.finalModifiers)
      .setOptions(this.eagerOptions)
      .fetchColumnInfo(builder);
  }

  onBuild(builder) {
    this.joiner
      .setExpression(this.finalExpression)
      .setModifiers(this.finalModifiers)
      .setOptions(this.eagerOptions)
      .build(builder);
  }

  onRawResult(builder, rows) {
    return this.joiner.parseResult(builder, rows);
  }

  clone() {
    const clone = super.clone();
    clone.joiner = this.joiner;
    return clone;
  }
}

module.exports = {
  JoinEagerOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/eager/NaiveEagerOperation.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/eager/NaiveEagerOperation.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { WhereInEagerOperation } = __webpack_require__(/*! ./WhereInEagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/WhereInEagerOperation.js");

class NaiveEagerOperation extends WhereInEagerOperation {
  batchSize() {
    return 1;
  }
}

module.exports = {
  NaiveEagerOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/eager/WhereInEagerOperation.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/eager/WhereInEagerOperation.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const promiseUtils = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

const { EagerOperation } = __webpack_require__(/*! ./EagerOperation */ "../node_modules/objection/lib/queryBuilder/operations/eager/EagerOperation.js");
const { isMsSql, isOracle } = __webpack_require__(/*! ../../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const { asArray, flatten, chunk } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { ValidationErrorType } = __webpack_require__(/*! ../../../model/ValidationError */ "../node_modules/objection/lib/model/ValidationError.js");
const { createModifier } = __webpack_require__(/*! ../../../utils/createModifier */ "../node_modules/objection/lib/utils/createModifier.js");
const { RelationDoesNotExistError } = __webpack_require__(/*! ../../../model/RelationDoesNotExistError */ "../node_modules/objection/lib/model/RelationDoesNotExistError.js");

class WhereInEagerOperation extends EagerOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relationsToFetch = [];
    this.omitProps = [];
  }

  batchSize(knex) {
    if (isMsSql(knex)) {
      // On MSSQL the parameter limit is actually 2100, but since I couldn't figure out
      // if the limit is for all parameters in a query or for individual clauses, we set
      // the limit to 2000 to leave 100 parameters for where clauses etc.
      return 2000;
    } else if (isOracle(knex)) {
      return 1000;
    } else {
      // I'm sure there is some kind of limit for other databases too, but let's lower
      // this if someone ever hits those limits.
      return 10000;
    }
  }

  onBuild(builder) {
    const relationsToFetch = findRelationsToFetch(builder, this.finalExpression);
    const { selectionsToAdd, selectedProps } = findRelationPropsToSelect(builder, relationsToFetch);

    if (selectionsToAdd.length) {
      builder.select(selectionsToAdd);
    }

    this.relationsToFetch = relationsToFetch;
    this.omitProps = selectedProps;
  }

  onAfter2(builder, result) {
    const modelClass = builder.resultModelClass();

    if (!result) {
      return result;
    }

    const models = asArray(result);

    if (!models.length || !(models[0] instanceof modelClass)) {
      return result;
    }

    const promise = promiseUtils.map(
      this.relationsToFetch,
      it => this.fetchRelation(builder, models, it.relation, it.childExpression),
      { concurrency: modelClass.getConcurrency(builder.unsafeKnex()) }
    );

    return promise.then(() => {
      const intOpt = builder.internalOptions();

      if (!this.omitProps.length || intOpt.keepImplicitJoinProps) {
        return result;
      }

      // Now that relations have been fetched for `models` we can omit the
      // columns that were implicitly selected by this class.
      for (let i = 0, l = result.length; i < l; ++i) {
        const model = result[i];

        for (let c = 0, lc = this.omitProps.length; c < lc; ++c) {
          modelClass.omitImpl(model, this.omitProps[c]);
        }
      }

      return result;
    });
  }

  fetchRelation(builder, models, relation, expr) {
    const modelClass = builder.resultModelClass();
    const batchSize = this.batchSize(builder.knex());
    const modelBatches = chunk(models, batchSize);

    return promiseUtils
      .map(modelBatches, batch => this.fetchRelationBatch(builder, batch, relation, expr), {
        concurrency: modelClass.getConcurrency(builder.unsafeKnex())
      })
      .then(flatten);
  }

  fetchRelationBatch(builder, models, relation, expr) {
    const queryBuilder = this.createRelationQuery(builder, relation, expr);
    const findOperation = relation.find(queryBuilder, models);

    findOperation.alwaysReturnArray = true;
    findOperation.assignResultToOwner = true;
    findOperation.relationProperty = expr.node.$name;

    queryBuilder.addOperation(findOperation, []);

    for (const modifierName of expr.node.$modify) {
      const modifier = createModifier({
        modifier: modifierName,
        modelClass: relation.relatedModelClass,
        modifiers: this.finalModifiers
      });

      try {
        modifier(queryBuilder);
      } catch (err) {
        const modelClass = builder.modelClass();

        if (err instanceof modelClass.ModifierNotFoundError) {
          throw modelClass.createValidationError({
            type: ValidationErrorType.RelationExpression,
            message: `could not find modifier "${modifierName}" for relation "${relation.name}"`
          });
        } else {
          throw err;
        }
      }
    }

    return queryBuilder;
  }

  createRelationQuery(builder, relation, childExpression) {
    return relation.relatedModelClass
      .query()
      .childQueryOf(builder)
      .eagerOptions(this.eagerOptions)
      .eager(childExpression, this.finalModifiers);
  }

  clone() {
    const clone = super.clone();

    clone.relationsToFetch = this.relationsToFetch.slice();
    clone.omitProps = this.omitProps.slice();

    return clone;
  }
}

function findRelationsToFetch(builder, eagerExpression) {
  const relationsToFetch = [];
  const modelClass = builder.modelClass();

  try {
    eagerExpression.forEachChildExpression(modelClass, (childExpression, relation) => {
      relationsToFetch.push({
        childExpression,
        relation
      });
    });
  } catch (err) {
    if (err instanceof RelationDoesNotExistError) {
      throw modelClass.createValidationError({
        type: ValidationErrorType.RelationExpression,
        message: `unknown relation "${err.relationName}" in an eager expression`
      });
    }
    throw err;
  }

  return relationsToFetch;
}

function findRelationPropsToSelect(builder, relationsToFetch) {
  const selectionsToAdd = [];
  const selectedProps = [];

  // Collect columns that need to be selected for the eager fetch
  // to work that are not currently selected.
  for (const { relation } of relationsToFetch) {
    const ownerProp = relation.ownerProp;

    for (let c = 0, lc = ownerProp.size; c < lc; ++c) {
      const fullCol = ownerProp.ref(builder, c).fullColumn(builder);
      const prop = ownerProp.props[c];
      const col = ownerProp.cols[c];

      if (!builder.hasSelectionAs(fullCol, col) && selectionsToAdd.indexOf(fullCol) === -1) {
        selectedProps.push(prop);
        selectionsToAdd.push(fullCol);
      }
    }
  }

  return {
    selectionsToAdd,
    selectedProps
  };
}

module.exports = {
  WhereInEagerOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonHasPostgresOperation.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonHasPostgresOperation.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const jsonApi = __webpack_require__(/*! ./postgresJsonApi */ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/postgresJsonApi.js");
const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");

class WhereJsonHasPostgresOperation extends ObjectionToKnexConvertingOperation {
  onBuildKnex(knexBuilder, builder) {
    const args = this.getKnexArgs(builder);

    const sql = jsonApi.whereJsonFieldRightStringArrayOnLeftQuery(
      builder.knex(),
      args[0],
      this.opt.operator,
      args[1]
    );

    if (this.opt.bool === 'or') {
      knexBuilder.orWhereRaw(sql);
    } else {
      knexBuilder.whereRaw(sql);
    }
  }
}

module.exports = {
  WhereJsonHasPostgresOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonNotObjectPostgresOperation.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonNotObjectPostgresOperation.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const jsonApi = __webpack_require__(/*! ./postgresJsonApi */ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/postgresJsonApi.js");
const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");

class WhereJsonNotObjectPostgresOperation extends ObjectionToKnexConvertingOperation {
  onBuildKnex(knexBuilder, builder) {
    this.whereJsonNotObject(knexBuilder, builder.knex(), this.getKnexArgs(builder)[0]);
  }

  whereJsonNotObject(knexBuilder, knex, fieldExpression) {
    const innerQuery = innerQuery => {
      const builder = jsonApi.whereJsonbRefOnLeftJsonbValOrRefOnRight(
        innerQuery,
        fieldExpression,
        '@>',
        this.opt.compareValue,
        'not'
      );

      builder.orWhereRaw(jsonApi.whereJsonFieldQuery(knex, fieldExpression, 'IS', null));
    };

    if (this.opt.bool === 'or') {
      knexBuilder.orWhere(innerQuery);
    } else {
      knexBuilder.where(innerQuery);
    }
  }
}

module.exports = {
  WhereJsonNotObjectPostgresOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonPostgresOperation.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/jsonApi/WhereJsonPostgresOperation.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const jsonApi = __webpack_require__(/*! ./postgresJsonApi */ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/postgresJsonApi.js");
const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");

class WhereJsonPostgresOperation extends ObjectionToKnexConvertingOperation {
  onBuildKnex(knexBuilder, builder) {
    const args = this.getKnexArgs(builder);

    const rawArgs = jsonApi.whereJsonbRefOnLeftJsonbValOrRefOnRightRawQueryParams(
      args[0],
      this.opt.operator,
      args[1],
      this.opt.prefix
    );

    if (this.opt.bool === 'or') {
      knexBuilder.orWhereRaw.apply(knexBuilder, rawArgs);
    } else {
      knexBuilder.whereRaw.apply(knexBuilder, rawArgs);
    }
  }
}

module.exports = {
  WhereJsonPostgresOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/jsonApi/postgresJsonApi.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/jsonApi/postgresJsonApi.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const parser = __webpack_require__(/*! ../../../utils/parseFieldExpression */ "../node_modules/objection/lib/utils/parseFieldExpression.js");
const { asArray, isObject, isString } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

/**
 * @typedef {String} FieldExpression
 *
 * Field expressions allow one to refer to separate JSONB fields inside columns.
 *
 * Syntax: <column reference>[:<json field reference>]
 *
 * e.g. `Person.jsonColumnName:details.names[1]` would refer to value `'Second'`
 * in column `Person.jsonColumnName` which has
 * `{ details: { names: ['First', 'Second', 'Last'] } }` object stored in it.
 *
 * First part `<column reference>` is compatible with column references used in
 * knex e.g. `MyFancyTable.tributeToThBestColumnNameEver`.
 *
 * Second part describes a path to an attribute inside the referred column.
 * It is optional and it always starts with colon which follows directly with
 * first path element. e.g. `Table.jsonObjectColumnName:jsonFieldName` or
 * `Table.jsonArrayColumn:[321]`.
 *
 * Syntax supports `[<key or index>]` and `.<key or index>` flavors of reference
 * to json keys / array indexes:
 *
 * e.g. both `Table.myColumn:[1][3]` and `Table.myColumn:1.3` would access correctly
 * both of the following objects `[null, [null,null,null, "I was accessed"]]` and
 * `{ "1": { "3" : "I was accessed" } }`
 *
 * Caveats when using special characters in keys:
 *
 * 1. `objectColumn.key` This is the most common syntax, good if you are
 *    not using dots or square brackets `[]` in your json object key name.
 * 2. Keys containing dots `objectColumn:[keywith.dots]` Column `{ "keywith.dots" : "I was referred" }`
 * 3. Keys containing square brackets `column['[]']` `{ "[]" : "This is getting ridiculous..." }`
 * 4. Keys containing square brackets and quotes
 *    `objectColumn:['Double."Quote".[]']` and `objectColumn:["Sinlge.'Quote'.[]"]`
 *    Column `{ "Double.\"Quote\".[]" : "I was referred",  "Single.'Quote'.[]" : "Mee too!" }`
 * 99. Keys containing dots, square brackets, single quotes and double quotes in one json key is
 *     not currently supported
 */

function parseFieldExpression(expression, extractAsText) {
  let parsed = parser.parseFieldExpression(expression);
  let jsonRefs = parsed.access.map(it => it.ref).join(',');
  let extractor = extractAsText ? '#>>' : '#>';
  let middleQuotedColumnName = parsed.columnName.split('.').join('"."');
  return `"${middleQuotedColumnName}"${extractor}'{${jsonRefs}}'`;
}

function whereJsonbRefOnLeftJsonbValOrRefOnRight(
  builder,
  fieldExpression,
  operator,
  jsonObjectOrFieldExpression,
  queryPrefix
) {
  let queryParams = whereJsonbRefOnLeftJsonbValOrRefOnRightRawQueryParams(
    fieldExpression,
    operator,
    jsonObjectOrFieldExpression,
    queryPrefix
  );
  return builder.whereRaw.apply(builder, queryParams);
}

function whereJsonbRefOnLeftJsonbValOrRefOnRightRawQueryParams(
  fieldExpression,
  operator,
  jsonObjectOrFieldExpression,
  queryPrefix
) {
  let fieldReference = parseFieldExpression(fieldExpression);

  if (isString(jsonObjectOrFieldExpression)) {
    let rightHandReference = parseFieldExpression(jsonObjectOrFieldExpression);
    let refRefQuery = [
      '(',
      fieldReference,
      ')::jsonb',
      operator,
      '(',
      rightHandReference,
      ')::jsonb'
    ];
    if (queryPrefix) {
      refRefQuery.unshift(queryPrefix);
    }
    return [refRefQuery.join(' ')];
  } else if (isObject(jsonObjectOrFieldExpression)) {
    let refValQuery = ['(', fieldReference, ')::jsonb', operator, '?::jsonb'];
    if (queryPrefix) {
      refValQuery.unshift(queryPrefix);
    }
    return [refValQuery.join(' '), JSON.stringify(jsonObjectOrFieldExpression)];
  }

  throw new Error('Invalid right hand expression.');
}

function whereJsonFieldRightStringArrayOnLeftQuery(knex, fieldExpression, operator, keys) {
  let fieldReference = parseFieldExpression(fieldExpression);
  keys = asArray(keys);

  let questionMarksArray = keys.map(key => {
    if (!isString(key)) {
      throw new Error('All keys to find must be strings.');
    }
    return '?';
  });

  let rawSqlTemplateString = 'array[' + questionMarksArray.join(',') + ']';
  let rightHandExpression = knex.raw(rawSqlTemplateString, keys);

  return `${fieldReference} ${operator.replace('?', '\\?')} ${rightHandExpression}`;
}

function whereJsonFieldQuery(knex, fieldExpression, operator, value) {
  let fieldReference = parseFieldExpression(fieldExpression, true);
  let normalizedOperator = normalizeOperator(knex, operator);

  // json type comparison takes json type in string format
  let cast;
  let escapedValue = knex.raw(' ?', [value]);
  let type = typeof value;

  if (type === 'number') {
    cast = '::NUMERIC';
  } else if (type === 'boolean') {
    cast = '::BOOLEAN';
  } else if (type === 'string') {
    cast = '::TEXT';
  } else if (value === null) {
    cast = '::TEXT';
    escapedValue = 'NULL';
  } else {
    throw new Error('Value must be string, number, boolean or null.');
  }

  return `(${fieldReference})${cast} ${normalizedOperator} ${escapedValue}`;
}

function normalizeOperator(knex, operator) {
  let trimmedLowerCase = operator.trim().toLowerCase();

  switch (trimmedLowerCase) {
    case 'is':
    case 'is not':
      return trimmedLowerCase;
    default:
      return knex.client.formatter().operator(operator);
  }
}

module.exports = {
  parseFieldExpression: parseFieldExpression,
  whereJsonbRefOnLeftJsonbValOrRefOnRight: whereJsonbRefOnLeftJsonbValOrRefOnRight,
  whereJsonbRefOnLeftJsonbValOrRefOnRightRawQueryParams: whereJsonbRefOnLeftJsonbValOrRefOnRightRawQueryParams,
  whereJsonFieldRightStringArrayOnLeftQuery: whereJsonFieldRightStringArrayOnLeftQuery,
  whereJsonFieldQuery: whereJsonFieldQuery
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/select/SelectOperation.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/select/SelectOperation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { flatten } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { Selection } = __webpack_require__(/*! ./Selection */ "../node_modules/objection/lib/queryBuilder/operations/select/Selection.js");
const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");

const COUNT_REGEX = /count/i;

class SelectOperation extends ObjectionToKnexConvertingOperation {
  constructor(name, opt) {
    super(name, opt);
    this.selections = [];
  }

  onAdd(builder, args) {
    const selections = flatten(args);

    // Don't add an empty selection. Empty list is accepted for `count`, `countDistinct`
    // etc. because knex apparently supports it.
    if (selections.length === 0 && !COUNT_REGEX.test(this.name)) {
      return false;
    }

    const ret = super.onAdd(builder, selections);

    for (const selection of selections) {
      const selectionInstance = Selection.create(selection);

      if (selectionInstance) {
        this.selections.push(selectionInstance);
      }
    }

    return ret;
  }

  onBuildKnex(knexBuilder, builder) {
    knexBuilder[this.name].apply(knexBuilder, this.getKnexArgs(builder));
  }

  findSelection(builder, selectionToFind) {
    const selectionInstanceToFind = Selection.create(selectionToFind);

    if (!selectionInstanceToFind) {
      return null;
    }

    for (const selection of this.selections) {
      if (Selection.doesSelect(builder, selection, selectionInstanceToFind)) {
        return selection;
      }
    }

    return null;
  }

  clone() {
    const clone = super.clone();
    clone.selections = this.selections.slice();
    return clone;
  }
}

module.exports = {
  SelectOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/select/Selection.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/select/Selection.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isString, isObject } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

const ALIAS_REGEX = /\s+as\s+/i;

class Selection {
  constructor(table, column, alias) {
    this.table = table;
    this.column = column;
    this.alias = alias;
  }

  get name() {
    return this.alias || this.column;
  }

  static create(selection) {
    if (isObject(selection)) {
      if (selection.isObjectionSelection) {
        return selection;
      } else if (selection.isObjectionReferenceBuilder) {
        return createSelectionFromReference(selection);
      } else if (selection.isObjectionRawBuilder) {
        return createSelectionFromRaw(selection);
      } else {
        return null;
      }
    } else if (isString(selection)) {
      return createSelectionFromString(selection);
    } else {
      return null;
    }
  }

  /**
   * Returns true if `selectionInBuilder` causes `selectionToTest` to be selected.
   *
   * Examples that return true:
   *
   * doesSelect(Person.query(), '*', 'name')
   * doesSelect(Person.query(), 'Person.*', 'name')
   * doesSelect(Person.query(), 'name', 'name')
   * doesSelect(Person.query(), 'name', 'Person.name')
   */
  static doesSelect(builder, selectionInBuilder, selectionToTest) {
    selectionInBuilder = Selection.create(selectionInBuilder);
    selectionToTest = Selection.create(selectionToTest);

    if (selectionInBuilder.column === '*') {
      if (selectionInBuilder.table) {
        if (selectionToTest.column === '*') {
          return selectionToTest.table === selectionInBuilder.table;
        } else {
          return (
            selectionToTest.table === null || selectionToTest.table === selectionInBuilder.table
          );
        }
      } else {
        return true;
      }
    } else {
      const selectionInBuilderTable = selectionInBuilder.table || builder.tableRef();

      if (selectionToTest.column === '*') {
        return false;
      } else {
        return (
          selectionToTest.column === selectionInBuilder.column &&
          (selectionToTest.table === null || selectionToTest.table === selectionInBuilderTable)
        );
      }
    }
  }
}

Object.defineProperties(Selection.prototype, {
  isObjectionSelection: {
    enumerable: false,
    writable: false,
    value: true
  }
});

function createSelectionFromReference(ref) {
  return new Selection(ref.tableName, ref.column, ref.alias);
}

function createSelectionFromRaw(raw) {
  if (raw.alias) {
    return new Selection(null, null, raw.alias);
  } else {
    return null;
  }
}

function createSelectionFromString(selection) {
  let table = null;
  let column = null;
  let alias = null;

  if (ALIAS_REGEX.test(selection)) {
    const parts = selection.split(ALIAS_REGEX);

    selection = parts[0].trim();
    alias = parts[1].trim();
  }

  const dotIdx = selection.lastIndexOf('.');

  if (dotIdx !== -1) {
    table = selection.substr(0, dotIdx);
    column = selection.substr(dotIdx + 1);
  } else {
    column = selection;
  }

  return new Selection(table, column, alias);
}

module.exports = {
  Selection
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeMsSqlOperation.js":
/*!****************************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeMsSqlOperation.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");
const { flatten, zipObject, isString } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { getTempColumn } = __webpack_require__(/*! ../../../utils/tmpColumnUtils */ "../node_modules/objection/lib/utils/tmpColumnUtils.js");

class WhereInCompositeMsSqlOperation extends ObjectionToKnexConvertingOperation {
  constructor(name, opt) {
    super(name, opt);
    this.prefix = this.opt.prefix || null;
  }

  onBuildKnex(knexBuilder, builder) {
    const args = this.getKnexArgs(builder);
    this.build(builder.knex(), knexBuilder, args[0], args[1]);
  }

  build(knex, knexBuilder, columns, values) {
    let isCompositeKey = Array.isArray(columns) && columns.length > 1;

    if (isCompositeKey) {
      this.buildComposite(knex, knexBuilder, columns, values);
    } else {
      this.buildNonComposite(knexBuilder, columns, values);
    }
  }

  buildComposite(knex, knexBuilder, columns, values) {
    const helperColumns = columns.map((_, index) => getTempColumn(index));

    if (Array.isArray(values)) {
      this.buildCompositeValue(knex, knexBuilder, columns, helperColumns, values);
    } else {
      this.buildCompositeSubquery(
        knex,
        knexBuilder,
        columns,
        helperColumns,
        values.as(knex.raw(`V(${helperColumns.map(_ => '??')})`, helperColumns))
      );
    }
  }

  buildCompositeValue(knex, knexBuilder, columns, helperColumns, values) {
    return this.buildCompositeSubquery(
      knex,
      knexBuilder,
      columns,
      helperColumns,
      knex.raw(
        `(VALUES ${values
          .map(value => `(${value.map(_ => '?').join(',')})`)
          .join(',')}) AS V(${helperColumns.map(_ => '??').join(',')})`,
        flatten(values).concat(helperColumns)
      )
    );
  }

  buildCompositeSubquery(knex, knexBuilder, columns, helperColumns, subQuery) {
    const wrapperQuery = knex
      .from(subQuery)
      .where(zipObject(helperColumns, columns.map(column => knex.raw('??', column))));

    if (this.prefix === 'not') {
      return knexBuilder.whereNotExists(wrapperQuery);
    } else {
      return knexBuilder.whereExists(wrapperQuery);
    }
  }

  buildNonComposite(knexBuilder, columns, values) {
    const col = isString(columns) ? columns : columns[0];

    if (Array.isArray(values)) {
      values = pickNonNull(values, []);
    } else {
      values = [values];
    }

    this.whereIn(knexBuilder, col, values);
  }

  whereIn(knexBuilder, col, val) {
    if (this.prefix === 'not') {
      knexBuilder.whereNotIn(col, val);
    } else {
      knexBuilder.whereIn(col, val);
    }
  }

  clone() {
    const clone = super.clone();
    clone.prefix = this.prefix;
    return clone;
  }
}

function pickNonNull(values, output) {
  for (let i = 0, l = values.length; i < l; ++i) {
    const val = values[i];

    if (Array.isArray(val)) {
      pickNonNull(val, output);
    } else if (val !== null && val !== undefined) {
      output.push(val);
    }
  }

  return output;
}

module.exports = {
  WhereInCompositeMsSqlOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeOperation.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeOperation.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");
const { isObject, asSingle } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { isKnexQueryBuilder } = __webpack_require__(/*! ../../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");

class WhereInCompositeOperation extends ObjectionToKnexConvertingOperation {
  constructor(name, opt) {
    super(name, opt);
    this.prefix = this.opt.prefix || null;
  }

  onBuildKnex(knexBuilder, builder) {
    const whereInArgs = buildWhereInArgs(builder.knex(), ...this.getKnexArgs(builder));

    if (this.prefix === 'not') {
      return knexBuilder.whereNotIn(...whereInArgs);
    } else {
      return knexBuilder.whereIn(...whereInArgs);
    }
  }

  clone() {
    const clone = super.clone();
    clone.prefix = this.prefix;
    return clone;
  }
}

function buildWhereInArgs(knex, columns, values) {
  if (isCompositeKey(columns)) {
    return buildCompositeArgs(knex, columns, values);
  } else {
    return buildNonCompositeArgs(columns, values);
  }
}

function isCompositeKey(columns) {
  return Array.isArray(columns) && columns.length > 1;
}

function buildCompositeArgs(knex, columns, values) {
  if (Array.isArray(values)) {
    return buildCompositeValueArgs(columns, values);
  } else {
    return buildCompositeSubqueryArgs(knex, columns, values);
  }
}

function buildCompositeValueArgs(columns, values) {
  return [columns, values];
}

function buildCompositeSubqueryArgs(knex, columns, subquery) {
  const sql = `(${columns
    .map(col => {
      // On older versions of knex, raw doesn't work
      // with `??`. We use `?` for those.
      if (isObject(col)) {
        return '?';
      } else {
        return '??';
      }
    })
    .join(',')})`;

  return [knex.raw(sql, columns), subquery];
}

function buildNonCompositeArgs(columns, values) {
  if (Array.isArray(values)) {
    values = pickNonNull(values, []);
  } else if (!isKnexQueryBuilder(values)) {
    values = [values];
  }

  return [asSingle(columns), values];
}

function pickNonNull(values, output) {
  for (let i = 0, l = values.length; i < l; ++i) {
    const val = values[i];

    if (Array.isArray(val)) {
      pickNonNull(val, output);
    } else if (val !== null && val !== undefined) {
      output.push(val);
    }
  }

  return output;
}

module.exports = {
  WhereInCompositeOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeSqliteOperation.js":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/operations/whereInComposite/WhereInCompositeSqliteOperation.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ObjectionToKnexConvertingOperation } = __webpack_require__(/*! ../ObjectionToKnexConvertingOperation */ "../node_modules/objection/lib/queryBuilder/operations/ObjectionToKnexConvertingOperation.js");
const { isKnexQueryBuilder } = __webpack_require__(/*! ../../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const { asSingle } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class WhereInCompositeSqliteOperation extends ObjectionToKnexConvertingOperation {
  constructor(name, opt) {
    super(name, opt);
    this.prefix = this.opt.prefix || null;
  }

  onBuildKnex(knexBuilder, builder) {
    const { method, args } = buildWhereArgs(...this.getKnexArgs(builder));

    if (method === 'where') {
      if (this.prefix === 'not') {
        return knexBuilder.whereNot(...args);
      } else {
        return knexBuilder.where(...args);
      }
    } else {
      if (this.prefix === 'not') {
        return knexBuilder.whereNotIn(...args);
      } else {
        return knexBuilder.whereIn(...args);
      }
    }
  }

  clone() {
    const clone = super.clone();
    clone.prefix = this.prefix;
    return clone;
  }
}

function buildWhereArgs(columns, values) {
  if (isCompositeKey(columns)) {
    return buildCompositeArgs(columns, values);
  } else {
    return buildNonCompositeArgs(columns, values);
  }
}

function isCompositeKey(columns) {
  return Array.isArray(columns) && columns.length > 1;
}

function buildCompositeArgs(columns, values) {
  if (!Array.isArray(values)) {
    // If the `values` is not an array of values but a function or a subquery
    // we have no way to implement this method.
    throw new Error(`sqlite doesn't support multi-column where in clauses`);
  }

  // Sqlite doesn't support the `where in` syntax for multiple columns but
  // we can emulate it using grouped `or` clauses.
  return {
    method: 'where',
    args: [
      builder => {
        values.forEach(val => {
          builder.orWhere(builder => {
            columns.forEach((col, idx) => {
              builder.andWhere(col, val[idx]);
            });
          });
        });
      }
    ]
  };
}

function buildNonCompositeArgs(columns, values) {
  if (Array.isArray(values)) {
    values = pickNonNull(values, []);
  } else if (!isKnexQueryBuilder(values)) {
    values = [values];
  }

  return {
    method: 'whereIn',
    args: [asSingle(columns), values]
  };
}

function pickNonNull(values, output) {
  for (let i = 0, l = values.length; i < l; ++i) {
    const val = values[i];

    if (Array.isArray(val)) {
      pickNonNull(val, output);
    } else if (val !== null && val !== undefined) {
      output.push(val);
    }
  }

  return output;
}

module.exports = {
  WhereInCompositeSqliteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/parsers/jsonFieldExpressionParser.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/parsers/jsonFieldExpressionParser.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = 'SyntaxError';

  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },

    class: function(expectation) {
      var escapedParts = '',
        i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts +=
          expectation.parts[i] instanceof Array
            ? classEscape(expectation.parts[i][0]) + '-' + classEscape(expectation.parts[i][1])
            : classEscape(expectation.parts[i]);
      }

      return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']';
    },

    any: function(expectation) {
      return 'any character';
    },

    end: function(expectation) {
      return 'end of input';
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch
      .charCodeAt(0)
      .toString(16)
      .toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g, function(ch) {
        return '\\x0' + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return '\\x' + hex(ch);
      });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g, '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g, function(ch) {
        return '\\x0' + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return '\\x' + hex(ch);
      });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
      i,
      j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + ' or ' + descriptions[1];

      default:
        return (
          descriptions.slice(0, -1).join(', ') + ', or ' + descriptions[descriptions.length - 1]
        );
    }
  }

  function describeFound(found) {
    return found ? '"' + literalEscape(found) + '"' : 'end of input';
  }

  return 'Expected ' + describeExpected(expected) + ' but ' + describeFound(found) + ' found.';
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
    peg$startRuleFunctions = { start: peg$parsestart },
    peg$startRuleFunction = peg$parsestart,
    peg$c0 = ':',
    peg$c1 = peg$literalExpectation(':', false),
    peg$c2 = function(column, refs) {
      var access = [];
      if (refs) {
        var firstAccess = refs[1];
        access = refs[2];
        access.unshift(firstAccess);
      }
      return { columnName: column, access: access };
    },
    peg$c3 = '[',
    peg$c4 = peg$literalExpectation('[', false),
    peg$c5 = '"',
    peg$c6 = peg$literalExpectation('"', false),
    peg$c7 = "'",
    peg$c8 = peg$literalExpectation("'", false),
    peg$c9 = ']',
    peg$c10 = peg$literalExpectation(']', false),
    peg$c11 = function(key) {
      return { type: 'object', ref: Array.isArray(key) ? key[1] : key };
    },
    peg$c12 = function(index) {
      return { type: 'array', ref: parseInt(index, 10) };
    },
    peg$c13 = function(key) {
      return { type: 'object', ref: key };
    },
    peg$c14 = '.',
    peg$c15 = peg$literalExpectation('.', false),
    peg$c16 = /^[^\][]/,
    peg$c17 = peg$classExpectation([']', '['], true, false),
    peg$c18 = function(chars) {
      return chars.join('');
    },
    peg$c19 = /^[^:]/,
    peg$c20 = peg$classExpectation([':'], true, false),
    peg$c21 = /^[^"]/,
    peg$c22 = peg$classExpectation(['"'], true, false),
    peg$c23 = /^[^']/,
    peg$c24 = peg$classExpectation(["'"], true, false),
    peg$c25 = /^[^.\][]/,
    peg$c26 = peg$classExpectation(['.', ']', '['], true, false),
    peg$c27 = /^[0-9]/,
    peg$c28 = peg$classExpectation([['0', '9']], false, false),
    peg$c29 = function(digits) {
      return digits.join('');
    },
    peg$currPos = 0,
    peg$savedPos = 0,
    peg$posDetailsCache = [{ line: 1, column: 1 }],
    peg$maxFailPos = 0,
    peg$maxFailExpected = [],
    peg$silentFails = 0,
    peg$result;

  if ('startRule' in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error('Can\'t start parsing from rule "' + options.startRule + '".');
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: 'literal', text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: 'class', parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: 'any' };
  }

  function peg$endExpectation() {
    return { type: 'end' };
  }

  function peg$otherExpectation(description) {
    return { type: 'other', description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
      p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
      endPosDetails = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parsestringWithoutColon();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s3 = peg$c0;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c1);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsebracketIndexRef();
        if (s4 === peg$FAILED) {
          s4 = peg$parsebracketStringRef();
          if (s4 === peg$FAILED) {
            s4 = peg$parsecolonReference();
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parsebracketIndexRef();
          if (s6 === peg$FAILED) {
            s6 = peg$parsebracketStringRef();
            if (s6 === peg$FAILED) {
              s6 = peg$parsedotReference();
            }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parsebracketIndexRef();
            if (s6 === peg$FAILED) {
              s6 = peg$parsebracketStringRef();
              if (s6 === peg$FAILED) {
                s6 = peg$parsedotReference();
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebracketStringRef() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c4);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s3 = peg$c5;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c6);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsestringWithoutDoubleQuotes();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s5 = peg$c5;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c7;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c8);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsestringWithoutSingleQuotes();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$parsestringWithoutSquareBrackets();
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s3 = peg$c9;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c10);
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c11(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebracketIndexRef() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c4);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseinteger();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s3 = peg$c9;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c10);
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c12(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolonReference() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsestringWithoutSquareBracketsOrDots();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c13(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsedotReference() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 46) {
      s1 = peg$c14;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c15);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsestringWithoutSquareBracketsOrDots();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c13(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestringWithoutSquareBrackets() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c16.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c17);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c16.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c17);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsestringWithoutColon() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c19.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c20);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c19.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c20);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsestringWithoutDoubleQuotes() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c21.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c22);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c21.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c22);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsestringWithoutSingleQuotes() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c23.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c24);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c23.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c24);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsestringWithoutSquareBracketsOrDots() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c25.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c26);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c25.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c26);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseinteger() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c27.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c28);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c27.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c28);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c29(s1);
    }
    s0 = s1;

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};


/***/ }),

/***/ "../node_modules/objection/lib/queryBuilder/parsers/relationExpressionParser.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/objection/lib/queryBuilder/parsers/relationExpressionParser.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = 'SyntaxError';

  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },

    class: function(expectation) {
      var escapedParts = '',
        i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts +=
          expectation.parts[i] instanceof Array
            ? classEscape(expectation.parts[i][0]) + '-' + classEscape(expectation.parts[i][1])
            : classEscape(expectation.parts[i]);
      }

      return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']';
    },

    any: function(expectation) {
      return 'any character';
    },

    end: function(expectation) {
      return 'end of input';
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch
      .charCodeAt(0)
      .toString(16)
      .toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g, function(ch) {
        return '\\x0' + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return '\\x' + hex(ch);
      });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g, '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g, function(ch) {
        return '\\x0' + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return '\\x' + hex(ch);
      });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
      i,
      j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + ' or ' + descriptions[1];

      default:
        return (
          descriptions.slice(0, -1).join(', ') + ', or ' + descriptions[descriptions.length - 1]
        );
    }
  }

  function describeFound(found) {
    return found ? '"' + literalEscape(found) + '"' : 'end of input';
  }

  return 'Expected ' + describeExpected(expected) + ' but ' + describeFound(found) + ' found.';
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
    peg$startRuleFunctions = { start: peg$parsestart },
    peg$startRuleFunction = peg$parsestart,
    peg$c0 = function(expr) {
      const node = newNode();

      if (expr.$name === '*') {
        node.$allRecursive = true;
      } else {
        assertDuplicateRelation(node, expr);
        node[expr.$name] = expr;
        node.$childNames.push(expr.$name);
      }

      return node;
    },
    peg$c1 = function(list) {
      const node = newNode();

      list.forEach(expr => {
        assertDuplicateRelation(node, expr);
        node[expr.$name] = expr;
        node.$childNames.push(expr.$name);
      });

      return node;
    },
    peg$c2 = function(name, args, alias, list) {
      const node = newNode();

      node.$name = alias || name;
      node.$relation = name;
      node.$modify = args || [];

      list.forEach(expr => {
        assertDuplicateRelation(node, expr);
        node[expr.$name] = expr;
        node.$childNames.push(expr.$name);
      });

      return node;
    },
    peg$c3 = function(name, args, alias, expr) {
      const node = newNode();

      node.$name = alias || name;
      node.$relation = name;
      node.$modify = args || [];

      if (expr) {
        const match = /^\^(\d*)$/.exec(expr.$name);

        if (match) {
          if (match[1]) {
            node.$recursive = parseInt(match[1], 10);
          } else {
            node.$recursive = true;
          }
        } else if (expr.$name === '*') {
          node.$allRecursive = true;
        } else {
          assertDuplicateRelation(node, expr);
          node[expr.$name] = expr;
          node.$childNames.push(expr.$name);
        }
      }

      return node;
    },
    peg$c4 = 'as',
    peg$c5 = peg$literalExpectation('as', false),
    peg$c6 = function(alias) {
      return alias;
    },
    peg$c7 = function(name) {
      return name.join('');
    },
    peg$c8 = /^[^[\](),. \t\r\n]/,
    peg$c9 = peg$classExpectation(
      ['[', ']', '(', ')', ',', '.', ' ', '\t', '\r', '\n'],
      true,
      false
    ),
    peg$c10 = '(',
    peg$c11 = peg$literalExpectation('(', false),
    peg$c12 = ')',
    peg$c13 = peg$literalExpectation(')', false),
    peg$c14 = function(args) {
      return args;
    },
    peg$c15 = ',',
    peg$c16 = peg$literalExpectation(',', false),
    peg$c17 = function(arg) {
      return arg;
    },
    peg$c18 = /^[ \t\r\n]/,
    peg$c19 = peg$classExpectation([' ', '\t', '\r', '\n'], false, false),
    peg$c20 = '.',
    peg$c21 = peg$literalExpectation('.', false),
    peg$c22 = function(list) {
      return list;
    },
    peg$c23 = '[',
    peg$c24 = peg$literalExpectation('[', false),
    peg$c25 = ']',
    peg$c26 = peg$literalExpectation(']', false),
    peg$c27 = function(items) {
      return items;
    },
    peg$c28 = function(expr) {
      return expr;
    },
    peg$c29 = function(sub) {
      return sub;
    },
    peg$currPos = 0,
    peg$savedPos = 0,
    peg$posDetailsCache = [{ line: 1, column: 1 }],
    peg$maxFailPos = 0,
    peg$maxFailExpected = [],
    peg$silentFails = 0,
    peg$result;

  if ('startRule' in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error('Can\'t start parsing from rule "' + options.startRule + '".');
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: 'literal', text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: 'class', parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: 'any' };
  }

  function peg$endExpectation() {
    return { type: 'end' };
  }

  function peg$otherExpectation(description) {
    return { type: 'other', description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
      p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
      endPosDetails = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseexpression();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parselistExpression();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseexpression() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parsename();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseargs();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsealias();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsesubListExpression();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c2(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsename();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseargs();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsealias();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsesubExpression();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsealias() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c4) {
        s2 = peg$c4;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c5);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsename();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c6(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsename() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsechar();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsechar();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsechar() {
    var s0;

    if (peg$c8.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c9);
      }
    }

    return s0;
  }

  function peg$parseargs() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseargListItem();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseargListItem();
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s5 = peg$c12;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c13);
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c14(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseargListItem() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsename();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsews();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c15;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c16);
            }
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c17(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsews() {
    var s0;

    if (peg$c18.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c19);
      }
    }

    return s0;
  }

  function peg$parsesubListExpression() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s2 = peg$c20;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c21);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parselistExpression();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselistExpression() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c23;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c24);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parselistExpressionItem();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parselistExpressionItem();
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c25;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c26);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parsews();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parsews();
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c27(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselistExpressionItem() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseexpression();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsews();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c15;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c16);
            }
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c28(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesubExpression() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s2 = peg$c20;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c21);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsews();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseexpression();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parsews();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsews();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c29(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function assertDuplicateRelation(node, expr) {
    if (expr.$name in node) {
      console.warn(
        `Duplicate relation "${
          expr.$name
        }" in a relation expression. You should use "a.[b, c]" instead of "[a.b, a.c]". This will cause an error in objection 2.0`
      );

      // TODO: enable for v2.0.
      // const err = new Error();
      // err.duplicateRelationName = expr.$name;
      // throw err;
    }
  }

  function newNode() {
    return {
      $name: null,
      $relation: null,
      $modify: [],
      $recursive: false,
      $allRecursive: false,
      $childNames: []
    };
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/Relation.js":
/*!***********************************************************!*\
  !*** ../node_modules/objection/lib/relations/Relation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { RelationProperty } = __webpack_require__(/*! ./RelationProperty */ "../node_modules/objection/lib/relations/RelationProperty.js");
const getModel = () => __webpack_require__(/*! ../model/Model */ "../node_modules/objection/lib/model/Model.js").Model;

const { RelationFindOperation } = __webpack_require__(/*! ./RelationFindOperation */ "../node_modules/objection/lib/relations/RelationFindOperation.js");
const { RelationUpdateOperation } = __webpack_require__(/*! ./RelationUpdateOperation */ "../node_modules/objection/lib/relations/RelationUpdateOperation.js");
const { RelationDeleteOperation } = __webpack_require__(/*! ./RelationDeleteOperation */ "../node_modules/objection/lib/relations/RelationDeleteOperation.js");
const { RelationSubqueryOperation } = __webpack_require__(/*! ./RelationSubqueryOperation */ "../node_modules/objection/lib/relations/RelationSubqueryOperation.js");

const { ref } = __webpack_require__(/*! ../queryBuilder/ReferenceBuilder */ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js");
const { isSubclassOf } = __webpack_require__(/*! ../utils/classUtils */ "../node_modules/objection/lib/utils/classUtils.js");
const { resolveModel } = __webpack_require__(/*! ../utils/resolveModel */ "../node_modules/objection/lib/utils/resolveModel.js");
const { get, isFunction } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { mapAfterAllReturn } = __webpack_require__(/*! ../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { createModifier } = __webpack_require__(/*! ../utils/createModifier */ "../node_modules/objection/lib/utils/createModifier.js");

class Relation {
  constructor(relationName, OwnerClass) {
    this.name = relationName;
    this.ownerModelClass = OwnerClass;
    this.relatedModelClass = null;

    this.ownerProp = null;
    this.relatedProp = null;

    this.joinTableModelClass = null;
    this.joinTableOwnerProp = null;
    this.joinTableRelatedProp = null;
    this.joinTableBeforeInsert = null;
    this.joinTableExtras = [];

    this.modify = null;
    this.beforeInsert = null;
  }

  setMapping(mapping) {
    let ctx = {
      name: this.name,
      mapping,
      ownerModelClass: this.ownerModelClass,
      relatedModelClass: null,
      relatedProp: null,
      ownerProp: null,
      modify: null,
      beforeInsert: null,
      forbiddenMappingProperties: this.forbiddenMappingProperties,
      createError: msg => this.createError(msg)
    };

    ctx = checkForbiddenProperties(ctx);
    ctx = checkOwnerModelClass(ctx);
    ctx = checkRelatedModelClass(ctx);
    ctx = resolveRelatedModelClass(ctx);
    ctx = checkRelation(ctx);
    ctx = createJoinProperties(ctx);
    ctx = parseModify(ctx);
    ctx = parseBeforeInsert(ctx);

    this.relatedModelClass = ctx.relatedModelClass;
    this.ownerProp = ctx.ownerProp;
    this.relatedProp = ctx.relatedProp;
    this.modify = ctx.modify;
    this.beforeInsert = ctx.beforeInsert;
  }

  get forbiddenMappingProperties() {
    return ['join.through'];
  }

  get joinTable() {
    return this.joinTableModelClass ? this.joinTableModelClass.getTableName() : null;
  }

  get joinModelClass() {
    return this.getJoinModelClass(this.ownerModelClass.knex());
  }

  getJoinModelClass(knex) {
    return this.joinTableModelClass && knex !== this.joinTableModelClass.knex()
      ? this.joinTableModelClass.bindKnex(knex)
      : this.joinTableModelClass;
  }

  isOneToOne() {
    return false;
  }

  clone() {
    const relation = new this.constructor(this.name, this.ownerModelClass);

    relation.relatedModelClass = this.relatedModelClass;
    relation.ownerProp = this.ownerProp;
    relation.relatedProp = this.relatedProp;
    relation.modify = this.modify;
    relation.beforeInsert = this.beforeInsert;

    relation.joinTableModelClass = this.joinTableModelClass;
    relation.joinTableOwnerProp = this.joinTableOwnerProp;
    relation.joinTableRelatedProp = this.joinTableRelatedProp;
    relation.joinTableBeforeInsert = this.joinTableBeforeInsert;
    relation.joinTableExtras = this.joinTableExtras;

    return relation;
  }

  bindKnex(knex) {
    const bound = this.clone();

    bound.relatedModelClass = this.relatedModelClass.bindKnex(knex);
    bound.ownerModelClass = this.ownerModelClass.bindKnex(knex);

    if (this.joinTableModelClass) {
      bound.joinTableModelClass = this.joinTableModelClass.bindKnex(knex);
    }

    return bound;
  }

  findQuery(builder, opt) {
    const relatedRefs = this.relatedProp.refs(builder);

    if (opt.isColumnRef) {
      for (let i = 0, l = relatedRefs.length; i < l; ++i) {
        builder.where(relatedRefs[i], ref(opt.ownerIds[i]));
      }
    } else if (containsNonNull(opt.ownerIds)) {
      builder.whereInComposite(relatedRefs, opt.ownerIds);
    } else {
      builder.resolve([]);
    }

    try {
      return builder.modify(this.modify);
    } catch (err) {
      if (err instanceof this.relatedModelClass.ModifierNotFoundError) {
        throw this.createError(err.message);
      } else {
        throw err;
      }
    }
  }

  join(
    builder,
    {
      joinOperation = 'join',
      relatedTableAlias = builder.tableRefFor(this.relatedModelClass.getTableName()),
      relatedJoinSelectQuery = this.relatedModelClass.query().childQueryOf(builder),
      relatedTable = builder.tableNameFor(this.relatedModelClass.getTableName()),
      ownerTable = builder.tableRefFor(this.ownerModelClass.getTableName())
    } = {}
  ) {
    let relatedSelect = relatedJoinSelectQuery.modify(this.modify).as(relatedTableAlias);

    if (relatedSelect.isSelectAll()) {
      // No need to join a subquery if the query is `select * from "RelatedTable"`.
      relatedSelect = aliasedTableName(relatedTable, relatedTableAlias);
    }

    return builder[joinOperation](relatedSelect, join => {
      const relatedProp = this.relatedProp;
      const ownerProp = this.ownerProp;

      for (let i = 0, l = relatedProp.size; i < l; ++i) {
        const relatedRef = relatedProp.ref(builder, i).table(relatedTableAlias);
        const ownerRef = ownerProp.ref(builder, i).table(ownerTable);

        join.on(relatedRef, ownerRef);
      }
    });
  }

  insert(builder, owner) {
    /* istanbul ignore next */
    throw this.createError('not implemented');
  }

  update(builder, owner) {
    return new RelationUpdateOperation('update', {
      relation: this,
      owner: owner
    });
  }

  patch(builder, owner) {
    return new RelationUpdateOperation('patch', {
      relation: this,
      owner: owner,
      modelOptions: { patch: true }
    });
  }

  find(builder, owners) {
    return new RelationFindOperation('find', {
      relation: this,
      owners: owners
    });
  }

  subQuery(builder) {
    return new RelationSubqueryOperation('subQuery', {
      relation: this
    });
  }

  delete(builder, owner) {
    return new RelationDeleteOperation('delete', {
      relation: this,
      owner: owner
    });
  }

  relate(builder, owner) {
    /* istanbul ignore next */
    throw this.createError('not implemented');
  }

  unrelate(builder, owner) {
    /* istanbul ignore next */
    throw this.createError('not implemented');
  }

  hasRelateProp(model) {
    return model.$hasProps(this.relatedProp.props);
  }

  setRelateProp(model, values) {
    for (let i = 0, l = this.relatedProp.size; i < l; ++i) {
      this.relatedProp.setProp(model, i, values[i]);
    }
  }

  executeBeforeInsert(models, queryContext, result) {
    return mapAfterAllReturn(models, model => this.beforeInsert(model, queryContext), result);
  }

  createError(message) {
    if (this.ownerModelClass && this.ownerModelClass.name && this.name) {
      return new Error(`${this.ownerModelClass.name}.relationMappings.${this.name}: ${message}`);
    } else {
      return new Error(`${this.constructor.name}: ${message}`);
    }
  }
}

Object.defineProperties(Relation.prototype, {
  isObjectionRelation: {
    enumerable: false,
    writable: false,
    value: true
  }
});

function checkForbiddenProperties(ctx) {
  ctx.forbiddenMappingProperties.forEach(prop => {
    if (get(ctx.mapping, prop.split('.')) !== undefined) {
      throw ctx.createError(`Property ${prop} is not supported for this relation type.`);
    }
  });

  return ctx;
}

function checkOwnerModelClass(ctx) {
  if (!isSubclassOf(ctx.ownerModelClass, getModel())) {
    throw ctx.createError(`Relation's owner is not a subclass of Model`);
  }

  return ctx;
}

function checkRelatedModelClass(ctx) {
  if (!ctx.mapping.modelClass) {
    throw ctx.createError('modelClass is not defined');
  }

  return ctx;
}

function resolveRelatedModelClass(ctx) {
  let relatedModelClass;

  try {
    relatedModelClass = resolveModel(
      ctx.mapping.modelClass,
      ctx.ownerModelClass.modelPaths,
      'modelClass'
    );
  } catch (err) {
    throw ctx.createError(err.message);
  }

  return Object.assign(ctx, { relatedModelClass });
}

function checkRelation(ctx) {
  if (!ctx.mapping.relation) {
    throw ctx.createError('relation is not defined');
  }

  if (!isSubclassOf(ctx.mapping.relation, Relation)) {
    throw ctx.createError('relation is not a subclass of Relation');
  }

  return ctx;
}

function createJoinProperties(ctx) {
  const mapping = ctx.mapping;

  if (!mapping.join || !mapping.join.from || !mapping.join.to) {
    throw ctx.createError(
      'join must be an object that maps the columns of the related models together. For example: {from: "SomeTable.id", to: "SomeOtherTable.someModelId"}'
    );
  }

  const fromProp = createRelationProperty(ctx, mapping.join.from, 'join.from');
  const toProp = createRelationProperty(ctx, mapping.join.to, 'join.to');

  let ownerProp;
  let relatedProp;

  if (fromProp.modelClass.getTableName() === ctx.ownerModelClass.getTableName()) {
    ownerProp = fromProp;
    relatedProp = toProp;
  } else if (toProp.modelClass.getTableName() === ctx.ownerModelClass.getTableName()) {
    ownerProp = toProp;
    relatedProp = fromProp;
  } else {
    throw ctx.createError('join: either `from` or `to` must point to the owner model table.');
  }

  if (ownerProp.props.some(it => it === ctx.name)) {
    throw ctx.createError(
      `join: relation name and join property '${
        ctx.name
      }' cannot have the same name. If you cannot change one or the other, you can use $parseDatabaseJson and $formatDatabaseJson methods to convert the column name.`
    );
  }

  if (relatedProp.modelClass.getTableName() !== ctx.relatedModelClass.getTableName()) {
    throw ctx.createError('join: either `from` or `to` must point to the related model table.');
  }

  return Object.assign(ctx, { ownerProp, relatedProp });
}

function createRelationProperty(ctx, refString, propName) {
  try {
    return new RelationProperty(refString, table => {
      return [ctx.ownerModelClass, ctx.relatedModelClass].find(it => it.getTableName() === table);
    });
  } catch (err) {
    if (err instanceof RelationProperty.ModelNotFoundError) {
      throw ctx.createError(
        `join: either \`from\` or \`to\` must point to the owner model table and the other one to the related table. It might be that specified table '${
          err.tableName
        }' is not correct`
      );
    } else if (err instanceof RelationProperty.InvalidReferenceError) {
      throw ctx.createError(
        `${propName} must have format TableName.columnName. For example "SomeTable.id" or in case of composite key ["SomeTable.a", "SomeTable.b"].`
      );
    } else {
      throw err;
    }
  }
}

function parseModify(ctx) {
  const mapping = ctx.mapping;
  const modifier = mapping.modify || mapping.filter;
  const modify =
    modifier &&
    createModifier({
      modifier,
      modelClass: ctx.relatedModelClass
    });

  return Object.assign(ctx, { modify });
}

function parseBeforeInsert(ctx) {
  let beforeInsert;

  if (isFunction(ctx.mapping.beforeInsert)) {
    beforeInsert = ctx.mapping.beforeInsert;
  } else {
    beforeInsert = model => model;
  }

  return Object.assign(ctx, { beforeInsert });
}

function containsNonNull(arr) {
  for (let i = 0, l = arr.length; i < l; ++i) {
    const val = arr[i];

    if (Array.isArray(val)) {
      if (containsNonNull(val)) {
        return true;
      }
    } else if (val !== null && val !== undefined) {
      return true;
    }
  }

  return false;
}

function aliasedTableName(tableName, alias) {
  if (tableName === alias) {
    return tableName;
  } else {
    return `${tableName} as ${alias}`;
  }
}

module.exports = {
  Relation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/RelationDeleteOperation.js":
/*!**************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/RelationDeleteOperation.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DeleteOperation } = __webpack_require__(/*! ../queryBuilder/operations/DeleteOperation */ "../node_modules/objection/lib/queryBuilder/operations/DeleteOperation.js");

class RelationDeleteOperation extends DeleteOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
  }

  onBuild(builder) {
    super.onBuild(builder);

    this.relation.findQuery(builder, {
      ownerIds: [this.relation.ownerProp.getProps(this.owner)]
    });
  }
}

module.exports = {
  RelationDeleteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/RelationFindOperation.js":
/*!************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/RelationFindOperation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { FindOperation } = __webpack_require__(/*! ../queryBuilder/operations/FindOperation */ "../node_modules/objection/lib/queryBuilder/operations/FindOperation.js");
const { uniqBy } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class RelationFindOperation extends FindOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owners = opt.owners;
    this.alwaysReturnArray = false;
    this.assignResultToOwner = true;
    this.relationProperty = opt.relationProperty || this.relation.name;
    this.omitProps = [];
  }

  onBuild(builder) {
    let ids = new Array(this.owners.length);

    for (let i = 0, l = this.owners.length; i < l; ++i) {
      ids[i] = this.relation.ownerProp.getProps(this.owners[i]);
    }

    this.relation.findQuery(builder, {
      ownerIds: uniqBy(ids, join)
    });

    this.selectMissingJoinColumns(builder);
  }

  onAfter2(_, related) {
    const isOneToOne = this.relation.isOneToOne();

    if (this.assignResultToOwner) {
      const owners = this.owners;
      const relatedByOwnerId = new Map();

      for (let i = 0, l = related.length; i < l; ++i) {
        const rel = related[i];
        const key = this.relation.relatedProp.propKey(rel);
        let arr = relatedByOwnerId.get(key);

        if (!arr) {
          arr = [];
          relatedByOwnerId.set(key, arr);
        }

        arr.push(rel);
      }

      for (let i = 0, l = owners.length; i < l; ++i) {
        const own = owners[i];
        const key = this.relation.ownerProp.propKey(own);
        const related = relatedByOwnerId.get(key);

        if (isOneToOne) {
          own[this.relationProperty] = (related && related[0]) || null;
        } else {
          own[this.relationProperty] = related || [];
        }
      }
    }

    return related;
  }

  onAfter3(builder, related) {
    const isOneToOne = this.relation.isOneToOne();
    const intOpt = builder.internalOptions();

    if (!intOpt.keepImplicitJoinProps) {
      this.omitImplicitJoinProps(related);
    }

    if (!this.alwaysReturnArray && isOneToOne && related.length <= 1) {
      related = related[0] || undefined;
    }

    return super.onAfter3(builder, related);
  }

  selectMissingJoinColumns(builder) {
    const relatedProp = this.relation.relatedProp;
    const addedSelects = [];

    for (let c = 0, lc = relatedProp.size; c < lc; ++c) {
      const fullCol = relatedProp.ref(builder, c).fullColumn(builder);
      const prop = relatedProp.props[c];
      const col = relatedProp.cols[c];

      if (!builder.hasSelectionAs(fullCol, col) && addedSelects.indexOf(fullCol) === -1) {
        this.omitProps.push(prop);
        addedSelects.push(fullCol);
      }
    }

    if (addedSelects.length) {
      builder.select(addedSelects);
    }
  }

  omitImplicitJoinProps(related) {
    const relatedModelClass = this.relation.relatedModelClass;

    if (!this.omitProps.length || !related) {
      return related;
    }

    if (!Array.isArray(related)) {
      return this.omitImplicitJoinPropsFromOne(relatedModelClass, related);
    }

    if (!related.length) {
      return related;
    }

    for (let i = 0, l = related.length; i < l; ++i) {
      this.omitImplicitJoinPropsFromOne(relatedModelClass, related[i]);
    }

    return related;
  }

  omitImplicitJoinPropsFromOne(relatedModelClass, model) {
    for (let c = 0, lc = this.omitProps.length; c < lc; ++c) {
      relatedModelClass.omitImpl(model, this.omitProps[c]);
    }

    return model;
  }

  clone() {
    const clone = super.clone();

    clone.alwaysReturnArray = this.alwaysReturnArray;
    clone.assignResultToOwner = this.assignResultToOwner;
    clone.relationProperty = this.relationProperty;
    clone.omitProps = this.omitProps.slice();

    return clone;
  }
}

function join(arr) {
  return arr.join();
}

module.exports = {
  RelationFindOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/RelationInsertOperation.js":
/*!**************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/RelationInsertOperation.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { after } = __webpack_require__(/*! ../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { InsertOperation } = __webpack_require__(/*! ../queryBuilder/operations/InsertOperation */ "../node_modules/objection/lib/queryBuilder/operations/InsertOperation.js");

class RelationInsertOperation extends InsertOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
    this.assignResultToOwner = true;
  }

  onBefore2(builder, result) {
    const queryContext = builder.context();
    const maybePromise = this.relation.executeBeforeInsert(this.models, queryContext, result);

    return after(maybePromise, result => super.onBefore2(builder, result));
  }

  clone() {
    const clone = super.clone();

    clone.relation = this.relation;
    clone.owner = this.owner;
    clone.assignResultToOwner = this.assignResultToOwner;

    return clone;
  }
}

module.exports = {
  RelationInsertOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/RelationProperty.js":
/*!*******************************************************************!*\
  !*** ../node_modules/objection/lib/relations/RelationProperty.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray, isObject, uniqBy, get, set } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { ref: createRef } = __webpack_require__(/*! ../queryBuilder/ReferenceBuilder */ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js");
const { propToStr, PROP_KEY_PREFIX } = __webpack_require__(/*! ../model/modelValues */ "../node_modules/objection/lib/model/modelValues.js");

class ModelNotFoundError extends Error {
  constructor(tableName) {
    super();
    this.name = this.constructor.name;
    this.tableName = tableName;
  }
}

class InvalidReferenceError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
  }
}

// A pair of these define how two tables are related to each other.
// Both the owner and the related table have one of these.
//
// A relation property can be a single column, an array of columns
// (composite key) a json column reference, an array of json column
// references or any combination of the above.
class RelationProperty {
  // references must be a reference string like `Table.column:maybe.some.json[1].path`.
  // or an array of such references (composite key).
  //
  // modelClassResolver must be a function that takes a table name
  // and returns a model class.
  constructor(references, modelClassResolver) {
    const refs = createRefs(asArray(references));
    const paths = createPaths(refs, modelClassResolver);
    const modelClass = resolveModelClass(paths);

    this._refs = refs.map(ref => ref.model(modelClass));
    this._modelClass = modelClass;
    this._props = paths.map(it => it.path[0]);
    this._cols = refs.map(it => it.column);
    this._propGetters = paths.map(it => createGetter(it.path));
    this._propSetters = paths.map(it => createSetter(it.path));
    this._patchers = refs.map(it => createPatcher(it));
  }

  static get ModelNotFoundError() {
    return ModelNotFoundError;
  }

  static get InvalidReferenceError() {
    return InvalidReferenceError;
  }

  // The number of columns.
  get size() {
    return this._refs.length;
  }

  // The model class that owns the property.
  get modelClass() {
    return this._modelClass;
  }

  // An array of property names. Contains multiple values in case of composite key.
  // This may be different from `cols` if the model class has some kind of conversion
  // between database and "external" formats, for example a snake_case to camelCase
  // conversion.
  get props() {
    return this._props;
  }

  // An array of column names. Contains multiple values in case of composite key.
  // This may be different from `props` if the model class has some kind of conversion
  // between database and "external" formats, for example a snake_case to camelCase
  // conversion.
  get cols() {
    return this._cols;
  }

  // Creates a concatenated string from the property values of the given object.
  propKey(obj) {
    const size = this.size;
    let key = PROP_KEY_PREFIX;

    for (let i = 0; i < size; ++i) {
      key += propToStr(this.getProp(obj, i));

      if (i !== size - 1) {
        key += ',';
      }
    }

    return key;
  }

  // Returns the property values of the given object as an array.
  getProps(obj) {
    const size = this.size;
    const props = new Array(size);

    for (let i = 0; i < size; ++i) {
      props[i] = this.getProp(obj, i);
    }

    return props;
  }

  // Returns true if the given object has a non-null value in all properties.
  hasProps(obj) {
    const size = this.size;

    for (let i = 0; i < size; ++i) {
      const prop = this.getProp(obj, i);

      if (prop === null || prop === undefined) {
        return false;
      }
    }

    return true;
  }

  // Returns the index:th property value of the given object.
  getProp(obj, index) {
    return this._propGetters[index](obj);
  }

  // Sets the index:th property value of the given object.
  setProp(obj, index, value) {
    return this._propSetters[index](obj, value);
  }

  // Returns an instance of ReferenceBuilder that points to the index:th
  // value of a row.
  ref(builder, index) {
    const table = builder.tableRefFor(this.modelClass.getTableName());

    return this._refs[index].clone().table(table);
  }

  // Returns an array of reference builders. `ref(builder, i)` for each i.
  refs(builder) {
    const refs = new Array(this.size);

    for (let i = 0, l = refs.length; i < l; ++i) {
      refs[i] = this.ref(builder, i);
    }

    return refs;
  }

  // Appends an update operation for the index:th column into `patch` object.
  patch(patch, index, value) {
    return this._patchers[index](patch, value);
  }

  // String representation of this property's index:th column for logging.
  propDescription(index) {
    return this._refs[index].expression;
  }
}

function createRefs(refs) {
  try {
    return refs.map(it => {
      if (!isObject(it) || !it.isObjectionReferenceBuilder) {
        return createRef(it);
      } else {
        return it;
      }
    });
  } catch (err) {
    throw new InvalidReferenceError();
  }
}

function createPaths(refs, modelClassResolver) {
  return refs.map(ref => {
    if (!ref.tableName) {
      throw new InvalidReferenceError();
    }

    const modelClass = modelClassResolver(ref.tableName);

    if (!modelClass) {
      throw new ModelNotFoundError(ref.tableName);
    }

    const prop = modelClass.columnNameToPropertyName(ref.column);
    const jsonPath = ref.parsedExpr.access.map(it => it.ref);

    return {
      path: [prop].concat(jsonPath),
      modelClass
    };
  });
}

function resolveModelClass(paths) {
  const modelClasses = paths.map(it => it.modelClass);
  const uniqueModelClasses = uniqBy(modelClasses);

  if (uniqueModelClasses.length !== 1) {
    throw new InvalidReferenceError();
  }

  return modelClasses[0];
}

function createGetter(path) {
  if (path.length === 1) {
    const prop = path[0];
    return obj => obj[prop];
  } else {
    return obj => get(obj, path);
  }
}

function createSetter(path) {
  if (path.length === 1) {
    const prop = path[0];
    return (obj, value) => (obj[prop] = value);
  } else {
    return (obj, value) => set(obj, path, value);
  }
}

function createPatcher(ref) {
  if (ref.isPlainColumnRef) {
    return (patch, value) => (patch[ref.column] = value);
  } else {
    // Objection `patch`, `update` etc. methods understand field expressions.
    return (patch, value) => (patch[ref.expression] = value);
  }
}

module.exports = {
  RelationProperty
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/RelationSubqueryOperation.js":
/*!****************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/RelationSubqueryOperation.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { QueryBuilderOperation } = __webpack_require__(/*! ../queryBuilder/operations/QueryBuilderOperation */ "../node_modules/objection/lib/queryBuilder/operations/QueryBuilderOperation.js");

class RelationSubqueryOperation extends QueryBuilderOperation {
  constructor(name, opt) {
    super(name, opt);
    this.relation = opt.relation;
  }

  onBuild(builder) {
    return this.relation.findQuery(builder, {
      isColumnRef: true,
      ownerIds: this.relation.ownerProp.refs(findFirstNonPartialAncestorQuery(builder))
    });
  }
}

function findFirstNonPartialAncestorQuery(builder) {
  builder = builder.parentQuery();

  while (builder.isPartial()) {
    if (!builder.parentQuery()) {
      break;
    }

    builder = builder.parentQuery();
  }

  return builder;
}

module.exports = {
  RelationSubqueryOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/RelationUpdateOperation.js":
/*!**************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/RelationUpdateOperation.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { UpdateOperation } = __webpack_require__(/*! ../queryBuilder/operations/UpdateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js");

class RelationUpdateOperation extends UpdateOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
  }

  onBuild(builder) {
    super.onBuild(builder);

    this.relation.findQuery(builder, {
      ownerIds: [this.relation.ownerProp.getProps(this.owner)]
    });
  }
}

module.exports = {
  RelationUpdateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneDeleteOperation.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/belongsToOne/BelongsToOneDeleteOperation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { RelationDeleteOperation } = __webpack_require__(/*! ../RelationDeleteOperation */ "../node_modules/objection/lib/relations/RelationDeleteOperation.js");

class BelongsToOneDeleteOperation extends RelationDeleteOperation {
  onAfter1(_, result) {
    const ownerProp = this.relation.ownerProp;

    for (let i = 0, l = ownerProp.size; i < l; ++i) {
      ownerProp.setProp(this.owner, i, null);
    }

    return result;
  }
}

module.exports = {
  BelongsToOneDeleteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneInsertOperation.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/belongsToOne/BelongsToOneInsertOperation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { RelationInsertOperation } = __webpack_require__(/*! ../RelationInsertOperation */ "../node_modules/objection/lib/relations/RelationInsertOperation.js");
const { after } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class BelongsToOneInsertOperation extends RelationInsertOperation {
  onAdd(builder, args) {
    const retVal = super.onAdd(builder, args);

    if (this.models.length > 1) {
      throw this.relation.createError('can only insert one model to a BelongsToOneRelation');
    }

    return retVal;
  }

  onAfter1(builder, ret) {
    const maybePromise = super.onAfter1(builder, ret);
    const owner = this.owner;

    const ownerProp = this.relation.ownerProp;
    const relatedProp = this.relation.relatedProp;

    return after(maybePromise, inserted => {
      const patch = {};

      for (let i = 0, l = ownerProp.size; i < l; ++i) {
        const relatedValue = relatedProp.getProp(inserted[0], i);

        ownerProp.setProp(this.owner, i, relatedValue);
        ownerProp.patch(patch, i, relatedValue);
      }

      if (this.assignResultToOwner) {
        owner.$setRelated(this.relation, inserted);
      }

      return this.owner
        .$query()
        .childQueryOf(builder)
        .patch(patch)
        .then(() => inserted);
    });
  }
}

module.exports = {
  BelongsToOneInsertOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelateOperation.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelateOperation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { normalizeIds } = __webpack_require__(/*! ../../utils/normalizeIds */ "../node_modules/objection/lib/utils/normalizeIds.js");
const { RelateOperation } = __webpack_require__(/*! ../../queryBuilder/operations/RelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/RelateOperation.js");

class BelongsToOneRelateOperation extends RelateOperation {
  onAdd(_, args) {
    this.input = args[0];
    this.ids = normalizeIds(args[0], this.relation.relatedProp, { arrayOutput: true });

    if (this.ids.length > 1) {
      throw this.relation.createError('can only relate one model to a BelongsToOneRelation');
    }

    return true;
  }

  queryExecutor(builder) {
    const patch = {};
    const ownerProp = this.relation.ownerProp;

    for (let i = 0, l = ownerProp.size; i < l; ++i) {
      const relatedValue = this.ids[0][i];

      ownerProp.setProp(this.owner, i, relatedValue);
      ownerProp.patch(patch, i, relatedValue);
    }

    return this.relation.ownerModelClass
      .query()
      .childQueryOf(builder)
      .copyFrom(builder, builder.constructor.JoinSelector)
      .copyFrom(builder, builder.constructor.WhereSelector)
      .patch(patch)
      .findById(this.owner.$id());
  }
}

module.exports = {
  BelongsToOneRelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelation.js":
/*!************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelation.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Relation } = __webpack_require__(/*! ../Relation */ "../node_modules/objection/lib/relations/Relation.js");
const { BelongsToOneInsertOperation } = __webpack_require__(/*! ./BelongsToOneInsertOperation */ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneInsertOperation.js");
const { BelongsToOneDeleteOperation } = __webpack_require__(/*! ./BelongsToOneDeleteOperation */ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneDeleteOperation.js");
const { BelongsToOneRelateOperation } = __webpack_require__(/*! ./BelongsToOneRelateOperation */ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneRelateOperation.js");
const { BelongsToOneUnrelateOperation } = __webpack_require__(/*! ./BelongsToOneUnrelateOperation */ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneUnrelateOperation.js");

class BelongsToOneRelation extends Relation {
  isOneToOne() {
    return true;
  }

  insert(builder, owner) {
    return new BelongsToOneInsertOperation('insert', {
      relation: this,
      owner: owner
    });
  }

  delete(builder, owner) {
    return new BelongsToOneDeleteOperation('delete', {
      relation: this,
      owner: owner
    });
  }

  relate(builder, owner) {
    return new BelongsToOneRelateOperation('relate', {
      relation: this,
      owner: owner
    });
  }

  unrelate(builder, owner) {
    return new BelongsToOneUnrelateOperation('unrelate', {
      relation: this,
      owner: owner
    });
  }
}

Object.defineProperties(BelongsToOneRelation.prototype, {
  isObjectionBelongsToOneRelation: {
    enumerable: false,
    writable: false,
    value: true
  }
});

module.exports = {
  BelongsToOneRelation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/belongsToOne/BelongsToOneUnrelateOperation.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/belongsToOne/BelongsToOneUnrelateOperation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { UnrelateOperation } = __webpack_require__(/*! ../../queryBuilder/operations/UnrelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UnrelateOperation.js");

class BelongsToOneUnrelateOperation extends UnrelateOperation {
  onAdd() {
    const ids = new Array(this.relation.ownerProp.size);

    for (let i = 0, l = this.relation.ownerProp.size; i < l; ++i) {
      ids[i] = null;
    }

    this.ids = [ids];
    return true;
  }

  queryExecutor(builder) {
    const patch = {};
    const ownerProp = this.relation.ownerProp;

    for (let i = 0, l = ownerProp.size; i < l; ++i) {
      const relatedValue = this.ids[0][i];

      ownerProp.setProp(this.owner, i, relatedValue);
      ownerProp.patch(patch, i, relatedValue);
    }

    return this.relation.ownerModelClass
      .query()
      .childQueryOf(builder)
      .copyFrom(builder, builder.constructor.JoinSelector)
      .copyFrom(builder, builder.constructor.WhereSelector)
      .patch(patch)
      .findById(this.owner.$id());
  }
}

module.exports = {
  BelongsToOneUnrelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/hasMany/HasManyInsertOperation.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/hasMany/HasManyInsertOperation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { RelationInsertOperation } = __webpack_require__(/*! ../RelationInsertOperation */ "../node_modules/objection/lib/relations/RelationInsertOperation.js");
const { after } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class HasManyInsertOperation extends RelationInsertOperation {
  onAdd(builder, args) {
    const retVal = super.onAdd(builder, args);
    const ownerProp = this.relation.ownerProp;
    const relatedProp = this.relation.relatedProp;

    for (let i = 0, lm = this.models.length; i < lm; ++i) {
      const model = this.models[i];

      for (let j = 0, lp = relatedProp.size; j < lp; ++j) {
        relatedProp.setProp(model, j, ownerProp.getProp(this.owner, j));
      }
    }

    return retVal;
  }

  onAfter1(builder, ret) {
    const maybePromise = super.onAfter1(builder, ret);

    if (!this.assignResultToOwner) {
      return maybePromise;
    }

    return after(maybePromise, inserted => {
      this.owner.$appendRelated(this.relation, inserted);
      return inserted;
    });
  }
}

module.exports = {
  HasManyInsertOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/hasMany/HasManyRelateOperation.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/hasMany/HasManyRelateOperation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { normalizeIds } = __webpack_require__(/*! ../../utils/normalizeIds */ "../node_modules/objection/lib/utils/normalizeIds.js");
const { RelateOperation } = __webpack_require__(/*! ../../queryBuilder/operations/RelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/RelateOperation.js");

class HasManyRelateOperation extends RelateOperation {
  onAdd(_, args) {
    this.input = args[0];
    this.ids = normalizeIds(args[0], this.relation.relatedModelClass.getIdRelationProperty(), {
      arrayOutput: true
    });
    return true;
  }

  queryExecutor(builder) {
    const patch = {};
    const ownerProp = this.relation.ownerProp;
    const relatedProp = this.relation.relatedProp;

    for (let i = 0, l = relatedProp.size; i < l; ++i) {
      relatedProp.patch(patch, i, ownerProp.getProp(this.owner, i));
    }

    return this.relation.relatedModelClass
      .query()
      .childQueryOf(builder)
      .patch(patch)
      .copyFrom(builder, builder.constructor.JoinSelector)
      .copyFrom(builder, builder.constructor.WhereSelector)
      .findByIds(this.ids)
      .modify(this.relation.modify);
  }
}

module.exports = {
  HasManyRelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/hasMany/HasManyRelation.js":
/*!**************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/hasMany/HasManyRelation.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Relation } = __webpack_require__(/*! ../Relation */ "../node_modules/objection/lib/relations/Relation.js");
const { HasManyInsertOperation } = __webpack_require__(/*! ./HasManyInsertOperation */ "../node_modules/objection/lib/relations/hasMany/HasManyInsertOperation.js");
const { HasManyRelateOperation } = __webpack_require__(/*! ./HasManyRelateOperation */ "../node_modules/objection/lib/relations/hasMany/HasManyRelateOperation.js");
const { HasManyUnrelateOperation } = __webpack_require__(/*! ./HasManyUnrelateOperation */ "../node_modules/objection/lib/relations/hasMany/HasManyUnrelateOperation.js");

class HasManyRelation extends Relation {
  insert(_, owner) {
    return new HasManyInsertOperation('insert', {
      relation: this,
      owner: owner
    });
  }

  relate(_, owner) {
    return new HasManyRelateOperation('relate', {
      relation: this,
      owner: owner
    });
  }

  unrelate(_, owner) {
    return new HasManyUnrelateOperation('unrelate', {
      relation: this,
      owner: owner
    });
  }

  hasRelateProp(model) {
    return model.$hasId();
  }

  setRelateProp(model, values) {
    model.$id(values);
  }
}

Object.defineProperties(HasManyRelation.prototype, {
  isObjectionHasManyRelation: {
    enumerable: false,
    writable: false,
    value: true
  }
});

module.exports = {
  HasManyRelation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/hasMany/HasManyUnrelateOperation.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/hasMany/HasManyUnrelateOperation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { UnrelateOperation } = __webpack_require__(/*! ../../queryBuilder/operations/UnrelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UnrelateOperation.js");

class HasManyUnrelateOperation extends UnrelateOperation {
  queryExecutor(builder) {
    const patch = {};
    const ownerProp = this.relation.ownerProp;
    const relatedProp = this.relation.relatedProp;
    const ownerValues = ownerProp.getProps(this.owner);
    const relatedRefs = relatedProp.refs(builder);

    for (let i = 0, l = relatedProp.size; i < l; ++i) {
      relatedProp.patch(patch, i, null);
    }

    return this.relation.relatedModelClass
      .query()
      .childQueryOf(builder)
      .patch(patch)
      .copyFrom(builder, builder.constructor.JoinSelector)
      .copyFrom(builder, builder.constructor.WhereSelector)
      .whereComposite(relatedRefs, ownerValues)
      .modify(this.relation.modify);
  }
}

module.exports = {
  HasManyUnrelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/hasOne/HasOneRelation.js":
/*!************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/hasOne/HasOneRelation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { HasManyRelation } = __webpack_require__(/*! ../hasMany/HasManyRelation */ "../node_modules/objection/lib/relations/hasMany/HasManyRelation.js");

class HasOneRelation extends HasManyRelation {
  isOneToOne() {
    return true;
  }
}

module.exports = {
  HasOneRelation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/hasOneThrough/HasOneThroughRelation.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/hasOneThrough/HasOneThroughRelation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyRelation } = __webpack_require__(/*! ../manyToMany/ManyToManyRelation */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyRelation.js");

class HasOneThroughRelation extends ManyToManyRelation {
  isOneToOne() {
    return true;
  }
}

module.exports = {
  HasOneThroughRelation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This mixin contains the shared code for all modify operations (update, delete, relate, unrelate)
// for ManyToManyRelation operations.
//
// The most important thing this mixin does is that it moves the filters from the main query
// into a subquery and then adds a single where clause that uses the subquery. This is done so
// that we are able to `innerJoin` the join table to the query. Most SQL engines don't allow
// joins in updates or deletes. Join table is joined so that queries can reference the join
// table columns.
const ManyToManyModifyMixin = Operation => {
  return class extends Operation {
    constructor(...args) {
      super(...args);
      this.modifyFilterSubquery = null;
    }

    get modifyMainQuery() {
      return true;
    }

    // At this point `builder` should only have the user's own wheres and joins. There can
    // be other operations (like orderBy) too, but those are meaningless with modify operations.
    onBuild(builder) {
      this.modifyFilterSubquery = this.createModifyFilterSubquery(builder);

      if (this.modifyMainQuery) {
        // We can now remove the where and join statements from the main query.
        this.removeFiltersFromMainQuery(builder);

        // Add a single where clause that uses the created subquery.
        this.applyModifyFilterForRelatedTable(builder);
      }

      return super.onBuild(builder);
    }

    createModifyFilterSubquery(builder) {
      const relatedModelClass = this.relation.relatedModelClass;
      const builderClass = builder.constructor;
      const ownerProp = this.relation.ownerProp;
      const ownerIds = [ownerProp.getProps(this.owner)];

      // Create an empty subquery.
      const modifyFilterSubquery = relatedModelClass.query().childQueryOf(builder);

      // Add the necessary joins and wheres so that only rows related to
      // `this.owner` are selected.
      this.relation.findQuery(modifyFilterSubquery, { ownerIds });

      // Copy all where and join statements from the main query to the subquery.
      modifyFilterSubquery
        .copyFrom(builder, builderClass.WhereSelector)
        .copyFrom(builder, builderClass.JoinSelector);

      return modifyFilterSubquery.clearSelect();
    }

    removeFiltersFromMainQuery(builder) {
      const builderClass = builder.constructor;

      builder.clear(builderClass.WhereSelector);
      builder.clear(builderClass.JoinSelector);
    }

    applyModifyFilterForRelatedTable(builder) {
      const idRefs = this.relation.relatedModelClass.getIdRelationProperty().refs(builder);
      const subquery = this.modifyFilterSubquery.clone().select(idRefs);

      return builder.whereInComposite(idRefs, subquery);
    }

    applyModifyFilterForJoinTable(builder) {
      const joinTableOwnerRefs = this.relation.joinTableOwnerProp.refs(builder);
      const joinTableRelatedRefs = this.relation.joinTableRelatedProp.refs(builder);

      const relatedRefs = this.relation.relatedProp.refs(builder);
      const ownerIds = this.relation.ownerProp.getProps(this.owner);

      const subquery = this.modifyFilterSubquery.clone().select(relatedRefs);

      return builder
        .whereInComposite(joinTableRelatedRefs, subquery)
        .whereComposite(joinTableOwnerRefs, ownerIds);
    }

    clone() {
      const clone = super.clone();
      clone.modifyFilterSubquery = this.modifyFilterSubquery;
      return clone;
    }
  };
};

module.exports = {
  ManyToManyModifyMixin
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/ManyToManyMySqlModifyMixin.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/ManyToManyMySqlModifyMixin.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyModifyMixin } = __webpack_require__(/*! ./ManyToManyModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js");

// We need to override this mixin for mysql because mysql doesn't
// allow referencing the updated/deleted table directly in a subquery.
// We need to wrap the subquery into yet another subquery (sigh).
const ManyToManyMySqlModifyMixin = Operation => {
  return class extends ManyToManyModifyMixin(Operation) {
    createModifyFilterSubquery(builder) {
      const modifyFilterSubquery = super.createModifyFilterSubquery(builder);
      return this.wrapIntoYetAnotherSubquery(builder, modifyFilterSubquery);
    }

    wrapIntoYetAnotherSubquery(builder, modifyFilterSubquery) {
      const relatedModelClass = this.relation.relatedModelClass;
      const tableRef = builder.tableRefFor(relatedModelClass.getTableName());

      return relatedModelClass
        .query()
        .childQueryOf(builder)
        .from(modifyFilterSubquery.as(tableRef));
    }
  };
};

module.exports = {
  ManyToManyMySqlModifyMixin
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/ManyToManyRelation.js":
/*!********************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/ManyToManyRelation.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const getModel = () => __webpack_require__(/*! ../../model/Model */ "../node_modules/objection/lib/model/Model.js").Model;
const { Relation } = __webpack_require__(/*! ../Relation */ "../node_modules/objection/lib/relations/Relation.js");
const { RelationProperty } = __webpack_require__(/*! ../RelationProperty */ "../node_modules/objection/lib/relations/RelationProperty.js");

const { ref } = __webpack_require__(/*! ../../queryBuilder/ReferenceBuilder */ "../node_modules/objection/lib/queryBuilder/ReferenceBuilder.js");
const { isSqlite, isMySql } = __webpack_require__(/*! ../../utils/knexUtils */ "../node_modules/objection/lib/utils/knexUtils.js");
const { inheritModel } = __webpack_require__(/*! ../../model/inheritModel */ "../node_modules/objection/lib/model/inheritModel.js");
const { resolveModel } = __webpack_require__(/*! ../../utils/resolveModel */ "../node_modules/objection/lib/utils/resolveModel.js");
const { mapAfterAllReturn } = __webpack_require__(/*! ../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { isFunction, isObject } = __webpack_require__(/*! ../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

const { ManyToManyFindOperation } = __webpack_require__(/*! ./find/ManyToManyFindOperation */ "../node_modules/objection/lib/relations/manyToMany/find/ManyToManyFindOperation.js");
const { ManyToManyInsertOperation } = __webpack_require__(/*! ./insert/ManyToManyInsertOperation */ "../node_modules/objection/lib/relations/manyToMany/insert/ManyToManyInsertOperation.js");
const { ManyToManyRelateOperation } = __webpack_require__(/*! ./relate/ManyToManyRelateOperation */ "../node_modules/objection/lib/relations/manyToMany/relate/ManyToManyRelateOperation.js");

const { ManyToManyUnrelateOperation } = __webpack_require__(/*! ./unrelate/ManyToManyUnrelateOperation */ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperation.js");
const { ManyToManyUnrelateMySqlOperation } = __webpack_require__(/*! ./unrelate/ManyToManyUnrelateMySqlOperation */ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateMySqlOperation.js");
const {
  ManyToManyUnrelateSqliteOperation
} = __webpack_require__(/*! ./unrelate/ManyToManyUnrelateSqliteOperation */ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateSqliteOperation.js");

const { ManyToManyUpdateOperation } = __webpack_require__(/*! ./update/ManyToManyUpdateOperation */ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperation.js");
const { ManyToManyUpdateMySqlOperation } = __webpack_require__(/*! ./update/ManyToManyUpdateMySqlOperation */ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateMySqlOperation.js");
const { ManyToManyUpdateSqliteOperation } = __webpack_require__(/*! ./update/ManyToManyUpdateSqliteOperation */ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateSqliteOperation.js");

const { ManyToManyDeleteOperation } = __webpack_require__(/*! ./delete/ManyToManyDeleteOperation */ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperation.js");
const { ManyToManyDeleteMySqlOperation } = __webpack_require__(/*! ./delete/ManyToManyDeleteMySqlOperation */ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteMySqlOperation.js");
const { ManyToManyDeleteSqliteOperation } = __webpack_require__(/*! ./delete/ManyToManyDeleteSqliteOperation */ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteSqliteOperation.js");

class ManyToManyRelation extends Relation {
  setMapping(mapping) {
    const retVal = super.setMapping(mapping);

    let ctx = {
      mapping,
      ownerModelClass: this.ownerModelClass,
      relatedModelClass: this.relatedModelClass,
      ownerProp: this.ownerProp,
      relatedProp: this.relatedProp,

      joinTableModelClass: null,
      joinTableOwnerProp: null,
      joinTableRelatedProp: null,
      joinTableBeforeInsert: null,
      joinTableExtras: [],

      createError: msg => this.createError(msg)
    };

    ctx = checkThroughObject(ctx);
    ctx = resolveJoinModelClassIfDefined(ctx);
    ctx = createJoinProperties(ctx);
    ctx = parseExtras(ctx);
    ctx = parseBeforeInsert(ctx);
    ctx = finalizeJoinModelClass(ctx);

    this.joinTableExtras = ctx.joinTableExtras;
    this.joinTableModelClass = ctx.joinTableModelClass;
    this.joinTableOwnerProp = ctx.joinTableOwnerProp;
    this.joinTableRelatedProp = ctx.joinTableRelatedProp;
    this.joinTableBeforeInsert = ctx.joinTableBeforeInsert;

    return retVal;
  }

  get forbiddenMappingProperties() {
    return [];
  }

  findQuery(builder, opt) {
    const joinTableOwnerRefs = this.joinTableOwnerProp.refs(builder);
    const joinTable = builder.tableNameFor(this.joinTable);
    const joinTableAlias = builder.tableRefFor(this.joinTable);

    builder.join(aliasedTableName(joinTable, joinTableAlias), join => {
      for (let i = 0, l = this.relatedProp.size; i < l; ++i) {
        const relatedRef = this.relatedProp.ref(builder, i);
        const joinTableRelatedRef = this.joinTableRelatedProp.ref(builder, i);

        join.on(relatedRef, joinTableRelatedRef);
      }
    });

    if (opt.isColumnRef) {
      for (let i = 0, l = joinTableOwnerRefs.length; i < l; ++i) {
        builder.where(joinTableOwnerRefs[i], ref(opt.ownerIds[i]));
      }
    } else if (containsNonNull(opt.ownerIds)) {
      builder.whereInComposite(joinTableOwnerRefs, opt.ownerIds);
    } else {
      builder.resolve([]);
    }

    return builder.modify(this.modify);
  }

  join(
    builder,
    {
      joinOperation = defaultJoinOperation(this, builder),
      relatedTableAlias = defaultRelatedTablealias(this, builder),
      relatedJoinSelectQuery = defaultRelatedJoinSelectQuery(this, builder),
      relatedTable = defaultRelatedTable(this, builder),
      ownerTable = defaultOwnerTable(this, builder),
      joinTableAlias = defaultJoinTableAlias(this, relatedTableAlias, builder)
    } = {}
  ) {
    let relatedJoinSelect = relatedJoinSelectQuery.modify(this.modify).as(relatedTableAlias);

    if (relatedJoinSelect.isSelectAll()) {
      // No need to join a subquery if the query is `select * from "RelatedTable"`.
      relatedJoinSelect = aliasedTableName(relatedTable, relatedTableAlias);
    }

    return builder[joinOperation](aliasedTableName(this.joinTable, joinTableAlias), join => {
      const ownerProp = this.ownerProp;
      const joinTableOwnerProp = this.joinTableOwnerProp;

      for (let i = 0, l = ownerProp.size; i < l; ++i) {
        const joinTableOwnerRef = joinTableOwnerProp.ref(builder, i).table(joinTableAlias);
        const ownerRef = ownerProp.ref(builder, i).table(ownerTable);

        join.on(joinTableOwnerRef, ownerRef);
      }
    })[joinOperation](relatedJoinSelect, join => {
      const relatedProp = this.relatedProp;
      const joinTableRelatedProp = this.joinTableRelatedProp;

      for (let i = 0, l = relatedProp.size; i < l; ++i) {
        const joinTableRelatedRef = joinTableRelatedProp.ref(builder, i).table(joinTableAlias);
        const relatedRef = relatedProp.ref(builder, i).table(relatedTableAlias);

        join.on(joinTableRelatedRef, relatedRef);
      }
    });
  }

  find(builder, owners) {
    return new ManyToManyFindOperation('find', {
      relation: this,
      owners: owners
    });
  }

  insert(builder, owner) {
    return new ManyToManyInsertOperation('insert', {
      relation: this,
      owner: owner
    });
  }

  update(builder, owner) {
    if (isSqlite(builder.knex())) {
      return new ManyToManyUpdateSqliteOperation('update', {
        relation: this,
        owner: owner
      });
    } else if (isMySql(builder.knex())) {
      return new ManyToManyUpdateMySqlOperation('update', {
        relation: this,
        owner: owner
      });
    } else {
      return new ManyToManyUpdateOperation('update', {
        relation: this,
        owner: owner
      });
    }
  }

  patch(builder, owner) {
    if (isSqlite(builder.knex())) {
      return new ManyToManyUpdateSqliteOperation('patch', {
        modelOptions: { patch: true },
        relation: this,
        owner: owner
      });
    } else if (isMySql(builder.knex())) {
      return new ManyToManyUpdateMySqlOperation('patch', {
        modelOptions: { patch: true },
        relation: this,
        owner: owner
      });
    } else {
      return new ManyToManyUpdateOperation('patch', {
        modelOptions: { patch: true },
        relation: this,
        owner: owner
      });
    }
  }

  delete(builder, owner) {
    if (isSqlite(builder.knex())) {
      return new ManyToManyDeleteSqliteOperation('delete', {
        relation: this,
        owner: owner
      });
    } else if (isMySql(builder.knex())) {
      return new ManyToManyDeleteMySqlOperation('delete', {
        relation: this,
        owner: owner
      });
    } else {
      return new ManyToManyDeleteOperation('delete', {
        relation: this,
        owner: owner
      });
    }
  }

  relate(builder, owner) {
    return new ManyToManyRelateOperation('relate', {
      relation: this,
      owner: owner
    });
  }

  unrelate(builder, owner) {
    if (isSqlite(builder.knex())) {
      return new ManyToManyUnrelateSqliteOperation('unrelate', {
        relation: this,
        owner: owner
      });
    } else if (isMySql(builder.knex())) {
      return new ManyToManyUnrelateMySqlOperation('unrelate', {
        relation: this,
        owner: owner
      });
    } else {
      return new ManyToManyUnrelateOperation('unrelate', {
        relation: this,
        owner: owner
      });
    }
  }

  createJoinModels(ownerId, related) {
    const joinModels = new Array(related.length);

    for (let i = 0, lr = related.length; i < lr; ++i) {
      joinModels[i] = this.createJoinModel(ownerId, related[i]);
    }

    return joinModels;
  }

  createJoinModel(ownerId, rel) {
    let joinModel = {};

    for (let j = 0, lp = this.joinTableOwnerProp.size; j < lp; ++j) {
      this.joinTableOwnerProp.setProp(joinModel, j, ownerId[j]);
    }

    for (let j = 0, lp = this.joinTableRelatedProp.size; j < lp; ++j) {
      const value = this.relatedProp.getProp(rel, j);

      if (value !== undefined) {
        this.joinTableRelatedProp.setProp(joinModel, j, value);
      }
    }

    for (const extra of this.joinTableExtras) {
      let extraValue = rel[extra.aliasProp];

      if (extraValue === undefined && rel.$$queryProps) {
        extraValue = rel.$$queryProps[extra.aliasProp];
      }

      if (extraValue !== undefined) {
        joinModel[extra.joinTableProp] = extraValue;
      }
    }

    return joinModel;
  }

  omitExtraProps(models) {
    if (this.joinTableExtras && this.joinTableExtras.length) {
      const props = this.joinTableExtras.map(extra => extra.aliasProp);

      for (const model of models) {
        // Omit extra properties instead of deleting them from the models so that they can
        // be used in the `$before` and `$after` hooks.
        model.$omitFromDatabaseJson(props);
      }
    }
  }

  executeJoinTableBeforeInsert(models, queryContext, result) {
    return mapAfterAllReturn(
      models,
      model => this.joinTableBeforeInsert(model, queryContext),
      result
    );
  }
}

Object.defineProperties(ManyToManyRelation.prototype, {
  isObjectionManyToManyRelation: {
    enumerable: false,
    writable: false,
    value: true
  }
});

function defaultJoinOperation() {
  return 'join';
}

function defaultRelatedTablealias(relation, builder) {
  return builder.tableRefFor(relation.relatedModelClass.getTableName());
}

function defaultRelatedJoinSelectQuery(relation, builder) {
  return relation.relatedModelClass.query().childQueryOf(builder);
}

function defaultRelatedTable(relation, builder) {
  return builder.tableNameFor(relation.relatedModelClass.getTableName());
}

function defaultOwnerTable(relation, builder) {
  return builder.tableRefFor(relation.ownerModelClass.getTableName());
}

function defaultJoinTableAlias(relation, relatedTableAlias, builder) {
  const alias = builder.tableRefFor(relation.joinTable);

  if (alias === relation.joinTable) {
    return relation.ownerModelClass.joinTableAlias(relatedTableAlias);
  } else {
    return alias;
  }
}

function aliasedTableName(tableName, alias) {
  if (tableName === alias) {
    return tableName;
  } else {
    return `${tableName} as ${alias}`;
  }
}

function checkThroughObject(ctx) {
  const mapping = ctx.mapping;

  if (!isObject(mapping.join.through)) {
    throw ctx.createError('join must have a `through` object that describes the join table.');
  }

  if (!mapping.join.through.from || !mapping.join.through.to) {
    throw ctx.createError(
      'join.through must be an object that describes the join table. For example: {from: "JoinTable.someId", to: "JoinTable.someOtherId"}'
    );
  }

  return ctx;
}

function resolveJoinModelClassIfDefined(ctx) {
  let joinTableModelClass = null;

  if (ctx.mapping.join.through.modelClass) {
    try {
      joinTableModelClass = resolveModel(
        ctx.mapping.join.through.modelClass,
        ctx.ownerModelClass.modelPaths,
        'join.through.modelClass'
      );
    } catch (err) {
      throw ctx.createError(err.message);
    }
  }

  return Object.assign(ctx, { joinTableModelClass });
}

function createJoinProperties(ctx) {
  let ret;

  let fromProp;
  let toProp;

  let relatedProp;
  let ownerProp;

  ret = createRelationProperty(ctx, ctx.mapping.join.through.from, 'join.through.from');
  fromProp = ret.prop;
  ctx = ret.ctx;

  ret = createRelationProperty(ctx, ctx.mapping.join.through.to, 'join.through.to');
  toProp = ret.prop;
  ctx = ret.ctx;

  if (fromProp.modelClass.getTableName() !== toProp.modelClass.getTableName()) {
    throw ctx.createError('join.through `from` and `to` must point to the same join table.');
  }

  if (ctx.relatedProp.modelClass.getTableName() === fromProp.modelClass.getTableName()) {
    relatedProp = fromProp;
    ownerProp = toProp;
  } else {
    relatedProp = toProp;
    ownerProp = fromProp;
  }

  return Object.assign(ctx, {
    joinTableOwnerProp: ownerProp,
    joinTableRelatedProp: relatedProp
  });
}

function createRelationProperty(ctx, refString, messagePrefix) {
  let prop = null;
  let joinTableModelClass = ctx.joinTableModelClass;

  const resolveModelClass = table => {
    if (joinTableModelClass === null) {
      joinTableModelClass = inheritModel(getModel());
      joinTableModelClass.tableName = table;
      joinTableModelClass.idColumn = null;
      joinTableModelClass.concurrency = ctx.ownerModelClass.concurrency;
    }

    if (joinTableModelClass.getTableName() === table) {
      return joinTableModelClass;
    } else {
      return null;
    }
  };

  try {
    prop = new RelationProperty(refString, resolveModelClass);
  } catch (err) {
    if (err instanceof RelationProperty.ModelNotFoundError) {
      throw ctx.createError('join.through `from` and `to` must point to the same join table.');
    } else {
      throw ctx.createError(
        `${messagePrefix} must have format JoinTable.columnName. For example "JoinTable.someId" or in case of composite key ["JoinTable.a", "JoinTable.b"].`
      );
    }
  }

  return {
    ctx: Object.assign(ctx, { joinTableModelClass }),
    prop
  };
}

function parseExtras(ctx) {
  let extraDef = ctx.mapping.join.through.extra;

  if (!extraDef) {
    return ctx;
  }

  if (Array.isArray(extraDef)) {
    extraDef = extraDef.reduce((extraDef, col) => {
      extraDef[col] = col;
      return extraDef;
    }, {});
  }

  const joinTableExtras = Object.keys(extraDef).map(key => {
    const val = extraDef[key];

    return {
      joinTableCol: val,
      joinTableProp: ctx.joinTableModelClass.columnNameToPropertyName(val),
      aliasCol: key,
      aliasProp: ctx.joinTableModelClass.columnNameToPropertyName(key)
    };
  });

  return Object.assign(ctx, { joinTableExtras });
}

function parseBeforeInsert(ctx) {
  let joinTableBeforeInsert;

  if (isFunction(ctx.mapping.join.through.beforeInsert)) {
    joinTableBeforeInsert = ctx.mapping.join.through.beforeInsert;
  } else {
    joinTableBeforeInsert = model => model;
  }

  return Object.assign(ctx, { joinTableBeforeInsert });
}

function finalizeJoinModelClass(ctx) {
  if (ctx.joinTableModelClass.getIdColumn() === null) {
    // We cannot know if the join table has a primary key. Therefore we set some
    // known column as the idColumn so that inserts will work.
    ctx.joinTableModelClass.idColumn = ctx.joinTableRelatedProp.cols;
  }

  return ctx;
}

function containsNonNull(arr) {
  for (let i = 0, l = arr.length; i < l; ++i) {
    const val = arr[i];

    if (Array.isArray(val) && containsNonNull(val)) {
      return true;
    } else if (val !== null && val !== undefined) {
      return true;
    }
  }

  return false;
}

module.exports = {
  ManyToManyRelation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/ManyToManySqliteModifyMixin.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/ManyToManySqliteModifyMixin.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyModifyMixin } = __webpack_require__(/*! ./ManyToManyModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js");
const SQLITE_BUILTIN_ROW_ID = '_rowid_';

// We need to override this mixin for sqlite because sqlite doesn't support
// multi-column where in statements with subqueries. We need to use the
// internal _rowid_ column instead.
const ManyToManySqliteModifyMixin = Operation => {
  return class extends ManyToManyModifyMixin(Operation) {
    applyModifyFilterForRelatedTable(builder) {
      const tableRef = builder.tableRefFor(this.relation.relatedModelClass.getTableName());
      const rowIdRef = `${tableRef}.${SQLITE_BUILTIN_ROW_ID}`;
      const subquery = this.modifyFilterSubquery.clone().select(rowIdRef);

      return builder.whereInComposite(rowIdRef, subquery);
    }

    applyModifyFilterForJoinTable(builder) {
      const joinTableOwnerRefs = this.relation.joinTableOwnerProp.refs(builder);
      const tableRef = builder.tableRefFor(this.relation.getJoinModelClass(builder).getTableName());
      const rowIdRef = `${tableRef}.${SQLITE_BUILTIN_ROW_ID}`;

      const ownerIds = this.relation.ownerProp.getProps(this.owner);
      const subquery = this.modifyFilterSubquery.clone().select(rowIdRef);

      return builder
        .whereInComposite(rowIdRef, subquery)
        .whereComposite(joinTableOwnerRefs, ownerIds);
    }
  };
};

module.exports = {
  ManyToManySqliteModifyMixin
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteMySqlOperation.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteMySqlOperation.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyDeleteOperationBase } = __webpack_require__(/*! ./ManyToManyDeleteOperationBase */ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperationBase.js");
const { ManyToManyMySqlModifyMixin } = __webpack_require__(/*! ../ManyToManyMySqlModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyMySqlModifyMixin.js");

class ManyToManyDeleteMySqlOperation extends ManyToManyMySqlModifyMixin(
  ManyToManyDeleteOperationBase
) {}

module.exports = {
  ManyToManyDeleteMySqlOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperation.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperation.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyDeleteOperationBase } = __webpack_require__(/*! ./ManyToManyDeleteOperationBase */ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperationBase.js");
const { ManyToManyModifyMixin } = __webpack_require__(/*! ../ManyToManyModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js");

class ManyToManyDeleteOperation extends ManyToManyModifyMixin(ManyToManyDeleteOperationBase) {}

module.exports = {
  ManyToManyDeleteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperationBase.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperationBase.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { DeleteOperation } = __webpack_require__(/*! ../../../queryBuilder/operations/DeleteOperation */ "../node_modules/objection/lib/queryBuilder/operations/DeleteOperation.js");

class ManyToManyDeleteOperationBase extends DeleteOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
  }

  /* istanbul ignore next */
  applyModifyFilterForRelatedTable(builder) {
    throw new Error('not implemented');
  }

  /* istanbul ignore next */
  applyModifyFilterForJoinTable(builder) {
    throw new Error('not implemented');
  }
}

module.exports = {
  ManyToManyDeleteOperationBase
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteSqliteOperation.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteSqliteOperation.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyDeleteOperationBase } = __webpack_require__(/*! ./ManyToManyDeleteOperationBase */ "../node_modules/objection/lib/relations/manyToMany/delete/ManyToManyDeleteOperationBase.js");
const { ManyToManySqliteModifyMixin } = __webpack_require__(/*! ../ManyToManySqliteModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManySqliteModifyMixin.js");

class ManyToManyDeleteSqliteOperation extends ManyToManySqliteModifyMixin(
  ManyToManyDeleteOperationBase
) {}

module.exports = {
  ManyToManyDeleteSqliteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/find/ManyToManyFindOperation.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/find/ManyToManyFindOperation.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { RelationFindOperation } = __webpack_require__(/*! ../../RelationFindOperation */ "../node_modules/objection/lib/relations/RelationFindOperation.js");
const { getTempColumn } = __webpack_require__(/*! ../../../utils/tmpColumnUtils */ "../node_modules/objection/lib/utils/tmpColumnUtils.js");
const { uniqBy } = __webpack_require__(/*! ../../../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

class ManyToManyFindOperation extends RelationFindOperation {
  constructor(name, opt) {
    super(name, opt);

    this.ownerJoinColumnAlias = new Array(this.relation.joinTableOwnerProp.size);

    for (let i = 0, l = this.ownerJoinColumnAlias.length; i < l; ++i) {
      this.ownerJoinColumnAlias[i] = getTempColumn(i);
    }
  }

  onBuild(builder) {
    const relatedModelClass = this.relation.relatedModelClass;
    const joinTableOwnerProp = this.relation.joinTableOwnerProp;
    const ownerProp = this.relation.ownerProp;
    const ids = this.owners.map(owner => ownerProp.getProps(owner));

    this.relation.findQuery(builder, {
      ownerIds: uniqBy(ids, join)
    });

    if (!builder.has(builder.constructor.SelectSelector)) {
      const table = builder.tableRefFor(relatedModelClass.getTableName());

      // If the user hasn't specified a select clause, select the related model's columns.
      // If we don't do this we also get the join table's columns.
      builder.select(`${table}.*`);

      // Also select all extra columns.
      for (const extra of this.relation.joinTableExtras) {
        const joinTable = builder.tableRefFor(this.relation.joinTable);
        builder.select(`${joinTable}.${extra.joinTableCol} as ${extra.aliasCol}`);
      }
    }

    // We must select the owner join columns so that we know for which owner model the related
    // models belong to after the requests.
    for (let i = 0, l = joinTableOwnerProp.size; i < l; ++i) {
      const joinTableOwnerRef = joinTableOwnerProp.ref(builder, i);
      const propName = relatedModelClass.columnNameToPropertyName(this.ownerJoinColumnAlias[i]);

      builder.select(joinTableOwnerRef.as(this.ownerJoinColumnAlias[i]));
      // Mark them to be omitted later.
      this.omitProps.push(propName);
    }

    this.selectMissingJoinColumns(builder);
  }

  onAfter2(_, related) {
    const isOneToOne = this.relation.isOneToOne();

    if (this.assignResultToOwner) {
      const ownerProp = this.relation.ownerProp;
      const relatedByOwnerId = new Map();

      for (let i = 0, l = related.length; i < l; ++i) {
        const rel = related[i];
        const key = rel.$propKey(this.ownerJoinColumnAlias);
        let arr = relatedByOwnerId.get(key);

        if (!arr) {
          arr = [];
          relatedByOwnerId.set(key, arr);
        }

        arr.push(rel);
      }

      for (let i = 0, l = this.owners.length; i < l; ++i) {
        const own = this.owners[i];
        const key = ownerProp.propKey(own);
        const related = relatedByOwnerId.get(key);

        if (isOneToOne) {
          own[this.relationProperty] = (related && related[0]) || null;
        } else {
          own[this.relationProperty] = related || [];
        }
      }
    }

    return related;
  }

  clone() {
    const clone = super.clone();
    clone.ownerJoinColumnAlias = this.ownerJoinColumnAlias.slice();
    return clone;
  }
}

function join(arr) {
  return arr.join();
}

module.exports = {
  ManyToManyFindOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/insert/ManyToManyInsertOperation.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/insert/ManyToManyInsertOperation.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { RelationInsertOperation } = __webpack_require__(/*! ../../RelationInsertOperation */ "../node_modules/objection/lib/relations/RelationInsertOperation.js");
const { after } = __webpack_require__(/*! ../../../utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");

class ManyToManyInsertOperation extends RelationInsertOperation {
  onAdd(builder, args) {
    const retVal = super.onAdd(builder, args);
    this.relation.omitExtraProps(this.models);
    return retVal;
  }

  onAfter1(builder, ret) {
    const maybePromise = super.onAfter1(builder, ret);
    const owner = this.owner;

    return after(maybePromise, inserted => {
      const ownerId = this.relation.ownerProp.getProps(owner);
      const joinModelClass = this.relation.getJoinModelClass(builder.knex());

      const joinModels = this.relation.createJoinModels(
        ownerId,
        inserted.filter(it => this.relation.relatedProp.hasProps(it))
      );

      for (let i = 0, l = joinModels.length; i < l; ++i) {
        joinModels[i] = joinModelClass.fromJson(joinModels[i]);
      }

      if (this.assignResultToOwner) {
        owner.$appendRelated(this.relation, inserted);
      }

      if (joinModels.length === 0) {
        return inserted;
      }

      // Insert the join rows to the join table.
      return joinModelClass
        .query()
        .childQueryOf(builder)
        .runBefore((_, builder) =>
          this.relation.executeJoinTableBeforeInsert(joinModels, builder.context(), null)
        )
        .insert(joinModels)
        .then(() => inserted);
    });
  }
}

module.exports = {
  ManyToManyInsertOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/relate/ManyToManyRelateOperation.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/relate/ManyToManyRelateOperation.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { normalizeIds } = __webpack_require__(/*! ../../../utils/normalizeIds */ "../node_modules/objection/lib/utils/normalizeIds.js");
const { RelateOperation } = __webpack_require__(/*! ../../../queryBuilder/operations/RelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/RelateOperation.js");

class ManyToManyRelateOperation extends RelateOperation {
  onAdd(_, args) {
    this.input = args[0];
    this.ids = normalizeIds(args[0], this.relation.relatedProp);
    return true;
  }

  queryExecutor(builder) {
    const ownerId = this.relation.ownerProp.getProps(this.owner);
    const joinModelClass = this.relation.getJoinModelClass(builder.knex());

    const joinModels = this.relation
      .createJoinModels(ownerId, this.ids)
      .map(it => joinModelClass.fromJson(it));

    return joinModelClass
      .query()
      .childQueryOf(builder)
      .runBefore((_, builder) =>
        this.relation.executeJoinTableBeforeInsert(joinModels, builder.context(), null)
      )
      .insert(joinModels)
      .copyFrom(builder, /returning/)
      .runAfter(models => {
        if (Array.isArray(this.input)) {
          return models;
        } else {
          return models[0];
        }
      });
  }
}

module.exports = {
  ManyToManyRelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateMySqlOperation.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateMySqlOperation.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyUnrelateOperationBase } = __webpack_require__(/*! ./ManyToManyUnrelateOperationBase */ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperationBase.js");
const { ManyToManyMySqlModifyMixin } = __webpack_require__(/*! ../ManyToManyMySqlModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyMySqlModifyMixin.js");

class ManyToManyUnrelateMySqlOperation extends ManyToManyMySqlModifyMixin(
  ManyToManyUnrelateOperationBase
) {
  get modifyMainQuery() {
    return false;
  }
}

module.exports = {
  ManyToManyUnrelateMySqlOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperation.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperation.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyUnrelateOperationBase } = __webpack_require__(/*! ./ManyToManyUnrelateOperationBase */ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperationBase.js");
const { ManyToManyModifyMixin } = __webpack_require__(/*! ../ManyToManyModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js");

class ManyToManyUnrelateOperation extends ManyToManyModifyMixin(ManyToManyUnrelateOperationBase) {
  get modifyMainQuery() {
    return false;
  }
}

module.exports = {
  ManyToManyUnrelateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperationBase.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperationBase.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { UnrelateOperation } = __webpack_require__(/*! ../../../queryBuilder/operations/UnrelateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UnrelateOperation.js");

class ManyToManyUnrelateOperationBase extends UnrelateOperation {
  queryExecutor(builder) {
    const unrelateQuery = this.relation
      .getJoinModelClass(builder.knex())
      .query()
      .childQueryOf(builder)
      .delete();

    return this.applyModifyFilterForJoinTable(unrelateQuery);
  }

  /* istanbul ignore next */
  applyModifyFilterForRelatedTable(builder) {
    throw new Error('not implemented');
  }

  /* istanbul ignore next */
  applyModifyFilterForJoinTable(builder) {
    throw new Error('not implemented');
  }
}

module.exports = {
  ManyToManyUnrelateOperationBase
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateSqliteOperation.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateSqliteOperation.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyUnrelateOperationBase } = __webpack_require__(/*! ./ManyToManyUnrelateOperationBase */ "../node_modules/objection/lib/relations/manyToMany/unrelate/ManyToManyUnrelateOperationBase.js");
const { ManyToManySqliteModifyMixin } = __webpack_require__(/*! ../ManyToManySqliteModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManySqliteModifyMixin.js");

class ManyToManyUnrelateSqliteOperation extends ManyToManySqliteModifyMixin(
  ManyToManyUnrelateOperationBase
) {
  get modifyMainQuery() {
    return false;
  }
}

module.exports = {
  ManyToManyUnrelateSqliteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateMySqlOperation.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateMySqlOperation.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyUpdateOperationBase } = __webpack_require__(/*! ./ManyToManyUpdateOperationBase */ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperationBase.js");
const { ManyToManyMySqlModifyMixin } = __webpack_require__(/*! ../ManyToManyMySqlModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyMySqlModifyMixin.js");

class ManyToManyUpdateMySqlOperation extends ManyToManyMySqlModifyMixin(
  ManyToManyUpdateOperationBase
) {}

module.exports = {
  ManyToManyUpdateMySqlOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperation.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperation.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyUpdateOperationBase } = __webpack_require__(/*! ./ManyToManyUpdateOperationBase */ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperationBase.js");
const { ManyToManyModifyMixin } = __webpack_require__(/*! ../ManyToManyModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManyModifyMixin.js");

class ManyToManyUpdateOperation extends ManyToManyModifyMixin(ManyToManyUpdateOperationBase) {}

module.exports = {
  ManyToManyUpdateOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperationBase.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperationBase.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { UpdateOperation } = __webpack_require__(/*! ../../../queryBuilder/operations/UpdateOperation */ "../node_modules/objection/lib/queryBuilder/operations/UpdateOperation.js");

class ManyToManyUpdateOperationBase extends UpdateOperation {
  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;

    this.hasExtraProps = false;
    this.joinTablePatch = {};
    this.joinTablePatchFilterQuery = null;
  }

  onAdd(builder, args) {
    const obj = args[0];

    // Copy all extra properties to the `joinTablePatch` object.
    for (const extra of this.relation.joinTableExtras) {
      if (extra.aliasProp in obj) {
        this.hasExtraProps = true;
        this.joinTablePatch[extra.joinTableProp] = obj[extra.aliasProp];
      }
    }

    const res = super.onAdd(builder, args);

    if (this.hasExtraProps) {
      // Make sure we don't try to insert the extra properties
      // to the target table.
      this.relation.omitExtraProps([this.model]);
    }

    return res;
  }

  onAfter1(builder, result) {
    if (this.hasExtraProps) {
      const joinTableUpdateQuery = this.relation
        .getJoinModelClass(builder.knex())
        .query()
        .childQueryOf(builder)
        .patch(this.joinTablePatch);

      return this.applyModifyFilterForJoinTable(joinTableUpdateQuery).return(result);
    } else {
      return result;
    }
  }

  /* istanbul ignore next */
  applyModifyFilterForRelatedTable(builder) {
    throw new Error('not implemented');
  }

  /* istanbul ignore next */
  applyModifyFilterForJoinTable(builder) {
    throw new Error('not implemented');
  }

  clone() {
    const clone = super.clone();

    clone.hasExtraProps = this.hasExtraProps;
    clone.joinTablePatch = this.joinTablePatch;
    clone.joinTablePatchFilterQuery = this.joinTablePatchFilterQuery;

    return clone;
  }
}

module.exports = {
  ManyToManyUpdateOperationBase
};


/***/ }),

/***/ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateSqliteOperation.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateSqliteOperation.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { ManyToManyUpdateOperationBase } = __webpack_require__(/*! ./ManyToManyUpdateOperationBase */ "../node_modules/objection/lib/relations/manyToMany/update/ManyToManyUpdateOperationBase.js");
const { ManyToManySqliteModifyMixin } = __webpack_require__(/*! ../ManyToManySqliteModifyMixin */ "../node_modules/objection/lib/relations/manyToMany/ManyToManySqliteModifyMixin.js");

class ManyToManyUpdateSqliteOperation extends ManyToManySqliteModifyMixin(
  ManyToManyUpdateOperationBase
) {}

module.exports = {
  ManyToManyUpdateSqliteOperation
};


/***/ }),

/***/ "../node_modules/objection/lib/transaction.js":
/*!****************************************************!*\
  !*** ../node_modules/objection/lib/transaction.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Bluebird = __webpack_require__(/*! bluebird */ "bluebird");
const { Model } = __webpack_require__(/*! ./model/Model */ "../node_modules/objection/lib/model/Model.js");
const promiseUtils = __webpack_require__(/*! ./utils/promiseUtils */ "../node_modules/objection/lib/utils/promiseUtils/index.js");
const { isSubclassOf } = __webpack_require__(/*! ./utils/classUtils */ "../node_modules/objection/lib/utils/classUtils.js");
const { isFunction } = __webpack_require__(/*! ./utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function transaction() {
  // There must be at least one model class and the callback.
  if (arguments.length < 2) {
    return Bluebird.reject(
      new Error(
        'objection.transaction: provide at least one Model class to bind to the transaction or a knex instance'
      )
    );
  }

  let args = Array.from(arguments);

  if (!isSubclassOf(args[0], Model) && isFunction(args[0].transaction)) {
    let knex = args[0];
    args = args.slice(1);

    // If the function is a generator, wrap it using Bluebird.coroutine.
    if (isGenerator(args[0])) {
      args[0] = Bluebird.coroutine(args[0]);
    }

    return knex.transaction.apply(knex, args);
  } else {
    // The last argument should be the callback and all other Model subclasses.
    let callback = args[args.length - 1];
    let modelClasses = args.slice(0, args.length - 1);
    let i;

    for (i = 0; i < modelClasses.length; ++i) {
      if (!isSubclassOf(modelClasses[i], Model)) {
        return Bluebird.reject(
          new Error('objection.transaction: all but the last argument should be Model subclasses')
        );
      }
    }

    let knex = modelClasses[0].knex();
    for (i = 0; i < modelClasses.length; ++i) {
      if (modelClasses[i].knex() !== knex) {
        return Bluebird.reject(
          new Error(
            'objection.transaction: all Model subclasses must be bound to the same database'
          )
        );
      }
    }

    // If the function is a generator, wrap it using Promise.coroutine.
    if (isGenerator(callback)) {
      callback = Bluebird.coroutine(callback);
    }

    return knex.transaction(trx => {
      let args = new Array(modelClasses.length + 1);

      for (let i = 0; i < modelClasses.length; ++i) {
        args[i] = modelClasses[i].bindTransaction(trx);
      }

      args[args.length - 1] = trx;

      return promiseUtils.try(() => {
        return callback.apply(trx, args);
      });
    });
  }
}

transaction.start = function(modelClassOrKnex) {
  let knex = modelClassOrKnex;

  if (isSubclassOf(modelClassOrKnex, Model)) {
    knex = modelClassOrKnex.knex();
  }

  if (!knex || !isFunction(knex.transaction)) {
    return Bluebird.reject(
      new Error(
        'objection.transaction.start: first argument must be a model class or a knex instance'
      )
    );
  }

  return new Bluebird((resolve, reject) => {
    knex
      .transaction(trx => {
        resolve(trx);
      })
      .catch(err => {
        reject(err);
      });
  });
};

function isGenerator(fn) {
  return fn && fn.constructor && fn.constructor.name === 'GeneratorFunction';
}

module.exports = {
  transaction
};


/***/ }),

/***/ "../node_modules/objection/lib/utils sync recursive ^.*$":
/*!*****************************************************!*\
  !*** ../node_modules/objection/lib/utils sync ^.*$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assert": "../node_modules/objection/lib/utils/assert.js",
	"./assert.js": "../node_modules/objection/lib/utils/assert.js",
	"./buildUtils": "../node_modules/objection/lib/utils/buildUtils.js",
	"./buildUtils.js": "../node_modules/objection/lib/utils/buildUtils.js",
	"./classUtils": "../node_modules/objection/lib/utils/classUtils.js",
	"./classUtils.js": "../node_modules/objection/lib/utils/classUtils.js",
	"./clone": "../node_modules/objection/lib/utils/clone.js",
	"./clone.js": "../node_modules/objection/lib/utils/clone.js",
	"./createModifier": "../node_modules/objection/lib/utils/createModifier.js",
	"./createModifier.js": "../node_modules/objection/lib/utils/createModifier.js",
	"./deprecate": "../node_modules/objection/lib/utils/deprecate.js",
	"./deprecate.js": "../node_modules/objection/lib/utils/deprecate.js",
	"./identifierMapping": "../node_modules/objection/lib/utils/identifierMapping.js",
	"./identifierMapping.js": "../node_modules/objection/lib/utils/identifierMapping.js",
	"./internalPropUtils": "../node_modules/objection/lib/utils/internalPropUtils.js",
	"./internalPropUtils.js": "../node_modules/objection/lib/utils/internalPropUtils.js",
	"./knexUtils": "../node_modules/objection/lib/utils/knexUtils.js",
	"./knexUtils.js": "../node_modules/objection/lib/utils/knexUtils.js",
	"./mixin": "../node_modules/objection/lib/utils/mixin.js",
	"./mixin.js": "../node_modules/objection/lib/utils/mixin.js",
	"./normalizeIds": "../node_modules/objection/lib/utils/normalizeIds.js",
	"./normalizeIds.js": "../node_modules/objection/lib/utils/normalizeIds.js",
	"./objectUtils": "../node_modules/objection/lib/utils/objectUtils.js",
	"./objectUtils.js": "../node_modules/objection/lib/utils/objectUtils.js",
	"./parseFieldExpression": "../node_modules/objection/lib/utils/parseFieldExpression.js",
	"./parseFieldExpression.js": "../node_modules/objection/lib/utils/parseFieldExpression.js",
	"./promiseUtils": "../node_modules/objection/lib/utils/promiseUtils/index.js",
	"./promiseUtils/": "../node_modules/objection/lib/utils/promiseUtils/index.js",
	"./promiseUtils/after": "../node_modules/objection/lib/utils/promiseUtils/after.js",
	"./promiseUtils/after.js": "../node_modules/objection/lib/utils/promiseUtils/after.js",
	"./promiseUtils/afterReturn": "../node_modules/objection/lib/utils/promiseUtils/afterReturn.js",
	"./promiseUtils/afterReturn.js": "../node_modules/objection/lib/utils/promiseUtils/afterReturn.js",
	"./promiseUtils/index": "../node_modules/objection/lib/utils/promiseUtils/index.js",
	"./promiseUtils/index.js": "../node_modules/objection/lib/utils/promiseUtils/index.js",
	"./promiseUtils/isPromise": "../node_modules/objection/lib/utils/promiseUtils/isPromise.js",
	"./promiseUtils/isPromise.js": "../node_modules/objection/lib/utils/promiseUtils/isPromise.js",
	"./promiseUtils/map": "../node_modules/objection/lib/utils/promiseUtils/map.js",
	"./promiseUtils/map.js": "../node_modules/objection/lib/utils/promiseUtils/map.js",
	"./promiseUtils/mapAfterAllReturn": "../node_modules/objection/lib/utils/promiseUtils/mapAfterAllReturn.js",
	"./promiseUtils/mapAfterAllReturn.js": "../node_modules/objection/lib/utils/promiseUtils/mapAfterAllReturn.js",
	"./promiseUtils/try": "../node_modules/objection/lib/utils/promiseUtils/try.js",
	"./promiseUtils/try.js": "../node_modules/objection/lib/utils/promiseUtils/try.js",
	"./resolveModel": "../node_modules/objection/lib/utils/resolveModel.js",
	"./resolveModel.js": "../node_modules/objection/lib/utils/resolveModel.js",
	"./tmpColumnUtils": "../node_modules/objection/lib/utils/tmpColumnUtils.js",
	"./tmpColumnUtils.js": "../node_modules/objection/lib/utils/tmpColumnUtils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/objection/lib/utils sync recursive ^.*$";

/***/ }),

/***/ "../node_modules/objection/lib/utils/assert.js":
/*!*****************************************************!*\
  !*** ../node_modules/objection/lib/utils/assert.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function assertHasId(model) {
  if (!model.$hasId()) {
    const modelClass = model.constructor;
    const ids = modelClass.getIdColumnArray().join(', ');

    throw new Error(
      `one of the identifier columns [${ids}] is null or undefined. Have you specified the correct identifier column for the model '${
        modelClass.name
      }' using the 'idColumn' property?`
    );
  }
}

module.exports = {
  assertHasId
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/buildUtils.js":
/*!*********************************************************!*\
  !*** ../node_modules/objection/lib/utils/buildUtils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject, isFunction } = __webpack_require__(/*! ./objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function buildArg(arg, builder) {
  if (!isObject(arg)) {
    return arg;
  }

  if (isFunction(arg.toKnexRaw)) {
    return arg.toKnexRaw(builder);
  } else if (arg.isObjectionQueryBuilderBase === true) {
    return arg.subqueryOf(builder).toKnexQuery();
  } else {
    return arg;
  }
}

module.exports = {
  buildArg
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/classUtils.js":
/*!*********************************************************!*\
  !*** ../node_modules/objection/lib/utils/classUtils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isFunction } = __webpack_require__(/*! ./objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function isSubclassOf(Constructor, SuperConstructor) {
  if (!isFunction(SuperConstructor)) {
    return false;
  }

  while (isFunction(Constructor)) {
    if (Constructor === SuperConstructor) {
      return true;
    }

    Constructor = Object.getPrototypeOf(Constructor);
  }

  return false;
}

function inherit(Constructor, BaseConstructor) {
  Constructor.prototype = Object.create(BaseConstructor.prototype);
  Constructor.prototype.constructor = BaseConstructor;
  Object.setPrototypeOf(Constructor, BaseConstructor);

  return Constructor;
}

module.exports = {
  isSubclassOf,
  inherit
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/clone.js":
/*!****************************************************!*\
  !*** ../node_modules/objection/lib/utils/clone.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash include="cloneDeep,clone" exports="node" --development`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function() {
  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.5';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
    int8Tag
  ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
    uint8Tag
  ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[
    uint32Tag
  ] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[
    arrayBufferTag
  ] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
    dateTag
  ] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[
    numberTag
  ] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[
    setTag
  ] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[
    dataViewTag
  ] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[
    float64Tag
  ] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[
    mapTag
  ] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[
    regexpTag
  ] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[
    uint8Tag
  ] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Used as a reference to the global object. */
  var root = freeGlobal || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  })();

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap,
    nodeIsSet = nodeUtil && nodeUtil.isSet,
    nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /*--------------------------------------------------------------------------*/

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  var defineProperty = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

  /** Used to lookup unminified function names. */
  var realNames = {};

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array and iteratees accept only
   * one argument. The heuristic for whether a section qualifies for shortcut
   * fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash() {
    // No operation performed.
  }

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  })();

  /*------------------------------------------------------------------------*/

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash()
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
      result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

    for (var key in value) {
      if (
        (inherited || hasOwnProperty.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == 'offset' || key == 'parent')) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
            // Skip index properties.
            isIndex(key, length))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (
      !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))
    ) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });

      return result;
    }

    if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });

      return result;
    }

    var keysFunc = isFull ? (isFlat ? getAllKeysIn : getAllKeys) : isFlat ? keysIn : keys;

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
      result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
      length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
      length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols
    ? stubArray
    : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols
    ? stubArray
    : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map()) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set()) != setTag) ||
    (WeakMap && getTag(new WeakMap()) != weakMapTag)
  ) {
    getTag = function(value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
      result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object)
      ? baseCreate(getPrototype(object))
      : {};
  }

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return cloneDataView(object, isDeep);

      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);

      case mapTag:
        return new Ctor();

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return cloneRegExp(object);

      case setTag:
        return new Ctor();

      case symbolTag:
        return cloneSymbol(object);
    }
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      (value > -1 && value % 1 == 0 && value < length)
    );
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean'
      ? value !== '__proto__'
      : value === null;
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
  }

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(
    (function() {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function(value) {
        return (
          isObjectLike(value) &&
          hasOwnProperty.call(value, 'callee') &&
          !propertyIsEnumerable.call(value, 'callee')
        );
      };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /*------------------------------------------------------------------------*/

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /*------------------------------------------------------------------------*/

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /*------------------------------------------------------------------------*/

  // Add methods that return wrapped values in chain sequences.
  lodash.keys = keys;
  lodash.keysIn = keysIn;

  /*------------------------------------------------------------------------*/

  // Add methods that return unwrapped values in chain sequences.
  lodash.clone = clone;
  lodash.cloneDeep = cloneDeep;
  lodash.eq = eq;
  lodash.isArguments = isArguments;
  lodash.isArray = isArray;
  lodash.isArrayLike = isArrayLike;
  lodash.isBuffer = isBuffer;
  lodash.isFunction = isFunction;
  lodash.isLength = isLength;
  lodash.isMap = isMap;
  lodash.isObject = isObject;
  lodash.isObjectLike = isObjectLike;
  lodash.isSet = isSet;
  lodash.isTypedArray = isTypedArray;
  lodash.stubArray = stubArray;
  lodash.stubFalse = stubFalse;

  /*------------------------------------------------------------------------*/

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type {string}
   */
  lodash.VERSION = VERSION;

  /*--------------------------------------------------------------------------*/

  if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = lodash)._ = lodash;
    // Export for CommonJS support.
    freeExports._ = lodash;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../server/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/objection/lib/utils/createModifier.js":
/*!*************************************************************!*\
  !*** ../node_modules/objection/lib/utils/createModifier.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { asArray, isString, isFunction, isPlainObject } = __webpack_require__(/*! ./objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function createModifier({ modelClass, modifier, modifiers, args }) {
  modifiers = modifiers || {};
  args = args || [];

  const modelModifiers = modelClass ? modelClass.getModifiers() : {};

  const modifierFunctions = asArray(modifier).map(modifier => {
    let modify = null;

    if (isString(modifier)) {
      modify = modifiers[modifier] || modelModifiers[modifier];
      // Modifiers can be pointers to other modifiers. Call this function recursively.
      if (modify) {
        return createModifier({ modelClass, modifier: modify, modifiers });
      }
    } else if (isFunction(modifier)) {
      modify = modifier;
    } else if (isPlainObject(modifier)) {
      modify = builder => builder.where(modifier);
    } else if (Array.isArray(modifier)) {
      return createModifier({ modelClass, modifier, modifiers });
    }

    if (!modify) {
      modify = builder => modelClass.modifierNotFound(builder, modifier);
    }

    return modify;
  });

  return builder => modifierFunctions.forEach(modifier => modifier(builder, ...args));
}

module.exports = {
  createModifier
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/deprecate.js":
/*!********************************************************!*\
  !*** ../node_modules/objection/lib/utils/deprecate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const LOGGED_DEPRECATIONS = new Set();

function deprecate(message) {
  // Only log deprecation messages once.
  if (!LOGGED_DEPRECATIONS.has(message)) {
    LOGGED_DEPRECATIONS.add(message);
    console.warn(message);
  }
}

module.exports = {
  deprecate
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/identifierMapping.js":
/*!****************************************************************!*\
  !*** ../node_modules/objection/lib/utils/identifierMapping.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject } = __webpack_require__(/*! ./objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

// Super fast memoize for single argument functions.
function memoize(func) {
  const cache = new Map();

  return input => {
    let output = cache.get(input);

    if (output === undefined) {
      output = func(input);
      cache.set(input, output);
    }

    return output;
  };
}

// camelCase to snake_case converter that also works with non-ascii characters
// This is needed especially so that aliases containing the `:` character,
// objection uses internally, work.
function snakeCase(str, { upperCase = false, underscoreBeforeDigits = false } = {}) {
  if (str.length === 0) {
    return str;
  }

  const upper = str.toUpperCase();
  const lower = str.toLowerCase();

  let out = lower[0];

  for (let i = 1, l = str.length; i < l; ++i) {
    const char = str[i];
    const prevChar = str[i - 1];

    const upperChar = upper[i];
    const prevUpperChar = upper[i - 1];

    const lowerChar = lower[i];
    const prevLowerChar = lower[i - 1];

    // If underScoreBeforeDigits is true then, well, insert an underscore
    // before digits :). Only the first digit gets an underscore if
    // there are multiple.
    if (underscoreBeforeDigits && isDigit(char) && !isDigit(prevChar)) {
      out += '_' + char;
      continue;
    }

    // Test if `char` is an upper-case character and that the character
    // actually has different upper and lower case versions.
    if (char === upperChar && upperChar !== lowerChar) {
      // Multiple consecutive upper case characters shouldn't add underscores.
      // For example "fooBAR" should be converted to "foo_bar".
      if (prevChar === prevUpperChar && prevUpperChar !== prevLowerChar) {
        out += lowerChar;
      } else {
        out += '_' + lowerChar;
      }
    } else {
      out += char;
    }
  }

  if (upperCase) {
    return out.toUpperCase();
  } else {
    return out;
  }
}

// snake_case to camelCase converter that simply reverses
// the actions done by `snakeCase` function.
function camelCase(str, { upperCase = false } = {}) {
  if (str.length === 0) {
    return str;
  }

  if (upperCase && isAllUpperCaseSnakeCase(str)) {
    // Only convert to lower case if the string is all upper
    // case snake_case. This allowes camelCase strings to go
    // through without changing.
    str = str.toLowerCase();
  }

  let out = str[0];

  for (let i = 1, l = str.length; i < l; ++i) {
    const char = str[i];
    const prevChar = str[i - 1];

    if (char !== '_') {
      if (prevChar === '_') {
        out += char.toUpperCase();
      } else {
        out += char;
      }
    }
  }

  return out;
}

function isAllUpperCaseSnakeCase(str) {
  for (let i = 1, l = str.length; i < l; ++i) {
    const char = str[i];

    if (char !== '_' && char !== char.toUpperCase()) {
      return false;
    }
  }

  return true;
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

// Returns a function that splits the inputs string into pieces using `separator`,
// only calls `mapper` for the last part and concatenates the string back together.
// If no separators are found, `mapper` is called for the entire string.
function mapLastPart(mapper, separator) {
  return str => {
    const idx = str.lastIndexOf(separator);
    const mapped = mapper(str.slice(idx + separator.length));
    return str.slice(0, idx + separator.length) + mapped;
  };
}

// Returns a function that takes an object as an input and maps the object's keys
// using `mapper`. If the input is not an object, the input is returned unchanged.
function keyMapper(mapper) {
  return obj => {
    if (!isObject(obj) || Array.isArray(obj)) {
      return obj;
    }

    const keys = Object.keys(obj);
    const out = {};

    for (let i = 0, l = keys.length; i < l; ++i) {
      const key = keys[i];
      out[mapper(key)] = obj[key];
    }

    return out;
  };
}

function snakeCaseMappers(opt = {}) {
  return {
    parse: keyMapper(memoize(str => camelCase(str, opt))),
    format: keyMapper(memoize(str => snakeCase(str, opt)))
  };
}

function knexIdentifierMappers({ parse, format, idSeparator = ':' } = {}) {
  const formatId = memoize(mapLastPart(format, idSeparator));
  const parseId = memoize(mapLastPart(parse, idSeparator));
  const parseKeys = keyMapper(parseId);

  return {
    wrapIdentifier(identifier, origWrap) {
      return origWrap(formatId(identifier));
    },

    postProcessResponse(result) {
      if (Array.isArray(result)) {
        const output = new Array(result.length);

        for (let i = 0, l = result.length; i < l; ++i) {
          output[i] = parseKeys(result[i]);
        }

        return output;
      } else {
        return parseKeys(result);
      }
    }
  };
}

function knexSnakeCaseMappers(opt = {}) {
  return knexIdentifierMappers({
    parse: str => camelCase(str, opt),
    format: str => snakeCase(str, opt)
  });
}

function knexIdentifierMapping(colToProp) {
  const propToCol = Object.keys(colToProp).reduce((propToCol, column) => {
    propToCol[colToProp[column]] = column;
    return propToCol;
  }, {});

  return knexIdentifierMappers({
    parse: column => colToProp[column] || column,
    format: prop => propToCol[prop] || prop
  });
}

module.exports = {
  snakeCase,
  camelCase,
  snakeCaseMappers,
  knexSnakeCaseMappers,
  knexIdentifierMappers,
  knexIdentifierMapping,

  camelCaseKeys: keyMapper(memoize(camelCase)),
  snakeCaseKeys: keyMapper(memoize(snakeCase))
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/internalPropUtils.js":
/*!****************************************************************!*\
  !*** ../node_modules/objection/lib/utils/internalPropUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const INTERNAL_PROP_PREFIX = '$';

function isInternalProp(propName) {
  return propName[0] === INTERNAL_PROP_PREFIX;
}

module.exports = {
  isInternalProp
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/knexUtils.js":
/*!********************************************************!*\
  !*** ../node_modules/objection/lib/utils/knexUtils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject, isFunction } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function getDialect(knex) {
  const type = typeof knex;

  return (
    (knex !== null &&
      (type === 'object' || type === 'function') &&
      knex.client &&
      knex.client.dialect) ||
    null
  );
}

function isPostgres(knex) {
  return getDialect(knex) === 'postgresql';
}

function isOracle(knex) {
  const dialect = getDialect(knex);
  return dialect === 'oracle' || dialect === 'oracledb';
}

function isMySql(knex) {
  const dialect = getDialect(knex);
  return dialect === 'mysql' || dialect === 'mysql2';
}

function isSqlite(knex) {
  return getDialect(knex) === 'sqlite3';
}

function isMsSql(knex) {
  return getDialect(knex) === 'mssql';
}

function isKnexQueryBuilder(value) {
  return hasConstructor(value, 'Builder') && 'client' in value;
}

function isKnexJoinBuilder(value) {
  return hasConstructor(value, 'JoinClause') && 'joinType' in value;
}

function isKnexRaw(value) {
  return hasConstructor(value, 'Raw') && 'client' in value;
}

function isKnexTransaction(knex) {
  return !!getDialect(knex) && isFunction(knex.commit) && isFunction(knex.rollback);
}

function hasConstructor(value, constructorName) {
  return (
    isObject(value) && isFunction(value.constructor) && value.constructor.name === constructorName
  );
}

module.exports = {
  getDialect,
  isPostgres,
  isMySql,
  isSqlite,
  isMsSql,
  isOracle,
  isKnexQueryBuilder,
  isKnexJoinBuilder,
  isKnexRaw,
  isKnexTransaction
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/mixin.js":
/*!****************************************************!*\
  !*** ../node_modules/objection/lib/utils/mixin.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { flatten } = __webpack_require__(/*! ./objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function mixin() {
  const args = flatten(arguments);
  const mixins = args.slice(1);

  return mixins.reduce((Class, mixinFunc) => {
    return mixinFunc(Class);
  }, args[0]);
}

function compose() {
  const mixins = flatten(arguments);

  return function(Class) {
    return mixin(Class, mixins);
  };
}

module.exports = {
  compose,
  mixin
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/normalizeIds.js":
/*!***********************************************************!*\
  !*** ../node_modules/objection/lib/utils/normalizeIds.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

// ids is of type RelationProperty.
function normalizeIds(ids, prop, opt) {
  opt = opt || {};

  let isComposite = prop.size > 1;
  let ret;

  if (isComposite) {
    // For composite ids these are okay:
    //
    // 1. [1, 'foo', 4]
    // 2. {a: 1, b: 'foo', c: 4}
    // 3. [[1, 'foo', 4], [4, 'bar', 1]]
    // 4. [{a: 1, b: 'foo', c: 4}, {a: 4, b: 'bar', c: 1}]
    //
    if (Array.isArray(ids)) {
      if (Array.isArray(ids[0])) {
        ret = new Array(ids.length);

        // 3.
        for (let i = 0, l = ids.length; i < l; ++i) {
          ret[i] = convertIdArrayToObject(ids[i], prop);
        }
      } else if (isObject(ids[0])) {
        ret = new Array(ids.length);

        // 4.
        for (let i = 0, l = ids.length; i < l; ++i) {
          ret[i] = ensureObject(ids[i], prop);
        }
      } else {
        // 1.
        ret = [convertIdArrayToObject(ids, prop)];
      }
    } else if (isObject(ids)) {
      // 2.
      ret = [ids];
    } else {
      throw new Error(`invalid composite key ${JSON.stringify(ids)}`);
    }
  } else {
    // For non-composite ids, these are okay:
    //
    // 1. 1
    // 2. {id: 1}
    // 3. [1, 'foo', 4]
    // 4. [{id: 1}, {id: 'foo'}, {id: 4}]
    //
    if (Array.isArray(ids)) {
      if (isObject(ids[0])) {
        ret = new Array(ids.length);

        // 4.
        for (let i = 0, l = ids.length; i < l; ++i) {
          ret[i] = ensureObject(ids[i]);
        }
      } else {
        ret = new Array(ids.length);

        // 3.
        for (let i = 0, l = ids.length; i < l; ++i) {
          ret[i] = {};
          prop.setProp(ret[i], 0, ids[i]);
        }
      }
    } else if (isObject(ids)) {
      // 2.
      ret = [ids];
    } else {
      // 1.
      const obj = {};
      prop.setProp(obj, 0, ids);
      ret = [obj];
    }
  }

  checkProperties(ret, prop);

  if (opt.arrayOutput) {
    return normalizedToArray(ret, prop);
  } else {
    return ret;
  }
}

function convertIdArrayToObject(ids, prop) {
  if (!Array.isArray(ids)) {
    throw new Error(`invalid composite key ${JSON.stringify(ids)}`);
  }

  if (ids.length != prop.size) {
    throw new Error(`composite identifier ${JSON.stringify(ids)} should have ${prop.size} values`);
  }

  const obj = {};

  for (let i = 0; i < ids.length; ++i) {
    prop.setProp(obj, i, ids[i]);
  }

  return obj;
}

function ensureObject(ids) {
  if (isObject(ids)) {
    return ids;
  } else {
    throw new Error(`invalid composite key ${JSON.stringify(ids)}`);
  }
}

function checkProperties(ret, prop) {
  for (let i = 0, l = ret.length; i < l; ++i) {
    const obj = ret[i];

    for (let j = 0, lp = prop.size; j < lp; ++j) {
      const val = prop.getProp(obj, j);

      if (typeof val === 'undefined') {
        throw new Error(
          `expected id ${JSON.stringify(obj)} to have property ${prop.propDescription(j)}`
        );
      }
    }
  }
}

function normalizedToArray(ret, prop) {
  const arr = new Array(ret.length);

  for (let i = 0, l = ret.length; i < l; ++i) {
    arr[i] = prop.getProps(ret[i]);
  }

  return arr;
}

module.exports = {
  normalizeIds
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/objectUtils.js":
/*!**********************************************************!*\
  !*** ../node_modules/objection/lib/utils/objectUtils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { clone, cloneDeep } = __webpack_require__(/*! ./clone */ "../node_modules/objection/lib/utils/clone.js");
const SMALL_ARRAY_SIZE = 10;

function isEmpty(item) {
  if (Array.isArray(item)) {
    return item.length === 0;
  } else if (isObject(item)) {
    return Object.keys(item).length === 0;
  } else {
    return true;
  }
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

// Quick and dirty check if an object is a plain object and not
// for example an instance of some class.
function isPlainObject(value) {
  return (
    isObject(value) &&
    (!value.constructor || value.constructor === Object) &&
    (!value.toString || value.toString === Object.prototype.toString)
  );
}

function isFunction(value) {
  return typeof value === 'function';
}

function isRegExp(value) {
  return value instanceof RegExp;
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number';
}

function asArray(value) {
  return Array.isArray(value) ? value : [value];
}

function asSingle(value) {
  return Array.isArray(value) ? value[0] : value;
}

function uniqBy(items, keyGetter = null) {
  const map = new Map();

  for (let i = 0, l = items.length; i < l; ++i) {
    const item = items[i];
    const key = keyGetter !== null ? keyGetter(item) : item;

    map.set(key, item);
  }

  return Array.from(map.values());
}

function groupBy(items, keyGetter = null) {
  const groups = new Map();

  for (const item of items) {
    const key = keyGetter !== null ? keyGetter(item) : item;
    let group = groups.get(key);

    if (!group) {
      group = [];
      groups.set(key, group);
    }

    group.push(item);
  }

  return groups;
}

function omit(obj, keysToOmit) {
  keysToOmit = asArray(keysToOmit);

  const keys = Object.keys(obj);
  const out = {};

  for (let i = 0, l = keys.length; i < l; ++i) {
    const key = keys[i];

    if (!keysToOmit.includes(key)) {
      out[key] = obj[key];
    }
  }

  return out;
}

function difference(arr1, arr2) {
  const arr2Set = new Set(arr2);
  const diff = [];

  for (let i = 0; i < arr1.length; ++i) {
    const value = arr1[i];

    if (!arr2Set.has(value)) {
      diff.push(value);
    }
  }

  return diff;
}

function union(arr1, arr2) {
  if (arr1.length < SMALL_ARRAY_SIZE && arr2.length < SMALL_ARRAY_SIZE) {
    return unionSmall(arr1, arr2);
  } else {
    return unionGeneric(arr1, arr2);
  }
}

function unionSmall(arr1, arr2) {
  const all = arr1.slice();

  for (let i = 0, l = arr2.length; i < l; ++i) {
    const item = arr2[i];

    if (all.indexOf(item) === -1) {
      all.push(item);
    }
  }

  return all;
}

function unionGeneric(arr1, arr2) {
  const all = new Set();

  for (let i = 0; i < arr1.length; ++i) {
    all.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; ++i) {
    all.add(arr2[i]);
  }

  return Array.from(all);
}

function last(arr) {
  return arr[arr.length - 1];
}

function upperFirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function values(obj) {
  if (isObject(obj)) {
    const keys = Object.keys(obj);
    const values = new Array(keys.length);

    for (let i = 0, l = keys.length; i < l; ++i) {
      values[i] = obj[keys[i]];
    }

    return values;
  } else {
    return [];
  }
}

function once(func) {
  let called = false;
  let value = undefined;

  return function() {
    if (called === false) {
      called = true;
      value = func.apply(this, arguments);
    }

    return value;
  };
}

function flatten(arrays) {
  const out = [];
  let outIdx = 0;

  for (let i = 0, l = arrays.length; i < l; ++i) {
    const value = arrays[i];

    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; ++j) {
        out.push(value[j]);
      }
    } else {
      out.push(value);
    }
  }

  return out;
}

function get(obj, path) {
  for (let i = 0, l = path.length; i < l; ++i) {
    const key = path[i];

    if (!isObject(obj)) {
      return undefined;
    }

    obj = obj[key];
  }

  return obj;
}

function set(obj, path, value) {
  const inputObj = obj;

  for (let i = 0, l = path.length - 1; i < l; ++i) {
    const key = path[i];
    let child = obj[key];

    if (!isObject(child)) {
      const nextKey = path[i + 1];

      if (isNaN(nextKey)) {
        child = {};
      } else {
        child = [];
      }

      obj[key] = child;
    }

    obj = child;
  }

  if (path.length > 0 && isObject(obj)) {
    obj[path[path.length - 1]] = value;
  }

  return inputObj;
}

function zipObject(keys, values) {
  const out = {};

  for (let i = 0, l = keys.length; i < l; ++i) {
    out[keys[i]] = values[i];
  }

  return out;
}

function chunk(arr, chunkSize) {
  const out = [];

  for (let i = 0, l = arr.length; i < l; ++i) {
    const item = arr[i];

    if (out.length === 0 || out[out.length - 1].length === chunkSize) {
      out.push([]);
    }

    out[out.length - 1].push(item);
  }

  return out;
}

function jsonEquals(val1, val2) {
  return jsonEqualsBase(val1, val2, compareStrict);
}

function jsonEqualsBase(val1, val2, compare) {
  if (val1 === val2) {
    return true;
  }

  return jsonEqualsSlowPath(val1, val2, compare);
}

function jsonEqualsSlowPath(val1, val2, compare) {
  const type1 = typeof val1;
  const type2 = typeof val2;

  const isNonNullObject1 = type1 === 'object' && !compare(val1, null);
  const isNonNullObject2 = type2 === 'object' && !compare(val2, null);

  if (isNonNullObject1 && isNonNullObject2) {
    const isArray1 = Array.isArray(val1);
    const isArray2 = Array.isArray(val2);

    if (isArray1 && isArray2) {
      return jsonEqualsArray(val1, val2, compare);
    } else if (!isArray1 && !isArray2) {
      return jsonEqualsObject(val1, val2, compare);
    } else {
      return false;
    }
  } else if (isNonNullObject1 !== isNonNullObject2) {
    return false;
  } else {
    return compare(val1, val2);
  }
}

function jsonEqualsArray(arr1, arr2, compare) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0, l = arr1.length; i < l; ++i) {
    if (!jsonEqualsBase(arr1[i], arr2[i], compare)) {
      return false;
    }
  }

  return true;
}

function jsonEqualsObject(obj1, obj2, compare) {
  if (obj1.constructor === Date && obj2.constructor === Date) {
    return equalsDate(obj1, obj2);
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0, l = keys1.length; i < l; ++i) {
    const key = keys1[i];

    if (!jsonEqualsBase(obj1[key], obj2[key], compare)) {
      return false;
    }
  }

  return true;
}

function equalsDate(date1, date2) {
  return date1.getTime() === date2.getTime();
}

function compareStrict(val1, val2) {
  return val1 === val2;
}

module.exports = {
  isEmpty,
  isString,
  isRegExp,
  isObject,
  isNumber,
  isFunction,
  jsonEquals,
  isPlainObject,
  difference,
  upperFirst,
  zipObject,
  cloneDeep,
  asSingle,
  asArray,
  flatten,
  groupBy,
  uniqBy,
  values,
  union,
  chunk,
  clone,
  omit,
  once,
  last,
  get,
  set
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/parseFieldExpression.js":
/*!*******************************************************************!*\
  !*** ../node_modules/objection/lib/utils/parseFieldExpression.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const jsonFieldExpressionParser = __webpack_require__(/*! ../queryBuilder/parsers/jsonFieldExpressionParser */ "../node_modules/objection/lib/queryBuilder/parsers/jsonFieldExpressionParser.js");
const cache = new Map();

function parseFieldExpression(expr) {
  let parsedExpr = cache.get(expr);

  if (parsedExpr !== undefined) {
    return parsedExpr;
  } else {
    parsedExpr = jsonFieldExpressionParser.parse(expr);
    parsedExpr = preprocessParsedExpression(parsedExpr);

    // We don't take a copy of the parsedExpr each time we
    // use if from cache. Instead to make sure it's never
    // mutated we deep-freeze it.
    parsedExpr = freezeParsedExpr(parsedExpr);

    cache.set(expr, parsedExpr);
    return parsedExpr;
  }
}

function preprocessParsedExpression(parsedExpr) {
  const columnParts = parsedExpr.columnName.split('.').map(part => part.trim());
  parsedExpr.column = columnParts[columnParts.length - 1];

  if (columnParts.length >= 2) {
    parsedExpr.table = columnParts.slice(0, columnParts.length - 1).join('.');
  } else {
    parsedExpr.table = null;
  }

  return parsedExpr;
}

function freezeParsedExpr(parsedExpr) {
  for (const access of parsedExpr.access) {
    Object.freeze(access);
  }

  Object.freeze(parsedExpr.access);
  Object.freeze(parsedExpr);

  return parsedExpr;
}

module.exports = {
  parseFieldExpression
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/after.js":
/*!*****************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/after.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ./isPromise */ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js");

// Call `func` after `obj` has been resolved. Call `func` synchronously if
// `obj` is not a promise for performance reasons.
function after(obj, func) {
  if (isPromise(obj)) {
    return obj.then(func);
  } else {
    return func(obj);
  }
}

module.exports = {
  after
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/afterReturn.js":
/*!***********************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/afterReturn.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ./isPromise */ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js");

// Return `returnValue` after `obj` has been resolved. Return `returnValue`
// synchronously if `obj` is not a promise for performance reasons.
function afterReturn(obj, returnValue) {
  if (isPromise(obj)) {
    return obj.then(() => returnValue);
  } else {
    return returnValue;
  }
}

module.exports = {
  afterReturn
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ./isPromise */ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js");
const { after } = __webpack_require__(/*! ./after */ "../node_modules/objection/lib/utils/promiseUtils/after.js");
const { afterReturn } = __webpack_require__(/*! ./afterReturn */ "../node_modules/objection/lib/utils/promiseUtils/afterReturn.js");
const { mapAfterAllReturn } = __webpack_require__(/*! ./mapAfterAllReturn */ "../node_modules/objection/lib/utils/promiseUtils/mapAfterAllReturn.js");
const { promiseMap } = __webpack_require__(/*! ./map */ "../node_modules/objection/lib/utils/promiseUtils/map.js");
const { promiseTry } = __webpack_require__(/*! ./try */ "../node_modules/objection/lib/utils/promiseUtils/try.js");

module.exports = {
  isPromise,
  after,
  afterReturn,
  mapAfterAllReturn,
  map: promiseMap,
  try: promiseTry
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js":
/*!*********************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/isPromise.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isObject, isFunction } = __webpack_require__(/*! ../objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");

function isPromise(obj) {
  return isObject(obj) && isFunction(obj.then);
}

module.exports = {
  isPromise
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/map.js":
/*!***************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/map.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ./isPromise */ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js");

// Works like Bluebird.map.
function promiseMap(items, mapper, opt) {
  switch (items.length) {
    case 0:
      return mapZero();
    case 1:
      return mapOne(items, mapper);
    default:
      return mapMany(items, mapper, opt);
  }
}

function mapZero() {
  return Promise.resolve([]);
}

function mapOne(items, mapper) {
  try {
    const maybePromise = mapper(items[0], 0);

    if (isPromise(maybePromise)) {
      return maybePromise.then(wrapArray);
    } else {
      return Promise.resolve(wrapArray(maybePromise));
    }
  } catch (err) {
    return Promise.reject(err);
  }
}

function wrapArray(item) {
  return [item];
}

function mapMany(items, mapper, opt = {}) {
  return new Promise((resolve, reject) => {
    const concurrency = opt.concurrency || Number.MAX_SAFE_INTEGER;

    const ctx = {
      reject,
      resolve,
      rejected: false,
      index: 0,
      numFinished: 0,
      results: new Array(items.length),
      items,
      mapper
    };

    while (ctx.index < concurrency && ctx.index < items.length && !ctx.rejected) {
      executeNext(ctx);
    }
  });
}

function executeNext(ctx) {
  try {
    if (ctx.rejected) {
      return;
    }

    const index = ctx.index++;
    const item = ctx.items[index];
    const maybePromise = ctx.mapper(item, index);

    if (isPromise(maybePromise)) {
      maybePromise.then(result => afterExecute(ctx, result, index)).catch(err => onError(ctx, err));
    } else {
      process.nextTick(() => afterExecute(ctx, maybePromise, index));
    }

    return null;
  } catch (err) {
    onError(ctx, err);
  }
}

function afterExecute(ctx, result, index) {
  if (ctx.rejected) {
    return null;
  }

  ctx.results[index] = result;
  ctx.numFinished++;

  if (ctx.numFinished === ctx.items.length) {
    ctx.resolve(ctx.results);
  }

  if (ctx.index < ctx.items.length) {
    executeNext(ctx);
  }

  return null;
}

function onError(ctx, err) {
  ctx.rejected = true;
  ctx.reject(err);
}

module.exports = {
  promiseMap
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/mapAfterAllReturn.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/mapAfterAllReturn.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ./isPromise */ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js");

// Map `arr` with `mapper` and after that return `returnValue`. If none of
// the mapped values is a promise, return synchronously for performance
// reasons.
function mapAfterAllReturn(arr, mapper, returnValue) {
  const results = new Array(arr.length);
  let containsPromise = false;

  for (let i = 0, l = arr.length; i < l; ++i) {
    results[i] = mapper(arr[i]);

    if (isPromise(results[i])) {
      containsPromise = true;
    }
  }

  if (containsPromise) {
    return Promise.all(results).then(() => returnValue);
  } else {
    return returnValue;
  }
}

module.exports = {
  mapAfterAllReturn
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/promiseUtils/try.js":
/*!***************************************************************!*\
  !*** ../node_modules/objection/lib/utils/promiseUtils/try.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isPromise } = __webpack_require__(/*! ./isPromise */ "../node_modules/objection/lib/utils/promiseUtils/isPromise.js");

// Works like Bluebird.try.
function promiseTry(callback) {
  try {
    const maybePromise = callback();

    if (isPromise(maybePromise)) {
      return maybePromise;
    } else {
      return Promise.resolve(maybePromise);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = {
  promiseTry
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/resolveModel.js":
/*!***********************************************************!*\
  !*** ../node_modules/objection/lib/utils/resolveModel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path");
const { once, isString, isFunction } = __webpack_require__(/*! ../utils/objectUtils */ "../node_modules/objection/lib/utils/objectUtils.js");
const { isSubclassOf } = __webpack_require__(/*! ../utils/classUtils */ "../node_modules/objection/lib/utils/classUtils.js");

const getModel = once(() => __webpack_require__(/*! ../model/Model */ "../node_modules/objection/lib/model/Model.js").Model);
class ResolveError extends Error {}

function resolveModel(modelRef, modelPaths, errorPrefix) {
  try {
    if (isString(modelRef)) {
      if (isAbsolutePath(modelRef)) {
        return requireModel(modelRef);
      } else if (modelPaths) {
        return requireUsingModelPaths(modelRef, modelPaths);
      }
    } else {
      if (isFunction(modelRef) && !isSubclassOf(modelRef, getModel())) {
        modelRef = modelRef();
      }

      if (!isSubclassOf(modelRef, getModel())) {
        throw new ResolveError(
          `is not a subclass of Model or a file path to a module that exports one. You may be dealing with a require loop. See the documentation section about require loops.`
        );
      }

      return modelRef;
    }
  } catch (err) {
    if (err instanceof ResolveError) {
      throw new Error(`${errorPrefix}: ${err.message}`);
    } else {
      throw err;
    }
  }
}

function requireUsingModelPaths(modelRef, modelPaths) {
  let firstError = null;

  for (const modelPath of modelPaths) {
    try {
      return requireModel(path.join(modelPath, modelRef));
    } catch (err) {
      if (firstError === null) {
        firstError = err;
      }
    }
  }

  if (firstError) {
    throw firstError;
  } else {
    throw new ResolveError(`could not resolve ${modelRef} using modelPaths`);
  }
}

function requireModel(modelPath) {
  const Model = getModel();
  /**
   * Wrap path string in template literal to prevent
   * warnings about Objection.JS being an expression
   * in webpack builds.
   * @link https://github.com/webpack/webpack/issues/196
   */
  let mod = __webpack_require__("../node_modules/objection/lib/utils sync recursive ^.*$")(`${path.resolve(modelPath)}`);
  let modelClass = null;

  if (isSubclassOf(mod, Model)) {
    modelClass = mod;
  } else if (isSubclassOf(mod.default, Model)) {
    // Babel 6 style of exposing default export.
    modelClass = mod.default;
  } else {
    Object.keys(mod).forEach(exportName => {
      const exp = mod[exportName];

      if (isSubclassOf(exp, Model)) {
        if (modelClass !== null) {
          throw new ResolveError(
            `path ${modelPath} exports multiple models. Don't know which one to choose.`
          );
        }

        modelClass = exp;
      }
    });
  }

  if (!isSubclassOf(modelClass, Model)) {
    throw new ResolveError(`${modelPath} is an invalid file path to a model class`);
  }

  return modelClass;
}

function isAbsolutePath(pth) {
  return path.normalize(pth + '/') === path.normalize(path.resolve(pth) + '/');
}

module.exports = {
  resolveModel
};


/***/ }),

/***/ "../node_modules/objection/lib/utils/tmpColumnUtils.js":
/*!*************************************************************!*\
  !*** ../node_modules/objection/lib/utils/tmpColumnUtils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const OWNER_JOIN_COLUMN_ALIAS_PREFIX = 'objectiontmpjoin';

function getTempColumn(index) {
  return `${OWNER_JOIN_COLUMN_ALIAS_PREFIX}${index}`;
}

function isTempColumn(col) {
  return col.startsWith(OWNER_JOIN_COLUMN_ALIAS_PREFIX);
}

module.exports = {
  getTempColumn,
  isTempColumn
};


/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: ADVITO_AIR_APPLICATION, APP_URL, EMAIL_SENDER, EMAIL_BCC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADVITO_AIR_APPLICATION", function() { return ADVITO_AIR_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_URL", function() { return APP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_SENDER", function() { return EMAIL_SENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_BCC", function() { return EMAIL_BCC; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const ADVITO_AIR_APPLICATION = 2;
const APP_URL = 'http://localhost:8080/#';
const EMAIL_SENDER = 'IandA@advito.com';
const EMAIL_BCC = ['ianda@advito.com', 'hshim@boostlabs.com'];

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: Login, User, SESSION, RECOVERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./constants/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SESSION", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["SESSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RECOVERY", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["RECOVERY"]; });




/***/ }),

/***/ "./constants/user.js":
/*!***************************!*\
  !*** ./constants/user.js ***!
  \***************************/
/*! exports provided: Login, User, SESSION, RECOVERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION", function() { return SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECOVERY", function() { return RECOVERY; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const Login = `displayName
        clientId
        profilePicturePath
        sessionToken
        roleIds`;
const User = `id
        client_id
        username
        pwd
        name_last
        name_first
        is_enabled
        is_verified
        must_change_pwd
        pwd_expiration
        email
        phone
        profile_picture_path
        default_timezone
        default_language
        user_salt
        default_date_format
        address
        created
        modified`;
const SESSION = 'SESSION';
const RECOVERY = 'RECOVERY';

/***/ }),

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! exports provided: graphqlHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlHandler", function() { return graphqlHandler; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeDefs */ "./typeDefs/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./resolvers/index.js");
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playground */ "./playground/index.js");
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! knex */ "knex");
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! objection */ "../node_modules/objection/lib/objection.js");
/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(objection__WEBPACK_IMPORTED_MODULE_6__);








__webpack_require__(/*! dotenv */ "dotenv").config();

const db = knex__WEBPACK_IMPORTED_MODULE_5___default()({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.ADVITO_DB_DATABASE
  }
});
objection__WEBPACK_IMPORTED_MODULE_6__["Model"].knex(db);
const server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_2__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__["default"],
  context: async ({
    event
  }) => {
    const sessionToken = event.headers.sessiontoken || '';
    return {
      db // const user = await authenticateUser(sessionToken, advitoDb)
      // return { user, db }

    };
  },
  // schemaDirectives: {
  //   auth: requireAuthDirective
  // },
  playground: _playground__WEBPACK_IMPORTED_MODULE_4__["default"]
});
const graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! exports provided: AdvitoUser, AdvitoUserRoleLink, AdvitoUserSession, AccessToken, EmailTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./models/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvitoUser", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["AdvitoUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvitoUserRoleLink", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["AdvitoUserRoleLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvitoUserSession", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["AdvitoUserSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailTemplate", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["EmailTemplate"]; });




/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: AdvitoUser, AdvitoUserRoleLink, AdvitoUserSession, AccessToken, EmailTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvitoUser", function() { return AdvitoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvitoUserRoleLink", function() { return AdvitoUserRoleLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvitoUserSession", function() { return AdvitoUserSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplate", function() { return EmailTemplate; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! objection */ "../node_modules/objection/lib/objection.js");
/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(objection__WEBPACK_IMPORTED_MODULE_1__);


class AdvitoUser extends objection__WEBPACK_IMPORTED_MODULE_1__["Model"] {
  static get tableName() {
    return 'advito_user';
  }

  fullName() {
    return this.name_first + ' ' + this.name_last;
  }

  static get relationMappings() {
    return {
      advitoUserRoleLink: {
        relation: objection__WEBPACK_IMPORTED_MODULE_1__["Model"].HasManyRelation,
        modelClass: AdvitoUserRoleLink,
        join: {
          from: 'advito_user.id',
          to: 'advito_user_role_link.advito_user_id'
        }
      },
      advitoUserSession: {
        relation: objection__WEBPACK_IMPORTED_MODULE_1__["Model"].HasManyRelation,
        modelClass: AdvitoUserSession,
        join: {
          from: 'advito_user.id',
          to: 'advito_user_session.advito_user_id'
        }
      },
      accessToken: {
        relation: objection__WEBPACK_IMPORTED_MODULE_1__["Model"].HasManyRelation,
        modelClass: AccessToken,
        join: {
          from: 'advito_user.id',
          to: 'access_token.advito_user_id'
        }
      }
    };
  }

}
class AdvitoUserRoleLink extends objection__WEBPACK_IMPORTED_MODULE_1__["Model"] {
  static get tableName() {
    return 'advito_user_role_link';
  }

}
class AdvitoUserSession extends objection__WEBPACK_IMPORTED_MODULE_1__["Model"] {
  static get tableName() {
    return 'advito_user_session';
  }

}
class AccessToken extends objection__WEBPACK_IMPORTED_MODULE_1__["Model"] {
  static get tableName() {
    return 'access_token';
  }

}
class EmailTemplate extends objection__WEBPACK_IMPORTED_MODULE_1__["Model"] {
  static get tableName() {
    return 'email_template';
  }

}

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./playground/index.js":
/*!*****************************!*\
  !*** ./playground/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./playground/user.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  tabs: [_user__WEBPACK_IMPORTED_MODULE_1__["default"].Query, _user__WEBPACK_IMPORTED_MODULE_1__["default"].Mutation]
});

/***/ }),

/***/ "./playground/user.js":
/*!****************************!*\
  !*** ./playground/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    name: 'User Queries',
    endpoint: '',
    headers: {
      sessiontoken: 'MY^PR3TTYP0NY'
    },
    query: `
    {
      getUser {
        ${_constants__WEBPACK_IMPORTED_MODULE_1__["User"]}
      }
    }`
  },
  Mutation: {
    name: 'User Mutations',
    endpoint: '',
    headers: {
      sessiontoken: 'MY^PR3TTYP0NY'
    },
    query: `
    mutation {
      login(username: "", password: "") {
        ${_constants__WEBPACK_IMPORTED_MODULE_1__["Login"]}
      }
      logout(sessionToken: "")
      sendResetPasswordEmail(email: "")
      resetPassword(token: "", password: "", confirmPassword: "")
    }`
  }
});

/***/ }),

/***/ "./resolvers/index.js":
/*!****************************!*\
  !*** ./resolvers/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language */ "graphql/language");
/* harmony import */ var graphql_language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_language__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./resolvers/user.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.merge */ "../node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = ({ ...lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(_user__WEBPACK_IMPORTED_MODULE_3__["default"]),
  Date: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLScalarType"]({
    name: 'Date',
    description: 'Date custom scalar type',

    parseValue(value) {
      return new Date(value);
    },

    serialize(value) {
      return new Date(value).getTime();
    },

    parseLiteral(ast) {
      if (ast.kind === graphql_language__WEBPACK_IMPORTED_MODULE_2__["Kind"].INT) {
        return parseInt(ast.value, 10);
      }

      return null;
    }

  })
});

/***/ }),

/***/ "./resolvers/user.js":
/*!***************************!*\
  !*** ./resolvers/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./models/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./util/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    getUser: async (_, __) => _models__WEBPACK_IMPORTED_MODULE_2__["AdvitoUser"].query().findById(711)
  },
  Mutation: {
    login: async (_, {
      username,
      password
    }) => {
      const user = await _models__WEBPACK_IMPORTED_MODULE_2__["AdvitoUser"].query().where('username', username).first();
      if (!user) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["UserInputError"]('User not found');
      if (!user.is_enabled) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["UserInputError"]('User is not enabled');
      const {
        pwd: dbPassword,
        user_salt: userSalt
      } = user;
      const {
        passwordHashed
      } = Object(_util__WEBPACK_IMPORTED_MODULE_3__["saltHash"])(password, userSalt);
      if (dbPassword !== passwordHashed) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["UserInputError"]('Password is incorrect`');
      const roleIds = await user.$relatedQuery('advitoUserRoleLink').map(role => role.advito_role_id);
      const session = await user.$relatedQuery('advitoUserSession').where('session_end', null).first();
      const sessionToken = crypto__WEBPACK_IMPORTED_MODULE_6___default.a.randomBytes(16).toString('base64');
      if (session) await user.$relatedQuery('advitoUserSession').patch({
        session_end: new Date()
      }).where('session_end', null);
      await user.$relatedQuery('advitoUserSession').insert({
        advito_user_id: user.id,
        session_token: sessionToken,
        session_start: new Date(),
        session_end: null,
        session_duration_sec: 3600,
        session_type: null,
        session_expiration: Object(_util__WEBPACK_IMPORTED_MODULE_3__["getExpirationDate"])(_constants__WEBPACK_IMPORTED_MODULE_4__["SESSION"]),
        session_note: null,
        created: new Date(),
        modified: new Date()
      });
      return {
        displayName: user.fullName(),
        clientId: user.client_id,
        profilePicturePath: user.profile_picture_path,
        sessionToken,
        roleIds
      };
    },
    logout: async (_, {
      sessionToken
    }) => {
      const session = await _models__WEBPACK_IMPORTED_MODULE_2__["AdvitoUserSession"].query().where('session_token', sessionToken).where('session_end', null).first();
      if (!session) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["AuthenticationError"]('User session not found');
      await _models__WEBPACK_IMPORTED_MODULE_2__["AdvitoUserSession"].query().patch({
        session_end: new Date()
      }).where('session_token', sessionToken).where('session_end', null);
    },
    sendResetPasswordEmail: async (_, {
      email
    }) => {
      const user = await _models__WEBPACK_IMPORTED_MODULE_2__["AdvitoUser"].query().where('email', email).first();
      if (!user) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["UserInputError"]('User not found');
      const oldToken = await user.$relatedQuery('accessToken').where('is_active', true).first();
      if (oldToken) await user.$relatedQuery('accessToken').patch({
        is_active: false
      }).where('is_active', true).first();
      const token = Object(_util__WEBPACK_IMPORTED_MODULE_3__["generateAccessToken"])('PASS');
      await user.$relatedQuery('accessToken').insert({
        advito_user_id: user.id,
        token_type: 'RECOVERY',
        token,
        token_expiration: Object(_util__WEBPACK_IMPORTED_MODULE_3__["getExpirationDate"])(_constants__WEBPACK_IMPORTED_MODULE_4__["RECOVERY"])
      });
      const placeholders = {
        NAMEFIRST: user.name_first,
        URL: `${_config__WEBPACK_IMPORTED_MODULE_5__["APP_URL"]}/resetpassword?t=${token}`
      };

      try {
        await Object(_util__WEBPACK_IMPORTED_MODULE_3__["sendEmail"])('Password Recovery', user.email, placeholders);
        return token;
      } catch (err) {
        throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ForbiddenError"](err.message);
      }
    },
    resetPassword: async (_, {
      token,
      password,
      confirmPassword
    }) => {
      const errorMessages = Object(_util__WEBPACK_IMPORTED_MODULE_3__["checkValidPassword"])(password);
      if (password !== confirmPassword) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["UserInputError"]('Passwords do not match');
      if (errorMessages.length) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["UserInputError"](errorMessages);
      const accessToken = await _models__WEBPACK_IMPORTED_MODULE_2__["AccessToken"].query().where('token', token).first();
      if (!accessToken) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["AuthenticationError"]('Access token is not valid');
      const {
        is_active: isActive,
        token_expiration: tokenExpiration,
        advito_user_id: advitoUserId
      } = accessToken;
      if (!isActive || tokenExpiration < new Date()) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["AuthenticationError"]('Access token is not valid');
      const {
        saltHashed,
        passwordHashed
      } = Object(_util__WEBPACK_IMPORTED_MODULE_3__["saltHash"])(password);
      await _models__WEBPACK_IMPORTED_MODULE_2__["AdvitoUser"].query().patch({
        pwd: passwordHashed,
        user_salt: saltHashed
      }).where('id', advitoUserId);
    }
  }
});

/***/ }),

/***/ "./typeDefs/index.js":
/*!***************************!*\
  !*** ./typeDefs/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./typeDefs/user.js");



/* harmony default export */ __webpack_exports__["default"] = (apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  scalar Date
  ${_user__WEBPACK_IMPORTED_MODULE_2__["default"]}
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`);

/***/ }),

/***/ "./typeDefs/user.js":
/*!**************************!*\
  !*** ./typeDefs/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (`
type User {
  id: String,
  client_id: String,
  username: String,
  pwd: String,
  name_last: String,
  name_first: String,
  is_enabled: Boolean,
  is_verified: Boolean,
  must_change_pwd: Boolean,
  pwd_expiration: Date,
  email: String,
  phone: String,
  profile_picture_path: String,
  default_timezone: String,
  default_language: String,
  user_salt: String,
  default_date_format: String,
  address: String,
  created: String,
  modified: String
}
type Login {
  displayName: String,
  clientId: Int,
  profilePicturePath: String,
  sessionToken: String,
  roleIds: [Int]
}

extend type Query {
  getUser: User
}
extend type Mutation {
  login(username: String!, password: String!): Login
  logout(sessionToken: String!): Int
  sendResetPasswordEmail(email: String!): String
  resetPassword(token: String!, password: String!, confirmPassword: String!): Int
}
`);

/***/ }),

/***/ "./util/email.js":
/*!***********************!*\
  !*** ./util/email.js ***!
  \***********************/
/*! exports provided: sendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return sendEmail; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./models/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");




const ses = new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.SES({
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION
});
const sendEmail = async (templateName, recipient, placeholders) => {
  const {
    email_subject: emailSubject,
    email_body: emailBody
  } = await _models__WEBPACK_IMPORTED_MODULE_2__["EmailTemplate"].query().where('template_name', templateName).where('advito_application_id', _config__WEBPACK_IMPORTED_MODULE_3__["ADVITO_AIR_APPLICATION"]).first();
  let message = emailBody;
  Object.keys(placeholders).forEach(key => {
    const regex = new RegExp(String.raw`\[\[${key}]]`, 'g');
    message = message.replace(regex, placeholders[key]);
  });
  const params = {
    Source: _config__WEBPACK_IMPORTED_MODULE_3__["EMAIL_SENDER"],
    Destination: {
      ToAddresses: [recipient],
      BccAddresses: _config__WEBPACK_IMPORTED_MODULE_3__["EMAIL_BCC"]
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: emailSubject
      }
    }
  };
  await ses.sendEmail(params).promise();
};

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! exports provided: saltHash, generateAccessToken, getExpirationDate, checkValidPassword, sendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password */ "./util/password.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saltHash", function() { return _password__WEBPACK_IMPORTED_MODULE_1__["saltHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateAccessToken", function() { return _password__WEBPACK_IMPORTED_MODULE_1__["generateAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExpirationDate", function() { return _password__WEBPACK_IMPORTED_MODULE_1__["getExpirationDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkValidPassword", function() { return _password__WEBPACK_IMPORTED_MODULE_1__["checkValidPassword"]; });

/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email */ "./util/email.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return _email__WEBPACK_IMPORTED_MODULE_2__["sendEmail"]; });





/***/ }),

/***/ "./util/password.js":
/*!**************************!*\
  !*** ./util/password.js ***!
  \**************************/
/*! exports provided: saltHash, generateAccessToken, getExpirationDate, checkValidPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saltHash", function() { return saltHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAccessToken", function() { return generateAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpirationDate", function() { return getExpirationDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidPassword", function() { return checkValidPassword; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants/index.js");



const saltHash = (password, salt = null) => {
  const saltHashed = salt || crypto__WEBPACK_IMPORTED_MODULE_1___default.a.randomBytes(16).toString('base64');
  const passwordHashed = crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHash('sha256').update(password).update(saltHashed, 'base64').digest('base64');
  return {
    saltHashed,
    passwordHashed
  };
};
const generateAccessToken = (prefix = '') => prefix + crypto__WEBPACK_IMPORTED_MODULE_1___default.a.randomBytes(16).toString('hex');
const getExpirationDate = type => {
  const expirationDate = new Date();

  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__["SESSION"]) {
    expirationDate.setHours(expirationDate.getHours() + 1);
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_2__["RECOVERY"]) {
    expirationDate.setHours(expirationDate.getHours() + 24);
  }

  return new Date(expirationDate);
};
const checkValidPassword = password => {
  const errorMessages = [];
  if (password.length < 8) errorMessages.push('Password must be at least 8 characters long.');
  if (!/\d/g.test(password)) errorMessages.push('Password must have at least one number.');
  if (!/[a-z]/g.test(password)) errorMessages.push('Password must have at least one lowercase letter.');
  if (!/[A-Z]/g.test(password)) errorMessages.push('Password must have at least one uppercase letter.'); // if (!/\.|\,|\?|\/|!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+|\=|\||\~/g.test(password)) errorMessages.push('Password must have at least one special character.') // eslint-disable-line

  if (/\s/g.test(password)) errorMessages.push('Password cannot have spaces or other whitespace.');
  return errorMessages;
};

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-lambda");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql/language":
/*!***********************************!*\
  !*** external "graphql/language" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql/language");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ })));
//# sourceMappingURL=handler.js.map