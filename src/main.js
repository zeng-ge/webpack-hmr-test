/* harmony import
* import编译后的结果
 * var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util.js") 
 */
import { sum } from './util.js'


const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  console.log('click')
  sum() // _util_js__WEBPACK_IMPORTED_MODULE_0__.sum()
})

console.log('module.hot', module)
if (module.hot) {
  /**
   * HMR靠的是module.hot.accept的调用，
   * hot-update.js文件包含的更新后的module信息，但是它并没有更新到__webpack_module_cache__模块缓存内部
   * accept执行后，会将更新后的模板更新到缓存中，并更新对应的模块引用
   * 
   * 会执行_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/util.js") 来替换模块引用，这样调用sum()时就能指向更新后的函数
   */
  module.hot.accept('./util.js', function (m) {
    console.log('util.js', m)
  });
}