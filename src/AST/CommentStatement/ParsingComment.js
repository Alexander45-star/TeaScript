import program from "../ast.js"

class ParsingComment {
    constructor() {

    }
    parse_comment(code_comment, position) {
        if(code_comment[0] === "/" && code_comment[1] === "/") {
            program.body.comments = {
                type: "Line",
                value: code_comment,
                start: position,
                end: position + code_comment.length - 1
            }
        }
    }
}