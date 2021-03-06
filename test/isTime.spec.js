const { expect } = require("chai");

const isTime = require("../source/index.js");
const { valid, invalid } = require("./times.json");

describe("isTime", function() {

    describe("when checking valid times", function() {
        valid.forEach(function(time) {
            it(`recognises '${time}' as valid`, function() {
                expect(isTime(time)).to.be.true;
            });
        });
    });

    describe("when checking invalid times", function() {
        invalid.forEach(function(time) {
            it(`recognises '${time}' as invalid`, function() {
                expect(isTime(time)).to.be.false;
            });
        });
    });

});
