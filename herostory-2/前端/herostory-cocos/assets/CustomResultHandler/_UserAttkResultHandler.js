// @import
const mod_Global = require("../_Global");
const CHeroAction = require("../CHeroAction");

// @export
module.exports = {
    /** @override */
    handle(oUserAttkResult) {
        if (!oUserAttkResult) {
            return;
        }

        let nAttkUserId = oUserAttkResult.attkUserId;

        if (!nAttkUserId) {
            console.error("用户 Id 无效");
            return;
        }

        if (nAttkUserId == mod_Global.myUserId) {
            return;
        }

        // 获取英雄节点
        let oHeroNode = mod_Global.heroMap[nAttkUserId.toString()];

        if (null == oHeroNode) {
            console.error(`英雄节点为空, attkUserId = ${nAttkUserId}`);
            return;
        }

        console.log(`英雄攻击, attkUserId = ${nAttkUserId}`);
        oHeroNode.getComponent(CHeroAction).attk();
    }
};
