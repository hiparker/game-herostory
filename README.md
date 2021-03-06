## herostory-1 创建netty服务器 作为游戏服务器

## herostory-2 使用protocolbuf 作为前后端交互（用户加入、移动）

## herostory-2 重构架构加入设计模式（攻击、掉血）

## herostory-4 单线程游戏系统架构

## herostory-5 CRUD数据库操作（针对Io操作，处理为多线程 Reactor模式）





《Hero Story（英雄传说 ）》是一款 MMORPG 游戏项目

用户名称和密码可以随意填写，登录后需要选取角色。

如果你是在 PC 浏览器中打开的这个项目，那么：
- 点击鼠标右键可以令英雄移动；
- 点击鼠标左键攻击；

如果你是在手机浏览器中打开这个项目，那么：
- 触屏可以令英雄移动；
- 点击右下角攻击按钮可以攻击；

考虑到学习和研究的目的，所以该项目只公开了部分代码，并做了大量简化，只保留了登录、选择角色、移动和攻击这 4 个功能。

该项目开发环境如下：

## 前端

- 编辑器：Cocos Creator 2.2.0；
- 开发语言：JavaScript；
- 发布平台：Web Mobile（HTML5）；
- 第三方插件：
    - Spine 实现骨骼动画；
    - Google Protobuf 实现网络通信；

## 后端

- 开发环境：IntelliJ IDEA 2019.2；
- 开发语言：Java 1.8；
- 运行时操作系统：CentOS 7.6 x64；
- 数据库： MariaDB 5.5.64；
- 依赖库：
    - Netty 高性能网络通信框架；
    - Google Protobuf 实现网络传输协议；
    - MyBatis 实现数据库持久化；
    - Lombok 代码简化插件

----

学习该项目前，需要你已经掌握或知道以下知识：

- 基本掌握 Cocos Creator 开发环境和开发流程；
- 明白 Component 概念；
- 了解基本的 Google Protobuf 配置文件语法，可以通过命令行生成代码文件；
- 了解 JavaScript 语言语法，知道一点点函数式编程；
- 最好懂一点点数学（游戏项目需要一点点数学，不过初中数学水平已经够用）；
