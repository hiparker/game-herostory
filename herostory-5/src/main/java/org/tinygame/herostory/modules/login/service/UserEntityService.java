package org.tinygame.herostory.modules.login.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.session.SqlSession;
import org.tinygame.herostory.modules.db.MysqlSessionFactory;
import org.tinygame.herostory.modules.login.entity.UserEntity;
import org.tinygame.herostory.modules.login.mapper.IUserDao;
import sun.security.jca.GetInstance;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.login.service
 * @Author: Parker
 * @CreateTime: 2020-01-24 12:00
 * @Description: TODO
 */
@Slf4j
public final class UserEntityService {

    /**
     * 单例对象
     */
    private static final UserEntityService _instance = new UserEntityService();

    /**
     * 私有化构造函数
     */
    private UserEntityService(){}

    /**
     * 获得实例对象
     * @return
     */
    public static  UserEntityService getInstance(){
        return _instance;
    }

    /**
     * 登陆
     * @return
     */
    public UserEntity userLogin(String userName,String password){

        // 非法
        if(StringUtils.isEmpty(userName) ||
                StringUtils.isEmpty(password)){
            return null;
        }

        try(SqlSession sqlSession = MysqlSessionFactory.openSession()){

            log.info("当前线程 = {}",Thread.currentThread().getName());

            // 获取 DAO 对象,
            // 注意: 这个 IUserDao 接口是没有具体实现的,
            IUserDao userDao = sqlSession.getMapper(IUserDao.class);
            if(null != userDao){
                UserEntity currUser = userDao.getUserByName(userName);
                if(null != currUser){
                    if (!currUser.getPassword().equals(password)){
                        log.error("用户密码错误, userId = {}, userName = {}",
                            userName,
                            password
                        );
                        throw new RuntimeException("用户密码错误");
                    }
                }else{
                    currUser = new UserEntity();
                    currUser.setUserName(userName);
                    currUser.setPassword(password);
                    //默认实用萨满角色
                    currUser.setHeroAvatar("Hero_Shaman");
                    userDao.insertInto(currUser);
                }

                return currUser;
            }else{
                return null;
            }
        }catch (Exception e){
            log.error(e.getMessage());
            e.printStackTrace();
        }
        return null;
    }

}
