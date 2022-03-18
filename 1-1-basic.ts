{
    // number
    const num:number = 1;

    // string
    const str:string = "string";

    //  boolean
    const boal:boolean = true;

    // undefined - 값이 있는지 없는지 모르는 상태
    let name: undefined; // 변수를 전혀 사용하지 못하기 때문에 단독으로 undefined를 선언하지 않음.
    let age: number | undefined; // 이런식으로 숫자값이 들어오지 않는 이상 undefined가 되도록 작성함. (union type이라고 부름)

    function find() : number | undefined {
        return 1; // or undefined
    }
    

    // null - 값이 없다고 명시한 상태 (개발자가 직접 null이라는 값을 입력해야함)
    let person: null; // null도 마찬가지로 단독으로는 거의 사용하지 않음.
    let person2: string | null; // union type, null보다는 undefined를 보편적으로 사용하는 편

    // unknown, 타입의 종류를 모르기 때문에 아무 타입이나 사용가능하다.
    //  가능하면 사용하지 말고 라이브러리를 처음 사용할 때 return값이 모르는 상황같은 경우에만 일시적으로 사용함.
    let notSure: unknown;
    notSure = "he";
    notSure = true;

    // any, 이것도 타입의 종류 상관없으나 가능하면 사용 안하는게 좋음.
    let anything: any = 0;
    anything = "hello";

    // void, 함수 내부에서 return하는게 없을 때 사용한다.
    // 변수에 void를 사용하면 undefined만 할당하기 때문에 사용하지 않는다. (하긴 return하는게 없으니..)
    function print(): void {
        console.log("hello");
    }

    // never, 에러 핸들링이나 무한루프같은 경우에 사용함. 절대 return값이 없다는 의미.
    // 얘도 마찬가지로 변수에 사용안함.
    function throwError(message: string): never {
        throw new Error(message);
    }

    // object, JS 특성상 함수와 배열도 포함되지만 너무 광범위하기 때문에 좀 더 디테일하게 해주어야한다.
    let obj: object;
    function acceptSomeObject(obj: object) {};
    acceptSomeObject({name: "blah"});
    acceptSomeObject([0, 1, 2]);

    
}