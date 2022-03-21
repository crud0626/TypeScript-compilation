// Self
// {
//     const coffeeShot: number = 1;

//     function makeCoffee(shots: number): string {
//         let resultCoffee: number = 0;
//         for(let i: number = 0; i < shots; i++) {
//             resultCoffee += 1;
//         }
//         return `커피 ${resultCoffee}샷 나왔습니다.`;
//     }

//     console.log(makeCoffee(5));
// }

// Lecture
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 타입 추론이 있으므로 타입 생략 가능.
    const BEANS_GRAMM_PER_SHOT = 7;

    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error("Not enough coffee beans!");
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

        return {
            shots,
            hasMilk: false
        };
    }

    coffeeBeans = 3 * BEANS_GRAMM_PER_SHOT;
    const doubleShot = makeCoffee(2);
    console.log(doubleShot);
}