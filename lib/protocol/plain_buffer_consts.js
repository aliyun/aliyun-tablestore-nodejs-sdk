var TableStore=require('../core');

TableStore.plainBufferConsts = {
    HEADER: 0x75,

    // tag type
    TAG_ROW_PK: 0x1,
    TAG_ROW_DATA: 0x2,
    TAG_CELL: 0x3,
    TAG_CELL_NAME: 0x4,
    TAG_CELL_VALUE: 0x5,
    TAG_CELL_TYPE: 0x6,
    TAG_CELL_TIMESTAMP: 0x7,
    TAG_DELETE_ROW_MARKER: 0x8,
    TAG_ROW_CHECKSUM: 0x9,
    TAG_CELL_CHECKSUM: 0x0A,
    TAG_EXTENSION: 0x0B,
    TAG_SEQ_INFO: 0x0C,
    TAG_SEQ_INFO_EPOCH: 0x0D,
    TAG_SEQ_INFO_TS: 0x0E,
    TAG_SEQ_INFO_ROW_INDEX: 0x0F,

    // cell op type
    DELETE_ALL_VERSION: 0x1,
    DELETE_ONE_VERSION: 0x3,
    INCREMENT: 0x4,

    // variant type
    VT_INTEGER: 0x0,
    VT_DOUBLE: 0x1,
    VT_BOOLEAN: 0x2,
    VT_STRING: 0x3,
    VT_NULL: 0x6,
    VT_BLOB: 0x7,
    VT_INF_MIN: 0x9,
    VT_INF_MAX: 0xa,
    VT_AUTO_INCREMENT: 0xb,

    // othber
    LITTLE_ENDIAN_32_SIZE: 4,
    LITTLE_ENDIAN_64_SIZE: 8,
    MAX_BUFFER_SIZE: 64 * 1024 * 1024

};
