// 建议将http链接转为HTTPS链接

const RULE_NAME = 'no-http-url';

module.exports = {
    name: RULE_NAME,
    meta:{
        type: 'suggestion',
        fixable: null,
        messages:{
            // 匹配到节点的值，切换为https
            noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
        },
    },
    create(context){
        return {
            // 监听到字面量节点
            Literal: function handleRequires(node){
                // 节点的值为http开头，转换为https
                if(node.value && typeof node.value ==='string' && node.value.indexOf('http:') === 0){
                    context.report({
                        node,
                        messageId: 'noHttpUrl',
                        data: {
                            url: node.value,
                        },
                    });
                }
            }   
        }
    }
}