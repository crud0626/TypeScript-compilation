{
    {
        type CoffeeCup = {
            shots: number;
            hasMilk?: boolean;
            hasSugar?: boolean;
        }

        interface CoffeeMaker {
            makeCoffee(shots: number): CoffeeCup;
        }
    
        // 추상 클래스는 자신의 인스턴스를 가질 수 없고 오로지 상속용도로만 사용할 수 있음.
        abstract class CoffeeMachine implements CoffeeMaker{
            protected BEANS_GRAMM_PER_SHOT: number = 7;
            private coffeeBeans: number;
    
            constructor(coffeeBeans: number) {
                this.coffeeBeans = coffeeBeans;
            }
    
            protected grindBeans(shots: number): void {
                console.log(`grinding beans for ${shots}`);
                if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
                    throw new Error("Not enough coffee beans!");
                }
                this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
            }
    
            protected preheat(): void {
                console.log("heating up!");
            }
    
            // abstract 메소드는 해당 클래스 내부에서 로직을 작성할 수 없음.
            // 자식클래스에서 메소드의 로직을 작성해주어야 함.
            protected abstract extract(shots: number): CoffeeCup ;
    
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

        class CaffeLatterMachine extends CoffeeMachine {
            constructor(coffeeBeans: number, public serialNumber: string) {
                super(coffeeBeans);
            }

            private steamMilk(): void {
                console.log("Steaming some milk!");
            }

            protected extract(shots: number): CoffeeCup {
                this.steamMilk();
                return {
                    shots, 
                    hasMilk: true
                };
            }
        }

        class SweetCoffeeMaker extends CoffeeMachine {
            constructor(coffeeBeans: number) {
                super(coffeeBeans);
            }

            protected extract(shots: number): CoffeeCup {
                return {
                    shots,
                    hasSugar: true
                };
            }
        }

        const sweetCoffee = new SweetCoffeeMaker(20);
        console.log(sweetCoffee.makeCoffee(2));

        const machines: CoffeeMaker[] = [
            // new CoffeeMachine(16), // 추상 클래스이기 때문에 인스턴스 직접 만들기 불가
            new CaffeLatterMachine(16, "1"),
            new SweetCoffeeMaker(16),
            // new CoffeeMachine(16), // 추상 클래스이기 때문에 인스턴스 직접 만들기 불가
            new CaffeLatterMachine(16, "1"),
            new SweetCoffeeMaker(16)
        ];

        machines.forEach(machine => {
            console.log("---------------");
            console.log(machine.makeCoffee(1));
        })
    }
}