// Problem 210

/*
let n = 155;
let a = 2;

console.log(convertIt(n, a));

function convertIt(n, a){
  if(a == 2){
    return n.toString((2));
  } else if(a == 8){
    return n.toString((8));
  } else if(a == 16){
    return n.toString((16));
  }
}
*/

// Problem #211

/*
let row = "Py🐍on";

console.log(spreadIt(...row));

function spreadIt(...spreadIt){
  return spreadIt;
}
*/

// Problem 212

/*
let n = "314";
let a = 8;

console.log(convertIt(n, a));

function convertIt(n, a){
  if(a == 16){
    return n = parseInt(n, 16);
  } else if(a == 2){
    return n = parseInt(n, 2);
  } else if (a == 8){
    return n = parseInt(n, 8);
  }
}
*/

// Problem #213


let arr = [1, 4, 5, 7, 12];
let newArr = [];

console.log(getPrimeNumbersAsArray(arr));

function getPrimeNumbersAsArray(arr){
  for(let i = 0; i < arr.length; i++){
    let check = 0;
    for(let j = 2; j < arr[i]; j++){
      if(arr[i] % j == 0){
        check++;
      }
    }
    if(check == 0 && i != 0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// Problem #214

/*
let arr = [7, 11, 7, 23, 31, 37];
let newArr = [];

console.log(getPalindromeNumbersAsArray(arr));

function getPalindromeNumbersAsArray(arr){
  for(let i = 0; i < arr.length; i++){
    let v = isPalindromeNumber(String(arr[i]));
    if(v !== undefined){
      newArr.push(v);
    }
  }
  return newArr;
}


function isPalindromeNumber(numString){
  let c = numString.length - 1;
  let check = true;
  for(let i = 0; i < numString.length / 2; i++, c--){
    if(numString[i] != numString[c]){
      check = false;
    }
  }
  if(check == true){
    return numString;
  } 
}
*/