// @export
module.exports = {
    /** @override */
    handle(oGetRankResult) {
        if (!oGetRankResult) {
            return;
        }

        if (!oGetRankResult.rankItem) {
            return;
        }

        // 创建并派发事件
        let oEvent = new cc.Event("ON_GET_RANK_RESULT", true);
        oEvent.rankItemArray = oGetRankResult.rankItem;
        cc.systemEvent.dispatchEvent(oEvent);
    }
};
