import {
    fetchData,
    fetch,
    fetch404
} from "./fetchData";

test('fetchData return { success:true }', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done()
    });
})

test('without cb', () => {
    return fetch().then((res) => {
        expect(res.data).toEqual({
            success: true
        });
    });
});

test('should return 404 without cb', () => {
    expect.assertions(1);
    return fetch404().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    });
});

test('should return promise', () => {
    return expect(fetch()).resolves.toMatchObject({
        data:{
            success: true,
        }
    })
});

test('should return promise with rejects', () => {
    return expect(fetch404()).rejects.toThrow();
});

test('should return promise', async () => {
    await expect(fetch()).resolves.toMatchObject({
        data: {
            success: true,
        }
    })
});

test('should return promise with rejects', async () => {
    await expect(fetch404()).rejects.toThrow();
});
