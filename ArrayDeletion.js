// Array deletion without methods
let data = [1,3,5,2,4,6];
let position = 2;

for (let i = position; i < data.length-1; i++) {
     data[i] = data[i+1];
    
}
data.length = data.length - 1;
console.log(data);


//Splice method 
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Starts at index 2, removes 1 element
console.log(arr); // Output: [1, 2, 4, 5]
