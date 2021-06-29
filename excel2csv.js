import { XLSX } from "https://taisukef.github.io/sheetjs-es/es/XLSX.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const excel2csv = async (fn, fn2) => {
  const bin = new Uint8Array(await Deno.readFile(fn));
  const ws = XLSX.decode(bin);
  //console.log(ws);

  const csv = XLSX.toCSV(ws);
  //console.log(csv);
  await Deno.writeTextFile(fn2, CSV.encode(csv));
};

export { excel2csv };
