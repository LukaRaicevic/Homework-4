// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num+2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word+'s';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	let output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for(let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	let output = [];
  
  return output;
}

console.log(mapWith([1, 2, 3], addTwo));
//Extension 2
function add(a, b) {
  return a+b;
}

var nums = [4, 1, 3];

function reduce(array, callback, initialValue) {
  let sum = 0;
	for(let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

console.log(reduce(nums, add, 0));

//Extension 3
function compare(arr1, arr2) {
  var arr = [];
	for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  return arr;
}

function intersection(array1, array2, array3) {
  return compare(compare(array1, array2), array3);
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union2(arr1, arr2) {
  var arr = [];
  
  for(let i = 0; i < arr1.length; i++) {
    arr[i] = arr1[i];
  }
  for(let i = 0; i < arr2.length; i++) {
    arr[i+arr1.length-1] = arr2[i];
  }
  
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  
  return arr;
}

console.log(union2([5, 10, 15], [15, 88, 1, 5, 7]));

function union(array1, array2, array3) {
	return union2(union2(array1, array2), array3);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

