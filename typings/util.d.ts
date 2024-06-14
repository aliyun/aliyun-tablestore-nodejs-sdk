import { HexBase64Latin1Encoding } from 'crypto';
import { Int64LE } from 'int64-buffer';
import { Url, URL } from 'url';

export declare const engine: () => string;
export declare const userAgent: () => string;
export declare const isBrowser: () => boolean;
export declare const isNode: () => boolean;
export declare const nodeRequire: (id: string) => any;
export declare const topEscape: (clearString: string) => string;
export declare const popEscape: (clearString: string) => string;
export declare const uriEscape: (uriEscape: string) => string;
export declare const uriEscapePath: (uri: string) => string;
export declare const urlParse: (url: string) => Url;
export declare const urlFormat: (url: URL) => string;
export declare const uuid: () => string;
export declare const queryParamsToString: (param: object) => string;
export declare const readFileSync: (path: string) => string;
export declare const base64: { encode: (data: string) => string; decode: (data: string) => string };
export { Buffer };
export declare const buffer: { concat: (buffers: Buffer[]) => Buffer };
export declare const Int64: { doubleToRawLongBits: (num: number) => Int64LE };
// tslint:disable-next-line
export declare const string: {
  byteLength: (str: string) => number;
  upperFirst: (str: string) => string;
  lowerFirst: (str: string) => string;
};
export declare const date: {
  getDate: () => Date;
  top: (date: Date, format: string = '%Y-%M-%dT%H:%m:%sZ') => string;
  iso8601: (date?: Date) => string;
  rfc822: (date?: Date) => string;
  unixSeconds: (date?: Date) => number;
  unixMilliseconds: (date?: Date) => number;
  from: (date: string | number | Date) => Date;
  format: <F extends 'top' | 'iso8601' | 'rfc822' | 'unixSeconds' | 'unixMilliseconds'>(
    date: string | number | Date,
    formatter: F = 'unixSeconds',
  ) => F extends 'unixSeconds' | 'unixMilliseconds' ? number : string;
};
export declare const crypto: {
  crc32Table: number[];
  crc32: (data: string | Buffer | ArrayBuffer) => number;
  hmac: (
    key: string | Buffer | ArrayBuffer,
    data: string | Buffer | ArrayBuffer,
    encoding: string = 'binary',
    algorithm: string = 'sha256',
  ) => string;
  md5: (data, encoding: string = 'binary') => string;
  sha256: (data, encoding: string = 'binary') => string;
  toHex: (data: string) => string;
  createHash: (algorithm: string) => string;
};
export declare const abort: {};
export declare const each: <T extends object>(
  obj: T,
  callback: <K extends keyof T>(key: K, value: T[K]) => void | typeof abort,
) => void;
export declare const arrayEach: <A extends any[]>(
  array: A,
  callback: <T = any>(value: T, index: number) => void | typeof abort,
) => void;
export declare const update: <T extends object, U extends object>(obj: T, update: U) => T & U;
export declare const merge: <T extends object, U extends object>(obj: T, update: U) => T & U;
export declare const copy: <T extends object>(obj?: T) => T;
export declare const isEmpty: (obj: object) => boolean;
export declare const isType: (data: any, type: any) => boolean;
export declare const typeName: (instance: any) => string;
export declare const error: (err: Error, update: string | object) => Error;
