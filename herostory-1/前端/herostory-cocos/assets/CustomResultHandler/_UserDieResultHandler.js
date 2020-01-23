// @import
const mod_Global = require("../_Global");
const CHeroAction = require("../CHeroAction");

// @export
module.exports = {
    /** @override */
    handle(oUserDieResult) {
        if (!oUserDieResult) {
            return;
        }

        // 获取目标用户 Id
        let nTargetUserId = oUserDieResult.targetUserId;
        let strTargetUserId = nTargetUserId.toString();

        // 从字典中获取英雄
        let oExistHero = mod_Global.heroMap[strTargetUserId];
        if (!oExistHero) {
            return;
        }

        // 英雄死亡
        oExistHero.getComponent(CHeroAction).die();
    }
};
