package org.tinygame.herostory;

import com.google.protobuf.GeneratedMessageV3;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.util.AttributeKey;
import org.tinygame.herostory.broadcaster.BroadCaster;
import org.tinygame.herostory.cmdHandler.CmdHandlerFactory;
import org.tinygame.herostory.cmdHandler.ICmdHandler;
import org.tinygame.herostory.model.UserManager;
import org.tinygame.herostory.msg.GameMsgProtocol;


/**
 * @belongsproject: herostory
 * @belongspackage: org.tinygame.herostory.handler
 * @author: parker
 * @createtime: 2020-01-05 21:50
 * @description: handler执行类
 */
public class GameMsgHandler extends SimpleChannelInboundHandler<Object> {


    /**
     * 信道接入
     * @param ctx
     * @throws Exception
     */
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        super.channelActive(ctx);
        // 添加信道
        BroadCaster.channelAdd(ctx.channel());
    }

    /**
     * 信道断开
     * @param ctx
     * @throws Exception
     */
    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        super.handlerRemoved(ctx);
        Integer userId = (Integer) ctx.channel().attr(AttributeKey.valueOf("userId")).get();
        if(userId == null){
            return;
        }

        UserManager.removeUserById(userId);
        // 删除信道
        BroadCaster.channelRemove(ctx.channel());

        GameMsgProtocol.UserQuitResult.Builder resultBuilder = GameMsgProtocol.UserQuitResult.newBuilder();
        resultBuilder.setQuitUserId(userId);
        GameMsgProtocol.UserQuitResult result = resultBuilder.build();

        // 广播信道
        BroadCaster.cast(result);

    }


    /**
     * 信道处理
     * @param ctx
     * @param msg
     * @throws Exception
     */
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        System.out.println("客户端 msg = " + msg);

        if(msg == null ){
            return;
        }

        ICmdHandler<? extends GeneratedMessageV3> icmd = CmdHandlerFactory.create(msg.getClass());

        icmd.handle(ctx, cast(msg));
    }

    /**
     * 遇到泛型强转 欺骗编译器
     * @param msg
     * @param <ICmd>
     * @return
     */
    private static <ICmd extends GeneratedMessageV3> ICmd cast(Object msg){
        if(null == msg){
            return null;
        }
        return (ICmd) msg;
    }


}
