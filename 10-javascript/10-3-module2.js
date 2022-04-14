// export가 default일 경우 이름은 import하는 측에서 마음대로 변경할 수 있다.
// default가 아니라면 중괄호를 사용해서 동일한 이름으로만 가져와야 한다.
import add, { print as printMessage} from './10-3-module1.js';

// default가 없을 때는 이런식으로 객체형태로도 받아올 수 있다.
// import * as calculator from './10-3-module1.js';
// calculator.add(1, 2);
// calculator.print();
// console.log(calculator.number);

console.log(add(1, 2));