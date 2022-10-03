import {
    fetchData,
    fetchWithOutCB,
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
    return fetchWithOutCB().then((res) => {
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
