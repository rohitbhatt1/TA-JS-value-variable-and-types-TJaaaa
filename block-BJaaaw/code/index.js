// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = +prompt("enter a number");
if (num  %2 ===0 ) {
  alert("number is even")
}else {
  alert("number is odd")
}

// let num1 = +prompt("enter a number");
//  if (num1 %3 ===0) {
//    alert("number is odd")
//  }else {
//    alert("number is even")
//  }


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
 
let numA  =  +prompt("enter first number") 
let numB  =   +prompt("enter second number") 
  if (numB > numA) {
    alert(`the ${numB} is max`)
  } else if(numA > numB) {
    alert(`the ${numA} is max`);
  }

// 3. Convert the above code using`?` terniary operator

numA > numB ? alert(`${numA} is greater`): alert(`${numB} is greater`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

 let houseName = prompt("enter a housename");

 if (houseName === "stark") {
   alert('Winter is Coming');
 }else if(houseName === "lannister"){
  alert('A lannistr aleays pays his debt');
 }else{
  alert('All men must die');
 }


// 5. Convert the above code using`?` terniary operator

houseName === "stark" ? alert('Winter is Coming'): (houseName === "lannister" ? alert('A lannistr aleays pays his debt'): alert('All men must die'));

// Switch


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
 
let monthName = prompt('Enter a Month Name')

switch(monthName){
  case "january":
    alert("The number of days is 31")
    break;
  case "febuary":
    alert("The number of days is 28")
    break;
 case "march":
    alert("The number of days is 29")
    break;
  case "April":
    alert("The number of days is 31")
    break;
  case "may":
    alert("The number of days is 30")
    break;
  case "june":
    alert("The number of days is 31")
    break;
  case "july":
    alert("The number of days is 31")
    break;
  case "August":
    alert("The number of days is 31")
    break;
  case "September":
    alert("The number of days is 31")
    break;
  case "october":
    alert("The number of days is 31")
    break;
  case "november":
    alert("The number of days is 20")
    break;
  case "December":
    alert("The number of days is 31")
  break;
  default:
  alert("not a valid input")
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let handAMOUNT = +prompt("enter a salary")

if  (handAMOUNT <= 20000 ){
  alert("Tax is 10%")
}else if(handAMOUNT <= 40000) {
  alert("tax is 20 %")
} else if (handAMOUNT >= 50000){
  alert("tax is 30%")
}else{
  alert("tax is free")
}
   

//  if..else vs switch
let handAmount1 = prompt('Enter a salary');
switch(true){
    case handAmount1 <= 20000:
    alert("tax10%");
    break;
    case handAmount1 <= 30000:
    alert("tax20%");
    break;
    case handAmount1 <= 40000:
    alert("tax30%");
    break;
    case handAmount1 <= 60000:
    alert("tax40%");
    break;
    case handAmount1 <= 80000:
    alert("tax45%");
    break;
    case handAmount1 <= 100000:
    alert("tax50%");
    break;
    default:
   alert("practice")

}
 

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
 let  marks = +prompt("enter a marks");

 if (marks > 100){
   alert("marks can't be greater than 100")
 } else if (marks > 80 && marks < 100){
   alert("Grade A")
 }else if(marks > 50 && marks < 80){
   alert("Grade b")
 }else if(marks > 30 && marks < 50){
   alert("Grade c")
 }else if (marks > 0){
   alert("Grade D")
 }


 let marks1 = +prompt("enter a marks1")

 switch(true){
   case marks1 > 100 :
     alert("marks can't be greater than 100");
     break;
    case marks1 > 80  && marks1 < 100:
     alert("Grade A");
     break;
    case marks1 > 100 :
     alert("marks can't be greater than 100");
     break;
     default:
       alert(`not`);
       break;
 }

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`);

if (weather == `sunny`) {
      alert(`Wear a T-shirt`);
}else if (weather == `rainy` ){
  alert(`Don't forget to take your raincoat`);
}else if (weather == `hot`){
  alert(`Get a hanky`);
}else if (weather == `freezing`){
  alert(`Get your sweeter on`);
}else {
  alert(`Not a valid input`);
}

