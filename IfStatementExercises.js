const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
  //1. Write a console app that takes 2 numbers entered by the user and prints the larger number to the console
  //2. Write a console app that takes 2 numbers entered by the user and prints them to the console in order from largest to smallest
  //3. Same as 2 but from smallest to largest.
    console.log("Which number is larger?")
    let userInput1 = await askQuestion("Enter the first number: ");
    let number1 = parseInt (userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let number2 = parseInt (userInput2);
    if(number1 > number2){
        console.log(`The larger number is ${number1}`);
    }else{
    console.log(`The larger number is ${number2}`);
}
if(number1 > number2){
    console.log(`In order of smallest to largest, your numbers are ${number2}, ${number1}`);
}else{
console.log(`In order of smallest to largest, your numbers are ${number1}, ${number2}`);
}
if(number1 > number2){
    console.log(`In order of largest to smallest, your numbers are ${number1}, ${number2}`);
}else{
console.log(`In order of largest to smallest, your numbers are ${number2}, ${number1}`);
}
}
  

Program().then(() => {
    process.exit(0);
});
