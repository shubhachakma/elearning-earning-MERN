const secretnum = 80;
let usernum = prompt("guest the number 1 to 100");
while (usernum !== secretnum)
{
    if (usernum > secretnum)
    {
        usernum = prompt("it to big! try to another number");
    }
    else {
        usernum = prompt("it to small! try to another number");
    }
    usernum = Number(usernum);
}
console.log("Win");
alert("Welcome you level up to another lavel");