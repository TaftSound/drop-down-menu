/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 72:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".MENU-CONTAINER {\n  --color-one: #253E41;\n  --color-two: #B0D0D3;\n  --color-three: #D5DFE0;\n  --color-four: #FFFFFF;\n  position: relative;\n}\n.MENU {\n  height: min-content;\n  background-color: var(--color-two);\n  display: flex;\n  gap: 2px;\n}\n.ICON {\n  position: relative;\n  height: 30px;\n  width: 55px;\n  border-radius: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  border: solid 3px var(--color-two);\n  transition: width .5s,\n              border-color .3s;\n}\n.ICON:hover,\n.ICON.OPEN:hover {\n  border-color: var(--color-three);\n  transition: width .5s,\n              border-color .3s;\n}\n.ICON div {\n  background-color: var(--color-four);\n  height: 3px;\n  width: 25px;\n  border-radius: 15px;\n  position: absolute;\n}\n.ICON div:nth-child(1) {\n  top: 0;\n  bottom: 0;\n  top: -60%;\n  margin: auto;\n  transition: top .4s,\n              bottom .4s,\n              transform .4s;\n}\n.ICON div:nth-child(2) {\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transition: opacity .3s .1s;\n}\n.ICON div:nth-child(3) {\n  top: 0;\n  bottom: 0;\n  bottom: -60%;\n  margin: auto;\n  transition: top .4s,\n              bottom .4s,\n              transform .4s;\n}\n.CATEGORY-CONTAINER {\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n  display: flex;\n  background-color: transparent;\n  align-items: center;\n  margin: 0px;\n  font-size: 18px;\n  color: var(--color-one);\n  transition: border-color .6s,\n              background-color .6s;\n}\n.CATEGORY-NAME {\n  margin: 0px;\n  user-select: none;\n}\n.MENU-LIST {\n  display: grid;\n  grid-auto-rows: max-content;\n  border-radius: 10px;\n  font-size: 16px;\n  color: transparent;\n  background-color: transparent;\n}\n.ITEM {\n  background-color: transparent;\n  transition: background-color 1s;\n}\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 768px) {\n  .MENU-CONTAINER {\n    background-color: var(--color-two);\n    position: relative;\n    border-radius: 30px;\n    cursor: pointer;\n    height: max-content;\n  }\n  .MENU {\n    position: absolute;\n    flex-direction: column;\n    top: calc(100% + 7px);\n    right: 0px;\n    border: solid 7.5px var(--color-two);\n    border-radius: 10px;\n    opacity: 0%;\n    visibility: hidden;\n    transition: opacity .5s,\n                visibility 0s .5s;\n  }\n  .CATEGORY-CONTAINER {\n    position: relative;\n    top: 100%;\n    font-size: 18px;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: 7.5px;\n    padding: 5px 10px;\n    gap: 3px;\n  }\n  .CATEGORY-CONTAINER.TAB {\n    padding: 5px 10px;\n  }\n  .CATEGORY-CONTAINER:hover {\n    background-color: var(--color-three);\n    cursor: pointer;\n    transition: background-color .4s;\n  }\n  .MENU.OPEN {\n    opacity: 100%;\n    visibility: visible;\n    transition: opacity .5s,\n                visibility 0s;\n  }\n  .ICON.OPEN {\n    width: 30px;\n    transition: width .5s,\n                border-color .3s;\n  }\n  .ICON.OPEN div:nth-child(1) {\n    transform: rotate(45deg);\n    top: 0;\n    transition: top .4s,\n              bottom .4s,\n              transform .4s;\n  }\n  .ICON.OPEN div:nth-child(2) {\n    opacity: 0%;\n    transition: opacity .2s;\n  }\n  .ICON.OPEN div:nth-child(3) {\n    transform: rotate(135deg);\n    bottom: 0;\n    transition: top .4s,\n              bottom .4s,\n              transform .4s;\n  }\n  .MENU-LIST {\n    width: min-content;\n    gap: 2px;\n    width: 100%;\n    color: var(--color-one);\n  }\n  .ITEM {\n    border-radius: 5px;\n    padding: 3px 7.5px;\n  }\n  .ITEM:hover {\n    cursor: pointer;\n    background-color: var(--color-four);\n    transition: background-color .3s;\n  }\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .MENU {\n    flex-direction: row;\n    display: flex;\n    gap: 5px;\n    padding: 0px 15px;\n    /* border: solid 3px var(--color-two); */\n    border-radius: 30px;\n  }\n  .ICON {\n    display: none;\n  }\n  .CATEGORY-CONTAINER {\n    padding: 7.5px 10px;\n    flex-direction: row;\n    width: max-content;\n    border-radius: 10px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n  .CATEGORY-CONTAINER.TAB {\n    border-radius: 10px;\n  }\n  .MENU-LIST {\n    position: absolute;\n    width: max-content;\n    left: 0px;\n    top: calc(100%);\n    padding: 3px;\n    gap: 2px;\n    border-top-left-radius: 0px;\n    overflow: hidden;\n    transition: color .3s,\n                background-color .4s,\n                visibility .0s .4s;\n  }\n  .ITEM {\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 8px;\n    padding: 5px 10px;\n    text-align: left;\n    transition: background-color .6s;\n  }\n  .CATEGORY-CONTAINER:hover {\n    background-color: var(--color-three);\n    cursor: pointer;\n    transition: background-color .4s;\n  }\n  .CATEGORY-CONTAINER:hover .MENU-LIST {\n    color: var(--color-one);\n    background-color: var(--color-three);\n    visibility: visible;\n    transition: color .3s,\n                background-color .4s;\n  }\n  .CATEGORY-CONTAINER:hover .ITEM:hover {\n    cursor: pointer;\n    background-color: var(--color-four);\n    transition: background-color .3s;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/menu-style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,kCAAkC;EAClC,aAAa;EACb,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,kCAAkC;EAClC;8BAC4B;AAC9B;AACA;;EAEE,gCAAgC;EAChC;8BAC4B;AAC9B;AACA;EACE,mCAAmC;EACnC,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,MAAM;EACN,SAAS;EACT,SAAS;EACT,YAAY;EACZ;;2BAEyB;AAC3B;AACA;EACE,MAAM;EACN,SAAS;EACT,YAAY;EACZ,2BAA2B;AAC7B;AACA;EACE,MAAM;EACN,SAAS;EACT,YAAY;EACZ,YAAY;EACZ;;2BAEyB;AAC3B;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB;kCACgC;AAClC;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,+BAA+B;AACjC;AACA,iDAAiD;AACjD;EACE;IACE,kCAAkC;IAClC,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,sBAAsB;IACtB,qBAAqB;IACrB,UAAU;IACV,oCAAoC;IACpC,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB;iCAC6B;EAC/B;EACA;IACE,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,iBAAiB;IACjB,QAAQ;EACV;EACA;IACE,iBAAiB;EACnB;EACA;IACE,oCAAoC;IACpC,eAAe;IACf,gCAAgC;EAClC;EACA;IACE,aAAa;IACb,mBAAmB;IACnB;6BACyB;EAC3B;EACA;IACE,WAAW;IACX;gCAC4B;EAC9B;EACA;IACE,wBAAwB;IACxB,MAAM;IACN;;2BAEuB;EACzB;EACA;IACE,WAAW;IACX,uBAAuB;EACzB;EACA;IACE,yBAAyB;IACzB,SAAS;IACT;;2BAEuB;EACzB;EACA;IACE,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,uBAAuB;EACzB;EACA;IACE,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,mCAAmC;IACnC,gCAAgC;EAClC;AACF;;AAEA,qDAAqD;AACrD;EACE;IACE,mBAAmB;IACnB,aAAa;IACb,QAAQ;IACR,iBAAiB;IACjB,wCAAwC;IACxC,mBAAmB;EACrB;EACA;IACE,aAAa;EACf;EACA;IACE,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,8BAA8B;IAC9B,+BAA+B;EACjC;EACA;IACE,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,YAAY;IACZ,QAAQ;IACR,2BAA2B;IAC3B,gBAAgB;IAChB;;kCAE8B;EAChC;EACA;IACE,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,gCAAgC;EAClC;EACA;IACE,oCAAoC;IACpC,eAAe;IACf,gCAAgC;EAClC;EACA;IACE,uBAAuB;IACvB,oCAAoC;IACpC,mBAAmB;IACnB;oCACgC;EAClC;EACA;IACE,eAAe;IACf,mCAAmC;IACnC,gCAAgC;EAClC;AACF","sourcesContent":[".MENU-CONTAINER {\n  --color-one: #253E41;\n  --color-two: #B0D0D3;\n  --color-three: #D5DFE0;\n  --color-four: #FFFFFF;\n  position: relative;\n}\n.MENU {\n  height: min-content;\n  background-color: var(--color-two);\n  display: flex;\n  gap: 2px;\n}\n.ICON {\n  position: relative;\n  height: 30px;\n  width: 55px;\n  border-radius: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  border: solid 3px var(--color-two);\n  transition: width .5s,\n              border-color .3s;\n}\n.ICON:hover,\n.ICON.OPEN:hover {\n  border-color: var(--color-three);\n  transition: width .5s,\n              border-color .3s;\n}\n.ICON div {\n  background-color: var(--color-four);\n  height: 3px;\n  width: 25px;\n  border-radius: 15px;\n  position: absolute;\n}\n.ICON div:nth-child(1) {\n  top: 0;\n  bottom: 0;\n  top: -60%;\n  margin: auto;\n  transition: top .4s,\n              bottom .4s,\n              transform .4s;\n}\n.ICON div:nth-child(2) {\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transition: opacity .3s .1s;\n}\n.ICON div:nth-child(3) {\n  top: 0;\n  bottom: 0;\n  bottom: -60%;\n  margin: auto;\n  transition: top .4s,\n              bottom .4s,\n              transform .4s;\n}\n.CATEGORY-CONTAINER {\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n  display: flex;\n  background-color: transparent;\n  align-items: center;\n  margin: 0px;\n  font-size: 18px;\n  color: var(--color-one);\n  transition: border-color .6s,\n              background-color .6s;\n}\n.CATEGORY-NAME {\n  margin: 0px;\n  user-select: none;\n}\n.MENU-LIST {\n  display: grid;\n  grid-auto-rows: max-content;\n  border-radius: 10px;\n  font-size: 16px;\n  color: transparent;\n  background-color: transparent;\n}\n.ITEM {\n  background-color: transparent;\n  transition: background-color 1s;\n}\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 768px) {\n  .MENU-CONTAINER {\n    background-color: var(--color-two);\n    position: relative;\n    border-radius: 30px;\n    cursor: pointer;\n    height: max-content;\n  }\n  .MENU {\n    position: absolute;\n    flex-direction: column;\n    top: calc(100% + 7px);\n    right: 0px;\n    border: solid 7.5px var(--color-two);\n    border-radius: 10px;\n    opacity: 0%;\n    visibility: hidden;\n    transition: opacity .5s,\n                visibility 0s .5s;\n  }\n  .CATEGORY-CONTAINER {\n    position: relative;\n    top: 100%;\n    font-size: 18px;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: 7.5px;\n    padding: 5px 10px;\n    gap: 3px;\n  }\n  .CATEGORY-CONTAINER.TAB {\n    padding: 5px 10px;\n  }\n  .CATEGORY-CONTAINER:hover {\n    background-color: var(--color-three);\n    cursor: pointer;\n    transition: background-color .4s;\n  }\n  .MENU.OPEN {\n    opacity: 100%;\n    visibility: visible;\n    transition: opacity .5s,\n                visibility 0s;\n  }\n  .ICON.OPEN {\n    width: 30px;\n    transition: width .5s,\n                border-color .3s;\n  }\n  .ICON.OPEN div:nth-child(1) {\n    transform: rotate(45deg);\n    top: 0;\n    transition: top .4s,\n              bottom .4s,\n              transform .4s;\n  }\n  .ICON.OPEN div:nth-child(2) {\n    opacity: 0%;\n    transition: opacity .2s;\n  }\n  .ICON.OPEN div:nth-child(3) {\n    transform: rotate(135deg);\n    bottom: 0;\n    transition: top .4s,\n              bottom .4s,\n              transform .4s;\n  }\n  .MENU-LIST {\n    width: min-content;\n    gap: 2px;\n    width: 100%;\n    color: var(--color-one);\n  }\n  .ITEM {\n    border-radius: 5px;\n    padding: 3px 7.5px;\n  }\n  .ITEM:hover {\n    cursor: pointer;\n    background-color: var(--color-four);\n    transition: background-color .3s;\n  }\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .MENU {\n    flex-direction: row;\n    display: flex;\n    gap: 5px;\n    padding: 0px 15px;\n    /* border: solid 3px var(--color-two); */\n    border-radius: 30px;\n  }\n  .ICON {\n    display: none;\n  }\n  .CATEGORY-CONTAINER {\n    padding: 7.5px 10px;\n    flex-direction: row;\n    width: max-content;\n    border-radius: 10px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n  .CATEGORY-CONTAINER.TAB {\n    border-radius: 10px;\n  }\n  .MENU-LIST {\n    position: absolute;\n    width: max-content;\n    left: 0px;\n    top: calc(100%);\n    padding: 3px;\n    gap: 2px;\n    border-top-left-radius: 0px;\n    overflow: hidden;\n    transition: color .3s,\n                background-color .4s,\n                visibility .0s .4s;\n  }\n  .ITEM {\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 8px;\n    padding: 5px 10px;\n    text-align: left;\n    transition: background-color .6s;\n  }\n  .CATEGORY-CONTAINER:hover {\n    background-color: var(--color-three);\n    cursor: pointer;\n    transition: background-color .4s;\n  }\n  .CATEGORY-CONTAINER:hover .MENU-LIST {\n    color: var(--color-one);\n    background-color: var(--color-three);\n    visibility: visible;\n    transition: color .3s,\n                background-color .4s;\n  }\n  .CATEGORY-CONTAINER:hover .ITEM:hover {\n    cursor: pointer;\n    background-color: var(--color-four);\n    transition: background-color .3s;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\nbody {\n  min-height: 100vh;\n  margin: 0px;\n  display: grid;\n  grid-template-rows: 65px 1fr;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  background-color: white;\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px 15px;\n  align-items: center;\n}\n.content {\n  background-color: rgb(50, 50, 60);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,4BAA4B;EAC5B,mJAAmJ;AACrJ;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,iCAAiC;AACnC","sourcesContent":["\n\nbody {\n  min-height: 100vh;\n  margin: 0px;\n  display: grid;\n  grid-template-rows: 65px 1fr;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  background-color: white;\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px 15px;\n  align-items: center;\n}\n.content {\n  background-color: rgb(50, 50, 60);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/menu-style.css
var menu_style = __webpack_require__(72);
;// CONCATENATED MODULE: ./src/menu-style.css

      
      
      
      
      
      
      
      
      

var menu_style_options = {};

menu_style_options.styleTagTransform = (styleTagTransform_default());
menu_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      menu_style_options.insert = insertBySelector_default().bind(null, "head");
    
menu_style_options.domAPI = (styleDomAPI_default());
menu_style_options.insertStyleElement = (insertStyleElement_default());

var menu_style_update = injectStylesIntoStyleTag_default()(menu_style/* default */.Z, menu_style_options);




       /* harmony default export */ const src_menu_style = (menu_style/* default */.Z && menu_style/* default.locals */.Z.locals ? menu_style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/menu.mjs


var createItem = function createItem(itemName, categoryName) {
  var item = document.createElement('div');
  item.classList.add('ITEM');
  item.setAttribute('id', "".concat(categoryName, "-").concat(itemName));
  item.textContent = itemName;
  return item;
};

var createCategory = function createCategory(currentMenu, newCategoryName, isCategory, listenerFunction) {
  var category = document.createElement('div');
  var categoryName = document.createElement('p');
  category.classList.add('CATEGORY-CONTAINER');
  categoryName.classList.add('CATEGORY-NAME');
  categoryName.textContent = newCategoryName;
  currentMenu.appendChild(category);
  category.appendChild(categoryName);

  if (isCategory) {
    var menuList = document.createElement('div');
    menuList.classList.add('MENU-LIST');
    category.appendChild(menuList);
    return {
      addMenuItem: function addMenuItem(itemName, listenerFunction) {
        var newItem = createItem(itemName, newCategoryName);
        newItem.addEventListener('click', listenerFunction);
        menuList.appendChild(newItem);
      },
      getCategoryElement: function getCategoryElement() {
        return category;
      }
    };
  } else {
    category.classList.add('TAB');
    category.addEventListener('click', listenerFunction);
    return {
      getTabElement: function getTabElement() {
        return category;
      }
    };
  }
};

var createMenuIcon = function createMenuIcon() {
  var iconContainer = document.createElement('div');
  var lineOne = document.createElement('div');
  var lineTwo = document.createElement('div');
  var lineThree = document.createElement('div');
  iconContainer.classList.add('ICON');
  iconContainer.appendChild(lineOne);
  iconContainer.appendChild(lineTwo);
  iconContainer.appendChild(lineThree);

  var toggleElementOpen = function toggleElementOpen(domElement) {
    if (domElement.classList[1] === 'OPEN') {
      domElement.classList.remove('OPEN');
    } else {
      domElement.classList.add('OPEN');
    }
  };

  return {
    toggleOpen: function toggleOpen(domElement) {
      iconContainer.onmousedown = function () {
        toggleElementOpen(domElement);
        toggleElementOpen(iconContainer);
      };

      iconContainer.ontouchstart = function () {
        iconContainer.onmousedown = null;
        toggleElementOpen(domElement);
        toggleElementOpen(iconContainer);
      };
    },
    getDomElement: function getDomElement() {
      return iconContainer;
    }
  };
};

var menu = {
  createMenu: function createMenu() {
    var menuContainer = document.createElement('div');
    var menuElement = document.createElement('div');
    menuContainer.classList.add('MENU-CONTAINER');
    menuElement.classList.add('MENU');
    var menuIcon = createMenuIcon();
    menuIcon.toggleOpen(menuElement);
    menuContainer.appendChild(menuIcon.getDomElement());
    menuContainer.appendChild(menuElement);
    return {
      addCategory: function addCategory(categoryName, listenerFunction) {
        var newCategory = createCategory(menuElement, categoryName, true);
        return newCategory;
      },
      addTab: function addTab(categoryName, listenerFunction) {
        var newTab = createCategory(menuElement, categoryName, false, listenerFunction);
        return newTab;
      },
      getDomElement: function getDomElement() {
        return menuContainer;
      }
    };
  }
};
/* harmony default export */ const src_menu = (menu);
;// CONCATENATED MODULE: ./src/index.js


var header = document.createElement('div');
header.classList.add('header');
var content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(header);
document.body.appendChild(content);
var newMenu = src_menu.createMenu();
newMenu.addTab('Home');
newMenu.addTab('About');
var clientsCategory = newMenu.addCategory('Clients');
var servicesCategory = newMenu.addCategory('Services');
newMenu.addTab('Contact');
clientsCategory.addMenuItem('San Diego Zoo');
clientsCategory.addMenuItem('PBS TV');
clientsCategory.addMenuItem('Microsoft');
servicesCategory.addMenuItem('Original Compositions');
servicesCategory.addMenuItem('Music Production');
header.appendChild(newMenu.getDomElement()); // const home = menuOne.createCategory('Home')
// const about = menuOne.createCategory('About')
// header.appendChild(menu.getMenuElement())
})();

/******/ })()
;
//# sourceMappingURL=main.js.map