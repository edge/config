// Copyright (C) 2021 Edge Network Technologies Limited
// Use of this source code is governed by a GNU GPL-style license
// that can be found in the LICENSE.md file. All rights reserved.

export class Config {
  protected static getEnvArray(key: string, defaultValue: string[]): string[] {
    const value = process.env[key]
    return value ? value.split(',') : defaultValue
  }

  protected static getEnvBoolean(key: string, defaultValue: boolean): boolean {
    const value = process.env[key]
    return value ? value === 'true' : defaultValue
  }

  protected static getEnvNumber(key: string, defaultValue: number): number {
    const value = process.env[key]
    return value ? Number(value) : defaultValue
  }

  protected static getEnvObject(key: string, defaultValue: Record<string, unknown>): Record<string, unknown> {
    const value = process.env[key]
    return value ? JSON.parse(value) : defaultValue
  }

  protected static getEnvString(key: string, defaultValue: string): string {
    const value = process.env[key]
    return value ? value : defaultValue
  }
}
