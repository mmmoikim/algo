// Complete the minimumBribes function below.
function minimumBribes(q) {
  var bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  console.log(bribes);
}
const q = [1, 2, 5, 3, 7, 8, 6, 4];
minimumBribes(q);
