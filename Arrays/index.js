// let fruits=["apple","orange","kiwi"];

// fruits.push("lauda");// Push the element in last

// fruits.pop();// removes the last element

// fruits.unshift("mango");// adds the element in starting 

// fruits.shift();// removes element from the first place

// let num_Of_fruits=fruits.length; // To find the length of array

// let index=fruits.indexOf("apple");// To find the index of given input

/* Printing the array */
// for(let fruit of fruits){
//     console.log(fruit);
// }


//SORT
// fruits.sort().reverse();

/*
//Spread Operator (Unpack the elements of the array)

//Example 1
// let numbers=[1,2,3,4,5];
// let maximum=Math.max(...numbers);
// console.log(maximum);

//Example 2
// let name="Ekansh rahul jain";
// let letter=[...name];
// console.log(letter);

//Example 3
// let fruits=["apple","kiwi","banana"];
// let veg=["carrot","allo"];
// let newFruits=[...fruits,...veg];//Combining Two arrays
// console.log(newFruits);
*/


//Rest Parameters (bundles separatee elements into an array)

// function fridge(...foods){
//     console.log(foods);
// }

// const food1="pizza";
// const food2="burger";
// const food3="chips";

// fridge(food1,food2,food3);


//String Joining
function combineString(...strings){
    return strings.join(" ");//join the strings with what ever character you want
}
const name=combineString("eco","rahul","jain");
console.log(name);
