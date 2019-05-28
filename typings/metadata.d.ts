export declare enum rowExistenceExpectation {
  IGNORE = 'IGNORE',
  EXPECT_EXIST = 'EXPECT_EXIST',
  EXPECT_NOT_EXIST = 'EXPECT_NOT_EXIST',
}

export declare enum Direction {
  FORWARD = 'FORWARD',
  BACKWARD = 'BACKWARD',
}

export declare enum UpdateType {
  PUT = 'PUT',
  DELETE = 'DELETE',
  DELETE_ALL = 'DELETE_ALL',
  INCREMENT = 'INCREMENT',
}

export declare enum ReturnType {
  NONE,
  Primarykey,
  AfterModify,
}

export declare enum DefinedColumnType {
  DCT_INTEGER = 1,
  DCT_DOUBLE = 2,
  DCT_BOOLEAN = 3,
  DCT_STRING = 4,
}

export declare enum PrimaryKeyType {
  INTEGER = 1,
  STRING = 2,
  BINARY = 3,
}

/**
 * DO NOT USE THIS ENUM REDIRECTLY
 * @private
 */
export declare enum EXTRA {
  INF_MIN,
  INF_MAX,
  PK_AUTO_INCR,
}

export { INF_MIN, INF_MAX, PK_AUTO_INCR };
