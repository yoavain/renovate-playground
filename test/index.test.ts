import { returnOne } from "../src";

describe("Test index", () => {
    describe("Test return1", () => {
        it("should return 1", () => {
            expect(returnOne()).toBe(1);
        });
    });
});