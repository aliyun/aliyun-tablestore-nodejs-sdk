// Type definitions for tablestore 5.0
// Project: https://github.com/aliyun/aliyun-tablestore-nodejs-sdk
// Definitions by: Carter Jack Feldman <https://github.com/cf>
// TypeScript Version: 4.2

import Int64buf from 'int64-buffer';
import { Buffer } from 'buffer';

declare namespace TableStore {
  
  type ResponseDocumentType = IResponseDocumentType;
  
  interface IResponseDocumentType {
    consumed: {capacityUnit: ICapacityUnit};
    primaryKey: {name: string, value: PrimaryKeyReturnValue}[];
    attributes: {columnName: string, columnValue: ColumnAttributeValue, timestamp: TLong}[];
  }
  
  type TLong = Int64buf.Int64LE;
  type TSearchValue = number | string | boolean | TLong;
  
  interface TableStoreAPIResponseBase {
    RequestId: string;
  }

  enum PrimaryKeyType {
    INTEGER = 1,
    STRING = 2,
    BINARY = 3,
  }

  enum DefinedColumnType {
    DCT_INTEGER = 1,
    DCT_DOUBLE = 2,
    DCT_BOOLEAN = 3,
    DCT_STRING = 4,
    DCT_DATE = 5,
    DCT_DECIMAL = 6,
    DCT_BLOB = 7,
  }

  enum PrimaryKeyOption {
    AUTO_INCREMENT = 1,
  }

  enum DBloomFilterType {
    NONE = 1,
    CELL = 2,
    ROW = 3,
  }

  enum DDataBlockType {
    DBT_PLAIN_BUFFER = 0,
    DBT_SIMPLE_ROW_MATRIX = 1,
  }

  enum DCompressType {
    CPT_NONE = 0,
  }

  enum IndexUpdateMode {
    IUM_ASYNC_INDEX = 0,
    IUM_SYNC_INDEX = 1,
  }

  enum IndexType {
    IT_GLOBAL_INDEX = 0,
    IT_LOCAL_INDEX = 1,
  }

  enum DTableStatus {
    ACTIVE = 1,
    INACTIVE = 2,
    LOADING = 3,
    UNLOADING = 4,
    UPDATING = 5,
  }

  enum ReturnType {
    NONE = 0,
    Primarykey = 1,
    AfterModify = 2,
  }

  enum Direction {
    FORWARD = 'FORWARD',
    BACKWARD = 'BACKWARD',
  }

  interface IPrimaryKeySchema {
    name: string;
    type: PrimaryKeyType;
    option?: PrimaryKeyOption;
  }

  interface IPrimaryKeySchemaInput {
    name: string;
    type: PrimaryKeyType | 'INTEGER' | 'STRING' | 'BINARY';
    option?: PrimaryKeyOption;
  }

  interface IDefinedColumnSchema {
    name: string;
    type: DefinedColumnType;
  }

  interface ITableOptions {
    timeToLive?: number;
    maxVersions?: number;
    bloomFilterType?: DBloomFilterType;
    blockSize?: number;
    deviationCellVersionInSec?: number;
  }

  interface IIndexMeta {
    name: string;
    primaryKey: string[];
    definedColumn: string[];
    indexUpdateMode: IndexUpdateMode;
    indexType: IndexType;
  }

  interface ITableMeta {
    tableName: string;
    primaryKey: IPrimaryKeySchema[];
    definedColumn: IDefinedColumnSchema[];
    indexMeta: IIndexMeta[];
  }

  interface ICapacityUnit {
    read?: number;
    write?: number;
  }

  interface IReservedThroughputDetails {
    capacityUnit: ICapacityUnit;
    lastIncreaseTime: TLong;
    lastDecreaseTime?: TLong;
  }

  interface IReservedThroughput {
    capacityUnit: ICapacityUnit;
  }

  interface IConsumedCapacity {
    capacityUnit: ICapacityUnit;
  }

  interface IStreamSpecification {
    enableStream: boolean;
    expirationTime?: number;
  }

  interface IStreamDetails {
    enableStream: boolean;
    streamId?: string;
    expirationTime?: number;
    lastEnableTime?: TLong;
  }

  interface ITimeRange {
    startTime?: TLong;
    endTime?: TLong;
    specificTime?: TLong;
  }

  interface ITableIndexMetaInput {
    name: string;
    primaryKey: string[];
    definedColumn: string[];
    indexUpdateMode?: IndexUpdateMode;
    indexType?: IndexType;
  }

  interface ITableMetaInput {
    tableName: string;
    primaryKey: IPrimaryKeySchemaInput[];
    definedColumn?: IDefinedColumnSchema[];
  }

  enum QueryType {
    MATCH_QUERY = 1,
    MATCH_PHRASE_QUERY = 2,
    TERM_QUERY = 3,
    RANGE_QUERY = 4,
    PREFIX_QUERY = 5,
    BOOL_QUERY = 6,
    CONST_SCORE_QUERY = 7,
    FUNCTION_SCORE_QUERY = 8,
    NESTED_QUERY = 9,
    WILDCARD_QUERY = 10,
    MATCH_ALL_QUERY = 11,
    GEO_BOUNDING_BOX_QUERY = 12,
    GEO_DISTANCE_QUERY = 13,
    GEO_POLYGON_QUERY = 14,
    TERMS_QUERY = 15,
    EXISTS_QUERY = 16,
  }

  enum QueryOperator {
    OR = 1,
    AND = 2,
  }

  enum ScoreMode {
    SCORE_MODE_NONE = 1,
    SCORE_MODE_AVG = 2,
    SCORE_MODE_MAX = 3,
    SCORE_MODE_TOTAL = 4,
    SCORE_MODE_MIN = 5,
  }

  enum SortOrder {
    SORT_ORDER_ASC = 0,
    SORT_ORDER_DESC = 1,
  }

  enum SortMode {
    SORT_MODE_MIN = 0,
    SORT_MODE_MAX = 1,
    SORT_MODE_AVG = 2,
  }

  enum GeoDistanceType {
    GEO_DISTANCE_ARC = 0,
    GEO_DISTANCE_PLANE = 1,
  }

  enum ColumnReturnType {
    RETURN_ALL = 1,
    RETURN_SPECIFIED = 2,
    RETURN_NONE = 3,
  }

  enum IndexOptions {
    DOCS = 1,
    FREQS = 2,
    POSITIONS = 3,
    OFFSETS = 4,
  }

  enum FieldType {
    LONG = 1,
    DOUBLE = 2,
    BOOLEAN = 3,
    KEYWORD = 4,
    TEXT = 5,
    NESTED = 6,
    GEO_POINT = 7,
  }

  enum DSyncPhase {
    FULL = 1,
    INCR = 2,
  }

  interface IMatchQuery {
    fieldName?: string;
    text?: string;
    minimumShouldMatch?: number;
    operator?: QueryOperator;
  }

  interface IMatchPhraseQuery {
    fieldName?: string;
    text?: string;
  }

  interface IPrefixQuery {
    fieldName?: string;
    prefix?: string;
  }

  interface IWildcardQuery {
    fieldName?: string;
    value?: string;
  }

  interface IFieldValueFactor {
    fieldName?: string;
  }

  interface IGeoBoundingBoxQuery {
    fieldName?: string;
    topLeft?: string;
    bottomRight?: string;
  }

  interface IGeoDistanceQuery {
    fieldName?: string;
    centerPoint?: string;
    distance?: number;
  }

  interface IGeoPolygonQuery {
    fieldName?: string;
    points: string[];
  }

  interface IExistsQuery {
    fieldName?: string;
  }

  interface IScoreSort {
    order?: SortOrder;
  }

  interface IFieldSort {
    fieldName?: string;
    order?: SortOrder;
    mode?: SortMode;
    nestedFilter?: INestedFilterInput;
  }

  interface IGeoDistanceSort {
    fieldName?: string;
    points: string[];
    order?: SortOrder;
    mode?: SortMode;
    distanceType?: GeoDistanceType;
    nestedFilter?: INestedFilterInput;
  }

  interface IPrimaryKeySort {
    order?: SortOrder;
  }

  interface ISorter {
    fieldSort?: IFieldSort;
    geoDistanceSort?: IGeoDistanceSort;
    scoreSort?: IScoreSort;
    pkSort?: IPrimaryKeySort;
  }

  interface ISort {
    sorter: ISorter[];
  }

  interface IFieldSchema {
    fieldName?: string;
    fieldType?: FieldType;
    indexOptions?: IndexOptions;
    analyzer?: string;
    index?: boolean;
    docValues?: boolean;
    store?: boolean;
    fieldSchemas: IFieldSchema[];
    isArray?: boolean;
  }

  interface IIndexSchema {
    fieldSchemas: IFieldSchema[];
    indexSetting?: IIndexSetting;
    indexSort?: ISort;
  }

  interface IIndexSetting {
    numberOfShards?: number;
    routingFields: string[];
    routingPartitionSize?: number;
  }

  interface IIndexInfo {
    tableName?: string;
    indexName?: string;
  }

  interface ISyncStat {
    syncPhase?: DSyncPhase;
    currentSyncTimestamp?: TLong;
  }

  interface IReturnContentInput {
    returnType?: ReturnType;
    returnColumns?: string[];
  }

  interface ICreateTableInput {
    tableMeta: ITableMetaInput;
    reservedThroughput: IReservedThroughput;
    tableOptions: ITableOptions;
    streamSpecification?: IStreamSpecification;
    indexMetas?: ITableIndexMetaInput[];
  }

  interface IListTableOutput extends TableStoreAPIResponseBase {
    tableNames: string[];
  }

  interface IDeleteTableInput {
    tableName: string;
  }

  interface IUpdateTableInput {
    tableName: string;
    reservedThroughput?: IReservedThroughput;
    tableOptions?: ITableOptions;
    streamSpecification?: IStreamSpecification;
  }

  interface IUpdateTableOutput extends TableStoreAPIResponseBase {
    reservedThroughputDetails: IReservedThroughputDetails;
    tableOptions: ITableOptions;
    streamDetails?: IStreamDetails;
  }

  interface IDescribeTableInput {
    tableName: string;
  }

  interface IDescribeTableOutput extends TableStoreAPIResponseBase {
    tableMeta: ITableMeta;
    reservedThroughputDetails: IReservedThroughputDetails;
    tableOptions: ITableOptions;
    tableStatus: DTableStatus;
    streamDetails?: IStreamDetails;
    shardSplits: Buffer[];
    indexMetas: IIndexMeta[];
  }

  interface IGetRowInput {
    tableName: string;
    columnFilter?: TColumnCondition; //Tablestore.ColumnCondition
    primaryKey?: IPrimaryKeyParam;
    columnsToGet?: string[];
    maxVersions?: number;
    timeRange?: ITimeRange;
    startColumn?: string;
    endColumn?: string;
    transactionId?: string;
  }

  interface IGetRowOutput extends TableStoreAPIResponseBase {
    consumed: IConsumedCapacity;
    row: ResponseDocumentType;
    nextToken?: Buffer;
  }

  interface IPutRowInput {
    tableName: string;
    condition?: Condition;
    primaryKey: IPrimaryKeyParam;
    attributeColumns?: IColumnParam;
    returnContent?: IReturnContentInput;
    transactionId?: string;
  }

  interface IPutRowOutput extends TableStoreAPIResponseBase {
    consumed: IConsumedCapacity;
    row?: ResponseDocumentType;
  }
  
  interface IUpdateAttributeColumn {
    [UpdateType.DELETE_ALL]?: string[];
    [UpdateType.DELETE]?: {[key: string]: TLong}[];
    [UpdateType.PUT]?: IColumnParam;
    [UpdateType.INCREMENT]?: IColumnIncrementParam;
  }

  interface IUpdateRowInput {
    tableName: string;
    condition?: Condition;
    primaryKey: IPrimaryKeyParam;
    updateOfAttributeColumns: IUpdateAttributeColumn[];
    returnContent?: IReturnContentInput;
  }

  interface IUpdateRowOutput extends TableStoreAPIResponseBase {
    consumed: IConsumedCapacity;
    row?: ResponseDocumentType;
  }

  interface IDeleteRowInput {
    tableName: string;
    primaryKey: IPrimaryKeyParam;
    condition?: Condition;
    returnContent?: IReturnContentInput;
    transactionId?: string;
  }

  interface IDeleteRowOutput extends TableStoreAPIResponseBase {
    consumed: IConsumedCapacity;
    row?: ResponseDocumentType;
  }

  interface IGetRangeInput {
    tableName: string;
    direction: Direction,
    columnsToGet?: string[];
    maxVersions?: number;
    limit?: number;
    inclusiveStartPrimaryKey: IPrimaryKeyParam;
    exclusiveEndPrimaryKey: IPrimaryKeyParam;
    columnFilter?: TColumnCondition;
    timeRange?: ITimeRange;
    startColumn?: string;
    endColumn?: string;
    transactionId?: string;
  }

  interface IGetRangeOutput extends TableStoreAPIResponseBase {
    consumed: IConsumedCapacity;
    rows: ResponseDocumentType[];
    nextStartPrimaryKey?: {name: string, value: PrimaryKeyValue}[];
    nextToken?: Buffer;
    dataBlockType?: DDataBlockType;
    compressType?: DCompressType;
  }

  interface IBatchGetRowInputTable {
    tableName: string;
    primaryKey: IPrimaryKeyParam[];
    columnsToGet: string[];
    timeRange?: ITimeRange;
    maxVersions?: number;
    columnFilter?: TColumnCondition;
    startColumn?: string;
    endColumn?: string;
  }

  interface IBatchGetRowInput {
    tables: IBatchGetRowInputTable[];
    transactionId?: string;
  }

  interface IBatchGetRowOutputTable {
    isOk: boolean;
    errorCode?: string;
    errorMessage?: string;
    tableName: string;
    capacityUnit: ICapacityUnit;
    primaryKey?: IPrimaryKeyParam,
    attributes?: IColumnParam[];
  }

  interface IBatchGetRowOutput extends TableStoreAPIResponseBase {
    tables: IBatchGetRowOutputTable[][];
  }

  enum UpdateType {
    PUT = 'PUT',
    DELETE = 'DELETE',
    DELETE_ALL = 'DELETE_ALL',
    INCREMENT = 'INCREMENT',
  }

  interface IINF_MIN {
    INF_MIN?: "INF_MIN";
  }

  interface IINF_MAX {
    INF_MAX?: "INF_MAX";
  }

  interface IPK_AUTO_INCR {
    PK_AUTO_INCR?: "PK_AUTO_INCR";
  }

  const INF_MIN: IINF_MIN;
  const INF_MAX: IINF_MAX;
  const PK_AUTO_INCR: IPK_AUTO_INCR;

  interface IBatchUpdateRowTPut {
    type: 'PUT';
    condition?: Condition;
    primaryKey: IPrimaryKeyParam;
    attributeColumns?: IColumnParam;
    returnContent?: IReturnContentInput;
  }

  interface IBatchUpdateRowTUpdate {
    type: 'UPDATE';
    condition?: Condition;
    primaryKey: IPrimaryKeyParam;
    attributeColumns?: IUpdateAttributeColumn[];
    returnContent?: IReturnContentInput;
  }

  interface IBatchUpdateRowTDelete {
    type: 'DELETE';
    condition?: Condition;
    primaryKey: IPrimaryKeyParam;
    returnContent?: IReturnContentInput;
  }

  type IBatchUpdateRowItemInput = IBatchUpdateRowTPut | IBatchUpdateRowTUpdate | IBatchUpdateRowTDelete;

  interface ITableInBatchWriteRowInput {
    tableName: string;
    rows: IBatchUpdateRowItemInput[];
  }

  interface IBatchWriteRowInput {
    tables: ITableInBatchWriteRowInput[];
    transactionId?: string;
  }

  interface IBatchWriteRowOutputRow {
    isOk: boolean;
    errorCode?: string;
    errorMessage?: string;
    tableName: string;
    capacityUnit: ICapacityUnit;
    primaryKey?: IPrimaryKeyParam,
    attributes?: IColumnParam[];
  }

  interface IBatchWriteRowOutput extends TableStoreAPIResponseBase {
    tables: IBatchWriteRowOutputRow[];
  }

  interface IListSearchIndexInput {
    tableName?: string;
  }

  interface IListSearchIndexOutput extends TableStoreAPIResponseBase {
    indices: IIndexInfo[];
  }

  interface IDescribeSearchIndexInput {
    tableName?: string;
    indexName?: string;
  }

  interface IDescribeSearchIndexOutput extends TableStoreAPIResponseBase {
    schema?: IIndexSchema;
    syncStat?: ISyncStat;
  }

  interface ITermQueryInput {
    fieldName?: string;
    term: TSearchValue;
  }

  interface ITermsQueryInput {
    fieldName?: string;
    terms: TSearchValue[];
  }

  interface IRangeQueryInput {
    fieldName?: string;
    rangeFrom?: TSearchValue;
    rangeTo?: TSearchValue;
    includeLower?: boolean;
    includeUpper?: boolean;
  }

  interface IBoolQueryInput {
    mustQueries?: IQueryInput[];
    mustNotQueries?: IQueryInput[];
    filterQueries?: IQueryInput[];
    shouldQueries?: IQueryInput[];
    minimumShouldMatch?: number;
  }

  interface IConstScoreQueryInput {
    filter: IQueryInput;
  }

  interface IFunctionScoreQueryInput {
    query?: IQueryInput;
    fieldValueFactor?: IFieldValueFactor;
  }

  interface INestedQueryInput {
    path?: string;
    query?: IQueryInput;
    scoreMode?: ScoreMode;
  }

  interface IMatchAllQueryInput {
    none?: "none";
  }

  type IQueryInputType = IMatchQuery | IMatchPhraseQuery | ITermQueryInput | ITermsQueryInput | IRangeQueryInput | IPrefixQuery | IWildcardQuery | IMatchAllQueryInput | IBoolQueryInput | IConstScoreQueryInput | IFunctionScoreQueryInput | INestedQueryInput | IGeoBoundingBoxQuery | IGeoDistanceQuery | IGeoPolygonQuery | IExistsQuery;

  interface IQueryInput {
    type?: QueryType;
    query?: IQueryInputType;
  }

  interface INestedFilterInput {
    path?: string;
    filter?: IQueryInput;
  }

  interface IFieldSortInput {
    fieldName?: string;
    order?: SortOrder;
    mode?: SortMode;
    nestedFilter?: INestedFilterInput;
  }

  interface IGeoDistanceSortInput {
    fieldName?: string;
    points: string[];
    order?: SortOrder;
    mode?: SortMode;
    distanceType?: GeoDistanceType;
    nestedFilter?: INestedFilterInput;
  }

  interface ISorterInput {
    fieldSort?: IFieldSortInput;
    geoDistanceSort?: IGeoDistanceSortInput;
    scoreSort?: IScoreSort;
    primaryKeySort?: IPrimaryKeySort;
  }

  interface ISortInput {
    sorters: ISorterInput[];
  }

  interface IFieldSchemaInput {
    fieldName?: string;
    fieldType?: FieldType;
    indexOptions?: IndexOptions;
    analyzer?: string;
    index?: boolean;
    enableSortAndAgg?: boolean;
    store?: boolean;
    fieldSchemas: IFieldSchemaInput[];
    isAnArray?: boolean;
  }

  interface IIndexSchemaInput {
    fieldSchemas: IFieldSchemaInput[];
    indexSetting: IIndexSetting;
    indexSort: ISortInput;

  }

  interface ICreateSearchIndexInput {
    tableName: string;
    indexName: string;
    schema?: IIndexSchemaInput;
  }

  interface IDeleteSearchIndexInput {
    tableName?: string;
    indexName?: string;
  }


  interface ICollapseInput {
    fieldName?: string;
  }

  interface IColumnToGetInput {
    returnType: ColumnReturnType,
    returnNames: string[];
  }

  interface ISearchQueryInput {
    offset?: number;
    limit?: number;
    query?: IQueryInput;
    collapse?: ICollapseInput;
    sort?: ISortInput;
    getTotalCount?: boolean;
    token?: Buffer;
  }

  interface ISearchInput {
    tableName?: string;
    indexName?: string;
    columnToGet?: IColumnToGetInput[];
    searchQuery?: ISearchQueryInput;
    routingValues?: IPrimaryKeyParam[];
  }

  interface ISearchOutput extends TableStoreAPIResponseBase {
    totalHits?: TLong;
    rows: ResponseDocumentType[];
    isAllSucceeded?: boolean;
    nextToken?: Buffer;
  }

  interface ICreateIndexInput {
    mainTableName: string;
    indexMeta: IIndexMeta;
  }

  interface IDropIndexInput {
    mainTableName: string;
    indexName: string;
  }

  interface IStartLocalTransactionInput {
    tableName: string;
    primaryKey: IPrimaryKeyParam;
  }

  interface IStartLocalTransactionOutput extends TableStoreAPIResponseBase {
    transactionId: string;
  }

  interface ICommitTransactionInput {
    transactionId: string;
  }


  interface IAbortTransactionInput {
    transactionId: string;
  }

  interface ITableStoreLoggerLog {
    log(message: string): void;
    isTTY?: boolean;
  }

  interface ITableStoreLoggerWrite {
    write(message: string): void;
    isTTY?: boolean;
  }

  interface ITableStoreClientConfig {
    accessKeyId?: string | null;
    secretAccessKey?: string | null;
    accessKeySecret?: string | null;
    stsToken?: string | null;
    securityToken?: string | null;
    logger?: ITableStoreLoggerLog | ITableStoreLoggerWrite;
    endpoint?: string;
    httpOptions?: {
      timeout?: number;
      maxSockets?: number;
      agent?: any; // http.Agent, defined as "any" for browser support
    };
    maxRetries?: number;
    instancename?: string;
    computeChecksums?: boolean;
  }

  export class Client {
    constructor(config: ITableStoreClientConfig);

    createTable(params: ICreateTableInput): Promise<TableStoreAPIResponseBase>;
    createTable(params: ICreateTableInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    listTable(): Promise<IListTableOutput>;
    listTable(callback: (error?: Error, result?: IListTableOutput) => void): void;
    deleteTable(params: IDeleteTableInput): Promise<TableStoreAPIResponseBase>;
    deleteTable(params: IDeleteTableInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    updateTable(params: IUpdateTableInput): Promise<IUpdateTableOutput>;
    updateTable(params: IUpdateTableInput, callback: (error?: Error, result?: IUpdateTableOutput) => void): void;
    describeTable(params: IDescribeTableInput): Promise<IDescribeTableOutput>;
    describeTable(params: IDescribeTableInput, callback: (error?: Error, result?: IDescribeTableOutput) => void): void;
    getRow(params: IGetRowInput): Promise<IGetRowOutput>;
    getRow(params: IGetRowInput, callback: (error?: Error, result?: IGetRowOutput) => void): void;
    putRow(params: IPutRowInput): Promise<IPutRowOutput>;
    putRow(params: IPutRowInput, callback: (error?: Error, result?: IPutRowOutput) => void): void;
    updateRow(params: IUpdateRowInput): Promise<IUpdateRowOutput>;
    updateRow(params: IUpdateRowInput, callback: (error?: Error, result?: IUpdateRowOutput) => void): void;
    deleteRow(params: IDeleteRowInput): Promise<IDeleteRowOutput>;
    deleteRow(params: IDeleteRowInput, callback: (error?: Error, result?: IDeleteRowOutput) => void): void;
    getRange(params: IGetRangeInput): Promise<IGetRangeOutput>;
    getRange(params: IGetRangeInput, callback: (error?: Error, result?: IGetRangeOutput) => void): void;
    batchGetRow(params: IBatchGetRowInput): Promise<IBatchGetRowOutput>;
    batchGetRow(params: IBatchGetRowInput, callback: (error?: Error, result?: IBatchGetRowOutput) => void): void;
    batchWriteRow(params: IBatchWriteRowInput): Promise<IBatchWriteRowOutput>;
    batchWriteRow(params: IBatchWriteRowInput, callback: (error?: Error, result?: IBatchWriteRowOutput) => void): void;
    listSearchIndex(params: IListSearchIndexInput): Promise<IListSearchIndexOutput>;
    listSearchIndex(params: IListSearchIndexInput, callback: (error?: Error, result?: IListSearchIndexOutput) => void): void;
    describeSearchIndex(params: IDescribeSearchIndexInput): Promise<IDescribeSearchIndexOutput>;
    describeSearchIndex(params: IDescribeSearchIndexInput, callback: (error?: Error, result?: IDescribeSearchIndexOutput) => void): void;
    createSearchIndex(params: ICreateSearchIndexInput): Promise<TableStoreAPIResponseBase>;
    createSearchIndex(params: ICreateSearchIndexInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    deleteSearchIndex(params: IDeleteSearchIndexInput): Promise<TableStoreAPIResponseBase>;
    deleteSearchIndex(params: IDeleteSearchIndexInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    search(params: ISearchInput): Promise<ISearchOutput>;
    search(params: ISearchInput, callback: (error?: Error, result?: ISearchOutput) => void): void;
    createIndex(params: ICreateIndexInput): Promise<TableStoreAPIResponseBase>;
    createIndex(params: ICreateIndexInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    dropIndex(params: IDropIndexInput): Promise<TableStoreAPIResponseBase>;
    dropIndex(params: IDropIndexInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    startLocalTransaction(params: IStartLocalTransactionInput): Promise<IStartLocalTransactionOutput>;
    startLocalTransaction(params: IStartLocalTransactionInput, callback: (error?: Error, result?: IStartLocalTransactionOutput) => void): void;
    commitTransaction(params: ICommitTransactionInput): Promise<TableStoreAPIResponseBase>;
    commitTransaction(params: ICommitTransactionInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;
    abortTransaction(params: IAbortTransactionInput): Promise<TableStoreAPIResponseBase>;
    abortTransaction(params: IAbortTransactionInput, callback: (error?: Error, result?: TableStoreAPIResponseBase) => void): void;


    


  }

  type PrimaryKeyReturnValue =  Int64buf.Int64LE | string | Buffer;
  type PrimaryKeyValue = PrimaryKeyReturnValue | IINF_MIN | IINF_MAX | IPK_AUTO_INCR;
  
  type ColumnAttributeValue = Int64buf.Int64LE | string | Buffer | boolean | number;

  type IPrimaryKeyBaseInner = {[key: string]: PrimaryKeyValue};
  type IPrimaryKeyParam = IPrimaryKeyBaseInner[];
  
  interface IColumnBaseInner {
    [key: string]: ColumnAttributeValue;
    timestamp?: number;
  }
  interface IColumnIncrementBasePropsNoTimestamp {
    [key: string]: TLong;
  }
  interface IColumnIncrementBaseInnerPropsWithTimestamp {
    [key: string]: TLong | number;
    timestamp: number;
  }
  
  type IColumnIncrementBaseInner = IColumnIncrementBasePropsNoTimestamp | IColumnIncrementBaseInnerPropsWithTimestamp;

  
  type IColumnParam = IColumnBaseInner[];
  type IColumnIncrementParam = IColumnIncrementBaseInner[];

  
  interface ITableStoreLongUtils {
    fromNumber: (value?: number | Buffer | Uint8Array | ArrayBuffer | number[]) => TLong;
    fromString: (value: string) => TLong;
    toBuffer: () => Buffer;
    toNumber: () => number;
    int64?: TLong;
  }

  const Long : ITableStoreLongUtils;
  
  enum DFilterType {
    FT_SINGLE_COLUMN_VALUE = 1,
    FT_COMPOSITE_COLUMN_VALUE = 2,
    FT_COLUMN_PAGINATION = 3,
  }
  enum ColumnTColumnCondition {
    COMPOSITE_COLUMN_CONDITION = 0,
    SINGLE_COLUMN_CONDITION = 1,
  }

  enum ComparatorType {
    EQUAL = 1,
    NOT_EQUAL = 2,
    GREATER_THAN = 3,
    GREATER_EQUAL = 4,
    LESS_THAN = 5,
    LESS_EQUAL = 6,
  }
  enum RowExistenceExpectation {
    IGNORE = 0,
    EXPECT_EXIST = 1,
    EXPECT_NOT_EXIST = 2
  }

  enum LogicalOperator {
    NOT = 1,
    AND = 2,
    OR = 3,
  }

  class ColumnCondition {
    getType(): DFilterType;

  }

  class CompositeCondition extends ColumnCondition{
    constructor(combinator: LogicalOperator);
    getType(): DFilterType.FT_COMPOSITE_COLUMN_VALUE;
    setCombinator(combinator: LogicalOperator): void;
    getCombinator(): LogicalOperator;
    addSubCondition(condition: ColumnCondition): void;
    clearSubCondition(): void; 
  }

  class SingleColumnCondition extends ColumnCondition {
    constructor (columnName: string, columnValue: ColumnAttributeValue, comparator: LogicalOperator, passIfMissing?: boolean, latestVersionOnly?: boolean);
    getType(): DFilterType.FT_SINGLE_COLUMN_VALUE;

    setPassIfMissing(passIfMissing: boolean): void;
    getPassIfMissing(): boolean;

    setLatestVersionOnly(latestVersionOnly: boolean): void;
    getLatestVersionOnly(): boolean;

    setColumnName(columnName: string): void;
    getColumnName(): string;


    setColumnValue(columnValue: ColumnAttributeValue): void;
    getColumnValue(): ColumnAttributeValue;
    
    setComparator(comparator: ComparatorType): void;
    getComparator(): ComparatorType;
  }
  class Condition {
    constructor(rowExistenceExpectation: RowExistenceExpectation, columnCondition?: ColumnCondition);

    setRowExistenceExpectation(rowExistenceExpectation: RowExistenceExpectation): void;
    getRowExistenceExpectation(): RowExistenceExpectation;
    
    setColumnCondition(condition: ColumnCondition): void;
    getColumnCondition(): ColumnCondition; 
  }

  class ColumnPaginationFilter extends ColumnCondition {
    constructor(limit?: number, offset?: number);

    getType(): DFilterType.FT_COLUMN_PAGINATION;
  }

  type TColumnCondition = CompositeCondition | SingleColumnCondition | ColumnPaginationFilter;
}

export = TableStore;