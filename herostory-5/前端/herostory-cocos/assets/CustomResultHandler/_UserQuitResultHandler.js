// @import
const mod_Global = require("../_Global");

// @export
module.exports = {
    /** @override */
    handle(oUserQuitResult) {
        if (!oUserQuitResult) {
            return;
        }

        // 获取离场用户 Id
        let nQuitUserId = oUserQuitResult.quitUserId;
        let strQuitUserId = nQuitUserId.toString();
        // 取出当前用户
        let oCurrUser = mod_Global.heroMap[strQuitUserId];

        if (oCurrUser) {
            // 从画布中移除用户
            cc.Canvas.instance.node.removeChild(oCurrUser);
        }
    }
};
