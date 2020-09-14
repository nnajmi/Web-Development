function getExpression(){
  return document.querySelector("#expression-value").innerText;
}
function setExpression(exp){
  document.querySelector("#expression-value").innerText = exp;
}
function getOutput(){
  return document.querySelector("#output-value").innerText;
}
function setOutput(num){
  if(num == ""){
    document.querySelector("#output-value").innerText = "";
  }
  else{
  document.querySelector("#output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num){
  if(num == "-"){
    return "";
  }
  return Number(num).toLocaleString("en");
}
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
var operator = document.querySelectorAll(".operator");
for(let i = 0; i < operator.length; i++)
{
  operator[i].addEventListener("click", function(){
    if(this.id == "clear")
    {
      setOutput("");
      setExpression("");
    }
    else if(this.id == "backspace")
    {
      var output = reverseNumberFormat(getOutput()).toString();
      if(output)
      {
        setOutput(output.substr(0,output.length-1));
      }
    }
    else
    {
        var output = getOutput();
        var expression = getExpression();
        if(output == "" && expression != "")
        {
          if(isNaN(expression[expression.length-1]))
          {
            expression = expression.substr(0,expression.length-1);
          }
        }
        if(output != "" || expression != "")
        {
          output = output == ""? output:reverseNumberFormat(output);
          expression += output;
          if(this.id == "=")
          {
            setOutput(eval(expression));
            setExpression("");
          }
          else
          {
              expression += this.id;
              setExpression(expression);
              setOutput("");
          }
        }
    }
  })
}
var digit = document.querySelectorAll(".digit");
for(let i = 0; i < digit.length; i++)
{
  digit[i].addEventListener("click", function(){
     var output = reverseNumberFormat(getOutput());
     if(output != NaN){
       output = output + this.id;
       setOutput(output);
     }
  })
}
