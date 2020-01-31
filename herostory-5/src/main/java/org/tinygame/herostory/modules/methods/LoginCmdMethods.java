package org.tinygame.herostory.modules.methods;

import java.util.Iterator;
import java.util.Map;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.methods
 * @Author: Parker
 * @CreateTime: 2020-01-31 17:57
 * @Description: 为了解决 同一个class 内存在多少方法 无法有效反射
 * 临时替代方案
 */
public final class LoginCmdMethods {

    /**
     * 私有化构造函数
     */
    private LoginCmdMethods(){};

    /**
     * 清除登录超时用户
     * @param userLoginTimeMap 用户登录时间Map
     */
    public static void clearTimeOutLoginTime(Map<String,Long> userLoginTimeMap){
        if(null == userLoginTimeMap ||
                userLoginTimeMap.isEmpty()){
            return;
        }

        // 获取系统时间
        long currTime = System.currentTimeMillis();
        // 获取迭代器
        Iterator<String> it = userLoginTimeMap.keySet().iterator();
        while (it.hasNext()){
            String userName = it.next();
            Long longTime = userLoginTimeMap.get(userName);

            if(longTime == null ||
                    currTime - longTime > 5000){
                // 登录超时
                it.remove();
            }
        }

    }

}
