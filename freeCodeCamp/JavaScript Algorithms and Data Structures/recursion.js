// append a string of numbers within a range
function rangeOfNumbers(startNum, endNum) {
  // base case if startNum goes past endNum begin returning the recursions
  if (startNum > endNum) {
    return [];
  }
  // keep putting the new startNum in the front of the string as the recursions return creating a good order until we reach the beginning number again.
  else {
    const rangeArr = rangeOfNumbers(startNum + 1, endNum);
    rangeArr.unshift(startNum);
    return rangeArr;
  }
};


// recursive functions creating a string of number up to "n"
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
