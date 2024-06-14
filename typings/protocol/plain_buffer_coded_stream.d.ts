import { Int64LE } from 'int64-buffer';
import {
  AttributeColumn,
  ColumnValue,
  PrimaryKey,
  PrimaryKeyValue,
  UpdateColumn,
} from './plain_buffer_builder';
import { PlainBufferInputStream, PlainBufferOutputStream } from './plain_buffer_stream';
import { EXTRA as ExtraMetadata, UpdateType } from '../metadata';

export declare class PlainBufferCodedInputStream {
  inputStream: PlainBufferInputStream;
  constructor(inputStream: PlainBufferInputStream);
  readTag(): number;
  checkLastTagWas(tag: number): boolean;
  getLastTag(): number;
  readHeader(): number;
  readPrimaryKeyValue(cellCheckSum: number): { pkVal: PrimaryKeyValue; cellCheckSum: number };
  readColumnValue(cellCheckSum: number): { columnVal: ColumnValue; cellCheckSum: number };
  readPrimaryKeyColumn(
    rowCheckSum: number,
  ): {
    columnName: string;
    primaryKeyValue: PrimaryKeyValue;
    rowCheckSum: number;
  };
  readColumn(
    rowCheckSum: number,
  ): {
    columnName: string;
    columnValue: ColumnValue | null;
    timestamp: Int64LE | null;
    rowCheckSum: number;
  };
  readRowWithoutHeader(): {
    primaryKey: { name: string; value: PrimaryKeyValue }[];
    attributes: {
      columnName: string;
      columnValue: ColumnValue | null;
      timestamp: Int64LE | null;
    }[];
  };
  readRow(): ReturnType<this['readRowWithoutHeader']>;
  readRows(): ReturnType<this['readRowWithoutHeader']>[];
}

export declare class PlainBufferCodedOutputStream {
  outputStream: PlainBufferOutputStream;
  constructor(outputStream: PlainBufferOutputStream);
  writeHeader(): void;
  writeTag(tag: number): void;
  writeCellName(name: Buffer | string, cellCheckSum: number): number;
  writePrimaryKeyValue(value: PrimaryKeyValue | ExtraMetadata, cellCheckSum: number): number;
  writeColumnValueWithChecksum(value: ColumnValue, cellCheckSum: number): number;
  writeColumnValue(value: ColumnValue): void;
  writePrimaryKeyColumn(
    pkName: string,
    pkValue: PrimaryKeyValue | ExtraMetadata,
    rowCheckSum: number,
  ): number;
  writeColumn(
    columnName: Buffer | string,
    columnValue: ColumnValue,
    timestamp: number | null | undefined,
    rowCheckSum: number,
  ): number;
  writeUpdateColumn(
    updateType: UpdateType,
    columnName: Buffer | string,
    columnValue: ColumnValue | null | [null, ColumnValue] | [ColumnValue | number],
    rowCheckSum: number,
  ): number;
  writePrimaryKey(primaryKeys: PrimaryKey[], rowCheckSum: number): number;
  writeColumns(columns: AttributeColumn[], rowCheckSum: number): number;
  writeUpdateColumns(attributeColumns: UpdateColumn[], rowCheckSum: number): number;
  writeDeleteMarker(rowCheckSum: number): number;
  writeRowChecksum(rowCheckSum: number): void;
  writeSearchValue(value: Exclude<ColumnValue, Buffer>): void;
}
