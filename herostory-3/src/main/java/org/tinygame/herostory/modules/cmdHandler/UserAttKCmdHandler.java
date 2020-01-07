package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.AttributeKey;
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

        /*    减血    */
        // 获得被攻击者 用户
        User targetUser = UserManager.getById(targetId);
        if(null == targetUser
                || null == targetUser.getBlood()){
            return;
        }

        // 如果血量小于等于0 则已死亡 否则就继续攻击
        if(targetUser.getBlood() <= 0){
            // 角色死亡
            GameMsgProtocol.UserDieResult.Builder dieResultBuilder = GameMsgProtocol.UserDieResult.newBuilder();
            dieResultBuilder.setTargetUserId(targetId);
            GameMsgProtocol.UserDieResult dieResult = dieResultBuilder.build();
            BroadCaster.cast(dieResult);
        }else{

            // 攻击 默认血量为 10滴一次 有暴击效果
            int defaultHp = 10;
            int random = 1+(int)(Math.random()*100);
            if(random <= _critRate){
                // 百分之20的几率暴击 暴击数为 100% - 200%
                defaultHp = defaultHp + (int)(Math.random()*10);
            }

            // 更改用户血量
            targetUser.setBlood(targetUser.getBlood()-defaultHp);
            UserManager.updateUserById(targetUser);

            GameMsgProtocol.UserSubtractHpResult.Builder hpResultBuilder = GameMsgProtocol.UserSubtractHpResult.newBuilder();
            hpResultBuilder.setTargetUserId(targetId);
            hpResultBuilder.setSubtractHp(defaultHp);
            GameMsgProtocol.UserSubtractHpResult hpResult = hpResultBuilder.build();
            // 广播掉血
            BroadCaster.cast(hpResult);
        }

    }

}
