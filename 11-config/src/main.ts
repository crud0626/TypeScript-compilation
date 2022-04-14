// tsc --init 명령어를 통해 ts의 설정을 할 수 있다.
class Car {
    engine = 0;
    move() {
        const engine = this.engine + 1;
        console.log("engine!");
        
        console.log(engine);
    }
}

const car = new Car();
car.move();