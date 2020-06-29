// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  for (let word of note) {
    let index = magazine.findIndex((item) => {
      return word === item;
    });
    if (index === -1) {
      console.log("No");
      return;
    }
    magazine.splice(index, 1);
  }
  console.log("Yes");
}

console.log(
  checkMagazine(
    ["two", "times", "three", "is", "not", "four"],
    ["two", "times", "two", "is", "four"]
  )
);
