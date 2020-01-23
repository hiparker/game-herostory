// @import
const mod_Async = require("./_Async");
const mod_Config = require("./_Config");
const mod_MsgSender = require("./_MsgSender");
const mod_RegResultHandler = require("./_RegResultHandler");
const mod_Util = require("./_Util");

/**
 * 登录场景
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
    onLoad () {
    },

    /**
     * @override
     */
    start() {
        const SELF = this;

        // 获取服务器地址
        let strServerAddr = mod_Util.getQueryStr("serverAddr") || mod_Config["serverAddr"];

        mod_Async.serial(
            //
            // step000, 连接到游戏服
            (funCb000) => {
                // 初始化消息发送者
                console.log(`连接到服务器 = ${strServerAddr}`);
                mod_MsgSender.init(`ws://${strServerAddr}/websocket`);

                // 尝试自动连接
                mod_MsgSender.connect((bSuccezz) => {
                    if (bSuccezz) {
                        // 连接到服务器之后, 
                        // 继续向下执行
                        funCb000();
                        // 注册自定义结果处理器
                        mod_RegResultHandler.regResultHandler();
                    }
                });

                setInterval(() => {
                    if (mod_MsgSender.isDisconnected) {
                        // 如果已经断开连接,
                        // 则重新连接
                        mod_MsgSender.connect(null);
                    }
                }, 2000);
            },

            (funCb010) => {
                // 执行用户登录
                __doUserLogin(SELF);
                funCb010();
            },
        );
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
 * 执行用户登录
 * 
 * @param {cc.Component} SELF this 指针
 * @return {void}
 */
function __doUserLogin(SELF) {
    if (!SELF) {
        return;
    }

    // 获取攻击按钮
    SELF.node.getChildByName("LoginBox")
        .getChildByName("LoginButton")
        .getComponent(cc.Button).node.on("click", () => {
            // 获取用户名称和密码
            let strUserName = SELF.node.getChildByName("LoginBox")
                .getChildByName("UserName1")
                .getComponent(cc.EditBox)
                .string;
            let strPassword = SELF.node.getChildByName("LoginBox")
                .getChildByName("Password1")
                .getComponent(cc.EditBox)
                .string;

            // 发送消息
            mod_MsgSender.sendMsg({
                msgCode: "USER_LOGIN_CMD",
                msgBody: {
                    userName: strUserName,
                    password: strPassword,
                }
            });
        }, SELF);
}
