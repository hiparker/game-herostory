// @import
const mod_GetRankResultHandler = require("./CustomResultHandler/_GetRankResultHandler");
const mod_MsgRecognizer = require("./_MsgRecognizer");
const mod_MsgSender = require("./_MsgSender");
const mod_SelectHeroResultHandler = require("./CustomResultHandler/_SelectHeroResultHandler");
const mod_UserAttkResultHandler = require("./CustomResultHandler/_UserAttkResultHandler");
const mod_UserDieResultHandler = require("./CustomResultHandler/_UserDieResultHandler");
const mod_UserEntryResultHandler = require("./CustomResultHandler/_UserEntryResultHandler");
const mod_UserLoginResultHandler = require("./CustomResultHandler/_UserLoginResultHandler");
const mod_UserMoveToResultHandler = require("./CustomResultHandler/_UserMoveToResultHandler");
const mod_UserQuitResultHandler = require("./CustomResultHandler/_UserQuitResultHandler");
const mod_UserSubtractHpResultHandler = require("./CustomResultHandler/_UserSubtractHpResultHandler");
const mod_WhoElseIsHereResultHandler = require("./CustomResultHandler/_WhoElseIsHereResultHandler");

// @export
module.exports = {
    /**
     * 注册结果处理器
     */
    regResultHandler() {
        // 结果处理器字典
        let oResultHandlerKV = {
            "UserEntryResult": mod_UserEntryResultHandler,
            "WhoElseIsHereResult": mod_WhoElseIsHereResultHandler,
            "UserMoveToResult": mod_UserMoveToResultHandler,
            "UserQuitResult": mod_UserQuitResultHandler,
            "UserAttkResult": mod_UserAttkResultHandler,
            "UserSubtractHpResult": mod_UserSubtractHpResultHandler,
            "UserDieResult": mod_UserDieResultHandler,
            "UserLoginResult": mod_UserLoginResultHandler,
            "SelectHeroResult": mod_SelectHeroResultHandler,
            "GetRankResult": mod_GetRankResultHandler,
        };

        // @override
        mod_MsgSender.onReceiveMsg = (oMsg) => {
            if (!oMsg || 
                !oMsg.msgCode) {
                return;
            }
    
            // 获取消息代号
            let strMsgCode = oMsg.msgCode;
            // 识别消息类型
            let strMsgType = mod_MsgRecognizer.recognize(strMsgCode);
            if (!strMsgType) {
                // 如果无法识别为消息类型,
                console.error(`无法识别为消息类型, msgCode = ${strMsgCode}`);
                return;
            }

            try {
                // 加载处理器
                let oResultHandler = oResultHandlerKV[strMsgType];
                // 处理消息
                oResultHandler.handle(oMsg.msgBody);
            }
            catch (oErr) {
                console.error(oErr);
            }
        }
    }
};
