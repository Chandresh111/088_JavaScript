//  function min(hour,min) {

//     let result=hour * 60 * 60 + min * 60 ;
//     console.log(result);
    
// }

// min(3,34)


// const person = {
//     name: "chandresh",
//     age: 23,
//     greet: function() {
//       return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//     }
//   };
  
//   console.log(person.greet());
  


//  function person(name,age,lec,gender){
//     this.name=name;
//     this.age=age;
//     this.lec=lec;
// }
//   let student=new person("shivam",23,"Math",)
//   console.log(student.name); 
//   console.log(student.age);  
//   console.log(student.lec); 

//   student.grade = "A+";
//   console.log(student.grade); 

//   person.prototype.con="India"
//   console.log(student)


  
// function person(name, age, lec) {
//     this.name = name;
//     this.age = age;
//     this.lec = lec;

//     this.pname = function() {
//         console.log("hi");
//     };
// }

// let student = new person("shivam", 23, "Math");
// person.prototype.con = "India";

// console.log(student.pname());
// console.log(student)


  
//  class person{
//     constructor(name, age, lec) {
//         this.name = name;
//         this.age = age;
//         this.lec = lec;
//  } 
//  Pname(){
//     console.log(this.name + " " + this.age);
//     return this.age;
//  }

// }
// const student = new person("shivam", 23, "Math");
// console.log(student.Pname())




// // Main Product Class
// class AutomotiveProduct {
//     constructor(name) {
//       this.name = name;
//       this.mainFeature = "Self-driving capability";
//     }
  
//     showMainFeature() {
//       return `${this.name} has: ${this.mainFeature}`;
//     }
//   }
  
//   // Variant 1
//   class ElectricCar extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "Battery-powered with fast charging";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   // Variant 2
//   class HybridCar extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "Combines electric and fuel engine";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   Variant 3
//   class SportsCar extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "High speed with aerodynamic design";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   // Variant 4
//   class SUV extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "All-terrain capability and spacious interior";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   const electric = new ElectricCar("BMW m1");
//   const hybrid = new HybridCar("BMW M2");
//   const sports = new SportsCar("BMW M3");
//   const suv = new SUV("BMW M4");
  
//   console.log(electric.showFeatures());
//   console.log(hybrid.showFeatures());
//   console.log(sports.showFeatures());
//   console.log(suv.showFeatures());
  





// Parent class
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
  
//     present() {
//       return `I have a ${this.carname}`;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       console.log("This is from Child Class");
//       super(brand); 
//       this.model = mod;
//     }
  
//     show() {
//       return `${this.present()}, it is a ${this.model}`;
//     }
//   }
//     let myCar = new Model("Ford", "Mustang",);
//     console.log(myCar.show());
  




// class Car {
//     constructor(brand) {
//       this.brand = brand;
//     }
  
//     start() {
//       return `${this.brand} is starting...`;
//     }
//   }
  
//   const myCar = new Car("Toyota");
  
//   console.log(myCar.start());






// Parent class
class Car {
    constructor(brand) {
      console.log("This from Parent Class");
      this.carname = brand;
    }
  
    present() {
      return `I have a ${this.carname}`;
    }
  }
  
  // Child class
  class Model extends Car {
    constructor(brand, mod, func) {
      console.log("This from Child Class");
      super(brand); // Call parent constructor
      this.func = func; // Store function passed as parameter
      this.model = mod;
    }
  
    show() {
      return `${this.present()}, it is a ${this.model}`;
    }
  }
  
  // Simple function
  let func = () => {
    console.log("Hello");
  };
  
  // Create object of child class and pass a function
  let myCar = new Model("Ford", "Mustang", func);
  
  // Call the function stored in the object
  myCar.func();
  
  // Show car details
  console.log(myCar.show());
  








  