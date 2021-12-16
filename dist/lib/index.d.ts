export declare class Config {
    static getEnvArray(key: string, defaultValue: string[], delimiter?: string): string[];
    static getEnvBoolean(key: string, defaultValue: boolean): boolean;
    static getEnvNumber(key: string, defaultValue: number): number;
    static getEnvObject(key: string, defaultValue: Record<string, unknown>): Record<string, unknown>;
    static getEnvString(key: string, defaultValue: string): string;
    static ifEnvStringEquals(key: string, value: string, trueValue: string, falseValue: string): string;
    static ifEnvBooleanIsTrue(key: string, trueValue: string, falseValue: string): string;
    static getFileArray(filePath: string, defaultValue: string[], delimiter?: string): string[];
    static getFileBoolean(filePath: string, defaultValue: boolean): boolean;
    static getFileNumber(filePath: string, defaultValue: number): number;
    static getFileObject(filePath: string, defaultValue: Record<string, unknown>): Record<string, unknown>;
    static getFileString(filePath: string, defaultValue: string): string;
    static requireEnvArray(key: string, delimiter?: string): string[];
    static requireEnvBoolean(key: string): boolean;
    static requireEnvNumber(key: string): number;
    static requireEnvObject(key: string): Record<string, unknown>;
    static requireEnvString(key: string): string;
}
