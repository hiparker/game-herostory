// @export
module.exports = {
    /**
     * 创建一个排行条目
     * 
     * @param {{ rankId: number, userId: number, userName: string, heroAvatar: string, win: number, }} oCreationParam 创建参数
     * @param {(oNewRankItem: any) => void} funCb 回调函数
     * @return {void}
     */
    createARankItem(oCreationParam, funCb) {
        if (null == oCreationParam) {
            return;
        }

        // 加载英雄资源
        cc.loader.loadRes(`Prefab/RankItem`, (oErr, oPrefab) => {
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
            let oNewRankItem = cc.instantiate(oPrefab);
            if (!oNewRankItem) {
                console.error("创建 RankItem 失败");
                return;
            }

            // 排名 Id
            oNewRankItem.getChildByName("RankId")
                .getComponent(cc.Label)
                .string = `${oCreationParam.rankId}`;

            // 用户名称
            oNewRankItem.getChildByName("UserName")
                .getComponent(cc.Label)
                .string = `${oCreationParam.userName}`;

            // 胜利次数
            oNewRankItem.getChildByName("Win")
                .getComponent(cc.Label)
                .string = `${oCreationParam.win} win`;

            let strHeroHead = `Img/${oCreationParam.heroAvatar}_Head`;

            cc.loader.loadRes(strHeroHead, cc.SpriteFrame, (oErr, oSpriteFrame) => {
                if (oErr) {
                    console.error(oErr);
                    return;
                }

                oNewRankItem.getChildByName("HeroAvatar").scaleX = 0.32;
                oNewRankItem.getChildByName("HeroAvatar").scaleY = 0.32;
                oNewRankItem.getChildByName("HeroAvatar")
                    .getComponent(cc.Sprite)
                    .spriteFrame = oSpriteFrame;
            });

            // 确保回调函数不为空
            funCb = funCb || function() {
            };

            funCb(oNewRankItem);
        });
    },
};
