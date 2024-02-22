import fs from "node:fs"
import Parser from "../analysis/analysis.js";

let teaConfig = JSON.parse(fs.readFileSync("../../../test/teaconfig.json", { encoding: "utf-8" }));
let code = fs.readFileSync(`../../../test/${teaConfig.file}`, { encoding: "utf-8" });
new Parser().parsing(code);