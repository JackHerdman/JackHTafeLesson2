for(let i = 0; i < 5; i += 1){ //first  called i starts at 0
                                //conditional statement -if i is less than 5 continue the loop
                                //increment statement - add to the value by 1
    console.log(i);             // print i until i < 5, then it will stop
}

let students = ["Dave","Christine","Haley"]; //students.length = 3 
for (let i = 0; i < students.length; i++){  //if i is less than the array total ++ will add 1
    console.log(students[i]);                //print element to console
}

//Post Increment i++
// access the variable and after using it sets it to one higher
let myNumber = 10
console.log(myNumber++);  //will print 10 and then increment 1
Console.log(myNumber);    //has been incremented, will print 11

//Pre Increment ++i
// set one higher to the variable and then access it

//Pre and Post Decrement --
//sets the variable to one lower

let i = 0;
while ( i < 5){
    console.log(i);
    i++
}



let students = ["Dave","Christine","Haley"];
let i=0
console.log(students[3])
while (students[i]){
    console.log(students[i]);
    i++
}


for(let i = 0; i < 5; i++){
    if(i == 2){
        continue; //when i is = 2 then repeat
    }
    console.log(i);
}

for(let i = 0; i < 5; i++){
    if(i == 2){
        break; //when i is = 2 then stop everything
    }
    console.log(i);
}