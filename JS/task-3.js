function filterArray(numbers, value) {
let newArray = [];


for (const number of numbers) {
// for (let i = 0; i < numbers.length; i += 1) {
if (number < value) {
return newArray.push(number);
// // // // newArray.push('number')
// //  console.log('test');
//   }
// console.log(numbers[i])
}
//   console.log(newArray);
// console.log(newArray)

// console.log(newArray)
}
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }
