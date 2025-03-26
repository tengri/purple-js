import assert from "assert";

const validFormats = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"];

const dice = (format) => {
    if (!validFormats.includes(format)) {
        throw new Error("Invalid format");
    }

    const maxNumber = format.slice(1);

    return Math.ceil(Math.random() * maxNumber)
};


assert.equal(dice("d6") > 0, true);
assert.equal(dice("d6") < 7, true);


assert.equal(dice("d20") > 0, true);
assert.equal(dice("d20") < 21, true);

// check format validaiton
// assert.equal(dice("d100") > 0, true);
// assert.equal(dice("d100") < 101, true);
