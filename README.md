<img src="https://cdn.edge.network/assets/img/edge-logo-green.svg" width="200">

# Config

Simple configuration management library

[![npm version](https://img.shields.io/npm/v/@edge/config)](https://www.npmjs.com/package/@edge/config) [![npm downloads](https://img.shields.io/npm/dt/@edge/config)](https://www.npmjs.com/package/@edge/config) [![license](https://img.shields.io/npm/l/@edge/config)](LICENSE.md)

- [config](#config)
  - [Usage](#usage)
  - [License](#license)

## Usage

This library provides simple configuration management, allowing defaults, type parsing, and automatic `.env` loading.

```typescript
import { Config } from '@edge/config'

export class GlobalConfig {
  // Primitives
  static readonly httpPort = Config.getEnvNumber('HTTP_PORT', 80)
  static readonly logLevel = Config.getEnvString('LOG_LEVEL', 'info')
  static readonly reportingEnabled = Config.getEnvBoolean('REPORTING_ENABLED', true)

  // Arrays
  static readonly peers = Config.getEnvArray('PEERS', ['peer1', 'peer2'])
  static readonly csvLists = Config.getEnvArray('CSV_LISTS', [], '|')

  // Objects
  static readonly someObject = Config.getEnvObject('SOME_OBJECT', { useful: true, reason: 'provides good utility' })

  // Predicates
  static readonly indexUrl = Config.ifEnvStringEquals('NETWORK', 'mainnet', 'index.xe.network', 'index.test.network')
  static readonly indexUrl = Config.ifEnvBooleanIsTrue('IS_MAINNET', 'index.xe.network', 'index.test.network')

  // Files
  static readonly httpPort = Config.getFileNumber('config/port.txt', 80)
  static readonly logLevel = Config.getFileString('config/loglevel.txt', 'info')
  static readonly reportingEnabled = Config.getFileBoolean('config/reporting.txt', true)
  static readonly peers = Config.getFileArray('config/peers.txt', ['peer1', 'peer2'])
  static readonly csvLists = Config.getFileArray('config/list.txt', [], '|')
  static readonly someObject = Config.getEnvObject('config/something.txt', { useful: true, reason: 'provides good utility' })
}
```

## License

Edge is the infrastructure of Web3. A peer-to-peer network and blockchain providing high performance decentralised web services, powered by the spare capacity all around us.

Copyright notice
(C) 2021 Edge Network Technologies Limited <support@edge.network><br />
All rights reserved

This product is part of Edge.
Edge is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version ("the GPL").

**If you wish to use Edge outside the scope of the GPL, please contact us at licensing@edge.network for details of alternative license arrangements.**

**This product may be distributed alongside other components available under different licenses (which may not be GPL). See those components themselves, or the documentation accompanying them, to determine what licenses are applicable.**

Edge is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

The GNU General Public License (GPL) is available at: https://www.gnu.org/licenses/gpl-3.0.en.html<br />
A copy can be found in the file GPL.md distributed with
these files.

This copyright notice MUST APPEAR in all copies of the product!
