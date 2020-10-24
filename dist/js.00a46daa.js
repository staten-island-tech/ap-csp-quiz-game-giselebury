// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/DOM.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  quiz: document.querySelector(".quiz"),
  start: document.querySelector(".quiz-start"),
  score: document.querySelector(".quiz-score")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quiz = void 0;
var quiz = [{
  question: "Which player has the most Super Bowl win?",
  //img: "/src/media/tom-brady.png",
  answers: ["Tom Brady", "Eli Manning", "Peyton Manning", "Joe Namath"],
  correct: 0,
  number: 1
}, {
  question: "Which of the following team is currently in the World Series?",
  //img: "/src/media/messi.jpg",
  answers: ["New York Yankees", "Los Angeles Angels", "Tampa Bay Rays", "New York Mets"],
  correct: 2,
  number: 2
}, {
  question: "When is the last time the US Women National Team won the World Cup?",
  //img:"/src/media/stephen-curry.jpg",
  answers: ["2018", "2019", "2015", "2016"],
  correct: 1,
  number: 3
}, {
  question: "Which team won the NBA Finals this year?",
  //img: "/src/media/serena-williams.jpg",
  answers: ["Los Angeles Clippers", "Brooklyn Nets", "Los Angeles Lakers", "Miami Heat"],
  correct: 2,
  number: 4
}, {
  question: "Who won the US Open this year?",
  //img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSimone_Biles&psig=AOvVaw3molkv_HC8ZRPabLPYvVt9&ust=1603426836352000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjTiMqsx-wCFQAAAAAdAAAAABAD",
  answers: ["Venus Williams", "Serena Williams", "Victoria Azarenka", "Naomi Osaka"],
  correct: 3,
  number: 5
}];
exports.quiz = quiz;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _DOM = require("./DOM");

var _questions = require("./questions");

//let numberCorrect = 0;
var init = function init() {
  var started = false;

  function loadHtml() {
    _DOM.DOMSelectors.start.innerHTML = "";

    _questions.quiz.forEach(function (item) {
      return _DOM.DOMSelectors.start.insertAdjacentHTML("beforeend", "<div class = \"quiz\" id = ".concat(item.number, ">\n        <li class = \"quiz-question\">").concat(item.question, "</li>\n        <button class=\"answer-btn\" id = \"answer-1\">").concat(item.answers[0], "</button>\n        <button class=\"answer-btn\" id = \"answer-2\">").concat(item.answers[1], "</button>\n        <button class=\"answer-btn\" id = \"answer-3\">").concat(item.answers[2], "</button>            \n        <button class=\"answer-btn\" id = \"answer-4\">").concat(item.answers[3], "</button>\n        </div>\n        "));
    });

    document.querySelectorAll(".answer-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var quizContainer = e.target.parentElement;
        var btn = e.target;
        checkAnswer(quizContainer, btn);
      });
    });

    _DOM.DOMSelectors.start.removeEventListener("click", loadHtml);
  }

  ;

  _DOM.DOMSelectors.start.addEventListener("click", loadHtml);
};

var correctAnswer = function correctAnswer(id) {
  var answer = 0;

  switch (id) {
    case "answer-1":
      answer = 0;
      break;

    case "answer-2":
      answer = 1;
      break;

    case "answer-3":
      answer = 2;
      break;

    case "answer-4":
      answer = 3;
      break;
  }

  return answer;
};

var numberCorrect = 0;

function checkAnswer(quizContainer, btn) {
  console.log(quizContainer);
  var answer = correctAnswer(btn.id);
  var questionindex = quizContainer.id - 1;

  if (answer === _questions.quiz[questionindex].correct) {
    console.log('yes');
    btn.classList.add("btn-correct"); // function numberCorrect() {
    //     var numberCorrect = document.getElementById('quiz-score').innerHTML;
    //     numberCorrect++;
    //     document.getElementById('quiz-score').innerHTML = numberCorrect;
    // }

    numberCorrect = numberCorrect + 1; //numberCorrect++
    //score.text ="Score: " + checkAnswer.numberCorrect;
    //score.update();
  } else {
    console.log('no');
    btn.classList.add("btn-incorrect");
  }

  console.log(numberCorrect);
  _DOM.DOMSelectors.score.innerHTML = "";

  _DOM.DOMSelectors.score.insertAdjacentHTML("beforeend", "<p>".concat(numberCorrect, "/5</p>"));
}

init();
},{"./DOM":"js/DOM.js","./questions":"js/questions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50077" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map