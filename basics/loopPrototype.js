// Loop through indexes of array and print only the index
/**
 * Problem statement
 * Array.prototype.additionProperty = "Hello new property"
 * let arr = [1,2,3,4]
 * Print only the actual indexes
 */

Array.prototype.additionalProperty = "Hello new property"
let arr = [1,2,3,4]

for(let i in arr) {
    // console.log(i)   this will print additional Property as well so using hasOwnProperty we can ignore the values
    if(arr.hasOwnProperty(i)) {
        console.log(i)
    }
}
