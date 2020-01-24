package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.AttributeKey;
import org.tinygame.herostory.common.msg.GameMsgProtocol;
import org.tinygame.herostory.modules.login.entity.UserEntity;
import org.tinygame.herostory.modules.login.service.UserEntityService;
import org.tinygame.herostory.modules.model.MoveStarte;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.cmdHandler
 * @Author: Parker
 * @CreateTime: 2020-01-23 23:58
 * @Description: 登陆执行器
 */
public class LoginCmdHandler implements ICmdHandler<GameMsgProtocol.UserLoginCmd> {


    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.UserLoginCmd userLoginCmd) {

        UserEntity userEntity = UserEntityService.getInstance().userLogin(userLoginCmd.getUserName(), userLoginCmd.getPassword());
        if(null == userEntity){
            return;
        }

        User currUser = new User();
        currUser.setUserId(userEntity.getUserId());
        currUser.setHeroAvatar(userEntity.getHeroAvatar());
        currUser.setUserName(userEntity.getUserName());
        currUser.setBlood(100);
        currUser.setMoveStarte(new MoveStarte());

        UserManager.addUser(currUser);

        //将user用户id添加到信道
        ctx.channel().attr(AttributeKey.valueOf("userId")).set(currUser.getUserId());

        // 获得登陆用户 如果为空 则创建新用户
        GameMsgProtocol.UserLoginResult.Builder resultBuilder = GameMsgProtocol.UserLoginResult.newBuilder();
        resultBuilder.setUserId(userEntity.getUserId());
        resultBuilder.setUserName(userEntity.getUserName());
        resultBuilder.setHeroAvatar(userEntity.getHeroAvatar());



        GameMsgProtocol.UserLoginResult result = resultBuilder.build();

        ctx.channel().writeAndFlush(result);
    }


}
