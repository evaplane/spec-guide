/*
 * @Author: liy54 liy@54mingyuanyun.com
 * @Date: 2025-08-18 15:32:18
 * @LastEditors: liy54 liy@54mingyuanyun.com
 * @LastEditTime: 2025-08-21 18:16:13
 * @FilePath: /spec-guide/packages/eslint-plugin/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
const path = require('path');
const requireAll = require('require-all');

// 四个规范
// requireAll支持选项，目录名称
exports.rules = requireAll({
    dirname: path.resolve(__dirname, 'rules'),
})


exports.configs = requireAll({
    dirname: path.resolve(__dirname, 'configs'),
})

exports.processors = {
    '.json': {
        preprocess(text) {
            // 转为js文件
            return [`module.exports = ${text}`];
        }
    }
}
