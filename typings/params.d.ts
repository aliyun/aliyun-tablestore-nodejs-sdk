import { ColumnCondition, Condition } from './filter';
import { DefinedColumnType, Direction, PrimaryKeyType, ReturnType } from './metadata';
import {
  AttributeColumn,
  ColumnValue,
  PrimaryKey,
  UpdateColumn,
} from './protocol/plain_buffer_builder';
import {
  ColumnReturnType,
  FieldType,
  GeoDistanceType,
  IndexOptions,
  QueryOperator,
  QueryType,
  ScoreMode,
  SortMode,
  SortOrder,
} from './search';

export declare interface CreateTableParams {
  tableMeta: {
    tableName: string;
    primaryKey: {
      name: string;
      type: PrimaryKeyType;
    }[];
    definedColumn?: {
      name: string;
      type: DefinedColumnType;
    }[];
  };
  reservedThroughput: {
    capacityUnit: {
      read: number;
      write: number;
    };
  };
  tableOptions?: {
    /**
     * 数据的过期时间, 单位秒, -1 代表永不过期. 假如设置过期时间为一年, 即为 365 * 24 * 3600.
     */
    timeToLive?: number;
    /**
     * 保存的最大版本数, 设置为 1 即代表每列上最多保存一个版本(保存最新的版本).
     */
    maxVersions?: number;
    maxTimeDeviation?: number;
  };
  streamSpecification?: {
    /**
     * globalIndex 不支持开启 Stream
     */
    enableStream?: boolean;
    expirationTime?: number;
  };
  indexMetas?: {
    name: string;
    primaryKey: string[];
    definedColumn: string[];
  }[];
}

export declare type ListTableParams = undefined;

export declare interface DeleteTableParams {
  tableName: string;
}

export declare interface UpdateTableParams {
  tableName: string;
  reservedThroughput: CreateTableParams['reservedThroughput'];
  tableOptions: CreateTableParams['tableOptions'];
  streamSpecification?: CreateTableParams['streamSpecification'];
}

export declare interface DescribeTableParams {
  tableName: string;
}

export declare interface GetRowParams {
  tableName: string;
  primaryKey: PrimaryKey[];
  /**
   * @default
   * 1
   */
  maxVersions?: number;
  columnFilter?: ColumnCondition;
  timeRange?: {
    startTime?: number;
    endTime?: number;
    specificTime?: number;
  };
  startColumn?: string;
  endColumn?: string;
  columnsToGet?: string[];
  transactionId?: string;
}

export declare interface PutRowParams {
  tableName: string;
  primaryKey: PrimaryKey[];
  attributeColumns?: AttributeColumn[];
  condition?: Condition | null;
  returnContent?: {
    returnType?: ReturnType;
  };
  transactionId?: string;
}

export declare interface UpdateRowParams {
  tableName: string;
  primaryKey: PrimaryKey[];
  updateOfAttributeColumns: UpdateColumn[];
  condition?: Condition | null;
  returnContent?: {
    returnType?: ReturnType;
  };
  transactionId?: string;
}

export declare interface DeleteRowParams {
  tableName: string;
  primaryKey: PrimaryKey[];
  condition?: Condition | null;
  returnContent?: {
    returnType?: ReturnType;
  };
  transactionId?: string;
}

export declare interface GetRangeParams {
  tableName: string;
  inclusiveStartPrimaryKey: PrimaryKey[];
  exclusiveEndPrimaryKey: PrimaryKey[];
  direction: Direction;
  maxVersions?: number;
  columnFilter?: ColumnCondition;
  limit?: number;
  timeRange?: {
    startTime?: number;
    endTime?: number;
    specificTime?: number;
  };
  startColumn?: string;
  endColumn?: string;
  columnsToGet?: string[];
  transactionId?: string;
}

export declare interface BatchGetRowParams {
  tables: {
    tableName: string;
    primaryKey: PrimaryKey[][];
    maxVersions?: number;
    columnFilter?: ColumnCondition;
    timeRange?: {
      startTime?: number;
      endTime?: number;
      specificTime?: number;
    };
    startColumn?: string;
    endColumn?: string;
    columnsToGet?: string[];
  }[];
  transactionId?: string;
}

export declare type BatchWriteRowItem = (
  | {
      type: 'PUT' | 'DELETE';
      attributeColumns?: AttributeColumn[];
    }
  | {
      type: 'UPDATE';
      attributeColumns: UpdateColumn[];
    }) & {
  primaryKey: PrimaryKey[];
  condition?: Condition | null;
  returnContent?: {
    returnType?: ReturnType;
    returnColumns?: string[];
  };
};

export declare interface BatchWriteRowParams {
  tables: {
    tableName: string;
    rows: BatchWriteRowItem[];
  }[];
  transactionId?: string;
}

export declare interface ListSearchIndexParams {
  tableName: string;
}

export declare interface DescribeSearchIndexParams {
  tableName: string;
  indexName: string;
}

export declare interface SearchIndexFieldSchema {
  fieldName: string;
  fieldType: FieldType;
  /**
   * 设置开启索引
   */
  index?: boolean;
  /**
   * 设置开启排序和统计功能
   */
  enableSortAndAgg?: boolean;
  store?: boolean;
  isAnArray?: boolean;
  indexOptions?: IndexOptions;
  analyzer?: string;
  fieldSchemas?: SearchIndexFieldSchema[];
}

export declare interface SearchIndexSetting {
  routingFields?: string[];
  routingPartitionSize?: number | null;
}

export declare type SearchIndexQuery =
  | {
      type?: QueryType.MATCH_QUERY;
      query?: {
        fieldName: string;
        text?: string;
        minimumShouldMatch?: number;
        operator?: QueryOperator;
      };
    }
  | {
      type?: QueryType.MATCH_PHRASE_QUERY;
      query?: {
        fieldName: string;
        text?: string;
      };
    }
  | {
      type?: QueryType.TERM_QUERY;
      query?: {
        fieldName: string;
        term: ColumnValue;
      };
    }
  | {
      type?: QueryType.RANGE_QUERY;
      query?: {
        fieldName: string;
        rangeFrom?: ColumnValue;
        rangeTo?: ColumnValue;
        includeLower?: boolean;
        includeUpper?: boolean;
      };
    }
  | {
      type?: QueryType.PREFIX_QUERY;
      query?: {
        fieldName: string;
        prefix?: string;
      };
    }
  | {
      type?: QueryType.BOOL_QUERY;
      query?: {
        mustQueries?: SearchIndexQuery[];
        mustNotQueries?: SearchIndexQuery[];
        filterQueries?: SearchIndexQuery[];
        shouldQueries?: SearchIndexQuery[];
        minimumShouldMatch?: number;
      };
    }
  | {
      type?: QueryType.CONST_SCORE_QUERY;
      query?: {
        filter: SearchIndexQuery;
      };
    }
  | {
      type?: QueryType.FUNCTION_SCORE_QUERY;
      query?: {
        query: SearchIndexQuery;
        fieldValueFactor: { fieldName: string };
      };
    }
  | {
      type?: QueryType.NESTED_QUERY;
      query?: {
        path: string;
        query: SearchIndexQuery;
        /**
         * @default
         * ScoreMode.SCORE_MODE_AVG
         */
        scoreMode?: ScoreMode;
      };
    }
  | {
      type?: QueryType.WILDCARD_QUERY;
      query?: {
        fieldName: string;
        value?: string;
      };
    }
  | {
      type?: QueryType.MATCH_ALL_QUERY;
      query?: {};
    }
  | {
      type?: QueryType.GEO_BOUNDING_BOX_QUERY;
      query?: {
        fieldName: string;
        topLeft?: string;
        bottomRight?: string;
      };
    }
  | {
      type?: QueryType.GEO_DISTANCE_QUERY;
      query?: {
        fieldName: string;
        centerPoint?: string;
        distance?: number;
      };
    }
  | {
      type?: QueryType.GEO_POLYGON_QUERY;
      query?: {
        fieldName: string;
        points?: string[];
      };
    }
  | {
      type?: QueryType.TERMS_QUERY;
      query?: {
        fieldName: string;
        terms?: ColumnValue[];
      };
    }
  | {
      type?: QueryType.EXISTS_QUERY;
      query?: {
        fieldName: string;
      };
    };

export declare interface SearchIndexNestedFilter {
  path?: string;
  filter?: SearchIndexQuery;
}

export declare interface SearchIndexSorter {
  fieldSort?: {
    fieldName: string;
    order?: SortOrder;
    mode?: SortMode;
    nestedFilter?: SearchIndexNestedFilter;
  };
  geoDistanceSort?: {
    fieldName: string;
    points?: string[];
    order?: SortOrder;
    mode?: SortMode;
    distanceType?: GeoDistanceType;
    nestedFilter?: SearchIndexNestedFilter;
  };
  scoreSort?: {
    order?: SortOrder;
  };
  primaryKeySort?: {
    order?: SortOrder;
  };
}

export declare interface SearchIndexSchema {
  fieldSchemas?: SearchIndexFieldSchema[];
  indexSetting?: SearchIndexSetting;
  indexSort?: {
    sorters: SearchIndexSorter[];
  };
}

export declare interface CreateSearchIndexParams {
  tableName: string;
  indexName: string;
  schema: SearchIndexSchema;
}

export declare interface DeleteSearchIndexParams {
  tableName: string;
  indexName: string;
}

export declare interface SearchQuery {
  offset: number;
  limit: number;
  getTotalCount?: boolean;
  token?: string;
  sort?: {
    sorters: SearchIndexSorter[];
  };
}

export declare interface SearchParams {
  tableName: string;
  indexName: string;
  searchQuery: SearchQuery;
  columnToGet:
    | { returnType: ColumnReturnType.RETURN_SPECIFIED; returnNames: string[] }
    | { returnType: Exclude<ColumnReturnType, ColumnReturnType.RETURN_SPECIFIED> };
  routingValues?: PrimaryKey[][];
}

export declare interface CreateIndexParams {
  mainTableName: string;
  indexMeta: {
    name: string;
    primaryKey: string[];
    definedColumn: string[];
  };
}

export declare interface DropIndexParams {
  mainTableName: string;
  indexName: string;
}

export declare interface StartLocalTransactionParams {
  tableName: string;
  primaryKey: PrimaryKey[];
}

export declare type CommitTransactionParams = string | { transactionId: string };
export declare type AbortTransactionParams = string | { transactionId: string };
