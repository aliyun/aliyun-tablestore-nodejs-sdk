declare const plainBufferCrc8: {
  update(crc: number, bytes: string | Buffer | ArrayBuffer): number;
  update(crc: number, bytes: string | Buffer | ArrayBuffer): number;
  crcString(crc: number, bytes: string | Buffer | ArrayBuffer): number;
  crcInt8(crc: number, bytes: string | Buffer | ArrayBuffer): number;
  crcInt32(crc: number, bytes: string | Buffer | ArrayBuffer): number;
  crcInt64Buf(crc: number, bytes: string | Buffer | ArrayBuffer): number;
};

export default plainBufferCrc8;
