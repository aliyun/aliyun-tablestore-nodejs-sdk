/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tablestore = (function() {

    /**
     * Namespace tablestore.
     * @exports tablestore
     * @namespace
     */
    var tablestore = {};

    tablestore.proto = (function() {

        /**
         * Namespace proto.
         * @memberof tablestore
         * @namespace
         */
        var proto = {};

        proto.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof tablestore.proto
             * @interface IError
             * @property {string} code Error code
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof tablestore.proto
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {tablestore.proto.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {string} code
             * @memberof tablestore.proto.Error
             * @instance
             */
            Error.prototype.code = "";

            /**
             * Error message.
             * @member {string} message
             * @memberof tablestore.proto.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.Error
             * @static
             * @param {tablestore.proto.IError=} [properties] Properties to set
             * @returns {tablestore.proto.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link tablestore.proto.Error.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.Error
             * @static
             * @param {tablestore.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link tablestore.proto.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.Error
             * @static
             * @param {tablestore.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("code"))
                    throw $util.ProtocolError("missing required 'code'", { instance: message });
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof tablestore.proto.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.code))
                    return "code: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.Error)
                    return object;
                var message = new $root.tablestore.proto.Error();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.Error
             * @static
             * @param {tablestore.proto.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = "";
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof tablestore.proto.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        /**
         * PrimaryKeyType enum.
         * @name tablestore.proto.PrimaryKeyType
         * @enum {string}
         * @property {number} INTEGER=1 INTEGER value
         * @property {number} STRING=2 STRING value
         * @property {number} BINARY=3 BINARY value
         */
        proto.PrimaryKeyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "INTEGER"] = 1;
            values[valuesById[2] = "STRING"] = 2;
            values[valuesById[3] = "BINARY"] = 3;
            return values;
        })();

        /**
         * DefinedColumnType enum.
         * @name tablestore.proto.DefinedColumnType
         * @enum {string}
         * @property {number} DCT_INTEGER=1 DCT_INTEGER value
         * @property {number} DCT_DOUBLE=2 DCT_DOUBLE value
         * @property {number} DCT_BOOLEAN=3 DCT_BOOLEAN value
         * @property {number} DCT_STRING=4 DCT_STRING value
         * @property {number} DCT_BLOB=7 DCT_BLOB value
         */
        proto.DefinedColumnType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "DCT_INTEGER"] = 1;
            values[valuesById[2] = "DCT_DOUBLE"] = 2;
            values[valuesById[3] = "DCT_BOOLEAN"] = 3;
            values[valuesById[4] = "DCT_STRING"] = 4;
            values[valuesById[7] = "DCT_BLOB"] = 7;
            return values;
        })();

        /**
         * PrimaryKeyOption enum.
         * @name tablestore.proto.PrimaryKeyOption
         * @enum {string}
         * @property {number} AUTO_INCREMENT=1 AUTO_INCREMENT value
         */
        proto.PrimaryKeyOption = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "AUTO_INCREMENT"] = 1;
            return values;
        })();

        proto.PrimaryKeySchema = (function() {

            /**
             * Properties of a PrimaryKeySchema.
             * @memberof tablestore.proto
             * @interface IPrimaryKeySchema
             * @property {string} name PrimaryKeySchema name
             * @property {tablestore.proto.PrimaryKeyType} type PrimaryKeySchema type
             * @property {tablestore.proto.PrimaryKeyOption|null} [option] PrimaryKeySchema option
             */

            /**
             * Constructs a new PrimaryKeySchema.
             * @memberof tablestore.proto
             * @classdesc Represents a PrimaryKeySchema.
             * @implements IPrimaryKeySchema
             * @constructor
             * @param {tablestore.proto.IPrimaryKeySchema=} [properties] Properties to set
             */
            function PrimaryKeySchema(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PrimaryKeySchema name.
             * @member {string} name
             * @memberof tablestore.proto.PrimaryKeySchema
             * @instance
             */
            PrimaryKeySchema.prototype.name = "";

            /**
             * PrimaryKeySchema type.
             * @member {tablestore.proto.PrimaryKeyType} type
             * @memberof tablestore.proto.PrimaryKeySchema
             * @instance
             */
            PrimaryKeySchema.prototype.type = 1;

            /**
             * PrimaryKeySchema option.
             * @member {tablestore.proto.PrimaryKeyOption} option
             * @memberof tablestore.proto.PrimaryKeySchema
             * @instance
             */
            PrimaryKeySchema.prototype.option = 1;

            /**
             * Creates a new PrimaryKeySchema instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {tablestore.proto.IPrimaryKeySchema=} [properties] Properties to set
             * @returns {tablestore.proto.PrimaryKeySchema} PrimaryKeySchema instance
             */
            PrimaryKeySchema.create = function create(properties) {
                return new PrimaryKeySchema(properties);
            };

            /**
             * Encodes the specified PrimaryKeySchema message. Does not implicitly {@link tablestore.proto.PrimaryKeySchema.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {tablestore.proto.IPrimaryKeySchema} message PrimaryKeySchema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryKeySchema.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.option != null && message.hasOwnProperty("option"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.option);
                return writer;
            };

            /**
             * Encodes the specified PrimaryKeySchema message, length delimited. Does not implicitly {@link tablestore.proto.PrimaryKeySchema.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {tablestore.proto.IPrimaryKeySchema} message PrimaryKeySchema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryKeySchema.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PrimaryKeySchema message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.PrimaryKeySchema} PrimaryKeySchema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryKeySchema.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.PrimaryKeySchema();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.option = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                return message;
            };

            /**
             * Decodes a PrimaryKeySchema message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.PrimaryKeySchema} PrimaryKeySchema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryKeySchema.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PrimaryKeySchema message.
             * @function verify
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrimaryKeySchema.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.option != null && message.hasOwnProperty("option"))
                    switch (message.option) {
                    default:
                        return "option: enum value expected";
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a PrimaryKeySchema message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.PrimaryKeySchema} PrimaryKeySchema
             */
            PrimaryKeySchema.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.PrimaryKeySchema)
                    return object;
                var message = new $root.tablestore.proto.PrimaryKeySchema();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.type) {
                case "INTEGER":
                case 1:
                    message.type = 1;
                    break;
                case "STRING":
                case 2:
                    message.type = 2;
                    break;
                case "BINARY":
                case 3:
                    message.type = 3;
                    break;
                }
                switch (object.option) {
                case "AUTO_INCREMENT":
                case 1:
                    message.option = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a PrimaryKeySchema message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.PrimaryKeySchema
             * @static
             * @param {tablestore.proto.PrimaryKeySchema} message PrimaryKeySchema
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrimaryKeySchema.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.type = options.enums === String ? "INTEGER" : 1;
                    object.option = options.enums === String ? "AUTO_INCREMENT" : 1;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.tablestore.proto.PrimaryKeyType[message.type] : message.type;
                if (message.option != null && message.hasOwnProperty("option"))
                    object.option = options.enums === String ? $root.tablestore.proto.PrimaryKeyOption[message.option] : message.option;
                return object;
            };

            /**
             * Converts this PrimaryKeySchema to JSON.
             * @function toJSON
             * @memberof tablestore.proto.PrimaryKeySchema
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrimaryKeySchema.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PrimaryKeySchema;
        })();

        proto.DefinedColumnSchema = (function() {

            /**
             * Properties of a DefinedColumnSchema.
             * @memberof tablestore.proto
             * @interface IDefinedColumnSchema
             * @property {string} name DefinedColumnSchema name
             * @property {tablestore.proto.DefinedColumnType} type DefinedColumnSchema type
             */

            /**
             * Constructs a new DefinedColumnSchema.
             * @memberof tablestore.proto
             * @classdesc Represents a DefinedColumnSchema.
             * @implements IDefinedColumnSchema
             * @constructor
             * @param {tablestore.proto.IDefinedColumnSchema=} [properties] Properties to set
             */
            function DefinedColumnSchema(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DefinedColumnSchema name.
             * @member {string} name
             * @memberof tablestore.proto.DefinedColumnSchema
             * @instance
             */
            DefinedColumnSchema.prototype.name = "";

            /**
             * DefinedColumnSchema type.
             * @member {tablestore.proto.DefinedColumnType} type
             * @memberof tablestore.proto.DefinedColumnSchema
             * @instance
             */
            DefinedColumnSchema.prototype.type = 1;

            /**
             * Creates a new DefinedColumnSchema instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {tablestore.proto.IDefinedColumnSchema=} [properties] Properties to set
             * @returns {tablestore.proto.DefinedColumnSchema} DefinedColumnSchema instance
             */
            DefinedColumnSchema.create = function create(properties) {
                return new DefinedColumnSchema(properties);
            };

            /**
             * Encodes the specified DefinedColumnSchema message. Does not implicitly {@link tablestore.proto.DefinedColumnSchema.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {tablestore.proto.IDefinedColumnSchema} message DefinedColumnSchema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefinedColumnSchema.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };

            /**
             * Encodes the specified DefinedColumnSchema message, length delimited. Does not implicitly {@link tablestore.proto.DefinedColumnSchema.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {tablestore.proto.IDefinedColumnSchema} message DefinedColumnSchema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefinedColumnSchema.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DefinedColumnSchema message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DefinedColumnSchema} DefinedColumnSchema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DefinedColumnSchema.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DefinedColumnSchema();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                return message;
            };

            /**
             * Decodes a DefinedColumnSchema message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DefinedColumnSchema} DefinedColumnSchema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DefinedColumnSchema.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DefinedColumnSchema message.
             * @function verify
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DefinedColumnSchema.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 7:
                    break;
                }
                return null;
            };

            /**
             * Creates a DefinedColumnSchema message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DefinedColumnSchema} DefinedColumnSchema
             */
            DefinedColumnSchema.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DefinedColumnSchema)
                    return object;
                var message = new $root.tablestore.proto.DefinedColumnSchema();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.type) {
                case "DCT_INTEGER":
                case 1:
                    message.type = 1;
                    break;
                case "DCT_DOUBLE":
                case 2:
                    message.type = 2;
                    break;
                case "DCT_BOOLEAN":
                case 3:
                    message.type = 3;
                    break;
                case "DCT_STRING":
                case 4:
                    message.type = 4;
                    break;
                case "DCT_BLOB":
                case 7:
                    message.type = 7;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a DefinedColumnSchema message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DefinedColumnSchema
             * @static
             * @param {tablestore.proto.DefinedColumnSchema} message DefinedColumnSchema
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DefinedColumnSchema.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.type = options.enums === String ? "DCT_INTEGER" : 1;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.tablestore.proto.DefinedColumnType[message.type] : message.type;
                return object;
            };

            /**
             * Converts this DefinedColumnSchema to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DefinedColumnSchema
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DefinedColumnSchema.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DefinedColumnSchema;
        })();

        proto.PartitionRange = (function() {

            /**
             * Properties of a PartitionRange.
             * @memberof tablestore.proto
             * @interface IPartitionRange
             * @property {Uint8Array} begin PartitionRange begin
             * @property {Uint8Array} end PartitionRange end
             */

            /**
             * Constructs a new PartitionRange.
             * @memberof tablestore.proto
             * @classdesc Represents a PartitionRange.
             * @implements IPartitionRange
             * @constructor
             * @param {tablestore.proto.IPartitionRange=} [properties] Properties to set
             */
            function PartitionRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PartitionRange begin.
             * @member {Uint8Array} begin
             * @memberof tablestore.proto.PartitionRange
             * @instance
             */
            PartitionRange.prototype.begin = $util.newBuffer([]);

            /**
             * PartitionRange end.
             * @member {Uint8Array} end
             * @memberof tablestore.proto.PartitionRange
             * @instance
             */
            PartitionRange.prototype.end = $util.newBuffer([]);

            /**
             * Creates a new PartitionRange instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {tablestore.proto.IPartitionRange=} [properties] Properties to set
             * @returns {tablestore.proto.PartitionRange} PartitionRange instance
             */
            PartitionRange.create = function create(properties) {
                return new PartitionRange(properties);
            };

            /**
             * Encodes the specified PartitionRange message. Does not implicitly {@link tablestore.proto.PartitionRange.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {tablestore.proto.IPartitionRange} message PartitionRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PartitionRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.begin);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.end);
                return writer;
            };

            /**
             * Encodes the specified PartitionRange message, length delimited. Does not implicitly {@link tablestore.proto.PartitionRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {tablestore.proto.IPartitionRange} message PartitionRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PartitionRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PartitionRange message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.PartitionRange} PartitionRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PartitionRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.PartitionRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.begin = reader.bytes();
                        break;
                    case 2:
                        message.end = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("begin"))
                    throw $util.ProtocolError("missing required 'begin'", { instance: message });
                if (!message.hasOwnProperty("end"))
                    throw $util.ProtocolError("missing required 'end'", { instance: message });
                return message;
            };

            /**
             * Decodes a PartitionRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.PartitionRange} PartitionRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PartitionRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PartitionRange message.
             * @function verify
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PartitionRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.begin && typeof message.begin.length === "number" || $util.isString(message.begin)))
                    return "begin: buffer expected";
                if (!(message.end && typeof message.end.length === "number" || $util.isString(message.end)))
                    return "end: buffer expected";
                return null;
            };

            /**
             * Creates a PartitionRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.PartitionRange} PartitionRange
             */
            PartitionRange.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.PartitionRange)
                    return object;
                var message = new $root.tablestore.proto.PartitionRange();
                if (object.begin != null)
                    if (typeof object.begin === "string")
                        $util.base64.decode(object.begin, message.begin = $util.newBuffer($util.base64.length(object.begin)), 0);
                    else if (object.begin.length)
                        message.begin = object.begin;
                if (object.end != null)
                    if (typeof object.end === "string")
                        $util.base64.decode(object.end, message.end = $util.newBuffer($util.base64.length(object.end)), 0);
                    else if (object.end.length)
                        message.end = object.end;
                return message;
            };

            /**
             * Creates a plain object from a PartitionRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.PartitionRange
             * @static
             * @param {tablestore.proto.PartitionRange} message PartitionRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PartitionRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.begin = "";
                    else {
                        object.begin = [];
                        if (options.bytes !== Array)
                            object.begin = $util.newBuffer(object.begin);
                    }
                    if (options.bytes === String)
                        object.end = "";
                    else {
                        object.end = [];
                        if (options.bytes !== Array)
                            object.end = $util.newBuffer(object.end);
                    }
                }
                if (message.begin != null && message.hasOwnProperty("begin"))
                    object.begin = options.bytes === String ? $util.base64.encode(message.begin, 0, message.begin.length) : options.bytes === Array ? Array.prototype.slice.call(message.begin) : message.begin;
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = options.bytes === String ? $util.base64.encode(message.end, 0, message.end.length) : options.bytes === Array ? Array.prototype.slice.call(message.end) : message.end;
                return object;
            };

            /**
             * Converts this PartitionRange to JSON.
             * @function toJSON
             * @memberof tablestore.proto.PartitionRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PartitionRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PartitionRange;
        })();

        /**
         * BloomFilterType enum.
         * @name tablestore.proto.BloomFilterType
         * @enum {string}
         * @property {number} NONE=1 NONE value
         * @property {number} CELL=2 CELL value
         * @property {number} ROW=3 ROW value
         */
        proto.BloomFilterType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "NONE"] = 1;
            values[valuesById[2] = "CELL"] = 2;
            values[valuesById[3] = "ROW"] = 3;
            return values;
        })();

        /**
         * DataBlockType enum.
         * @name tablestore.proto.DataBlockType
         * @enum {string}
         * @property {number} DBT_PLAIN_BUFFER=0 DBT_PLAIN_BUFFER value
         * @property {number} DBT_SIMPLE_ROW_MATRIX=1 DBT_SIMPLE_ROW_MATRIX value
         */
        proto.DataBlockType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DBT_PLAIN_BUFFER"] = 0;
            values[valuesById[1] = "DBT_SIMPLE_ROW_MATRIX"] = 1;
            return values;
        })();

        /**
         * CompressType enum.
         * @name tablestore.proto.CompressType
         * @enum {string}
         * @property {number} CPT_NONE=0 CPT_NONE value
         */
        proto.CompressType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CPT_NONE"] = 0;
            return values;
        })();

        proto.TableOptions = (function() {

            /**
             * Properties of a TableOptions.
             * @memberof tablestore.proto
             * @interface ITableOptions
             * @property {number|null} [timeToLive] TableOptions timeToLive
             * @property {number|null} [maxVersions] TableOptions maxVersions
             * @property {tablestore.proto.BloomFilterType|null} [bloomFilterType] TableOptions bloomFilterType
             * @property {number|null} [blockSize] TableOptions blockSize
             * @property {number|Long|null} [deviationCellVersionInSec] TableOptions deviationCellVersionInSec
             */

            /**
             * Constructs a new TableOptions.
             * @memberof tablestore.proto
             * @classdesc Represents a TableOptions.
             * @implements ITableOptions
             * @constructor
             * @param {tablestore.proto.ITableOptions=} [properties] Properties to set
             */
            function TableOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableOptions timeToLive.
             * @member {number} timeToLive
             * @memberof tablestore.proto.TableOptions
             * @instance
             */
            TableOptions.prototype.timeToLive = 0;

            /**
             * TableOptions maxVersions.
             * @member {number} maxVersions
             * @memberof tablestore.proto.TableOptions
             * @instance
             */
            TableOptions.prototype.maxVersions = 0;

            /**
             * TableOptions bloomFilterType.
             * @member {tablestore.proto.BloomFilterType} bloomFilterType
             * @memberof tablestore.proto.TableOptions
             * @instance
             */
            TableOptions.prototype.bloomFilterType = 1;

            /**
             * TableOptions blockSize.
             * @member {number} blockSize
             * @memberof tablestore.proto.TableOptions
             * @instance
             */
            TableOptions.prototype.blockSize = 0;

            /**
             * TableOptions deviationCellVersionInSec.
             * @member {number|Long} deviationCellVersionInSec
             * @memberof tablestore.proto.TableOptions
             * @instance
             */
            TableOptions.prototype.deviationCellVersionInSec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new TableOptions instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {tablestore.proto.ITableOptions=} [properties] Properties to set
             * @returns {tablestore.proto.TableOptions} TableOptions instance
             */
            TableOptions.create = function create(properties) {
                return new TableOptions(properties);
            };

            /**
             * Encodes the specified TableOptions message. Does not implicitly {@link tablestore.proto.TableOptions.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {tablestore.proto.ITableOptions} message TableOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timeToLive != null && message.hasOwnProperty("timeToLive"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.timeToLive);
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxVersions);
                if (message.bloomFilterType != null && message.hasOwnProperty("bloomFilterType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.bloomFilterType);
                if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.blockSize);
                if (message.deviationCellVersionInSec != null && message.hasOwnProperty("deviationCellVersionInSec"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.deviationCellVersionInSec);
                return writer;
            };

            /**
             * Encodes the specified TableOptions message, length delimited. Does not implicitly {@link tablestore.proto.TableOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {tablestore.proto.ITableOptions} message TableOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TableOptions message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TableOptions} TableOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TableOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.timeToLive = reader.int32();
                        break;
                    case 2:
                        message.maxVersions = reader.int32();
                        break;
                    case 3:
                        message.bloomFilterType = reader.int32();
                        break;
                    case 4:
                        message.blockSize = reader.int32();
                        break;
                    case 5:
                        message.deviationCellVersionInSec = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TableOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TableOptions} TableOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TableOptions message.
             * @function verify
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TableOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timeToLive != null && message.hasOwnProperty("timeToLive"))
                    if (!$util.isInteger(message.timeToLive))
                        return "timeToLive: integer expected";
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    if (!$util.isInteger(message.maxVersions))
                        return "maxVersions: integer expected";
                if (message.bloomFilterType != null && message.hasOwnProperty("bloomFilterType"))
                    switch (message.bloomFilterType) {
                    default:
                        return "bloomFilterType: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                    if (!$util.isInteger(message.blockSize))
                        return "blockSize: integer expected";
                if (message.deviationCellVersionInSec != null && message.hasOwnProperty("deviationCellVersionInSec"))
                    if (!$util.isInteger(message.deviationCellVersionInSec) && !(message.deviationCellVersionInSec && $util.isInteger(message.deviationCellVersionInSec.low) && $util.isInteger(message.deviationCellVersionInSec.high)))
                        return "deviationCellVersionInSec: integer|Long expected";
                return null;
            };

            /**
             * Creates a TableOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TableOptions} TableOptions
             */
            TableOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TableOptions)
                    return object;
                var message = new $root.tablestore.proto.TableOptions();
                if (object.timeToLive != null)
                    message.timeToLive = object.timeToLive | 0;
                if (object.maxVersions != null)
                    message.maxVersions = object.maxVersions | 0;
                switch (object.bloomFilterType) {
                case "NONE":
                case 1:
                    message.bloomFilterType = 1;
                    break;
                case "CELL":
                case 2:
                    message.bloomFilterType = 2;
                    break;
                case "ROW":
                case 3:
                    message.bloomFilterType = 3;
                    break;
                }
                if (object.blockSize != null)
                    message.blockSize = object.blockSize | 0;
                if (object.deviationCellVersionInSec != null)
                    if ($util.Long)
                        (message.deviationCellVersionInSec = $util.Long.fromValue(object.deviationCellVersionInSec)).unsigned = false;
                    else if (typeof object.deviationCellVersionInSec === "string")
                        message.deviationCellVersionInSec = parseInt(object.deviationCellVersionInSec, 10);
                    else if (typeof object.deviationCellVersionInSec === "number")
                        message.deviationCellVersionInSec = object.deviationCellVersionInSec;
                    else if (typeof object.deviationCellVersionInSec === "object")
                        message.deviationCellVersionInSec = new $util.LongBits(object.deviationCellVersionInSec.low >>> 0, object.deviationCellVersionInSec.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a TableOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TableOptions
             * @static
             * @param {tablestore.proto.TableOptions} message TableOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TableOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timeToLive = 0;
                    object.maxVersions = 0;
                    object.bloomFilterType = options.enums === String ? "NONE" : 1;
                    object.blockSize = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.deviationCellVersionInSec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.deviationCellVersionInSec = options.longs === String ? "0" : 0;
                }
                if (message.timeToLive != null && message.hasOwnProperty("timeToLive"))
                    object.timeToLive = message.timeToLive;
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    object.maxVersions = message.maxVersions;
                if (message.bloomFilterType != null && message.hasOwnProperty("bloomFilterType"))
                    object.bloomFilterType = options.enums === String ? $root.tablestore.proto.BloomFilterType[message.bloomFilterType] : message.bloomFilterType;
                if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                    object.blockSize = message.blockSize;
                if (message.deviationCellVersionInSec != null && message.hasOwnProperty("deviationCellVersionInSec"))
                    if (typeof message.deviationCellVersionInSec === "number")
                        object.deviationCellVersionInSec = options.longs === String ? String(message.deviationCellVersionInSec) : message.deviationCellVersionInSec;
                    else
                        object.deviationCellVersionInSec = options.longs === String ? $util.Long.prototype.toString.call(message.deviationCellVersionInSec) : options.longs === Number ? new $util.LongBits(message.deviationCellVersionInSec.low >>> 0, message.deviationCellVersionInSec.high >>> 0).toNumber() : message.deviationCellVersionInSec;
                return object;
            };

            /**
             * Converts this TableOptions to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TableOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TableOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TableOptions;
        })();

        /**
         * IndexUpdateMode enum.
         * @name tablestore.proto.IndexUpdateMode
         * @enum {string}
         * @property {number} IUM_ASYNC_INDEX=0 IUM_ASYNC_INDEX value
         * @property {number} IUM_SYNC_INDEX=1 IUM_SYNC_INDEX value
         */
        proto.IndexUpdateMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IUM_ASYNC_INDEX"] = 0;
            values[valuesById[1] = "IUM_SYNC_INDEX"] = 1;
            return values;
        })();

        /**
         * IndexType enum.
         * @name tablestore.proto.IndexType
         * @enum {string}
         * @property {number} IT_GLOBAL_INDEX=0 IT_GLOBAL_INDEX value
         * @property {number} IT_LOCAL_INDEX=1 IT_LOCAL_INDEX value
         */
        proto.IndexType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IT_GLOBAL_INDEX"] = 0;
            values[valuesById[1] = "IT_LOCAL_INDEX"] = 1;
            return values;
        })();

        proto.IndexMeta = (function() {

            /**
             * Properties of an IndexMeta.
             * @memberof tablestore.proto
             * @interface IIndexMeta
             * @property {string} name IndexMeta name
             * @property {Array.<string>|null} [primaryKey] IndexMeta primaryKey
             * @property {Array.<string>|null} [definedColumn] IndexMeta definedColumn
             * @property {tablestore.proto.IndexUpdateMode} indexUpdateMode IndexMeta indexUpdateMode
             * @property {tablestore.proto.IndexType} indexType IndexMeta indexType
             */

            /**
             * Constructs a new IndexMeta.
             * @memberof tablestore.proto
             * @classdesc Represents an IndexMeta.
             * @implements IIndexMeta
             * @constructor
             * @param {tablestore.proto.IIndexMeta=} [properties] Properties to set
             */
            function IndexMeta(properties) {
                this.primaryKey = [];
                this.definedColumn = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IndexMeta name.
             * @member {string} name
             * @memberof tablestore.proto.IndexMeta
             * @instance
             */
            IndexMeta.prototype.name = "";

            /**
             * IndexMeta primaryKey.
             * @member {Array.<string>} primaryKey
             * @memberof tablestore.proto.IndexMeta
             * @instance
             */
            IndexMeta.prototype.primaryKey = $util.emptyArray;

            /**
             * IndexMeta definedColumn.
             * @member {Array.<string>} definedColumn
             * @memberof tablestore.proto.IndexMeta
             * @instance
             */
            IndexMeta.prototype.definedColumn = $util.emptyArray;

            /**
             * IndexMeta indexUpdateMode.
             * @member {tablestore.proto.IndexUpdateMode} indexUpdateMode
             * @memberof tablestore.proto.IndexMeta
             * @instance
             */
            IndexMeta.prototype.indexUpdateMode = 0;

            /**
             * IndexMeta indexType.
             * @member {tablestore.proto.IndexType} indexType
             * @memberof tablestore.proto.IndexMeta
             * @instance
             */
            IndexMeta.prototype.indexType = 0;

            /**
             * Creates a new IndexMeta instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {tablestore.proto.IIndexMeta=} [properties] Properties to set
             * @returns {tablestore.proto.IndexMeta} IndexMeta instance
             */
            IndexMeta.create = function create(properties) {
                return new IndexMeta(properties);
            };

            /**
             * Encodes the specified IndexMeta message. Does not implicitly {@link tablestore.proto.IndexMeta.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {tablestore.proto.IIndexMeta} message IndexMeta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndexMeta.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.primaryKey != null && message.primaryKey.length)
                    for (var i = 0; i < message.primaryKey.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.primaryKey[i]);
                if (message.definedColumn != null && message.definedColumn.length)
                    for (var i = 0; i < message.definedColumn.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.definedColumn[i]);
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.indexUpdateMode);
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.indexType);
                return writer;
            };

            /**
             * Encodes the specified IndexMeta message, length delimited. Does not implicitly {@link tablestore.proto.IndexMeta.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {tablestore.proto.IIndexMeta} message IndexMeta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndexMeta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IndexMeta message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.IndexMeta} IndexMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IndexMeta.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.IndexMeta();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.primaryKey && message.primaryKey.length))
                            message.primaryKey = [];
                        message.primaryKey.push(reader.string());
                        break;
                    case 3:
                        if (!(message.definedColumn && message.definedColumn.length))
                            message.definedColumn = [];
                        message.definedColumn.push(reader.string());
                        break;
                    case 4:
                        message.indexUpdateMode = reader.int32();
                        break;
                    case 5:
                        message.indexType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("indexUpdateMode"))
                    throw $util.ProtocolError("missing required 'indexUpdateMode'", { instance: message });
                if (!message.hasOwnProperty("indexType"))
                    throw $util.ProtocolError("missing required 'indexType'", { instance: message });
                return message;
            };

            /**
             * Decodes an IndexMeta message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.IndexMeta} IndexMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IndexMeta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IndexMeta message.
             * @function verify
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IndexMeta.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (message.primaryKey != null && message.hasOwnProperty("primaryKey")) {
                    if (!Array.isArray(message.primaryKey))
                        return "primaryKey: array expected";
                    for (var i = 0; i < message.primaryKey.length; ++i)
                        if (!$util.isString(message.primaryKey[i]))
                            return "primaryKey: string[] expected";
                }
                if (message.definedColumn != null && message.hasOwnProperty("definedColumn")) {
                    if (!Array.isArray(message.definedColumn))
                        return "definedColumn: array expected";
                    for (var i = 0; i < message.definedColumn.length; ++i)
                        if (!$util.isString(message.definedColumn[i]))
                            return "definedColumn: string[] expected";
                }
                switch (message.indexUpdateMode) {
                default:
                    return "indexUpdateMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
                switch (message.indexType) {
                default:
                    return "indexType: enum value expected";
                case 0:
                case 1:
                    break;
                }
                return null;
            };

            /**
             * Creates an IndexMeta message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.IndexMeta} IndexMeta
             */
            IndexMeta.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.IndexMeta)
                    return object;
                var message = new $root.tablestore.proto.IndexMeta();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.primaryKey) {
                    if (!Array.isArray(object.primaryKey))
                        throw TypeError(".tablestore.proto.IndexMeta.primaryKey: array expected");
                    message.primaryKey = [];
                    for (var i = 0; i < object.primaryKey.length; ++i)
                        message.primaryKey[i] = String(object.primaryKey[i]);
                }
                if (object.definedColumn) {
                    if (!Array.isArray(object.definedColumn))
                        throw TypeError(".tablestore.proto.IndexMeta.definedColumn: array expected");
                    message.definedColumn = [];
                    for (var i = 0; i < object.definedColumn.length; ++i)
                        message.definedColumn[i] = String(object.definedColumn[i]);
                }
                switch (object.indexUpdateMode) {
                case "IUM_ASYNC_INDEX":
                case 0:
                    message.indexUpdateMode = 0;
                    break;
                case "IUM_SYNC_INDEX":
                case 1:
                    message.indexUpdateMode = 1;
                    break;
                }
                switch (object.indexType) {
                case "IT_GLOBAL_INDEX":
                case 0:
                    message.indexType = 0;
                    break;
                case "IT_LOCAL_INDEX":
                case 1:
                    message.indexType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an IndexMeta message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.IndexMeta
             * @static
             * @param {tablestore.proto.IndexMeta} message IndexMeta
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IndexMeta.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.primaryKey = [];
                    object.definedColumn = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.indexUpdateMode = options.enums === String ? "IUM_ASYNC_INDEX" : 0;
                    object.indexType = options.enums === String ? "IT_GLOBAL_INDEX" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.primaryKey && message.primaryKey.length) {
                    object.primaryKey = [];
                    for (var j = 0; j < message.primaryKey.length; ++j)
                        object.primaryKey[j] = message.primaryKey[j];
                }
                if (message.definedColumn && message.definedColumn.length) {
                    object.definedColumn = [];
                    for (var j = 0; j < message.definedColumn.length; ++j)
                        object.definedColumn[j] = message.definedColumn[j];
                }
                if (message.indexUpdateMode != null && message.hasOwnProperty("indexUpdateMode"))
                    object.indexUpdateMode = options.enums === String ? $root.tablestore.proto.IndexUpdateMode[message.indexUpdateMode] : message.indexUpdateMode;
                if (message.indexType != null && message.hasOwnProperty("indexType"))
                    object.indexType = options.enums === String ? $root.tablestore.proto.IndexType[message.indexType] : message.indexType;
                return object;
            };

            /**
             * Converts this IndexMeta to JSON.
             * @function toJSON
             * @memberof tablestore.proto.IndexMeta
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IndexMeta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IndexMeta;
        })();

        proto.TableMeta = (function() {

            /**
             * Properties of a TableMeta.
             * @memberof tablestore.proto
             * @interface ITableMeta
             * @property {string} tableName TableMeta tableName
             * @property {Array.<tablestore.proto.IPrimaryKeySchema>|null} [primaryKey] TableMeta primaryKey
             * @property {Array.<tablestore.proto.IDefinedColumnSchema>|null} [definedColumn] TableMeta definedColumn
             * @property {Array.<tablestore.proto.IIndexMeta>|null} [indexMeta] TableMeta indexMeta
             */

            /**
             * Constructs a new TableMeta.
             * @memberof tablestore.proto
             * @classdesc Represents a TableMeta.
             * @implements ITableMeta
             * @constructor
             * @param {tablestore.proto.ITableMeta=} [properties] Properties to set
             */
            function TableMeta(properties) {
                this.primaryKey = [];
                this.definedColumn = [];
                this.indexMeta = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableMeta tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.TableMeta
             * @instance
             */
            TableMeta.prototype.tableName = "";

            /**
             * TableMeta primaryKey.
             * @member {Array.<tablestore.proto.IPrimaryKeySchema>} primaryKey
             * @memberof tablestore.proto.TableMeta
             * @instance
             */
            TableMeta.prototype.primaryKey = $util.emptyArray;

            /**
             * TableMeta definedColumn.
             * @member {Array.<tablestore.proto.IDefinedColumnSchema>} definedColumn
             * @memberof tablestore.proto.TableMeta
             * @instance
             */
            TableMeta.prototype.definedColumn = $util.emptyArray;

            /**
             * TableMeta indexMeta.
             * @member {Array.<tablestore.proto.IIndexMeta>} indexMeta
             * @memberof tablestore.proto.TableMeta
             * @instance
             */
            TableMeta.prototype.indexMeta = $util.emptyArray;

            /**
             * Creates a new TableMeta instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {tablestore.proto.ITableMeta=} [properties] Properties to set
             * @returns {tablestore.proto.TableMeta} TableMeta instance
             */
            TableMeta.create = function create(properties) {
                return new TableMeta(properties);
            };

            /**
             * Encodes the specified TableMeta message. Does not implicitly {@link tablestore.proto.TableMeta.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {tablestore.proto.ITableMeta} message TableMeta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableMeta.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.primaryKey != null && message.primaryKey.length)
                    for (var i = 0; i < message.primaryKey.length; ++i)
                        $root.tablestore.proto.PrimaryKeySchema.encode(message.primaryKey[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.definedColumn != null && message.definedColumn.length)
                    for (var i = 0; i < message.definedColumn.length; ++i)
                        $root.tablestore.proto.DefinedColumnSchema.encode(message.definedColumn[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.indexMeta != null && message.indexMeta.length)
                    for (var i = 0; i < message.indexMeta.length; ++i)
                        $root.tablestore.proto.IndexMeta.encode(message.indexMeta[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TableMeta message, length delimited. Does not implicitly {@link tablestore.proto.TableMeta.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {tablestore.proto.ITableMeta} message TableMeta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableMeta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TableMeta message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TableMeta} TableMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableMeta.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TableMeta();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        if (!(message.primaryKey && message.primaryKey.length))
                            message.primaryKey = [];
                        message.primaryKey.push($root.tablestore.proto.PrimaryKeySchema.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.definedColumn && message.definedColumn.length))
                            message.definedColumn = [];
                        message.definedColumn.push($root.tablestore.proto.DefinedColumnSchema.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.indexMeta && message.indexMeta.length))
                            message.indexMeta = [];
                        message.indexMeta.push($root.tablestore.proto.IndexMeta.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a TableMeta message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TableMeta} TableMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableMeta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TableMeta message.
             * @function verify
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TableMeta.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (message.primaryKey != null && message.hasOwnProperty("primaryKey")) {
                    if (!Array.isArray(message.primaryKey))
                        return "primaryKey: array expected";
                    for (var i = 0; i < message.primaryKey.length; ++i) {
                        var error = $root.tablestore.proto.PrimaryKeySchema.verify(message.primaryKey[i]);
                        if (error)
                            return "primaryKey." + error;
                    }
                }
                if (message.definedColumn != null && message.hasOwnProperty("definedColumn")) {
                    if (!Array.isArray(message.definedColumn))
                        return "definedColumn: array expected";
                    for (var i = 0; i < message.definedColumn.length; ++i) {
                        var error = $root.tablestore.proto.DefinedColumnSchema.verify(message.definedColumn[i]);
                        if (error)
                            return "definedColumn." + error;
                    }
                }
                if (message.indexMeta != null && message.hasOwnProperty("indexMeta")) {
                    if (!Array.isArray(message.indexMeta))
                        return "indexMeta: array expected";
                    for (var i = 0; i < message.indexMeta.length; ++i) {
                        var error = $root.tablestore.proto.IndexMeta.verify(message.indexMeta[i]);
                        if (error)
                            return "indexMeta." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TableMeta message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TableMeta} TableMeta
             */
            TableMeta.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TableMeta)
                    return object;
                var message = new $root.tablestore.proto.TableMeta();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.primaryKey) {
                    if (!Array.isArray(object.primaryKey))
                        throw TypeError(".tablestore.proto.TableMeta.primaryKey: array expected");
                    message.primaryKey = [];
                    for (var i = 0; i < object.primaryKey.length; ++i) {
                        if (typeof object.primaryKey[i] !== "object")
                            throw TypeError(".tablestore.proto.TableMeta.primaryKey: object expected");
                        message.primaryKey[i] = $root.tablestore.proto.PrimaryKeySchema.fromObject(object.primaryKey[i]);
                    }
                }
                if (object.definedColumn) {
                    if (!Array.isArray(object.definedColumn))
                        throw TypeError(".tablestore.proto.TableMeta.definedColumn: array expected");
                    message.definedColumn = [];
                    for (var i = 0; i < object.definedColumn.length; ++i) {
                        if (typeof object.definedColumn[i] !== "object")
                            throw TypeError(".tablestore.proto.TableMeta.definedColumn: object expected");
                        message.definedColumn[i] = $root.tablestore.proto.DefinedColumnSchema.fromObject(object.definedColumn[i]);
                    }
                }
                if (object.indexMeta) {
                    if (!Array.isArray(object.indexMeta))
                        throw TypeError(".tablestore.proto.TableMeta.indexMeta: array expected");
                    message.indexMeta = [];
                    for (var i = 0; i < object.indexMeta.length; ++i) {
                        if (typeof object.indexMeta[i] !== "object")
                            throw TypeError(".tablestore.proto.TableMeta.indexMeta: object expected");
                        message.indexMeta[i] = $root.tablestore.proto.IndexMeta.fromObject(object.indexMeta[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TableMeta message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TableMeta
             * @static
             * @param {tablestore.proto.TableMeta} message TableMeta
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TableMeta.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.primaryKey = [];
                    object.definedColumn = [];
                    object.indexMeta = [];
                }
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.primaryKey && message.primaryKey.length) {
                    object.primaryKey = [];
                    for (var j = 0; j < message.primaryKey.length; ++j)
                        object.primaryKey[j] = $root.tablestore.proto.PrimaryKeySchema.toObject(message.primaryKey[j], options);
                }
                if (message.definedColumn && message.definedColumn.length) {
                    object.definedColumn = [];
                    for (var j = 0; j < message.definedColumn.length; ++j)
                        object.definedColumn[j] = $root.tablestore.proto.DefinedColumnSchema.toObject(message.definedColumn[j], options);
                }
                if (message.indexMeta && message.indexMeta.length) {
                    object.indexMeta = [];
                    for (var j = 0; j < message.indexMeta.length; ++j)
                        object.indexMeta[j] = $root.tablestore.proto.IndexMeta.toObject(message.indexMeta[j], options);
                }
                return object;
            };

            /**
             * Converts this TableMeta to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TableMeta
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TableMeta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TableMeta;
        })();

        /**
         * 表的状态变更只与用户的操作对应，内部的机器failover等状况不对应表的状态变更。
         * 有三个考虑：
         * 一是一般场景下用户只会在做了对表的修改操作后才会去检查表的状态；
         * 二是内部机器failover导致访问异常到用户能够查看到表的状态变更这两个时刻之间会有一段延迟，无法将表的不可服务状态与用户查看到的表的状态完全匹配上。
         * 三是内部机器failover后不能说是表的整个状态变更，而应该是partition的状态变更，对应表的状态就是PARTIAL_FAILOVER，这个partial的粒度无法体现，会让用户更加困惑。
         * @name tablestore.proto.TableStatus
         * @enum {string}
         * @property {number} ACTIVE=1 ACTIVE value
         * @property {number} INACTIVE=2 INACTIVE value
         * @property {number} LOADING=3 LOADING value
         * @property {number} UNLOADING=4 UNLOADING value
         * @property {number} UPDATING=5 UPDATING value
         */
        proto.TableStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ACTIVE"] = 1;
            values[valuesById[2] = "INACTIVE"] = 2;
            values[valuesById[3] = "LOADING"] = 3;
            values[valuesById[4] = "UNLOADING"] = 4;
            values[valuesById[5] = "UPDATING"] = 5;
            return values;
        })();

        /**
         * RowExistenceExpectation enum.
         * @name tablestore.proto.RowExistenceExpectation
         * @enum {string}
         * @property {number} IGNORE=0 IGNORE value
         * @property {number} EXPECT_EXIST=1 EXPECT_EXIST value
         * @property {number} EXPECT_NOT_EXIST=2 EXPECT_NOT_EXIST value
         */
        proto.RowExistenceExpectation = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IGNORE"] = 0;
            values[valuesById[1] = "EXPECT_EXIST"] = 1;
            values[valuesById[2] = "EXPECT_NOT_EXIST"] = 2;
            return values;
        })();

        proto.Condition = (function() {

            /**
             * Properties of a Condition.
             * @memberof tablestore.proto
             * @interface ICondition
             * @property {tablestore.proto.RowExistenceExpectation} rowExistence Condition rowExistence
             * @property {Uint8Array|null} [columnCondition] Condition columnCondition
             */

            /**
             * Constructs a new Condition.
             * @memberof tablestore.proto
             * @classdesc Represents a Condition.
             * @implements ICondition
             * @constructor
             * @param {tablestore.proto.ICondition=} [properties] Properties to set
             */
            function Condition(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Condition rowExistence.
             * @member {tablestore.proto.RowExistenceExpectation} rowExistence
             * @memberof tablestore.proto.Condition
             * @instance
             */
            Condition.prototype.rowExistence = 0;

            /**
             * Condition columnCondition.
             * @member {Uint8Array} columnCondition
             * @memberof tablestore.proto.Condition
             * @instance
             */
            Condition.prototype.columnCondition = $util.newBuffer([]);

            /**
             * Creates a new Condition instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.Condition
             * @static
             * @param {tablestore.proto.ICondition=} [properties] Properties to set
             * @returns {tablestore.proto.Condition} Condition instance
             */
            Condition.create = function create(properties) {
                return new Condition(properties);
            };

            /**
             * Encodes the specified Condition message. Does not implicitly {@link tablestore.proto.Condition.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.Condition
             * @static
             * @param {tablestore.proto.ICondition} message Condition message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Condition.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rowExistence);
                if (message.columnCondition != null && message.hasOwnProperty("columnCondition"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.columnCondition);
                return writer;
            };

            /**
             * Encodes the specified Condition message, length delimited. Does not implicitly {@link tablestore.proto.Condition.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.Condition
             * @static
             * @param {tablestore.proto.ICondition} message Condition message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Condition.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Condition message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.Condition
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.Condition} Condition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Condition.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.Condition();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rowExistence = reader.int32();
                        break;
                    case 2:
                        message.columnCondition = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("rowExistence"))
                    throw $util.ProtocolError("missing required 'rowExistence'", { instance: message });
                return message;
            };

            /**
             * Decodes a Condition message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.Condition
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.Condition} Condition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Condition.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Condition message.
             * @function verify
             * @memberof tablestore.proto.Condition
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Condition.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.rowExistence) {
                default:
                    return "rowExistence: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
                if (message.columnCondition != null && message.hasOwnProperty("columnCondition"))
                    if (!(message.columnCondition && typeof message.columnCondition.length === "number" || $util.isString(message.columnCondition)))
                        return "columnCondition: buffer expected";
                return null;
            };

            /**
             * Creates a Condition message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.Condition
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.Condition} Condition
             */
            Condition.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.Condition)
                    return object;
                var message = new $root.tablestore.proto.Condition();
                switch (object.rowExistence) {
                case "IGNORE":
                case 0:
                    message.rowExistence = 0;
                    break;
                case "EXPECT_EXIST":
                case 1:
                    message.rowExistence = 1;
                    break;
                case "EXPECT_NOT_EXIST":
                case 2:
                    message.rowExistence = 2;
                    break;
                }
                if (object.columnCondition != null)
                    if (typeof object.columnCondition === "string")
                        $util.base64.decode(object.columnCondition, message.columnCondition = $util.newBuffer($util.base64.length(object.columnCondition)), 0);
                    else if (object.columnCondition.length)
                        message.columnCondition = object.columnCondition;
                return message;
            };

            /**
             * Creates a plain object from a Condition message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.Condition
             * @static
             * @param {tablestore.proto.Condition} message Condition
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Condition.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.rowExistence = options.enums === String ? "IGNORE" : 0;
                    if (options.bytes === String)
                        object.columnCondition = "";
                    else {
                        object.columnCondition = [];
                        if (options.bytes !== Array)
                            object.columnCondition = $util.newBuffer(object.columnCondition);
                    }
                }
                if (message.rowExistence != null && message.hasOwnProperty("rowExistence"))
                    object.rowExistence = options.enums === String ? $root.tablestore.proto.RowExistenceExpectation[message.rowExistence] : message.rowExistence;
                if (message.columnCondition != null && message.hasOwnProperty("columnCondition"))
                    object.columnCondition = options.bytes === String ? $util.base64.encode(message.columnCondition, 0, message.columnCondition.length) : options.bytes === Array ? Array.prototype.slice.call(message.columnCondition) : message.columnCondition;
                return object;
            };

            /**
             * Converts this Condition to JSON.
             * @function toJSON
             * @memberof tablestore.proto.Condition
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Condition.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Condition;
        })();

        proto.CapacityUnit = (function() {

            /**
             * Properties of a CapacityUnit.
             * @memberof tablestore.proto
             * @interface ICapacityUnit
             * @property {number|null} [read] CapacityUnit read
             * @property {number|null} [write] CapacityUnit write
             */

            /**
             * Constructs a new CapacityUnit.
             * @memberof tablestore.proto
             * @classdesc Represents a CapacityUnit.
             * @implements ICapacityUnit
             * @constructor
             * @param {tablestore.proto.ICapacityUnit=} [properties] Properties to set
             */
            function CapacityUnit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CapacityUnit read.
             * @member {number} read
             * @memberof tablestore.proto.CapacityUnit
             * @instance
             */
            CapacityUnit.prototype.read = 0;

            /**
             * CapacityUnit write.
             * @member {number} write
             * @memberof tablestore.proto.CapacityUnit
             * @instance
             */
            CapacityUnit.prototype.write = 0;

            /**
             * Creates a new CapacityUnit instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {tablestore.proto.ICapacityUnit=} [properties] Properties to set
             * @returns {tablestore.proto.CapacityUnit} CapacityUnit instance
             */
            CapacityUnit.create = function create(properties) {
                return new CapacityUnit(properties);
            };

            /**
             * Encodes the specified CapacityUnit message. Does not implicitly {@link tablestore.proto.CapacityUnit.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {tablestore.proto.ICapacityUnit} message CapacityUnit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CapacityUnit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.read != null && message.hasOwnProperty("read"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.read);
                if (message.write != null && message.hasOwnProperty("write"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.write);
                return writer;
            };

            /**
             * Encodes the specified CapacityUnit message, length delimited. Does not implicitly {@link tablestore.proto.CapacityUnit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {tablestore.proto.ICapacityUnit} message CapacityUnit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CapacityUnit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CapacityUnit message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CapacityUnit} CapacityUnit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CapacityUnit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CapacityUnit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.read = reader.int32();
                        break;
                    case 2:
                        message.write = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CapacityUnit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CapacityUnit} CapacityUnit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CapacityUnit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CapacityUnit message.
             * @function verify
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CapacityUnit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.read != null && message.hasOwnProperty("read"))
                    if (!$util.isInteger(message.read))
                        return "read: integer expected";
                if (message.write != null && message.hasOwnProperty("write"))
                    if (!$util.isInteger(message.write))
                        return "write: integer expected";
                return null;
            };

            /**
             * Creates a CapacityUnit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CapacityUnit} CapacityUnit
             */
            CapacityUnit.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CapacityUnit)
                    return object;
                var message = new $root.tablestore.proto.CapacityUnit();
                if (object.read != null)
                    message.read = object.read | 0;
                if (object.write != null)
                    message.write = object.write | 0;
                return message;
            };

            /**
             * Creates a plain object from a CapacityUnit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CapacityUnit
             * @static
             * @param {tablestore.proto.CapacityUnit} message CapacityUnit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CapacityUnit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.read = 0;
                    object.write = 0;
                }
                if (message.read != null && message.hasOwnProperty("read"))
                    object.read = message.read;
                if (message.write != null && message.hasOwnProperty("write"))
                    object.write = message.write;
                return object;
            };

            /**
             * Converts this CapacityUnit to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CapacityUnit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CapacityUnit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CapacityUnit;
        })();

        proto.ReservedThroughputDetails = (function() {

            /**
             * Properties of a ReservedThroughputDetails.
             * @memberof tablestore.proto
             * @interface IReservedThroughputDetails
             * @property {tablestore.proto.ICapacityUnit} capacityUnit ReservedThroughputDetails capacityUnit
             * @property {number|Long} lastIncreaseTime ReservedThroughputDetails lastIncreaseTime
             * @property {number|Long|null} [lastDecreaseTime] ReservedThroughputDetails lastDecreaseTime
             */

            /**
             * Constructs a new ReservedThroughputDetails.
             * @memberof tablestore.proto
             * @classdesc Represents a ReservedThroughputDetails.
             * @implements IReservedThroughputDetails
             * @constructor
             * @param {tablestore.proto.IReservedThroughputDetails=} [properties] Properties to set
             */
            function ReservedThroughputDetails(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReservedThroughputDetails capacityUnit.
             * @member {tablestore.proto.ICapacityUnit} capacityUnit
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @instance
             */
            ReservedThroughputDetails.prototype.capacityUnit = null;

            /**
             * ReservedThroughputDetails lastIncreaseTime.
             * @member {number|Long} lastIncreaseTime
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @instance
             */
            ReservedThroughputDetails.prototype.lastIncreaseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ReservedThroughputDetails lastDecreaseTime.
             * @member {number|Long} lastDecreaseTime
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @instance
             */
            ReservedThroughputDetails.prototype.lastDecreaseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ReservedThroughputDetails instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {tablestore.proto.IReservedThroughputDetails=} [properties] Properties to set
             * @returns {tablestore.proto.ReservedThroughputDetails} ReservedThroughputDetails instance
             */
            ReservedThroughputDetails.create = function create(properties) {
                return new ReservedThroughputDetails(properties);
            };

            /**
             * Encodes the specified ReservedThroughputDetails message. Does not implicitly {@link tablestore.proto.ReservedThroughputDetails.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {tablestore.proto.IReservedThroughputDetails} message ReservedThroughputDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReservedThroughputDetails.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.CapacityUnit.encode(message.capacityUnit, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastIncreaseTime);
                if (message.lastDecreaseTime != null && message.hasOwnProperty("lastDecreaseTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.lastDecreaseTime);
                return writer;
            };

            /**
             * Encodes the specified ReservedThroughputDetails message, length delimited. Does not implicitly {@link tablestore.proto.ReservedThroughputDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {tablestore.proto.IReservedThroughputDetails} message ReservedThroughputDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReservedThroughputDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReservedThroughputDetails message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ReservedThroughputDetails} ReservedThroughputDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReservedThroughputDetails.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ReservedThroughputDetails();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.capacityUnit = $root.tablestore.proto.CapacityUnit.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.lastIncreaseTime = reader.int64();
                        break;
                    case 3:
                        message.lastDecreaseTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("capacityUnit"))
                    throw $util.ProtocolError("missing required 'capacityUnit'", { instance: message });
                if (!message.hasOwnProperty("lastIncreaseTime"))
                    throw $util.ProtocolError("missing required 'lastIncreaseTime'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReservedThroughputDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ReservedThroughputDetails} ReservedThroughputDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReservedThroughputDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReservedThroughputDetails message.
             * @function verify
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReservedThroughputDetails.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.CapacityUnit.verify(message.capacityUnit);
                    if (error)
                        return "capacityUnit." + error;
                }
                if (!$util.isInteger(message.lastIncreaseTime) && !(message.lastIncreaseTime && $util.isInteger(message.lastIncreaseTime.low) && $util.isInteger(message.lastIncreaseTime.high)))
                    return "lastIncreaseTime: integer|Long expected";
                if (message.lastDecreaseTime != null && message.hasOwnProperty("lastDecreaseTime"))
                    if (!$util.isInteger(message.lastDecreaseTime) && !(message.lastDecreaseTime && $util.isInteger(message.lastDecreaseTime.low) && $util.isInteger(message.lastDecreaseTime.high)))
                        return "lastDecreaseTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a ReservedThroughputDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ReservedThroughputDetails} ReservedThroughputDetails
             */
            ReservedThroughputDetails.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ReservedThroughputDetails)
                    return object;
                var message = new $root.tablestore.proto.ReservedThroughputDetails();
                if (object.capacityUnit != null) {
                    if (typeof object.capacityUnit !== "object")
                        throw TypeError(".tablestore.proto.ReservedThroughputDetails.capacityUnit: object expected");
                    message.capacityUnit = $root.tablestore.proto.CapacityUnit.fromObject(object.capacityUnit);
                }
                if (object.lastIncreaseTime != null)
                    if ($util.Long)
                        (message.lastIncreaseTime = $util.Long.fromValue(object.lastIncreaseTime)).unsigned = false;
                    else if (typeof object.lastIncreaseTime === "string")
                        message.lastIncreaseTime = parseInt(object.lastIncreaseTime, 10);
                    else if (typeof object.lastIncreaseTime === "number")
                        message.lastIncreaseTime = object.lastIncreaseTime;
                    else if (typeof object.lastIncreaseTime === "object")
                        message.lastIncreaseTime = new $util.LongBits(object.lastIncreaseTime.low >>> 0, object.lastIncreaseTime.high >>> 0).toNumber();
                if (object.lastDecreaseTime != null)
                    if ($util.Long)
                        (message.lastDecreaseTime = $util.Long.fromValue(object.lastDecreaseTime)).unsigned = false;
                    else if (typeof object.lastDecreaseTime === "string")
                        message.lastDecreaseTime = parseInt(object.lastDecreaseTime, 10);
                    else if (typeof object.lastDecreaseTime === "number")
                        message.lastDecreaseTime = object.lastDecreaseTime;
                    else if (typeof object.lastDecreaseTime === "object")
                        message.lastDecreaseTime = new $util.LongBits(object.lastDecreaseTime.low >>> 0, object.lastDecreaseTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ReservedThroughputDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @static
             * @param {tablestore.proto.ReservedThroughputDetails} message ReservedThroughputDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReservedThroughputDetails.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.capacityUnit = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastIncreaseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastIncreaseTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastDecreaseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastDecreaseTime = options.longs === String ? "0" : 0;
                }
                if (message.capacityUnit != null && message.hasOwnProperty("capacityUnit"))
                    object.capacityUnit = $root.tablestore.proto.CapacityUnit.toObject(message.capacityUnit, options);
                if (message.lastIncreaseTime != null && message.hasOwnProperty("lastIncreaseTime"))
                    if (typeof message.lastIncreaseTime === "number")
                        object.lastIncreaseTime = options.longs === String ? String(message.lastIncreaseTime) : message.lastIncreaseTime;
                    else
                        object.lastIncreaseTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastIncreaseTime) : options.longs === Number ? new $util.LongBits(message.lastIncreaseTime.low >>> 0, message.lastIncreaseTime.high >>> 0).toNumber() : message.lastIncreaseTime;
                if (message.lastDecreaseTime != null && message.hasOwnProperty("lastDecreaseTime"))
                    if (typeof message.lastDecreaseTime === "number")
                        object.lastDecreaseTime = options.longs === String ? String(message.lastDecreaseTime) : message.lastDecreaseTime;
                    else
                        object.lastDecreaseTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastDecreaseTime) : options.longs === Number ? new $util.LongBits(message.lastDecreaseTime.low >>> 0, message.lastDecreaseTime.high >>> 0).toNumber() : message.lastDecreaseTime;
                return object;
            };

            /**
             * Converts this ReservedThroughputDetails to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ReservedThroughputDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReservedThroughputDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReservedThroughputDetails;
        })();

        proto.ReservedThroughput = (function() {

            /**
             * Properties of a ReservedThroughput.
             * @memberof tablestore.proto
             * @interface IReservedThroughput
             * @property {tablestore.proto.ICapacityUnit} capacityUnit ReservedThroughput capacityUnit
             */

            /**
             * Constructs a new ReservedThroughput.
             * @memberof tablestore.proto
             * @classdesc Represents a ReservedThroughput.
             * @implements IReservedThroughput
             * @constructor
             * @param {tablestore.proto.IReservedThroughput=} [properties] Properties to set
             */
            function ReservedThroughput(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReservedThroughput capacityUnit.
             * @member {tablestore.proto.ICapacityUnit} capacityUnit
             * @memberof tablestore.proto.ReservedThroughput
             * @instance
             */
            ReservedThroughput.prototype.capacityUnit = null;

            /**
             * Creates a new ReservedThroughput instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {tablestore.proto.IReservedThroughput=} [properties] Properties to set
             * @returns {tablestore.proto.ReservedThroughput} ReservedThroughput instance
             */
            ReservedThroughput.create = function create(properties) {
                return new ReservedThroughput(properties);
            };

            /**
             * Encodes the specified ReservedThroughput message. Does not implicitly {@link tablestore.proto.ReservedThroughput.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {tablestore.proto.IReservedThroughput} message ReservedThroughput message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReservedThroughput.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.CapacityUnit.encode(message.capacityUnit, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReservedThroughput message, length delimited. Does not implicitly {@link tablestore.proto.ReservedThroughput.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {tablestore.proto.IReservedThroughput} message ReservedThroughput message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReservedThroughput.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReservedThroughput message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ReservedThroughput} ReservedThroughput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReservedThroughput.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ReservedThroughput();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.capacityUnit = $root.tablestore.proto.CapacityUnit.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("capacityUnit"))
                    throw $util.ProtocolError("missing required 'capacityUnit'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReservedThroughput message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ReservedThroughput} ReservedThroughput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReservedThroughput.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReservedThroughput message.
             * @function verify
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReservedThroughput.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.CapacityUnit.verify(message.capacityUnit);
                    if (error)
                        return "capacityUnit." + error;
                }
                return null;
            };

            /**
             * Creates a ReservedThroughput message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ReservedThroughput} ReservedThroughput
             */
            ReservedThroughput.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ReservedThroughput)
                    return object;
                var message = new $root.tablestore.proto.ReservedThroughput();
                if (object.capacityUnit != null) {
                    if (typeof object.capacityUnit !== "object")
                        throw TypeError(".tablestore.proto.ReservedThroughput.capacityUnit: object expected");
                    message.capacityUnit = $root.tablestore.proto.CapacityUnit.fromObject(object.capacityUnit);
                }
                return message;
            };

            /**
             * Creates a plain object from a ReservedThroughput message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ReservedThroughput
             * @static
             * @param {tablestore.proto.ReservedThroughput} message ReservedThroughput
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReservedThroughput.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.capacityUnit = null;
                if (message.capacityUnit != null && message.hasOwnProperty("capacityUnit"))
                    object.capacityUnit = $root.tablestore.proto.CapacityUnit.toObject(message.capacityUnit, options);
                return object;
            };

            /**
             * Converts this ReservedThroughput to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ReservedThroughput
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReservedThroughput.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReservedThroughput;
        })();

        proto.ConsumedCapacity = (function() {

            /**
             * Properties of a ConsumedCapacity.
             * @memberof tablestore.proto
             * @interface IConsumedCapacity
             * @property {tablestore.proto.ICapacityUnit} capacityUnit ConsumedCapacity capacityUnit
             */

            /**
             * Constructs a new ConsumedCapacity.
             * @memberof tablestore.proto
             * @classdesc Represents a ConsumedCapacity.
             * @implements IConsumedCapacity
             * @constructor
             * @param {tablestore.proto.IConsumedCapacity=} [properties] Properties to set
             */
            function ConsumedCapacity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConsumedCapacity capacityUnit.
             * @member {tablestore.proto.ICapacityUnit} capacityUnit
             * @memberof tablestore.proto.ConsumedCapacity
             * @instance
             */
            ConsumedCapacity.prototype.capacityUnit = null;

            /**
             * Creates a new ConsumedCapacity instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {tablestore.proto.IConsumedCapacity=} [properties] Properties to set
             * @returns {tablestore.proto.ConsumedCapacity} ConsumedCapacity instance
             */
            ConsumedCapacity.create = function create(properties) {
                return new ConsumedCapacity(properties);
            };

            /**
             * Encodes the specified ConsumedCapacity message. Does not implicitly {@link tablestore.proto.ConsumedCapacity.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {tablestore.proto.IConsumedCapacity} message ConsumedCapacity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsumedCapacity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.CapacityUnit.encode(message.capacityUnit, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ConsumedCapacity message, length delimited. Does not implicitly {@link tablestore.proto.ConsumedCapacity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {tablestore.proto.IConsumedCapacity} message ConsumedCapacity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsumedCapacity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConsumedCapacity message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ConsumedCapacity} ConsumedCapacity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsumedCapacity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ConsumedCapacity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.capacityUnit = $root.tablestore.proto.CapacityUnit.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("capacityUnit"))
                    throw $util.ProtocolError("missing required 'capacityUnit'", { instance: message });
                return message;
            };

            /**
             * Decodes a ConsumedCapacity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ConsumedCapacity} ConsumedCapacity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsumedCapacity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConsumedCapacity message.
             * @function verify
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConsumedCapacity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.CapacityUnit.verify(message.capacityUnit);
                    if (error)
                        return "capacityUnit." + error;
                }
                return null;
            };

            /**
             * Creates a ConsumedCapacity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ConsumedCapacity} ConsumedCapacity
             */
            ConsumedCapacity.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ConsumedCapacity)
                    return object;
                var message = new $root.tablestore.proto.ConsumedCapacity();
                if (object.capacityUnit != null) {
                    if (typeof object.capacityUnit !== "object")
                        throw TypeError(".tablestore.proto.ConsumedCapacity.capacityUnit: object expected");
                    message.capacityUnit = $root.tablestore.proto.CapacityUnit.fromObject(object.capacityUnit);
                }
                return message;
            };

            /**
             * Creates a plain object from a ConsumedCapacity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ConsumedCapacity
             * @static
             * @param {tablestore.proto.ConsumedCapacity} message ConsumedCapacity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConsumedCapacity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.capacityUnit = null;
                if (message.capacityUnit != null && message.hasOwnProperty("capacityUnit"))
                    object.capacityUnit = $root.tablestore.proto.CapacityUnit.toObject(message.capacityUnit, options);
                return object;
            };

            /**
             * Converts this ConsumedCapacity to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ConsumedCapacity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConsumedCapacity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ConsumedCapacity;
        })();

        proto.StreamSpecification = (function() {

            /**
             * Properties of a StreamSpecification.
             * @memberof tablestore.proto
             * @interface IStreamSpecification
             * @property {boolean} enableStream StreamSpecification enableStream
             * @property {number|null} [expirationTime] StreamSpecification expirationTime
             */

            /**
             * Constructs a new StreamSpecification.
             * @memberof tablestore.proto
             * @classdesc Represents a StreamSpecification.
             * @implements IStreamSpecification
             * @constructor
             * @param {tablestore.proto.IStreamSpecification=} [properties] Properties to set
             */
            function StreamSpecification(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StreamSpecification enableStream.
             * @member {boolean} enableStream
             * @memberof tablestore.proto.StreamSpecification
             * @instance
             */
            StreamSpecification.prototype.enableStream = false;

            /**
             * StreamSpecification expirationTime.
             * @member {number} expirationTime
             * @memberof tablestore.proto.StreamSpecification
             * @instance
             */
            StreamSpecification.prototype.expirationTime = 0;

            /**
             * Creates a new StreamSpecification instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {tablestore.proto.IStreamSpecification=} [properties] Properties to set
             * @returns {tablestore.proto.StreamSpecification} StreamSpecification instance
             */
            StreamSpecification.create = function create(properties) {
                return new StreamSpecification(properties);
            };

            /**
             * Encodes the specified StreamSpecification message. Does not implicitly {@link tablestore.proto.StreamSpecification.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {tablestore.proto.IStreamSpecification} message StreamSpecification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamSpecification.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enableStream);
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.expirationTime);
                return writer;
            };

            /**
             * Encodes the specified StreamSpecification message, length delimited. Does not implicitly {@link tablestore.proto.StreamSpecification.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {tablestore.proto.IStreamSpecification} message StreamSpecification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamSpecification.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StreamSpecification message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.StreamSpecification} StreamSpecification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamSpecification.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.StreamSpecification();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.enableStream = reader.bool();
                        break;
                    case 2:
                        message.expirationTime = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("enableStream"))
                    throw $util.ProtocolError("missing required 'enableStream'", { instance: message });
                return message;
            };

            /**
             * Decodes a StreamSpecification message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.StreamSpecification} StreamSpecification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamSpecification.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StreamSpecification message.
             * @function verify
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StreamSpecification.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.enableStream !== "boolean")
                    return "enableStream: boolean expected";
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    if (!$util.isInteger(message.expirationTime))
                        return "expirationTime: integer expected";
                return null;
            };

            /**
             * Creates a StreamSpecification message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.StreamSpecification} StreamSpecification
             */
            StreamSpecification.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.StreamSpecification)
                    return object;
                var message = new $root.tablestore.proto.StreamSpecification();
                if (object.enableStream != null)
                    message.enableStream = Boolean(object.enableStream);
                if (object.expirationTime != null)
                    message.expirationTime = object.expirationTime | 0;
                return message;
            };

            /**
             * Creates a plain object from a StreamSpecification message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.StreamSpecification
             * @static
             * @param {tablestore.proto.StreamSpecification} message StreamSpecification
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamSpecification.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.enableStream = false;
                    object.expirationTime = 0;
                }
                if (message.enableStream != null && message.hasOwnProperty("enableStream"))
                    object.enableStream = message.enableStream;
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    object.expirationTime = message.expirationTime;
                return object;
            };

            /**
             * Converts this StreamSpecification to JSON.
             * @function toJSON
             * @memberof tablestore.proto.StreamSpecification
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamSpecification.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StreamSpecification;
        })();

        proto.StreamDetails = (function() {

            /**
             * Properties of a StreamDetails.
             * @memberof tablestore.proto
             * @interface IStreamDetails
             * @property {boolean} enableStream StreamDetails enableStream
             * @property {string|null} [streamId] StreamDetails streamId
             * @property {number|null} [expirationTime] StreamDetails expirationTime
             * @property {number|Long|null} [lastEnableTime] StreamDetails lastEnableTime
             */

            /**
             * Constructs a new StreamDetails.
             * @memberof tablestore.proto
             * @classdesc Represents a StreamDetails.
             * @implements IStreamDetails
             * @constructor
             * @param {tablestore.proto.IStreamDetails=} [properties] Properties to set
             */
            function StreamDetails(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StreamDetails enableStream.
             * @member {boolean} enableStream
             * @memberof tablestore.proto.StreamDetails
             * @instance
             */
            StreamDetails.prototype.enableStream = false;

            /**
             * StreamDetails streamId.
             * @member {string} streamId
             * @memberof tablestore.proto.StreamDetails
             * @instance
             */
            StreamDetails.prototype.streamId = "";

            /**
             * StreamDetails expirationTime.
             * @member {number} expirationTime
             * @memberof tablestore.proto.StreamDetails
             * @instance
             */
            StreamDetails.prototype.expirationTime = 0;

            /**
             * StreamDetails lastEnableTime.
             * @member {number|Long} lastEnableTime
             * @memberof tablestore.proto.StreamDetails
             * @instance
             */
            StreamDetails.prototype.lastEnableTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new StreamDetails instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {tablestore.proto.IStreamDetails=} [properties] Properties to set
             * @returns {tablestore.proto.StreamDetails} StreamDetails instance
             */
            StreamDetails.create = function create(properties) {
                return new StreamDetails(properties);
            };

            /**
             * Encodes the specified StreamDetails message. Does not implicitly {@link tablestore.proto.StreamDetails.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {tablestore.proto.IStreamDetails} message StreamDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamDetails.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enableStream);
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.streamId);
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.expirationTime);
                if (message.lastEnableTime != null && message.hasOwnProperty("lastEnableTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lastEnableTime);
                return writer;
            };

            /**
             * Encodes the specified StreamDetails message, length delimited. Does not implicitly {@link tablestore.proto.StreamDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {tablestore.proto.IStreamDetails} message StreamDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StreamDetails message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.StreamDetails} StreamDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamDetails.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.StreamDetails();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.enableStream = reader.bool();
                        break;
                    case 2:
                        message.streamId = reader.string();
                        break;
                    case 3:
                        message.expirationTime = reader.int32();
                        break;
                    case 4:
                        message.lastEnableTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("enableStream"))
                    throw $util.ProtocolError("missing required 'enableStream'", { instance: message });
                return message;
            };

            /**
             * Decodes a StreamDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.StreamDetails} StreamDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StreamDetails message.
             * @function verify
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StreamDetails.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.enableStream !== "boolean")
                    return "enableStream: boolean expected";
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    if (!$util.isString(message.streamId))
                        return "streamId: string expected";
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    if (!$util.isInteger(message.expirationTime))
                        return "expirationTime: integer expected";
                if (message.lastEnableTime != null && message.hasOwnProperty("lastEnableTime"))
                    if (!$util.isInteger(message.lastEnableTime) && !(message.lastEnableTime && $util.isInteger(message.lastEnableTime.low) && $util.isInteger(message.lastEnableTime.high)))
                        return "lastEnableTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a StreamDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.StreamDetails} StreamDetails
             */
            StreamDetails.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.StreamDetails)
                    return object;
                var message = new $root.tablestore.proto.StreamDetails();
                if (object.enableStream != null)
                    message.enableStream = Boolean(object.enableStream);
                if (object.streamId != null)
                    message.streamId = String(object.streamId);
                if (object.expirationTime != null)
                    message.expirationTime = object.expirationTime | 0;
                if (object.lastEnableTime != null)
                    if ($util.Long)
                        (message.lastEnableTime = $util.Long.fromValue(object.lastEnableTime)).unsigned = false;
                    else if (typeof object.lastEnableTime === "string")
                        message.lastEnableTime = parseInt(object.lastEnableTime, 10);
                    else if (typeof object.lastEnableTime === "number")
                        message.lastEnableTime = object.lastEnableTime;
                    else if (typeof object.lastEnableTime === "object")
                        message.lastEnableTime = new $util.LongBits(object.lastEnableTime.low >>> 0, object.lastEnableTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a StreamDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.StreamDetails
             * @static
             * @param {tablestore.proto.StreamDetails} message StreamDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamDetails.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.enableStream = false;
                    object.streamId = "";
                    object.expirationTime = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastEnableTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastEnableTime = options.longs === String ? "0" : 0;
                }
                if (message.enableStream != null && message.hasOwnProperty("enableStream"))
                    object.enableStream = message.enableStream;
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    object.streamId = message.streamId;
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    object.expirationTime = message.expirationTime;
                if (message.lastEnableTime != null && message.hasOwnProperty("lastEnableTime"))
                    if (typeof message.lastEnableTime === "number")
                        object.lastEnableTime = options.longs === String ? String(message.lastEnableTime) : message.lastEnableTime;
                    else
                        object.lastEnableTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastEnableTime) : options.longs === Number ? new $util.LongBits(message.lastEnableTime.low >>> 0, message.lastEnableTime.high >>> 0).toNumber() : message.lastEnableTime;
                return object;
            };

            /**
             * Converts this StreamDetails to JSON.
             * @function toJSON
             * @memberof tablestore.proto.StreamDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StreamDetails;
        })();

        proto.CreateTableRequest = (function() {

            /**
             * Properties of a CreateTableRequest.
             * @memberof tablestore.proto
             * @interface ICreateTableRequest
             * @property {tablestore.proto.ITableMeta} tableMeta CreateTableRequest tableMeta
             * @property {tablestore.proto.IReservedThroughput} reservedThroughput CreateTableRequest reservedThroughput
             * @property {tablestore.proto.ITableOptions|null} [tableOptions] CreateTableRequest tableOptions
             * @property {Array.<tablestore.proto.IPartitionRange>|null} [partitions] CreateTableRequest partitions
             * @property {tablestore.proto.IStreamSpecification|null} [streamSpec] CreateTableRequest streamSpec
             * @property {Array.<tablestore.proto.IIndexMeta>|null} [indexMetas] CreateTableRequest indexMetas
             */

            /**
             * Constructs a new CreateTableRequest.
             * @memberof tablestore.proto
             * @classdesc table_meta用于存储表中不可更改的schema属性，可以更改的ReservedThroughput和TableOptions独立出来，作为UpdateTable的参数。
             * 加入GlobalIndex和LocalIndex之后，结构会变为：
             * message CreateTableRequest {
             * required TableMeta table_meta = 1;
             * required ReservedThroughput reserved_throughput = 2;
             * required TableOptions table_options = 3;
             * repeated LocalIndex local_indexes = 4; // LocalIndex不再单独包含ReservedThroughput和TableOptions，其与主表共享配置。
             * repeated GlobalIndex global_indexes = 5; // GlobalIndex内单独包含ReservedThroughput和TableOptions
             * }
             * @implements ICreateTableRequest
             * @constructor
             * @param {tablestore.proto.ICreateTableRequest=} [properties] Properties to set
             */
            function CreateTableRequest(properties) {
                this.partitions = [];
                this.indexMetas = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateTableRequest tableMeta.
             * @member {tablestore.proto.ITableMeta} tableMeta
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             */
            CreateTableRequest.prototype.tableMeta = null;

            /**
             * CreateTableRequest reservedThroughput.
             * @member {tablestore.proto.IReservedThroughput} reservedThroughput
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             */
            CreateTableRequest.prototype.reservedThroughput = null;

            /**
             * CreateTableRequest tableOptions.
             * @member {tablestore.proto.ITableOptions|null|undefined} tableOptions
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             */
            CreateTableRequest.prototype.tableOptions = null;

            /**
             * CreateTableRequest partitions.
             * @member {Array.<tablestore.proto.IPartitionRange>} partitions
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             */
            CreateTableRequest.prototype.partitions = $util.emptyArray;

            /**
             * CreateTableRequest streamSpec.
             * @member {tablestore.proto.IStreamSpecification|null|undefined} streamSpec
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             */
            CreateTableRequest.prototype.streamSpec = null;

            /**
             * CreateTableRequest indexMetas.
             * @member {Array.<tablestore.proto.IIndexMeta>} indexMetas
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             */
            CreateTableRequest.prototype.indexMetas = $util.emptyArray;

            /**
             * Creates a new CreateTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {tablestore.proto.ICreateTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.CreateTableRequest} CreateTableRequest instance
             */
            CreateTableRequest.create = function create(properties) {
                return new CreateTableRequest(properties);
            };

            /**
             * Encodes the specified CreateTableRequest message. Does not implicitly {@link tablestore.proto.CreateTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {tablestore.proto.ICreateTableRequest} message CreateTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.TableMeta.encode(message.tableMeta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.tablestore.proto.ReservedThroughput.encode(message.reservedThroughput, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions"))
                    $root.tablestore.proto.TableOptions.encode(message.tableOptions, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.partitions != null && message.partitions.length)
                    for (var i = 0; i < message.partitions.length; ++i)
                        $root.tablestore.proto.PartitionRange.encode(message.partitions[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.streamSpec != null && message.hasOwnProperty("streamSpec"))
                    $root.tablestore.proto.StreamSpecification.encode(message.streamSpec, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.indexMetas != null && message.indexMetas.length)
                    for (var i = 0; i < message.indexMetas.length; ++i)
                        $root.tablestore.proto.IndexMeta.encode(message.indexMetas[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.CreateTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {tablestore.proto.ICreateTableRequest} message CreateTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CreateTableRequest} CreateTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CreateTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableMeta = $root.tablestore.proto.TableMeta.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.reservedThroughput = $root.tablestore.proto.ReservedThroughput.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.tableOptions = $root.tablestore.proto.TableOptions.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.partitions && message.partitions.length))
                            message.partitions = [];
                        message.partitions.push($root.tablestore.proto.PartitionRange.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.streamSpec = $root.tablestore.proto.StreamSpecification.decode(reader, reader.uint32());
                        break;
                    case 7:
                        if (!(message.indexMetas && message.indexMetas.length))
                            message.indexMetas = [];
                        message.indexMetas.push($root.tablestore.proto.IndexMeta.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableMeta"))
                    throw $util.ProtocolError("missing required 'tableMeta'", { instance: message });
                if (!message.hasOwnProperty("reservedThroughput"))
                    throw $util.ProtocolError("missing required 'reservedThroughput'", { instance: message });
                return message;
            };

            /**
             * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CreateTableRequest} CreateTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateTableRequest message.
             * @function verify
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.TableMeta.verify(message.tableMeta);
                    if (error)
                        return "tableMeta." + error;
                }
                {
                    var error = $root.tablestore.proto.ReservedThroughput.verify(message.reservedThroughput);
                    if (error)
                        return "reservedThroughput." + error;
                }
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions")) {
                    var error = $root.tablestore.proto.TableOptions.verify(message.tableOptions);
                    if (error)
                        return "tableOptions." + error;
                }
                if (message.partitions != null && message.hasOwnProperty("partitions")) {
                    if (!Array.isArray(message.partitions))
                        return "partitions: array expected";
                    for (var i = 0; i < message.partitions.length; ++i) {
                        var error = $root.tablestore.proto.PartitionRange.verify(message.partitions[i]);
                        if (error)
                            return "partitions." + error;
                    }
                }
                if (message.streamSpec != null && message.hasOwnProperty("streamSpec")) {
                    var error = $root.tablestore.proto.StreamSpecification.verify(message.streamSpec);
                    if (error)
                        return "streamSpec." + error;
                }
                if (message.indexMetas != null && message.hasOwnProperty("indexMetas")) {
                    if (!Array.isArray(message.indexMetas))
                        return "indexMetas: array expected";
                    for (var i = 0; i < message.indexMetas.length; ++i) {
                        var error = $root.tablestore.proto.IndexMeta.verify(message.indexMetas[i]);
                        if (error)
                            return "indexMetas." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a CreateTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CreateTableRequest} CreateTableRequest
             */
            CreateTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CreateTableRequest)
                    return object;
                var message = new $root.tablestore.proto.CreateTableRequest();
                if (object.tableMeta != null) {
                    if (typeof object.tableMeta !== "object")
                        throw TypeError(".tablestore.proto.CreateTableRequest.tableMeta: object expected");
                    message.tableMeta = $root.tablestore.proto.TableMeta.fromObject(object.tableMeta);
                }
                if (object.reservedThroughput != null) {
                    if (typeof object.reservedThroughput !== "object")
                        throw TypeError(".tablestore.proto.CreateTableRequest.reservedThroughput: object expected");
                    message.reservedThroughput = $root.tablestore.proto.ReservedThroughput.fromObject(object.reservedThroughput);
                }
                if (object.tableOptions != null) {
                    if (typeof object.tableOptions !== "object")
                        throw TypeError(".tablestore.proto.CreateTableRequest.tableOptions: object expected");
                    message.tableOptions = $root.tablestore.proto.TableOptions.fromObject(object.tableOptions);
                }
                if (object.partitions) {
                    if (!Array.isArray(object.partitions))
                        throw TypeError(".tablestore.proto.CreateTableRequest.partitions: array expected");
                    message.partitions = [];
                    for (var i = 0; i < object.partitions.length; ++i) {
                        if (typeof object.partitions[i] !== "object")
                            throw TypeError(".tablestore.proto.CreateTableRequest.partitions: object expected");
                        message.partitions[i] = $root.tablestore.proto.PartitionRange.fromObject(object.partitions[i]);
                    }
                }
                if (object.streamSpec != null) {
                    if (typeof object.streamSpec !== "object")
                        throw TypeError(".tablestore.proto.CreateTableRequest.streamSpec: object expected");
                    message.streamSpec = $root.tablestore.proto.StreamSpecification.fromObject(object.streamSpec);
                }
                if (object.indexMetas) {
                    if (!Array.isArray(object.indexMetas))
                        throw TypeError(".tablestore.proto.CreateTableRequest.indexMetas: array expected");
                    message.indexMetas = [];
                    for (var i = 0; i < object.indexMetas.length; ++i) {
                        if (typeof object.indexMetas[i] !== "object")
                            throw TypeError(".tablestore.proto.CreateTableRequest.indexMetas: object expected");
                        message.indexMetas[i] = $root.tablestore.proto.IndexMeta.fromObject(object.indexMetas[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CreateTableRequest
             * @static
             * @param {tablestore.proto.CreateTableRequest} message CreateTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateTableRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.partitions = [];
                    object.indexMetas = [];
                }
                if (options.defaults) {
                    object.tableMeta = null;
                    object.reservedThroughput = null;
                    object.tableOptions = null;
                    object.streamSpec = null;
                }
                if (message.tableMeta != null && message.hasOwnProperty("tableMeta"))
                    object.tableMeta = $root.tablestore.proto.TableMeta.toObject(message.tableMeta, options);
                if (message.reservedThroughput != null && message.hasOwnProperty("reservedThroughput"))
                    object.reservedThroughput = $root.tablestore.proto.ReservedThroughput.toObject(message.reservedThroughput, options);
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions"))
                    object.tableOptions = $root.tablestore.proto.TableOptions.toObject(message.tableOptions, options);
                if (message.partitions && message.partitions.length) {
                    object.partitions = [];
                    for (var j = 0; j < message.partitions.length; ++j)
                        object.partitions[j] = $root.tablestore.proto.PartitionRange.toObject(message.partitions[j], options);
                }
                if (message.streamSpec != null && message.hasOwnProperty("streamSpec"))
                    object.streamSpec = $root.tablestore.proto.StreamSpecification.toObject(message.streamSpec, options);
                if (message.indexMetas && message.indexMetas.length) {
                    object.indexMetas = [];
                    for (var j = 0; j < message.indexMetas.length; ++j)
                        object.indexMetas[j] = $root.tablestore.proto.IndexMeta.toObject(message.indexMetas[j], options);
                }
                return object;
            };

            /**
             * Converts this CreateTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CreateTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateTableRequest;
        })();

        proto.CreateTableResponse = (function() {

            /**
             * Properties of a CreateTableResponse.
             * @memberof tablestore.proto
             * @interface ICreateTableResponse
             */

            /**
             * Constructs a new CreateTableResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a CreateTableResponse.
             * @implements ICreateTableResponse
             * @constructor
             * @param {tablestore.proto.ICreateTableResponse=} [properties] Properties to set
             */
            function CreateTableResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CreateTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {tablestore.proto.ICreateTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.CreateTableResponse} CreateTableResponse instance
             */
            CreateTableResponse.create = function create(properties) {
                return new CreateTableResponse(properties);
            };

            /**
             * Encodes the specified CreateTableResponse message. Does not implicitly {@link tablestore.proto.CreateTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {tablestore.proto.ICreateTableResponse} message CreateTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.CreateTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {tablestore.proto.ICreateTableResponse} message CreateTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CreateTableResponse} CreateTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CreateTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CreateTableResponse} CreateTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateTableResponse message.
             * @function verify
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CreateTableResponse} CreateTableResponse
             */
            CreateTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CreateTableResponse)
                    return object;
                return new $root.tablestore.proto.CreateTableResponse();
            };

            /**
             * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CreateTableResponse
             * @static
             * @param {tablestore.proto.CreateTableResponse} message CreateTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateTableResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CreateTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CreateTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateTableResponse;
        })();

        proto.CreateIndexRequest = (function() {

            /**
             * Properties of a CreateIndexRequest.
             * @memberof tablestore.proto
             * @interface ICreateIndexRequest
             * @property {string} mainTableName CreateIndexRequest mainTableName
             * @property {tablestore.proto.IIndexMeta} indexMeta CreateIndexRequest indexMeta
             * @property {boolean|null} [includeBaseData] CreateIndexRequest includeBaseData
             */

            /**
             * Constructs a new CreateIndexRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a CreateIndexRequest.
             * @implements ICreateIndexRequest
             * @constructor
             * @param {tablestore.proto.ICreateIndexRequest=} [properties] Properties to set
             */
            function CreateIndexRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateIndexRequest mainTableName.
             * @member {string} mainTableName
             * @memberof tablestore.proto.CreateIndexRequest
             * @instance
             */
            CreateIndexRequest.prototype.mainTableName = "";

            /**
             * CreateIndexRequest indexMeta.
             * @member {tablestore.proto.IIndexMeta} indexMeta
             * @memberof tablestore.proto.CreateIndexRequest
             * @instance
             */
            CreateIndexRequest.prototype.indexMeta = null;

            /**
             * CreateIndexRequest includeBaseData.
             * @member {boolean} includeBaseData
             * @memberof tablestore.proto.CreateIndexRequest
             * @instance
             */
            CreateIndexRequest.prototype.includeBaseData = false;

            /**
             * Creates a new CreateIndexRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {tablestore.proto.ICreateIndexRequest=} [properties] Properties to set
             * @returns {tablestore.proto.CreateIndexRequest} CreateIndexRequest instance
             */
            CreateIndexRequest.create = function create(properties) {
                return new CreateIndexRequest(properties);
            };

            /**
             * Encodes the specified CreateIndexRequest message. Does not implicitly {@link tablestore.proto.CreateIndexRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {tablestore.proto.ICreateIndexRequest} message CreateIndexRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateIndexRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mainTableName);
                $root.tablestore.proto.IndexMeta.encode(message.indexMeta, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.includeBaseData != null && message.hasOwnProperty("includeBaseData"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.includeBaseData);
                return writer;
            };

            /**
             * Encodes the specified CreateIndexRequest message, length delimited. Does not implicitly {@link tablestore.proto.CreateIndexRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {tablestore.proto.ICreateIndexRequest} message CreateIndexRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateIndexRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateIndexRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CreateIndexRequest} CreateIndexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateIndexRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CreateIndexRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mainTableName = reader.string();
                        break;
                    case 2:
                        message.indexMeta = $root.tablestore.proto.IndexMeta.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.includeBaseData = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("mainTableName"))
                    throw $util.ProtocolError("missing required 'mainTableName'", { instance: message });
                if (!message.hasOwnProperty("indexMeta"))
                    throw $util.ProtocolError("missing required 'indexMeta'", { instance: message });
                return message;
            };

            /**
             * Decodes a CreateIndexRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CreateIndexRequest} CreateIndexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateIndexRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateIndexRequest message.
             * @function verify
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateIndexRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.mainTableName))
                    return "mainTableName: string expected";
                {
                    var error = $root.tablestore.proto.IndexMeta.verify(message.indexMeta);
                    if (error)
                        return "indexMeta." + error;
                }
                if (message.includeBaseData != null && message.hasOwnProperty("includeBaseData"))
                    if (typeof message.includeBaseData !== "boolean")
                        return "includeBaseData: boolean expected";
                return null;
            };

            /**
             * Creates a CreateIndexRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CreateIndexRequest} CreateIndexRequest
             */
            CreateIndexRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CreateIndexRequest)
                    return object;
                var message = new $root.tablestore.proto.CreateIndexRequest();
                if (object.mainTableName != null)
                    message.mainTableName = String(object.mainTableName);
                if (object.indexMeta != null) {
                    if (typeof object.indexMeta !== "object")
                        throw TypeError(".tablestore.proto.CreateIndexRequest.indexMeta: object expected");
                    message.indexMeta = $root.tablestore.proto.IndexMeta.fromObject(object.indexMeta);
                }
                if (object.includeBaseData != null)
                    message.includeBaseData = Boolean(object.includeBaseData);
                return message;
            };

            /**
             * Creates a plain object from a CreateIndexRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CreateIndexRequest
             * @static
             * @param {tablestore.proto.CreateIndexRequest} message CreateIndexRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateIndexRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.mainTableName = "";
                    object.indexMeta = null;
                    object.includeBaseData = false;
                }
                if (message.mainTableName != null && message.hasOwnProperty("mainTableName"))
                    object.mainTableName = message.mainTableName;
                if (message.indexMeta != null && message.hasOwnProperty("indexMeta"))
                    object.indexMeta = $root.tablestore.proto.IndexMeta.toObject(message.indexMeta, options);
                if (message.includeBaseData != null && message.hasOwnProperty("includeBaseData"))
                    object.includeBaseData = message.includeBaseData;
                return object;
            };

            /**
             * Converts this CreateIndexRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CreateIndexRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateIndexRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateIndexRequest;
        })();

        proto.CreateIndexResponse = (function() {

            /**
             * Properties of a CreateIndexResponse.
             * @memberof tablestore.proto
             * @interface ICreateIndexResponse
             */

            /**
             * Constructs a new CreateIndexResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a CreateIndexResponse.
             * @implements ICreateIndexResponse
             * @constructor
             * @param {tablestore.proto.ICreateIndexResponse=} [properties] Properties to set
             */
            function CreateIndexResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CreateIndexResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {tablestore.proto.ICreateIndexResponse=} [properties] Properties to set
             * @returns {tablestore.proto.CreateIndexResponse} CreateIndexResponse instance
             */
            CreateIndexResponse.create = function create(properties) {
                return new CreateIndexResponse(properties);
            };

            /**
             * Encodes the specified CreateIndexResponse message. Does not implicitly {@link tablestore.proto.CreateIndexResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {tablestore.proto.ICreateIndexResponse} message CreateIndexResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateIndexResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CreateIndexResponse message, length delimited. Does not implicitly {@link tablestore.proto.CreateIndexResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {tablestore.proto.ICreateIndexResponse} message CreateIndexResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateIndexResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateIndexResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CreateIndexResponse} CreateIndexResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateIndexResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CreateIndexResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateIndexResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CreateIndexResponse} CreateIndexResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateIndexResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateIndexResponse message.
             * @function verify
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateIndexResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CreateIndexResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CreateIndexResponse} CreateIndexResponse
             */
            CreateIndexResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CreateIndexResponse)
                    return object;
                return new $root.tablestore.proto.CreateIndexResponse();
            };

            /**
             * Creates a plain object from a CreateIndexResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CreateIndexResponse
             * @static
             * @param {tablestore.proto.CreateIndexResponse} message CreateIndexResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateIndexResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CreateIndexResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CreateIndexResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateIndexResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateIndexResponse;
        })();

        proto.DropIndexRequest = (function() {

            /**
             * Properties of a DropIndexRequest.
             * @memberof tablestore.proto
             * @interface IDropIndexRequest
             * @property {string} mainTableName DropIndexRequest mainTableName
             * @property {string} indexName DropIndexRequest indexName
             */

            /**
             * Constructs a new DropIndexRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a DropIndexRequest.
             * @implements IDropIndexRequest
             * @constructor
             * @param {tablestore.proto.IDropIndexRequest=} [properties] Properties to set
             */
            function DropIndexRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DropIndexRequest mainTableName.
             * @member {string} mainTableName
             * @memberof tablestore.proto.DropIndexRequest
             * @instance
             */
            DropIndexRequest.prototype.mainTableName = "";

            /**
             * DropIndexRequest indexName.
             * @member {string} indexName
             * @memberof tablestore.proto.DropIndexRequest
             * @instance
             */
            DropIndexRequest.prototype.indexName = "";

            /**
             * Creates a new DropIndexRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {tablestore.proto.IDropIndexRequest=} [properties] Properties to set
             * @returns {tablestore.proto.DropIndexRequest} DropIndexRequest instance
             */
            DropIndexRequest.create = function create(properties) {
                return new DropIndexRequest(properties);
            };

            /**
             * Encodes the specified DropIndexRequest message. Does not implicitly {@link tablestore.proto.DropIndexRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {tablestore.proto.IDropIndexRequest} message DropIndexRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DropIndexRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mainTableName);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.indexName);
                return writer;
            };

            /**
             * Encodes the specified DropIndexRequest message, length delimited. Does not implicitly {@link tablestore.proto.DropIndexRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {tablestore.proto.IDropIndexRequest} message DropIndexRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DropIndexRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DropIndexRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DropIndexRequest} DropIndexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DropIndexRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DropIndexRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mainTableName = reader.string();
                        break;
                    case 2:
                        message.indexName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("mainTableName"))
                    throw $util.ProtocolError("missing required 'mainTableName'", { instance: message });
                if (!message.hasOwnProperty("indexName"))
                    throw $util.ProtocolError("missing required 'indexName'", { instance: message });
                return message;
            };

            /**
             * Decodes a DropIndexRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DropIndexRequest} DropIndexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DropIndexRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DropIndexRequest message.
             * @function verify
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DropIndexRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.mainTableName))
                    return "mainTableName: string expected";
                if (!$util.isString(message.indexName))
                    return "indexName: string expected";
                return null;
            };

            /**
             * Creates a DropIndexRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DropIndexRequest} DropIndexRequest
             */
            DropIndexRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DropIndexRequest)
                    return object;
                var message = new $root.tablestore.proto.DropIndexRequest();
                if (object.mainTableName != null)
                    message.mainTableName = String(object.mainTableName);
                if (object.indexName != null)
                    message.indexName = String(object.indexName);
                return message;
            };

            /**
             * Creates a plain object from a DropIndexRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DropIndexRequest
             * @static
             * @param {tablestore.proto.DropIndexRequest} message DropIndexRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DropIndexRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.mainTableName = "";
                    object.indexName = "";
                }
                if (message.mainTableName != null && message.hasOwnProperty("mainTableName"))
                    object.mainTableName = message.mainTableName;
                if (message.indexName != null && message.hasOwnProperty("indexName"))
                    object.indexName = message.indexName;
                return object;
            };

            /**
             * Converts this DropIndexRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DropIndexRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DropIndexRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DropIndexRequest;
        })();

        proto.DropIndexResponse = (function() {

            /**
             * Properties of a DropIndexResponse.
             * @memberof tablestore.proto
             * @interface IDropIndexResponse
             */

            /**
             * Constructs a new DropIndexResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a DropIndexResponse.
             * @implements IDropIndexResponse
             * @constructor
             * @param {tablestore.proto.IDropIndexResponse=} [properties] Properties to set
             */
            function DropIndexResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DropIndexResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {tablestore.proto.IDropIndexResponse=} [properties] Properties to set
             * @returns {tablestore.proto.DropIndexResponse} DropIndexResponse instance
             */
            DropIndexResponse.create = function create(properties) {
                return new DropIndexResponse(properties);
            };

            /**
             * Encodes the specified DropIndexResponse message. Does not implicitly {@link tablestore.proto.DropIndexResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {tablestore.proto.IDropIndexResponse} message DropIndexResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DropIndexResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DropIndexResponse message, length delimited. Does not implicitly {@link tablestore.proto.DropIndexResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {tablestore.proto.IDropIndexResponse} message DropIndexResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DropIndexResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DropIndexResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DropIndexResponse} DropIndexResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DropIndexResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DropIndexResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DropIndexResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DropIndexResponse} DropIndexResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DropIndexResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DropIndexResponse message.
             * @function verify
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DropIndexResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DropIndexResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DropIndexResponse} DropIndexResponse
             */
            DropIndexResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DropIndexResponse)
                    return object;
                return new $root.tablestore.proto.DropIndexResponse();
            };

            /**
             * Creates a plain object from a DropIndexResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DropIndexResponse
             * @static
             * @param {tablestore.proto.DropIndexResponse} message DropIndexResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DropIndexResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DropIndexResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DropIndexResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DropIndexResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DropIndexResponse;
        })();

        proto.UpdateTableRequest = (function() {

            /**
             * Properties of an UpdateTableRequest.
             * @memberof tablestore.proto
             * @interface IUpdateTableRequest
             * @property {string} tableName UpdateTableRequest tableName
             * @property {tablestore.proto.IReservedThroughput|null} [reservedThroughput] UpdateTableRequest reservedThroughput
             * @property {tablestore.proto.ITableOptions|null} [tableOptions] UpdateTableRequest tableOptions
             * @property {tablestore.proto.IStreamSpecification|null} [streamSpec] UpdateTableRequest streamSpec
             */

            /**
             * Constructs a new UpdateTableRequest.
             * @memberof tablestore.proto
             * @classdesc Represents an UpdateTableRequest.
             * @implements IUpdateTableRequest
             * @constructor
             * @param {tablestore.proto.IUpdateTableRequest=} [properties] Properties to set
             */
            function UpdateTableRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateTableRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.UpdateTableRequest
             * @instance
             */
            UpdateTableRequest.prototype.tableName = "";

            /**
             * UpdateTableRequest reservedThroughput.
             * @member {tablestore.proto.IReservedThroughput|null|undefined} reservedThroughput
             * @memberof tablestore.proto.UpdateTableRequest
             * @instance
             */
            UpdateTableRequest.prototype.reservedThroughput = null;

            /**
             * UpdateTableRequest tableOptions.
             * @member {tablestore.proto.ITableOptions|null|undefined} tableOptions
             * @memberof tablestore.proto.UpdateTableRequest
             * @instance
             */
            UpdateTableRequest.prototype.tableOptions = null;

            /**
             * UpdateTableRequest streamSpec.
             * @member {tablestore.proto.IStreamSpecification|null|undefined} streamSpec
             * @memberof tablestore.proto.UpdateTableRequest
             * @instance
             */
            UpdateTableRequest.prototype.streamSpec = null;

            /**
             * Creates a new UpdateTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {tablestore.proto.IUpdateTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.UpdateTableRequest} UpdateTableRequest instance
             */
            UpdateTableRequest.create = function create(properties) {
                return new UpdateTableRequest(properties);
            };

            /**
             * Encodes the specified UpdateTableRequest message. Does not implicitly {@link tablestore.proto.UpdateTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {tablestore.proto.IUpdateTableRequest} message UpdateTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.reservedThroughput != null && message.hasOwnProperty("reservedThroughput"))
                    $root.tablestore.proto.ReservedThroughput.encode(message.reservedThroughput, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions"))
                    $root.tablestore.proto.TableOptions.encode(message.tableOptions, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.streamSpec != null && message.hasOwnProperty("streamSpec"))
                    $root.tablestore.proto.StreamSpecification.encode(message.streamSpec, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdateTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.UpdateTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {tablestore.proto.IUpdateTableRequest} message UpdateTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.UpdateTableRequest} UpdateTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.UpdateTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.reservedThroughput = $root.tablestore.proto.ReservedThroughput.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.tableOptions = $root.tablestore.proto.TableOptions.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.streamSpec = $root.tablestore.proto.StreamSpecification.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.UpdateTableRequest} UpdateTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateTableRequest message.
             * @function verify
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (message.reservedThroughput != null && message.hasOwnProperty("reservedThroughput")) {
                    var error = $root.tablestore.proto.ReservedThroughput.verify(message.reservedThroughput);
                    if (error)
                        return "reservedThroughput." + error;
                }
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions")) {
                    var error = $root.tablestore.proto.TableOptions.verify(message.tableOptions);
                    if (error)
                        return "tableOptions." + error;
                }
                if (message.streamSpec != null && message.hasOwnProperty("streamSpec")) {
                    var error = $root.tablestore.proto.StreamSpecification.verify(message.streamSpec);
                    if (error)
                        return "streamSpec." + error;
                }
                return null;
            };

            /**
             * Creates an UpdateTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.UpdateTableRequest} UpdateTableRequest
             */
            UpdateTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.UpdateTableRequest)
                    return object;
                var message = new $root.tablestore.proto.UpdateTableRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.reservedThroughput != null) {
                    if (typeof object.reservedThroughput !== "object")
                        throw TypeError(".tablestore.proto.UpdateTableRequest.reservedThroughput: object expected");
                    message.reservedThroughput = $root.tablestore.proto.ReservedThroughput.fromObject(object.reservedThroughput);
                }
                if (object.tableOptions != null) {
                    if (typeof object.tableOptions !== "object")
                        throw TypeError(".tablestore.proto.UpdateTableRequest.tableOptions: object expected");
                    message.tableOptions = $root.tablestore.proto.TableOptions.fromObject(object.tableOptions);
                }
                if (object.streamSpec != null) {
                    if (typeof object.streamSpec !== "object")
                        throw TypeError(".tablestore.proto.UpdateTableRequest.streamSpec: object expected");
                    message.streamSpec = $root.tablestore.proto.StreamSpecification.fromObject(object.streamSpec);
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdateTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.UpdateTableRequest
             * @static
             * @param {tablestore.proto.UpdateTableRequest} message UpdateTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateTableRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tableName = "";
                    object.reservedThroughput = null;
                    object.tableOptions = null;
                    object.streamSpec = null;
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.reservedThroughput != null && message.hasOwnProperty("reservedThroughput"))
                    object.reservedThroughput = $root.tablestore.proto.ReservedThroughput.toObject(message.reservedThroughput, options);
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions"))
                    object.tableOptions = $root.tablestore.proto.TableOptions.toObject(message.tableOptions, options);
                if (message.streamSpec != null && message.hasOwnProperty("streamSpec"))
                    object.streamSpec = $root.tablestore.proto.StreamSpecification.toObject(message.streamSpec, options);
                return object;
            };

            /**
             * Converts this UpdateTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.UpdateTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateTableRequest;
        })();

        proto.UpdateTableResponse = (function() {

            /**
             * Properties of an UpdateTableResponse.
             * @memberof tablestore.proto
             * @interface IUpdateTableResponse
             * @property {tablestore.proto.IReservedThroughputDetails} reservedThroughputDetails UpdateTableResponse reservedThroughputDetails
             * @property {tablestore.proto.ITableOptions} tableOptions UpdateTableResponse tableOptions
             * @property {tablestore.proto.IStreamDetails|null} [streamDetails] UpdateTableResponse streamDetails
             */

            /**
             * Constructs a new UpdateTableResponse.
             * @memberof tablestore.proto
             * @classdesc Represents an UpdateTableResponse.
             * @implements IUpdateTableResponse
             * @constructor
             * @param {tablestore.proto.IUpdateTableResponse=} [properties] Properties to set
             */
            function UpdateTableResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateTableResponse reservedThroughputDetails.
             * @member {tablestore.proto.IReservedThroughputDetails} reservedThroughputDetails
             * @memberof tablestore.proto.UpdateTableResponse
             * @instance
             */
            UpdateTableResponse.prototype.reservedThroughputDetails = null;

            /**
             * UpdateTableResponse tableOptions.
             * @member {tablestore.proto.ITableOptions} tableOptions
             * @memberof tablestore.proto.UpdateTableResponse
             * @instance
             */
            UpdateTableResponse.prototype.tableOptions = null;

            /**
             * UpdateTableResponse streamDetails.
             * @member {tablestore.proto.IStreamDetails|null|undefined} streamDetails
             * @memberof tablestore.proto.UpdateTableResponse
             * @instance
             */
            UpdateTableResponse.prototype.streamDetails = null;

            /**
             * Creates a new UpdateTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {tablestore.proto.IUpdateTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.UpdateTableResponse} UpdateTableResponse instance
             */
            UpdateTableResponse.create = function create(properties) {
                return new UpdateTableResponse(properties);
            };

            /**
             * Encodes the specified UpdateTableResponse message. Does not implicitly {@link tablestore.proto.UpdateTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {tablestore.proto.IUpdateTableResponse} message UpdateTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ReservedThroughputDetails.encode(message.reservedThroughputDetails, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.tablestore.proto.TableOptions.encode(message.tableOptions, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.streamDetails != null && message.hasOwnProperty("streamDetails"))
                    $root.tablestore.proto.StreamDetails.encode(message.streamDetails, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdateTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.UpdateTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {tablestore.proto.IUpdateTableResponse} message UpdateTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.UpdateTableResponse} UpdateTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.UpdateTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.reservedThroughputDetails = $root.tablestore.proto.ReservedThroughputDetails.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.tableOptions = $root.tablestore.proto.TableOptions.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.streamDetails = $root.tablestore.proto.StreamDetails.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("reservedThroughputDetails"))
                    throw $util.ProtocolError("missing required 'reservedThroughputDetails'", { instance: message });
                if (!message.hasOwnProperty("tableOptions"))
                    throw $util.ProtocolError("missing required 'tableOptions'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.UpdateTableResponse} UpdateTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateTableResponse message.
             * @function verify
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ReservedThroughputDetails.verify(message.reservedThroughputDetails);
                    if (error)
                        return "reservedThroughputDetails." + error;
                }
                {
                    var error = $root.tablestore.proto.TableOptions.verify(message.tableOptions);
                    if (error)
                        return "tableOptions." + error;
                }
                if (message.streamDetails != null && message.hasOwnProperty("streamDetails")) {
                    var error = $root.tablestore.proto.StreamDetails.verify(message.streamDetails);
                    if (error)
                        return "streamDetails." + error;
                }
                return null;
            };

            /**
             * Creates an UpdateTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.UpdateTableResponse} UpdateTableResponse
             */
            UpdateTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.UpdateTableResponse)
                    return object;
                var message = new $root.tablestore.proto.UpdateTableResponse();
                if (object.reservedThroughputDetails != null) {
                    if (typeof object.reservedThroughputDetails !== "object")
                        throw TypeError(".tablestore.proto.UpdateTableResponse.reservedThroughputDetails: object expected");
                    message.reservedThroughputDetails = $root.tablestore.proto.ReservedThroughputDetails.fromObject(object.reservedThroughputDetails);
                }
                if (object.tableOptions != null) {
                    if (typeof object.tableOptions !== "object")
                        throw TypeError(".tablestore.proto.UpdateTableResponse.tableOptions: object expected");
                    message.tableOptions = $root.tablestore.proto.TableOptions.fromObject(object.tableOptions);
                }
                if (object.streamDetails != null) {
                    if (typeof object.streamDetails !== "object")
                        throw TypeError(".tablestore.proto.UpdateTableResponse.streamDetails: object expected");
                    message.streamDetails = $root.tablestore.proto.StreamDetails.fromObject(object.streamDetails);
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdateTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.UpdateTableResponse
             * @static
             * @param {tablestore.proto.UpdateTableResponse} message UpdateTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateTableResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.reservedThroughputDetails = null;
                    object.tableOptions = null;
                    object.streamDetails = null;
                }
                if (message.reservedThroughputDetails != null && message.hasOwnProperty("reservedThroughputDetails"))
                    object.reservedThroughputDetails = $root.tablestore.proto.ReservedThroughputDetails.toObject(message.reservedThroughputDetails, options);
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions"))
                    object.tableOptions = $root.tablestore.proto.TableOptions.toObject(message.tableOptions, options);
                if (message.streamDetails != null && message.hasOwnProperty("streamDetails"))
                    object.streamDetails = $root.tablestore.proto.StreamDetails.toObject(message.streamDetails, options);
                return object;
            };

            /**
             * Converts this UpdateTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.UpdateTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateTableResponse;
        })();

        proto.DescribeTableRequest = (function() {

            /**
             * Properties of a DescribeTableRequest.
             * @memberof tablestore.proto
             * @interface IDescribeTableRequest
             * @property {string} tableName DescribeTableRequest tableName
             */

            /**
             * Constructs a new DescribeTableRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a DescribeTableRequest.
             * @implements IDescribeTableRequest
             * @constructor
             * @param {tablestore.proto.IDescribeTableRequest=} [properties] Properties to set
             */
            function DescribeTableRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescribeTableRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.DescribeTableRequest
             * @instance
             */
            DescribeTableRequest.prototype.tableName = "";

            /**
             * Creates a new DescribeTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {tablestore.proto.IDescribeTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.DescribeTableRequest} DescribeTableRequest instance
             */
            DescribeTableRequest.create = function create(properties) {
                return new DescribeTableRequest(properties);
            };

            /**
             * Encodes the specified DescribeTableRequest message. Does not implicitly {@link tablestore.proto.DescribeTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {tablestore.proto.IDescribeTableRequest} message DescribeTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                return writer;
            };

            /**
             * Encodes the specified DescribeTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.DescribeTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {tablestore.proto.IDescribeTableRequest} message DescribeTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescribeTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DescribeTableRequest} DescribeTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DescribeTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a DescribeTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DescribeTableRequest} DescribeTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescribeTableRequest message.
             * @function verify
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescribeTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                return null;
            };

            /**
             * Creates a DescribeTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DescribeTableRequest} DescribeTableRequest
             */
            DescribeTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DescribeTableRequest)
                    return object;
                var message = new $root.tablestore.proto.DescribeTableRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                return message;
            };

            /**
             * Creates a plain object from a DescribeTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DescribeTableRequest
             * @static
             * @param {tablestore.proto.DescribeTableRequest} message DescribeTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescribeTableRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                return object;
            };

            /**
             * Converts this DescribeTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DescribeTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescribeTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DescribeTableRequest;
        })();

        proto.DescribeTableResponse = (function() {

            /**
             * Properties of a DescribeTableResponse.
             * @memberof tablestore.proto
             * @interface IDescribeTableResponse
             * @property {tablestore.proto.ITableMeta} tableMeta DescribeTableResponse tableMeta
             * @property {tablestore.proto.IReservedThroughputDetails} reservedThroughputDetails DescribeTableResponse reservedThroughputDetails
             * @property {tablestore.proto.ITableOptions} tableOptions DescribeTableResponse tableOptions
             * @property {tablestore.proto.TableStatus} tableStatus DescribeTableResponse tableStatus
             * @property {tablestore.proto.IStreamDetails|null} [streamDetails] DescribeTableResponse streamDetails
             * @property {Array.<Uint8Array>|null} [shardSplits] DescribeTableResponse shardSplits
             * @property {Array.<tablestore.proto.IIndexMeta>|null} [indexMetas] DescribeTableResponse indexMetas
             */

            /**
             * Constructs a new DescribeTableResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a DescribeTableResponse.
             * @implements IDescribeTableResponse
             * @constructor
             * @param {tablestore.proto.IDescribeTableResponse=} [properties] Properties to set
             */
            function DescribeTableResponse(properties) {
                this.shardSplits = [];
                this.indexMetas = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescribeTableResponse tableMeta.
             * @member {tablestore.proto.ITableMeta} tableMeta
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.tableMeta = null;

            /**
             * DescribeTableResponse reservedThroughputDetails.
             * @member {tablestore.proto.IReservedThroughputDetails} reservedThroughputDetails
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.reservedThroughputDetails = null;

            /**
             * DescribeTableResponse tableOptions.
             * @member {tablestore.proto.ITableOptions} tableOptions
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.tableOptions = null;

            /**
             * DescribeTableResponse tableStatus.
             * @member {tablestore.proto.TableStatus} tableStatus
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.tableStatus = 1;

            /**
             * DescribeTableResponse streamDetails.
             * @member {tablestore.proto.IStreamDetails|null|undefined} streamDetails
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.streamDetails = null;

            /**
             * DescribeTableResponse shardSplits.
             * @member {Array.<Uint8Array>} shardSplits
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.shardSplits = $util.emptyArray;

            /**
             * DescribeTableResponse indexMetas.
             * @member {Array.<tablestore.proto.IIndexMeta>} indexMetas
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             */
            DescribeTableResponse.prototype.indexMetas = $util.emptyArray;

            /**
             * Creates a new DescribeTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {tablestore.proto.IDescribeTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.DescribeTableResponse} DescribeTableResponse instance
             */
            DescribeTableResponse.create = function create(properties) {
                return new DescribeTableResponse(properties);
            };

            /**
             * Encodes the specified DescribeTableResponse message. Does not implicitly {@link tablestore.proto.DescribeTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {tablestore.proto.IDescribeTableResponse} message DescribeTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.TableMeta.encode(message.tableMeta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.tablestore.proto.ReservedThroughputDetails.encode(message.reservedThroughputDetails, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                $root.tablestore.proto.TableOptions.encode(message.tableOptions, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tableStatus);
                if (message.streamDetails != null && message.hasOwnProperty("streamDetails"))
                    $root.tablestore.proto.StreamDetails.encode(message.streamDetails, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.shardSplits != null && message.shardSplits.length)
                    for (var i = 0; i < message.shardSplits.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.shardSplits[i]);
                if (message.indexMetas != null && message.indexMetas.length)
                    for (var i = 0; i < message.indexMetas.length; ++i)
                        $root.tablestore.proto.IndexMeta.encode(message.indexMetas[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DescribeTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.DescribeTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {tablestore.proto.IDescribeTableResponse} message DescribeTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescribeTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DescribeTableResponse} DescribeTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DescribeTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableMeta = $root.tablestore.proto.TableMeta.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.reservedThroughputDetails = $root.tablestore.proto.ReservedThroughputDetails.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.tableOptions = $root.tablestore.proto.TableOptions.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.tableStatus = reader.int32();
                        break;
                    case 5:
                        message.streamDetails = $root.tablestore.proto.StreamDetails.decode(reader, reader.uint32());
                        break;
                    case 6:
                        if (!(message.shardSplits && message.shardSplits.length))
                            message.shardSplits = [];
                        message.shardSplits.push(reader.bytes());
                        break;
                    case 8:
                        if (!(message.indexMetas && message.indexMetas.length))
                            message.indexMetas = [];
                        message.indexMetas.push($root.tablestore.proto.IndexMeta.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableMeta"))
                    throw $util.ProtocolError("missing required 'tableMeta'", { instance: message });
                if (!message.hasOwnProperty("reservedThroughputDetails"))
                    throw $util.ProtocolError("missing required 'reservedThroughputDetails'", { instance: message });
                if (!message.hasOwnProperty("tableOptions"))
                    throw $util.ProtocolError("missing required 'tableOptions'", { instance: message });
                if (!message.hasOwnProperty("tableStatus"))
                    throw $util.ProtocolError("missing required 'tableStatus'", { instance: message });
                return message;
            };

            /**
             * Decodes a DescribeTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DescribeTableResponse} DescribeTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescribeTableResponse message.
             * @function verify
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescribeTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.TableMeta.verify(message.tableMeta);
                    if (error)
                        return "tableMeta." + error;
                }
                {
                    var error = $root.tablestore.proto.ReservedThroughputDetails.verify(message.reservedThroughputDetails);
                    if (error)
                        return "reservedThroughputDetails." + error;
                }
                {
                    var error = $root.tablestore.proto.TableOptions.verify(message.tableOptions);
                    if (error)
                        return "tableOptions." + error;
                }
                switch (message.tableStatus) {
                default:
                    return "tableStatus: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
                if (message.streamDetails != null && message.hasOwnProperty("streamDetails")) {
                    var error = $root.tablestore.proto.StreamDetails.verify(message.streamDetails);
                    if (error)
                        return "streamDetails." + error;
                }
                if (message.shardSplits != null && message.hasOwnProperty("shardSplits")) {
                    if (!Array.isArray(message.shardSplits))
                        return "shardSplits: array expected";
                    for (var i = 0; i < message.shardSplits.length; ++i)
                        if (!(message.shardSplits[i] && typeof message.shardSplits[i].length === "number" || $util.isString(message.shardSplits[i])))
                            return "shardSplits: buffer[] expected";
                }
                if (message.indexMetas != null && message.hasOwnProperty("indexMetas")) {
                    if (!Array.isArray(message.indexMetas))
                        return "indexMetas: array expected";
                    for (var i = 0; i < message.indexMetas.length; ++i) {
                        var error = $root.tablestore.proto.IndexMeta.verify(message.indexMetas[i]);
                        if (error)
                            return "indexMetas." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a DescribeTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DescribeTableResponse} DescribeTableResponse
             */
            DescribeTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DescribeTableResponse)
                    return object;
                var message = new $root.tablestore.proto.DescribeTableResponse();
                if (object.tableMeta != null) {
                    if (typeof object.tableMeta !== "object")
                        throw TypeError(".tablestore.proto.DescribeTableResponse.tableMeta: object expected");
                    message.tableMeta = $root.tablestore.proto.TableMeta.fromObject(object.tableMeta);
                }
                if (object.reservedThroughputDetails != null) {
                    if (typeof object.reservedThroughputDetails !== "object")
                        throw TypeError(".tablestore.proto.DescribeTableResponse.reservedThroughputDetails: object expected");
                    message.reservedThroughputDetails = $root.tablestore.proto.ReservedThroughputDetails.fromObject(object.reservedThroughputDetails);
                }
                if (object.tableOptions != null) {
                    if (typeof object.tableOptions !== "object")
                        throw TypeError(".tablestore.proto.DescribeTableResponse.tableOptions: object expected");
                    message.tableOptions = $root.tablestore.proto.TableOptions.fromObject(object.tableOptions);
                }
                switch (object.tableStatus) {
                case "ACTIVE":
                case 1:
                    message.tableStatus = 1;
                    break;
                case "INACTIVE":
                case 2:
                    message.tableStatus = 2;
                    break;
                case "LOADING":
                case 3:
                    message.tableStatus = 3;
                    break;
                case "UNLOADING":
                case 4:
                    message.tableStatus = 4;
                    break;
                case "UPDATING":
                case 5:
                    message.tableStatus = 5;
                    break;
                }
                if (object.streamDetails != null) {
                    if (typeof object.streamDetails !== "object")
                        throw TypeError(".tablestore.proto.DescribeTableResponse.streamDetails: object expected");
                    message.streamDetails = $root.tablestore.proto.StreamDetails.fromObject(object.streamDetails);
                }
                if (object.shardSplits) {
                    if (!Array.isArray(object.shardSplits))
                        throw TypeError(".tablestore.proto.DescribeTableResponse.shardSplits: array expected");
                    message.shardSplits = [];
                    for (var i = 0; i < object.shardSplits.length; ++i)
                        if (typeof object.shardSplits[i] === "string")
                            $util.base64.decode(object.shardSplits[i], message.shardSplits[i] = $util.newBuffer($util.base64.length(object.shardSplits[i])), 0);
                        else if (object.shardSplits[i].length)
                            message.shardSplits[i] = object.shardSplits[i];
                }
                if (object.indexMetas) {
                    if (!Array.isArray(object.indexMetas))
                        throw TypeError(".tablestore.proto.DescribeTableResponse.indexMetas: array expected");
                    message.indexMetas = [];
                    for (var i = 0; i < object.indexMetas.length; ++i) {
                        if (typeof object.indexMetas[i] !== "object")
                            throw TypeError(".tablestore.proto.DescribeTableResponse.indexMetas: object expected");
                        message.indexMetas[i] = $root.tablestore.proto.IndexMeta.fromObject(object.indexMetas[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a DescribeTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DescribeTableResponse
             * @static
             * @param {tablestore.proto.DescribeTableResponse} message DescribeTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescribeTableResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.shardSplits = [];
                    object.indexMetas = [];
                }
                if (options.defaults) {
                    object.tableMeta = null;
                    object.reservedThroughputDetails = null;
                    object.tableOptions = null;
                    object.tableStatus = options.enums === String ? "ACTIVE" : 1;
                    object.streamDetails = null;
                }
                if (message.tableMeta != null && message.hasOwnProperty("tableMeta"))
                    object.tableMeta = $root.tablestore.proto.TableMeta.toObject(message.tableMeta, options);
                if (message.reservedThroughputDetails != null && message.hasOwnProperty("reservedThroughputDetails"))
                    object.reservedThroughputDetails = $root.tablestore.proto.ReservedThroughputDetails.toObject(message.reservedThroughputDetails, options);
                if (message.tableOptions != null && message.hasOwnProperty("tableOptions"))
                    object.tableOptions = $root.tablestore.proto.TableOptions.toObject(message.tableOptions, options);
                if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                    object.tableStatus = options.enums === String ? $root.tablestore.proto.TableStatus[message.tableStatus] : message.tableStatus;
                if (message.streamDetails != null && message.hasOwnProperty("streamDetails"))
                    object.streamDetails = $root.tablestore.proto.StreamDetails.toObject(message.streamDetails, options);
                if (message.shardSplits && message.shardSplits.length) {
                    object.shardSplits = [];
                    for (var j = 0; j < message.shardSplits.length; ++j)
                        object.shardSplits[j] = options.bytes === String ? $util.base64.encode(message.shardSplits[j], 0, message.shardSplits[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.shardSplits[j]) : message.shardSplits[j];
                }
                if (message.indexMetas && message.indexMetas.length) {
                    object.indexMetas = [];
                    for (var j = 0; j < message.indexMetas.length; ++j)
                        object.indexMetas[j] = $root.tablestore.proto.IndexMeta.toObject(message.indexMetas[j], options);
                }
                return object;
            };

            /**
             * Converts this DescribeTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DescribeTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescribeTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DescribeTableResponse;
        })();

        proto.ListTableRequest = (function() {

            /**
             * Properties of a ListTableRequest.
             * @memberof tablestore.proto
             * @interface IListTableRequest
             */

            /**
             * Constructs a new ListTableRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a ListTableRequest.
             * @implements IListTableRequest
             * @constructor
             * @param {tablestore.proto.IListTableRequest=} [properties] Properties to set
             */
            function ListTableRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ListTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {tablestore.proto.IListTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.ListTableRequest} ListTableRequest instance
             */
            ListTableRequest.create = function create(properties) {
                return new ListTableRequest(properties);
            };

            /**
             * Encodes the specified ListTableRequest message. Does not implicitly {@link tablestore.proto.ListTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {tablestore.proto.IListTableRequest} message ListTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ListTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.ListTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {tablestore.proto.IListTableRequest} message ListTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ListTableRequest} ListTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ListTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ListTableRequest} ListTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListTableRequest message.
             * @function verify
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ListTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ListTableRequest} ListTableRequest
             */
            ListTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ListTableRequest)
                    return object;
                return new $root.tablestore.proto.ListTableRequest();
            };

            /**
             * Creates a plain object from a ListTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ListTableRequest
             * @static
             * @param {tablestore.proto.ListTableRequest} message ListTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListTableRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this ListTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ListTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListTableRequest;
        })();

        proto.ListTableResponse = (function() {

            /**
             * Properties of a ListTableResponse.
             * @memberof tablestore.proto
             * @interface IListTableResponse
             * @property {Array.<string>|null} [tableNames] ListTableResponse tableNames
             */

            /**
             * Constructs a new ListTableResponse.
             * @memberof tablestore.proto
             * @classdesc 当前只返回一个简单的名称列表，需要讨论是否有业务场景需要获取除了表名之外的其他信息。
             * 其他信息可以包含预留吞吐量以及表的状态，这个信息只能是一个粗略的信息，表的详细信息还是需要通过DescribeTable来获取。
             * @implements IListTableResponse
             * @constructor
             * @param {tablestore.proto.IListTableResponse=} [properties] Properties to set
             */
            function ListTableResponse(properties) {
                this.tableNames = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListTableResponse tableNames.
             * @member {Array.<string>} tableNames
             * @memberof tablestore.proto.ListTableResponse
             * @instance
             */
            ListTableResponse.prototype.tableNames = $util.emptyArray;

            /**
             * Creates a new ListTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {tablestore.proto.IListTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.ListTableResponse} ListTableResponse instance
             */
            ListTableResponse.create = function create(properties) {
                return new ListTableResponse(properties);
            };

            /**
             * Encodes the specified ListTableResponse message. Does not implicitly {@link tablestore.proto.ListTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {tablestore.proto.IListTableResponse} message ListTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tableNames != null && message.tableNames.length)
                    for (var i = 0; i < message.tableNames.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableNames[i]);
                return writer;
            };

            /**
             * Encodes the specified ListTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.ListTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {tablestore.proto.IListTableResponse} message ListTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ListTableResponse} ListTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ListTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tableNames && message.tableNames.length))
                            message.tableNames = [];
                        message.tableNames.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ListTableResponse} ListTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListTableResponse message.
             * @function verify
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tableNames != null && message.hasOwnProperty("tableNames")) {
                    if (!Array.isArray(message.tableNames))
                        return "tableNames: array expected";
                    for (var i = 0; i < message.tableNames.length; ++i)
                        if (!$util.isString(message.tableNames[i]))
                            return "tableNames: string[] expected";
                }
                return null;
            };

            /**
             * Creates a ListTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ListTableResponse} ListTableResponse
             */
            ListTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ListTableResponse)
                    return object;
                var message = new $root.tablestore.proto.ListTableResponse();
                if (object.tableNames) {
                    if (!Array.isArray(object.tableNames))
                        throw TypeError(".tablestore.proto.ListTableResponse.tableNames: array expected");
                    message.tableNames = [];
                    for (var i = 0; i < object.tableNames.length; ++i)
                        message.tableNames[i] = String(object.tableNames[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ListTableResponse
             * @static
             * @param {tablestore.proto.ListTableResponse} message ListTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListTableResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tableNames = [];
                if (message.tableNames && message.tableNames.length) {
                    object.tableNames = [];
                    for (var j = 0; j < message.tableNames.length; ++j)
                        object.tableNames[j] = message.tableNames[j];
                }
                return object;
            };

            /**
             * Converts this ListTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ListTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListTableResponse;
        })();

        proto.DeleteTableRequest = (function() {

            /**
             * Properties of a DeleteTableRequest.
             * @memberof tablestore.proto
             * @interface IDeleteTableRequest
             * @property {string} tableName DeleteTableRequest tableName
             */

            /**
             * Constructs a new DeleteTableRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a DeleteTableRequest.
             * @implements IDeleteTableRequest
             * @constructor
             * @param {tablestore.proto.IDeleteTableRequest=} [properties] Properties to set
             */
            function DeleteTableRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteTableRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.DeleteTableRequest
             * @instance
             */
            DeleteTableRequest.prototype.tableName = "";

            /**
             * Creates a new DeleteTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {tablestore.proto.IDeleteTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.DeleteTableRequest} DeleteTableRequest instance
             */
            DeleteTableRequest.create = function create(properties) {
                return new DeleteTableRequest(properties);
            };

            /**
             * Encodes the specified DeleteTableRequest message. Does not implicitly {@link tablestore.proto.DeleteTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {tablestore.proto.IDeleteTableRequest} message DeleteTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                return writer;
            };

            /**
             * Encodes the specified DeleteTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.DeleteTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {tablestore.proto.IDeleteTableRequest} message DeleteTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DeleteTableRequest} DeleteTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DeleteTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeleteTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DeleteTableRequest} DeleteTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteTableRequest message.
             * @function verify
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                return null;
            };

            /**
             * Creates a DeleteTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DeleteTableRequest} DeleteTableRequest
             */
            DeleteTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DeleteTableRequest)
                    return object;
                var message = new $root.tablestore.proto.DeleteTableRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                return message;
            };

            /**
             * Creates a plain object from a DeleteTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DeleteTableRequest
             * @static
             * @param {tablestore.proto.DeleteTableRequest} message DeleteTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteTableRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                return object;
            };

            /**
             * Converts this DeleteTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DeleteTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteTableRequest;
        })();

        proto.DeleteTableResponse = (function() {

            /**
             * Properties of a DeleteTableResponse.
             * @memberof tablestore.proto
             * @interface IDeleteTableResponse
             */

            /**
             * Constructs a new DeleteTableResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a DeleteTableResponse.
             * @implements IDeleteTableResponse
             * @constructor
             * @param {tablestore.proto.IDeleteTableResponse=} [properties] Properties to set
             */
            function DeleteTableResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DeleteTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {tablestore.proto.IDeleteTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.DeleteTableResponse} DeleteTableResponse instance
             */
            DeleteTableResponse.create = function create(properties) {
                return new DeleteTableResponse(properties);
            };

            /**
             * Encodes the specified DeleteTableResponse message. Does not implicitly {@link tablestore.proto.DeleteTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {tablestore.proto.IDeleteTableResponse} message DeleteTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DeleteTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.DeleteTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {tablestore.proto.IDeleteTableResponse} message DeleteTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DeleteTableResponse} DeleteTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DeleteTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DeleteTableResponse} DeleteTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteTableResponse message.
             * @function verify
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DeleteTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DeleteTableResponse} DeleteTableResponse
             */
            DeleteTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DeleteTableResponse)
                    return object;
                return new $root.tablestore.proto.DeleteTableResponse();
            };

            /**
             * Creates a plain object from a DeleteTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DeleteTableResponse
             * @static
             * @param {tablestore.proto.DeleteTableResponse} message DeleteTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteTableResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DeleteTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DeleteTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteTableResponse;
        })();

        proto.LoadTableRequest = (function() {

            /**
             * Properties of a LoadTableRequest.
             * @memberof tablestore.proto
             * @interface ILoadTableRequest
             * @property {string} tableName LoadTableRequest tableName
             */

            /**
             * Constructs a new LoadTableRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a LoadTableRequest.
             * @implements ILoadTableRequest
             * @constructor
             * @param {tablestore.proto.ILoadTableRequest=} [properties] Properties to set
             */
            function LoadTableRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoadTableRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.LoadTableRequest
             * @instance
             */
            LoadTableRequest.prototype.tableName = "";

            /**
             * Creates a new LoadTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {tablestore.proto.ILoadTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.LoadTableRequest} LoadTableRequest instance
             */
            LoadTableRequest.create = function create(properties) {
                return new LoadTableRequest(properties);
            };

            /**
             * Encodes the specified LoadTableRequest message. Does not implicitly {@link tablestore.proto.LoadTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {tablestore.proto.ILoadTableRequest} message LoadTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoadTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                return writer;
            };

            /**
             * Encodes the specified LoadTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.LoadTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {tablestore.proto.ILoadTableRequest} message LoadTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoadTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoadTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.LoadTableRequest} LoadTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoadTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.LoadTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a LoadTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.LoadTableRequest} LoadTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoadTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoadTableRequest message.
             * @function verify
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoadTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                return null;
            };

            /**
             * Creates a LoadTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.LoadTableRequest} LoadTableRequest
             */
            LoadTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.LoadTableRequest)
                    return object;
                var message = new $root.tablestore.proto.LoadTableRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                return message;
            };

            /**
             * Creates a plain object from a LoadTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.LoadTableRequest
             * @static
             * @param {tablestore.proto.LoadTableRequest} message LoadTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoadTableRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                return object;
            };

            /**
             * Converts this LoadTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.LoadTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoadTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoadTableRequest;
        })();

        proto.LoadTableResponse = (function() {

            /**
             * Properties of a LoadTableResponse.
             * @memberof tablestore.proto
             * @interface ILoadTableResponse
             */

            /**
             * Constructs a new LoadTableResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a LoadTableResponse.
             * @implements ILoadTableResponse
             * @constructor
             * @param {tablestore.proto.ILoadTableResponse=} [properties] Properties to set
             */
            function LoadTableResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new LoadTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {tablestore.proto.ILoadTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.LoadTableResponse} LoadTableResponse instance
             */
            LoadTableResponse.create = function create(properties) {
                return new LoadTableResponse(properties);
            };

            /**
             * Encodes the specified LoadTableResponse message. Does not implicitly {@link tablestore.proto.LoadTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {tablestore.proto.ILoadTableResponse} message LoadTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoadTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified LoadTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.LoadTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {tablestore.proto.ILoadTableResponse} message LoadTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoadTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoadTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.LoadTableResponse} LoadTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoadTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.LoadTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoadTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.LoadTableResponse} LoadTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoadTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoadTableResponse message.
             * @function verify
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoadTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a LoadTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.LoadTableResponse} LoadTableResponse
             */
            LoadTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.LoadTableResponse)
                    return object;
                return new $root.tablestore.proto.LoadTableResponse();
            };

            /**
             * Creates a plain object from a LoadTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.LoadTableResponse
             * @static
             * @param {tablestore.proto.LoadTableResponse} message LoadTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoadTableResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this LoadTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.LoadTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoadTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoadTableResponse;
        })();

        proto.UnloadTableRequest = (function() {

            /**
             * Properties of an UnloadTableRequest.
             * @memberof tablestore.proto
             * @interface IUnloadTableRequest
             * @property {string} tableName UnloadTableRequest tableName
             */

            /**
             * Constructs a new UnloadTableRequest.
             * @memberof tablestore.proto
             * @classdesc Represents an UnloadTableRequest.
             * @implements IUnloadTableRequest
             * @constructor
             * @param {tablestore.proto.IUnloadTableRequest=} [properties] Properties to set
             */
            function UnloadTableRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnloadTableRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.UnloadTableRequest
             * @instance
             */
            UnloadTableRequest.prototype.tableName = "";

            /**
             * Creates a new UnloadTableRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {tablestore.proto.IUnloadTableRequest=} [properties] Properties to set
             * @returns {tablestore.proto.UnloadTableRequest} UnloadTableRequest instance
             */
            UnloadTableRequest.create = function create(properties) {
                return new UnloadTableRequest(properties);
            };

            /**
             * Encodes the specified UnloadTableRequest message. Does not implicitly {@link tablestore.proto.UnloadTableRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {tablestore.proto.IUnloadTableRequest} message UnloadTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnloadTableRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                return writer;
            };

            /**
             * Encodes the specified UnloadTableRequest message, length delimited. Does not implicitly {@link tablestore.proto.UnloadTableRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {tablestore.proto.IUnloadTableRequest} message UnloadTableRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnloadTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnloadTableRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.UnloadTableRequest} UnloadTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnloadTableRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.UnloadTableRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes an UnloadTableRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.UnloadTableRequest} UnloadTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnloadTableRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnloadTableRequest message.
             * @function verify
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnloadTableRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                return null;
            };

            /**
             * Creates an UnloadTableRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.UnloadTableRequest} UnloadTableRequest
             */
            UnloadTableRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.UnloadTableRequest)
                    return object;
                var message = new $root.tablestore.proto.UnloadTableRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                return message;
            };

            /**
             * Creates a plain object from an UnloadTableRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.UnloadTableRequest
             * @static
             * @param {tablestore.proto.UnloadTableRequest} message UnloadTableRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnloadTableRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                return object;
            };

            /**
             * Converts this UnloadTableRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.UnloadTableRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnloadTableRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UnloadTableRequest;
        })();

        proto.UnloadTableResponse = (function() {

            /**
             * Properties of an UnloadTableResponse.
             * @memberof tablestore.proto
             * @interface IUnloadTableResponse
             */

            /**
             * Constructs a new UnloadTableResponse.
             * @memberof tablestore.proto
             * @classdesc Represents an UnloadTableResponse.
             * @implements IUnloadTableResponse
             * @constructor
             * @param {tablestore.proto.IUnloadTableResponse=} [properties] Properties to set
             */
            function UnloadTableResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new UnloadTableResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {tablestore.proto.IUnloadTableResponse=} [properties] Properties to set
             * @returns {tablestore.proto.UnloadTableResponse} UnloadTableResponse instance
             */
            UnloadTableResponse.create = function create(properties) {
                return new UnloadTableResponse(properties);
            };

            /**
             * Encodes the specified UnloadTableResponse message. Does not implicitly {@link tablestore.proto.UnloadTableResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {tablestore.proto.IUnloadTableResponse} message UnloadTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnloadTableResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified UnloadTableResponse message, length delimited. Does not implicitly {@link tablestore.proto.UnloadTableResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {tablestore.proto.IUnloadTableResponse} message UnloadTableResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnloadTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnloadTableResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.UnloadTableResponse} UnloadTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnloadTableResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.UnloadTableResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnloadTableResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.UnloadTableResponse} UnloadTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnloadTableResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnloadTableResponse message.
             * @function verify
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnloadTableResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an UnloadTableResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.UnloadTableResponse} UnloadTableResponse
             */
            UnloadTableResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.UnloadTableResponse)
                    return object;
                return new $root.tablestore.proto.UnloadTableResponse();
            };

            /**
             * Creates a plain object from an UnloadTableResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.UnloadTableResponse
             * @static
             * @param {tablestore.proto.UnloadTableResponse} message UnloadTableResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnloadTableResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this UnloadTableResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.UnloadTableResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnloadTableResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UnloadTableResponse;
        })();

        proto.TimeRange = (function() {

            /**
             * Properties of a TimeRange.
             * @memberof tablestore.proto
             * @interface ITimeRange
             * @property {number|Long|null} [startTime] TimeRange startTime
             * @property {number|Long|null} [endTime] TimeRange endTime
             * @property {number|Long|null} [specificTime] TimeRange specificTime
             */

            /**
             * Constructs a new TimeRange.
             * @memberof tablestore.proto
             * @classdesc 时间戳的取值最小值为0，最大值为INT64.MAX
             * 1. 若要查询一个范围，则指定start_time和end_time
             * 2. 若要查询一个特定时间戳，则指定specific_time
             * @implements ITimeRange
             * @constructor
             * @param {tablestore.proto.ITimeRange=} [properties] Properties to set
             */
            function TimeRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TimeRange startTime.
             * @member {number|Long} startTime
             * @memberof tablestore.proto.TimeRange
             * @instance
             */
            TimeRange.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TimeRange endTime.
             * @member {number|Long} endTime
             * @memberof tablestore.proto.TimeRange
             * @instance
             */
            TimeRange.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TimeRange specificTime.
             * @member {number|Long} specificTime
             * @memberof tablestore.proto.TimeRange
             * @instance
             */
            TimeRange.prototype.specificTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new TimeRange instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {tablestore.proto.ITimeRange=} [properties] Properties to set
             * @returns {tablestore.proto.TimeRange} TimeRange instance
             */
            TimeRange.create = function create(properties) {
                return new TimeRange(properties);
            };

            /**
             * Encodes the specified TimeRange message. Does not implicitly {@link tablestore.proto.TimeRange.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {tablestore.proto.ITimeRange} message TimeRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTime);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTime);
                if (message.specificTime != null && message.hasOwnProperty("specificTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.specificTime);
                return writer;
            };

            /**
             * Encodes the specified TimeRange message, length delimited. Does not implicitly {@link tablestore.proto.TimeRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {tablestore.proto.ITimeRange} message TimeRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TimeRange message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TimeRange} TimeRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TimeRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.startTime = reader.int64();
                        break;
                    case 2:
                        message.endTime = reader.int64();
                        break;
                    case 3:
                        message.specificTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TimeRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TimeRange} TimeRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TimeRange message.
             * @function verify
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TimeRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                        return "startTime: integer|Long expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.specificTime != null && message.hasOwnProperty("specificTime"))
                    if (!$util.isInteger(message.specificTime) && !(message.specificTime && $util.isInteger(message.specificTime.low) && $util.isInteger(message.specificTime.high)))
                        return "specificTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TimeRange} TimeRange
             */
            TimeRange.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TimeRange)
                    return object;
                var message = new $root.tablestore.proto.TimeRange();
                if (object.startTime != null)
                    if ($util.Long)
                        (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                    else if (typeof object.startTime === "string")
                        message.startTime = parseInt(object.startTime, 10);
                    else if (typeof object.startTime === "number")
                        message.startTime = object.startTime;
                    else if (typeof object.startTime === "object")
                        message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
                if (object.endTime != null)
                    if ($util.Long)
                        (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = false;
                    else if (typeof object.endTime === "string")
                        message.endTime = parseInt(object.endTime, 10);
                    else if (typeof object.endTime === "number")
                        message.endTime = object.endTime;
                    else if (typeof object.endTime === "object")
                        message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber();
                if (object.specificTime != null)
                    if ($util.Long)
                        (message.specificTime = $util.Long.fromValue(object.specificTime)).unsigned = false;
                    else if (typeof object.specificTime === "string")
                        message.specificTime = parseInt(object.specificTime, 10);
                    else if (typeof object.specificTime === "number")
                        message.specificTime = object.specificTime;
                    else if (typeof object.specificTime === "object")
                        message.specificTime = new $util.LongBits(object.specificTime.low >>> 0, object.specificTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TimeRange
             * @static
             * @param {tablestore.proto.TimeRange} message TimeRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TimeRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.specificTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.specificTime = options.longs === String ? "0" : 0;
                }
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (typeof message.startTime === "number")
                        object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                    else
                        object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber() : message.endTime;
                if (message.specificTime != null && message.hasOwnProperty("specificTime"))
                    if (typeof message.specificTime === "number")
                        object.specificTime = options.longs === String ? String(message.specificTime) : message.specificTime;
                    else
                        object.specificTime = options.longs === String ? $util.Long.prototype.toString.call(message.specificTime) : options.longs === Number ? new $util.LongBits(message.specificTime.low >>> 0, message.specificTime.high >>> 0).toNumber() : message.specificTime;
                return object;
            };

            /**
             * Converts this TimeRange to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TimeRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TimeRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TimeRange;
        })();

        /**
         * ReturnType enum.
         * @name tablestore.proto.ReturnType
         * @enum {string}
         * @property {number} RT_NONE=0 RT_NONE value
         * @property {number} RT_PK=1 RT_PK value
         * @property {number} RT_AFTER_MODIFY=2 RT_AFTER_MODIFY value
         */
        proto.ReturnType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RT_NONE"] = 0;
            values[valuesById[1] = "RT_PK"] = 1;
            values[valuesById[2] = "RT_AFTER_MODIFY"] = 2;
            return values;
        })();

        proto.ReturnContent = (function() {

            /**
             * Properties of a ReturnContent.
             * @memberof tablestore.proto
             * @interface IReturnContent
             * @property {tablestore.proto.ReturnType|null} [returnType] ReturnContent returnType
             * @property {Array.<string>|null} [returnColumnNames] ReturnContent returnColumnNames
             */

            /**
             * Constructs a new ReturnContent.
             * @memberof tablestore.proto
             * @classdesc Represents a ReturnContent.
             * @implements IReturnContent
             * @constructor
             * @param {tablestore.proto.IReturnContent=} [properties] Properties to set
             */
            function ReturnContent(properties) {
                this.returnColumnNames = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReturnContent returnType.
             * @member {tablestore.proto.ReturnType} returnType
             * @memberof tablestore.proto.ReturnContent
             * @instance
             */
            ReturnContent.prototype.returnType = 0;

            /**
             * ReturnContent returnColumnNames.
             * @member {Array.<string>} returnColumnNames
             * @memberof tablestore.proto.ReturnContent
             * @instance
             */
            ReturnContent.prototype.returnColumnNames = $util.emptyArray;

            /**
             * Creates a new ReturnContent instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {tablestore.proto.IReturnContent=} [properties] Properties to set
             * @returns {tablestore.proto.ReturnContent} ReturnContent instance
             */
            ReturnContent.create = function create(properties) {
                return new ReturnContent(properties);
            };

            /**
             * Encodes the specified ReturnContent message. Does not implicitly {@link tablestore.proto.ReturnContent.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {tablestore.proto.IReturnContent} message ReturnContent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReturnContent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.returnType != null && message.hasOwnProperty("returnType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.returnType);
                if (message.returnColumnNames != null && message.returnColumnNames.length)
                    for (var i = 0; i < message.returnColumnNames.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.returnColumnNames[i]);
                return writer;
            };

            /**
             * Encodes the specified ReturnContent message, length delimited. Does not implicitly {@link tablestore.proto.ReturnContent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {tablestore.proto.IReturnContent} message ReturnContent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReturnContent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReturnContent message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ReturnContent} ReturnContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReturnContent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ReturnContent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.returnType = reader.int32();
                        break;
                    case 2:
                        if (!(message.returnColumnNames && message.returnColumnNames.length))
                            message.returnColumnNames = [];
                        message.returnColumnNames.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReturnContent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ReturnContent} ReturnContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReturnContent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReturnContent message.
             * @function verify
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReturnContent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.returnType != null && message.hasOwnProperty("returnType"))
                    switch (message.returnType) {
                    default:
                        return "returnType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.returnColumnNames != null && message.hasOwnProperty("returnColumnNames")) {
                    if (!Array.isArray(message.returnColumnNames))
                        return "returnColumnNames: array expected";
                    for (var i = 0; i < message.returnColumnNames.length; ++i)
                        if (!$util.isString(message.returnColumnNames[i]))
                            return "returnColumnNames: string[] expected";
                }
                return null;
            };

            /**
             * Creates a ReturnContent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ReturnContent} ReturnContent
             */
            ReturnContent.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ReturnContent)
                    return object;
                var message = new $root.tablestore.proto.ReturnContent();
                switch (object.returnType) {
                case "RT_NONE":
                case 0:
                    message.returnType = 0;
                    break;
                case "RT_PK":
                case 1:
                    message.returnType = 1;
                    break;
                case "RT_AFTER_MODIFY":
                case 2:
                    message.returnType = 2;
                    break;
                }
                if (object.returnColumnNames) {
                    if (!Array.isArray(object.returnColumnNames))
                        throw TypeError(".tablestore.proto.ReturnContent.returnColumnNames: array expected");
                    message.returnColumnNames = [];
                    for (var i = 0; i < object.returnColumnNames.length; ++i)
                        message.returnColumnNames[i] = String(object.returnColumnNames[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ReturnContent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ReturnContent
             * @static
             * @param {tablestore.proto.ReturnContent} message ReturnContent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReturnContent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.returnColumnNames = [];
                if (options.defaults)
                    object.returnType = options.enums === String ? "RT_NONE" : 0;
                if (message.returnType != null && message.hasOwnProperty("returnType"))
                    object.returnType = options.enums === String ? $root.tablestore.proto.ReturnType[message.returnType] : message.returnType;
                if (message.returnColumnNames && message.returnColumnNames.length) {
                    object.returnColumnNames = [];
                    for (var j = 0; j < message.returnColumnNames.length; ++j)
                        object.returnColumnNames[j] = message.returnColumnNames[j];
                }
                return object;
            };

            /**
             * Converts this ReturnContent to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ReturnContent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReturnContent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReturnContent;
        })();

        proto.GetRowRequest = (function() {

            /**
             * Properties of a GetRowRequest.
             * @memberof tablestore.proto
             * @interface IGetRowRequest
             * @property {string} tableName GetRowRequest tableName
             * @property {Uint8Array} primaryKey GetRowRequest primaryKey
             * @property {Array.<string>|null} [columnsToGet] GetRowRequest columnsToGet
             * @property {tablestore.proto.ITimeRange|null} [timeRange] GetRowRequest timeRange
             * @property {number|null} [maxVersions] GetRowRequest maxVersions
             * @property {boolean|null} [cacheBlocks] GetRowRequest cacheBlocks
             * @property {Uint8Array|null} [filter] GetRowRequest filter
             * @property {string|null} [startColumn] GetRowRequest startColumn
             * @property {string|null} [endColumn] GetRowRequest endColumn
             * @property {Uint8Array|null} [token] GetRowRequest token
             * @property {string|null} [transactionId] GetRowRequest transactionId
             */

            /**
             * Constructs a new GetRowRequest.
             * @memberof tablestore.proto
             * @classdesc 1. 支持用户指定版本时间戳范围或者特定的版本时间来读取指定版本的列
             * 2. 目前暂不支持行内的断点
             * @implements IGetRowRequest
             * @constructor
             * @param {tablestore.proto.IGetRowRequest=} [properties] Properties to set
             */
            function GetRowRequest(properties) {
                this.columnsToGet = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetRowRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.tableName = "";

            /**
             * GetRowRequest primaryKey.
             * @member {Uint8Array} primaryKey
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.primaryKey = $util.newBuffer([]);

            /**
             * GetRowRequest columnsToGet.
             * @member {Array.<string>} columnsToGet
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.columnsToGet = $util.emptyArray;

            /**
             * GetRowRequest timeRange.
             * @member {tablestore.proto.ITimeRange|null|undefined} timeRange
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.timeRange = null;

            /**
             * GetRowRequest maxVersions.
             * @member {number} maxVersions
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.maxVersions = 0;

            /**
             * GetRowRequest cacheBlocks.
             * @member {boolean} cacheBlocks
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.cacheBlocks = true;

            /**
             * GetRowRequest filter.
             * @member {Uint8Array} filter
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.filter = $util.newBuffer([]);

            /**
             * GetRowRequest startColumn.
             * @member {string} startColumn
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.startColumn = "";

            /**
             * GetRowRequest endColumn.
             * @member {string} endColumn
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.endColumn = "";

            /**
             * GetRowRequest token.
             * @member {Uint8Array} token
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.token = $util.newBuffer([]);

            /**
             * GetRowRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             */
            GetRowRequest.prototype.transactionId = "";

            /**
             * Creates a new GetRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {tablestore.proto.IGetRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.GetRowRequest} GetRowRequest instance
             */
            GetRowRequest.create = function create(properties) {
                return new GetRowRequest(properties);
            };

            /**
             * Encodes the specified GetRowRequest message. Does not implicitly {@link tablestore.proto.GetRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {tablestore.proto.IGetRowRequest} message GetRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.primaryKey);
                if (message.columnsToGet != null && message.columnsToGet.length)
                    for (var i = 0; i < message.columnsToGet.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.columnsToGet[i]);
                if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                    $root.tablestore.proto.TimeRange.encode(message.timeRange, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxVersions);
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.cacheBlocks);
                if (message.filter != null && message.hasOwnProperty("filter"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.filter);
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.startColumn);
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.endColumn);
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.token);
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified GetRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.GetRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {tablestore.proto.IGetRowRequest} message GetRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetRowRequest} GetRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.primaryKey = reader.bytes();
                        break;
                    case 3:
                        if (!(message.columnsToGet && message.columnsToGet.length))
                            message.columnsToGet = [];
                        message.columnsToGet.push(reader.string());
                        break;
                    case 4:
                        message.timeRange = $root.tablestore.proto.TimeRange.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.maxVersions = reader.int32();
                        break;
                    case 6:
                        message.cacheBlocks = reader.bool();
                        break;
                    case 7:
                        message.filter = reader.bytes();
                        break;
                    case 8:
                        message.startColumn = reader.string();
                        break;
                    case 9:
                        message.endColumn = reader.string();
                        break;
                    case 10:
                        message.token = reader.bytes();
                        break;
                    case 11:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("primaryKey"))
                    throw $util.ProtocolError("missing required 'primaryKey'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetRowRequest} GetRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRowRequest message.
             * @function verify
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!(message.primaryKey && typeof message.primaryKey.length === "number" || $util.isString(message.primaryKey)))
                    return "primaryKey: buffer expected";
                if (message.columnsToGet != null && message.hasOwnProperty("columnsToGet")) {
                    if (!Array.isArray(message.columnsToGet))
                        return "columnsToGet: array expected";
                    for (var i = 0; i < message.columnsToGet.length; ++i)
                        if (!$util.isString(message.columnsToGet[i]))
                            return "columnsToGet: string[] expected";
                }
                if (message.timeRange != null && message.hasOwnProperty("timeRange")) {
                    var error = $root.tablestore.proto.TimeRange.verify(message.timeRange);
                    if (error)
                        return "timeRange." + error;
                }
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    if (!$util.isInteger(message.maxVersions))
                        return "maxVersions: integer expected";
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    if (typeof message.cacheBlocks !== "boolean")
                        return "cacheBlocks: boolean expected";
                if (message.filter != null && message.hasOwnProperty("filter"))
                    if (!(message.filter && typeof message.filter.length === "number" || $util.isString(message.filter)))
                        return "filter: buffer expected";
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    if (!$util.isString(message.startColumn))
                        return "startColumn: string expected";
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    if (!$util.isString(message.endColumn))
                        return "endColumn: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                return null;
            };

            /**
             * Creates a GetRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetRowRequest} GetRowRequest
             */
            GetRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetRowRequest)
                    return object;
                var message = new $root.tablestore.proto.GetRowRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.primaryKey != null)
                    if (typeof object.primaryKey === "string")
                        $util.base64.decode(object.primaryKey, message.primaryKey = $util.newBuffer($util.base64.length(object.primaryKey)), 0);
                    else if (object.primaryKey.length)
                        message.primaryKey = object.primaryKey;
                if (object.columnsToGet) {
                    if (!Array.isArray(object.columnsToGet))
                        throw TypeError(".tablestore.proto.GetRowRequest.columnsToGet: array expected");
                    message.columnsToGet = [];
                    for (var i = 0; i < object.columnsToGet.length; ++i)
                        message.columnsToGet[i] = String(object.columnsToGet[i]);
                }
                if (object.timeRange != null) {
                    if (typeof object.timeRange !== "object")
                        throw TypeError(".tablestore.proto.GetRowRequest.timeRange: object expected");
                    message.timeRange = $root.tablestore.proto.TimeRange.fromObject(object.timeRange);
                }
                if (object.maxVersions != null)
                    message.maxVersions = object.maxVersions | 0;
                if (object.cacheBlocks != null)
                    message.cacheBlocks = Boolean(object.cacheBlocks);
                if (object.filter != null)
                    if (typeof object.filter === "string")
                        $util.base64.decode(object.filter, message.filter = $util.newBuffer($util.base64.length(object.filter)), 0);
                    else if (object.filter.length)
                        message.filter = object.filter;
                if (object.startColumn != null)
                    message.startColumn = String(object.startColumn);
                if (object.endColumn != null)
                    message.endColumn = String(object.endColumn);
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length)
                        message.token = object.token;
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from a GetRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetRowRequest
             * @static
             * @param {tablestore.proto.GetRowRequest} message GetRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.columnsToGet = [];
                if (options.defaults) {
                    object.tableName = "";
                    if (options.bytes === String)
                        object.primaryKey = "";
                    else {
                        object.primaryKey = [];
                        if (options.bytes !== Array)
                            object.primaryKey = $util.newBuffer(object.primaryKey);
                    }
                    object.timeRange = null;
                    object.maxVersions = 0;
                    object.cacheBlocks = true;
                    if (options.bytes === String)
                        object.filter = "";
                    else {
                        object.filter = [];
                        if (options.bytes !== Array)
                            object.filter = $util.newBuffer(object.filter);
                    }
                    object.startColumn = "";
                    object.endColumn = "";
                    if (options.bytes === String)
                        object.token = "";
                    else {
                        object.token = [];
                        if (options.bytes !== Array)
                            object.token = $util.newBuffer(object.token);
                    }
                    object.transactionId = "";
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.primaryKey != null && message.hasOwnProperty("primaryKey"))
                    object.primaryKey = options.bytes === String ? $util.base64.encode(message.primaryKey, 0, message.primaryKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.primaryKey) : message.primaryKey;
                if (message.columnsToGet && message.columnsToGet.length) {
                    object.columnsToGet = [];
                    for (var j = 0; j < message.columnsToGet.length; ++j)
                        object.columnsToGet[j] = message.columnsToGet[j];
                }
                if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                    object.timeRange = $root.tablestore.proto.TimeRange.toObject(message.timeRange, options);
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    object.maxVersions = message.maxVersions;
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    object.cacheBlocks = message.cacheBlocks;
                if (message.filter != null && message.hasOwnProperty("filter"))
                    object.filter = options.bytes === String ? $util.base64.encode(message.filter, 0, message.filter.length) : options.bytes === Array ? Array.prototype.slice.call(message.filter) : message.filter;
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    object.startColumn = message.startColumn;
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    object.endColumn = message.endColumn;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this GetRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRowRequest;
        })();

        proto.GetRowResponse = (function() {

            /**
             * Properties of a GetRowResponse.
             * @memberof tablestore.proto
             * @interface IGetRowResponse
             * @property {tablestore.proto.IConsumedCapacity} consumed GetRowResponse consumed
             * @property {Uint8Array} row GetRowResponse row
             * @property {Uint8Array|null} [nextToken] GetRowResponse nextToken
             */

            /**
             * Constructs a new GetRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a GetRowResponse.
             * @implements IGetRowResponse
             * @constructor
             * @param {tablestore.proto.IGetRowResponse=} [properties] Properties to set
             */
            function GetRowResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetRowResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity} consumed
             * @memberof tablestore.proto.GetRowResponse
             * @instance
             */
            GetRowResponse.prototype.consumed = null;

            /**
             * GetRowResponse row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.GetRowResponse
             * @instance
             */
            GetRowResponse.prototype.row = $util.newBuffer([]);

            /**
             * GetRowResponse nextToken.
             * @member {Uint8Array} nextToken
             * @memberof tablestore.proto.GetRowResponse
             * @instance
             */
            GetRowResponse.prototype.nextToken = $util.newBuffer([]);

            /**
             * Creates a new GetRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {tablestore.proto.IGetRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.GetRowResponse} GetRowResponse instance
             */
            GetRowResponse.create = function create(properties) {
                return new GetRowResponse(properties);
            };

            /**
             * Encodes the specified GetRowResponse message. Does not implicitly {@link tablestore.proto.GetRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {tablestore.proto.IGetRowResponse} message GetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.row);
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nextToken);
                return writer;
            };

            /**
             * Encodes the specified GetRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.GetRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {tablestore.proto.IGetRowResponse} message GetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetRowResponse} GetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.row = reader.bytes();
                        break;
                    case 3:
                        message.nextToken = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("consumed"))
                    throw $util.ProtocolError("missing required 'consumed'", { instance: message });
                if (!message.hasOwnProperty("row"))
                    throw $util.ProtocolError("missing required 'row'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetRowResponse} GetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRowResponse message.
             * @function verify
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                    return "row: buffer expected";
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    if (!(message.nextToken && typeof message.nextToken.length === "number" || $util.isString(message.nextToken)))
                        return "nextToken: buffer expected";
                return null;
            };

            /**
             * Creates a GetRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetRowResponse} GetRowResponse
             */
            GetRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetRowResponse)
                    return object;
                var message = new $root.tablestore.proto.GetRowResponse();
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.GetRowResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                if (object.nextToken != null)
                    if (typeof object.nextToken === "string")
                        $util.base64.decode(object.nextToken, message.nextToken = $util.newBuffer($util.base64.length(object.nextToken)), 0);
                    else if (object.nextToken.length)
                        message.nextToken = object.nextToken;
                return message;
            };

            /**
             * Creates a plain object from a GetRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetRowResponse
             * @static
             * @param {tablestore.proto.GetRowResponse} message GetRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.consumed = null;
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                    if (options.bytes === String)
                        object.nextToken = "";
                    else {
                        object.nextToken = [];
                        if (options.bytes !== Array)
                            object.nextToken = $util.newBuffer(object.nextToken);
                    }
                }
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    object.nextToken = options.bytes === String ? $util.base64.encode(message.nextToken, 0, message.nextToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextToken) : message.nextToken;
                return object;
            };

            /**
             * Converts this GetRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRowResponse;
        })();

        proto.UpdateRowRequest = (function() {

            /**
             * Properties of an UpdateRowRequest.
             * @memberof tablestore.proto
             * @interface IUpdateRowRequest
             * @property {string} tableName UpdateRowRequest tableName
             * @property {Uint8Array} rowChange UpdateRowRequest rowChange
             * @property {tablestore.proto.ICondition} condition UpdateRowRequest condition
             * @property {tablestore.proto.IReturnContent|null} [returnContent] UpdateRowRequest returnContent
             * @property {string|null} [transactionId] UpdateRowRequest transactionId
             */

            /**
             * Constructs a new UpdateRowRequest.
             * @memberof tablestore.proto
             * @classdesc Represents an UpdateRowRequest.
             * @implements IUpdateRowRequest
             * @constructor
             * @param {tablestore.proto.IUpdateRowRequest=} [properties] Properties to set
             */
            function UpdateRowRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateRowRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.UpdateRowRequest
             * @instance
             */
            UpdateRowRequest.prototype.tableName = "";

            /**
             * UpdateRowRequest rowChange.
             * @member {Uint8Array} rowChange
             * @memberof tablestore.proto.UpdateRowRequest
             * @instance
             */
            UpdateRowRequest.prototype.rowChange = $util.newBuffer([]);

            /**
             * UpdateRowRequest condition.
             * @member {tablestore.proto.ICondition} condition
             * @memberof tablestore.proto.UpdateRowRequest
             * @instance
             */
            UpdateRowRequest.prototype.condition = null;

            /**
             * UpdateRowRequest returnContent.
             * @member {tablestore.proto.IReturnContent|null|undefined} returnContent
             * @memberof tablestore.proto.UpdateRowRequest
             * @instance
             */
            UpdateRowRequest.prototype.returnContent = null;

            /**
             * UpdateRowRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.UpdateRowRequest
             * @instance
             */
            UpdateRowRequest.prototype.transactionId = "";

            /**
             * Creates a new UpdateRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {tablestore.proto.IUpdateRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.UpdateRowRequest} UpdateRowRequest instance
             */
            UpdateRowRequest.create = function create(properties) {
                return new UpdateRowRequest(properties);
            };

            /**
             * Encodes the specified UpdateRowRequest message. Does not implicitly {@link tablestore.proto.UpdateRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {tablestore.proto.IUpdateRowRequest} message UpdateRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.rowChange);
                $root.tablestore.proto.Condition.encode(message.condition, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    $root.tablestore.proto.ReturnContent.encode(message.returnContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified UpdateRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.UpdateRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {tablestore.proto.IUpdateRowRequest} message UpdateRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.UpdateRowRequest} UpdateRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.UpdateRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.rowChange = reader.bytes();
                        break;
                    case 3:
                        message.condition = $root.tablestore.proto.Condition.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.returnContent = $root.tablestore.proto.ReturnContent.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("rowChange"))
                    throw $util.ProtocolError("missing required 'rowChange'", { instance: message });
                if (!message.hasOwnProperty("condition"))
                    throw $util.ProtocolError("missing required 'condition'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.UpdateRowRequest} UpdateRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateRowRequest message.
             * @function verify
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!(message.rowChange && typeof message.rowChange.length === "number" || $util.isString(message.rowChange)))
                    return "rowChange: buffer expected";
                {
                    var error = $root.tablestore.proto.Condition.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.returnContent != null && message.hasOwnProperty("returnContent")) {
                    var error = $root.tablestore.proto.ReturnContent.verify(message.returnContent);
                    if (error)
                        return "returnContent." + error;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                return null;
            };

            /**
             * Creates an UpdateRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.UpdateRowRequest} UpdateRowRequest
             */
            UpdateRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.UpdateRowRequest)
                    return object;
                var message = new $root.tablestore.proto.UpdateRowRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.rowChange != null)
                    if (typeof object.rowChange === "string")
                        $util.base64.decode(object.rowChange, message.rowChange = $util.newBuffer($util.base64.length(object.rowChange)), 0);
                    else if (object.rowChange.length)
                        message.rowChange = object.rowChange;
                if (object.condition != null) {
                    if (typeof object.condition !== "object")
                        throw TypeError(".tablestore.proto.UpdateRowRequest.condition: object expected");
                    message.condition = $root.tablestore.proto.Condition.fromObject(object.condition);
                }
                if (object.returnContent != null) {
                    if (typeof object.returnContent !== "object")
                        throw TypeError(".tablestore.proto.UpdateRowRequest.returnContent: object expected");
                    message.returnContent = $root.tablestore.proto.ReturnContent.fromObject(object.returnContent);
                }
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from an UpdateRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.UpdateRowRequest
             * @static
             * @param {tablestore.proto.UpdateRowRequest} message UpdateRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tableName = "";
                    if (options.bytes === String)
                        object.rowChange = "";
                    else {
                        object.rowChange = [];
                        if (options.bytes !== Array)
                            object.rowChange = $util.newBuffer(object.rowChange);
                    }
                    object.condition = null;
                    object.returnContent = null;
                    object.transactionId = "";
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.rowChange != null && message.hasOwnProperty("rowChange"))
                    object.rowChange = options.bytes === String ? $util.base64.encode(message.rowChange, 0, message.rowChange.length) : options.bytes === Array ? Array.prototype.slice.call(message.rowChange) : message.rowChange;
                if (message.condition != null && message.hasOwnProperty("condition"))
                    object.condition = $root.tablestore.proto.Condition.toObject(message.condition, options);
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    object.returnContent = $root.tablestore.proto.ReturnContent.toObject(message.returnContent, options);
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this UpdateRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.UpdateRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateRowRequest;
        })();

        proto.UpdateRowResponse = (function() {

            /**
             * Properties of an UpdateRowResponse.
             * @memberof tablestore.proto
             * @interface IUpdateRowResponse
             * @property {tablestore.proto.IConsumedCapacity} consumed UpdateRowResponse consumed
             * @property {Uint8Array|null} [row] UpdateRowResponse row
             */

            /**
             * Constructs a new UpdateRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents an UpdateRowResponse.
             * @implements IUpdateRowResponse
             * @constructor
             * @param {tablestore.proto.IUpdateRowResponse=} [properties] Properties to set
             */
            function UpdateRowResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateRowResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity} consumed
             * @memberof tablestore.proto.UpdateRowResponse
             * @instance
             */
            UpdateRowResponse.prototype.consumed = null;

            /**
             * UpdateRowResponse row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.UpdateRowResponse
             * @instance
             */
            UpdateRowResponse.prototype.row = $util.newBuffer([]);

            /**
             * Creates a new UpdateRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {tablestore.proto.IUpdateRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.UpdateRowResponse} UpdateRowResponse instance
             */
            UpdateRowResponse.create = function create(properties) {
                return new UpdateRowResponse(properties);
            };

            /**
             * Encodes the specified UpdateRowResponse message. Does not implicitly {@link tablestore.proto.UpdateRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {tablestore.proto.IUpdateRowResponse} message UpdateRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.row != null && message.hasOwnProperty("row"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.row);
                return writer;
            };

            /**
             * Encodes the specified UpdateRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.UpdateRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {tablestore.proto.IUpdateRowResponse} message UpdateRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.UpdateRowResponse} UpdateRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.UpdateRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.row = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("consumed"))
                    throw $util.ProtocolError("missing required 'consumed'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.UpdateRowResponse} UpdateRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateRowResponse message.
             * @function verify
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (message.row != null && message.hasOwnProperty("row"))
                    if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                        return "row: buffer expected";
                return null;
            };

            /**
             * Creates an UpdateRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.UpdateRowResponse} UpdateRowResponse
             */
            UpdateRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.UpdateRowResponse)
                    return object;
                var message = new $root.tablestore.proto.UpdateRowResponse();
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.UpdateRowResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                return message;
            };

            /**
             * Creates a plain object from an UpdateRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.UpdateRowResponse
             * @static
             * @param {tablestore.proto.UpdateRowResponse} message UpdateRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.consumed = null;
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                }
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                return object;
            };

            /**
             * Converts this UpdateRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.UpdateRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateRowResponse;
        })();

        proto.PutRowRequest = (function() {

            /**
             * Properties of a PutRowRequest.
             * @memberof tablestore.proto
             * @interface IPutRowRequest
             * @property {string} tableName PutRowRequest tableName
             * @property {Uint8Array} row PutRowRequest row
             * @property {tablestore.proto.ICondition} condition PutRowRequest condition
             * @property {tablestore.proto.IReturnContent|null} [returnContent] PutRowRequest returnContent
             * @property {string|null} [transactionId] PutRowRequest transactionId
             */

            /**
             * Constructs a new PutRowRequest.
             * @memberof tablestore.proto
             * @classdesc 这里允许用户为每列单独设置timestamp，而不是强制整行统一一个timestamp。
             * 原因是列都是用统一的结构，该结构本身是带timestamp的，其次强制统一timestamp增强了规范性但是丧失了灵活性，且该规范性没有明显的好处，反而带来了结构的复杂。
             * @implements IPutRowRequest
             * @constructor
             * @param {tablestore.proto.IPutRowRequest=} [properties] Properties to set
             */
            function PutRowRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PutRowRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.PutRowRequest
             * @instance
             */
            PutRowRequest.prototype.tableName = "";

            /**
             * PutRowRequest row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.PutRowRequest
             * @instance
             */
            PutRowRequest.prototype.row = $util.newBuffer([]);

            /**
             * PutRowRequest condition.
             * @member {tablestore.proto.ICondition} condition
             * @memberof tablestore.proto.PutRowRequest
             * @instance
             */
            PutRowRequest.prototype.condition = null;

            /**
             * PutRowRequest returnContent.
             * @member {tablestore.proto.IReturnContent|null|undefined} returnContent
             * @memberof tablestore.proto.PutRowRequest
             * @instance
             */
            PutRowRequest.prototype.returnContent = null;

            /**
             * PutRowRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.PutRowRequest
             * @instance
             */
            PutRowRequest.prototype.transactionId = "";

            /**
             * Creates a new PutRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {tablestore.proto.IPutRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.PutRowRequest} PutRowRequest instance
             */
            PutRowRequest.create = function create(properties) {
                return new PutRowRequest(properties);
            };

            /**
             * Encodes the specified PutRowRequest message. Does not implicitly {@link tablestore.proto.PutRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {tablestore.proto.IPutRowRequest} message PutRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PutRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.row);
                $root.tablestore.proto.Condition.encode(message.condition, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    $root.tablestore.proto.ReturnContent.encode(message.returnContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified PutRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.PutRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {tablestore.proto.IPutRowRequest} message PutRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PutRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PutRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.PutRowRequest} PutRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PutRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.PutRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.row = reader.bytes();
                        break;
                    case 3:
                        message.condition = $root.tablestore.proto.Condition.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.returnContent = $root.tablestore.proto.ReturnContent.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("row"))
                    throw $util.ProtocolError("missing required 'row'", { instance: message });
                if (!message.hasOwnProperty("condition"))
                    throw $util.ProtocolError("missing required 'condition'", { instance: message });
                return message;
            };

            /**
             * Decodes a PutRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.PutRowRequest} PutRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PutRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PutRowRequest message.
             * @function verify
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PutRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                    return "row: buffer expected";
                {
                    var error = $root.tablestore.proto.Condition.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.returnContent != null && message.hasOwnProperty("returnContent")) {
                    var error = $root.tablestore.proto.ReturnContent.verify(message.returnContent);
                    if (error)
                        return "returnContent." + error;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                return null;
            };

            /**
             * Creates a PutRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.PutRowRequest} PutRowRequest
             */
            PutRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.PutRowRequest)
                    return object;
                var message = new $root.tablestore.proto.PutRowRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                if (object.condition != null) {
                    if (typeof object.condition !== "object")
                        throw TypeError(".tablestore.proto.PutRowRequest.condition: object expected");
                    message.condition = $root.tablestore.proto.Condition.fromObject(object.condition);
                }
                if (object.returnContent != null) {
                    if (typeof object.returnContent !== "object")
                        throw TypeError(".tablestore.proto.PutRowRequest.returnContent: object expected");
                    message.returnContent = $root.tablestore.proto.ReturnContent.fromObject(object.returnContent);
                }
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from a PutRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.PutRowRequest
             * @static
             * @param {tablestore.proto.PutRowRequest} message PutRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PutRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tableName = "";
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                    object.condition = null;
                    object.returnContent = null;
                    object.transactionId = "";
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                if (message.condition != null && message.hasOwnProperty("condition"))
                    object.condition = $root.tablestore.proto.Condition.toObject(message.condition, options);
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    object.returnContent = $root.tablestore.proto.ReturnContent.toObject(message.returnContent, options);
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this PutRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.PutRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PutRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PutRowRequest;
        })();

        proto.PutRowResponse = (function() {

            /**
             * Properties of a PutRowResponse.
             * @memberof tablestore.proto
             * @interface IPutRowResponse
             * @property {tablestore.proto.IConsumedCapacity} consumed PutRowResponse consumed
             * @property {Uint8Array|null} [row] PutRowResponse row
             */

            /**
             * Constructs a new PutRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a PutRowResponse.
             * @implements IPutRowResponse
             * @constructor
             * @param {tablestore.proto.IPutRowResponse=} [properties] Properties to set
             */
            function PutRowResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PutRowResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity} consumed
             * @memberof tablestore.proto.PutRowResponse
             * @instance
             */
            PutRowResponse.prototype.consumed = null;

            /**
             * PutRowResponse row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.PutRowResponse
             * @instance
             */
            PutRowResponse.prototype.row = $util.newBuffer([]);

            /**
             * Creates a new PutRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {tablestore.proto.IPutRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.PutRowResponse} PutRowResponse instance
             */
            PutRowResponse.create = function create(properties) {
                return new PutRowResponse(properties);
            };

            /**
             * Encodes the specified PutRowResponse message. Does not implicitly {@link tablestore.proto.PutRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {tablestore.proto.IPutRowResponse} message PutRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PutRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.row != null && message.hasOwnProperty("row"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.row);
                return writer;
            };

            /**
             * Encodes the specified PutRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.PutRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {tablestore.proto.IPutRowResponse} message PutRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PutRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PutRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.PutRowResponse} PutRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PutRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.PutRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.row = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("consumed"))
                    throw $util.ProtocolError("missing required 'consumed'", { instance: message });
                return message;
            };

            /**
             * Decodes a PutRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.PutRowResponse} PutRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PutRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PutRowResponse message.
             * @function verify
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PutRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (message.row != null && message.hasOwnProperty("row"))
                    if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                        return "row: buffer expected";
                return null;
            };

            /**
             * Creates a PutRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.PutRowResponse} PutRowResponse
             */
            PutRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.PutRowResponse)
                    return object;
                var message = new $root.tablestore.proto.PutRowResponse();
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.PutRowResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                return message;
            };

            /**
             * Creates a plain object from a PutRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.PutRowResponse
             * @static
             * @param {tablestore.proto.PutRowResponse} message PutRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PutRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.consumed = null;
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                }
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                return object;
            };

            /**
             * Converts this PutRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.PutRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PutRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PutRowResponse;
        })();

        proto.DeleteRowRequest = (function() {

            /**
             * Properties of a DeleteRowRequest.
             * @memberof tablestore.proto
             * @interface IDeleteRowRequest
             * @property {string} tableName DeleteRowRequest tableName
             * @property {Uint8Array} primaryKey DeleteRowRequest primaryKey
             * @property {tablestore.proto.ICondition} condition DeleteRowRequest condition
             * @property {tablestore.proto.IReturnContent|null} [returnContent] DeleteRowRequest returnContent
             * @property {string|null} [transactionId] DeleteRowRequest transactionId
             */

            /**
             * Constructs a new DeleteRowRequest.
             * @memberof tablestore.proto
             * @classdesc OTS只支持删除该行的所有列所有版本，不支持：
             * 1. 删除所有列的所有小于等于某个版本的所有版本
             * @implements IDeleteRowRequest
             * @constructor
             * @param {tablestore.proto.IDeleteRowRequest=} [properties] Properties to set
             */
            function DeleteRowRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteRowRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.DeleteRowRequest
             * @instance
             */
            DeleteRowRequest.prototype.tableName = "";

            /**
             * DeleteRowRequest primaryKey.
             * @member {Uint8Array} primaryKey
             * @memberof tablestore.proto.DeleteRowRequest
             * @instance
             */
            DeleteRowRequest.prototype.primaryKey = $util.newBuffer([]);

            /**
             * DeleteRowRequest condition.
             * @member {tablestore.proto.ICondition} condition
             * @memberof tablestore.proto.DeleteRowRequest
             * @instance
             */
            DeleteRowRequest.prototype.condition = null;

            /**
             * DeleteRowRequest returnContent.
             * @member {tablestore.proto.IReturnContent|null|undefined} returnContent
             * @memberof tablestore.proto.DeleteRowRequest
             * @instance
             */
            DeleteRowRequest.prototype.returnContent = null;

            /**
             * DeleteRowRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.DeleteRowRequest
             * @instance
             */
            DeleteRowRequest.prototype.transactionId = "";

            /**
             * Creates a new DeleteRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {tablestore.proto.IDeleteRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.DeleteRowRequest} DeleteRowRequest instance
             */
            DeleteRowRequest.create = function create(properties) {
                return new DeleteRowRequest(properties);
            };

            /**
             * Encodes the specified DeleteRowRequest message. Does not implicitly {@link tablestore.proto.DeleteRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {tablestore.proto.IDeleteRowRequest} message DeleteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.primaryKey);
                $root.tablestore.proto.Condition.encode(message.condition, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    $root.tablestore.proto.ReturnContent.encode(message.returnContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified DeleteRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.DeleteRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {tablestore.proto.IDeleteRowRequest} message DeleteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DeleteRowRequest} DeleteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DeleteRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.primaryKey = reader.bytes();
                        break;
                    case 3:
                        message.condition = $root.tablestore.proto.Condition.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.returnContent = $root.tablestore.proto.ReturnContent.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("primaryKey"))
                    throw $util.ProtocolError("missing required 'primaryKey'", { instance: message });
                if (!message.hasOwnProperty("condition"))
                    throw $util.ProtocolError("missing required 'condition'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeleteRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DeleteRowRequest} DeleteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteRowRequest message.
             * @function verify
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!(message.primaryKey && typeof message.primaryKey.length === "number" || $util.isString(message.primaryKey)))
                    return "primaryKey: buffer expected";
                {
                    var error = $root.tablestore.proto.Condition.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.returnContent != null && message.hasOwnProperty("returnContent")) {
                    var error = $root.tablestore.proto.ReturnContent.verify(message.returnContent);
                    if (error)
                        return "returnContent." + error;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                return null;
            };

            /**
             * Creates a DeleteRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DeleteRowRequest} DeleteRowRequest
             */
            DeleteRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DeleteRowRequest)
                    return object;
                var message = new $root.tablestore.proto.DeleteRowRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.primaryKey != null)
                    if (typeof object.primaryKey === "string")
                        $util.base64.decode(object.primaryKey, message.primaryKey = $util.newBuffer($util.base64.length(object.primaryKey)), 0);
                    else if (object.primaryKey.length)
                        message.primaryKey = object.primaryKey;
                if (object.condition != null) {
                    if (typeof object.condition !== "object")
                        throw TypeError(".tablestore.proto.DeleteRowRequest.condition: object expected");
                    message.condition = $root.tablestore.proto.Condition.fromObject(object.condition);
                }
                if (object.returnContent != null) {
                    if (typeof object.returnContent !== "object")
                        throw TypeError(".tablestore.proto.DeleteRowRequest.returnContent: object expected");
                    message.returnContent = $root.tablestore.proto.ReturnContent.fromObject(object.returnContent);
                }
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from a DeleteRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DeleteRowRequest
             * @static
             * @param {tablestore.proto.DeleteRowRequest} message DeleteRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tableName = "";
                    if (options.bytes === String)
                        object.primaryKey = "";
                    else {
                        object.primaryKey = [];
                        if (options.bytes !== Array)
                            object.primaryKey = $util.newBuffer(object.primaryKey);
                    }
                    object.condition = null;
                    object.returnContent = null;
                    object.transactionId = "";
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.primaryKey != null && message.hasOwnProperty("primaryKey"))
                    object.primaryKey = options.bytes === String ? $util.base64.encode(message.primaryKey, 0, message.primaryKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.primaryKey) : message.primaryKey;
                if (message.condition != null && message.hasOwnProperty("condition"))
                    object.condition = $root.tablestore.proto.Condition.toObject(message.condition, options);
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    object.returnContent = $root.tablestore.proto.ReturnContent.toObject(message.returnContent, options);
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this DeleteRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DeleteRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteRowRequest;
        })();

        proto.DeleteRowResponse = (function() {

            /**
             * Properties of a DeleteRowResponse.
             * @memberof tablestore.proto
             * @interface IDeleteRowResponse
             * @property {tablestore.proto.IConsumedCapacity} consumed DeleteRowResponse consumed
             * @property {Uint8Array|null} [row] DeleteRowResponse row
             */

            /**
             * Constructs a new DeleteRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a DeleteRowResponse.
             * @implements IDeleteRowResponse
             * @constructor
             * @param {tablestore.proto.IDeleteRowResponse=} [properties] Properties to set
             */
            function DeleteRowResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteRowResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity} consumed
             * @memberof tablestore.proto.DeleteRowResponse
             * @instance
             */
            DeleteRowResponse.prototype.consumed = null;

            /**
             * DeleteRowResponse row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.DeleteRowResponse
             * @instance
             */
            DeleteRowResponse.prototype.row = $util.newBuffer([]);

            /**
             * Creates a new DeleteRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {tablestore.proto.IDeleteRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.DeleteRowResponse} DeleteRowResponse instance
             */
            DeleteRowResponse.create = function create(properties) {
                return new DeleteRowResponse(properties);
            };

            /**
             * Encodes the specified DeleteRowResponse message. Does not implicitly {@link tablestore.proto.DeleteRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {tablestore.proto.IDeleteRowResponse} message DeleteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.row != null && message.hasOwnProperty("row"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.row);
                return writer;
            };

            /**
             * Encodes the specified DeleteRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.DeleteRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {tablestore.proto.IDeleteRowResponse} message DeleteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DeleteRowResponse} DeleteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DeleteRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.row = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("consumed"))
                    throw $util.ProtocolError("missing required 'consumed'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeleteRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DeleteRowResponse} DeleteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteRowResponse message.
             * @function verify
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (message.row != null && message.hasOwnProperty("row"))
                    if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                        return "row: buffer expected";
                return null;
            };

            /**
             * Creates a DeleteRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DeleteRowResponse} DeleteRowResponse
             */
            DeleteRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DeleteRowResponse)
                    return object;
                var message = new $root.tablestore.proto.DeleteRowResponse();
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.DeleteRowResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                return message;
            };

            /**
             * Creates a plain object from a DeleteRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DeleteRowResponse
             * @static
             * @param {tablestore.proto.DeleteRowResponse} message DeleteRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.consumed = null;
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                }
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                return object;
            };

            /**
             * Converts this DeleteRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DeleteRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteRowResponse;
        })();

        proto.TableInBatchGetRowRequest = (function() {

            /**
             * Properties of a TableInBatchGetRowRequest.
             * @memberof tablestore.proto
             * @interface ITableInBatchGetRowRequest
             * @property {string} tableName TableInBatchGetRowRequest tableName
             * @property {Array.<Uint8Array>|null} [primaryKey] TableInBatchGetRowRequest primaryKey
             * @property {Array.<Uint8Array>|null} [token] TableInBatchGetRowRequest token
             * @property {Array.<string>|null} [columnsToGet] TableInBatchGetRowRequest columnsToGet
             * @property {tablestore.proto.ITimeRange|null} [timeRange] TableInBatchGetRowRequest timeRange
             * @property {number|null} [maxVersions] TableInBatchGetRowRequest maxVersions
             * @property {boolean|null} [cacheBlocks] TableInBatchGetRowRequest cacheBlocks
             * @property {Uint8Array|null} [filter] TableInBatchGetRowRequest filter
             * @property {string|null} [startColumn] TableInBatchGetRowRequest startColumn
             * @property {string|null} [endColumn] TableInBatchGetRowRequest endColumn
             */

            /**
             * Constructs a new TableInBatchGetRowRequest.
             * @memberof tablestore.proto
             * @classdesc HBase支持Batch操作的每行都拥有不同的查询参数，OTS不支持。
             * @implements ITableInBatchGetRowRequest
             * @constructor
             * @param {tablestore.proto.ITableInBatchGetRowRequest=} [properties] Properties to set
             */
            function TableInBatchGetRowRequest(properties) {
                this.primaryKey = [];
                this.token = [];
                this.columnsToGet = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableInBatchGetRowRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.tableName = "";

            /**
             * TableInBatchGetRowRequest primaryKey.
             * @member {Array.<Uint8Array>} primaryKey
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.primaryKey = $util.emptyArray;

            /**
             * TableInBatchGetRowRequest token.
             * @member {Array.<Uint8Array>} token
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.token = $util.emptyArray;

            /**
             * TableInBatchGetRowRequest columnsToGet.
             * @member {Array.<string>} columnsToGet
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.columnsToGet = $util.emptyArray;

            /**
             * TableInBatchGetRowRequest timeRange.
             * @member {tablestore.proto.ITimeRange|null|undefined} timeRange
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.timeRange = null;

            /**
             * TableInBatchGetRowRequest maxVersions.
             * @member {number} maxVersions
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.maxVersions = 0;

            /**
             * TableInBatchGetRowRequest cacheBlocks.
             * @member {boolean} cacheBlocks
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.cacheBlocks = true;

            /**
             * TableInBatchGetRowRequest filter.
             * @member {Uint8Array} filter
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.filter = $util.newBuffer([]);

            /**
             * TableInBatchGetRowRequest startColumn.
             * @member {string} startColumn
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.startColumn = "";

            /**
             * TableInBatchGetRowRequest endColumn.
             * @member {string} endColumn
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             */
            TableInBatchGetRowRequest.prototype.endColumn = "";

            /**
             * Creates a new TableInBatchGetRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {tablestore.proto.ITableInBatchGetRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.TableInBatchGetRowRequest} TableInBatchGetRowRequest instance
             */
            TableInBatchGetRowRequest.create = function create(properties) {
                return new TableInBatchGetRowRequest(properties);
            };

            /**
             * Encodes the specified TableInBatchGetRowRequest message. Does not implicitly {@link tablestore.proto.TableInBatchGetRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {tablestore.proto.ITableInBatchGetRowRequest} message TableInBatchGetRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchGetRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.primaryKey != null && message.primaryKey.length)
                    for (var i = 0; i < message.primaryKey.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.primaryKey[i]);
                if (message.token != null && message.token.length)
                    for (var i = 0; i < message.token.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.token[i]);
                if (message.columnsToGet != null && message.columnsToGet.length)
                    for (var i = 0; i < message.columnsToGet.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.columnsToGet[i]);
                if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                    $root.tablestore.proto.TimeRange.encode(message.timeRange, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxVersions);
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.cacheBlocks);
                if (message.filter != null && message.hasOwnProperty("filter"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.filter);
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.startColumn);
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.endColumn);
                return writer;
            };

            /**
             * Encodes the specified TableInBatchGetRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.TableInBatchGetRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {tablestore.proto.ITableInBatchGetRowRequest} message TableInBatchGetRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchGetRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TableInBatchGetRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TableInBatchGetRowRequest} TableInBatchGetRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchGetRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TableInBatchGetRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        if (!(message.primaryKey && message.primaryKey.length))
                            message.primaryKey = [];
                        message.primaryKey.push(reader.bytes());
                        break;
                    case 3:
                        if (!(message.token && message.token.length))
                            message.token = [];
                        message.token.push(reader.bytes());
                        break;
                    case 4:
                        if (!(message.columnsToGet && message.columnsToGet.length))
                            message.columnsToGet = [];
                        message.columnsToGet.push(reader.string());
                        break;
                    case 5:
                        message.timeRange = $root.tablestore.proto.TimeRange.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.maxVersions = reader.int32();
                        break;
                    case 7:
                        message.cacheBlocks = reader.bool();
                        break;
                    case 8:
                        message.filter = reader.bytes();
                        break;
                    case 9:
                        message.startColumn = reader.string();
                        break;
                    case 10:
                        message.endColumn = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a TableInBatchGetRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TableInBatchGetRowRequest} TableInBatchGetRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchGetRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TableInBatchGetRowRequest message.
             * @function verify
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TableInBatchGetRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (message.primaryKey != null && message.hasOwnProperty("primaryKey")) {
                    if (!Array.isArray(message.primaryKey))
                        return "primaryKey: array expected";
                    for (var i = 0; i < message.primaryKey.length; ++i)
                        if (!(message.primaryKey[i] && typeof message.primaryKey[i].length === "number" || $util.isString(message.primaryKey[i])))
                            return "primaryKey: buffer[] expected";
                }
                if (message.token != null && message.hasOwnProperty("token")) {
                    if (!Array.isArray(message.token))
                        return "token: array expected";
                    for (var i = 0; i < message.token.length; ++i)
                        if (!(message.token[i] && typeof message.token[i].length === "number" || $util.isString(message.token[i])))
                            return "token: buffer[] expected";
                }
                if (message.columnsToGet != null && message.hasOwnProperty("columnsToGet")) {
                    if (!Array.isArray(message.columnsToGet))
                        return "columnsToGet: array expected";
                    for (var i = 0; i < message.columnsToGet.length; ++i)
                        if (!$util.isString(message.columnsToGet[i]))
                            return "columnsToGet: string[] expected";
                }
                if (message.timeRange != null && message.hasOwnProperty("timeRange")) {
                    var error = $root.tablestore.proto.TimeRange.verify(message.timeRange);
                    if (error)
                        return "timeRange." + error;
                }
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    if (!$util.isInteger(message.maxVersions))
                        return "maxVersions: integer expected";
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    if (typeof message.cacheBlocks !== "boolean")
                        return "cacheBlocks: boolean expected";
                if (message.filter != null && message.hasOwnProperty("filter"))
                    if (!(message.filter && typeof message.filter.length === "number" || $util.isString(message.filter)))
                        return "filter: buffer expected";
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    if (!$util.isString(message.startColumn))
                        return "startColumn: string expected";
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    if (!$util.isString(message.endColumn))
                        return "endColumn: string expected";
                return null;
            };

            /**
             * Creates a TableInBatchGetRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TableInBatchGetRowRequest} TableInBatchGetRowRequest
             */
            TableInBatchGetRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TableInBatchGetRowRequest)
                    return object;
                var message = new $root.tablestore.proto.TableInBatchGetRowRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.primaryKey) {
                    if (!Array.isArray(object.primaryKey))
                        throw TypeError(".tablestore.proto.TableInBatchGetRowRequest.primaryKey: array expected");
                    message.primaryKey = [];
                    for (var i = 0; i < object.primaryKey.length; ++i)
                        if (typeof object.primaryKey[i] === "string")
                            $util.base64.decode(object.primaryKey[i], message.primaryKey[i] = $util.newBuffer($util.base64.length(object.primaryKey[i])), 0);
                        else if (object.primaryKey[i].length)
                            message.primaryKey[i] = object.primaryKey[i];
                }
                if (object.token) {
                    if (!Array.isArray(object.token))
                        throw TypeError(".tablestore.proto.TableInBatchGetRowRequest.token: array expected");
                    message.token = [];
                    for (var i = 0; i < object.token.length; ++i)
                        if (typeof object.token[i] === "string")
                            $util.base64.decode(object.token[i], message.token[i] = $util.newBuffer($util.base64.length(object.token[i])), 0);
                        else if (object.token[i].length)
                            message.token[i] = object.token[i];
                }
                if (object.columnsToGet) {
                    if (!Array.isArray(object.columnsToGet))
                        throw TypeError(".tablestore.proto.TableInBatchGetRowRequest.columnsToGet: array expected");
                    message.columnsToGet = [];
                    for (var i = 0; i < object.columnsToGet.length; ++i)
                        message.columnsToGet[i] = String(object.columnsToGet[i]);
                }
                if (object.timeRange != null) {
                    if (typeof object.timeRange !== "object")
                        throw TypeError(".tablestore.proto.TableInBatchGetRowRequest.timeRange: object expected");
                    message.timeRange = $root.tablestore.proto.TimeRange.fromObject(object.timeRange);
                }
                if (object.maxVersions != null)
                    message.maxVersions = object.maxVersions | 0;
                if (object.cacheBlocks != null)
                    message.cacheBlocks = Boolean(object.cacheBlocks);
                if (object.filter != null)
                    if (typeof object.filter === "string")
                        $util.base64.decode(object.filter, message.filter = $util.newBuffer($util.base64.length(object.filter)), 0);
                    else if (object.filter.length)
                        message.filter = object.filter;
                if (object.startColumn != null)
                    message.startColumn = String(object.startColumn);
                if (object.endColumn != null)
                    message.endColumn = String(object.endColumn);
                return message;
            };

            /**
             * Creates a plain object from a TableInBatchGetRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @static
             * @param {tablestore.proto.TableInBatchGetRowRequest} message TableInBatchGetRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TableInBatchGetRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.primaryKey = [];
                    object.token = [];
                    object.columnsToGet = [];
                }
                if (options.defaults) {
                    object.tableName = "";
                    object.timeRange = null;
                    object.maxVersions = 0;
                    object.cacheBlocks = true;
                    if (options.bytes === String)
                        object.filter = "";
                    else {
                        object.filter = [];
                        if (options.bytes !== Array)
                            object.filter = $util.newBuffer(object.filter);
                    }
                    object.startColumn = "";
                    object.endColumn = "";
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.primaryKey && message.primaryKey.length) {
                    object.primaryKey = [];
                    for (var j = 0; j < message.primaryKey.length; ++j)
                        object.primaryKey[j] = options.bytes === String ? $util.base64.encode(message.primaryKey[j], 0, message.primaryKey[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.primaryKey[j]) : message.primaryKey[j];
                }
                if (message.token && message.token.length) {
                    object.token = [];
                    for (var j = 0; j < message.token.length; ++j)
                        object.token[j] = options.bytes === String ? $util.base64.encode(message.token[j], 0, message.token[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.token[j]) : message.token[j];
                }
                if (message.columnsToGet && message.columnsToGet.length) {
                    object.columnsToGet = [];
                    for (var j = 0; j < message.columnsToGet.length; ++j)
                        object.columnsToGet[j] = message.columnsToGet[j];
                }
                if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                    object.timeRange = $root.tablestore.proto.TimeRange.toObject(message.timeRange, options);
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    object.maxVersions = message.maxVersions;
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    object.cacheBlocks = message.cacheBlocks;
                if (message.filter != null && message.hasOwnProperty("filter"))
                    object.filter = options.bytes === String ? $util.base64.encode(message.filter, 0, message.filter.length) : options.bytes === Array ? Array.prototype.slice.call(message.filter) : message.filter;
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    object.startColumn = message.startColumn;
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    object.endColumn = message.endColumn;
                return object;
            };

            /**
             * Converts this TableInBatchGetRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TableInBatchGetRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TableInBatchGetRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TableInBatchGetRowRequest;
        })();

        proto.BatchGetRowRequest = (function() {

            /**
             * Properties of a BatchGetRowRequest.
             * @memberof tablestore.proto
             * @interface IBatchGetRowRequest
             * @property {Array.<tablestore.proto.ITableInBatchGetRowRequest>|null} [tables] BatchGetRowRequest tables
             */

            /**
             * Constructs a new BatchGetRowRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a BatchGetRowRequest.
             * @implements IBatchGetRowRequest
             * @constructor
             * @param {tablestore.proto.IBatchGetRowRequest=} [properties] Properties to set
             */
            function BatchGetRowRequest(properties) {
                this.tables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BatchGetRowRequest tables.
             * @member {Array.<tablestore.proto.ITableInBatchGetRowRequest>} tables
             * @memberof tablestore.proto.BatchGetRowRequest
             * @instance
             */
            BatchGetRowRequest.prototype.tables = $util.emptyArray;

            /**
             * Creates a new BatchGetRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {tablestore.proto.IBatchGetRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.BatchGetRowRequest} BatchGetRowRequest instance
             */
            BatchGetRowRequest.create = function create(properties) {
                return new BatchGetRowRequest(properties);
            };

            /**
             * Encodes the specified BatchGetRowRequest message. Does not implicitly {@link tablestore.proto.BatchGetRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {tablestore.proto.IBatchGetRowRequest} message BatchGetRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchGetRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tables != null && message.tables.length)
                    for (var i = 0; i < message.tables.length; ++i)
                        $root.tablestore.proto.TableInBatchGetRowRequest.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BatchGetRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.BatchGetRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {tablestore.proto.IBatchGetRowRequest} message BatchGetRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchGetRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatchGetRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.BatchGetRowRequest} BatchGetRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchGetRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.BatchGetRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.tablestore.proto.TableInBatchGetRowRequest.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BatchGetRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.BatchGetRowRequest} BatchGetRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchGetRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatchGetRowRequest message.
             * @function verify
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatchGetRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tables != null && message.hasOwnProperty("tables")) {
                    if (!Array.isArray(message.tables))
                        return "tables: array expected";
                    for (var i = 0; i < message.tables.length; ++i) {
                        var error = $root.tablestore.proto.TableInBatchGetRowRequest.verify(message.tables[i]);
                        if (error)
                            return "tables." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BatchGetRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.BatchGetRowRequest} BatchGetRowRequest
             */
            BatchGetRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.BatchGetRowRequest)
                    return object;
                var message = new $root.tablestore.proto.BatchGetRowRequest();
                if (object.tables) {
                    if (!Array.isArray(object.tables))
                        throw TypeError(".tablestore.proto.BatchGetRowRequest.tables: array expected");
                    message.tables = [];
                    for (var i = 0; i < object.tables.length; ++i) {
                        if (typeof object.tables[i] !== "object")
                            throw TypeError(".tablestore.proto.BatchGetRowRequest.tables: object expected");
                        message.tables[i] = $root.tablestore.proto.TableInBatchGetRowRequest.fromObject(object.tables[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BatchGetRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.BatchGetRowRequest
             * @static
             * @param {tablestore.proto.BatchGetRowRequest} message BatchGetRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatchGetRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tables = [];
                if (message.tables && message.tables.length) {
                    object.tables = [];
                    for (var j = 0; j < message.tables.length; ++j)
                        object.tables[j] = $root.tablestore.proto.TableInBatchGetRowRequest.toObject(message.tables[j], options);
                }
                return object;
            };

            /**
             * Converts this BatchGetRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.BatchGetRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatchGetRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BatchGetRowRequest;
        })();

        proto.RowInBatchGetRowResponse = (function() {

            /**
             * Properties of a RowInBatchGetRowResponse.
             * @memberof tablestore.proto
             * @interface IRowInBatchGetRowResponse
             * @property {boolean} isOk RowInBatchGetRowResponse isOk
             * @property {tablestore.proto.IError|null} [error] RowInBatchGetRowResponse error
             * @property {tablestore.proto.IConsumedCapacity|null} [consumed] RowInBatchGetRowResponse consumed
             * @property {Uint8Array|null} [row] RowInBatchGetRowResponse row
             * @property {Uint8Array|null} [nextToken] RowInBatchGetRowResponse nextToken
             */

            /**
             * Constructs a new RowInBatchGetRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a RowInBatchGetRowResponse.
             * @implements IRowInBatchGetRowResponse
             * @constructor
             * @param {tablestore.proto.IRowInBatchGetRowResponse=} [properties] Properties to set
             */
            function RowInBatchGetRowResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RowInBatchGetRowResponse isOk.
             * @member {boolean} isOk
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @instance
             */
            RowInBatchGetRowResponse.prototype.isOk = false;

            /**
             * RowInBatchGetRowResponse error.
             * @member {tablestore.proto.IError|null|undefined} error
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @instance
             */
            RowInBatchGetRowResponse.prototype.error = null;

            /**
             * RowInBatchGetRowResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity|null|undefined} consumed
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @instance
             */
            RowInBatchGetRowResponse.prototype.consumed = null;

            /**
             * RowInBatchGetRowResponse row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @instance
             */
            RowInBatchGetRowResponse.prototype.row = $util.newBuffer([]);

            /**
             * RowInBatchGetRowResponse nextToken.
             * @member {Uint8Array} nextToken
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @instance
             */
            RowInBatchGetRowResponse.prototype.nextToken = $util.newBuffer([]);

            /**
             * Creates a new RowInBatchGetRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.IRowInBatchGetRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.RowInBatchGetRowResponse} RowInBatchGetRowResponse instance
             */
            RowInBatchGetRowResponse.create = function create(properties) {
                return new RowInBatchGetRowResponse(properties);
            };

            /**
             * Encodes the specified RowInBatchGetRowResponse message. Does not implicitly {@link tablestore.proto.RowInBatchGetRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.IRowInBatchGetRowResponse} message RowInBatchGetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RowInBatchGetRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isOk);
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.tablestore.proto.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.row != null && message.hasOwnProperty("row"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.row);
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.nextToken);
                return writer;
            };

            /**
             * Encodes the specified RowInBatchGetRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.RowInBatchGetRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.IRowInBatchGetRowResponse} message RowInBatchGetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RowInBatchGetRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RowInBatchGetRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.RowInBatchGetRowResponse} RowInBatchGetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RowInBatchGetRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.RowInBatchGetRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isOk = reader.bool();
                        break;
                    case 2:
                        message.error = $root.tablestore.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.row = reader.bytes();
                        break;
                    case 5:
                        message.nextToken = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("isOk"))
                    throw $util.ProtocolError("missing required 'isOk'", { instance: message });
                return message;
            };

            /**
             * Decodes a RowInBatchGetRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.RowInBatchGetRowResponse} RowInBatchGetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RowInBatchGetRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RowInBatchGetRowResponse message.
             * @function verify
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RowInBatchGetRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.isOk !== "boolean")
                    return "isOk: boolean expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.tablestore.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.consumed != null && message.hasOwnProperty("consumed")) {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (message.row != null && message.hasOwnProperty("row"))
                    if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                        return "row: buffer expected";
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    if (!(message.nextToken && typeof message.nextToken.length === "number" || $util.isString(message.nextToken)))
                        return "nextToken: buffer expected";
                return null;
            };

            /**
             * Creates a RowInBatchGetRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.RowInBatchGetRowResponse} RowInBatchGetRowResponse
             */
            RowInBatchGetRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.RowInBatchGetRowResponse)
                    return object;
                var message = new $root.tablestore.proto.RowInBatchGetRowResponse();
                if (object.isOk != null)
                    message.isOk = Boolean(object.isOk);
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".tablestore.proto.RowInBatchGetRowResponse.error: object expected");
                    message.error = $root.tablestore.proto.Error.fromObject(object.error);
                }
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.RowInBatchGetRowResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                if (object.nextToken != null)
                    if (typeof object.nextToken === "string")
                        $util.base64.decode(object.nextToken, message.nextToken = $util.newBuffer($util.base64.length(object.nextToken)), 0);
                    else if (object.nextToken.length)
                        message.nextToken = object.nextToken;
                return message;
            };

            /**
             * Creates a plain object from a RowInBatchGetRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.RowInBatchGetRowResponse} message RowInBatchGetRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RowInBatchGetRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.isOk = false;
                    object.error = null;
                    object.consumed = null;
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                    if (options.bytes === String)
                        object.nextToken = "";
                    else {
                        object.nextToken = [];
                        if (options.bytes !== Array)
                            object.nextToken = $util.newBuffer(object.nextToken);
                    }
                }
                if (message.isOk != null && message.hasOwnProperty("isOk"))
                    object.isOk = message.isOk;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.tablestore.proto.Error.toObject(message.error, options);
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    object.nextToken = options.bytes === String ? $util.base64.encode(message.nextToken, 0, message.nextToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextToken) : message.nextToken;
                return object;
            };

            /**
             * Converts this RowInBatchGetRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.RowInBatchGetRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RowInBatchGetRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RowInBatchGetRowResponse;
        })();

        proto.TableInBatchGetRowResponse = (function() {

            /**
             * Properties of a TableInBatchGetRowResponse.
             * @memberof tablestore.proto
             * @interface ITableInBatchGetRowResponse
             * @property {string} tableName TableInBatchGetRowResponse tableName
             * @property {Array.<tablestore.proto.IRowInBatchGetRowResponse>|null} [rows] TableInBatchGetRowResponse rows
             */

            /**
             * Constructs a new TableInBatchGetRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a TableInBatchGetRowResponse.
             * @implements ITableInBatchGetRowResponse
             * @constructor
             * @param {tablestore.proto.ITableInBatchGetRowResponse=} [properties] Properties to set
             */
            function TableInBatchGetRowResponse(properties) {
                this.rows = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableInBatchGetRowResponse tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @instance
             */
            TableInBatchGetRowResponse.prototype.tableName = "";

            /**
             * TableInBatchGetRowResponse rows.
             * @member {Array.<tablestore.proto.IRowInBatchGetRowResponse>} rows
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @instance
             */
            TableInBatchGetRowResponse.prototype.rows = $util.emptyArray;

            /**
             * Creates a new TableInBatchGetRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.ITableInBatchGetRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.TableInBatchGetRowResponse} TableInBatchGetRowResponse instance
             */
            TableInBatchGetRowResponse.create = function create(properties) {
                return new TableInBatchGetRowResponse(properties);
            };

            /**
             * Encodes the specified TableInBatchGetRowResponse message. Does not implicitly {@link tablestore.proto.TableInBatchGetRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.ITableInBatchGetRowResponse} message TableInBatchGetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchGetRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.rows != null && message.rows.length)
                    for (var i = 0; i < message.rows.length; ++i)
                        $root.tablestore.proto.RowInBatchGetRowResponse.encode(message.rows[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TableInBatchGetRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.TableInBatchGetRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.ITableInBatchGetRowResponse} message TableInBatchGetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchGetRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TableInBatchGetRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TableInBatchGetRowResponse} TableInBatchGetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchGetRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TableInBatchGetRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        message.rows.push($root.tablestore.proto.RowInBatchGetRowResponse.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a TableInBatchGetRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TableInBatchGetRowResponse} TableInBatchGetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchGetRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TableInBatchGetRowResponse message.
             * @function verify
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TableInBatchGetRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (message.rows != null && message.hasOwnProperty("rows")) {
                    if (!Array.isArray(message.rows))
                        return "rows: array expected";
                    for (var i = 0; i < message.rows.length; ++i) {
                        var error = $root.tablestore.proto.RowInBatchGetRowResponse.verify(message.rows[i]);
                        if (error)
                            return "rows." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TableInBatchGetRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TableInBatchGetRowResponse} TableInBatchGetRowResponse
             */
            TableInBatchGetRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TableInBatchGetRowResponse)
                    return object;
                var message = new $root.tablestore.proto.TableInBatchGetRowResponse();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.rows) {
                    if (!Array.isArray(object.rows))
                        throw TypeError(".tablestore.proto.TableInBatchGetRowResponse.rows: array expected");
                    message.rows = [];
                    for (var i = 0; i < object.rows.length; ++i) {
                        if (typeof object.rows[i] !== "object")
                            throw TypeError(".tablestore.proto.TableInBatchGetRowResponse.rows: object expected");
                        message.rows[i] = $root.tablestore.proto.RowInBatchGetRowResponse.fromObject(object.rows[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TableInBatchGetRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @static
             * @param {tablestore.proto.TableInBatchGetRowResponse} message TableInBatchGetRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TableInBatchGetRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rows = [];
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.rows && message.rows.length) {
                    object.rows = [];
                    for (var j = 0; j < message.rows.length; ++j)
                        object.rows[j] = $root.tablestore.proto.RowInBatchGetRowResponse.toObject(message.rows[j], options);
                }
                return object;
            };

            /**
             * Converts this TableInBatchGetRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TableInBatchGetRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TableInBatchGetRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TableInBatchGetRowResponse;
        })();

        proto.BatchGetRowResponse = (function() {

            /**
             * Properties of a BatchGetRowResponse.
             * @memberof tablestore.proto
             * @interface IBatchGetRowResponse
             * @property {Array.<tablestore.proto.ITableInBatchGetRowResponse>|null} [tables] BatchGetRowResponse tables
             */

            /**
             * Constructs a new BatchGetRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a BatchGetRowResponse.
             * @implements IBatchGetRowResponse
             * @constructor
             * @param {tablestore.proto.IBatchGetRowResponse=} [properties] Properties to set
             */
            function BatchGetRowResponse(properties) {
                this.tables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BatchGetRowResponse tables.
             * @member {Array.<tablestore.proto.ITableInBatchGetRowResponse>} tables
             * @memberof tablestore.proto.BatchGetRowResponse
             * @instance
             */
            BatchGetRowResponse.prototype.tables = $util.emptyArray;

            /**
             * Creates a new BatchGetRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {tablestore.proto.IBatchGetRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.BatchGetRowResponse} BatchGetRowResponse instance
             */
            BatchGetRowResponse.create = function create(properties) {
                return new BatchGetRowResponse(properties);
            };

            /**
             * Encodes the specified BatchGetRowResponse message. Does not implicitly {@link tablestore.proto.BatchGetRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {tablestore.proto.IBatchGetRowResponse} message BatchGetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchGetRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tables != null && message.tables.length)
                    for (var i = 0; i < message.tables.length; ++i)
                        $root.tablestore.proto.TableInBatchGetRowResponse.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BatchGetRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.BatchGetRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {tablestore.proto.IBatchGetRowResponse} message BatchGetRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchGetRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatchGetRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.BatchGetRowResponse} BatchGetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchGetRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.BatchGetRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.tablestore.proto.TableInBatchGetRowResponse.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BatchGetRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.BatchGetRowResponse} BatchGetRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchGetRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatchGetRowResponse message.
             * @function verify
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatchGetRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tables != null && message.hasOwnProperty("tables")) {
                    if (!Array.isArray(message.tables))
                        return "tables: array expected";
                    for (var i = 0; i < message.tables.length; ++i) {
                        var error = $root.tablestore.proto.TableInBatchGetRowResponse.verify(message.tables[i]);
                        if (error)
                            return "tables." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BatchGetRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.BatchGetRowResponse} BatchGetRowResponse
             */
            BatchGetRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.BatchGetRowResponse)
                    return object;
                var message = new $root.tablestore.proto.BatchGetRowResponse();
                if (object.tables) {
                    if (!Array.isArray(object.tables))
                        throw TypeError(".tablestore.proto.BatchGetRowResponse.tables: array expected");
                    message.tables = [];
                    for (var i = 0; i < object.tables.length; ++i) {
                        if (typeof object.tables[i] !== "object")
                            throw TypeError(".tablestore.proto.BatchGetRowResponse.tables: object expected");
                        message.tables[i] = $root.tablestore.proto.TableInBatchGetRowResponse.fromObject(object.tables[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BatchGetRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.BatchGetRowResponse
             * @static
             * @param {tablestore.proto.BatchGetRowResponse} message BatchGetRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatchGetRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tables = [];
                if (message.tables && message.tables.length) {
                    object.tables = [];
                    for (var j = 0; j < message.tables.length; ++j)
                        object.tables[j] = $root.tablestore.proto.TableInBatchGetRowResponse.toObject(message.tables[j], options);
                }
                return object;
            };

            /**
             * Converts this BatchGetRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.BatchGetRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatchGetRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BatchGetRowResponse;
        })();

        /**
         * OperationType enum.
         * @name tablestore.proto.OperationType
         * @enum {string}
         * @property {number} PUT=1 PUT value
         * @property {number} UPDATE=2 UPDATE value
         * @property {number} DELETE=3 DELETE value
         */
        proto.OperationType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "PUT"] = 1;
            values[valuesById[2] = "UPDATE"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            return values;
        })();

        proto.RowInBatchWriteRowRequest = (function() {

            /**
             * Properties of a RowInBatchWriteRowRequest.
             * @memberof tablestore.proto
             * @interface IRowInBatchWriteRowRequest
             * @property {tablestore.proto.OperationType} type RowInBatchWriteRowRequest type
             * @property {Uint8Array} rowChange RowInBatchWriteRowRequest rowChange
             * @property {tablestore.proto.ICondition} condition RowInBatchWriteRowRequest condition
             * @property {tablestore.proto.IReturnContent|null} [returnContent] RowInBatchWriteRowRequest returnContent
             */

            /**
             * Constructs a new RowInBatchWriteRowRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a RowInBatchWriteRowRequest.
             * @implements IRowInBatchWriteRowRequest
             * @constructor
             * @param {tablestore.proto.IRowInBatchWriteRowRequest=} [properties] Properties to set
             */
            function RowInBatchWriteRowRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RowInBatchWriteRowRequest type.
             * @member {tablestore.proto.OperationType} type
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @instance
             */
            RowInBatchWriteRowRequest.prototype.type = 1;

            /**
             * RowInBatchWriteRowRequest rowChange.
             * @member {Uint8Array} rowChange
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @instance
             */
            RowInBatchWriteRowRequest.prototype.rowChange = $util.newBuffer([]);

            /**
             * RowInBatchWriteRowRequest condition.
             * @member {tablestore.proto.ICondition} condition
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @instance
             */
            RowInBatchWriteRowRequest.prototype.condition = null;

            /**
             * RowInBatchWriteRowRequest returnContent.
             * @member {tablestore.proto.IReturnContent|null|undefined} returnContent
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @instance
             */
            RowInBatchWriteRowRequest.prototype.returnContent = null;

            /**
             * Creates a new RowInBatchWriteRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.IRowInBatchWriteRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.RowInBatchWriteRowRequest} RowInBatchWriteRowRequest instance
             */
            RowInBatchWriteRowRequest.create = function create(properties) {
                return new RowInBatchWriteRowRequest(properties);
            };

            /**
             * Encodes the specified RowInBatchWriteRowRequest message. Does not implicitly {@link tablestore.proto.RowInBatchWriteRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.IRowInBatchWriteRowRequest} message RowInBatchWriteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RowInBatchWriteRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.rowChange);
                $root.tablestore.proto.Condition.encode(message.condition, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    $root.tablestore.proto.ReturnContent.encode(message.returnContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RowInBatchWriteRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.RowInBatchWriteRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.IRowInBatchWriteRowRequest} message RowInBatchWriteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RowInBatchWriteRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RowInBatchWriteRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.RowInBatchWriteRowRequest} RowInBatchWriteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RowInBatchWriteRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.RowInBatchWriteRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.rowChange = reader.bytes();
                        break;
                    case 3:
                        message.condition = $root.tablestore.proto.Condition.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.returnContent = $root.tablestore.proto.ReturnContent.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("rowChange"))
                    throw $util.ProtocolError("missing required 'rowChange'", { instance: message });
                if (!message.hasOwnProperty("condition"))
                    throw $util.ProtocolError("missing required 'condition'", { instance: message });
                return message;
            };

            /**
             * Decodes a RowInBatchWriteRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.RowInBatchWriteRowRequest} RowInBatchWriteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RowInBatchWriteRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RowInBatchWriteRowRequest message.
             * @function verify
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RowInBatchWriteRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (!(message.rowChange && typeof message.rowChange.length === "number" || $util.isString(message.rowChange)))
                    return "rowChange: buffer expected";
                {
                    var error = $root.tablestore.proto.Condition.verify(message.condition);
                    if (error)
                        return "condition." + error;
                }
                if (message.returnContent != null && message.hasOwnProperty("returnContent")) {
                    var error = $root.tablestore.proto.ReturnContent.verify(message.returnContent);
                    if (error)
                        return "returnContent." + error;
                }
                return null;
            };

            /**
             * Creates a RowInBatchWriteRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.RowInBatchWriteRowRequest} RowInBatchWriteRowRequest
             */
            RowInBatchWriteRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.RowInBatchWriteRowRequest)
                    return object;
                var message = new $root.tablestore.proto.RowInBatchWriteRowRequest();
                switch (object.type) {
                case "PUT":
                case 1:
                    message.type = 1;
                    break;
                case "UPDATE":
                case 2:
                    message.type = 2;
                    break;
                case "DELETE":
                case 3:
                    message.type = 3;
                    break;
                }
                if (object.rowChange != null)
                    if (typeof object.rowChange === "string")
                        $util.base64.decode(object.rowChange, message.rowChange = $util.newBuffer($util.base64.length(object.rowChange)), 0);
                    else if (object.rowChange.length)
                        message.rowChange = object.rowChange;
                if (object.condition != null) {
                    if (typeof object.condition !== "object")
                        throw TypeError(".tablestore.proto.RowInBatchWriteRowRequest.condition: object expected");
                    message.condition = $root.tablestore.proto.Condition.fromObject(object.condition);
                }
                if (object.returnContent != null) {
                    if (typeof object.returnContent !== "object")
                        throw TypeError(".tablestore.proto.RowInBatchWriteRowRequest.returnContent: object expected");
                    message.returnContent = $root.tablestore.proto.ReturnContent.fromObject(object.returnContent);
                }
                return message;
            };

            /**
             * Creates a plain object from a RowInBatchWriteRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.RowInBatchWriteRowRequest} message RowInBatchWriteRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RowInBatchWriteRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "PUT" : 1;
                    if (options.bytes === String)
                        object.rowChange = "";
                    else {
                        object.rowChange = [];
                        if (options.bytes !== Array)
                            object.rowChange = $util.newBuffer(object.rowChange);
                    }
                    object.condition = null;
                    object.returnContent = null;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.tablestore.proto.OperationType[message.type] : message.type;
                if (message.rowChange != null && message.hasOwnProperty("rowChange"))
                    object.rowChange = options.bytes === String ? $util.base64.encode(message.rowChange, 0, message.rowChange.length) : options.bytes === Array ? Array.prototype.slice.call(message.rowChange) : message.rowChange;
                if (message.condition != null && message.hasOwnProperty("condition"))
                    object.condition = $root.tablestore.proto.Condition.toObject(message.condition, options);
                if (message.returnContent != null && message.hasOwnProperty("returnContent"))
                    object.returnContent = $root.tablestore.proto.ReturnContent.toObject(message.returnContent, options);
                return object;
            };

            /**
             * Converts this RowInBatchWriteRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.RowInBatchWriteRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RowInBatchWriteRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RowInBatchWriteRowRequest;
        })();

        proto.TableInBatchWriteRowRequest = (function() {

            /**
             * Properties of a TableInBatchWriteRowRequest.
             * @memberof tablestore.proto
             * @interface ITableInBatchWriteRowRequest
             * @property {string} tableName TableInBatchWriteRowRequest tableName
             * @property {Array.<tablestore.proto.IRowInBatchWriteRowRequest>|null} [rows] TableInBatchWriteRowRequest rows
             */

            /**
             * Constructs a new TableInBatchWriteRowRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a TableInBatchWriteRowRequest.
             * @implements ITableInBatchWriteRowRequest
             * @constructor
             * @param {tablestore.proto.ITableInBatchWriteRowRequest=} [properties] Properties to set
             */
            function TableInBatchWriteRowRequest(properties) {
                this.rows = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableInBatchWriteRowRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @instance
             */
            TableInBatchWriteRowRequest.prototype.tableName = "";

            /**
             * TableInBatchWriteRowRequest rows.
             * @member {Array.<tablestore.proto.IRowInBatchWriteRowRequest>} rows
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @instance
             */
            TableInBatchWriteRowRequest.prototype.rows = $util.emptyArray;

            /**
             * Creates a new TableInBatchWriteRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.ITableInBatchWriteRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.TableInBatchWriteRowRequest} TableInBatchWriteRowRequest instance
             */
            TableInBatchWriteRowRequest.create = function create(properties) {
                return new TableInBatchWriteRowRequest(properties);
            };

            /**
             * Encodes the specified TableInBatchWriteRowRequest message. Does not implicitly {@link tablestore.proto.TableInBatchWriteRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.ITableInBatchWriteRowRequest} message TableInBatchWriteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchWriteRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.rows != null && message.rows.length)
                    for (var i = 0; i < message.rows.length; ++i)
                        $root.tablestore.proto.RowInBatchWriteRowRequest.encode(message.rows[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TableInBatchWriteRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.TableInBatchWriteRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.ITableInBatchWriteRowRequest} message TableInBatchWriteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchWriteRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TableInBatchWriteRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TableInBatchWriteRowRequest} TableInBatchWriteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchWriteRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TableInBatchWriteRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        message.rows.push($root.tablestore.proto.RowInBatchWriteRowRequest.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a TableInBatchWriteRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TableInBatchWriteRowRequest} TableInBatchWriteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchWriteRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TableInBatchWriteRowRequest message.
             * @function verify
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TableInBatchWriteRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (message.rows != null && message.hasOwnProperty("rows")) {
                    if (!Array.isArray(message.rows))
                        return "rows: array expected";
                    for (var i = 0; i < message.rows.length; ++i) {
                        var error = $root.tablestore.proto.RowInBatchWriteRowRequest.verify(message.rows[i]);
                        if (error)
                            return "rows." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TableInBatchWriteRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TableInBatchWriteRowRequest} TableInBatchWriteRowRequest
             */
            TableInBatchWriteRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TableInBatchWriteRowRequest)
                    return object;
                var message = new $root.tablestore.proto.TableInBatchWriteRowRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.rows) {
                    if (!Array.isArray(object.rows))
                        throw TypeError(".tablestore.proto.TableInBatchWriteRowRequest.rows: array expected");
                    message.rows = [];
                    for (var i = 0; i < object.rows.length; ++i) {
                        if (typeof object.rows[i] !== "object")
                            throw TypeError(".tablestore.proto.TableInBatchWriteRowRequest.rows: object expected");
                        message.rows[i] = $root.tablestore.proto.RowInBatchWriteRowRequest.fromObject(object.rows[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TableInBatchWriteRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @static
             * @param {tablestore.proto.TableInBatchWriteRowRequest} message TableInBatchWriteRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TableInBatchWriteRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rows = [];
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.rows && message.rows.length) {
                    object.rows = [];
                    for (var j = 0; j < message.rows.length; ++j)
                        object.rows[j] = $root.tablestore.proto.RowInBatchWriteRowRequest.toObject(message.rows[j], options);
                }
                return object;
            };

            /**
             * Converts this TableInBatchWriteRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TableInBatchWriteRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TableInBatchWriteRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TableInBatchWriteRowRequest;
        })();

        proto.BatchWriteRowRequest = (function() {

            /**
             * Properties of a BatchWriteRowRequest.
             * @memberof tablestore.proto
             * @interface IBatchWriteRowRequest
             * @property {Array.<tablestore.proto.ITableInBatchWriteRowRequest>|null} [tables] BatchWriteRowRequest tables
             * @property {string|null} [transactionId] BatchWriteRowRequest transactionId
             */

            /**
             * Constructs a new BatchWriteRowRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a BatchWriteRowRequest.
             * @implements IBatchWriteRowRequest
             * @constructor
             * @param {tablestore.proto.IBatchWriteRowRequest=} [properties] Properties to set
             */
            function BatchWriteRowRequest(properties) {
                this.tables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BatchWriteRowRequest tables.
             * @member {Array.<tablestore.proto.ITableInBatchWriteRowRequest>} tables
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @instance
             */
            BatchWriteRowRequest.prototype.tables = $util.emptyArray;

            /**
             * BatchWriteRowRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @instance
             */
            BatchWriteRowRequest.prototype.transactionId = "";

            /**
             * Creates a new BatchWriteRowRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {tablestore.proto.IBatchWriteRowRequest=} [properties] Properties to set
             * @returns {tablestore.proto.BatchWriteRowRequest} BatchWriteRowRequest instance
             */
            BatchWriteRowRequest.create = function create(properties) {
                return new BatchWriteRowRequest(properties);
            };

            /**
             * Encodes the specified BatchWriteRowRequest message. Does not implicitly {@link tablestore.proto.BatchWriteRowRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {tablestore.proto.IBatchWriteRowRequest} message BatchWriteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchWriteRowRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tables != null && message.tables.length)
                    for (var i = 0; i < message.tables.length; ++i)
                        $root.tablestore.proto.TableInBatchWriteRowRequest.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified BatchWriteRowRequest message, length delimited. Does not implicitly {@link tablestore.proto.BatchWriteRowRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {tablestore.proto.IBatchWriteRowRequest} message BatchWriteRowRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchWriteRowRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatchWriteRowRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.BatchWriteRowRequest} BatchWriteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchWriteRowRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.BatchWriteRowRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.tablestore.proto.TableInBatchWriteRowRequest.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BatchWriteRowRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.BatchWriteRowRequest} BatchWriteRowRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchWriteRowRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatchWriteRowRequest message.
             * @function verify
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatchWriteRowRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tables != null && message.hasOwnProperty("tables")) {
                    if (!Array.isArray(message.tables))
                        return "tables: array expected";
                    for (var i = 0; i < message.tables.length; ++i) {
                        var error = $root.tablestore.proto.TableInBatchWriteRowRequest.verify(message.tables[i]);
                        if (error)
                            return "tables." + error;
                    }
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                return null;
            };

            /**
             * Creates a BatchWriteRowRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.BatchWriteRowRequest} BatchWriteRowRequest
             */
            BatchWriteRowRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.BatchWriteRowRequest)
                    return object;
                var message = new $root.tablestore.proto.BatchWriteRowRequest();
                if (object.tables) {
                    if (!Array.isArray(object.tables))
                        throw TypeError(".tablestore.proto.BatchWriteRowRequest.tables: array expected");
                    message.tables = [];
                    for (var i = 0; i < object.tables.length; ++i) {
                        if (typeof object.tables[i] !== "object")
                            throw TypeError(".tablestore.proto.BatchWriteRowRequest.tables: object expected");
                        message.tables[i] = $root.tablestore.proto.TableInBatchWriteRowRequest.fromObject(object.tables[i]);
                    }
                }
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from a BatchWriteRowRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @static
             * @param {tablestore.proto.BatchWriteRowRequest} message BatchWriteRowRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatchWriteRowRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tables = [];
                if (options.defaults)
                    object.transactionId = "";
                if (message.tables && message.tables.length) {
                    object.tables = [];
                    for (var j = 0; j < message.tables.length; ++j)
                        object.tables[j] = $root.tablestore.proto.TableInBatchWriteRowRequest.toObject(message.tables[j], options);
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this BatchWriteRowRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.BatchWriteRowRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatchWriteRowRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BatchWriteRowRequest;
        })();

        proto.RowInBatchWriteRowResponse = (function() {

            /**
             * Properties of a RowInBatchWriteRowResponse.
             * @memberof tablestore.proto
             * @interface IRowInBatchWriteRowResponse
             * @property {boolean} isOk RowInBatchWriteRowResponse isOk
             * @property {tablestore.proto.IError|null} [error] RowInBatchWriteRowResponse error
             * @property {tablestore.proto.IConsumedCapacity|null} [consumed] RowInBatchWriteRowResponse consumed
             * @property {Uint8Array|null} [row] RowInBatchWriteRowResponse row
             */

            /**
             * Constructs a new RowInBatchWriteRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a RowInBatchWriteRowResponse.
             * @implements IRowInBatchWriteRowResponse
             * @constructor
             * @param {tablestore.proto.IRowInBatchWriteRowResponse=} [properties] Properties to set
             */
            function RowInBatchWriteRowResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RowInBatchWriteRowResponse isOk.
             * @member {boolean} isOk
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @instance
             */
            RowInBatchWriteRowResponse.prototype.isOk = false;

            /**
             * RowInBatchWriteRowResponse error.
             * @member {tablestore.proto.IError|null|undefined} error
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @instance
             */
            RowInBatchWriteRowResponse.prototype.error = null;

            /**
             * RowInBatchWriteRowResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity|null|undefined} consumed
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @instance
             */
            RowInBatchWriteRowResponse.prototype.consumed = null;

            /**
             * RowInBatchWriteRowResponse row.
             * @member {Uint8Array} row
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @instance
             */
            RowInBatchWriteRowResponse.prototype.row = $util.newBuffer([]);

            /**
             * Creates a new RowInBatchWriteRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.IRowInBatchWriteRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.RowInBatchWriteRowResponse} RowInBatchWriteRowResponse instance
             */
            RowInBatchWriteRowResponse.create = function create(properties) {
                return new RowInBatchWriteRowResponse(properties);
            };

            /**
             * Encodes the specified RowInBatchWriteRowResponse message. Does not implicitly {@link tablestore.proto.RowInBatchWriteRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.IRowInBatchWriteRowResponse} message RowInBatchWriteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RowInBatchWriteRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isOk);
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.tablestore.proto.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.row != null && message.hasOwnProperty("row"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.row);
                return writer;
            };

            /**
             * Encodes the specified RowInBatchWriteRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.RowInBatchWriteRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.IRowInBatchWriteRowResponse} message RowInBatchWriteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RowInBatchWriteRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RowInBatchWriteRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.RowInBatchWriteRowResponse} RowInBatchWriteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RowInBatchWriteRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.RowInBatchWriteRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isOk = reader.bool();
                        break;
                    case 2:
                        message.error = $root.tablestore.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.row = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("isOk"))
                    throw $util.ProtocolError("missing required 'isOk'", { instance: message });
                return message;
            };

            /**
             * Decodes a RowInBatchWriteRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.RowInBatchWriteRowResponse} RowInBatchWriteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RowInBatchWriteRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RowInBatchWriteRowResponse message.
             * @function verify
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RowInBatchWriteRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.isOk !== "boolean")
                    return "isOk: boolean expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.tablestore.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.consumed != null && message.hasOwnProperty("consumed")) {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (message.row != null && message.hasOwnProperty("row"))
                    if (!(message.row && typeof message.row.length === "number" || $util.isString(message.row)))
                        return "row: buffer expected";
                return null;
            };

            /**
             * Creates a RowInBatchWriteRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.RowInBatchWriteRowResponse} RowInBatchWriteRowResponse
             */
            RowInBatchWriteRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.RowInBatchWriteRowResponse)
                    return object;
                var message = new $root.tablestore.proto.RowInBatchWriteRowResponse();
                if (object.isOk != null)
                    message.isOk = Boolean(object.isOk);
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".tablestore.proto.RowInBatchWriteRowResponse.error: object expected");
                    message.error = $root.tablestore.proto.Error.fromObject(object.error);
                }
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.RowInBatchWriteRowResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.row != null)
                    if (typeof object.row === "string")
                        $util.base64.decode(object.row, message.row = $util.newBuffer($util.base64.length(object.row)), 0);
                    else if (object.row.length)
                        message.row = object.row;
                return message;
            };

            /**
             * Creates a plain object from a RowInBatchWriteRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.RowInBatchWriteRowResponse} message RowInBatchWriteRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RowInBatchWriteRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.isOk = false;
                    object.error = null;
                    object.consumed = null;
                    if (options.bytes === String)
                        object.row = "";
                    else {
                        object.row = [];
                        if (options.bytes !== Array)
                            object.row = $util.newBuffer(object.row);
                    }
                }
                if (message.isOk != null && message.hasOwnProperty("isOk"))
                    object.isOk = message.isOk;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.tablestore.proto.Error.toObject(message.error, options);
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.row != null && message.hasOwnProperty("row"))
                    object.row = options.bytes === String ? $util.base64.encode(message.row, 0, message.row.length) : options.bytes === Array ? Array.prototype.slice.call(message.row) : message.row;
                return object;
            };

            /**
             * Converts this RowInBatchWriteRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.RowInBatchWriteRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RowInBatchWriteRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RowInBatchWriteRowResponse;
        })();

        proto.TableInBatchWriteRowResponse = (function() {

            /**
             * Properties of a TableInBatchWriteRowResponse.
             * @memberof tablestore.proto
             * @interface ITableInBatchWriteRowResponse
             * @property {string} tableName TableInBatchWriteRowResponse tableName
             * @property {Array.<tablestore.proto.IRowInBatchWriteRowResponse>|null} [rows] TableInBatchWriteRowResponse rows
             */

            /**
             * Constructs a new TableInBatchWriteRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a TableInBatchWriteRowResponse.
             * @implements ITableInBatchWriteRowResponse
             * @constructor
             * @param {tablestore.proto.ITableInBatchWriteRowResponse=} [properties] Properties to set
             */
            function TableInBatchWriteRowResponse(properties) {
                this.rows = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableInBatchWriteRowResponse tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @instance
             */
            TableInBatchWriteRowResponse.prototype.tableName = "";

            /**
             * TableInBatchWriteRowResponse rows.
             * @member {Array.<tablestore.proto.IRowInBatchWriteRowResponse>} rows
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @instance
             */
            TableInBatchWriteRowResponse.prototype.rows = $util.emptyArray;

            /**
             * Creates a new TableInBatchWriteRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.ITableInBatchWriteRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.TableInBatchWriteRowResponse} TableInBatchWriteRowResponse instance
             */
            TableInBatchWriteRowResponse.create = function create(properties) {
                return new TableInBatchWriteRowResponse(properties);
            };

            /**
             * Encodes the specified TableInBatchWriteRowResponse message. Does not implicitly {@link tablestore.proto.TableInBatchWriteRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.ITableInBatchWriteRowResponse} message TableInBatchWriteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchWriteRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.rows != null && message.rows.length)
                    for (var i = 0; i < message.rows.length; ++i)
                        $root.tablestore.proto.RowInBatchWriteRowResponse.encode(message.rows[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TableInBatchWriteRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.TableInBatchWriteRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.ITableInBatchWriteRowResponse} message TableInBatchWriteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TableInBatchWriteRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TableInBatchWriteRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.TableInBatchWriteRowResponse} TableInBatchWriteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchWriteRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.TableInBatchWriteRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        message.rows.push($root.tablestore.proto.RowInBatchWriteRowResponse.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                return message;
            };

            /**
             * Decodes a TableInBatchWriteRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.TableInBatchWriteRowResponse} TableInBatchWriteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableInBatchWriteRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TableInBatchWriteRowResponse message.
             * @function verify
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TableInBatchWriteRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (message.rows != null && message.hasOwnProperty("rows")) {
                    if (!Array.isArray(message.rows))
                        return "rows: array expected";
                    for (var i = 0; i < message.rows.length; ++i) {
                        var error = $root.tablestore.proto.RowInBatchWriteRowResponse.verify(message.rows[i]);
                        if (error)
                            return "rows." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TableInBatchWriteRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.TableInBatchWriteRowResponse} TableInBatchWriteRowResponse
             */
            TableInBatchWriteRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.TableInBatchWriteRowResponse)
                    return object;
                var message = new $root.tablestore.proto.TableInBatchWriteRowResponse();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.rows) {
                    if (!Array.isArray(object.rows))
                        throw TypeError(".tablestore.proto.TableInBatchWriteRowResponse.rows: array expected");
                    message.rows = [];
                    for (var i = 0; i < object.rows.length; ++i) {
                        if (typeof object.rows[i] !== "object")
                            throw TypeError(".tablestore.proto.TableInBatchWriteRowResponse.rows: object expected");
                        message.rows[i] = $root.tablestore.proto.RowInBatchWriteRowResponse.fromObject(object.rows[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TableInBatchWriteRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @static
             * @param {tablestore.proto.TableInBatchWriteRowResponse} message TableInBatchWriteRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TableInBatchWriteRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rows = [];
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.rows && message.rows.length) {
                    object.rows = [];
                    for (var j = 0; j < message.rows.length; ++j)
                        object.rows[j] = $root.tablestore.proto.RowInBatchWriteRowResponse.toObject(message.rows[j], options);
                }
                return object;
            };

            /**
             * Converts this TableInBatchWriteRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.TableInBatchWriteRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TableInBatchWriteRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TableInBatchWriteRowResponse;
        })();

        proto.BatchWriteRowResponse = (function() {

            /**
             * Properties of a BatchWriteRowResponse.
             * @memberof tablestore.proto
             * @interface IBatchWriteRowResponse
             * @property {Array.<tablestore.proto.ITableInBatchWriteRowResponse>|null} [tables] BatchWriteRowResponse tables
             */

            /**
             * Constructs a new BatchWriteRowResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a BatchWriteRowResponse.
             * @implements IBatchWriteRowResponse
             * @constructor
             * @param {tablestore.proto.IBatchWriteRowResponse=} [properties] Properties to set
             */
            function BatchWriteRowResponse(properties) {
                this.tables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BatchWriteRowResponse tables.
             * @member {Array.<tablestore.proto.ITableInBatchWriteRowResponse>} tables
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @instance
             */
            BatchWriteRowResponse.prototype.tables = $util.emptyArray;

            /**
             * Creates a new BatchWriteRowResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {tablestore.proto.IBatchWriteRowResponse=} [properties] Properties to set
             * @returns {tablestore.proto.BatchWriteRowResponse} BatchWriteRowResponse instance
             */
            BatchWriteRowResponse.create = function create(properties) {
                return new BatchWriteRowResponse(properties);
            };

            /**
             * Encodes the specified BatchWriteRowResponse message. Does not implicitly {@link tablestore.proto.BatchWriteRowResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {tablestore.proto.IBatchWriteRowResponse} message BatchWriteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchWriteRowResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tables != null && message.tables.length)
                    for (var i = 0; i < message.tables.length; ++i)
                        $root.tablestore.proto.TableInBatchWriteRowResponse.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BatchWriteRowResponse message, length delimited. Does not implicitly {@link tablestore.proto.BatchWriteRowResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {tablestore.proto.IBatchWriteRowResponse} message BatchWriteRowResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatchWriteRowResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatchWriteRowResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.BatchWriteRowResponse} BatchWriteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchWriteRowResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.BatchWriteRowResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.tablestore.proto.TableInBatchWriteRowResponse.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BatchWriteRowResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.BatchWriteRowResponse} BatchWriteRowResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatchWriteRowResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatchWriteRowResponse message.
             * @function verify
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatchWriteRowResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tables != null && message.hasOwnProperty("tables")) {
                    if (!Array.isArray(message.tables))
                        return "tables: array expected";
                    for (var i = 0; i < message.tables.length; ++i) {
                        var error = $root.tablestore.proto.TableInBatchWriteRowResponse.verify(message.tables[i]);
                        if (error)
                            return "tables." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BatchWriteRowResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.BatchWriteRowResponse} BatchWriteRowResponse
             */
            BatchWriteRowResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.BatchWriteRowResponse)
                    return object;
                var message = new $root.tablestore.proto.BatchWriteRowResponse();
                if (object.tables) {
                    if (!Array.isArray(object.tables))
                        throw TypeError(".tablestore.proto.BatchWriteRowResponse.tables: array expected");
                    message.tables = [];
                    for (var i = 0; i < object.tables.length; ++i) {
                        if (typeof object.tables[i] !== "object")
                            throw TypeError(".tablestore.proto.BatchWriteRowResponse.tables: object expected");
                        message.tables[i] = $root.tablestore.proto.TableInBatchWriteRowResponse.fromObject(object.tables[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BatchWriteRowResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @static
             * @param {tablestore.proto.BatchWriteRowResponse} message BatchWriteRowResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatchWriteRowResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tables = [];
                if (message.tables && message.tables.length) {
                    object.tables = [];
                    for (var j = 0; j < message.tables.length; ++j)
                        object.tables[j] = $root.tablestore.proto.TableInBatchWriteRowResponse.toObject(message.tables[j], options);
                }
                return object;
            };

            /**
             * Converts this BatchWriteRowResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.BatchWriteRowResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatchWriteRowResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BatchWriteRowResponse;
        })();

        /**
         * Direction enum.
         * @name tablestore.proto.Direction
         * @enum {string}
         * @property {number} FORWARD=0 FORWARD value
         * @property {number} BACKWARD=1 BACKWARD value
         */
        proto.Direction = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FORWARD"] = 0;
            values[valuesById[1] = "BACKWARD"] = 1;
            return values;
        })();

        proto.GetRangeRequest = (function() {

            /**
             * Properties of a GetRangeRequest.
             * @memberof tablestore.proto
             * @interface IGetRangeRequest
             * @property {string} tableName GetRangeRequest tableName
             * @property {tablestore.proto.Direction} direction GetRangeRequest direction
             * @property {Array.<string>|null} [columnsToGet] GetRangeRequest columnsToGet
             * @property {tablestore.proto.ITimeRange|null} [timeRange] GetRangeRequest timeRange
             * @property {number|null} [maxVersions] GetRangeRequest maxVersions
             * @property {number|null} [limit] GetRangeRequest limit
             * @property {Uint8Array} inclusiveStartPrimaryKey GetRangeRequest inclusiveStartPrimaryKey
             * @property {Uint8Array} exclusiveEndPrimaryKey GetRangeRequest exclusiveEndPrimaryKey
             * @property {boolean|null} [cacheBlocks] GetRangeRequest cacheBlocks
             * @property {Uint8Array|null} [filter] GetRangeRequest filter
             * @property {string|null} [startColumn] GetRangeRequest startColumn
             * @property {string|null} [endColumn] GetRangeRequest endColumn
             * @property {Uint8Array|null} [token] GetRangeRequest token
             * @property {string|null} [transactionId] GetRangeRequest transactionId
             * @property {tablestore.proto.DataBlockType|null} [dataBlockTypeHint] GetRangeRequest dataBlockTypeHint
             * @property {boolean|null} [returnEntirePrimaryKeys] GetRangeRequest returnEntirePrimaryKeys
             * @property {tablestore.proto.CompressType|null} [compressTypeHint] GetRangeRequest compressTypeHint
             */

            /**
             * Constructs a new GetRangeRequest.
             * @memberof tablestore.proto
             * @classdesc HBase支持以下参数：
             * 1. TimeRange或指定time
             * 2. Filter（根据列值或列名来过滤）
             * 我们只支持给同版本的选择条件。
             * @implements IGetRangeRequest
             * @constructor
             * @param {tablestore.proto.IGetRangeRequest=} [properties] Properties to set
             */
            function GetRangeRequest(properties) {
                this.columnsToGet = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetRangeRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.tableName = "";

            /**
             * GetRangeRequest direction.
             * @member {tablestore.proto.Direction} direction
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.direction = 0;

            /**
             * GetRangeRequest columnsToGet.
             * @member {Array.<string>} columnsToGet
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.columnsToGet = $util.emptyArray;

            /**
             * GetRangeRequest timeRange.
             * @member {tablestore.proto.ITimeRange|null|undefined} timeRange
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.timeRange = null;

            /**
             * GetRangeRequest maxVersions.
             * @member {number} maxVersions
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.maxVersions = 0;

            /**
             * GetRangeRequest limit.
             * @member {number} limit
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.limit = 0;

            /**
             * GetRangeRequest inclusiveStartPrimaryKey.
             * @member {Uint8Array} inclusiveStartPrimaryKey
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.inclusiveStartPrimaryKey = $util.newBuffer([]);

            /**
             * GetRangeRequest exclusiveEndPrimaryKey.
             * @member {Uint8Array} exclusiveEndPrimaryKey
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.exclusiveEndPrimaryKey = $util.newBuffer([]);

            /**
             * GetRangeRequest cacheBlocks.
             * @member {boolean} cacheBlocks
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.cacheBlocks = true;

            /**
             * GetRangeRequest filter.
             * @member {Uint8Array} filter
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.filter = $util.newBuffer([]);

            /**
             * GetRangeRequest startColumn.
             * @member {string} startColumn
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.startColumn = "";

            /**
             * GetRangeRequest endColumn.
             * @member {string} endColumn
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.endColumn = "";

            /**
             * GetRangeRequest token.
             * @member {Uint8Array} token
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.token = $util.newBuffer([]);

            /**
             * GetRangeRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.transactionId = "";

            /**
             * GetRangeRequest dataBlockTypeHint.
             * @member {tablestore.proto.DataBlockType} dataBlockTypeHint
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.dataBlockTypeHint = 0;

            /**
             * GetRangeRequest returnEntirePrimaryKeys.
             * @member {boolean} returnEntirePrimaryKeys
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.returnEntirePrimaryKeys = true;

            /**
             * GetRangeRequest compressTypeHint.
             * @member {tablestore.proto.CompressType} compressTypeHint
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             */
            GetRangeRequest.prototype.compressTypeHint = 0;

            /**
             * Creates a new GetRangeRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {tablestore.proto.IGetRangeRequest=} [properties] Properties to set
             * @returns {tablestore.proto.GetRangeRequest} GetRangeRequest instance
             */
            GetRangeRequest.create = function create(properties) {
                return new GetRangeRequest(properties);
            };

            /**
             * Encodes the specified GetRangeRequest message. Does not implicitly {@link tablestore.proto.GetRangeRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {tablestore.proto.IGetRangeRequest} message GetRangeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRangeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
                if (message.columnsToGet != null && message.columnsToGet.length)
                    for (var i = 0; i < message.columnsToGet.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.columnsToGet[i]);
                if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                    $root.tablestore.proto.TimeRange.encode(message.timeRange, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxVersions);
                if (message.limit != null && message.hasOwnProperty("limit"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.limit);
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.inclusiveStartPrimaryKey);
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.exclusiveEndPrimaryKey);
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.cacheBlocks);
                if (message.filter != null && message.hasOwnProperty("filter"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.filter);
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.startColumn);
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.endColumn);
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.token);
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.transactionId);
                if (message.dataBlockTypeHint != null && message.hasOwnProperty("dataBlockTypeHint"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.dataBlockTypeHint);
                if (message.returnEntirePrimaryKeys != null && message.hasOwnProperty("returnEntirePrimaryKeys"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.returnEntirePrimaryKeys);
                if (message.compressTypeHint != null && message.hasOwnProperty("compressTypeHint"))
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.compressTypeHint);
                return writer;
            };

            /**
             * Encodes the specified GetRangeRequest message, length delimited. Does not implicitly {@link tablestore.proto.GetRangeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {tablestore.proto.IGetRangeRequest} message GetRangeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRangeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRangeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetRangeRequest} GetRangeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRangeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetRangeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.direction = reader.int32();
                        break;
                    case 3:
                        if (!(message.columnsToGet && message.columnsToGet.length))
                            message.columnsToGet = [];
                        message.columnsToGet.push(reader.string());
                        break;
                    case 4:
                        message.timeRange = $root.tablestore.proto.TimeRange.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.maxVersions = reader.int32();
                        break;
                    case 6:
                        message.limit = reader.int32();
                        break;
                    case 7:
                        message.inclusiveStartPrimaryKey = reader.bytes();
                        break;
                    case 8:
                        message.exclusiveEndPrimaryKey = reader.bytes();
                        break;
                    case 9:
                        message.cacheBlocks = reader.bool();
                        break;
                    case 10:
                        message.filter = reader.bytes();
                        break;
                    case 11:
                        message.startColumn = reader.string();
                        break;
                    case 12:
                        message.endColumn = reader.string();
                        break;
                    case 13:
                        message.token = reader.bytes();
                        break;
                    case 14:
                        message.transactionId = reader.string();
                        break;
                    case 15:
                        message.dataBlockTypeHint = reader.int32();
                        break;
                    case 16:
                        message.returnEntirePrimaryKeys = reader.bool();
                        break;
                    case 17:
                        message.compressTypeHint = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("direction"))
                    throw $util.ProtocolError("missing required 'direction'", { instance: message });
                if (!message.hasOwnProperty("inclusiveStartPrimaryKey"))
                    throw $util.ProtocolError("missing required 'inclusiveStartPrimaryKey'", { instance: message });
                if (!message.hasOwnProperty("exclusiveEndPrimaryKey"))
                    throw $util.ProtocolError("missing required 'exclusiveEndPrimaryKey'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetRangeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetRangeRequest} GetRangeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRangeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRangeRequest message.
             * @function verify
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRangeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                    break;
                }
                if (message.columnsToGet != null && message.hasOwnProperty("columnsToGet")) {
                    if (!Array.isArray(message.columnsToGet))
                        return "columnsToGet: array expected";
                    for (var i = 0; i < message.columnsToGet.length; ++i)
                        if (!$util.isString(message.columnsToGet[i]))
                            return "columnsToGet: string[] expected";
                }
                if (message.timeRange != null && message.hasOwnProperty("timeRange")) {
                    var error = $root.tablestore.proto.TimeRange.verify(message.timeRange);
                    if (error)
                        return "timeRange." + error;
                }
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    if (!$util.isInteger(message.maxVersions))
                        return "maxVersions: integer expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (!(message.inclusiveStartPrimaryKey && typeof message.inclusiveStartPrimaryKey.length === "number" || $util.isString(message.inclusiveStartPrimaryKey)))
                    return "inclusiveStartPrimaryKey: buffer expected";
                if (!(message.exclusiveEndPrimaryKey && typeof message.exclusiveEndPrimaryKey.length === "number" || $util.isString(message.exclusiveEndPrimaryKey)))
                    return "exclusiveEndPrimaryKey: buffer expected";
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    if (typeof message.cacheBlocks !== "boolean")
                        return "cacheBlocks: boolean expected";
                if (message.filter != null && message.hasOwnProperty("filter"))
                    if (!(message.filter && typeof message.filter.length === "number" || $util.isString(message.filter)))
                        return "filter: buffer expected";
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    if (!$util.isString(message.startColumn))
                        return "startColumn: string expected";
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    if (!$util.isString(message.endColumn))
                        return "endColumn: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (!$util.isString(message.transactionId))
                        return "transactionId: string expected";
                if (message.dataBlockTypeHint != null && message.hasOwnProperty("dataBlockTypeHint"))
                    switch (message.dataBlockTypeHint) {
                    default:
                        return "dataBlockTypeHint: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.returnEntirePrimaryKeys != null && message.hasOwnProperty("returnEntirePrimaryKeys"))
                    if (typeof message.returnEntirePrimaryKeys !== "boolean")
                        return "returnEntirePrimaryKeys: boolean expected";
                if (message.compressTypeHint != null && message.hasOwnProperty("compressTypeHint"))
                    switch (message.compressTypeHint) {
                    default:
                        return "compressTypeHint: enum value expected";
                    case 0:
                        break;
                    }
                return null;
            };

            /**
             * Creates a GetRangeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetRangeRequest} GetRangeRequest
             */
            GetRangeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetRangeRequest)
                    return object;
                var message = new $root.tablestore.proto.GetRangeRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                switch (object.direction) {
                case "FORWARD":
                case 0:
                    message.direction = 0;
                    break;
                case "BACKWARD":
                case 1:
                    message.direction = 1;
                    break;
                }
                if (object.columnsToGet) {
                    if (!Array.isArray(object.columnsToGet))
                        throw TypeError(".tablestore.proto.GetRangeRequest.columnsToGet: array expected");
                    message.columnsToGet = [];
                    for (var i = 0; i < object.columnsToGet.length; ++i)
                        message.columnsToGet[i] = String(object.columnsToGet[i]);
                }
                if (object.timeRange != null) {
                    if (typeof object.timeRange !== "object")
                        throw TypeError(".tablestore.proto.GetRangeRequest.timeRange: object expected");
                    message.timeRange = $root.tablestore.proto.TimeRange.fromObject(object.timeRange);
                }
                if (object.maxVersions != null)
                    message.maxVersions = object.maxVersions | 0;
                if (object.limit != null)
                    message.limit = object.limit | 0;
                if (object.inclusiveStartPrimaryKey != null)
                    if (typeof object.inclusiveStartPrimaryKey === "string")
                        $util.base64.decode(object.inclusiveStartPrimaryKey, message.inclusiveStartPrimaryKey = $util.newBuffer($util.base64.length(object.inclusiveStartPrimaryKey)), 0);
                    else if (object.inclusiveStartPrimaryKey.length)
                        message.inclusiveStartPrimaryKey = object.inclusiveStartPrimaryKey;
                if (object.exclusiveEndPrimaryKey != null)
                    if (typeof object.exclusiveEndPrimaryKey === "string")
                        $util.base64.decode(object.exclusiveEndPrimaryKey, message.exclusiveEndPrimaryKey = $util.newBuffer($util.base64.length(object.exclusiveEndPrimaryKey)), 0);
                    else if (object.exclusiveEndPrimaryKey.length)
                        message.exclusiveEndPrimaryKey = object.exclusiveEndPrimaryKey;
                if (object.cacheBlocks != null)
                    message.cacheBlocks = Boolean(object.cacheBlocks);
                if (object.filter != null)
                    if (typeof object.filter === "string")
                        $util.base64.decode(object.filter, message.filter = $util.newBuffer($util.base64.length(object.filter)), 0);
                    else if (object.filter.length)
                        message.filter = object.filter;
                if (object.startColumn != null)
                    message.startColumn = String(object.startColumn);
                if (object.endColumn != null)
                    message.endColumn = String(object.endColumn);
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length)
                        message.token = object.token;
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                switch (object.dataBlockTypeHint) {
                case "DBT_PLAIN_BUFFER":
                case 0:
                    message.dataBlockTypeHint = 0;
                    break;
                case "DBT_SIMPLE_ROW_MATRIX":
                case 1:
                    message.dataBlockTypeHint = 1;
                    break;
                }
                if (object.returnEntirePrimaryKeys != null)
                    message.returnEntirePrimaryKeys = Boolean(object.returnEntirePrimaryKeys);
                switch (object.compressTypeHint) {
                case "CPT_NONE":
                case 0:
                    message.compressTypeHint = 0;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a GetRangeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetRangeRequest
             * @static
             * @param {tablestore.proto.GetRangeRequest} message GetRangeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRangeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.columnsToGet = [];
                if (options.defaults) {
                    object.tableName = "";
                    object.direction = options.enums === String ? "FORWARD" : 0;
                    object.timeRange = null;
                    object.maxVersions = 0;
                    object.limit = 0;
                    if (options.bytes === String)
                        object.inclusiveStartPrimaryKey = "";
                    else {
                        object.inclusiveStartPrimaryKey = [];
                        if (options.bytes !== Array)
                            object.inclusiveStartPrimaryKey = $util.newBuffer(object.inclusiveStartPrimaryKey);
                    }
                    if (options.bytes === String)
                        object.exclusiveEndPrimaryKey = "";
                    else {
                        object.exclusiveEndPrimaryKey = [];
                        if (options.bytes !== Array)
                            object.exclusiveEndPrimaryKey = $util.newBuffer(object.exclusiveEndPrimaryKey);
                    }
                    object.cacheBlocks = true;
                    if (options.bytes === String)
                        object.filter = "";
                    else {
                        object.filter = [];
                        if (options.bytes !== Array)
                            object.filter = $util.newBuffer(object.filter);
                    }
                    object.startColumn = "";
                    object.endColumn = "";
                    if (options.bytes === String)
                        object.token = "";
                    else {
                        object.token = [];
                        if (options.bytes !== Array)
                            object.token = $util.newBuffer(object.token);
                    }
                    object.transactionId = "";
                    object.dataBlockTypeHint = options.enums === String ? "DBT_PLAIN_BUFFER" : 0;
                    object.returnEntirePrimaryKeys = true;
                    object.compressTypeHint = options.enums === String ? "CPT_NONE" : 0;
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.direction != null && message.hasOwnProperty("direction"))
                    object.direction = options.enums === String ? $root.tablestore.proto.Direction[message.direction] : message.direction;
                if (message.columnsToGet && message.columnsToGet.length) {
                    object.columnsToGet = [];
                    for (var j = 0; j < message.columnsToGet.length; ++j)
                        object.columnsToGet[j] = message.columnsToGet[j];
                }
                if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                    object.timeRange = $root.tablestore.proto.TimeRange.toObject(message.timeRange, options);
                if (message.maxVersions != null && message.hasOwnProperty("maxVersions"))
                    object.maxVersions = message.maxVersions;
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                if (message.inclusiveStartPrimaryKey != null && message.hasOwnProperty("inclusiveStartPrimaryKey"))
                    object.inclusiveStartPrimaryKey = options.bytes === String ? $util.base64.encode(message.inclusiveStartPrimaryKey, 0, message.inclusiveStartPrimaryKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.inclusiveStartPrimaryKey) : message.inclusiveStartPrimaryKey;
                if (message.exclusiveEndPrimaryKey != null && message.hasOwnProperty("exclusiveEndPrimaryKey"))
                    object.exclusiveEndPrimaryKey = options.bytes === String ? $util.base64.encode(message.exclusiveEndPrimaryKey, 0, message.exclusiveEndPrimaryKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.exclusiveEndPrimaryKey) : message.exclusiveEndPrimaryKey;
                if (message.cacheBlocks != null && message.hasOwnProperty("cacheBlocks"))
                    object.cacheBlocks = message.cacheBlocks;
                if (message.filter != null && message.hasOwnProperty("filter"))
                    object.filter = options.bytes === String ? $util.base64.encode(message.filter, 0, message.filter.length) : options.bytes === Array ? Array.prototype.slice.call(message.filter) : message.filter;
                if (message.startColumn != null && message.hasOwnProperty("startColumn"))
                    object.startColumn = message.startColumn;
                if (message.endColumn != null && message.hasOwnProperty("endColumn"))
                    object.endColumn = message.endColumn;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                if (message.dataBlockTypeHint != null && message.hasOwnProperty("dataBlockTypeHint"))
                    object.dataBlockTypeHint = options.enums === String ? $root.tablestore.proto.DataBlockType[message.dataBlockTypeHint] : message.dataBlockTypeHint;
                if (message.returnEntirePrimaryKeys != null && message.hasOwnProperty("returnEntirePrimaryKeys"))
                    object.returnEntirePrimaryKeys = message.returnEntirePrimaryKeys;
                if (message.compressTypeHint != null && message.hasOwnProperty("compressTypeHint"))
                    object.compressTypeHint = options.enums === String ? $root.tablestore.proto.CompressType[message.compressTypeHint] : message.compressTypeHint;
                return object;
            };

            /**
             * Converts this GetRangeRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetRangeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRangeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRangeRequest;
        })();

        proto.GetRangeResponse = (function() {

            /**
             * Properties of a GetRangeResponse.
             * @memberof tablestore.proto
             * @interface IGetRangeResponse
             * @property {tablestore.proto.IConsumedCapacity} consumed GetRangeResponse consumed
             * @property {Uint8Array} rows GetRangeResponse rows
             * @property {Uint8Array|null} [nextStartPrimaryKey] GetRangeResponse nextStartPrimaryKey
             * @property {Uint8Array|null} [nextToken] GetRangeResponse nextToken
             * @property {tablestore.proto.DataBlockType|null} [dataBlockType] GetRangeResponse dataBlockType
             * @property {tablestore.proto.CompressType|null} [compressType] GetRangeResponse compressType
             */

            /**
             * Constructs a new GetRangeResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a GetRangeResponse.
             * @implements IGetRangeResponse
             * @constructor
             * @param {tablestore.proto.IGetRangeResponse=} [properties] Properties to set
             */
            function GetRangeResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetRangeResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity} consumed
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             */
            GetRangeResponse.prototype.consumed = null;

            /**
             * GetRangeResponse rows.
             * @member {Uint8Array} rows
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             */
            GetRangeResponse.prototype.rows = $util.newBuffer([]);

            /**
             * GetRangeResponse nextStartPrimaryKey.
             * @member {Uint8Array} nextStartPrimaryKey
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             */
            GetRangeResponse.prototype.nextStartPrimaryKey = $util.newBuffer([]);

            /**
             * GetRangeResponse nextToken.
             * @member {Uint8Array} nextToken
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             */
            GetRangeResponse.prototype.nextToken = $util.newBuffer([]);

            /**
             * GetRangeResponse dataBlockType.
             * @member {tablestore.proto.DataBlockType} dataBlockType
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             */
            GetRangeResponse.prototype.dataBlockType = 0;

            /**
             * GetRangeResponse compressType.
             * @member {tablestore.proto.CompressType} compressType
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             */
            GetRangeResponse.prototype.compressType = 0;

            /**
             * Creates a new GetRangeResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {tablestore.proto.IGetRangeResponse=} [properties] Properties to set
             * @returns {tablestore.proto.GetRangeResponse} GetRangeResponse instance
             */
            GetRangeResponse.create = function create(properties) {
                return new GetRangeResponse(properties);
            };

            /**
             * Encodes the specified GetRangeResponse message. Does not implicitly {@link tablestore.proto.GetRangeResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {tablestore.proto.IGetRangeResponse} message GetRangeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRangeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.rows);
                if (message.nextStartPrimaryKey != null && message.hasOwnProperty("nextStartPrimaryKey"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nextStartPrimaryKey);
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.nextToken);
                if (message.dataBlockType != null && message.hasOwnProperty("dataBlockType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dataBlockType);
                if (message.compressType != null && message.hasOwnProperty("compressType"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.compressType);
                return writer;
            };

            /**
             * Encodes the specified GetRangeResponse message, length delimited. Does not implicitly {@link tablestore.proto.GetRangeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {tablestore.proto.IGetRangeResponse} message GetRangeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRangeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetRangeResponse} GetRangeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRangeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetRangeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.rows = reader.bytes();
                        break;
                    case 3:
                        message.nextStartPrimaryKey = reader.bytes();
                        break;
                    case 4:
                        message.nextToken = reader.bytes();
                        break;
                    case 5:
                        message.dataBlockType = reader.int32();
                        break;
                    case 6:
                        message.compressType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("consumed"))
                    throw $util.ProtocolError("missing required 'consumed'", { instance: message });
                if (!message.hasOwnProperty("rows"))
                    throw $util.ProtocolError("missing required 'rows'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetRangeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetRangeResponse} GetRangeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRangeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRangeResponse message.
             * @function verify
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRangeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (!(message.rows && typeof message.rows.length === "number" || $util.isString(message.rows)))
                    return "rows: buffer expected";
                if (message.nextStartPrimaryKey != null && message.hasOwnProperty("nextStartPrimaryKey"))
                    if (!(message.nextStartPrimaryKey && typeof message.nextStartPrimaryKey.length === "number" || $util.isString(message.nextStartPrimaryKey)))
                        return "nextStartPrimaryKey: buffer expected";
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    if (!(message.nextToken && typeof message.nextToken.length === "number" || $util.isString(message.nextToken)))
                        return "nextToken: buffer expected";
                if (message.dataBlockType != null && message.hasOwnProperty("dataBlockType"))
                    switch (message.dataBlockType) {
                    default:
                        return "dataBlockType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.compressType != null && message.hasOwnProperty("compressType"))
                    switch (message.compressType) {
                    default:
                        return "compressType: enum value expected";
                    case 0:
                        break;
                    }
                return null;
            };

            /**
             * Creates a GetRangeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetRangeResponse} GetRangeResponse
             */
            GetRangeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetRangeResponse)
                    return object;
                var message = new $root.tablestore.proto.GetRangeResponse();
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.GetRangeResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.rows != null)
                    if (typeof object.rows === "string")
                        $util.base64.decode(object.rows, message.rows = $util.newBuffer($util.base64.length(object.rows)), 0);
                    else if (object.rows.length)
                        message.rows = object.rows;
                if (object.nextStartPrimaryKey != null)
                    if (typeof object.nextStartPrimaryKey === "string")
                        $util.base64.decode(object.nextStartPrimaryKey, message.nextStartPrimaryKey = $util.newBuffer($util.base64.length(object.nextStartPrimaryKey)), 0);
                    else if (object.nextStartPrimaryKey.length)
                        message.nextStartPrimaryKey = object.nextStartPrimaryKey;
                if (object.nextToken != null)
                    if (typeof object.nextToken === "string")
                        $util.base64.decode(object.nextToken, message.nextToken = $util.newBuffer($util.base64.length(object.nextToken)), 0);
                    else if (object.nextToken.length)
                        message.nextToken = object.nextToken;
                switch (object.dataBlockType) {
                case "DBT_PLAIN_BUFFER":
                case 0:
                    message.dataBlockType = 0;
                    break;
                case "DBT_SIMPLE_ROW_MATRIX":
                case 1:
                    message.dataBlockType = 1;
                    break;
                }
                switch (object.compressType) {
                case "CPT_NONE":
                case 0:
                    message.compressType = 0;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a GetRangeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetRangeResponse
             * @static
             * @param {tablestore.proto.GetRangeResponse} message GetRangeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRangeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.consumed = null;
                    if (options.bytes === String)
                        object.rows = "";
                    else {
                        object.rows = [];
                        if (options.bytes !== Array)
                            object.rows = $util.newBuffer(object.rows);
                    }
                    if (options.bytes === String)
                        object.nextStartPrimaryKey = "";
                    else {
                        object.nextStartPrimaryKey = [];
                        if (options.bytes !== Array)
                            object.nextStartPrimaryKey = $util.newBuffer(object.nextStartPrimaryKey);
                    }
                    if (options.bytes === String)
                        object.nextToken = "";
                    else {
                        object.nextToken = [];
                        if (options.bytes !== Array)
                            object.nextToken = $util.newBuffer(object.nextToken);
                    }
                    object.dataBlockType = options.enums === String ? "DBT_PLAIN_BUFFER" : 0;
                    object.compressType = options.enums === String ? "CPT_NONE" : 0;
                }
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.rows != null && message.hasOwnProperty("rows"))
                    object.rows = options.bytes === String ? $util.base64.encode(message.rows, 0, message.rows.length) : options.bytes === Array ? Array.prototype.slice.call(message.rows) : message.rows;
                if (message.nextStartPrimaryKey != null && message.hasOwnProperty("nextStartPrimaryKey"))
                    object.nextStartPrimaryKey = options.bytes === String ? $util.base64.encode(message.nextStartPrimaryKey, 0, message.nextStartPrimaryKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextStartPrimaryKey) : message.nextStartPrimaryKey;
                if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                    object.nextToken = options.bytes === String ? $util.base64.encode(message.nextToken, 0, message.nextToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextToken) : message.nextToken;
                if (message.dataBlockType != null && message.hasOwnProperty("dataBlockType"))
                    object.dataBlockType = options.enums === String ? $root.tablestore.proto.DataBlockType[message.dataBlockType] : message.dataBlockType;
                if (message.compressType != null && message.hasOwnProperty("compressType"))
                    object.compressType = options.enums === String ? $root.tablestore.proto.CompressType[message.compressType] : message.compressType;
                return object;
            };

            /**
             * Converts this GetRangeResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetRangeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRangeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRangeResponse;
        })();

        proto.StartLocalTransactionRequest = (function() {

            /**
             * Properties of a StartLocalTransactionRequest.
             * @memberof tablestore.proto
             * @interface IStartLocalTransactionRequest
             * @property {string} tableName StartLocalTransactionRequest tableName
             * @property {Uint8Array} key StartLocalTransactionRequest key
             */

            /**
             * Constructs a new StartLocalTransactionRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a StartLocalTransactionRequest.
             * @implements IStartLocalTransactionRequest
             * @constructor
             * @param {tablestore.proto.IStartLocalTransactionRequest=} [properties] Properties to set
             */
            function StartLocalTransactionRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartLocalTransactionRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @instance
             */
            StartLocalTransactionRequest.prototype.tableName = "";

            /**
             * StartLocalTransactionRequest key.
             * @member {Uint8Array} key
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @instance
             */
            StartLocalTransactionRequest.prototype.key = $util.newBuffer([]);

            /**
             * Creates a new StartLocalTransactionRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {tablestore.proto.IStartLocalTransactionRequest=} [properties] Properties to set
             * @returns {tablestore.proto.StartLocalTransactionRequest} StartLocalTransactionRequest instance
             */
            StartLocalTransactionRequest.create = function create(properties) {
                return new StartLocalTransactionRequest(properties);
            };

            /**
             * Encodes the specified StartLocalTransactionRequest message. Does not implicitly {@link tablestore.proto.StartLocalTransactionRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {tablestore.proto.IStartLocalTransactionRequest} message StartLocalTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartLocalTransactionRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified StartLocalTransactionRequest message, length delimited. Does not implicitly {@link tablestore.proto.StartLocalTransactionRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {tablestore.proto.IStartLocalTransactionRequest} message StartLocalTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartLocalTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartLocalTransactionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.StartLocalTransactionRequest} StartLocalTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartLocalTransactionRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.StartLocalTransactionRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.key = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("key"))
                    throw $util.ProtocolError("missing required 'key'", { instance: message });
                return message;
            };

            /**
             * Decodes a StartLocalTransactionRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.StartLocalTransactionRequest} StartLocalTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartLocalTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartLocalTransactionRequest message.
             * @function verify
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartLocalTransactionRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
                return null;
            };

            /**
             * Creates a StartLocalTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.StartLocalTransactionRequest} StartLocalTransactionRequest
             */
            StartLocalTransactionRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.StartLocalTransactionRequest)
                    return object;
                var message = new $root.tablestore.proto.StartLocalTransactionRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length)
                        message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a StartLocalTransactionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @static
             * @param {tablestore.proto.StartLocalTransactionRequest} message StartLocalTransactionRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartLocalTransactionRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tableName = "";
                    if (options.bytes === String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                return object;
            };

            /**
             * Converts this StartLocalTransactionRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.StartLocalTransactionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartLocalTransactionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartLocalTransactionRequest;
        })();

        proto.StartLocalTransactionResponse = (function() {

            /**
             * Properties of a StartLocalTransactionResponse.
             * @memberof tablestore.proto
             * @interface IStartLocalTransactionResponse
             * @property {string} transactionId StartLocalTransactionResponse transactionId
             */

            /**
             * Constructs a new StartLocalTransactionResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a StartLocalTransactionResponse.
             * @implements IStartLocalTransactionResponse
             * @constructor
             * @param {tablestore.proto.IStartLocalTransactionResponse=} [properties] Properties to set
             */
            function StartLocalTransactionResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartLocalTransactionResponse transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @instance
             */
            StartLocalTransactionResponse.prototype.transactionId = "";

            /**
             * Creates a new StartLocalTransactionResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {tablestore.proto.IStartLocalTransactionResponse=} [properties] Properties to set
             * @returns {tablestore.proto.StartLocalTransactionResponse} StartLocalTransactionResponse instance
             */
            StartLocalTransactionResponse.create = function create(properties) {
                return new StartLocalTransactionResponse(properties);
            };

            /**
             * Encodes the specified StartLocalTransactionResponse message. Does not implicitly {@link tablestore.proto.StartLocalTransactionResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {tablestore.proto.IStartLocalTransactionResponse} message StartLocalTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartLocalTransactionResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified StartLocalTransactionResponse message, length delimited. Does not implicitly {@link tablestore.proto.StartLocalTransactionResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {tablestore.proto.IStartLocalTransactionResponse} message StartLocalTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartLocalTransactionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartLocalTransactionResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.StartLocalTransactionResponse} StartLocalTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartLocalTransactionResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.StartLocalTransactionResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                return message;
            };

            /**
             * Decodes a StartLocalTransactionResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.StartLocalTransactionResponse} StartLocalTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartLocalTransactionResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartLocalTransactionResponse message.
             * @function verify
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartLocalTransactionResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.transactionId))
                    return "transactionId: string expected";
                return null;
            };

            /**
             * Creates a StartLocalTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.StartLocalTransactionResponse} StartLocalTransactionResponse
             */
            StartLocalTransactionResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.StartLocalTransactionResponse)
                    return object;
                var message = new $root.tablestore.proto.StartLocalTransactionResponse();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from a StartLocalTransactionResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @static
             * @param {tablestore.proto.StartLocalTransactionResponse} message StartLocalTransactionResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartLocalTransactionResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.transactionId = "";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this StartLocalTransactionResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.StartLocalTransactionResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartLocalTransactionResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartLocalTransactionResponse;
        })();

        proto.CommitTransactionRequest = (function() {

            /**
             * Properties of a CommitTransactionRequest.
             * @memberof tablestore.proto
             * @interface ICommitTransactionRequest
             * @property {string} transactionId CommitTransactionRequest transactionId
             */

            /**
             * Constructs a new CommitTransactionRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a CommitTransactionRequest.
             * @implements ICommitTransactionRequest
             * @constructor
             * @param {tablestore.proto.ICommitTransactionRequest=} [properties] Properties to set
             */
            function CommitTransactionRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CommitTransactionRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.CommitTransactionRequest
             * @instance
             */
            CommitTransactionRequest.prototype.transactionId = "";

            /**
             * Creates a new CommitTransactionRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {tablestore.proto.ICommitTransactionRequest=} [properties] Properties to set
             * @returns {tablestore.proto.CommitTransactionRequest} CommitTransactionRequest instance
             */
            CommitTransactionRequest.create = function create(properties) {
                return new CommitTransactionRequest(properties);
            };

            /**
             * Encodes the specified CommitTransactionRequest message. Does not implicitly {@link tablestore.proto.CommitTransactionRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {tablestore.proto.ICommitTransactionRequest} message CommitTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitTransactionRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified CommitTransactionRequest message, length delimited. Does not implicitly {@link tablestore.proto.CommitTransactionRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {tablestore.proto.ICommitTransactionRequest} message CommitTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CommitTransactionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CommitTransactionRequest} CommitTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitTransactionRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CommitTransactionRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                return message;
            };

            /**
             * Decodes a CommitTransactionRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CommitTransactionRequest} CommitTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CommitTransactionRequest message.
             * @function verify
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommitTransactionRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.transactionId))
                    return "transactionId: string expected";
                return null;
            };

            /**
             * Creates a CommitTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CommitTransactionRequest} CommitTransactionRequest
             */
            CommitTransactionRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CommitTransactionRequest)
                    return object;
                var message = new $root.tablestore.proto.CommitTransactionRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from a CommitTransactionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CommitTransactionRequest
             * @static
             * @param {tablestore.proto.CommitTransactionRequest} message CommitTransactionRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommitTransactionRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.transactionId = "";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this CommitTransactionRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CommitTransactionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommitTransactionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CommitTransactionRequest;
        })();

        proto.CommitTransactionResponse = (function() {

            /**
             * Properties of a CommitTransactionResponse.
             * @memberof tablestore.proto
             * @interface ICommitTransactionResponse
             */

            /**
             * Constructs a new CommitTransactionResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a CommitTransactionResponse.
             * @implements ICommitTransactionResponse
             * @constructor
             * @param {tablestore.proto.ICommitTransactionResponse=} [properties] Properties to set
             */
            function CommitTransactionResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CommitTransactionResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {tablestore.proto.ICommitTransactionResponse=} [properties] Properties to set
             * @returns {tablestore.proto.CommitTransactionResponse} CommitTransactionResponse instance
             */
            CommitTransactionResponse.create = function create(properties) {
                return new CommitTransactionResponse(properties);
            };

            /**
             * Encodes the specified CommitTransactionResponse message. Does not implicitly {@link tablestore.proto.CommitTransactionResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {tablestore.proto.ICommitTransactionResponse} message CommitTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitTransactionResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CommitTransactionResponse message, length delimited. Does not implicitly {@link tablestore.proto.CommitTransactionResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {tablestore.proto.ICommitTransactionResponse} message CommitTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitTransactionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CommitTransactionResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.CommitTransactionResponse} CommitTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitTransactionResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.CommitTransactionResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CommitTransactionResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.CommitTransactionResponse} CommitTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitTransactionResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CommitTransactionResponse message.
             * @function verify
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommitTransactionResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CommitTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.CommitTransactionResponse} CommitTransactionResponse
             */
            CommitTransactionResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.CommitTransactionResponse)
                    return object;
                return new $root.tablestore.proto.CommitTransactionResponse();
            };

            /**
             * Creates a plain object from a CommitTransactionResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.CommitTransactionResponse
             * @static
             * @param {tablestore.proto.CommitTransactionResponse} message CommitTransactionResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommitTransactionResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CommitTransactionResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.CommitTransactionResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommitTransactionResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CommitTransactionResponse;
        })();

        proto.AbortTransactionRequest = (function() {

            /**
             * Properties of an AbortTransactionRequest.
             * @memberof tablestore.proto
             * @interface IAbortTransactionRequest
             * @property {string} transactionId AbortTransactionRequest transactionId
             */

            /**
             * Constructs a new AbortTransactionRequest.
             * @memberof tablestore.proto
             * @classdesc Represents an AbortTransactionRequest.
             * @implements IAbortTransactionRequest
             * @constructor
             * @param {tablestore.proto.IAbortTransactionRequest=} [properties] Properties to set
             */
            function AbortTransactionRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AbortTransactionRequest transactionId.
             * @member {string} transactionId
             * @memberof tablestore.proto.AbortTransactionRequest
             * @instance
             */
            AbortTransactionRequest.prototype.transactionId = "";

            /**
             * Creates a new AbortTransactionRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {tablestore.proto.IAbortTransactionRequest=} [properties] Properties to set
             * @returns {tablestore.proto.AbortTransactionRequest} AbortTransactionRequest instance
             */
            AbortTransactionRequest.create = function create(properties) {
                return new AbortTransactionRequest(properties);
            };

            /**
             * Encodes the specified AbortTransactionRequest message. Does not implicitly {@link tablestore.proto.AbortTransactionRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {tablestore.proto.IAbortTransactionRequest} message AbortTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbortTransactionRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
                return writer;
            };

            /**
             * Encodes the specified AbortTransactionRequest message, length delimited. Does not implicitly {@link tablestore.proto.AbortTransactionRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {tablestore.proto.IAbortTransactionRequest} message AbortTransactionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbortTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AbortTransactionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.AbortTransactionRequest} AbortTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbortTransactionRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.AbortTransactionRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.transactionId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                return message;
            };

            /**
             * Decodes an AbortTransactionRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.AbortTransactionRequest} AbortTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbortTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AbortTransactionRequest message.
             * @function verify
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AbortTransactionRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.transactionId))
                    return "transactionId: string expected";
                return null;
            };

            /**
             * Creates an AbortTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.AbortTransactionRequest} AbortTransactionRequest
             */
            AbortTransactionRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.AbortTransactionRequest)
                    return object;
                var message = new $root.tablestore.proto.AbortTransactionRequest();
                if (object.transactionId != null)
                    message.transactionId = String(object.transactionId);
                return message;
            };

            /**
             * Creates a plain object from an AbortTransactionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.AbortTransactionRequest
             * @static
             * @param {tablestore.proto.AbortTransactionRequest} message AbortTransactionRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AbortTransactionRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.transactionId = "";
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    object.transactionId = message.transactionId;
                return object;
            };

            /**
             * Converts this AbortTransactionRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.AbortTransactionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AbortTransactionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AbortTransactionRequest;
        })();

        proto.AbortTransactionResponse = (function() {

            /**
             * Properties of an AbortTransactionResponse.
             * @memberof tablestore.proto
             * @interface IAbortTransactionResponse
             */

            /**
             * Constructs a new AbortTransactionResponse.
             * @memberof tablestore.proto
             * @classdesc Represents an AbortTransactionResponse.
             * @implements IAbortTransactionResponse
             * @constructor
             * @param {tablestore.proto.IAbortTransactionResponse=} [properties] Properties to set
             */
            function AbortTransactionResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new AbortTransactionResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {tablestore.proto.IAbortTransactionResponse=} [properties] Properties to set
             * @returns {tablestore.proto.AbortTransactionResponse} AbortTransactionResponse instance
             */
            AbortTransactionResponse.create = function create(properties) {
                return new AbortTransactionResponse(properties);
            };

            /**
             * Encodes the specified AbortTransactionResponse message. Does not implicitly {@link tablestore.proto.AbortTransactionResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {tablestore.proto.IAbortTransactionResponse} message AbortTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbortTransactionResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified AbortTransactionResponse message, length delimited. Does not implicitly {@link tablestore.proto.AbortTransactionResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {tablestore.proto.IAbortTransactionResponse} message AbortTransactionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AbortTransactionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AbortTransactionResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.AbortTransactionResponse} AbortTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbortTransactionResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.AbortTransactionResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AbortTransactionResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.AbortTransactionResponse} AbortTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AbortTransactionResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AbortTransactionResponse message.
             * @function verify
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AbortTransactionResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an AbortTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.AbortTransactionResponse} AbortTransactionResponse
             */
            AbortTransactionResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.AbortTransactionResponse)
                    return object;
                return new $root.tablestore.proto.AbortTransactionResponse();
            };

            /**
             * Creates a plain object from an AbortTransactionResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.AbortTransactionResponse
             * @static
             * @param {tablestore.proto.AbortTransactionResponse} message AbortTransactionResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AbortTransactionResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this AbortTransactionResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.AbortTransactionResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AbortTransactionResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AbortTransactionResponse;
        })();

        proto.ListStreamRequest = (function() {

            /**
             * Properties of a ListStreamRequest.
             * @memberof tablestore.proto
             * @interface IListStreamRequest
             * @property {string|null} [tableName] ListStreamRequest tableName
             */

            /**
             * Constructs a new ListStreamRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a ListStreamRequest.
             * @implements IListStreamRequest
             * @constructor
             * @param {tablestore.proto.IListStreamRequest=} [properties] Properties to set
             */
            function ListStreamRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListStreamRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.ListStreamRequest
             * @instance
             */
            ListStreamRequest.prototype.tableName = "";

            /**
             * Creates a new ListStreamRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {tablestore.proto.IListStreamRequest=} [properties] Properties to set
             * @returns {tablestore.proto.ListStreamRequest} ListStreamRequest instance
             */
            ListStreamRequest.create = function create(properties) {
                return new ListStreamRequest(properties);
            };

            /**
             * Encodes the specified ListStreamRequest message. Does not implicitly {@link tablestore.proto.ListStreamRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {tablestore.proto.IListStreamRequest} message ListStreamRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListStreamRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                return writer;
            };

            /**
             * Encodes the specified ListStreamRequest message, length delimited. Does not implicitly {@link tablestore.proto.ListStreamRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {tablestore.proto.IListStreamRequest} message ListStreamRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListStreamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListStreamRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ListStreamRequest} ListStreamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListStreamRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ListStreamRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListStreamRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ListStreamRequest} ListStreamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListStreamRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListStreamRequest message.
             * @function verify
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListStreamRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    if (!$util.isString(message.tableName))
                        return "tableName: string expected";
                return null;
            };

            /**
             * Creates a ListStreamRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ListStreamRequest} ListStreamRequest
             */
            ListStreamRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ListStreamRequest)
                    return object;
                var message = new $root.tablestore.proto.ListStreamRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                return message;
            };

            /**
             * Creates a plain object from a ListStreamRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ListStreamRequest
             * @static
             * @param {tablestore.proto.ListStreamRequest} message ListStreamRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListStreamRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.tableName = "";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                return object;
            };

            /**
             * Converts this ListStreamRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ListStreamRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListStreamRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListStreamRequest;
        })();

        proto.Stream = (function() {

            /**
             * Properties of a Stream.
             * @memberof tablestore.proto
             * @interface IStream
             * @property {string} streamId Stream streamId
             * @property {string} tableName Stream tableName
             * @property {number|Long} creationTime Stream creationTime
             */

            /**
             * Constructs a new Stream.
             * @memberof tablestore.proto
             * @classdesc Represents a Stream.
             * @implements IStream
             * @constructor
             * @param {tablestore.proto.IStream=} [properties] Properties to set
             */
            function Stream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Stream streamId.
             * @member {string} streamId
             * @memberof tablestore.proto.Stream
             * @instance
             */
            Stream.prototype.streamId = "";

            /**
             * Stream tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.Stream
             * @instance
             */
            Stream.prototype.tableName = "";

            /**
             * Stream creationTime.
             * @member {number|Long} creationTime
             * @memberof tablestore.proto.Stream
             * @instance
             */
            Stream.prototype.creationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Stream instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.Stream
             * @static
             * @param {tablestore.proto.IStream=} [properties] Properties to set
             * @returns {tablestore.proto.Stream} Stream instance
             */
            Stream.create = function create(properties) {
                return new Stream(properties);
            };

            /**
             * Encodes the specified Stream message. Does not implicitly {@link tablestore.proto.Stream.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.Stream
             * @static
             * @param {tablestore.proto.IStream} message Stream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.streamId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableName);
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.creationTime);
                return writer;
            };

            /**
             * Encodes the specified Stream message, length delimited. Does not implicitly {@link tablestore.proto.Stream.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.Stream
             * @static
             * @param {tablestore.proto.IStream} message Stream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Stream message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.Stream
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.Stream} Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.Stream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.streamId = reader.string();
                        break;
                    case 2:
                        message.tableName = reader.string();
                        break;
                    case 3:
                        message.creationTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("streamId"))
                    throw $util.ProtocolError("missing required 'streamId'", { instance: message });
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("creationTime"))
                    throw $util.ProtocolError("missing required 'creationTime'", { instance: message });
                return message;
            };

            /**
             * Decodes a Stream message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.Stream
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.Stream} Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Stream message.
             * @function verify
             * @memberof tablestore.proto.Stream
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Stream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.streamId))
                    return "streamId: string expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!$util.isInteger(message.creationTime) && !(message.creationTime && $util.isInteger(message.creationTime.low) && $util.isInteger(message.creationTime.high)))
                    return "creationTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a Stream message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.Stream
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.Stream} Stream
             */
            Stream.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.Stream)
                    return object;
                var message = new $root.tablestore.proto.Stream();
                if (object.streamId != null)
                    message.streamId = String(object.streamId);
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.creationTime != null)
                    if ($util.Long)
                        (message.creationTime = $util.Long.fromValue(object.creationTime)).unsigned = false;
                    else if (typeof object.creationTime === "string")
                        message.creationTime = parseInt(object.creationTime, 10);
                    else if (typeof object.creationTime === "number")
                        message.creationTime = object.creationTime;
                    else if (typeof object.creationTime === "object")
                        message.creationTime = new $util.LongBits(object.creationTime.low >>> 0, object.creationTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Stream message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.Stream
             * @static
             * @param {tablestore.proto.Stream} message Stream
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Stream.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.streamId = "";
                    object.tableName = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.creationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.creationTime = options.longs === String ? "0" : 0;
                }
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    object.streamId = message.streamId;
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.creationTime != null && message.hasOwnProperty("creationTime"))
                    if (typeof message.creationTime === "number")
                        object.creationTime = options.longs === String ? String(message.creationTime) : message.creationTime;
                    else
                        object.creationTime = options.longs === String ? $util.Long.prototype.toString.call(message.creationTime) : options.longs === Number ? new $util.LongBits(message.creationTime.low >>> 0, message.creationTime.high >>> 0).toNumber() : message.creationTime;
                return object;
            };

            /**
             * Converts this Stream to JSON.
             * @function toJSON
             * @memberof tablestore.proto.Stream
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Stream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Stream;
        })();

        proto.ListStreamResponse = (function() {

            /**
             * Properties of a ListStreamResponse.
             * @memberof tablestore.proto
             * @interface IListStreamResponse
             * @property {Array.<tablestore.proto.IStream>|null} [streams] ListStreamResponse streams
             */

            /**
             * Constructs a new ListStreamResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a ListStreamResponse.
             * @implements IListStreamResponse
             * @constructor
             * @param {tablestore.proto.IListStreamResponse=} [properties] Properties to set
             */
            function ListStreamResponse(properties) {
                this.streams = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListStreamResponse streams.
             * @member {Array.<tablestore.proto.IStream>} streams
             * @memberof tablestore.proto.ListStreamResponse
             * @instance
             */
            ListStreamResponse.prototype.streams = $util.emptyArray;

            /**
             * Creates a new ListStreamResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {tablestore.proto.IListStreamResponse=} [properties] Properties to set
             * @returns {tablestore.proto.ListStreamResponse} ListStreamResponse instance
             */
            ListStreamResponse.create = function create(properties) {
                return new ListStreamResponse(properties);
            };

            /**
             * Encodes the specified ListStreamResponse message. Does not implicitly {@link tablestore.proto.ListStreamResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {tablestore.proto.IListStreamResponse} message ListStreamResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListStreamResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.streams != null && message.streams.length)
                    for (var i = 0; i < message.streams.length; ++i)
                        $root.tablestore.proto.Stream.encode(message.streams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListStreamResponse message, length delimited. Does not implicitly {@link tablestore.proto.ListStreamResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {tablestore.proto.IListStreamResponse} message ListStreamResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListStreamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListStreamResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ListStreamResponse} ListStreamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListStreamResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ListStreamResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.streams && message.streams.length))
                            message.streams = [];
                        message.streams.push($root.tablestore.proto.Stream.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListStreamResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ListStreamResponse} ListStreamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListStreamResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListStreamResponse message.
             * @function verify
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListStreamResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.streams != null && message.hasOwnProperty("streams")) {
                    if (!Array.isArray(message.streams))
                        return "streams: array expected";
                    for (var i = 0; i < message.streams.length; ++i) {
                        var error = $root.tablestore.proto.Stream.verify(message.streams[i]);
                        if (error)
                            return "streams." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListStreamResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ListStreamResponse} ListStreamResponse
             */
            ListStreamResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ListStreamResponse)
                    return object;
                var message = new $root.tablestore.proto.ListStreamResponse();
                if (object.streams) {
                    if (!Array.isArray(object.streams))
                        throw TypeError(".tablestore.proto.ListStreamResponse.streams: array expected");
                    message.streams = [];
                    for (var i = 0; i < object.streams.length; ++i) {
                        if (typeof object.streams[i] !== "object")
                            throw TypeError(".tablestore.proto.ListStreamResponse.streams: object expected");
                        message.streams[i] = $root.tablestore.proto.Stream.fromObject(object.streams[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListStreamResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ListStreamResponse
             * @static
             * @param {tablestore.proto.ListStreamResponse} message ListStreamResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListStreamResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.streams = [];
                if (message.streams && message.streams.length) {
                    object.streams = [];
                    for (var j = 0; j < message.streams.length; ++j)
                        object.streams[j] = $root.tablestore.proto.Stream.toObject(message.streams[j], options);
                }
                return object;
            };

            /**
             * Converts this ListStreamResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ListStreamResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListStreamResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListStreamResponse;
        })();

        proto.StreamShard = (function() {

            /**
             * Properties of a StreamShard.
             * @memberof tablestore.proto
             * @interface IStreamShard
             * @property {string} shardId StreamShard shardId
             * @property {string|null} [parentId] StreamShard parentId
             * @property {string|null} [parentSiblingId] StreamShard parentSiblingId
             */

            /**
             * Constructs a new StreamShard.
             * @memberof tablestore.proto
             * @classdesc Represents a StreamShard.
             * @implements IStreamShard
             * @constructor
             * @param {tablestore.proto.IStreamShard=} [properties] Properties to set
             */
            function StreamShard(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StreamShard shardId.
             * @member {string} shardId
             * @memberof tablestore.proto.StreamShard
             * @instance
             */
            StreamShard.prototype.shardId = "";

            /**
             * StreamShard parentId.
             * @member {string} parentId
             * @memberof tablestore.proto.StreamShard
             * @instance
             */
            StreamShard.prototype.parentId = "";

            /**
             * StreamShard parentSiblingId.
             * @member {string} parentSiblingId
             * @memberof tablestore.proto.StreamShard
             * @instance
             */
            StreamShard.prototype.parentSiblingId = "";

            /**
             * Creates a new StreamShard instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {tablestore.proto.IStreamShard=} [properties] Properties to set
             * @returns {tablestore.proto.StreamShard} StreamShard instance
             */
            StreamShard.create = function create(properties) {
                return new StreamShard(properties);
            };

            /**
             * Encodes the specified StreamShard message. Does not implicitly {@link tablestore.proto.StreamShard.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {tablestore.proto.IStreamShard} message StreamShard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamShard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.shardId);
                if (message.parentId != null && message.hasOwnProperty("parentId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.parentId);
                if (message.parentSiblingId != null && message.hasOwnProperty("parentSiblingId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.parentSiblingId);
                return writer;
            };

            /**
             * Encodes the specified StreamShard message, length delimited. Does not implicitly {@link tablestore.proto.StreamShard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {tablestore.proto.IStreamShard} message StreamShard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamShard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StreamShard message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.StreamShard} StreamShard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamShard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.StreamShard();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shardId = reader.string();
                        break;
                    case 2:
                        message.parentId = reader.string();
                        break;
                    case 3:
                        message.parentSiblingId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("shardId"))
                    throw $util.ProtocolError("missing required 'shardId'", { instance: message });
                return message;
            };

            /**
             * Decodes a StreamShard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.StreamShard} StreamShard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamShard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StreamShard message.
             * @function verify
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StreamShard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.shardId))
                    return "shardId: string expected";
                if (message.parentId != null && message.hasOwnProperty("parentId"))
                    if (!$util.isString(message.parentId))
                        return "parentId: string expected";
                if (message.parentSiblingId != null && message.hasOwnProperty("parentSiblingId"))
                    if (!$util.isString(message.parentSiblingId))
                        return "parentSiblingId: string expected";
                return null;
            };

            /**
             * Creates a StreamShard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.StreamShard} StreamShard
             */
            StreamShard.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.StreamShard)
                    return object;
                var message = new $root.tablestore.proto.StreamShard();
                if (object.shardId != null)
                    message.shardId = String(object.shardId);
                if (object.parentId != null)
                    message.parentId = String(object.parentId);
                if (object.parentSiblingId != null)
                    message.parentSiblingId = String(object.parentSiblingId);
                return message;
            };

            /**
             * Creates a plain object from a StreamShard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.StreamShard
             * @static
             * @param {tablestore.proto.StreamShard} message StreamShard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamShard.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.shardId = "";
                    object.parentId = "";
                    object.parentSiblingId = "";
                }
                if (message.shardId != null && message.hasOwnProperty("shardId"))
                    object.shardId = message.shardId;
                if (message.parentId != null && message.hasOwnProperty("parentId"))
                    object.parentId = message.parentId;
                if (message.parentSiblingId != null && message.hasOwnProperty("parentSiblingId"))
                    object.parentSiblingId = message.parentSiblingId;
                return object;
            };

            /**
             * Converts this StreamShard to JSON.
             * @function toJSON
             * @memberof tablestore.proto.StreamShard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamShard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StreamShard;
        })();

        /**
         * StreamStatus enum.
         * @name tablestore.proto.StreamStatus
         * @enum {string}
         * @property {number} STREAM_ENABLING=1 STREAM_ENABLING value
         * @property {number} STREAM_ACTIVE=2 STREAM_ACTIVE value
         */
        proto.StreamStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "STREAM_ENABLING"] = 1;
            values[valuesById[2] = "STREAM_ACTIVE"] = 2;
            return values;
        })();

        proto.DescribeStreamRequest = (function() {

            /**
             * Properties of a DescribeStreamRequest.
             * @memberof tablestore.proto
             * @interface IDescribeStreamRequest
             * @property {string} streamId DescribeStreamRequest streamId
             * @property {string|null} [inclusiveStartShardId] DescribeStreamRequest inclusiveStartShardId
             * @property {number|null} [shardLimit] DescribeStreamRequest shardLimit
             */

            /**
             * Constructs a new DescribeStreamRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a DescribeStreamRequest.
             * @implements IDescribeStreamRequest
             * @constructor
             * @param {tablestore.proto.IDescribeStreamRequest=} [properties] Properties to set
             */
            function DescribeStreamRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescribeStreamRequest streamId.
             * @member {string} streamId
             * @memberof tablestore.proto.DescribeStreamRequest
             * @instance
             */
            DescribeStreamRequest.prototype.streamId = "";

            /**
             * DescribeStreamRequest inclusiveStartShardId.
             * @member {string} inclusiveStartShardId
             * @memberof tablestore.proto.DescribeStreamRequest
             * @instance
             */
            DescribeStreamRequest.prototype.inclusiveStartShardId = "";

            /**
             * DescribeStreamRequest shardLimit.
             * @member {number} shardLimit
             * @memberof tablestore.proto.DescribeStreamRequest
             * @instance
             */
            DescribeStreamRequest.prototype.shardLimit = 0;

            /**
             * Creates a new DescribeStreamRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {tablestore.proto.IDescribeStreamRequest=} [properties] Properties to set
             * @returns {tablestore.proto.DescribeStreamRequest} DescribeStreamRequest instance
             */
            DescribeStreamRequest.create = function create(properties) {
                return new DescribeStreamRequest(properties);
            };

            /**
             * Encodes the specified DescribeStreamRequest message. Does not implicitly {@link tablestore.proto.DescribeStreamRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {tablestore.proto.IDescribeStreamRequest} message DescribeStreamRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeStreamRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.streamId);
                if (message.inclusiveStartShardId != null && message.hasOwnProperty("inclusiveStartShardId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inclusiveStartShardId);
                if (message.shardLimit != null && message.hasOwnProperty("shardLimit"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.shardLimit);
                return writer;
            };

            /**
             * Encodes the specified DescribeStreamRequest message, length delimited. Does not implicitly {@link tablestore.proto.DescribeStreamRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {tablestore.proto.IDescribeStreamRequest} message DescribeStreamRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeStreamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescribeStreamRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DescribeStreamRequest} DescribeStreamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeStreamRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DescribeStreamRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.streamId = reader.string();
                        break;
                    case 2:
                        message.inclusiveStartShardId = reader.string();
                        break;
                    case 3:
                        message.shardLimit = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("streamId"))
                    throw $util.ProtocolError("missing required 'streamId'", { instance: message });
                return message;
            };

            /**
             * Decodes a DescribeStreamRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DescribeStreamRequest} DescribeStreamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeStreamRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescribeStreamRequest message.
             * @function verify
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescribeStreamRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.streamId))
                    return "streamId: string expected";
                if (message.inclusiveStartShardId != null && message.hasOwnProperty("inclusiveStartShardId"))
                    if (!$util.isString(message.inclusiveStartShardId))
                        return "inclusiveStartShardId: string expected";
                if (message.shardLimit != null && message.hasOwnProperty("shardLimit"))
                    if (!$util.isInteger(message.shardLimit))
                        return "shardLimit: integer expected";
                return null;
            };

            /**
             * Creates a DescribeStreamRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DescribeStreamRequest} DescribeStreamRequest
             */
            DescribeStreamRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DescribeStreamRequest)
                    return object;
                var message = new $root.tablestore.proto.DescribeStreamRequest();
                if (object.streamId != null)
                    message.streamId = String(object.streamId);
                if (object.inclusiveStartShardId != null)
                    message.inclusiveStartShardId = String(object.inclusiveStartShardId);
                if (object.shardLimit != null)
                    message.shardLimit = object.shardLimit | 0;
                return message;
            };

            /**
             * Creates a plain object from a DescribeStreamRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DescribeStreamRequest
             * @static
             * @param {tablestore.proto.DescribeStreamRequest} message DescribeStreamRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescribeStreamRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.streamId = "";
                    object.inclusiveStartShardId = "";
                    object.shardLimit = 0;
                }
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    object.streamId = message.streamId;
                if (message.inclusiveStartShardId != null && message.hasOwnProperty("inclusiveStartShardId"))
                    object.inclusiveStartShardId = message.inclusiveStartShardId;
                if (message.shardLimit != null && message.hasOwnProperty("shardLimit"))
                    object.shardLimit = message.shardLimit;
                return object;
            };

            /**
             * Converts this DescribeStreamRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DescribeStreamRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescribeStreamRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DescribeStreamRequest;
        })();

        proto.DescribeStreamResponse = (function() {

            /**
             * Properties of a DescribeStreamResponse.
             * @memberof tablestore.proto
             * @interface IDescribeStreamResponse
             * @property {string} streamId DescribeStreamResponse streamId
             * @property {number} expirationTime DescribeStreamResponse expirationTime
             * @property {string} tableName DescribeStreamResponse tableName
             * @property {number|Long} creationTime DescribeStreamResponse creationTime
             * @property {tablestore.proto.StreamStatus} streamStatus DescribeStreamResponse streamStatus
             * @property {Array.<tablestore.proto.IStreamShard>|null} [shards] DescribeStreamResponse shards
             * @property {string|null} [nextShardId] DescribeStreamResponse nextShardId
             */

            /**
             * Constructs a new DescribeStreamResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a DescribeStreamResponse.
             * @implements IDescribeStreamResponse
             * @constructor
             * @param {tablestore.proto.IDescribeStreamResponse=} [properties] Properties to set
             */
            function DescribeStreamResponse(properties) {
                this.shards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescribeStreamResponse streamId.
             * @member {string} streamId
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.streamId = "";

            /**
             * DescribeStreamResponse expirationTime.
             * @member {number} expirationTime
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.expirationTime = 0;

            /**
             * DescribeStreamResponse tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.tableName = "";

            /**
             * DescribeStreamResponse creationTime.
             * @member {number|Long} creationTime
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.creationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DescribeStreamResponse streamStatus.
             * @member {tablestore.proto.StreamStatus} streamStatus
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.streamStatus = 1;

            /**
             * DescribeStreamResponse shards.
             * @member {Array.<tablestore.proto.IStreamShard>} shards
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.shards = $util.emptyArray;

            /**
             * DescribeStreamResponse nextShardId.
             * @member {string} nextShardId
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             */
            DescribeStreamResponse.prototype.nextShardId = "";

            /**
             * Creates a new DescribeStreamResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {tablestore.proto.IDescribeStreamResponse=} [properties] Properties to set
             * @returns {tablestore.proto.DescribeStreamResponse} DescribeStreamResponse instance
             */
            DescribeStreamResponse.create = function create(properties) {
                return new DescribeStreamResponse(properties);
            };

            /**
             * Encodes the specified DescribeStreamResponse message. Does not implicitly {@link tablestore.proto.DescribeStreamResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {tablestore.proto.IDescribeStreamResponse} message DescribeStreamResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeStreamResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.streamId);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.expirationTime);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableName);
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.creationTime);
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.streamStatus);
                if (message.shards != null && message.shards.length)
                    for (var i = 0; i < message.shards.length; ++i)
                        $root.tablestore.proto.StreamShard.encode(message.shards[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.nextShardId != null && message.hasOwnProperty("nextShardId"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.nextShardId);
                return writer;
            };

            /**
             * Encodes the specified DescribeStreamResponse message, length delimited. Does not implicitly {@link tablestore.proto.DescribeStreamResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {tablestore.proto.IDescribeStreamResponse} message DescribeStreamResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescribeStreamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescribeStreamResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.DescribeStreamResponse} DescribeStreamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeStreamResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.DescribeStreamResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.streamId = reader.string();
                        break;
                    case 2:
                        message.expirationTime = reader.int32();
                        break;
                    case 3:
                        message.tableName = reader.string();
                        break;
                    case 4:
                        message.creationTime = reader.int64();
                        break;
                    case 5:
                        message.streamStatus = reader.int32();
                        break;
                    case 6:
                        if (!(message.shards && message.shards.length))
                            message.shards = [];
                        message.shards.push($root.tablestore.proto.StreamShard.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.nextShardId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("streamId"))
                    throw $util.ProtocolError("missing required 'streamId'", { instance: message });
                if (!message.hasOwnProperty("expirationTime"))
                    throw $util.ProtocolError("missing required 'expirationTime'", { instance: message });
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("creationTime"))
                    throw $util.ProtocolError("missing required 'creationTime'", { instance: message });
                if (!message.hasOwnProperty("streamStatus"))
                    throw $util.ProtocolError("missing required 'streamStatus'", { instance: message });
                return message;
            };

            /**
             * Decodes a DescribeStreamResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.DescribeStreamResponse} DescribeStreamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescribeStreamResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescribeStreamResponse message.
             * @function verify
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescribeStreamResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.streamId))
                    return "streamId: string expected";
                if (!$util.isInteger(message.expirationTime))
                    return "expirationTime: integer expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!$util.isInteger(message.creationTime) && !(message.creationTime && $util.isInteger(message.creationTime.low) && $util.isInteger(message.creationTime.high)))
                    return "creationTime: integer|Long expected";
                switch (message.streamStatus) {
                default:
                    return "streamStatus: enum value expected";
                case 1:
                case 2:
                    break;
                }
                if (message.shards != null && message.hasOwnProperty("shards")) {
                    if (!Array.isArray(message.shards))
                        return "shards: array expected";
                    for (var i = 0; i < message.shards.length; ++i) {
                        var error = $root.tablestore.proto.StreamShard.verify(message.shards[i]);
                        if (error)
                            return "shards." + error;
                    }
                }
                if (message.nextShardId != null && message.hasOwnProperty("nextShardId"))
                    if (!$util.isString(message.nextShardId))
                        return "nextShardId: string expected";
                return null;
            };

            /**
             * Creates a DescribeStreamResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.DescribeStreamResponse} DescribeStreamResponse
             */
            DescribeStreamResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.DescribeStreamResponse)
                    return object;
                var message = new $root.tablestore.proto.DescribeStreamResponse();
                if (object.streamId != null)
                    message.streamId = String(object.streamId);
                if (object.expirationTime != null)
                    message.expirationTime = object.expirationTime | 0;
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.creationTime != null)
                    if ($util.Long)
                        (message.creationTime = $util.Long.fromValue(object.creationTime)).unsigned = false;
                    else if (typeof object.creationTime === "string")
                        message.creationTime = parseInt(object.creationTime, 10);
                    else if (typeof object.creationTime === "number")
                        message.creationTime = object.creationTime;
                    else if (typeof object.creationTime === "object")
                        message.creationTime = new $util.LongBits(object.creationTime.low >>> 0, object.creationTime.high >>> 0).toNumber();
                switch (object.streamStatus) {
                case "STREAM_ENABLING":
                case 1:
                    message.streamStatus = 1;
                    break;
                case "STREAM_ACTIVE":
                case 2:
                    message.streamStatus = 2;
                    break;
                }
                if (object.shards) {
                    if (!Array.isArray(object.shards))
                        throw TypeError(".tablestore.proto.DescribeStreamResponse.shards: array expected");
                    message.shards = [];
                    for (var i = 0; i < object.shards.length; ++i) {
                        if (typeof object.shards[i] !== "object")
                            throw TypeError(".tablestore.proto.DescribeStreamResponse.shards: object expected");
                        message.shards[i] = $root.tablestore.proto.StreamShard.fromObject(object.shards[i]);
                    }
                }
                if (object.nextShardId != null)
                    message.nextShardId = String(object.nextShardId);
                return message;
            };

            /**
             * Creates a plain object from a DescribeStreamResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.DescribeStreamResponse
             * @static
             * @param {tablestore.proto.DescribeStreamResponse} message DescribeStreamResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescribeStreamResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.shards = [];
                if (options.defaults) {
                    object.streamId = "";
                    object.expirationTime = 0;
                    object.tableName = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.creationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.creationTime = options.longs === String ? "0" : 0;
                    object.streamStatus = options.enums === String ? "STREAM_ENABLING" : 1;
                    object.nextShardId = "";
                }
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    object.streamId = message.streamId;
                if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                    object.expirationTime = message.expirationTime;
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.creationTime != null && message.hasOwnProperty("creationTime"))
                    if (typeof message.creationTime === "number")
                        object.creationTime = options.longs === String ? String(message.creationTime) : message.creationTime;
                    else
                        object.creationTime = options.longs === String ? $util.Long.prototype.toString.call(message.creationTime) : options.longs === Number ? new $util.LongBits(message.creationTime.low >>> 0, message.creationTime.high >>> 0).toNumber() : message.creationTime;
                if (message.streamStatus != null && message.hasOwnProperty("streamStatus"))
                    object.streamStatus = options.enums === String ? $root.tablestore.proto.StreamStatus[message.streamStatus] : message.streamStatus;
                if (message.shards && message.shards.length) {
                    object.shards = [];
                    for (var j = 0; j < message.shards.length; ++j)
                        object.shards[j] = $root.tablestore.proto.StreamShard.toObject(message.shards[j], options);
                }
                if (message.nextShardId != null && message.hasOwnProperty("nextShardId"))
                    object.nextShardId = message.nextShardId;
                return object;
            };

            /**
             * Converts this DescribeStreamResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.DescribeStreamResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescribeStreamResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DescribeStreamResponse;
        })();

        proto.GetShardIteratorRequest = (function() {

            /**
             * Properties of a GetShardIteratorRequest.
             * @memberof tablestore.proto
             * @interface IGetShardIteratorRequest
             * @property {string} streamId GetShardIteratorRequest streamId
             * @property {string} shardId GetShardIteratorRequest shardId
             */

            /**
             * Constructs a new GetShardIteratorRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a GetShardIteratorRequest.
             * @implements IGetShardIteratorRequest
             * @constructor
             * @param {tablestore.proto.IGetShardIteratorRequest=} [properties] Properties to set
             */
            function GetShardIteratorRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetShardIteratorRequest streamId.
             * @member {string} streamId
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @instance
             */
            GetShardIteratorRequest.prototype.streamId = "";

            /**
             * GetShardIteratorRequest shardId.
             * @member {string} shardId
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @instance
             */
            GetShardIteratorRequest.prototype.shardId = "";

            /**
             * Creates a new GetShardIteratorRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {tablestore.proto.IGetShardIteratorRequest=} [properties] Properties to set
             * @returns {tablestore.proto.GetShardIteratorRequest} GetShardIteratorRequest instance
             */
            GetShardIteratorRequest.create = function create(properties) {
                return new GetShardIteratorRequest(properties);
            };

            /**
             * Encodes the specified GetShardIteratorRequest message. Does not implicitly {@link tablestore.proto.GetShardIteratorRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {tablestore.proto.IGetShardIteratorRequest} message GetShardIteratorRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetShardIteratorRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.streamId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.shardId);
                return writer;
            };

            /**
             * Encodes the specified GetShardIteratorRequest message, length delimited. Does not implicitly {@link tablestore.proto.GetShardIteratorRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {tablestore.proto.IGetShardIteratorRequest} message GetShardIteratorRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetShardIteratorRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetShardIteratorRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetShardIteratorRequest} GetShardIteratorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetShardIteratorRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetShardIteratorRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.streamId = reader.string();
                        break;
                    case 2:
                        message.shardId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("streamId"))
                    throw $util.ProtocolError("missing required 'streamId'", { instance: message });
                if (!message.hasOwnProperty("shardId"))
                    throw $util.ProtocolError("missing required 'shardId'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetShardIteratorRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetShardIteratorRequest} GetShardIteratorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetShardIteratorRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetShardIteratorRequest message.
             * @function verify
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetShardIteratorRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.streamId))
                    return "streamId: string expected";
                if (!$util.isString(message.shardId))
                    return "shardId: string expected";
                return null;
            };

            /**
             * Creates a GetShardIteratorRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetShardIteratorRequest} GetShardIteratorRequest
             */
            GetShardIteratorRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetShardIteratorRequest)
                    return object;
                var message = new $root.tablestore.proto.GetShardIteratorRequest();
                if (object.streamId != null)
                    message.streamId = String(object.streamId);
                if (object.shardId != null)
                    message.shardId = String(object.shardId);
                return message;
            };

            /**
             * Creates a plain object from a GetShardIteratorRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @static
             * @param {tablestore.proto.GetShardIteratorRequest} message GetShardIteratorRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetShardIteratorRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.streamId = "";
                    object.shardId = "";
                }
                if (message.streamId != null && message.hasOwnProperty("streamId"))
                    object.streamId = message.streamId;
                if (message.shardId != null && message.hasOwnProperty("shardId"))
                    object.shardId = message.shardId;
                return object;
            };

            /**
             * Converts this GetShardIteratorRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetShardIteratorRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetShardIteratorRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetShardIteratorRequest;
        })();

        proto.GetShardIteratorResponse = (function() {

            /**
             * Properties of a GetShardIteratorResponse.
             * @memberof tablestore.proto
             * @interface IGetShardIteratorResponse
             * @property {string} shardIterator GetShardIteratorResponse shardIterator
             */

            /**
             * Constructs a new GetShardIteratorResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a GetShardIteratorResponse.
             * @implements IGetShardIteratorResponse
             * @constructor
             * @param {tablestore.proto.IGetShardIteratorResponse=} [properties] Properties to set
             */
            function GetShardIteratorResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetShardIteratorResponse shardIterator.
             * @member {string} shardIterator
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @instance
             */
            GetShardIteratorResponse.prototype.shardIterator = "";

            /**
             * Creates a new GetShardIteratorResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {tablestore.proto.IGetShardIteratorResponse=} [properties] Properties to set
             * @returns {tablestore.proto.GetShardIteratorResponse} GetShardIteratorResponse instance
             */
            GetShardIteratorResponse.create = function create(properties) {
                return new GetShardIteratorResponse(properties);
            };

            /**
             * Encodes the specified GetShardIteratorResponse message. Does not implicitly {@link tablestore.proto.GetShardIteratorResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {tablestore.proto.IGetShardIteratorResponse} message GetShardIteratorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetShardIteratorResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.shardIterator);
                return writer;
            };

            /**
             * Encodes the specified GetShardIteratorResponse message, length delimited. Does not implicitly {@link tablestore.proto.GetShardIteratorResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {tablestore.proto.IGetShardIteratorResponse} message GetShardIteratorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetShardIteratorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetShardIteratorResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetShardIteratorResponse} GetShardIteratorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetShardIteratorResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetShardIteratorResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shardIterator = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("shardIterator"))
                    throw $util.ProtocolError("missing required 'shardIterator'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetShardIteratorResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetShardIteratorResponse} GetShardIteratorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetShardIteratorResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetShardIteratorResponse message.
             * @function verify
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetShardIteratorResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.shardIterator))
                    return "shardIterator: string expected";
                return null;
            };

            /**
             * Creates a GetShardIteratorResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetShardIteratorResponse} GetShardIteratorResponse
             */
            GetShardIteratorResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetShardIteratorResponse)
                    return object;
                var message = new $root.tablestore.proto.GetShardIteratorResponse();
                if (object.shardIterator != null)
                    message.shardIterator = String(object.shardIterator);
                return message;
            };

            /**
             * Creates a plain object from a GetShardIteratorResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @static
             * @param {tablestore.proto.GetShardIteratorResponse} message GetShardIteratorResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetShardIteratorResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.shardIterator = "";
                if (message.shardIterator != null && message.hasOwnProperty("shardIterator"))
                    object.shardIterator = message.shardIterator;
                return object;
            };

            /**
             * Converts this GetShardIteratorResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetShardIteratorResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetShardIteratorResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetShardIteratorResponse;
        })();

        proto.GetStreamRecordRequest = (function() {

            /**
             * Properties of a GetStreamRecordRequest.
             * @memberof tablestore.proto
             * @interface IGetStreamRecordRequest
             * @property {string} shardIterator GetStreamRecordRequest shardIterator
             * @property {number|null} [limit] GetStreamRecordRequest limit
             */

            /**
             * Constructs a new GetStreamRecordRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a GetStreamRecordRequest.
             * @implements IGetStreamRecordRequest
             * @constructor
             * @param {tablestore.proto.IGetStreamRecordRequest=} [properties] Properties to set
             */
            function GetStreamRecordRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetStreamRecordRequest shardIterator.
             * @member {string} shardIterator
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @instance
             */
            GetStreamRecordRequest.prototype.shardIterator = "";

            /**
             * GetStreamRecordRequest limit.
             * @member {number} limit
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @instance
             */
            GetStreamRecordRequest.prototype.limit = 0;

            /**
             * Creates a new GetStreamRecordRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {tablestore.proto.IGetStreamRecordRequest=} [properties] Properties to set
             * @returns {tablestore.proto.GetStreamRecordRequest} GetStreamRecordRequest instance
             */
            GetStreamRecordRequest.create = function create(properties) {
                return new GetStreamRecordRequest(properties);
            };

            /**
             * Encodes the specified GetStreamRecordRequest message. Does not implicitly {@link tablestore.proto.GetStreamRecordRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {tablestore.proto.IGetStreamRecordRequest} message GetStreamRecordRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStreamRecordRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.shardIterator);
                if (message.limit != null && message.hasOwnProperty("limit"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
                return writer;
            };

            /**
             * Encodes the specified GetStreamRecordRequest message, length delimited. Does not implicitly {@link tablestore.proto.GetStreamRecordRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {tablestore.proto.IGetStreamRecordRequest} message GetStreamRecordRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStreamRecordRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetStreamRecordRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetStreamRecordRequest} GetStreamRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStreamRecordRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetStreamRecordRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shardIterator = reader.string();
                        break;
                    case 2:
                        message.limit = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("shardIterator"))
                    throw $util.ProtocolError("missing required 'shardIterator'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetStreamRecordRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetStreamRecordRequest} GetStreamRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStreamRecordRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetStreamRecordRequest message.
             * @function verify
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetStreamRecordRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.shardIterator))
                    return "shardIterator: string expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                return null;
            };

            /**
             * Creates a GetStreamRecordRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetStreamRecordRequest} GetStreamRecordRequest
             */
            GetStreamRecordRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetStreamRecordRequest)
                    return object;
                var message = new $root.tablestore.proto.GetStreamRecordRequest();
                if (object.shardIterator != null)
                    message.shardIterator = String(object.shardIterator);
                if (object.limit != null)
                    message.limit = object.limit | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetStreamRecordRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @static
             * @param {tablestore.proto.GetStreamRecordRequest} message GetStreamRecordRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetStreamRecordRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.shardIterator = "";
                    object.limit = 0;
                }
                if (message.shardIterator != null && message.hasOwnProperty("shardIterator"))
                    object.shardIterator = message.shardIterator;
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                return object;
            };

            /**
             * Converts this GetStreamRecordRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetStreamRecordRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetStreamRecordRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetStreamRecordRequest;
        })();

        /**
         * ActionType enum.
         * @name tablestore.proto.ActionType
         * @enum {string}
         * @property {number} PUT_ROW=1 PUT_ROW value
         * @property {number} UPDATE_ROW=2 UPDATE_ROW value
         * @property {number} DELETE_ROW=3 DELETE_ROW value
         */
        proto.ActionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "PUT_ROW"] = 1;
            values[valuesById[2] = "UPDATE_ROW"] = 2;
            values[valuesById[3] = "DELETE_ROW"] = 3;
            return values;
        })();

        proto.GetStreamRecordResponse = (function() {

            /**
             * Properties of a GetStreamRecordResponse.
             * @memberof tablestore.proto
             * @interface IGetStreamRecordResponse
             * @property {Array.<tablestore.proto.GetStreamRecordResponse.IStreamRecord>|null} [streamRecords] GetStreamRecordResponse streamRecords
             * @property {string|null} [nextShardIterator] GetStreamRecordResponse nextShardIterator
             */

            /**
             * Constructs a new GetStreamRecordResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a GetStreamRecordResponse.
             * @implements IGetStreamRecordResponse
             * @constructor
             * @param {tablestore.proto.IGetStreamRecordResponse=} [properties] Properties to set
             */
            function GetStreamRecordResponse(properties) {
                this.streamRecords = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetStreamRecordResponse streamRecords.
             * @member {Array.<tablestore.proto.GetStreamRecordResponse.IStreamRecord>} streamRecords
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @instance
             */
            GetStreamRecordResponse.prototype.streamRecords = $util.emptyArray;

            /**
             * GetStreamRecordResponse nextShardIterator.
             * @member {string} nextShardIterator
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @instance
             */
            GetStreamRecordResponse.prototype.nextShardIterator = "";

            /**
             * Creates a new GetStreamRecordResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {tablestore.proto.IGetStreamRecordResponse=} [properties] Properties to set
             * @returns {tablestore.proto.GetStreamRecordResponse} GetStreamRecordResponse instance
             */
            GetStreamRecordResponse.create = function create(properties) {
                return new GetStreamRecordResponse(properties);
            };

            /**
             * Encodes the specified GetStreamRecordResponse message. Does not implicitly {@link tablestore.proto.GetStreamRecordResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {tablestore.proto.IGetStreamRecordResponse} message GetStreamRecordResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStreamRecordResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.streamRecords != null && message.streamRecords.length)
                    for (var i = 0; i < message.streamRecords.length; ++i)
                        $root.tablestore.proto.GetStreamRecordResponse.StreamRecord.encode(message.streamRecords[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.nextShardIterator != null && message.hasOwnProperty("nextShardIterator"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextShardIterator);
                return writer;
            };

            /**
             * Encodes the specified GetStreamRecordResponse message, length delimited. Does not implicitly {@link tablestore.proto.GetStreamRecordResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {tablestore.proto.IGetStreamRecordResponse} message GetStreamRecordResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetStreamRecordResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetStreamRecordResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.GetStreamRecordResponse} GetStreamRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStreamRecordResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetStreamRecordResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.streamRecords && message.streamRecords.length))
                            message.streamRecords = [];
                        message.streamRecords.push($root.tablestore.proto.GetStreamRecordResponse.StreamRecord.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.nextShardIterator = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetStreamRecordResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.GetStreamRecordResponse} GetStreamRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetStreamRecordResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetStreamRecordResponse message.
             * @function verify
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetStreamRecordResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.streamRecords != null && message.hasOwnProperty("streamRecords")) {
                    if (!Array.isArray(message.streamRecords))
                        return "streamRecords: array expected";
                    for (var i = 0; i < message.streamRecords.length; ++i) {
                        var error = $root.tablestore.proto.GetStreamRecordResponse.StreamRecord.verify(message.streamRecords[i]);
                        if (error)
                            return "streamRecords." + error;
                    }
                }
                if (message.nextShardIterator != null && message.hasOwnProperty("nextShardIterator"))
                    if (!$util.isString(message.nextShardIterator))
                        return "nextShardIterator: string expected";
                return null;
            };

            /**
             * Creates a GetStreamRecordResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.GetStreamRecordResponse} GetStreamRecordResponse
             */
            GetStreamRecordResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.GetStreamRecordResponse)
                    return object;
                var message = new $root.tablestore.proto.GetStreamRecordResponse();
                if (object.streamRecords) {
                    if (!Array.isArray(object.streamRecords))
                        throw TypeError(".tablestore.proto.GetStreamRecordResponse.streamRecords: array expected");
                    message.streamRecords = [];
                    for (var i = 0; i < object.streamRecords.length; ++i) {
                        if (typeof object.streamRecords[i] !== "object")
                            throw TypeError(".tablestore.proto.GetStreamRecordResponse.streamRecords: object expected");
                        message.streamRecords[i] = $root.tablestore.proto.GetStreamRecordResponse.StreamRecord.fromObject(object.streamRecords[i]);
                    }
                }
                if (object.nextShardIterator != null)
                    message.nextShardIterator = String(object.nextShardIterator);
                return message;
            };

            /**
             * Creates a plain object from a GetStreamRecordResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @static
             * @param {tablestore.proto.GetStreamRecordResponse} message GetStreamRecordResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetStreamRecordResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.streamRecords = [];
                if (options.defaults)
                    object.nextShardIterator = "";
                if (message.streamRecords && message.streamRecords.length) {
                    object.streamRecords = [];
                    for (var j = 0; j < message.streamRecords.length; ++j)
                        object.streamRecords[j] = $root.tablestore.proto.GetStreamRecordResponse.StreamRecord.toObject(message.streamRecords[j], options);
                }
                if (message.nextShardIterator != null && message.hasOwnProperty("nextShardIterator"))
                    object.nextShardIterator = message.nextShardIterator;
                return object;
            };

            /**
             * Converts this GetStreamRecordResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.GetStreamRecordResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetStreamRecordResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetStreamRecordResponse.StreamRecord = (function() {

                /**
                 * Properties of a StreamRecord.
                 * @memberof tablestore.proto.GetStreamRecordResponse
                 * @interface IStreamRecord
                 * @property {tablestore.proto.ActionType} actionType StreamRecord actionType
                 * @property {Uint8Array} record StreamRecord record
                 */

                /**
                 * Constructs a new StreamRecord.
                 * @memberof tablestore.proto.GetStreamRecordResponse
                 * @classdesc Represents a StreamRecord.
                 * @implements IStreamRecord
                 * @constructor
                 * @param {tablestore.proto.GetStreamRecordResponse.IStreamRecord=} [properties] Properties to set
                 */
                function StreamRecord(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StreamRecord actionType.
                 * @member {tablestore.proto.ActionType} actionType
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @instance
                 */
                StreamRecord.prototype.actionType = 1;

                /**
                 * StreamRecord record.
                 * @member {Uint8Array} record
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @instance
                 */
                StreamRecord.prototype.record = $util.newBuffer([]);

                /**
                 * Creates a new StreamRecord instance using the specified properties.
                 * @function create
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {tablestore.proto.GetStreamRecordResponse.IStreamRecord=} [properties] Properties to set
                 * @returns {tablestore.proto.GetStreamRecordResponse.StreamRecord} StreamRecord instance
                 */
                StreamRecord.create = function create(properties) {
                    return new StreamRecord(properties);
                };

                /**
                 * Encodes the specified StreamRecord message. Does not implicitly {@link tablestore.proto.GetStreamRecordResponse.StreamRecord.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {tablestore.proto.GetStreamRecordResponse.IStreamRecord} message StreamRecord message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StreamRecord.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.actionType);
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record);
                    return writer;
                };

                /**
                 * Encodes the specified StreamRecord message, length delimited. Does not implicitly {@link tablestore.proto.GetStreamRecordResponse.StreamRecord.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {tablestore.proto.GetStreamRecordResponse.IStreamRecord} message StreamRecord message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StreamRecord.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StreamRecord message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.proto.GetStreamRecordResponse.StreamRecord} StreamRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StreamRecord.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.GetStreamRecordResponse.StreamRecord();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.actionType = reader.int32();
                            break;
                        case 2:
                            message.record = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("actionType"))
                        throw $util.ProtocolError("missing required 'actionType'", { instance: message });
                    if (!message.hasOwnProperty("record"))
                        throw $util.ProtocolError("missing required 'record'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a StreamRecord message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.proto.GetStreamRecordResponse.StreamRecord} StreamRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StreamRecord.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StreamRecord message.
                 * @function verify
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StreamRecord.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    switch (message.actionType) {
                    default:
                        return "actionType: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                    if (!(message.record && typeof message.record.length === "number" || $util.isString(message.record)))
                        return "record: buffer expected";
                    return null;
                };

                /**
                 * Creates a StreamRecord message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.proto.GetStreamRecordResponse.StreamRecord} StreamRecord
                 */
                StreamRecord.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.proto.GetStreamRecordResponse.StreamRecord)
                        return object;
                    var message = new $root.tablestore.proto.GetStreamRecordResponse.StreamRecord();
                    switch (object.actionType) {
                    case "PUT_ROW":
                    case 1:
                        message.actionType = 1;
                        break;
                    case "UPDATE_ROW":
                    case 2:
                        message.actionType = 2;
                        break;
                    case "DELETE_ROW":
                    case 3:
                        message.actionType = 3;
                        break;
                    }
                    if (object.record != null)
                        if (typeof object.record === "string")
                            $util.base64.decode(object.record, message.record = $util.newBuffer($util.base64.length(object.record)), 0);
                        else if (object.record.length)
                            message.record = object.record;
                    return message;
                };

                /**
                 * Creates a plain object from a StreamRecord message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @static
                 * @param {tablestore.proto.GetStreamRecordResponse.StreamRecord} message StreamRecord
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StreamRecord.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.actionType = options.enums === String ? "PUT_ROW" : 1;
                        if (options.bytes === String)
                            object.record = "";
                        else {
                            object.record = [];
                            if (options.bytes !== Array)
                                object.record = $util.newBuffer(object.record);
                        }
                    }
                    if (message.actionType != null && message.hasOwnProperty("actionType"))
                        object.actionType = options.enums === String ? $root.tablestore.proto.ActionType[message.actionType] : message.actionType;
                    if (message.record != null && message.hasOwnProperty("record"))
                        object.record = options.bytes === String ? $util.base64.encode(message.record, 0, message.record.length) : options.bytes === Array ? Array.prototype.slice.call(message.record) : message.record;
                    return object;
                };

                /**
                 * Converts this StreamRecord to JSON.
                 * @function toJSON
                 * @memberof tablestore.proto.GetStreamRecordResponse.StreamRecord
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StreamRecord.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StreamRecord;
            })();

            return GetStreamRecordResponse;
        })();

        proto.ComputeSplitPointsBySizeRequest = (function() {

            /**
             * Properties of a ComputeSplitPointsBySizeRequest.
             * @memberof tablestore.proto
             * @interface IComputeSplitPointsBySizeRequest
             * @property {string} tableName ComputeSplitPointsBySizeRequest tableName
             * @property {number|Long} splitSize ComputeSplitPointsBySizeRequest splitSize
             * @property {number|Long|null} [splitSizeUnitInByte] ComputeSplitPointsBySizeRequest splitSizeUnitInByte
             */

            /**
             * Constructs a new ComputeSplitPointsBySizeRequest.
             * @memberof tablestore.proto
             * @classdesc Represents a ComputeSplitPointsBySizeRequest.
             * @implements IComputeSplitPointsBySizeRequest
             * @constructor
             * @param {tablestore.proto.IComputeSplitPointsBySizeRequest=} [properties] Properties to set
             */
            function ComputeSplitPointsBySizeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ComputeSplitPointsBySizeRequest tableName.
             * @member {string} tableName
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @instance
             */
            ComputeSplitPointsBySizeRequest.prototype.tableName = "";

            /**
             * ComputeSplitPointsBySizeRequest splitSize.
             * @member {number|Long} splitSize
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @instance
             */
            ComputeSplitPointsBySizeRequest.prototype.splitSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ComputeSplitPointsBySizeRequest splitSizeUnitInByte.
             * @member {number|Long} splitSizeUnitInByte
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @instance
             */
            ComputeSplitPointsBySizeRequest.prototype.splitSizeUnitInByte = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ComputeSplitPointsBySizeRequest instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {tablestore.proto.IComputeSplitPointsBySizeRequest=} [properties] Properties to set
             * @returns {tablestore.proto.ComputeSplitPointsBySizeRequest} ComputeSplitPointsBySizeRequest instance
             */
            ComputeSplitPointsBySizeRequest.create = function create(properties) {
                return new ComputeSplitPointsBySizeRequest(properties);
            };

            /**
             * Encodes the specified ComputeSplitPointsBySizeRequest message. Does not implicitly {@link tablestore.proto.ComputeSplitPointsBySizeRequest.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {tablestore.proto.IComputeSplitPointsBySizeRequest} message ComputeSplitPointsBySizeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComputeSplitPointsBySizeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.splitSize);
                if (message.splitSizeUnitInByte != null && message.hasOwnProperty("splitSizeUnitInByte"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.splitSizeUnitInByte);
                return writer;
            };

            /**
             * Encodes the specified ComputeSplitPointsBySizeRequest message, length delimited. Does not implicitly {@link tablestore.proto.ComputeSplitPointsBySizeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {tablestore.proto.IComputeSplitPointsBySizeRequest} message ComputeSplitPointsBySizeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComputeSplitPointsBySizeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ComputeSplitPointsBySizeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ComputeSplitPointsBySizeRequest} ComputeSplitPointsBySizeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComputeSplitPointsBySizeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ComputeSplitPointsBySizeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableName = reader.string();
                        break;
                    case 2:
                        message.splitSize = reader.int64();
                        break;
                    case 3:
                        message.splitSizeUnitInByte = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("tableName"))
                    throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                if (!message.hasOwnProperty("splitSize"))
                    throw $util.ProtocolError("missing required 'splitSize'", { instance: message });
                return message;
            };

            /**
             * Decodes a ComputeSplitPointsBySizeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ComputeSplitPointsBySizeRequest} ComputeSplitPointsBySizeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComputeSplitPointsBySizeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ComputeSplitPointsBySizeRequest message.
             * @function verify
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ComputeSplitPointsBySizeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
                if (!$util.isInteger(message.splitSize) && !(message.splitSize && $util.isInteger(message.splitSize.low) && $util.isInteger(message.splitSize.high)))
                    return "splitSize: integer|Long expected";
                if (message.splitSizeUnitInByte != null && message.hasOwnProperty("splitSizeUnitInByte"))
                    if (!$util.isInteger(message.splitSizeUnitInByte) && !(message.splitSizeUnitInByte && $util.isInteger(message.splitSizeUnitInByte.low) && $util.isInteger(message.splitSizeUnitInByte.high)))
                        return "splitSizeUnitInByte: integer|Long expected";
                return null;
            };

            /**
             * Creates a ComputeSplitPointsBySizeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ComputeSplitPointsBySizeRequest} ComputeSplitPointsBySizeRequest
             */
            ComputeSplitPointsBySizeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ComputeSplitPointsBySizeRequest)
                    return object;
                var message = new $root.tablestore.proto.ComputeSplitPointsBySizeRequest();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.splitSize != null)
                    if ($util.Long)
                        (message.splitSize = $util.Long.fromValue(object.splitSize)).unsigned = false;
                    else if (typeof object.splitSize === "string")
                        message.splitSize = parseInt(object.splitSize, 10);
                    else if (typeof object.splitSize === "number")
                        message.splitSize = object.splitSize;
                    else if (typeof object.splitSize === "object")
                        message.splitSize = new $util.LongBits(object.splitSize.low >>> 0, object.splitSize.high >>> 0).toNumber();
                if (object.splitSizeUnitInByte != null)
                    if ($util.Long)
                        (message.splitSizeUnitInByte = $util.Long.fromValue(object.splitSizeUnitInByte)).unsigned = false;
                    else if (typeof object.splitSizeUnitInByte === "string")
                        message.splitSizeUnitInByte = parseInt(object.splitSizeUnitInByte, 10);
                    else if (typeof object.splitSizeUnitInByte === "number")
                        message.splitSizeUnitInByte = object.splitSizeUnitInByte;
                    else if (typeof object.splitSizeUnitInByte === "object")
                        message.splitSizeUnitInByte = new $util.LongBits(object.splitSizeUnitInByte.low >>> 0, object.splitSizeUnitInByte.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ComputeSplitPointsBySizeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @static
             * @param {tablestore.proto.ComputeSplitPointsBySizeRequest} message ComputeSplitPointsBySizeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ComputeSplitPointsBySizeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tableName = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.splitSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.splitSize = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.splitSizeUnitInByte = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.splitSizeUnitInByte = options.longs === String ? "0" : 0;
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.splitSize != null && message.hasOwnProperty("splitSize"))
                    if (typeof message.splitSize === "number")
                        object.splitSize = options.longs === String ? String(message.splitSize) : message.splitSize;
                    else
                        object.splitSize = options.longs === String ? $util.Long.prototype.toString.call(message.splitSize) : options.longs === Number ? new $util.LongBits(message.splitSize.low >>> 0, message.splitSize.high >>> 0).toNumber() : message.splitSize;
                if (message.splitSizeUnitInByte != null && message.hasOwnProperty("splitSizeUnitInByte"))
                    if (typeof message.splitSizeUnitInByte === "number")
                        object.splitSizeUnitInByte = options.longs === String ? String(message.splitSizeUnitInByte) : message.splitSizeUnitInByte;
                    else
                        object.splitSizeUnitInByte = options.longs === String ? $util.Long.prototype.toString.call(message.splitSizeUnitInByte) : options.longs === Number ? new $util.LongBits(message.splitSizeUnitInByte.low >>> 0, message.splitSizeUnitInByte.high >>> 0).toNumber() : message.splitSizeUnitInByte;
                return object;
            };

            /**
             * Converts this ComputeSplitPointsBySizeRequest to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ComputeSplitPointsBySizeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ComputeSplitPointsBySizeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ComputeSplitPointsBySizeRequest;
        })();

        proto.ComputeSplitPointsBySizeResponse = (function() {

            /**
             * Properties of a ComputeSplitPointsBySizeResponse.
             * @memberof tablestore.proto
             * @interface IComputeSplitPointsBySizeResponse
             * @property {tablestore.proto.IConsumedCapacity} consumed ComputeSplitPointsBySizeResponse consumed
             * @property {Array.<tablestore.proto.IPrimaryKeySchema>|null} [schema] ComputeSplitPointsBySizeResponse schema
             * @property {Array.<Uint8Array>|null} [splitPoints] Split points between splits, in the increasing order
             * 
             * A split is a consecutive range of primary keys,
             * whose data size is about split_size specified in the request.
             * The size could be hard to be precise.
             * 
             * A split point is an array of primary-key column w.r.t. table schema,
             * which is never longer than that of table schema.
             * Tailing -inf will be omitted to reduce transmission payloads.
             * @property {Array.<tablestore.proto.ComputeSplitPointsBySizeResponse.ISplitLocation>|null} [locations] ComputeSplitPointsBySizeResponse locations
             */

            /**
             * Constructs a new ComputeSplitPointsBySizeResponse.
             * @memberof tablestore.proto
             * @classdesc Represents a ComputeSplitPointsBySizeResponse.
             * @implements IComputeSplitPointsBySizeResponse
             * @constructor
             * @param {tablestore.proto.IComputeSplitPointsBySizeResponse=} [properties] Properties to set
             */
            function ComputeSplitPointsBySizeResponse(properties) {
                this.schema = [];
                this.splitPoints = [];
                this.locations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ComputeSplitPointsBySizeResponse consumed.
             * @member {tablestore.proto.IConsumedCapacity} consumed
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @instance
             */
            ComputeSplitPointsBySizeResponse.prototype.consumed = null;

            /**
             * ComputeSplitPointsBySizeResponse schema.
             * @member {Array.<tablestore.proto.IPrimaryKeySchema>} schema
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @instance
             */
            ComputeSplitPointsBySizeResponse.prototype.schema = $util.emptyArray;

            /**
             * Split points between splits, in the increasing order
             * 
             * A split is a consecutive range of primary keys,
             * whose data size is about split_size specified in the request.
             * The size could be hard to be precise.
             * 
             * A split point is an array of primary-key column w.r.t. table schema,
             * which is never longer than that of table schema.
             * Tailing -inf will be omitted to reduce transmission payloads.
             * @member {Array.<Uint8Array>} splitPoints
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @instance
             */
            ComputeSplitPointsBySizeResponse.prototype.splitPoints = $util.emptyArray;

            /**
             * ComputeSplitPointsBySizeResponse locations.
             * @member {Array.<tablestore.proto.ComputeSplitPointsBySizeResponse.ISplitLocation>} locations
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @instance
             */
            ComputeSplitPointsBySizeResponse.prototype.locations = $util.emptyArray;

            /**
             * Creates a new ComputeSplitPointsBySizeResponse instance using the specified properties.
             * @function create
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {tablestore.proto.IComputeSplitPointsBySizeResponse=} [properties] Properties to set
             * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse} ComputeSplitPointsBySizeResponse instance
             */
            ComputeSplitPointsBySizeResponse.create = function create(properties) {
                return new ComputeSplitPointsBySizeResponse(properties);
            };

            /**
             * Encodes the specified ComputeSplitPointsBySizeResponse message. Does not implicitly {@link tablestore.proto.ComputeSplitPointsBySizeResponse.verify|verify} messages.
             * @function encode
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {tablestore.proto.IComputeSplitPointsBySizeResponse} message ComputeSplitPointsBySizeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComputeSplitPointsBySizeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.tablestore.proto.ConsumedCapacity.encode(message.consumed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.schema != null && message.schema.length)
                    for (var i = 0; i < message.schema.length; ++i)
                        $root.tablestore.proto.PrimaryKeySchema.encode(message.schema[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.splitPoints != null && message.splitPoints.length)
                    for (var i = 0; i < message.splitPoints.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.splitPoints[i]);
                if (message.locations != null && message.locations.length)
                    for (var i = 0; i < message.locations.length; ++i)
                        $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.encode(message.locations[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ComputeSplitPointsBySizeResponse message, length delimited. Does not implicitly {@link tablestore.proto.ComputeSplitPointsBySizeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {tablestore.proto.IComputeSplitPointsBySizeResponse} message ComputeSplitPointsBySizeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComputeSplitPointsBySizeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ComputeSplitPointsBySizeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse} ComputeSplitPointsBySizeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComputeSplitPointsBySizeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ComputeSplitPointsBySizeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.consumed = $root.tablestore.proto.ConsumedCapacity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.schema && message.schema.length))
                            message.schema = [];
                        message.schema.push($root.tablestore.proto.PrimaryKeySchema.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.splitPoints && message.splitPoints.length))
                            message.splitPoints = [];
                        message.splitPoints.push(reader.bytes());
                        break;
                    case 4:
                        if (!(message.locations && message.locations.length))
                            message.locations = [];
                        message.locations.push($root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("consumed"))
                    throw $util.ProtocolError("missing required 'consumed'", { instance: message });
                return message;
            };

            /**
             * Decodes a ComputeSplitPointsBySizeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse} ComputeSplitPointsBySizeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComputeSplitPointsBySizeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ComputeSplitPointsBySizeResponse message.
             * @function verify
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ComputeSplitPointsBySizeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.tablestore.proto.ConsumedCapacity.verify(message.consumed);
                    if (error)
                        return "consumed." + error;
                }
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    if (!Array.isArray(message.schema))
                        return "schema: array expected";
                    for (var i = 0; i < message.schema.length; ++i) {
                        var error = $root.tablestore.proto.PrimaryKeySchema.verify(message.schema[i]);
                        if (error)
                            return "schema." + error;
                    }
                }
                if (message.splitPoints != null && message.hasOwnProperty("splitPoints")) {
                    if (!Array.isArray(message.splitPoints))
                        return "splitPoints: array expected";
                    for (var i = 0; i < message.splitPoints.length; ++i)
                        if (!(message.splitPoints[i] && typeof message.splitPoints[i].length === "number" || $util.isString(message.splitPoints[i])))
                            return "splitPoints: buffer[] expected";
                }
                if (message.locations != null && message.hasOwnProperty("locations")) {
                    if (!Array.isArray(message.locations))
                        return "locations: array expected";
                    for (var i = 0; i < message.locations.length; ++i) {
                        var error = $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.verify(message.locations[i]);
                        if (error)
                            return "locations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ComputeSplitPointsBySizeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse} ComputeSplitPointsBySizeResponse
             */
            ComputeSplitPointsBySizeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tablestore.proto.ComputeSplitPointsBySizeResponse)
                    return object;
                var message = new $root.tablestore.proto.ComputeSplitPointsBySizeResponse();
                if (object.consumed != null) {
                    if (typeof object.consumed !== "object")
                        throw TypeError(".tablestore.proto.ComputeSplitPointsBySizeResponse.consumed: object expected");
                    message.consumed = $root.tablestore.proto.ConsumedCapacity.fromObject(object.consumed);
                }
                if (object.schema) {
                    if (!Array.isArray(object.schema))
                        throw TypeError(".tablestore.proto.ComputeSplitPointsBySizeResponse.schema: array expected");
                    message.schema = [];
                    for (var i = 0; i < object.schema.length; ++i) {
                        if (typeof object.schema[i] !== "object")
                            throw TypeError(".tablestore.proto.ComputeSplitPointsBySizeResponse.schema: object expected");
                        message.schema[i] = $root.tablestore.proto.PrimaryKeySchema.fromObject(object.schema[i]);
                    }
                }
                if (object.splitPoints) {
                    if (!Array.isArray(object.splitPoints))
                        throw TypeError(".tablestore.proto.ComputeSplitPointsBySizeResponse.splitPoints: array expected");
                    message.splitPoints = [];
                    for (var i = 0; i < object.splitPoints.length; ++i)
                        if (typeof object.splitPoints[i] === "string")
                            $util.base64.decode(object.splitPoints[i], message.splitPoints[i] = $util.newBuffer($util.base64.length(object.splitPoints[i])), 0);
                        else if (object.splitPoints[i].length)
                            message.splitPoints[i] = object.splitPoints[i];
                }
                if (object.locations) {
                    if (!Array.isArray(object.locations))
                        throw TypeError(".tablestore.proto.ComputeSplitPointsBySizeResponse.locations: array expected");
                    message.locations = [];
                    for (var i = 0; i < object.locations.length; ++i) {
                        if (typeof object.locations[i] !== "object")
                            throw TypeError(".tablestore.proto.ComputeSplitPointsBySizeResponse.locations: object expected");
                        message.locations[i] = $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.fromObject(object.locations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ComputeSplitPointsBySizeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @static
             * @param {tablestore.proto.ComputeSplitPointsBySizeResponse} message ComputeSplitPointsBySizeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ComputeSplitPointsBySizeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.schema = [];
                    object.splitPoints = [];
                    object.locations = [];
                }
                if (options.defaults)
                    object.consumed = null;
                if (message.consumed != null && message.hasOwnProperty("consumed"))
                    object.consumed = $root.tablestore.proto.ConsumedCapacity.toObject(message.consumed, options);
                if (message.schema && message.schema.length) {
                    object.schema = [];
                    for (var j = 0; j < message.schema.length; ++j)
                        object.schema[j] = $root.tablestore.proto.PrimaryKeySchema.toObject(message.schema[j], options);
                }
                if (message.splitPoints && message.splitPoints.length) {
                    object.splitPoints = [];
                    for (var j = 0; j < message.splitPoints.length; ++j)
                        object.splitPoints[j] = options.bytes === String ? $util.base64.encode(message.splitPoints[j], 0, message.splitPoints[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.splitPoints[j]) : message.splitPoints[j];
                }
                if (message.locations && message.locations.length) {
                    object.locations = [];
                    for (var j = 0; j < message.locations.length; ++j)
                        object.locations[j] = $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.toObject(message.locations[j], options);
                }
                return object;
            };

            /**
             * Converts this ComputeSplitPointsBySizeResponse to JSON.
             * @function toJSON
             * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ComputeSplitPointsBySizeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ComputeSplitPointsBySizeResponse.SplitLocation = (function() {

                /**
                 * Properties of a SplitLocation.
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
                 * @interface ISplitLocation
                 * @property {string} location SplitLocation location
                 * @property {number|Long} repeat SplitLocation repeat
                 */

                /**
                 * Constructs a new SplitLocation.
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse
                 * @classdesc Locations where splits lies in.
                 * 
                 * By the managed nature of TableStore, these locations are no more than hints.
                 * If a location is not suitable to be seen, an empty string will be placed.
                 * @implements ISplitLocation
                 * @constructor
                 * @param {tablestore.proto.ComputeSplitPointsBySizeResponse.ISplitLocation=} [properties] Properties to set
                 */
                function SplitLocation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SplitLocation location.
                 * @member {string} location
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @instance
                 */
                SplitLocation.prototype.location = "";

                /**
                 * SplitLocation repeat.
                 * @member {number|Long} repeat
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @instance
                 */
                SplitLocation.prototype.repeat = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new SplitLocation instance using the specified properties.
                 * @function create
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {tablestore.proto.ComputeSplitPointsBySizeResponse.ISplitLocation=} [properties] Properties to set
                 * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation} SplitLocation instance
                 */
                SplitLocation.create = function create(properties) {
                    return new SplitLocation(properties);
                };

                /**
                 * Encodes the specified SplitLocation message. Does not implicitly {@link tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {tablestore.proto.ComputeSplitPointsBySizeResponse.ISplitLocation} message SplitLocation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SplitLocation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.location);
                    writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.repeat);
                    return writer;
                };

                /**
                 * Encodes the specified SplitLocation message, length delimited. Does not implicitly {@link tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {tablestore.proto.ComputeSplitPointsBySizeResponse.ISplitLocation} message SplitLocation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SplitLocation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SplitLocation message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation} SplitLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SplitLocation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.location = reader.string();
                            break;
                        case 2:
                            message.repeat = reader.sint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("location"))
                        throw $util.ProtocolError("missing required 'location'", { instance: message });
                    if (!message.hasOwnProperty("repeat"))
                        throw $util.ProtocolError("missing required 'repeat'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a SplitLocation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation} SplitLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SplitLocation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SplitLocation message.
                 * @function verify
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SplitLocation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.location))
                        return "location: string expected";
                    if (!$util.isInteger(message.repeat) && !(message.repeat && $util.isInteger(message.repeat.low) && $util.isInteger(message.repeat.high)))
                        return "repeat: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a SplitLocation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation} SplitLocation
                 */
                SplitLocation.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation)
                        return object;
                    var message = new $root.tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation();
                    if (object.location != null)
                        message.location = String(object.location);
                    if (object.repeat != null)
                        if ($util.Long)
                            (message.repeat = $util.Long.fromValue(object.repeat)).unsigned = false;
                        else if (typeof object.repeat === "string")
                            message.repeat = parseInt(object.repeat, 10);
                        else if (typeof object.repeat === "number")
                            message.repeat = object.repeat;
                        else if (typeof object.repeat === "object")
                            message.repeat = new $util.LongBits(object.repeat.low >>> 0, object.repeat.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a SplitLocation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @static
                 * @param {tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation} message SplitLocation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SplitLocation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.location = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.repeat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.repeat = options.longs === String ? "0" : 0;
                    }
                    if (message.location != null && message.hasOwnProperty("location"))
                        object.location = message.location;
                    if (message.repeat != null && message.hasOwnProperty("repeat"))
                        if (typeof message.repeat === "number")
                            object.repeat = options.longs === String ? String(message.repeat) : message.repeat;
                        else
                            object.repeat = options.longs === String ? $util.Long.prototype.toString.call(message.repeat) : options.longs === Number ? new $util.LongBits(message.repeat.low >>> 0, message.repeat.high >>> 0).toNumber() : message.repeat;
                    return object;
                };

                /**
                 * Converts this SplitLocation to JSON.
                 * @function toJSON
                 * @memberof tablestore.proto.ComputeSplitPointsBySizeResponse.SplitLocation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SplitLocation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SplitLocation;
            })();

            return ComputeSplitPointsBySizeResponse;
        })();

        return proto;
    })();

    return tablestore;
})();

module.exports = $root;
