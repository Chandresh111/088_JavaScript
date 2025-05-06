
let x=4;
let y=10e45;
let isTrue=true;
let z="hello 8+2";

let obj={name:"chandresh" , age:30};
let arr=[10,203,40];
let nullValue=null;

let func=function(){return "Hello world";};
let undefinedValue;
let symbolValue=Symbol("w");

let bigIntValue=BigInt(12234454352332524524525);
let demo=`the sum of the number ${4+5}`

console.log(demo);
console.log("x:",x);

console.log("y:",y);

console.log("y:",z);
console.log(func());
console.log("arr:",arr);
console.log("nullValue:",nullValue);


let a = 10, b = 5;

// Arithmetic Operators
console.log("Add:", a + b);
console.log("Multiply:", a * b);

// Comparison Operators
console.log("Is a > b?", a > b);
console.log("Is a equal to 10 and b equal to 5?", a === 10 && b === 5);
console.log("Is a equal to 10 or b equal to 5?", a === 10 || b === 5);
console.log("Is a not equal to b?", a !== b);
console.log("Is a less than b?", a < b);
console.log("Is a greater than or equal to b?", a >= b);

let x_ =5 , y_ ="5";
console.log(x_ ===y_);

x_="5";
y_=10;

console.log(x_ ===y_);
console.log(x_ ==y_);
console.log(x_ !==y_);


if(x>10){
    document.write("value is greater than 10");
}



if(x!==10){
    document.write("Try another");
}
else{
    document.write("it is 20");
}



if(x<=18){
    document.write("cant vote");
}
else{
    document.write("you may ");
}
if(x==18){
    document.write("you can vote ");
}


const now = new Date();

document.write("Date and Time: " + now);

function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}
console.log(getType(42));           
console.log(getType("Hello"));       
console.log(getType(true));         
console.log(getType({}));            
console.log(getType([]));            
console.log(getType(null));         
console.log(getType(undefined));     
console.log(getType(function(){}));  



// let userid=prompt("enter your user id");
// let paasword=prompt("enter your paasword");


// if (userid =="chandu123" && paasword=="1234:") {
//     console.log("login successfull");
//   } else {
//     console.log("login fail");
//   }
  

  let value = 5; // 

  for (let i = 1; i <= 10; i++) {
    console.log(`${value} * ${i} = ${value * i}`);
  }

  let values = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${values} * ${i} = ${values * i}`);
}

let i = 1;

while (i <= 10) {
  console.log(`${value} * ${i} = ${value * i}`);
  i++;
}

let person = {
    name: "chandresh",
    age: 22,
    value: function() {
      console.log("Hello, my name is " + this.name);
    }
  };

console.log(person.name);      
console.log(person["age"]);     
person.value();  


let unit={}
unit.names="chandu";
unit.age=12;

console.log(unit);

for(x in unit){
    console.log(x , unit[x]);
}


const str = "Hello";

for (const char of str) {
  console.log(char);
}


let userDatabase = {
    chandu123: "1234",
    shivam: "dube123",
    aditya: "121212"
  };
  
  let userid = prompt("Enter your user ID");
  let password = prompt("Enter your password");
  

  if (userDatabase[userid] && userDatabase[userid] === password) {
    console.log("Login successful");
  } else {
    console.log("Login failed");
  }
  

  
