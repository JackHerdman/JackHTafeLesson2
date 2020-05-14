// //Write a console app that counts the number of times an element appears in an array.


// let myArray = [1, 2, 3, 4, 5, 1, 1, 3, 4]; // the array
// let numberOf1s = 0; //make a variable starting at 0 to count
// for(i = 0; i < myArray.length; i++){ //for each element in the array do the following
//     if(myArray[i] == 1){ //if the element = 1 
//         numberOf1s++; // add increment the counter
//     }
// }
// console.log (`There are ${numberOf1s} 1s in the array`) //output answer



let myNumbers = [1, 2, 3, 4, 5, 1, 1, 3, 4]; // the array

//BELOW CODE broken
let foundNumbers = [];
let foundNumberValues = [];
for (let i = 0; i < myNumbers.length; i++) {
    let number = myNumbers[i];
    let found = false;
    for(let j = 0; j < foundNumbers.length; j++){
        if(foundNumbers[j] == number){
            foundNumberValues[j]++;
            found = true;
            break;
        }
    }
    if (found == false){
        foundNumbers.push(number);
        foundNumberValues.push(1);
    }
    
}

for(let i = 0; i < foundNumbers.length; i++) {
    console.log(`${foundNumbers[i]} appears in the list ${foundNumberValues[i]} times`);
}