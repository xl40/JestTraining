const math = require('./math.js')
const {add, minus, multi} = math;

test('aaa',()=>{
    expect(add(3, 7))
        .toBe(10);
})
