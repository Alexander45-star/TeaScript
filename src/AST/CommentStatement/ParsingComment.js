import program from "../ast.js"

class ParsingComment {
    constructor() {

    }
    parse_comment(code_comment, position, view) {
        program.body.comments = {
            type: view,
            value: code_comment.replace(/\/\//, ""),
            start: position,
            end: position + code_comment.length - 1
        }
    }
}

export default ParsingComment;