import { Time, TimeInterface } from '../../src/components/lib'

describe("Time class Unit Test", () => {
    describe("Testing isValidFormat...", () => {
        it("Throw error when pasing invalid time format type", () => {
            expect(() => { Time.isValidFormat("00:00", 'any') })
                .throw("Invalid format type [any]")
            ;
        });

        it("Return False with invalid time format", () => {
            expect(Time.isValidFormat("00:00", TimeInterface.FORMAT_12))
                .to.be.false
            ;
            expect(Time.isValidFormat("13:00", TimeInterface.FORMAT_12))
                .to.be.false
            ;

            expect(Time.isValidFormat("12:60", TimeInterface.FORMAT_12))
                .to.be.false
            ;

            expect(Time.isValidFormat("24:00", TimeInterface.FORMAT_24))
                .to.be.false
            ;

            expect(Time.isValidFormat("20:60", TimeInterface.FORMAT_24))
                .to.be.false
            ;
        });

        it("Return True with valid time format", () => {
            expect(Time.isValidFormat("12:00 am", TimeInterface.FORMAT_12))
                .to.be.true
            ;

            expect(Time.isValidFormat("12:59 PM", TimeInterface.FORMAT_12))
                .to.be.true
            ;

            expect(Time.isValidFormat("00:00", TimeInterface.FORMAT_24))
                .to.be.true
            ;

            expect(Time.isValidFormat("20:50", TimeInterface.FORMAT_24))
                .to.be.true
            ;
        })
    })
})
