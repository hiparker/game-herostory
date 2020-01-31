package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.AttributeKey;
import org.tinygame.herostory.modules.broadcaster.BroadCaster;
import org.tinygame.herostory.modules.model.MoveStarte;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;
import org.tinygame.herostory.common.msg.GameMsgProtocol;

/**
 * @BelongsProject: herostory-5
 * @BelongsPackage: org.tinygame.herostory.handler
 * @Author: Parker
 * @CreateTime: 2020-01-06 22:08
 * @Description: 用户移动
 */
public class UserMoveToCmdHandler implements ICmdHandler<GameMsgProtocol.UserMoveToCmd>{

    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.UserMoveToCmd msg) {
        Integer userId = (Integer) ctx.channel().attr(AttributeKey.valueOf("userId")).get();
        if(null == userId){
            return;
        }
        GameMsgProtocol.UserMoveToCmd cmd = msg;

        // 更改用户
        User moveUser = UserManager.getById(userId);
        if(null == moveUser){
            return;
        }

        // 增加用户移动处理
        MoveStarte moveStarte = new MoveStarte();
        moveStarte.setFromPosX(cmd.getMoveFromPosX());
        moveStarte.setFromPosY(cmd.getMoveFromPosY());
        moveStarte.setToPosX(cmd.getMoveToPosX());
        moveStarte.setToPosY(cmd.getMoveToPosY());
        moveStarte.setStartTime(System.currentTimeMillis());
        moveUser.setMoveStarte(moveStarte);

        // -- 更改
        UserManager.updateUserById(moveUser);

        GameMsgProtocol.UserMoveToResult.Builder resultBuilder = GameMsgProtocol.UserMoveToResult.newBuilder();
        resultBuilder.setMoveUserId(userId);
        resultBuilder.setMoveFromPosX(moveStarte.getFromPosX());
        resultBuilder.setMoveFromPosY(moveStarte.getFromPosY());
        resultBuilder.setMoveToPosX(moveStarte.getToPosX());
        resultBuilder.setMoveToPosY(moveStarte.getToPosY());
        resultBuilder.setMoveStartTime(moveStarte.getStartTime());

        GameMsgProtocol.UserMoveToResult result = resultBuilder.build();

        // 广播信道
        BroadCaster.cast(result);
    }

}
