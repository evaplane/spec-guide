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