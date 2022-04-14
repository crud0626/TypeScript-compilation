// JS의 this는 다른 프로그래밍 언어들과는 다르게 함수 호출시에 this가 결정된다.
{
    console.log(this); // 전역객체

    function simpleFunc() {
        console.log(this);
    }
    
    simpleFunc(); // 전역객체
    
    console.clear();
    
    class Counter {
        count = 0;
        // increase = function() {
        //     console.log(this);
        // }
        // Arrow function으로 메소드를 선언함으로써 this를 Counter로 유지한다.
        increase = () => {
            console.log(this);
        }
    }
    
    const counter = new Counter(); // Counter 클래스
    counter.increase();
    const caller = counter.increase; // 객체가 아니므로 undefined가 출력된다.
    // 메소드가 일반 함수형태일경우 this를 잃어버리게 되므로 별도로 bind메소드를 통해 바인딩 대상 객체를 설정해주어야 한다.
    // const caller = counter.increase.bind(counter);
    caller();
    // 함수는 기본적으로 선언시 전역객체에 등록되지만
    // 변수는 this객체에 등록되지 않는다.
    // 다만, var은 윈도우 객체의 속성으로 등록된다.
    
    class Bob{}
    const bob = new Bob();
    bob.run = counter.increase;
    bob.run();    
}