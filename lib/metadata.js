var TableStore = require('./core');
var inherit = TableStore.util.inherit;

TableStore.rowExistenceExpectation = {
    IGNORE: "IGNORE",
    EXPECT_EXIST: "EXPECT_EXIST",
    EXPECT_NOT_EXIST: "EXPECT_NOT_EXIST"
};

TableStore.Direction = {
    FORWARD: "FORWARD",
    BACKWARD: "BACKWARD"
};

TableStore.UpdateType = {
    PUT: "PUT",
    DELETE: "DELETE",
    DELETE_ALL: "DELETE_ALL",
    INCREMENT: "INCREMENT"
};

TableStore.BatchWriteType = {
    PUT: 1,
    UPDATE: 2,
    DELETE: 3
};

TableStore.ReturnType = {
    NONE: 0,
    Primarykey: 1,
    AfterModify: 2
};

TableStore.DefinedColumnType = {
    DCT_INTEGER: 1,
    DCT_DOUBLE: 2,
    DCT_BOOLEAN: 3,
    DCT_STRING: 4
};

TableStore.PrimaryKeyType = {
    INTEGER: 1,
    STRING: 2,
    BINARY: 3
};

TableStore.PrimaryKeyOption = {
    AUTO_INCREMENT: 1
};

TableStore.IndexUpdateMode = {
    IUM_ASYNC_INDEX: 0,
    IUM_SYNC_INDEX: 1
};

TableStore.IndexType = {
    IT_GLOBAL_INDEX: 0,
    IT_LOCAL_INDEX: 1
};

TableStore.INF_MIN = {};

TableStore.INF_MAX = {};

TableStore.PK_AUTO_INCR = {};
