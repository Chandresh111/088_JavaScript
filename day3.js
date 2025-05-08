// const person1 = {
//     name: "joe",
//     age: 23,
//     city: "mumbai"
// };

// const person = {
//     pname: function () {
//         console.log(this.name + " " + this.age);
//         return this.age;
//     }
// };

// person.pname.apply(person1); 



// arr=[2,3,5,7,9,0]

// let iter=arr[Symbol.iterator]();

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())



// function showMessages() {
//     console.log("This is the first statement");
//     console.log("This is the second statement");
//     return;
//   }
  
//   showMessages();
  


// function *gen(){
//     console.log("hello")
//     yield 1;
//     console.log("world")
//     yield 2;
//     console.log("good bye")
// }

// const g=gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// let rows = 6;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }



// function myDisplay(some) {
//     console.log(some);
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
//     if (x == 0) {
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function(value) { myDisplay(value); },
//     function(error) { myDisplay(error); }
// );



// function mydisplay(hello){
//     console.log(hello);
// }

// let mypromise=new Promise(function(ourResolve,ourReject){
//     let x=0;
//     if(x==0){
//         ourResolve("done")
//     } else {
//         ourReject("wrong")
//     }
    
// });

// mypromise.then(
//     function(value){mydisplay(value);},
//     function(error){mydisplay(value);}

// );



// function myDisplay(value) {
//     console.log(value);
// }

// async function myfunction() {
//     return 8 + 2;
// }

// myfunction().then(
//     function(value) { myDisplay(value); },
//     function(error) { myDisplay(error); }
// );



// async function myFunction() {
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello World inner");
//             console.log("Hello world");
//         }, 2000); // 2 seconds delay
//     });

//     let result = await prom;
//     console.log(result);
// }

// myFunction().then(
//     function(value) { console.log(value); },
//     function(error) { console.log(error); }
// );



// // Function that simulates a data fetch..................
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ data: "This is the fetched data" }); // simulate 2-second delay
//         }, 2000);
//     });
// }

// // Async function to handle fetching and processing data................
// async function processData() {
//     try {
//         console.log("Fetching data...");
//         const result = await fetchData(); // wait for Promise to resolve
//         console.log("Fetched data:", result.data);

//         // Simulate further processing
//         return `Processed: ${result.data}`;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         throw error; // rethrow the error to be handled below
//     }
// }

// // Call the async function..............
// processData()
//     .then(processedData => {
//         console.log("Processed data:", processedData);
//     })
//     .catch(error => {
//         console.error("Final error:", error);
//     });


//

