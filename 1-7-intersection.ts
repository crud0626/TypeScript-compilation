{
    // Intersection ( & ), and의 개념과 비슷하며 union type과 반대되는 개념
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWorker(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWorker({
        name: 'John',
        score: 1,
        employeeId: 123,
        work: () => {}
    });
}