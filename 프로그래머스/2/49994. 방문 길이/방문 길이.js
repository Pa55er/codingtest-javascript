function solution(dirs) {
    let answer = 0;
    const visited = Array.from({ length: 11 }, () =>
        Array.from({ length: 11 }, () =>
            Array.from({ length: 11 }, () =>
                Array.from({ length: 11 }, () => false)
            )
        )
    );
    let x = 5,
        y = 5;
    for (let i = 0; i < dirs.length; i++) {
        if (dirs[i] === "U" && x + 1 <= 10) {
            if (visited[x][y][x + 1][y] === false) {
                visited[x][y][x + 1][y] = true;
                visited[x + 1][y][x][y] = true;
                answer++;
            }
            x++;
        } else if (dirs[i] === "D" && x - 1 >= 0) {
            if (visited[x][y][x - 1][y] === false) {
                visited[x][y][x - 1][y] = true;
                visited[x - 1][y][x][y] = true;
                answer++;
            }
            x--;
        } else if (dirs[i] === "R" && y + 1 <= 10) {
            if (visited[x][y][x][y + 1] === false) {
                visited[x][y][x][y + 1] = true;
                visited[x][y + 1][x][y] = true;
                answer++;
            }
            y++;
        } else if (dirs[i] === "L" && y - 1 >= 0) {
            if (visited[x][y][x][y - 1] === false) {
                visited[x][y][x][y - 1] = true;
                visited[x][y - 1][x][y] = true;
                answer++;
            }
            y--;
        }
    }
    return answer;
}