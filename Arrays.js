// let student1 = "Dave";
// let student2 = "Christine";
// let student3 = "Haley";  //effort to list multiple things

let students = ["Dave","Christine","Haley", 0, 3.14]; //arrays dont have to be same type
console.log(students); // will list all elements
console.log(students[1]); //will list selected element Dave is 0, christine is 1
students[1] = "Chris"; //changes can be made to individual elements
console.log(students)

students.push("Daniel"); //push can be used to add to an array

students.pop(); //pop will only REMOVE the final element

console.log(students.pop()); //this will both remove AND list to the console the removed element