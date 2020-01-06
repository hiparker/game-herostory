package org.tinygame.herostory.cmdHandler;

import com.google.protobuf.GeneratedMessageV3;
import org.tinygame.herostory.msg.GameMsgProtocol;

import java.util.HashMap;
import java.util.Map;

/**
 * @BelongsProject: herostory-2
 * @BelongsPackage: org.tinygame.herostory.cmdHandler
 * @Author: Parker
 * @CreateTime: 2020-01-06 22:29
 * @Description: 执行工厂
 */
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
     *
     */
    public static void init(){
        _handlerMap.put(GameMsgProtocol.UserEntryCmd.class,new UserEntryCmdHandler());
        _handlerMap.put(GameMsgProtocol.UserMoveToCmd.class,new UserMoveToCmdHandler());
        _handlerMap.put(GameMsgProtocol.WhoElseIsHereCmd.class,new WhoElseIsHereCmdHandler());
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

}
