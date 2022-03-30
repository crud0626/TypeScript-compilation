{
        type CoffeeCup = {
            shots: number;
            hasMilk: boolean;
            hasSugar?: boolean;
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

        class NoMilk implements MilkFrother {
            makeMilk(cup: CoffeeCup): CoffeeCup {
                return cup;
            }
        }

        class NoSugar implements SugarProvider {
            addSugar(cup: CoffeeCup): CoffeeCup {
                return cup;
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
    
            constructor(
                private coffeeBeans: number,
                private milk: MilkFrother,
                private sugar: SugarProvider) {
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
                const coffee = this.extract(shots);
                const sugarAdded = this.sugar.addSugar(coffee);
                return this.milk.makeMilk(sugarAdded);
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


        // Milk
        const cheapMilkMaker = new CheapMilkSteamer();
        const fancyMilkMaker = new FancyMilkSteamer();
        const coldMilkMaker = new ColdMilkSteamer();
        const noMilk = new NoMilk();
        const noSugar = new NoSugar();

        // Sugar
        const candySugar = new CandySugarMixer();
        const sugar = new SugarMixer();
        
        const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
        const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

        const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
        const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
        const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}