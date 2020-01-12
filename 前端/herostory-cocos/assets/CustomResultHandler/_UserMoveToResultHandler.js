// @import
const mod_Global = require("../_Global");
const CHeroAction = require("../CHeroAction");

// @export
module.exports = {
    /** @override */
    handle(oUserMoveToResult) {
        if (!oUserMoveToResult) {
            return;
        }

        let nMoveUserId = oUserMoveToResult.moveUserId;

        if (!nMoveUserId) {
            console.error("用户 Id 无效");
            return;
        }

        if (nMoveUserId == mod_Global.myUserId) {
            // 如果是自己就不要移动了,
            return;
        }

        // 获取英雄节点
        let oHeroNode = mod_Global.heroMap[nMoveUserId.toString()];

        if (null == oHeroNode) {
            console.error(`英雄节点为空, moveUserId = ${nMoveUserId}`);
            return;
        }

        let nPosX_0 = oUserMoveToResult.moveFromPosX;
        let nPosY_0 = oUserMoveToResult.moveFromPosY;
        let nPosX_1 = oUserMoveToResult.moveToPosX;
        let nPosY_1 = oUserMoveToResult.moveToPosY;
        let nMoveStartTime = oUserMoveToResult.moveStartTime;

        console.log(`英雄移动, moveUserId = ${nMoveUserId}, posX_0 = ${nPosX_0}, posY_0 = ${nPosY_0}, posX_1 = ${nPosX_1}, posY_1 = ${nPosY_1}`);

        // 执行高级移动
        oHeroNode.getComponent(CHeroAction).moveToAdv(
            nPosX_0, nPosY_0, nPosX_1, nPosY_1, nMoveStartTime
        );
    }
};
