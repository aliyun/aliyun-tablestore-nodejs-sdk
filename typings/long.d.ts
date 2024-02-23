import { Int64LE } from 'int64-buffer';

declare class Long {
  int64?: Int64LE;
  fromNumber(num: number): Int64LE;
  fromString(str: string): Int64LE;
  toBuffer(): Buffer;
  toNumber(): number;
}

export default Long;
