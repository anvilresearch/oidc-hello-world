!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function E() {}
  E.prototype = {
    on: function(name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx: ctx
      });
      return this;
    },
    once: function(name, callback, ctx) {
      var self = this;
      function listener() {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      ;
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function(name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;
      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }
      return this;
    },
    off: function(name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i = 0,
            len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }
      (liveEvents.length) ? e[name] = liveEvents : delete e[name];
      return this;
    }
  };
  module.exports = E;
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2');
  return module.exports;
});

$__System.register('4', ['1', '5', '6'], function (_export) {
  var Anvil, bows, _Promise, log, jwk;

  /**
   * Set JWK
   */

  function setJWK(jwks) {
    var key = 'anvil.connect.jwk';

    // Recover from localStorage.
    if (!jwks) {
      try {
        _export('jwk', jwk = JSON.parse(localStorage[key]));
      } catch (e) {
        log('Cannot deserialized JWK', e);
      }
    }

    // Argument is a naked object.
    if (!Array.isArray(jwks) && typeof jwks === 'object') {
      _export('jwk', jwk = jwks);
    }

    // Argument is an array of JWK objects.
    // Find the key for verifying signatures.
    if (Array.isArray(jwks)) {
      jwks.forEach(function (obj) {
        if (obj && obj.use === 'sig') {
          _export('jwk', jwk = obj);
        }
      });
    }

    if (jwk) {
      // provider.jwk = jwk
      localStorage[key] = JSON.stringify(jwk);
    }
    return jwk;
  }

  /*
   * Fetch public jwk keys if needed.
   *
   * Returns a promise.
   */

  function prepareKeys() {
    var jwk = setJWK(); // reads from local storage
    if (jwk) {
      // Return promise also if keys are already in local storage
      return _Promise.resolve();
    } else {
      return getKeys();
    }
  }

  function getKeys() {
    var apiHttp = Anvil.apiHttp;
    return Anvil.promise.request({
      method: 'GET',
      url: Anvil.issuer + '/jwks',
      crossDomain: true
    }).then(function (response) {
      setJWK(response && apiHttp.getData(response) && apiHttp.getData(response).keys);
      return response;
    });
  }
  return {
    setters: [function (_2) {
      Anvil = _2['default'];
    }, function (_3) {
      bows = _3['default'];
    }, function (_) {
      _Promise = _['default'];
    }],
    execute: function () {
      /* eslint-env es6 */
      /* global localStorage */

      'use strict';

      _export('setJWK', setJWK);

      _export('prepareKeys', prepareKeys);

      log = bows('Anvil jwks');

      _export('jwk', jwk);
    }
  };
});
$__System.register('7', ['5', '8', '9'], function (_export) {
  /* eslint-env es6 */
  // For the Safari and IE 'webcrypto-shim' must be included for example
  // per script tag before this code.
  'use strict';

  var bows, verifyJWT, decodeSegment, log;

  _export('validateAndParseToken', validateAndParseToken);

  /**
   * Validate tokens
   */

  function validateAndParseToken(jwk, token) {
    log.debug('validateAndParseToken(): entering with token:', token);
    return verifyJWT(jwk, token).then(function (token) {
      log.debug('validateAndParseToken() token verified, now decoding:', token);
      return decodeSegment(token.payload);
    });
  }

  return {
    setters: [function (_3) {
      bows = _3['default'];
    }, function (_) {
      verifyJWT = _.verifyJWT;
    }, function (_2) {
      decodeSegment = _2.decodeSegment;
    }],
    execute: function () {
      log = bows('webcryptovalidate');
    }
  };
});
$__System.registerDynamic("a", ["b", "c", "d", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      toObject = $__require('c'),
      IObject = $__require('d');
  module.exports = $__require('e')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});

$__System.registerDynamic("f", ["10", "a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('10');
  $export($export.S + $export.F, 'Object', {assign: $__require('a')});
  return module.exports;
});

$__System.registerDynamic("11", ["f", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('f');
  module.exports = $__require('12').Object.assign;
  return module.exports;
});

$__System.registerDynamic("13", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('11'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("14", ["b", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      hide = $__require('15'),
      redefineAll = $__require('16'),
      ctx = $__require('17'),
      strictNew = $__require('18'),
      defined = $__require('19'),
      forOf = $__require('1a'),
      $iterDefine = $__require('1b'),
      step = $__require('1c'),
      ID = $__require('1d')('id'),
      $has = $__require('1e'),
      isObject = $__require('1f'),
      setSpecies = $__require('20'),
      DESCRIPTORS = $__require('21'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  return module.exports;
});

$__System.registerDynamic("22", ["b", "23", "10", "e", "15", "16", "1a", "18", "1f", "24", "21"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      global = $__require('23'),
      $export = $__require('10'),
      fails = $__require('e'),
      hide = $__require('15'),
      redefineAll = $__require('16'),
      forOf = $__require('1a'),
      strictNew = $__require('18'),
      isObject = $__require('1f'),
      setToStringTag = $__require('24'),
      DESCRIPTORS = $__require('21');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});

$__System.registerDynamic("25", ["14", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var strong = $__require('14');
  $__require('22')('Set', function(get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }}, strong);
  return module.exports;
});

$__System.registerDynamic("26", ["1a", "27"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var forOf = $__require('1a'),
      classof = $__require('27');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  return module.exports;
});

$__System.registerDynamic("28", ["10", "26"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('10');
  $export($export.P, 'Set', {toJSON: $__require('26')('Set')});
  return module.exports;
});

$__System.registerDynamic("29", ["2a", "2b", "2c", "25", "28", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2a');
  $__require('2b');
  $__require('2c');
  $__require('25');
  $__require('28');
  module.exports = $__require('12').Set;
  return module.exports;
});

$__System.registerDynamic("2d", ["29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('29'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("2e", ["10", "12", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('10'),
      core = $__require('12'),
      fails = $__require('e');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["c", "2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('c');
  $__require('2e')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("30", ["2f", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2f');
  module.exports = $__require('12').Object.keys;
  return module.exports;
});

$__System.registerDynamic("31", ["30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('30'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["17", "32", "33", "34", "35", "36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('17'),
      call = $__require('32'),
      isArrayIter = $__require('33'),
      anObject = $__require('34'),
      toLength = $__require('35'),
      getIterFn = $__require('36');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

$__System.registerDynamic("37", ["b", "1f", "34", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('b').getDesc,
      isObject = $__require('1f'),
      anObject = $__require('34');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('17')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("38", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("39", ["34", "3a", "3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('34'),
      aFunction = $__require('3a'),
      SPECIES = $__require('3b')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("3c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  return module.exports;
});

$__System.registerDynamic("3d", ["23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('23').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("3e", ["1f", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('1f'),
      document = $__require('23').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("3f", ["17", "3c", "3d", "3e", "23", "40", "41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('17'),
        invoke = $__require('3c'),
        html = $__require('3d'),
        cel = $__require('3e'),
        global = $__require('23'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('40')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('41'));
  return module.exports;
});

$__System.registerDynamic("42", ["23", "3f", "40", "41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('23'),
        macrotask = $__require('3f').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('40')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('41'));
  return module.exports;
});

$__System.registerDynamic("16", ["43"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('43');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("20", ["12", "b", "21", "3b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('12'),
      $ = $__require('b'),
      DESCRIPTORS = $__require('21'),
      SPECIES = $__require('3b')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

$__System.registerDynamic("44", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("45", ["44"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('44');
  return module.exports;
});

$__System.registerDynamic("46", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('45');
  return module.exports;
});

$__System.registerDynamic("41", ["46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('46');
  return module.exports;
});

$__System.registerDynamic("47", ["b", "48", "23", "17", "27", "10", "1f", "34", "3a", "18", "1a", "37", "38", "3b", "39", "42", "21", "16", "24", "20", "12", "49", "41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('b'),
        LIBRARY = $__require('48'),
        global = $__require('23'),
        ctx = $__require('17'),
        classof = $__require('27'),
        $export = $__require('10'),
        isObject = $__require('1f'),
        anObject = $__require('34'),
        aFunction = $__require('3a'),
        strictNew = $__require('18'),
        forOf = $__require('1a'),
        setProto = $__require('37').set,
        same = $__require('38'),
        SPECIES = $__require('3b')('species'),
        speciesConstructor = $__require('39'),
        asap = $__require('42'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('21')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('16')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('24')(P, PROMISE);
    $__require('20')(PROMISE);
    Wrapper = $__require('12')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('49')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('41'));
  return module.exports;
});

$__System.registerDynamic("4a", ["2a", "2b", "2c", "47", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2a');
  $__require('2b');
  $__require('2c');
  $__require('47');
  module.exports = $__require('12').Promise;
  return module.exports;
});

$__System.registerDynamic("6", ["4a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('4a'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("4b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function() {
    var inNode = typeof window === 'undefined',
        ls = !inNode && window.localStorage,
        out = {};
    if (inNode) {
      module.exports = console;
      return;
    }
    var andlogKey = ls.andlogKey || 'debug';
    if (ls && ls[andlogKey] && window.console) {
      out = window.console;
    } else {
      var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
          l = methods.length,
          fn = function() {};
      while (l--) {
        out[methods[l]] = fn;
      }
    }
    if (typeof exports !== 'undefined') {
      module.exports = out;
    } else {
      window.console = out;
    }
  })();
  return module.exports;
});

$__System.registerDynamic("4c", ["4b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('4b');
  return module.exports;
});

$__System.registerDynamic("4d", ["4c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function() {
    function checkColorSupport() {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
      }
      var chrome = !!window.chrome,
          firefox = /firefox/i.test(navigator.userAgent),
          firefoxVersion;
      if (firefox) {
        var match = navigator.userAgent.match(/Firefox\/(\d+\.\d+)/);
        if (match && match[1] && Number(match[1])) {
          firefoxVersion = Number(match[1]);
        }
      }
      return chrome || firefoxVersion >= 31.0;
    }
    var yieldColor = function() {
      var goldenRatio = 0.618033988749895;
      hue += goldenRatio;
      hue = hue % 1;
      return hue * 360;
    };
    var inNode = typeof window === 'undefined',
        ls = !inNode && window.localStorage,
        debugKey = ls.andlogKey || 'debug',
        debug = ls[debugKey],
        logger = $__require('4c'),
        bind = Function.prototype.bind,
        hue = 0,
        padLength = 15,
        noop = function() {},
        colorsSupported = ls.debugColors || checkColorSupport(),
        bows = null,
        debugRegex = null,
        invertRegex = false,
        moduleColorsMap = {};
    if (debug && debug[0] === '!' && debug[1] === '/') {
      invertRegex = true;
      debug = debug.slice(1);
    }
    debugRegex = debug && debug[0] === '/' && new RegExp(debug.substring(1, debug.length - 1));
    var logLevels = ['log', 'debug', 'warn', 'error', 'info'];
    for (var i = 0,
        ii = logLevels.length; i < ii; i++) {
      noop[logLevels[i]] = noop;
    }
    bows = function(str) {
      var msg,
          colorString,
          logfn;
      msg = (str.slice(0, padLength));
      msg += Array(padLength + 3 - msg.length).join(' ') + '|';
      if (debugRegex) {
        var matches = str.match(debugRegex);
        if ((!invertRegex && !matches) || (invertRegex && matches))
          return noop;
      }
      if (!bind)
        return noop;
      var logArgs = [logger];
      if (colorsSupported) {
        if (!moduleColorsMap[str]) {
          moduleColorsMap[str] = yieldColor();
        }
        var color = moduleColorsMap[str];
        msg = "%c" + msg;
        colorString = "color: hsl(" + (color) + ",99%,40%); font-weight: bold";
        logArgs.push(msg, colorString);
      } else {
        logArgs.push(msg);
      }
      if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        logArgs = logArgs.concat(args);
      }
      logfn = bind.apply(logger.log, logArgs);
      logLevels.forEach(function(f) {
        logfn[f] = bind.apply(logger[f] || logfn, logArgs);
      });
      return logfn;
    };
    bows.config = function(config) {
      if (config.padLength) {
        padLength = config.padLength;
      }
    };
    if (typeof module !== 'undefined') {
      module.exports = bows;
    } else {
      window.bows = bows;
    }
  }).call();
  return module.exports;
});

$__System.registerDynamic("5", ["4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('4d');
  return module.exports;
});

$__System.registerDynamic("c", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('19');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("32", ["34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('34');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("33", ["4e", "3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('4e'),
      ITERATOR = $__require('3b')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("35", ["4f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('4f'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("49", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('3b')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("50", ["17", "10", "c", "32", "33", "35", "36", "49"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('17'),
      $export = $__require('10'),
      toObject = $__require('c'),
      call = $__require('32'),
      isArrayIter = $__require('33'),
      toLength = $__require('35'),
      getIterFn = $__require('36');
  $export($export.S + $export.F * !$__require('49')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }});
  return module.exports;
});

$__System.registerDynamic("51", ["2b", "50", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2b');
  $__require('50');
  module.exports = $__require('12').Array.from;
  return module.exports;
});

$__System.registerDynamic("52", ["51"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('51'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("53", ["52"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Array$from = $__require('52')["default"];
  exports["default"] = function(arr) {
    return Array.isArray(arr) ? arr : _Array$from(arr);
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  ;
  (function(exports) {
    'use strict';
    var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);
    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
      if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
      if (code < NUMBER)
        return -1;
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
      if (code < UPPER + 26)
        return code - UPPER;
      if (code < LOWER + 26)
        return code - LOWER + 26;
    }
    function b64ToByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var len = b64.length;
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;
      function push(v) {
        arr[L++] = v;
      }
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    }
    function uint8ToBase64(uint8) {
      var i,
          extraBytes = uint8.length % 3,
          output = "",
          temp,
          length;
      function encode(num) {
        return lookup.charAt(num);
      }
      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      }
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output += tripletToBase64(temp);
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += '==';
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += '=';
          break;
      }
      return output;
    }
    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
  return module.exports;
});

$__System.registerDynamic("55", ["54"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('54');
  return module.exports;
});

$__System.registerDynamic("56", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, "TextEncoderLite,TextDecoderLite", null);
  (function() {
    this["TextEncoderLite"] = TextEncoderLite;
    this["TextDecoderLite"] = TextDecoderLite;
    "format global";
    "exports TextEncoderLite,TextDecoderLite";
    function TextEncoderLite() {}
    function TextDecoderLite() {}
    (function() {
      'use strict';
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        var i = 0;
        for (; i < length; i++) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            if (leadSurrogate) {
              if (codePoint < 0xDC00) {
                if ((units -= 3) > -1)
                  bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
              } else {
                codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000;
                leadSurrogate = null;
              }
            } else {
              if (codePoint > 0xDBFF) {
                if ((units -= 3) > -1)
                  bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1)
                  bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else {
                leadSurrogate = codePoint;
                continue;
              }
            }
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = null;
          }
          if (codePoint < 0x80) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0)
              break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0)
              break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x200000) {
            if ((units -= 4) < 0)
              break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }
        return bytes;
      }
      function utf8Slice(buf, start, end) {
        var res = '';
        var tmp = '';
        end = Math.min(buf.length, end || Infinity);
        start = start || 0;
        for (var i = start; i < end; i++) {
          if (buf[i] <= 0x7F) {
            res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
            tmp = '';
          } else {
            tmp += '%' + buf[i].toString(16);
          }
        }
        return res + decodeUtf8Char(tmp);
      }
      function decodeUtf8Char(str) {
        try {
          return decodeURIComponent(str);
        } catch (err) {
          return String.fromCharCode(0xFFFD);
        }
      }
      TextEncoderLite.prototype.encode = function(str) {
        var result;
        if ('undefined' === typeof Uint8Array) {
          result = utf8ToBytes(str);
        } else {
          result = new Uint8Array(utf8ToBytes(str));
        }
        return result;
      };
      TextDecoderLite.prototype.decode = function(bytes) {
        return utf8Slice(bytes, 0, bytes.length);
      };
    }());
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("57", ["56"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('56');
  return module.exports;
});

$__System.register('58', ['53', '55', '57'], function (_export) {
  var _toArray, base64, hexChars, hexEncodeArray;

  function ab2hex(ab) {
    var arr = new Uint8Array(ab);
    var s = '';
    for (var i = 0, n = ab.byteLength; i < n; i++) {
      var byte = arr[i];
      s += hexEncodeArray[byte >>> 4];
      s += hexEncodeArray[byte & 0x0f];
    }
    return s;
  }

  function hexdigit(c) {
    var i = hexChars.indexOf(c);
    if (i < 0) {
      throw new Error('Character \'' + c + '\' is not a valid hex character: expected \'' + hexChars + '\'');
    }
    return i;
  }

  function hex2ab(hexstr) {
    var len = hexstr.length;
    if (len % 2 !== 0) {
      throw new Error('hex string \'' + hexstr + ' \'is expected to have even number of hex characters');
    }
    var buflen = len >>> 1;
    var buf = new ArrayBuffer(buflen);
    var view = new Uint8Array(buf);

    var i = 0;
    var rest = hexstr;
    while (rest.length > 0) {
      var _rest = rest;

      var _rest2 = _toArray(_rest);

      var d1 = _rest2[0];
      var d0 = _rest2[1];

      var newrest = _rest2.slice(2);

      // rest parameter must not be the same as already existing variable
      // d0 === undefined should be handled by throw above.
      var n = hexdigit(d1) * 16 + hexdigit(d0);
      view[i++] = n;
      rest = newrest;
    }
    return buf;
  }

  // see devnotes.md for more on why we use TextEncoder(Lite) for UTF-8
  // conversions.

  function str2utf8ab(str) {
    return new TextEncoderLite('utf-8').encode(str);
  }

  function abutf82str(ab) {
    return new TextDecoderLite('utf-8').decode(ab);
  }

  function str2ab(str) {
    var strlen = str.length;
    var buf = new ArrayBuffer(strlen * 2);
    var view = new Uint16Array(buf);
    for (var i = 0; i < strlen; i++) {
      view[i] = str.charCodeAt(i);
      // don't use charAt(i) here.
    }
    return buf;
  }

  function ab2str(ab) {
    return String.fromCharCode.apply(null, new Uint16Array(ab));
  }

  function ascii2ab(str) {
    var strlen = str.length;
    var buf = new ArrayBuffer(strlen);
    var view = new Uint8Array(buf);
    for (var i = 0; i < strlen; i++) {
      var cc = str.charCodeAt(i);
      if (cc > 127) {
        throw new Error('String contains non ascii characters: charCode = \'' + cc + '\' at index \'' + i + '\'');
      }
      view[i] = cc;
    }
    return buf;
  }

  function ab2ascii(ab) {
    var view = new Uint8Array(ab);
    var len = view.length;
    var s = '';
    for (var i = 0; i < len; i++) {
      var cc = ab[i];
      if (cc > 127) {
        throw new Error('String contains non ascii characters: charCode = \'' + cc + '\' at index \'' + i + '\'');
      }
      s += String.fromCharCode(cc);
    }
    return s;
  }

  function base64str2ab(base64str) {
    return base64.toByteArray(base64str);
  }

  function ab2base64str(buf) {
    return base64.fromByteArray(new Uint8Array(buf));
  }

  function base64urlstr2ab(base64urlstr) {
    // Decode url-safe style base64: https://github.com/beatgammit/base64-js/pull/10
    // however '=' padding characters must be added, if needed
    var str = base64urlstr;
    var npad = 4 - str.length % 4;
    if (npad === 4) {
      npad = 0;
    }
    str = (str + '===').slice(0, str.length + npad);
    return base64.toByteArray(str);
  }

  function ab2base64urlstr(buf) {
    var str = base64.fromByteArray(new Uint8Array(buf));
    // '=' is percent encoded in an URL so strip this:
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  return {
    setters: [function (_) {
      _toArray = _['default'];
    }, function (_2) {
      base64 = _2;
    }, function (_3) {}],
    execute: function () {
      /* eslint-env es6 */
      /* global TextEncoderLite, TextDecoderLite */

      'use strict';

      _export('ab2hex', ab2hex);

      _export('hex2ab', hex2ab);

      _export('str2utf8ab', str2utf8ab);

      _export('abutf82str', abutf82str);

      _export('str2ab', str2ab);

      _export('ab2str', ab2str);

      _export('ascii2ab', ascii2ab);

      _export('ab2ascii', ab2ascii);

      _export('base64str2ab', base64str2ab);

      _export('ab2base64str', ab2base64str);

      _export('base64urlstr2ab', base64urlstr2ab);

      _export('ab2base64urlstr', ab2base64urlstr);

      // see jsperf.com/hex-conversion

      hexChars = '0123456789abcdef';
      hexEncodeArray = hexChars.split('');
    }
  };
});
$__System.register('9', ['53', '58'], function (_export) {
  var _toArray, base64urlstr2ab, abutf82str;

  function decodeSegment(base64url) {
    var utf8ab = base64urlstr2ab(base64url);
    var str = abutf82str(utf8ab);
    var json = JSON.parse(str);
    return json;
  }

  function segments(token) {
    var tarr = token.split('.');

    var _tarr = _toArray(tarr);

    var theader = _tarr[0];
    var tpayload = _tarr[1];
    var tsignature = _tarr[2];

    var rest = _tarr.slice(3);

    if (rest.length > 0) {
      throw new Error('token has ' + (3 + rest.length) + ' dot \'.\' separated sections where 3 are expected.');
    }
    if (tsignature === undefined) {
      throw new Error('token misses signature');
    }
    if (tpayload === undefined) {
      throw new Error('token misses payload');
    }
    if (theader === undefined) {
      throw new Error('token misses header');
    }
    return {
      arr: tarr,
      header: theader,
      payload: tpayload,
      signature: tsignature
    };
  }

  return {
    setters: [function (_) {
      _toArray = _['default'];
    }, function (_2) {
      base64urlstr2ab = _2.base64urlstr2ab;
      abutf82str = _2.abutf82str;
    }],
    execute: function () {
      'use strict';

      _export('decodeSegment', decodeSegment);

      _export('segments', segments);
    }
  };
});
$__System.register('8', ['5', '6', '9', '31', '58', '2d'], function (_export) {
  var bows, _Promise, segments, _Object$keys, base64urlstr2ab, ascii2ab, _Set, log, crypto;

  // see https://github.com/diafygi/webcrypto-examples
  // see http://blog.engelke.com/2014/06/22/symmetric-cryptography-in-the-browser-part-1/

  function generateEncryptionKey() {
    return crypto.subtle.generateKey({ name: 'AES-CBC', length: 128 }, true, ['encrypt', 'decrypt']);
  }

  function exportEncryptionKey(key) {
    return crypto.subtle.exportKey('raw', key).then(function (keyData) {
      return { encryptionKey: key, exportedKey: keyData };
    });
  }

  function encryptArrayBuffer(_ref) {
    var key = _ref.key;
    var abPlainText = _ref.abPlainText;

    var iv = crypto.getRandomValues(new Uint8Array(16));
    return crypto.subtle.encrypt({
      name: 'AES-CBC',
      iv: iv
    }, key.encryptionKey, abPlainText).then(function (encrypted) {
      return {
        abKey: key.exportedKey,
        abIv: iv,
        abEncrypted: encrypted
      };
    });
  }

  function genKeyAndEncrypt(abPlainText) {
    return generateEncryptionKey().then(exportEncryptionKey).then(function (key) {
      return encryptArrayBuffer({ key: key, abPlainText: abPlainText });
    });
  }

  function importEncryptionKey(abKeyData) {
    return crypto.subtle.importKey('raw', abKeyData, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
  }

  function decryptArrayBuffer(_ref2) {
    var key = _ref2.key;
    var abIv = _ref2.abIv;
    var abEncrypted = _ref2.abEncrypted;

    return crypto.subtle.decrypt({
      name: 'AES-CBC',
      iv: abIv
    }, key, abEncrypted);
  }

  function decrypt(_ref3) {
    var abKey = _ref3.abKey;
    var abIv = _ref3.abIv;
    var abEncrypted = _ref3.abEncrypted;

    return importEncryptionKey(abKey).then(function (key) {
      return decryptArrayBuffer({ key: key, abIv: abIv, abEncrypted: abEncrypted });
    });
  }

  function sha256(ab) {
    return crypto.subtle.digest('SHA-256', ab);
  }

  function omit(obj) {
    for (var _len = arguments.length, keysToOmit = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      keysToOmit[_key - 1] = arguments[_key];
    }

    var toOmit = new _Set(keysToOmit);
    return _Object$keys(obj).reduce(function (a, key) {
      if (!toOmit.has(key)) a[key] = obj[key];
      return a;
    }, {});
  }

  // jwk is a JWK object not JSON
  // as well
  // https://github.com/WebKit/webkit/blob/master/LayoutTests/crypto/subtle/rsassa-pkcs1-v1_5-import-jwk.html
  function importJWK(jwk) {
    // needed for Edge 13.10586.0 (Windows 10 0.0.0) todo: file issue to see whether this is a bug in edge!
    // https://connect.microsoft.com/IE/feedbackdetail/view/2242108/webcryptoapi-importing-jwk-with-use-field-fails
    var effective_jwk = omit(jwk, 'use'); // had added {key_ops: ['verify'], ext: true})
    if (jwk.use && jwk.use !== 'sig') {
      return _Promise.reject(new Error('Expected jwk.use to be \'sig\' but it is \'' + jwk.use + '\''));
    }
    return crypto.subtle.importKey('jwk', effective_jwk, { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } }, true, // extractable
    ['verify']);
  }

  function verifyJWT(jwkPublic, token) {
    try {
      var _ret = (function () {
        var jws = segments(token);
        var abData = ascii2ab(jws.header + '.' + jws.payload);
        var abSignature = base64urlstr2ab(jws.signature);

        return {
          v: importJWK(jwkPublic).then(function (key) {
            return crypto.subtle.verify({
              name: 'RSASSA-PKCS1-v1_5',
              hash: {
                name: 'SHA-256'
              }
            }, key, abSignature, abData).then(function (verified) {
              if (!verified) {
                throw new Error('Failed to verify token signature.');
              }
              return jws;
            });
          }, function (err) {
            log('importJWK failed:', err.toString());
            throw err;
          })
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    } catch (err) {
      log('verifyJWT rejected with err=', err, err.stack);
      return _Promise.reject(err);
    }
  }

  return {
    setters: [function (_3) {
      bows = _3['default'];
    }, function (_2) {
      _Promise = _2['default'];
    }, function (_5) {
      segments = _5.segments;
    }, function (_) {
      _Object$keys = _['default'];
    }, function (_4) {
      base64urlstr2ab = _4.base64urlstr2ab;
      ascii2ab = _4.ascii2ab;
    }, function (_d) {
      _Set = _d['default'];
    }],
    execute: function () {
      // For the Safari and IE 'webcrypto-shim' must be included for example
      // per script tag before this code.
      'use strict';

      _export('generateEncryptionKey', generateEncryptionKey);

      _export('genKeyAndEncrypt', genKeyAndEncrypt);

      _export('decrypt', decrypt);

      _export('sha256', sha256);

      _export('verifyJWT', verifyJWT);

      log = bows('./subtle_encrypt');
      crypto = window.crypto;
    }
  };
});
$__System.register('59', ['8', '13', '58'], function (_export) {
  var subtle_crypt, _Object$assign, ab2hex, str2ab, ab2str, ab2base64str, base64str2ab, ab2base64urlstr, str2utf8ab;

  /**
   * Encrypt some plain text with a freshly generated secret.
   *
   * The function returns a promise. The promise resolution is an object
   * containing the secret and the encrypted plaintext.
   * {secret: reduced character set string, encrypted: base64 encoded str}
   *
   * The returned object must be passed into the decrypt method.
   *
   * @param plaintext a string
   * @returns promise
   */

  function encrypt(plaintext) {
    return subtle_crypt.genKeyAndEncrypt(str2ab(plaintext)).then(function (_ref) {
      var abIv = _ref.abIv;
      var abKey = _ref.abKey;
      var abEncrypted = _ref.abEncrypted;

      var secret = secrets2str({ abIv: abIv, abKey: abKey });
      return { secret: secret, encrypted: ab2base64str(abEncrypted) };
    });
  }

  /**
   * Decrypts string encrypted with encrypt function of this module.
   *
   * Returns a promise.
   * @param secret - as returned by encrypt
   * @param encrypted - as returned by encrypt
   * @returns promise
   */

  function decrypt(_ref2) {
    var secret = _ref2.secret;
    var encrypted = _ref2.encrypted;

    var secrets = str2secrets(secret);
    var abEncrypted = base64str2ab(encrypted);
    var parms = _Object$assign({}, secrets, { abEncrypted: abEncrypted });
    return subtle_crypt.decrypt(parms).then(function (abPlaintext) {
      return ab2str(abPlaintext);
    });
  }

  function secrets2str(_ref3) {
    var abIv = _ref3.abIv;
    var abKey = _ref3.abKey;

    var b64Iv = ab2base64str(abIv);
    var b64Key = ab2base64str(abKey);
    return '' + b64Iv + '.' + b64Key;
  }

  function str2secrets(str) {
    var pair = str.split('.');
    if (pair.length !== 2) {
      throw new Error('Expected format of string is <base64>.<base64>');
    }
    var abs = pair.map(base64str2ab);
    return { abIv: abs[0], abKey: abs[1] };
  }

  /**
   * Compute sha256 digest of string returning hex characters.
   *
   * @param str
   * @returns promise
   */

  function sha256sum(str) {
    return subtle_crypt.sha256(str2utf8ab(str)).then(ab2hex);
  }

  /**
   * Computes sha256 digest of string returning base64url encoded string
   * @param str
   * @returns promise
   */

  function sha256url(str) {
    return subtle_crypt.sha256(str2utf8ab(str)).then(ab2base64urlstr);
  }

  /**
   * Generates nonce for OIDC.
   *
   * This is not a promise.
   *
   * @returns {string}
   */

  function generateNonce() {
    var bytes = new Uint8Array(10);
    window.crypto.getRandomValues(bytes);
    return ab2base64urlstr(bytes).substr(0, 10);
  }

  return {
    setters: [function (_3) {
      subtle_crypt = _3;
    }, function (_) {
      _Object$assign = _['default'];
    }, function (_2) {
      ab2hex = _2.ab2hex;
      str2ab = _2.str2ab;
      ab2str = _2.ab2str;
      ab2base64str = _2.ab2base64str;
      base64str2ab = _2.base64str2ab;
      ab2base64urlstr = _2.ab2base64urlstr;
      str2utf8ab = _2.str2utf8ab;
    }],
    execute: function () {
      // For the Safari and IE 'webcrypto-shim' must be included for example
      // per script tag before this code.
      'use strict';

      _export('encrypt', encrypt);

      _export('decrypt', decrypt);

      _export('sha256sum', sha256sum);

      _export('sha256url', sha256url);

      _export('generateNonce', generateNonce);
    }
  };
});
$__System.register('5a', [], function (_export) {
  /* global crypto, location */

  'use strict';

  var hasWebcrypto;

  _export('getCryptoThingie', getCryptoThingie);

  // See on why we do not use origin: http://stackoverflow.com/a/6941653

  function allowForceFallback() {
    return location.protocol === 'http:' && location.hostname === 'localhost';
  }

  // todo: make non malleable (configurable, writable): this level looks OK if
  // one can assume that crypto and crypto subtle itself are non malleable
  // check into callers..

  function getCryptoThingie(webcrypto, _ref) {
    var fallback = _ref.fallback;
    var forceFallback = _ref.forceFallback;

    if (typeof fallback !== 'undefined') {
      var useFallback = !hasWebcrypto || allowForceFallback() && forceFallback;
      if (useFallback) {
        return fallback;
      }
    }
    return webcrypto;
  }

  return {
    setters: [],
    execute: function () {
      hasWebcrypto = typeof crypto !== 'undefined' && typeof crypto.subtle !== 'undefined';
    }
  };
});
$__System.register('5b', ['7', '59', '5a'], function (_export) {
  'use strict';

  var jwtvalidator_webcrypto, encryptor_webcrypto, nowebcrypto_fallback, jwtvalidator, encryptor, ourmodule;

  /**
   * Sets fallback code in case webcrypto is not available.
   *
   * The determination whether webcrypto is available is made based on
   * the existence of 'crypto.subtle'.
   *
   * One can provide a fallback for an encryptor and a JWT validator.
   *
   * The encryptor API can be seen in encryptor-webcrypto.js and associated
   * unit tests.
   * Likewise the JTW validator API is demonstrated in jws-validator-webcrypto.js
   *
   * To avoid malicious code taking over all crypto code by changing to
   * cryptors, these are ONLY used if webcrypto APIs are not available as
   * determined by the presence of the crypto.subtle global interface being
   * defined.
   *
   * For unit testing cryptors when the origin is at http://localhost:<any-port>
   * one can use forceFallback to replace the normal web crypto based adapters.
   * In this case set forceFallback truthy.
   *
   * To restore the original cryptors the following call can be made:
   * setNoWebCryptoFallbacks({encryptorOptions: {}, jwtvalidatorOptions: {})
   *
   * @param encryptorOptions optional: { fallback, forceFallback }
   * @param jwtvalidatorOptions optional: { fallback, forceFallback }
   */
  function setNoWebCryptoFallbacks(_ref) {
    var encryptorOptions = _ref.encryptorOptions;
    var jwtvalidatorOptions = _ref.jwtvalidatorOptions;

    if (encryptorOptions) {
      encryptor = nowebcrypto_fallback.getCryptoThingie(encryptor_webcrypto, encryptorOptions);
    }
    if (jwtvalidatorOptions) {
      jwtvalidator = nowebcrypto_fallback.getCryptoThingie(jwtvalidator_webcrypto, jwtvalidatorOptions);
    }
  }

  return {
    setters: [function (_) {
      jwtvalidator_webcrypto = _;
    }, function (_2) {
      encryptor_webcrypto = _2;
    }, function (_a) {
      nowebcrypto_fallback = _a;
    }],
    execute: function () {
      jwtvalidator = jwtvalidator_webcrypto;
      encryptor = encryptor_webcrypto;
      ourmodule = {};

      // ensure the crypto algorithms can't be easily changed
      // properties are defined to be:
      // not writable and not configurable by defaults
      // also no setter.
      Object.defineProperty(ourmodule, 'encryptor', {
        get: function get() {
          return encryptor;
        },
        enumerable: true
      });

      Object.defineProperty(ourmodule, 'jwtvalidator', {
        get: function get() {
          return jwtvalidator;
        },
        enumerable: true
      });

      Object.defineProperty(ourmodule, 'setNoWebCryptoFallbacks', {
        get: function get() {
          return setNoWebCryptoFallbacks;
        },
        enumerable: true
      });
      _export('default', ourmodule);
    }
  };
});
$__System.register("5c", [], function (_export) {
  /* eslint-env es6 */
  /* global location */

  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        location: {
          hash: function hash() {
            return location.hash.substring(1);
          },
          path: function path() {
            return location.pathname;
          }
        },
        dom: {
          getWindow: function getWindow() {
            return window;
          },
          getDocument: function getDocument() {
            return document;
          }
        }
      });
    }
  };
});
$__System.registerDynamic("5d", ["27", "3b", "4e", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('27'),
      ITERATOR = $__require('3b')('iterator'),
      Iterators = $__require('4e');
  module.exports = $__require('12').isIterable = function(it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  return module.exports;
});

$__System.registerDynamic("5e", ["2c", "2b", "5d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2c');
  $__require('2b');
  module.exports = $__require('5d');
  return module.exports;
});

$__System.registerDynamic("5f", ["5e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('5e'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("60", ["61", "5f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _getIterator = $__require('61')["default"];
  var _isIterable = $__require('5f')["default"];
  exports["default"] = (function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr),
            _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("62", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("1c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("d", ["40"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('40');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("63", ["d", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('d'),
      defined = $__require('19');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("64", ["62", "1c", "4e", "63", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('62'),
      step = $__require('1c'),
      Iterators = $__require('4e'),
      toIObject = $__require('63');
  module.exports = $__require('1b')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("2c", ["64", "4e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('64');
  var Iterators = $__require('4e');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("4f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("19", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("65", ["4f", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('4f'),
      defined = $__require('19');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("48", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("3a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("17", ["3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('3a');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("10", ["23", "12", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('23'),
      core = $__require('12'),
      ctx = $__require('17'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("43", ["15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('15');
  return module.exports;
});

$__System.registerDynamic("66", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("21", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('e')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("15", ["b", "66", "21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      createDesc = $__require('66');
  module.exports = $__require('21') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("67", ["b", "66", "24", "15", "3b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('b'),
      descriptor = $__require('66'),
      setToStringTag = $__require('24'),
      IteratorPrototype = {};
  $__require('15')(IteratorPrototype, $__require('3b')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("24", ["b", "1e", "3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('b').setDesc,
      has = $__require('1e'),
      TAG = $__require('3b')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["48", "10", "43", "15", "1e", "4e", "67", "24", "b", "3b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('48'),
      $export = $__require('10'),
      redefine = $__require('43'),
      hide = $__require('15'),
      has = $__require('1e'),
      Iterators = $__require('4e'),
      $iterCreate = $__require('67'),
      setToStringTag = $__require('24'),
      getProto = $__require('b').getProto,
      ITERATOR = $__require('3b')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("2b", ["65", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('65')(true);
  $__require('1b')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("34", ["1f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('1f');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("40", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("27", ["40", "3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('40'),
      TAG = $__require('3b')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("68", ["23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('23'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("1d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("23", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("3b", ["68", "1d", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('68')('wks'),
      uid = $__require('1d'),
      Symbol = $__require('23').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("4e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("36", ["27", "3b", "4e", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('27'),
      ITERATOR = $__require('3b')('iterator'),
      Iterators = $__require('4e');
  module.exports = $__require('12').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("69", ["34", "36", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('34'),
      get = $__require('36');
  module.exports = $__require('12').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  return module.exports;
});

$__System.registerDynamic("6a", ["2c", "2b", "69"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2c');
  $__require('2b');
  module.exports = $__require('69');
  return module.exports;
});

$__System.registerDynamic("61", ["6a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('6a'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('6b', ['60', '61'], function (_export) {
  var _slicedToArray, _getIterator;

  function toStr(val) {
    // array is already handled here.
    if (typeof val === 'object') {
      return JSON.stringify(val);
    }
    return val;
  }

  function valstof(val) {
    return Array.isArray(val) ? ['[' + val + ']', 'array'] : [toStr(val), typeof val];
  }

  // internal api

  function checkNumberClaims(claims, names) {
    var values = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(names), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _name = _step.value;

        var val = claims[_name];

        var _valstof = valstof(val);

        var _valstof2 = _slicedToArray(_valstof, 2);

        var vals = _valstof2[0];
        var tof = _valstof2[1];

        if (tof !== 'number') {
          throw new Error('token must have ' + _name + ' claim of type number not ' + tof + ' (' + vals + ')');
        }
        values.push(val);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return values;
  }

  // internal api

  function checkStringClaims(claims, names) {
    var values = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(names), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _name2 = _step2.value;

        var val = claims[_name2];

        var _valstof3 = valstof(val);

        var _valstof32 = _slicedToArray(_valstof3, 2);

        var vals = _valstof32[0];
        var tof = _valstof32[1];

        if (tof !== 'string') {
          throw new Error('token must have ' + _name2 + ' claim of type string not ' + tof + ' (' + vals + ')}');
        }
        if (val.trim().length === 0) {
          throw new Error('token must have ' + _name2 + ' claim of type string which is not empty');
        }
        values.push(val);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return values;
  }

  // internal api

  function checkStringArrayClaims(claims, names) {
    var values = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop = function () {
        var name = _step3.value;

        var val = claims[name];

        var _valstof4 = valstof(val);

        var _valstof42 = _slicedToArray(_valstof4, 2);

        var vals = _valstof42[0];
        var tof = _valstof42[1];

        if (tof === 'array') {
          if (val.length === 0) {
            throw new Error('token with invalid ' + name + ' claim: must be an array of strings not an empty array (' + vals + ')');
          }
          val.forEach(function (v) {
            var _valstof5 = valstof(v);

            var _valstof52 = _slicedToArray(_valstof5, 2);

            var tof = _valstof52[1];

            if (tof !== 'string') {
              throw new Error('token with invalid ' + name + ' claim: contains element which is not a string (' + vals + ')');
            }
          });
          values.push(val);
          // good value
        } else {
            throw new Error('token must have ' + name + ' claim: must be string or array of strings not ' + tof + ' (' + vals + ')');
          }
      };

      for (var _iterator3 = _getIterator(names), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
          _iterator3['return']();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return values;
  }

  // internal api

  function checkStringOrStringArrayClaims(claims, names) {
    var values = [];
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      var _loop2 = function () {
        var name = _step4.value;

        var val = claims[name];

        var _valstof6 = valstof(val);

        var _valstof62 = _slicedToArray(_valstof6, 2);

        var vals = _valstof62[0];
        var tof = _valstof62[1];

        if (tof === 'array') {
          if (val.length === 0) {
            throw new Error('token with invalid ' + name + ' claim: must be string or array of strings not an empty array (' + vals + ')');
          }
          val.forEach(function (v) {
            var _valstof7 = valstof(v);

            var _valstof72 = _slicedToArray(_valstof7, 2);

            var tof = _valstof72[1];

            if (tof !== 'string') {
              throw new Error('token with invalid ' + name + ' claim: contains element which is not a string (' + vals + ')');
            }
          });
          values.push(val);
          // good value
        } else if (tof === 'string') {
            values.push([val]);
          } else {
            throw new Error('token must have ' + name + ' claim: must be string or array of strings not ' + tof + ' (' + vals + ')');
          }
      };

      for (var _iterator4 = _getIterator(names), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        _loop2();
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4['return']) {
          _iterator4['return']();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return values;
  }

  // internal api

  function check_aud_azp(claims, client_id) {
    var _checkStringOrStringArrayClaims = checkStringOrStringArrayClaims(claims, ['aud']);

    var _checkStringOrStringArrayClaims2 = _slicedToArray(_checkStringOrStringArrayClaims, 1);

    var aud = _checkStringOrStringArrayClaims2[0];

    var azpChecked = false;
    if ('azp' in claims) {
      var _checkStringClaims = checkStringClaims(claims, ['azp']);

      var _checkStringClaims2 = _slicedToArray(_checkStringClaims, 1);

      var azp = _checkStringClaims2[0];

      if (azp !== client_id) {
        throw new Error('token rejected: azp \'' + azp + '\' claim does not match this client id \'' + client_id + '\'');
      }
      azpChecked = true;
    }
    if (!(aud.length === 1 && azpChecked)) {
      if (aud.indexOf(client_id) === -1) {
        throw new Error('token rejected: aud \'' + aud + '\' does not mention this clients id \'' + client_id + '\'');
      }
    }
  }

  /*
  Potential references for access token validation:
  
  * [Final: OpenID Connect Core 1.0 incorporating errata set 1](http://openid.net/specs/openid-connect-core-1_0.html#rfc.section.9)
  * Access token validation: http://openid.net/specs/openid-connect-implicit-1_0.html#rfc.section.2.2.2
  
    Open ID Connect does not say much about the structure of an access token.
    However OAuth2 defined field token_type, expires_in, refresh_token, scope
    in https://tools.ietf.org/html/rfc6749#section-5.1
  
  However 2.2.2 says that clients SHOULD validate the at_hash of the ID_Token
  against the access token. The at hash is **not** checked by this function.
  
  Now the anvil connect server does issue JWTs as access token, so that this
  client can do more validation. The JWT issued contains the following claims as
  per example:
    "jti": "748ff8eed8c996b6f898",
    "iss": "http://connect.example.com:3000",
    "sub": "c43f3fc8-048a-457a-9cff-0a25d6e4e6f0",
    "aud": "cb4d671a-c02a-4ac6-a2b4-f6d58f4ea783",
    "exp": 1454012671,
    "iat": 1454009071,
    "scope": "openid profile"
  It is also signed.
  
  */

  function checkAccessClaims(claims, _ref) {
    var issuer = _ref.issuer;
    var client_id = _ref.client_id;

    if (!claims) {
      throw new Error('token with empty claims rejected');
    }
    var now = new Date() / 1000;

    var _checkNumberClaims = checkNumberClaims(claims, ['iat', 'exp']);

    var _checkNumberClaims2 = _slicedToArray(_checkNumberClaims, 2);

    var iat = _checkNumberClaims2[0];
    var exp = _checkNumberClaims2[1];

    var _checkStringClaims3 = checkStringClaims(claims, ['jti', 'iss', 'sub']);

    var _checkStringClaims32 = _slicedToArray(_checkStringClaims3, 2);

    var iss = _checkStringClaims32[1];

    if (iat > now) {
      throw new Error('token invalid: issued at (iat) in the future.');
    }
    if (now > exp) {
      throw new Error('token is expired.');
    }
    if (iss !== issuer) {
      throw new Error('token iss \'' + iss + '\' does not match \'' + issuer + '\'');
    }

    check_aud_azp(claims, client_id);

    return claims;
  }

  /*
  
   id_claims: {
   "iss": "http://connect.example.com:3000",
   "sub": "c43f3fc8-048a-457a-9cff-0a25d6e4e6f0",
   "aud": "cb4d671a-c02a-4ac6-a2b4-f6d58f4ea783",
   "exp": 1454065209,
   "iat": 1454061609,
   "nonce": "1Vwkv2rpxLkAp6xYV_VRgRiYj2aNpTC9ylnnAxqQ0CA",
   "at_hash": "b528d002387a20122a631c48e1f4ce60",
   "amr": [
     "pwd"
   ]
   },
  
   */

  function checkIdClaims(claims, _ref2) {
    var issuer = _ref2.issuer;
    var client_id = _ref2.client_id;

    if (!claims) {
      throw new Error('token with empty claims rejected');
    }
    var now = new Date() / 1000;

    var _checkNumberClaims3 = checkNumberClaims(claims, ['iat', 'exp']);

    var _checkNumberClaims32 = _slicedToArray(_checkNumberClaims3, 2);

    var iat = _checkNumberClaims32[0];
    var exp = _checkNumberClaims32[1];

    if (iat > now) {
      throw new Error('token invalid: issued at (iat) in the future.');
    }
    if (now > exp) {
      throw new Error('token is expired.');
    }

    var _checkStringClaims4 = checkStringClaims(claims, ['iss', 'sub', 'nonce', 'at_hash']);

    var _checkStringClaims42 = _slicedToArray(_checkStringClaims4, 1);

    var iss = _checkStringClaims42[0];

    checkStringArrayClaims(claims, ['amr']);
    check_aud_azp(claims, client_id);

    if (iss !== issuer) {
      throw new Error('token iss \'' + iss + '\' does not match \'' + issuer + '\'');
    }

    return claims;
  }

  return {
    setters: [function (_) {
      _slicedToArray = _['default'];
    }, function (_2) {
      _getIterator = _2['default'];
    }],
    execute: function () {
      /*
      
       ## ID Token Validation:
       iss claim must match
       aud claim: must validated that aud claim contains ist client_id value (aud array of strings)
       See 2.2.1 below for details in particular checking of azp in case there are
       multiple aud.
       exp: required
       iat: required
       nonce: required
       at_hash: required
      
       http://openid.net/specs/openid-connect-implicit-1_0.html#rfc.section.2.2.1
      
       Must validate signature
      
       ## Access token validation: http://openid.net/specs/openid-connect-implicit-1_0.html#rfc.section.2.2.2
      
       Open ID Connect does not say much about the structure of an access token.
       However OAuth2 defined field token_type, expires_in, refresh_token, scope
       in https://tools.ietf.org/html/rfc6749#section-5.1
      
       However 2.2.2 says that clients SHOULD validate the at_hash of the ID_Token
       against the access token. The at hash is checked elsewhere
      
       Now the anvil connect server does issue JWTs as access token, so that this
       client can do more validation. The JWT issued contains the following claims as
       per example:
       "jti": "748ff8eed8c996b6f898",
       "iss": "http://connect.example.com:3000",
       "sub": "c43f3fc8-048a-457a-9cff-0a25d6e4e6f0",
       "aud": "cb4d671a-c02a-4ac6-a2b4-f6d58f4ea783",
       "exp": 1454012671,
       "iat": 1454009071,
       "scope": "openid profile"
       It is also signed.
      
       [Draft: OpenID Connect Implicit Client Implementer's Guide 1.0 - draft 20](http://openid.net/specs/openid-connect-implicit-1_0.html#rfc.section.2.2.1)
       */'use strict';

      _export('checkNumberClaims', checkNumberClaims);

      _export('checkStringClaims', checkStringClaims);

      _export('checkStringArrayClaims', checkStringArrayClaims);

      _export('checkStringOrStringArrayClaims', checkStringOrStringArrayClaims);

      _export('check_aud_azp', check_aud_azp);

      _export('checkAccessClaims', checkAccessClaims);

      _export('checkIdClaims', checkIdClaims);
    }
  };
});
$__System.register('1', ['3', '4', '5', '6', '13', '31', '61', '5b', '5c', '6b'], function (_export) {
  var TinyEmitter, jwks, bows, _Promise, _Object$assign, _Object$keys, _getIterator, cryptors, domApis, checkAccessClaims, checkIdClaims, log, session, Anvil;

  // All init functions below must be called!
  /**
   * TODO: update comment.
   * Init function used for http requests.
   * Function is called with a config object as first parameter with
   * fields:
   *    method
   *    url
   *    crossDomain
   *    headers
   *
   *  It is expected to return a promise.
   */
  function initHttpAccess(http) {
    if (http && typeof http === 'object' && typeof http.request === 'function' && typeof http.getData === 'function') {
      Anvil.apiHttp = http;
    } else {
      throw new Error("Must pass in object with functions in fields: 'request', 'getData'.");
    }
  }

  /**
   *  Init functions for location access.
   */
  function initLocationAccess(loc) {
    if (loc && typeof loc === 'object' && typeof loc.hash === 'function' && typeof loc.path === 'function') {
      Anvil.locAccess = loc;
      return;
    }
    throw new Error("Must pass in object with functions in fields: 'hash', 'path'.");
  }

  /**
   *  Init functions for DOM/window access.
   */
  function initDOMAccess(da) {
    if (da && typeof da === 'object' && typeof da.getWindow === 'function' && typeof da.getDocument === 'function') {
      Anvil.domAccess = da;
      return;
    }
    throw new Error("Must pass in object with functions in fields: 'getWindow', 'getDocument'.");
  }

  /**
   * Extend
   */

  function extend() {
    var target = arguments[0];

    // iterate over arguments, excluding the first arg
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      // iterate through properties, copying to target
      for (var prop in source) {
        if (source[prop] !== undefined) {
          target[prop] = source[prop];
        }
      }
    }

    return target;
  }

  /**
   * Support events, e.g. 'authenticated'
   *
   * The 'authenticated' event is emitted in response to a
   * local storage 'anvil.connect' event when the user is authenticated.
   *
   * This can be leveraged to react to an authentiation performed in
   * other windows or tabs.
   */

  /**
   * Provider configuration
   */
  function configure(options) {
    var params;
    Anvil.issuer = options.issuer;
    jwks.setJWK(options.jwk);

    Anvil.params = params = {};
    params.response_type = options.response_type || 'id_token token';
    params.client_id = options.client_id;
    params.redirect_uri = options.redirect_uri;
    params.scope = ['openid', 'profile'].concat(options.scope).join(' ');
    Anvil.display = options.display || 'page';
  }

  function init(providerOptions, apis) {
    if (providerOptions) {
      Anvil.configure(providerOptions);
    }

    Anvil.initHttpAccess(apis.http);

    var apiLocation = apis.location || domApis.location;
    Anvil.initLocationAccess(apiLocation);

    var dom = apis.dom || domApis.dom;
    Anvil.initDOMAccess(dom);

    // todo: perhaps this should be in its own method
    dom.getWindow().addEventListener('storage', Anvil.updateSession, true);
  }

  /**
   * Do initializations which may require network calls.
   *
   * returns a promise.
   */

  function prepareAuthorization() {
    return jwks.prepareKeys().then(function (val) {
      log.debug('prepareAuthorization() succeeded.', val);
      return val;
    }, function (err) {
      log.warn('prepareAuthorization() failed:', err.stack);
      throw err;
    });
  }

  /**
   * Form Urlencode an object
   */

  function toFormUrlEncoded(obj) {
    var pairs = [];

    _Object$keys(obj).forEach(function (key) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    });

    return pairs.join('&');
  }

  /**
   * Parse Form Urlencoded data
   */

  function parseFormUrlEncoded(str) {
    var obj = {};

    str.split('&').forEach(function (property) {
      var pair = property.split('=');
      var key = decodeURIComponent(pair[0]);
      var val = decodeURIComponent(pair[1]);

      obj[key] = val;
    });

    return obj;
  }

  /**
   * Get URI Fragment
   */

  function getUrlFragment(url) {
    return url.split('#').pop();
  }

  /**
   * Configure the authorize popup window
   * Adapted from dropbox-js for ngDropbox
   */

  function popup(popupWidth, popupHeight) {
    var x0, y0, width, height, popupLeft, popupTop;

    var window = Anvil.domAccess.getWindow();
    var documentElement = Anvil.domAccess.getDocument().documentElement;

    // Metrics for the current browser win.
    x0 = window.screenX || window.screenLeft;
    y0 = window.screenY || window.screenTop;
    width = window.outerWidth || documentElement.clientWidth;
    height = window.outerHeight || documentElement.clientHeight;

    // Computed popup window metrics.
    popupLeft = Math.round(x0) + (width - popupWidth) / 2;
    popupTop = Math.round(y0) + (height - popupHeight) / 2.5;
    if (popupLeft < x0) {
      popupLeft = x0;
    }
    if (popupTop < y0) {
      popupTop = y0;
    }

    return 'width=' + popupWidth + ',height=' + popupHeight + ',' + 'left=' + popupLeft + ',top=' + popupTop + ',' + 'dialog=yes,dependent=yes,scrollbars=yes,location=yes';
  }

  function getCookieSecret() {
    var re = /\banvil\.connect=([^\s;]*)/;
    var dom = Anvil.domAccess.getDocument();
    var cookie = dom.cookie;
    try {
      return decodeURIComponent(cookie.match(re).pop());
    } catch (err) {
      log.debug('getCookieSecret(): failed, cookie=', cookie);
      throw err;
    }
  }

  function setCookieSecret(secret) {
    log.debug('setCookieSecret():', secret);
    var dom = Anvil.domAccess.getDocument();
    var now = new Date();
    var time = now.getTime();
    var exp = time + (Anvil.session.expires_in || 3600) * 1000;
    now.setTime(exp);
    var value = 'anvil.connect=' + encodeURIComponent(secret) + '; expires=' + now.toUTCString();
    dom.cookie = value;

    try {
      var stored = getCookieSecret();
      if (stored !== secret) {
        log.debug('setCookieSecret(): read back cookie value differs', [stored, secret]);
      }
    } catch (err) {
      log.debug('setCookieSecret(): failed to read back cookie');
    }
  }

  function clearCookieSecret() {
    log.debug('clearCookieSecret()');
    var dom = Anvil.domAccess.getDocument();
    dom.cookie = 'anvil.connect=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    try {
      var stored = getCookieSecret();
      log.debug('clearCookieSecret(): secret is now:', stored);
    } catch (err) {
      log.debug('clearCookieSecret(): secret could no longer be read back');
    }
  }

  /**
   * Session object
   */

  /**
   * Serialize session
   */

  function serialize() {
    log.debug('serialize(): entering');
    var plaintext = JSON.stringify(Anvil.session);
    return cryptors.encryptor.encrypt(plaintext).then(function (_ref) {
      var secret = _ref.secret;
      var encrypted = _ref.encrypted;

      setCookieSecret(secret);
      log.debug('serialize() stored secret in COOKIE anvil.connect');
      localStorage['anvil.connect.session.state'] = Anvil.sessionState;
      log.debug('serialize() stored sessionState in local storage anvil.connect.session.state', Anvil.sessionState);
      localStorage['anvil.connect'] = encrypted;
      log.debug('serialize() stored encrypted session data in local storage anvil.connect');
    })['catch'](function (err) {
      log.debug('serialize failed with error:', err, err.stack);
      throw err;
    });
  }

  /**
   * Deserialize session
   */
  function deserialize() {
    var p = new _Promise(function (resolve) {
      // Use the cookie value to decrypt the session in localStorage
      // Exceptions may occur if data is unexpected or there is no
      // session data yet.
      // An exception will reject the promise
      var secret = getCookieSecret();
      var encrypted = localStorage['anvil.connect'];
      var parms = _Object$assign({}, {
        secret: secret,
        encrypted: encrypted });
      resolve(parms);
    });

    return p.then(function (parms) {
      return cryptors.encryptor.decrypt(parms).then(function (plaintext) {
        // exceptions when parsing json causes the promise to be rejected
        return JSON.parse(plaintext);
      });
    }).then(function (parsed) {
      log.debug('Deserialized session data', parsed.userInfo);
      Anvil.session = session = parsed;
      Anvil.sessionState = localStorage['anvil.connect.session.state'];
      return session;
    }).then(function (session) {
      Anvil.emit('authenticated', session); // todo: may need to emitted on failure also
      return session;
    })['catch'](function (e) {
      log.debug('Cannot deserialize session data', e);
      Anvil.session = session = {};
      Anvil.sessionState = localStorage['anvil.connect.session.state'];
      Anvil.emit('not-authenticated', session);
      return session;
    });
  }

  /**
   * Reset
   */

  function reset() {
    log.debug('reset() called: clearing session');
    Anvil.session = session = {};
    clearCookieSecret();
    delete localStorage['anvil.connect'];
  }

  /**
   * Quick and dirty uri method with nonce (returns promise)
   */

  function uri(endpoint, options) {
    return Anvil.promise.nonce().then(function (nonce) {
      return Anvil.issuer + '/' + (endpoint || 'authorize') + '?' + toFormUrlEncoded(extend({}, Anvil.params, options, {
        nonce: nonce
      }));
    });
  }

  /**
   * Create or verify a nonce
   */
  function nonce(nonce) {
    if (nonce) {
      var lnonce = localStorage['nonce'];
      if (!lnonce) {
        return _Promise.resolve(false);
      }
      return Anvil.promise.sha256url(localStorage['nonce']).then(function (val) {
        return val === nonce;
      });
    } else {
      localStorage['nonce'] = cryptors.encryptor.generateNonce();
      return Anvil.promise.sha256url(localStorage['nonce']);
    }
  }

  /**
   * Base64url encode a SHA256 hash of the input string
   *
   * @param str
   * @returns {promise}
   */
  function sha256url(str) {
    return cryptors.encryptor.sha256url(str);
  }

  /**
   * Headers
   */

  function headers(headers) {
    if (Anvil.session.access_token) {
      return extend(headers || {}, {
        'Authorization': 'Bearer ' + Anvil.session.access_token
      });
    } else {
      return headers;
    }
  }

  /**
   * Request
   */

  function request(config) {
    config.headers = Anvil.headers(config.headers);
    config.crossDomain = true;
    return _Promise.resolve(Anvil.apiHttp.request(config).then(function (val) {
      log.debug('request() succeeded.', config);
      return val;
    }, function (err) {
      log.warn('request() failed:', config, err.stack);
      throw err;
    }));
  }

  /**
   * UserInfo
   */

  function userInfo() {
    return Anvil.promise.request({
      method: 'GET',
      url: Anvil.issuer + '/userinfo',
      crossDomain: true
    });
  }

  function find(arr, x) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var e = _step.value;

        if (e === x) {
          return e;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return undefined;
  }

  function validate_jwt(type, response) {
    var response_types = Anvil.params.response_type.trim().split(' ');
    var response_type = find(response_types, type);
    if (!response_type) {
      // token of this type is not required, so carry on.
      return _Promise.resolve();
    }
    var tokenType = {
      'token': 'access',
      'id_token': 'id'
    };
    var token_type = tokenType[type] + '_token';
    var token = response[token_type];
    if (!token) {
      return _Promise.reject(new Error('Expected ' + token_type + ' not in response'));
    }
    var jwtvalidator = cryptors.jwtvalidator;
    log.debug('validate_jwt(): validateAndParseToken ' + token_type + ': ' + token);
    var p = jwtvalidator.validateAndParseToken(jwks.jwk, token);
    return p.then(function (claims) {
      var f = type === 'token' ? checkAccessClaims : checkIdClaims;
      return f(claims, {
        issuer: Anvil.issuer,
        client_id: Anvil.params.client_id });
    }).then(function (claims) {
      response[tokenType[type] + '_claims'] = claims;
    })['catch'](function (err) {
      var msg = 'validate_jwt(): ' + token_type + ' not validated: ' + err.message;
      log.warn(msg, err.stack);
      throw new Error(msg);
    });
  }

  function verifyNonce(response) {
    if (response.id_claims) {
      log.debug('validateNonce(): checking id_claims.nonce');
      return Anvil.promise.nonce(response.id_claims.nonce).then(function (nonceIsValid) {
        log.debug('callback(): nonceIsValid=', nonceIsValid);
        if (!nonceIsValid) {
          throw new Error('Invalid nonce.');
        }
      });
    }
    return _Promise.resolve();
  }

  function verifyAtHash(response) {
    if (['id_token token'].indexOf(Anvil.params.response_type) !== -1) {
      log.debug('verifyAtHash(): checking at hash');
      return cryptors.encryptor.sha256sum(response.access_token).then(function (atHash) {
        atHash = atHash.slice(0, atHash.length / 2);
        if (response.id_claims && atHash !== response.id_claims.at_hash) {
          throw new Error('Invalid at hash');
        }
      });
    }
    return _Promise.resolve();
  }

  /**
   * Callback
   */

  function callback(response) {
    log.debug('callback(): entering');
    if (response.error) {
      log.debug('callback(): with error=', response.error);
      // clear localStorage/cookie/etc
      Anvil.sessionState = response.session_state;
      localStorage['anvil.connect.session.state'] = Anvil.sessionState;
      Anvil.reset();
      return _Promise.reject(response.error);
    } else {
      var _ret = (function () {
        log.debug('callback(): on response=', response);
        // NEED TO REVIEW THIS CODE FOR SANITY
        // Check the conditions in which some of these verifications
        // are skipped.
        var apiHttp = Anvil.apiHttp;

        var jwtvalidator = cryptors.jwtvalidator;

        // Ensure:
        // missing tokens are not OK!
        // possible responses are enumerated in http://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3
        // Authorization code flow seems questionable in browsers!

        // implicit:
        // a. response_type='id_token token' both MUST be returned.
        // b. response_type='id_token' no access token so no need and access token to get user info

        return {
          v: _Promise.resolve()
          // 0. ensure there is a jwk unless jwtvalidator does not need it.
          .then(function () {
            if (!jwtvalidator.noJWKrequired && !jwks.jwk) {
              throw new Error('You must call and fulfill Anvil.prepareAuthorization() before attempting to validate tokens');
            }
            log.debug('jwk=', jwks.jwk);
          })
          // 1. validate/parse access token
          .then(function () {
            // sets: response.access_claims if token is required and validation succeeds
            // otherwise is rejected.
            return validate_jwt('token', response);
          })
          // 2. validate/parse id token
          .then(function () {
            return validate_jwt('id_token', response); // sets response.id_claims if required.
          })
          // 3. verify nonce
          .then(function () {
            return verifyNonce(response);
          })
          // 4. Verify at_hash
          .then(function () {
            return verifyAtHash(response);
          })
          // If 1-4 check out establish session:
          .then(function () {
            Anvil.session = response;
            log.debug('callback(): session=', Anvil.session);
            Anvil.sessionState = response.session_state;
            log.debug('callback(): session state=', Anvil.sessionState);
          })
          // and retrieve user info
          .then(function () {
            if (response.access_token) {
              log.debug('callback(): retrieving user info');
              return Anvil.promise.userInfo().then(function (userInfoResponse) {
                // [Successful UserInfo Response](http://openid.net/specs/openid-connect-implicit-1_0.html#rfc.section.2.3.2)
                var userInfo = apiHttp.getData(userInfoResponse);
                // todo: If we get a bad userInfo we will not fail the session or should we?
                // Spec: 1. The sub claim MUST be returned
                // Spec: 2. The sub claim MUST be verified to exactly match the subClaim of the ID token.
                // Spec: 3. The Client MUST verify that the OP that responded was the intended OP through a TLS server certificate chec
                // Example response:
                // Object {sub: "c43f3fc8-048a-457a-9cff-0a25d6e4e6f0", family_name: "W", given_name: "P", updated_at: 1446218445857}
                // Now #3 should be done by any browser!
                // #1 and 2 is to be done here:
                if (!userInfo.sub) {
                  log.error('Returned userInfo malformed');
                  return;
                } else if (response.id_claims && response.id_claims.sub !== userInfo.sub) {
                  log.error('Returned userInfo is about a different user than id token');
                  return;
                } else {
                  log.debug('callback(): setting user info', userInfo);
                  Anvil.session.userInfo = userInfo;
                  return;
                }
              })['catch'](function (e) {
                log.warn('userInfo() retrieval failed with', e.message, e.stack);
              });
            } else {
              _Promise.resolve();
            }
          }).then(function () {
            return Anvil.promise.serialize();
          }).then(function () {
            Anvil.emit('authenticated', Anvil.session);
            return Anvil.session;
          })['catch'](function (e) {
            log.debug('Exception during callback:', e.message, e.stack);
            throw e; // caller can ultimately handle this.
          })
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
  }

  /**
   * Authorize
   */

  function authorize() {
    // handle the auth response
    if (Anvil.locAccess.hash()) {
      console.log('authorize() with hash:', Anvil.locAccess.hash());
      return Anvil.promise.callback(parseFormUrlEncoded(Anvil.locAccess.hash()));

      // initiate the auth flow
    } else {
        Anvil.destination(Anvil.locAccess.path());

        var window = Anvil.domAccess.getWindow();
        if (Anvil.display === 'popup') {
          var popup;

          var _ret2 = (function () {

            var authMessageReceived = new _Promise(function (resolve, reject) {
              var listener = function listener(event) {
                if (event.data !== '__ready__') {
                  log.debug('authorize() popup: received message event data __ready__');
                  var fragment = getUrlFragment(event.data);
                  var response = parseFormUrlEncoded(fragment);
                  log.debug('authorize() popup: checking callback with received response:', response);
                  Anvil.promise.callback(response).then(function (result) {
                    log.debug('authorize() popup: callback promise resolved:', result);
                    resolve(result);
                  }, function (fault) {
                    log.debug('authorize() popup: callback promise rejected:', fault);
                    reject(fault);
                  });
                  window.removeEventListener('message', listener, false);
                  if (popup) {
                    log.debug('authorize() popup: message event closing popup');
                    popup.close();
                  }
                }
              };

              log.debug('authorize() popup: setting up message listener');
              window.addEventListener('message', listener, false);
            });
            // Some authentication methods will NOT cause a redirect ever!
            //
            // The passwordless login method sends the user a link in an email.
            // When the user presses this link then a new window openes with the
            // configured callback.
            // In Anvil case the callback page has no opener and is expected to
            // call Anvil.callback itself.
            // The listener below will react to the case where there is a
            // successful login and then close the popup.
            var authenticated = new _Promise(function (resolve, reject) {
              log.debug('authorize() popup: setting up authenticated listener');
              Anvil.once('authenticated', function (session) {
                log.debug('authorize() popup: authenticated event received');
                resolve(session);
                if (popup) {
                  log.debug('authorize() popup: authenticated event closing popup');
                  popup.close();
                }
              });
            });
            return {
              v: Anvil.promise.uri().then(function (uri) {
                log.debug('authorize() popup: opening popup at:', uri);
                popup = window.open(uri, 'anvil', Anvil.popup(700, 500));
                return _Promise.race([authMessageReceived, authenticated]);
              })
            };
          })();

          if (typeof _ret2 === 'object') return _ret2.v;
        } else {
          // navigate the current window to the provider
          return Anvil.promise.uri().then(function (uri) {
            window.location = uri;
          });
        }
      }
  }

  /**
   * Signout
   */

  function signout(path) {
    var win = Anvil.domAccess.getWindow();
    // parse the window location
    var url = Anvil.domAccess.getDocument().createElement('a');
    url.href = win.location.href;
    url.pathname = path || '/';

    // set the destination
    Anvil.destination(path || false);

    // url to sign out of the auth server
    var signoutLocation = Anvil.issuer + '/signout?post_logout_redirect_uri=' + url.href + '&id_token_hint=' + Anvil.session.id_token;

    // reset the session
    Anvil.reset();

    // "redirect"
    win.location = signoutLocation;
  }

  /**
   * Destination
   *
   * Getter/setter location.pathname
   *
   *    // Set the destination
   *    Anvil.destination(location.pathname)
   *
   *    // Get the destination
   *    Anvil.destination()
   *
   *    // Clear the destination
   *    Anvil.destination(false)
   */

  function destination(path) {
    if (path === false) {
      path = localStorage['anvil.connect.destination'];
      log.debug('destination(): deleting and returning:', path);
      delete localStorage['anvil.connect.destination'];
      return path;
    } else if (path) {
      log.debug('destination(): setting:', path);
      localStorage['anvil.connect.destination'] = path;
    } else {
      var dest = localStorage['anvil.connect.destination'];
      log.debug('destination(): retrieving:', dest);
      return dest;
    }
  }

  /**
   * Check Session
   *
   * This is for use by the RP iframe, as specified by
   * OpenID Connect Session Management 1.0 - draft 23
   *
   * http://openid.net/specs/openid-connect-session-1_0.html
   */

  function checkSession(id) {
    // log.debug('checkSession()', id)
    var targetOrigin = Anvil.issuer;
    var message = Anvil.params.client_id + ' ' + Anvil.sessionState;
    var w = window.parent.document.getElementById(id).contentWindow;
    // log.debug(`checkSession(): postMessage (${message}, ${targetOrigin} to win of element ${id})`, w)
    w.postMessage(message, targetOrigin);
  }

  /**
   * Update Session
   */

  function updateSession(event) {
    if (event.key === 'anvil.connect') {
      log.debug('updateSession(): anvil.connect: calling deserialize');
      Anvil.promise.deserialize();
      // happens now in deserialize
      // Anvil.emit('authenticated', Anvil.session)
    }
  }

  /**
   * Is Authenticated
   */

  function isAuthenticated() {
    return Anvil.session.id_token;
  }

  return {
    setters: [function (_6) {
      TinyEmitter = _6['default'];
    }, function (_7) {
      jwks = _7;
    }, function (_5) {
      bows = _5['default'];
    }, function (_2) {
      _Promise = _2['default'];
    }, function (_3) {
      _Object$assign = _3['default'];
    }, function (_) {
      _Object$keys = _['default'];
    }, function (_4) {
      _getIterator = _4['default'];
    }, function (_b) {
      cryptors = _b['default'];
    }, function (_c) {
      domApis = _c['default'];
    }, function (_b2) {
      checkAccessClaims = _b2.checkAccessClaims;
      checkIdClaims = _b2.checkIdClaims;
    }],
    execute: function () {
      /* eslint-env es6 */
      /* global localStorage */

      'use strict';

      log = bows('Anvil');
      session = {};
      Anvil = {
        promise: {}
      };
      Anvil.initHttpAccess = initHttpAccess;Anvil.initLocationAccess = initLocationAccess;Anvil.initDOMAccess = initDOMAccess;extend(Anvil, TinyEmitter.prototype);Anvil.configure = configure;Anvil.init = init;

      Anvil.setNoWebCryptoFallbacks = cryptors.setNoWebCryptoFallbacks;Anvil.promise.prepareAuthorization = prepareAuthorization;Anvil.toFormUrlEncoded = toFormUrlEncoded;Anvil.parseFormUrlEncoded = parseFormUrlEncoded;Anvil.getUrlFragment = getUrlFragment;Anvil.popup = popup;Anvil.session = session;Anvil.promise.serialize = serialize;Anvil.promise.deserialize = deserialize;Anvil.reset = reset;Anvil.promise.uri = uri;Anvil.promise.nonce = nonce;Anvil.promise.sha256url = sha256url;Anvil.headers = headers;Anvil.promise.request = request;Anvil.promise.userInfo = userInfo;Anvil.promise.callback = callback;Anvil.promise.authorize = authorize;Anvil.signout = signout;Anvil.destination = destination;Anvil.checkSession = checkSession;Anvil.updateSession = updateSession;Anvil.isAuthenticated = isAuthenticated;

      _export('default', Anvil);
    }
  };
});

// open the signin page in a popup window
// In a typical case the popup window will be redirected
// to the configured callback page.

// If this callback page is rendered in the popup it
// should send the message:
// `opener.postMessage(location.href, opener.location.origin)`.
// This will then cause a login in this window (not the popup) as
// implemented in the 'message' listener below.
})
(function(factory) {
  Anvil = factory();
});
//# sourceMappingURL=anvil-connect.src.js.map