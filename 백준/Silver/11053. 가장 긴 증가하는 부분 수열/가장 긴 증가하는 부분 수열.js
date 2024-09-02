const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, arr] = input;

const upper_bound = (target) => {
        let start = 0;
        let end = answer.length - 1;
        while (start < end) {
            const mid = Math.floor((start + end) / 2);
            if (answer[mid] < target) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return end;
    };

    let answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] < arr[i]) {
            answer.push(arr[i]);
        } else if (answer[answer.length - 1] > arr[i]) {
            answer[upper_bound(arr[i])] = arr[i];
        }
    }

console.log(answer.length);