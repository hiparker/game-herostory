package org.tinygame.herostory.modules.db;

import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.db
 * @Author: Parker
 * @CreateTime: 2020-01-24 12:32
 * @Description: MysqlSessionFactory
 */
@Slf4j
public final class MysqlSessionFactory {

    /**
     * Mybatis session 会话工厂
     */
    private static SqlSessionFactory _sqlSessionFactory;

    /**
     * 私有化构造函数
     */
    private MysqlSessionFactory(){}

    /**
     * 初始化
     */
    public static void init(){
        try {
            _sqlSessionFactory = (new SqlSessionFactoryBuilder()).build(
                    Resources.getResourceAsStream("MyBatisConfig.xml")
            );
        } catch (IOException e) {
            log.error(e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * 开启MySQL会话
     * @return Sql会话
     */
    public static SqlSession openSession(){
        if(null == _sqlSessionFactory){
            throw new RuntimeException("_sqlSessionFactory 尚未初始化");
        }

        return _sqlSessionFactory.openSession(true);
    }

}
