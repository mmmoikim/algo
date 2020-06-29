// Complete the rotLeft function below.
function rotLeft(a, d) {
  let count = d % a.length;
  const rest = a.splice(0, count);
  return [...a, ...rest];
}
const a = [1, 2, 3, 4, 5];
const d = 4;
console.log(rotLeft(a, d));
