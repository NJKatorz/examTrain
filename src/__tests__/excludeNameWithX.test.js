const excludeNameWithX = require("../excludeNameWithX");

describe("excludeNameWithX tests suites", () => {
    it("should return a message if the table is empty", () => {
        const result = excludeNameWithX([]);
        expect(result).toEqual([]);
    });

    it("should return the table with all names without the letter 'X'", () => {
        const result = excludeNameWithX(["Momo", "Hadji", "Leo"]);
        expect(result).toEqual(["Momo", "Hadji", "Leo"]);
    });

    it("should return the table without the names with the letter 'X'", () => {
        const result = excludeNameWithX(["DMX", "Xzibit", "JeanKevin"]);
        expect(result).toEqual(["JeanKevin"]);
    });

    it("should return the table without the names with the letter 'X' even in lowercase", () => {
        const result = excludeNameWithX(["JC", "Leo", "xena"]);
        expect(result).toEqual(["JC", "Leo"]);
    });
});
