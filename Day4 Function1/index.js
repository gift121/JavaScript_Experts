// Assignment on Function
// Create a parameter that turn the first item to capital letter
"use strict";
const capitalLetter = (sentence) => {
    
    let str = sentence.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    
    }
    return str.join(" ");
}
console.log(capitalLetter("i love myself so much"));
// Write a JavaScript function that accepts a number as a parameter and check the 



function myNum() {
    let number = prompt("Pick any number you want");
    if (number % 2 == 0) {
        console.log("This is an even number");
    }
    else {
        console.log("This is odd number");
    }
}

myNum();
// Write a JavaScript function that accepts an array as a parameter and prints each item in the array.
let kpop = ["BTS", "BlackPink", "Enhyphen", "BIBI"];
let myArray = firstArray(kpop);
function firstArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
        console.log(array[i]);
    }
    return array;
}
