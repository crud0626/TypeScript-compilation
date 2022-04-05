{
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error("Not valid number!");
        }
        return arg;
    }

    const result = checkNotNullBad(123);
    console.log(result);
    checkNotNullBad(null);

    // any는 항상 정말 불가피할때만 써야한다.
    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error("Not valid number!");
        }
        return arg;
    }
    const result2 = checkNotNullAnyBad(123);

    // Generics
    // 함수명 옆에 대괄호로 사용하여 작성한 이름으로 사용한다.
    // null이 아닐 때만 타입으로써 받을 수 있음.
    // function checkNotNull<T>(arg: T | null): T // 보통 이렇게 짧게 사용한다.
    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC{
        if (arg == null) {
            throw new Error("Not valid number!");
        }
        return arg;
    }

    const number = checkNotNull(123); // 숫자타입
    const bool: boolean = checkNotNull(true); // bool 타입
}