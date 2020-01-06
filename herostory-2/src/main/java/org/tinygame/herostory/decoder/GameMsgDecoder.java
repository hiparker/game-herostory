package org.tinygame.herostory.decoder;


import com.google.protobuf.GeneratedMessageV3;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import org.tinygame.herostory.msg.GameMsgProtocol;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.decoder
 * @Author: Parker
 * @CreateTime: 2020-01-05 21:54
 * @Description: TODO
 */
public class GameMsgDecoder extends ChannelInboundHandlerAdapter {


    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {

        // 异常处理
        if(!(msg instanceof BinaryWebSocketFrame)){
            return;
        }

        BinaryWebSocketFrame frame = (BinaryWebSocketFrame) msg;

        ByteBuf bf = frame.content();

        // 读取长度
        bf.readShort();
        // 读取编号
        int msgCode = bf.readShort();

        byte[] bs = new byte[bf.readableBytes()];

        bf.readBytes(bs);

        GeneratedMessageV3 cmd = null;

        switch (msgCode){
            case GameMsgProtocol.MsgCode.USER_ENTRY_CMD_VALUE:
                cmd =  GameMsgProtocol.UserEntryCmd.parseFrom(bs);
                break;
            case GameMsgProtocol.MsgCode.WHO_ELSE_IS_HERE_CMD_VALUE:
                cmd =  GameMsgProtocol.WhoElseIsHereCmd.parseFrom(bs);
                break;
            case GameMsgProtocol.MsgCode.USER_MOVE_TO_CMD_VALUE:
                cmd =  GameMsgProtocol.UserMoveToCmd.parseFrom(bs);
                break;

        }

        if(cmd != null){
            ctx.fireChannelRead(cmd);
        }



    }
}
