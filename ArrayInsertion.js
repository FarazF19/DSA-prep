let arr = [5,7,9,4,6,8];

let newEl = 10;
let position = 3;

for (let i=arr.length-1; i>=0; i-- ){
     
     if(i>=position){
       arr[i+1]=arr[i];

       if(i===position){
         arr[i]=newEl;
       }
     }
     
     
}
console.log(arr);


//Array insertion in last 
let array = [1, 2, 3, 4, 5];
let newElem = 20;
let postion = arr.length;

array[array.length] = newElem; // Since position is equal to arr.length, no need to shift elements

console.log(array);