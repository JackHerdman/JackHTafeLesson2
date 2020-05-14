let myNumbers = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5];
let myCountedNumbers = [];
for (i = 0; i < myNumbers.length; i++) {
  let name = myNumbers[i]; {

    let found = false;
    for (let j = 0; j < myCountedNumbers.length; j++) {
      let element = myCountedNumbers[j];
      if (element.name == name) {
        found = true;
        element.count++;
        break;
      }
    }
    if (found == false){
    myCountedNumbers.push({
    name: name,
    count: 1
    });
    }
  }
  }
  console.log(myCountedNumbers);

  for (i = 0; i< myCountedNumbers.length; i++) {
      let element = myCountedNumbers[i];
  console.log(`the number ${element.name}, is found ${element.count} times.`) }
