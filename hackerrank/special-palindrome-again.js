function ispalidrome(target) {
  let arr = target.split("");
  if (target.length % 2 != 0) {
    const middle = parseInt(target.length / 2);
    arr.splice(middle, 1);
  }
  let set = new Set(arr);
  return set.size === 1;
}

function substrCount(n, s) {
  let result = n;
  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      const target = s.substring(j, j + i);
      if (ispalidrome(target)) {
        result++;
      }
    }
  }
  return result;
}
console.log(substrCount(4, "aaaa"));
