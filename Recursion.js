function factorial(item) {

    if (item == 0) {
        return 1;
    }
    return item * factorial(item - 1)

}

let num = 6;
//console.log(factorial(num));

// Head and tail recursion

function test(x) {
    //console.log(x);   //Head Recursion
    if (x > 0) {
        test(x - 1)
    }
    console.log(x);     //Tail Recursion
}
test(5)