# excel2csv

ExcelのXLSファイルやXLSXファイルをCSVファイルに変換するツールです。複数のファイルや複数のシートに対応しています。

## 機能
- XLS、XLSXファイルのCSV変換
- 複数ファイルの一括変換
- 複数シートの個別変換
- 値の前後の空白削除
- コンマ入り数値からコンマの削除

## 必要環境
[Deno](https://deno.land/)がインストールされている必要があります。

## 使い方
Denoをインストールした後、以下のようにして使用できます:

```js
import { excel2csv } from "https://code4fukui.github.io/excel2csv/excel2csv.js";
await excel2csv("sample.xls", "out.csv");
```

## ライセンス
MIT License