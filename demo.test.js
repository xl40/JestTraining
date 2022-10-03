import {runCallback, crateObject} from "./demo";

test('test runCallback', () => {
    const func = jest.fn();
    // func.mockReturnValueOnce('Alex')
    func.mockReturnValue("AEC")
    runCallback(func);
    runCallback(func);
    expect(func).toBeCalled()
    console.log(func.mock)
});


test.only('test crate object ', () => {

    const func = jest.fn()
    crateObject(func)
    console.log(func.mock)


})
