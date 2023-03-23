// eslint-disable-next-line no-unused-vars
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/* eslint-disable no-unused-vars */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Ubuntu+Mono:ital@1&family=Work+Sans:wght@400;500;800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  font-size: 45px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  max-width: 1000px;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.meal img {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  width: 70%;\\r\\n  height: 30px;\\r\\n  font-size: medium;\\r\\n}\\r\\n\\r\\n.comment:hover {\\r\\n  background: linear-gradient(135deg, rgb(51, 255, 0), #ff00a6);\\r\\n  color: #fff;\\r\\n  margin-top: 1rem;\\r\\n  padding: 0.5rem 0.9rem;\\r\\n  border-radius: 8px;\\r\\n  border: none;\\r\\n\\r\\n  /* transition: all 0.5s ease-in-out; */\\r\\n}\\r\\n\\r\\n.header {\\r\\n  background-color: black;\\r\\n  padding: 1%;\\r\\n  height: auto;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.header ul {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  font-weight: bolder;\\r\\n  font-family: cursive;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.header ul li {\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 90vh;\\r\\n  background: linear-gradient(135deg, #3f0, #ff00a5);\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.meal {\\r\\n  padding: 1rem;\\r\\n  margin: 1rem auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 0 10rem;\\r\\n}\\r\\n\\r\\n.meal-item {\\r\\n  border-radius: 1rem;\\r\\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\\r\\n  margin: 1rem auto;\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 300px;\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.meal-item:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\\r\\n}\\r\\n\\r\\n.meal-img img {\\r\\n  width: 230px;\\r\\n  height: 200px;\\r\\n  margin-top: 0.5rem;\\r\\n  border: 2px solid transparent;\\r\\n  border-radius: 1rem;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.meal-name {\\r\\n  padding: 1rem 0.5rem;\\r\\n}\\r\\n\\r\\n.meal-name p {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  height: 70px;\\r\\n  border: 1.5px solid black;\\r\\n  color: hsla(240, 7%, 100%, 1);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  font-size: 30px;\\r\\n  align-items: center;\\r\\n  background-color: black;\\r\\n  padding-left: 2rem;\\r\\n}\\r\\n\\r\\n.modal-details {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  color: #fff;\\r\\n  background: slategray;\\r\\n  border-radius: 1rem;\\r\\n  width: 60%;\\r\\n  height: 60%;\\r\\n  overflow-y: scroll;\\r\\n  display: none;\\r\\n  padding: 2rem 0;\\r\\n}\\r\\n\\r\\n.modal-details::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.modal-details::-webkit-scrollbar-thumb {\\r\\n  background: #f0f0f0;\\r\\n  border-radius: 2rem;\\r\\n}\\r\\n\\r\\n/* js related */\\r\\n.showModal {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.modal-details-content {\\r\\n  margin: 3rem;\\r\\n}\\r\\n\\r\\n.modal-close-btn {\\r\\n  position: absolute;\\r\\n  right: 2rem;\\r\\n  top: 2rem;\\r\\n  font-size: 1.8rem;\\r\\n  background: #fff;\\r\\n  border: none;\\r\\n  width: 35px;\\r\\n  height: 35px;\\r\\n  border-radius: 50%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\n.modal-title {\\r\\n  letter-spacing: 1px;\\r\\n  padding-bottom: 1rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.modal-meal-img img {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  border-radius: 15%;\\r\\n  margin: 0 auto;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.item-details {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 0 7rem;\\r\\n}\\r\\n\\r\\n#list-meal {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 0 1rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 10%;\\r\\n  border-radius: 50px;\\r\\n  height: 80px;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n  background-size: 100%;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  margin-top: 2rem;\\r\\n  padding: 0.5rem 0.9rem;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.show-comments {\\r\\n  letter-spacing: 1px;\\r\\n  padding-bottom: 1rem;\\r\\n  text-align: center;\\r\\n  font-family: cursive;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  display: flex;\\r\\n  font-size: 41px;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 0 7rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 8px;\\r\\n  border: 1px solid black;\\r\\n  margin-bottom: 1rem;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n  border: 1px solid black;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.comment-submit {\\r\\n  margin-top: 2rem;\\r\\n  padding: 0.5rem 0.9rem;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  list-style: none;\\r\\n  padding-left: 20px;\\r\\n}\\r\\n\\r\\n.like-div {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.like-count {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  background-color: white;\\r\\n  color: black;\\r\\n  border: 2px solid black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.liked {\\r\\n  background-color: red;\\r\\n  color: white;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Api */ \"./src/modules/Api.js\");\n/* harmony import */ var _modules_keyComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyComment.js */ \"./src/modules/keyComment.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* const url =\r\n  \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\";\r\nconst commentKey = \"oVkHOTfBlO1iBwGU9e4E\"; */\r\n\r\nconst userName = document.getElementById(\"input-name\");\r\nconst comment = document.getElementById(\"comment-text\");\r\nconst submit = document.querySelector(\".comment-submit\");\r\n\r\n(0,_modules_Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_keyComment_js__WEBPACK_IMPORTED_MODULE_2__.getComments)();\r\n(0,_modules_keyComment_js__WEBPACK_IMPORTED_MODULE_2__.postComment)();\r\n\r\n\r\nconst clearInput = () => {\r\n  userName.value = \"\";\r\n  comment.value = \"\";\r\n};\r\n\r\nsubmit.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_keyComment_js__WEBPACK_IMPORTED_MODULE_2__.postComment)();\r\n  clearInput();\r\n  console.log(\"heloooo\");\r\n});\r\n\r\n\r\n(0,_modules_Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nfetch(\"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${meal.idMeal}/\")\r\n  .then(response => response.json())\r\n  .then(object =>{\r\n    (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(object);\r\n  })\r\n  .catch(error => console.log(error));\r\n\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/Api.js":
/*!****************************!*\
  !*** ./src/modules/Api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mealinfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealinfo.js */ \"./src/modules/mealinfo.js\");\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like.js */ \"./src/modules/like.js\");\n\r\n\r\n\r\n\r\n\r\nconst foodItemsDiv = document.getElementById(\"list-meal\");\r\n\r\n// event listeners\r\nfoodItemsDiv.addEventListener(\"click\", _mealinfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\nconst displayFoods = () => {\r\n  const likesData = JSON.parse(localStorage.getItem(\"likesData\")) || {};\r\n  \r\n  fetch(\"https://www.themealdb.com/api/json/v1/1/search.php?f=e\")\r\n    .then((res) => res.json())\r\n    .then((data) => {\r\n      let html = \"\";\r\n      data.meals.forEach((meal) => {\r\n        const likes = likesData[meal.idMeal] || 0;\r\n        html += `\r\n          <div class=\"meal-item\" data-id=\"${meal.idMeal}\"> \r\n            <div class=\"meal-img\">     \r\n              <img src=\"${meal.strMealThumb}\">\r\n            </div>\r\n            <div class=\"meal-name\">\r\n              <div class=\"like-div\">\r\n                <p>${meal.strMeal}</p>\r\n                <li class=\"like\"><button class=\"like-btn\"><i class=\"fa-regular fa-heart\"></i></button></li>\r\n              </div>\r\n              <span class=\"like-count\">${likes} Likes</span>\r\n              <button class=\"comment\">Comment</button>\r\n            </div>\r\n          </div>\r\n        `;\r\n      });\r\n\r\n      foodItemsDiv.innerHTML = html;\r\n\r\n      const likeButtons = document.querySelectorAll(\".like-btn\");\r\n      likeButtons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n          const mealId = btn.closest(\".meal-item\").getAttribute(\"data-id\");\r\n          fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${mealId}/`, { method: \"POST\" })\r\n            .then((response) => response.json())\r\n            .then((object) => {\r\n              const likeCounter = btn.closest(\".meal-item\").querySelector(\".like-count\");\r\n              let likes = parseInt(likeCounter.innerHTML);\r\n              likes++;\r\n              if (likes === 1) {\r\n                likeCounter.innerHTML = `${likes} Like`;\r\n              } else {\r\n                likeCounter.innerHTML = `${likes} Likes`;\r\n              }\r\n              btn.style.backgroundColor = \"red\";\r\n              (0,_like_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object);\r\n              // Store the likes data in localStorage\r\n              const likesData = JSON.parse(localStorage.getItem(\"likesData\")) || {};\r\n              likesData[mealId] = likes;\r\n              localStorage.setItem(\"likesData\", JSON.stringify(likesData));\r\n            });\r\n        });\r\n      });      \r\n    });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFoods);\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/Api.js?");

/***/ }),

/***/ "./src/modules/keyComment.js":
/*!***********************************!*\
  !*** ./src/modules/keyComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n// import displayFoods from './Api.js';\r\n\r\n\r\nconst url = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\";\r\nconst commentKey = \"oVkHOTfBlO1iBwGU9e4E\";\r\n\r\nconst getComments = async (id) => {\r\nconst result = await fetch(`${url}${commentKey}/comments?item_id=${id}`);\r\nconst dataResult = await result.json();\r\nreturn dataResult;\r\n};\r\n\r\nconst postComment = async (id, name, comment) => {\r\nawait fetch(`${url}${commentKey}/comments`, {\r\nmethod: \"POST\",\r\nbody: JSON.stringify({\r\nitem_id: id,\r\nusername: name,\r\ncomment: comment,\r\n}),\r\nheaders: {\r\n\"Content-type\": \"application/json; charset=UTF-8\",\r\n},\r\n});\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/keyComment.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfetch(\"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WxdOldIVe5Cky63nkl0B/likes/${meal.idMeal}/\")\r\n    .then(response => response.json())\r\n    .then(object =>{\r\n        fetchLikes(object);\r\n    });\r\n    function fetchLikes(object, btn) {\r\n      const likeDiv = btn.closest(\".like-div\");\r\n      const likeCount = likeDiv.querySelector(\".like-count\");\r\n      let likes = parseInt(likeCount.innerHTML);\r\n      likes++;\r\n      if (likes === 1) {\r\n        likeCount.innerHTML = `${likes} Like`;\r\n      } else {\r\n        likeCount.innerHTML = `${likes} Likes`;\r\n      }\r\n      btn.style.backgroundColor = \"red\";\r\n\r\n}\r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/mealInfoModel.js":
/*!**************************************!*\
  !*** ./src/modules/mealInfoModel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalDetailsContent = document.querySelector(\".modal-details-content\");\r\n\r\nfunction mealInfoModal(meal) {\r\n  const {\r\n    strMeal,\r\n    strMealThumb,\r\n    strCategory,\r\n    strArea,\r\n    strIngredient4,\r\n    strMeasure1,\r\n  } = meal[0];\r\n\r\n  const html = `\r\n    <div class=\"modal-meal-img\">\r\n      <img src=\"${strMealThumb}\" alt=\"\" />\r\n    </div>\r\n    <h2 class=\"modal-title\">${strMeal}</h2>\r\n    <div class=\"item-details\">\r\n      <div>\r\n        <p>${strCategory}</p>\r\n        <p>${strArea}</p>\r\n      </div>\r\n      <div>\r\n        <p>${strIngredient4}</p>\r\n        <p>${strMeasure1}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"comment-btn\">\r\n        <h3 class=\"modal-title\">Comments <span class=\"comment-count\"></span></h3>\r\n    </div>\r\n    <div class=\"show-comments\" data-meal=\"${strMeal}\"></div>\r\n    <div class=\"add-comment\">\r\n      <form action=\"#\" class=\"form\">\r\n        <h3>Add a comment</h3>\r\n        <input type=\"text\" id=\"name\" placeholder=\"Your name\" />\r\n        <textarea name=\"comment\" id=\"comment-text\" cols=\"30\" rows=\"2\" placeholder=\"Your comment\"></textarea>\r\n        <button class=\"comment-submit\" type=\"Submit\" >Comment</button>\r\n      </form>\r\n    </div>\r\n  `;\r\n\r\n  modalDetailsContent.innerHTML = html;\r\n  modalDetailsContent.parentElement.classList.add(\"showModal\");\r\n\r\n  const commentForm = document.querySelector(\".form\");\r\n  const commentSection = document.querySelector(\".show-comments\");\r\n  const nameInput = document.querySelector(\"#name\");\r\n  const commentInput = document.querySelector(\"#comment-text\");\r\n  const mealName = commentSection.getAttribute(\"data-meal\");\r\n\r\n  commentForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const comment = {\r\n      name: nameInput.value,\r\n      comment: commentInput.value,\r\n    };\r\n\r\n    let comments = JSON.parse(localStorage.getItem(`comments_${mealName}`)) || [];\r\n\r\n    // Add the new comment to the array and update local storage\r\n    comments.push(comment);\r\n    localStorage.setItem(`comments_${mealName}`, JSON.stringify(comments));\r\n\r\n    // Clear the form inputs\r\n    nameInput.value = \"\";\r\n    commentInput.value = \"\";\r\n\r\n    // Display the new comment in the comment section\r\n    const html = `<div class=\"comment-info\">\r\n                    <p class=\"comment-info\">${comment.name} : ${comment.comment}</p>\r\n                  </div>`;\r\n    commentSection.insertAdjacentHTML(\"beforeend\", html);\r\n  });\r\n\r\n  // Display any existing comments on page load\r\nlet comments = JSON.parse(localStorage.getItem(`comments_${mealName}`)) || [];\r\nconst commentCount = comments.length;\r\nconst commentCountElement = document.querySelector(\".comment-count\");\r\ncommentCountElement.textContent = `(${commentCount})`;\r\ncomments.forEach((comment) => {\r\n  const html = `<div class=\"comment-info\">\r\n    <p class=\"comment-info\">${comment.name} : ${comment.comment}</p>\r\n  </div>`;\r\n  commentSection.insertAdjacentHTML(\"beforeend\", html);\r\n});\r\n\r\nconst commentsDisplay = document.getElementById(\"commentsDisplay\");\r\n/* eslint-disable */\r\n  const myComments = () => {\r\n    getData(`${url}${key}/comments?item_id=${idMeal}`)\r\n      .then(async (res) => {\r\n        const array = await res.json();\r\n        return array;\r\n      })\r\n      .then((array) => {\r\n        const gege = array\r\n          .map(\r\n            (items) => `\r\n    <div class=\"left\">\r\n      <p class=\"eachScore\">${items.creation_date} \r\n      <span>${items.username}:\r\n      </span> \r\n      </p>\r\n      <span>\r\n      <p class=\"numberSc\" id=\"comreload\">${items.comment}</p>\r\n      </span>\r\n      </div>`\r\n          )\r\n          .join(\" \");\r\n        commentsDisplay.innerHTML = gege;\r\n      });\r\n  };\r\n  myComments();\r\n  \r\n  setTimeout(() => {\r\n    const total = commentCount();\r\n    const counter = document.getElementById(\"modal-title\");\r\n    counter.innerHTML = `Comments (${total})`;\r\n  }, 2000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealInfoModal);\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/mealInfoModel.js?");

/***/ }),

/***/ "./src/modules/mealinfo.js":
/*!*********************************!*\
  !*** ./src/modules/mealinfo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mealInfoModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealInfoModel.js */ \"./src/modules/mealInfoModel.js\");\n\r\n\r\nconst modalDetailsContent = document.querySelector(\".modal-details-content\");\r\nconst recipeCloseBtn = document.getElementById(\"modal-close-btn\");\r\n\r\nrecipeCloseBtn.addEventListener(\"click\", () => {\r\n  modalDetailsContent.parentElement.classList.remove(\"showModal\");\r\n});\r\n\r\n// get the meal\r\nfunction getMealInfo(e) {\r\n  e.preventDefault();\r\n  if (e.target.classList.contains(\"comment\")) {\r\n    const mealItem = e.target.parentElement.parentElement;\r\n    fetch(\r\n      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,\r\n    )\r\n      .then((response) => response.json())\r\n      .then((data) => (0,_mealInfoModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.meals));\r\n  }\r\n}\r\n\r\n// create a modal\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealInfo);\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/mealinfo.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f71312066fafe628548.png\";\n\n//# sourceURL=webpack://javascriptcapstone/./src/images/logo.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module["default"]) :
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === "object") return globalThis;
/******/ 			try {
/******/ 				return this || new Function("return this")();
/******/ 			} catch (e) {
/******/ 				if (typeof window === "object") return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== "undefined" && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
/******/ 			}
/******/ 			Object.defineProperty(exports, "__esModule", { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src;
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/* eslint-disable no-unused-vars */