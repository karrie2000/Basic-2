/*
Basic Foundation II
*/

//Gernerated array
function generatingRandomArray(length, min, max) {
  let arr = [];
  for (let i = 0; i <= length; i++) {
    let scaledValue = Math.random() * (max - min + 1);
    let roundedValue = Math.floor(scaledValue); // Wanted to use Math.trunc, but i think Math.floor was best for randominzed numbers in an array
    arr.push(roundedValue + min); // to insure that the value wont be less than min.
  }
  return arr;
}

/*
Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
*/


function positiveNum(arr){
  for( let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      arr[i] = "big";
    }
  }
  return arr;
}
console.log(`Big array output: ${positiveNum(generatingRandomArray(5,5,-5))}`);


/*
Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
*/

function lowAndHigh(arr){
  for(let i = 0; i < arr.length; i++ ){
    let lowest = Math.min(...arr);
    let highest = Math.max(...arr);
    console.log(lowest);
    return highest;
  }

}

console.log(`This is the highest value found: ${lowAndHigh(generatingRandomArray(5,20,6))}`);

/*
Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
*/
function returnAnother(arr){
   console.log(arr.length-1);
   for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 === 1){
      break;
    }
    return(arr[i])
   }
}
returnAnother(generatingRandomArray(5,20,10));



/*
Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
*/

function doubleVision(arr){
  let newArr = [];
  for(let i =0 ; i < arr.length; i++){
    newArr.push(arr[i]*2);
  }
  return newArr;
}
//doubleVision(generatingRandomArray(5,20,6)));
console.log(`This is your doubled Array: ${doubleVision(generatingRandomArray(5,20,6))}`);


/*
Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
*/

function countPositives(arr){
  let positives =0;
  //for loop to loop throw the array
  for(let i =0;i<arr.length;i++){
    //check to see if positive
    if(arr[i] > 0){
     positives++
    }
    
  //count the amount of positives
  }
  arr[arr.length-1] = positives;
  //set the positive value to the last arr[i]
  return arr;
}
console.log(countPositives([10,-8,-9,2,3,11,-12]));

/*
Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
*/
function evenAndOdds(arr){
  let count = 0;
  //for loop through an array
  for(let i = 0; i < arr.length;i++){

  //chech to see if arr[i] id odd
  if(arr[i] % 2 == 1){
     //if so, add to a count
     count++
     //if the count is equal to 3
    if(count === 3){
      console.log("That's odd!");
    }
  }
    else{
      //else start over, restart count
      count = 0;
    }
  }
  return arr;
}

console.log(evenAndOdds([1, 3, 5, 2, 7, 9, 10]));
console.log(evenAndOdds([2, 4, 6, 1, 3, 5, 7])); 
console.log(evenAndOdds([1, 1, 1, 2, 4, 6, 8]));


/*
Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
*/

function incTheSeconds(arr){
//loop through an array, loop through the odd indexes
for(let i = 1; i < arr.length; i+=2){
    //add 1 to every arr[i]
    arr[i] ++
}
for(let i = 1; i < arr.length; i++){
  console.log(arr[i]);
}
return arr;
}
incTheSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/*
Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
*/

function previousLength(arr){
  for (let i = arr.length; i > 0; i--) {
    let val = arr[i -1].length;
    arr[i] = val;
  }
    //take the legnth of the pervious string, give value to the next arr[i]
  // return array, arr[0] should be a string
  return arr;
}
console.log(previousLength(["hello", "dojo", "awesome"]));


/*
Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
*/
function addSeven(arr){
  let newArray= [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i] + 7);
  }
  return newArray;
}
console.log(addSeven([1,2,3,4,5]));

/*
Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
*/
function reverseArray(arr){
    arr.reverse();
    //take the legnth of the pervious string, give value to the next arr[i]
  // return array, arr[0] should be a string
  return arr;
}
console.log(reverseArray([1,2,3,4,5,6]));

/*
Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
*/
function outLookNegative(arr){
  let newArray =[];
  for(let i =0; i <arr.length; i++){
    newArray.push(0 -arr[i]);
  }
  return newArray;
}
console.log(outLookNegative([1,2,3,4,5]));
/*
Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
*/
function alwaysHungry(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(i === "food"){
      count ++

      return "yummy";
    }
  }
  if(count > 0){
    return "I'm hungry";
  }
  

}
console.log(alwaysHungry(["apple", "food", "banana"]));
console.log(alwaysHungry(["apple", "banana"]));

/*
Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
*/
function swapTowardCenter(arr){
  let temp = arr[arr.length -1];
  arr[arr.length -1] = arr[0];
  arr[0]=temp;
if(arr.length > 7){
  let thirdTemp = arr[arr.length -2];
  arr[arr.length -2] = arr[2];
  arr[2] = thirdTemp;
}
  return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6,7]));

/*
Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
 */
function scaleTheArray(arr, num){
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i]*num;
  }
  return arr;
}
console.log(scaleTheArray([1,2,3,4,5],2));