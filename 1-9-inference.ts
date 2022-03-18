{
    // Type Inference, 타입 추론
    // TS에서 타입을 지정하지 않고 값을 할당하면 초기 값을 통해 타입을 추론한다.
    function print(message = "hello") { // 기본 값을 설정해놓아서 string으로 추론
        console.log(message);
    }
    print("hello");

    // 결과값의 타입은 지정 안했지만 매개변수 2개가 모두 number이기 때문에 결과값도 number로 추론
    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2); // add의 결과값이 number로 추론되었으니 result도 number로 추론됨.

    // 타입 추론보다는 타입을 명시해줌으로써 예측 가능한 동작을 하도록 하는게 좋다.
}