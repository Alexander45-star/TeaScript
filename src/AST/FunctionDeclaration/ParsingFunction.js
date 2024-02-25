import program from "../../AST/ast.js";

class ParsingFunction {
    find_index(str, findElement) {
        let return_index;
        for(let i = 0; i < str.length; i++) {
            if(str[i] === findElement) {
                return_index = i;
                break;
            }
        }
        return return_index;
    }
    parse_function(code_function, position) {
        program.body.FunctionDeclaration = {
            type: "FunctionDeclaration",
            start: position,
            end: code_function.length + position
        }
        let name = "";
        let i = 0;
        while(code_function[i] !== "(") {
            name += code_function[i];
            i++;
        }
        let namefn = name.replace(/function /, "");
        program.body.FunctionDeclaration.Identifier = {
            type: "Identifier",
            start: this.find_index(namefn, namefn[0]) + 9 + position,
            end: this.find_index(namefn, namefn[0]) + 9 + position + namefn.length - 1,
            name: namefn
        }
        let params = "";
        while(code_function[i+1] !== ")") {
            params += code_function[i+1];
            i++;
        }
        if(params !== "") {
            console.log("params!!");
        }
        program.body.FunctionDeclaration.params = [];
        let body = "";
        while(code_function[i] !== "}") {
            body += code_function[i];
            i++;
        }
        let replace_body = body.replace(/\(/, "").replace(/\)/, "");
        program.body.FunctionDeclaration.BlockStatement = {
            type: "BlockStatement",
            start: position + this.find_index(body, "{") + name.length - 1,
            end: replace_body.length + position + this.find_index(body, "{") + name.length - 1
        }
        //console.log(JSON.stringify(program.body.FunctionDeclaration, null, 2));
    }
}

export default ParsingFunction;