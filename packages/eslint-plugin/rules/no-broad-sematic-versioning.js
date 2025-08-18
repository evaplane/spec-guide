// 语言版本问题
const RULE_NAME = 'no-broad-semantic-versioning';
const path = require('path');

module.exports = {
    name: RULE_NAME,
    meta:{
        type: 'problem',
        fixable: null,
        messages:{
            // 匹配到节点的值，切换为https
            noBroadSemanticVersioning: 
             'The "{{dependencyName}}" is not recommended to use "{{versioning}}"',
        },
    },
    create(context){
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