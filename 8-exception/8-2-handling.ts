class NetworkClient {
    tryConnect(): void {
        throw new Error("No network!");
    }
}

class UserService {
    constructor(private client: NetworkClient) {}

    login() {
        this.client.tryConnect();
    }
}

class App {
    constructor(private userService: UserService) {}

    run() {
        // try-catch문을 어디에 놓을건지는 초기, 말단 함수가 중요한게 아니다.
        // 실질적으로 에러 발생시 컨트롤해야하는 부분에서 try-catch문을 넣어주는게 좋다.
        // 만약 이 예제에서 UserService클래스ㅔ서 catch를 하게되면 이 run함수는 에러 발생시 실행 후 어떠한 정보도 얻지 못한다.
        try{
            this.userService.login();
        } catch(err) {
            // catch의 에러는 any타입으로 instanceof와 같은 메소드를 적용할 수 없어 타입을 기준으로 에러 핸들링 할 수 없다.
            // Show dialog to user!
        } finally {
            console.log(`login is over!`);
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);

app.run();