package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;
import org.tinygame.herostory.common.msg.GameMsgProtocol;

import java.util.Collection;

/**
 * @BelongsProject: herostory-2
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
                temp.setUserId(currUser.getUserId());
                temp.setHeroAvatar(currUser.getHeroAvatar());
                resultBuilder.addUserInfo(temp);
            }

        }
        GameMsgProtocol.WhoElseIsHereResult result = resultBuilder.build();
        ctx.writeAndFlush(result);

        //睡眠500
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 获得当前 所在用户状态
        if(userList.size() > 0){
            for (User currUser : userList) {
                if(currUser == null){
                    continue;
                }
                // 非空判断
                if(null != currUser.getMoveToPosX() &&
                        null != currUser.getMoveToPosY()){

                    GameMsgProtocol.UserMoveToResult.Builder resultBuilderM = GameMsgProtocol.UserMoveToResult.newBuilder();
                    resultBuilderM.setMoveUserId(currUser.getUserId());
                    resultBuilderM.setMoveToPosX(currUser.getMoveToPosX());
                    resultBuilderM.setMoveToPosY(currUser.getMoveToPosY());
                    GameMsgProtocol.UserMoveToResult resultM = resultBuilderM.build();

                    ctx.writeAndFlush(resultM);
                    //睡眠500
                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

}
