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


});
