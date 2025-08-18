const rule = require('../../rules/no-http-url');

// 测试用例的构造函数
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
    valid: [
        {
            // 有效的示例
            code: 'var str = "https://example.com";',
        }
    ],

    invalid: [
        {
            // 无效的示例
            code: 'var str = "http://example.com";',
            output: 'var str = "http://example.com";',
            errors: [
                {
                    message: 'Recommended "http://example.com" switch to HTTPS',
                },
            ],
        }
    ],
})