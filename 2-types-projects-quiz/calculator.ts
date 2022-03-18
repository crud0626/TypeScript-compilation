// 내 풀이
type Operator = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(operator: Operator, ...numbers: number[]): number {
    return numbers.reduce((a, b) => {
        switch(operator) {
            case "add":
                return a + b;
            case "substract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                return a / b;
            case "remainder":
                return a % b;
        }
    })
    // 1번째 풀이
    // switch(operator) {
    //     case "add":
    //         return numbers.reduce((a, b) => a + b);
    //     case "substract":
    //         return numbers.reduce((a, b) => a - b);
    //     case "multiply":
    //         return numbers.reduce((a, b) => a * b);
    //     case "divide":
    //         return numbers.reduce((a, b) => a / b);
    //     case "remainder":
    //         return numbers.reduce((a, b) => a ** b);
    // }
};

// 엘리님의 풀이
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate2(command: Command, a: number, b:number): number {
    switch(command) {
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        case "remainder":
            return a % b;
        default:
            throw Error("Unknown command");
    }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
