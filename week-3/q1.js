//3번째 자리가 좋아

//오늘은 내림차순으로 정렬된 배열 중 3번째 자리에 있는 배열값을 반환해주세요!

//문제

//배열 arr이 주어지고 배열을 내림차순 한 배열 왼쪽에서 3번째 자리에 있는 값을 반환합니다.

//조건

//배열의 갯수는 반드시 3 이상입니다.

function solution1(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        answer = arr[2];
      }
    }
  }

  return answer;
}

console.log(solution1([1, 5, 7, 3, 4, 10, 86, 97, 53, 8, 5]) === 53);
console.log(solution1([176, 154, 986, 1024, 546, 2, 76]) === 546);
console.log(solution1([1111, 2222, 1532, 6666, 4444, 1856, 9865]) === 4444);
