package org.tinygame.herostory.modules.model;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * @BelongsProject: herostory-2
 * @BelongsPackage: org.tinygame.herostory.modules.model
 * @Author: Parker
 * @CreateTime: 2020-01-06 21:53
 * @Description: 用户管理类
 */
public final class UserManager {

    /**
     * 用户字典
     */
    private static Map<Integer,User> _userMap = new HashMap<>();


    /**
     * 私有构造函数
     */
    private UserManager(){};


    /**
     * 添加用户
     *
     * @param currUser
     */
    public static void addUser(User currUser){
        if(null == currUser){
            return;
        }
        _userMap.put(currUser.getUserId(),currUser);
    }

    /**
     * 根据ID 删除用户
     *
     * @param userId
     */
    public static void removeUserById(Integer userId){
        if(null == userId){
            return;
        }
        _userMap.remove(userId);
    }

    /**
     * 根据ID 修改用户
     *
     * @param editUser
     */
    public static void updateUserById(User editUser){
        if(null == editUser){
            return;
        }
        _userMap.put(editUser.getUserId(),editUser);
    }

    /**
     * 获得具体用户
     *
     * @param userId
     * @return
     */
    public static User getById(Integer userId){
        if(null == userId){
            return null;
        }
        return _userMap.get(userId);
    }

    /**
     * 用户列表
     * 返回一个 集合
     *
     * @return
     */
    public static Collection<User> getArray(){
        return _userMap.values();
    }

}
