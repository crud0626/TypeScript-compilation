// 모듈화는 JS파일을 여러개로 쪼개는것으로 모듈화를 하지 않을 경우
// 하나의 파일이 거대해지고 해당 파일 내부에 있는 모든 코드들이 전역객체에 등록되기 때문에
// 충돌이나 예상하지 못한 동작을 유발할 수 있다.

// 모듈을 사용할 때는 html파일의 script태그에서 type='module'로 명시해주어야 하며
// 모듈이 필요한 곳과 작성된곳에서 각각 import, export를 통해 서로 주고받을 수 있는 환경을 만들어야 한다.

export default function add(a, b) {
    return a + b;
}

export const number = 10;

export function print() {
    return 'printing!';
}