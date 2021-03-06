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

        // ????????? ?????? ????????? ????????? ?????? ??????????????? ????????? ????????? ????????? ???????????? ???????????? ????????? ???????????? ????????????.
        class CaffeLatterMachine extends CoffeeMachine {
            constructor(coffeeBeans: number, public serialNumber: string) {
                // ????????????????????? ??????????????? ???????????? ???????????? ????????? ????????? ???????????? ????????????.
                super(coffeeBeans); // ?????????????????? ??????????????? ??????????????? ????????? ?????????.
            }

            // JS????????? ???????????? ???????????? ?????? ????????? TS????????? ?????????????????? ????????? ????????? ?????? ?????????????????? ???. ???????????? ?????? ??????.
            // serialNumber: string;

            // constructor(coffeeBeans: number, serialNumber: string) {
            //     super(coffeeBeans);
            //     this.serialNumber = serialNumber;
            // }

            private steamMilk(): void {
                console.log("Steaming some milk!");
            }

            makeCoffee(shots: number): CoffeeCup {
                // ????????? makeCoffee?????????
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