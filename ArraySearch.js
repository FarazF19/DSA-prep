
//Array Searching manually
let arr = [2,4,6,5,7,9];

let newEl = 5;

for(let i=0; i<arr.length;i++){
    
    if(arr[i]==newEl){
        console.log(i);
        break;
    }
}

//Using indexOf method
let array = [2, 4, 6, 5, 7, 9];
let newElem = 5;

let index = array.indexOf(newElem);

if (index !== -1) {
    console.log(index);
} else {
    console.log('Element not found');
}
