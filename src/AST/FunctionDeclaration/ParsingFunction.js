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
            end: code_function.length
        }
        let name = "";
        let i = position;
        while(code_function[i] !== "(") {
            name += code_function[i];
            i++;
        }
        program.body.FunctionDeclaration.Identifier = {
            type: "Identifier",
            start: i - name.length,
            end: name.length + (i - name.length),
            name: name
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
            start: position + this.find_index(body, "{") + name.length,
            end: replace_body.length + position + this.find_index(body, "{") + name.length
        }
        console.log(JSON.stringify(program.body.FunctionDeclaration, null, 2));
    }
}

export default ParsingFunction;