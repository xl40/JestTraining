import {runCallback, crateObject, getData} from "./demo";
import axios from "axios";

jest.mock('axios');

test('test runCallback', () => {
    const func = jest.fn();
    // func.mockReturnValueOnce('Alex')
    func.mockReturnValue("AEC")
    runCallback(func);
    runCallback(func);
    expect(func).toBeCalled()
    console.log(func.mock)
});


test('test crate object ', () => {

    const func = jest.fn()
    crateObject(func)
    console.log(func.mock)
})

test.only('test get data', async () => {
    //只测发送了和发送的内容
    axios.get.mockResolvedValueOnce({data: 'hello'})
    await getData().then((data) => {
        expect(data).toBe('hello')
    });
});
