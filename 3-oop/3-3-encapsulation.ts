
// Lecture
{
    // public(기본 값)
    // private, 외부에서 볼 수 없으며 직접 접근이 불가능하다.
    // protected, 외부에서 볼 수 없으나 상속받는 클래스에서는 접근 가능하다.
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        // private과 static은 다르다.
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number;

        // constructor를 private으로 만들면 생성자를 통해 값을 직접 입력할 수 없다.
        // 따라서 값을 필터링할 수 있는 메소드를 따로 만들어서 접근이 가능하다. new 메소드는 사용하지 않는다.
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

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

        fillCoffeeBeans(beans: number): void {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0!");
            }
            this.coffeeBeans += beans;
            console.log("Complete adding coffee beans!");
        }
    }

    // const maker = new CoffeeMaker(15);
    const maker = CoffeeMaker.makeMachine(15);
    console.log(maker);

    class User {
        // 호출시에는 함수형태가 아니라 멤버 접근하는것처럼 접근이 가능하다.
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        };
        // constructor 자리에 private을 선언해 바로 private 클래스 멤버를 만들 수 있다.
        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            // 아래처럼 작성하면 클래스 생성시에만 값이 적용되고 이후에는 값 변경이 불가하다.
            // 그래서 위의 get fullName처럼 getter를 활용하여 필드를 만들 수 있다.
            // this.fullName = `${this.firstName} ${this.lastName}`;
        }

        // getter와 setter를 이용하여 private 클래스 멤버의 값 수정 및 접근.
        private internalAge = 3;
        get age(): number {
            return this.internalAge;
        };
        set age(num: number) {
            if (num < 0) {
                throw Error("age is not allowed negative number!");
            }
            this.internalAge = num;
        };
    }

    const user = new User("Steve", "Jobs");
    console.log(user.fullName);
    // user.firstName = "Ellie";
    // console.log(user.fullName);
}