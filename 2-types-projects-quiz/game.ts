type Direction = "up" | "down" | "left" | "right";
type Position = {
    x: number,
    y: number
}

const position: Position = {
    x: 0,
    y: 0
}; 

function move(direction: Direction): void {
    switch(direction) {
        case "up":
            position.y +=  1;
            break;
        case "down":
            position.y -=  1;
            break;
        case "left":
            position.x -=  1;
            break;
        case "right":
            position.x +=  1;
            break;
        default:
            throw Error(`Unknown direction! : ${direction}`); 
            // 에러 내용도 함께 넣어주어야 더 좋다.
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
