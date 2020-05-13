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
  
  //single entry added to an array - My work
    // let sports = ["Tennis", "Soccer", "Rugby"];
    // console.log(sports);
    // let userInput1 = await askQuestion("Name another sport: ");
    // sports.push(userInput1);
    // console.log(sports);

//looped entry to add 5 to an array - Lukes work
    let sports = [];
    for (let i = 0; i < 5; i++) {
        let userInput = await askQuestion ("name a sport: ");
        sports.push(userInput)
    }
    console.log(sports)
}
  

Program().then(() => {
    process.exit(0);
});
