package org.tinygame.herostory.modules.cmdHandler;

import com.google.protobuf.GeneratedMessageV3;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.common.msg.GameMsgProtocol;
import org.tinygame.herostory.common.utils.PackageUtil;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * @BelongsProject: herostory-3
 * @BelongsPackage: org.tinygame.herostory.modules.cmdHandler
 * @Author: Parker
 * @CreateTime: 2020-01-06 22:29
 * @Description: 执行工厂
 *
 *  重构原则 保障单一原则，低耦合，高内聚
 */
@Slf4j
public final class CmdHandlerFactory {

    /**
     * 方法容器
     */
    private static final Map<Class<?>,ICmdHandler<? extends GeneratedMessageV3>> _handlerMap = new HashMap<>();

    /**
     * 私有构造函数
     */
    private CmdHandlerFactory(){}

    /**
     * 初始化
     * 通过反射 拿到所有的 Handler
     *
     */
    public static void init(){

        // 拿到当前包下 实现了 ICmdHandler 接口的,所有子类
        Set<Class<?>> clazzSet = PackageUtil.listSubClazz(CmdHandlerFactory.class.getPackage().getName(),
                true,
                ICmdHandler.class
        );

        for (Class<?> aClass : clazzSet) {
            // 位运算
            if((aClass.getModifiers() & Modifier.ABSTRACT) != 0){
                continue;
            }

            // 获得方法数组
            Method[] methods = aClass.getMethods();

            Class<?> msgType = null;

            for (Method currMethod : methods) {

                // 非法判断
                if(!"handle".equals(currMethod.getName())){
                    continue;
                }

                // 获取函数参数类型
                Class<?>[] paramTypes = currMethod.getParameterTypes();

                if(paramTypes.length != 2 ||
                        !(GeneratedMessageV3.class.isAssignableFrom(paramTypes[1]))){
                    continue;
                }

                msgType = paramTypes[1];
                break;
            }

            // 非法判断
            if(null == msgType){
                continue;
            }

            try {

                ICmdHandler<?> handler = (ICmdHandler<?>) aClass.newInstance();

                log.info("{} <=> {}",msgType,handler.getClass());

                _handlerMap.put(msgType,handler);

            } catch (Exception e) {
                log.error(e.getMessage());
            }
        }
    }

    /**
     * 创建执行方法
     * @param msgClazz
     * @return
     */
    public static ICmdHandler<? extends GeneratedMessageV3> create(Class<?> msgClazz){
        if(null ==  msgClazz){
            return null;
        }
        return _handlerMap.get(msgClazz);
    }

    static private <ICmd extends GeneratedMessageV3> ICmd cast(Object msg){
        if(null == msg){
            return null;
        }
        return (ICmd) msg;
    }

}
