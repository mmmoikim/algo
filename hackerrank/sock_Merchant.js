// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let map = new Map();
  for (let item of ar) {
    let value = map.get(item);
    if (value && value.count) {
      map.set(item, {
        count: value.count + 1,
        pair: parseInt((value.count + 1) / 2),
      });
      continue;
    }
    map.set(item, { count: 1, pair: 0 });
  }
  console.log(map);
  let result = 0;
  for (let item of map) {
    if (item[1].pair) {
      result += item[1].pair;
    }
  }
  return result;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
