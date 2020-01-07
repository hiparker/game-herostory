package org.tinygame.herostory;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import lombok.extern.slf4j.Slf4j;
import org.tinygame.herostory.cmdHandler.CmdHandlerFactory;
import org.tinygame.herostory.coder.GameMsgDecoder;
import org.tinygame.herostory.coder.GameMsgEncoder;
import org.tinygame.herostory.coder.GameMsgRecognizer;

/**
 * Created Date by 2019/12/31 0031.
 * 服务器入口类
 * @author Parker
 */
@Slf4j
public class ServerMain {

    /**
     * 应用主函数
     * @param args
     */
    public static void main(String[] args) {

        // 初始化 编码构造器
        GameMsgRecognizer.init();
        // 初始化 执行构造器
        CmdHandlerFactory.init();

        // nio线程池

        // 接收 拉客
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        // 工作 干活
        EventLoopGroup workGroup = new NioEventLoopGroup();

        ServerBootstrap b = new ServerBootstrap();
        b.group(bossGroup,workGroup);
        // 服务端信道处理方法
        b.channel(NioServerSocketChannel.class);
        // 处理客户端信道
        b.childHandler(new ChannelInitializer<SocketChannel>() {
            @Override
            protected void initChannel(SocketChannel ch) throws Exception {
                // 在信道尾部 添加执行器
                ch.pipeline().addLast(
                    // Http服务器编解码器
                    new HttpServerCodec(),
                    // 句柄数 内容长度限制
                    new HttpObjectAggregator(65535),
                    // 默认协议 websocket 协议处理器 这里处理 握手、ping、pong 等消息
                    new WebSocketServerProtocolHandler("/websocket"),
                    // 解码器
                    new GameMsgDecoder(),
                    // 编码器
                    new GameMsgEncoder(),
                    // 自定义消息处理器 入站处理程序
                    new GameMsgHandler()
                );
            }
        });

        try {
            // 绑定12345 端口
            // 注意： 实际项目中 会使用 orgArray 中的参数来指定端口号
            ChannelFuture ce = b.bind(12345).sync();
            if(ce.isSuccess()){
                log.info("服务器启动成功！");
            }

            // 等待服务器信道关闭
            // 也就是说 不要立即退出应用程序，让应用程序可以一直提供服务
            ce.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}
