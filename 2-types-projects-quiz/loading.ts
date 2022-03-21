{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(stateObj: ResourceLoadState): void {
    switch(stateObj.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log("😃 loaded");
        break;
      case "fail":
        console.log("😱 no network");
        break;
      default:
        throw Error (`Unknown state: ${stateObj.state}`); // 에러 발생코드
        // throw Error (`Unknown state: ${stateObj["state"]}`); // 정상 출력
    }
  };

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
