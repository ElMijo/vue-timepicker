import { Time, TimeInterface } from '../../src/components/lib'

describe("Time class Unit Test", () => {
    describe("Testing isValidFormat...", () => {
        it("Throw error when pasing invalid time format type", () => {
            expect(() => { Time.isValidFormat("00:00", 'any') })
                .throw("Invalid format type [any]")
            ;
        });

        it("Return False with invalid time format", () => {
            expect(Time.isValidFormat("00:00", TimeInterface.FORMAT_12)).to.be.false;
            expect(Time.isValidFormat("13:00", TimeInterface.FORMAT_12)).to.be.false;
            expect(Time.isValidFormat("12:60", TimeInterface.FORMAT_12)).to.be.false;
            expect(Time.isValidFormat("24:00", TimeInterface.FORMAT_24)).to.be.false;
            expect(Time.isValidFormat("20:60", TimeInterface.FORMAT_24)).to.be.false;
            expect(Time.isValidFormat("12:00 am", TimeInterface.FORMAT_24)).to.be.false;
        });

        it("Return True with valid time format", () => {
            expect(Time.isValidFormat("12:00 am", TimeInterface.FORMAT_12)).to.be.true;
            expect(Time.isValidFormat("12:59 PM", TimeInterface.FORMAT_12)).to.be.true;
            expect(Time.isValidFormat("00:00", TimeInterface.FORMAT_24)).to.be.true;
            expect(Time.isValidFormat("20:50", TimeInterface.FORMAT_24)).to.be.true;
        });
    });

    describe("Testing parseTime...", () => {
        it("Throw error when pasing invalid time format", () => {
            expect(() => { Time.parseTime("any") })
                .throw("Invalid time format [any]")
            ;
        });

        it("Parse success with format 12 hours", () => {
            expect(Time.parseTime('01:45 AM'))
                .to.be.an('array')
                .to.deep.equal([0, 1, 4, 5, 'AM'])
            ;

            expect(Time.parseTime('10:45 pm'))
                .to.be.an('array')
                .to.deep.equal([1, 0, 4, 5, 'PM'])
            ;
        });

        it("Parse success with format 24 hours", () => {
            expect(Time.parseTime('01:45'))
                .to.be.an('array')
                .to.deep.equal([0, 1, 4, 5])
            ;

            expect(Time.parseTime('17:45'))
                .to.be.an('array')
                .to.deep.equal([1, 7, 4, 5])
            ;
        });
    });
})
