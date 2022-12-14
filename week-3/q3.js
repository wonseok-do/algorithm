// 워터 슬라이드

//한국의 JS시에는 도시의 명물인 "너도"워터파크가 있는데요! 이 곳의 가장 유명한 워터 슬라이드인 'express' 워터슬라이드에

//안전 검사를 시작하게 되었습니다!

//안전한 워터 슬라이드 이용을 위해 점검을 도와주세요!

//문제

//워터슬라이드의 높이를 담은 arr이 주어지며 안전 기준인 h 가 주어집니다. 워터슬라이드의 구조를 변화시킨 횟수를 반환합니다.

// 조건

// 1. 워터 슬라이드는 반드시 높은 위치에서 낮은 위치로 내려오도록 설계 되었습니다.

// 2. 만약 높이차가 H보다 높다면 워터 슬라이드의 낮은 부분을 안전 기준이 맞을 때 까지 높이를 올립니다.

// 3. 마지막의 높이는 반드시 0이 되어야 하며 0이 아니라면 0을 추가하고 구조를 변화시킨 횟수를 증가시킵니다.

// 4. 워터슬라이드의 한 구간을 두 번 변경시켜야 하는 경우는 존재하지 않습니다.
// => 안전 기준의 높이가 10인데 워터슬라이드의 구간 높이차가 20이상인 경우는 존재하지 않습니다.

// 예시

// 배열이 [15,27,12,0] 이고 안전 기준의 높이가 11이라면

// 1. 가장 높은 위치가 27이고 그 다음 지나가는 높이가 15입니다. 이 구간은 높이의 차이가 안전 기준 높이인 11을 넘어서기때문에

// 낮은 위치에 있는 15를 안전기준에 맞는 16까지 끌어올려야 하므로 구조를 1번 변경시켜야합니다.

// 2. 이제 높이가 16(높이가 15였던 구간을 16으로 변경시켰음.)인 구간의 다음 구간은 높이가 12이므로 안전 기준 높이를 넘어서지 않기 때문에 구조를

//변경하지 않습니다.

// 3. 높이가 12인 구간의 다음 구간은 0입니다. 이 두 구간의 높이차이는 안전 기준 높이인 11을 넘어서기 때문에 0의 높이를 1로 끌어 올려야하므로

// 구조를 1번 변경시켜야 합니다.

// 4. 마지막 구간은 항상 0으로 끝나야 하므로 높이가 1인 구간의 다음구간에 0의 높이 구간을 설치해야 하므로 구조를 1번 변경시켜야 합니다.

// 구조를 총 3번 변경시켰으므로 3을 반환합니다.

function solution3(arr, h) {
  let answer = 0;
  let answer2 = 0;
  let arr2 = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] - arr2[i + 1] > h) {
      arr2[i + 1] = arr2[i] - h;
      //   console.log(arr2);
      answer++;
    }
  }
  if (arr2[arr2.length - 1] !== 0) {
    answer2 = answer + 1;
    console.log(answer2);
  } else if (arr2[arr2.length - 1] === 0) {
    answer2 = answer;
  }

  return answer2;
}

console.log(solution3([15, 27, 12, 0], 11) === 3);
console.log(solution3([15, 26, 35, 12, 0], 8) === 4);
console.log(solution3([16, 24, 37, 8, 0], 10) === 2);
console.log(solution3([26, 35, 42, 12, 0], 9) === 3);
