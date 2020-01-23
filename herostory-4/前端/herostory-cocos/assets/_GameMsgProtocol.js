/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "./Lib/protobuf";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    /**
     * MsgCode enum.
     * @name msg.MsgCode
     * @enum {string}
     * @property {number} USER_ENTRY_CMD=0 USER_ENTRY_CMD value
     * @property {number} USER_ENTRY_RESULT=1 USER_ENTRY_RESULT value
     * @property {number} WHO_ELSE_IS_HERE_CMD=2 WHO_ELSE_IS_HERE_CMD value
     * @property {number} WHO_ELSE_IS_HERE_RESULT=3 WHO_ELSE_IS_HERE_RESULT value
     * @property {number} USER_MOVE_TO_CMD=4 USER_MOVE_TO_CMD value
     * @property {number} USER_MOVE_TO_RESULT=5 USER_MOVE_TO_RESULT value
     * @property {number} USER_QUIT_RESULT=6 USER_QUIT_RESULT value
     * @property {number} USER_STOP_CMD=7 USER_STOP_CMD value
     * @property {number} USER_STOP_RESULT=8 USER_STOP_RESULT value
     * @property {number} USER_ATTK_CMD=9 USER_ATTK_CMD value
     * @property {number} USER_ATTK_RESULT=10 USER_ATTK_RESULT value
     * @property {number} USER_SUBTRACT_HP_RESULT=11 USER_SUBTRACT_HP_RESULT value
     * @property {number} USER_DIE_RESULT=12 USER_DIE_RESULT value
     * @property {number} USER_LOGIN_CMD=13 USER_LOGIN_CMD value
     * @property {number} USER_LOGIN_RESULT=14 USER_LOGIN_RESULT value
     * @property {number} SELECT_HERO_CMD=15 SELECT_HERO_CMD value
     * @property {number} SELECT_HERO_RESULT=16 SELECT_HERO_RESULT value
     * @property {number} GET_RANK_CMD=17 GET_RANK_CMD value
     * @property {number} GET_RANK_RESULT=18 GET_RANK_RESULT value
     */
    msg.MsgCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER_ENTRY_CMD"] = 0;
        values[valuesById[1] = "USER_ENTRY_RESULT"] = 1;
        values[valuesById[2] = "WHO_ELSE_IS_HERE_CMD"] = 2;
        values[valuesById[3] = "WHO_ELSE_IS_HERE_RESULT"] = 3;
        values[valuesById[4] = "USER_MOVE_TO_CMD"] = 4;
        values[valuesById[5] = "USER_MOVE_TO_RESULT"] = 5;
        values[valuesById[6] = "USER_QUIT_RESULT"] = 6;
        values[valuesById[7] = "USER_STOP_CMD"] = 7;
        values[valuesById[8] = "USER_STOP_RESULT"] = 8;
        values[valuesById[9] = "USER_ATTK_CMD"] = 9;
        values[valuesById[10] = "USER_ATTK_RESULT"] = 10;
        values[valuesById[11] = "USER_SUBTRACT_HP_RESULT"] = 11;
        values[valuesById[12] = "USER_DIE_RESULT"] = 12;
        values[valuesById[13] = "USER_LOGIN_CMD"] = 13;
        values[valuesById[14] = "USER_LOGIN_RESULT"] = 14;
        values[valuesById[15] = "SELECT_HERO_CMD"] = 15;
        values[valuesById[16] = "SELECT_HERO_RESULT"] = 16;
        values[valuesById[17] = "GET_RANK_CMD"] = 17;
        values[valuesById[18] = "GET_RANK_RESULT"] = 18;
        return values;
    })();

    msg.UserEntryCmd = (function() {

        /**
         * Properties of a UserEntryCmd.
         * @memberof msg
         * @interface IUserEntryCmd
         */

        /**
         * Constructs a new UserEntryCmd.
         * @memberof msg
         * @classdesc Represents a UserEntryCmd.
         * @implements IUserEntryCmd
         * @constructor
         * @param {msg.IUserEntryCmd=} [properties] Properties to set
         */
        function UserEntryCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserEntryCmd instance using the specified properties.
         * @function create
         * @memberof msg.UserEntryCmd
         * @static
         * @param {msg.IUserEntryCmd=} [properties] Properties to set
         * @returns {msg.UserEntryCmd} UserEntryCmd instance
         */
        UserEntryCmd.create = function create(properties) {
            return new UserEntryCmd(properties);
        };

        /**
         * Encodes the specified UserEntryCmd message. Does not implicitly {@link msg.UserEntryCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.UserEntryCmd
         * @static
         * @param {msg.IUserEntryCmd} message UserEntryCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEntryCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserEntryCmd message, length delimited. Does not implicitly {@link msg.UserEntryCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserEntryCmd
         * @static
         * @param {msg.IUserEntryCmd} message UserEntryCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEntryCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEntryCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserEntryCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserEntryCmd} UserEntryCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEntryCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserEntryCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserEntryCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserEntryCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserEntryCmd} UserEntryCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEntryCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEntryCmd message.
         * @function verify
         * @memberof msg.UserEntryCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEntryCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserEntryCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserEntryCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserEntryCmd} UserEntryCmd
         */
        UserEntryCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserEntryCmd)
                return object;
            return new $root.msg.UserEntryCmd();
        };

        /**
         * Creates a plain object from a UserEntryCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserEntryCmd
         * @static
         * @param {msg.UserEntryCmd} message UserEntryCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEntryCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserEntryCmd to JSON.
         * @function toJSON
         * @memberof msg.UserEntryCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEntryCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEntryCmd;
    })();

    msg.UserEntryResult = (function() {

        /**
         * Properties of a UserEntryResult.
         * @memberof msg
         * @interface IUserEntryResult
         * @property {number|null} [userId] UserEntryResult userId
         * @property {string|null} [userName] UserEntryResult userName
         * @property {string|null} [heroAvatar] UserEntryResult heroAvatar
         */

        /**
         * Constructs a new UserEntryResult.
         * @memberof msg
         * @classdesc Represents a UserEntryResult.
         * @implements IUserEntryResult
         * @constructor
         * @param {msg.IUserEntryResult=} [properties] Properties to set
         */
        function UserEntryResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEntryResult userId.
         * @member {number} userId
         * @memberof msg.UserEntryResult
         * @instance
         */
        UserEntryResult.prototype.userId = 0;

        /**
         * UserEntryResult userName.
         * @member {string} userName
         * @memberof msg.UserEntryResult
         * @instance
         */
        UserEntryResult.prototype.userName = "";

        /**
         * UserEntryResult heroAvatar.
         * @member {string} heroAvatar
         * @memberof msg.UserEntryResult
         * @instance
         */
        UserEntryResult.prototype.heroAvatar = "";

        /**
         * Creates a new UserEntryResult instance using the specified properties.
         * @function create
         * @memberof msg.UserEntryResult
         * @static
         * @param {msg.IUserEntryResult=} [properties] Properties to set
         * @returns {msg.UserEntryResult} UserEntryResult instance
         */
        UserEntryResult.create = function create(properties) {
            return new UserEntryResult(properties);
        };

        /**
         * Encodes the specified UserEntryResult message. Does not implicitly {@link msg.UserEntryResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserEntryResult
         * @static
         * @param {msg.IUserEntryResult} message UserEntryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEntryResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.heroAvatar);
            return writer;
        };

        /**
         * Encodes the specified UserEntryResult message, length delimited. Does not implicitly {@link msg.UserEntryResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserEntryResult
         * @static
         * @param {msg.IUserEntryResult} message UserEntryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEntryResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEntryResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserEntryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserEntryResult} UserEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEntryResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserEntryResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.heroAvatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserEntryResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserEntryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserEntryResult} UserEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEntryResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEntryResult message.
         * @function verify
         * @memberof msg.UserEntryResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEntryResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                if (!$util.isString(message.heroAvatar))
                    return "heroAvatar: string expected";
            return null;
        };

        /**
         * Creates a UserEntryResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserEntryResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserEntryResult} UserEntryResult
         */
        UserEntryResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserEntryResult)
                return object;
            let message = new $root.msg.UserEntryResult();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.heroAvatar != null)
                message.heroAvatar = String(object.heroAvatar);
            return message;
        };

        /**
         * Creates a plain object from a UserEntryResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserEntryResult
         * @static
         * @param {msg.UserEntryResult} message UserEntryResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEntryResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.heroAvatar = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                object.heroAvatar = message.heroAvatar;
            return object;
        };

        /**
         * Converts this UserEntryResult to JSON.
         * @function toJSON
         * @memberof msg.UserEntryResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEntryResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEntryResult;
    })();

    msg.WhoElseIsHereCmd = (function() {

        /**
         * Properties of a WhoElseIsHereCmd.
         * @memberof msg
         * @interface IWhoElseIsHereCmd
         */

        /**
         * Constructs a new WhoElseIsHereCmd.
         * @memberof msg
         * @classdesc Represents a WhoElseIsHereCmd.
         * @implements IWhoElseIsHereCmd
         * @constructor
         * @param {msg.IWhoElseIsHereCmd=} [properties] Properties to set
         */
        function WhoElseIsHereCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new WhoElseIsHereCmd instance using the specified properties.
         * @function create
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {msg.IWhoElseIsHereCmd=} [properties] Properties to set
         * @returns {msg.WhoElseIsHereCmd} WhoElseIsHereCmd instance
         */
        WhoElseIsHereCmd.create = function create(properties) {
            return new WhoElseIsHereCmd(properties);
        };

        /**
         * Encodes the specified WhoElseIsHereCmd message. Does not implicitly {@link msg.WhoElseIsHereCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {msg.IWhoElseIsHereCmd} message WhoElseIsHereCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhoElseIsHereCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified WhoElseIsHereCmd message, length delimited. Does not implicitly {@link msg.WhoElseIsHereCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {msg.IWhoElseIsHereCmd} message WhoElseIsHereCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhoElseIsHereCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WhoElseIsHereCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.WhoElseIsHereCmd} WhoElseIsHereCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhoElseIsHereCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WhoElseIsHereCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WhoElseIsHereCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.WhoElseIsHereCmd} WhoElseIsHereCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhoElseIsHereCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhoElseIsHereCmd message.
         * @function verify
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhoElseIsHereCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a WhoElseIsHereCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.WhoElseIsHereCmd} WhoElseIsHereCmd
         */
        WhoElseIsHereCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.WhoElseIsHereCmd)
                return object;
            return new $root.msg.WhoElseIsHereCmd();
        };

        /**
         * Creates a plain object from a WhoElseIsHereCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.WhoElseIsHereCmd
         * @static
         * @param {msg.WhoElseIsHereCmd} message WhoElseIsHereCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhoElseIsHereCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this WhoElseIsHereCmd to JSON.
         * @function toJSON
         * @memberof msg.WhoElseIsHereCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhoElseIsHereCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WhoElseIsHereCmd;
    })();

    msg.WhoElseIsHereResult = (function() {

        /**
         * Properties of a WhoElseIsHereResult.
         * @memberof msg
         * @interface IWhoElseIsHereResult
         * @property {Array.<msg.WhoElseIsHereResult.IUserInfo>|null} [userInfo] WhoElseIsHereResult userInfo
         */

        /**
         * Constructs a new WhoElseIsHereResult.
         * @memberof msg
         * @classdesc Represents a WhoElseIsHereResult.
         * @implements IWhoElseIsHereResult
         * @constructor
         * @param {msg.IWhoElseIsHereResult=} [properties] Properties to set
         */
        function WhoElseIsHereResult(properties) {
            this.userInfo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WhoElseIsHereResult userInfo.
         * @member {Array.<msg.WhoElseIsHereResult.IUserInfo>} userInfo
         * @memberof msg.WhoElseIsHereResult
         * @instance
         */
        WhoElseIsHereResult.prototype.userInfo = $util.emptyArray;

        /**
         * Creates a new WhoElseIsHereResult instance using the specified properties.
         * @function create
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {msg.IWhoElseIsHereResult=} [properties] Properties to set
         * @returns {msg.WhoElseIsHereResult} WhoElseIsHereResult instance
         */
        WhoElseIsHereResult.create = function create(properties) {
            return new WhoElseIsHereResult(properties);
        };

        /**
         * Encodes the specified WhoElseIsHereResult message. Does not implicitly {@link msg.WhoElseIsHereResult.verify|verify} messages.
         * @function encode
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {msg.IWhoElseIsHereResult} message WhoElseIsHereResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhoElseIsHereResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && message.userInfo.length)
                for (let i = 0; i < message.userInfo.length; ++i)
                    $root.msg.WhoElseIsHereResult.UserInfo.encode(message.userInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WhoElseIsHereResult message, length delimited. Does not implicitly {@link msg.WhoElseIsHereResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {msg.IWhoElseIsHereResult} message WhoElseIsHereResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhoElseIsHereResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WhoElseIsHereResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.WhoElseIsHereResult} WhoElseIsHereResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhoElseIsHereResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WhoElseIsHereResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userInfo && message.userInfo.length))
                        message.userInfo = [];
                    message.userInfo.push($root.msg.WhoElseIsHereResult.UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WhoElseIsHereResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.WhoElseIsHereResult} WhoElseIsHereResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhoElseIsHereResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhoElseIsHereResult message.
         * @function verify
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhoElseIsHereResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                if (!Array.isArray(message.userInfo))
                    return "userInfo: array expected";
                for (let i = 0; i < message.userInfo.length; ++i) {
                    let error = $root.msg.WhoElseIsHereResult.UserInfo.verify(message.userInfo[i]);
                    if (error)
                        return "userInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WhoElseIsHereResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.WhoElseIsHereResult} WhoElseIsHereResult
         */
        WhoElseIsHereResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.WhoElseIsHereResult)
                return object;
            let message = new $root.msg.WhoElseIsHereResult();
            if (object.userInfo) {
                if (!Array.isArray(object.userInfo))
                    throw TypeError(".msg.WhoElseIsHereResult.userInfo: array expected");
                message.userInfo = [];
                for (let i = 0; i < object.userInfo.length; ++i) {
                    if (typeof object.userInfo[i] !== "object")
                        throw TypeError(".msg.WhoElseIsHereResult.userInfo: object expected");
                    message.userInfo[i] = $root.msg.WhoElseIsHereResult.UserInfo.fromObject(object.userInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WhoElseIsHereResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.WhoElseIsHereResult
         * @static
         * @param {msg.WhoElseIsHereResult} message WhoElseIsHereResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhoElseIsHereResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userInfo = [];
            if (message.userInfo && message.userInfo.length) {
                object.userInfo = [];
                for (let j = 0; j < message.userInfo.length; ++j)
                    object.userInfo[j] = $root.msg.WhoElseIsHereResult.UserInfo.toObject(message.userInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this WhoElseIsHereResult to JSON.
         * @function toJSON
         * @memberof msg.WhoElseIsHereResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhoElseIsHereResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        WhoElseIsHereResult.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof msg.WhoElseIsHereResult
             * @interface IUserInfo
             * @property {number|null} [userId] UserInfo userId
             * @property {string|null} [userName] UserInfo userName
             * @property {string|null} [heroAvatar] UserInfo heroAvatar
             * @property {msg.WhoElseIsHereResult.UserInfo.IMoveState|null} [moveState] UserInfo moveState
             */

            /**
             * Constructs a new UserInfo.
             * @memberof msg.WhoElseIsHereResult
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {msg.WhoElseIsHereResult.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo userId.
             * @member {number} userId
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @instance
             */
            UserInfo.prototype.userId = 0;

            /**
             * UserInfo userName.
             * @member {string} userName
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @instance
             */
            UserInfo.prototype.userName = "";

            /**
             * UserInfo heroAvatar.
             * @member {string} heroAvatar
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @instance
             */
            UserInfo.prototype.heroAvatar = "";

            /**
             * UserInfo moveState.
             * @member {msg.WhoElseIsHereResult.UserInfo.IMoveState|null|undefined} moveState
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @instance
             */
            UserInfo.prototype.moveState = null;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {msg.WhoElseIsHereResult.IUserInfo=} [properties] Properties to set
             * @returns {msg.WhoElseIsHereResult.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {msg.WhoElseIsHereResult.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
                if (message.userName != null && message.hasOwnProperty("userName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
                if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.heroAvatar);
                if (message.moveState != null && message.hasOwnProperty("moveState"))
                    $root.msg.WhoElseIsHereResult.UserInfo.MoveState.encode(message.moveState, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {msg.WhoElseIsHereResult.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.WhoElseIsHereResult.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WhoElseIsHereResult.UserInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.uint32();
                        break;
                    case 2:
                        message.userName = reader.string();
                        break;
                    case 3:
                        message.heroAvatar = reader.string();
                        break;
                    case 4:
                        message.moveState = $root.msg.WhoElseIsHereResult.UserInfo.MoveState.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.WhoElseIsHereResult.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                    if (!$util.isString(message.heroAvatar))
                        return "heroAvatar: string expected";
                if (message.moveState != null && message.hasOwnProperty("moveState")) {
                    let error = $root.msg.WhoElseIsHereResult.UserInfo.MoveState.verify(message.moveState);
                    if (error)
                        return "moveState." + error;
                }
                return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.WhoElseIsHereResult.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.WhoElseIsHereResult.UserInfo)
                    return object;
                let message = new $root.msg.WhoElseIsHereResult.UserInfo();
                if (object.userId != null)
                    message.userId = object.userId >>> 0;
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.heroAvatar != null)
                    message.heroAvatar = String(object.heroAvatar);
                if (object.moveState != null) {
                    if (typeof object.moveState !== "object")
                        throw TypeError(".msg.WhoElseIsHereResult.UserInfo.moveState: object expected");
                    message.moveState = $root.msg.WhoElseIsHereResult.UserInfo.MoveState.fromObject(object.moveState);
                }
                return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @static
             * @param {msg.WhoElseIsHereResult.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = 0;
                    object.userName = "";
                    object.heroAvatar = "";
                    object.moveState = null;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                    object.heroAvatar = message.heroAvatar;
                if (message.moveState != null && message.hasOwnProperty("moveState"))
                    object.moveState = $root.msg.WhoElseIsHereResult.UserInfo.MoveState.toObject(message.moveState, options);
                return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof msg.WhoElseIsHereResult.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UserInfo.MoveState = (function() {

                /**
                 * Properties of a MoveState.
                 * @memberof msg.WhoElseIsHereResult.UserInfo
                 * @interface IMoveState
                 * @property {number|null} [fromPosX] MoveState fromPosX
                 * @property {number|null} [fromPosY] MoveState fromPosY
                 * @property {number|null} [toPosX] MoveState toPosX
                 * @property {number|null} [toPosY] MoveState toPosY
                 * @property {number|Long|null} [startTime] MoveState startTime
                 */

                /**
                 * Constructs a new MoveState.
                 * @memberof msg.WhoElseIsHereResult.UserInfo
                 * @classdesc Represents a MoveState.
                 * @implements IMoveState
                 * @constructor
                 * @param {msg.WhoElseIsHereResult.UserInfo.IMoveState=} [properties] Properties to set
                 */
                function MoveState(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MoveState fromPosX.
                 * @member {number} fromPosX
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @instance
                 */
                MoveState.prototype.fromPosX = 0;

                /**
                 * MoveState fromPosY.
                 * @member {number} fromPosY
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @instance
                 */
                MoveState.prototype.fromPosY = 0;

                /**
                 * MoveState toPosX.
                 * @member {number} toPosX
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @instance
                 */
                MoveState.prototype.toPosX = 0;

                /**
                 * MoveState toPosY.
                 * @member {number} toPosY
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @instance
                 */
                MoveState.prototype.toPosY = 0;

                /**
                 * MoveState startTime.
                 * @member {number|Long} startTime
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @instance
                 */
                MoveState.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new MoveState instance using the specified properties.
                 * @function create
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {msg.WhoElseIsHereResult.UserInfo.IMoveState=} [properties] Properties to set
                 * @returns {msg.WhoElseIsHereResult.UserInfo.MoveState} MoveState instance
                 */
                MoveState.create = function create(properties) {
                    return new MoveState(properties);
                };

                /**
                 * Encodes the specified MoveState message. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.MoveState.verify|verify} messages.
                 * @function encode
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {msg.WhoElseIsHereResult.UserInfo.IMoveState} message MoveState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MoveState.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fromPosX != null && message.hasOwnProperty("fromPosX"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.fromPosX);
                    if (message.fromPosY != null && message.hasOwnProperty("fromPosY"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.fromPosY);
                    if (message.toPosX != null && message.hasOwnProperty("toPosX"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.toPosX);
                    if (message.toPosY != null && message.hasOwnProperty("toPosY"))
                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.toPosY);
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.startTime);
                    return writer;
                };

                /**
                 * Encodes the specified MoveState message, length delimited. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.MoveState.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {msg.WhoElseIsHereResult.UserInfo.IMoveState} message MoveState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MoveState.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MoveState message from the specified reader or buffer.
                 * @function decode
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {msg.WhoElseIsHereResult.UserInfo.MoveState} MoveState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MoveState.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WhoElseIsHereResult.UserInfo.MoveState();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fromPosX = reader.float();
                            break;
                        case 2:
                            message.fromPosY = reader.float();
                            break;
                        case 3:
                            message.toPosX = reader.float();
                            break;
                        case 4:
                            message.toPosY = reader.float();
                            break;
                        case 5:
                            message.startTime = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MoveState message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {msg.WhoElseIsHereResult.UserInfo.MoveState} MoveState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MoveState.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MoveState message.
                 * @function verify
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MoveState.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fromPosX != null && message.hasOwnProperty("fromPosX"))
                        if (typeof message.fromPosX !== "number")
                            return "fromPosX: number expected";
                    if (message.fromPosY != null && message.hasOwnProperty("fromPosY"))
                        if (typeof message.fromPosY !== "number")
                            return "fromPosY: number expected";
                    if (message.toPosX != null && message.hasOwnProperty("toPosX"))
                        if (typeof message.toPosX !== "number")
                            return "toPosX: number expected";
                    if (message.toPosY != null && message.hasOwnProperty("toPosY"))
                        if (typeof message.toPosY !== "number")
                            return "toPosY: number expected";
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                            return "startTime: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a MoveState message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {msg.WhoElseIsHereResult.UserInfo.MoveState} MoveState
                 */
                MoveState.fromObject = function fromObject(object) {
                    if (object instanceof $root.msg.WhoElseIsHereResult.UserInfo.MoveState)
                        return object;
                    let message = new $root.msg.WhoElseIsHereResult.UserInfo.MoveState();
                    if (object.fromPosX != null)
                        message.fromPosX = Number(object.fromPosX);
                    if (object.fromPosY != null)
                        message.fromPosY = Number(object.fromPosY);
                    if (object.toPosX != null)
                        message.toPosX = Number(object.toPosX);
                    if (object.toPosY != null)
                        message.toPosY = Number(object.toPosY);
                    if (object.startTime != null)
                        if ($util.Long)
                            (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = true;
                        else if (typeof object.startTime === "string")
                            message.startTime = parseInt(object.startTime, 10);
                        else if (typeof object.startTime === "number")
                            message.startTime = object.startTime;
                        else if (typeof object.startTime === "object")
                            message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a MoveState message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @static
                 * @param {msg.WhoElseIsHereResult.UserInfo.MoveState} message MoveState
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MoveState.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.fromPosX = 0;
                        object.fromPosY = 0;
                        object.toPosX = 0;
                        object.toPosY = 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.startTime = options.longs === String ? "0" : 0;
                    }
                    if (message.fromPosX != null && message.hasOwnProperty("fromPosX"))
                        object.fromPosX = options.json && !isFinite(message.fromPosX) ? String(message.fromPosX) : message.fromPosX;
                    if (message.fromPosY != null && message.hasOwnProperty("fromPosY"))
                        object.fromPosY = options.json && !isFinite(message.fromPosY) ? String(message.fromPosY) : message.fromPosY;
                    if (message.toPosX != null && message.hasOwnProperty("toPosX"))
                        object.toPosX = options.json && !isFinite(message.toPosX) ? String(message.toPosX) : message.toPosX;
                    if (message.toPosY != null && message.hasOwnProperty("toPosY"))
                        object.toPosY = options.json && !isFinite(message.toPosY) ? String(message.toPosY) : message.toPosY;
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        if (typeof message.startTime === "number")
                            object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                        else
                            object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber(true) : message.startTime;
                    return object;
                };

                /**
                 * Converts this MoveState to JSON.
                 * @function toJSON
                 * @memberof msg.WhoElseIsHereResult.UserInfo.MoveState
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MoveState.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MoveState;
            })();

            return UserInfo;
        })();

        return WhoElseIsHereResult;
    })();

    msg.UserMoveToCmd = (function() {

        /**
         * Properties of a UserMoveToCmd.
         * @memberof msg
         * @interface IUserMoveToCmd
         * @property {number|null} [moveFromPosX] UserMoveToCmd moveFromPosX
         * @property {number|null} [moveFromPosY] UserMoveToCmd moveFromPosY
         * @property {number|null} [moveToPosX] UserMoveToCmd moveToPosX
         * @property {number|null} [moveToPosY] UserMoveToCmd moveToPosY
         */

        /**
         * Constructs a new UserMoveToCmd.
         * @memberof msg
         * @classdesc Represents a UserMoveToCmd.
         * @implements IUserMoveToCmd
         * @constructor
         * @param {msg.IUserMoveToCmd=} [properties] Properties to set
         */
        function UserMoveToCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMoveToCmd moveFromPosX.
         * @member {number} moveFromPosX
         * @memberof msg.UserMoveToCmd
         * @instance
         */
        UserMoveToCmd.prototype.moveFromPosX = 0;

        /**
         * UserMoveToCmd moveFromPosY.
         * @member {number} moveFromPosY
         * @memberof msg.UserMoveToCmd
         * @instance
         */
        UserMoveToCmd.prototype.moveFromPosY = 0;

        /**
         * UserMoveToCmd moveToPosX.
         * @member {number} moveToPosX
         * @memberof msg.UserMoveToCmd
         * @instance
         */
        UserMoveToCmd.prototype.moveToPosX = 0;

        /**
         * UserMoveToCmd moveToPosY.
         * @member {number} moveToPosY
         * @memberof msg.UserMoveToCmd
         * @instance
         */
        UserMoveToCmd.prototype.moveToPosY = 0;

        /**
         * Creates a new UserMoveToCmd instance using the specified properties.
         * @function create
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {msg.IUserMoveToCmd=} [properties] Properties to set
         * @returns {msg.UserMoveToCmd} UserMoveToCmd instance
         */
        UserMoveToCmd.create = function create(properties) {
            return new UserMoveToCmd(properties);
        };

        /**
         * Encodes the specified UserMoveToCmd message. Does not implicitly {@link msg.UserMoveToCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {msg.IUserMoveToCmd} message UserMoveToCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMoveToCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.moveFromPosX != null && message.hasOwnProperty("moveFromPosX"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.moveFromPosX);
            if (message.moveFromPosY != null && message.hasOwnProperty("moveFromPosY"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.moveFromPosY);
            if (message.moveToPosX != null && message.hasOwnProperty("moveToPosX"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.moveToPosX);
            if (message.moveToPosY != null && message.hasOwnProperty("moveToPosY"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.moveToPosY);
            return writer;
        };

        /**
         * Encodes the specified UserMoveToCmd message, length delimited. Does not implicitly {@link msg.UserMoveToCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {msg.IUserMoveToCmd} message UserMoveToCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMoveToCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMoveToCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserMoveToCmd} UserMoveToCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMoveToCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserMoveToCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.moveFromPosX = reader.float();
                    break;
                case 2:
                    message.moveFromPosY = reader.float();
                    break;
                case 3:
                    message.moveToPosX = reader.float();
                    break;
                case 4:
                    message.moveToPosY = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMoveToCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserMoveToCmd} UserMoveToCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMoveToCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMoveToCmd message.
         * @function verify
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMoveToCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.moveFromPosX != null && message.hasOwnProperty("moveFromPosX"))
                if (typeof message.moveFromPosX !== "number")
                    return "moveFromPosX: number expected";
            if (message.moveFromPosY != null && message.hasOwnProperty("moveFromPosY"))
                if (typeof message.moveFromPosY !== "number")
                    return "moveFromPosY: number expected";
            if (message.moveToPosX != null && message.hasOwnProperty("moveToPosX"))
                if (typeof message.moveToPosX !== "number")
                    return "moveToPosX: number expected";
            if (message.moveToPosY != null && message.hasOwnProperty("moveToPosY"))
                if (typeof message.moveToPosY !== "number")
                    return "moveToPosY: number expected";
            return null;
        };

        /**
         * Creates a UserMoveToCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserMoveToCmd} UserMoveToCmd
         */
        UserMoveToCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserMoveToCmd)
                return object;
            let message = new $root.msg.UserMoveToCmd();
            if (object.moveFromPosX != null)
                message.moveFromPosX = Number(object.moveFromPosX);
            if (object.moveFromPosY != null)
                message.moveFromPosY = Number(object.moveFromPosY);
            if (object.moveToPosX != null)
                message.moveToPosX = Number(object.moveToPosX);
            if (object.moveToPosY != null)
                message.moveToPosY = Number(object.moveToPosY);
            return message;
        };

        /**
         * Creates a plain object from a UserMoveToCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserMoveToCmd
         * @static
         * @param {msg.UserMoveToCmd} message UserMoveToCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMoveToCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.moveFromPosX = 0;
                object.moveFromPosY = 0;
                object.moveToPosX = 0;
                object.moveToPosY = 0;
            }
            if (message.moveFromPosX != null && message.hasOwnProperty("moveFromPosX"))
                object.moveFromPosX = options.json && !isFinite(message.moveFromPosX) ? String(message.moveFromPosX) : message.moveFromPosX;
            if (message.moveFromPosY != null && message.hasOwnProperty("moveFromPosY"))
                object.moveFromPosY = options.json && !isFinite(message.moveFromPosY) ? String(message.moveFromPosY) : message.moveFromPosY;
            if (message.moveToPosX != null && message.hasOwnProperty("moveToPosX"))
                object.moveToPosX = options.json && !isFinite(message.moveToPosX) ? String(message.moveToPosX) : message.moveToPosX;
            if (message.moveToPosY != null && message.hasOwnProperty("moveToPosY"))
                object.moveToPosY = options.json && !isFinite(message.moveToPosY) ? String(message.moveToPosY) : message.moveToPosY;
            return object;
        };

        /**
         * Converts this UserMoveToCmd to JSON.
         * @function toJSON
         * @memberof msg.UserMoveToCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMoveToCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMoveToCmd;
    })();

    msg.UserMoveToResult = (function() {

        /**
         * Properties of a UserMoveToResult.
         * @memberof msg
         * @interface IUserMoveToResult
         * @property {number|null} [moveUserId] UserMoveToResult moveUserId
         * @property {number|null} [moveFromPosX] UserMoveToResult moveFromPosX
         * @property {number|null} [moveFromPosY] UserMoveToResult moveFromPosY
         * @property {number|null} [moveToPosX] UserMoveToResult moveToPosX
         * @property {number|null} [moveToPosY] UserMoveToResult moveToPosY
         * @property {number|Long|null} [moveStartTime] UserMoveToResult moveStartTime
         */

        /**
         * Constructs a new UserMoveToResult.
         * @memberof msg
         * @classdesc Represents a UserMoveToResult.
         * @implements IUserMoveToResult
         * @constructor
         * @param {msg.IUserMoveToResult=} [properties] Properties to set
         */
        function UserMoveToResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMoveToResult moveUserId.
         * @member {number} moveUserId
         * @memberof msg.UserMoveToResult
         * @instance
         */
        UserMoveToResult.prototype.moveUserId = 0;

        /**
         * UserMoveToResult moveFromPosX.
         * @member {number} moveFromPosX
         * @memberof msg.UserMoveToResult
         * @instance
         */
        UserMoveToResult.prototype.moveFromPosX = 0;

        /**
         * UserMoveToResult moveFromPosY.
         * @member {number} moveFromPosY
         * @memberof msg.UserMoveToResult
         * @instance
         */
        UserMoveToResult.prototype.moveFromPosY = 0;

        /**
         * UserMoveToResult moveToPosX.
         * @member {number} moveToPosX
         * @memberof msg.UserMoveToResult
         * @instance
         */
        UserMoveToResult.prototype.moveToPosX = 0;

        /**
         * UserMoveToResult moveToPosY.
         * @member {number} moveToPosY
         * @memberof msg.UserMoveToResult
         * @instance
         */
        UserMoveToResult.prototype.moveToPosY = 0;

        /**
         * UserMoveToResult moveStartTime.
         * @member {number|Long} moveStartTime
         * @memberof msg.UserMoveToResult
         * @instance
         */
        UserMoveToResult.prototype.moveStartTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new UserMoveToResult instance using the specified properties.
         * @function create
         * @memberof msg.UserMoveToResult
         * @static
         * @param {msg.IUserMoveToResult=} [properties] Properties to set
         * @returns {msg.UserMoveToResult} UserMoveToResult instance
         */
        UserMoveToResult.create = function create(properties) {
            return new UserMoveToResult(properties);
        };

        /**
         * Encodes the specified UserMoveToResult message. Does not implicitly {@link msg.UserMoveToResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserMoveToResult
         * @static
         * @param {msg.IUserMoveToResult} message UserMoveToResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMoveToResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.moveUserId != null && message.hasOwnProperty("moveUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.moveUserId);
            if (message.moveFromPosX != null && message.hasOwnProperty("moveFromPosX"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.moveFromPosX);
            if (message.moveFromPosY != null && message.hasOwnProperty("moveFromPosY"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.moveFromPosY);
            if (message.moveToPosX != null && message.hasOwnProperty("moveToPosX"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.moveToPosX);
            if (message.moveToPosY != null && message.hasOwnProperty("moveToPosY"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.moveToPosY);
            if (message.moveStartTime != null && message.hasOwnProperty("moveStartTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.moveStartTime);
            return writer;
        };

        /**
         * Encodes the specified UserMoveToResult message, length delimited. Does not implicitly {@link msg.UserMoveToResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserMoveToResult
         * @static
         * @param {msg.IUserMoveToResult} message UserMoveToResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMoveToResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMoveToResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserMoveToResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserMoveToResult} UserMoveToResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMoveToResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserMoveToResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.moveUserId = reader.uint32();
                    break;
                case 2:
                    message.moveFromPosX = reader.float();
                    break;
                case 3:
                    message.moveFromPosY = reader.float();
                    break;
                case 4:
                    message.moveToPosX = reader.float();
                    break;
                case 5:
                    message.moveToPosY = reader.float();
                    break;
                case 6:
                    message.moveStartTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMoveToResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserMoveToResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserMoveToResult} UserMoveToResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMoveToResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMoveToResult message.
         * @function verify
         * @memberof msg.UserMoveToResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMoveToResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.moveUserId != null && message.hasOwnProperty("moveUserId"))
                if (!$util.isInteger(message.moveUserId))
                    return "moveUserId: integer expected";
            if (message.moveFromPosX != null && message.hasOwnProperty("moveFromPosX"))
                if (typeof message.moveFromPosX !== "number")
                    return "moveFromPosX: number expected";
            if (message.moveFromPosY != null && message.hasOwnProperty("moveFromPosY"))
                if (typeof message.moveFromPosY !== "number")
                    return "moveFromPosY: number expected";
            if (message.moveToPosX != null && message.hasOwnProperty("moveToPosX"))
                if (typeof message.moveToPosX !== "number")
                    return "moveToPosX: number expected";
            if (message.moveToPosY != null && message.hasOwnProperty("moveToPosY"))
                if (typeof message.moveToPosY !== "number")
                    return "moveToPosY: number expected";
            if (message.moveStartTime != null && message.hasOwnProperty("moveStartTime"))
                if (!$util.isInteger(message.moveStartTime) && !(message.moveStartTime && $util.isInteger(message.moveStartTime.low) && $util.isInteger(message.moveStartTime.high)))
                    return "moveStartTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserMoveToResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserMoveToResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserMoveToResult} UserMoveToResult
         */
        UserMoveToResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserMoveToResult)
                return object;
            let message = new $root.msg.UserMoveToResult();
            if (object.moveUserId != null)
                message.moveUserId = object.moveUserId >>> 0;
            if (object.moveFromPosX != null)
                message.moveFromPosX = Number(object.moveFromPosX);
            if (object.moveFromPosY != null)
                message.moveFromPosY = Number(object.moveFromPosY);
            if (object.moveToPosX != null)
                message.moveToPosX = Number(object.moveToPosX);
            if (object.moveToPosY != null)
                message.moveToPosY = Number(object.moveToPosY);
            if (object.moveStartTime != null)
                if ($util.Long)
                    (message.moveStartTime = $util.Long.fromValue(object.moveStartTime)).unsigned = true;
                else if (typeof object.moveStartTime === "string")
                    message.moveStartTime = parseInt(object.moveStartTime, 10);
                else if (typeof object.moveStartTime === "number")
                    message.moveStartTime = object.moveStartTime;
                else if (typeof object.moveStartTime === "object")
                    message.moveStartTime = new $util.LongBits(object.moveStartTime.low >>> 0, object.moveStartTime.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a UserMoveToResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserMoveToResult
         * @static
         * @param {msg.UserMoveToResult} message UserMoveToResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMoveToResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.moveUserId = 0;
                object.moveFromPosX = 0;
                object.moveFromPosY = 0;
                object.moveToPosX = 0;
                object.moveToPosY = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.moveStartTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.moveStartTime = options.longs === String ? "0" : 0;
            }
            if (message.moveUserId != null && message.hasOwnProperty("moveUserId"))
                object.moveUserId = message.moveUserId;
            if (message.moveFromPosX != null && message.hasOwnProperty("moveFromPosX"))
                object.moveFromPosX = options.json && !isFinite(message.moveFromPosX) ? String(message.moveFromPosX) : message.moveFromPosX;
            if (message.moveFromPosY != null && message.hasOwnProperty("moveFromPosY"))
                object.moveFromPosY = options.json && !isFinite(message.moveFromPosY) ? String(message.moveFromPosY) : message.moveFromPosY;
            if (message.moveToPosX != null && message.hasOwnProperty("moveToPosX"))
                object.moveToPosX = options.json && !isFinite(message.moveToPosX) ? String(message.moveToPosX) : message.moveToPosX;
            if (message.moveToPosY != null && message.hasOwnProperty("moveToPosY"))
                object.moveToPosY = options.json && !isFinite(message.moveToPosY) ? String(message.moveToPosY) : message.moveToPosY;
            if (message.moveStartTime != null && message.hasOwnProperty("moveStartTime"))
                if (typeof message.moveStartTime === "number")
                    object.moveStartTime = options.longs === String ? String(message.moveStartTime) : message.moveStartTime;
                else
                    object.moveStartTime = options.longs === String ? $util.Long.prototype.toString.call(message.moveStartTime) : options.longs === Number ? new $util.LongBits(message.moveStartTime.low >>> 0, message.moveStartTime.high >>> 0).toNumber(true) : message.moveStartTime;
            return object;
        };

        /**
         * Converts this UserMoveToResult to JSON.
         * @function toJSON
         * @memberof msg.UserMoveToResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMoveToResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMoveToResult;
    })();

    msg.UserQuitResult = (function() {

        /**
         * Properties of a UserQuitResult.
         * @memberof msg
         * @interface IUserQuitResult
         * @property {number|null} [quitUserId] UserQuitResult quitUserId
         */

        /**
         * Constructs a new UserQuitResult.
         * @memberof msg
         * @classdesc Represents a UserQuitResult.
         * @implements IUserQuitResult
         * @constructor
         * @param {msg.IUserQuitResult=} [properties] Properties to set
         */
        function UserQuitResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserQuitResult quitUserId.
         * @member {number} quitUserId
         * @memberof msg.UserQuitResult
         * @instance
         */
        UserQuitResult.prototype.quitUserId = 0;

        /**
         * Creates a new UserQuitResult instance using the specified properties.
         * @function create
         * @memberof msg.UserQuitResult
         * @static
         * @param {msg.IUserQuitResult=} [properties] Properties to set
         * @returns {msg.UserQuitResult} UserQuitResult instance
         */
        UserQuitResult.create = function create(properties) {
            return new UserQuitResult(properties);
        };

        /**
         * Encodes the specified UserQuitResult message. Does not implicitly {@link msg.UserQuitResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserQuitResult
         * @static
         * @param {msg.IUserQuitResult} message UserQuitResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.quitUserId != null && message.hasOwnProperty("quitUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.quitUserId);
            return writer;
        };

        /**
         * Encodes the specified UserQuitResult message, length delimited. Does not implicitly {@link msg.UserQuitResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserQuitResult
         * @static
         * @param {msg.IUserQuitResult} message UserQuitResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserQuitResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserQuitResult} UserQuitResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserQuitResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.quitUserId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserQuitResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserQuitResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserQuitResult} UserQuitResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserQuitResult message.
         * @function verify
         * @memberof msg.UserQuitResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserQuitResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.quitUserId != null && message.hasOwnProperty("quitUserId"))
                if (!$util.isInteger(message.quitUserId))
                    return "quitUserId: integer expected";
            return null;
        };

        /**
         * Creates a UserQuitResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserQuitResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserQuitResult} UserQuitResult
         */
        UserQuitResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserQuitResult)
                return object;
            let message = new $root.msg.UserQuitResult();
            if (object.quitUserId != null)
                message.quitUserId = object.quitUserId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserQuitResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserQuitResult
         * @static
         * @param {msg.UserQuitResult} message UserQuitResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.quitUserId = 0;
            if (message.quitUserId != null && message.hasOwnProperty("quitUserId"))
                object.quitUserId = message.quitUserId;
            return object;
        };

        /**
         * Converts this UserQuitResult to JSON.
         * @function toJSON
         * @memberof msg.UserQuitResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitResult;
    })();

    msg.UserStopCmd = (function() {

        /**
         * Properties of a UserStopCmd.
         * @memberof msg
         * @interface IUserStopCmd
         */

        /**
         * Constructs a new UserStopCmd.
         * @memberof msg
         * @classdesc Represents a UserStopCmd.
         * @implements IUserStopCmd
         * @constructor
         * @param {msg.IUserStopCmd=} [properties] Properties to set
         */
        function UserStopCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserStopCmd instance using the specified properties.
         * @function create
         * @memberof msg.UserStopCmd
         * @static
         * @param {msg.IUserStopCmd=} [properties] Properties to set
         * @returns {msg.UserStopCmd} UserStopCmd instance
         */
        UserStopCmd.create = function create(properties) {
            return new UserStopCmd(properties);
        };

        /**
         * Encodes the specified UserStopCmd message. Does not implicitly {@link msg.UserStopCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.UserStopCmd
         * @static
         * @param {msg.IUserStopCmd} message UserStopCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserStopCmd message, length delimited. Does not implicitly {@link msg.UserStopCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserStopCmd
         * @static
         * @param {msg.IUserStopCmd} message UserStopCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStopCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserStopCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserStopCmd} UserStopCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserStopCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserStopCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserStopCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserStopCmd} UserStopCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStopCmd message.
         * @function verify
         * @memberof msg.UserStopCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStopCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserStopCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserStopCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserStopCmd} UserStopCmd
         */
        UserStopCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserStopCmd)
                return object;
            return new $root.msg.UserStopCmd();
        };

        /**
         * Creates a plain object from a UserStopCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserStopCmd
         * @static
         * @param {msg.UserStopCmd} message UserStopCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStopCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserStopCmd to JSON.
         * @function toJSON
         * @memberof msg.UserStopCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStopCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStopCmd;
    })();

    msg.UserStopResult = (function() {

        /**
         * Properties of a UserStopResult.
         * @memberof msg
         * @interface IUserStopResult
         * @property {number|null} [stopUserId] UserStopResult stopUserId
         * @property {number|null} [stopAtPosX] UserStopResult stopAtPosX
         * @property {number|null} [stopAtPosY] UserStopResult stopAtPosY
         */

        /**
         * Constructs a new UserStopResult.
         * @memberof msg
         * @classdesc Represents a UserStopResult.
         * @implements IUserStopResult
         * @constructor
         * @param {msg.IUserStopResult=} [properties] Properties to set
         */
        function UserStopResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStopResult stopUserId.
         * @member {number} stopUserId
         * @memberof msg.UserStopResult
         * @instance
         */
        UserStopResult.prototype.stopUserId = 0;

        /**
         * UserStopResult stopAtPosX.
         * @member {number} stopAtPosX
         * @memberof msg.UserStopResult
         * @instance
         */
        UserStopResult.prototype.stopAtPosX = 0;

        /**
         * UserStopResult stopAtPosY.
         * @member {number} stopAtPosY
         * @memberof msg.UserStopResult
         * @instance
         */
        UserStopResult.prototype.stopAtPosY = 0;

        /**
         * Creates a new UserStopResult instance using the specified properties.
         * @function create
         * @memberof msg.UserStopResult
         * @static
         * @param {msg.IUserStopResult=} [properties] Properties to set
         * @returns {msg.UserStopResult} UserStopResult instance
         */
        UserStopResult.create = function create(properties) {
            return new UserStopResult(properties);
        };

        /**
         * Encodes the specified UserStopResult message. Does not implicitly {@link msg.UserStopResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserStopResult
         * @static
         * @param {msg.IUserStopResult} message UserStopResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stopUserId != null && message.hasOwnProperty("stopUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.stopUserId);
            if (message.stopAtPosX != null && message.hasOwnProperty("stopAtPosX"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.stopAtPosX);
            if (message.stopAtPosY != null && message.hasOwnProperty("stopAtPosY"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.stopAtPosY);
            return writer;
        };

        /**
         * Encodes the specified UserStopResult message, length delimited. Does not implicitly {@link msg.UserStopResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserStopResult
         * @static
         * @param {msg.IUserStopResult} message UserStopResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStopResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStopResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserStopResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserStopResult} UserStopResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserStopResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stopUserId = reader.uint32();
                    break;
                case 2:
                    message.stopAtPosX = reader.float();
                    break;
                case 3:
                    message.stopAtPosY = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserStopResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserStopResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserStopResult} UserStopResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStopResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStopResult message.
         * @function verify
         * @memberof msg.UserStopResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStopResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stopUserId != null && message.hasOwnProperty("stopUserId"))
                if (!$util.isInteger(message.stopUserId))
                    return "stopUserId: integer expected";
            if (message.stopAtPosX != null && message.hasOwnProperty("stopAtPosX"))
                if (typeof message.stopAtPosX !== "number")
                    return "stopAtPosX: number expected";
            if (message.stopAtPosY != null && message.hasOwnProperty("stopAtPosY"))
                if (typeof message.stopAtPosY !== "number")
                    return "stopAtPosY: number expected";
            return null;
        };

        /**
         * Creates a UserStopResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserStopResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserStopResult} UserStopResult
         */
        UserStopResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserStopResult)
                return object;
            let message = new $root.msg.UserStopResult();
            if (object.stopUserId != null)
                message.stopUserId = object.stopUserId >>> 0;
            if (object.stopAtPosX != null)
                message.stopAtPosX = Number(object.stopAtPosX);
            if (object.stopAtPosY != null)
                message.stopAtPosY = Number(object.stopAtPosY);
            return message;
        };

        /**
         * Creates a plain object from a UserStopResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserStopResult
         * @static
         * @param {msg.UserStopResult} message UserStopResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStopResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.stopUserId = 0;
                object.stopAtPosX = 0;
                object.stopAtPosY = 0;
            }
            if (message.stopUserId != null && message.hasOwnProperty("stopUserId"))
                object.stopUserId = message.stopUserId;
            if (message.stopAtPosX != null && message.hasOwnProperty("stopAtPosX"))
                object.stopAtPosX = options.json && !isFinite(message.stopAtPosX) ? String(message.stopAtPosX) : message.stopAtPosX;
            if (message.stopAtPosY != null && message.hasOwnProperty("stopAtPosY"))
                object.stopAtPosY = options.json && !isFinite(message.stopAtPosY) ? String(message.stopAtPosY) : message.stopAtPosY;
            return object;
        };

        /**
         * Converts this UserStopResult to JSON.
         * @function toJSON
         * @memberof msg.UserStopResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStopResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStopResult;
    })();

    msg.UserAttkCmd = (function() {

        /**
         * Properties of a UserAttkCmd.
         * @memberof msg
         * @interface IUserAttkCmd
         * @property {number|null} [targetUserId] UserAttkCmd targetUserId
         */

        /**
         * Constructs a new UserAttkCmd.
         * @memberof msg
         * @classdesc Represents a UserAttkCmd.
         * @implements IUserAttkCmd
         * @constructor
         * @param {msg.IUserAttkCmd=} [properties] Properties to set
         */
        function UserAttkCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAttkCmd targetUserId.
         * @member {number} targetUserId
         * @memberof msg.UserAttkCmd
         * @instance
         */
        UserAttkCmd.prototype.targetUserId = 0;

        /**
         * Creates a new UserAttkCmd instance using the specified properties.
         * @function create
         * @memberof msg.UserAttkCmd
         * @static
         * @param {msg.IUserAttkCmd=} [properties] Properties to set
         * @returns {msg.UserAttkCmd} UserAttkCmd instance
         */
        UserAttkCmd.create = function create(properties) {
            return new UserAttkCmd(properties);
        };

        /**
         * Encodes the specified UserAttkCmd message. Does not implicitly {@link msg.UserAttkCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.UserAttkCmd
         * @static
         * @param {msg.IUserAttkCmd} message UserAttkCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAttkCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetUserId);
            return writer;
        };

        /**
         * Encodes the specified UserAttkCmd message, length delimited. Does not implicitly {@link msg.UserAttkCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserAttkCmd
         * @static
         * @param {msg.IUserAttkCmd} message UserAttkCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAttkCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAttkCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserAttkCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserAttkCmd} UserAttkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAttkCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserAttkCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetUserId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserAttkCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserAttkCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserAttkCmd} UserAttkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAttkCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAttkCmd message.
         * @function verify
         * @memberof msg.UserAttkCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAttkCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            return null;
        };

        /**
         * Creates a UserAttkCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserAttkCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserAttkCmd} UserAttkCmd
         */
        UserAttkCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserAttkCmd)
                return object;
            let message = new $root.msg.UserAttkCmd();
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserAttkCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserAttkCmd
         * @static
         * @param {msg.UserAttkCmd} message UserAttkCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAttkCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.targetUserId = 0;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            return object;
        };

        /**
         * Converts this UserAttkCmd to JSON.
         * @function toJSON
         * @memberof msg.UserAttkCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAttkCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAttkCmd;
    })();

    msg.UserAttkResult = (function() {

        /**
         * Properties of a UserAttkResult.
         * @memberof msg
         * @interface IUserAttkResult
         * @property {number|null} [attkUserId] UserAttkResult attkUserId
         * @property {number|null} [targetUserId] UserAttkResult targetUserId
         */

        /**
         * Constructs a new UserAttkResult.
         * @memberof msg
         * @classdesc Represents a UserAttkResult.
         * @implements IUserAttkResult
         * @constructor
         * @param {msg.IUserAttkResult=} [properties] Properties to set
         */
        function UserAttkResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAttkResult attkUserId.
         * @member {number} attkUserId
         * @memberof msg.UserAttkResult
         * @instance
         */
        UserAttkResult.prototype.attkUserId = 0;

        /**
         * UserAttkResult targetUserId.
         * @member {number} targetUserId
         * @memberof msg.UserAttkResult
         * @instance
         */
        UserAttkResult.prototype.targetUserId = 0;

        /**
         * Creates a new UserAttkResult instance using the specified properties.
         * @function create
         * @memberof msg.UserAttkResult
         * @static
         * @param {msg.IUserAttkResult=} [properties] Properties to set
         * @returns {msg.UserAttkResult} UserAttkResult instance
         */
        UserAttkResult.create = function create(properties) {
            return new UserAttkResult(properties);
        };

        /**
         * Encodes the specified UserAttkResult message. Does not implicitly {@link msg.UserAttkResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserAttkResult
         * @static
         * @param {msg.IUserAttkResult} message UserAttkResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAttkResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attkUserId != null && message.hasOwnProperty("attkUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.attkUserId);
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.targetUserId);
            return writer;
        };

        /**
         * Encodes the specified UserAttkResult message, length delimited. Does not implicitly {@link msg.UserAttkResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserAttkResult
         * @static
         * @param {msg.IUserAttkResult} message UserAttkResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAttkResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAttkResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserAttkResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserAttkResult} UserAttkResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAttkResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserAttkResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.attkUserId = reader.uint32();
                    break;
                case 2:
                    message.targetUserId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserAttkResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserAttkResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserAttkResult} UserAttkResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAttkResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAttkResult message.
         * @function verify
         * @memberof msg.UserAttkResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAttkResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.attkUserId != null && message.hasOwnProperty("attkUserId"))
                if (!$util.isInteger(message.attkUserId))
                    return "attkUserId: integer expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            return null;
        };

        /**
         * Creates a UserAttkResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserAttkResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserAttkResult} UserAttkResult
         */
        UserAttkResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserAttkResult)
                return object;
            let message = new $root.msg.UserAttkResult();
            if (object.attkUserId != null)
                message.attkUserId = object.attkUserId >>> 0;
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserAttkResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserAttkResult
         * @static
         * @param {msg.UserAttkResult} message UserAttkResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAttkResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.attkUserId = 0;
                object.targetUserId = 0;
            }
            if (message.attkUserId != null && message.hasOwnProperty("attkUserId"))
                object.attkUserId = message.attkUserId;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            return object;
        };

        /**
         * Converts this UserAttkResult to JSON.
         * @function toJSON
         * @memberof msg.UserAttkResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAttkResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAttkResult;
    })();

    msg.UserSubtractHpResult = (function() {

        /**
         * Properties of a UserSubtractHpResult.
         * @memberof msg
         * @interface IUserSubtractHpResult
         * @property {number|null} [targetUserId] UserSubtractHpResult targetUserId
         * @property {number|null} [subtractHp] UserSubtractHpResult subtractHp
         */

        /**
         * Constructs a new UserSubtractHpResult.
         * @memberof msg
         * @classdesc Represents a UserSubtractHpResult.
         * @implements IUserSubtractHpResult
         * @constructor
         * @param {msg.IUserSubtractHpResult=} [properties] Properties to set
         */
        function UserSubtractHpResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSubtractHpResult targetUserId.
         * @member {number} targetUserId
         * @memberof msg.UserSubtractHpResult
         * @instance
         */
        UserSubtractHpResult.prototype.targetUserId = 0;

        /**
         * UserSubtractHpResult subtractHp.
         * @member {number} subtractHp
         * @memberof msg.UserSubtractHpResult
         * @instance
         */
        UserSubtractHpResult.prototype.subtractHp = 0;

        /**
         * Creates a new UserSubtractHpResult instance using the specified properties.
         * @function create
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {msg.IUserSubtractHpResult=} [properties] Properties to set
         * @returns {msg.UserSubtractHpResult} UserSubtractHpResult instance
         */
        UserSubtractHpResult.create = function create(properties) {
            return new UserSubtractHpResult(properties);
        };

        /**
         * Encodes the specified UserSubtractHpResult message. Does not implicitly {@link msg.UserSubtractHpResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {msg.IUserSubtractHpResult} message UserSubtractHpResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSubtractHpResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetUserId);
            if (message.subtractHp != null && message.hasOwnProperty("subtractHp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.subtractHp);
            return writer;
        };

        /**
         * Encodes the specified UserSubtractHpResult message, length delimited. Does not implicitly {@link msg.UserSubtractHpResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {msg.IUserSubtractHpResult} message UserSubtractHpResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSubtractHpResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSubtractHpResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserSubtractHpResult} UserSubtractHpResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSubtractHpResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserSubtractHpResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetUserId = reader.uint32();
                    break;
                case 2:
                    message.subtractHp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserSubtractHpResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserSubtractHpResult} UserSubtractHpResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSubtractHpResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSubtractHpResult message.
         * @function verify
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSubtractHpResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            if (message.subtractHp != null && message.hasOwnProperty("subtractHp"))
                if (!$util.isInteger(message.subtractHp))
                    return "subtractHp: integer expected";
            return null;
        };

        /**
         * Creates a UserSubtractHpResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserSubtractHpResult} UserSubtractHpResult
         */
        UserSubtractHpResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserSubtractHpResult)
                return object;
            let message = new $root.msg.UserSubtractHpResult();
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId >>> 0;
            if (object.subtractHp != null)
                message.subtractHp = object.subtractHp >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSubtractHpResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserSubtractHpResult
         * @static
         * @param {msg.UserSubtractHpResult} message UserSubtractHpResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSubtractHpResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.targetUserId = 0;
                object.subtractHp = 0;
            }
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.subtractHp != null && message.hasOwnProperty("subtractHp"))
                object.subtractHp = message.subtractHp;
            return object;
        };

        /**
         * Converts this UserSubtractHpResult to JSON.
         * @function toJSON
         * @memberof msg.UserSubtractHpResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSubtractHpResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSubtractHpResult;
    })();

    msg.UserDieResult = (function() {

        /**
         * Properties of a UserDieResult.
         * @memberof msg
         * @interface IUserDieResult
         * @property {number|null} [targetUserId] UserDieResult targetUserId
         */

        /**
         * Constructs a new UserDieResult.
         * @memberof msg
         * @classdesc Represents a UserDieResult.
         * @implements IUserDieResult
         * @constructor
         * @param {msg.IUserDieResult=} [properties] Properties to set
         */
        function UserDieResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserDieResult targetUserId.
         * @member {number} targetUserId
         * @memberof msg.UserDieResult
         * @instance
         */
        UserDieResult.prototype.targetUserId = 0;

        /**
         * Creates a new UserDieResult instance using the specified properties.
         * @function create
         * @memberof msg.UserDieResult
         * @static
         * @param {msg.IUserDieResult=} [properties] Properties to set
         * @returns {msg.UserDieResult} UserDieResult instance
         */
        UserDieResult.create = function create(properties) {
            return new UserDieResult(properties);
        };

        /**
         * Encodes the specified UserDieResult message. Does not implicitly {@link msg.UserDieResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserDieResult
         * @static
         * @param {msg.IUserDieResult} message UserDieResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDieResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetUserId);
            return writer;
        };

        /**
         * Encodes the specified UserDieResult message, length delimited. Does not implicitly {@link msg.UserDieResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserDieResult
         * @static
         * @param {msg.IUserDieResult} message UserDieResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDieResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserDieResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserDieResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserDieResult} UserDieResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDieResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserDieResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetUserId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserDieResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserDieResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserDieResult} UserDieResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDieResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserDieResult message.
         * @function verify
         * @memberof msg.UserDieResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserDieResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isInteger(message.targetUserId))
                    return "targetUserId: integer expected";
            return null;
        };

        /**
         * Creates a UserDieResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserDieResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserDieResult} UserDieResult
         */
        UserDieResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserDieResult)
                return object;
            let message = new $root.msg.UserDieResult();
            if (object.targetUserId != null)
                message.targetUserId = object.targetUserId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserDieResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserDieResult
         * @static
         * @param {msg.UserDieResult} message UserDieResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserDieResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.targetUserId = 0;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            return object;
        };

        /**
         * Converts this UserDieResult to JSON.
         * @function toJSON
         * @memberof msg.UserDieResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserDieResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserDieResult;
    })();

    msg.UserLoginCmd = (function() {

        /**
         * Properties of a UserLoginCmd.
         * @memberof msg
         * @interface IUserLoginCmd
         * @property {string|null} [userName] UserLoginCmd userName
         * @property {string|null} [password] UserLoginCmd password
         */

        /**
         * Constructs a new UserLoginCmd.
         * @memberof msg
         * @classdesc Represents a UserLoginCmd.
         * @implements IUserLoginCmd
         * @constructor
         * @param {msg.IUserLoginCmd=} [properties] Properties to set
         */
        function UserLoginCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginCmd userName.
         * @member {string} userName
         * @memberof msg.UserLoginCmd
         * @instance
         */
        UserLoginCmd.prototype.userName = "";

        /**
         * UserLoginCmd password.
         * @member {string} password
         * @memberof msg.UserLoginCmd
         * @instance
         */
        UserLoginCmd.prototype.password = "";

        /**
         * Creates a new UserLoginCmd instance using the specified properties.
         * @function create
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.IUserLoginCmd=} [properties] Properties to set
         * @returns {msg.UserLoginCmd} UserLoginCmd instance
         */
        UserLoginCmd.create = function create(properties) {
            return new UserLoginCmd(properties);
        };

        /**
         * Encodes the specified UserLoginCmd message. Does not implicitly {@link msg.UserLoginCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.IUserLoginCmd} message UserLoginCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified UserLoginCmd message, length delimited. Does not implicitly {@link msg.UserLoginCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.IUserLoginCmd} message UserLoginCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserLoginCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserLoginCmd} UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserLoginCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserLoginCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserLoginCmd} UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginCmd message.
         * @function verify
         * @memberof msg.UserLoginCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a UserLoginCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserLoginCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserLoginCmd} UserLoginCmd
         */
        UserLoginCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserLoginCmd)
                return object;
            let message = new $root.msg.UserLoginCmd();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a UserLoginCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserLoginCmd
         * @static
         * @param {msg.UserLoginCmd} message UserLoginCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userName = "";
                object.password = "";
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this UserLoginCmd to JSON.
         * @function toJSON
         * @memberof msg.UserLoginCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginCmd;
    })();

    msg.UserLoginResult = (function() {

        /**
         * Properties of a UserLoginResult.
         * @memberof msg
         * @interface IUserLoginResult
         * @property {number|null} [userId] UserLoginResult userId
         * @property {string|null} [userName] UserLoginResult userName
         * @property {string|null} [heroAvatar] UserLoginResult heroAvatar
         */

        /**
         * Constructs a new UserLoginResult.
         * @memberof msg
         * @classdesc Represents a UserLoginResult.
         * @implements IUserLoginResult
         * @constructor
         * @param {msg.IUserLoginResult=} [properties] Properties to set
         */
        function UserLoginResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginResult userId.
         * @member {number} userId
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.userId = 0;

        /**
         * UserLoginResult userName.
         * @member {string} userName
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.userName = "";

        /**
         * UserLoginResult heroAvatar.
         * @member {string} heroAvatar
         * @memberof msg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.heroAvatar = "";

        /**
         * Creates a new UserLoginResult instance using the specified properties.
         * @function create
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.IUserLoginResult=} [properties] Properties to set
         * @returns {msg.UserLoginResult} UserLoginResult instance
         */
        UserLoginResult.create = function create(properties) {
            return new UserLoginResult(properties);
        };

        /**
         * Encodes the specified UserLoginResult message. Does not implicitly {@link msg.UserLoginResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.IUserLoginResult} message UserLoginResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.heroAvatar);
            return writer;
        };

        /**
         * Encodes the specified UserLoginResult message, length delimited. Does not implicitly {@link msg.UserLoginResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.IUserLoginResult} message UserLoginResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserLoginResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserLoginResult} UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserLoginResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.heroAvatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserLoginResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserLoginResult} UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginResult message.
         * @function verify
         * @memberof msg.UserLoginResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                if (!$util.isString(message.heroAvatar))
                    return "heroAvatar: string expected";
            return null;
        };

        /**
         * Creates a UserLoginResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserLoginResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserLoginResult} UserLoginResult
         */
        UserLoginResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserLoginResult)
                return object;
            let message = new $root.msg.UserLoginResult();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.heroAvatar != null)
                message.heroAvatar = String(object.heroAvatar);
            return message;
        };

        /**
         * Creates a plain object from a UserLoginResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserLoginResult
         * @static
         * @param {msg.UserLoginResult} message UserLoginResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.heroAvatar = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                object.heroAvatar = message.heroAvatar;
            return object;
        };

        /**
         * Converts this UserLoginResult to JSON.
         * @function toJSON
         * @memberof msg.UserLoginResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginResult;
    })();

    msg.SelectHeroCmd = (function() {

        /**
         * Properties of a SelectHeroCmd.
         * @memberof msg
         * @interface ISelectHeroCmd
         * @property {string|null} [heroAvatar] SelectHeroCmd heroAvatar
         */

        /**
         * Constructs a new SelectHeroCmd.
         * @memberof msg
         * @classdesc Represents a SelectHeroCmd.
         * @implements ISelectHeroCmd
         * @constructor
         * @param {msg.ISelectHeroCmd=} [properties] Properties to set
         */
        function SelectHeroCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectHeroCmd heroAvatar.
         * @member {string} heroAvatar
         * @memberof msg.SelectHeroCmd
         * @instance
         */
        SelectHeroCmd.prototype.heroAvatar = "";

        /**
         * Creates a new SelectHeroCmd instance using the specified properties.
         * @function create
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {msg.ISelectHeroCmd=} [properties] Properties to set
         * @returns {msg.SelectHeroCmd} SelectHeroCmd instance
         */
        SelectHeroCmd.create = function create(properties) {
            return new SelectHeroCmd(properties);
        };

        /**
         * Encodes the specified SelectHeroCmd message. Does not implicitly {@link msg.SelectHeroCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {msg.ISelectHeroCmd} message SelectHeroCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectHeroCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.heroAvatar);
            return writer;
        };

        /**
         * Encodes the specified SelectHeroCmd message, length delimited. Does not implicitly {@link msg.SelectHeroCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {msg.ISelectHeroCmd} message SelectHeroCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectHeroCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectHeroCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SelectHeroCmd} SelectHeroCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectHeroCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SelectHeroCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroAvatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectHeroCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SelectHeroCmd} SelectHeroCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectHeroCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectHeroCmd message.
         * @function verify
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectHeroCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                if (!$util.isString(message.heroAvatar))
                    return "heroAvatar: string expected";
            return null;
        };

        /**
         * Creates a SelectHeroCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SelectHeroCmd} SelectHeroCmd
         */
        SelectHeroCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SelectHeroCmd)
                return object;
            let message = new $root.msg.SelectHeroCmd();
            if (object.heroAvatar != null)
                message.heroAvatar = String(object.heroAvatar);
            return message;
        };

        /**
         * Creates a plain object from a SelectHeroCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SelectHeroCmd
         * @static
         * @param {msg.SelectHeroCmd} message SelectHeroCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectHeroCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.heroAvatar = "";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                object.heroAvatar = message.heroAvatar;
            return object;
        };

        /**
         * Converts this SelectHeroCmd to JSON.
         * @function toJSON
         * @memberof msg.SelectHeroCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectHeroCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SelectHeroCmd;
    })();

    msg.SelectHeroResult = (function() {

        /**
         * Properties of a SelectHeroResult.
         * @memberof msg
         * @interface ISelectHeroResult
         * @property {string|null} [heroAvatar] SelectHeroResult heroAvatar
         */

        /**
         * Constructs a new SelectHeroResult.
         * @memberof msg
         * @classdesc Represents a SelectHeroResult.
         * @implements ISelectHeroResult
         * @constructor
         * @param {msg.ISelectHeroResult=} [properties] Properties to set
         */
        function SelectHeroResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectHeroResult heroAvatar.
         * @member {string} heroAvatar
         * @memberof msg.SelectHeroResult
         * @instance
         */
        SelectHeroResult.prototype.heroAvatar = "";

        /**
         * Creates a new SelectHeroResult instance using the specified properties.
         * @function create
         * @memberof msg.SelectHeroResult
         * @static
         * @param {msg.ISelectHeroResult=} [properties] Properties to set
         * @returns {msg.SelectHeroResult} SelectHeroResult instance
         */
        SelectHeroResult.create = function create(properties) {
            return new SelectHeroResult(properties);
        };

        /**
         * Encodes the specified SelectHeroResult message. Does not implicitly {@link msg.SelectHeroResult.verify|verify} messages.
         * @function encode
         * @memberof msg.SelectHeroResult
         * @static
         * @param {msg.ISelectHeroResult} message SelectHeroResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectHeroResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.heroAvatar);
            return writer;
        };

        /**
         * Encodes the specified SelectHeroResult message, length delimited. Does not implicitly {@link msg.SelectHeroResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SelectHeroResult
         * @static
         * @param {msg.ISelectHeroResult} message SelectHeroResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectHeroResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectHeroResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SelectHeroResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SelectHeroResult} SelectHeroResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectHeroResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SelectHeroResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroAvatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectHeroResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SelectHeroResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SelectHeroResult} SelectHeroResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectHeroResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectHeroResult message.
         * @function verify
         * @memberof msg.SelectHeroResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectHeroResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                if (!$util.isString(message.heroAvatar))
                    return "heroAvatar: string expected";
            return null;
        };

        /**
         * Creates a SelectHeroResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SelectHeroResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SelectHeroResult} SelectHeroResult
         */
        SelectHeroResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SelectHeroResult)
                return object;
            let message = new $root.msg.SelectHeroResult();
            if (object.heroAvatar != null)
                message.heroAvatar = String(object.heroAvatar);
            return message;
        };

        /**
         * Creates a plain object from a SelectHeroResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SelectHeroResult
         * @static
         * @param {msg.SelectHeroResult} message SelectHeroResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectHeroResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.heroAvatar = "";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                object.heroAvatar = message.heroAvatar;
            return object;
        };

        /**
         * Converts this SelectHeroResult to JSON.
         * @function toJSON
         * @memberof msg.SelectHeroResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectHeroResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SelectHeroResult;
    })();

    msg.GetRankCmd = (function() {

        /**
         * Properties of a GetRankCmd.
         * @memberof msg
         * @interface IGetRankCmd
         */

        /**
         * Constructs a new GetRankCmd.
         * @memberof msg
         * @classdesc Represents a GetRankCmd.
         * @implements IGetRankCmd
         * @constructor
         * @param {msg.IGetRankCmd=} [properties] Properties to set
         */
        function GetRankCmd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetRankCmd instance using the specified properties.
         * @function create
         * @memberof msg.GetRankCmd
         * @static
         * @param {msg.IGetRankCmd=} [properties] Properties to set
         * @returns {msg.GetRankCmd} GetRankCmd instance
         */
        GetRankCmd.create = function create(properties) {
            return new GetRankCmd(properties);
        };

        /**
         * Encodes the specified GetRankCmd message. Does not implicitly {@link msg.GetRankCmd.verify|verify} messages.
         * @function encode
         * @memberof msg.GetRankCmd
         * @static
         * @param {msg.IGetRankCmd} message GetRankCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetRankCmd message, length delimited. Does not implicitly {@link msg.GetRankCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetRankCmd
         * @static
         * @param {msg.IGetRankCmd} message GetRankCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRankCmd message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetRankCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetRankCmd} GetRankCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRankCmd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRankCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetRankCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetRankCmd} GetRankCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRankCmd message.
         * @function verify
         * @memberof msg.GetRankCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRankCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetRankCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetRankCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetRankCmd} GetRankCmd
         */
        GetRankCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetRankCmd)
                return object;
            return new $root.msg.GetRankCmd();
        };

        /**
         * Creates a plain object from a GetRankCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetRankCmd
         * @static
         * @param {msg.GetRankCmd} message GetRankCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRankCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetRankCmd to JSON.
         * @function toJSON
         * @memberof msg.GetRankCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRankCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRankCmd;
    })();

    msg.GetRankResult = (function() {

        /**
         * Properties of a GetRankResult.
         * @memberof msg
         * @interface IGetRankResult
         * @property {Array.<msg.GetRankResult.IRankItem>|null} [rankItem] GetRankResult rankItem
         */

        /**
         * Constructs a new GetRankResult.
         * @memberof msg
         * @classdesc Represents a GetRankResult.
         * @implements IGetRankResult
         * @constructor
         * @param {msg.IGetRankResult=} [properties] Properties to set
         */
        function GetRankResult(properties) {
            this.rankItem = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRankResult rankItem.
         * @member {Array.<msg.GetRankResult.IRankItem>} rankItem
         * @memberof msg.GetRankResult
         * @instance
         */
        GetRankResult.prototype.rankItem = $util.emptyArray;

        /**
         * Creates a new GetRankResult instance using the specified properties.
         * @function create
         * @memberof msg.GetRankResult
         * @static
         * @param {msg.IGetRankResult=} [properties] Properties to set
         * @returns {msg.GetRankResult} GetRankResult instance
         */
        GetRankResult.create = function create(properties) {
            return new GetRankResult(properties);
        };

        /**
         * Encodes the specified GetRankResult message. Does not implicitly {@link msg.GetRankResult.verify|verify} messages.
         * @function encode
         * @memberof msg.GetRankResult
         * @static
         * @param {msg.IGetRankResult} message GetRankResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rankItem != null && message.rankItem.length)
                for (let i = 0; i < message.rankItem.length; ++i)
                    $root.msg.GetRankResult.RankItem.encode(message.rankItem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRankResult message, length delimited. Does not implicitly {@link msg.GetRankResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GetRankResult
         * @static
         * @param {msg.IGetRankResult} message GetRankResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRankResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GetRankResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GetRankResult} GetRankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRankResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rankItem && message.rankItem.length))
                        message.rankItem = [];
                    message.rankItem.push($root.msg.GetRankResult.RankItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRankResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GetRankResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GetRankResult} GetRankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRankResult message.
         * @function verify
         * @memberof msg.GetRankResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRankResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rankItem != null && message.hasOwnProperty("rankItem")) {
                if (!Array.isArray(message.rankItem))
                    return "rankItem: array expected";
                for (let i = 0; i < message.rankItem.length; ++i) {
                    let error = $root.msg.GetRankResult.RankItem.verify(message.rankItem[i]);
                    if (error)
                        return "rankItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetRankResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GetRankResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GetRankResult} GetRankResult
         */
        GetRankResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GetRankResult)
                return object;
            let message = new $root.msg.GetRankResult();
            if (object.rankItem) {
                if (!Array.isArray(object.rankItem))
                    throw TypeError(".msg.GetRankResult.rankItem: array expected");
                message.rankItem = [];
                for (let i = 0; i < object.rankItem.length; ++i) {
                    if (typeof object.rankItem[i] !== "object")
                        throw TypeError(".msg.GetRankResult.rankItem: object expected");
                    message.rankItem[i] = $root.msg.GetRankResult.RankItem.fromObject(object.rankItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRankResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GetRankResult
         * @static
         * @param {msg.GetRankResult} message GetRankResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRankResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.rankItem = [];
            if (message.rankItem && message.rankItem.length) {
                object.rankItem = [];
                for (let j = 0; j < message.rankItem.length; ++j)
                    object.rankItem[j] = $root.msg.GetRankResult.RankItem.toObject(message.rankItem[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRankResult to JSON.
         * @function toJSON
         * @memberof msg.GetRankResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRankResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GetRankResult.RankItem = (function() {

            /**
             * Properties of a RankItem.
             * @memberof msg.GetRankResult
             * @interface IRankItem
             * @property {number|null} [rankId] RankItem rankId
             * @property {number|null} [userId] RankItem userId
             * @property {string|null} [userName] RankItem userName
             * @property {string|null} [heroAvatar] RankItem heroAvatar
             * @property {number|null} [win] RankItem win
             */

            /**
             * Constructs a new RankItem.
             * @memberof msg.GetRankResult
             * @classdesc Represents a RankItem.
             * @implements IRankItem
             * @constructor
             * @param {msg.GetRankResult.IRankItem=} [properties] Properties to set
             */
            function RankItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RankItem rankId.
             * @member {number} rankId
             * @memberof msg.GetRankResult.RankItem
             * @instance
             */
            RankItem.prototype.rankId = 0;

            /**
             * RankItem userId.
             * @member {number} userId
             * @memberof msg.GetRankResult.RankItem
             * @instance
             */
            RankItem.prototype.userId = 0;

            /**
             * RankItem userName.
             * @member {string} userName
             * @memberof msg.GetRankResult.RankItem
             * @instance
             */
            RankItem.prototype.userName = "";

            /**
             * RankItem heroAvatar.
             * @member {string} heroAvatar
             * @memberof msg.GetRankResult.RankItem
             * @instance
             */
            RankItem.prototype.heroAvatar = "";

            /**
             * RankItem win.
             * @member {number} win
             * @memberof msg.GetRankResult.RankItem
             * @instance
             */
            RankItem.prototype.win = 0;

            /**
             * Creates a new RankItem instance using the specified properties.
             * @function create
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {msg.GetRankResult.IRankItem=} [properties] Properties to set
             * @returns {msg.GetRankResult.RankItem} RankItem instance
             */
            RankItem.create = function create(properties) {
                return new RankItem(properties);
            };

            /**
             * Encodes the specified RankItem message. Does not implicitly {@link msg.GetRankResult.RankItem.verify|verify} messages.
             * @function encode
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {msg.GetRankResult.IRankItem} message RankItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rankId != null && message.hasOwnProperty("rankId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rankId);
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userId);
                if (message.userName != null && message.hasOwnProperty("userName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
                if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.heroAvatar);
                if (message.win != null && message.hasOwnProperty("win"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.win);
                return writer;
            };

            /**
             * Encodes the specified RankItem message, length delimited. Does not implicitly {@link msg.GetRankResult.RankItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {msg.GetRankResult.IRankItem} message RankItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RankItem message from the specified reader or buffer.
             * @function decode
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.GetRankResult.RankItem} RankItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GetRankResult.RankItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rankId = reader.uint32();
                        break;
                    case 2:
                        message.userId = reader.uint32();
                        break;
                    case 3:
                        message.userName = reader.string();
                        break;
                    case 4:
                        message.heroAvatar = reader.string();
                        break;
                    case 5:
                        message.win = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RankItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.GetRankResult.RankItem} RankItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RankItem message.
             * @function verify
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RankItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rankId != null && message.hasOwnProperty("rankId"))
                    if (!$util.isInteger(message.rankId))
                        return "rankId: integer expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId))
                        return "userId: integer expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                    if (!$util.isString(message.heroAvatar))
                        return "heroAvatar: string expected";
                if (message.win != null && message.hasOwnProperty("win"))
                    if (!$util.isInteger(message.win))
                        return "win: integer expected";
                return null;
            };

            /**
             * Creates a RankItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.GetRankResult.RankItem} RankItem
             */
            RankItem.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.GetRankResult.RankItem)
                    return object;
                let message = new $root.msg.GetRankResult.RankItem();
                if (object.rankId != null)
                    message.rankId = object.rankId >>> 0;
                if (object.userId != null)
                    message.userId = object.userId >>> 0;
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.heroAvatar != null)
                    message.heroAvatar = String(object.heroAvatar);
                if (object.win != null)
                    message.win = object.win >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a RankItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.GetRankResult.RankItem
             * @static
             * @param {msg.GetRankResult.RankItem} message RankItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RankItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.rankId = 0;
                    object.userId = 0;
                    object.userName = "";
                    object.heroAvatar = "";
                    object.win = 0;
                }
                if (message.rankId != null && message.hasOwnProperty("rankId"))
                    object.rankId = message.rankId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                    object.heroAvatar = message.heroAvatar;
                if (message.win != null && message.hasOwnProperty("win"))
                    object.win = message.win;
                return object;
            };

            /**
             * Converts this RankItem to JSON.
             * @function toJSON
             * @memberof msg.GetRankResult.RankItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RankItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RankItem;
        })();

        return GetRankResult;
    })();

    return msg;
})();

export { $root as default };
