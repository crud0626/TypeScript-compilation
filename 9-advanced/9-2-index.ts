{
    // Utility types
    const obj = {
        name: 'ellie'
    }

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name']; // Animal 타입에서 name의 타입인 string만 빼 올 수 있음.
    const text: Name = "hello";

    type Gender = Animal['gender'];

    // Animal의 모든 키 타입을 Union type으로 할당 (name, age, gender)
    type Keys = keyof Animal;
    const key: Keys = 'age';

    type Person = {
        name: string;
        gender: Animal['gender'];
    }

    const person: Person = {
        name: 'ellie',
        gender: 'female'
    }
}