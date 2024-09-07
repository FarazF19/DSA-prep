let arr = [25, 7, 89, 0, 9];

let largestNum = arr[0];

function largestElem(data) {

    for (let i = 1; i < arr.length; i++) {
        if (data[i] > largestNum) {
            largestNum = data[i];
        };
    }
    return largestNum;
}


console.log(largestElem(arr));

