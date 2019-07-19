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

    tablestore.filter = (function() {

        /**
         * Namespace filter.
         * @memberof tablestore
         * @namespace
         */
        var filter = {};

        filter.proto = (function() {

            /**
             * Namespace proto.
             * @memberof tablestore.filter
             * @namespace
             */
            var proto = {};

            /**
             * FilterType enum.
             * @name tablestore.filter.proto.FilterType
             * @enum {string}
             * @property {number} FT_SINGLE_COLUMN_VALUE=1 FT_SINGLE_COLUMN_VALUE value
             * @property {number} FT_COMPOSITE_COLUMN_VALUE=2 FT_COMPOSITE_COLUMN_VALUE value
             * @property {number} FT_COLUMN_PAGINATION=3 FT_COLUMN_PAGINATION value
             */
            proto.FilterType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "FT_SINGLE_COLUMN_VALUE"] = 1;
                values[valuesById[2] = "FT_COMPOSITE_COLUMN_VALUE"] = 2;
                values[valuesById[3] = "FT_COLUMN_PAGINATION"] = 3;
                return values;
            })();

            /**
             * ComparatorType enum.
             * @name tablestore.filter.proto.ComparatorType
             * @enum {string}
             * @property {number} CT_EQUAL=1 CT_EQUAL value
             * @property {number} CT_NOT_EQUAL=2 CT_NOT_EQUAL value
             * @property {number} CT_GREATER_THAN=3 CT_GREATER_THAN value
             * @property {number} CT_GREATER_EQUAL=4 CT_GREATER_EQUAL value
             * @property {number} CT_LESS_THAN=5 CT_LESS_THAN value
             * @property {number} CT_LESS_EQUAL=6 CT_LESS_EQUAL value
             */
            proto.ComparatorType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "CT_EQUAL"] = 1;
                values[valuesById[2] = "CT_NOT_EQUAL"] = 2;
                values[valuesById[3] = "CT_GREATER_THAN"] = 3;
                values[valuesById[4] = "CT_GREATER_EQUAL"] = 4;
                values[valuesById[5] = "CT_LESS_THAN"] = 5;
                values[valuesById[6] = "CT_LESS_EQUAL"] = 6;
                return values;
            })();

            proto.SingleColumnValueFilter = (function() {

                /**
                 * Properties of a SingleColumnValueFilter.
                 * @memberof tablestore.filter.proto
                 * @interface ISingleColumnValueFilter
                 * @property {tablestore.filter.proto.ComparatorType} comparator SingleColumnValueFilter comparator
                 * @property {string} columnName SingleColumnValueFilter columnName
                 * @property {Uint8Array} columnValue SingleColumnValueFilter columnValue
                 * @property {boolean} filterIfMissing SingleColumnValueFilter filterIfMissing
                 * @property {boolean} latestVersionOnly SingleColumnValueFilter latestVersionOnly
                 */

                /**
                 * Constructs a new SingleColumnValueFilter.
                 * @memberof tablestore.filter.proto
                 * @classdesc Represents a SingleColumnValueFilter.
                 * @implements ISingleColumnValueFilter
                 * @constructor
                 * @param {tablestore.filter.proto.ISingleColumnValueFilter=} [properties] Properties to set
                 */
                function SingleColumnValueFilter(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SingleColumnValueFilter comparator.
                 * @member {tablestore.filter.proto.ComparatorType} comparator
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @instance
                 */
                SingleColumnValueFilter.prototype.comparator = 1;

                /**
                 * SingleColumnValueFilter columnName.
                 * @member {string} columnName
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @instance
                 */
                SingleColumnValueFilter.prototype.columnName = "";

                /**
                 * SingleColumnValueFilter columnValue.
                 * @member {Uint8Array} columnValue
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @instance
                 */
                SingleColumnValueFilter.prototype.columnValue = $util.newBuffer([]);

                /**
                 * SingleColumnValueFilter filterIfMissing.
                 * @member {boolean} filterIfMissing
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @instance
                 */
                SingleColumnValueFilter.prototype.filterIfMissing = false;

                /**
                 * SingleColumnValueFilter latestVersionOnly.
                 * @member {boolean} latestVersionOnly
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @instance
                 */
                SingleColumnValueFilter.prototype.latestVersionOnly = false;

                /**
                 * Creates a new SingleColumnValueFilter instance using the specified properties.
                 * @function create
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.ISingleColumnValueFilter=} [properties] Properties to set
                 * @returns {tablestore.filter.proto.SingleColumnValueFilter} SingleColumnValueFilter instance
                 */
                SingleColumnValueFilter.create = function create(properties) {
                    return new SingleColumnValueFilter(properties);
                };

                /**
                 * Encodes the specified SingleColumnValueFilter message. Does not implicitly {@link tablestore.filter.proto.SingleColumnValueFilter.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.ISingleColumnValueFilter} message SingleColumnValueFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleColumnValueFilter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.comparator);
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.columnName);
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.columnValue);
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.filterIfMissing);
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.latestVersionOnly);
                    return writer;
                };

                /**
                 * Encodes the specified SingleColumnValueFilter message, length delimited. Does not implicitly {@link tablestore.filter.proto.SingleColumnValueFilter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.ISingleColumnValueFilter} message SingleColumnValueFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleColumnValueFilter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SingleColumnValueFilter message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.filter.proto.SingleColumnValueFilter} SingleColumnValueFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleColumnValueFilter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.filter.proto.SingleColumnValueFilter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.comparator = reader.int32();
                            break;
                        case 2:
                            message.columnName = reader.string();
                            break;
                        case 3:
                            message.columnValue = reader.bytes();
                            break;
                        case 4:
                            message.filterIfMissing = reader.bool();
                            break;
                        case 5:
                            message.latestVersionOnly = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("comparator"))
                        throw $util.ProtocolError("missing required 'comparator'", { instance: message });
                    if (!message.hasOwnProperty("columnName"))
                        throw $util.ProtocolError("missing required 'columnName'", { instance: message });
                    if (!message.hasOwnProperty("columnValue"))
                        throw $util.ProtocolError("missing required 'columnValue'", { instance: message });
                    if (!message.hasOwnProperty("filterIfMissing"))
                        throw $util.ProtocolError("missing required 'filterIfMissing'", { instance: message });
                    if (!message.hasOwnProperty("latestVersionOnly"))
                        throw $util.ProtocolError("missing required 'latestVersionOnly'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a SingleColumnValueFilter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.filter.proto.SingleColumnValueFilter} SingleColumnValueFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleColumnValueFilter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SingleColumnValueFilter message.
                 * @function verify
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SingleColumnValueFilter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    switch (message.comparator) {
                    default:
                        return "comparator: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                    if (!$util.isString(message.columnName))
                        return "columnName: string expected";
                    if (!(message.columnValue && typeof message.columnValue.length === "number" || $util.isString(message.columnValue)))
                        return "columnValue: buffer expected";
                    if (typeof message.filterIfMissing !== "boolean")
                        return "filterIfMissing: boolean expected";
                    if (typeof message.latestVersionOnly !== "boolean")
                        return "latestVersionOnly: boolean expected";
                    return null;
                };

                /**
                 * Creates a SingleColumnValueFilter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.filter.proto.SingleColumnValueFilter} SingleColumnValueFilter
                 */
                SingleColumnValueFilter.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.filter.proto.SingleColumnValueFilter)
                        return object;
                    var message = new $root.tablestore.filter.proto.SingleColumnValueFilter();
                    switch (object.comparator) {
                    case "CT_EQUAL":
                    case 1:
                        message.comparator = 1;
                        break;
                    case "CT_NOT_EQUAL":
                    case 2:
                        message.comparator = 2;
                        break;
                    case "CT_GREATER_THAN":
                    case 3:
                        message.comparator = 3;
                        break;
                    case "CT_GREATER_EQUAL":
                    case 4:
                        message.comparator = 4;
                        break;
                    case "CT_LESS_THAN":
                    case 5:
                        message.comparator = 5;
                        break;
                    case "CT_LESS_EQUAL":
                    case 6:
                        message.comparator = 6;
                        break;
                    }
                    if (object.columnName != null)
                        message.columnName = String(object.columnName);
                    if (object.columnValue != null)
                        if (typeof object.columnValue === "string")
                            $util.base64.decode(object.columnValue, message.columnValue = $util.newBuffer($util.base64.length(object.columnValue)), 0);
                        else if (object.columnValue.length)
                            message.columnValue = object.columnValue;
                    if (object.filterIfMissing != null)
                        message.filterIfMissing = Boolean(object.filterIfMissing);
                    if (object.latestVersionOnly != null)
                        message.latestVersionOnly = Boolean(object.latestVersionOnly);
                    return message;
                };

                /**
                 * Creates a plain object from a SingleColumnValueFilter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.SingleColumnValueFilter} message SingleColumnValueFilter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SingleColumnValueFilter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.comparator = options.enums === String ? "CT_EQUAL" : 1;
                        object.columnName = "";
                        if (options.bytes === String)
                            object.columnValue = "";
                        else {
                            object.columnValue = [];
                            if (options.bytes !== Array)
                                object.columnValue = $util.newBuffer(object.columnValue);
                        }
                        object.filterIfMissing = false;
                        object.latestVersionOnly = false;
                    }
                    if (message.comparator != null && message.hasOwnProperty("comparator"))
                        object.comparator = options.enums === String ? $root.tablestore.filter.proto.ComparatorType[message.comparator] : message.comparator;
                    if (message.columnName != null && message.hasOwnProperty("columnName"))
                        object.columnName = message.columnName;
                    if (message.columnValue != null && message.hasOwnProperty("columnValue"))
                        object.columnValue = options.bytes === String ? $util.base64.encode(message.columnValue, 0, message.columnValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.columnValue) : message.columnValue;
                    if (message.filterIfMissing != null && message.hasOwnProperty("filterIfMissing"))
                        object.filterIfMissing = message.filterIfMissing;
                    if (message.latestVersionOnly != null && message.hasOwnProperty("latestVersionOnly"))
                        object.latestVersionOnly = message.latestVersionOnly;
                    return object;
                };

                /**
                 * Converts this SingleColumnValueFilter to JSON.
                 * @function toJSON
                 * @memberof tablestore.filter.proto.SingleColumnValueFilter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SingleColumnValueFilter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SingleColumnValueFilter;
            })();

            /**
             * LogicalOperator enum.
             * @name tablestore.filter.proto.LogicalOperator
             * @enum {string}
             * @property {number} LO_NOT=1 LO_NOT value
             * @property {number} LO_AND=2 LO_AND value
             * @property {number} LO_OR=3 LO_OR value
             */
            proto.LogicalOperator = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LO_NOT"] = 1;
                values[valuesById[2] = "LO_AND"] = 2;
                values[valuesById[3] = "LO_OR"] = 3;
                return values;
            })();

            proto.CompositeColumnValueFilter = (function() {

                /**
                 * Properties of a CompositeColumnValueFilter.
                 * @memberof tablestore.filter.proto
                 * @interface ICompositeColumnValueFilter
                 * @property {tablestore.filter.proto.LogicalOperator} combinator CompositeColumnValueFilter combinator
                 * @property {Array.<tablestore.filter.proto.IFilter>|null} [subFilters] CompositeColumnValueFilter subFilters
                 */

                /**
                 * Constructs a new CompositeColumnValueFilter.
                 * @memberof tablestore.filter.proto
                 * @classdesc Represents a CompositeColumnValueFilter.
                 * @implements ICompositeColumnValueFilter
                 * @constructor
                 * @param {tablestore.filter.proto.ICompositeColumnValueFilter=} [properties] Properties to set
                 */
                function CompositeColumnValueFilter(properties) {
                    this.subFilters = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CompositeColumnValueFilter combinator.
                 * @member {tablestore.filter.proto.LogicalOperator} combinator
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @instance
                 */
                CompositeColumnValueFilter.prototype.combinator = 1;

                /**
                 * CompositeColumnValueFilter subFilters.
                 * @member {Array.<tablestore.filter.proto.IFilter>} subFilters
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @instance
                 */
                CompositeColumnValueFilter.prototype.subFilters = $util.emptyArray;

                /**
                 * Creates a new CompositeColumnValueFilter instance using the specified properties.
                 * @function create
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.ICompositeColumnValueFilter=} [properties] Properties to set
                 * @returns {tablestore.filter.proto.CompositeColumnValueFilter} CompositeColumnValueFilter instance
                 */
                CompositeColumnValueFilter.create = function create(properties) {
                    return new CompositeColumnValueFilter(properties);
                };

                /**
                 * Encodes the specified CompositeColumnValueFilter message. Does not implicitly {@link tablestore.filter.proto.CompositeColumnValueFilter.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.ICompositeColumnValueFilter} message CompositeColumnValueFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CompositeColumnValueFilter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.combinator);
                    if (message.subFilters != null && message.subFilters.length)
                        for (var i = 0; i < message.subFilters.length; ++i)
                            $root.tablestore.filter.proto.Filter.encode(message.subFilters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CompositeColumnValueFilter message, length delimited. Does not implicitly {@link tablestore.filter.proto.CompositeColumnValueFilter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.ICompositeColumnValueFilter} message CompositeColumnValueFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CompositeColumnValueFilter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CompositeColumnValueFilter message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.filter.proto.CompositeColumnValueFilter} CompositeColumnValueFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CompositeColumnValueFilter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.filter.proto.CompositeColumnValueFilter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.combinator = reader.int32();
                            break;
                        case 2:
                            if (!(message.subFilters && message.subFilters.length))
                                message.subFilters = [];
                            message.subFilters.push($root.tablestore.filter.proto.Filter.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("combinator"))
                        throw $util.ProtocolError("missing required 'combinator'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a CompositeColumnValueFilter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.filter.proto.CompositeColumnValueFilter} CompositeColumnValueFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CompositeColumnValueFilter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CompositeColumnValueFilter message.
                 * @function verify
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CompositeColumnValueFilter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    switch (message.combinator) {
                    default:
                        return "combinator: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                    if (message.subFilters != null && message.hasOwnProperty("subFilters")) {
                        if (!Array.isArray(message.subFilters))
                            return "subFilters: array expected";
                        for (var i = 0; i < message.subFilters.length; ++i) {
                            var error = $root.tablestore.filter.proto.Filter.verify(message.subFilters[i]);
                            if (error)
                                return "subFilters." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a CompositeColumnValueFilter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.filter.proto.CompositeColumnValueFilter} CompositeColumnValueFilter
                 */
                CompositeColumnValueFilter.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.filter.proto.CompositeColumnValueFilter)
                        return object;
                    var message = new $root.tablestore.filter.proto.CompositeColumnValueFilter();
                    switch (object.combinator) {
                    case "LO_NOT":
                    case 1:
                        message.combinator = 1;
                        break;
                    case "LO_AND":
                    case 2:
                        message.combinator = 2;
                        break;
                    case "LO_OR":
                    case 3:
                        message.combinator = 3;
                        break;
                    }
                    if (object.subFilters) {
                        if (!Array.isArray(object.subFilters))
                            throw TypeError(".tablestore.filter.proto.CompositeColumnValueFilter.subFilters: array expected");
                        message.subFilters = [];
                        for (var i = 0; i < object.subFilters.length; ++i) {
                            if (typeof object.subFilters[i] !== "object")
                                throw TypeError(".tablestore.filter.proto.CompositeColumnValueFilter.subFilters: object expected");
                            message.subFilters[i] = $root.tablestore.filter.proto.Filter.fromObject(object.subFilters[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CompositeColumnValueFilter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @static
                 * @param {tablestore.filter.proto.CompositeColumnValueFilter} message CompositeColumnValueFilter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CompositeColumnValueFilter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.subFilters = [];
                    if (options.defaults)
                        object.combinator = options.enums === String ? "LO_NOT" : 1;
                    if (message.combinator != null && message.hasOwnProperty("combinator"))
                        object.combinator = options.enums === String ? $root.tablestore.filter.proto.LogicalOperator[message.combinator] : message.combinator;
                    if (message.subFilters && message.subFilters.length) {
                        object.subFilters = [];
                        for (var j = 0; j < message.subFilters.length; ++j)
                            object.subFilters[j] = $root.tablestore.filter.proto.Filter.toObject(message.subFilters[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this CompositeColumnValueFilter to JSON.
                 * @function toJSON
                 * @memberof tablestore.filter.proto.CompositeColumnValueFilter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CompositeColumnValueFilter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CompositeColumnValueFilter;
            })();

            proto.ColumnPaginationFilter = (function() {

                /**
                 * Properties of a ColumnPaginationFilter.
                 * @memberof tablestore.filter.proto
                 * @interface IColumnPaginationFilter
                 * @property {number} offset ColumnPaginationFilter offset
                 * @property {number} limit ColumnPaginationFilter limit
                 */

                /**
                 * Constructs a new ColumnPaginationFilter.
                 * @memberof tablestore.filter.proto
                 * @classdesc Represents a ColumnPaginationFilter.
                 * @implements IColumnPaginationFilter
                 * @constructor
                 * @param {tablestore.filter.proto.IColumnPaginationFilter=} [properties] Properties to set
                 */
                function ColumnPaginationFilter(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ColumnPaginationFilter offset.
                 * @member {number} offset
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @instance
                 */
                ColumnPaginationFilter.prototype.offset = 0;

                /**
                 * ColumnPaginationFilter limit.
                 * @member {number} limit
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @instance
                 */
                ColumnPaginationFilter.prototype.limit = 0;

                /**
                 * Creates a new ColumnPaginationFilter instance using the specified properties.
                 * @function create
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {tablestore.filter.proto.IColumnPaginationFilter=} [properties] Properties to set
                 * @returns {tablestore.filter.proto.ColumnPaginationFilter} ColumnPaginationFilter instance
                 */
                ColumnPaginationFilter.create = function create(properties) {
                    return new ColumnPaginationFilter(properties);
                };

                /**
                 * Encodes the specified ColumnPaginationFilter message. Does not implicitly {@link tablestore.filter.proto.ColumnPaginationFilter.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {tablestore.filter.proto.IColumnPaginationFilter} message ColumnPaginationFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ColumnPaginationFilter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
                    return writer;
                };

                /**
                 * Encodes the specified ColumnPaginationFilter message, length delimited. Does not implicitly {@link tablestore.filter.proto.ColumnPaginationFilter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {tablestore.filter.proto.IColumnPaginationFilter} message ColumnPaginationFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ColumnPaginationFilter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ColumnPaginationFilter message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.filter.proto.ColumnPaginationFilter} ColumnPaginationFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ColumnPaginationFilter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.filter.proto.ColumnPaginationFilter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.offset = reader.int32();
                            break;
                        case 2:
                            message.limit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("offset"))
                        throw $util.ProtocolError("missing required 'offset'", { instance: message });
                    if (!message.hasOwnProperty("limit"))
                        throw $util.ProtocolError("missing required 'limit'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a ColumnPaginationFilter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.filter.proto.ColumnPaginationFilter} ColumnPaginationFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ColumnPaginationFilter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ColumnPaginationFilter message.
                 * @function verify
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ColumnPaginationFilter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                    return null;
                };

                /**
                 * Creates a ColumnPaginationFilter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.filter.proto.ColumnPaginationFilter} ColumnPaginationFilter
                 */
                ColumnPaginationFilter.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.filter.proto.ColumnPaginationFilter)
                        return object;
                    var message = new $root.tablestore.filter.proto.ColumnPaginationFilter();
                    if (object.offset != null)
                        message.offset = object.offset | 0;
                    if (object.limit != null)
                        message.limit = object.limit | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ColumnPaginationFilter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @static
                 * @param {tablestore.filter.proto.ColumnPaginationFilter} message ColumnPaginationFilter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ColumnPaginationFilter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.offset = 0;
                        object.limit = 0;
                    }
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        object.offset = message.offset;
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        object.limit = message.limit;
                    return object;
                };

                /**
                 * Converts this ColumnPaginationFilter to JSON.
                 * @function toJSON
                 * @memberof tablestore.filter.proto.ColumnPaginationFilter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ColumnPaginationFilter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ColumnPaginationFilter;
            })();

            proto.Filter = (function() {

                /**
                 * Properties of a Filter.
                 * @memberof tablestore.filter.proto
                 * @interface IFilter
                 * @property {tablestore.filter.proto.FilterType} type Filter type
                 * @property {Uint8Array} filter Filter filter
                 */

                /**
                 * Constructs a new Filter.
                 * @memberof tablestore.filter.proto
                 * @classdesc Represents a Filter.
                 * @implements IFilter
                 * @constructor
                 * @param {tablestore.filter.proto.IFilter=} [properties] Properties to set
                 */
                function Filter(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Filter type.
                 * @member {tablestore.filter.proto.FilterType} type
                 * @memberof tablestore.filter.proto.Filter
                 * @instance
                 */
                Filter.prototype.type = 1;

                /**
                 * Filter filter.
                 * @member {Uint8Array} filter
                 * @memberof tablestore.filter.proto.Filter
                 * @instance
                 */
                Filter.prototype.filter = $util.newBuffer([]);

                /**
                 * Creates a new Filter instance using the specified properties.
                 * @function create
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {tablestore.filter.proto.IFilter=} [properties] Properties to set
                 * @returns {tablestore.filter.proto.Filter} Filter instance
                 */
                Filter.create = function create(properties) {
                    return new Filter(properties);
                };

                /**
                 * Encodes the specified Filter message. Does not implicitly {@link tablestore.filter.proto.Filter.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {tablestore.filter.proto.IFilter} message Filter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Filter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.filter);
                    return writer;
                };

                /**
                 * Encodes the specified Filter message, length delimited. Does not implicitly {@link tablestore.filter.proto.Filter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {tablestore.filter.proto.IFilter} message Filter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Filter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Filter message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.filter.proto.Filter} Filter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Filter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.filter.proto.Filter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.filter = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("type"))
                        throw $util.ProtocolError("missing required 'type'", { instance: message });
                    if (!message.hasOwnProperty("filter"))
                        throw $util.ProtocolError("missing required 'filter'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a Filter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.filter.proto.Filter} Filter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Filter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Filter message.
                 * @function verify
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Filter.verify = function verify(message) {
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
                    if (!(message.filter && typeof message.filter.length === "number" || $util.isString(message.filter)))
                        return "filter: buffer expected";
                    return null;
                };

                /**
                 * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.filter.proto.Filter} Filter
                 */
                Filter.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.filter.proto.Filter)
                        return object;
                    var message = new $root.tablestore.filter.proto.Filter();
                    switch (object.type) {
                    case "FT_SINGLE_COLUMN_VALUE":
                    case 1:
                        message.type = 1;
                        break;
                    case "FT_COMPOSITE_COLUMN_VALUE":
                    case 2:
                        message.type = 2;
                        break;
                    case "FT_COLUMN_PAGINATION":
                    case 3:
                        message.type = 3;
                        break;
                    }
                    if (object.filter != null)
                        if (typeof object.filter === "string")
                            $util.base64.decode(object.filter, message.filter = $util.newBuffer($util.base64.length(object.filter)), 0);
                        else if (object.filter.length)
                            message.filter = object.filter;
                    return message;
                };

                /**
                 * Creates a plain object from a Filter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.filter.proto.Filter
                 * @static
                 * @param {tablestore.filter.proto.Filter} message Filter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Filter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "FT_SINGLE_COLUMN_VALUE" : 1;
                        if (options.bytes === String)
                            object.filter = "";
                        else {
                            object.filter = [];
                            if (options.bytes !== Array)
                                object.filter = $util.newBuffer(object.filter);
                        }
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.tablestore.filter.proto.FilterType[message.type] : message.type;
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        object.filter = options.bytes === String ? $util.base64.encode(message.filter, 0, message.filter.length) : options.bytes === Array ? Array.prototype.slice.call(message.filter) : message.filter;
                    return object;
                };

                /**
                 * Converts this Filter to JSON.
                 * @function toJSON
                 * @memberof tablestore.filter.proto.Filter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Filter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Filter;
            })();

            return proto;
        })();

        return filter;
    })();

    return tablestore;
})();

module.exports = $root;
