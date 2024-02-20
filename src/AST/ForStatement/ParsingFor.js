import program from "../../AST/ast.js";

class ForStatement {
    types(str) {
        let returns_str = "";
        for(let i = 2; i < str.length; i++) {
            if(str[i] === "=") {
                break;
            }
            returns_str += str[i]
        }
        return returns_str;
    }
    names(str) {
        let returns_str = "";
        for(let i = 0; i < str.length; i++) {
            if(str[i] === ":") {
                break;
            }
            returns_str += str[i]
        }
        return returns_str;
    }
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
    parse_for(code_for, position) {
        program.body.ForStatement = {
            type: "ForStatement",
            start: position,
            end: code_for.length
        }
        for(let i = position; i < code_for.length; i++) {
            if(code_for[i] === "(") {
                let j1 = i+1;
                let variableDeclaration = "";
                while(code_for[j1] !== ";") {
                    variableDeclaration += code_for[j1];
                    //!console.log(variableDeclaration);
                    const not_space = variableDeclaration.replace(/ /g, "");
                    program.body.ForStatement.VariableDeclaration = {
                        type: "VariableDeclaration",
                        start: i+1,
                        end: variableDeclaration.length,
                        Indentifier: {
                            type: "Identifier",
                            start: this.find_index(variableDeclaration, this.names(not_space))+2,
                            end: this.find_index(variableDeclaration, this.names(not_space))+2+this.names(not_space).length,
                            name: this.names(not_space)
                        },
                        Literal: {
                            type: "Literal",
                            //TODO доделать start, end, value, raw
                            /*start: this.find_index(not_space, "=")+4,
                            end: this.find_index(not_space, "=")+4+String(variableDeclaration[this.find_index(not_space, "=")+3]).length,
                            value: Number(variableDeclaration[this.find_index(not_space, "=")+3]),
                            raw: variableDeclaration[this.find_index(not_space, "=")+3]*/
                        },
                        kind: this.types(not_space)
                    }
                    j1++;
                }
            }
        }
        //console.log(JSON.stringify(program, null, 2));
    }
}

export default ForStatement;
