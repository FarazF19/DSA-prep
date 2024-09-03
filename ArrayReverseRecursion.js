let arr = [3, 5, 7, 11, 10, 9];
let temp;

function arrayReverse(data, start, end) {
    console.log(data);
    if (start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        arrayReverse(data, start + 1, end - 1)
    }

}

console.log(arrayReverse(arr, 0, arr.length - 1));


