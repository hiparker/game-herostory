package org.tinygame.herostory.broadcaster;

import io.netty.channel.Channel;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.util.concurrent.GlobalEventExecutor;

/**
 * @BelongsProject: herostory-2
 * @BelongsPackage: org.tinygame.herostory.broadcaster
 * @Author: Parker
 * @CreateTime: 2020-01-06 21:42
 * @Description: 信道工具类
 */
public final class BroadCaster {

    /**
     * 信道集合
     */
    private static ChannelGroup _channelGroup = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);


    /**
     * 私有构造函数
     */
    private BroadCaster(){};



    /**
     * 添加信道
     *
     * @param channel
     */
    public static void channelAdd(Channel channel){
        if(null == channel){
            return;
        }
        _channelGroup.add(channel);
    }

    /**
     * 删除信道
     *
     * @param channel
     */
    public static void channelRemove(Channel channel){
        if(null == channel){
            return;
        }
        _channelGroup.remove(channel);
    }

    /**
     * 广播信道
     *
     * @param msg
     */
    public static void cast(Object msg){
        _channelGroup.writeAndFlush(msg);
    }

}
