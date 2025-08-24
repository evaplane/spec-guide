/*
 * @Author: liy54 liy@54mingyuanyun.com
 * @Date: 2025-08-24 17:47:51
 * @LastEditors: liy54 liy@54mingyuanyun.com
 * @LastEditTime: 2025-08-24 18:01:59
 * @FilePath: /fe-spec/Users/evalik/promote25/spec-guide/packages/eslint-plugin/rules/no-serect-info.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const RULE_NAME = 'no-serect-info';

const DEFAULT_DANGEROUS_KEYS = ['serect','token','password']

module.exports = {
    name: RULE_NAME,
    meta:{
        type: 'problem',
        fixable: null,
        messages:{
            noSecretInfo: 'Detect that the "{{secret}}" might be a secret token, Please check!'
        },
    },
    create(context){
        const ruleOptions = context.options[0] || {}
        let {dangerousKeys = [], autoMerge = true} = ruleOptions

        if(dangerousKeys.length === 0){
            dangerousKeys = DEFAULT_DANGEROUS_KEYS;
        }else if(autoMerge){
            dangerousKeys = [...new Set(...DEFAULT_DANGEROUS_KEYS,...dangerousKeys)]
        }

        const reg = new RegExp(`(${dangerousKeys.join('|')})$`)

        return {
            Literal: function handleRequires(node) {
                if (
                node.value &&
                node.parent &&
                ((node.parent.type === 'VariableDeclarator' &&
                    node.parent.id &&
                    node.parent.id.name &&
                    reg.test(node.parent.id.name.toLocaleLowerCase())) ||
                    (node.parent.type === 'Property' &&
                    node.parent.key &&
                    node.parent.key.name &&
                    reg.test(node.parent.key.name.toLocaleLowerCase())))
                ) {
                context.report({
                    node,
                    messageId: 'noSecretInfo',
                    data: {
                        secret: node.value,
                    },
                });
                }
            },
        };
    }
}
