// Copyright (C) 2021 Edge Network Technologies Limited
// Use of this source code is governed by a GNU GPL-style license
// that can be found in the LICENSE.md file. All rights reserved.

import { Config } from '../lib'
import { expect } from 'chai'

describe('Config', () => {
  before(() => {
    process.env.TEST_ENV_STRING = 'test'
    process.env.TEST_ENV_NUMBER = '1'
    process.env.TEST_ENV_BOOLEAN = 'true'
    process.env.TEST_ENV_ARRAY = '1,2,3'
    process.env.TEST_ENV_OBJECT = '{"a":1,"b":2}'
  })

  describe('getEnvArray', () => {
    it('should return the value of the environment variable', () => {
      expect(Config.getEnvArray('TEST_ENV_ARRAY', [], ',')).to.deep.equal(['1', '2', '3'])
    })

    it('should return the default value if the environment variable is not set', () => {
      expect(Config.getEnvArray('TEST_ENV_UNSET', [], ',')).to.deep.equal([])
    })
  })

  describe('getEnvBoolean', () => {
    it('should return the value of the environment variable', () => {
      expect(Config.getEnvBoolean('TEST_ENV_BOOLEAN', false)).to.equal(true)
    })

    it('should return the default value if the environment variable is not set', () => {
      expect(Config.getEnvBoolean('TEST_ENV_UNSET', false)).to.equal(false)
    })
  })

  describe('getEnvNumber', () => {
    it('should return the value of the environment variable', () => {
      expect(Config.getEnvNumber('TEST_ENV_NUMBER', 0)).to.equal(1)
    })

    it('should return the default value if the environment variable is not set', () => {
      expect(Config.getEnvNumber('TEST_ENV_UNSET', 0)).to.equal(0)
    })
  })

  describe('getEnvObject', () => {
    it('should return the value of the environment variable', () => {
      expect(Config.getEnvObject('TEST_ENV_OBJECT', {})).to.deep.equal({ a: 1, b: 2 })
    })

    it('should return the default value if the environment variable is not set', () => {
      expect(Config.getEnvObject('TEST_ENV_UNSET', {})).to.deep.equal({})
    })
  })

  describe('getEnvString', () => {
    it('should return the value of the environment variable', () => {
      expect(Config.getEnvString('TEST_ENV_STRING', 'default')).to.equal('test')
    })

    it('should return the default value if the environment variable is not set', () => {
      expect(Config.getEnvString('TEST_ENV_UNSET', 'default')).to.equal('default')
    })
  })

  describe('ifEnvStringEquals', () => {
    it('should return trueValue if envValue equals value', () => {
      expect(Config.ifEnvStringEquals('TEST_ENV_STRING', 'test', 'true', 'false')).to.equal('true')
    })

    it('should return falseValue if envValue does not equal value', () => {
      expect(Config.ifEnvStringEquals('TEST_ENV_STRING', 'test2', 'true', 'false')).to.equal('false')
    })
  })

  describe('ifEnvBooleanIsTrue', () => {
    it('should return trueValue if envValue is true', () => {
      expect(Config.ifEnvBooleanIsTrue('TEST_ENV_BOOLEAN', 'true', 'false')).to.equal('true')
    })

    it('should return falseValue if envValue is false', () => {
      expect(Config.ifEnvBooleanIsTrue('TEST_ENV_BOOLEAN_NOT_SET', 'true', 'false')).to.equal('false')
    })
  })

  describe('getFileArray', () => {
    it('should return the value of the file', () => {
      expect(Config.getFileArray('tests/files/array.txt', [], ',')).to.deep.equal(['1', '2', '3'])
    })

    it('should return the default value if the file does not exist', () => {
      expect(Config.getFileArray('tests/test_not_found.txt', [], ',')).to.deep.equal([])
    })
  })

  describe('getFileBoolean', () => {
    it('should return the value of the file', () => {
      expect(Config.getFileBoolean('tests/files/boolean.txt', false)).to.equal(true)
    })

    it('should return the default value if the file does not exist', () => {
      expect(Config.getFileBoolean('tests/test_not_found.txt', false)).to.equal(false)
    })
  })

  describe('getFileNumber', () => {
    it('should return the value of the file', () => {
      expect(Config.getFileNumber('tests/files/number.txt', 0)).to.equal(1)
    })

    it('should return the default value if the file does not exist', () => {
      expect(Config.getFileNumber('tests/test_not_found.txt', 0)).to.equal(0)
    })
  })

  describe('getFileObject', () => {
    it('should return the value of the file', () => {
      expect(Config.getFileObject('tests/files/object.txt', {})).to.deep.equal({ a: 1, b: 2 })
    })

    it('should return the default value if the file does not exist', () => {
      expect(Config.getFileObject('tests/test_not_found.txt', {})).to.deep.equal({})
    })
  })

  describe('getFileString', () => {
    it('should return the value of the file', () => {
      expect(Config.getFileString('tests/files/string.txt', 'default')).to.equal('test')
    })

    it('should return the default value if the file does not exist', () => {
      expect(Config.getFileString('tests/test_not_found.txt', 'default')).to.equal('default')
    })
  })


})
