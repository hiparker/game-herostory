// @import
const mod_Asnyc = require("../_Async");
const mod_Global = require("../_Global");
const mod_HeroCreator = require("../_HeroCreator");
const CHeroAction = require("../CHeroAction");

// @export
module.exports = {
    /** @override */
    handle(oWhoElseIsHereResult) {
        if (!oWhoElseIsHereResult) {
            return;
        }

        // 获取用户数组
        let oUserArray = oWhoElseIsHereResult.userInfo;

        if (!oUserArray || 
            !Array.isArray(oUserArray) || 
            oUserArray.length <= 0) {
            return;
        }

        for (let oParam of oUserArray) {
            if (!oParam ||
                !oParam.userId || 
                oParam.userId == mod_Global.myUserId) {
                // 如果用户 Id 为空, 
                // 或者是我自己,
                // 那么就不要创建英雄了...
                continue;
            }

            // 获取用户 Id
            let nUserId = oParam.userId;
            let strUserId = nUserId.toString();

            let oTmpHero = null;

            mod_Asnyc.serial(
                // step000
                // 看看是否已有英雄
                (funCb000) => {
                    // 看看是否已有英雄
                    oTmpHero = mod_Global.heroMap[strUserId];
                    funCb000();
                },

                // step010
                // 如果没有英雄就创建一个新的
                (funCb010) => {
                    if (oTmpHero) {
                        funCb010();
                        return;
                    }

                    // 创建并添加一个新的英雄
                    mod_HeroCreator.createAHero(oParam, (oNewHero) => {
                        if (null == oNewHero) {
                            return;
                        }

                        cc.Canvas.instance.node.addChild(oNewHero);

                        // 添加英雄到字典
                        mod_Global.heroMap[strUserId] = oNewHero;
                        oTmpHero = oNewHero;
                        funCb010();
                    });
                },

                // step020
                // 将英雄移动到指定位置
                (funCb020) => {
                    let oMoveState = oParam.moveState;
                    if (oMoveState) {
                        oTmpHero.getComponent(CHeroAction).moveToAdv(
                            oMoveState.fromPosX,
                            oMoveState.fromPosY,
                            oMoveState.toPosX,
                            oMoveState.toPosY,
                            oMoveState.startTime
                        );
                    }

                    funCb020();
                },
            );
        }
    }
};
