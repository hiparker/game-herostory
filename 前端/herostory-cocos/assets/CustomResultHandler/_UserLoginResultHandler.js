// @import
const mod_Global = require("../_Global");

// @export
module.exports = {
    /** @override */
    handle(oUserLoginResult) {
        if (!oUserLoginResult) {
            return;
        }

        if (!oUserLoginResult.userId || 
            oUserLoginResult.userId <= 0) {
            return;
        }

        // 设置我自己的用户 Id 和用户名称
        mod_Global.myUserId = oUserLoginResult.userId;
        mod_Global.myUserName = oUserLoginResult.userName;
        // 我自己的英雄形象
        mod_Global.myHeroAvatar = oUserLoginResult.heroAvatar;

        if (!mod_Global.myHeroAvatar) {
            // 如果英雄形象为空,
            // 先选择英雄
            cc.director.loadScene("SelectHeroScene");
        }
        else {
            // 进入游戏场景
            cc.director.loadScene("PlayingScene");
        }
    }
};
