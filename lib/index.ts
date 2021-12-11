// Copyright (C) 2021 Edge Network Technologies Limited
// Use of this source code is governed by a GNU GPL-style license
// that can be found in the LICENSE.md file. All rights reserved.

import Dotenv from 'dotenv'
import { readFileSync } from 'fs'

// Load environment variables from .env file if present
Dotenv.config()

// Provide helper methods to load environment variables
export class Config {
  static getEnvArray(key: string, defaultValue: string[], delimiter = ','): string[] {
    const value = process.env[key]
    return value ? value.split(delimiter) : defaultValue
  }

  static getEnvBoolean(key: string, defaultValue: boolean): boolean {
    const value = process.env[key]
    return value ? value === 'true' : defaultValue
  }

  static getEnvNumber(key: string, defaultValue: number): number {
    const value = process.env[key]
    return value ? Number(value) : defaultValue
  }

  static getEnvObject(key: string, defaultValue: Record<string, unknown>): Record<string, unknown> {
    const value = process.env[key]
    return value ? JSON.parse(value) : defaultValue
  }

  static getEnvString(key: string, defaultValue: string): string {
    const value = process.env[key]
    return value ? value : defaultValue
  }

  static ifEnvStringEquals(key: string, value: string, trueValue: string, falseValue: string): string {
    const envValue = process.env[key]
    return envValue === value ? trueValue : falseValue
  }

  static ifEnvBooleanIsTrue(key: string, trueValue: string, falseValue: string): string {
    const envValue = process.env[key]
    return envValue === 'true' ? trueValue : falseValue
  }

  static getFileArray(filePath: string, defaultValue: string[], delimiter = ','): string[] {
    try {
      return readFileSync(filePath, 'utf8').split(delimiter)
    }
    catch (e) {
      return defaultValue
    }
  }

  static getFileBoolean(filePath: string, defaultValue: boolean): boolean {
    try {
      return readFileSync(filePath, 'utf8') === 'true'
    }
    catch (e) {
      return defaultValue
    }
  }

  static getFileNumber(filePath: string, defaultValue: number): number {
    try {
      return Number(readFileSync(filePath, 'utf8'))
    }
    catch (e) {
      return defaultValue
    }
  }

  static getFileObject(filePath: string, defaultValue: Record<string, unknown>): Record<string, unknown> {
    try {
      return JSON.parse(readFileSync(filePath, 'utf8'))
    }
    catch (e) {
      return defaultValue
    }
  }

  static getFileString(filePath: string, defaultValue: string): string {
    try {
      return readFileSync(filePath, 'utf8')
    }
    catch (e) {
      return defaultValue
    }
  }
}
