{
    type NetworkError = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };

    type SuccessState = {
        result: "success"
    };

    type ResultState = SuccessState | NetworkError;

    class NetworkClient {
        tryConnect(): ResultState {
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
            try{
                this.userService.login();
            } catch(err) {
                // Show dialog to user
            } finally {
                console.log(`login is over!`);
            }
        }
    }
    
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    
    app.run();
}