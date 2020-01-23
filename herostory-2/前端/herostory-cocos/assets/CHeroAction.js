// 移动速度
const MOVE_SPEED = 128;
// Z 轴中心位置
const ZINDEX_CENTER = 2048;
// 默认最大血量
const DEFAULT_MAX_HP = 100;

/**
 * 英雄行为
 */
cc.Class({
    extends: cc.Component,

    /**
     * 属性定义
     */
    properties: {
        /** 用户 Id */
        userId: -1,
        /** 用户名称 */
        userName: "",
        /** 英雄形象 */
        heroAvatar: "Unknown",
        /** 最大血量 */
        maxHp: -1,
        /** 当前血量 */
        currHp: -1,
        /** 移动到位置 X */
        moveToPosX: -1,
        /** 移动到位置 Y */
        moveToPosY: -1,
        /** 奔跑方向, 一个二维向量 */
        moveDir: null,

        /** 是否正在奔跑 */
        checkState_run: false,
        /** 是否死亡 */
        checkState_die: false,
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
        console.log(`我来了, userId = ${this.userId}`);

        this.node.zIndex = ZINDEX_CENTER;

        // 获取用户名称
        let strUserName = this.userName;
        if (!strUserName) {
            strUserName = "UserId = " + this.userId;
        }

        // 设置用户名称
        this.node.getChildByName("UserName").getComponent(cc.Label).string = strUserName;

        if (this.maxHp < 0) {
            this.maxHp = DEFAULT_MAX_HP;
        }

        if (this.currHp < 0) {
            this.currHp = DEFAULT_MAX_HP;
        }

        // 更新当前血量
        __updateCurrHp(this);
    },

    /**
     * @override
     * @param {number} dt 变化时间
     */
    update(dt) {
        // 自动奔跑
        __tryAutoRun(this, dt);
    },

    /**
     * 移动到指定位置
     * 
     * @param {number} nPosX 位置 X
     * @param {number} nPosY 位置 Y
     * @return {bool}
     */
    moveTo(nPosX, nPosY) {
        if (this.checkState_die) {
            // 如果已经死亡,
            // 则直接退出
            return false;
        }

        console.log(`移动到目的地, posX = ${nPosX}, posY = ${nPosY}`);

        if (Math.abs(nPosX - this.node.x) <= 5 && 
            Math.abs(nPosY - this.node.y) <= 5) {
            // 移动范围太小了,
            // 就不动了
            return false;
        }

        // 上下不能走出地图边界
        nPosY = Math.min(+128, nPosY);
        nPosY = Math.max(-200, nPosY);

        this.moveToPosX = nPosX;
        this.moveToPosY = nPosY;

        // 确定奔跑方向
        this.moveDir = cc.v2(
            nPosX > this.node.x ? +1 : -1,
            nPosY > this.node.y ? +1 : -1
        );

        // 获取 Spine 节点
        let oSpineNode = this.node.getChildByName("Spine");

        if (oSpineNode.scaleX < 0 && 
            nPosX > this.node.x) {
            // 转头向右走,
            oSpineNode.scaleX *= -1;
        }

        if (oSpineNode.scaleX > 0 && 
            nPosX < this.node.x) {
            // 转头向左走,
            oSpineNode.scaleX *= -1;
        }

        if (!this.checkState_run) {
            // 播放动画
            this.node.getComponentInChildren("sp.Skeleton").setAnimation(0, "Run", true);
            this.checkState_run = true;
        }

        return true;
    },

    /**
     * 高级版的移动
     * 
     * @param {number} nFromPosX 起始位置 X
     * @param {number} nFromPosY 起始位置 Y
     * @param {number} nToPosX 目标位置 X
     * @param {number} nToPosY 目标位置 Y
     * @param {number} nStartTime 启程时间
     * @return {void}
     */
    moveToAdv(nFromPosX, nFromPosY, nToPosX, nToPosY, nStartTime) {
        // 获取当前时间
        let nCurrTime = new Date().valueOf();

        let nDT = 0;

        if (nCurrTime < nStartTime) {
            console.warn("当前时间小于启程时间");
        }
        else {
            // 变化时间
            nDT = nCurrTime - nStartTime;
            nDT = nDT / 1000;
        }

        // X 轴方向和 Y 轴方向
        let nXDir = nToPosX < nFromPosX ? -1 : +1;
        let nYDir = nToPosY < nFromPosY ? -1 : +1;

        // 计算当前的真实位置
        let nCurrPosX = nFromPosX + nDT * nXDir * MOVE_SPEED;
        let nCurrPosY = nFromPosY + nDT * nYDir * MOVE_SPEED;

        if (nXDir < 0 && 
            nCurrPosX < nToPosX) {
            nCurrPosX = nToPosX;
        }
        else
        if (nXDir > 0 &&
            nCurrPosX > nToPosX) {
            nCurrPosX = nToPosX;
        }

        if (nYDir < 0 && 
            nCurrPosY < nToPosY) {
            nCurrPosY = nToPosY;
        }
        else
        if (nYDir > 0 &&
            nCurrPosY > nToPosY) {
            nCurrPosY = nToPosY;
        }

        this.node.x = nCurrPosX;
        this.node.y = nCurrPosY;

        if (this.moveTo(nToPosX, nToPosY)) {
            // 如果已开始执行移动逻辑,
            // 则直接退出!
            return;
        }

        // 如果没有在移动则修改朝向
        nXDir = nToPosX < nFromPosX ? -1 : +1;
        this.node.getChildByName("Spine").scaleX = nXDir;
    },

    /**
     * 攻击 ( 动画 )
     * 
     * @return {boolean}
     */
    attk() {
        if (this.checkState_die) {
            return false;
        }

        // 终止移动
        this.moveToPosX = -1;
        this.moveToPosY = -1;
        this.moveDir = null;
        this.checkState_run = false;

        // 播放动画
        this.node.getComponentInChildren("sp.Skeleton").setAnimation(0, "Attk", false);
        return true;
    },

    /**
     * 减血 ( 动画 )
     * 
     * @param {number} nVal 减血量
     * @return {void}
     */
    subtractHp(nVal) {
        if (nVal <= 0) {
            return;
        }

        // 更新当前血量
        this.currHp = Math.max(this.currHp - nVal, 0);
        __updateCurrHp(this);

        // 加载英雄资源
        cc.loader.loadRes(`Prefab/DmgHint`, (oErr, oPrefab) => {
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
            let oDmgHint = cc.instantiate(oPrefab);
            if (!oDmgHint) {
                console.error("创建减血提示失败");
                return;
            }

            oDmgHint.getComponent(cc.Label).string = "-" + nVal;
            oDmgHint.getComponent(cc.Animation).play("DmgHint");

            this.node.addChild(oDmgHint);

            setTimeout(() => {
                this.node.removeChild(oDmgHint);
            }, 2000);
        });
    },

    /**
     * 死亡 ( 动画 )
     * 
     * @return {void}
     */
    die() {
        // 播放动画
        this.node.getComponentInChildren("sp.Skeleton").setAnimation(0, "Die", false);
        this.checkState_die = true;

        // 修改名字位置
        this.node.getChildByName("UserName").y = 100;
        // 更新当前血量
        __updateCurrHp(this);
    },
});

/**
 * 尝试自动移动
 * 
 * @param {cc.Component} SELF this 指针
 * @param {number} dt 变化时间
 * @return {void}
 */
function __tryAutoRun(SELF, dt) {
    if (!SELF.moveDir || 
        SELF.checkState_die) {
        // 如果不确定奔跑方向,
        // 或者是已经死亡,
        // 则直接退出!
        return;
    }

    SELF.node.x += SELF.moveDir.x * MOVE_SPEED * dt;
    SELF.node.y += SELF.moveDir.y * MOVE_SPEED * dt;
    SELF.node.zIndex = ZINDEX_CENTER - SELF.node.y;

    if (SELF.moveDir.x < 0 && 
        SELF.node.x <= SELF.moveToPosX) {
        // X 方向停止移动
        SELF.moveDir.x = 0;
    }
    else
    if (SELF.moveDir.x > 0 && 
        SELF.node.x >= SELF.moveToPosX) {
        // X 方向停止移动
        SELF.moveDir.x = 0;
    }

    if (SELF.moveDir.y < 0 && 
        SELF.node.y <= SELF.moveToPosY) {
        // Y 方向停止移动
        SELF.moveDir.y = 0;
    }
    else
    if (SELF.moveDir.y > 0 && 
        SELF.node.y >= SELF.moveToPosY) {
        // Y 方向停止移动
        SELF.moveDir.y = 0;
    }

    if (0 == SELF.moveDir.x && 
        0 == SELF.moveDir.y) {
        // 清除移动方向
        SELF.moveDir = null;
        // 清除动画状态
        SELF.node.getComponentInChildren("sp.Skeleton").clearTrack(0);
        SELF.checkState_run = false;
    }
}

/**
 * 更新当前血量
 * 
 * @param {CHeroAction} SELF this 指针
 * @return {void}
 */
function __updateCurrHp(SELF) {
    if (!SELF) {
        return;
    }

    // 获取最大血量节点
    let oSpriteMaxHp = SELF.node.getChildByName("MaxHp");
    if (SELF.checkState_die) {
        // 如果已经死亡,
        // 隐藏血量!
        oSpriteMaxHp.active = false;
        return;
    }

    // 获取当前血量节点
    let oSpriteCurrHp = oSpriteMaxHp.getChildByName("CurrHp");

    // 设置当前血量宽度
    let nWidth = (SELF.currHp / Math.max(SELF.maxHp, 1)) * 120;
    oSpriteCurrHp.width = nWidth;
}
