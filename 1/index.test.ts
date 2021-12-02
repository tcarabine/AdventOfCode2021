const {task1Algo, task2Algo} = require('./index');


describe("Task 1 solution" ,() => {
    it("given the example data from the site returns 7", () => {
        const input = [199,200,208,210,200,207,240,269,260,263];

        const result = task1Algo(input);

        expect(result).toEqual(7);
    });
});

describe("Task 2 solution" ,() => {
    it("given the example data from the site returns 5", () => {
        const input = [199,200,208,210,200,207,240,269,260,263];

        const result = task2Algo(input);

        expect(result).toEqual(5);
    });
});