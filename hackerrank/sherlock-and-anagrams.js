function isAnagram(str1, str2) {
  const hist = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (hist[char]) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    if (hist[char]) {
      hist[char]--;
    } else {
      return false;
    }
  }

  return true;
}
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  let count = 0;
  //글자 수
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      const target = s.substring(j, j + i, j);
      // console.log("-------");
      for (let k = 1 + j; k < s.length - i + 1; k++) {
        let compared = s.substring(k, k + i);
        if (isAnagram(target, compared)) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(
  sherlockAndAnagrams(
    "bbcaadacaacbdddcdbddaddabcccdaaadcadcbddadababdaaabcccdcdaacadcababbabbdbacabbdcbbbbbddacdbbcdddbaaa"
  )
);
