{
    // Type Assertion
    // 타입이 지정되어있지는 않지만 어떤 타입인지 확실하게 알고 있을 때 사용한다.
    // 다른 타입일 확률이 조금이라도 있다면 사용하지 않아야 한다. 에러가 발생할 수 있기 때문에

    // 사용방법
    // 1. as 키워드, Ex. (variable as type)
    // 2. <type>, Ex. (<type>variable)

    function jsStrFunc(): any {
        return "hello"
    }
    const result = jsStrFunc(); // any 타입이기 때문에 string 메소드인 length는 현재 사용할 수 없다.
    console.log(result.length);
    console.log((result as string).length);
    console.log((<string>result.length));

    // 에러 발생함
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    // numbers.push(2); // undefined일 가능성이 있기 때문에 array method를 사용 못하게 한다.
    numbers!.push(2); // array인걸 확신하고 다른 타입이 절대 나올 수 없다면 !를 이용해 타입을 강제지정할 수 있다.
    // 다만 위험할 수 있으니 조심해야한다.

    const button = document.querySelector('className');
}