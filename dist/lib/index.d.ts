export declare class Config {
    protected static getEnvArray(key: string, defaultValue: string[]): string[];
    protected static getEnvBoolean(key: string, defaultValue: boolean): boolean;
    protected static getEnvNumber(key: string, defaultValue: number): number;
    protected static getEnvObject(key: string, defaultValue: Record<string, unknown>): Record<string, unknown>;
    protected static getEnvString(key: string, defaultValue: string): string;
}
