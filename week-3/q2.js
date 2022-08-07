//홀 짝

//문제

//배열 arr과 정수 k가 주어집니다. 배열에서 홀수의 갯수 짝수의 갯수의 차(항상 높은 수에서 낮은 수를 뺍니다.)를 구해주세요.

//조건

//1. 각 배열에서 짝수와 홀수의 갯수는 항상 k개 이상입니다.

//예시

//배열이 [1,5,6,4,2,7,3]라면 홀수는 4개이고 짝수는 3개이므로 두 수의 차인 1을 반환합니다.

function solution2(arr) {
  let answer = 0;
  let Odd = 0;
  let Even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      Even += 1;
    } else {
      Odd += 1;
    }
    answer = Even > Odd ? Even - Odd : Odd - Even;
  }
  return answer;
}

console.log(solution2([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) === 0);
console.log(solution2([12, 15, 16, 27, 34, 15, 12, 76, 95, 84, 46]) === 3);
console.log(solution2([13, 25, 22, 46, 78, 44, 13, 15, 124, 255]) === 0);
console.log(solution2([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]) === 7);
console.log(solution2([4, 4, 4, 4, 48, 88, 8, 8]) === 8);
console.log(solution2([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]) === 10);
