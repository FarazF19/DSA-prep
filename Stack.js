let data = [];
let currentSize = data.length;
let max = 7;

function push(newVal) {

    if (currentSize >= max) {
        console.log("Stack is full");

    }
    data[currentSize] = newVal;
    currentSize += 1;
}

function pop() {
    if (currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
    } else {
        console.log("stack is empty already!");

    }
}



push(5);
push(6);
push(2);
push(1);
push(9);
pop();
pop();

console.log(data);
