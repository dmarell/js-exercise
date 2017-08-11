const expect = require("chai").expect;
const MeanAggregator = require("../lib/mean-aggregator.js");

function printValues(name, values) {
    console.log("#### values in " + name);
    for (let i in values) {
        const value = values[i];
        console.log(value);
    }
    console.log("####");
}

describe("aggregateSamples", () => {
    describe("mean 2->2", function () {
        it("aggregateSamples no aggregation", function () {
          const samples = [
                {timestamp: new Date("2011-11-30T11:34:45Z"), value: 42},
                {timestamp: new Date("2011-11-30T12:34:45Z"), value: 44}
            ];
            result = MeanAggregator.aggregateSamples(samples, 2);

            expect(result.length).to.equal(2);
            expect(result[0].timestamp.toISOString()).to.equal(new Date("2011-11-30T11:34:45Z").toISOString());
            expect(result[0].value).to.equal(42);
            expect(result[1].timestamp.toISOString()).to.equal(new Date("2011-11-30T12:34:45Z").toISOString());
            expect(result[1].value).to.equal(44);
        });

        it("mean 4->2", () => {
          const samples = [
                {timestamp: new Date("2011-11-30T01:34:45Z"), value: 42},
                {timestamp: new Date("2011-11-30T02:34:45Z"), value: 44}, // push
                {timestamp: new Date("2011-11-30T03:34:45Z"), value: 46},
                {timestamp: new Date("2011-11-30T04:34:45Z"), value: 48}  // push
            ];
            result = MeanAggregator.aggregateSamples(samples, 2);

            // printValues("four-to-two", result);

            expect(result.length).to.equal(2);
            expect(result[0].timestamp.toISOString()).to.equal(new Date("2011-11-30T02:34:45Z").toISOString());
            expect(result[0].value).to.equal(43);
            expect(result[1].timestamp.toISOString()).to.equal(new Date("2011-11-30T04:34:45Z").toISOString());
            expect(result[1].value).to.equal(48);
        });

        it("mean 2->1", () => {
          const samples = [
                {timestamp: new Date("2011-11-30T11:34:45Z"), value: 42},
                {timestamp: new Date("2011-11-30T12:34:45Z"), value: 44}
            ];
            result = MeanAggregator.aggregateSamples(samples, 1);

            expect(result.length).to.equal(1);
            expect(result[0].timestamp.toISOString()).to.equal(new Date("2011-11-30T12:34:45Z").toISOString());
            expect(result[0].value).to.equal(44);
        });

    });

    // it("max 4->2", () => {
    //     const samples = [
    //         {timestamp: new Date("2011-11-30T01:34:45Z"), value: 42},
    //         {timestamp: new Date("2011-11-30T02:34:45Z"), value: 44}, // push
    //         {timestamp: new Date("2011-11-30T03:34:45Z"), value: 46},
    //         {timestamp: new Date("2011-11-30T04:34:45Z"), value: 48}  // push
    //     ];
    //     result = MaxAggregator.aggregateSamples(samples, 2);
    //
    //     // printValues("four-to-two", result);
    //
    //     expect(result.length).to.equal(2);
    //     expect(result[0].timestamp.toISOString()).to.equal(new Date("2011-11-30T02:34:45Z").toISOString());
    //     expect(result[0].value).to.equal(44);
    //     expect(result[1].timestamp.toISOString()).to.equal(new Date("2011-11-30T04:34:45Z").toISOString());
    //     expect(result[1].value).to.equal(48);
    // });


});