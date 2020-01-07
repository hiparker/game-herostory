package org.tinygame.herostory.coder;


import com.google.protobuf.Message;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import lombok.extern.slf4j.Slf4j;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.decoder
 * @Author: Parker
 * @CreateTime: 2020-01-05 21:54
 * @Description: 消息解码器
 *
 * 重构原则 保障单一原则，低耦合，高内聚
 *
 */
@Slf4j
public class GameMsgDecoder extends ChannelInboundHandlerAdapter {


    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {

        // 非法判断
        if(!(msg instanceof BinaryWebSocketFrame)){
            return;
        }

        BinaryWebSocketFrame frame = (BinaryWebSocketFrame) msg;

        ByteBuf bf = frame.content();

        // 读取长度
        bf.readShort();
        // 读取编号
        int msgCode = bf.readShort();

        // Message
        Message.Builder msgBuilder = GameMsgRecognizer.getBuilderByMsgCode(msgCode);
        if(msgBuilder == null){
            log.error("无法识别的消息，msgCode={}",msgCode);
            return;
        }

        byte[] bs = new byte[bf.readableBytes()];
        bf.readBytes(bs);

        msgBuilder.clear();
        msgBuilder.mergeFrom(bs);

        // 构建消息
        Message newMsg = msgBuilder.build();

        if(newMsg != null){
            ctx.fireChannelRead(newMsg);
        }
    }
}
