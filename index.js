function findMinAndRemoveSorted(array) {
  //if sorted, the min should be the first element
  let min = array[0];
  array.shift();
  return min;
}

function merge(firstSubarray, secondSubArray) {
  //create sorted array, call first function and push into sorted
  //until both arrays are empty
  let sorted = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < firstSubarray.length && index2 < secondSubArray.length) {
    if (firstSubarray[index1] < secondSubArray[index2]) {
      sorted.push(firstSubarray[index1]);
      ++index1;
    } else {
      sorted.push(secondSubArray[index2]);
      ++index2;
    }
  }
  // console.log("index1", index1, "index2", index2)
  // console.log("slice of index1", firstSubarray.slice(index1))
  return sorted
    .concat(firstSubarray.slice(index1))
    .concat(secondSubArray.slice(index2));
}

function mergeSort(array) {
  //split the array into two until single element arrays
  //merge those arrays back into single sorted array
  //Recursively call mergeSort to account for any array length
  //BASE CASE: when arr only has one element, return the array
  if (array.length === 1) {
    return array;
  }

  let midpoint = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
