// Stack class 
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
    push(element) 
    { 
        this.items.push(element); 
    }
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    }
    top() 
    { 
        return this.items[this.items.length - 1]; 
    }
    isEmpty() 
    { 
        return this.items.length == 0; 
    }
    printStack() 
    { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
} 


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
function Precedence(x)
{
    if(x == '^')
        return 3;
    else if(x == '*' || x == '/')
        return 2;
    else if(x == '+' || x == '-')
        return 1;
    else 
    return -1;
}
function InfixtoPrefix2(infix)
{
    var prefix = [];
    var stk = new Stack();
    var i, j =0;
    for(i = 0; i < infix.length(); i++)
    {
        if(isOperand(infix[i]) == 1)
            prefix[j++] = infix[i];
        else if(infix[i] == '(')
            stk.push(infix[i]);
        else if(infix[i] == ')')
        {
            while(stk.top() != '(' && !stk.isEmpty())
            {
                prefix[j++] = stk.pop();
            }
            if(stk.top() == '(')
                stk.pop();
        }
        else //if it is operator
        {
            if(stk.isEmpty())
                stk.push(infix[i]);
            else
            {
                if(Precedence(infix[i] > Precedence(stk.top())))
                    stk.push(infix[i]);
            }
        }
    }
}

function Convert()
{
    // var infix = document.getElementById("infix").value;
    // var postfixresult = InfixToPostfix(infix);
    // document.getElementById('postfixLabel').innerHTML = postfixresult.join(""); 
    // var prefixresult = InfixToPrefix(infix);
    // document.getElementById('prefixLabel').innerHTML = prefixresult.join("");

    var stack = new Stack(); 
    stack.push(10); 
    stack.push(20); 
    stack.push(30); 
    // Printing the stack element 
    // prints [10, 20, 30] 
    console.log(stack.printStack()); 
    
    // returns 30 
    console.log(stack.top()); 
    
    // returns 30 and remove it from stack 
    console.log(stack.pop()); 
    
    // returns [10, 20] 
    console.log(stack.printStack());  
}


     
