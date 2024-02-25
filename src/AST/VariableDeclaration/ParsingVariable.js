import program from "../../AST/ast.js";

class VariableDeclaration {
    strArray(str) {
        let string = str.replace(" ", "").slice(1).slice(0, -1).replace(/,/g, " ");
        let arr = [];
        for(let i = 0; i < string.length; i++) {
            if(string[i] === " ") {
                let j = 0;
                let el = "";
                while(j !== i) {
                    el += string[j];
                    j++;
                }
                arr.push(el);
                el = "";
                console.log(j, i);
            }
        }
        console.log(arr);
    }
    parsing_variable(code_variable, position) {
        const VariableDeclaration = {
            type: "VariableDeclaration",
            start: position,
            end: code_variable.length
        }
        let i = 0;
        let name = "";
        while(code_variable[i] !== ":") {
            name += code_variable[i];
            i++;
        }
        VariableDeclaration.Identifier = {
            type: "Identifier",
            start: position,
            end: name.length + position,
            name: name
        }
        let kind = "";
        while(code_variable[i+1] !== "=") {
            kind += code_variable[i+1];
            i++;
        }
        let view = kind.replace(/ /g, "");
        VariableDeclaration.variableType = view;
        let literal = "";
        while(code_variable[i] !== ";") {
            literal += code_variable[i];
            i++;
        }
        let val = literal.replace(/ |=/g, "");
        VariableDeclaration.Literal = {
            type: "Literal",
            value: +val,
            raw: String(val),
            start: i - val.length,
            end: i
        }
        //console.log(program.body.VariableDeclaration.variableType.length);

        let str = VariableDeclaration.variableType.split("::");
        
        for(let j = 0; j < str.length; j++) {
            if(str[j] === "Array") {    
                this.strArray(VariableDeclaration.Literal.raw);
                
            }
        }
        console.log(JSON.stringify(program, null, 2));
        program.body.push(VariableDeclaration);
    }
}

export default VariableDeclaration;