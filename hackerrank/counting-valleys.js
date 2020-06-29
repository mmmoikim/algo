// Complete the countingValleys function below.
function countingValleys(n, s) {
  let current = 0,
    valleyCount = 0;
  for (let item of s) {
    let before = current;
    if (item === "U") {
      current++;
    }
    if (item === "D") {
      current--;
    }
    if (before === -1 && current === 0) {
      valleyCount++;
    }
  }
  return valleyCount;
}
console.log(countingValleys(12, "DDUUDDUDUUUD"));
