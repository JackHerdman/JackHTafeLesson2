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
    // Your Code Goes Here...
    let sports = ["Tennis", "Soccer", "Rugby"];
    console.log(sports);
    let userInput1 = await askQuestion("Name another sport: ");
    sports.push(userInput1);
    console.log(sports);
    
}
  

Program().then(() => {
    process.exit(0);
});
