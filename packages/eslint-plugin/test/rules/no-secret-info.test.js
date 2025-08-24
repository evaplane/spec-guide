/*
 * @Author: liy54 liy@54mingyuanyun.com
 * @Date: 2025-08-13 11:45:49
 * @LastEditors: liy54 liy@54mingyuanyun.com
 * @LastEditTime: 2025-08-24 18:05:23
 * @FilePath: /fe-spec/Users/evalik/promote25/spec-guide/packages/eslint-plugin/test/rules/no-secret-info.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const rule = require('../../rules/no-secret-info');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-secret-info', rule, {
  valid: [
    {
      code: 'var accessKeySecret = process.env.ACCESS_KEY_SECRET;',
    },
    {
      code: 'var password = "";',
    },
    {
      code: `
    var client ={
      accessKeyToken: process.env.ACCESS_KEY_SECRET
    };
    `,
    },
  ],

  invalid: [
    // {
    //   code: "var accessKeySecret = 'xxxx';",
    //   errors: [
    //     {
    //       message: 'Detect that the "xxxx" might be a secret token, Please check!',
    //     },
    //   ],
    // },
    {
      code: `
    var client ={
      accessKeyToken: 'xxxx'
    };
    `,
      errors: [
        {
          message: 'Detect that the "xxxx" might be a secret token, Please check!',
        },
      ],
    },
  ],
});
