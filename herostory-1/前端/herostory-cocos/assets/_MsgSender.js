// @import
const mod_GameMsgProtocol = require("./_GameMsgProtocol");
const mod_MsgRecognizer = require("./_MsgRecognizer");
const mod_Protobuf = require("./Lib/protobuf");

/**
 * WebSocket
 * 
 * @var {WebSocket}
 */
let g_oWebSocket = null;

// @export
module.exports = {
    /** WebSocket 地址 */
    webSocketUrl: "",

    /**
     * 初始化
     * 
     * @param {string} strWebSocketUrl WebSocket 地址
     * @return
     */
    init(strWebSocketUrl) {
        console.log(`初始化消息发送者, webSocketUrl = ${strWebSocketUrl}`);
        this.webSocketUrl = strWebSocketUrl;
    },

    /**
     * 是否已经断开连接
     * 
     * @return {boolean}
     */
    get isDisconnected() {
        return null == g_oWebSocket;
    },

    /**
     * 连接
     * 
     * @param {(bSuccezz: boolean) => void} funCb 回调函数
     * @return {void}
     */
    connect(funCb) {
        if (null != g_oWebSocket) {
            return;
        }

        console.log("尝试连接服务器");

        // 创建 WebSocket
        let oWebSocket = new WebSocket(this.webSocketUrl);
        oWebSocket.binaryType = "arraybuffer";

        oWebSocket.onopen = (oEvent) => {
            console.log(`已连接服务器, webSocketUrl = ${this.webSocketUrl}`);
            g_oWebSocket = oWebSocket;

            // 确保回调函数不为空
            funCb = funCb || function() {
            };

            // 执行回调函数
            funCb(true);
        };

        oWebSocket.onerror = (oEvent) => {
            console.error(`连接服务器失败, webSocketUrl = ${this.webSocketUrl}`);
            g_oWebSocket = null;

            // 确保回调函数不为空
            funCb = funCb || function() {
            };

            // 执行回调函数
            funCb(false);
        };

        oWebSocket.onclose = (oEvent) => {
            console.warn("服务器连接已关闭");
            g_oWebSocket = null;
        }

        oWebSocket.onmessage = (oEvent) => {
            // 反序列化为消息对象
            let oMsg = __makeMsgObj(new Uint8Array(oEvent.data));

            if (!oMsg) {
                return;
            }

            console.log(`从服务器端返回数据, ${JSON.stringify(oMsg)}`);
            // 触发事件函数
            this.onReceiveMsg(oMsg);
        }
    },

    /**
     * 发送消息
     * 
     * @param {{ msgCode: string, msgBody: any, }} oMsg 消息对象
     * @return {void}
     */
    sendMsg(oMsg) {
        if (!oMsg || 
            !g_oWebSocket) {
            return;
        }

        // 序列化为字节数组
        let oUint8Array = __makeUint8Array(oMsg);

        if (!oUint8Array || 
            oUint8Array.byteLength <= 0) {
            return;
        }

        // 发送字节数组
        g_oWebSocket.send(oUint8Array);
    },

    /**
     * 接收消息对象
     * 
     * @param {{ msgCode: string, msgBody: any, }} oMsg 消息对象
     * @return {void}
     */
    onReceiveMsg(oMsg) {
    }
};

/**
 * 将消息对象序列化为字节数组
 * 
 * @param {{ msgCode: string, msgBody: any, }} oMsg 消息对象
 * @return {Uint8Array}
 */
function __makeUint8Array(oMsg) {
    if (!oMsg ||
        !oMsg.msgCode || 
        !oMsg.msgBody) {
        return null;
    }

    // 获取消息代码
    let strMsgCode = oMsg.msgCode;
    let nMsgCode = mod_GameMsgProtocol.msg.MsgCode[strMsgCode];

    // 获取消息类型
    let strMsgType = mod_MsgRecognizer.recognize(nMsgCode);
    if (!strMsgType) {
        // 如果无法识别为消息类型,
        console.error(`无法识别为消息类型, msgCode = ${strMsgCode} ( ${nMsgCode} )`);
        return null;
    }

    // 获取对应的 Protobuf 消息
    let oProtobufMsg = mod_GameMsgProtocol.msg[strMsgType];
    if (!oProtobufMsg) {
        // 如果对应的 Protobuf 消息为空,
        console.error(`对应的 Protobuf 消息为空, strMsgType = ${strMsgType}`);
        return null;
    }

    let oWriter = mod_Protobuf.Writer.create();

    // 先写出消息编号
    oWriter.uint32((nMsgCode >> 24) & 0xff);
    oWriter.uint32((nMsgCode >> 16) & 0xff);
    oWriter.uint32((nMsgCode >> 8) & 0xff);
    oWriter.uint32(nMsgCode & 0xff);

    // 将消息体序列化为二进制
    let oUint8Array = oProtobufMsg.encode(
        oMsg.msgBody,
        oWriter
    ).finish();

    return oUint8Array;
}

/**
 * 将字节数组反序列化为消息对象
 * 
 * @param {Uint8Array} oUint8Array 字节数组
 * @return {{ msgCode: string, msgBody: any, }}
 */
function __makeMsgObj(oUint8Array) {
    if (!oUint8Array || 
        !oUint8Array.byteLength) {
        return null;
    }

    // 获取消息代码
    let nMsgCode = (oUint8Array[0] & 0xFF) << 24 
        | (oUint8Array[1] & 0xFF) << 16 
        | (oUint8Array[2] & 0xFF) << 8 
        | (oUint8Array[3] & 0xFF);

    let strMsgCode = mod_GameMsgProtocol.msg.MsgCode[nMsgCode];

    // 获取消息类型
    let strMsgType = mod_MsgRecognizer.recognize(nMsgCode);
    if (!strMsgType) {
        // 如果无法识别为消息类型,
        console.error(`无法识别为消息类型, msgCode = ${strMsgCode} ( ${nMsgCode} )`);
        return null;
    }

    // 获取对应的 Protobuf 消息
    let oProtobufMsg = mod_GameMsgProtocol.msg[strMsgType];
    if (!oProtobufMsg) {
        // 如果对应的 Protobuf 消息为空,
        console.error(`对应的 Protobuf 消息为空, msgType = ${strMsgType}`);
        return null;
    }

    // 反序列化消息体
    let oMsgBody = oProtobufMsg.decode(oUint8Array.subarray(4));

    return {
        msgCode: strMsgCode,
        msgBody: oMsgBody,
    }
}
