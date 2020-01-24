package org.tinygame.herostory.modules.login.mapper;

import org.apache.ibatis.annotations.Param;
import org.tinygame.herostory.modules.login.entity.UserEntity;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.login.mapper
 * @Author: Parker
 * @CreateTime: 2020-01-24 11:59
 * @Description: TODO
 */
public interface IUserDao {

    /**
     * 根据用户名称获得用户实体
     * @param userName 用户名
     * @return 用户实体
     */
    UserEntity getUserByName(@Param("userName") String userName);

    /**
     * 添加用户
     * @param userEntity 用户实体
     */
    void insertInto(UserEntity userEntity);

}
