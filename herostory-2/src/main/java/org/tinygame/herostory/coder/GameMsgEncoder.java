package org.tinygame.herostory.coder;

import com.google.protobuf.GeneratedMessageV3;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelOutboundHandlerAdapter;
import io.netty.channel.ChannelPromise;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.msg.GameMsgProtocol;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.encoder
 * @Author: Parker
 * @CreateTime: 2020-01-05 22:21
 * @Description: 消息编码器
 */
@Slf4j
public class GameMsgEncoder extends ChannelOutboundHandlerAdapter {
    @Override
    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {

        if(msg == null || !(msg instanceof GeneratedMessageV3)){
            super.write(ctx, msg, promise);
            return;
        }

        int msgCode = GameMsgRecognizer.getMsgCodeByMsgClazz(msg.getClass());

        if(msgCode <= -1){
            log.error("暂无消息类型，msgClazz = "+msg.getClass().getName());
        }

        byte[] bs = ((GeneratedMessageV3) msg).toByteArray();

        ByteBuf buf = ctx.alloc().buffer();
        buf.writeShort((short)0);
        buf.writeShort((short)msgCode);
        buf.writeBytes(bs);

        BinaryWebSocketFrame frame = new BinaryWebSocketFrame(buf);

        super.write(ctx,frame,promise);
    }
}
