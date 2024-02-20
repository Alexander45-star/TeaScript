import fs from "node:fs"
import ParsingFunction from "../../AST/FunctionDeclaration/ParsingFunction.js";

let teaConfig = JSON.parse(fs.readFileSync("../../../test/teaconfig.json", { encoding: "utf-8" }));
let code = fs.readFileSync(`../../../test/${teaConfig.file}`, { encoding: "utf-8" });
new ParsingFunction().parse_function(code, 9);