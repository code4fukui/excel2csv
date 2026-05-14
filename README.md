# excel2csv

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple tool to convert Excel files (.xls, .xlsx) to CSV, available as a web app and a Deno command-line script.

## Web App (Demo)

A user-friendly, browser-based converter is available with a drag-and-drop interface.

**[➡️ Live Demo](https://code4fukui.github.io/excel2csv/)**

### Features
- **Drag & Drop:** Convert files directly in your browser.
- **Batch Conversion:** Process multiple Excel files at once. Output is delivered as a `.zip` archive.
- **Multi-Sheet Support:** Converts all sheets in a workbook by default, with an option to convert only the first sheet. Each sheet becomes a separate CSV file.
- **Data Cleaning Options:**
  - Trim leading/trailing whitespace from all cells.
  - Remove commas from numeric values (e.g., `1,234` becomes `1234`).

## Command-Line Usage (Deno)

A basic command-line script is available for Deno environments. It converts the first sheet of a single Excel file to CSV.

### Requirements
- [Deno](https://deno.land/)

### Usage
Create a script (e.g., `convert.js`) with the following code:

```javascript
import { excel2csv } from "https://code4fukui.github.io/excel2csv/excel2csv.js";

// Converts the first sheet of 'sample.xls' into 'out.csv'
await excel2csv("sample.xls", "out.csv");
```

Then, run it from your terminal with the necessary permissions:
```sh
deno run --allow-read --allow-write convert.js
```
*Note: The command-line version converts only the first sheet and does not support the data cleaning options available in the web app.*

## Acknowledgements
- App: CC BY [Taisuke Fukuno](https://fukuno.jig.jp/3261) ([@taisukef](https://twitter.com/taisukef))
- Lib: [XLSX.js](https://github.com/taisukef/sheetjs-es/tree/es/es) (forked from [sheetjs-es](https://github.com/taisukef/sheetjs-es))
- Design: [Bootstrap](https://getbootstrap.com/)

## License
MIT License