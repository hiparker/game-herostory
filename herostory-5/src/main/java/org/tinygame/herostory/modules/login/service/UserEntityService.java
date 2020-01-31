package org.tinygame.herostory.modules.login.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.session.SqlSession;
import org.tinygame.herostory.modules.async.AsyncOperation;
import org.tinygame.herostory.modules.async.AsyncOperationProcessor;
import org.tinygame.herostory.modules.db.MysqlSessionFactory;
import org.tinygame.herostory.modules.login.entity.UserEntity;
import org.tinygame.herostory.modules.login.mapper.IUserDao;

import java.util.function.Function;

/**
 * @BelongsProject: herostory
 * @BelongsPackage: org.tinygame.herostory.modules.login.service
 * @Author: Parker
 * @CreateTime: 2020-01-24 12:00
 * @Description: 登录 Service
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
     * 登录
     * @param userName 用户名
     * @param password 密码
     * @param callback 回调函数
     */
    public void userLogin(String userName, String password, Function<UserEntity,Void> callback){

        AsyncOperation ao = new AsyncUserLogin(userName,password){
            @Override
            public void doFinish() {
                // 执行完毕 回调
                callback.apply(this.getUserEntity());
            }
        };

        // 放入同步操作执行器
        AsyncOperationProcessor.getInstance().process(ao);
    }

    /**
     * 内部类
     */
    private static class AsyncUserLogin implements AsyncOperation {

        /** 用户名 */
        private final String _userName;
        /** 用户密码 */
        private final String _password;

        private UserEntity userEntity;

        /**
         * 构造函数
         * @param username 用户名
         * @param password 密码
         */
        AsyncUserLogin(String username,String password){
            _userName = username;
            _password = password;
            userEntity = null;
        }

        /**
         * 获得对象
         * @return
         */
        public UserEntity getUserEntity(){
            return userEntity;
        }

        /**
         * 绑定id
         * @return as码
         */
        @Override
        public int bindId() {
            return _userName.charAt(_userName.length()-1);
        }

        @Override
        public void doAsync() {
            // 非法
            if(StringUtils.isEmpty(_userName) ||
                    StringUtils.isEmpty(_password)){
                log.error("参数为空！");
            }

            try(SqlSession sqlSession = MysqlSessionFactory.openSession()){

                log.info("当前线程 = {}",Thread.currentThread().getName());

                // 获取 DAO 对象,
                // 注意: 这个 IUserDao 接口是没有具体实现的,
                IUserDao userDao = sqlSession.getMapper(IUserDao.class);
                if(null != userDao){
                    UserEntity currUser = userDao.getUserByName(_userName);
                    if(null != currUser){
                        if (!currUser.getPassword().equals(_password)){
                            log.error("用户密码错误, userId = {}, userName = {}",
                                    _userName,
                                    _password
                            );
                            throw new RuntimeException("用户密码错误");
                        }
                    }else{
                        currUser = new UserEntity();
                        currUser.setUserName(_userName);
                        currUser.setPassword(_password);
                        //默认实用萨满角色
                        currUser.setHeroAvatar("Hero_Shaman");
                        userDao.insertInto(currUser);
                    }
                    // 对象赋值 在 reactor模型中 进行赋值传输
                    userEntity = currUser;
                }
            }catch (Exception e){
                log.error(e.getMessage());
            }
        }
    }

}
