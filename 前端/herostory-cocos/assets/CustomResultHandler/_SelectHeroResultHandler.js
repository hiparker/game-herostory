// @import
const mod_Global = require("../_Global");

// @export
module.exports = {
    /** @override */
    handle(oSelectHeroResult) {
        if (!oSelectHeroResult) {
            return;
        }

        if (!oSelectHeroResult.heroAvatar) {
            return;
        }

        // 我自己的英雄形象
        mod_Global.myHeroAvatar = oSelectHeroResult.heroAvatar;
        // 进入游戏场景
        cc.director.loadScene("PlayingScene");
    }
};
