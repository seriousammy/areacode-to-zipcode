# Area Code to Zip Code Lookup

This library provides a simple utility to look up a US ZIP code by area code.

## Installation

Clone this repository and install dependencies:

```sh
npm install areacode-to-zipcode
```

## Usage

Import the function and use it in your TypeScript or JavaScript project:

```typescript
import { getZipcodeFromAreaCode } from 'areacode-to-zipcode';

const zip = getZipcodeFromAreaCode(212); // '10024'
console.log(zip);
```

If the area code is not found, the function returns `null`.

## API

### `getZipcodeFromAreaCode(areaCode: number): string | null`

- **areaCode**: The US area code as a number.
- **Returns**: The corresponding ZIP code as a string, or `null` if not found.

## Testing

Run tests with:

```sh
npm test
```

## Data

Area code to ZIP code mappings are stored in [`lib/data.json`](./lib/data.json).
