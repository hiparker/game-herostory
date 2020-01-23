// @import
const mod_Global = require("../_Global");
const mod_HeroCreator = require("../_HeroCreator");
const CHeroAction = require("../CHeroAction");

// @export
module.exports = {
    /** @override */
    handle(oUserEntryResult) {
        if (!oUserEntryResult) {
            return;
        }

        if (!oUserEntryResult.userId || 
            oUserEntryResult.userId == mod_Global.myUserId) {
            // 如果用户 Id 为空, 
            // 或者是我自己,
            // 那么就不要创建英雄了...
            return;
        }

        if ("PlayingScene" != cc.director.getScene().name) {
            // 如果还没有进入游戏场景,
            // 则直接退出!
            // 不处理用户进入结果
            return;
        }

        let oParam = oUserEntryResult;
        
        // 创建并添加一个新的英雄
        mod_HeroCreator.createAHero(oParam, (oNewHero) => {
            if (null == oNewHero) {
                return;
            }

            cc.Canvas.instance.node.addChild(oNewHero);

            // 获取英雄行为
            let oHeroAction = oNewHero.getComponent(CHeroAction);
            // 获取用户 Id
            let strUserId = oHeroAction.userId.toString();
            // 添加英雄到字典
            mod_Global.heroMap[strUserId] = oNewHero;
        });
    }
};
