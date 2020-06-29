/*
function solution(A) {
  let result = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const targetNum = A[i];
      const comparedNum = A[j];
      const absNum = Math.abs(targetNum);
      if (targetNum + comparedNum === 0 && result < absNum) {
        result = absNum;
      }
    }
  }
  return result;
}
console.log(solution([1, 1, 5, -1, -5, -1]));
*/

function solution(A) {
  if (A.length <= 0) {
    return 0;
  }
  let result = 0;
  //정렬
  A.sort((a, b) => {
    return a - b;
  });
  //중복제거를 위해 셋 사용
  let set = new Set(A);
  for (let item of set) {
    //음수이면
    if (item < 0) {
      //양수로 변환해서
      let absNum = Math.abs(item);
      //셋에 있는지 체크
      // has 함수 worst O(n)
      if (set.has(absNum)) {
        return absNum;
      }
    }
  }
  return result;
}
console.log(solution([1, 2, 3, -4]));
