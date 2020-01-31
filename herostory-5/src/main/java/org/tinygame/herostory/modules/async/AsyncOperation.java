package org.tinygame.herostory.modules.async;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.async
 * @Author: Parker
 * @CreateTime: 2020-01-31 15:45
 * @Description: 同步操作接口
 */
public interface AsyncOperation {

    /**
     * 执行操作
     */
    void doAsync();

    /**
     * 执行完成
     */
    default void doFinish(){}

    /**
     * 绑定Id
     * @return 值
     */
    default int bindId(){
        return 0;
    }

}
