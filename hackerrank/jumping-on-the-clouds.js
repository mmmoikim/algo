// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let result = 0;
  let current = 0;
  while (current < c.length - 1) {
    if (current + 2 < c.length && c[current + 2] === 0) {
      result++;
      current += 2;
      continue;
    }

    if (current + 1 < c.length && c[current + 1] === 0) {
      result++;
      current++;
      continue;
    }
    return 0;
  }
  return result;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
