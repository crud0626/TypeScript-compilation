// Lecture
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 인터페이스는 코드를 사용하는 사용법, 계약서와 비슷한 개념이다.
    // 둘을 구분해주기 위해 인터페이스명앞에 I를 붙이거나 클래스뒤에 Impl을 붙이기도 한다.
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    // CoffeeMaker의 규격을 따르는 CoffeeMachine이라는 뜻이다.
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        // private과 static은 다르다.
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        private grindBeans(shots: number): void {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log("heating up!");
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots}`);
            return {
                shots,
                hasMilk: false
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        fillCoffeeBeans(beans: number): void {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0!");
            }
            this.coffeeBeans += beans;
            console.log("Complete adding coffee beans!");
        }

        clean(): void {
            console.log("Cleaning the machine..");
        }
    }

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

    // 같은 CoffeeMachine클래스를 가져오지만
    // 생성자 내부에서 인터페이스를 각각 다르게 지정하여 해당 인터페이스를 따르게 된다.
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);

    amateur.makeCoffee();
    pro.makeCoffee();
}