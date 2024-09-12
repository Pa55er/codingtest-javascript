function solution(record) {
    const map = new Map();
    record = record.map(ele => ele.split(" "));
    for(let i = 0; i < record.length; i++) {
        if(record[i][0] === "Enter" || record[i][0] === "Change") {
            map.set(record[i][1], record[i][2]);
        }
    }
    return record
            .filter(ele => ele[0] !== "Change")
            .map(ele => map.get(ele[1]) + (ele[0] === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다."));
}