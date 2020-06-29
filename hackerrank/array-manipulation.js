// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  let result = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const start = queries[i][0],
      end = queries[i][1],
      num = queries[i][2];
    result[start - 1] += num;
    if (end < n) {
      result[end] += -num;
    }
  }
  let max;
  result.reduce((acc, curr) => {
    if (!max || acc + curr > max) {
      max = acc + curr;
    }
    return acc + curr;
  });
  return max;
}

console.log(
  arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
);
