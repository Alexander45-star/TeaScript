import program from "../../AST/ast.js";

class ParsingDerective {
    parse_derective(code_derective, position) {
        program.body.push({
            type: "ParsingDerective",
            start: position,
            end: code_derective.length,
            kind: code_derective.replace(/\@/, "")
        })
    }
}

export default ParsingDerective;