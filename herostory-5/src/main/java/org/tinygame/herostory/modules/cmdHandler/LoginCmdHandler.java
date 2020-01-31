package org.tinygame.herostory.modules.cmdHandler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.AttributeKey;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.common.msg.GameMsgProtocol;
import org.tinygame.herostory.modules.login.service.UserEntityService;
import org.tinygame.herostory.modules.methods.LoginCmdMethods;
import org.tinygame.herostory.modules.model.MoveStarte;
import org.tinygame.herostory.modules.model.User;
import org.tinygame.herostory.modules.model.UserManager;

import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.cmdHandler
 * @Author: Parker
 * @CreateTime: 2020-01-23 23:58
 * @Description: 登陆执行器
 */
@Slf4j
public class LoginCmdHandler implements ICmdHandler<GameMsgProtocol.UserLoginCmd> {


    /**
     * 用户登陆状态字典, 防止用户连点登陆按钮
     */
    static private final Map<String, Long> USER_LOGIN_STATE_MAP = new ConcurrentHashMap<>();

    @Override
    public void handle(ChannelHandlerContext ctx, GameMsgProtocol.UserLoginCmd userLoginCmd) {

        log.info("当前线程 = {}",Thread.currentThread().getName());

        // 事先清理超时的登陆时间
        LoginCmdMethods.clearTimeOutLoginTime(USER_LOGIN_STATE_MAP);
        // 正在操作 直接提出
        if(USER_LOGIN_STATE_MAP.containsKey(userLoginCmd.getUserName())){
            return;
        }

        // 获得当前时间
        long currTime = System.currentTimeMillis();

        USER_LOGIN_STATE_MAP.putIfAbsent(
                userLoginCmd.getUserName(),
                currTime
        );

        // Reactor 模型
        UserEntityService.getInstance().userLogin(userLoginCmd.getUserName(), userLoginCmd.getPassword(),(userEntity)->{

            if(null == userEntity){
                return null;
            }

            // 移除用户登陆状态
            USER_LOGIN_STATE_MAP.remove(userLoginCmd.getUserName());

            // 打印日志
            log.info("登陆成功 用户名={} , 密码={}",
                    userLoginCmd.getUserName(),
                    userLoginCmd.getPassword()
            );

            log.info("当前线程 = {}",Thread.currentThread().getName());

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

            return null;
        });

    }


}
