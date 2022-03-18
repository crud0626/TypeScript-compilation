{
    // Enum

    // JS에서 상수를 동시에 여러개 정의할 수 없어 객체 생성 후 freeze메소드를 이용하곤 한다.
    const DAYS_ENUM = Object.freeze({
        "MON": 0,
        "TUE": 1,
        "WED": 2
    });

    // TS ENUM, 클래스처럼 첫 글자만 대문자로 사용한다.
    // Enum에 값을 지정하지 않을 경우 자동으로 0 부터 시작한다.
    enum Days {
        // MON = 1 , 이렇게 지정하면 1부터시작되며 문자열도 가능하지만 문자열은 자동으로 안채워짐
        MON,
        TUE,
        WED,
        THU,
        FRI,
        SAT,
        SUN
    }
    console.log(Days.MON);
    let today: Days = Days.FRI;
    today = Days.SUN;
    console.log(today);

    // 다만, TS에서 Enum은 어느 숫자를 넣어도 값 할당이 가능하기 때문에 다른 언어에 비해 잘 사용되지 않는다.
    // 따라서 Enum은 타입이 정확하지 않으므로 차라리 union type을 사용하는게 더 낫다.
    type DaysOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" ;
    let dayOfWeek: DaysOfWeek = 'MON';
}