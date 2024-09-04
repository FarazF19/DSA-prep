let str = "Hello";
let obj = {};

for (let ch of str) {
    if (obj[ch] === undefined) {
        obj[ch] = 1; // Initialize with 1 if the character is not already in the object
    } else {
        obj[ch]++; // Increment the count if the character is already in the object
    }

    console.log(obj[ch]); // Now this will print the count of the character
}
