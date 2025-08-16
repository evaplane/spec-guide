module.exports = {
    defaultSeverity: "warning",
    plugins: ["stylelint-scss"], // 强制执行 SCSS 特定的约定（包）。
    rules: {
         /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    // recommended rules
    // 规则 https://www.stylelint.cn/user-guide/rules
    "at-rule-no-unknown": null, // 不允许未知的规则。	
    "scss/at-rule-no-unknown": true,
    'block-no-empty': null, // 不允许空块
    'color-no-invalid-hex': true, // 禁止无效的十六进制颜色
    'comment-no-empty': true, // 禁止空的注释
    'declaration-block-no-duplicate-properties': [ // 禁止在声明块中出现重复的属性
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'], // 忽略具有不同值的连续重复属性。
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true, // 禁止在声明块中出现简写属性覆盖
    'font-family-no-duplicate-names': true, // 禁止在字体声明中出现重复的名称
    'function-calc-no-unspaced-operator': true, // 禁止在 calc 函数中出现不带空格的操作符 正确：a { top: calc(1px + 2px); }
    'function-linear-gradient-no-nonstandard-direction': true, // 禁止在 linear-gradient 函数中出现非标准的方向
    'keyframe-declaration-no-important': true, // 禁止在 keyframes 声明中出现 !important
    'media-feature-name-no-unknown': true, // 不允许未知的媒体功能名称。
     // 禁止在覆盖更高特异性的选择器之后使用较低特异性的选择器。	
    'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
    'no-duplicate-at-import-rules': true, // 禁止在 @import 规则中出现重复的规则
    'no-duplicate-selectors': true, // 禁止在 CSS 规则中出现重复的选择器
    'no-empty-source': null, // 不允许空源
    'no-extra-semicolons': true,  // 禁止多余的分号
    'no-invalid-double-slash-comments': true, // 禁止在 CSS 规则中出现无效的双����注释
    'property-no-unknown': true, // 不允许未知属性。	
    'selector-pseudo-class-no-unknown': [ // 不允许未知的伪类选择器。	
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],

    'selector-pseudo-element-no-unknown': true, // 不允许未知的伪元素选择器。	
    'string-no-newline': true, // 不允许字符串中出现无效的换行符。	
    'unit-no-unknown': [ // 不允许未知单位。	
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
       /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    indentation: 2, //  设置缩进为 2 个空格。
    'block-closing-brace-newline-before': 'always-multi-line', // 在多行块的闭合大括号前要求有换行。
    'block-closing-brace-space-before': 'always-single-line', // 单行块的闭合大括号前要求有空格。
    'block-opening-brace-newline-after': 'always-multi-line', // 在多行块的开放大括号后要求有换行。
    'block-opening-brace-space-before': 'always', // 在开放大括号前始终要求有空格。
    'block-opening-brace-space-after': 'always-single-line', // 在单行块的开放大括号后要求有空格。
    'color-hex-case': 'lower', // 要求十六进制颜色使用小写字母。
    'color-hex-length': 'short', // 要求尽可能使用短格式的十六进制颜色。
    'comment-whitespace-inside': 'always', // 要求注释标记内部有空白。
    'declaration-colon-space-before': 'never', // 在声明中冒号之前不允许有空格。
    'declaration-colon-space-after': 'always', // 在声明中冒号之后要求有空格。
    'declaration-block-single-line-max-declarations': 1, // 限制单行中的声明数量为 1。
    'declaration-block-trailing-semicolon': [ // 要求声明块末尾必须有分号，并将其设置为错误级别。
      'always',
      {
        severity: 'error',
      },
    ],
    'length-zero-no-unit': [ // 禁止零长度的单位，但忽略自定义属性。
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'max-line-length': 100, // 限制每行最大长度为 100 个字符。
    'selector-max-id': 0, // 不允许使用id选择器
    'value-list-comma-space-after': 'always-single-line', // 在单行值列表的逗号后要求有空格。

    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    // 正确
    //错误
    'scss/double-slash-comment-whitespace-inside': 'always', // 表示在双斜杠注释内部应该始终有空白。
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
}