// @import
const mod_Global = require("./_Global");
const CHeroAction = require("./CHeroAction");

// @export
module.exports = {
    /**
     * 获取查询参数
     * 
     * @param {string} strName 参数名称
     * @return {string}
     */
    getQueryStr(strName) {
        if (!strName) {
            return "";
        }
    
        // 截取页面参数
        var result = window.location.search.match(new RegExp("[\?\&]" + strName + "=([^\&]+)", "i"));
        if (result == null || 
            result.length < 1) {
            return "";
        }

        return result[1];
    },

    /**
     * 获取距离我最近的用户 Id
     * 
     * @return {number}
     */
    getClosestUserId() {
        // 我的用户 Id
        let nMyUserId = mod_Global.myUserId;
        let strMyUserId = nMyUserId.toString();
        // 获取我所使用的英雄
        let oMyHero = mod_Global.heroMap[strMyUserId];

        if (!oMyHero) {
            return -1;
        }

        let nFindUserId = -1;
        let nMinDX = 100;
        let nMinDY = 128;

        for (let strUserId in mod_Global.heroMap) {
            if (strUserId == strMyUserId) {
                // 跳过自己
                continue;
            }

            // 获取英雄
            let oTmpHero = mod_Global.heroMap[strUserId];
            if (!oTmpHero) {
                continue;
            }

            if (oMyHero.getChildByName("Spine").scaleX < 0 &&
                oTmpHero.x > oMyHero.x) {
                // 如果我朝左站着,
                // 但是对方站在我右边
                continue;
            }
            else
            if (oMyHero.getChildByName("Spine").scaleX > 0 && 
                oTmpHero.x < oMyHero.x) {
                // 如果我朝右站着,
                // 但是对方站在我左边
                continue;
            }

            let nCurrDX = Math.abs(oTmpHero.x - oMyHero.x);
            let nCurrDY = Math.abs(oTmpHero.y - oMyHero.y);

            if (nCurrDX > nMinDX || 
                nCurrDY > nMinDY) {
                // 虽然对方与我相同方向,
                // 但离我太远了
                continue;
            }

            nFindUserId = Number.parseInt(strUserId);
        }

        return nFindUserId;
    },
};
