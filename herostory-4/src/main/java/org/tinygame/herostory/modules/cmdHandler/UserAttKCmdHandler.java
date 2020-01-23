package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.AttributeKey;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.common.msg.GameMsgProtocol;
import org.tinygame.herostory.modules.broadcaster.BroadCaster;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;

/**
 * @BelongsProject: herostory-3
 * @BelongsPackage: org.tinygame.herostory.modules.cmdHandler
 * @Author: Parker
 * @CreateTime: 2020-01-07 22:27
 * @Description: 攻击处理器
 */
@Slf4j
public class UserAttKCmdHandler implements ICmdHandler<GameMsgProtocol.UserAttkCmd> {

    /**
     * 暴击几率
     */
    static private final int _critRate = 20;

    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.UserAttkCmd msg) {

        // 非法判断
        if(null == ctx || null == msg){
            return;
        }

        Integer userId = (Integer) ctx.channel().attr(AttributeKey.valueOf("userId")).get();
        if(null == userId){
            return;
        }

        GameMsgProtocol.UserAttkCmd cmd =  msg;

        // 被攻击者ID
        Integer targetId = cmd.getTargetUserId();

        // 攻击
        GameMsgProtocol.UserAttkResult.Builder resultBuilder =  GameMsgProtocol.UserAttkResult.newBuilder();

        resultBuilder.setAttkUserId(userId);
        resultBuilder.setTargetUserId(targetId);
        GameMsgProtocol.UserAttkResult result = resultBuilder.build();

        // 广播攻击
        BroadCaster.cast(result);

        // 获得被攻击者 用户
        User targetUser = UserManager.getById(targetId);
        if(null == targetUser
                || null == targetUser.getBlood()){
            return;
        }

        log.info("线程名称 = {}",Thread.currentThread().getName());

        // 攻击 默认血量为 10滴一次 有暴击效果
        int subtractHp = 10;


        // 当用户还有血量时 掉血
        if(targetUser.getBlood() > 0){
            // 用户当前血量
            Integer userBlood = targetUser.getBlood();

            // 调取减血计划
            subtractHp = setHp(subtractHp);

            // 减血
            userBlood -= subtractHp;


            // 更改用户血量
            targetUser.setBlood(userBlood);
            UserManager.updateUserById(targetUser);

            // 掉血
            toSubtractHp(targetId, subtractHp);

            // 如果用户血量 <= 0  则已死亡
            if(userBlood <= 0){
                toUserDie(targetId);
            }

        }

    }

    /**
     * 减血规则
     *
     * @param defaultHp 减血量
     * @return
     */
    private int setHp(int defaultHp) {
        // 非法判断
        if(defaultHp <= 0){
            return 0;
        }
        int random = 1+(int)(Math.random()*100);
        if(random <= _critRate){
            // 百分之20的几率暴击 暴击数为 100% - 200%
            defaultHp = defaultHp + (int)(Math.random()*10);
        }
        return defaultHp;
    }

    /**
     * 角色死亡
     *
     * @param targetId 死亡者id
     */
    public static void toUserDie(Integer targetId) {
        // 非法判断
        if(null == targetId){
            return;
        }
        GameMsgProtocol.UserDieResult.Builder dieResultBuilder = GameMsgProtocol.UserDieResult.newBuilder();
        dieResultBuilder.setTargetUserId(targetId);
        GameMsgProtocol.UserDieResult dieResult = dieResultBuilder.build();
        // 广播死亡
        BroadCaster.cast(dieResult);
    }

    /**
     * 掉血
     *
     * @param targetId 掉血者id
     * @param defaultHp 掉血量
     */
    public static void toSubtractHp(Integer targetId, int defaultHp) {
        // 非法判断
        if(null ==  targetId || defaultHp <= 0){
            return;
        }

        GameMsgProtocol.UserSubtractHpResult.Builder hpResultBuilder = GameMsgProtocol.UserSubtractHpResult.newBuilder();
        hpResultBuilder.setTargetUserId(targetId);
        hpResultBuilder.setSubtractHp(defaultHp);
        GameMsgProtocol.UserSubtractHpResult hpResult = hpResultBuilder.build();
        // 广播掉血
        BroadCaster.cast(hpResult);
    }

}
