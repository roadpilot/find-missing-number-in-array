// Find the missing number in the array
// You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number x. You have to find x. The input array is not sorted. Look at the below array and give it a try.
// [3,7,1,2,8,4,5]
// n = 8 missing number = 6

//mathy stuff
//the sum of a series of numbers from 1 to n is (n(n+1)/2)

const func = (arr) => {
  let inputSum = arr.reduce((a, b) => a + b, 0)
  let testSum = ((arr.length+1)*(arr.length+2))/2
  if (testSum-inputSum === arr.length+1){
    return "No missing number"
  }
  else {
    return `The missing number is ${testSum-inputSum}` 
  }
}

console.log(func([3,7,1,2,8,4,5]))