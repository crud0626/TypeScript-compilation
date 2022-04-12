{
    type ToDo = {
        title: string;
        description: string;
        lable: string;
        priority: 'high' | 'low';
    }

    // Partial을 통해서 일부분만 변경할 수 있음.
    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {...todo, ...fieldsToUpdate};
    }
    const todo: ToDo = {
        title: 'learn typescript',
        description: 'study hard',
        lable: 'study',
        priority: 'high'
    }

    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
}