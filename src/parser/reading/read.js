import fs from "node:fs"
import ParsingDerective from "../../AST/DerectiveStatement/ParsingDerective.js";

let teaConfig = JSON.parse(fs.readFileSync("../../../test/teaconfig.json", { encoding: "utf-8" }));
let code = fs.readFileSync(`../../../test/${teaConfig.file}`, { encoding: "utf-8" });
new ParsingDerective().parse_derective(code, 0);