/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var H_Visual_Studio_Code_HOME_next_pizza_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"H:\\\\Visual Studio Code\\\\HOME\\\\next-pizza\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: H_Visual_Studio_Code_HOME_next_pizza_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1IJTNBJTVDVmlzdWFsJTIwU3R1ZGlvJTIwQ29kZSU1Q0hPTUUlNUNuZXh0LXBpenphJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1IJTNBJTVDVmlzdWFsJTIwU3R1ZGlvJTIwQ29kZSU1Q0hPTUUlNUNuZXh0LXBpenphJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNpQztBQUM5RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSDpcXFxcVmlzdWFsIFN0dWRpbyBDb2RlXFxcXEhPTUVcXFxcbmV4dC1waXp6YVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJIOlxcXFxWaXN1YWwgU3R1ZGlvIENvZGVcXFxcSE9NRVxcXFxuZXh0LXBpenphXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_constants_auth_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/constants/auth-options */ \"(rsc)/./shared/constants/auth-options.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_shared_constants_auth_options__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUM2QjtBQUU5RCxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MsdUVBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIkg6XFxWaXN1YWwgU3R1ZGlvIENvZGVcXEhPTUVcXG5leHQtcGl6emFcXGFwcFxcYXBpXFxhdXRoXFxbLi4ubmV4dGF1dGhdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL3NoYXJlZC9jb25zdGFudHMvYXV0aC1vcHRpb25zXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./prisma/prisma-client.ts":
/*!*********************************!*\
  !*** ./prisma/prisma-client.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wcmlzbWEvcHJpc21hLWNsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBTU8sTUFBTUUsU0FBU0MsV0FBV0MsWUFBWSxJQUFJSCx3QkFBd0I7QUFJekUsSUFBSUksSUFBcUMsRUFBRUYsV0FBV0MsWUFBWSxHQUFHRiIsInNvdXJjZXMiOlsiSDpcXFZpc3VhbCBTdHVkaW8gQ29kZVxcSE9NRVxcbmV4dC1waXp6YVxccHJpc21hXFxwcmlzbWEtY2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn07XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgdmFyIHByaXNtYUdsb2JhbDogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xyXG5cclxuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsVGhpcy5wcmlzbWFHbG9iYWwgPSBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWFHbG9iYWwiLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./prisma/prisma-client.ts\n");

/***/ }),

/***/ "(rsc)/./shared/constants/auth-options.ts":
/*!******************************************!*\
  !*** ./shared/constants/auth-options.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _prisma_prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/prisma/prisma-client */ \"(rsc)/./prisma/prisma-client.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || '',\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID || '',\n            clientSecret: process.env.GITHUB_SECRET || '',\n            profile (profile) {\n                return {\n                    id: profile.id,\n                    name: profile.name || profile.login,\n                    email: profile.email,\n                    image: profile.avatar_url,\n                    role: 'USER'\n                };\n            }\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'text'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials) {\n                    return null;\n                }\n                const values = {\n                    email: credentials.email\n                };\n                const findUser = await _prisma_prisma_client__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findFirst({\n                    where: values\n                });\n                if (!findUser) {\n                    return null;\n                }\n                const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.compare)(credentials.password, findUser.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                if (!findUser.verified) {\n                    return null;\n                }\n                return {\n                    id: findUser.id,\n                    email: findUser.email,\n                    name: findUser.fullName,\n                    role: findUser.role\n                };\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async signIn ({ user, account }) {\n            try {\n                if (account?.provider === 'credentials') {\n                    return true;\n                }\n                if (!user.email) {\n                    return false;\n                }\n                const findUser = await _prisma_prisma_client__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findFirst({\n                    where: {\n                        OR: [\n                            {\n                                provider: account?.provider,\n                                providerId: account?.providerAccountId\n                            },\n                            {\n                                email: user.email\n                            }\n                        ]\n                    }\n                });\n                if (findUser) {\n                    await _prisma_prisma_client__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n                        where: {\n                            id: findUser.id\n                        },\n                        data: {\n                            provider: account?.provider,\n                            providerId: account?.providerAccountId\n                        }\n                    });\n                    return true;\n                }\n                await _prisma_prisma_client__WEBPACK_IMPORTED_MODULE_3__.prisma.user.create({\n                    data: {\n                        email: user.email,\n                        fullName: user.name || 'User #' + user.id,\n                        password: (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.hashSync)(user.id.toString(), 10),\n                        verified: new Date(),\n                        provider: account?.provider,\n                        providerId: account?.providerAccountId\n                    }\n                });\n                return true;\n            } catch (error) {\n                console.error('Error [SIGNIN]', error);\n                return false;\n            }\n        },\n        async jwt ({ token }) {\n            if (!token.email) {\n                return token;\n            }\n            const findUser = await _prisma_prisma_client__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (findUser) {\n                token.id = String(findUser.id);\n                token.email = findUser.email;\n                token.name = findUser.fullName;\n                token.fullName = findUser.fullName;\n                token.role = findUser.role;\n            }\n            return token;\n        },\n        session ({ session, token }) {\n            if (session?.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixJQUFJLEdBQUdpQyxNQUFNakMsSUFBSTtZQUNsQztZQUVBLE9BQU9nQjtRQUNYO0lBQ0o7QUFDSixFQUFFIiwic291cmNlcyI6WyJIOlxcVmlzdWFsIFN0dWRpbyBDb2RlXFxIT01FXFxuZXh0LXBpenphXFxzaGFyZWRcXGNvbnN0YW50c1xcYXV0aC1vcHRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XHJcblxyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9wcmlzbWEvcHJpc21hLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBjb21wYXJlLCBoYXNoU3luYyB9IGZyb20gXCJiY3J5cHRcIjtcclxuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIHx8ICcnLFxyXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIHx8ICcnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEdpdEh1YlByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCB8fCAnJyxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIHx8ICcnLFxyXG4gICAgICAgICAgICBwcm9maWxlKHByb2ZpbGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2ZpbGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lIHx8IHByb2ZpbGUubG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHByb2ZpbGUuYXZhdGFyX3VybCxcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnVVNFUicgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAndGV4dCcgfSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5kVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIGZpbmRVc2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZmluZFVzZXIudmVyaWZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBmaW5kVXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZmluZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmluZFVzZXIuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogZmluZFVzZXIucm9sZSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnQ/LnByb3ZpZGVyID09PSAnY3JlZGVudGlhbHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPUjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlcjogYWNjb3VudD8ucHJvdmlkZXIsIHByb3ZpZGVySWQ6IGFjY291bnQ/LnByb3ZpZGVyQWNjb3VudElkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVtYWlsOiB1c2VyLmVtYWlsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGZpbmRVc2VyLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBhY2NvdW50Py5wcm92aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWQ6IGFjY291bnQ/LnByb3ZpZGVyQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSB8fCAnVXNlciAjJyArIHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoU3luYyh1c2VyLmlkLnRvU3RyaW5nKCksIDEwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpZWQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBhY2NvdW50Py5wcm92aWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZDogYWNjb3VudD8ucHJvdmlkZXJBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgW1NJR05JTl0nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGp3dCh7IHRva2VuIH0pIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghdG9rZW4uZW1haWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZmluZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaW5kVXNlcikge1xyXG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSBTdHJpbmcoZmluZFVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4uZW1haWwgPSBmaW5kVXNlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgIHRva2VuLm5hbWUgPSBmaW5kVXNlci5mdWxsTmFtZTtcclxuICAgICAgICAgICAgICAgIHRva2VuLmZ1bGxOYW1lID0gZmluZFVzZXIuZnVsbE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5yb2xlID0gZmluZFVzZXIucm9sZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgICAgICAgaWYgKHNlc3Npb24/LnVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTsiXSwibmFtZXMiOlsiR2l0SHViUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJwcmlzbWEiLCJjb21wYXJlIiwiaGFzaFN5bmMiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJuYW1lIiwibG9naW4iLCJlbWFpbCIsImltYWdlIiwiYXZhdGFyX3VybCIsInJvbGUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidmFsdWVzIiwiZmluZFVzZXIiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJ2ZXJpZmllZCIsImZ1bGxOYW1lIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb3ZpZGVyIiwiT1IiLCJwcm92aWRlcklkIiwicHJvdmlkZXJBY2NvdW50SWQiLCJ1cGRhdGUiLCJkYXRhIiwiY3JlYXRlIiwidG9TdHJpbmciLCJEYXRlIiwiZXJyb3IiLCJjb25zb2xlIiwiand0IiwidG9rZW4iLCJTdHJpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./shared/constants/auth-options.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5CVisual%20Studio%20Code%5CHOME%5Cnext-pizza&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();