import Counter from './Counter'

let counter;
beforeAll(()=>{
    console.log('Before All')
    counter = new Counter();
})

afterAll(()=>{});
beforeEach(()=>{})
afterEach(()=>{})

test('test addOne()', function () {
    // counter.addOne();
    // expect(counter.number).toBe(1);
});


test('test minusOne()', function () {
    // counter.minusOne();
    // expect(counter.number).toBe(0);
});

describe('group name', function () {

});
