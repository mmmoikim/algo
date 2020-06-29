function match(s) {
  switch (s) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
    default:
      break;
  }
}
// Complete the isBalanced function below.
function isBalanced(s) {
  let stack = [];
  if (s.length % 2 != 0) {
    return "NO";
  }
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (["(", "{", "["].includes(element)) {
      stack.push(element);
      continue;
    }

    const pop = stack.pop();
    if (match(pop) != element) {
      return "NO";
    }
  }
  if (stack.length != 0) {
    return "NO";
  }
  return "YES";
}
console.log(isBalanced("{{}("));
