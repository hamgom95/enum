const { describe, Try } = require('riteway');
const Enum = require("./index");

const Gender = Enum("male", "female", "not_known", "not_applicable");

describe("Enum()", async assert => {
    assert({
        given: "Zero variants",
        should: "throw TypeError",
        actual: Try(Enum).constructor,
        expected: TypeError,
    });

    assert({
        given: "Zero variants",
        should: "throw with message",
        actual: Try(Enum).message,
        expected: "No variants given",
    });

    assert({
        given: "Multiple variants",
        should: "have correct length",
        actual: Gender.length,
        expected: 4,
    });

    describe('#toString', async assert => {
        assert({
            given: "Enum variant",
            should: "return the variant name",
            actual: Gender.toString(Gender.male),
            expected: "male", 
        });
    });
    
});

