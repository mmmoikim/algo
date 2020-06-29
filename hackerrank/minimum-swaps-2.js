function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] != i + 1) {
      let temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      count++;
      console.log(arr);
    }
  }
  return count;
}

minimumSwaps([1, 3, 5, 2, 4, 6, 7]);
