// prototype은 JS에서 상속을 위해 사용하며
// 재사용성을 높일 수 있고 JS에서 OOP를 구현할 수 있도록 도와준다.

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString()); // Object 객체 내부 메소드를 사용할 수 있음.
console.log(x.__proto__ === y.__proto__); // true, 동일한 Object 객체를 상속하기 때문이다.

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level, 인스턴스마다 포함이 되므로
    // this.makeCoffee = shots => {
    //     console.log("making..");
    // }
}

CoffeeMachine.prototype.makeCoffee = shots => {
    console.log("making..");
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();