import { Number } from '../../src/components/lib'

describe("Number class Unit Test", () => {
    describe("Testing keyToNum...", () => {
        it("Throw error when pasing invalid key number", () => {
            expect(() => { Number.keyToNum('any') })
                .throw("Invalid key number [any]")
            ;
        });

        it("Convert validate key numbers", () => {
            [
                { key: 100, exp: -1},
                { key: 48, exp: 0},
                { key: 52, exp: 4},
                { key: 47, exp: -1},
                { key: 50, exp: 2},
                { key: 53, exp: 5},
                { key: 51, exp: 3},
                { key: 54, exp: 6},
                { key: 57, exp: 9},
                { key: 49, exp: 1},
                { key: 56, exp: 8},
                { key: 55, exp: 7},
            ].forEach((obj) => {
                expect(Number.keyToNum(obj.key), `Number invalid key convert [${obj.key}]`).to.be.equal(obj.exp);
            });
        });
    });
})
