import { runCallback} from "./demo";

test('test runCallback', () => {
    const func = jest.fn();
    runCallback(func);
    expect(func).toBeCalled()
});
