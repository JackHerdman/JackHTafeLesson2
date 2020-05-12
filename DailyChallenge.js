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
//Write a console app that takes strings from the user and adds them to an array until the
//user enters a duplicate entry. Then stop accepting user input and print each element in 
//the array to the console.
let numbers = [];
console.log("Enter a number less than 5")
    let userInput1 = await askQuestion("Enter the first number: "); 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != numbers) {
            numbers.push(userInput1);
        console.log([numbers]);
        } else (console.log("You have already entered that number"))
       }
       let userInput2 = await askQuestion("Enter the second number: "); 
       for (let i = 0; i < numbers.length; i++) {
           if (numbers[i] != numbers) {
            numbers.push(userInput2);
           console.log([numbers]);
           }
          }

 
}
  

Program().then(() => {
    process.exit(0);
});
