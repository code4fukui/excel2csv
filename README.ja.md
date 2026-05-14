# excel2csv

Excelファイル（.xls, .xlsx）をCSVに変換するシンプルなツールです。WebアプリおよびDenoコマンドラインスクリプトとして利用できます。

## Webアプリ（デモ）

ドラッグ＆ドロップで直感的に操作できる、ブラウザベースのコンバーターです。

**[➡️ ライブデモ](https://code4fukui.github.io/excel2csv/)**

### 機能
- **ドラッグ＆ドロップ:** ブラウザ内で直接ファイルを変換できます。
- **バッチ変換:** 複数のExcelファイルを一度に処理できます。出力は `.zip` アーカイブとして提供されます。
- **複数シート対応:** デフォルトではワークブック内のすべてのシートを変換します。最初のシートのみを変換するオプションもあります。各シートは個別のCSVファイルとして出力されます。
- **データクリーニングオプション:**
  - すべてのセルの前後の空白を削除（トリム）します。
  - 数値に含まれるカンマを削除します（例: `1,234` を `1234` に変換）。

## コマンドラインでの使用（Deno）

Deno環境向けの基本的なコマンドラインスクリプトも用意されています。単一のExcelファイルの最初のシートをCSVに変換します。

### 必要条件
- [Deno](https://deno.land/)

### 使用方法
以下のコードを含むスクリプト（例: `convert.js`）を作成します:

```javascript
import { excel2csv } from "https://code4fukui.github.io/excel2csv/excel2csv.js";

// 'sample.xls'の最初のシートを'out.csv'に変換します
await excel2csv("sample.xls", "out.csv");
```

その後、ターミナルから必要な権限を付与して実行します:
```sh
deno run --allow-read --allow-write convert.js
```
*注意: コマンドライン版は最初のシートのみを変換し、Webアプリにあるデータクリーニングオプションはサポートしていません。*

## 謝辞
- App: CC BY [Taisuke Fukuno](https://fukuno.jig.jp/3261) ([@taisukef](https://twitter.com/taisukef))
- Lib: [XLSX.js](https://github.com/taisukef/sheetjs-es/tree/es/es) ([sheetjs-es](https://github.com/taisukef/sheetjs-es) からフォーク)
- Design: [Bootstrap](https://getbootstrap.com/)

## ライセンス
MIT License
