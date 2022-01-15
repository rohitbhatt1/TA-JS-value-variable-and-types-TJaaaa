// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
 let age = +prompt("Enter a age");
 if(age >= 12 && age <= 55){
   alert(`You can participate in the marathon`);
 }else if(age >= 4 && age <= 11){
   alert(`you are too young to participate in the marathon`);
 }else if (age < 4){
   alert(`Hey kiddo! can you Walk ?`);
 }else if (age > 55){
   alert(`You are too old to participate in the marthon`);
 }else{
   alert(`HEy please check where is wrong`);
 };



// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
 let n = prompt("Enter a number");
 let string = "";
 let letter = "e";
 for(let i = 0; i < n; i = i+1) {
    string = string+letter;
 }
 alert(`h${string}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let add = prompt("Enter a number");
let sum = 0;
for(i = 1; i <= add; i = i+1){
  sum = i;
}

alert(`The sum of Natural number ${sum}`);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let number = +prompt("Enter a number");


switch(number){
     case 1:
       alert(`one`);
      break;
     case 2:
       alert(`Two`);  
      break;
     case 3:
       alert(`Three`)
      break;
      case 3:
        alert(`Four`)
       break;
      case 3:
       alert(`Five`)
      break;
     case 6:
       alert(`Six`)
      break;
      case 7:
        alert(`Seven`)
       break;
       case 8:
        alert(`Eight`)
       break;
       case 9:
        alert(`Nine`)
       break;
       case 10:
        alert(`Ten`)
       break;
       default:
         alert(`Check again`);

}



/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]


let marks = prompt("Enter a Marks (0 - 100)");

switch(true){
    case marks > 90:
      alert("AA");
    break;
    case marks > 80 && marks > 90:
      alert("AB");
    break;
    case marks > 70 && marks < 80:
      alert("BB")
    break;
    case marks > 60 && marks < 70:
      alert("BC");
    break;
    case marks > 50 && marks < 60:
      alert("CC");

    break;
    case marks > 40 && marks < 50:
      alert("CD");
    break;
    case marks > 30 && marks < 40:
      alert("DD");
    break;
    case marks < 30:
      alert("FF");
    break;
    default:
    alert("please check where is Mistake");
}




/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

const numA = prompt("ENter a  Fisrt Number");
const numB = prompt("Enter a Second Number");

if(numA>numB){
  alert(`${numA} is greater.`);
}else{
  alert(`${numB} is greater`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]


let operator=prompt(`enter operetor (+,-)`)
let num1=+prompt(`Enter your first number`)
let num2=+prompt(`Enter your second number`)
let num3=+prompt(`Enter your three number`)
let result;
if
  (operator ==`+`){
    result=num1+num2+num3
  }
  else{
    result=num1-num2-num3
  }
  alert(`${num1} ${operator}${num2} ${operator}${num3}=${result}`);


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let operator = prompt(`Enter Operator +,-,*,/`);
let num1 = +prompt("Enter a Fisrt Number");
let num2 = +prompt("Enter a Secod Number");

let result;
if(operator == '+'){
  result = num1 + num2;
} else if (operator == '-'){
  result = num1 - num2;
} else if (operator == '*'){
  result = num1 * num2;
}else if (operator == '/'){
  result = num1/num2;
}else{
  result = "please check again";
}
alert(`${num1} ${operator} ${num2} = ${result}`);