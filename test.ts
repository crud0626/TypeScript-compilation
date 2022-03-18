function addNumbers(...numbers: Array<number>): number {
    return numbers.reduce((a, b) => a+ b);
}

console.log(addNumbers(1, 2, 3, 4));