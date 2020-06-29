function getBaseLog(x, y) {
  return Math.floor(Math.log(y) / Math.log(x));
}

function countTriplets(arr, r) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let log = getBaseLog(r, arr[i]);
    if (count[log]) {
      count[log]++;
      continue;
    }
    count[log] = 1;
  }
  let result = 0;
  for (let one in count) {
    let two = parseInt(one) + 1,
      three = parseInt(one) + 2;
    if (count[two] && count[three]) {
      result += count[one] * count[two] * count[three];
    }
  }
  return result;
}
console.log(countTriplets([1, 2, 2, 4], 2));
