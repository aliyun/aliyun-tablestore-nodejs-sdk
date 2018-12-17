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
    DELETE_ALL: "DELETE_ALL"
};

TableStore.ReturnType = {
    NONE: 0,
    Primarykey: 1
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
}

TableStore.INF_MIN = {};

TableStore.INF_MAX = {};

TableStore.PK_AUTO_INCR = {};