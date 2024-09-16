// Array Sorting with SelectionSort - Ascending Order
function selectionSort(data) {
    let minVal;
    for (let i = 0; i < data.length; i++) {
        minVal = i;

        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minVal]) {        // for descending order change < to > in condition
                minVal = j;
            }
        }

        // Swapping minValue    
        let temp = data[minVal];
        data[minVal] = data[i];
        data[i] = temp;
    }

}
let arr = [20, 12, 53, 3];
selectionSort(arr);
console.log(arr);
