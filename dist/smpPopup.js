(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SmpPopup", [], factory);
	else if(typeof exports === 'object')
		exports["SmpPopup"] = factory();
	else
		root["SmpPopup"] = factory();
})(typeof self === 'undefined' ? this : self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const/smpSelection.const.ts":
/*!*****************************************!*\
  !*** ./src/const/smpSelection.const.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ID_SUFFIX = void 0;
exports.ID_SUFFIX = '_popup_init';

/***/ }),

/***/ "./src/smpPopupInit.ts":
/*!*****************************!*\
  !*** ./src/smpPopupInit.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SmpPopupInit = void 0;
var smpSelection_const_1 = __webpack_require__(/*! ./const/smpSelection.const */ "./src/const/smpSelection.const.ts");
var SmpPopupInit = /*#__PURE__*/function () {
  function SmpPopupInit(props) {
    var _this = this;
    _classCallCheck(this, SmpPopupInit);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "$this", void 0);
    _defineProperty(this, "options", {});
    _defineProperty(this, "$wrapper", void 0);
    _defineProperty(this, "$bodyHTML", void 0);
    _defineProperty(this, "classPopup", void 0);
    _defineProperty(this, "closePopupButton", void 0);
    _defineProperty(this, "wrapperAddClass", void 0);
    _defineProperty(this, "bodyHtmlAddClass", void 0);
    _defineProperty(this, "closeAddClass", void 0);
    /** вызывается после каждого закрытия окна * */
    _defineProperty(this, "callbackCloseAlways", null);
    _defineProperty(this, "localCallbackCloseBefore", void 0);
    _defineProperty(this, "returnBoolClose", false);
    _defineProperty(this, "isPopupOpen", false);
    _defineProperty(this, "historyId", void 0);
    this.id = props.id;
    this.$this = props.$this;
    this.wrapperAddClass = props.wrapperAddClass;
    this.bodyHtmlAddClass = props.bodyHtmlAddClass;
    this.closeAddClass = props.closeAddClass;
    this.options = props.options || {};
    this.classPopup = props.classPopup;
    this.localCallbackCloseBefore = props.localCallbackCloseBefore;
    this.initHTML();
    this.historyId = "smpPopup_".concat(this.id);
    var open = function open() {
      if (_this.$wrapper) {
        _this.$wrapper.classList.add('open');
        _this.$wrapper.tabIndex = 0;
        document.body.classList.add('open_popup');
        _this.isPopupOpen = true;
        window.history.pushState(_defineProperty({}, _this.historyId, true), '');
      }
    };
    // open();
    setTimeout(open, 10);
  }
  return _createClass(SmpPopupInit, [{
    key: "hide",
    value: function hide() {
      var _window$history$state,
        _this2 = this;
      var isDelete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.$wrapper) {
        return;
      }
      this.$wrapper.classList.remove('open');
      document.body.classList.remove('open_popup');
      this.localCallbackCloseBefore(this.id, this.returnBoolClose);
      if ((_window$history$state = window.history.state) !== null && _window$history$state !== void 0 && _window$history$state[this.historyId] && !isHistory) {
        window.history.back();
      }
      this.isPopupOpen = false;
      var classContainer = ".".concat(this.classPopup, "__content"); /* b_popup__content */
      var $popupContent = this.$this.querySelector(classContainer);
      if (isDelete || $popupContent && $popupContent.dataset.removeBeforeClose && $popupContent.dataset.removeBeforeClose !== 'false') {
        // console.log('removeBeforeClose', $popupContent.dataset.removeBeforeClose);
        setTimeout(function () {
          var _this2$$wrapper;
          (_this2$$wrapper = _this2.$wrapper) === null || _this2$$wrapper === void 0 || (_this2$$wrapper = _this2$$wrapper.parentNode) === null || _this2$$wrapper === void 0 || _this2$$wrapper.removeChild(_this2.$wrapper);
        }, 300);
      }
    }
  }, {
    key: "initHTML",
    value: function initHTML() {
      var _this3 = this;
      var oldInitPopup = document.getElementById(this.id + smpSelection_const_1.ID_SUFFIX);
      if (oldInitPopup) {
        this.$wrapper = oldInitPopup;
        this.$wrapper.dataset.firstInit = 'false';
        /** если окно уже было добавлено, переносим в конец body (если это второе окно, для z-index) * */
        document.body.appendChild(this.$wrapper);
        setTimeout(function () {
          var _this3$$wrapper;
          (_this3$$wrapper = _this3.$wrapper) === null || _this3$$wrapper === void 0 || _this3$$wrapper.classList.add('open');
          document.body.classList.add('open_popup');
        }, 10);
      } else {
        this.$wrapper = document.createElement('div');
        this.$wrapper.id = this.id + smpSelection_const_1.ID_SUFFIX;
        this.$wrapper.className = this.classPopup; /* b_popup */
        if (this.wrapperAddClass) {
          this.$wrapper.classList.add(this.wrapperAddClass);
        }
        this.$wrapper.dataset.firstInit = 'true';
        this.$wrapper.setAttribute('aria-modal', 'true');
        this.$wrapper.setAttribute('role', 'true');
        var overlay = document.createElement('div');
        overlay.className = "".concat(this.classPopup, "__overlay"); /* b_popup__overlay */
        overlay.dataset.close = 'true';
        var currentWrapper = document.createElement('div');
        currentWrapper.className = "".concat(this.classPopup, "__wrapper"); /* b_popup__wrapper */
        if (this.bodyHtmlAddClass) {
          currentWrapper.classList.add(this.bodyHtmlAddClass);
        }
        currentWrapper.dataset.close = 'true';
        this.closePopupButton = document.createElement('button');
        this.closePopupButton.type = 'button';
        var closePopupButton = "".concat(this.classPopup, "__close");
        if (this.closeAddClass) {
          closePopupButton += " ".concat(this.closeAddClass);
        }
        this.closePopupButton.className = closePopupButton; /* b_popup__close */
        this.closePopupButton.setAttribute('aria-label', 'Close window');
        this.closePopupButton.innerText = 'Close window';
        this.closePopupButton.dataset.close = 'true';
        this.closePopupButton.dataset.tabIndex = '0';
        this.closePopupButton.dataset.focusClose = 'true';
        this.$bodyHTML = document.createElement('div');
        this.$bodyHTML.className = "".concat(this.classPopup, "__body"); /* b_popup__body */
        currentWrapper.append(this.$bodyHTML);
        var lastActive = document.createElement('div');
        lastActive.tabIndex = 0;
        lastActive.dataset.lastIndexActive = '1';
        currentWrapper.append(lastActive);
        this.$bodyHTML.append(this.closePopupButton);
        var isClose = false;
        this.$wrapper.addEventListener('mousedown', function (e) {
          isClose = false;
          var $target = e.target;
          if ($target.dataset.close && e.button === 0) {
            /** отлов клик по скроллу * */
            if ($target === currentWrapper) {
              var clickOutScroll = $target.clientWidth > e.clientX;
              if (clickOutScroll) {
                isClose = true;
              }
            } else {
              isClose = true;
            }
          }
        });
        this.$wrapper.addEventListener('mouseup', function (e) {
          var $target = e.target;
          if ($target.dataset.close && e.button === 0 && isClose) {
            /** отлов клик по скроллу * */
            if ($target === currentWrapper) {
              var clickOutScroll = $target.clientWidth > e.clientX;
              if (clickOutScroll) {
                e.preventDefault();
                _this3.returnBoolClose = !!$target.dataset.returnTrue;
                _this3.hide(false);
              }
            } else {
              _this3.returnBoolClose = !!$target.dataset.returnTrue;
              e.preventDefault();
              _this3.hide(false);
            }
          }
          isClose = false;
        });
        this.$wrapper.addEventListener('keyup', function (e) {
          var $target = e.target;
          if (e.key === 'Enter' && $target.dataset.focusClose) {
            _this3.returnBoolClose = !!$target.dataset.returnTrue;
            e.preventDefault();
            _this3.hide(false);
          }
          if (e.key === 'Tab' && $target.dataset.lastIndexActive) {
            var _this3$closePopupButt;
            (_this3$closePopupButt = _this3.closePopupButton) === null || _this3$closePopupButt === void 0 || _this3$closePopupButt.focus();
          }
        });
        this.$wrapper.addEventListener('keydown', function (e) {
          var $target = e.target;
          if (e.key === 'Tab' && $target.dataset.lastIndexActive) {
            var _this3$closePopupButt2;
            (_this3$closePopupButt2 = _this3.closePopupButton) === null || _this3$closePopupButt2 === void 0 || _this3$closePopupButt2.focus();
          }
        });
        this.$wrapper.append(overlay);
        this.$wrapper.append(currentWrapper);
        document.body.append(this.$wrapper);
        this.$bodyHTML.append(this.$this);
        if (this.options.wrapperAddClass) {
          this.$wrapper.classList.add(this.options.wrapperAddClass);
        }
        if (this.options.bodyAddClass) {
          this.$bodyHTML.classList.add(this.options.bodyAddClass);
        }
      }
      if (this.options.restart === true) {
        var classContainer = this.$wrapper.querySelector(".".concat(this.classPopup, "__content"));
        if (classContainer) {
          classContainer.dataset.removeBeforeClose = 'true';
        }
      }
    }
  }]);
}();
exports.SmpPopupInit = SmpPopupInit;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utils/smpSelection.utils.ts":
/*!*****************************************!*\
  !*** ./src/utils/smpSelection.utils.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isIncludeDomElement = exports.getIdFromHash = exports.getHref = void 0;
var getHref = function getHref(elemNode) {
  if (!elemNode) {
    return null;
  }
  return elemNode.dataset && elemNode.dataset.href ? elemNode.dataset.href : elemNode.getAttribute('href');
};
exports.getHref = getHref;
var getIdFromHash = function getIdFromHash(hash) {
  if (hash[0] === '#') {
    return hash.slice(1);
  } else {
    return hash;
  }
};
exports.getIdFromHash = getIdFromHash;
var isIncludeDomElement = function isIncludeDomElement(el, listName) {
  return listName.toLowerCase().split(',').includes(el.nodeName.toLowerCase());
};
exports.isIncludeDomElement = isIncludeDomElement;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/smpPopup.ts ***!
  \*************************/


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var smpPopupInit_1 = __webpack_require__(/*! ./smpPopupInit */ "./src/smpPopupInit.ts");
var smpSelection_utils_1 = __webpack_require__(/*! ./utils/smpSelection.utils */ "./src/utils/smpSelection.utils.ts");
var smpSelection_const_1 = __webpack_require__(/*! ./const/smpSelection.const */ "./src/const/smpSelection.const.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
var SmpPopup = /*#__PURE__*/function () {
  function SmpPopup(props) {
    var _this = this;
    _classCallCheck(this, SmpPopup);
    _defineProperty(this, "itemsPopup", []);
    _defineProperty(this, "isAutoFocusInput", void 0);
    /** нужно ли ставить фокус на интуп */
    _defineProperty(this, "classPopup", void 0);
    /** Основной класс для popup - по ум. b_popup */
    _defineProperty(this, "wrapperAddClass", void 0);
    /** Доп. класс для b_popup  */
    _defineProperty(this, "bodyHtmlAddClass", void 0);
    /**  Доп. класс для b_popup__body */
    _defineProperty(this, "closeAddClass", void 0);
    /**  Доп. класс для b_popup__close * */
    /** вызывается после первого окна * */
    _defineProperty(this, "callbackOpenAlways", null);
    /** вызывается после каждого вызова окна * */
    _defineProperty(this, "callbackOpenOnce", null);
    /** вызывается после каждого закрытия окна * */
    _defineProperty(this, "callbackCloseAlways", null);
    _defineProperty(this, "DOM_ELEMENT_POPUP", void 0);
    _defineProperty(this, "selectorLinks", void 0);
    _defineProperty(this, "keyEscHide", function (e) {
      if (e.code === 'Escape') {
        if ((0, smpSelection_utils_1.isIncludeDomElement)(e.target, 'input,label,textarea,video,audio,select')) {
          return;
        }
        var lastOpenPopup = _this.itemsPopup[_this.itemsPopup.length - 1];
        if (lastOpenPopup) {
          lastOpenPopup.hide();
        } else {
          document.removeEventListener('keyup', _this.keyEscHide);
        }
      }
    });
    if (!props) props = {};
    this.classPopup = props.classPopup ? props.classPopup : 'b_popup';
    this.wrapperAddClass = props.wrapperAddClass ? props.wrapperAddClass : undefined;
    this.bodyHtmlAddClass = props.bodyHtmlAddClass ? props.bodyHtmlAddClass : undefined;
    this.closeAddClass = props.closeAddClass ? props.closeAddClass : undefined;
    this.callbackOpenOnce = props.callbackOpenOnce ? props.callbackOpenOnce : null;
    this.callbackOpenAlways = props.callbackOpenAlways ? props.callbackOpenAlways : null;
    this.callbackCloseAlways = props.callbackCloseAlways ? props.callbackCloseAlways : null;
    this.isAutoFocusInput = props.isAutoFocusInput ? props.isAutoFocusInput : true;
    if (props.selectorLinks) {
      if (typeof props.selectorLinks === 'string') {
        this.selectorLinks = document.querySelectorAll(props.selectorLinks);
      } else {
        this.selectorLinks = props.selectorLinks;
      }
    } else {
      this.selectorLinks = document.querySelectorAll('[data-open-popup]');
    }
    this.init();
  }
  return _createClass(SmpPopup, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      if (this.selectorLinks) {
        if (this.selectorLinks instanceof HTMLElement) {
          this.selectorLinks.addEventListener('click', function (e) {
            return _this2.handlerClick(e, _this2.selectorLinks);
          });
        } else if (this.selectorLinks.length) {
          this.selectorLinks.forEach(function ($item) {
            $item.addEventListener('click', function (e) {
              return _this2.handlerClick(e, $item);
            });
          });
        }
      }
      window.addEventListener('popstate', function () {
        var lastOpenPopup = _this2.itemsPopup[_this2.itemsPopup.length - 1];
        if (lastOpenPopup && lastOpenPopup.isPopupOpen) {
          lastOpenPopup.isPopupOpen = false;
          lastOpenPopup.hide(false, true);
        }
      });
    }
  }, {
    key: "handlerClick",
    value: function handlerClick(e, elementNode) {
      e.preventDefault();
      var href = (0, smpSelection_utils_1.getHref)(elementNode);
      if (!href) {
        return;
      }
      var hash = (0, smpSelection_utils_1.getIdFromHash)(href);
      var options = {};
      if (elementNode.dataset.addClassBody) {
        options.bodyAddClass = elementNode.dataset.addClassBody;
      }
      this.show(hash, options);
    }
  }, {
    key: "show",
    value: function show(id) {
      var _this3 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var $this = document.getElementById(id);
      if ($this) {
        var currentInitPopup = new smpPopupInit_1.SmpPopupInit({
          $this: $this,
          id: id,
          classPopup: this.classPopup,
          bodyHtmlAddClass: this.bodyHtmlAddClass,
          wrapperAddClass: this.wrapperAddClass,
          closeAddClass: this.closeAddClass,
          options: options,
          localCallbackCloseBefore: this.hideBefore.bind(this)
        });
        this.DOM_ELEMENT_POPUP = $this;
        this.itemsPopup.push(currentInitPopup);
        setTimeout(function () {
          document.addEventListener('keyup', _this3.keyEscHide);
        }, 10);
        /** вызываем автофокус, если нужно  * */
        this.inputAutoFocus();
        var oldInitPopup = document.getElementById(id + smpSelection_const_1.ID_SUFFIX);
        if (oldInitPopup && oldInitPopup.dataset.firstInit === 'true') {
          /** вызывается после первого вызова окна * */
          if (this.callbackOpenOnce) {
            this.callbackOpenOnce($this);
          }
        }
        /** вызывается после каждого вызова окна * */
        if (this.callbackOpenAlways) {
          this.callbackOpenAlways($this);
        }
        return $this;
      }
      return null;
    }
  }, {
    key: "hideBefore",
    value: function hideBefore(id) {
      var returnBoolClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var currentPopup = this.itemsPopup.filter(function (item) {
        return item.id === id;
      })[0];
      var newItemsPopup = this.itemsPopup.filter(function (item) {
        return item.id !== id;
      });
      /** вызывается после каждого закрытия окна * */
      if (this.callbackCloseAlways) {
        this.callbackCloseAlways(currentPopup.$this, returnBoolClose);
      }
      /** удаляем не нужный элемент * */
      this.itemsPopup = newItemsPopup;
      if (newItemsPopup.length === 0) {
        document.removeEventListener('keyup', this.keyEscHide);
      }
      return null;
    }
  }, {
    key: "inputAutoFocus",
    value: function inputAutoFocus() {
      if (this.DOM_ELEMENT_POPUP && this.isAutoFocusInput) {
        var _inputAutoFocus = this.DOM_ELEMENT_POPUP.querySelector('[data-autofocus]');
        if (!_inputAutoFocus) {
          _inputAutoFocus = this.DOM_ELEMENT_POPUP.querySelector('input:not([type="hidden"])');
        }
        if (_inputAutoFocus) {
          setTimeout(function () {
            var _inputAutoFocus2;
            (_inputAutoFocus2 = _inputAutoFocus) === null || _inputAutoFocus2 === void 0 || _inputAutoFocus2.focus();
          }, 200);
        }
      }
    }
    /** закрытия окна по ID - такое же ID как у popup * */
  }, {
    key: "hideForId",
    value: function hideForId(id) {
      var isDeleteForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.itemsPopup.forEach(function (item) {
        if (item.id === id) {
          item.hide(isDeleteForm);
        }
      });
      return null;
    }
  }, {
    key: "hideAll",
    value: function hideAll() {
      this.itemsPopup.forEach(function (item) {
        return item.hide();
      });
      return null;
    }
    // удаляет из HTML скрытую форму
  }, {
    key: "removeFormDOM",
    value: function removeFormDOM(id) {
      this.itemsPopup.forEach(function (item) {
        if (item.id === id) {
          item.hide(true);
        }
      });
      var element = document.getElementById(id + smpSelection_const_1.ID_SUFFIX);
      if (element) {
        element.remove();
      }
    }
  }, {
    key: "getOpenPopups",
    value: function getOpenPopups() {
      return this.itemsPopup;
    }
  }]);
}();
exports["default"] = SmpPopup;
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0ksR0FBQTtJQUFBckIsS0FBQSxFQUNELFNBQUFpSyxPQUFPQSxDQUFBLEVBQUc7TUFDTixJQUFJLENBQUM5QixVQUFVLENBQUNZLE9BQU8sQ0FBQyxVQUFDYSxJQUFJO1FBQUEsT0FBS0EsSUFBSSxDQUFDbEcsSUFBSSxDQUFDLENBQUM7TUFBQSxFQUFDO01BQzlDLE9BQU8sSUFBSTtJQUNmO0lBQ0E7RUFBQTtJQUFBckMsR0FBQTtJQUFBckIsS0FBQSxFQUNBLFNBQUFrSyxhQUFhQSxDQUFDL0gsRUFBRSxFQUFFO01BQ2QsSUFBSSxDQUFDZ0csVUFBVSxDQUFDWSxPQUFPLENBQUMsVUFBQ2EsSUFBSSxFQUFLO1FBQzlCLElBQUlBLElBQUksQ0FBQ3pILEVBQUUsS0FBS0EsRUFBRSxFQUFFO1VBQ2hCeUgsSUFBSSxDQUFDbEcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQjtNQUNKLENBQUMsQ0FBQztNQUNGLElBQU15RyxPQUFPLEdBQUdoSCxRQUFRLENBQUM0QixjQUFjLENBQUM1QyxFQUFFLEdBQUdKLG9CQUFvQixDQUFDOUIsU0FBUyxDQUFDO01BQzVFLElBQUlrSyxPQUFPLEVBQUU7UUFDVEEsT0FBTyxDQUFDbEcsTUFBTSxDQUFDLENBQUM7TUFDcEI7SUFDSjtFQUFDO0lBQUE1QyxHQUFBO0lBQUFyQixLQUFBLEVBQ0QsU0FBQW9LLGFBQWFBLENBQUEsRUFBRztNQUNaLE9BQU8sSUFBSSxDQUFDakMsVUFBVTtJQUMxQjtFQUFDO0FBQUE7QUFFTHBJLGtCQUFlLEdBQUdpSSxRQUFRLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbXBQb3B1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU21wUG9wdXAvLi9zcmMvY29uc3Qvc21wU2VsZWN0aW9uLmNvbnN0LnRzIiwid2VicGFjazovL1NtcFBvcHVwLy4vc3JjL3NtcFBvcHVwSW5pdC50cyIsIndlYnBhY2s6Ly9TbXBQb3B1cC8uL3NyYy9zdHlsZS5jc3M/Yzk1NiIsIndlYnBhY2s6Ly9TbXBQb3B1cC8uL3NyYy91dGlscy9zbXBTZWxlY3Rpb24udXRpbHMudHMiLCJ3ZWJwYWNrOi8vU21wUG9wdXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU21wUG9wdXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TbXBQb3B1cC8uL3NyYy9zbXBQb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlNtcFBvcHVwXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNtcFBvcHVwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNtcFBvcHVwXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnID8gdGhpcyA6IHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JRF9TVUZGSVggPSB2b2lkIDA7XG5leHBvcnRzLklEX1NVRkZJWCA9ICdfcG9wdXBfaW5pdCc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU21wUG9wdXBJbml0ID0gdm9pZCAwO1xuY29uc3Qgc21wU2VsZWN0aW9uX2NvbnN0XzEgPSByZXF1aXJlKFwiLi9jb25zdC9zbXBTZWxlY3Rpb24uY29uc3RcIik7XG5jbGFzcyBTbXBQb3B1cEluaXQge1xuICAgIGlkO1xuICAgICR0aGlzO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgICAkd3JhcHBlcjtcbiAgICAkYm9keUhUTUw7XG4gICAgY2xhc3NQb3B1cDtcbiAgICBjbG9zZVBvcHVwQnV0dG9uO1xuICAgIHdyYXBwZXJBZGRDbGFzcztcbiAgICBib2R5SHRtbEFkZENsYXNzO1xuICAgIGNsb3NlQWRkQ2xhc3M7XG4gICAgLyoqINCy0YvQt9GL0LLQsNC10YLRgdGPINC/0L7RgdC70LUg0LrQsNC20LTQvtCz0L4g0LfQsNC60YDRi9GC0LjRjyDQvtC60L3QsCAqICovXG4gICAgY2FsbGJhY2tDbG9zZUFsd2F5cyA9IG51bGw7XG4gICAgbG9jYWxDYWxsYmFja0Nsb3NlQmVmb3JlO1xuICAgIHJldHVybkJvb2xDbG9zZSA9IGZhbHNlO1xuICAgIGlzUG9wdXBPcGVuID0gZmFsc2U7XG4gICAgaGlzdG9yeUlkO1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcbiAgICAgICAgdGhpcy4kdGhpcyA9IHByb3BzLiR0aGlzO1xuICAgICAgICB0aGlzLndyYXBwZXJBZGRDbGFzcyA9IHByb3BzLndyYXBwZXJBZGRDbGFzcztcbiAgICAgICAgdGhpcy5ib2R5SHRtbEFkZENsYXNzID0gcHJvcHMuYm9keUh0bWxBZGRDbGFzcztcbiAgICAgICAgdGhpcy5jbG9zZUFkZENsYXNzID0gcHJvcHMuY2xvc2VBZGRDbGFzcztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gcHJvcHMub3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5jbGFzc1BvcHVwID0gcHJvcHMuY2xhc3NQb3B1cDtcbiAgICAgICAgdGhpcy5sb2NhbENhbGxiYWNrQ2xvc2VCZWZvcmUgPSBwcm9wcy5sb2NhbENhbGxiYWNrQ2xvc2VCZWZvcmU7XG4gICAgICAgIHRoaXMuaW5pdEhUTUwoKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5SWQgPSBgc21wUG9wdXBfJHt0aGlzLmlkfWA7XG4gICAgICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kd3JhcHBlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHdyYXBwZXIudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3Blbl9wb3B1cCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQb3B1cE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IFt0aGlzLmhpc3RvcnlJZF06IHRydWUgfSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBvcGVuKCk7XG4gICAgICAgIHNldFRpbWVvdXQob3BlbiwgMTApO1xuICAgIH1cbiAgICBoaWRlKGlzRGVsZXRlID0gZmFsc2UsIGlzSGlzdG9yeSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy4kd3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5fcG9wdXAnKTtcbiAgICAgICAgdGhpcy5sb2NhbENhbGxiYWNrQ2xvc2VCZWZvcmUodGhpcy5pZCwgdGhpcy5yZXR1cm5Cb29sQ2xvc2UpO1xuICAgICAgICBpZiAod2luZG93Lmhpc3Rvcnkuc3RhdGU/Llt0aGlzLmhpc3RvcnlJZF0gJiYgIWlzSGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2xhc3NDb250YWluZXIgPSBgLiR7dGhpcy5jbGFzc1BvcHVwfV9fY29udGVudGA7IC8qIGJfcG9wdXBfX2NvbnRlbnQgKi9cbiAgICAgICAgY29uc3QgJHBvcHVwQ29udGVudCA9IHRoaXMuJHRoaXMucXVlcnlTZWxlY3RvcihjbGFzc0NvbnRhaW5lcik7XG4gICAgICAgIGlmIChpc0RlbGV0ZVxuICAgICAgICAgICAgfHwgKCRwb3B1cENvbnRlbnQgJiYgJHBvcHVwQ29udGVudC5kYXRhc2V0LnJlbW92ZUJlZm9yZUNsb3NlICYmICRwb3B1cENvbnRlbnQuZGF0YXNldC5yZW1vdmVCZWZvcmVDbG9zZSAhPT0gJ2ZhbHNlJykpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVCZWZvcmVDbG9zZScsICRwb3B1cENvbnRlbnQuZGF0YXNldC5yZW1vdmVCZWZvcmVDbG9zZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyPy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0aGlzLiR3cmFwcGVyKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IG9sZEluaXRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyBzbXBTZWxlY3Rpb25fY29uc3RfMS5JRF9TVUZGSVgpO1xuICAgICAgICBpZiAob2xkSW5pdFBvcHVwKSB7XG4gICAgICAgICAgICB0aGlzLiR3cmFwcGVyID0gb2xkSW5pdFBvcHVwO1xuICAgICAgICAgICAgdGhpcy4kd3JhcHBlci5kYXRhc2V0LmZpcnN0SW5pdCA9ICdmYWxzZSc7XG4gICAgICAgICAgICAvKiog0LXRgdC70Lgg0L7QutC90L4g0YPQttC1INCx0YvQu9C+INC00L7QsdCw0LLQu9C10L3Qviwg0L/QtdGA0LXQvdC+0YHQuNC8INCyINC60L7QvdC10YYgYm9keSAo0LXRgdC70Lgg0Y3RgtC+INCy0YLQvtGA0L7QtSDQvtC60L3Qviwg0LTQu9GPIHotaW5kZXgpICogKi9cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kd3JhcHBlcik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvcGVuX3BvcHVwJyk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLiR3cmFwcGVyLmlkID0gdGhpcy5pZCArIHNtcFNlbGVjdGlvbl9jb25zdF8xLklEX1NVRkZJWDtcbiAgICAgICAgICAgIHRoaXMuJHdyYXBwZXIuY2xhc3NOYW1lID0gdGhpcy5jbGFzc1BvcHVwOyAvKiBiX3BvcHVwICovXG4gICAgICAgICAgICBpZiAodGhpcy53cmFwcGVyQWRkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy53cmFwcGVyQWRkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kd3JhcHBlci5kYXRhc2V0LmZpcnN0SW5pdCA9ICd0cnVlJztcbiAgICAgICAgICAgIHRoaXMuJHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICAgICAgICAgIHRoaXMuJHdyYXBwZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gYCR7dGhpcy5jbGFzc1BvcHVwfV9fb3ZlcmxheWA7IC8qIGJfcG9wdXBfX292ZXJsYXkgKi9cbiAgICAgICAgICAgIG92ZXJsYXkuZGF0YXNldC5jbG9zZSA9ICd0cnVlJztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjdXJyZW50V3JhcHBlci5jbGFzc05hbWUgPSBgJHt0aGlzLmNsYXNzUG9wdXB9X193cmFwcGVyYDsgLyogYl9wb3B1cF9fd3JhcHBlciAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9keUh0bWxBZGRDbGFzcykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5ib2R5SHRtbEFkZENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRXcmFwcGVyLmRhdGFzZXQuY2xvc2UgPSAndHJ1ZSc7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICBsZXQgY2xvc2VQb3B1cEJ1dHRvbiA9IGAke3RoaXMuY2xhc3NQb3B1cH1fX2Nsb3NlYDtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlQWRkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBjbG9zZVBvcHVwQnV0dG9uICs9IGAgJHt0aGlzLmNsb3NlQWRkQ2xhc3N9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEJ1dHRvbi5jbGFzc05hbWUgPSBjbG9zZVBvcHVwQnV0dG9uOyAvKiBiX3BvcHVwX19jbG9zZSAqL1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDbG9zZSB3aW5kb3cnKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEJ1dHRvbi5pbm5lclRleHQgPSAnQ2xvc2Ugd2luZG93JztcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEJ1dHRvbi5kYXRhc2V0LmNsb3NlID0gJ3RydWUnO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwQnV0dG9uLmRhdGFzZXQudGFiSW5kZXggPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXBCdXR0b24uZGF0YXNldC5mb2N1c0Nsb3NlID0gJ3RydWUnO1xuICAgICAgICAgICAgdGhpcy4kYm9keUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuJGJvZHlIVE1MLmNsYXNzTmFtZSA9IGAke3RoaXMuY2xhc3NQb3B1cH1fX2JvZHlgOyAvKiBiX3BvcHVwX19ib2R5ICovXG4gICAgICAgICAgICBjdXJyZW50V3JhcHBlci5hcHBlbmQodGhpcy4kYm9keUhUTUwpO1xuICAgICAgICAgICAgY29uc3QgbGFzdEFjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGFzdEFjdGl2ZS50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICBsYXN0QWN0aXZlLmRhdGFzZXQubGFzdEluZGV4QWN0aXZlID0gJzEnO1xuICAgICAgICAgICAgY3VycmVudFdyYXBwZXIuYXBwZW5kKGxhc3RBY3RpdmUpO1xuICAgICAgICAgICAgdGhpcy4kYm9keUhUTUwuYXBwZW5kKHRoaXMuY2xvc2VQb3B1cEJ1dHRvbik7XG4gICAgICAgICAgICBsZXQgaXNDbG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlzQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YXNldC5jbG9zZSAmJiBlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvKiog0L7RgtC70L7QsiDQutC70LjQuiDQv9C+INGB0LrRgNC+0LvQu9GDICogKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQgPT09IGN1cnJlbnRXcmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja091dFNjcm9sbCA9ICR0YXJnZXQuY2xpZW50V2lkdGggPiBlLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tPdXRTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Nsb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xvc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhc2V0LmNsb3NlICYmIGUuYnV0dG9uID09PSAwICYmIGlzQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqINC+0YLQu9C+0LIg0LrQu9C40Log0L/QviDRgdC60YDQvtC70LvRgyAqICovXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdGFyZ2V0ID09PSBjdXJyZW50V3JhcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2tPdXRTY3JvbGwgPSAkdGFyZ2V0LmNsaWVudFdpZHRoID4gZS5jbGllbnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrT3V0U2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuQm9vbENsb3NlID0gISEkdGFyZ2V0LmRhdGFzZXQucmV0dXJuVHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5Cb29sQ2xvc2UgPSAhISR0YXJnZXQuZGF0YXNldC5yZXR1cm5UcnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0Nsb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgJHRhcmdldC5kYXRhc2V0LmZvY3VzQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5Cb29sQ2xvc2UgPSAhISR0YXJnZXQuZGF0YXNldC5yZXR1cm5UcnVlO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ1RhYicgJiYgJHRhcmdldC5kYXRhc2V0Lmxhc3RJbmRleEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXBCdXR0b24/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdUYWInICYmICR0YXJnZXQuZGF0YXNldC5sYXN0SW5kZXhBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwQnV0dG9uPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmQob3ZlcmxheSk7XG4gICAgICAgICAgICB0aGlzLiR3cmFwcGVyLmFwcGVuZChjdXJyZW50V3JhcHBlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLiR3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMuJGJvZHlIVE1MLmFwcGVuZCh0aGlzLiR0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMud3JhcHBlckFkZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kd3JhcHBlci5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy53cmFwcGVyQWRkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ib2R5QWRkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5SFRNTC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5ib2R5QWRkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NDb250YWluZXIgPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3NQb3B1cH1fX2NvbnRlbnRgKTtcbiAgICAgICAgICAgIGlmIChjbGFzc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNsYXNzQ29udGFpbmVyLmRhdGFzZXQucmVtb3ZlQmVmb3JlQ2xvc2UgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlNtcFBvcHVwSW5pdCA9IFNtcFBvcHVwSW5pdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0luY2x1ZGVEb21FbGVtZW50ID0gZXhwb3J0cy5nZXRJZEZyb21IYXNoID0gZXhwb3J0cy5nZXRIcmVmID0gdm9pZCAwO1xuY29uc3QgZ2V0SHJlZiA9IChlbGVtTm9kZSkgPT4ge1xuICAgIGlmICghZWxlbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBlbGVtTm9kZS5kYXRhc2V0ICYmIGVsZW1Ob2RlLmRhdGFzZXQuaHJlZiA/IGVsZW1Ob2RlLmRhdGFzZXQuaHJlZiA6IGVsZW1Ob2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xufTtcbmV4cG9ydHMuZ2V0SHJlZiA9IGdldEhyZWY7XG5jb25zdCBnZXRJZEZyb21IYXNoID0gKGhhc2gpID0+IHtcbiAgICBpZiAoaGFzaFswXSA9PT0gJyMnKSB7XG4gICAgICAgIHJldHVybiBoYXNoLnNsaWNlKDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxufTtcbmV4cG9ydHMuZ2V0SWRGcm9tSGFzaCA9IGdldElkRnJvbUhhc2g7XG5jb25zdCBpc0luY2x1ZGVEb21FbGVtZW50ID0gKGVsLCBsaXN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBsaXN0TmFtZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJykuaW5jbHVkZXMoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSk7XG59O1xuZXhwb3J0cy5pc0luY2x1ZGVEb21FbGVtZW50ID0gaXNJbmNsdWRlRG9tRWxlbWVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc21wUG9wdXBJbml0XzEgPSByZXF1aXJlKFwiLi9zbXBQb3B1cEluaXRcIik7XG5jb25zdCBzbXBTZWxlY3Rpb25fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NtcFNlbGVjdGlvbi51dGlsc1wiKTtcbmNvbnN0IHNtcFNlbGVjdGlvbl9jb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3Qvc21wU2VsZWN0aW9uLmNvbnN0XCIpO1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuY2xhc3MgU21wUG9wdXAge1xuICAgIGl0ZW1zUG9wdXAgPSBbXTtcbiAgICBpc0F1dG9Gb2N1c0lucHV0OyAvKiog0L3Rg9C20L3QviDQu9C4INGB0YLQsNCy0LjRgtGMINGE0L7QutGD0YEg0L3QsCDQuNC90YLRg9C/ICovXG4gICAgY2xhc3NQb3B1cDsgLyoqINCe0YHQvdC+0LLQvdC+0Lkg0LrQu9Cw0YHRgSDQtNC70Y8gcG9wdXAgLSDQv9C+INGD0LwuIGJfcG9wdXAgKi9cbiAgICB3cmFwcGVyQWRkQ2xhc3M7IC8qKiDQlNC+0L8uINC60LvQsNGB0YEg0LTQu9GPIGJfcG9wdXAgICovXG4gICAgYm9keUh0bWxBZGRDbGFzczsgLyoqICDQlNC+0L8uINC60LvQsNGB0YEg0LTQu9GPIGJfcG9wdXBfX2JvZHkgKi9cbiAgICBjbG9zZUFkZENsYXNzOyAvKiogINCU0L7Qvy4g0LrQu9Cw0YHRgSDQtNC70Y8gYl9wb3B1cF9fY2xvc2UgKiAqL1xuICAgIC8qKiDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQv9C+0YHQu9C1INC/0LXRgNCy0L7Qs9C+INC+0LrQvdCwICogKi9cbiAgICBjYWxsYmFja09wZW5BbHdheXMgPSBudWxsO1xuICAgIC8qKiDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQv9C+0YHQu9C1INC60LDQttC00L7Qs9C+INCy0YvQt9C+0LLQsCDQvtC60L3QsCAqICovXG4gICAgY2FsbGJhY2tPcGVuT25jZSA9IG51bGw7XG4gICAgLyoqINCy0YvQt9GL0LLQsNC10YLRgdGPINC/0L7RgdC70LUg0LrQsNC20LTQvtCz0L4g0LfQsNC60YDRi9GC0LjRjyDQvtC60L3QsCAqICovXG4gICAgY2FsbGJhY2tDbG9zZUFsd2F5cyA9IG51bGw7XG4gICAgRE9NX0VMRU1FTlRfUE9QVVA7XG4gICAgc2VsZWN0b3JMaW5rcztcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBpZiAoIXByb3BzKVxuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5jbGFzc1BvcHVwID0gcHJvcHMuY2xhc3NQb3B1cCA/IHByb3BzLmNsYXNzUG9wdXAgOiAnYl9wb3B1cCc7XG4gICAgICAgIHRoaXMud3JhcHBlckFkZENsYXNzID0gcHJvcHMud3JhcHBlckFkZENsYXNzID8gcHJvcHMud3JhcHBlckFkZENsYXNzIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJvZHlIdG1sQWRkQ2xhc3MgPSBwcm9wcy5ib2R5SHRtbEFkZENsYXNzID8gcHJvcHMuYm9keUh0bWxBZGRDbGFzcyA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jbG9zZUFkZENsYXNzID0gcHJvcHMuY2xvc2VBZGRDbGFzcyA/IHByb3BzLmNsb3NlQWRkQ2xhc3MgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tPcGVuT25jZSA9IHByb3BzLmNhbGxiYWNrT3Blbk9uY2UgPyBwcm9wcy5jYWxsYmFja09wZW5PbmNlIDogbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja09wZW5BbHdheXMgPSBwcm9wcy5jYWxsYmFja09wZW5BbHdheXMgPyBwcm9wcy5jYWxsYmFja09wZW5BbHdheXMgOiBudWxsO1xuICAgICAgICB0aGlzLmNhbGxiYWNrQ2xvc2VBbHdheXMgPSBwcm9wcy5jYWxsYmFja0Nsb3NlQWx3YXlzID8gcHJvcHMuY2FsbGJhY2tDbG9zZUFsd2F5cyA6IG51bGw7XG4gICAgICAgIHRoaXMuaXNBdXRvRm9jdXNJbnB1dCA9IHByb3BzLmlzQXV0b0ZvY3VzSW5wdXQgPyBwcm9wcy5pc0F1dG9Gb2N1c0lucHV0IDogdHJ1ZTtcbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdG9yTGlua3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMuc2VsZWN0b3JMaW5rcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHByb3BzLnNlbGVjdG9yTGlua3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RvckxpbmtzID0gcHJvcHMuc2VsZWN0b3JMaW5rcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZW4tcG9wdXBdJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdG9yTGlua3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdG9yTGlua3MgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZXJDbGljayhlLCB0aGlzLnNlbGVjdG9yTGlua3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0b3JMaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yTGlua3MuZm9yRWFjaCgoJGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5oYW5kbGVyQ2xpY2soZSwgJGl0ZW0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXN0T3BlblBvcHVwID0gdGhpcy5pdGVtc1BvcHVwW3RoaXMuaXRlbXNQb3B1cC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChsYXN0T3BlblBvcHVwICYmIGxhc3RPcGVuUG9wdXAuaXNQb3B1cE9wZW4pIHtcbiAgICAgICAgICAgICAgICBsYXN0T3BlblBvcHVwLmlzUG9wdXBPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGFzdE9wZW5Qb3B1cC5oaWRlKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZXJDbGljayhlLCBlbGVtZW50Tm9kZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSAoMCwgc21wU2VsZWN0aW9uX3V0aWxzXzEuZ2V0SHJlZikoZWxlbWVudE5vZGUpO1xuICAgICAgICBpZiAoIWhyZWYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYXNoID0gKDAsIHNtcFNlbGVjdGlvbl91dGlsc18xLmdldElkRnJvbUhhc2gpKGhyZWYpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgICAgIGlmIChlbGVtZW50Tm9kZS5kYXRhc2V0LmFkZENsYXNzQm9keSkge1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5QWRkQ2xhc3MgPSBlbGVtZW50Tm9kZS5kYXRhc2V0LmFkZENsYXNzQm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coaGFzaCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHNob3coaWQsIG9wdGlvbnMgPSB7fSAvKiAkbGluaz86SFRNTEVsZW1lbnQgKi8pIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmICgkdGhpcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEluaXRQb3B1cCA9IG5ldyBzbXBQb3B1cEluaXRfMS5TbXBQb3B1cEluaXQoe1xuICAgICAgICAgICAgICAgICR0aGlzLFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGNsYXNzUG9wdXA6IHRoaXMuY2xhc3NQb3B1cCxcbiAgICAgICAgICAgICAgICBib2R5SHRtbEFkZENsYXNzOiB0aGlzLmJvZHlIdG1sQWRkQ2xhc3MsXG4gICAgICAgICAgICAgICAgd3JhcHBlckFkZENsYXNzOiB0aGlzLndyYXBwZXJBZGRDbGFzcyxcbiAgICAgICAgICAgICAgICBjbG9zZUFkZENsYXNzOiB0aGlzLmNsb3NlQWRkQ2xhc3MsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBsb2NhbENhbGxiYWNrQ2xvc2VCZWZvcmU6IHRoaXMuaGlkZUJlZm9yZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLkRPTV9FTEVNRU5UX1BPUFVQID0gJHRoaXM7XG4gICAgICAgICAgICB0aGlzLml0ZW1zUG9wdXAucHVzaChjdXJyZW50SW5pdFBvcHVwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlFc2NIaWRlKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIC8qKiDQstGL0LfRi9Cy0LDQtdC8INCw0LLRgtC+0YTQvtC60YPRgSwg0LXRgdC70Lgg0L3Rg9C20L3QviAgKiAqL1xuICAgICAgICAgICAgdGhpcy5pbnB1dEF1dG9Gb2N1cygpO1xuICAgICAgICAgICAgY29uc3Qgb2xkSW5pdFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBzbXBTZWxlY3Rpb25fY29uc3RfMS5JRF9TVUZGSVgpO1xuICAgICAgICAgICAgaWYgKG9sZEluaXRQb3B1cCAmJiBvbGRJbml0UG9wdXAuZGF0YXNldC5maXJzdEluaXQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIC8qKiDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQv9C+0YHQu9C1INC/0LXRgNCy0L7Qs9C+INCy0YvQt9C+0LLQsCDQvtC60L3QsCAqICovXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tPcGVuT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrT3Blbk9uY2UoJHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQv9C+0YHQu9C1INC60LDQttC00L7Qs9C+INCy0YvQt9C+0LLQsCDQvtC60L3QsCAqICovXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFja09wZW5BbHdheXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrT3BlbkFsd2F5cygkdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGtleUVzY0hpZGUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgaWYgKCgwLCBzbXBTZWxlY3Rpb25fdXRpbHNfMS5pc0luY2x1ZGVEb21FbGVtZW50KShlLnRhcmdldCwgJ2lucHV0LGxhYmVsLHRleHRhcmVhLHZpZGVvLGF1ZGlvLHNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGFzdE9wZW5Qb3B1cCA9IHRoaXMuaXRlbXNQb3B1cFt0aGlzLml0ZW1zUG9wdXAubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAobGFzdE9wZW5Qb3B1cCkge1xuICAgICAgICAgICAgICAgIGxhc3RPcGVuUG9wdXAuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleUVzY0hpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBoaWRlQmVmb3JlKGlkLCByZXR1cm5Cb29sQ2xvc2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9wdXAgPSB0aGlzLml0ZW1zUG9wdXAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zUG9wdXAgPSB0aGlzLml0ZW1zUG9wdXAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgICAgIC8qKiDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQv9C+0YHQu9C1INC60LDQttC00L7Qs9C+INC30LDQutGA0YvRgtC40Y8g0L7QutC90LAgKiAqL1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja0Nsb3NlQWx3YXlzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrQ2xvc2VBbHdheXMoY3VycmVudFBvcHVwLiR0aGlzLCByZXR1cm5Cb29sQ2xvc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8qKiDRg9C00LDQu9GP0LXQvCDQvdC1INC90YPQttC90YvQuSDRjdC70LXQvNC10L3RgiAqICovXG4gICAgICAgIHRoaXMuaXRlbXNQb3B1cCA9IG5ld0l0ZW1zUG9wdXA7XG4gICAgICAgIGlmIChuZXdJdGVtc1BvcHVwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleUVzY0hpZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpbnB1dEF1dG9Gb2N1cygpIHtcbiAgICAgICAgaWYgKHRoaXMuRE9NX0VMRU1FTlRfUE9QVVAgJiYgdGhpcy5pc0F1dG9Gb2N1c0lucHV0KSB7XG4gICAgICAgICAgICBsZXQgaW5wdXRBdXRvRm9jdXMgPSB0aGlzLkRPTV9FTEVNRU5UX1BPUFVQLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9mb2N1c10nKTtcbiAgICAgICAgICAgIGlmICghaW5wdXRBdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEF1dG9Gb2N1cyA9IHRoaXMuRE9NX0VMRU1FTlRfUE9QVVAucXVlcnlTZWxlY3RvcignaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlucHV0QXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0QXV0b0ZvY3VzPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqINC30LDQutGA0YvRgtC40Y8g0L7QutC90LAg0L/QviBJRCAtINGC0LDQutC+0LUg0LbQtSBJRCDQutCw0Log0YMgcG9wdXAgKiAqL1xuICAgIGhpZGVGb3JJZChpZCwgaXNEZWxldGVGb3JtID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pdGVtc1BvcHVwLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaGlkZShpc0RlbGV0ZUZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGhpZGVBbGwoKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQb3B1cC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmhpZGUoKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyDRg9C00LDQu9GP0LXRgiDQuNC3IEhUTUwg0YHQutGA0YvRgtGD0Y4g0YTQvtGA0LzRg1xuICAgIHJlbW92ZUZvcm1ET00oaWQpIHtcbiAgICAgICAgdGhpcy5pdGVtc1BvcHVwLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaGlkZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIHNtcFNlbGVjdGlvbl9jb25zdF8xLklEX1NVRkZJWCk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE9wZW5Qb3B1cHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zUG9wdXA7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU21wUG9wdXA7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJJRF9TVUZGSVgiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiZSIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfZGVmaW5lUHJvcGVydHkiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiU21wUG9wdXBJbml0Iiwic21wU2VsZWN0aW9uX2NvbnN0XzEiLCJyZXF1aXJlIiwicHJvcHMiLCJfdGhpcyIsImlkIiwiJHRoaXMiLCJ3cmFwcGVyQWRkQ2xhc3MiLCJib2R5SHRtbEFkZENsYXNzIiwiY2xvc2VBZGRDbGFzcyIsIm9wdGlvbnMiLCJjbGFzc1BvcHVwIiwibG9jYWxDYWxsYmFja0Nsb3NlQmVmb3JlIiwiaW5pdEhUTUwiLCJoaXN0b3J5SWQiLCJjb25jYXQiLCJvcGVuIiwiJHdyYXBwZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YWJJbmRleCIsImRvY3VtZW50IiwiYm9keSIsImlzUG9wdXBPcGVuIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInNldFRpbWVvdXQiLCJoaWRlIiwiX3dpbmRvdyRoaXN0b3J5JHN0YXRlIiwiX3RoaXMyIiwiaXNEZWxldGUiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJpc0hpc3RvcnkiLCJyZW1vdmUiLCJyZXR1cm5Cb29sQ2xvc2UiLCJzdGF0ZSIsImJhY2siLCJjbGFzc0NvbnRhaW5lciIsIiRwb3B1cENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsInJlbW92ZUJlZm9yZUNsb3NlIiwiX3RoaXMyJCR3cmFwcGVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX3RoaXMzIiwib2xkSW5pdFBvcHVwIiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJzdEluaXQiLCJhcHBlbmRDaGlsZCIsIl90aGlzMyQkd3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvdmVybGF5IiwiY2xvc2UiLCJjdXJyZW50V3JhcHBlciIsImNsb3NlUG9wdXBCdXR0b24iLCJ0eXBlIiwiaW5uZXJUZXh0IiwiZm9jdXNDbG9zZSIsIiRib2R5SFRNTCIsImFwcGVuZCIsImxhc3RBY3RpdmUiLCJsYXN0SW5kZXhBY3RpdmUiLCJpc0Nsb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJidXR0b24iLCJjbGlja091dFNjcm9sbCIsImNsaWVudFdpZHRoIiwiY2xpZW50WCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVHJ1ZSIsIl90aGlzMyRjbG9zZVBvcHVwQnV0dCIsImZvY3VzIiwiX3RoaXMzJGNsb3NlUG9wdXBCdXR0MiIsImJvZHlBZGRDbGFzcyIsInJlc3RhcnQiLCJpc0luY2x1ZGVEb21FbGVtZW50IiwiZ2V0SWRGcm9tSGFzaCIsImdldEhyZWYiLCJlbGVtTm9kZSIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNoIiwic2xpY2UiLCJlbCIsImxpc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImluY2x1ZGVzIiwibm9kZU5hbWUiLCJzbXBQb3B1cEluaXRfMSIsInNtcFNlbGVjdGlvbl91dGlsc18xIiwiU21wUG9wdXAiLCJjb2RlIiwibGFzdE9wZW5Qb3B1cCIsIml0ZW1zUG9wdXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5RXNjSGlkZSIsImNhbGxiYWNrT3Blbk9uY2UiLCJjYWxsYmFja09wZW5BbHdheXMiLCJjYWxsYmFja0Nsb3NlQWx3YXlzIiwiaXNBdXRvRm9jdXNJbnB1dCIsInNlbGVjdG9yTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdCIsIkhUTUxFbGVtZW50IiwiaGFuZGxlckNsaWNrIiwiZm9yRWFjaCIsIiRpdGVtIiwiZWxlbWVudE5vZGUiLCJhZGRDbGFzc0JvZHkiLCJzaG93IiwiY3VycmVudEluaXRQb3B1cCIsImhpZGVCZWZvcmUiLCJiaW5kIiwiRE9NX0VMRU1FTlRfUE9QVVAiLCJwdXNoIiwiaW5wdXRBdXRvRm9jdXMiLCJjdXJyZW50UG9wdXAiLCJmaWx0ZXIiLCJpdGVtIiwibmV3SXRlbXNQb3B1cCIsIl9pbnB1dEF1dG9Gb2N1czIiLCJoaWRlRm9ySWQiLCJpc0RlbGV0ZUZvcm0iLCJoaWRlQWxsIiwicmVtb3ZlRm9ybURPTSIsImVsZW1lbnQiLCJnZXRPcGVuUG9wdXBzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=