import { Url } from 'url';

export declare class Endpoint {
  host?: string;
  hostname?: string;
  href?: string;
  path?: string;
  pathname?: string;
  protocol?: string;
  port?: number;
  constructor(endpoint: string);
}

export declare class HttpRequest {
  method: string;
  path: string;
  headers: { [key: string]: string };
  body: string | Buffer | ArrayBuffer;
  endpoint: Endpoint;
  region: string;
  constructor(endpoint: Endpoint, region: string);
  pathname(): string;
  search(): string;
  debug(): void;
}

export declare class HttpResponse {
  statusCode?: number;
  headers: { [key: string]: string };
  body?: string | Buffer | ArrayBuffer;
}

/**
 * singleton
 */
export declare class HttpClient {
  static getInstance(): HttpClient;
}
