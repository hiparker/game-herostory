package org.tinygame.herostory.coder;

import com.google.protobuf.GeneratedMessageV3;
import com.google.protobuf.Message;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.msg.GameMsgProtocol;
import java.util.HashMap;
import java.util.Map;

/**
 * Created Date by 2020/1/7 0007.
 *
 * 消息识别器
 * @author Parker
 */
@Slf4j
public final class GameMsgRecognizer {

    /**
     * 消息编号和消息体
     */
    static private Map<Integer, GeneratedMessageV3> _msgCodeAndMsgBodyMap = new HashMap<>();

    /**
     * 消息Clazz和消息编号
     */
    static private Map<Class<?>,Integer> _msgClazzAndMsgCodeMap = new HashMap<>();

    /**
     * 私有构造器
     */
    private GameMsgRecognizer(){};

    /**
     * 初始化
     */
    static public void init(){

        // 反射 动态注册 Map
        Class<?>[] innerClazzs = GameMsgProtocol.class.getDeclaredClasses();
        for(Class<?> innerClazz : innerClazzs){
            // 如果 clazz 不是 messageV3 的 则不做处理
            if(!(GeneratedMessageV3.class.isAssignableFrom(innerClazz))){
                continue;
            }

            // 获得clazz名称
            String clazzName = innerClazz.getSimpleName();
            // 小写
            clazzName = clazzName.toLowerCase();

            for (GameMsgProtocol.MsgCode msgCode : GameMsgProtocol.MsgCode.values()) {
                String strMsgCode = msgCode.name();
                strMsgCode = strMsgCode.replaceAll("_","");
                strMsgCode = strMsgCode.toLowerCase();

                // 非法判断
                if(!strMsgCode.startsWith(clazzName)){
                    continue;
                }

                // 判断是否关联
                // log.info("{} <=> {}",innerClazz.getName(),msgCode.getNumber());

                try {
                    Object returnObj = innerClazz.getDeclaredMethod("getDefaultInstance").invoke(innerClazz);

                    // 消息编号和消息体 初始化
                    _msgCodeAndMsgBodyMap.put(
                            msgCode.getNumber(),
                            (GeneratedMessageV3) returnObj
                    );

                    // 消息Clazz和消息编号
                    _msgClazzAndMsgCodeMap.put(
                            innerClazz,
                            msgCode.getNumber()
                    );

                }catch (Exception e) {
                    log.error(e.getMessage());
                }

            }
        }
    }

    /**
     * 根据msg编号 构建Message
     * @param msgCode
     * @return
     */
    static public Message.Builder getBuilderByMsgCode(Integer msgCode){
        if(null == msgCode){
            return null;
        }

        GeneratedMessageV3 msg = _msgCodeAndMsgBodyMap.get(msgCode);
        if(msg == null){
            return null;
        }

        return msg.newBuilderForType();
    }

    static public int getMsgCodeByMsgClazz(Class<?> msg){
        if(null == msg){
            return -1;
        }

        Integer msgCode = _msgClazzAndMsgCodeMap.get(msg);
        if(msgCode == null){
            return -1;
        }
        return msgCode.intValue();
    }


}
