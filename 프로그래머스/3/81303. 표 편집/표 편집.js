function solution(n, k, cmd) {
    const Node = function(index, prevNode) {
        this.index = index;
        this.prev = prevNode;
        this.next = null;
    }
    
    let lastNode = new Node(0, null);
    let targetNode;
    
    for(let i = 1; i < n; i++) {
        let newNode =new Node(i, lastNode);
        lastNode.next = newNode;
        newNode.prev = lastNode;
        lastNode = newNode;
        
        if(i === k) targetNode = newNode;
    }
    
    cmd = cmd.map((ele) => ele.split(" "));
    const stack = [];
    
    const moveDown = (len) => {
        while(len--) targetNode = targetNode.next;
    }
    
    const moveUp = (len) => {
        while(len--) targetNode = targetNode.prev;
    }
    
    const remove = () => {
        const next = targetNode.next;
        const prev = targetNode.prev;
        stack.push(targetNode);
        if(next) next.prev = prev;
        if(prev) prev.next = next;
        targetNode = next || prev;
    }
    
    const rollBack = () => {
        const rollBackNode = stack.pop();
        const next = rollBackNode.next;
        const prev = rollBackNode.prev;
        if(next) next.prev = rollBackNode;
        if(prev) prev.next = rollBackNode;
    }
    
    for(let i = 0; i < cmd.length; i++) {
        if(cmd[i][0] === "D") moveDown(Number(cmd[i][1]));
        else if(cmd[i][0] === "U") moveUp(Number(cmd[i][1]));
        else if(cmd[i][0] === "C") remove();
        else if(cmd[i][0] === "Z") rollBack();
    }
    
    const answer = new Array(n).fill('O');
    while(stack.length) {
        answer[stack[stack.length - 1].index] = 'X';
        stack.pop();
    }
    
    return answer.join("");
}
