// Personal
// {
//     type CoffeeCup = {
//         shots: number;
//         hasMilk: boolean;
//     }

//     class CoffeeMachine {
//         // 클래스에서는 property의 타입을 먼저 할당해야한다. poiemaweb.com
//         coffeeBeans: number;

//         constructor(coffeeBeans: number) {
//             this.coffeeBeans = coffeeBeans;
//         }

//         // 샷당 원두의 그램은 변하지 않으므로 클래스 필드로 선언
//         BEANS_GRAMM_PER_SHOT = 7;

//         makeCoffee(shots: number): CoffeeCup {
//             if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
//                 throw new Error("Not enough coffee beans!");
//             }
//             this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
//             return {
//                 shots,
//                 hasMilk: false
//             };
//         }
//     }

//     let doubleShot = new CoffeeMachine(15);
//     console.log(doubleShot.makeCoffee(2));
// }

// Lecture
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        // BEANS_GRAMM_PER_SHOT: number = 7;
        // 다만, 이렇게 클래스 필드로 생성하면 모든 인스턴스에 포함되어 메모리를 차지하므로 static을 이용해주면 메모리 낭비를 줄일 수 있다.
        // 인스턴스마다 생성되는 클래스 필드를 instance level, 클래스 내부에만 위치하는 필드를 class level이라고 한다.
        static BEANS_GRAMM_PER_SHOT: number = 7;
        // 대신 static키워드로 선언한 클래스 필드는 클래스명.필드명 형식으로 호출해주어야 한다.
        // 또한 인스턴스 내부에 위치해있지 않으므로 인스턴스를 콘솔로 찍어도 속성에 포함되어있지 않는다.
        coffeeBeans: number;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // constructor를 사용할 필요가 없을 때 아래와 같이 메소드에서 클래스를 리턴해서 인스턴스를 생성할 수 있음.
        // static을 붙이지 않은 일반 메소드형식은 클래스에서 직접 접근할 수 없음.
        // Math 같은 객체가 클래스 레벨의 객체로 new 키워드없이 접근할 수 있는 이유가 이와 같다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(15);
    console.log(maker3);
}