{
    // JS
    function jsAdd(num1, num2) {
        return num1 + num2;
    };

    // TS
    function add(num1: number, num2: number): number {
        return num1 + num2;
    };

    // JS
    function jsFetchNum(id) {
        // code
        // code
        // code
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TS
    function fetchNum(id: string): Promise<number> { // Promise 중에서도 number를 리턴한다는 뜻.
        // code
        // code
        // code
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // Optional parameter, para?
    // 선택적으로 파라미터를 정의할 수 있고 넣지않을 경우 해당 파라미터는 undefined가 된다.
    // 비슷하게 lastName: string | undefined 라고 할 수도 있는데 이렇게하면 undefined를 필수로 입력해야한다.
    function printName(firstName: string, lastName?: string) {
        return firstName + lastName;
    }

    printName("Steve");

    // Default Parameter
    function printMessage(message: string = "This is default!") {
        console.log(message);
    }

    printMessage();

    // Rest Parameter, Array<number>형태도 가능하다.
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    addNumbers(1, 2, 3, 4);
}