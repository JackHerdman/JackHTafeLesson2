// //1. Write a console app that writes the numbers from 1 to 7 to the console
// //for
// for (let i = 1; i <=7; i++){
//     console.log(i);
// }

// //  //while
// let i = 1
// while (i <= 7){
//     console.log(i);
// i++;
// }

// //2. Write a console app that writes even numbers from 2 to 8 (inclusive) to the console
// //   (hint, you will need to not use the increment operator) 

// // for loop
// for(let i = 2; i <= 8; i+=2){        
//     console.log(i);
// }

// // while loop
// let i = 0
// while (i < 10){
//     if (i % 2 ==0){
//         console.log(i);
//     } i+=2
// }

// //3. Write a console app that prints the elements of an array in reverse.
// let students = ["Dave","Ariana","Christine","Haley","Annette"];
// for (let i = students.length - 1; i >= 0; i--){  
//     console.log(students[i]);      
//     }
// }

// let students = ["Dave","Ariana","Christine","Haley","Annette"];
// let i = students.length - 1;
// while(students[i]){
//     console.log(students[i]);
//     i--
// }

// //4. Write a console app that prints the elements of an array that begin with the letter a 
// //   (hint, a string is an array of characters so you can access the first character 
// //   the same way you would access the first element in an array)

// let students = ["Dave","Ariana","Christine","Haley","Annette"];
// for (let i = 0; i < students.length; i ++) {
//  if (students[i].charAt(0) === 'A') {
//  console.log(students[i]);
//  }
// }

//lukes code
let students = ["Dave","Ariana","Christine","Haley","Annette"];
for (let i = 0; i < students.length; i ++) {
    let currentStudent = students[i];
    if(currentStudent[0] == "A"){
        console.log(currentStudent);
    }
}

// let students = ["Dave","Ariana","Christine","Haley","Annette"];
// let i = 0
// while (i < students.length){
//     let currentStudent = students[i];
//     if(currentStudent[0] == "A"){
//         console.log(currentStudent);
//     }
//     i++
// }