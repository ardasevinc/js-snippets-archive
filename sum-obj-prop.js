"use strict"

function isEmpty(obj) {
  for (let prop in obj) {
      return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let prop in salaries) {
    sum += salaries[prop];
}

// OUTPUT

document.getElementById("lol").innerHTML = sum;
