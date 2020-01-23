// @export
module.exports = {
    /** 我自己的用户 Id */
    myUserId: -1,
    /** 我自己的用户名称 */
    myUserName: "",
    /** 我自己的英雄形象 */
    myHeroAvatar: "",

    /**
     * 英雄字典
     * 
     * @var {Map<string, cc.Node>}
     */
    heroMap: {
    },

    /**
     * 获取我的英雄节点
     * 
     * @return {cc.Node}
     */
    getMyHeroNode() {
        return this.heroMap[this.myUserId];
    },
};
