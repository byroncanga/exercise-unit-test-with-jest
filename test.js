const {sum} = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.07 dollars", () =>{  
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

const {fromDollarToYen} = require('./app.js');
test("Un dollar 156.5 yen",() =>{
    expect(fromDollarToYen(2)).toBe(313);
})

const{fromYenToPound} = require('./app.js');
test("un yen 0.87 pounds", () => {
    expect(fromYenToPound(10)).toBe(8.7);
})