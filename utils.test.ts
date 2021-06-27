const utils = require('./utils');

var data:Array<number>;
var isEvenAnswer: Array<boolean>;
var isOddAnswer: Array<boolean>;

beforeEach(() => {
    data = [1,2,9,4,23,76]
    isEvenAnswer = [false,true,false,true,false,true]
    isOddAnswer = [true,false,true,false,true,false]
});

afterEach(() => {
    data = []
    isEvenAnswer = []
    isOddAnswer = []
})
test("isEven function",() => {
    data.forEach((n,index)=> {
        expect(utils.isEven(n)).toEqual(isEvenAnswer[index])
    })
})

test("isOdd function",() => {
    data.forEach((n,index)=> {
        expect(utils.isOdd(n)).toEqual(isOddAnswer[index])
    })
})

describe("Test Even Function",() => {
    it("Should be true",() => {
        let num = 120
        expect(utils.isEven(num)).toBeTruthy()
    })
    it("Should be false", () => {
        let num = 99
        expect(utils.isEven(num)).toBeFalsy() 
    })
})

describe("Test Odd Function",() => {
    it("Should be true",() => {
        let num = 55
        expect(utils.isOdd(num)).toBeTruthy()
    })
    it("Should be false", () => {
        let num = 128
        expect(utils.isOdd(num)).toBeFalsy() 
    })
})