{
    {
        type CoffeeCup = {
            shots: number;
            hasMilk: boolean;
            hasSugar?: boolean; // Optional로 추가.
        }

        interface CoffeeMaker {
            makeCoffee(shots: number): CoffeeCup;
        }
    
        class CoffeeMachine implements CoffeeMaker{
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
    
            protected extract(shots: number): CoffeeCup {
                console.log(`Pulling ${shots}`);
                return {
                    shots,
                    hasMilk: false,
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

        class CaffeLatterMachine extends CoffeeMachine {
            constructor(coffeeBeans: number, public serialNumber: string) {
                super(coffeeBeans);
            }

            private steamMilk(): void {
                console.log("Steaming some milk!");
            }

            makeCoffee(shots: number): CoffeeCup {
                const coffee = super.makeCoffee(shots);
                this.steamMilk();
                return {
                    ...coffee, 
                    hasMilk: true
                };
            }
        }

        class SweetCoffeeMaker extends CoffeeMachine {
            constructor(coffeeBeans: number) {
                super(coffeeBeans);
            }

            makeCoffee(shots: number): CoffeeCup {
                const coffee = super.makeCoffee(shots); // 부모클래스의 makeCoffee호출.
                return {
                    ...coffee,
                    hasSugar: true
                };
            }
        }

        const sweetCoffee = new SweetCoffeeMaker(20);
        console.log(sweetCoffee.makeCoffee(2));

        // 다형성은 뿌리가 같기 때문에 여러 객체의 타입을 하나로 할 수도 있고 여러개의 클래스를 동시에 호출하기도 좋다.
        // 카페라떼머신, 스윗커피메이커 모두 커피메이커를 확장한 커피머신의 자식클래스이므로 타입을 CoffeeMaker로 정할 수 있다.
        const machines: CoffeeMaker[] = [
            new CoffeeMachine(16),
            new CaffeLatterMachine(16, "1"),
            new SweetCoffeeMaker(16),
            new CoffeeMachine(16),
            new CaffeLatterMachine(16, "1"),
            new SweetCoffeeMaker(16)
        ];

        // 여러개의 클래스이지만 하나의 배열로 모아 복합적으로 호출이 가능함.
        machines.forEach(machine => {
            console.log("---------------");
            console.log(machine.makeCoffee(1));
        })
    }
}