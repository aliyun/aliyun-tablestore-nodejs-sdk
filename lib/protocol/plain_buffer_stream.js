var TableStore = require('../core');
var int64buffer = require("int64-buffer");
var Buffer = TableStore.util.Buffer;
var inherit = TableStore.util.inherit;


TableStore.PlainBufferInputStream = inherit({
    constructor: function (dataBuffer) {
        if (!TableStore.util.Buffer.isBuffer(dataBuffer.buffer)) {
            this.buffer = new TableStore.util.Buffer(dataBuffer.buffer);
        } else {
            this.buffer = dataBuffer.buffer;
        }
        this.bufferLimit = dataBuffer.limit;
        this.curPos = dataBuffer.offset;
        this.lastTag = 0;
    },

    isAtEnd: function () {
        return this.bufferLimit === this.curPos;
    },

    readTag: function () {
        if (this.isAtEnd()) {
            this.lastTag = 0;
            return 0;
        }

        this.lastTag = this.readRawByte();
        return this.lastTag;
    },

    checkLastTagWas: function (tag) {
        return this.lastTag === tag;
    },

    getLastTag: function () {
        return this.lastTag;
    },

    readRawByte: function () {
        if (this.isAtEnd()) {
            throw new Error('Read raw byte encountered EOF.');
        }
        var pos = this.curPos;
        this.curPos += 1;
        return this.buffer[pos];
    },

    readRawLittleEndian64: function () {
        var b1 = this.readRawByte();
        var b2 = this.readRawByte();
        var b3 = this.readRawByte();
        var b4 = this.readRawByte();
        var b5 = this.readRawByte();
        var b6 = this.readRawByte();
        var b7 = this.readRawByte();
        var b8 = this.readRawByte();

        var buf = new Buffer([b1, b2, b3, b4, b5, b6, b7, b8]);
        return buf;
    },

    readRawLittleEndian32: function () {
        var b1 = this.readRawByte();
        var b2 = this.readRawByte();
        var b3 = this.readRawByte();
        var b4 = this.readRawByte();
        return (((b1) & 0xff)) | (((b2) & 0xff) << 8) | (((b3) & 0xff) << 16) | (((b4) & 0xff) << 24);
    },

    readBoolean: function () {
        return this.readRawByte() != 0;
    },

    readDoubleAndInt64: function () {
        var buf = this.readRawLittleEndian64();
        var doubleVal = buf.readDoubleLE(0);
        var int64LE = new int64buffer.Int64LE(buf);

        return { doubleVal: doubleVal, int64LE: int64LE };
    },

    readInt32: function () {
        return this.readRawLittleEndian32();
    },

    readInt64: function () {
        var buf = this.readRawLittleEndian64();
        //https://www.npmjs.com/package/int64-buffer
        var int64LE = new int64buffer.Int64LE(buf);
        return int64LE;
    },

    readBytes: function (size) {
        if (this.buffer.length - this.curPos < size) {
            throw new Error('Read bytes encountered EOF.');
        }

        var start = this.curPos;
        this.curPos += size;
        var rtBuffer = new Buffer(size);
        this.buffer.copy(rtBuffer, 0, start, this.curPos);
        return rtBuffer;
    },

    readUtfString: function (size) {
        if (this.buffer.length - this.curPos < size) {
            throw new Error('Read UTF string encountered EOF.');
        }
        var utf_str = this.buffer.toString('utf8', this.curPos, this.curPos + size);
        this.curPos += size;
        return utf_str;
    }

});

TableStore.PlainBufferOutputStream = inherit({
    constructor: function (capacity) {
        this.buffer = new Buffer(capacity);
        this.buffer.fill(0);
        this.capacity = capacity;
        this.pos = 0;
    },

    getBuffer: function () {
        return this.buffer;
    },

    isFull: function () {
        return this.pos === this.capacity;
    },

    count: function () {
        return this.pos;
    },

    remain: function () {
        return this.capacity - this.pos;
    },

    clear: function () {
        this.pos = 0;
        this.buffer = [];
    },

    writeRawByte: function (value) {
        if (this.isFull()) {
            throw new Error('The buffer is full');
        }
        this.buffer[this.pos++] = value;
    },

    writeRawLittleEndian32: function (value) {
        this.writeRawByte((value) & 0xFF);
        this.writeRawByte((value >> 8) & 0xFF);
        this.writeRawByte((value >> 16) & 0xFF);
        this.writeRawByte((value >> 24) & 0xFF);
    },

    writeRawLittleEndian64: function (buf) {
        for (var i = 0; i < buf.length; i++) {
            var number = buf[i] > 127 ? buf[i] - 256 : buf[i];
            this.writeRawByte(number & 0xFF);
        }
    },

    writeInt64LE: function (int64LE) {
        var buf = int64LE.toBuffer();
        this.writeRawLittleEndian64(buf);
    },

    writeDouble: function (value) {
        var buf = TableStore.util.Int64.doubleToRawLongBits(value);
        this.writeRawLittleEndian64(buf.toBuffer());
    },

    writeBoolean: function (value) {
        if (value) {
            this.writeRawByte(1);
        } else {
            this.writeRawByte(0);
        }
    },

    writeBytes: function (value) {
        var bytes = null;
        if (value instanceof Buffer) {
            bytes = value;
        } else if (typeof (value) === 'string') {
            bytes = new Buffer(value);
        }

        if (this.pos + bytes.length > this.capacity) {
            throw Error('The buffer is full.');
        }

        if (value instanceof Buffer) {
            value.copy(this.buffer, this.pos);
        } else if (typeof (value) === 'string') {
            this.buffer.write(value, this.pos);
        } else {
            throw new Error('expect Buffer or string,but it was:' + typeof (value));
        }

        this.pos += bytes.length;
    }
});

