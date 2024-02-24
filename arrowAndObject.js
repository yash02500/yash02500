// An arrow function which returns the product of two numbers

const productOfTwo=(a,b)=>a*b; // writing product expression using arrow function

console.log(productOfTwo(2,5));


// Creating a student object 

const student={
   name:"yash",
   age:21,
   greet:function(){   // function to greet using this keyword
    console.log(`Hello i am ${this.name}`);
 }
};

console.log(student); // printing student object
student.greet(); // calling greet function