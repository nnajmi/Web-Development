var postfix = [];
//var infix = "x ^ y/(r*z)+d\0";
//var infix = document.querySelector("#infix");
var infix = [];
//alert(infix);
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

function InfixToPostfix(infix)
{
    var stk = [];
    var i = 0, j = 0;
    //while(infix[i] != infix.substr(-1))
    while(i != infix.length)
    {
        if(IsOperand(infix[i]))
            postfix[j++] = infix[i++];
        else
        {
            if(stk == null || outPrecedence(infix[i]) > inPrecedence(stk[stk.length-1]))
                stk.push(infix[i++]);
            else if(outPrecedence(infix[i]) == inPrecedence(stk[stk.length-1]))
                    stk.pop();
                else
                    postfix[j++] = stk.pop();
        }   
    }
    while(stk.length != 0 && stk[stk.length-1] != ')')
        postfix[j++] = stk.pop();
    return postfix;
}
function Convert()
{
    infix = document.getElementById("infix").value;
    var result = InfixToPostfix(infix);
    document.getElementById('postfixLabel').innerHTML = result.join(""); 
}


     
