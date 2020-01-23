// @import
const mod_MsgSender = require("./_MsgSender");

// 英雄形象数组
const HERO_AVATAR_ARRAY = [
    "Hero_Hammer",
    "Hero_Shaman",
    "Hero_Skeleton",
];

/**
 * 角色选择逻辑
 */
cc.Class({
    extends: cc.Component,

    /**
     * 属性定义
     */
    properties: {
        /** 选择英雄索引 */
        selectHeroIndex: -1,
        /** 选择英雄形象 */
        selectHeroAvatar: "Unknown",
    },

    /**
     * @override
     */
    onLoad () {
    },

    /**
     * @override
     */
    start() {
        const SELF = this;

        // 给每个英雄添加选择事件
        for (let i = 0; i < HERO_AVATAR_ARRAY.length; i++) {
            SELF.node.getChildByName(`Hero_${i}`)
                .getComponent(cc.Button).node.on("click", () => {
                    // 选择一个英雄
                    __selectAHero(SELF, i);
                }, SELF);
        }

        // 获取攻击按钮
        SELF.node.getChildByName("EntryButton")
            .getComponent(cc.Button).node.on("click", () => {
                if (SELF.selectHeroIndex < 0 || 
                    SELF.selectHeroIndex >= HERO_AVATAR_ARRAY.length) {
                    return;
                }

                console.log(`选择英雄 = ${SELF.selectHeroAvatar}`);

                mod_MsgSender.sendMsg({
                    msgCode: "SELECT_HERO_CMD",
                    msgBody: {
                        heroAvatar: SELF.selectHeroAvatar,
                    }
                })
            }, SELF);
    },

    /**
     * @override
     * @param {number} dt 变化时间
     */
    update(dt) {
    },
});

///////////////////////////////////////////////////////////////////////

/**
 * 选择一个英雄
 * 
 * @param {cc.Component} SELF this 指针
 * @param {number} nHeroIndex 英雄索引
 * @return {void}
 */
function __selectAHero(SELF, nHeroIndex) {
    if (!SELF || 
        nHeroIndex < 0 || 
        nHeroIndex >= HERO_AVATAR_ARRAY.length) {
        return;
    }

    // 更新选择英雄索引和形象
    SELF.selectHeroIndex = nHeroIndex;
    SELF.selectHeroAvatar = HERO_AVATAR_ARRAY[nHeroIndex];
    
    for (let i = 0; i < HERO_AVATAR_ARRAY.length; i++) {
        // 修改颜色
        {
            // 获取颜色
            let oColor = (i == nHeroIndex) 
                ? cc.Color.WHITE 
                : new cc.Color(100, 100, 100);

            SELF.node.getChildByName(`Hero_${i}`)
                .getChildByName("HeroName")
                .color = oColor;

            SELF.node.getChildByName(`Hero_${i}`)
                .getChildByName("HeroSpineAnim")
                .color = oColor;
        }

        // 播放动画
        {
            // 获取 Spine 骨骼动画
            let oSpineSkeleton = SELF.node.getChildByName(`Hero_${i}`)
                .getChildByName("HeroSpineAnim")
                .getComponent("sp.Skeleton");

            if (i == nHeroIndex) {
                oSpineSkeleton.setAnimation(0, "Run", true);
            }
            else {
                oSpineSkeleton.clearTrack(0);
            }
        }

        // 放大
        {
            let nScaleXY = 1.0;

            if (i == nHeroIndex) {
                nScaleXY = 1.2;
            }

            SELF.node.getChildByName(`Hero_${i}`).scaleX = nScaleXY;
            SELF.node.getChildByName(`Hero_${i}`).scaleY = nScaleXY;
        }
    }
}
