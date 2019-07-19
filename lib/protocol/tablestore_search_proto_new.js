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

    tablestore.search = (function() {

        /**
         * Namespace search.
         * @memberof tablestore
         * @namespace
         */
        var search = {};

        search.proto = (function() {

            /**
             * Namespace proto.
             * @memberof tablestore.search
             * @namespace
             */
            var proto = {};

            /**
             * QueryType enum.
             * @name tablestore.search.proto.QueryType
             * @enum {string}
             * @property {number} MATCH_QUERY=1 MATCH_QUERY value
             * @property {number} MATCH_PHRASE_QUERY=2 MATCH_PHRASE_QUERY value
             * @property {number} TERM_QUERY=3 TERM_QUERY value
             * @property {number} RANGE_QUERY=4 RANGE_QUERY value
             * @property {number} PREFIX_QUERY=5 PREFIX_QUERY value
             * @property {number} BOOL_QUERY=6 BOOL_QUERY value
             * @property {number} CONST_SCORE_QUERY=7 CONST_SCORE_QUERY value
             * @property {number} FUNCTION_SCORE_QUERY=8 FUNCTION_SCORE_QUERY value
             * @property {number} NESTED_QUERY=9 NESTED_QUERY value
             * @property {number} WILDCARD_QUERY=10 WILDCARD_QUERY value
             * @property {number} MATCH_ALL_QUERY=11 MATCH_ALL_QUERY value
             * @property {number} GEO_BOUNDING_BOX_QUERY=12 GEO_BOUNDING_BOX_QUERY value
             * @property {number} GEO_DISTANCE_QUERY=13 GEO_DISTANCE_QUERY value
             * @property {number} GEO_POLYGON_QUERY=14 GEO_POLYGON_QUERY value
             * @property {number} TERMS_QUERY=15 TERMS_QUERY value
             * @property {number} EXISTS_QUERY=16 EXISTS_QUERY value
             */
            proto.QueryType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "MATCH_QUERY"] = 1;
                values[valuesById[2] = "MATCH_PHRASE_QUERY"] = 2;
                values[valuesById[3] = "TERM_QUERY"] = 3;
                values[valuesById[4] = "RANGE_QUERY"] = 4;
                values[valuesById[5] = "PREFIX_QUERY"] = 5;
                values[valuesById[6] = "BOOL_QUERY"] = 6;
                values[valuesById[7] = "CONST_SCORE_QUERY"] = 7;
                values[valuesById[8] = "FUNCTION_SCORE_QUERY"] = 8;
                values[valuesById[9] = "NESTED_QUERY"] = 9;
                values[valuesById[10] = "WILDCARD_QUERY"] = 10;
                values[valuesById[11] = "MATCH_ALL_QUERY"] = 11;
                values[valuesById[12] = "GEO_BOUNDING_BOX_QUERY"] = 12;
                values[valuesById[13] = "GEO_DISTANCE_QUERY"] = 13;
                values[valuesById[14] = "GEO_POLYGON_QUERY"] = 14;
                values[valuesById[15] = "TERMS_QUERY"] = 15;
                values[valuesById[16] = "EXISTS_QUERY"] = 16;
                return values;
            })();

            /**
             * QueryOperator enum.
             * @name tablestore.search.proto.QueryOperator
             * @enum {string}
             * @property {number} OR=1 OR value
             * @property {number} AND=2 AND value
             */
            proto.QueryOperator = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "OR"] = 1;
                values[valuesById[2] = "AND"] = 2;
                return values;
            })();

            proto.MatchQuery = (function() {

                /**
                 * Properties of a MatchQuery.
                 * @memberof tablestore.search.proto
                 * @interface IMatchQuery
                 * @property {string|null} [fieldName] MatchQuery fieldName
                 * @property {string|null} [text] MatchQuery text
                 * @property {number|null} [minimumShouldMatch] MatchQuery minimumShouldMatch
                 * @property {tablestore.search.proto.QueryOperator|null} [operator] MatchQuery operator
                 */

                /**
                 * Constructs a new MatchQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a MatchQuery.
                 * @implements IMatchQuery
                 * @constructor
                 * @param {tablestore.search.proto.IMatchQuery=} [properties] Properties to set
                 */
                function MatchQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MatchQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.MatchQuery
                 * @instance
                 */
                MatchQuery.prototype.fieldName = "";

                /**
                 * MatchQuery text.
                 * @member {string} text
                 * @memberof tablestore.search.proto.MatchQuery
                 * @instance
                 */
                MatchQuery.prototype.text = "";

                /**
                 * MatchQuery minimumShouldMatch.
                 * @member {number} minimumShouldMatch
                 * @memberof tablestore.search.proto.MatchQuery
                 * @instance
                 */
                MatchQuery.prototype.minimumShouldMatch = 0;

                /**
                 * MatchQuery operator.
                 * @member {tablestore.search.proto.QueryOperator} operator
                 * @memberof tablestore.search.proto.MatchQuery
                 * @instance
                 */
                MatchQuery.prototype.operator = 1;

                /**
                 * Creates a new MatchQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.MatchQuery} MatchQuery instance
                 */
                MatchQuery.create = function create(properties) {
                    return new MatchQuery(properties);
                };

                /**
                 * Encodes the specified MatchQuery message. Does not implicitly {@link tablestore.search.proto.MatchQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchQuery} message MatchQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatchQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.minimumShouldMatch != null && message.hasOwnProperty("minimumShouldMatch"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.minimumShouldMatch);
                    if (message.operator != null && message.hasOwnProperty("operator"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.operator);
                    return writer;
                };

                /**
                 * Encodes the specified MatchQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.MatchQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchQuery} message MatchQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatchQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MatchQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.MatchQuery} MatchQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatchQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.MatchQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.minimumShouldMatch = reader.int32();
                            break;
                        case 4:
                            message.operator = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MatchQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.MatchQuery} MatchQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatchQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MatchQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MatchQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.minimumShouldMatch != null && message.hasOwnProperty("minimumShouldMatch"))
                        if (!$util.isInteger(message.minimumShouldMatch))
                            return "minimumShouldMatch: integer expected";
                    if (message.operator != null && message.hasOwnProperty("operator"))
                        switch (message.operator) {
                        default:
                            return "operator: enum value expected";
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a MatchQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.MatchQuery} MatchQuery
                 */
                MatchQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.MatchQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.MatchQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.minimumShouldMatch != null)
                        message.minimumShouldMatch = object.minimumShouldMatch | 0;
                    switch (object.operator) {
                    case "OR":
                    case 1:
                        message.operator = 1;
                        break;
                    case "AND":
                    case 2:
                        message.operator = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MatchQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.MatchQuery
                 * @static
                 * @param {tablestore.search.proto.MatchQuery} message MatchQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MatchQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.text = "";
                        object.minimumShouldMatch = 0;
                        object.operator = options.enums === String ? "OR" : 1;
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.minimumShouldMatch != null && message.hasOwnProperty("minimumShouldMatch"))
                        object.minimumShouldMatch = message.minimumShouldMatch;
                    if (message.operator != null && message.hasOwnProperty("operator"))
                        object.operator = options.enums === String ? $root.tablestore.search.proto.QueryOperator[message.operator] : message.operator;
                    return object;
                };

                /**
                 * Converts this MatchQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.MatchQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MatchQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MatchQuery;
            })();

            proto.MatchPhraseQuery = (function() {

                /**
                 * Properties of a MatchPhraseQuery.
                 * @memberof tablestore.search.proto
                 * @interface IMatchPhraseQuery
                 * @property {string|null} [fieldName] MatchPhraseQuery fieldName
                 * @property {string|null} [text] MatchPhraseQuery text
                 */

                /**
                 * Constructs a new MatchPhraseQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a MatchPhraseQuery.
                 * @implements IMatchPhraseQuery
                 * @constructor
                 * @param {tablestore.search.proto.IMatchPhraseQuery=} [properties] Properties to set
                 */
                function MatchPhraseQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MatchPhraseQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @instance
                 */
                MatchPhraseQuery.prototype.fieldName = "";

                /**
                 * MatchPhraseQuery text.
                 * @member {string} text
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @instance
                 */
                MatchPhraseQuery.prototype.text = "";

                /**
                 * Creates a new MatchPhraseQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchPhraseQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.MatchPhraseQuery} MatchPhraseQuery instance
                 */
                MatchPhraseQuery.create = function create(properties) {
                    return new MatchPhraseQuery(properties);
                };

                /**
                 * Encodes the specified MatchPhraseQuery message. Does not implicitly {@link tablestore.search.proto.MatchPhraseQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchPhraseQuery} message MatchPhraseQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatchPhraseQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified MatchPhraseQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.MatchPhraseQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchPhraseQuery} message MatchPhraseQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatchPhraseQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MatchPhraseQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.MatchPhraseQuery} MatchPhraseQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatchPhraseQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.MatchPhraseQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MatchPhraseQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.MatchPhraseQuery} MatchPhraseQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatchPhraseQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MatchPhraseQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MatchPhraseQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a MatchPhraseQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.MatchPhraseQuery} MatchPhraseQuery
                 */
                MatchPhraseQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.MatchPhraseQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.MatchPhraseQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a MatchPhraseQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @static
                 * @param {tablestore.search.proto.MatchPhraseQuery} message MatchPhraseQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MatchPhraseQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.text = "";
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this MatchPhraseQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.MatchPhraseQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MatchPhraseQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MatchPhraseQuery;
            })();

            proto.MatchAllQuery = (function() {

                /**
                 * Properties of a MatchAllQuery.
                 * @memberof tablestore.search.proto
                 * @interface IMatchAllQuery
                 */

                /**
                 * Constructs a new MatchAllQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a MatchAllQuery.
                 * @implements IMatchAllQuery
                 * @constructor
                 * @param {tablestore.search.proto.IMatchAllQuery=} [properties] Properties to set
                 */
                function MatchAllQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new MatchAllQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchAllQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.MatchAllQuery} MatchAllQuery instance
                 */
                MatchAllQuery.create = function create(properties) {
                    return new MatchAllQuery(properties);
                };

                /**
                 * Encodes the specified MatchAllQuery message. Does not implicitly {@link tablestore.search.proto.MatchAllQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchAllQuery} message MatchAllQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatchAllQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified MatchAllQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.MatchAllQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {tablestore.search.proto.IMatchAllQuery} message MatchAllQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatchAllQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MatchAllQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.MatchAllQuery} MatchAllQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatchAllQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.MatchAllQuery();
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
                 * Decodes a MatchAllQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.MatchAllQuery} MatchAllQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatchAllQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MatchAllQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MatchAllQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a MatchAllQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.MatchAllQuery} MatchAllQuery
                 */
                MatchAllQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.MatchAllQuery)
                        return object;
                    return new $root.tablestore.search.proto.MatchAllQuery();
                };

                /**
                 * Creates a plain object from a MatchAllQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @static
                 * @param {tablestore.search.proto.MatchAllQuery} message MatchAllQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MatchAllQuery.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this MatchAllQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.MatchAllQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MatchAllQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MatchAllQuery;
            })();

            proto.TermQuery = (function() {

                /**
                 * Properties of a TermQuery.
                 * @memberof tablestore.search.proto
                 * @interface ITermQuery
                 * @property {string|null} [fieldName] TermQuery fieldName
                 * @property {Uint8Array|null} [term] TermQuery term
                 */

                /**
                 * Constructs a new TermQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a TermQuery.
                 * @implements ITermQuery
                 * @constructor
                 * @param {tablestore.search.proto.ITermQuery=} [properties] Properties to set
                 */
                function TermQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TermQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.TermQuery
                 * @instance
                 */
                TermQuery.prototype.fieldName = "";

                /**
                 * TermQuery term.
                 * @member {Uint8Array} term
                 * @memberof tablestore.search.proto.TermQuery
                 * @instance
                 */
                TermQuery.prototype.term = $util.newBuffer([]);

                /**
                 * Creates a new TermQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {tablestore.search.proto.ITermQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.TermQuery} TermQuery instance
                 */
                TermQuery.create = function create(properties) {
                    return new TermQuery(properties);
                };

                /**
                 * Encodes the specified TermQuery message. Does not implicitly {@link tablestore.search.proto.TermQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {tablestore.search.proto.ITermQuery} message TermQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TermQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.term != null && message.hasOwnProperty("term"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.term);
                    return writer;
                };

                /**
                 * Encodes the specified TermQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.TermQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {tablestore.search.proto.ITermQuery} message TermQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TermQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TermQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.TermQuery} TermQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TermQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.TermQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.term = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TermQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.TermQuery} TermQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TermQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TermQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TermQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.term != null && message.hasOwnProperty("term"))
                        if (!(message.term && typeof message.term.length === "number" || $util.isString(message.term)))
                            return "term: buffer expected";
                    return null;
                };

                /**
                 * Creates a TermQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.TermQuery} TermQuery
                 */
                TermQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.TermQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.TermQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.term != null)
                        if (typeof object.term === "string")
                            $util.base64.decode(object.term, message.term = $util.newBuffer($util.base64.length(object.term)), 0);
                        else if (object.term.length)
                            message.term = object.term;
                    return message;
                };

                /**
                 * Creates a plain object from a TermQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.TermQuery
                 * @static
                 * @param {tablestore.search.proto.TermQuery} message TermQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TermQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        if (options.bytes === String)
                            object.term = "";
                        else {
                            object.term = [];
                            if (options.bytes !== Array)
                                object.term = $util.newBuffer(object.term);
                        }
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.term != null && message.hasOwnProperty("term"))
                        object.term = options.bytes === String ? $util.base64.encode(message.term, 0, message.term.length) : options.bytes === Array ? Array.prototype.slice.call(message.term) : message.term;
                    return object;
                };

                /**
                 * Converts this TermQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.TermQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TermQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TermQuery;
            })();

            proto.TermsQuery = (function() {

                /**
                 * Properties of a TermsQuery.
                 * @memberof tablestore.search.proto
                 * @interface ITermsQuery
                 * @property {string|null} [fieldName] TermsQuery fieldName
                 * @property {Array.<Uint8Array>|null} [terms] TermsQuery terms
                 */

                /**
                 * Constructs a new TermsQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a TermsQuery.
                 * @implements ITermsQuery
                 * @constructor
                 * @param {tablestore.search.proto.ITermsQuery=} [properties] Properties to set
                 */
                function TermsQuery(properties) {
                    this.terms = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TermsQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.TermsQuery
                 * @instance
                 */
                TermsQuery.prototype.fieldName = "";

                /**
                 * TermsQuery terms.
                 * @member {Array.<Uint8Array>} terms
                 * @memberof tablestore.search.proto.TermsQuery
                 * @instance
                 */
                TermsQuery.prototype.terms = $util.emptyArray;

                /**
                 * Creates a new TermsQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {tablestore.search.proto.ITermsQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.TermsQuery} TermsQuery instance
                 */
                TermsQuery.create = function create(properties) {
                    return new TermsQuery(properties);
                };

                /**
                 * Encodes the specified TermsQuery message. Does not implicitly {@link tablestore.search.proto.TermsQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {tablestore.search.proto.ITermsQuery} message TermsQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TermsQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.terms != null && message.terms.length)
                        for (var i = 0; i < message.terms.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.terms[i]);
                    return writer;
                };

                /**
                 * Encodes the specified TermsQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.TermsQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {tablestore.search.proto.ITermsQuery} message TermsQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TermsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TermsQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.TermsQuery} TermsQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TermsQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.TermsQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            if (!(message.terms && message.terms.length))
                                message.terms = [];
                            message.terms.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TermsQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.TermsQuery} TermsQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TermsQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TermsQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TermsQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.terms != null && message.hasOwnProperty("terms")) {
                        if (!Array.isArray(message.terms))
                            return "terms: array expected";
                        for (var i = 0; i < message.terms.length; ++i)
                            if (!(message.terms[i] && typeof message.terms[i].length === "number" || $util.isString(message.terms[i])))
                                return "terms: buffer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a TermsQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.TermsQuery} TermsQuery
                 */
                TermsQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.TermsQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.TermsQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.terms) {
                        if (!Array.isArray(object.terms))
                            throw TypeError(".tablestore.search.proto.TermsQuery.terms: array expected");
                        message.terms = [];
                        for (var i = 0; i < object.terms.length; ++i)
                            if (typeof object.terms[i] === "string")
                                $util.base64.decode(object.terms[i], message.terms[i] = $util.newBuffer($util.base64.length(object.terms[i])), 0);
                            else if (object.terms[i].length)
                                message.terms[i] = object.terms[i];
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TermsQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.TermsQuery
                 * @static
                 * @param {tablestore.search.proto.TermsQuery} message TermsQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TermsQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.terms = [];
                    if (options.defaults)
                        object.fieldName = "";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.terms && message.terms.length) {
                        object.terms = [];
                        for (var j = 0; j < message.terms.length; ++j)
                            object.terms[j] = options.bytes === String ? $util.base64.encode(message.terms[j], 0, message.terms[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.terms[j]) : message.terms[j];
                    }
                    return object;
                };

                /**
                 * Converts this TermsQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.TermsQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TermsQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TermsQuery;
            })();

            proto.RangeQuery = (function() {

                /**
                 * Properties of a RangeQuery.
                 * @memberof tablestore.search.proto
                 * @interface IRangeQuery
                 * @property {string|null} [fieldName] RangeQuery fieldName
                 * @property {Uint8Array|null} [rangeFrom] RangeQuery rangeFrom
                 * @property {Uint8Array|null} [rangeTo] RangeQuery rangeTo
                 * @property {boolean|null} [includeLower] RangeQuery includeLower
                 * @property {boolean|null} [includeUpper] RangeQuery includeUpper
                 */

                /**
                 * Constructs a new RangeQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a RangeQuery.
                 * @implements IRangeQuery
                 * @constructor
                 * @param {tablestore.search.proto.IRangeQuery=} [properties] Properties to set
                 */
                function RangeQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RangeQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.RangeQuery
                 * @instance
                 */
                RangeQuery.prototype.fieldName = "";

                /**
                 * RangeQuery rangeFrom.
                 * @member {Uint8Array} rangeFrom
                 * @memberof tablestore.search.proto.RangeQuery
                 * @instance
                 */
                RangeQuery.prototype.rangeFrom = $util.newBuffer([]);

                /**
                 * RangeQuery rangeTo.
                 * @member {Uint8Array} rangeTo
                 * @memberof tablestore.search.proto.RangeQuery
                 * @instance
                 */
                RangeQuery.prototype.rangeTo = $util.newBuffer([]);

                /**
                 * RangeQuery includeLower.
                 * @member {boolean} includeLower
                 * @memberof tablestore.search.proto.RangeQuery
                 * @instance
                 */
                RangeQuery.prototype.includeLower = false;

                /**
                 * RangeQuery includeUpper.
                 * @member {boolean} includeUpper
                 * @memberof tablestore.search.proto.RangeQuery
                 * @instance
                 */
                RangeQuery.prototype.includeUpper = false;

                /**
                 * Creates a new RangeQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {tablestore.search.proto.IRangeQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.RangeQuery} RangeQuery instance
                 */
                RangeQuery.create = function create(properties) {
                    return new RangeQuery(properties);
                };

                /**
                 * Encodes the specified RangeQuery message. Does not implicitly {@link tablestore.search.proto.RangeQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {tablestore.search.proto.IRangeQuery} message RangeQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RangeQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.rangeFrom != null && message.hasOwnProperty("rangeFrom"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.rangeFrom);
                    if (message.rangeTo != null && message.hasOwnProperty("rangeTo"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.rangeTo);
                    if (message.includeLower != null && message.hasOwnProperty("includeLower"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.includeLower);
                    if (message.includeUpper != null && message.hasOwnProperty("includeUpper"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includeUpper);
                    return writer;
                };

                /**
                 * Encodes the specified RangeQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.RangeQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {tablestore.search.proto.IRangeQuery} message RangeQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RangeQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RangeQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.RangeQuery} RangeQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RangeQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.RangeQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.rangeFrom = reader.bytes();
                            break;
                        case 3:
                            message.rangeTo = reader.bytes();
                            break;
                        case 4:
                            message.includeLower = reader.bool();
                            break;
                        case 5:
                            message.includeUpper = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RangeQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.RangeQuery} RangeQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RangeQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RangeQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RangeQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.rangeFrom != null && message.hasOwnProperty("rangeFrom"))
                        if (!(message.rangeFrom && typeof message.rangeFrom.length === "number" || $util.isString(message.rangeFrom)))
                            return "rangeFrom: buffer expected";
                    if (message.rangeTo != null && message.hasOwnProperty("rangeTo"))
                        if (!(message.rangeTo && typeof message.rangeTo.length === "number" || $util.isString(message.rangeTo)))
                            return "rangeTo: buffer expected";
                    if (message.includeLower != null && message.hasOwnProperty("includeLower"))
                        if (typeof message.includeLower !== "boolean")
                            return "includeLower: boolean expected";
                    if (message.includeUpper != null && message.hasOwnProperty("includeUpper"))
                        if (typeof message.includeUpper !== "boolean")
                            return "includeUpper: boolean expected";
                    return null;
                };

                /**
                 * Creates a RangeQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.RangeQuery} RangeQuery
                 */
                RangeQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.RangeQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.RangeQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.rangeFrom != null)
                        if (typeof object.rangeFrom === "string")
                            $util.base64.decode(object.rangeFrom, message.rangeFrom = $util.newBuffer($util.base64.length(object.rangeFrom)), 0);
                        else if (object.rangeFrom.length)
                            message.rangeFrom = object.rangeFrom;
                    if (object.rangeTo != null)
                        if (typeof object.rangeTo === "string")
                            $util.base64.decode(object.rangeTo, message.rangeTo = $util.newBuffer($util.base64.length(object.rangeTo)), 0);
                        else if (object.rangeTo.length)
                            message.rangeTo = object.rangeTo;
                    if (object.includeLower != null)
                        message.includeLower = Boolean(object.includeLower);
                    if (object.includeUpper != null)
                        message.includeUpper = Boolean(object.includeUpper);
                    return message;
                };

                /**
                 * Creates a plain object from a RangeQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.RangeQuery
                 * @static
                 * @param {tablestore.search.proto.RangeQuery} message RangeQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RangeQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        if (options.bytes === String)
                            object.rangeFrom = "";
                        else {
                            object.rangeFrom = [];
                            if (options.bytes !== Array)
                                object.rangeFrom = $util.newBuffer(object.rangeFrom);
                        }
                        if (options.bytes === String)
                            object.rangeTo = "";
                        else {
                            object.rangeTo = [];
                            if (options.bytes !== Array)
                                object.rangeTo = $util.newBuffer(object.rangeTo);
                        }
                        object.includeLower = false;
                        object.includeUpper = false;
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.rangeFrom != null && message.hasOwnProperty("rangeFrom"))
                        object.rangeFrom = options.bytes === String ? $util.base64.encode(message.rangeFrom, 0, message.rangeFrom.length) : options.bytes === Array ? Array.prototype.slice.call(message.rangeFrom) : message.rangeFrom;
                    if (message.rangeTo != null && message.hasOwnProperty("rangeTo"))
                        object.rangeTo = options.bytes === String ? $util.base64.encode(message.rangeTo, 0, message.rangeTo.length) : options.bytes === Array ? Array.prototype.slice.call(message.rangeTo) : message.rangeTo;
                    if (message.includeLower != null && message.hasOwnProperty("includeLower"))
                        object.includeLower = message.includeLower;
                    if (message.includeUpper != null && message.hasOwnProperty("includeUpper"))
                        object.includeUpper = message.includeUpper;
                    return object;
                };

                /**
                 * Converts this RangeQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.RangeQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RangeQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RangeQuery;
            })();

            proto.PrefixQuery = (function() {

                /**
                 * Properties of a PrefixQuery.
                 * @memberof tablestore.search.proto
                 * @interface IPrefixQuery
                 * @property {string|null} [fieldName] PrefixQuery fieldName
                 * @property {string|null} [prefix] PrefixQuery prefix
                 */

                /**
                 * Constructs a new PrefixQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a PrefixQuery.
                 * @implements IPrefixQuery
                 * @constructor
                 * @param {tablestore.search.proto.IPrefixQuery=} [properties] Properties to set
                 */
                function PrefixQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PrefixQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @instance
                 */
                PrefixQuery.prototype.fieldName = "";

                /**
                 * PrefixQuery prefix.
                 * @member {string} prefix
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @instance
                 */
                PrefixQuery.prototype.prefix = "";

                /**
                 * Creates a new PrefixQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {tablestore.search.proto.IPrefixQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.PrefixQuery} PrefixQuery instance
                 */
                PrefixQuery.create = function create(properties) {
                    return new PrefixQuery(properties);
                };

                /**
                 * Encodes the specified PrefixQuery message. Does not implicitly {@link tablestore.search.proto.PrefixQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {tablestore.search.proto.IPrefixQuery} message PrefixQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrefixQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.prefix != null && message.hasOwnProperty("prefix"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.prefix);
                    return writer;
                };

                /**
                 * Encodes the specified PrefixQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.PrefixQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {tablestore.search.proto.IPrefixQuery} message PrefixQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrefixQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PrefixQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.PrefixQuery} PrefixQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrefixQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.PrefixQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.prefix = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PrefixQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.PrefixQuery} PrefixQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrefixQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PrefixQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PrefixQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.prefix != null && message.hasOwnProperty("prefix"))
                        if (!$util.isString(message.prefix))
                            return "prefix: string expected";
                    return null;
                };

                /**
                 * Creates a PrefixQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.PrefixQuery} PrefixQuery
                 */
                PrefixQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.PrefixQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.PrefixQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.prefix != null)
                        message.prefix = String(object.prefix);
                    return message;
                };

                /**
                 * Creates a plain object from a PrefixQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @static
                 * @param {tablestore.search.proto.PrefixQuery} message PrefixQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PrefixQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.prefix = "";
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.prefix != null && message.hasOwnProperty("prefix"))
                        object.prefix = message.prefix;
                    return object;
                };

                /**
                 * Converts this PrefixQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.PrefixQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PrefixQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PrefixQuery;
            })();

            proto.WildcardQuery = (function() {

                /**
                 * Properties of a WildcardQuery.
                 * @memberof tablestore.search.proto
                 * @interface IWildcardQuery
                 * @property {string|null} [fieldName] WildcardQuery fieldName
                 * @property {string|null} [value] WildcardQuery value
                 */

                /**
                 * Constructs a new WildcardQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a WildcardQuery.
                 * @implements IWildcardQuery
                 * @constructor
                 * @param {tablestore.search.proto.IWildcardQuery=} [properties] Properties to set
                 */
                function WildcardQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WildcardQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @instance
                 */
                WildcardQuery.prototype.fieldName = "";

                /**
                 * WildcardQuery value.
                 * @member {string} value
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @instance
                 */
                WildcardQuery.prototype.value = "";

                /**
                 * Creates a new WildcardQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {tablestore.search.proto.IWildcardQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.WildcardQuery} WildcardQuery instance
                 */
                WildcardQuery.create = function create(properties) {
                    return new WildcardQuery(properties);
                };

                /**
                 * Encodes the specified WildcardQuery message. Does not implicitly {@link tablestore.search.proto.WildcardQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {tablestore.search.proto.IWildcardQuery} message WildcardQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WildcardQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified WildcardQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.WildcardQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {tablestore.search.proto.IWildcardQuery} message WildcardQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WildcardQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WildcardQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.WildcardQuery} WildcardQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WildcardQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.WildcardQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a WildcardQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.WildcardQuery} WildcardQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WildcardQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WildcardQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WildcardQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };

                /**
                 * Creates a WildcardQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.WildcardQuery} WildcardQuery
                 */
                WildcardQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.WildcardQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.WildcardQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };

                /**
                 * Creates a plain object from a WildcardQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @static
                 * @param {tablestore.search.proto.WildcardQuery} message WildcardQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WildcardQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.value = "";
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };

                /**
                 * Converts this WildcardQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.WildcardQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WildcardQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return WildcardQuery;
            })();

            proto.BoolQuery = (function() {

                /**
                 * Properties of a BoolQuery.
                 * @memberof tablestore.search.proto
                 * @interface IBoolQuery
                 * @property {Array.<tablestore.search.proto.IQuery>|null} [mustQueries] BoolQuery mustQueries
                 * @property {Array.<tablestore.search.proto.IQuery>|null} [mustNotQueries] BoolQuery mustNotQueries
                 * @property {Array.<tablestore.search.proto.IQuery>|null} [filterQueries] BoolQuery filterQueries
                 * @property {Array.<tablestore.search.proto.IQuery>|null} [shouldQueries] BoolQuery shouldQueries
                 * @property {number|null} [minimumShouldMatch] BoolQuery minimumShouldMatch
                 */

                /**
                 * Constructs a new BoolQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a BoolQuery.
                 * @implements IBoolQuery
                 * @constructor
                 * @param {tablestore.search.proto.IBoolQuery=} [properties] Properties to set
                 */
                function BoolQuery(properties) {
                    this.mustQueries = [];
                    this.mustNotQueries = [];
                    this.filterQueries = [];
                    this.shouldQueries = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BoolQuery mustQueries.
                 * @member {Array.<tablestore.search.proto.IQuery>} mustQueries
                 * @memberof tablestore.search.proto.BoolQuery
                 * @instance
                 */
                BoolQuery.prototype.mustQueries = $util.emptyArray;

                /**
                 * BoolQuery mustNotQueries.
                 * @member {Array.<tablestore.search.proto.IQuery>} mustNotQueries
                 * @memberof tablestore.search.proto.BoolQuery
                 * @instance
                 */
                BoolQuery.prototype.mustNotQueries = $util.emptyArray;

                /**
                 * BoolQuery filterQueries.
                 * @member {Array.<tablestore.search.proto.IQuery>} filterQueries
                 * @memberof tablestore.search.proto.BoolQuery
                 * @instance
                 */
                BoolQuery.prototype.filterQueries = $util.emptyArray;

                /**
                 * BoolQuery shouldQueries.
                 * @member {Array.<tablestore.search.proto.IQuery>} shouldQueries
                 * @memberof tablestore.search.proto.BoolQuery
                 * @instance
                 */
                BoolQuery.prototype.shouldQueries = $util.emptyArray;

                /**
                 * BoolQuery minimumShouldMatch.
                 * @member {number} minimumShouldMatch
                 * @memberof tablestore.search.proto.BoolQuery
                 * @instance
                 */
                BoolQuery.prototype.minimumShouldMatch = 0;

                /**
                 * Creates a new BoolQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {tablestore.search.proto.IBoolQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.BoolQuery} BoolQuery instance
                 */
                BoolQuery.create = function create(properties) {
                    return new BoolQuery(properties);
                };

                /**
                 * Encodes the specified BoolQuery message. Does not implicitly {@link tablestore.search.proto.BoolQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {tablestore.search.proto.IBoolQuery} message BoolQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.mustQueries != null && message.mustQueries.length)
                        for (var i = 0; i < message.mustQueries.length; ++i)
                            $root.tablestore.search.proto.Query.encode(message.mustQueries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.mustNotQueries != null && message.mustNotQueries.length)
                        for (var i = 0; i < message.mustNotQueries.length; ++i)
                            $root.tablestore.search.proto.Query.encode(message.mustNotQueries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.filterQueries != null && message.filterQueries.length)
                        for (var i = 0; i < message.filterQueries.length; ++i)
                            $root.tablestore.search.proto.Query.encode(message.filterQueries[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.shouldQueries != null && message.shouldQueries.length)
                        for (var i = 0; i < message.shouldQueries.length; ++i)
                            $root.tablestore.search.proto.Query.encode(message.shouldQueries[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.minimumShouldMatch != null && message.hasOwnProperty("minimumShouldMatch"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.minimumShouldMatch);
                    return writer;
                };

                /**
                 * Encodes the specified BoolQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.BoolQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {tablestore.search.proto.IBoolQuery} message BoolQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BoolQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.BoolQuery} BoolQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.BoolQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.mustQueries && message.mustQueries.length))
                                message.mustQueries = [];
                            message.mustQueries.push($root.tablestore.search.proto.Query.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            if (!(message.mustNotQueries && message.mustNotQueries.length))
                                message.mustNotQueries = [];
                            message.mustNotQueries.push($root.tablestore.search.proto.Query.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.filterQueries && message.filterQueries.length))
                                message.filterQueries = [];
                            message.filterQueries.push($root.tablestore.search.proto.Query.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.shouldQueries && message.shouldQueries.length))
                                message.shouldQueries = [];
                            message.shouldQueries.push($root.tablestore.search.proto.Query.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            message.minimumShouldMatch = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BoolQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.BoolQuery} BoolQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BoolQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BoolQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.mustQueries != null && message.hasOwnProperty("mustQueries")) {
                        if (!Array.isArray(message.mustQueries))
                            return "mustQueries: array expected";
                        for (var i = 0; i < message.mustQueries.length; ++i) {
                            var error = $root.tablestore.search.proto.Query.verify(message.mustQueries[i]);
                            if (error)
                                return "mustQueries." + error;
                        }
                    }
                    if (message.mustNotQueries != null && message.hasOwnProperty("mustNotQueries")) {
                        if (!Array.isArray(message.mustNotQueries))
                            return "mustNotQueries: array expected";
                        for (var i = 0; i < message.mustNotQueries.length; ++i) {
                            var error = $root.tablestore.search.proto.Query.verify(message.mustNotQueries[i]);
                            if (error)
                                return "mustNotQueries." + error;
                        }
                    }
                    if (message.filterQueries != null && message.hasOwnProperty("filterQueries")) {
                        if (!Array.isArray(message.filterQueries))
                            return "filterQueries: array expected";
                        for (var i = 0; i < message.filterQueries.length; ++i) {
                            var error = $root.tablestore.search.proto.Query.verify(message.filterQueries[i]);
                            if (error)
                                return "filterQueries." + error;
                        }
                    }
                    if (message.shouldQueries != null && message.hasOwnProperty("shouldQueries")) {
                        if (!Array.isArray(message.shouldQueries))
                            return "shouldQueries: array expected";
                        for (var i = 0; i < message.shouldQueries.length; ++i) {
                            var error = $root.tablestore.search.proto.Query.verify(message.shouldQueries[i]);
                            if (error)
                                return "shouldQueries." + error;
                        }
                    }
                    if (message.minimumShouldMatch != null && message.hasOwnProperty("minimumShouldMatch"))
                        if (!$util.isInteger(message.minimumShouldMatch))
                            return "minimumShouldMatch: integer expected";
                    return null;
                };

                /**
                 * Creates a BoolQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.BoolQuery} BoolQuery
                 */
                BoolQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.BoolQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.BoolQuery();
                    if (object.mustQueries) {
                        if (!Array.isArray(object.mustQueries))
                            throw TypeError(".tablestore.search.proto.BoolQuery.mustQueries: array expected");
                        message.mustQueries = [];
                        for (var i = 0; i < object.mustQueries.length; ++i) {
                            if (typeof object.mustQueries[i] !== "object")
                                throw TypeError(".tablestore.search.proto.BoolQuery.mustQueries: object expected");
                            message.mustQueries[i] = $root.tablestore.search.proto.Query.fromObject(object.mustQueries[i]);
                        }
                    }
                    if (object.mustNotQueries) {
                        if (!Array.isArray(object.mustNotQueries))
                            throw TypeError(".tablestore.search.proto.BoolQuery.mustNotQueries: array expected");
                        message.mustNotQueries = [];
                        for (var i = 0; i < object.mustNotQueries.length; ++i) {
                            if (typeof object.mustNotQueries[i] !== "object")
                                throw TypeError(".tablestore.search.proto.BoolQuery.mustNotQueries: object expected");
                            message.mustNotQueries[i] = $root.tablestore.search.proto.Query.fromObject(object.mustNotQueries[i]);
                        }
                    }
                    if (object.filterQueries) {
                        if (!Array.isArray(object.filterQueries))
                            throw TypeError(".tablestore.search.proto.BoolQuery.filterQueries: array expected");
                        message.filterQueries = [];
                        for (var i = 0; i < object.filterQueries.length; ++i) {
                            if (typeof object.filterQueries[i] !== "object")
                                throw TypeError(".tablestore.search.proto.BoolQuery.filterQueries: object expected");
                            message.filterQueries[i] = $root.tablestore.search.proto.Query.fromObject(object.filterQueries[i]);
                        }
                    }
                    if (object.shouldQueries) {
                        if (!Array.isArray(object.shouldQueries))
                            throw TypeError(".tablestore.search.proto.BoolQuery.shouldQueries: array expected");
                        message.shouldQueries = [];
                        for (var i = 0; i < object.shouldQueries.length; ++i) {
                            if (typeof object.shouldQueries[i] !== "object")
                                throw TypeError(".tablestore.search.proto.BoolQuery.shouldQueries: object expected");
                            message.shouldQueries[i] = $root.tablestore.search.proto.Query.fromObject(object.shouldQueries[i]);
                        }
                    }
                    if (object.minimumShouldMatch != null)
                        message.minimumShouldMatch = object.minimumShouldMatch | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a BoolQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.BoolQuery
                 * @static
                 * @param {tablestore.search.proto.BoolQuery} message BoolQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BoolQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.mustQueries = [];
                        object.mustNotQueries = [];
                        object.filterQueries = [];
                        object.shouldQueries = [];
                    }
                    if (options.defaults)
                        object.minimumShouldMatch = 0;
                    if (message.mustQueries && message.mustQueries.length) {
                        object.mustQueries = [];
                        for (var j = 0; j < message.mustQueries.length; ++j)
                            object.mustQueries[j] = $root.tablestore.search.proto.Query.toObject(message.mustQueries[j], options);
                    }
                    if (message.mustNotQueries && message.mustNotQueries.length) {
                        object.mustNotQueries = [];
                        for (var j = 0; j < message.mustNotQueries.length; ++j)
                            object.mustNotQueries[j] = $root.tablestore.search.proto.Query.toObject(message.mustNotQueries[j], options);
                    }
                    if (message.filterQueries && message.filterQueries.length) {
                        object.filterQueries = [];
                        for (var j = 0; j < message.filterQueries.length; ++j)
                            object.filterQueries[j] = $root.tablestore.search.proto.Query.toObject(message.filterQueries[j], options);
                    }
                    if (message.shouldQueries && message.shouldQueries.length) {
                        object.shouldQueries = [];
                        for (var j = 0; j < message.shouldQueries.length; ++j)
                            object.shouldQueries[j] = $root.tablestore.search.proto.Query.toObject(message.shouldQueries[j], options);
                    }
                    if (message.minimumShouldMatch != null && message.hasOwnProperty("minimumShouldMatch"))
                        object.minimumShouldMatch = message.minimumShouldMatch;
                    return object;
                };

                /**
                 * Converts this BoolQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.BoolQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BoolQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BoolQuery;
            })();

            proto.ConstScoreQuery = (function() {

                /**
                 * Properties of a ConstScoreQuery.
                 * @memberof tablestore.search.proto
                 * @interface IConstScoreQuery
                 * @property {tablestore.search.proto.IQuery|null} [filter] ConstScoreQuery filter
                 */

                /**
                 * Constructs a new ConstScoreQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a ConstScoreQuery.
                 * @implements IConstScoreQuery
                 * @constructor
                 * @param {tablestore.search.proto.IConstScoreQuery=} [properties] Properties to set
                 */
                function ConstScoreQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ConstScoreQuery filter.
                 * @member {tablestore.search.proto.IQuery|null|undefined} filter
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @instance
                 */
                ConstScoreQuery.prototype.filter = null;

                /**
                 * Creates a new ConstScoreQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {tablestore.search.proto.IConstScoreQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.ConstScoreQuery} ConstScoreQuery instance
                 */
                ConstScoreQuery.create = function create(properties) {
                    return new ConstScoreQuery(properties);
                };

                /**
                 * Encodes the specified ConstScoreQuery message. Does not implicitly {@link tablestore.search.proto.ConstScoreQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {tablestore.search.proto.IConstScoreQuery} message ConstScoreQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConstScoreQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        $root.tablestore.search.proto.Query.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ConstScoreQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.ConstScoreQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {tablestore.search.proto.IConstScoreQuery} message ConstScoreQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConstScoreQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ConstScoreQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.ConstScoreQuery} ConstScoreQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConstScoreQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.ConstScoreQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.filter = $root.tablestore.search.proto.Query.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ConstScoreQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.ConstScoreQuery} ConstScoreQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConstScoreQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ConstScoreQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConstScoreQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.filter != null && message.hasOwnProperty("filter")) {
                        var error = $root.tablestore.search.proto.Query.verify(message.filter);
                        if (error)
                            return "filter." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ConstScoreQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.ConstScoreQuery} ConstScoreQuery
                 */
                ConstScoreQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.ConstScoreQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.ConstScoreQuery();
                    if (object.filter != null) {
                        if (typeof object.filter !== "object")
                            throw TypeError(".tablestore.search.proto.ConstScoreQuery.filter: object expected");
                        message.filter = $root.tablestore.search.proto.Query.fromObject(object.filter);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ConstScoreQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @static
                 * @param {tablestore.search.proto.ConstScoreQuery} message ConstScoreQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConstScoreQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.filter = null;
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        object.filter = $root.tablestore.search.proto.Query.toObject(message.filter, options);
                    return object;
                };

                /**
                 * Converts this ConstScoreQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.ConstScoreQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConstScoreQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ConstScoreQuery;
            })();

            proto.FieldValueFactor = (function() {

                /**
                 * Properties of a FieldValueFactor.
                 * @memberof tablestore.search.proto
                 * @interface IFieldValueFactor
                 * @property {string|null} [fieldName] FieldValueFactor fieldName
                 */

                /**
                 * Constructs a new FieldValueFactor.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a FieldValueFactor.
                 * @implements IFieldValueFactor
                 * @constructor
                 * @param {tablestore.search.proto.IFieldValueFactor=} [properties] Properties to set
                 */
                function FieldValueFactor(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FieldValueFactor fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @instance
                 */
                FieldValueFactor.prototype.fieldName = "";

                /**
                 * Creates a new FieldValueFactor instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {tablestore.search.proto.IFieldValueFactor=} [properties] Properties to set
                 * @returns {tablestore.search.proto.FieldValueFactor} FieldValueFactor instance
                 */
                FieldValueFactor.create = function create(properties) {
                    return new FieldValueFactor(properties);
                };

                /**
                 * Encodes the specified FieldValueFactor message. Does not implicitly {@link tablestore.search.proto.FieldValueFactor.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {tablestore.search.proto.IFieldValueFactor} message FieldValueFactor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldValueFactor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    return writer;
                };

                /**
                 * Encodes the specified FieldValueFactor message, length delimited. Does not implicitly {@link tablestore.search.proto.FieldValueFactor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {tablestore.search.proto.IFieldValueFactor} message FieldValueFactor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldValueFactor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FieldValueFactor message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.FieldValueFactor} FieldValueFactor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldValueFactor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.FieldValueFactor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FieldValueFactor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.FieldValueFactor} FieldValueFactor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldValueFactor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FieldValueFactor message.
                 * @function verify
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldValueFactor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    return null;
                };

                /**
                 * Creates a FieldValueFactor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.FieldValueFactor} FieldValueFactor
                 */
                FieldValueFactor.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.FieldValueFactor)
                        return object;
                    var message = new $root.tablestore.search.proto.FieldValueFactor();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    return message;
                };

                /**
                 * Creates a plain object from a FieldValueFactor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @static
                 * @param {tablestore.search.proto.FieldValueFactor} message FieldValueFactor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldValueFactor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.fieldName = "";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    return object;
                };

                /**
                 * Converts this FieldValueFactor to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.FieldValueFactor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldValueFactor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FieldValueFactor;
            })();

            proto.FunctionScoreQuery = (function() {

                /**
                 * Properties of a FunctionScoreQuery.
                 * @memberof tablestore.search.proto
                 * @interface IFunctionScoreQuery
                 * @property {tablestore.search.proto.IQuery|null} [query] FunctionScoreQuery query
                 * @property {tablestore.search.proto.IFieldValueFactor|null} [fieldValueFactor] FunctionScoreQuery fieldValueFactor
                 */

                /**
                 * Constructs a new FunctionScoreQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a FunctionScoreQuery.
                 * @implements IFunctionScoreQuery
                 * @constructor
                 * @param {tablestore.search.proto.IFunctionScoreQuery=} [properties] Properties to set
                 */
                function FunctionScoreQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FunctionScoreQuery query.
                 * @member {tablestore.search.proto.IQuery|null|undefined} query
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @instance
                 */
                FunctionScoreQuery.prototype.query = null;

                /**
                 * FunctionScoreQuery fieldValueFactor.
                 * @member {tablestore.search.proto.IFieldValueFactor|null|undefined} fieldValueFactor
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @instance
                 */
                FunctionScoreQuery.prototype.fieldValueFactor = null;

                /**
                 * Creates a new FunctionScoreQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {tablestore.search.proto.IFunctionScoreQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.FunctionScoreQuery} FunctionScoreQuery instance
                 */
                FunctionScoreQuery.create = function create(properties) {
                    return new FunctionScoreQuery(properties);
                };

                /**
                 * Encodes the specified FunctionScoreQuery message. Does not implicitly {@link tablestore.search.proto.FunctionScoreQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {tablestore.search.proto.IFunctionScoreQuery} message FunctionScoreQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FunctionScoreQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.query != null && message.hasOwnProperty("query"))
                        $root.tablestore.search.proto.Query.encode(message.query, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fieldValueFactor != null && message.hasOwnProperty("fieldValueFactor"))
                        $root.tablestore.search.proto.FieldValueFactor.encode(message.fieldValueFactor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FunctionScoreQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.FunctionScoreQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {tablestore.search.proto.IFunctionScoreQuery} message FunctionScoreQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FunctionScoreQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FunctionScoreQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.FunctionScoreQuery} FunctionScoreQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FunctionScoreQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.FunctionScoreQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.query = $root.tablestore.search.proto.Query.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.fieldValueFactor = $root.tablestore.search.proto.FieldValueFactor.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FunctionScoreQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.FunctionScoreQuery} FunctionScoreQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FunctionScoreQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FunctionScoreQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FunctionScoreQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.query != null && message.hasOwnProperty("query")) {
                        var error = $root.tablestore.search.proto.Query.verify(message.query);
                        if (error)
                            return "query." + error;
                    }
                    if (message.fieldValueFactor != null && message.hasOwnProperty("fieldValueFactor")) {
                        var error = $root.tablestore.search.proto.FieldValueFactor.verify(message.fieldValueFactor);
                        if (error)
                            return "fieldValueFactor." + error;
                    }
                    return null;
                };

                /**
                 * Creates a FunctionScoreQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.FunctionScoreQuery} FunctionScoreQuery
                 */
                FunctionScoreQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.FunctionScoreQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.FunctionScoreQuery();
                    if (object.query != null) {
                        if (typeof object.query !== "object")
                            throw TypeError(".tablestore.search.proto.FunctionScoreQuery.query: object expected");
                        message.query = $root.tablestore.search.proto.Query.fromObject(object.query);
                    }
                    if (object.fieldValueFactor != null) {
                        if (typeof object.fieldValueFactor !== "object")
                            throw TypeError(".tablestore.search.proto.FunctionScoreQuery.fieldValueFactor: object expected");
                        message.fieldValueFactor = $root.tablestore.search.proto.FieldValueFactor.fromObject(object.fieldValueFactor);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FunctionScoreQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @static
                 * @param {tablestore.search.proto.FunctionScoreQuery} message FunctionScoreQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FunctionScoreQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.query = null;
                        object.fieldValueFactor = null;
                    }
                    if (message.query != null && message.hasOwnProperty("query"))
                        object.query = $root.tablestore.search.proto.Query.toObject(message.query, options);
                    if (message.fieldValueFactor != null && message.hasOwnProperty("fieldValueFactor"))
                        object.fieldValueFactor = $root.tablestore.search.proto.FieldValueFactor.toObject(message.fieldValueFactor, options);
                    return object;
                };

                /**
                 * Converts this FunctionScoreQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.FunctionScoreQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FunctionScoreQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FunctionScoreQuery;
            })();

            /**
             * ScoreMode enum.
             * @name tablestore.search.proto.ScoreMode
             * @enum {string}
             * @property {number} SCORE_MODE_NONE=1 SCORE_MODE_NONE value
             * @property {number} SCORE_MODE_AVG=2 SCORE_MODE_AVG value
             * @property {number} SCORE_MODE_MAX=3 SCORE_MODE_MAX value
             * @property {number} SCORE_MODE_TOTAL=4 SCORE_MODE_TOTAL value
             * @property {number} SCORE_MODE_MIN=5 SCORE_MODE_MIN value
             */
            proto.ScoreMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SCORE_MODE_NONE"] = 1;
                values[valuesById[2] = "SCORE_MODE_AVG"] = 2;
                values[valuesById[3] = "SCORE_MODE_MAX"] = 3;
                values[valuesById[4] = "SCORE_MODE_TOTAL"] = 4;
                values[valuesById[5] = "SCORE_MODE_MIN"] = 5;
                return values;
            })();

            proto.NestedQuery = (function() {

                /**
                 * Properties of a NestedQuery.
                 * @memberof tablestore.search.proto
                 * @interface INestedQuery
                 * @property {string|null} [path] NestedQuery path
                 * @property {tablestore.search.proto.IQuery|null} [query] NestedQuery query
                 * @property {tablestore.search.proto.ScoreMode|null} [scoreMode] NestedQuery scoreMode
                 */

                /**
                 * Constructs a new NestedQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a NestedQuery.
                 * @implements INestedQuery
                 * @constructor
                 * @param {tablestore.search.proto.INestedQuery=} [properties] Properties to set
                 */
                function NestedQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NestedQuery path.
                 * @member {string} path
                 * @memberof tablestore.search.proto.NestedQuery
                 * @instance
                 */
                NestedQuery.prototype.path = "";

                /**
                 * NestedQuery query.
                 * @member {tablestore.search.proto.IQuery|null|undefined} query
                 * @memberof tablestore.search.proto.NestedQuery
                 * @instance
                 */
                NestedQuery.prototype.query = null;

                /**
                 * NestedQuery scoreMode.
                 * @member {tablestore.search.proto.ScoreMode} scoreMode
                 * @memberof tablestore.search.proto.NestedQuery
                 * @instance
                 */
                NestedQuery.prototype.scoreMode = 1;

                /**
                 * Creates a new NestedQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {tablestore.search.proto.INestedQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.NestedQuery} NestedQuery instance
                 */
                NestedQuery.create = function create(properties) {
                    return new NestedQuery(properties);
                };

                /**
                 * Encodes the specified NestedQuery message. Does not implicitly {@link tablestore.search.proto.NestedQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {tablestore.search.proto.INestedQuery} message NestedQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.hasOwnProperty("path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                    if (message.query != null && message.hasOwnProperty("query"))
                        $root.tablestore.search.proto.Query.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.scoreMode != null && message.hasOwnProperty("scoreMode"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.scoreMode);
                    return writer;
                };

                /**
                 * Encodes the specified NestedQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.NestedQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {tablestore.search.proto.INestedQuery} message NestedQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NestedQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.NestedQuery} NestedQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.NestedQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.path = reader.string();
                            break;
                        case 2:
                            message.query = $root.tablestore.search.proto.Query.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.scoreMode = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NestedQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.NestedQuery} NestedQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NestedQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NestedQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    if (message.query != null && message.hasOwnProperty("query")) {
                        var error = $root.tablestore.search.proto.Query.verify(message.query);
                        if (error)
                            return "query." + error;
                    }
                    if (message.scoreMode != null && message.hasOwnProperty("scoreMode"))
                        switch (message.scoreMode) {
                        default:
                            return "scoreMode: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a NestedQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.NestedQuery} NestedQuery
                 */
                NestedQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.NestedQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.NestedQuery();
                    if (object.path != null)
                        message.path = String(object.path);
                    if (object.query != null) {
                        if (typeof object.query !== "object")
                            throw TypeError(".tablestore.search.proto.NestedQuery.query: object expected");
                        message.query = $root.tablestore.search.proto.Query.fromObject(object.query);
                    }
                    switch (object.scoreMode) {
                    case "SCORE_MODE_NONE":
                    case 1:
                        message.scoreMode = 1;
                        break;
                    case "SCORE_MODE_AVG":
                    case 2:
                        message.scoreMode = 2;
                        break;
                    case "SCORE_MODE_MAX":
                    case 3:
                        message.scoreMode = 3;
                        break;
                    case "SCORE_MODE_TOTAL":
                    case 4:
                        message.scoreMode = 4;
                        break;
                    case "SCORE_MODE_MIN":
                    case 5:
                        message.scoreMode = 5;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NestedQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.NestedQuery
                 * @static
                 * @param {tablestore.search.proto.NestedQuery} message NestedQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NestedQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.path = "";
                        object.query = null;
                        object.scoreMode = options.enums === String ? "SCORE_MODE_NONE" : 1;
                    }
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    if (message.query != null && message.hasOwnProperty("query"))
                        object.query = $root.tablestore.search.proto.Query.toObject(message.query, options);
                    if (message.scoreMode != null && message.hasOwnProperty("scoreMode"))
                        object.scoreMode = options.enums === String ? $root.tablestore.search.proto.ScoreMode[message.scoreMode] : message.scoreMode;
                    return object;
                };

                /**
                 * Converts this NestedQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.NestedQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NestedQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NestedQuery;
            })();

            proto.GeoBoundingBoxQuery = (function() {

                /**
                 * Properties of a GeoBoundingBoxQuery.
                 * @memberof tablestore.search.proto
                 * @interface IGeoBoundingBoxQuery
                 * @property {string|null} [fieldName] GeoBoundingBoxQuery fieldName
                 * @property {string|null} [topLeft] GeoBoundingBoxQuery topLeft
                 * @property {string|null} [bottomRight] GeoBoundingBoxQuery bottomRight
                 */

                /**
                 * Constructs a new GeoBoundingBoxQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a GeoBoundingBoxQuery.
                 * @implements IGeoBoundingBoxQuery
                 * @constructor
                 * @param {tablestore.search.proto.IGeoBoundingBoxQuery=} [properties] Properties to set
                 */
                function GeoBoundingBoxQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GeoBoundingBoxQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @instance
                 */
                GeoBoundingBoxQuery.prototype.fieldName = "";

                /**
                 * GeoBoundingBoxQuery topLeft.
                 * @member {string} topLeft
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @instance
                 */
                GeoBoundingBoxQuery.prototype.topLeft = "";

                /**
                 * GeoBoundingBoxQuery bottomRight.
                 * @member {string} bottomRight
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @instance
                 */
                GeoBoundingBoxQuery.prototype.bottomRight = "";

                /**
                 * Creates a new GeoBoundingBoxQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoBoundingBoxQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.GeoBoundingBoxQuery} GeoBoundingBoxQuery instance
                 */
                GeoBoundingBoxQuery.create = function create(properties) {
                    return new GeoBoundingBoxQuery(properties);
                };

                /**
                 * Encodes the specified GeoBoundingBoxQuery message. Does not implicitly {@link tablestore.search.proto.GeoBoundingBoxQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoBoundingBoxQuery} message GeoBoundingBoxQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoBoundingBoxQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.topLeft != null && message.hasOwnProperty("topLeft"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.topLeft);
                    if (message.bottomRight != null && message.hasOwnProperty("bottomRight"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.bottomRight);
                    return writer;
                };

                /**
                 * Encodes the specified GeoBoundingBoxQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.GeoBoundingBoxQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoBoundingBoxQuery} message GeoBoundingBoxQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoBoundingBoxQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GeoBoundingBoxQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.GeoBoundingBoxQuery} GeoBoundingBoxQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoBoundingBoxQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.GeoBoundingBoxQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.topLeft = reader.string();
                            break;
                        case 3:
                            message.bottomRight = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GeoBoundingBoxQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.GeoBoundingBoxQuery} GeoBoundingBoxQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoBoundingBoxQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GeoBoundingBoxQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeoBoundingBoxQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.topLeft != null && message.hasOwnProperty("topLeft"))
                        if (!$util.isString(message.topLeft))
                            return "topLeft: string expected";
                    if (message.bottomRight != null && message.hasOwnProperty("bottomRight"))
                        if (!$util.isString(message.bottomRight))
                            return "bottomRight: string expected";
                    return null;
                };

                /**
                 * Creates a GeoBoundingBoxQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.GeoBoundingBoxQuery} GeoBoundingBoxQuery
                 */
                GeoBoundingBoxQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.GeoBoundingBoxQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.GeoBoundingBoxQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.topLeft != null)
                        message.topLeft = String(object.topLeft);
                    if (object.bottomRight != null)
                        message.bottomRight = String(object.bottomRight);
                    return message;
                };

                /**
                 * Creates a plain object from a GeoBoundingBoxQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @static
                 * @param {tablestore.search.proto.GeoBoundingBoxQuery} message GeoBoundingBoxQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeoBoundingBoxQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.topLeft = "";
                        object.bottomRight = "";
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.topLeft != null && message.hasOwnProperty("topLeft"))
                        object.topLeft = message.topLeft;
                    if (message.bottomRight != null && message.hasOwnProperty("bottomRight"))
                        object.bottomRight = message.bottomRight;
                    return object;
                };

                /**
                 * Converts this GeoBoundingBoxQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.GeoBoundingBoxQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeoBoundingBoxQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GeoBoundingBoxQuery;
            })();

            proto.GeoDistanceQuery = (function() {

                /**
                 * Properties of a GeoDistanceQuery.
                 * @memberof tablestore.search.proto
                 * @interface IGeoDistanceQuery
                 * @property {string|null} [fieldName] GeoDistanceQuery fieldName
                 * @property {string|null} [centerPoint] GeoDistanceQuery centerPoint
                 * @property {number|null} [distance] GeoDistanceQuery distance
                 */

                /**
                 * Constructs a new GeoDistanceQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a GeoDistanceQuery.
                 * @implements IGeoDistanceQuery
                 * @constructor
                 * @param {tablestore.search.proto.IGeoDistanceQuery=} [properties] Properties to set
                 */
                function GeoDistanceQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GeoDistanceQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @instance
                 */
                GeoDistanceQuery.prototype.fieldName = "";

                /**
                 * GeoDistanceQuery centerPoint.
                 * @member {string} centerPoint
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @instance
                 */
                GeoDistanceQuery.prototype.centerPoint = "";

                /**
                 * GeoDistanceQuery distance.
                 * @member {number} distance
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @instance
                 */
                GeoDistanceQuery.prototype.distance = 0;

                /**
                 * Creates a new GeoDistanceQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoDistanceQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.GeoDistanceQuery} GeoDistanceQuery instance
                 */
                GeoDistanceQuery.create = function create(properties) {
                    return new GeoDistanceQuery(properties);
                };

                /**
                 * Encodes the specified GeoDistanceQuery message. Does not implicitly {@link tablestore.search.proto.GeoDistanceQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoDistanceQuery} message GeoDistanceQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoDistanceQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.centerPoint != null && message.hasOwnProperty("centerPoint"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.centerPoint);
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.distance);
                    return writer;
                };

                /**
                 * Encodes the specified GeoDistanceQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.GeoDistanceQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoDistanceQuery} message GeoDistanceQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoDistanceQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GeoDistanceQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.GeoDistanceQuery} GeoDistanceQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoDistanceQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.GeoDistanceQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.centerPoint = reader.string();
                            break;
                        case 3:
                            message.distance = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GeoDistanceQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.GeoDistanceQuery} GeoDistanceQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoDistanceQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GeoDistanceQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeoDistanceQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.centerPoint != null && message.hasOwnProperty("centerPoint"))
                        if (!$util.isString(message.centerPoint))
                            return "centerPoint: string expected";
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        if (typeof message.distance !== "number")
                            return "distance: number expected";
                    return null;
                };

                /**
                 * Creates a GeoDistanceQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.GeoDistanceQuery} GeoDistanceQuery
                 */
                GeoDistanceQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.GeoDistanceQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.GeoDistanceQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.centerPoint != null)
                        message.centerPoint = String(object.centerPoint);
                    if (object.distance != null)
                        message.distance = Number(object.distance);
                    return message;
                };

                /**
                 * Creates a plain object from a GeoDistanceQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @static
                 * @param {tablestore.search.proto.GeoDistanceQuery} message GeoDistanceQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeoDistanceQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.centerPoint = "";
                        object.distance = 0;
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.centerPoint != null && message.hasOwnProperty("centerPoint"))
                        object.centerPoint = message.centerPoint;
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                    return object;
                };

                /**
                 * Converts this GeoDistanceQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.GeoDistanceQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeoDistanceQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GeoDistanceQuery;
            })();

            proto.GeoPolygonQuery = (function() {

                /**
                 * Properties of a GeoPolygonQuery.
                 * @memberof tablestore.search.proto
                 * @interface IGeoPolygonQuery
                 * @property {string|null} [fieldName] GeoPolygonQuery fieldName
                 * @property {Array.<string>|null} [points] GeoPolygonQuery points
                 */

                /**
                 * Constructs a new GeoPolygonQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a GeoPolygonQuery.
                 * @implements IGeoPolygonQuery
                 * @constructor
                 * @param {tablestore.search.proto.IGeoPolygonQuery=} [properties] Properties to set
                 */
                function GeoPolygonQuery(properties) {
                    this.points = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GeoPolygonQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @instance
                 */
                GeoPolygonQuery.prototype.fieldName = "";

                /**
                 * GeoPolygonQuery points.
                 * @member {Array.<string>} points
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @instance
                 */
                GeoPolygonQuery.prototype.points = $util.emptyArray;

                /**
                 * Creates a new GeoPolygonQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoPolygonQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.GeoPolygonQuery} GeoPolygonQuery instance
                 */
                GeoPolygonQuery.create = function create(properties) {
                    return new GeoPolygonQuery(properties);
                };

                /**
                 * Encodes the specified GeoPolygonQuery message. Does not implicitly {@link tablestore.search.proto.GeoPolygonQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoPolygonQuery} message GeoPolygonQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoPolygonQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.points != null && message.points.length)
                        for (var i = 0; i < message.points.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.points[i]);
                    return writer;
                };

                /**
                 * Encodes the specified GeoPolygonQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.GeoPolygonQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {tablestore.search.proto.IGeoPolygonQuery} message GeoPolygonQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoPolygonQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GeoPolygonQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.GeoPolygonQuery} GeoPolygonQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoPolygonQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.GeoPolygonQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            if (!(message.points && message.points.length))
                                message.points = [];
                            message.points.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GeoPolygonQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.GeoPolygonQuery} GeoPolygonQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoPolygonQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GeoPolygonQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeoPolygonQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.points != null && message.hasOwnProperty("points")) {
                        if (!Array.isArray(message.points))
                            return "points: array expected";
                        for (var i = 0; i < message.points.length; ++i)
                            if (!$util.isString(message.points[i]))
                                return "points: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a GeoPolygonQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.GeoPolygonQuery} GeoPolygonQuery
                 */
                GeoPolygonQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.GeoPolygonQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.GeoPolygonQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.points) {
                        if (!Array.isArray(object.points))
                            throw TypeError(".tablestore.search.proto.GeoPolygonQuery.points: array expected");
                        message.points = [];
                        for (var i = 0; i < object.points.length; ++i)
                            message.points[i] = String(object.points[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GeoPolygonQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @static
                 * @param {tablestore.search.proto.GeoPolygonQuery} message GeoPolygonQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeoPolygonQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.points = [];
                    if (options.defaults)
                        object.fieldName = "";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.points && message.points.length) {
                        object.points = [];
                        for (var j = 0; j < message.points.length; ++j)
                            object.points[j] = message.points[j];
                    }
                    return object;
                };

                /**
                 * Converts this GeoPolygonQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.GeoPolygonQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeoPolygonQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GeoPolygonQuery;
            })();

            proto.ExistsQuery = (function() {

                /**
                 * Properties of an ExistsQuery.
                 * @memberof tablestore.search.proto
                 * @interface IExistsQuery
                 * @property {string|null} [fieldName] ExistsQuery fieldName
                 */

                /**
                 * Constructs a new ExistsQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents an ExistsQuery.
                 * @implements IExistsQuery
                 * @constructor
                 * @param {tablestore.search.proto.IExistsQuery=} [properties] Properties to set
                 */
                function ExistsQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExistsQuery fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @instance
                 */
                ExistsQuery.prototype.fieldName = "";

                /**
                 * Creates a new ExistsQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {tablestore.search.proto.IExistsQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.ExistsQuery} ExistsQuery instance
                 */
                ExistsQuery.create = function create(properties) {
                    return new ExistsQuery(properties);
                };

                /**
                 * Encodes the specified ExistsQuery message. Does not implicitly {@link tablestore.search.proto.ExistsQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {tablestore.search.proto.IExistsQuery} message ExistsQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExistsQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    return writer;
                };

                /**
                 * Encodes the specified ExistsQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.ExistsQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {tablestore.search.proto.IExistsQuery} message ExistsQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExistsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExistsQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.ExistsQuery} ExistsQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExistsQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.ExistsQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExistsQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.ExistsQuery} ExistsQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExistsQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExistsQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExistsQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    return null;
                };

                /**
                 * Creates an ExistsQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.ExistsQuery} ExistsQuery
                 */
                ExistsQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.ExistsQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.ExistsQuery();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    return message;
                };

                /**
                 * Creates a plain object from an ExistsQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @static
                 * @param {tablestore.search.proto.ExistsQuery} message ExistsQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExistsQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.fieldName = "";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    return object;
                };

                /**
                 * Converts this ExistsQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.ExistsQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExistsQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExistsQuery;
            })();

            proto.Query = (function() {

                /**
                 * Properties of a Query.
                 * @memberof tablestore.search.proto
                 * @interface IQuery
                 * @property {tablestore.search.proto.QueryType|null} [type] Query type
                 * @property {Uint8Array|null} [query] Query query
                 */

                /**
                 * Constructs a new Query.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a Query.
                 * @implements IQuery
                 * @constructor
                 * @param {tablestore.search.proto.IQuery=} [properties] Properties to set
                 */
                function Query(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Query type.
                 * @member {tablestore.search.proto.QueryType} type
                 * @memberof tablestore.search.proto.Query
                 * @instance
                 */
                Query.prototype.type = 1;

                /**
                 * Query query.
                 * @member {Uint8Array} query
                 * @memberof tablestore.search.proto.Query
                 * @instance
                 */
                Query.prototype.query = $util.newBuffer([]);

                /**
                 * Creates a new Query instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {tablestore.search.proto.IQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.Query} Query instance
                 */
                Query.create = function create(properties) {
                    return new Query(properties);
                };

                /**
                 * Encodes the specified Query message. Does not implicitly {@link tablestore.search.proto.Query.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {tablestore.search.proto.IQuery} message Query message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Query.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.query != null && message.hasOwnProperty("query"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.query);
                    return writer;
                };

                /**
                 * Encodes the specified Query message, length delimited. Does not implicitly {@link tablestore.search.proto.Query.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {tablestore.search.proto.IQuery} message Query message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Query.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Query message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.Query} Query
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Query.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.Query();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.query = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Query message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.Query} Query
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Query.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Query message.
                 * @function verify
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Query.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                            break;
                        }
                    if (message.query != null && message.hasOwnProperty("query"))
                        if (!(message.query && typeof message.query.length === "number" || $util.isString(message.query)))
                            return "query: buffer expected";
                    return null;
                };

                /**
                 * Creates a Query message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.Query} Query
                 */
                Query.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.Query)
                        return object;
                    var message = new $root.tablestore.search.proto.Query();
                    switch (object.type) {
                    case "MATCH_QUERY":
                    case 1:
                        message.type = 1;
                        break;
                    case "MATCH_PHRASE_QUERY":
                    case 2:
                        message.type = 2;
                        break;
                    case "TERM_QUERY":
                    case 3:
                        message.type = 3;
                        break;
                    case "RANGE_QUERY":
                    case 4:
                        message.type = 4;
                        break;
                    case "PREFIX_QUERY":
                    case 5:
                        message.type = 5;
                        break;
                    case "BOOL_QUERY":
                    case 6:
                        message.type = 6;
                        break;
                    case "CONST_SCORE_QUERY":
                    case 7:
                        message.type = 7;
                        break;
                    case "FUNCTION_SCORE_QUERY":
                    case 8:
                        message.type = 8;
                        break;
                    case "NESTED_QUERY":
                    case 9:
                        message.type = 9;
                        break;
                    case "WILDCARD_QUERY":
                    case 10:
                        message.type = 10;
                        break;
                    case "MATCH_ALL_QUERY":
                    case 11:
                        message.type = 11;
                        break;
                    case "GEO_BOUNDING_BOX_QUERY":
                    case 12:
                        message.type = 12;
                        break;
                    case "GEO_DISTANCE_QUERY":
                    case 13:
                        message.type = 13;
                        break;
                    case "GEO_POLYGON_QUERY":
                    case 14:
                        message.type = 14;
                        break;
                    case "TERMS_QUERY":
                    case 15:
                        message.type = 15;
                        break;
                    case "EXISTS_QUERY":
                    case 16:
                        message.type = 16;
                        break;
                    }
                    if (object.query != null)
                        if (typeof object.query === "string")
                            $util.base64.decode(object.query, message.query = $util.newBuffer($util.base64.length(object.query)), 0);
                        else if (object.query.length)
                            message.query = object.query;
                    return message;
                };

                /**
                 * Creates a plain object from a Query message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.Query
                 * @static
                 * @param {tablestore.search.proto.Query} message Query
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Query.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "MATCH_QUERY" : 1;
                        if (options.bytes === String)
                            object.query = "";
                        else {
                            object.query = [];
                            if (options.bytes !== Array)
                                object.query = $util.newBuffer(object.query);
                        }
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.tablestore.search.proto.QueryType[message.type] : message.type;
                    if (message.query != null && message.hasOwnProperty("query"))
                        object.query = options.bytes === String ? $util.base64.encode(message.query, 0, message.query.length) : options.bytes === Array ? Array.prototype.slice.call(message.query) : message.query;
                    return object;
                };

                /**
                 * Converts this Query to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.Query
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Query.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Query;
            })();

            proto.Collapse = (function() {

                /**
                 * Properties of a Collapse.
                 * @memberof tablestore.search.proto
                 * @interface ICollapse
                 * @property {string|null} [fieldName] Collapse fieldName
                 */

                /**
                 * Constructs a new Collapse.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a Collapse.
                 * @implements ICollapse
                 * @constructor
                 * @param {tablestore.search.proto.ICollapse=} [properties] Properties to set
                 */
                function Collapse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Collapse fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.Collapse
                 * @instance
                 */
                Collapse.prototype.fieldName = "";

                /**
                 * Creates a new Collapse instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {tablestore.search.proto.ICollapse=} [properties] Properties to set
                 * @returns {tablestore.search.proto.Collapse} Collapse instance
                 */
                Collapse.create = function create(properties) {
                    return new Collapse(properties);
                };

                /**
                 * Encodes the specified Collapse message. Does not implicitly {@link tablestore.search.proto.Collapse.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {tablestore.search.proto.ICollapse} message Collapse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Collapse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    return writer;
                };

                /**
                 * Encodes the specified Collapse message, length delimited. Does not implicitly {@link tablestore.search.proto.Collapse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {tablestore.search.proto.ICollapse} message Collapse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Collapse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Collapse message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.Collapse} Collapse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Collapse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.Collapse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Collapse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.Collapse} Collapse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Collapse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Collapse message.
                 * @function verify
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Collapse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    return null;
                };

                /**
                 * Creates a Collapse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.Collapse} Collapse
                 */
                Collapse.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.Collapse)
                        return object;
                    var message = new $root.tablestore.search.proto.Collapse();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    return message;
                };

                /**
                 * Creates a plain object from a Collapse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.Collapse
                 * @static
                 * @param {tablestore.search.proto.Collapse} message Collapse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Collapse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.fieldName = "";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    return object;
                };

                /**
                 * Converts this Collapse to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.Collapse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Collapse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Collapse;
            })();

            proto.NestedFilter = (function() {

                /**
                 * Properties of a NestedFilter.
                 * @memberof tablestore.search.proto
                 * @interface INestedFilter
                 * @property {string|null} [path] NestedFilter path
                 * @property {tablestore.search.proto.IQuery|null} [filter] NestedFilter filter
                 */

                /**
                 * Constructs a new NestedFilter.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a NestedFilter.
                 * @implements INestedFilter
                 * @constructor
                 * @param {tablestore.search.proto.INestedFilter=} [properties] Properties to set
                 */
                function NestedFilter(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NestedFilter path.
                 * @member {string} path
                 * @memberof tablestore.search.proto.NestedFilter
                 * @instance
                 */
                NestedFilter.prototype.path = "";

                /**
                 * NestedFilter filter.
                 * @member {tablestore.search.proto.IQuery|null|undefined} filter
                 * @memberof tablestore.search.proto.NestedFilter
                 * @instance
                 */
                NestedFilter.prototype.filter = null;

                /**
                 * Creates a new NestedFilter instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {tablestore.search.proto.INestedFilter=} [properties] Properties to set
                 * @returns {tablestore.search.proto.NestedFilter} NestedFilter instance
                 */
                NestedFilter.create = function create(properties) {
                    return new NestedFilter(properties);
                };

                /**
                 * Encodes the specified NestedFilter message. Does not implicitly {@link tablestore.search.proto.NestedFilter.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {tablestore.search.proto.INestedFilter} message NestedFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedFilter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.hasOwnProperty("path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        $root.tablestore.search.proto.Query.encode(message.filter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NestedFilter message, length delimited. Does not implicitly {@link tablestore.search.proto.NestedFilter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {tablestore.search.proto.INestedFilter} message NestedFilter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedFilter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NestedFilter message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.NestedFilter} NestedFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedFilter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.NestedFilter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.path = reader.string();
                            break;
                        case 2:
                            message.filter = $root.tablestore.search.proto.Query.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NestedFilter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.NestedFilter} NestedFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedFilter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NestedFilter message.
                 * @function verify
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NestedFilter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    if (message.filter != null && message.hasOwnProperty("filter")) {
                        var error = $root.tablestore.search.proto.Query.verify(message.filter);
                        if (error)
                            return "filter." + error;
                    }
                    return null;
                };

                /**
                 * Creates a NestedFilter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.NestedFilter} NestedFilter
                 */
                NestedFilter.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.NestedFilter)
                        return object;
                    var message = new $root.tablestore.search.proto.NestedFilter();
                    if (object.path != null)
                        message.path = String(object.path);
                    if (object.filter != null) {
                        if (typeof object.filter !== "object")
                            throw TypeError(".tablestore.search.proto.NestedFilter.filter: object expected");
                        message.filter = $root.tablestore.search.proto.Query.fromObject(object.filter);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NestedFilter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.NestedFilter
                 * @static
                 * @param {tablestore.search.proto.NestedFilter} message NestedFilter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NestedFilter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.path = "";
                        object.filter = null;
                    }
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        object.filter = $root.tablestore.search.proto.Query.toObject(message.filter, options);
                    return object;
                };

                /**
                 * Converts this NestedFilter to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.NestedFilter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NestedFilter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NestedFilter;
            })();

            /**
             * SortOrder enum.
             * @name tablestore.search.proto.SortOrder
             * @enum {string}
             * @property {number} SORT_ORDER_ASC=0 SORT_ORDER_ASC value
             * @property {number} SORT_ORDER_DESC=1 SORT_ORDER_DESC value
             */
            proto.SortOrder = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SORT_ORDER_ASC"] = 0;
                values[valuesById[1] = "SORT_ORDER_DESC"] = 1;
                return values;
            })();

            /**
             * SortMode enum.
             * @name tablestore.search.proto.SortMode
             * @enum {string}
             * @property {number} SORT_MODE_MIN=0 SORT_MODE_MIN value
             * @property {number} SORT_MODE_MAX=1 SORT_MODE_MAX value
             * @property {number} SORT_MODE_AVG=2 SORT_MODE_AVG value
             */
            proto.SortMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SORT_MODE_MIN"] = 0;
                values[valuesById[1] = "SORT_MODE_MAX"] = 1;
                values[valuesById[2] = "SORT_MODE_AVG"] = 2;
                return values;
            })();

            proto.ScoreSort = (function() {

                /**
                 * Properties of a ScoreSort.
                 * @memberof tablestore.search.proto
                 * @interface IScoreSort
                 * @property {tablestore.search.proto.SortOrder|null} [order] ScoreSort order
                 */

                /**
                 * Constructs a new ScoreSort.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a ScoreSort.
                 * @implements IScoreSort
                 * @constructor
                 * @param {tablestore.search.proto.IScoreSort=} [properties] Properties to set
                 */
                function ScoreSort(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ScoreSort order.
                 * @member {tablestore.search.proto.SortOrder} order
                 * @memberof tablestore.search.proto.ScoreSort
                 * @instance
                 */
                ScoreSort.prototype.order = 0;

                /**
                 * Creates a new ScoreSort instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {tablestore.search.proto.IScoreSort=} [properties] Properties to set
                 * @returns {tablestore.search.proto.ScoreSort} ScoreSort instance
                 */
                ScoreSort.create = function create(properties) {
                    return new ScoreSort(properties);
                };

                /**
                 * Encodes the specified ScoreSort message. Does not implicitly {@link tablestore.search.proto.ScoreSort.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {tablestore.search.proto.IScoreSort} message ScoreSort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ScoreSort.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.order != null && message.hasOwnProperty("order"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
                    return writer;
                };

                /**
                 * Encodes the specified ScoreSort message, length delimited. Does not implicitly {@link tablestore.search.proto.ScoreSort.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {tablestore.search.proto.IScoreSort} message ScoreSort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ScoreSort.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ScoreSort message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.ScoreSort} ScoreSort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ScoreSort.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.ScoreSort();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.order = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ScoreSort message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.ScoreSort} ScoreSort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ScoreSort.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ScoreSort message.
                 * @function verify
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ScoreSort.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.order != null && message.hasOwnProperty("order"))
                        switch (message.order) {
                        default:
                            return "order: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a ScoreSort message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.ScoreSort} ScoreSort
                 */
                ScoreSort.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.ScoreSort)
                        return object;
                    var message = new $root.tablestore.search.proto.ScoreSort();
                    switch (object.order) {
                    case "SORT_ORDER_ASC":
                    case 0:
                        message.order = 0;
                        break;
                    case "SORT_ORDER_DESC":
                    case 1:
                        message.order = 1;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ScoreSort message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.ScoreSort
                 * @static
                 * @param {tablestore.search.proto.ScoreSort} message ScoreSort
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ScoreSort.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.order = options.enums === String ? "SORT_ORDER_ASC" : 0;
                    if (message.order != null && message.hasOwnProperty("order"))
                        object.order = options.enums === String ? $root.tablestore.search.proto.SortOrder[message.order] : message.order;
                    return object;
                };

                /**
                 * Converts this ScoreSort to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.ScoreSort
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ScoreSort.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ScoreSort;
            })();

            proto.FieldSort = (function() {

                /**
                 * Properties of a FieldSort.
                 * @memberof tablestore.search.proto
                 * @interface IFieldSort
                 * @property {string|null} [fieldName] FieldSort fieldName
                 * @property {tablestore.search.proto.SortOrder|null} [order] FieldSort order
                 * @property {tablestore.search.proto.SortMode|null} [mode] FieldSort mode
                 * @property {tablestore.search.proto.INestedFilter|null} [nestedFilter] FieldSort nestedFilter
                 */

                /**
                 * Constructs a new FieldSort.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a FieldSort.
                 * @implements IFieldSort
                 * @constructor
                 * @param {tablestore.search.proto.IFieldSort=} [properties] Properties to set
                 */
                function FieldSort(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FieldSort fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.FieldSort
                 * @instance
                 */
                FieldSort.prototype.fieldName = "";

                /**
                 * FieldSort order.
                 * @member {tablestore.search.proto.SortOrder} order
                 * @memberof tablestore.search.proto.FieldSort
                 * @instance
                 */
                FieldSort.prototype.order = 0;

                /**
                 * FieldSort mode.
                 * @member {tablestore.search.proto.SortMode} mode
                 * @memberof tablestore.search.proto.FieldSort
                 * @instance
                 */
                FieldSort.prototype.mode = 0;

                /**
                 * FieldSort nestedFilter.
                 * @member {tablestore.search.proto.INestedFilter|null|undefined} nestedFilter
                 * @memberof tablestore.search.proto.FieldSort
                 * @instance
                 */
                FieldSort.prototype.nestedFilter = null;

                /**
                 * Creates a new FieldSort instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {tablestore.search.proto.IFieldSort=} [properties] Properties to set
                 * @returns {tablestore.search.proto.FieldSort} FieldSort instance
                 */
                FieldSort.create = function create(properties) {
                    return new FieldSort(properties);
                };

                /**
                 * Encodes the specified FieldSort message. Does not implicitly {@link tablestore.search.proto.FieldSort.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {tablestore.search.proto.IFieldSort} message FieldSort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldSort.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.order != null && message.hasOwnProperty("order"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.order);
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mode);
                    if (message.nestedFilter != null && message.hasOwnProperty("nestedFilter"))
                        $root.tablestore.search.proto.NestedFilter.encode(message.nestedFilter, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FieldSort message, length delimited. Does not implicitly {@link tablestore.search.proto.FieldSort.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {tablestore.search.proto.IFieldSort} message FieldSort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldSort.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FieldSort message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.FieldSort} FieldSort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldSort.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.FieldSort();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.order = reader.int32();
                            break;
                        case 3:
                            message.mode = reader.int32();
                            break;
                        case 4:
                            message.nestedFilter = $root.tablestore.search.proto.NestedFilter.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FieldSort message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.FieldSort} FieldSort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldSort.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FieldSort message.
                 * @function verify
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldSort.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.order != null && message.hasOwnProperty("order"))
                        switch (message.order) {
                        default:
                            return "order: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        switch (message.mode) {
                        default:
                            return "mode: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.nestedFilter != null && message.hasOwnProperty("nestedFilter")) {
                        var error = $root.tablestore.search.proto.NestedFilter.verify(message.nestedFilter);
                        if (error)
                            return "nestedFilter." + error;
                    }
                    return null;
                };

                /**
                 * Creates a FieldSort message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.FieldSort} FieldSort
                 */
                FieldSort.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.FieldSort)
                        return object;
                    var message = new $root.tablestore.search.proto.FieldSort();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    switch (object.order) {
                    case "SORT_ORDER_ASC":
                    case 0:
                        message.order = 0;
                        break;
                    case "SORT_ORDER_DESC":
                    case 1:
                        message.order = 1;
                        break;
                    }
                    switch (object.mode) {
                    case "SORT_MODE_MIN":
                    case 0:
                        message.mode = 0;
                        break;
                    case "SORT_MODE_MAX":
                    case 1:
                        message.mode = 1;
                        break;
                    case "SORT_MODE_AVG":
                    case 2:
                        message.mode = 2;
                        break;
                    }
                    if (object.nestedFilter != null) {
                        if (typeof object.nestedFilter !== "object")
                            throw TypeError(".tablestore.search.proto.FieldSort.nestedFilter: object expected");
                        message.nestedFilter = $root.tablestore.search.proto.NestedFilter.fromObject(object.nestedFilter);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FieldSort message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.FieldSort
                 * @static
                 * @param {tablestore.search.proto.FieldSort} message FieldSort
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldSort.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldName = "";
                        object.order = options.enums === String ? "SORT_ORDER_ASC" : 0;
                        object.mode = options.enums === String ? "SORT_MODE_MIN" : 0;
                        object.nestedFilter = null;
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.order != null && message.hasOwnProperty("order"))
                        object.order = options.enums === String ? $root.tablestore.search.proto.SortOrder[message.order] : message.order;
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode = options.enums === String ? $root.tablestore.search.proto.SortMode[message.mode] : message.mode;
                    if (message.nestedFilter != null && message.hasOwnProperty("nestedFilter"))
                        object.nestedFilter = $root.tablestore.search.proto.NestedFilter.toObject(message.nestedFilter, options);
                    return object;
                };

                /**
                 * Converts this FieldSort to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.FieldSort
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldSort.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FieldSort;
            })();

            /**
             * GeoDistanceType enum.
             * @name tablestore.search.proto.GeoDistanceType
             * @enum {string}
             * @property {number} GEO_DISTANCE_ARC=0 GEO_DISTANCE_ARC value
             * @property {number} GEO_DISTANCE_PLANE=1 GEO_DISTANCE_PLANE value
             */
            proto.GeoDistanceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "GEO_DISTANCE_ARC"] = 0;
                values[valuesById[1] = "GEO_DISTANCE_PLANE"] = 1;
                return values;
            })();

            proto.GeoDistanceSort = (function() {

                /**
                 * Properties of a GeoDistanceSort.
                 * @memberof tablestore.search.proto
                 * @interface IGeoDistanceSort
                 * @property {string|null} [fieldName] GeoDistanceSort fieldName
                 * @property {Array.<string>|null} [points] GeoDistanceSort points
                 * @property {tablestore.search.proto.SortOrder|null} [order] GeoDistanceSort order
                 * @property {tablestore.search.proto.SortMode|null} [mode] GeoDistanceSort mode
                 * @property {tablestore.search.proto.GeoDistanceType|null} [distanceType] GeoDistanceSort distanceType
                 * @property {tablestore.search.proto.INestedFilter|null} [nestedFilter] GeoDistanceSort nestedFilter
                 */

                /**
                 * Constructs a new GeoDistanceSort.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a GeoDistanceSort.
                 * @implements IGeoDistanceSort
                 * @constructor
                 * @param {tablestore.search.proto.IGeoDistanceSort=} [properties] Properties to set
                 */
                function GeoDistanceSort(properties) {
                    this.points = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GeoDistanceSort fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 */
                GeoDistanceSort.prototype.fieldName = "";

                /**
                 * GeoDistanceSort points.
                 * @member {Array.<string>} points
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 */
                GeoDistanceSort.prototype.points = $util.emptyArray;

                /**
                 * GeoDistanceSort order.
                 * @member {tablestore.search.proto.SortOrder} order
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 */
                GeoDistanceSort.prototype.order = 0;

                /**
                 * GeoDistanceSort mode.
                 * @member {tablestore.search.proto.SortMode} mode
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 */
                GeoDistanceSort.prototype.mode = 0;

                /**
                 * GeoDistanceSort distanceType.
                 * @member {tablestore.search.proto.GeoDistanceType} distanceType
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 */
                GeoDistanceSort.prototype.distanceType = 0;

                /**
                 * GeoDistanceSort nestedFilter.
                 * @member {tablestore.search.proto.INestedFilter|null|undefined} nestedFilter
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 */
                GeoDistanceSort.prototype.nestedFilter = null;

                /**
                 * Creates a new GeoDistanceSort instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {tablestore.search.proto.IGeoDistanceSort=} [properties] Properties to set
                 * @returns {tablestore.search.proto.GeoDistanceSort} GeoDistanceSort instance
                 */
                GeoDistanceSort.create = function create(properties) {
                    return new GeoDistanceSort(properties);
                };

                /**
                 * Encodes the specified GeoDistanceSort message. Does not implicitly {@link tablestore.search.proto.GeoDistanceSort.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {tablestore.search.proto.IGeoDistanceSort} message GeoDistanceSort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoDistanceSort.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.points != null && message.points.length)
                        for (var i = 0; i < message.points.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.points[i]);
                    if (message.order != null && message.hasOwnProperty("order"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.order);
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.mode);
                    if (message.distanceType != null && message.hasOwnProperty("distanceType"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.distanceType);
                    if (message.nestedFilter != null && message.hasOwnProperty("nestedFilter"))
                        $root.tablestore.search.proto.NestedFilter.encode(message.nestedFilter, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GeoDistanceSort message, length delimited. Does not implicitly {@link tablestore.search.proto.GeoDistanceSort.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {tablestore.search.proto.IGeoDistanceSort} message GeoDistanceSort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeoDistanceSort.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GeoDistanceSort message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.GeoDistanceSort} GeoDistanceSort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoDistanceSort.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.GeoDistanceSort();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            if (!(message.points && message.points.length))
                                message.points = [];
                            message.points.push(reader.string());
                            break;
                        case 3:
                            message.order = reader.int32();
                            break;
                        case 4:
                            message.mode = reader.int32();
                            break;
                        case 5:
                            message.distanceType = reader.int32();
                            break;
                        case 6:
                            message.nestedFilter = $root.tablestore.search.proto.NestedFilter.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GeoDistanceSort message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.GeoDistanceSort} GeoDistanceSort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeoDistanceSort.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GeoDistanceSort message.
                 * @function verify
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeoDistanceSort.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.points != null && message.hasOwnProperty("points")) {
                        if (!Array.isArray(message.points))
                            return "points: array expected";
                        for (var i = 0; i < message.points.length; ++i)
                            if (!$util.isString(message.points[i]))
                                return "points: string[] expected";
                    }
                    if (message.order != null && message.hasOwnProperty("order"))
                        switch (message.order) {
                        default:
                            return "order: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        switch (message.mode) {
                        default:
                            return "mode: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.distanceType != null && message.hasOwnProperty("distanceType"))
                        switch (message.distanceType) {
                        default:
                            return "distanceType: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.nestedFilter != null && message.hasOwnProperty("nestedFilter")) {
                        var error = $root.tablestore.search.proto.NestedFilter.verify(message.nestedFilter);
                        if (error)
                            return "nestedFilter." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GeoDistanceSort message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.GeoDistanceSort} GeoDistanceSort
                 */
                GeoDistanceSort.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.GeoDistanceSort)
                        return object;
                    var message = new $root.tablestore.search.proto.GeoDistanceSort();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    if (object.points) {
                        if (!Array.isArray(object.points))
                            throw TypeError(".tablestore.search.proto.GeoDistanceSort.points: array expected");
                        message.points = [];
                        for (var i = 0; i < object.points.length; ++i)
                            message.points[i] = String(object.points[i]);
                    }
                    switch (object.order) {
                    case "SORT_ORDER_ASC":
                    case 0:
                        message.order = 0;
                        break;
                    case "SORT_ORDER_DESC":
                    case 1:
                        message.order = 1;
                        break;
                    }
                    switch (object.mode) {
                    case "SORT_MODE_MIN":
                    case 0:
                        message.mode = 0;
                        break;
                    case "SORT_MODE_MAX":
                    case 1:
                        message.mode = 1;
                        break;
                    case "SORT_MODE_AVG":
                    case 2:
                        message.mode = 2;
                        break;
                    }
                    switch (object.distanceType) {
                    case "GEO_DISTANCE_ARC":
                    case 0:
                        message.distanceType = 0;
                        break;
                    case "GEO_DISTANCE_PLANE":
                    case 1:
                        message.distanceType = 1;
                        break;
                    }
                    if (object.nestedFilter != null) {
                        if (typeof object.nestedFilter !== "object")
                            throw TypeError(".tablestore.search.proto.GeoDistanceSort.nestedFilter: object expected");
                        message.nestedFilter = $root.tablestore.search.proto.NestedFilter.fromObject(object.nestedFilter);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GeoDistanceSort message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @static
                 * @param {tablestore.search.proto.GeoDistanceSort} message GeoDistanceSort
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeoDistanceSort.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.points = [];
                    if (options.defaults) {
                        object.fieldName = "";
                        object.order = options.enums === String ? "SORT_ORDER_ASC" : 0;
                        object.mode = options.enums === String ? "SORT_MODE_MIN" : 0;
                        object.distanceType = options.enums === String ? "GEO_DISTANCE_ARC" : 0;
                        object.nestedFilter = null;
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.points && message.points.length) {
                        object.points = [];
                        for (var j = 0; j < message.points.length; ++j)
                            object.points[j] = message.points[j];
                    }
                    if (message.order != null && message.hasOwnProperty("order"))
                        object.order = options.enums === String ? $root.tablestore.search.proto.SortOrder[message.order] : message.order;
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode = options.enums === String ? $root.tablestore.search.proto.SortMode[message.mode] : message.mode;
                    if (message.distanceType != null && message.hasOwnProperty("distanceType"))
                        object.distanceType = options.enums === String ? $root.tablestore.search.proto.GeoDistanceType[message.distanceType] : message.distanceType;
                    if (message.nestedFilter != null && message.hasOwnProperty("nestedFilter"))
                        object.nestedFilter = $root.tablestore.search.proto.NestedFilter.toObject(message.nestedFilter, options);
                    return object;
                };

                /**
                 * Converts this GeoDistanceSort to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.GeoDistanceSort
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeoDistanceSort.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GeoDistanceSort;
            })();

            proto.PrimaryKeySort = (function() {

                /**
                 * Properties of a PrimaryKeySort.
                 * @memberof tablestore.search.proto
                 * @interface IPrimaryKeySort
                 * @property {tablestore.search.proto.SortOrder|null} [order] PrimaryKeySort order
                 */

                /**
                 * Constructs a new PrimaryKeySort.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a PrimaryKeySort.
                 * @implements IPrimaryKeySort
                 * @constructor
                 * @param {tablestore.search.proto.IPrimaryKeySort=} [properties] Properties to set
                 */
                function PrimaryKeySort(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PrimaryKeySort order.
                 * @member {tablestore.search.proto.SortOrder} order
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @instance
                 */
                PrimaryKeySort.prototype.order = 0;

                /**
                 * Creates a new PrimaryKeySort instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {tablestore.search.proto.IPrimaryKeySort=} [properties] Properties to set
                 * @returns {tablestore.search.proto.PrimaryKeySort} PrimaryKeySort instance
                 */
                PrimaryKeySort.create = function create(properties) {
                    return new PrimaryKeySort(properties);
                };

                /**
                 * Encodes the specified PrimaryKeySort message. Does not implicitly {@link tablestore.search.proto.PrimaryKeySort.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {tablestore.search.proto.IPrimaryKeySort} message PrimaryKeySort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrimaryKeySort.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.order != null && message.hasOwnProperty("order"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
                    return writer;
                };

                /**
                 * Encodes the specified PrimaryKeySort message, length delimited. Does not implicitly {@link tablestore.search.proto.PrimaryKeySort.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {tablestore.search.proto.IPrimaryKeySort} message PrimaryKeySort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrimaryKeySort.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PrimaryKeySort message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.PrimaryKeySort} PrimaryKeySort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrimaryKeySort.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.PrimaryKeySort();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.order = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PrimaryKeySort message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.PrimaryKeySort} PrimaryKeySort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrimaryKeySort.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PrimaryKeySort message.
                 * @function verify
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PrimaryKeySort.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.order != null && message.hasOwnProperty("order"))
                        switch (message.order) {
                        default:
                            return "order: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a PrimaryKeySort message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.PrimaryKeySort} PrimaryKeySort
                 */
                PrimaryKeySort.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.PrimaryKeySort)
                        return object;
                    var message = new $root.tablestore.search.proto.PrimaryKeySort();
                    switch (object.order) {
                    case "SORT_ORDER_ASC":
                    case 0:
                        message.order = 0;
                        break;
                    case "SORT_ORDER_DESC":
                    case 1:
                        message.order = 1;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PrimaryKeySort message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @static
                 * @param {tablestore.search.proto.PrimaryKeySort} message PrimaryKeySort
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PrimaryKeySort.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.order = options.enums === String ? "SORT_ORDER_ASC" : 0;
                    if (message.order != null && message.hasOwnProperty("order"))
                        object.order = options.enums === String ? $root.tablestore.search.proto.SortOrder[message.order] : message.order;
                    return object;
                };

                /**
                 * Converts this PrimaryKeySort to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.PrimaryKeySort
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PrimaryKeySort.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PrimaryKeySort;
            })();

            proto.Sorter = (function() {

                /**
                 * Properties of a Sorter.
                 * @memberof tablestore.search.proto
                 * @interface ISorter
                 * @property {tablestore.search.proto.IFieldSort|null} [fieldSort] Sorter fieldSort
                 * @property {tablestore.search.proto.IGeoDistanceSort|null} [geoDistanceSort] Sorter geoDistanceSort
                 * @property {tablestore.search.proto.IScoreSort|null} [scoreSort] Sorter scoreSort
                 * @property {tablestore.search.proto.IPrimaryKeySort|null} [pkSort] Sorter pkSort
                 */

                /**
                 * Constructs a new Sorter.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a Sorter.
                 * @implements ISorter
                 * @constructor
                 * @param {tablestore.search.proto.ISorter=} [properties] Properties to set
                 */
                function Sorter(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Sorter fieldSort.
                 * @member {tablestore.search.proto.IFieldSort|null|undefined} fieldSort
                 * @memberof tablestore.search.proto.Sorter
                 * @instance
                 */
                Sorter.prototype.fieldSort = null;

                /**
                 * Sorter geoDistanceSort.
                 * @member {tablestore.search.proto.IGeoDistanceSort|null|undefined} geoDistanceSort
                 * @memberof tablestore.search.proto.Sorter
                 * @instance
                 */
                Sorter.prototype.geoDistanceSort = null;

                /**
                 * Sorter scoreSort.
                 * @member {tablestore.search.proto.IScoreSort|null|undefined} scoreSort
                 * @memberof tablestore.search.proto.Sorter
                 * @instance
                 */
                Sorter.prototype.scoreSort = null;

                /**
                 * Sorter pkSort.
                 * @member {tablestore.search.proto.IPrimaryKeySort|null|undefined} pkSort
                 * @memberof tablestore.search.proto.Sorter
                 * @instance
                 */
                Sorter.prototype.pkSort = null;

                /**
                 * Creates a new Sorter instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {tablestore.search.proto.ISorter=} [properties] Properties to set
                 * @returns {tablestore.search.proto.Sorter} Sorter instance
                 */
                Sorter.create = function create(properties) {
                    return new Sorter(properties);
                };

                /**
                 * Encodes the specified Sorter message. Does not implicitly {@link tablestore.search.proto.Sorter.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {tablestore.search.proto.ISorter} message Sorter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sorter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldSort != null && message.hasOwnProperty("fieldSort"))
                        $root.tablestore.search.proto.FieldSort.encode(message.fieldSort, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.geoDistanceSort != null && message.hasOwnProperty("geoDistanceSort"))
                        $root.tablestore.search.proto.GeoDistanceSort.encode(message.geoDistanceSort, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.scoreSort != null && message.hasOwnProperty("scoreSort"))
                        $root.tablestore.search.proto.ScoreSort.encode(message.scoreSort, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.pkSort != null && message.hasOwnProperty("pkSort"))
                        $root.tablestore.search.proto.PrimaryKeySort.encode(message.pkSort, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Sorter message, length delimited. Does not implicitly {@link tablestore.search.proto.Sorter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {tablestore.search.proto.ISorter} message Sorter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sorter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Sorter message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.Sorter} Sorter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sorter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.Sorter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldSort = $root.tablestore.search.proto.FieldSort.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.geoDistanceSort = $root.tablestore.search.proto.GeoDistanceSort.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.scoreSort = $root.tablestore.search.proto.ScoreSort.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.pkSort = $root.tablestore.search.proto.PrimaryKeySort.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Sorter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.Sorter} Sorter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sorter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Sorter message.
                 * @function verify
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Sorter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldSort != null && message.hasOwnProperty("fieldSort")) {
                        var error = $root.tablestore.search.proto.FieldSort.verify(message.fieldSort);
                        if (error)
                            return "fieldSort." + error;
                    }
                    if (message.geoDistanceSort != null && message.hasOwnProperty("geoDistanceSort")) {
                        var error = $root.tablestore.search.proto.GeoDistanceSort.verify(message.geoDistanceSort);
                        if (error)
                            return "geoDistanceSort." + error;
                    }
                    if (message.scoreSort != null && message.hasOwnProperty("scoreSort")) {
                        var error = $root.tablestore.search.proto.ScoreSort.verify(message.scoreSort);
                        if (error)
                            return "scoreSort." + error;
                    }
                    if (message.pkSort != null && message.hasOwnProperty("pkSort")) {
                        var error = $root.tablestore.search.proto.PrimaryKeySort.verify(message.pkSort);
                        if (error)
                            return "pkSort." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Sorter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.Sorter} Sorter
                 */
                Sorter.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.Sorter)
                        return object;
                    var message = new $root.tablestore.search.proto.Sorter();
                    if (object.fieldSort != null) {
                        if (typeof object.fieldSort !== "object")
                            throw TypeError(".tablestore.search.proto.Sorter.fieldSort: object expected");
                        message.fieldSort = $root.tablestore.search.proto.FieldSort.fromObject(object.fieldSort);
                    }
                    if (object.geoDistanceSort != null) {
                        if (typeof object.geoDistanceSort !== "object")
                            throw TypeError(".tablestore.search.proto.Sorter.geoDistanceSort: object expected");
                        message.geoDistanceSort = $root.tablestore.search.proto.GeoDistanceSort.fromObject(object.geoDistanceSort);
                    }
                    if (object.scoreSort != null) {
                        if (typeof object.scoreSort !== "object")
                            throw TypeError(".tablestore.search.proto.Sorter.scoreSort: object expected");
                        message.scoreSort = $root.tablestore.search.proto.ScoreSort.fromObject(object.scoreSort);
                    }
                    if (object.pkSort != null) {
                        if (typeof object.pkSort !== "object")
                            throw TypeError(".tablestore.search.proto.Sorter.pkSort: object expected");
                        message.pkSort = $root.tablestore.search.proto.PrimaryKeySort.fromObject(object.pkSort);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Sorter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.Sorter
                 * @static
                 * @param {tablestore.search.proto.Sorter} message Sorter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Sorter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fieldSort = null;
                        object.geoDistanceSort = null;
                        object.scoreSort = null;
                        object.pkSort = null;
                    }
                    if (message.fieldSort != null && message.hasOwnProperty("fieldSort"))
                        object.fieldSort = $root.tablestore.search.proto.FieldSort.toObject(message.fieldSort, options);
                    if (message.geoDistanceSort != null && message.hasOwnProperty("geoDistanceSort"))
                        object.geoDistanceSort = $root.tablestore.search.proto.GeoDistanceSort.toObject(message.geoDistanceSort, options);
                    if (message.scoreSort != null && message.hasOwnProperty("scoreSort"))
                        object.scoreSort = $root.tablestore.search.proto.ScoreSort.toObject(message.scoreSort, options);
                    if (message.pkSort != null && message.hasOwnProperty("pkSort"))
                        object.pkSort = $root.tablestore.search.proto.PrimaryKeySort.toObject(message.pkSort, options);
                    return object;
                };

                /**
                 * Converts this Sorter to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.Sorter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Sorter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Sorter;
            })();

            proto.Sort = (function() {

                /**
                 * Properties of a Sort.
                 * @memberof tablestore.search.proto
                 * @interface ISort
                 * @property {Array.<tablestore.search.proto.ISorter>|null} [sorter] Sort sorter
                 */

                /**
                 * Constructs a new Sort.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a Sort.
                 * @implements ISort
                 * @constructor
                 * @param {tablestore.search.proto.ISort=} [properties] Properties to set
                 */
                function Sort(properties) {
                    this.sorter = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Sort sorter.
                 * @member {Array.<tablestore.search.proto.ISorter>} sorter
                 * @memberof tablestore.search.proto.Sort
                 * @instance
                 */
                Sort.prototype.sorter = $util.emptyArray;

                /**
                 * Creates a new Sort instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {tablestore.search.proto.ISort=} [properties] Properties to set
                 * @returns {tablestore.search.proto.Sort} Sort instance
                 */
                Sort.create = function create(properties) {
                    return new Sort(properties);
                };

                /**
                 * Encodes the specified Sort message. Does not implicitly {@link tablestore.search.proto.Sort.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {tablestore.search.proto.ISort} message Sort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sort.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sorter != null && message.sorter.length)
                        for (var i = 0; i < message.sorter.length; ++i)
                            $root.tablestore.search.proto.Sorter.encode(message.sorter[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Sort message, length delimited. Does not implicitly {@link tablestore.search.proto.Sort.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {tablestore.search.proto.ISort} message Sort message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sort.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Sort message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.Sort} Sort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sort.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.Sort();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.sorter && message.sorter.length))
                                message.sorter = [];
                            message.sorter.push($root.tablestore.search.proto.Sorter.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Sort message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.Sort} Sort
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sort.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Sort message.
                 * @function verify
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Sort.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sorter != null && message.hasOwnProperty("sorter")) {
                        if (!Array.isArray(message.sorter))
                            return "sorter: array expected";
                        for (var i = 0; i < message.sorter.length; ++i) {
                            var error = $root.tablestore.search.proto.Sorter.verify(message.sorter[i]);
                            if (error)
                                return "sorter." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Sort message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.Sort} Sort
                 */
                Sort.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.Sort)
                        return object;
                    var message = new $root.tablestore.search.proto.Sort();
                    if (object.sorter) {
                        if (!Array.isArray(object.sorter))
                            throw TypeError(".tablestore.search.proto.Sort.sorter: array expected");
                        message.sorter = [];
                        for (var i = 0; i < object.sorter.length; ++i) {
                            if (typeof object.sorter[i] !== "object")
                                throw TypeError(".tablestore.search.proto.Sort.sorter: object expected");
                            message.sorter[i] = $root.tablestore.search.proto.Sorter.fromObject(object.sorter[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Sort message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.Sort
                 * @static
                 * @param {tablestore.search.proto.Sort} message Sort
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Sort.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.sorter = [];
                    if (message.sorter && message.sorter.length) {
                        object.sorter = [];
                        for (var j = 0; j < message.sorter.length; ++j)
                            object.sorter[j] = $root.tablestore.search.proto.Sorter.toObject(message.sorter[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Sort to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.Sort
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Sort.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Sort;
            })();

            proto.SearchQuery = (function() {

                /**
                 * Properties of a SearchQuery.
                 * @memberof tablestore.search.proto
                 * @interface ISearchQuery
                 * @property {number|null} [offset] SearchQuery offset
                 * @property {number|null} [limit] SearchQuery limit
                 * @property {tablestore.search.proto.IQuery|null} [query] SearchQuery query
                 * @property {tablestore.search.proto.ICollapse|null} [collapse] SearchQuery collapse
                 * @property {tablestore.search.proto.ISort|null} [sort] SearchQuery sort
                 * @property {boolean|null} [getTotalCount] SearchQuery getTotalCount
                 * @property {Uint8Array|null} [token] SearchQuery token
                 */

                /**
                 * Constructs a new SearchQuery.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a SearchQuery.
                 * @implements ISearchQuery
                 * @constructor
                 * @param {tablestore.search.proto.ISearchQuery=} [properties] Properties to set
                 */
                function SearchQuery(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchQuery offset.
                 * @member {number} offset
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.offset = 0;

                /**
                 * SearchQuery limit.
                 * @member {number} limit
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.limit = 0;

                /**
                 * SearchQuery query.
                 * @member {tablestore.search.proto.IQuery|null|undefined} query
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.query = null;

                /**
                 * SearchQuery collapse.
                 * @member {tablestore.search.proto.ICollapse|null|undefined} collapse
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.collapse = null;

                /**
                 * SearchQuery sort.
                 * @member {tablestore.search.proto.ISort|null|undefined} sort
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.sort = null;

                /**
                 * SearchQuery getTotalCount.
                 * @member {boolean} getTotalCount
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.getTotalCount = false;

                /**
                 * SearchQuery token.
                 * @member {Uint8Array} token
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 */
                SearchQuery.prototype.token = $util.newBuffer([]);

                /**
                 * Creates a new SearchQuery instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {tablestore.search.proto.ISearchQuery=} [properties] Properties to set
                 * @returns {tablestore.search.proto.SearchQuery} SearchQuery instance
                 */
                SearchQuery.create = function create(properties) {
                    return new SearchQuery(properties);
                };

                /**
                 * Encodes the specified SearchQuery message. Does not implicitly {@link tablestore.search.proto.SearchQuery.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {tablestore.search.proto.ISearchQuery} message SearchQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
                    if (message.query != null && message.hasOwnProperty("query"))
                        $root.tablestore.search.proto.Query.encode(message.query, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.collapse != null && message.hasOwnProperty("collapse"))
                        $root.tablestore.search.proto.Collapse.encode(message.collapse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.sort != null && message.hasOwnProperty("sort"))
                        $root.tablestore.search.proto.Sort.encode(message.sort, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.getTotalCount != null && message.hasOwnProperty("getTotalCount"))
                        writer.uint32(/* id 8, wireType 0 =*/64).bool(message.getTotalCount);
                    if (message.token != null && message.hasOwnProperty("token"))
                        writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.token);
                    return writer;
                };

                /**
                 * Encodes the specified SearchQuery message, length delimited. Does not implicitly {@link tablestore.search.proto.SearchQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {tablestore.search.proto.ISearchQuery} message SearchQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.SearchQuery} SearchQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.SearchQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.offset = reader.int32();
                            break;
                        case 2:
                            message.limit = reader.int32();
                            break;
                        case 4:
                            message.query = $root.tablestore.search.proto.Query.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.collapse = $root.tablestore.search.proto.Collapse.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.sort = $root.tablestore.search.proto.Sort.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.getTotalCount = reader.bool();
                            break;
                        case 9:
                            message.token = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.SearchQuery} SearchQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchQuery message.
                 * @function verify
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        if (!$util.isInteger(message.offset))
                            return "offset: integer expected";
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        if (!$util.isInteger(message.limit))
                            return "limit: integer expected";
                    if (message.query != null && message.hasOwnProperty("query")) {
                        var error = $root.tablestore.search.proto.Query.verify(message.query);
                        if (error)
                            return "query." + error;
                    }
                    if (message.collapse != null && message.hasOwnProperty("collapse")) {
                        var error = $root.tablestore.search.proto.Collapse.verify(message.collapse);
                        if (error)
                            return "collapse." + error;
                    }
                    if (message.sort != null && message.hasOwnProperty("sort")) {
                        var error = $root.tablestore.search.proto.Sort.verify(message.sort);
                        if (error)
                            return "sort." + error;
                    }
                    if (message.getTotalCount != null && message.hasOwnProperty("getTotalCount"))
                        if (typeof message.getTotalCount !== "boolean")
                            return "getTotalCount: boolean expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                            return "token: buffer expected";
                    return null;
                };

                /**
                 * Creates a SearchQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.SearchQuery} SearchQuery
                 */
                SearchQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.SearchQuery)
                        return object;
                    var message = new $root.tablestore.search.proto.SearchQuery();
                    if (object.offset != null)
                        message.offset = object.offset | 0;
                    if (object.limit != null)
                        message.limit = object.limit | 0;
                    if (object.query != null) {
                        if (typeof object.query !== "object")
                            throw TypeError(".tablestore.search.proto.SearchQuery.query: object expected");
                        message.query = $root.tablestore.search.proto.Query.fromObject(object.query);
                    }
                    if (object.collapse != null) {
                        if (typeof object.collapse !== "object")
                            throw TypeError(".tablestore.search.proto.SearchQuery.collapse: object expected");
                        message.collapse = $root.tablestore.search.proto.Collapse.fromObject(object.collapse);
                    }
                    if (object.sort != null) {
                        if (typeof object.sort !== "object")
                            throw TypeError(".tablestore.search.proto.SearchQuery.sort: object expected");
                        message.sort = $root.tablestore.search.proto.Sort.fromObject(object.sort);
                    }
                    if (object.getTotalCount != null)
                        message.getTotalCount = Boolean(object.getTotalCount);
                    if (object.token != null)
                        if (typeof object.token === "string")
                            $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                        else if (object.token.length)
                            message.token = object.token;
                    return message;
                };

                /**
                 * Creates a plain object from a SearchQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.SearchQuery
                 * @static
                 * @param {tablestore.search.proto.SearchQuery} message SearchQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.offset = 0;
                        object.limit = 0;
                        object.query = null;
                        object.collapse = null;
                        object.sort = null;
                        object.getTotalCount = false;
                        if (options.bytes === String)
                            object.token = "";
                        else {
                            object.token = [];
                            if (options.bytes !== Array)
                                object.token = $util.newBuffer(object.token);
                        }
                    }
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        object.offset = message.offset;
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        object.limit = message.limit;
                    if (message.query != null && message.hasOwnProperty("query"))
                        object.query = $root.tablestore.search.proto.Query.toObject(message.query, options);
                    if (message.collapse != null && message.hasOwnProperty("collapse"))
                        object.collapse = $root.tablestore.search.proto.Collapse.toObject(message.collapse, options);
                    if (message.sort != null && message.hasOwnProperty("sort"))
                        object.sort = $root.tablestore.search.proto.Sort.toObject(message.sort, options);
                    if (message.getTotalCount != null && message.hasOwnProperty("getTotalCount"))
                        object.getTotalCount = message.getTotalCount;
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
                    return object;
                };

                /**
                 * Converts this SearchQuery to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.SearchQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SearchQuery;
            })();

            /**
             * ColumnReturnType enum.
             * @name tablestore.search.proto.ColumnReturnType
             * @enum {string}
             * @property {number} RETURN_ALL=1 RETURN_ALL value
             * @property {number} RETURN_SPECIFIED=2 RETURN_SPECIFIED value
             * @property {number} RETURN_NONE=3 RETURN_NONE value
             */
            proto.ColumnReturnType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "RETURN_ALL"] = 1;
                values[valuesById[2] = "RETURN_SPECIFIED"] = 2;
                values[valuesById[3] = "RETURN_NONE"] = 3;
                return values;
            })();

            proto.ColumnsToGet = (function() {

                /**
                 * Properties of a ColumnsToGet.
                 * @memberof tablestore.search.proto
                 * @interface IColumnsToGet
                 * @property {tablestore.search.proto.ColumnReturnType|null} [returnType] ColumnsToGet returnType
                 * @property {Array.<string>|null} [columnNames] ColumnsToGet columnNames
                 */

                /**
                 * Constructs a new ColumnsToGet.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a ColumnsToGet.
                 * @implements IColumnsToGet
                 * @constructor
                 * @param {tablestore.search.proto.IColumnsToGet=} [properties] Properties to set
                 */
                function ColumnsToGet(properties) {
                    this.columnNames = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ColumnsToGet returnType.
                 * @member {tablestore.search.proto.ColumnReturnType} returnType
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @instance
                 */
                ColumnsToGet.prototype.returnType = 1;

                /**
                 * ColumnsToGet columnNames.
                 * @member {Array.<string>} columnNames
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @instance
                 */
                ColumnsToGet.prototype.columnNames = $util.emptyArray;

                /**
                 * Creates a new ColumnsToGet instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {tablestore.search.proto.IColumnsToGet=} [properties] Properties to set
                 * @returns {tablestore.search.proto.ColumnsToGet} ColumnsToGet instance
                 */
                ColumnsToGet.create = function create(properties) {
                    return new ColumnsToGet(properties);
                };

                /**
                 * Encodes the specified ColumnsToGet message. Does not implicitly {@link tablestore.search.proto.ColumnsToGet.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {tablestore.search.proto.IColumnsToGet} message ColumnsToGet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ColumnsToGet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.returnType != null && message.hasOwnProperty("returnType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.returnType);
                    if (message.columnNames != null && message.columnNames.length)
                        for (var i = 0; i < message.columnNames.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.columnNames[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ColumnsToGet message, length delimited. Does not implicitly {@link tablestore.search.proto.ColumnsToGet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {tablestore.search.proto.IColumnsToGet} message ColumnsToGet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ColumnsToGet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ColumnsToGet message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.ColumnsToGet} ColumnsToGet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ColumnsToGet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.ColumnsToGet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.returnType = reader.int32();
                            break;
                        case 2:
                            if (!(message.columnNames && message.columnNames.length))
                                message.columnNames = [];
                            message.columnNames.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ColumnsToGet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.ColumnsToGet} ColumnsToGet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ColumnsToGet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ColumnsToGet message.
                 * @function verify
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ColumnsToGet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.returnType != null && message.hasOwnProperty("returnType"))
                        switch (message.returnType) {
                        default:
                            return "returnType: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.columnNames != null && message.hasOwnProperty("columnNames")) {
                        if (!Array.isArray(message.columnNames))
                            return "columnNames: array expected";
                        for (var i = 0; i < message.columnNames.length; ++i)
                            if (!$util.isString(message.columnNames[i]))
                                return "columnNames: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a ColumnsToGet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.ColumnsToGet} ColumnsToGet
                 */
                ColumnsToGet.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.ColumnsToGet)
                        return object;
                    var message = new $root.tablestore.search.proto.ColumnsToGet();
                    switch (object.returnType) {
                    case "RETURN_ALL":
                    case 1:
                        message.returnType = 1;
                        break;
                    case "RETURN_SPECIFIED":
                    case 2:
                        message.returnType = 2;
                        break;
                    case "RETURN_NONE":
                    case 3:
                        message.returnType = 3;
                        break;
                    }
                    if (object.columnNames) {
                        if (!Array.isArray(object.columnNames))
                            throw TypeError(".tablestore.search.proto.ColumnsToGet.columnNames: array expected");
                        message.columnNames = [];
                        for (var i = 0; i < object.columnNames.length; ++i)
                            message.columnNames[i] = String(object.columnNames[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ColumnsToGet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @static
                 * @param {tablestore.search.proto.ColumnsToGet} message ColumnsToGet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ColumnsToGet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.columnNames = [];
                    if (options.defaults)
                        object.returnType = options.enums === String ? "RETURN_ALL" : 1;
                    if (message.returnType != null && message.hasOwnProperty("returnType"))
                        object.returnType = options.enums === String ? $root.tablestore.search.proto.ColumnReturnType[message.returnType] : message.returnType;
                    if (message.columnNames && message.columnNames.length) {
                        object.columnNames = [];
                        for (var j = 0; j < message.columnNames.length; ++j)
                            object.columnNames[j] = message.columnNames[j];
                    }
                    return object;
                };

                /**
                 * Converts this ColumnsToGet to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.ColumnsToGet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ColumnsToGet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ColumnsToGet;
            })();

            proto.SearchRequest = (function() {

                /**
                 * Properties of a SearchRequest.
                 * @memberof tablestore.search.proto
                 * @interface ISearchRequest
                 * @property {string|null} [tableName] SearchRequest tableName
                 * @property {string|null} [indexName] SearchRequest indexName
                 * @property {tablestore.search.proto.IColumnsToGet|null} [columnsToGet] SearchRequest columnsToGet
                 * @property {Uint8Array|null} [searchQuery] SearchRequest searchQuery
                 * @property {Array.<Uint8Array>|null} [routingValues] SearchRequest routingValues
                 */

                /**
                 * Constructs a new SearchRequest.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a SearchRequest.
                 * @implements ISearchRequest
                 * @constructor
                 * @param {tablestore.search.proto.ISearchRequest=} [properties] Properties to set
                 */
                function SearchRequest(properties) {
                    this.routingValues = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchRequest tableName.
                 * @member {string} tableName
                 * @memberof tablestore.search.proto.SearchRequest
                 * @instance
                 */
                SearchRequest.prototype.tableName = "";

                /**
                 * SearchRequest indexName.
                 * @member {string} indexName
                 * @memberof tablestore.search.proto.SearchRequest
                 * @instance
                 */
                SearchRequest.prototype.indexName = "";

                /**
                 * SearchRequest columnsToGet.
                 * @member {tablestore.search.proto.IColumnsToGet|null|undefined} columnsToGet
                 * @memberof tablestore.search.proto.SearchRequest
                 * @instance
                 */
                SearchRequest.prototype.columnsToGet = null;

                /**
                 * SearchRequest searchQuery.
                 * @member {Uint8Array} searchQuery
                 * @memberof tablestore.search.proto.SearchRequest
                 * @instance
                 */
                SearchRequest.prototype.searchQuery = $util.newBuffer([]);

                /**
                 * SearchRequest routingValues.
                 * @member {Array.<Uint8Array>} routingValues
                 * @memberof tablestore.search.proto.SearchRequest
                 * @instance
                 */
                SearchRequest.prototype.routingValues = $util.emptyArray;

                /**
                 * Creates a new SearchRequest instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {tablestore.search.proto.ISearchRequest=} [properties] Properties to set
                 * @returns {tablestore.search.proto.SearchRequest} SearchRequest instance
                 */
                SearchRequest.create = function create(properties) {
                    return new SearchRequest(properties);
                };

                /**
                 * Encodes the specified SearchRequest message. Does not implicitly {@link tablestore.search.proto.SearchRequest.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {tablestore.search.proto.ISearchRequest} message SearchRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.indexName);
                    if (message.columnsToGet != null && message.hasOwnProperty("columnsToGet"))
                        $root.tablestore.search.proto.ColumnsToGet.encode(message.columnsToGet, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.searchQuery != null && message.hasOwnProperty("searchQuery"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.searchQuery);
                    if (message.routingValues != null && message.routingValues.length)
                        for (var i = 0; i < message.routingValues.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.routingValues[i]);
                    return writer;
                };

                /**
                 * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link tablestore.search.proto.SearchRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {tablestore.search.proto.ISearchRequest} message SearchRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.SearchRequest} SearchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.SearchRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tableName = reader.string();
                            break;
                        case 2:
                            message.indexName = reader.string();
                            break;
                        case 3:
                            message.columnsToGet = $root.tablestore.search.proto.ColumnsToGet.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.searchQuery = reader.bytes();
                            break;
                        case 5:
                            if (!(message.routingValues && message.routingValues.length))
                                message.routingValues = [];
                            message.routingValues.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.SearchRequest} SearchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchRequest message.
                 * @function verify
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        if (!$util.isString(message.tableName))
                            return "tableName: string expected";
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        if (!$util.isString(message.indexName))
                            return "indexName: string expected";
                    if (message.columnsToGet != null && message.hasOwnProperty("columnsToGet")) {
                        var error = $root.tablestore.search.proto.ColumnsToGet.verify(message.columnsToGet);
                        if (error)
                            return "columnsToGet." + error;
                    }
                    if (message.searchQuery != null && message.hasOwnProperty("searchQuery"))
                        if (!(message.searchQuery && typeof message.searchQuery.length === "number" || $util.isString(message.searchQuery)))
                            return "searchQuery: buffer expected";
                    if (message.routingValues != null && message.hasOwnProperty("routingValues")) {
                        if (!Array.isArray(message.routingValues))
                            return "routingValues: array expected";
                        for (var i = 0; i < message.routingValues.length; ++i)
                            if (!(message.routingValues[i] && typeof message.routingValues[i].length === "number" || $util.isString(message.routingValues[i])))
                                return "routingValues: buffer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.SearchRequest} SearchRequest
                 */
                SearchRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.SearchRequest)
                        return object;
                    var message = new $root.tablestore.search.proto.SearchRequest();
                    if (object.tableName != null)
                        message.tableName = String(object.tableName);
                    if (object.indexName != null)
                        message.indexName = String(object.indexName);
                    if (object.columnsToGet != null) {
                        if (typeof object.columnsToGet !== "object")
                            throw TypeError(".tablestore.search.proto.SearchRequest.columnsToGet: object expected");
                        message.columnsToGet = $root.tablestore.search.proto.ColumnsToGet.fromObject(object.columnsToGet);
                    }
                    if (object.searchQuery != null)
                        if (typeof object.searchQuery === "string")
                            $util.base64.decode(object.searchQuery, message.searchQuery = $util.newBuffer($util.base64.length(object.searchQuery)), 0);
                        else if (object.searchQuery.length)
                            message.searchQuery = object.searchQuery;
                    if (object.routingValues) {
                        if (!Array.isArray(object.routingValues))
                            throw TypeError(".tablestore.search.proto.SearchRequest.routingValues: array expected");
                        message.routingValues = [];
                        for (var i = 0; i < object.routingValues.length; ++i)
                            if (typeof object.routingValues[i] === "string")
                                $util.base64.decode(object.routingValues[i], message.routingValues[i] = $util.newBuffer($util.base64.length(object.routingValues[i])), 0);
                            else if (object.routingValues[i].length)
                                message.routingValues[i] = object.routingValues[i];
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.SearchRequest
                 * @static
                 * @param {tablestore.search.proto.SearchRequest} message SearchRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.routingValues = [];
                    if (options.defaults) {
                        object.tableName = "";
                        object.indexName = "";
                        object.columnsToGet = null;
                        if (options.bytes === String)
                            object.searchQuery = "";
                        else {
                            object.searchQuery = [];
                            if (options.bytes !== Array)
                                object.searchQuery = $util.newBuffer(object.searchQuery);
                        }
                    }
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        object.tableName = message.tableName;
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        object.indexName = message.indexName;
                    if (message.columnsToGet != null && message.hasOwnProperty("columnsToGet"))
                        object.columnsToGet = $root.tablestore.search.proto.ColumnsToGet.toObject(message.columnsToGet, options);
                    if (message.searchQuery != null && message.hasOwnProperty("searchQuery"))
                        object.searchQuery = options.bytes === String ? $util.base64.encode(message.searchQuery, 0, message.searchQuery.length) : options.bytes === Array ? Array.prototype.slice.call(message.searchQuery) : message.searchQuery;
                    if (message.routingValues && message.routingValues.length) {
                        object.routingValues = [];
                        for (var j = 0; j < message.routingValues.length; ++j)
                            object.routingValues[j] = options.bytes === String ? $util.base64.encode(message.routingValues[j], 0, message.routingValues[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.routingValues[j]) : message.routingValues[j];
                    }
                    return object;
                };

                /**
                 * Converts this SearchRequest to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.SearchRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SearchRequest;
            })();

            proto.SearchResponse = (function() {

                /**
                 * Properties of a SearchResponse.
                 * @memberof tablestore.search.proto
                 * @interface ISearchResponse
                 * @property {number|Long|null} [totalHits] SearchResponse totalHits
                 * @property {Array.<Uint8Array>|null} [rows] SearchResponse rows
                 * @property {boolean|null} [isAllSucceeded] SearchResponse isAllSucceeded
                 * @property {Uint8Array|null} [nextToken] SearchResponse nextToken
                 */

                /**
                 * Constructs a new SearchResponse.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a SearchResponse.
                 * @implements ISearchResponse
                 * @constructor
                 * @param {tablestore.search.proto.ISearchResponse=} [properties] Properties to set
                 */
                function SearchResponse(properties) {
                    this.rows = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchResponse totalHits.
                 * @member {number|Long} totalHits
                 * @memberof tablestore.search.proto.SearchResponse
                 * @instance
                 */
                SearchResponse.prototype.totalHits = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * SearchResponse rows.
                 * @member {Array.<Uint8Array>} rows
                 * @memberof tablestore.search.proto.SearchResponse
                 * @instance
                 */
                SearchResponse.prototype.rows = $util.emptyArray;

                /**
                 * SearchResponse isAllSucceeded.
                 * @member {boolean} isAllSucceeded
                 * @memberof tablestore.search.proto.SearchResponse
                 * @instance
                 */
                SearchResponse.prototype.isAllSucceeded = false;

                /**
                 * SearchResponse nextToken.
                 * @member {Uint8Array} nextToken
                 * @memberof tablestore.search.proto.SearchResponse
                 * @instance
                 */
                SearchResponse.prototype.nextToken = $util.newBuffer([]);

                /**
                 * Creates a new SearchResponse instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {tablestore.search.proto.ISearchResponse=} [properties] Properties to set
                 * @returns {tablestore.search.proto.SearchResponse} SearchResponse instance
                 */
                SearchResponse.create = function create(properties) {
                    return new SearchResponse(properties);
                };

                /**
                 * Encodes the specified SearchResponse message. Does not implicitly {@link tablestore.search.proto.SearchResponse.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {tablestore.search.proto.ISearchResponse} message SearchResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.totalHits != null && message.hasOwnProperty("totalHits"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalHits);
                    if (message.rows != null && message.rows.length)
                        for (var i = 0; i < message.rows.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.rows[i]);
                    if (message.isAllSucceeded != null && message.hasOwnProperty("isAllSucceeded"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isAllSucceeded);
                    if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                        writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.nextToken);
                    return writer;
                };

                /**
                 * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link tablestore.search.proto.SearchResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {tablestore.search.proto.ISearchResponse} message SearchResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.SearchResponse} SearchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.SearchResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.totalHits = reader.int64();
                            break;
                        case 2:
                            if (!(message.rows && message.rows.length))
                                message.rows = [];
                            message.rows.push(reader.bytes());
                            break;
                        case 3:
                            message.isAllSucceeded = reader.bool();
                            break;
                        case 6:
                            message.nextToken = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.SearchResponse} SearchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchResponse message.
                 * @function verify
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.totalHits != null && message.hasOwnProperty("totalHits"))
                        if (!$util.isInteger(message.totalHits) && !(message.totalHits && $util.isInteger(message.totalHits.low) && $util.isInteger(message.totalHits.high)))
                            return "totalHits: integer|Long expected";
                    if (message.rows != null && message.hasOwnProperty("rows")) {
                        if (!Array.isArray(message.rows))
                            return "rows: array expected";
                        for (var i = 0; i < message.rows.length; ++i)
                            if (!(message.rows[i] && typeof message.rows[i].length === "number" || $util.isString(message.rows[i])))
                                return "rows: buffer[] expected";
                    }
                    if (message.isAllSucceeded != null && message.hasOwnProperty("isAllSucceeded"))
                        if (typeof message.isAllSucceeded !== "boolean")
                            return "isAllSucceeded: boolean expected";
                    if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                        if (!(message.nextToken && typeof message.nextToken.length === "number" || $util.isString(message.nextToken)))
                            return "nextToken: buffer expected";
                    return null;
                };

                /**
                 * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.SearchResponse} SearchResponse
                 */
                SearchResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.SearchResponse)
                        return object;
                    var message = new $root.tablestore.search.proto.SearchResponse();
                    if (object.totalHits != null)
                        if ($util.Long)
                            (message.totalHits = $util.Long.fromValue(object.totalHits)).unsigned = false;
                        else if (typeof object.totalHits === "string")
                            message.totalHits = parseInt(object.totalHits, 10);
                        else if (typeof object.totalHits === "number")
                            message.totalHits = object.totalHits;
                        else if (typeof object.totalHits === "object")
                            message.totalHits = new $util.LongBits(object.totalHits.low >>> 0, object.totalHits.high >>> 0).toNumber();
                    if (object.rows) {
                        if (!Array.isArray(object.rows))
                            throw TypeError(".tablestore.search.proto.SearchResponse.rows: array expected");
                        message.rows = [];
                        for (var i = 0; i < object.rows.length; ++i)
                            if (typeof object.rows[i] === "string")
                                $util.base64.decode(object.rows[i], message.rows[i] = $util.newBuffer($util.base64.length(object.rows[i])), 0);
                            else if (object.rows[i].length)
                                message.rows[i] = object.rows[i];
                    }
                    if (object.isAllSucceeded != null)
                        message.isAllSucceeded = Boolean(object.isAllSucceeded);
                    if (object.nextToken != null)
                        if (typeof object.nextToken === "string")
                            $util.base64.decode(object.nextToken, message.nextToken = $util.newBuffer($util.base64.length(object.nextToken)), 0);
                        else if (object.nextToken.length)
                            message.nextToken = object.nextToken;
                    return message;
                };

                /**
                 * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.SearchResponse
                 * @static
                 * @param {tablestore.search.proto.SearchResponse} message SearchResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rows = [];
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalHits = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.totalHits = options.longs === String ? "0" : 0;
                        object.isAllSucceeded = false;
                        if (options.bytes === String)
                            object.nextToken = "";
                        else {
                            object.nextToken = [];
                            if (options.bytes !== Array)
                                object.nextToken = $util.newBuffer(object.nextToken);
                        }
                    }
                    if (message.totalHits != null && message.hasOwnProperty("totalHits"))
                        if (typeof message.totalHits === "number")
                            object.totalHits = options.longs === String ? String(message.totalHits) : message.totalHits;
                        else
                            object.totalHits = options.longs === String ? $util.Long.prototype.toString.call(message.totalHits) : options.longs === Number ? new $util.LongBits(message.totalHits.low >>> 0, message.totalHits.high >>> 0).toNumber() : message.totalHits;
                    if (message.rows && message.rows.length) {
                        object.rows = [];
                        for (var j = 0; j < message.rows.length; ++j)
                            object.rows[j] = options.bytes === String ? $util.base64.encode(message.rows[j], 0, message.rows[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.rows[j]) : message.rows[j];
                    }
                    if (message.isAllSucceeded != null && message.hasOwnProperty("isAllSucceeded"))
                        object.isAllSucceeded = message.isAllSucceeded;
                    if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                        object.nextToken = options.bytes === String ? $util.base64.encode(message.nextToken, 0, message.nextToken.length) : options.bytes === Array ? Array.prototype.slice.call(message.nextToken) : message.nextToken;
                    return object;
                };

                /**
                 * Converts this SearchResponse to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.SearchResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SearchResponse;
            })();

            /**
             * IndexOptions enum.
             * @name tablestore.search.proto.IndexOptions
             * @enum {string}
             * @property {number} DOCS=1 DOCS value
             * @property {number} FREQS=2 FREQS value
             * @property {number} POSITIONS=3 POSITIONS value
             * @property {number} OFFSETS=4 OFFSETS value
             */
            proto.IndexOptions = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "DOCS"] = 1;
                values[valuesById[2] = "FREQS"] = 2;
                values[valuesById[3] = "POSITIONS"] = 3;
                values[valuesById[4] = "OFFSETS"] = 4;
                return values;
            })();

            /**
             * FieldType enum.
             * @name tablestore.search.proto.FieldType
             * @enum {string}
             * @property {number} LONG=1 LONG value
             * @property {number} DOUBLE=2 DOUBLE value
             * @property {number} BOOLEAN=3 BOOLEAN value
             * @property {number} KEYWORD=4 KEYWORD value
             * @property {number} TEXT=5 TEXT value
             * @property {number} NESTED=6 NESTED value
             * @property {number} GEO_POINT=7 GEO_POINT value
             */
            proto.FieldType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LONG"] = 1;
                values[valuesById[2] = "DOUBLE"] = 2;
                values[valuesById[3] = "BOOLEAN"] = 3;
                values[valuesById[4] = "KEYWORD"] = 4;
                values[valuesById[5] = "TEXT"] = 5;
                values[valuesById[6] = "NESTED"] = 6;
                values[valuesById[7] = "GEO_POINT"] = 7;
                return values;
            })();

            proto.FieldSchema = (function() {

                /**
                 * Properties of a FieldSchema.
                 * @memberof tablestore.search.proto
                 * @interface IFieldSchema
                 * @property {string|null} [fieldName] FieldSchema fieldName
                 * @property {tablestore.search.proto.FieldType|null} [fieldType] FieldSchema fieldType
                 * @property {tablestore.search.proto.IndexOptions|null} [indexOptions] FieldSchema indexOptions
                 * @property {string|null} [analyzer] FieldSchema analyzer
                 * @property {boolean|null} [index] FieldSchema index
                 * @property {boolean|null} [docValues] FieldSchema docValues
                 * @property {boolean|null} [store] FieldSchema store
                 * @property {Array.<tablestore.search.proto.IFieldSchema>|null} [fieldSchemas] FieldSchema fieldSchemas
                 * @property {boolean|null} [isArray] FieldSchema isArray
                 */

                /**
                 * Constructs a new FieldSchema.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a FieldSchema.
                 * @implements IFieldSchema
                 * @constructor
                 * @param {tablestore.search.proto.IFieldSchema=} [properties] Properties to set
                 */
                function FieldSchema(properties) {
                    this.fieldSchemas = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FieldSchema fieldName.
                 * @member {string} fieldName
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.fieldName = "";

                /**
                 * FieldSchema fieldType.
                 * @member {tablestore.search.proto.FieldType} fieldType
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.fieldType = 1;

                /**
                 * FieldSchema indexOptions.
                 * @member {tablestore.search.proto.IndexOptions} indexOptions
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.indexOptions = 1;

                /**
                 * FieldSchema analyzer.
                 * @member {string} analyzer
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.analyzer = "";

                /**
                 * FieldSchema index.
                 * @member {boolean} index
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.index = false;

                /**
                 * FieldSchema docValues.
                 * @member {boolean} docValues
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.docValues = false;

                /**
                 * FieldSchema store.
                 * @member {boolean} store
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.store = false;

                /**
                 * FieldSchema fieldSchemas.
                 * @member {Array.<tablestore.search.proto.IFieldSchema>} fieldSchemas
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.fieldSchemas = $util.emptyArray;

                /**
                 * FieldSchema isArray.
                 * @member {boolean} isArray
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 */
                FieldSchema.prototype.isArray = false;

                /**
                 * Creates a new FieldSchema instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {tablestore.search.proto.IFieldSchema=} [properties] Properties to set
                 * @returns {tablestore.search.proto.FieldSchema} FieldSchema instance
                 */
                FieldSchema.create = function create(properties) {
                    return new FieldSchema(properties);
                };

                /**
                 * Encodes the specified FieldSchema message. Does not implicitly {@link tablestore.search.proto.FieldSchema.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {tablestore.search.proto.IFieldSchema} message FieldSchema message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldSchema.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                    if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fieldType);
                    if (message.indexOptions != null && message.hasOwnProperty("indexOptions"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.indexOptions);
                    if (message.analyzer != null && message.hasOwnProperty("analyzer"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.analyzer);
                    if (message.index != null && message.hasOwnProperty("index"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.index);
                    if (message.docValues != null && message.hasOwnProperty("docValues"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.docValues);
                    if (message.store != null && message.hasOwnProperty("store"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.store);
                    if (message.fieldSchemas != null && message.fieldSchemas.length)
                        for (var i = 0; i < message.fieldSchemas.length; ++i)
                            $root.tablestore.search.proto.FieldSchema.encode(message.fieldSchemas[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.isArray != null && message.hasOwnProperty("isArray"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isArray);
                    return writer;
                };

                /**
                 * Encodes the specified FieldSchema message, length delimited. Does not implicitly {@link tablestore.search.proto.FieldSchema.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {tablestore.search.proto.IFieldSchema} message FieldSchema message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldSchema.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FieldSchema message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.FieldSchema} FieldSchema
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldSchema.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.FieldSchema();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldName = reader.string();
                            break;
                        case 2:
                            message.fieldType = reader.int32();
                            break;
                        case 3:
                            message.indexOptions = reader.int32();
                            break;
                        case 4:
                            message.analyzer = reader.string();
                            break;
                        case 5:
                            message.index = reader.bool();
                            break;
                        case 6:
                            message.docValues = reader.bool();
                            break;
                        case 7:
                            message.store = reader.bool();
                            break;
                        case 8:
                            if (!(message.fieldSchemas && message.fieldSchemas.length))
                                message.fieldSchemas = [];
                            message.fieldSchemas.push($root.tablestore.search.proto.FieldSchema.decode(reader, reader.uint32()));
                            break;
                        case 9:
                            message.isArray = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FieldSchema message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.FieldSchema} FieldSchema
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldSchema.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FieldSchema message.
                 * @function verify
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldSchema.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        if (!$util.isString(message.fieldName))
                            return "fieldName: string expected";
                    if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                        switch (message.fieldType) {
                        default:
                            return "fieldType: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                    if (message.indexOptions != null && message.hasOwnProperty("indexOptions"))
                        switch (message.indexOptions) {
                        default:
                            return "indexOptions: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.analyzer != null && message.hasOwnProperty("analyzer"))
                        if (!$util.isString(message.analyzer))
                            return "analyzer: string expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (typeof message.index !== "boolean")
                            return "index: boolean expected";
                    if (message.docValues != null && message.hasOwnProperty("docValues"))
                        if (typeof message.docValues !== "boolean")
                            return "docValues: boolean expected";
                    if (message.store != null && message.hasOwnProperty("store"))
                        if (typeof message.store !== "boolean")
                            return "store: boolean expected";
                    if (message.fieldSchemas != null && message.hasOwnProperty("fieldSchemas")) {
                        if (!Array.isArray(message.fieldSchemas))
                            return "fieldSchemas: array expected";
                        for (var i = 0; i < message.fieldSchemas.length; ++i) {
                            var error = $root.tablestore.search.proto.FieldSchema.verify(message.fieldSchemas[i]);
                            if (error)
                                return "fieldSchemas." + error;
                        }
                    }
                    if (message.isArray != null && message.hasOwnProperty("isArray"))
                        if (typeof message.isArray !== "boolean")
                            return "isArray: boolean expected";
                    return null;
                };

                /**
                 * Creates a FieldSchema message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.FieldSchema} FieldSchema
                 */
                FieldSchema.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.FieldSchema)
                        return object;
                    var message = new $root.tablestore.search.proto.FieldSchema();
                    if (object.fieldName != null)
                        message.fieldName = String(object.fieldName);
                    switch (object.fieldType) {
                    case "LONG":
                    case 1:
                        message.fieldType = 1;
                        break;
                    case "DOUBLE":
                    case 2:
                        message.fieldType = 2;
                        break;
                    case "BOOLEAN":
                    case 3:
                        message.fieldType = 3;
                        break;
                    case "KEYWORD":
                    case 4:
                        message.fieldType = 4;
                        break;
                    case "TEXT":
                    case 5:
                        message.fieldType = 5;
                        break;
                    case "NESTED":
                    case 6:
                        message.fieldType = 6;
                        break;
                    case "GEO_POINT":
                    case 7:
                        message.fieldType = 7;
                        break;
                    }
                    switch (object.indexOptions) {
                    case "DOCS":
                    case 1:
                        message.indexOptions = 1;
                        break;
                    case "FREQS":
                    case 2:
                        message.indexOptions = 2;
                        break;
                    case "POSITIONS":
                    case 3:
                        message.indexOptions = 3;
                        break;
                    case "OFFSETS":
                    case 4:
                        message.indexOptions = 4;
                        break;
                    }
                    if (object.analyzer != null)
                        message.analyzer = String(object.analyzer);
                    if (object.index != null)
                        message.index = Boolean(object.index);
                    if (object.docValues != null)
                        message.docValues = Boolean(object.docValues);
                    if (object.store != null)
                        message.store = Boolean(object.store);
                    if (object.fieldSchemas) {
                        if (!Array.isArray(object.fieldSchemas))
                            throw TypeError(".tablestore.search.proto.FieldSchema.fieldSchemas: array expected");
                        message.fieldSchemas = [];
                        for (var i = 0; i < object.fieldSchemas.length; ++i) {
                            if (typeof object.fieldSchemas[i] !== "object")
                                throw TypeError(".tablestore.search.proto.FieldSchema.fieldSchemas: object expected");
                            message.fieldSchemas[i] = $root.tablestore.search.proto.FieldSchema.fromObject(object.fieldSchemas[i]);
                        }
                    }
                    if (object.isArray != null)
                        message.isArray = Boolean(object.isArray);
                    return message;
                };

                /**
                 * Creates a plain object from a FieldSchema message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.FieldSchema
                 * @static
                 * @param {tablestore.search.proto.FieldSchema} message FieldSchema
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldSchema.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fieldSchemas = [];
                    if (options.defaults) {
                        object.fieldName = "";
                        object.fieldType = options.enums === String ? "LONG" : 1;
                        object.indexOptions = options.enums === String ? "DOCS" : 1;
                        object.analyzer = "";
                        object.index = false;
                        object.docValues = false;
                        object.store = false;
                        object.isArray = false;
                    }
                    if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                        object.fieldName = message.fieldName;
                    if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                        object.fieldType = options.enums === String ? $root.tablestore.search.proto.FieldType[message.fieldType] : message.fieldType;
                    if (message.indexOptions != null && message.hasOwnProperty("indexOptions"))
                        object.indexOptions = options.enums === String ? $root.tablestore.search.proto.IndexOptions[message.indexOptions] : message.indexOptions;
                    if (message.analyzer != null && message.hasOwnProperty("analyzer"))
                        object.analyzer = message.analyzer;
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    if (message.docValues != null && message.hasOwnProperty("docValues"))
                        object.docValues = message.docValues;
                    if (message.store != null && message.hasOwnProperty("store"))
                        object.store = message.store;
                    if (message.fieldSchemas && message.fieldSchemas.length) {
                        object.fieldSchemas = [];
                        for (var j = 0; j < message.fieldSchemas.length; ++j)
                            object.fieldSchemas[j] = $root.tablestore.search.proto.FieldSchema.toObject(message.fieldSchemas[j], options);
                    }
                    if (message.isArray != null && message.hasOwnProperty("isArray"))
                        object.isArray = message.isArray;
                    return object;
                };

                /**
                 * Converts this FieldSchema to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.FieldSchema
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldSchema.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FieldSchema;
            })();

            proto.IndexSchema = (function() {

                /**
                 * Properties of an IndexSchema.
                 * @memberof tablestore.search.proto
                 * @interface IIndexSchema
                 * @property {Array.<tablestore.search.proto.IFieldSchema>|null} [fieldSchemas] IndexSchema fieldSchemas
                 * @property {tablestore.search.proto.IIndexSetting|null} [indexSetting] IndexSchema indexSetting
                 * @property {tablestore.search.proto.ISort|null} [indexSort] IndexSchema indexSort
                 */

                /**
                 * Constructs a new IndexSchema.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents an IndexSchema.
                 * @implements IIndexSchema
                 * @constructor
                 * @param {tablestore.search.proto.IIndexSchema=} [properties] Properties to set
                 */
                function IndexSchema(properties) {
                    this.fieldSchemas = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IndexSchema fieldSchemas.
                 * @member {Array.<tablestore.search.proto.IFieldSchema>} fieldSchemas
                 * @memberof tablestore.search.proto.IndexSchema
                 * @instance
                 */
                IndexSchema.prototype.fieldSchemas = $util.emptyArray;

                /**
                 * IndexSchema indexSetting.
                 * @member {tablestore.search.proto.IIndexSetting|null|undefined} indexSetting
                 * @memberof tablestore.search.proto.IndexSchema
                 * @instance
                 */
                IndexSchema.prototype.indexSetting = null;

                /**
                 * IndexSchema indexSort.
                 * @member {tablestore.search.proto.ISort|null|undefined} indexSort
                 * @memberof tablestore.search.proto.IndexSchema
                 * @instance
                 */
                IndexSchema.prototype.indexSort = null;

                /**
                 * Creates a new IndexSchema instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {tablestore.search.proto.IIndexSchema=} [properties] Properties to set
                 * @returns {tablestore.search.proto.IndexSchema} IndexSchema instance
                 */
                IndexSchema.create = function create(properties) {
                    return new IndexSchema(properties);
                };

                /**
                 * Encodes the specified IndexSchema message. Does not implicitly {@link tablestore.search.proto.IndexSchema.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {tablestore.search.proto.IIndexSchema} message IndexSchema message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IndexSchema.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldSchemas != null && message.fieldSchemas.length)
                        for (var i = 0; i < message.fieldSchemas.length; ++i)
                            $root.tablestore.search.proto.FieldSchema.encode(message.fieldSchemas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.indexSetting != null && message.hasOwnProperty("indexSetting"))
                        $root.tablestore.search.proto.IndexSetting.encode(message.indexSetting, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.indexSort != null && message.hasOwnProperty("indexSort"))
                        $root.tablestore.search.proto.Sort.encode(message.indexSort, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified IndexSchema message, length delimited. Does not implicitly {@link tablestore.search.proto.IndexSchema.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {tablestore.search.proto.IIndexSchema} message IndexSchema message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IndexSchema.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an IndexSchema message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.IndexSchema} IndexSchema
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IndexSchema.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.IndexSchema();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.fieldSchemas && message.fieldSchemas.length))
                                message.fieldSchemas = [];
                            message.fieldSchemas.push($root.tablestore.search.proto.FieldSchema.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.indexSetting = $root.tablestore.search.proto.IndexSetting.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.indexSort = $root.tablestore.search.proto.Sort.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an IndexSchema message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.IndexSchema} IndexSchema
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IndexSchema.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an IndexSchema message.
                 * @function verify
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IndexSchema.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldSchemas != null && message.hasOwnProperty("fieldSchemas")) {
                        if (!Array.isArray(message.fieldSchemas))
                            return "fieldSchemas: array expected";
                        for (var i = 0; i < message.fieldSchemas.length; ++i) {
                            var error = $root.tablestore.search.proto.FieldSchema.verify(message.fieldSchemas[i]);
                            if (error)
                                return "fieldSchemas." + error;
                        }
                    }
                    if (message.indexSetting != null && message.hasOwnProperty("indexSetting")) {
                        var error = $root.tablestore.search.proto.IndexSetting.verify(message.indexSetting);
                        if (error)
                            return "indexSetting." + error;
                    }
                    if (message.indexSort != null && message.hasOwnProperty("indexSort")) {
                        var error = $root.tablestore.search.proto.Sort.verify(message.indexSort);
                        if (error)
                            return "indexSort." + error;
                    }
                    return null;
                };

                /**
                 * Creates an IndexSchema message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.IndexSchema} IndexSchema
                 */
                IndexSchema.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.IndexSchema)
                        return object;
                    var message = new $root.tablestore.search.proto.IndexSchema();
                    if (object.fieldSchemas) {
                        if (!Array.isArray(object.fieldSchemas))
                            throw TypeError(".tablestore.search.proto.IndexSchema.fieldSchemas: array expected");
                        message.fieldSchemas = [];
                        for (var i = 0; i < object.fieldSchemas.length; ++i) {
                            if (typeof object.fieldSchemas[i] !== "object")
                                throw TypeError(".tablestore.search.proto.IndexSchema.fieldSchemas: object expected");
                            message.fieldSchemas[i] = $root.tablestore.search.proto.FieldSchema.fromObject(object.fieldSchemas[i]);
                        }
                    }
                    if (object.indexSetting != null) {
                        if (typeof object.indexSetting !== "object")
                            throw TypeError(".tablestore.search.proto.IndexSchema.indexSetting: object expected");
                        message.indexSetting = $root.tablestore.search.proto.IndexSetting.fromObject(object.indexSetting);
                    }
                    if (object.indexSort != null) {
                        if (typeof object.indexSort !== "object")
                            throw TypeError(".tablestore.search.proto.IndexSchema.indexSort: object expected");
                        message.indexSort = $root.tablestore.search.proto.Sort.fromObject(object.indexSort);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an IndexSchema message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.IndexSchema
                 * @static
                 * @param {tablestore.search.proto.IndexSchema} message IndexSchema
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                IndexSchema.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fieldSchemas = [];
                    if (options.defaults) {
                        object.indexSetting = null;
                        object.indexSort = null;
                    }
                    if (message.fieldSchemas && message.fieldSchemas.length) {
                        object.fieldSchemas = [];
                        for (var j = 0; j < message.fieldSchemas.length; ++j)
                            object.fieldSchemas[j] = $root.tablestore.search.proto.FieldSchema.toObject(message.fieldSchemas[j], options);
                    }
                    if (message.indexSetting != null && message.hasOwnProperty("indexSetting"))
                        object.indexSetting = $root.tablestore.search.proto.IndexSetting.toObject(message.indexSetting, options);
                    if (message.indexSort != null && message.hasOwnProperty("indexSort"))
                        object.indexSort = $root.tablestore.search.proto.Sort.toObject(message.indexSort, options);
                    return object;
                };

                /**
                 * Converts this IndexSchema to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.IndexSchema
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                IndexSchema.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return IndexSchema;
            })();

            proto.IndexSetting = (function() {

                /**
                 * Properties of an IndexSetting.
                 * @memberof tablestore.search.proto
                 * @interface IIndexSetting
                 * @property {number|null} [numberOfShards] IndexSetting numberOfShards
                 * @property {Array.<string>|null} [routingFields] IndexSetting routingFields
                 * @property {number|null} [routingPartitionSize] IndexSetting routingPartitionSize
                 */

                /**
                 * Constructs a new IndexSetting.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents an IndexSetting.
                 * @implements IIndexSetting
                 * @constructor
                 * @param {tablestore.search.proto.IIndexSetting=} [properties] Properties to set
                 */
                function IndexSetting(properties) {
                    this.routingFields = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IndexSetting numberOfShards.
                 * @member {number} numberOfShards
                 * @memberof tablestore.search.proto.IndexSetting
                 * @instance
                 */
                IndexSetting.prototype.numberOfShards = 0;

                /**
                 * IndexSetting routingFields.
                 * @member {Array.<string>} routingFields
                 * @memberof tablestore.search.proto.IndexSetting
                 * @instance
                 */
                IndexSetting.prototype.routingFields = $util.emptyArray;

                /**
                 * IndexSetting routingPartitionSize.
                 * @member {number} routingPartitionSize
                 * @memberof tablestore.search.proto.IndexSetting
                 * @instance
                 */
                IndexSetting.prototype.routingPartitionSize = 0;

                /**
                 * Creates a new IndexSetting instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {tablestore.search.proto.IIndexSetting=} [properties] Properties to set
                 * @returns {tablestore.search.proto.IndexSetting} IndexSetting instance
                 */
                IndexSetting.create = function create(properties) {
                    return new IndexSetting(properties);
                };

                /**
                 * Encodes the specified IndexSetting message. Does not implicitly {@link tablestore.search.proto.IndexSetting.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {tablestore.search.proto.IIndexSetting} message IndexSetting message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IndexSetting.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.numberOfShards != null && message.hasOwnProperty("numberOfShards"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.numberOfShards);
                    if (message.routingFields != null && message.routingFields.length)
                        for (var i = 0; i < message.routingFields.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.routingFields[i]);
                    if (message.routingPartitionSize != null && message.hasOwnProperty("routingPartitionSize"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.routingPartitionSize);
                    return writer;
                };

                /**
                 * Encodes the specified IndexSetting message, length delimited. Does not implicitly {@link tablestore.search.proto.IndexSetting.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {tablestore.search.proto.IIndexSetting} message IndexSetting message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IndexSetting.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an IndexSetting message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.IndexSetting} IndexSetting
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IndexSetting.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.IndexSetting();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.numberOfShards = reader.int32();
                            break;
                        case 2:
                            if (!(message.routingFields && message.routingFields.length))
                                message.routingFields = [];
                            message.routingFields.push(reader.string());
                            break;
                        case 3:
                            message.routingPartitionSize = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an IndexSetting message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.IndexSetting} IndexSetting
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IndexSetting.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an IndexSetting message.
                 * @function verify
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IndexSetting.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.numberOfShards != null && message.hasOwnProperty("numberOfShards"))
                        if (!$util.isInteger(message.numberOfShards))
                            return "numberOfShards: integer expected";
                    if (message.routingFields != null && message.hasOwnProperty("routingFields")) {
                        if (!Array.isArray(message.routingFields))
                            return "routingFields: array expected";
                        for (var i = 0; i < message.routingFields.length; ++i)
                            if (!$util.isString(message.routingFields[i]))
                                return "routingFields: string[] expected";
                    }
                    if (message.routingPartitionSize != null && message.hasOwnProperty("routingPartitionSize"))
                        if (!$util.isInteger(message.routingPartitionSize))
                            return "routingPartitionSize: integer expected";
                    return null;
                };

                /**
                 * Creates an IndexSetting message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.IndexSetting} IndexSetting
                 */
                IndexSetting.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.IndexSetting)
                        return object;
                    var message = new $root.tablestore.search.proto.IndexSetting();
                    if (object.numberOfShards != null)
                        message.numberOfShards = object.numberOfShards | 0;
                    if (object.routingFields) {
                        if (!Array.isArray(object.routingFields))
                            throw TypeError(".tablestore.search.proto.IndexSetting.routingFields: array expected");
                        message.routingFields = [];
                        for (var i = 0; i < object.routingFields.length; ++i)
                            message.routingFields[i] = String(object.routingFields[i]);
                    }
                    if (object.routingPartitionSize != null)
                        message.routingPartitionSize = object.routingPartitionSize | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an IndexSetting message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.IndexSetting
                 * @static
                 * @param {tablestore.search.proto.IndexSetting} message IndexSetting
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                IndexSetting.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.routingFields = [];
                    if (options.defaults) {
                        object.numberOfShards = 0;
                        object.routingPartitionSize = 0;
                    }
                    if (message.numberOfShards != null && message.hasOwnProperty("numberOfShards"))
                        object.numberOfShards = message.numberOfShards;
                    if (message.routingFields && message.routingFields.length) {
                        object.routingFields = [];
                        for (var j = 0; j < message.routingFields.length; ++j)
                            object.routingFields[j] = message.routingFields[j];
                    }
                    if (message.routingPartitionSize != null && message.hasOwnProperty("routingPartitionSize"))
                        object.routingPartitionSize = message.routingPartitionSize;
                    return object;
                };

                /**
                 * Converts this IndexSetting to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.IndexSetting
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                IndexSetting.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return IndexSetting;
            })();

            proto.CreateSearchIndexRequest = (function() {

                /**
                 * Properties of a CreateSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @interface ICreateSearchIndexRequest
                 * @property {string} tableName CreateSearchIndexRequest tableName
                 * @property {string} indexName CreateSearchIndexRequest indexName
                 * @property {tablestore.search.proto.IIndexSchema|null} [schema] CreateSearchIndexRequest schema
                 */

                /**
                 * Constructs a new CreateSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a CreateSearchIndexRequest.
                 * @implements ICreateSearchIndexRequest
                 * @constructor
                 * @param {tablestore.search.proto.ICreateSearchIndexRequest=} [properties] Properties to set
                 */
                function CreateSearchIndexRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateSearchIndexRequest tableName.
                 * @member {string} tableName
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @instance
                 */
                CreateSearchIndexRequest.prototype.tableName = "";

                /**
                 * CreateSearchIndexRequest indexName.
                 * @member {string} indexName
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @instance
                 */
                CreateSearchIndexRequest.prototype.indexName = "";

                /**
                 * CreateSearchIndexRequest schema.
                 * @member {tablestore.search.proto.IIndexSchema|null|undefined} schema
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @instance
                 */
                CreateSearchIndexRequest.prototype.schema = null;

                /**
                 * Creates a new CreateSearchIndexRequest instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.ICreateSearchIndexRequest=} [properties] Properties to set
                 * @returns {tablestore.search.proto.CreateSearchIndexRequest} CreateSearchIndexRequest instance
                 */
                CreateSearchIndexRequest.create = function create(properties) {
                    return new CreateSearchIndexRequest(properties);
                };

                /**
                 * Encodes the specified CreateSearchIndexRequest message. Does not implicitly {@link tablestore.search.proto.CreateSearchIndexRequest.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.ICreateSearchIndexRequest} message CreateSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateSearchIndexRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.indexName);
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        $root.tablestore.search.proto.IndexSchema.encode(message.schema, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateSearchIndexRequest message, length delimited. Does not implicitly {@link tablestore.search.proto.CreateSearchIndexRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.ICreateSearchIndexRequest} message CreateSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateSearchIndexRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateSearchIndexRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.CreateSearchIndexRequest} CreateSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateSearchIndexRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.CreateSearchIndexRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tableName = reader.string();
                            break;
                        case 2:
                            message.indexName = reader.string();
                            break;
                        case 3:
                            message.schema = $root.tablestore.search.proto.IndexSchema.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("tableName"))
                        throw $util.ProtocolError("missing required 'tableName'", { instance: message });
                    if (!message.hasOwnProperty("indexName"))
                        throw $util.ProtocolError("missing required 'indexName'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a CreateSearchIndexRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.CreateSearchIndexRequest} CreateSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateSearchIndexRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateSearchIndexRequest message.
                 * @function verify
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateSearchIndexRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.tableName))
                        return "tableName: string expected";
                    if (!$util.isString(message.indexName))
                        return "indexName: string expected";
                    if (message.schema != null && message.hasOwnProperty("schema")) {
                        var error = $root.tablestore.search.proto.IndexSchema.verify(message.schema);
                        if (error)
                            return "schema." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateSearchIndexRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.CreateSearchIndexRequest} CreateSearchIndexRequest
                 */
                CreateSearchIndexRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.CreateSearchIndexRequest)
                        return object;
                    var message = new $root.tablestore.search.proto.CreateSearchIndexRequest();
                    if (object.tableName != null)
                        message.tableName = String(object.tableName);
                    if (object.indexName != null)
                        message.indexName = String(object.indexName);
                    if (object.schema != null) {
                        if (typeof object.schema !== "object")
                            throw TypeError(".tablestore.search.proto.CreateSearchIndexRequest.schema: object expected");
                        message.schema = $root.tablestore.search.proto.IndexSchema.fromObject(object.schema);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateSearchIndexRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.CreateSearchIndexRequest} message CreateSearchIndexRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateSearchIndexRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.tableName = "";
                        object.indexName = "";
                        object.schema = null;
                    }
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        object.tableName = message.tableName;
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        object.indexName = message.indexName;
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        object.schema = $root.tablestore.search.proto.IndexSchema.toObject(message.schema, options);
                    return object;
                };

                /**
                 * Converts this CreateSearchIndexRequest to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.CreateSearchIndexRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateSearchIndexRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateSearchIndexRequest;
            })();

            proto.CreateSearchIndexResponse = (function() {

                /**
                 * Properties of a CreateSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @interface ICreateSearchIndexResponse
                 */

                /**
                 * Constructs a new CreateSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a CreateSearchIndexResponse.
                 * @implements ICreateSearchIndexResponse
                 * @constructor
                 * @param {tablestore.search.proto.ICreateSearchIndexResponse=} [properties] Properties to set
                 */
                function CreateSearchIndexResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new CreateSearchIndexResponse instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.ICreateSearchIndexResponse=} [properties] Properties to set
                 * @returns {tablestore.search.proto.CreateSearchIndexResponse} CreateSearchIndexResponse instance
                 */
                CreateSearchIndexResponse.create = function create(properties) {
                    return new CreateSearchIndexResponse(properties);
                };

                /**
                 * Encodes the specified CreateSearchIndexResponse message. Does not implicitly {@link tablestore.search.proto.CreateSearchIndexResponse.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.ICreateSearchIndexResponse} message CreateSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateSearchIndexResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified CreateSearchIndexResponse message, length delimited. Does not implicitly {@link tablestore.search.proto.CreateSearchIndexResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.ICreateSearchIndexResponse} message CreateSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateSearchIndexResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateSearchIndexResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.CreateSearchIndexResponse} CreateSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateSearchIndexResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.CreateSearchIndexResponse();
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
                 * Decodes a CreateSearchIndexResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.CreateSearchIndexResponse} CreateSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateSearchIndexResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateSearchIndexResponse message.
                 * @function verify
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateSearchIndexResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a CreateSearchIndexResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.CreateSearchIndexResponse} CreateSearchIndexResponse
                 */
                CreateSearchIndexResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.CreateSearchIndexResponse)
                        return object;
                    return new $root.tablestore.search.proto.CreateSearchIndexResponse();
                };

                /**
                 * Creates a plain object from a CreateSearchIndexResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.CreateSearchIndexResponse} message CreateSearchIndexResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateSearchIndexResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this CreateSearchIndexResponse to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.CreateSearchIndexResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateSearchIndexResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateSearchIndexResponse;
            })();

            proto.IndexInfo = (function() {

                /**
                 * Properties of an IndexInfo.
                 * @memberof tablestore.search.proto
                 * @interface IIndexInfo
                 * @property {string|null} [tableName] IndexInfo tableName
                 * @property {string|null} [indexName] IndexInfo indexName
                 */

                /**
                 * Constructs a new IndexInfo.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents an IndexInfo.
                 * @implements IIndexInfo
                 * @constructor
                 * @param {tablestore.search.proto.IIndexInfo=} [properties] Properties to set
                 */
                function IndexInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IndexInfo tableName.
                 * @member {string} tableName
                 * @memberof tablestore.search.proto.IndexInfo
                 * @instance
                 */
                IndexInfo.prototype.tableName = "";

                /**
                 * IndexInfo indexName.
                 * @member {string} indexName
                 * @memberof tablestore.search.proto.IndexInfo
                 * @instance
                 */
                IndexInfo.prototype.indexName = "";

                /**
                 * Creates a new IndexInfo instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {tablestore.search.proto.IIndexInfo=} [properties] Properties to set
                 * @returns {tablestore.search.proto.IndexInfo} IndexInfo instance
                 */
                IndexInfo.create = function create(properties) {
                    return new IndexInfo(properties);
                };

                /**
                 * Encodes the specified IndexInfo message. Does not implicitly {@link tablestore.search.proto.IndexInfo.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {tablestore.search.proto.IIndexInfo} message IndexInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IndexInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.indexName);
                    return writer;
                };

                /**
                 * Encodes the specified IndexInfo message, length delimited. Does not implicitly {@link tablestore.search.proto.IndexInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {tablestore.search.proto.IIndexInfo} message IndexInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IndexInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an IndexInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.IndexInfo} IndexInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IndexInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.IndexInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tableName = reader.string();
                            break;
                        case 2:
                            message.indexName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an IndexInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.IndexInfo} IndexInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IndexInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an IndexInfo message.
                 * @function verify
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IndexInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        if (!$util.isString(message.tableName))
                            return "tableName: string expected";
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        if (!$util.isString(message.indexName))
                            return "indexName: string expected";
                    return null;
                };

                /**
                 * Creates an IndexInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.IndexInfo} IndexInfo
                 */
                IndexInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.IndexInfo)
                        return object;
                    var message = new $root.tablestore.search.proto.IndexInfo();
                    if (object.tableName != null)
                        message.tableName = String(object.tableName);
                    if (object.indexName != null)
                        message.indexName = String(object.indexName);
                    return message;
                };

                /**
                 * Creates a plain object from an IndexInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.IndexInfo
                 * @static
                 * @param {tablestore.search.proto.IndexInfo} message IndexInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                IndexInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.tableName = "";
                        object.indexName = "";
                    }
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        object.tableName = message.tableName;
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        object.indexName = message.indexName;
                    return object;
                };

                /**
                 * Converts this IndexInfo to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.IndexInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                IndexInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return IndexInfo;
            })();

            proto.ListSearchIndexRequest = (function() {

                /**
                 * Properties of a ListSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @interface IListSearchIndexRequest
                 * @property {string|null} [tableName] ListSearchIndexRequest tableName
                 */

                /**
                 * Constructs a new ListSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a ListSearchIndexRequest.
                 * @implements IListSearchIndexRequest
                 * @constructor
                 * @param {tablestore.search.proto.IListSearchIndexRequest=} [properties] Properties to set
                 */
                function ListSearchIndexRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListSearchIndexRequest tableName.
                 * @member {string} tableName
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @instance
                 */
                ListSearchIndexRequest.prototype.tableName = "";

                /**
                 * Creates a new ListSearchIndexRequest instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IListSearchIndexRequest=} [properties] Properties to set
                 * @returns {tablestore.search.proto.ListSearchIndexRequest} ListSearchIndexRequest instance
                 */
                ListSearchIndexRequest.create = function create(properties) {
                    return new ListSearchIndexRequest(properties);
                };

                /**
                 * Encodes the specified ListSearchIndexRequest message. Does not implicitly {@link tablestore.search.proto.ListSearchIndexRequest.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IListSearchIndexRequest} message ListSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListSearchIndexRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                    return writer;
                };

                /**
                 * Encodes the specified ListSearchIndexRequest message, length delimited. Does not implicitly {@link tablestore.search.proto.ListSearchIndexRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IListSearchIndexRequest} message ListSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListSearchIndexRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListSearchIndexRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.ListSearchIndexRequest} ListSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListSearchIndexRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.ListSearchIndexRequest();
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
                 * Decodes a ListSearchIndexRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.ListSearchIndexRequest} ListSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListSearchIndexRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListSearchIndexRequest message.
                 * @function verify
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListSearchIndexRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        if (!$util.isString(message.tableName))
                            return "tableName: string expected";
                    return null;
                };

                /**
                 * Creates a ListSearchIndexRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.ListSearchIndexRequest} ListSearchIndexRequest
                 */
                ListSearchIndexRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.ListSearchIndexRequest)
                        return object;
                    var message = new $root.tablestore.search.proto.ListSearchIndexRequest();
                    if (object.tableName != null)
                        message.tableName = String(object.tableName);
                    return message;
                };

                /**
                 * Creates a plain object from a ListSearchIndexRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.ListSearchIndexRequest} message ListSearchIndexRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListSearchIndexRequest.toObject = function toObject(message, options) {
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
                 * Converts this ListSearchIndexRequest to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.ListSearchIndexRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListSearchIndexRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListSearchIndexRequest;
            })();

            proto.ListSearchIndexResponse = (function() {

                /**
                 * Properties of a ListSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @interface IListSearchIndexResponse
                 * @property {Array.<tablestore.search.proto.IIndexInfo>|null} [indices] ListSearchIndexResponse indices
                 */

                /**
                 * Constructs a new ListSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a ListSearchIndexResponse.
                 * @implements IListSearchIndexResponse
                 * @constructor
                 * @param {tablestore.search.proto.IListSearchIndexResponse=} [properties] Properties to set
                 */
                function ListSearchIndexResponse(properties) {
                    this.indices = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListSearchIndexResponse indices.
                 * @member {Array.<tablestore.search.proto.IIndexInfo>} indices
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @instance
                 */
                ListSearchIndexResponse.prototype.indices = $util.emptyArray;

                /**
                 * Creates a new ListSearchIndexResponse instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IListSearchIndexResponse=} [properties] Properties to set
                 * @returns {tablestore.search.proto.ListSearchIndexResponse} ListSearchIndexResponse instance
                 */
                ListSearchIndexResponse.create = function create(properties) {
                    return new ListSearchIndexResponse(properties);
                };

                /**
                 * Encodes the specified ListSearchIndexResponse message. Does not implicitly {@link tablestore.search.proto.ListSearchIndexResponse.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IListSearchIndexResponse} message ListSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListSearchIndexResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.indices != null && message.indices.length)
                        for (var i = 0; i < message.indices.length; ++i)
                            $root.tablestore.search.proto.IndexInfo.encode(message.indices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListSearchIndexResponse message, length delimited. Does not implicitly {@link tablestore.search.proto.ListSearchIndexResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IListSearchIndexResponse} message ListSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListSearchIndexResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListSearchIndexResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.ListSearchIndexResponse} ListSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListSearchIndexResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.ListSearchIndexResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.indices && message.indices.length))
                                message.indices = [];
                            message.indices.push($root.tablestore.search.proto.IndexInfo.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ListSearchIndexResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.ListSearchIndexResponse} ListSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListSearchIndexResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListSearchIndexResponse message.
                 * @function verify
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListSearchIndexResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.indices != null && message.hasOwnProperty("indices")) {
                        if (!Array.isArray(message.indices))
                            return "indices: array expected";
                        for (var i = 0; i < message.indices.length; ++i) {
                            var error = $root.tablestore.search.proto.IndexInfo.verify(message.indices[i]);
                            if (error)
                                return "indices." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListSearchIndexResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.ListSearchIndexResponse} ListSearchIndexResponse
                 */
                ListSearchIndexResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.ListSearchIndexResponse)
                        return object;
                    var message = new $root.tablestore.search.proto.ListSearchIndexResponse();
                    if (object.indices) {
                        if (!Array.isArray(object.indices))
                            throw TypeError(".tablestore.search.proto.ListSearchIndexResponse.indices: array expected");
                        message.indices = [];
                        for (var i = 0; i < object.indices.length; ++i) {
                            if (typeof object.indices[i] !== "object")
                                throw TypeError(".tablestore.search.proto.ListSearchIndexResponse.indices: object expected");
                            message.indices[i] = $root.tablestore.search.proto.IndexInfo.fromObject(object.indices[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListSearchIndexResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.ListSearchIndexResponse} message ListSearchIndexResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListSearchIndexResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.indices = [];
                    if (message.indices && message.indices.length) {
                        object.indices = [];
                        for (var j = 0; j < message.indices.length; ++j)
                            object.indices[j] = $root.tablestore.search.proto.IndexInfo.toObject(message.indices[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListSearchIndexResponse to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.ListSearchIndexResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListSearchIndexResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListSearchIndexResponse;
            })();

            proto.DeleteSearchIndexRequest = (function() {

                /**
                 * Properties of a DeleteSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @interface IDeleteSearchIndexRequest
                 * @property {string|null} [tableName] DeleteSearchIndexRequest tableName
                 * @property {string|null} [indexName] DeleteSearchIndexRequest indexName
                 */

                /**
                 * Constructs a new DeleteSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a DeleteSearchIndexRequest.
                 * @implements IDeleteSearchIndexRequest
                 * @constructor
                 * @param {tablestore.search.proto.IDeleteSearchIndexRequest=} [properties] Properties to set
                 */
                function DeleteSearchIndexRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteSearchIndexRequest tableName.
                 * @member {string} tableName
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @instance
                 */
                DeleteSearchIndexRequest.prototype.tableName = "";

                /**
                 * DeleteSearchIndexRequest indexName.
                 * @member {string} indexName
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @instance
                 */
                DeleteSearchIndexRequest.prototype.indexName = "";

                /**
                 * Creates a new DeleteSearchIndexRequest instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IDeleteSearchIndexRequest=} [properties] Properties to set
                 * @returns {tablestore.search.proto.DeleteSearchIndexRequest} DeleteSearchIndexRequest instance
                 */
                DeleteSearchIndexRequest.create = function create(properties) {
                    return new DeleteSearchIndexRequest(properties);
                };

                /**
                 * Encodes the specified DeleteSearchIndexRequest message. Does not implicitly {@link tablestore.search.proto.DeleteSearchIndexRequest.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IDeleteSearchIndexRequest} message DeleteSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteSearchIndexRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.indexName);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteSearchIndexRequest message, length delimited. Does not implicitly {@link tablestore.search.proto.DeleteSearchIndexRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IDeleteSearchIndexRequest} message DeleteSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteSearchIndexRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteSearchIndexRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.DeleteSearchIndexRequest} DeleteSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteSearchIndexRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.DeleteSearchIndexRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tableName = reader.string();
                            break;
                        case 2:
                            message.indexName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DeleteSearchIndexRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.DeleteSearchIndexRequest} DeleteSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteSearchIndexRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteSearchIndexRequest message.
                 * @function verify
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteSearchIndexRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        if (!$util.isString(message.tableName))
                            return "tableName: string expected";
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        if (!$util.isString(message.indexName))
                            return "indexName: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteSearchIndexRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.DeleteSearchIndexRequest} DeleteSearchIndexRequest
                 */
                DeleteSearchIndexRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.DeleteSearchIndexRequest)
                        return object;
                    var message = new $root.tablestore.search.proto.DeleteSearchIndexRequest();
                    if (object.tableName != null)
                        message.tableName = String(object.tableName);
                    if (object.indexName != null)
                        message.indexName = String(object.indexName);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteSearchIndexRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.DeleteSearchIndexRequest} message DeleteSearchIndexRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteSearchIndexRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.tableName = "";
                        object.indexName = "";
                    }
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        object.tableName = message.tableName;
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        object.indexName = message.indexName;
                    return object;
                };

                /**
                 * Converts this DeleteSearchIndexRequest to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.DeleteSearchIndexRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteSearchIndexRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteSearchIndexRequest;
            })();

            proto.DeleteSearchIndexResponse = (function() {

                /**
                 * Properties of a DeleteSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @interface IDeleteSearchIndexResponse
                 */

                /**
                 * Constructs a new DeleteSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a DeleteSearchIndexResponse.
                 * @implements IDeleteSearchIndexResponse
                 * @constructor
                 * @param {tablestore.search.proto.IDeleteSearchIndexResponse=} [properties] Properties to set
                 */
                function DeleteSearchIndexResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteSearchIndexResponse instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IDeleteSearchIndexResponse=} [properties] Properties to set
                 * @returns {tablestore.search.proto.DeleteSearchIndexResponse} DeleteSearchIndexResponse instance
                 */
                DeleteSearchIndexResponse.create = function create(properties) {
                    return new DeleteSearchIndexResponse(properties);
                };

                /**
                 * Encodes the specified DeleteSearchIndexResponse message. Does not implicitly {@link tablestore.search.proto.DeleteSearchIndexResponse.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IDeleteSearchIndexResponse} message DeleteSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteSearchIndexResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteSearchIndexResponse message, length delimited. Does not implicitly {@link tablestore.search.proto.DeleteSearchIndexResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IDeleteSearchIndexResponse} message DeleteSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteSearchIndexResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteSearchIndexResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.DeleteSearchIndexResponse} DeleteSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteSearchIndexResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.DeleteSearchIndexResponse();
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
                 * Decodes a DeleteSearchIndexResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.DeleteSearchIndexResponse} DeleteSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteSearchIndexResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteSearchIndexResponse message.
                 * @function verify
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteSearchIndexResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteSearchIndexResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.DeleteSearchIndexResponse} DeleteSearchIndexResponse
                 */
                DeleteSearchIndexResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.DeleteSearchIndexResponse)
                        return object;
                    return new $root.tablestore.search.proto.DeleteSearchIndexResponse();
                };

                /**
                 * Creates a plain object from a DeleteSearchIndexResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.DeleteSearchIndexResponse} message DeleteSearchIndexResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteSearchIndexResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteSearchIndexResponse to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.DeleteSearchIndexResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteSearchIndexResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteSearchIndexResponse;
            })();

            /**
             * SyncPhase enum.
             * @name tablestore.search.proto.SyncPhase
             * @enum {string}
             * @property {number} FULL=1 FULL value
             * @property {number} INCR=2 INCR value
             */
            proto.SyncPhase = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "FULL"] = 1;
                values[valuesById[2] = "INCR"] = 2;
                return values;
            })();

            proto.SyncStat = (function() {

                /**
                 * Properties of a SyncStat.
                 * @memberof tablestore.search.proto
                 * @interface ISyncStat
                 * @property {tablestore.search.proto.SyncPhase|null} [syncPhase] SyncStat syncPhase
                 * @property {number|Long|null} [currentSyncTimestamp] SyncStat currentSyncTimestamp
                 */

                /**
                 * Constructs a new SyncStat.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a SyncStat.
                 * @implements ISyncStat
                 * @constructor
                 * @param {tablestore.search.proto.ISyncStat=} [properties] Properties to set
                 */
                function SyncStat(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SyncStat syncPhase.
                 * @member {tablestore.search.proto.SyncPhase} syncPhase
                 * @memberof tablestore.search.proto.SyncStat
                 * @instance
                 */
                SyncStat.prototype.syncPhase = 1;

                /**
                 * SyncStat currentSyncTimestamp.
                 * @member {number|Long} currentSyncTimestamp
                 * @memberof tablestore.search.proto.SyncStat
                 * @instance
                 */
                SyncStat.prototype.currentSyncTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new SyncStat instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {tablestore.search.proto.ISyncStat=} [properties] Properties to set
                 * @returns {tablestore.search.proto.SyncStat} SyncStat instance
                 */
                SyncStat.create = function create(properties) {
                    return new SyncStat(properties);
                };

                /**
                 * Encodes the specified SyncStat message. Does not implicitly {@link tablestore.search.proto.SyncStat.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {tablestore.search.proto.ISyncStat} message SyncStat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncStat.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.syncPhase != null && message.hasOwnProperty("syncPhase"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.syncPhase);
                    if (message.currentSyncTimestamp != null && message.hasOwnProperty("currentSyncTimestamp"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.currentSyncTimestamp);
                    return writer;
                };

                /**
                 * Encodes the specified SyncStat message, length delimited. Does not implicitly {@link tablestore.search.proto.SyncStat.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {tablestore.search.proto.ISyncStat} message SyncStat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyncStat.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyncStat message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.SyncStat} SyncStat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncStat.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.SyncStat();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.syncPhase = reader.int32();
                            break;
                        case 2:
                            message.currentSyncTimestamp = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SyncStat message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.SyncStat} SyncStat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyncStat.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyncStat message.
                 * @function verify
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyncStat.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.syncPhase != null && message.hasOwnProperty("syncPhase"))
                        switch (message.syncPhase) {
                        default:
                            return "syncPhase: enum value expected";
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.currentSyncTimestamp != null && message.hasOwnProperty("currentSyncTimestamp"))
                        if (!$util.isInteger(message.currentSyncTimestamp) && !(message.currentSyncTimestamp && $util.isInteger(message.currentSyncTimestamp.low) && $util.isInteger(message.currentSyncTimestamp.high)))
                            return "currentSyncTimestamp: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a SyncStat message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.SyncStat} SyncStat
                 */
                SyncStat.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.SyncStat)
                        return object;
                    var message = new $root.tablestore.search.proto.SyncStat();
                    switch (object.syncPhase) {
                    case "FULL":
                    case 1:
                        message.syncPhase = 1;
                        break;
                    case "INCR":
                    case 2:
                        message.syncPhase = 2;
                        break;
                    }
                    if (object.currentSyncTimestamp != null)
                        if ($util.Long)
                            (message.currentSyncTimestamp = $util.Long.fromValue(object.currentSyncTimestamp)).unsigned = false;
                        else if (typeof object.currentSyncTimestamp === "string")
                            message.currentSyncTimestamp = parseInt(object.currentSyncTimestamp, 10);
                        else if (typeof object.currentSyncTimestamp === "number")
                            message.currentSyncTimestamp = object.currentSyncTimestamp;
                        else if (typeof object.currentSyncTimestamp === "object")
                            message.currentSyncTimestamp = new $util.LongBits(object.currentSyncTimestamp.low >>> 0, object.currentSyncTimestamp.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a SyncStat message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.SyncStat
                 * @static
                 * @param {tablestore.search.proto.SyncStat} message SyncStat
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyncStat.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.syncPhase = options.enums === String ? "FULL" : 1;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.currentSyncTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.currentSyncTimestamp = options.longs === String ? "0" : 0;
                    }
                    if (message.syncPhase != null && message.hasOwnProperty("syncPhase"))
                        object.syncPhase = options.enums === String ? $root.tablestore.search.proto.SyncPhase[message.syncPhase] : message.syncPhase;
                    if (message.currentSyncTimestamp != null && message.hasOwnProperty("currentSyncTimestamp"))
                        if (typeof message.currentSyncTimestamp === "number")
                            object.currentSyncTimestamp = options.longs === String ? String(message.currentSyncTimestamp) : message.currentSyncTimestamp;
                        else
                            object.currentSyncTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.currentSyncTimestamp) : options.longs === Number ? new $util.LongBits(message.currentSyncTimestamp.low >>> 0, message.currentSyncTimestamp.high >>> 0).toNumber() : message.currentSyncTimestamp;
                    return object;
                };

                /**
                 * Converts this SyncStat to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.SyncStat
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyncStat.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SyncStat;
            })();

            proto.DescribeSearchIndexRequest = (function() {

                /**
                 * Properties of a DescribeSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @interface IDescribeSearchIndexRequest
                 * @property {string|null} [tableName] DescribeSearchIndexRequest tableName
                 * @property {string|null} [indexName] DescribeSearchIndexRequest indexName
                 */

                /**
                 * Constructs a new DescribeSearchIndexRequest.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a DescribeSearchIndexRequest.
                 * @implements IDescribeSearchIndexRequest
                 * @constructor
                 * @param {tablestore.search.proto.IDescribeSearchIndexRequest=} [properties] Properties to set
                 */
                function DescribeSearchIndexRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DescribeSearchIndexRequest tableName.
                 * @member {string} tableName
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @instance
                 */
                DescribeSearchIndexRequest.prototype.tableName = "";

                /**
                 * DescribeSearchIndexRequest indexName.
                 * @member {string} indexName
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @instance
                 */
                DescribeSearchIndexRequest.prototype.indexName = "";

                /**
                 * Creates a new DescribeSearchIndexRequest instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IDescribeSearchIndexRequest=} [properties] Properties to set
                 * @returns {tablestore.search.proto.DescribeSearchIndexRequest} DescribeSearchIndexRequest instance
                 */
                DescribeSearchIndexRequest.create = function create(properties) {
                    return new DescribeSearchIndexRequest(properties);
                };

                /**
                 * Encodes the specified DescribeSearchIndexRequest message. Does not implicitly {@link tablestore.search.proto.DescribeSearchIndexRequest.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IDescribeSearchIndexRequest} message DescribeSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescribeSearchIndexRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.indexName);
                    return writer;
                };

                /**
                 * Encodes the specified DescribeSearchIndexRequest message, length delimited. Does not implicitly {@link tablestore.search.proto.DescribeSearchIndexRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.IDescribeSearchIndexRequest} message DescribeSearchIndexRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescribeSearchIndexRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DescribeSearchIndexRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.DescribeSearchIndexRequest} DescribeSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescribeSearchIndexRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.DescribeSearchIndexRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tableName = reader.string();
                            break;
                        case 2:
                            message.indexName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DescribeSearchIndexRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.DescribeSearchIndexRequest} DescribeSearchIndexRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescribeSearchIndexRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DescribeSearchIndexRequest message.
                 * @function verify
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescribeSearchIndexRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        if (!$util.isString(message.tableName))
                            return "tableName: string expected";
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        if (!$util.isString(message.indexName))
                            return "indexName: string expected";
                    return null;
                };

                /**
                 * Creates a DescribeSearchIndexRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.DescribeSearchIndexRequest} DescribeSearchIndexRequest
                 */
                DescribeSearchIndexRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.DescribeSearchIndexRequest)
                        return object;
                    var message = new $root.tablestore.search.proto.DescribeSearchIndexRequest();
                    if (object.tableName != null)
                        message.tableName = String(object.tableName);
                    if (object.indexName != null)
                        message.indexName = String(object.indexName);
                    return message;
                };

                /**
                 * Creates a plain object from a DescribeSearchIndexRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @static
                 * @param {tablestore.search.proto.DescribeSearchIndexRequest} message DescribeSearchIndexRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescribeSearchIndexRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.tableName = "";
                        object.indexName = "";
                    }
                    if (message.tableName != null && message.hasOwnProperty("tableName"))
                        object.tableName = message.tableName;
                    if (message.indexName != null && message.hasOwnProperty("indexName"))
                        object.indexName = message.indexName;
                    return object;
                };

                /**
                 * Converts this DescribeSearchIndexRequest to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.DescribeSearchIndexRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescribeSearchIndexRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DescribeSearchIndexRequest;
            })();

            proto.DescribeSearchIndexResponse = (function() {

                /**
                 * Properties of a DescribeSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @interface IDescribeSearchIndexResponse
                 * @property {tablestore.search.proto.IIndexSchema|null} [schema] DescribeSearchIndexResponse schema
                 * @property {tablestore.search.proto.ISyncStat|null} [syncStat] DescribeSearchIndexResponse syncStat
                 */

                /**
                 * Constructs a new DescribeSearchIndexResponse.
                 * @memberof tablestore.search.proto
                 * @classdesc Represents a DescribeSearchIndexResponse.
                 * @implements IDescribeSearchIndexResponse
                 * @constructor
                 * @param {tablestore.search.proto.IDescribeSearchIndexResponse=} [properties] Properties to set
                 */
                function DescribeSearchIndexResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DescribeSearchIndexResponse schema.
                 * @member {tablestore.search.proto.IIndexSchema|null|undefined} schema
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @instance
                 */
                DescribeSearchIndexResponse.prototype.schema = null;

                /**
                 * DescribeSearchIndexResponse syncStat.
                 * @member {tablestore.search.proto.ISyncStat|null|undefined} syncStat
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @instance
                 */
                DescribeSearchIndexResponse.prototype.syncStat = null;

                /**
                 * Creates a new DescribeSearchIndexResponse instance using the specified properties.
                 * @function create
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IDescribeSearchIndexResponse=} [properties] Properties to set
                 * @returns {tablestore.search.proto.DescribeSearchIndexResponse} DescribeSearchIndexResponse instance
                 */
                DescribeSearchIndexResponse.create = function create(properties) {
                    return new DescribeSearchIndexResponse(properties);
                };

                /**
                 * Encodes the specified DescribeSearchIndexResponse message. Does not implicitly {@link tablestore.search.proto.DescribeSearchIndexResponse.verify|verify} messages.
                 * @function encode
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IDescribeSearchIndexResponse} message DescribeSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescribeSearchIndexResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        $root.tablestore.search.proto.IndexSchema.encode(message.schema, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.syncStat != null && message.hasOwnProperty("syncStat"))
                        $root.tablestore.search.proto.SyncStat.encode(message.syncStat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DescribeSearchIndexResponse message, length delimited. Does not implicitly {@link tablestore.search.proto.DescribeSearchIndexResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.IDescribeSearchIndexResponse} message DescribeSearchIndexResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescribeSearchIndexResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DescribeSearchIndexResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tablestore.search.proto.DescribeSearchIndexResponse} DescribeSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescribeSearchIndexResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tablestore.search.proto.DescribeSearchIndexResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.schema = $root.tablestore.search.proto.IndexSchema.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.syncStat = $root.tablestore.search.proto.SyncStat.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DescribeSearchIndexResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tablestore.search.proto.DescribeSearchIndexResponse} DescribeSearchIndexResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescribeSearchIndexResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DescribeSearchIndexResponse message.
                 * @function verify
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescribeSearchIndexResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.schema != null && message.hasOwnProperty("schema")) {
                        var error = $root.tablestore.search.proto.IndexSchema.verify(message.schema);
                        if (error)
                            return "schema." + error;
                    }
                    if (message.syncStat != null && message.hasOwnProperty("syncStat")) {
                        var error = $root.tablestore.search.proto.SyncStat.verify(message.syncStat);
                        if (error)
                            return "syncStat." + error;
                    }
                    return null;
                };

                /**
                 * Creates a DescribeSearchIndexResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tablestore.search.proto.DescribeSearchIndexResponse} DescribeSearchIndexResponse
                 */
                DescribeSearchIndexResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.tablestore.search.proto.DescribeSearchIndexResponse)
                        return object;
                    var message = new $root.tablestore.search.proto.DescribeSearchIndexResponse();
                    if (object.schema != null) {
                        if (typeof object.schema !== "object")
                            throw TypeError(".tablestore.search.proto.DescribeSearchIndexResponse.schema: object expected");
                        message.schema = $root.tablestore.search.proto.IndexSchema.fromObject(object.schema);
                    }
                    if (object.syncStat != null) {
                        if (typeof object.syncStat !== "object")
                            throw TypeError(".tablestore.search.proto.DescribeSearchIndexResponse.syncStat: object expected");
                        message.syncStat = $root.tablestore.search.proto.SyncStat.fromObject(object.syncStat);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DescribeSearchIndexResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @static
                 * @param {tablestore.search.proto.DescribeSearchIndexResponse} message DescribeSearchIndexResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescribeSearchIndexResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.schema = null;
                        object.syncStat = null;
                    }
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        object.schema = $root.tablestore.search.proto.IndexSchema.toObject(message.schema, options);
                    if (message.syncStat != null && message.hasOwnProperty("syncStat"))
                        object.syncStat = $root.tablestore.search.proto.SyncStat.toObject(message.syncStat, options);
                    return object;
                };

                /**
                 * Converts this DescribeSearchIndexResponse to JSON.
                 * @function toJSON
                 * @memberof tablestore.search.proto.DescribeSearchIndexResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescribeSearchIndexResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DescribeSearchIndexResponse;
            })();

            return proto;
        })();

        return search;
    })();

    return tablestore;
})();

module.exports = $root;
