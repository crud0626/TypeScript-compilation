interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay(): void {
        console.log("Full timer!");
    }

    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay(): void {
        console.log("Part timer!");
    }

    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받고나서 추상적인 타입으로 다시 반환하는 함수는 좋지 않다.
// function payBad(employee: Employee): Employee {
//     employee.pay();
//     return employee;
// }

// 정의 과정에서는 인자로 들어올 employee의 pay메소드가 있는지 없는지 모른다.
// 따라서 employee.pay()에서 에러가 발생한다.
// 따라서 extends를 사용해서 Employee중에서만 인자를 받을 것이라고 표현하면 
// Employee interface는 모두 pay메소드를 가지고 있으므로 에러가 발생하지 않는다.

// function pay<T>(employee: T): T { // 에러 발생
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);