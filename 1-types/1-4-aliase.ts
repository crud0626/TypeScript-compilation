{
    // Type Aliases
    // 타입을 커스텀해서 만들 수 있다.
    // type typeName = type 형태로 사용한다.

    type Text = string;
    const name: Text = "ay";
    // object 형태에서 유용할 것 같다.
    type Student = {
        name: string;
        age: number;
    }

    // 정해진 key와 값의 타입을 지정함. 정해진 키 이외의 키는 사용할 수 없다.
    const student: Student = {
        name: "John",
        age: 18
    };

    // String Literal Types, 문자열을 제어할 수 있다.
    type Name = 'name';
    let ellieName: Name = "name";
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;
}