function solution(U, L, C) {
  let upper = new Array(C.length).fill(0),
    lower = new Array(C.length).fill(0);
  let restU = U, // 남은 U
    restL = L, // 남은 L
    flag = true,
    sum = 0;

  for (let index = 0; index < C.length; index++) {
    const element = C[index];
    // 2를 제외하기 위해
    if (element === 2) {
      //남은 카운트에서 빼주고
      restU--;
      restL--;
      // 일 채우기
      upper[index] = 1;
      lower[index] = 1;
    }
    //불가능 가리기 위해
    sum += element;
  }

  if (sum != U + L) {
    return "IMPOSIBLE";
  }

  for (let index = 0; index < C.length; index++) {
    const element = C[index];
    if (element === 1) {
      // case 1 : restU > 0, restL > 0 일 때는 플래그 값으로 어디에 채울지 결정
      // case 2 : restU > 0, restL = 0 일 때 위에 채움
      // case 3 : restU = 0, restL > 0 일 때 아래 채움
      // case 4 : restU = 0, restL = 0 일때 imposible에 이미 걸러짐
      if ((restU > 0 && flag) || restL <= 0) {
        upper[index] = 1;
        restU--;
      } else {
        lower[index] = 1;
        restL--;
      }
      flag = !flag;
    }
  }

  if (upper.length > 0 && lower.length > 0) {
    return `${upper.join("")},${lower.join("")}`;
  }
}

console.log(solution(3, 2, [2, 1, 1, 0, 1]));
