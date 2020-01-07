package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.AttributeKey;
import org.tinygame.herostory.modules.broadcaster.BroadCaster;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;
import org.tinygame.herostory.common.msg.GameMsgProtocol;

/**
 * @BelongsProject: herostory-3
 * @BelongsPackage: org.tinygame.herostory.handler
 * @Author: Parker
 * @CreateTime: 2020-01-06 22:12
 * @Description: 用户创建
 */
public class UserEntryCmdHandler implements ICmdHandler<GameMsgProtocol.UserEntryCmd>{

    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.UserEntryCmd msg) {
        GameMsgProtocol.UserEntryCmd cmd = msg;

        // 用户添加到map里
        User newUser = new User();
        newUser.setUserId(cmd.getUserId());
        newUser.setHeroAvatar(cmd.getHeroAvatar());
        // 添加用户
        UserManager.addUser(newUser);

        GameMsgProtocol.UserEntryResult.Builder resultBuilder = GameMsgProtocol.UserEntryResult.newBuilder();
        resultBuilder.setUserId(cmd.getUserId());
        resultBuilder.setHeroAvatar(cmd.getHeroAvatar());

        // 绑定id
        ctx.channel().attr(AttributeKey.valueOf("userId")).set(cmd.getUserId());

        GameMsgProtocol.UserEntryResult result = resultBuilder.build();

        // 广播信道
        BroadCaster.cast(result);
    }

}
