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
 * @CreateTime: 2020-01-06 22:12
 * @Description: 用户创建
 */
public class UserEntryCmdHandler implements ICmdHandler<GameMsgProtocol.UserEntryCmd>{

    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.UserEntryCmd msg) {

        // 从信道获得userId
        Integer userId =(Integer) ctx.channel().attr(AttributeKey.valueOf("userId")).get();

        // 当前用户
        User currUser = UserManager.getById(userId);
        if (null == currUser){
            return;
        }


        GameMsgProtocol.UserEntryResult.Builder resultBuilder = GameMsgProtocol.UserEntryResult.newBuilder();
        resultBuilder.setUserId(currUser.getUserId());
        resultBuilder.setUserName(currUser.getUserName());
        resultBuilder.setHeroAvatar(currUser.getHeroAvatar());

        GameMsgProtocol.UserEntryResult result = resultBuilder.build();

        // 广播信道
        BroadCaster.cast(result);
    }



}
