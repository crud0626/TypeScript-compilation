{
    // Array
    // 둘의 차이점 중 하나는 readonly 사용가능여부이다. string[] 형태만 readonly를 붙일 수 있다.
    // readonly를 사용 할 경우 해당 인자를 변경할 수 없다. 불변성을 위해 특히 객체형태에 많이 사용하는편이다.
    const fruits: string[] = ['tomato', 'banana'];
    const scores: Array<number> = [1, 3, 4]; // Generic Array type

    function printArray(fruits: readonly string[]) {
        console.log(fruits);
    }

    // Tuple
    // 배열은 단일 요소들만 가질 수 있지만 튜플은 여러 타입의 요소와 각 순서를 보장할 수 있다.
    // (string | number)[]의 경우 순서 상관없이 string과 number를 모두 사용할 수 있다.
    // 튜플을 사용해 [string, number] 일 경우 1번째 인자는 string, 2번째는 number여야만 한다.
    // 요소를 선택할 때 array와 같아서 가독성이 나쁘기 때문에  interface, type alias, class로 대체하는편임.
    let student: [string, number];
    student = ["John", 31];
}