import Config, { TableStoreConfig } from './config';
import {
  CreateTableParams,
  ListTableParams,
  DeleteTableParams,
  UpdateTableParams,
  DescribeTableParams,
  GetRowParams,
  PutRowParams,
  UpdateRowParams,
  DeleteRowParams,
  GetRangeParams,
  BatchGetRowParams,
  BatchWriteRowParams,
  ListSearchIndexParams,
  DescribeSearchIndexParams,
  CreateSearchIndexParams,
  DeleteSearchIndexParams,
  SearchParams,
  CreateIndexParams,
  DropIndexParams,
  StartLocalTransactionParams,
  CommitTransactionParams,
  AbortTransactionParams,
} from './params';
import { Request } from './request';

export declare interface RequestCallback<R = any> {
  (err: Error | null, data: R | null): void;
}

export declare interface TableStoreMap {
  createTable: CreateTableParams;
  listTable: ListTableParams;
  deleteTable: DeleteTableParams;
  updateTable: UpdateTableParams;
  describeTable: DescribeTableParams;
  getRow: GetRowParams;
  putRow: PutRowParams;
  updateRow: UpdateRowParams;
  deleteRow: DeleteRowParams;
  getRange: GetRangeParams;
  batchGetRow: BatchGetRowParams;
  batchWriteRow: BatchWriteRowParams;
  listSearchIndex: ListSearchIndexParams;
  describeSearchIndex: DescribeSearchIndexParams;
  createSearchIndex: CreateSearchIndexParams;
  deleteSearchIndex: DeleteSearchIndexParams;
  search: SearchParams;
  createIndex: CreateIndexParams;
  dropIndex: DropIndexParams;
  startLocalTransaction: StartLocalTransactionParams;
  commitTransaction: CommitTransactionParams;
  abortTransaction: AbortTransactionParams;
}

declare class Client implements TableStoreMap {
  config: Config;
  constructor(config: TableStoreConfig);
  setupRequestListeners(request: any);
  populateURI(request: any): Request<T>;
  /**
   * Add header 'x-ots-apiversion' and 'x-ots-instancename'
   */
  populateHeader(request: any): Request<T>;
  /**
   * Encode `operation` and `params` to buffer and assign to `body`
   */
  buildContent(request: any): Request<T>;
  /**
   * Add md5 to header['x-ots-contentmd5']
   */
  computeContentMd5(request: any);

  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation the name of the operation to call on the service.
   * @param callback {(err: Error, data: R) => void}
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   */
  makeRequest<T extends keyof TableStoreMap, R = any>(
    operation: T,
    callback: RequestCallback<R>,
  ): Request<T>;
  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation the name of the operation to call on the service.
   * @param params {object} a map of input options for the operation
   * @param callback {(err: Error, data: R) => void}
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   */
  makeRequest<T extends keyof TableStoreMap, R = any>(
    operation: T,
    params: TableStoreMap[T],
    callback: RequestCallback<R>,
  ): Request<T>;
  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation the name of the operation to call on the service.
   * @param params {object} a map of input options for the operation
   */
  makeRequest<T extends keyof TableStoreMap, R = any>(
    operation: T,
    params: TableStoreMap[T],
  ): Promise<R>;

  /**********************************  表操作 开始 ******************************************/
  /**
   * 根据给定的表结构信息创建相应的表。
   */
  createTable<R = any>(params: CreateTableParams): Promise<R>;
  createTable<R = any>(
    params: CreateTableParams,
    callback: RequestCallback<R>,
  ): Request<'createTable'>;
  /**
   * 获取当前实例下已创建的所有表的表名。
   */
  listTable<R = any>(params: ListTableParams): Promise<R>;
  listTable<R = any>(params: ListTableParams, callback: RequestCallback<R>): Request<'listTable'>;
  /**
   * 删除本实例下指定的表。
   */
  deleteTable<R = any>(params: DeleteTableParams): Promise<R>;
  deleteTable<R = any>(
    params: DeleteTableParams,
    callback: RequestCallback<R>,
  ): Request<'deleteTable'>;
  /**
   * 更新指定表的预留读吞吐量或预留写吞吐量设置。
   */
  updateTable<R = any>(params: UpdateTableParams): Promise<R>;
  updateTable<R = any>(
    params: UpdateTableParams,
    callback: RequestCallback<R>,
  ): Request<'updateTable'>;
  /**
   * 查询指定表的结构信息和预留读/写吞吐量设置信息。
   */
  describeTable<R = any>(params: DescribeTableParams): Promise<R>;
  describeTable<R = any>(
    params: DescribeTableParams,
    callback: RequestCallback<R>,
  ): Request<'describeTable'>;

  /**********************************  表操作 结束 ******************************************/

  /**********************************  数据操作 开始 ******************************************/
  /**
   * 根据给定的主键读取单行数据。
   */
  getRow<R = any>(params: GetRowParams): Promise<R>;
  getRow<R = any>(params: GetRowParams, callback: RequestCallback<R>): Request<'getRow'>;
  /**
   * 插入数据到指定的行，如果该行不存在，则新增一行；若该行存在，则覆盖原有行。
   */
  putRow<R = any>(params: PutRowParams): Promise<R>;
  putRow<R = any>(params: PutRowParams, callback: RequestCallback<R>): Request<'putRow'>;
  /**
   * 更新指定行的数据。如果该行不存在，则新增一行；若该行存在，则根据请求的内容在这一行中新增、修改或者删除指定列的值。
   */
  updateRow<R = any>(params: UpdateRowParams): Promise<R>;
  updateRow<R = any>(params: UpdateRowParams, callback: RequestCallback<R>): Request<'updateRow'>;
  /**
   * 删除一行数据。
   */
  deleteRow<R = any>(params: DeleteRowParams): Promise<R>;
  deleteRow<R = any>(params: DeleteRowParams, callback: RequestCallback<R>): Request<'deleteRow'>;
  /**
   * 读取指定主键范围内的数据。
   */
  getRange<R = any>(params: GetRangeParams): Promise<R>;
  getRange<R = any>(params: GetRangeParams, callback: RequestCallback<R>): Request<'getRange'>;
  /**
   * 批量读取一个或多个表中的若干行数据。
   */
  batchGetRow<R = any>(params: BatchGetRowParams): Promise<R>;
  batchGetRow<R = any>(
    params: BatchGetRowParams,
    callback: RequestCallback<R>,
  ): Request<'batchGetRow'>;
  /**
   * 批量修改行
   */
  batchWriteRow<R = any>(params: BatchWriteRowParams): Promise<R>;
  batchWriteRow<R = any>(
    params: BatchWriteRowParams,
    callback: RequestCallback<R>,
  ): Request<'batchWriteRow'>;
  /**
   * 获取表下所有SearchIndex索引名。
   */
  listSearchIndex<R = any>(params: ListSearchIndexParams): Promise<R>;
  listSearchIndex<R = any>(
    params: ListSearchIndexParams,
    callback: RequestCallback<R>,
  ): Request<'listSearchIndex'>;
  /**
   * 获取SearchIndex索引描述信息。
   */
  describeSearchIndex<R = any>(params: DescribeSearchIndexParams): Promise<R>;
  describeSearchIndex<R = any>(
    params: DescribeSearchIndexParams,
    callback: RequestCallback<R>,
  ): Request<'describeSearchIndex'>;
  /**
   * SearchIndex创建新索引。
   */
  createSearchIndex<R = any>(params: CreateSearchIndexParams): Promise<R>;
  createSearchIndex<R = any>(
    params: CreateSearchIndexParams,
    callback: RequestCallback<R>,
  ): Request<'createSearchIndex'>;
  /**
   * SearchIndex删除索引。
   */
  deleteSearchIndex<R = any>(params: DeleteSearchIndexParams): Promise<R>;
  deleteSearchIndex<R = any>(
    params: DeleteSearchIndexParams,
    callback: RequestCallback<R>,
  ): Request<'deleteSearchIndex'>;
  /**
   * SearchIndex搜索。
   */
  search<R = any>(params: SearchParams): Promise<R>;
  search<R = any>(params: SearchParams, callback: RequestCallback<R>): Request<'search'>;
  /**
   * 创建GlobalIndex索引名。
   */
  createIndex<R = any>(params: CreateIndexParams): Promise<R>;
  createIndex<R = any>(
    params: CreateIndexParams,
    callback: RequestCallback<R>,
  ): Request<'createIndex'>;
  /**
   * 删除GlobalIndex索引名。
   */
  dropIndex<R = any>(params: DropIndexParams): Promise<R>;
  dropIndex<R = any>(params: DropIndexParams, callback: RequestCallback<R>): Request<'dropIndex'>;
  /**
   * 创建局部事务
   */
  startLocalTransaction<R = any>(params: StartLocalTransactionParams): Promise<R>;
  startLocalTransaction<R = any>(
    params: StartLocalTransactionParams,
    callback: RequestCallback<R>,
  ): Request<'startLocalTransactio'>;
  /**
   * 提交事务
   */
  commitTransaction<R = any>(params: CommitTransactionParams): Promise<R>;
  commitTransaction<R = any>(
    params: CommitTransactionParams,
    callback: RequestCallback<R>,
  ): Request<'commitTransaction'>;
  /**
   * 丢弃事务
   */
  abortTransaction<R = any>(params: AbortTransactionParams): Promise<R>;
  abortTransaction<R = any>(
    params: AbortTransactionParams,
    callback: RequestCallback<R>,
  ): Request<'abortTransaction'>;
}

export default Client;
