package org.tinygame.herostory.handler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.util.AttributeKey;
import io.netty.util.concurrent.GlobalEventExecutor;
import org.tinygame.herostory.entity.User;
import org.tinygame.herostory.msg.GameMsgProtocol;

import java.util.HashMap;
import java.util.Map;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.handler
 * @Author: Parker
 * @CreateTime: 2020-01-05 21:50
 * @Description: TODO
 */
public class GameMsgHandler extends SimpleChannelInboundHandler<Object> {

    private static ChannelGroup _channelGroup = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
    private static Map<Integer,User> _userMap = new HashMap<>();

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        super.channelActive(ctx);
        _channelGroup.add(ctx.channel());
    }

    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        super.handlerRemoved(ctx);
        Integer userId = (Integer) ctx.channel().attr(AttributeKey.valueOf("userId")).get();
        if(userId == null){
            return;
        }

        _userMap.remove(userId);
        _channelGroup.remove(ctx.channel());

        GameMsgProtocol.UserQuitResult.Builder resultBuilder = GameMsgProtocol.UserQuitResult.newBuilder();
        resultBuilder.setQuitUserId(userId);
        GameMsgProtocol.UserQuitResult result = resultBuilder.build();

        _channelGroup.writeAndFlush(result);

    }


    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        System.out.println("客户端 msg = " + msg);

        if(msg == null ){
            return;
        }

        // 登入
        if(msg instanceof GameMsgProtocol.UserEntryCmd){

            GameMsgProtocol.UserEntryCmd cmd =  (GameMsgProtocol.UserEntryCmd) msg;

            // 用户添加到map里
            User newUser = new User();
            newUser.setUserId(cmd.getUserId());
            newUser.setHeroAvatar(cmd.getHeroAvatar());
            _userMap.put(newUser.getUserId(),newUser);

            GameMsgProtocol.UserEntryResult.Builder resultBuilder = GameMsgProtocol.UserEntryResult.newBuilder();
            resultBuilder.setUserId(cmd.getUserId());
            resultBuilder.setHeroAvatar(cmd.getHeroAvatar());

            // 绑定id
            ctx.channel().attr(AttributeKey.valueOf("userId")).set(cmd.getUserId());

            GameMsgProtocol.UserEntryResult result = resultBuilder.build();

            _channelGroup.writeAndFlush(result);

        }else if(msg instanceof GameMsgProtocol.WhoElseIsHereCmd){

            GameMsgProtocol.WhoElseIsHereResult.Builder resultBuilder = GameMsgProtocol.WhoElseIsHereResult.newBuilder();

            if(_userMap != null){
                for (User currUser : _userMap.values()) {
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
            Thread.sleep(500);

            // 获得当前 所在用户状态
            if(null != _userMap){
                for (User currUser : _userMap.values()) {
                    if(currUser == null){
                        continue;
                    }
                    // 非空判断
                    if(null != currUser.getMoveToPosX() &&
                            null != currUser.getMoveToPosY()){

                        System.out.println(123);

                        GameMsgProtocol.UserMoveToResult.Builder resultBuilderM = GameMsgProtocol.UserMoveToResult.newBuilder();
                        resultBuilderM.setMoveUserId(currUser.getUserId());
                        resultBuilderM.setMoveToPosX(currUser.getMoveToPosX());
                        resultBuilderM.setMoveToPosY(currUser.getMoveToPosY());
                        GameMsgProtocol.UserMoveToResult resultM = resultBuilderM.build();

                        ctx.writeAndFlush(resultM);
                        //睡眠500
                        Thread.sleep(500);
                    }
                }
            }

        }else if(msg instanceof GameMsgProtocol.UserMoveToCmd){
            Integer userId = (Integer) ctx.channel().attr(AttributeKey.valueOf("userId")).get();
            if(null == userId){
                return;
            }
            GameMsgProtocol.UserMoveToCmd cmd = (GameMsgProtocol.UserMoveToCmd)msg;

            // 更改用户
            User moveUser = _userMap.get(userId);
            moveUser.setMoveToPosX(cmd.getMoveToPosX());
            moveUser.setMoveToPosY(cmd.getMoveToPosY());
            _userMap.put(userId,moveUser);

            GameMsgProtocol.UserMoveToResult.Builder resultBuilder = GameMsgProtocol.UserMoveToResult.newBuilder();
            resultBuilder.setMoveUserId(userId);
            resultBuilder.setMoveToPosX(cmd.getMoveToPosX());
            resultBuilder.setMoveToPosY(cmd.getMoveToPosY());

            GameMsgProtocol.UserMoveToResult result = resultBuilder.build();

            _channelGroup.writeAndFlush(result);
        }


    }



}
