// Self
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMachine {
        protected BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        private grindBeans(shots: number): void {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
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

    class twoCoffeeMachine extends CoffeeMachine {
        protected BEANS_GRAMM_PER_SHOT: number = 14;
        constructor(coffeeBeans: number) {
            super(coffeeBeans);
        }
    }

    class threeCoffeeMachine extends CoffeeMachine {
        protected BEANS_GRAMM_PER_SHOT: number = 21;
        constructor(coffeeBeans: number) {
            super(coffeeBeans);
        }
    }

    const a = new twoCoffeeMachine(21);
    const b = new threeCoffeeMachine(21);
    console.log(a);
    console.log(b);
}

// Lecture
{
    {
        type CoffeeCup = {
            shots: number;
            hasMilk: boolean;
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

        // 상속을 통해 부모의 기능을 모두 가져오면서 추가나 수정이 필요한 일부분만 변경하여 새로운 클래스를 생성한다.
        class CaffeLatterMachine extends CoffeeMachine {
            constructor(coffeeBeans: number, public serialNumber: string) {
                // 자식클래스에서 추가적으로 생성자로 받아와야 하는게 있다면 아래처럼 사용한다.
                super(coffeeBeans); // 부모클래스의 생성자에서 필요로하는 인자를 보내줌.
            }

            // JS에서는 아래처럼 작성해도 문제 없지만 TS에서는 부모클래스와 똑같이 타입을 미리 정의해주어야 함. 안그러면 에러 발생.
            // serialNumber: string;

            // constructor(coffeeBeans: number, serialNumber: string) {
            //     super(coffeeBeans);
            //     this.serialNumber = serialNumber;
            // }

            private steamMilk(): void {
                console.log("Steaming some milk!");
            }

            makeCoffee(shots: number): CoffeeCup {
                // 부모의 makeCoffee메소드
                const coffee = super.makeCoffee(shots);
                this.steamMilk();
                return {
                    ...coffee, 
                    hasMilk: true
                };
            }
        }

        const americano = new CoffeeMachine(20);
        const latte = new CaffeLatterMachine(20, "aabb");

        console.log(latte);

        console.log(americano.makeCoffee(2));
        console.log(latte.makeCoffee(2));
    }
}