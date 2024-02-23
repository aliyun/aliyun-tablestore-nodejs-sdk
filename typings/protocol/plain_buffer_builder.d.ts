import { Int64LE } from 'int64-buffer';
import { EXTRA as ExtraMetadata, UpdateType } from '../metadata';

export declare type PrimaryKeyValue = Int64LE | string | Buffer;
export declare type ColumnValue = number | boolean | PrimaryKeyValue;
export declare type PrimaryKey = {
  [key: string]: PrimaryKeyValue | ExtraMetadata;
};
export declare type AttributeColumn = {
  [key: string]: ColumnValue;
  timestamp?: number;
};
export declare type UpdateColumn = {
  [key: UpdateType.DELETE_ALL]: string[];
  [key: Exclude<UpdateType, UpdateType.DELETE_ALL>]: AttributeColumn[];
};
export declare const computePrimaryKeyValueSize: (value: PrimaryKeyValue | ExtraMetadata) => number;
// export declare const computeVariantValueSize:typeof computePrimaryKeyValueSize;
export declare const computePrimaryKeyColumnSize: (
  pkName: string,
  pkValue: PrimaryKeyValue | ExtraMetadata,
) => number;
export declare const computeColumnValueSize: (value: ColumnValue) => number;
export declare const computeVariantValueSize: typeof computeColumnValueSize;
export declare const computeColumnSize: (
  columnName: string,
  columnValue: ColumnValue | null,
  timestamp?: number,
) => number;
export declare const computeUpdateColumnSize: (
  columnName: string,
  columnValue: ColumnValue | null,
  updateType?: UpdateType,
) => number;
export declare const computePrimaryKeySize: (primaryKeys: PrimaryKey[]) => number;
export declare const computePutRowSize: (
  primaryKeys: PrimaryKey[],
  attributeColumns?: AttributeColumn[],
) => number;
export declare const computeUpdateRowSize: (
  primaryKeys: PrimaryKey[],
  attributeColumns: UpdateColumn[],
) => number;
export declare const computeDeleteRowSize: typeof computePrimaryKeySize;
export declare const serializePrimaryKeyValue: (value: PrimaryKeyValue | ExtraMetadata) => Buffer;
export declare const serializeColumnValue: (value: ColumnValue) => Buffer;
export declare const serializePrimaryKey: (primaryKeys: PrimaryKey[]) => Buffer;
export declare const serializeForPutRow: (
  primaryKeys: PrimaryKey[],
  attributeColumns?: AttributeColumn[],
) => Buffer;
export declare const serializeForUpdateRow: (
  primaryKeys: PrimaryKey[],
  attributeColumns: UpdateColumn[],
) => Buffer;
export declare const serializeForDeleteRow: typeof serializePrimaryKey;
export declare const serializeSearchValue: (value: ColumnValue, field?: string) => Buffer;
