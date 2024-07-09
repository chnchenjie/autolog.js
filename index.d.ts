declare const svgIcons: {
    warn: string;
    error: string;
    info: string;
    success: string;
    "": string;
  };
  
  type iconfont = `icon-${string}`;
  type AutologLogType<T extends Record<string, string>> = keyof typeof svgIcons | keyof T | iconfont;
  
  interface AutologOptions<T extends Record<string, string>> {
    svgIcons: T;
    duration?: number;
    autoClose?: boolean;
  }
  
  declare const autolog: {
    log<T extends {
      warn: string;
      error: string;
      info: string;
      success: string;
      "": string;
    }>(text?: string, type?: AutologLogType<T> | number | boolean, time?: number, autoClose?: boolean): void;
    create<T_1 extends Record<string, string>>(options: AutologOptions<T_1>): {
      log: <U extends AutologLogType<T_1>>(text?: string, type?: U | number | boolean, time?: number, autoClose?: boolean) => void;
    };
  };
  
  export default autolog;