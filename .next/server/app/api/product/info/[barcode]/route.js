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
exports.id = "app/api/product/info/[barcode]/route";
exports.ids = ["app/api/product/info/[barcode]/route"];
exports.modules = {

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&page=%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute.ts&appDir=E%3A%5Cgit%5Cintership_v2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cgit%5Cintership_v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&page=%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute.ts&appDir=E%3A%5Cgit%5Cintership_v2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cgit%5Cintership_v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_git_intership_v2_src_app_api_product_info_barcode_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/product/info/[barcode]/route.ts */ \"(rsc)/./src/app/api/product/info/[barcode]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/product/info/[barcode]/route\",\n        pathname: \"/api/product/info/[barcode]\",\n        filename: \"route\",\n        bundlePath: \"app/api/product/info/[barcode]/route\"\n    },\n    resolvedPagePath: \"E:\\\\git\\\\intership_v2\\\\src\\\\app\\\\api\\\\product\\\\info\\\\[barcode]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_git_intership_v2_src_app_api_product_info_barcode_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0JTJGaW5mbyUyRiU1QmJhcmNvZGUlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb2R1Y3QlMkZpbmZvJTJGJTVCYmFyY29kZSU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb2R1Y3QlMkZpbmZvJTJGJTVCYmFyY29kZSU1RCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDZ2l0JTVDaW50ZXJzaGlwX3YyJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDZ2l0JTVDaW50ZXJzaGlwX3YyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QjtBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcZ2l0XFxcXGludGVyc2hpcF92MlxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0XFxcXGluZm9cXFxcW2JhcmNvZGVdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9kdWN0L2luZm8vW2JhcmNvZGVdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdC9pbmZvL1tiYXJjb2RlXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZHVjdC9pbmZvL1tiYXJjb2RlXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXGdpdFxcXFxpbnRlcnNoaXBfdjJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZHVjdFxcXFxpbmZvXFxcXFtiYXJjb2RlXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&page=%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute.ts&appDir=E%3A%5Cgit%5Cintership_v2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cgit%5Cintership_v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/product/info/[barcode]/route.ts":
/*!*****************************************************!*\
  !*** ./src/app/api/product/info/[barcode]/route.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nasync function GET(_req, context) {\n    const { barcode } = context.params;\n    const backendBase = process.env.BACKEND_URL || \"http://localhost:3000\";\n    const targetUrl = `${backendBase.replace(/\\/$/, \"\")}/product/info/${encodeURIComponent(barcode)}`;\n    try {\n        const res = await fetch(targetUrl, {\n            next: {\n                revalidate: 0\n            }\n        });\n        const contentType = res.headers.get(\"content-type\") || \"application/json\";\n        const body = await res.text();\n        return new Response(body, {\n            status: res.status,\n            headers: {\n                \"content-type\": contentType\n            }\n        });\n    } catch (err) {\n        console.error(\"API proxy error:\", err);\n        return new Response(JSON.stringify({\n            success: false,\n            message: \"Proxy request failed\"\n        }), {\n            status: 502,\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9kdWN0L2luZm8vW2JhcmNvZGVdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxlQUFlQSxJQUFJQyxJQUFpQixFQUFFQyxPQUF3QztJQUNuRixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxRQUFRRSxNQUFNO0lBRWxDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0lBQy9DLE1BQU1DLFlBQVksR0FBR0osWUFBWUssT0FBTyxDQUFDLE9BQU8sSUFBSSxjQUFjLEVBQUVDLG1CQUFtQlIsVUFBVTtJQUVqRyxJQUFJO1FBQ0YsTUFBTVMsTUFBTSxNQUFNQyxNQUFNSixXQUFXO1lBQUVLLE1BQU07Z0JBQUVDLFlBQVk7WUFBRTtRQUFFO1FBRTdELE1BQU1DLGNBQWNKLElBQUlLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQjtRQUN2RCxNQUFNQyxPQUFPLE1BQU1QLElBQUlRLElBQUk7UUFFM0IsT0FBTyxJQUFJQyxTQUFTRixNQUFNO1lBQ3hCRyxRQUFRVixJQUFJVSxNQUFNO1lBQ2xCTCxTQUFTO2dCQUFFLGdCQUFnQkQ7WUFBWTtRQUN6QztJQUNGLEVBQUUsT0FBT08sS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUMsb0JBQW9CRjtRQUNsQyxPQUFPLElBQUlGLFNBQVNLLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1lBQU9DLFNBQVM7UUFBdUIsSUFBSTtZQUN2RlAsUUFBUTtZQUNSTCxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIkU6XFxnaXRcXGludGVyc2hpcF92Mlxcc3JjXFxhcHBcXGFwaVxccHJvZHVjdFxcaW5mb1xcW2JhcmNvZGVdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoX3JlcTogTmV4dFJlcXVlc3QsIGNvbnRleHQ6IHsgcGFyYW1zOiB7IGJhcmNvZGU6IHN0cmluZyB9IH0pIHtcbiAgY29uc3QgeyBiYXJjb2RlIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBiYWNrZW5kQmFzZSA9IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG4gIGNvbnN0IHRhcmdldFVybCA9IGAke2JhY2tlbmRCYXNlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX0vcHJvZHVjdC9pbmZvLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGJhcmNvZGUpfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0YXJnZXRVcmwsIHsgbmV4dDogeyByZXZhbGlkYXRlOiAwIH0gfSk7XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwge1xuICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBjb250ZW50VHlwZSB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQVBJIHByb3h5IGVycm9yOlwiLCBlcnIpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQcm94eSByZXF1ZXN0IGZhaWxlZFwiIH0pLCB7XG4gICAgICBzdGF0dXM6IDUwMixcbiAgICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkdFVCIsIl9yZXEiLCJjb250ZXh0IiwiYmFyY29kZSIsInBhcmFtcyIsImJhY2tlbmRCYXNlIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwidGFyZ2V0VXJsIiwicmVwbGFjZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcyIsImZldGNoIiwibmV4dCIsInJldmFsaWRhdGUiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJib2R5IiwidGV4dCIsIlJlc3BvbnNlIiwic3RhdHVzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/product/info/[barcode]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&page=%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Finfo%2F%5Bbarcode%5D%2Froute.ts&appDir=E%3A%5Cgit%5Cintership_v2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cgit%5Cintership_v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();