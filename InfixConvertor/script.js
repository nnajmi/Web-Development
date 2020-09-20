function IsOperand(x)
{
    if(x == '+' || x == '-' || x == '*' || x == '/' || x == '^' ||
        x == '(' || x == ')')
        return 0;
    else
        return 1;
}

function outPrecedence(x)
{
    if(x == '+' || x == '-')
        return 1;
    else if(x == '*' || x == '/')
        return 3;
    else if(x == '^')
        return 6;
    else if(x == '(')
        return 7;
    else if(x == ')')
        return 0;
    return -1;
}

function inPrecedence(x)
{
    if(x == '+' || x == '-')
        return 2;
    else if(x == '*' || x == '/')
        return 4;
    else if(x == '^')
        return 5;
    else if(x == '(')
        return 0;
    return -1;
}

function InfixToPostfix(exp)
{
    var stk = [];
    stk[0] = '(';   
    var postfix = [];
    var i = 0, j = 0;
    //while(infix[i] != infix.substr(-1))
    while(i != exp.length)
    {
        if(IsOperand(exp[i]))
            postfix[j++] = exp[i++];
        else
        {
            postfix[j++] = ' ';
            if(stk == null || outPrecedence(exp[i]) > inPrecedence(stk[stk.length-1]))
                stk.push(exp[i++]);
            else if(outPrecedence(exp[i]) == inPrecedence(stk[stk.length-1]))
                    stk.pop();
                else
                    postfix[j++] = stk.pop();
        }   
    }
    while(stk.length != 0 && stk[stk.length-1] != ')')
        postfix[j++] = stk.pop();
    return postfix;
}
function InfixToPrefix(preExp)
{
    var revInfix = [];
    var revPrefix = [];
    var prefix = [];
    revInfix = preExp.split("").reverse();
    alert(revInfix);
    for(i = 0; i < revInfix.length; i++)
    {
        if(revInfix[i] == ')')
            revInfix[i] = '(';
        else if(revInfix[i] == '(')
            revInfix[i] = ')';
    }
    alert(revInfix.join());
    revPrefix = InfixToPostfix(revInfix);
    alert(revPrefix);
    prefix  = revPrefix.reverse();
    return prefix;
}
function Convert()
{
    var infix = document.getElementById("infix").value;
    var postfixresult = InfixToPostfix(infix);
    document.getElementById('postfixLabel').innerHTML = postfixresult.join(""); 
    var prefixresult = InfixToPrefix(infix);
    document.getElementById('prefixLabel').innerHTML = prefixresult.join("");
}


     
