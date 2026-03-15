# excel2csv

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Excel to CSV converter, supports xls and xlsx files.

## Demo
https://code4fukui.github.io/excel2csv/

## Features
- Converts Excel files (xls and xlsx) to CSV
- Supports multiple sheets in Excel files
- Optionally trims whitespace from cell values
- Optionally removes commas from numeric values

## Requirements
Requires [Deno](https://deno.land/) to run the command-line script.

## Usage

To use the command-line script:

```js
import { excel2csv } from "https://code4fukui.github.io/excel2csv/excel2csv.js";
await excel2csv("sample.xls", "out.csv");
```

## License
MIT License