
/** 内置字典 */
const g_oInnerKV = {};

let nTmpIndex = -1;
g_oInnerKV["USER_ENTRY_CMD"]          = g_oInnerKV[++nTmpIndex] = "UserEntryCmd";
g_oInnerKV["USER_ENTRY_RESULT"]       = g_oInnerKV[++nTmpIndex] = "UserEntryResult";
g_oInnerKV["WHO_ELSE_IS_HERE_CMD"]    = g_oInnerKV[++nTmpIndex] = "WhoElseIsHereCmd";
g_oInnerKV["WHO_ELSE_IS_HERE_RESULT"] = g_oInnerKV[++nTmpIndex] = "WhoElseIsHereResult";
g_oInnerKV["USER_MOVE_TO_CMD"]        = g_oInnerKV[++nTmpIndex] = "UserMoveToCmd";
g_oInnerKV["USER_MOVE_TO_RESULT"]     = g_oInnerKV[++nTmpIndex] = "UserMoveToResult";
g_oInnerKV["USER_QUIT_RESULT"]        = g_oInnerKV[++nTmpIndex] = "UserQuitResult";
g_oInnerKV["USER_STOP_CMD"]           = g_oInnerKV[++nTmpIndex] = "UserStopCmd";
g_oInnerKV["USER_STOP_RESULT"]        = g_oInnerKV[++nTmpIndex] = "UserStopResult";
g_oInnerKV["USER_ATTK_CMD"]           = g_oInnerKV[++nTmpIndex] = "UserAttkCmd";
g_oInnerKV["USER_ATTK_RESULT"]        = g_oInnerKV[++nTmpIndex] = "UserAttkResult";
g_oInnerKV["USER_SUBTRACT_HP_RESULT"] = g_oInnerKV[++nTmpIndex] = "UserSubtractHpResult";
g_oInnerKV["USER_DIE_RESULT"]         = g_oInnerKV[++nTmpIndex] = "UserDieResult";
g_oInnerKV["USER_LOGIN_CMD"]          = g_oInnerKV[++nTmpIndex] = "UserLoginCmd";
g_oInnerKV["USER_LOGIN_RESULT"]       = g_oInnerKV[++nTmpIndex] = "UserLoginResult";
g_oInnerKV["SELECT_HERO_CMD"]         = g_oInnerKV[++nTmpIndex] = "SelectHeroCmd";
g_oInnerKV["SELECT_HERO_RESULT"]      = g_oInnerKV[++nTmpIndex] = "SelectHeroResult";
g_oInnerKV["GET_RANK_CMD"]            = g_oInnerKV[++nTmpIndex] = "GetRankCmd";
g_oInnerKV["GET_RANK_RESULT"]         = g_oInnerKV[++nTmpIndex] = "GetRankResult";

// @export
module.exports = {
    /**
     * 识别消息
     * 
     * @param {string | number} oMsgCode 消息代码
     * @return {string}
     */
    recognize(oMsgCode) {
        return g_oInnerKV[oMsgCode];
    },
};
