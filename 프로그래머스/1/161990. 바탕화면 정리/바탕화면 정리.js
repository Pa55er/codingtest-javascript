function solution(wallpaper) {
    const answer = [wallpaper.length - 1, wallpaper[0].length - 1, 1, 1];
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] === '#') {
                if(i < answer[0]) answer[0] = i;
                if(j < answer[1]) answer[1] = j;
                if(i + 1 > answer[2]) answer[2] = i + 1;
                if(j + 1 > answer[3]) answer[3] = j + 1;
            }
        }
    }
    return answer;
}