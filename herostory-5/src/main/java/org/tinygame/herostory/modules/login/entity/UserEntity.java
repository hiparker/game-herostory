package org.tinygame.herostory.modules.login.entity;

import lombok.Data;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.login.entity
 * @Author: Parker
 * @CreateTime: 2020-01-24 11:56
 * @Description: UserEntity
 */

@Data
public class UserEntity {

    /** 用户ID */
    private Integer userId;

    /** 用户名 */
    private String userName;

    /** 密码 */
    private String password;

    /** 英雄角色 */
    private String heroAvatar;


}
