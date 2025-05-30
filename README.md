# Area Code to Zip Code Lookup

This library provides a simple utility to look up a US ZIP code by area code.

## Installation

Clone this repository and install dependencies:

```sh
npm install areacode-to-zipcode
```

## Usage

Import the functions and use them in your TypeScript or JavaScript project:

```typescript
import { getZipcodeFromAreaCode, getDataFromAreaCode } from './lib';

const zip = getZipcodeFromAreaCode(212); // '10024'
console.log(zip);

const data = getDataFromAreaCode(212);
/*
{
  city: "New York City",
  state: "NY",
  zipCode: "10024",
  country: "US"
}
*/
console.log(data);
```

If the area code is not found, the functions return `null`.

## API

### `getZipcodeFromAreaCode(areaCode: number): string | null`

- **areaCode**: The US area code as a number.
- **Returns**: The corresponding ZIP code as a string, or `null` if not found.

### `getDataFromAreaCode(areaCode: number): { city: string | null, state: string | null, zipCode: string | null, country: string | null } | null`

- **areaCode**: The US area code as a number.
- **Returns**: An object with `city`, `state`, `zipCode`, and `country` fields, or `null` if not found.


## Testing

Run tests with:

```sh
npm test
```

## Data

Area code to ZIP code mappings are stored in [`lib/data.json`](./lib/data.json).
