// Complete the repeatedString function below.
function repeatedString(s, n) {
  if (s.length > 0 && s.indexOf("a") > -1) {
    const re = new RegExp("a", "g");
    const count = s.match(re).length;
    let result = count * parseInt(n / s.length);
    const lastStr = s.substring(0, n % s.length);
    if (lastStr && lastStr.indexOf("a") > -1) {
      result += lastStr.match(re).length;
    }
    return result;
  }
  return 0;
}

console.log(repeatedString("gfcaaaecbg", 547602));
