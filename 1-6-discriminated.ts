{
    // Discriminated, 동일한 키를 객체타입에 지정하는 방법.
    // 직관적이고 읽기에도 좋음.
    type SucessState = {
        result: "success",
        response: {
            body: string;
        }
    }
    type FailState = {
        result: "fail",
        reason: string;
    }
    type LoginState = SucessState | FailState;

    function login(id:string, password:string): LoginState {
        return {
            result: "success",
            response: {
                body: 'logged in'
            }
        }
    }

    function printLoginState(state: LoginState): void {
        if (state.result === "success") {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}