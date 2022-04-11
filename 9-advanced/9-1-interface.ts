// Type alias vs Interface

{
    // 공통점
        
    type PositionType = {
        x: number;
        y: number;
    };

    interface PositionInterface {
        x: number;
        y: number;
    }

    // * : 두 종류 모두 가능한것. (Object, Class, Extends)
    // Object
    const obj1: PositionType = {
        x: 1,
        y: 1
    }

    const obj2: PositionInterface = {
        x: 1,
        y: 1
    }

    // class

    class Pos1 implements PositionType {
        x: number;
        y: number;
    }

    class Pos2 implements PositionInterface {
        x: number;
        y: number;
    } 

    // Extends 
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    type ZPositiontype = PositionType & {z: number;}; // intersection 활용

}

{
    // 차이점

    // Interface
    // 결합은 interface만 가능
    // Overriding하는 거 같지만 실제로는 결합되어 x, y, z모두 가져야한다.
    interface PositionInterface {
        x: number;
        y: number;
    }

    interface PositionInterface {
        z: number;
    }

    class ZPositionInterface implements PositionInterface {
        x: 1;
        y: 1;
        z: 2;
    }

    // Type aliases

    // Computed properties
    type Person = {
        name: string,
        age: number,
    }
    // Person 타입의 name의 타입만 적용하는 새로운 타입 생성가능
    type Name = Person['name']; 

    // Union type도 type에서만 가능하다.
    type Age = 20 | 21 | 22;
}