// Java의 경우 Exception이라는 클래스가 존재하지만
// JS, TS에는 이를 대신하는 Error클래스가 있다.
// {
//     type Direction = "up" | "down" | "left" | "right" | "he";

//     function move(direction: Direction): void {
//         switch(direction) {
//             case "up":
//                 position.y +=  1;
//                 break;
//             case "down":
//                 position.y -=  1;
//                 break;
//             case "left":
//                 position.x -=  1;
//                 break;
//             case "right":
//                 position.x +=  1;
//                 break;
//             // case "he":
//                 // position.x += 1;
//                 // break;
//             default:
//                 const invalid: never = direction; 
//                 // he라는 direction이 올 수 있는데 never로 처리해놓아서 he에 대한 case를 작성해주어야 에러가 사라진다.
//                 throw Error(`Unknown direction! : ${invalid}`); 
//                 // 에러 내용도 함께 넣어주어야 더 좋다.
//     }
// }

// Error(Exception) Handling : try -> catch -> finally
{
    function readFile(fileName: string): string {
        if(fileName === 'not exist') {
            throw new Error(`file name is not exist ! ${fileName}`);
            // 에러와 관련된 디테일 정보를 남겨주는게 좋다.
        }

        return "file contents!";
    }

    function closeFile(fileName: string) {
        // 
    }

    const fileName = 'file';

    try {
        console.log(readFile(fileName));
    } catch (err) {
        console.log(`Catched error! : ${err}`);
    } finally {
        // 에러 여부와 상관없이 항상 수행해야하는 작업.
        // 
        closeFile(fileName);
        console.log(`finally!`);
    }

    function run() {
        const fileName = "not exist";

        try {
            console.log(readFile(fileName));
        } catch {
            console.log(`catched !!`);
            return; // catch에서 에러 핸들링을 위해 return 할 경우 아래 코드가 실행되지 않음.
        }
        // 위 return으로 인해 아래 코드가 읽히지 않음.
        // 따라서 가급적이면 finally를 작성해주는게 좋다.
        closeFile(fileName);
        console.log("closed!");
    }
    run();
}

// 또한 에러 핸들링을 위해 try문의 크기를 너무 키우는거보다 에러가 발생할 수 있는 부분만 try-catch문으로 감싸주는게 좋다.
