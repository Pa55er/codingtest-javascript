function solution(board, moves) {
    let answer = 0;
    const arr = Array.from(new Array(board[0].length + 1), () => []);
    for(let j = 0; j < board[0].length; j++) {
        for(let i = board.length - 1; i >= 0; i--) {
            if(board[i][j] === 0) break;
            arr[j + 1].push(board[i][j]);
        }
    }
    const stack = [];
    for(let i = 0; i < moves.length; i++) {
        const col = arr[moves[i]];
        if(col.length === 0) continue;
        const target = col.pop();
        if(stack.length && stack[stack.length - 1] === target) {
            stack.pop();
            answer += 2;
        }
        else stack.push(target);
    }
    return answer;
}
