/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(arg) {
  let DOMinstance;
  if(typeof arg === "string") {
    const elements = document.querySelectorAll(arg);
    const arrayIter = elements.values();
    const array = Array.prototype.slice.call(elements);
    DOMinstance = new DOMNodeCollection(array);
  }
  if(arg instanceof HTMLElement){
    const el = [arg];
    DOMinstance = new DOMNodeCollection(el);
  }

  return DOMinstance;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {


class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  empty() {
    this.html("");
  }

  remove(selector) {
      if(selector) {
        this.array.forEach((el) => {
          const elements = Array.prototype.slice.call(el.querySelectorAll(selector));
          elements.forEach((el2) => {
            el2.remove();
          });
        });
      } else {
        this.array.forEach((el) => {
          el.remove();
        });
      }
  }

  attr(attribute, attributeVal) {
    if (attributeVal === undefined) {
      const nodeAttributes = [];
      this.array.forEach((el) =>{
        nodeAttributes.push(el.getAttribute(attribute));
      });

      return nodeAttributes;
    } else {
      this.array.forEach((el) =>{
        el.setAttribute(attribute, attributeVal);
      });
    }
  }

  addClass(className) {
    this.array.forEach((el) =>{
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.array.forEach((el) =>{
      el.classList.remove(className);
    });
  }

  append(element) {
    if(typeof element === "string") {
      this.array.forEach((el)=>{
        el.innerHTML += element;
      });
    } else if (element instanceof HTMLElement){
      this.array.forEach((el)=>{
        el.innerHTML += element.outerHTML;
      });
    } else {
      this.array.forEach((arrayEl)=>{
        element.array.forEach((appendEl) => {
          arrayEl.innerHTML += appendEl.outerHTML;
        });
      });
    }
  }

  html(strings) {
    const firstNode = this.array[0];
    if(strings !== undefined){
      this.array.forEach((el)=>{
        el.innerHTML = strings;
      });
    } else {
      return firstNode.innerHTML;
    }

  }

  find(selector) {
    let container = [];
    this.array.forEach((el) => {
      let elements = el.querySelectorAll(selector);
      container = container.concat(Array.prototype.slice.call(elements));
    });
    return new DOMNodeCollection(container);
  }

  children() {
    const childArray = [];
    this.array.forEach((node) => {
      let childrenNodes = node.children;

      for (var i = 0; i < childrenNodes.length; i++) {
        childArray.push(childrenNodes[i]);
      }
    });
    return new DOMNodeCollection(childArray);
  }

  parent() {
    const parentArray = [];
    this.array.forEach((node) => {
      parentArray.push(node.parentNode);
    });

    return new DOMNodeCollection(parentArray);
  }

  on () {

  }

  off() {
    
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);