package org.tinygame.herostory.modules.cmdHandler;

import com.google.protobuf.GeneratedMessageV3;
import io.netty.channel.ChannelHandlerContext;

/**
 * @BelongsProject: herostory-2
 * @BelongsPackage: org.tinygame.herostory.handler
 * @Author: Parker
 * @CreateTime: 2020-01-06 22:14
 * @Description: Handler 总执行接口
 */
public interface ICmdHandler<TCmd extends GeneratedMessageV3> {

    /**
     * 执行接口
     *
     * @param ctx
     * @param tCmd
     */
    void handle(ChannelHandlerContext ctx, TCmd tCmd);

}
