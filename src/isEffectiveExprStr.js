
function isEffectiveExprStr(exprStr) {
    if (exprStr === '') {
        return true;
    }
    var brackets = {
        value: ['(', ')', '{', '}', '[', ']'],
        left: ['(', '{', '['],
        right: [')', '}', ']'],
        ')': {
            left: '('
        },
        '}': {
            left: '{'
        },
        ']': {
            left: '['
        },
    };

    var curBracketStr = [];

    for (let index = 0, size = exprStr.length; index < size; index++) {
        const curStr = exprStr[index];
        if (brackets.value.indexOf(curStr) > -1) {
            // 括号字符处理
            if (brackets.left.indexOf(curStr) > -1) {
                // 左括号
                curBracketStr.push(curStr);
            } else if (brackets.right.indexOf(curStr) > -1 && curBracketStr.length > 0) {
                // 右括号处理
                if (brackets[curStr] && curBracketStr[curBracketStr.length - 1] === brackets[curStr].left) {
                    curBracketStr.pop();
                } else {
                    return false;
                }
            }
        }

    }

    if (curBracketStr.length === 0 ) {
        return true;
    }
    return false;
}

console.log(isEffectiveString("()"));
console.log(isEffectiveString("()[]{}"));
console.log(isEffectiveString("(]"));
console.log(isEffectiveString("([)]"));
console.log(isEffectiveString("{[]}"));
console.log(isEffectiveString("{[3+6]}"));
console.log(isEffectiveString(""));
console.log(isEffectiveString("0"));