function alternatingCharacters(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] === s[i - 1]) {
      result++;
    }
  }
  return result;
}

alternatingCharacters("aaaabbb");
