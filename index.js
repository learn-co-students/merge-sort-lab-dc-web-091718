function findMinAndRemoveSorted(array) {
  let smallestElem = array[0]
  array.forEach(elem => {
    if (elem < smallestElem) {
      smallestElem = elem
    }
  }
)
  var index = array.indexOf(smallestElem)
  return array.splice(index, 1)
}

function merge(array1, array2) {
  let res = []
  let indexOne = 0
  let indexTwo = 0
  while (indexOne < array1.length && indexTwo < array2.length) {
    if (array1[indexOne] < array2[indexTwo]) {
      res.push(array1[indexOne])
      indexOne++
    }
    else {
      res.push(array2[indexTwo])
      indexTwo++
    }
  }
  console.log("index1", indexOne, "index2", indexTwo)
  console.log("slice of index1", array1.slice(indexOne))
  return res.concat(array1.slice(indexOne)).concat(array2.slice(indexTwo))
}

function mergeSort(array) {
  if (array.length == 1) {
    return array
  }
  let centerOfArray = Math.floor(array.length / 2)
  let leftArray = array.slice(0, centerOfArray)
  let rightArray = array.slice(centerOfArray)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}
