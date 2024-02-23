export declare interface TableStoreConfig {
  accessKeyId: string;
  secretAccessKey?: string;
  accessKeySecret?: string;
  stsToken?: string;
  securityToken?: string;
  logger?: any;
  endpoint: string;
  httpOptions?: {
    timeout?: number;
    /**
     * @default
     * 300
     */
    maxSockets?: number;
  };
  maxRetries?: number;
  instancename: string;
  /**
   * @default
   * true
   */
  computeChecksums?: boolean;
}

declare class Config implements TableStoreConfig {
  constructor(options?: TableStoreConfig);
  clear();
  getCredentials(): {
    accessKeyId: string;
    secretAccessKey: string;
    securityToken: string;
  };
}

export default Config;
