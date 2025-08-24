/*
 * @Author: liy54 liy@54mingyuanyun.com
 * @Date: 2025-08-18 16:14:26
 * @LastEditors: liy54 liy@54mingyuanyun.com
 * @LastEditTime: 2025-08-24 17:31:41
 * @FilePath: /spec-guide/packages/eslint-plugin/rules/no-broad-sematic-versioning.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 语言版本问题
const RULE_NAME = 'no-broad-semantic-versioning';
const path = require('path');

module.exports = {
    name: RULE_NAME, 
    meta:{
        type: 'problem',
        fixable: null, // 是否可以自动修复
        messages:{
            // 匹配到节点的值，切换为https
            noBroadSemanticVersioning: 
             'The "{{dependencyName}}" is not recommended to use "{{versioning}}"',
        },
    },
    create(context){ // 创建规则
        if(path.basename(context.getFilename())!== 'package.json'){ 
            return {};
        }

        return {
            Property: function handleRequires(node){
                if(node.key 
                    && node.key.value
                    && (node.key.value === 'dependencies' || node.key.value === 'devDependencies' 
                    && node.value 
                    && node.value.properties)
                ){
                    node.value.properties.forEach(prop => {
                        if(prop.key 
                            && prop.key.value
                        ){
                            const dependencyName = prop.key.value;
                            const dependencyVersion = prop.value.value;
                            if(dependencyVersion.indexOf('*') > -1 
                            || dependencyVersion.indexOf('x') > -1
                            || dependencyVersion.indexOf('>') > -1){
                                context.report({
                                    loc: prop.loc,
                                    messageId: 'noBroadSemanticVersioning',
                                    data: {
                                        dependencyName,
                                        versioning: dependencyVersion,
                                    },
                                });
                            }
                        }
                    })    
                }
            }
            
        }
    }
        
}