package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import org.tinygame.herostory.modules.model.MoveStarte;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;
import org.tinygame.herostory.common.msg.GameMsgProtocol;

import java.util.Collection;

/**
 * @BelongsProject: herostory-5
 * @BelongsPackage: org.tinygame.herostory.handler
 * @Author: Parker
 * @CreateTime: 2020-01-06 22:10
 * @Description: 谁还在
 */
public class WhoElseIsHereCmdHandler implements ICmdHandler<GameMsgProtocol.WhoElseIsHereCmd >{

    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.WhoElseIsHereCmd msg){

        GameMsgProtocol.WhoElseIsHereResult.Builder resultBuilder = GameMsgProtocol.WhoElseIsHereResult.newBuilder();

        // 获得集合
        Collection<User> userList = UserManager.getArray();

        if(userList.size() > 0){
            for (User currUser : userList) {
                if(null == currUser){
                    continue;
                }

                GameMsgProtocol.WhoElseIsHereResult.UserInfo.Builder temp = GameMsgProtocol.WhoElseIsHereResult.UserInfo.newBuilder();

                // 获得移动信息
                MoveStarte moveStarte = currUser.getMoveStarte();

                // 创建用户移动
                GameMsgProtocol.WhoElseIsHereResult.UserInfo.MoveState.Builder
                        userMoveStateBuilder = GameMsgProtocol.WhoElseIsHereResult.UserInfo.MoveState.newBuilder();
                userMoveStateBuilder.setFromPosX(moveStarte.getFromPosX());
                userMoveStateBuilder.setFromPosY(moveStarte.getFromPosY());
                userMoveStateBuilder.setToPosX(moveStarte.getToPosX());
                userMoveStateBuilder.setToPosY(moveStarte.getToPosY());
                userMoveStateBuilder.setStartTime(moveStarte.getStartTime());


                // 将移动信息 添加到 用户信息上
                temp.setMoveState(userMoveStateBuilder);
                temp.setUserId(currUser.getUserId());
                temp.setUserName(currUser.getUserName());
                temp.setHeroAvatar(currUser.getHeroAvatar());

                resultBuilder.addUserInfo(temp);
            }

        }
        GameMsgProtocol.WhoElseIsHereResult result = resultBuilder.build();
        ctx.writeAndFlush(result);

    }

}
