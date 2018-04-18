class SLNode {
    val: number;

    constructor(valueP: number){
        this.val = valueP;

    }
    doSomethingFun(){
        console.log('This is TypeScript Class');
    }
}
let firstSLNode = new SLNode(1);
console.log(firstSLNode)
