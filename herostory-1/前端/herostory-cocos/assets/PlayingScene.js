// @import
const mod_Async = require("./_Async");
const mod_Global = require("./_Global");
const mod_HeroCreator = require("./_HeroCreator");
const mod_MsgSender = require("./_MsgSender");
const mod_RankItemCreator = require("./_RankItemCreator");
const mod_Util = require("./_Util");
const CHeroAction = require("./CHeroAction");

/**
 * 游戏场景
 */
cc.Class({
    extends: cc.Component,

    /**
     * 属性定义
     */
    properties: {
    },

    /**
     * @override
     */
    onLoad() {
    },

    /**
     * @override
     */
    start() {
        const SELF = this;

        // 获取攻击按钮
        SELF.node.getChildByName("AttkButton")
            .getComponent(cc.Button).node.on("click", () => {
                // 执行攻击
                __doAttk();
            }, SELF);

        // 获取排行榜
        SELF.node.getChildByName("GetRankButton")
            .getComponent(cc.Button).node.on("click", () => {
                let oMsg = {
                    msgCode: "GET_RANK_CMD",
                    msgBody: {
                    },
                };
    
                mod_MsgSender.sendMsg(oMsg);
            }, SELF);

        // 创建一个英雄
        __createAHero(SELF);
        // 监听操作事件
        __listenOperationEvent(SELF);

        cc.systemEvent.on("ON_GET_RANK_RESULT", oEvent => {
            // 打开并刷新排行榜面板
            __openAndRefreshRankPanel(
                SELF, oEvent.rankItemArray
            );
        });
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
 * 创建一个英雄
 * 
 * @param {cc.Component} SELF this 指针
 * @return {void}
 */
function __createAHero(SELF) {
    if (!SELF) {
        return;
    }

    let oTmpHero = null;

    mod_Async.serial(
        // 
        // step000, 创建英雄
        (funCb000) => {
            // 创建英雄
            let oParam = {
                userId: mod_Global.myUserId,
                userName: mod_Global.myUserName,
                heroAvatar: mod_Global.myHeroAvatar,
            };

            // 创建一个英雄
            mod_HeroCreator.createAHero(oParam, (oNewHero) => {
                if (!oNewHero) {
                    return;
                }

                oTmpHero = oNewHero;
                cc.Canvas.instance.node.addChild(oNewHero);

                // 记录我自己的英雄
                mod_Global.heroMap[mod_Global.myUserId.toString()] = oNewHero;
                funCb000();
            });
        },

        // 
        // step010, 发送入场消息
        (funCb010) => {
            // 获取英雄行为
            let oHeroAction = oTmpHero.getComponent(CHeroAction);

            // 创建消息对象
            let oMsg = {
                msgCode: "USER_ENTRY_CMD",
                msgBody: {
                    userId: oHeroAction.userId,
                    heroAvatar: oHeroAction.heroAvatar,
                },
            };

            // 发送消息
            mod_MsgSender.sendMsg(oMsg);

            oMsg = {
                msgCode: "WHO_ELSE_IS_HERE_CMD",
                msgBody: {
                },
            };

            mod_MsgSender.sendMsg(oMsg);

            funCb010();
        },
    );
}

/**
 * 监听操作事件
 * 
 * @param {cc.Component} SELF this 指针
 * @return {void}
 */
function __listenOperationEvent(SELF) {
    if (!SELF) {
        return;
    }

    // 有鼠标的情况
    SELF.node.getChildByName("OperationArea").on(cc.Node.EventType.MOUSE_UP, (oEvent) => {
        if (cc.sys.os != cc.sys.OS_LINUX && 
            cc.sys.os != cc.sys.OS_OSX && 
            cc.sys.os != cc.sys.OS_WINDOWS) {
            // 如果不是 PC 操作系统,
            return;
        }

        if (mod_MsgSender.isDisconnected) {
            // 如果没有连接到游戏服,
            // 不能做任何操作
            return;
        }

        switch (oEvent.getButton()) {
        case 0: {
            // 执行攻击
            __doAttk();
            break;
        }

        case 2: {
            // 将鼠标转换为世界坐标
            let oV = SELF.node.convertToNodeSpaceAR(cc.v2(
                oEvent.getLocationX(), 
                oEvent.getLocationY()
            ));

            // 执行移动
            __doMoveTo(oV.x, oV.y);
            break;
        }

        default:
            break;
        }
    });

    // 当发生触屏时
    SELF.node.getChildByName("OperationArea").on(cc.Node.EventType.TOUCH_START, (oEvent) => {
        if (cc.sys.os != cc.sys.OS_ANDROID && 
            cc.sys.os != cc.sys.OS_IOS) {
            // 如果不是手机操作系统,
            return;
        }

        if (mod_MsgSender.isDisconnected) {
            // 如果没有连接到游戏服,
            // 不能做任何操作
            return;
        }

        // 将鼠标转换为世界坐标
        let oV = SELF.node.convertToNodeSpaceAR(cc.v2(
            oEvent.getLocationX(), 
            oEvent.getLocationY()
        ));

        // 执行移动
        __doMoveTo(oV.x, oV.y);
    });
}

/**
 * 执行攻击
 * 
 * @return {void}
 */
function __doAttk() {
    // 获取我的英雄
    let oMyHero = mod_Global.getMyHeroNode();
    if (!oMyHero) {
        return;
    }

    // 获取英雄行为
    let oHeroAction = oMyHero.getComponent(CHeroAction);
    if (!oHeroAction) {
        return;
    }

    // Attk
    if (!oHeroAction.attk()) {
        // 如果发动攻击失败,
        // 则直接退出!
        return;
    }

    // 创建消息对象
    let oMsg = {
        msgCode: "USER_ATTK_CMD",
        msgBody: {
            targetUserId: mod_Util.getClosestUserId(),
        },
    };

    // 发送消息
    mod_MsgSender.sendMsg(oMsg);
}

/**
 * 执行移动
 * 
 * @param {number} nToPosX 目的地 X 坐标
 * @param {number} nToPosY 目的地 Y 坐标
 * @return {void}
 */
function __doMoveTo(nToPosX, nToPosY) {
    // 获取我的英雄
    let oMyHero = mod_Global.getMyHeroNode();
    if (!oMyHero) {
        return;
    }

    // 获取英雄行为
    let oHeroAction = oMyHero.getComponent(CHeroAction);
    if (!oHeroAction) {
        return;
    }

    // 获取起始坐标
    let oFromPos = cc.v2(
        oMyHero.x, 
        oMyHero.y
    );

    // MoveTo
    if (!oHeroAction.moveTo(nToPosX, nToPosY)) {
        // 如果移动失败,
        // 则直接退出!
        return;
    }

    // 创建消息对象
    let oMsg = {
        msgCode: "USER_MOVE_TO_CMD",
        msgBody: {
            moveFromPosX: oFromPos.x,
            moveFromPosY: oFromPos.y,
            moveToPosX: nToPosX,
            moveToPosY: nToPosY,
        },
    };

    // 发送消息
    mod_MsgSender.sendMsg(oMsg);
}

/**
 * 打开并刷新排行榜面板
 * 
 * @param {cc.Component} SELF this 指针
 * @param {Array<{ rankId: number, userId: number, userName: string, heroAvatar: string, win: number, }>} oRankItemArray 排名条目数组
 * @return {void}
 */
function __openAndRefreshRankPanel(SELF, oRankItemArray) {
    if (!SELF) {
        return;
    }

    let oRankPanel = SELF.node.getChildByName("RankPanel");
    oRankPanel.active = true;
    oRankPanel.zIndex = 4096;

    // 添加按钮关闭事件
    oRankPanel.getChildByName("CloseButton")
        .getComponent(cc.Button).node.on("click", () => {
        oRankPanel.active = false;
    });

    // 事先清空面板
    oRankPanel.getChildByName("Layout").removeAllChildren();

    if (!oRankItemArray || 
        !Array.isArray(oRankItemArray)) {
        return;
    }

    let i = 0;
    for (let oCreationParam of oRankItemArray) {
        if (!oCreationParam) {
            continue;
        }

        if (++i > 5) {
            return;
        }

        // 创建排名条目
        mod_RankItemCreator.createARankItem(oCreationParam, oNewRankItem => {
            oRankPanel.getChildByName("Layout")
                .addChild(oNewRankItem);
        });
    }
}
