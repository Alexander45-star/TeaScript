import program from "../../AST/ast.js";
import ParsingDerective from "../../AST/DerectiveStatement/ParsingDerective.js";
import ParsingFunction from "../../AST/FunctionDeclaration/ParsingFunction.js";

class Parser {
    constructor() {

    }
    parsing(teaprogram) {
        program.end = teaprogram.length - 1;
        for(let i = 0; i < teaprogram.length; i++) {
            if(teaprogram[i] === "@") {
                let substr1 = "";
                while(teaprogram[i] !== ";") {
                    substr1 += teaprogram[i];
                    i++;
                }
                new ParsingDerective().parse_derective(substr1, i - substr1.length);
            }
            if(
                teaprogram[i] === "f" && teaprogram[i+1] === "u" && teaprogram[i+2] === "n" &&
                teaprogram[i+3] === "c" && teaprogram[i+4] === "t" && teaprogram[i+5] === "i" &&
                teaprogram[i+6] === "o" && teaprogram[i+7] === "n"
            ) {
                let substr2 = "";
                while(teaprogram[i] !== "}") {
                    substr2 += teaprogram[i];
                    i++;
                }
                substr2 += teaprogram[i];
                new ParsingFunction().parse_function(substr2, (i+1) - substr2.length);
            }
        }
        console.log(JSON.stringify(program, null, 2));
        //console.log(teaprogram[33]);
    }
}

export default Parser;