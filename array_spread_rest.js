// Adding "empty string" in a place in array where the element is ' ' using map.  

const array= ['apple', 'oranges' , ' ', 'mango', ' ' ,'lemon'];
let array2=array.map(num=>{   // applying map method.
    return num===' '? num='empty string':num;  // checking whether element is empty
});
 console.log(array2);  // print new array