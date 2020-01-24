// @import
const CHeroAction = require("./CHeroAction");

// @export
module.exports = {
    /**
     * 根据名称创建英雄
     * 
     * @param {{ userId: number, userName: string, heroAvatar: string, }} oParam 参数对象
     * @param {(oNewHero: any) => void} funCb 回调函数
     * @return {void}
     */
    createAHero(oParam, funCb) {
        // 加载英雄资源
        cc.loader.loadRes(`Prefab/${oParam.heroAvatar}`, (oErr, oPrefab) => {
            if (oErr) {
                // 如果预置体加载失败,
                console.error(oErr.message, oErr.stack);
                return;
            }

            if (!oPrefab) {
                console.error("预制体为空");
                return;
            }

            // 创建英雄
            let oNewHero = cc.instantiate(oPrefab);
            if (!oNewHero) {
                console.error("创建英雄失败");
                return;
            }

            // 绑定英雄行为
            let oHeroAction = oNewHero.addComponent(CHeroAction);
            oHeroAction.userId = oParam.userId;
            oHeroAction.userName = oParam.userName;
            oHeroAction.heroAvatar = oParam.heroAvatar;
            // 确保回调函数不为空
            funCb = funCb || function() {
            };

            // 执行回调函数
            funCb(oNewHero);
        });
    },
};
