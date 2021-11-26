export declare class Config {
    static getEnvArray(key: string, defaultValue: string[], delimiter?: string): string[];
    static getEnvBoolean(key: string, defaultValue: boolean): boolean;
    static getEnvNumber(key: string, defaultValue: number): number;
    static getEnvObject(key: string, defaultValue: Record<string, unknown>): Record<string, unknown>;
    static getEnvString(key: string, defaultValue: string): string;
}
