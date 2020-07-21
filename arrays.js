// array time!

// split
// const bestFriend = "Colleen";

// const bestFriendArray = bestFriend.split("");

// console.log("My best friend in array format", bestFriendArray);

// //  Join

// const array2 = ["cow", "horse", "pig"];

// const string = array2.join(", ");
// console.log(string.split(", "));

//  POP

const animals = ["horse", "pig"];

// const lastAnimal = animals.pop();
// console.log(animals, lastAnimal);
// pop removes the last item of an array and returns it as a STRING!

// Shift

// const first = animals.shift();
// console.log(first);
// console.log("animals", animals);

// animals.unshift("cow");
// console.log(animals);

// animals.push("bunny");
// console.log(animals);

// Write a function that takes an array and an index and prints out that value!
// const arrayIndexing = (array, index) => {
//     return  array[index];
// }

// console.log(arrayIndexing(animals, 1));

// Write a function that takes an array of something and tells you if the name 'Greg' is in the array

let names = ['Greg', 'Adam', 'Steve', 'Bill']
const namefind = (array) => array.includes("Greg");
console.log(namefind(names));