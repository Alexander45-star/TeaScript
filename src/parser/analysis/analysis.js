import program from "../../AST/ast.js";
import ParsingDerective from "../../AST/DerectiveStatement/ParsingDerective.js";

class Parser {
    constructor() {

    }
    parsing(teaprogram) {
        program.end = teaprogram.length;
        for(let i = 0; i < teaprogram.length; i++) {
            if(teaprogram[i] === "@") {
                let substr1 = "";
                while(teaprogram[i] !== ";") {
                    substr1 += teaprogram[i];
                    i++;
                }
                new ParsingDerective().parse_derective(substr1, i - substr1.length);
            }
        }
    }
}

export default Parser;