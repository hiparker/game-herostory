// @import
const mod_Global = require("../_Global");
const CHeroAction = require("../CHeroAction");

// @export
module.exports = {
    /** @override */
    handle(oUserSubtractHpResult) {
        if (!oUserSubtractHpResult) {
            return;
        }

        // 获取目标用户 Id
        let nTargetUserId = oUserSubtractHpResult.targetUserId;
        let strTargetUserId = nTargetUserId.toString();
        // 获取减血量
        let nSubtractHp = Math.abs(oUserSubtractHpResult.subtractHp);

        // 从字典中获取英雄
        let oExistHero = mod_Global.heroMap[strTargetUserId];
        if (!oExistHero) {
            return;
        }

        // 令英雄减血
        oExistHero.getComponent(CHeroAction).subtractHp(nSubtractHp);
    }
};
