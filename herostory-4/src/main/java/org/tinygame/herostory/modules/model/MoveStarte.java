package org.tinygame.herostory.modules.model;

import lombok.Data;

/**
 * Created Date by 2020/1/20 0020.
 *
 * 移动消息
 * @author Parker
 */

@Data
public class MoveStarte {

    /** 来源坐标 X */
    private float fromPosX;
    /** 来源坐标 Y */
    private float fromPosY;
    /** 目标坐标 X */
    private float toPosX;
    /** 目标坐标 Y */
    private float toPosY;
    /** 执行实践 */
    private long startTime;

}
