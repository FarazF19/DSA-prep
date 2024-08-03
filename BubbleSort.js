//Array Sorting with Bubble Sort
let arr = [5,3,9,8,1,11,20,17,15,30];

for (i=0; i<arr.length; i++){
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j]>arr[j+1]){

            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;    
        }  
    }
}
console.log(arr);
