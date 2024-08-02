//Array merge with for loop- without sorting
let arr1 = [1,5,7,11,13];
let arr2 = [2,4,6,10,14];
let arr3 = [];

for (i=0;i<arr1.length;i++){
    arr3[i] = arr1[i];
}


for (i=0;i<arr2.length;i++){
    arr3[arr1.length + i] = arr2[i];
}
//console.log(arr3);

//Array Merge with while loop - with sorting(individual arrays must be in sorted order)

let data1 = [11,13,15,17,19];
let data2 = [10,12,14];
let data3 = [];

//starting positions of arrays
let d1 = 0;
let d2 = 0;
let d3 = 0;

while(d1<data1.length && d2<data2.length){

    if(d1<d2){
     data3[d3] = data1[d1];
     d1++
    }else{
     data3[d3] = data2[d2];
     d2++;
    }
    d3++;
}

while(d1<data1.length){
     data3[d3] = data1[d1];
     d1++;
     d3++;
}
console.log(data3);



