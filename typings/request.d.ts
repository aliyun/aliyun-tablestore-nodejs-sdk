import { Domain } from 'domain';
import { TableStoreMap } from './client';
import Config from './config';
import { HttpRequest, HttpResponse } from './http';
import SequentialExecutor from './sequential_executor';

export declare class Respone<D = any> {
  request: Request;
  data: null | D;
  error: null | Error;
  retryCount: number;
  httpResponse: HttpResponse;
}

export declare class Request<T extends keyof TableStoreMap> extends SequentialExecutor {
  config: Config;
  domain: Domain;
  operation: T;
  params: TableStoreMap[T];
  httpRequest: HttpRequest;
  startTime: Date;
  response: Respone;
  restartCount: number;
  /**
   * Creates a request for an operation on a given service with
   * a set of input parameters.
   *
   * @param config the config to perform the operation on
   * @param operation the operation to perform on the service
   * @param params parameters to send to the operation.
   *   See the operation's documentation for the format of the
   *   parameters.
   */
  constructor(config: Config, operation: T, params?: TableStoreMap[T]);
}
