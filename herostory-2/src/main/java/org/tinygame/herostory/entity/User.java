package org.tinygame.herostory.entity;

import lombok.Data;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.entity
 * @Author: Parker
 * @CreateTime: 2020-01-05 22:09
 * @Description: TODO
 */
@Data
public class User {

    private Integer userId;
    private String heroAvatar;
    private Float moveToPosX;
    private Float moveToPosY;

}
