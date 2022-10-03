test('测试加法 3 + 7', () => {
    expect(10)
        .toBe(10);
})

test('测试对象内容相等', () => {
    const a = { one : 1}
    expect(a).toEqual({ one : 1});
})


test('toBeNull', () => {
    const a = null
    expect(a).toBeNull();
})

test('toBeUndefined', () => {
    const a = undefined
    expect(a).toBeUndefined();
})
