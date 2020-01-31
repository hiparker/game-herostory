package org.tinygame.herostory.modules.threadHandler;

import com.google.protobuf.GeneratedMessageV3;
import io.netty.channel.ChannelHandlerContext;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.modules.cmdHandler.CmdHandlerFactory;
import org.tinygame.herostory.modules.cmdHandler.ICmdHandler;
import org.tinygame.herostory.modules.threadHandler.pool.NameableThreadFactory;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.threadHandler.pool
 * @Author: Parker
 * @CreateTime: 2020-01-23 21:59
 * @Description: 单一线程执行主函数
 * 避免多线程 造成的线程死锁 脏读 问题
 * 优点：
 *  不需要 synchronize 或者 atomic 那么臃肿的代码
 *  出了问题 好排查
 *  后续人员开发 无需关系 多线程问题
 */
@Slf4j
public final class MainThreadProcessor {

    /** 自身实例 */
    private static final MainThreadProcessor _instance = new MainThreadProcessor();

    /** 单一线程池 */
    private static final ExecutorService _executorService = Executors.newSingleThreadExecutor(new NameableThreadFactory("游戏单一线程处理"));

    /**
     * 私有化构造函数
     */
    private MainThreadProcessor(){}

    /**
     * 获得线程池实例
     * @return
     */
    public static MainThreadProcessor getInstance(){
        return _instance;
    }


    /**
     * 单一线程执行主函数
     * @param ctx 信道
     * @param msg 消息
     */
    public void process(ChannelHandlerContext ctx, GeneratedMessageV3 msg){

        // 线程池单一执行
        _executorService.submit(()->{
            try {
                ICmdHandler<? extends GeneratedMessageV3> icmd = CmdHandlerFactory.create(msg.getClass());
                icmd.handle(ctx, cast(msg));
            }catch (Exception e){
                log.error(e.getMessage(),e);
            }
        });
    }

    /**
     * 单一线程执行主函数
     * @param r runnable
     */
    public void process(Runnable r){
        if(null != r){
            _executorService.submit(r);
        }
    }

    /**
     * 遇到泛型强转 欺骗编译器
     * @param msg
     * @param <ICmd>
     * @return
     */
    private <ICmd extends GeneratedMessageV3> ICmd cast(Object msg){
        if(null == msg){
            return null;
        }
        return (ICmd) msg;
    }

}
