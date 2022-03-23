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

        interface MilkFrother {
            makeMilk(cup: CoffeeCup): CoffeeCup;
        }

        interface SugarProvider {
            addSugar(cup: CoffeeCup): CoffeeCup;
        }

        // 싸구려 우유 거품기
        class CheapMilkSteamer implements MilkFrother {
            private steamMilk(): void {
                console.log("Steaming some milk..");
            }

            makeMilk(cup: CoffeeCup): CoffeeCup {
                this.steamMilk();
                return {
                    ...cup,
                    hasMilk: true
                }
            }
        }

        class FancyMilkSteamer implements MilkFrother {
            private steamMilk(): void {
                console.log("Fancy steaming some milk..");
            }

            makeMilk(cup: CoffeeCup): CoffeeCup {
                this.steamMilk();
                return {
                    ...cup,
                    hasMilk: true
                }
            }
        }

        class ColdMilkSteamer implements MilkFrother {
            private steamMilk(): void {
                console.log("Cold steaming some milk..");
            }

            makeMilk(cup: CoffeeCup): CoffeeCup {
                this.steamMilk();
                return {
                    ...cup,
                    hasMilk: true
                }
            }
        }

        // 설탕 제조기
        class CandySugarMixer implements SugarProvider {
            private getSugar() {
                console.log('Getting some sugar from candy');
                return true;
            }

            addSugar(cup: CoffeeCup): CoffeeCup {
                const sugar = this.getSugar();

                return {
                    ...cup,
                    hasSugar: sugar
                };
            }
        }

        class SugarMixer implements SugarProvider {
            private getSugar() {
                console.log('Getting some sugar from jar!');
                return true;
            }

            addSugar(cup: CoffeeCup): CoffeeCup {
                const sugar = this.getSugar();

                return {
                    ...cup,
                    hasSugar: sugar
                };
            }
        }
    
        class CoffeeMachine implements CoffeeMaker{
            protected BEANS_GRAMM_PER_SHOT: number = 7;
            protected coffeeBeans: number;
    
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
            constructor(
                coffeeBeans: number,
                public readonly serialNumber: string,
                private milkFrother: MilkFrother
            ) {
                super(coffeeBeans);
            }

            // 외부에서 가져옴.
            // private steamMilk(): void {
            //     console.log("Steaming some milk!");
            // }

            makeCoffee(shots: number): CoffeeCup {
                const coffee = super.makeCoffee(shots);
                // this.steamMilk(); // 내부에서 steamMilk를 추가하지 않고 외부에서 만든 클래스를 가져온다.
                // return {
                //     ...coffee, 
                //     hasMilk: true
                // };
                // milkFrother가 coffee type을 return하므로 호출 후 리턴만 받으면됨.
                return this.milkFrother.makeMilk(coffee);
            }
        }

        class SweetCoffeeMaker extends CoffeeMachine {
            constructor(coffeeBeans: number, private sugar: SugarProvider) {
                super(coffeeBeans);
            }

            // 외부에서 가져옴.
            // getSugar() {
            //     console.log("Getting some sugar..");
            // }

            makeCoffee(shots: number): CoffeeCup {
                const coffee = super.makeCoffee(shots); // 부모클래스의 makeCoffee호출.
                // this.getSugar();
                // return {
                //     ...coffee,
                //     hasSugar: true
                // };
                // 여기서도 직접 return할 필요가 없음.
                return this.sugar.addSugar(coffee);
            }
        }

        class SweetCaffeLatteMachine extends CoffeeMachine {
            constructor(
                private coffeeBeans: number, 
                private sugar: SugarProvider, 
                private milkFrother: MilkFrother
            ) {
                super(coffeeBeans);
            }

            makeCoffee(shots: number): CoffeeCup {
                const coffee = super.makeCoffee(shots);
                const sugarCoffee = this.sugar.addSugar(coffee);
                const sugarMilkCoffee = this.milkFrother.makeMilk(sugarCoffee);
                return sugarMilkCoffee;
            }
        }

        // Milk
        const cheapMilkMaker = new CheapMilkSteamer();
        const fancyMilkMaker = new FancyMilkSteamer();
        const coldMilkMaker = new ColdMilkSteamer();

        // Sugar
        const candySugar = new CandySugarMixer();
        const sugar = new SugarMixer();
        
        const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
        const sweetMachine = new SweetCoffeeMaker(12, sugar);

        const latteMachine = new CaffeLatterMachine(12, "SS", cheapMilkMaker);
        const coldLatteMachine = new CaffeLatterMachine(12, "SS", coldMilkMaker);
        const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);
    }
}