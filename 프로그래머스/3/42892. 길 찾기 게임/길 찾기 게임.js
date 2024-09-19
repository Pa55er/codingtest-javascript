function solution(nodeinfo) {
    nodeinfo = nodeinfo.map((a, index) => [...a, index + 1]);
    nodeinfo = nodeinfo.sort((a, b) => b[1] - a[1]);
    
    const Node = function(node) {
        this.number = node[2];
        this.x = node[0];
        this.left = null;
        this.right = null;
    }
    
    const root = new Node(nodeinfo[0]);
    
    const insert = (parent, child) => {
        if(parent.x > child.x) {
            if(parent.left === null) parent.left = child;
            else insert(parent.left, child);
        }
        else {
            if(parent.right === null) parent.right = child;
            else insert(parent.right, child);
        }
    }
    
    for(let i = 1; i < nodeinfo.length; i++) {
        insert(root, new Node(nodeinfo[i]));
    }
    
    var answer = [[], []];
    
    const preOrder = (node) => {
        if(node === null) return;
        answer[0].push(node.number);
        preOrder(node.left);
        preOrder(node.right);
    }
    
    const postOrder = (node) => {
        if(node === null) return;
        postOrder(node.left);
        postOrder(node.right);
        answer[1].push(node.number);
    }
    
    preOrder(root);
    postOrder(root);
    
    return answer;
}