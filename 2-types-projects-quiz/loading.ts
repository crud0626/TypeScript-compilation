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
        console.log("π loading...");
        break;
      case "success":
        console.log("π loaded");
        break;
      case "fail":
        console.log("π± no network");
        break;
      default:
        throw Error (`Unknown state: ${stateObj.state}`); // μλ¬ λ°μμ½λ
        // throw Error (`Unknown state: ${stateObj["state"]}`); // μ μ μΆλ ₯
    }
  };

  printLoginState({ state: 'loading' }); // π loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // π loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // π± no network
}
