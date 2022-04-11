{
    // Map type
    type Video = {
        title: string;
        author: string;
        description: string;
    };

    // 이렇게 하면 유지보수 및 타입변경하기가 어렵다.
    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // }

    // type VideoReadonly = {
    //     readonly title: string;
    //     readonly author: string;
    //     readonly description: string;
    // }
    // 

    // Video의 모든 키를 토대로 optional로 변경한 타입을 새로 정의
    type Optional<T> = {
        [P in keyof T]?: T[P] // = for...in처럼 동작함.
    }
    type VideoOptional = Optional<Video>;

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }
    
    type Animal = {
        name: string;
        age: number;
    };

    // Optional 타입을 응용해서 아래처럼 직접적으로 사용가능
    const animal: Optional<Animal> = {
        name: 'dog'
    };
    animal.name = 'ellie';

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'ellie',
        description: "none"
    };

    // video.author = "dsadsa"; // 불가능

    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj3: Nullable<Video> = {
        title: null,
        author: null,
        description: null
    };
}