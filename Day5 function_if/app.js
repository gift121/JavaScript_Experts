// 1.Write a function `findLargest()`  that finds the largest between two number passed through when invoked.
let num1 = parseInt(prompt("what is your first number"));
let num2 = parseInt(prompt("What is your second number"));
function findLargest () {
    if (num1 > num2){
        console.log("the largest between this two number is" + num1);
    }
    else if (num1 < num2) {
        console.log("the largest between this two number is " + num2);
    }
    else{
        console.log("the both number are equal")
    }
}
findLargest();
// 2. Write a function check if a number is odd or even in JavaScript and log true or fals
let checkEvenOrOdd = parseInt(prompt("pick any number"));
function findEvenOrOdd(){
    if(checkEvenOrOdd / 2 === 0 ){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
findEvenOrOdd();

// 3. Check if a triangle is equilateral, scalene, or isosceles
// Function `findTriangleType()` finds the type of the triangle for given side values .
let a = parseInt(prompt("pick a number between 1-100"));
let b = parseInt(prompt("pick a number between 1-100"));
let c = parseInt(prompt("pick a number between 1-100"));
let sum = a+ b + c;
function findTriangleType(){
    if (sum===180 && a===b && a===c && b===c){
        console.log("This is an equilateral triangle")
    }
    else if(sum === 180 && a !==b && a!==c && b!==c){
        console.log("This is a scalene Triangle");
    }
    else if(sum === 180){
        console.log("This is an Isoceles Triangle");
    }
    else{
        console.log("This is not a valid Triangle");
    }
}
findTriangleType();

// 4. Using JavaScript switch statement to determine the name of the day of the week; i.e.
// 0 - sunday, .  .  . 6 - saturday
let day;
switch(new Date().getDay()){
case 0 :
    day = "Sunday"; 
    break
case 1:
    day = "Monday";
    break
case 2:
    day = "Tuesday";
    break;
case 3: 
    day = "Wednesday";
    break
case 4:
    day = "Thursday";
    break
case 5:
    day = "Friday";
    break
case 6:
    day = "Saturday";
    break
default:
    day = "looking forward to the rest of the week"
}
document.getElementById('demo').innerHTML = 'Today ' + day;