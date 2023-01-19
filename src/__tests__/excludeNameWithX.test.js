const excludeNameWithX = require("../excludeNameWithX");

describe("excludeNameWithX tests suites", () => {
    it("should return a message if the table is empty", () => {
        const result = excludeNameWithX([]);
        expect(result).toEqual([]);
    });


});
