var myNum: number = 5;
var myString: string = "Hello Universe";
var myArry: number[] = [2,3,4,5,6];
var myObj: object = {name: "Bill"};
var anythingVariable: any = 'Hey';
var anythingVariable2: any = 25;
var arrayOne: any[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
var myObj: object = {
    x: 5,
    y: 10,
};

class SLNode {
    val: number;
	
	constructor(valueP: number){
		this.val = valueP;
	}
	doSomethingFun(){
		console.log("This is FUN!");
	}
}
let firstSLNode = new SLNode(1);



class MyNode {
    val: any;
    _priv: number;

    constructor(val: any) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}


var myNodeInstance = new MyNode(1);
console.log(myNodeInstance);


function myFunction() {
    console.log('Hello World');
}
myFunction();

function throwErrors() {
    throw new Error('This is the error bitch')
};
throwErrors();