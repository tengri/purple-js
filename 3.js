import assert from "assert";

const isAbove14age = (birthday) => {
    if (!/^\d{4}\.\d{2}\.\d{2}$/.test(birthday)) {
        throw new Error("Invalid birthday");
    }

    const birthDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age > 14;
};

assert.equal(isAbove14age('2000.01.01'), true);
assert.equal(isAbove14age('2020.01.01'), false);
assert.equal(isAbove14age('2010.01.01'), true);

// check input validaiton
// assert.equal(isAbove14age('2010'), true);