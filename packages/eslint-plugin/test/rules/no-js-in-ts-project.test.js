/*
 * @Author: liy54 liy@54mingyuanyun.com
 * @Date: 2025-08-18 20:27:46
 * @LastEditors: liy54 liy@54mingyuanyun.com
 * @LastEditTime: 2025-08-24 17:47:25
 * @FilePath: /fe-spec/Users/evalik/promote25/spec-guide/packages/eslint-plugin/test/rules/no-js-in-ts-project.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const rule = require('../../rules/no-js-in-ts-project');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-js-in-ts-project', rule, {
  valid: [
    {
      filename: 'index.ts',
      code: '',
    },
    {
      filename: '.stylelintrc.js',
      code: '',
    },
    {
      filename: 'home.ts',
      code: '',
    },
  ],

  invalid: [
    {
      filename: 'home.js',
      code: '',
      errors: [
        {
          message: 'The "home.js" is not recommended in TS project',
        },
      ],
    },
  ],
});
