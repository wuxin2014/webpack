 (() => { // webpackBootstrap
 	"use strict";
  	// 定义模块对象
 	var __webpack_modules__ = ({
		"./src/utils.js":
		((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__);
			// defineProperty => _webpack_exports
			__webpack_require__.d(__webpack_exports__, {
				sum: () => (/* binding */ sum),
				uniue: () => (/* binding */ uniue)
			});
			const sum = (a, b) => {
				return a + b;
			};
			const uniue = arr => {
				return arr;
			};
		})
 	});
 	// The module cache
 	var __webpack_module_cache__ = {};
 	
 	// 加载函数
 	function __webpack_require__(moduleId) {
 		var cachedModule = __webpack_module_cache__[moduleId];
    	// 先取缓存有则返回
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
    	// 无记录到缓存中
 		var module = __webpack_module_cache__[moduleId] = {
 			exports: {}
 		};
 	
 		// 根据moduleId从模块对象中其执行函数
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		return module.exports;
 	}
 	
 	/* webpack/runtime/define property getters */
 	(() => {
 		// define getter functions for harmony exports
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	
 	/* webpack/runtime/hasOwnProperty shorthand */
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	
 	/* webpack/runtime/make namespace object */
 	(() => {
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
 	
	// 最开始执行函数
	var __webpack_exports__ = {};
	(() => {
		__webpack_require__.r(__webpack_exports__);
		// main.js中 import 那一行
		var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils.js");
		// 打印那一行
		console.log('main.js===', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sum)(1, 2));
	})();
})();

// const sum = (a, b) => { return (a + b) }
// (0, sum)(1, 2)
//# sourceMappingURL=bundle.js.map