{
    // Union Types: OR  ** 중요 **
    type Direction = "left" | "right" | "up" | "down";
    function move(direction: Direction) {
        console.log(direction);
    }
    move("left");

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // Example
    type SucessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }
    type LoginState = SucessState | FailState;

    function login(id:string, password:string): LoginState {
        return {
            response: {
                body: 'logged in'
            }
        }
    }

    // printLoginState
    function printLoginState(state: LoginState): void {
        if ('response' in state) {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}