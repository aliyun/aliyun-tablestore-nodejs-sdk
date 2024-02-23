import { Int64LE } from 'int64-buffer';

declare interface BufferLike {
  buffer: Buffer | ArrayBuffer | string;
  limit?: number;
  offset: number;
}

export declare class PlainBufferInputStream {
  buffer: Buffer;
  lastTag: number;
  curPos?: number;
  bufferLimit?: number;
  constructor(dataBuffer: Buffer | BufferLike);
  getLastTag(): number;
  isAtEnd(): boolean;
  readTag(): number;
  checkLastTagWas(tag: number): boolean;
  readRawByte(): number;
  readRawLittleEndian64(): Buffer;
  readRawLittleEndian32(): number;
  readBoolean(): boolean;
  readDoubleAndInt64(): { doubleVal: number; int64LE: Int64LE };
  readInt32(): number;
  readInt64(): Int64LE;
  readBytes(size: number): Buffer;
  readUtfString(size: number): string;
}

export declare class PlainBufferOutputStream {
  capacity: number;
  pos: number;
  buffer: Buffer;
  constructor(capacity: number);
  getBuffer(): Buffer;
  isFull(): boolean;
  count(): number;
  remain(): number;
  clear(): void;
  writeRawByte(value: number): void;
  writeRawLittleEndian32(value: number): void;
  writeRawLittleEndian64(buf: Buffer): void;
  writeInt64LE(int64LE: Int64LE): void;
  writeDouble(value: numner): void;
  writeBoolean(value: boolean): void;
  writeBytes(value: Buffer | string): void;
}
