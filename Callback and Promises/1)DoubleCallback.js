// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

function doubleArray(arr, callback) {
    const doubleArray = arr.map((el) => {
        return callback(el);
    });
    return doubleArray;
}
function callback(el) {
    return el * 2;
}




let Myarray = [1, 2, 3, 4, 5, 6];

let result = doubleArray(Myarray, callback);
console.log(result);