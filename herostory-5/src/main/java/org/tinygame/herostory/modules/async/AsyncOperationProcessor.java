package org.tinygame.herostory.modules.async;

import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.modules.threadHandler.MainThreadProcessor;
import org.tinygame.herostory.modules.threadHandler.pool.NameableThreadFactory;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.async
 * @Author: Parker
 * @CreateTime: 2020-01-31 15:31
 * @Description: 同步操作执行器
 *
 * 1.异步io操作 单独拉到一个线程上去执行
 * 2.当异步执行完成后，再次回到主线程排队执行
 *
 */
@Slf4j
public final class AsyncOperationProcessor {

    /** 单例对象 */
    private static AsyncOperationProcessor _instance = new AsyncOperationProcessor();

    /**
     * 这里还使用单一线程 是为了防止 在多线程内 的数据脏读问题
     * 为了解决单一线程io操作速度
     * 可以使用 hash值 %  来分配 线程池数组
     */
    private static ExecutorService[] _esArray = null;

    /**
     * cpu核数
     */
    private static int _cpuCount = 1;



    /**
     * 私有化构造函数
     */
    private AsyncOperationProcessor(){}

    /**
     * 初始化
     */
    public static void init(){

        // cpu 核数
        _cpuCount = Runtime.getRuntime().availableProcessors();

        _esArray = new ExecutorService[_cpuCount];
        for (int i = 0; i < _cpuCount; i++) {
            String ThreadPoolName = "同步操作执行器"+i;
            _esArray[i] = Executors.newSingleThreadExecutor(new NameableThreadFactory(ThreadPoolName));
        }

    }

    /**
     * 获得单例对象
      * @return 单例对象
     */
    public static AsyncOperationProcessor getInstance(){
        return _instance;
    }

    /**
     * 执行器
     */
    public void process(AsyncOperation ao){

        // 绑定id
        int bindId = ao.bindId();
        // 绝对值 避免有负数
        int esIndex = Math.abs(bindId % _cpuCount);

        // 执行
        _esArray[esIndex].submit(()->{
            // 做 异常拦截 防止线程报错 导致释放锁
            try {
                // 执行异步操作
                ao.doAsync();

                // 执行完毕
                MainThreadProcessor.getInstance().process(ao::doFinish);
            }catch (Exception e){
                log.error(e.getMessage(),e);
            }
        });
    }


}
