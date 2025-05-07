// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// let celsius = 25;
// let fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`${celsius}°C = ${fahrenheit}°F`);


// let str = "this is \"string\"";

// console.log(str.length);            
// console.log(str.at(10));            
// console.log(str.indexOf("is"));     
// console.log(str.toUpperCase());   
// console.log(str.toLowerCase());     
// console.log(str.lastIndexOf("the"));
// console.log(str.substring(3, 7));  
// console.log(str.charCodeAt(3));  
// console.log(str.charAt(4));    
// console.log(str.slice(0,-4));            




// let str1="hello";
// let str2="edabit";

// let isEqual=(str1===str2);
// console.log(isEqual);




// let arr=["banana" , "apple" ,"mango"]
// let string="mango";

// function findStringIdex(arr,string){
//     return arr.indexOf(string); 

// let result=findStringIdex(arr,"mango")
// console.log(result)

  

// stri="Hello world"
// let result1=stri.padStart(5,"*")
// console.log(result1)



// function name(a,b){
//     return a*b;
// }

// let num=name(5,7)
// console.log(num)


// const func=()=> console.log("Hello world")
// func()


// function hello(...num){
//     console.log(num)
// }
// hello(45,56,2,2)



// function ninza(num){
//     console.log(num)
// }
// ninza(45,56,2,2)


// arr=[10,20,30,40,50,60,70]
// console.log(typeof arr)


// const unnc=()=>{
//     const g=10
//     const h=87
//     return g+h
// }
// console.log(unnc())



// const funct=()=>{
//     let h=-2
//     return h

// }

// console.log(-funct())


// arr=[10,20,30,40,60,70,80,25]
// console.log(arr[0])
// console.log(arr[arr.length-1])

// const arr1=new Array //new key for initiate new array
// ("this","is", "a")
// console.log(arr1[0])


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for(x of arr){
//     console.log(x)
// }



// arr=[12,21,34,5,6,7]
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr)


// const arr2=new Array("hello","world","chandresh","Dhiraj")
// console.log(arr2[arr2.length-1])
// console.log(arr2[2])
// console.log(arr2)


// arr=[12,21,34,5,6,7]
// let reverse=[]

// for(let i=arr.length-1;i>=0;i--){
// reverse.push(arr[i])
// }

// console.log(reverse)

// function reverse(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let output = reverse(input);
// console.log(output);



// arr=[1,2,3,4,5,6,7,8,9,0]
// console.log(arr.push(11))
// console.log(arr.pop(1))
// console.log(arr.shift())
// console.log(arr.unshift(0))
// console.log(arr.slice(0,5))
// console.log(arr.splice(0,8))

// console.log(arr.flat())// create a new sub array 
// console.log(arr.sort())

// console.log(arr.reverse())
// console.log(arr.toSorted())

// let array = [1, 3, 5, 7, 9];

// array.map((value, index, originalArray) => {
//     console.log("Value x2:", value * 2);      // value multiplied by 2
//     console.log("Index:", index);             // current index
//     console.log("Original Array:", originalArray); // the original array

//     return value * 2;
// });


// let array = [1, 3, 5, 7, 9];
// array.filter((x,y,z)=>{
//     if(x%2==0){
//         console.log(x)
//     }
// }
// )


// array=[12,23,45,56]
// array.map((value,index,array)=>{
//     console.log("value:"+value)
//     console.log("Index:"+index)
//     console.log("Array:"+array)
// })


// arr1=[2,4,6,5,6,7,8,0]

// let func=(x,y,z)=>{
//     if(x%2==0){
//         console.log(x)
//     }
// }
// arr1.filter(func)


// arr1=[2,4,6,5,6,7,8,0]

// arr1.reduce((acc,x,y,z)=>{
//     console.log(acc + x)

//     console.log(y)
//     console.log(z)
//     return acc + x

// })


// function concate(arr1,arr2){
//     let result=[]

//     for(let element of arr1){
//         result.push(element)
//     }

//     for(let element of arr2){
//         result.push(element)
//     }

//     return result
// }

// let a=[12,23,45,56]
// let b=[87,65,43,4]
// let combine=concate(a,b)
// console.log(combine)



// function filterBetween(num1, num2, arr) {
//     return arr.filter(x => x > num1 && x < num2);
//   }
  
//   let numbers = [1, 4, 6, 8, 10, 15];
//   let result = filterBetween(5, 12, numbers);
//   console.log
  



