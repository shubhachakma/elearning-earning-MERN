let a, b;
let operator;
a = Number(prompt("Enter the first value: "));
operator =(prompt("Enter the Operator"));
b = Number(prompt("Enter the second value :"));
let Result;
if (operator === "+")
{
    Result = a + b;
}
else if (operator === "-")
{
    Result = a - b;
}
else if (operator === "*")
{
    Result = a * b;
}
else if (operator === "/") {
    if (b === 0)
    {
        Result="Error! don't enter zero"
    }
    else {
        Result = a / b;
    }
}
else {
    Result = "Enter the correct symbol";
}
alert("Result= "+Result);
console.log("Result= " + Result);

// console.log(a+b);