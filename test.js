"use strict";

let person = {
  name: "Mason",
  greeting: function () {
    console.log(`Hello! I'm ${this.name}`);
  },
};

person.greeting();
