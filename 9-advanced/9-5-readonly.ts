{
    type ToDO = {
        title: string;
        description: string;
    }

    // TS에 기본적으로 정의되어있어서 앞에 map파일 처럼 직접 정의하지 않아도 된다.
    function display(todo: Readonly<ToDO>) {
        // todo.title = "jo"; // 불가능
    }
}